const ValidationError = require('./validation-error');

// Your code here
class MaximumLengthExceededError extends ValidationError {
  constructor(maxLensubactualLen, ...params) {
    super(...params);

    // if(Error.captureStackTrace) {
    //   Error.captureStackTrace(this, MaximumLengthExceededError);
    // }

    this.name = 'MaximumLengthExceededError';
    maxLensubactualLen? this.message = `Maximum length exceeded by ${maxLensubactualLen}` : this.message = `Maximum length exceeded`;
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = MaximumLengthExceededError;
} catch {
  module.exports = null;
}
