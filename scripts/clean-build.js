// 移除打包后dist的demos

const del = require('del');

del.sync(['./{dist}/**/demos']);
