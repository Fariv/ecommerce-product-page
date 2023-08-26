import { css, styled } from "styled-components";

export const ProductImageStyled = styled.div`
    background: url("${props => props.image}") no-repeat;
    background-size: cover;
    width: ${props => props.width};
    height: ${props => props.height};
    border-radius: ${props => props.isrounded ? "12px" : 0};
    cursor: pointer;
    &:focus > .transparent-layer,
    &:hover > .transparent-layer,
    &.active > .transparent-layer {
        background-color: rgba(255, 255, 255, 0.5);
        width: 100%;
        height: 100%;
        border-radius: ${props => props.isrounded ? "12px" : 0};
    }
    &.active {
        border: 3px solid hsl(26, 100%, 55%);
        border-radius: ${props => props.isrounded ? "12px" : 0};
    }
    @media (max-width: 841px) {
        width: 100%;
    }
`;

export const sharedIconStyle = css`
    background-color: hsl(0, 0%, 100%);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: absolute;
    top: calc(50% - 72px);
    cursor: pointer;
    > svg {
        stroke: hsl(0, 0%, 0%);
    }
    @media (max-width: 841px) {
        top: calc(50% - 25px);
    }
`;

export const LeftArrowStyled = styled.div`
    left: -25px;
    > svg {
        margin: 15px 17px;
    }
    ${sharedIconStyle}
    @media (max-width: 841px) {
        left: 1.5rem;
    }
`;

export const RightArrowStyled = styled.div`
    right: -27px;
    > svg {
        margin: 15px 19px;
    }
    ${sharedIconStyle}
    @media (max-width: 841px) {
        right: 1.5rem;
    }
`;