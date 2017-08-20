export default (state = {}, action ) => {
  switch (action.type) {
    case 'TEST':
      return {...state, works: true, awesome: true}
    break;
    default:
      return state
  }
}
