import styled from "@emotion/styled";
import { ReactNode } from "react";
import Header from "./header/Header";

const LayoutStyle = styled.div`
    max-width: 720px;
    width: 100%;
    margin: 0 auto;
    background: #1b1546;
`;

interface LayoutProps {
    children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <LayoutStyle>
            <Header />
            {children}
        </LayoutStyle>
    );
};
