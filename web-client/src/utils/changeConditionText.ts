const changeConditionText = (text: string) => {
  switch (text) {
    case 'used':
      return 'Usado'

    case 'new':
      return 'Nuevo'

    default:
      return 'Sin definir'
  }
}

export default changeConditionText
