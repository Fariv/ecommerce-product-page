import styled from 'styled-components';
import IconDeleteSvg from "../../assets/images/icon-delete.svg";

const IconDelete = styled.div`
    background: url(${IconDeleteSvg}) no-repeat;
    background-size: contain;
    width: 15px;
    height: 15px;
    cursor: pointer;
`;

export default IconDelete;