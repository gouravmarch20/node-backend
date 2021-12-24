// extends : inherit Error Class in CustomError
// ERROR : a node js class --> pre defined

// constructor --> envoke during obj creation + taking arg that require to asign
// super -->in this object asing given arg,  this.code = code => replaced by super(message , code) 
class CustomError extends Error {
    constructor(message, code) {
      super(message);
      this.code = code;
    }
  }
  
  module.exports = CustomError;