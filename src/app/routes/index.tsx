import { Dashboard } from "@/pages/dashboard";
import { Empty } from "@/pages/empty";
import { MainLayout } from "@/widgets/layouts/MainLayout";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

export const AppRouter = () => {
    return(
        <Router>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/megabot" element={<Empty />} />
                    <Route path="/bot-market" element={<Empty />} />
                    <Route path="/coin-prices" element={<Empty />} />
                    <Route path="/profile" element={<Empty />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Route>
            </Routes>
        </Router>
    )
}