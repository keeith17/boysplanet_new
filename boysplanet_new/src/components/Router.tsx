import Homepage from "@/pages/home";
import ResultPage from "@/pages/result";
import VotePage from "@/pages/vote";
import { Route, Routes } from "react-router-dom";

export interface ModalProps {
    modalOpenFn: () => void;
}

export default function Router({ modalOpenFn }: ModalProps) {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route
                path="/VotePage"
                element={<VotePage modalOpenFn={modalOpenFn} />}
            />
            <Route path="/ResultPage" element={<ResultPage />} />
        </Routes>
    );
}
