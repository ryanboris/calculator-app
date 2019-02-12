export default function Reducer(state, action) {
  switch (action.type) {
    case 'add':
      return { display: state.display + action.payload }
    case 'subtract':
      return { display: state.display - action.payload }
    case 'multiply':
      return { display: state.display * action.payload }
    case 'divide':
      if (action.payload === 0) {
        throw new Error()
      } else {
        return { display: state.display / action.payload }
      }
    case 'updateDisplay':
      state.display = { display: action.payload }
      return state
    default:
      throw new Error()
  }
}
