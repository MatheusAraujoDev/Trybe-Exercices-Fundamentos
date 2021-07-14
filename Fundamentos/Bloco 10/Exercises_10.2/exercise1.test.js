const uppercase = require('./exercise1');

it('Testa o requisito 01', (done) => {
  uppercase('test', (str) => {
    expect(str).toBe('TEST');
    done();
  });
});