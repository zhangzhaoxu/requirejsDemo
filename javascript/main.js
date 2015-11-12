require.config({
    baseUrl : './javascript',
    paths:{
        "jquery":"lib/jquery.min",
        "underscore":"lib/underscore",
        "math":"components/math"
    }
    //shim:{
    //    'underscore':{
    //        exports: '_'
    //    }
    //}
});

require(['underscore'], function () {
    _.each([1,2,3],alert);
});