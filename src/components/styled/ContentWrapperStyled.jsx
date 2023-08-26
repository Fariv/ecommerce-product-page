import { styled } from "styled-components";

const ContentWrapperStyled = styled.div`
    display: flex;
    padding-top: 5rem;
    padding-bottom: 1rem;
    min-height: 100vh;
    @media (max-width: 841px) {
        flex-direction: column;
    }
`;

export default ContentWrapperStyled;