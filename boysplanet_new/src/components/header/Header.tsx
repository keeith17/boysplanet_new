import { Link } from "react-router-dom";
import Title from "@/assets/ittle.png";
import styled from "@emotion/styled";
import { IoMdRefresh } from "react-icons/io";

const HeaderStyle = styled.header`
    width: 100%;
    max-width: 720px;
    background: #322d59;
    padding: 15px 20px;
    display: flex;
    position: fixed;
    z-index: 2;
    .logo {
        display: flex;
        align-items: center;
        a {
            display: flex;
            color: #fff;
            font-size: 20px;
            img {
                width: 200px;
            }
        }
    }
    .reloading {
        margin: 0 0 0 auto;
        .reloading-wrap {
            cursor: pointer;
            font-size: 27px;
            display: flex;
        }
    }
    @media all and (max-width: 700px) {
        padding: 10px 10px;
    }
`;

export default function Header() {
    const onClickReload = () => {};
    return (
        <HeaderStyle>
            <div className="logo">
                <Link to="/">
                    <img
                        src={Title}
                        alt="Title"
                        max-width={200}
                        max-height={27}
                    />
                </Link>
            </div>
            <div className="reloading">
                <div className="reloading-wrap">
                    <IoMdRefresh onClick={onClickReload} />
                </div>
            </div>
        </HeaderStyle>
    );
}
