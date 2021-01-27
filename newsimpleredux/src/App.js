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



function App(props) {
  return (
    <OuterDiv>
    <Number />
    <StyledDiv>
      <StyledButton onClick={() => {
        
      }} >add</StyledButton>
      <StyledButton>subtract</StyledButton>
      <StyledButton>reset</StyledButton>
    </StyledDiv>
    </OuterDiv>
  );
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}

export default connect(mapStateToProps)(App);
