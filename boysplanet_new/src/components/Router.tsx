import Homepage from "@/pages/home";
import ResultPage from "@/pages/result";
import VotePage from "@/pages/vote";
import { Route, Routes } from "react-router-dom";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/VotePage" element={<VotePage />} />
            <Route path="/ResultPage" element={<ResultPage />} />
        </Routes>
    );
}
