import './index.css';
import numeral from 'numeral';

const courceValue = numeral(1000).format('$0,0.00');
console.log(`Я заплачу ${courceValue}  за этот потрясающий курс`); //eslint-disable-line no-console
