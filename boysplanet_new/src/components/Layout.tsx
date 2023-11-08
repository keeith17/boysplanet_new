import styled from "@emotion/styled";
import { ReactNode } from "react";

const LayoutStyle = styled.div`
    max-width: 720px;
    width: 100%;
    margin: 0 auto;
`;

interface LayoutProps {
    children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    return <LayoutStyle>{children}</LayoutStyle>;
};
