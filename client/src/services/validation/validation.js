export function checkPasswordString(str) {
  let errors = 0
  let tooShortMessage = '', noDigitsMessage = '', noUppercaseMessage = '', noSymbolsMessage = ''
  if (str.length < 8) {
    errors += 1
    tooShortMessage = 'have more than 8 characters'
  }
    const hasDigit = /\d/;
    const hasUpperCase = /[A-Z]/;
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/

  if (!hasDigit.test(str)){
    errors += 1
    noDigitsMessage = 'have a digit'
  }

  if (!hasUpperCase.test(str)) {
    errors += 1
    noUppercaseMessage = 'have an uppercase letter'
  }

  if (!hasSymbol.test(str)) {
    errors += 1
    noSymbolsMessage = 'have a letter'
  } 
  
  return errors > 0 
    ? { status: true, helper: `Must ${tooShortMessage} ${noDigitsMessage} ${noUppercaseMessage} ${noSymbolsMessage}` }
    : { status: false, helper: ''}

}

export function checkEmailString(email) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  

  return emailPattern.test(email)
    ? { status: false, helper: '' }
    : { status: true, helper: 'Invalid E-mail format' }
}

export function checkUsername(username) {
  if (username.length <= 3) {
    return { status: true, helper: 'Must be more than 3 characters' }
  }
  return false
}

export function hasTrueValue(obj) {
    return Object.values(obj).some(value => value.status === true);
}