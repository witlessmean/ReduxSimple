import styled from 'styled-components';

const StyledDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 100px;
background-color: yellow;
height: 100px;
width: 100px;
`



const Number = () => {
    return (
        <StyledDiv>
            0
        </StyledDiv >
    )
}

export default Number
