// 移除es和lib打包后的demo

const del = require('del');

del.sync(['./{es,lib}/**/demo/**']);
