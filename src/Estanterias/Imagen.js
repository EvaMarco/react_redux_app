const initialState = {
  rotacion: 'right'
}

// esto es un reducer

export default (state = initialState, evento) => {
  switch (evento.type) {
    case 'incrementar':
      return {...state, rotacion: 'right'}
    case 'decrementar':
        return {...state, rotacion: 'left'}
    default:
      return state
  }
}