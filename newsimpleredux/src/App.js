import styled from 'styled-components';
import Number from './Number';
import { connect } from 'react-redux';

const OuterDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;`

const StyledDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 10px;`

const StyledButton = styled.button`
background-color: red;
height: 200px;
width: 200px;
margin: 10px; 
`



function App({addAction, subtractAction, resetAction}) {
  return (
    <OuterDiv>
    <Number />
    <StyledDiv>
      <StyledButton onClick={() => {
        addAction()
      }} >add</StyledButton>
      <StyledButton onClick={() => {
        subtractAction()
      }} >subtract</StyledButton>
      <StyledButton onClick={() => {
        resetAction()
      }} >reset</StyledButton>

    </StyledDiv>
    </OuterDiv>
  );
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addAction: () => dispatch({type: 'ADD', payload: 1 }), 
    subtractAction: () => dispatch({type: 'SUBTRACT', payload: 1 }), 
    resetAction: () => dispatch({type: 'RESET'}) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
