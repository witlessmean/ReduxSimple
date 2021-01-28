import styled from 'styled-components';
import { connect } from 'react-redux';

const StyledDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 100px;
background-color: yellow;
height: 100px;
width: 100px;
`



const Number = (props) => {
    console.log(props)
    return (
        <StyledDiv>
            {props.numb}
        </StyledDiv >
    )
}

const mapStateToProps = (state) => {
  return { 
      numb: state.startingNumb
  }
}

export default connect(mapStateToProps)(Number)

//so how do I get the state number I want from the reducer file, which holds all my state? Giving the mapStateToProps function to connect, while the mapStateToProps function contains the state argument, gives me the global state I have created with redux. To get the state that I want, I will return an object, write a key, and asign to that key the state that I want to take from the state object in the reducer file. Note that the state object inside the reducer file is actually named initialState. However, we pass initialState as an argument into the reducer function as 'state', which is what the reducer function knows it as. Then we pass that same reducer into our store. The store contains our state. Therefore, to iterate through that store, we will use the name of the argument we passed into the reducer, known as 'state' in order to get our stateful pieces from it. 