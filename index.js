//reducer logic for changing state in redux based apps..
const initialState = {
  angular: 0,
  react: 0,
  vue: 0
}//no votes when first opened..

export default (state =initialState, action) => {
  switch(action.type) {
    case 'VOTE_ANGULAR' :
      console.log("You have chosen Angular");//increase angular vote by 1
      return Object.assign({}, state, {angular:state.angular+1})
    case 'VOTE_REACT' :
      console.log("You have chosen React");
      return Object.assign({}, state, {react:state.react+1})
    case 'VOTE_VUE' :
      console.log("You have chosen Vue");
      return Object.assign({}, state, {vue:state.vue+1})
    default :
      return state //no change ...vote percent remains same
  }
}
