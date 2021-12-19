// try catch  async-await  ||| async - await  with promise  promise
//  using promise + async await way 

module.exports = (func) => (req, res, next) =>
    Promise.resolve(func(req, res, next)).catch(next);
