import styled from 'styled-components';

const CartDropdownMenuStyled = styled.div`
    margin: 0;
    padding: 0;
    border-radius: 15px;
    box-shadow: 0 26px 74px -30px hsl(219, 9%, 45%);
    position: absolute;
    right: 0;
    top: 6rem;
    background-color: hsl(0, 0%, 100%);
    width: 298px;
    @media (max-width: 841px) {
        z-index: 1;
        left: 0;
        right: 0;
        width: 90%;
        margin: 0 auto;
    }

    > .header {
        font-weight: 700;
        padding: 1.5rem;
        border-bottom: 1px solid hsl(220, 14%, 75%);
    }

    > .body {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.5rem;
        font-size: 13px;
        color: hsl(219, 9%, 45%);

        > .empty {
            font-weight: 700;
            text-align: center;
            padding: 2rem 0;
            width: 100%;
        }

        > .column {
            margin-right: 10px;
            > .product-amount {
                margin-top: 4px;
                > .product-total {
                    font-weight: 700;
                    color: hsl(220, 13%, 13%);
                }
            }
        }

        > .column:last-child  {
            margin-right: 0!important;
        }

        .product-image-thumb-1 {
            border-radius: 4px;
        }
    }

    > .footer {
        padding: 0 1.5rem 1.5rem 1.5rem;
        text-align: center;

        > button:focus,
        > button:active,
        > button:hover,
        > button {
            padding: 1rem;
            width: 100%;
            background-color: hsl(26, 100%, 55%);
            border: 1px solid hsl(26, 100%, 55%);
            outline: none !important;
            outline-color: hsl(26, 100%, 55%)!important;
            outline-width: none;
            cursor: pointer;
            border-radius: 10px;
            color: #fff;
            font-weight: 700;
        }
    }
`;

export default CartDropdownMenuStyled;