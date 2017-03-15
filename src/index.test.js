import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Наш первый тест', () =>{
  it('должен пройти', ()=>{
    expect(true).to.equal(true);
  });
});

describe('index.html', () =>{
  it('Должно вывести Hello', (done) =>{
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    jsdom.env(index, function(err, window) {
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHtml).to.equal("Hello, world!");
      done();
      window.close();
    });
  });
});
