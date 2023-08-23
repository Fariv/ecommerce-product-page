import styled from 'styled-components';

const BackdropStyled = styled.div`
    display: ${props => props.show ? "block;" : "none"};
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: hsla(0, 0%, 0%, 75%);
`;

export default BackdropStyled;