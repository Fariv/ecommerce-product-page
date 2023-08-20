import styled from 'styled-components';

const TopBarRightSideStyled = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    > div {
        padding: 0 0.65rem;
        margin: 0 0.65rem;
        > img {
            cursor: pointer;
        }
    }
`;

export default TopBarRightSideStyled;