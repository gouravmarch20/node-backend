// try catch  async-await  || async - await  with promise  -->  using promise to handle async await  

//TODO: func can acess the req, res , next => LEXICAL SCOPING , WHY req , res next passed by CONTROLLERS ==> may be for catch block
module.exports = (func) => (req, res, next) =>
    Promise.resolve(func(req, res, next)).catch(next);

    // ? FIXME: TESTING PENDING

// TRADITIONAL WAY MORE SIMPPLIFY

// module.exports = function (func) {
    // ! func ==> real function passing by CONTROLLERS  --> to wrap code in promise
//     return function (req, res, next) {
    //         Promise.resolve(func(req, res, next)).catch(next);
    //     }
    // }