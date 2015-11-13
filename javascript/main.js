requirejs.config({
    baseUrl : 'javascript/lib',
    paths:{
        math:'../components/math',
        stringUtil:'../components/string',
        dateUtil:'../components/data',
        util:'../components/util',
        aplugin:'../components/aplugin',
        bplugin:'../components/bplugin'
    },
    shim:{
        dateUtil:{
            deps:[],
            exports: 'DateUtil'
        },
        stringUtil:{
            deps:[],
            exports:'StringUtil'
        },
        aplugin:{
            deps:["util"],
            exports: 'a'
        },
        bplugin:{
            deps:["util"],
            exports: 'b'
        }
    }
});
//DateUtil.toString();
requirejs(['jquery','math','stringUtil','dateUtil','aplugin','bplugin'], function (jquery,math,StringUtil,DateUtil,ap,bp) {
    console.log(DateUtil);
    DateUtil.toString();
    StringUtil.toUpperCase();
    ap.toString();
    bp.toString();
});