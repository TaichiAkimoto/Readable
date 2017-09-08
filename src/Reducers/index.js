import { combineReducers } from 'redux'
import { TEST1, TEST2 } from '../Actions'

function test1(state=0, action) {
  switch(action.type) {
    case TEST1:
      return {
        ...state,
        number: action.number
      }
    default:
      return state
  }
}

function test2(state="karin", action) {
  switch (action.type) {
    case TEST2:
      return {
        ...state,
        character: action.character
      }
    default:
      return state
  }
}

export default combineReducers({
  test1,
  test2
})
