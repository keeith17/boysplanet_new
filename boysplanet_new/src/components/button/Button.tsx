import styled from "@emotion/styled";
import { Link } from "react-router-dom";

interface ButtonStyleProps {
    buttonWidth: string;
}
const ButtonStyle = styled.div<ButtonStyleProps>`
    padding: 15px 0;
    width: 100%;
    a {
        display: block;
        margin: 0 auto;
        width: ${(props) => props.buttonWidth};
        background: #322d59;
        color: #fff;
        font-size: 35px;
        text-align: center;
        padding: 20px 0;
        border-radius: 10px;
        transition: all 0.3s;
        &:hover {
            background: #6561897c;
        }
    }
    @media all and (max-width: 700px) {
        padding: 10px 0;
        a {
            font-size: 24px;
        }
    }
`;

interface ButtonProps {
    text: string;
    url: string;
    width: string;
}

export const Button = ({ text, url, width }: ButtonProps) => {
    return (
        <ButtonStyle buttonWidth={width}>
            <Link to={url}>{text}</Link>
        </ButtonStyle>
    );
};
