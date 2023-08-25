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
`;

export const LeftArrowStyled = styled.div`
    left: -25px;
    > svg {
        margin: 15px 17px;
    }
    ${sharedIconStyle}
`;

export const RightArrowStyled = styled.div`
    right: -27px;
    > svg {
        margin: 15px 19px;
    }
    ${sharedIconStyle}
`;