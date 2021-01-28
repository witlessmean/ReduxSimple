
const initialState = {
    startingNumb: 0
}

const reducer = ( state = initialState, action) => {
  switch(action.type){
      case 'ADD':
        return {
            ...state,
            startingNumb: state.startingNumb + action.payload
        }
        case 'SUBTRACT':
            return{
                ...state,
                startingNumb: state.startingNumb - action.payload
            }
            case 'RESET':
                return {
                    ...state,
                    startingNumb: state.startingNumb - state.startingNumb
                }
           default: return state     
  }
}

export default reducer