(function() {var implementors = {};
implementors["numpy"] = [{"text":"impl&lt;'a, T, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"numpy/borrow/struct.PyReadonlyArray.html\" title=\"struct numpy::borrow::PyReadonlyArray\">PyReadonlyArray</a>&lt;'a, T, D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"numpy/trait.Element.html\" title=\"trait numpy::Element\">Element</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;D: <a class=\"trait\" href=\"https://docs.rs/ndarray/0.15/ndarray/dimension/dimension_trait/trait.Dimension.html\" title=\"trait ndarray::dimension::dimension_trait::Dimension\">Dimension</a>,&nbsp;</span>","synthetic":false,"types":["numpy::borrow::PyReadonlyArray"]},{"text":"impl&lt;'a, T, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"numpy/borrow/struct.PyReadwriteArray.html\" title=\"struct numpy::borrow::PyReadwriteArray\">PyReadwriteArray</a>&lt;'a, T, D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"numpy/trait.Element.html\" title=\"trait numpy::Element\">Element</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;D: <a class=\"trait\" href=\"https://docs.rs/ndarray/0.15/ndarray/dimension/dimension_trait/trait.Dimension.html\" title=\"trait ndarray::dimension::dimension_trait::Dimension\">Dimension</a>,&nbsp;</span>","synthetic":false,"types":["numpy::borrow::PyReadwriteArray"]},{"text":"impl&lt;'py, T, I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"numpy/npyiter/struct.NpySingleIter.html\" title=\"struct numpy::npyiter::NpySingleIter\">NpySingleIter</a>&lt;'py, T, I&gt;","synthetic":false,"types":["numpy::npyiter::NpySingleIter"]},{"text":"impl&lt;'py, T, S:&nbsp;<a class=\"trait\" href=\"numpy/npyiter/trait.MultiIterModeWithManyArrays.html\" title=\"trait numpy::npyiter::MultiIterModeWithManyArrays\">MultiIterModeWithManyArrays</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"numpy/npyiter/struct.NpyMultiIter.html\" title=\"struct numpy::npyiter::NpyMultiIter\">NpyMultiIter</a>&lt;'py, T, S&gt;","synthetic":false,"types":["numpy::npyiter::NpyMultiIter"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()