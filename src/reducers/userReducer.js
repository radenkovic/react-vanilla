export default (state = {works: true}, action ) => {
  switch (action.type) {
    case 'TEST':
      return {...state, works: true, awesome: true}
    break;
    default:
      return state
  }
}
