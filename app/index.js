// Importuje funkciu add zo súboru utils.js
import { add } from './utils';

const a = 1;
const b = 2;
const result = add(a, b);

console.log('result is:', result);

fetch('/dzejo', {
  method: 'get',
})
  .then(res => {
    return res.text();
  })
  .then(data => {
    console.log('dzejo', data);
  });
