use std::mem::size_of;

#[cfg(feature = "half")]
use half::f16;
use ndarray::{array, s, Array1, Dim};
use numpy::{
    dtype, get_array_module, pyarray, PyArray, PyArray1, PyArray2, PyArrayDescr, PyArrayDyn,
    ToPyArray,
};
use pyo3::{
    py_run, pyclass, pymethods,
    types::{IntoPyDict, PyDict, PyList},
    IntoPy, Py, PyAny, PyCell, PyResult, Python,
};

fn get_np_locals(py: Python) -> &PyDict {
    [("np", get_array_module(py).unwrap())].into_py_dict(py)
}

fn not_contiguous_array(py: Python) -> &PyArray1<i32> {
    py.eval(
        "np.array([1, 2, 3, 4], dtype='int32')[::2]",
        None,
        Some(get_np_locals(py)),
    )
    .unwrap()
    .downcast()
    .unwrap()
}

#[test]
fn new_c_order() {
    Python::with_gil(|py| {
        let dims = [3, 5];

        let arr = PyArray::<f64, _>::zeros(py, dims, false);

        assert!(arr.ndim() == 2);
        assert!(arr.dims() == dims);

        let size = size_of::<f64>() as isize;
        assert!(arr.strides() == [dims[1] as isize * size, size]);

        assert_eq!(arr.shape(), &dims);
        assert_eq!(arr.len(), 3 * 5);

        assert!(arr.is_contiguous());
        assert!(arr.is_c_contiguous());
        assert!(!arr.is_fortran_contiguous());
    });
}

#[test]
fn new_fortran_order() {
    Python::with_gil(|py| {
        let dims = [3, 5];

        let arr = PyArray::<f64, _>::zeros(py, dims, true);

        assert!(arr.ndim() == 2);
        assert!(arr.dims() == dims);

        let size = size_of::<f64>() as isize;
        assert!(arr.strides() == [size, dims[0] as isize * size]);

        assert_eq!(arr.shape(), &dims);
        assert_eq!(arr.len(), 3 * 5);

        assert!(arr.is_contiguous());
        assert!(!arr.is_c_contiguous());
        assert!(arr.is_fortran_contiguous());
    });
}

#[test]
fn tuple_as_dim() {
    Python::with_gil(|py| {
        let dims = (3, 5);

        let arr = PyArray::<f64, _>::zeros(py, dims, false);

        assert!(arr.ndim() == 2);
        assert!(arr.dims() == [3, 5]);
    });
}

#[test]
fn rank_zero_array_has_invalid_strides_dimensions() {
    Python::with_gil(|py| {
        let arr = PyArray::<f64, _>::zeros(py, (), false);

        assert_eq!(arr.ndim(), 0);
        assert_eq!(arr.strides(), &[]);
        assert_eq!(arr.shape(), &[]);

        assert_eq!(arr.len(), 1);
        assert!(!arr.is_empty());

        assert_eq!(arr.item(), 0.0);
    })
}

#[test]
fn zeros() {
    Python::with_gil(|py| {
        let dims = [3, 4];

        let arr = PyArray::<f64, _>::zeros(py, dims, false);

        assert!(arr.ndim() == 2);
        assert!(arr.dims() == dims);

        let size = size_of::<f64>() as isize;
        assert!(arr.strides() == [dims[1] as isize * size, size]);

        let arr = PyArray::<f64, _>::zeros(py, dims, true);

        assert!(arr.ndim() == 2);
        assert!(arr.dims() == dims);

        let size = size_of::<f64>() as isize;
        assert!(arr.strides() == [size, dims[0] as isize * size]);
    });
}

#[test]
fn arange() {
    Python::with_gil(|py| {
        let arr = PyArray::<f64, _>::arange(py, 0.0, 1.0, 0.1);

        assert_eq!(arr.ndim(), 1);
        assert_eq!(arr.dims(), Dim([10]));
    });
}

#[test]
fn as_array() {
    Python::with_gil(|py| {
        let pyarr = PyArray::<f64, _>::zeros(py, [3, 2, 4], false).readonly();
        let arr = pyarr.as_array();

        assert_eq!(pyarr.shape(), arr.shape());
        assert_eq!(
            pyarr
                .strides()
                .iter()
                .map(|x| x / size_of::<f64>() as isize)
                .collect::<Vec<_>>(),
            arr.strides()
        );

        let not_contiguous = not_contiguous_array(py).readonly();
        assert_eq!(not_contiguous.as_array(), array![1, 3]);
    });
}

#[test]
fn as_raw_array() {
    Python::with_gil(|py| {
        let not_contiguous = not_contiguous_array(py);

        let raw_array_view = not_contiguous.as_raw_array();
        assert_eq!(unsafe { raw_array_view.deref_into_view()[0] }, 1);

        let raw_array_view_mut = not_contiguous.as_raw_array_mut();
        assert_eq!(unsafe { raw_array_view_mut.deref_into_view_mut()[1] }, 3);
    });
}

#[test]
fn as_slice() {
    Python::with_gil(|py| {
        let arr = PyArray::<i32, _>::zeros(py, [3, 2, 4], false);
        assert_eq!(arr.readonly().as_slice().unwrap().len(), 3 * 2 * 4);

        let not_contiguous = not_contiguous_array(py);
        let err = not_contiguous.readonly().as_slice().unwrap_err();
        assert_eq!(err.to_string(), "The given array is not contiguous");
    });
}

#[test]
fn is_instance() {
    Python::with_gil(|py| {
        let arr = PyArray2::<f64>::zeros(py, [3, 5], false);

        assert!(arr.is_instance_of::<PyArray2<f64>>().unwrap());
        assert!(!arr.is_instance_of::<PyList>().unwrap());
    });
}

#[test]
fn from_vec2() {
    Python::with_gil(|py| {
        let pyarray = PyArray::from_vec2(py, &[vec![1, 2, 3], vec![4, 5, 6]]).unwrap();

        assert_eq!(pyarray.readonly().as_array(), array![[1, 2, 3], [4, 5, 6]]);
    });
}

#[test]
fn from_vec2_ragged() {
    Python::with_gil(|py| {
        let pyarray = PyArray::from_vec2(py, &[vec![1, 2, 3], vec![4, 5]]);

        let err = pyarray.unwrap_err();
        assert_eq!(err.to_string(), "invalid length: 2, but expected 3");
    });
}

#[test]
fn from_vec3() {
    Python::with_gil(|py| {
        let pyarray = PyArray::from_vec3(
            py,
            &[
                vec![vec![1, 2], vec![3, 4]],
                vec![vec![5, 6], vec![7, 8]],
                vec![vec![9, 10], vec![11, 12]],
            ],
        )
        .unwrap();

        assert_eq!(
            pyarray.readonly().as_array(),
            array![[[1, 2], [3, 4]], [[5, 6], [7, 8]], [[9, 10], [11, 12]]]
        );
    });
}

#[test]
fn from_vec3_ragged() {
    Python::with_gil(|py| {
        let pyarray = PyArray::from_vec3(
            py,
            &[
                vec![vec![1, 2], vec![3, 4]],
                vec![vec![5, 6], vec![7, 8]],
                vec![vec![9, 10], vec![11]],
            ],
        );

        let err = pyarray.unwrap_err();
        assert_eq!(err.to_string(), "invalid length: 1, but expected 2");

        let pyarray = PyArray::from_vec3(
            py,
            &[
                vec![vec![1, 2], vec![3, 4]],
                vec![vec![5, 6], vec![7, 8]],
                vec![vec![9, 10]],
            ],
        );

        let err = pyarray.unwrap_err();
        assert_eq!(err.to_string(), "invalid length: 1, but expected 2");
    });
}

#[test]
fn extract_as_fixed() {
    Python::with_gil(|py| {
        let locals = get_np_locals(py);
        let pyarray: &PyArray1<i32> = py
            .eval("np.array([1, 2, 3], dtype='int32')", Some(locals), None)
            .unwrap()
            .extract()
            .unwrap();

        assert_eq!(pyarray.readonly().as_array(), array![1, 2, 3]);
    });
}

#[test]
fn extract_as_dyn() {
    Python::with_gil(|py| {
        let locals = get_np_locals(py);
        let pyarray: &PyArrayDyn<i32> = py
            .eval(
                "np.array([[1, 2], [3, 4]], dtype='int32')",
                Some(locals),
                None,
            )
            .unwrap()
            .extract()
            .unwrap();

        assert_eq!(
            pyarray.readonly().as_array(),
            array![[1, 2], [3, 4]].into_dyn()
        );
    });
}

#[test]
fn extract_fail_by_check() {
    Python::with_gil(|py| {
        let locals = get_np_locals(py);
        let pyarray: PyResult<&PyArray2<i32>> =
            py.eval("[1, 2, 3]", Some(locals), None).unwrap().extract();

        let err = pyarray.unwrap_err();
        assert_eq!(
            err.to_string(),
            "TypeError: 'list' object cannot be converted to 'PyArray<T, D>'"
        );
    });
}

#[test]
fn extract_fail_by_dim() {
    Python::with_gil(|py| {
        let locals = get_np_locals(py);
        let pyarray: PyResult<&PyArray2<i32>> = py
            .eval("np.array([1, 2, 3], dtype='int32')", Some(locals), None)
            .unwrap()
            .extract();

        let err = pyarray.unwrap_err();
        assert_eq!(
            err.to_string(),
            "TypeError: dimensionality mismatch:\n from=1, to=2"
        );
    });
}

#[test]
fn extract_fail_by_dtype() {
    Python::with_gil(|py| {
        let locals = get_np_locals(py);
        let pyarray: PyResult<&PyArray1<i32>> = py
            .eval("np.array([1, 2, 3], dtype='float64')", Some(locals), None)
            .unwrap()
            .extract();

        let err = pyarray.unwrap_err();
        assert_eq!(
            err.to_string(),
            "TypeError: type mismatch:\n from=float64, to=int32"
        );
    });
}

#[test]
fn array_cast() {
    Python::with_gil(|py| {
        let arr_f64 = pyarray![py, [1.5, 2.5, 3.5], [1.5, 2.5, 3.5]];
        let arr_i32: &PyArray2<i32> = arr_f64.cast(false).unwrap();

        assert_eq!(arr_i32.readonly().as_array(), array![[1, 2, 3], [1, 2, 3]]);
    });
}

#[test]
fn handle_negative_strides() {
    Python::with_gil(|py| {
        let arr = array![[2, 3], [4, 5u32]];
        let pyarr = arr.to_pyarray(py);

        let neg_str_pyarr: &PyArray2<u32> = py
            .eval("a[::-1]", Some([("a", pyarr)].into_py_dict(py)), None)
            .unwrap()
            .downcast()
            .unwrap();

        assert_eq!(
            neg_str_pyarr.readonly().as_array(),
            arr.slice(s![..;-1, ..])
        );
    });
}

#[test]
fn dtype_via_python_attribute() {
    Python::with_gil(|py| {
        let arr = array![[2, 3], [4, 5u32]];
        let pyarr = arr.to_pyarray(py);

        let dt: &PyArrayDescr = py
            .eval("a.dtype", Some([("a", pyarr)].into_py_dict(py)), None)
            .unwrap()
            .downcast()
            .unwrap();

        assert!(dt.is_equiv_to(dtype::<u32>(py)));
    });
}

#[test]
fn borrow_from_array_works() {
    #[pyclass]
    struct Owner {
        array: Array1<f64>,
    }

    #[pymethods]
    impl Owner {
        #[getter]
        fn array(this: &PyCell<Self>) -> &PyArray1<f64> {
            let array = &this.borrow().array;

            unsafe { PyArray1::borrow_from_array(array, this) }
        }
    }

    let array = Python::with_gil(|py| {
        let owner = Py::new(
            py,
            Owner {
                array: Array1::linspace(0., 1., 10),
            },
        )
        .unwrap();

        owner.getattr(py, "array").unwrap()
    });

    Python::with_gil(|py| {
        py_run!(py, array, "assert array.shape == (10,)");
    });
}

#[test]
fn downcasting_works() {
    Python::with_gil(|py| {
        let ob: &PyAny = PyArray::from_slice(py, &[1_i32, 2, 3]);

        assert!(ob.downcast::<PyArray1<i32>>().is_ok());
    });
}

#[test]
fn downcasting_respects_element_type() {
    Python::with_gil(|py| {
        let ob: &PyAny = PyArray::from_slice(py, &[1_i32, 2, 3]);

        assert!(ob.downcast::<PyArray1<f64>>().is_err());
    });
}

#[test]
fn downcasting_respects_dimensionality() {
    Python::with_gil(|py| {
        let ob: &PyAny = PyArray::from_slice(py, &[1_i32, 2, 3]);

        assert!(ob.downcast::<PyArray2<i32>>().is_err());
    });
}

#[test]
fn into_py_works() {
    let arr: Py<PyArray1<_>> = Python::with_gil(|py| {
        let arr = PyArray::from_slice(py, &[1_i32, 2, 3]);

        arr.into_py(py)
    });

    Python::with_gil(|py| {
        let arr: &PyArray1<_> = arr.as_ref(py);

        assert_eq!(arr.readonly().as_slice().unwrap(), &[1, 2, 3]);
    });
}

#[test]
fn to_owned_works() {
    let arr: Py<PyArray1<_>> = Python::with_gil(|py| {
        let arr = PyArray::from_slice(py, &[1_i32, 2, 3]);

        arr.to_owned()
    });

    Python::with_gil(|py| {
        let arr: &PyArray1<_> = arr.as_ref(py);

        assert_eq!(arr.readonly().as_slice().unwrap(), &[1, 2, 3]);
    });
}

#[test]
fn copy_to_works() {
    Python::with_gil(|py| {
        let arr1 = PyArray::arange(py, 2.0, 5.0, 1.0);
        let arr2 = unsafe { PyArray::<i64, _>::new(py, [3], false) };

        arr1.copy_to(arr2).unwrap();

        assert_eq!(arr2.readonly().as_slice().unwrap(), &[2, 3, 4]);
    });
}

#[test]
fn get_works() {
    Python::with_gil(|py| {
        let array = pyarray![py, [[1, 2], [3, 4]], [[5, 6], [7, 8]], [[9, 10], [11, 12]]];

        unsafe {
            assert_eq!(array.get([0, 0, 0]), Some(&1));
            assert_eq!(array.get([2, 1, 1]), Some(&12));
            assert_eq!(array.get([0, 0, 2]), None);
            assert_eq!(array.get([0, 2, 0]), None);
            assert_eq!(array.get([3, 0, 0]), None);

            assert_eq!(*array.uget([1, 0, 0]), 5);
            assert_eq!(*array.uget_mut([0, 1, 0]), 3);
            assert_eq!(*array.uget_raw([0, 0, 1]), 2);
        }
    });
}

#[cfg(feature = "half")]
#[test]
fn half_works() {
    Python::with_gil(|py| {
        let np = py.eval("__import__('numpy')", None, None).unwrap();
        let locals = [("np", np)].into_py_dict(py);

        let array = py
            .eval(
                "np.array([[1, 2], [3, 4]], dtype='float16')",
                None,
                Some(locals),
            )
            .unwrap()
            .downcast::<PyArray2<f16>>()
            .unwrap();

        assert_eq!(
            array.readonly().as_array(),
            array![
                [f16::from_f32(1.0), f16::from_f32(2.0)],
                [f16::from_f32(3.0), f16::from_f32(4.0)]
            ]
        );

        array
            .readwrite()
            .as_array_mut()
            .map_inplace(|value| *value *= f16::from_f32(2.0));

        py_run!(
            py,
            array np,
            "np.testing.assert_array_almost_equal(array, np.array([[2, 4], [6, 8]], dtype='float16'))"
        );
    });
}
