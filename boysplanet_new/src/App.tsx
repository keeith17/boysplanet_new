import { Global } from "@emotion/react";
import Router from "@/components/Router";
import Modal from "@/components/modal/Modal";
import { global } from "./global";
import { useState } from "react";
import { Layout } from "./components/Layout";
import { ReactQueryDevtools } from "react-query/devtools";

export default function App() {
    const [modalShow, setModalShow] = useState<boolean>(false);
    return (
        <>
            <Global styles={global} />
            <Layout>
                {modalShow && <Modal />}
                <Router />
            </Layout>
            <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        </>
    );
}
