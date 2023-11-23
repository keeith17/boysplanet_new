import { Link } from "react-router-dom";
import Title from "@/assets/ittle.png";
import styled from "@emotion/styled";
import { IoMdRefresh } from "react-icons/io";

const HeaderStyle = styled.header`
    width: 100%;
    max-width: 720px;
    background: #322d59;
    padding: 10px 20px;
    display: flex;
    position: fixed;
    z-index: 2;
    .logo {
        display: flex;
        align-items: center;
        a {
            display: block;
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
        }
    }
`;

export default function Header() {
    const onClickReload = () => {};
    return (
        <HeaderStyle>
            <div className="logo">
                <Link to="/">
                    <img src={Title} alt="Title" width={200} />
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
