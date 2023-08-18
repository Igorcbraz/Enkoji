const formatPhoneNumber = (phoneNumberString) => {
  if (!phoneNumberString) return ''

  return phoneNumberString.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, '($1) $2 $3-$4')
}

const formatCEP = (cepString) => {
  if (!cepString) return ''

  cepString = cepString.replace(/\D/g,'')
  cepString = cepString.replace(/(\d{5})(\d)/,'$1-$2')

  return cepString
}

export { formatPhoneNumber, formatCEP }
