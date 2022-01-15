(function() {var implementors = {};
implementors["numpy"] = [{"text":"impl&lt;T, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"numpy/array/struct.PyArray.html\" title=\"struct numpy::array::PyArray\">PyArray</a>&lt;T, D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;D: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["numpy::array::PyArray"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"numpy/struct.PyArrayDescr.html\" title=\"struct numpy::PyArrayDescr\">PyArrayDescr</a>","synthetic":true,"types":["numpy::dtype::PyArrayDescr"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"numpy/struct.DimensionalityError.html\" title=\"struct numpy::DimensionalityError\">DimensionalityError</a>","synthetic":true,"types":["numpy::error::DimensionalityError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"numpy/struct.TypeError.html\" title=\"struct numpy::TypeError\">TypeError</a>","synthetic":true,"types":["numpy::error::TypeError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"numpy/struct.FromVecError.html\" title=\"struct numpy::FromVecError\">FromVecError</a>","synthetic":true,"types":["numpy::error::FromVecError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"numpy/struct.NotContiguousError.html\" title=\"struct numpy::NotContiguousError\">NotContiguousError</a>","synthetic":true,"types":["numpy::error::NotContiguousError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"numpy/npyffi/array/struct.PyArrayAPI.html\" title=\"struct numpy::npyffi::array::PyArrayAPI\">PyArrayAPI</a>","synthetic":true,"types":["numpy::npyffi::array::PyArrayAPI"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"numpy/npyffi/array/enum.NpyTypes.html\" title=\"enum numpy::npyffi::array::NpyTypes\">NpyTypes</a>","synthetic":true,"types":["numpy::npyffi::array::NpyTypes"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"numpy/npyffi/objects/struct.PyArrayObject.html\" title=\"struct numpy::npyffi::objects::PyArrayObject\">PyArrayObject</a>","synthetic":true,"types":["numpy::npyffi::objects::PyArrayObject"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"numpy/npyffi/objects/struct.PyArray_Descr.html\" title=\"struct numpy::npyffi::objects::PyArray_Descr\">PyArray_Descr</a>","synthetic":true,"types":["numpy::npyffi::objects::PyArray_Descr"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"numpy/npyffi/objects/struct.PyArrray_ArrayDescr.html\" title=\"struct numpy::npyffi::objects::PyArrray_ArrayDescr\">PyArrray_ArrayDescr</a>","synthetic":true,"types":["numpy::npyffi::objects::PyArrray_ArrayDescr"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"numpy/npyffi/objects/struct.PyArray_ArrFuncs.html\" title=\"struct numpy::npyffi::objects::PyArray_ArrFuncs\">PyArray_ArrFuncs</a>","synthetic":true,"types":["numpy::npyffi::objects::PyArray_ArrFuncs"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"numpy/npyffi/objects/struct.PyArrayFlagsObject.html\" title=\"struct numpy::npyffi::objects::PyArrayFlagsObject\">PyArrayFlagsObject</a>","synthetic":true,"types":["numpy::npyffi::objects::PyArrayFlagsObject"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"numpy/npyffi/objects/struct.PyArray_Dims.html\" title=\"struct numpy::npyffi::objects::PyArray_Dims\">PyArray_Dims</a>","synthetic":true,"types":["numpy::npyffi::objects::PyArray_Dims"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"numpy/npyffi/objects/struct.PyArray_Chunk.html\" title=\"struct numpy::npyffi::objects::PyArray_Chunk\">PyArray_Chunk</a>","synthetic":true,"types":["numpy::npyffi::objects::PyArray_Chunk"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"numpy/npyffi/objects/struct.PyArrayInterface.html\" title=\"struct numpy::npyffi::objects::PyArrayInterface\">PyArrayInterface</a>","synthetic":true,"types":["numpy::npyffi::objects::PyArrayInterface"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"numpy/npyffi/objects/struct.PyUFuncObject.html\" title=\"struct numpy::npyffi::objects::PyUFuncObject\">PyUFuncObject</a>","synthetic":true,"types":["numpy::npyffi::objects::PyUFuncObject"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"numpy/npyffi/objects/struct.NpyIter.html\" title=\"struct numpy::npyffi::objects::NpyIter\">NpyIter</a>","synthetic":true,"types":["numpy::npyffi::objects::NpyIter"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"numpy/npyffi/objects/struct.PyArrayIterObject.html\" title=\"struct numpy::npyffi::objects::PyArrayIterObject\">PyArrayIterObject</a>","synthetic":true,"types":["numpy::npyffi::objects::PyArrayIterObject"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"numpy/npyffi/objects/struct.PyArrayMultiIterObject.html\" title=\"struct numpy::npyffi::objects::PyArrayMultiIterObject\">PyArrayMultiIterObject</a>","synthetic":true,"types":["numpy::npyffi::objects::PyArrayMultiIterObject"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"numpy/npyffi/objects/struct.PyArrayNeighborhoodIterObject.html\" title=\"struct numpy::npyffi::objects::PyArrayNeighborhoodIterObject\">PyArrayNeighborhoodIterObject</a>","synthetic":true,"types":["numpy::npyffi::objects::PyArrayNeighborhoodIterObject"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"numpy/npyffi/objects/struct.PyArrayMapIterObject.html\" title=\"struct numpy::npyffi::objects::PyArrayMapIterObject\">PyArrayMapIterObject</a>","synthetic":true,"types":["numpy::npyffi::objects::PyArrayMapIterObject"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"numpy/npyffi/objects/struct.NpyAuxData.html\" title=\"struct numpy::npyffi::objects::NpyAuxData\">NpyAuxData</a>","synthetic":true,"types":["numpy::npyffi::objects::NpyAuxData"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"numpy/npyffi/types/struct.npy_cdouble.html\" title=\"struct numpy::npyffi::types::npy_cdouble\">npy_cdouble</a>","synthetic":true,"types":["numpy::npyffi::types::npy_cdouble"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"numpy/npyffi/types/struct.npy_cfloat.html\" title=\"struct numpy::npyffi::types::npy_cfloat\">npy_cfloat</a>","synthetic":true,"types":["numpy::npyffi::types::npy_cfloat"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"numpy/npyffi/types/struct.npy_clongdouble.html\" title=\"struct numpy::npyffi::types::npy_clongdouble\">npy_clongdouble</a>","synthetic":true,"types":["numpy::npyffi::types::npy_clongdouble"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"numpy/npyffi/types/enum.NPY_ORDER.html\" title=\"enum numpy::npyffi::types::NPY_ORDER\">NPY_ORDER</a>","synthetic":true,"types":["numpy::npyffi::types::NPY_ORDER"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"numpy/npyffi/types/enum.NPY_SCALARKIND.html\" title=\"enum numpy::npyffi::types::NPY_SCALARKIND\">NPY_SCALARKIND</a>","synthetic":true,"types":["numpy::npyffi::types::NPY_SCALARKIND"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"numpy/npyffi/types/enum.NPY_SORTKIND.html\" title=\"enum numpy::npyffi::types::NPY_SORTKIND\">NPY_SORTKIND</a>","synthetic":true,"types":["numpy::npyffi::types::NPY_SORTKIND"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"numpy/npyffi/types/enum.NPY_SEARCHSIDE.html\" title=\"enum numpy::npyffi::types::NPY_SEARCHSIDE\">NPY_SEARCHSIDE</a>","synthetic":true,"types":["numpy::npyffi::types::NPY_SEARCHSIDE"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"numpy/npyffi/types/enum.NPY_DATETIMEUNIT.html\" title=\"enum numpy::npyffi::types::NPY_DATETIMEUNIT\">NPY_DATETIMEUNIT</a>","synthetic":true,"types":["numpy::npyffi::types::NPY_DATETIMEUNIT"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"numpy/npyffi/types/enum.NPY_TYPES.html\" title=\"enum numpy::npyffi::types::NPY_TYPES\">NPY_TYPES</a>","synthetic":true,"types":["numpy::npyffi::types::NPY_TYPES"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"numpy/npyffi/types/enum.NPY_SELECTKIND.html\" title=\"enum numpy::npyffi::types::NPY_SELECTKIND\">NPY_SELECTKIND</a>","synthetic":true,"types":["numpy::npyffi::types::NPY_SELECTKIND"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"numpy/npyffi/types/enum.NPY_CASTING.html\" title=\"enum numpy::npyffi::types::NPY_CASTING\">NPY_CASTING</a>","synthetic":true,"types":["numpy::npyffi::types::NPY_CASTING"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"numpy/npyffi/types/enum.NPY_CLIPMODE.html\" title=\"enum numpy::npyffi::types::NPY_CLIPMODE\">NPY_CLIPMODE</a>","synthetic":true,"types":["numpy::npyffi::types::NPY_CLIPMODE"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"numpy/npyffi/types/struct.npy_datetimestruct.html\" title=\"struct numpy::npyffi::types::npy_datetimestruct\">npy_datetimestruct</a>","synthetic":true,"types":["numpy::npyffi::types::npy_datetimestruct"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"numpy/npyffi/types/struct.npy_timedeltastruct.html\" title=\"struct numpy::npyffi::types::npy_timedeltastruct\">npy_timedeltastruct</a>","synthetic":true,"types":["numpy::npyffi::types::npy_timedeltastruct"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"numpy/npyffi/types/struct.npy_stride_sort_item.html\" title=\"struct numpy::npyffi::types::npy_stride_sort_item\">npy_stride_sort_item</a>","synthetic":true,"types":["numpy::npyffi::types::npy_stride_sort_item"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"numpy/npyffi/ufunc/struct.PyUFuncAPI.html\" title=\"struct numpy::npyffi::ufunc::PyUFuncAPI\">PyUFuncAPI</a>","synthetic":true,"types":["numpy::npyffi::ufunc::PyUFuncAPI"]},{"text":"impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"numpy/npyiter/struct.RO.html\" title=\"struct numpy::npyiter::RO\">RO</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["numpy::npyiter::itermode::RO"]},{"text":"impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"numpy/npyiter/struct.RW.html\" title=\"struct numpy::npyiter::RW\">RW</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["numpy::npyiter::itermode::RW"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"numpy/npyiter/enum.NpyIterFlag.html\" title=\"enum numpy::npyiter::NpyIterFlag\">NpyIterFlag</a>","synthetic":true,"types":["numpy::npyiter::NpyIterFlag"]},{"text":"impl&lt;'py, T, I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"numpy/npyiter/struct.NpySingleIterBuilder.html\" title=\"struct numpy::npyiter::NpySingleIterBuilder\">NpySingleIterBuilder</a>&lt;'py, T, I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["numpy::npyiter::NpySingleIterBuilder"]},{"text":"impl&lt;'py, T, I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"numpy/npyiter/struct.NpySingleIter.html\" title=\"struct numpy::npyiter::NpySingleIter\">NpySingleIter</a>&lt;'py, T, I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["numpy::npyiter::NpySingleIter"]},{"text":"impl&lt;'py, T, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"numpy/npyiter/struct.NpyMultiIterBuilder.html\" title=\"struct numpy::npyiter::NpyMultiIterBuilder\">NpyMultiIterBuilder</a>&lt;'py, T, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["numpy::npyiter::NpyMultiIterBuilder"]},{"text":"impl&lt;'py, T, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"numpy/npyiter/struct.NpyMultiIter.html\" title=\"struct numpy::npyiter::NpyMultiIter\">NpyMultiIter</a>&lt;'py, T, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["numpy::npyiter::NpyMultiIter"]},{"text":"impl&lt;'py, T, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"numpy/struct.PyReadonlyArray.html\" title=\"struct numpy::PyReadonlyArray\">PyReadonlyArray</a>&lt;'py, T, D&gt;","synthetic":true,"types":["numpy::readonly::PyReadonlyArray"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()