// import { x, y } from './script2';
//
// console.log("partial import", x, y)

// import nieco from './script2';
//
// console.log('default import', nieco);

import * as p from './script2';

console.log('pečko', p.x, p.y, p.default);

