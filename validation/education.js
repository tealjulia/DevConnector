const isEmpty = require ('./isempty');

module.exports = function validateEducationInput(data){
  let errors = {};

  if (isEmpty(data.school)) {
    errors.school = "School field is required";
  }

  if (isEmpty(data.degree)) {
    errors.school = "Degree field is required";
  }

  if (isEmpty(data.fieldofstudy)) {
    errors.fieldofstudy = "Field of study field is required";
  }

  if (isEmpty(data.from)) {
    errors.from = "From date field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};