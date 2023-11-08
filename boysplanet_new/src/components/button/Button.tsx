import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const ButtonStyle = styled.div`
    padding: 15px 0;
    width: 100%;
    a {
        display: block;
        width: 100%;
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
`;

interface ButtonProps {
    text: string;
    url: string;
}

export const Button = ({ text, url }: ButtonProps) => {
    return (
        <ButtonStyle>
            <Link to={url}>{text}</Link>
        </ButtonStyle>
    );
};
