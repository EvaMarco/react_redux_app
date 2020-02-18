const initialState = {
  arroz: 1
}

// esto es un reducer

export default (state = initialState, evento) => {
  switch (evento.type) {
    case 'incrementar':
      return {...state, arroz: state.arroz + 1}
    case 'decrementar':
        return {...state, arroz: state.arroz - 1}
    default:
      return state
  }
}