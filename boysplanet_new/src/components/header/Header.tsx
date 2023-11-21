import { Link } from "react-router-dom";
import Title from "@/assets/ittle.png";
import styled from "@emotion/styled";

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
            i {
                font-size: 30px;
                cursor: pointer;
            }
        }
    }
`;

export default function Header() {
    const onClickReload = () => {};
    return (
        <HeaderStyle>
            <div className="logo">
                <Link to="/">
                    <img src={Title} alt="Title" />
                </Link>
            </div>
            <div className="reloading">
                <div className="reloading-wrap">
                    <i className="material-icons" onClick={onClickReload}>
                        refresh
                    </i>
                </div>
            </div>
        </HeaderStyle>
    );
}
