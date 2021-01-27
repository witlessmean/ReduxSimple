
const initialState = {
    whatever: 0
}

const reducer = ( state = initialState, action) => {
  switch(action.type){
      case 'ADD':
        return {

        }
        case 'SUBTRACT':
            return{

            }
            case 'RESET':
                return {

                }
           default: return state     
  }
}

export default reducer