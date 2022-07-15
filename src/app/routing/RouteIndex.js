import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import MasterLayout from "../layout/MasterLayout";
import LandingPage from "../pages/home-page/LandingPage";
import ResultPage from "../pages/search-result/ResultPage";
import DetailPage from "../pages/detail-page/DetailPage";
import PaymentPage from "../pages/payment-page/PaymentPage";
import NotFoundPage from "../pages/error-page/NotFoundPage";

const RouteIndex = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MasterLayout content={<LandingPage/>} />}/>
                    <Route path="/search" element={<MasterLayout content={<ResultPage/>} />}/>
                    <Route path="/detail/:id" element={<MasterLayout content={<DetailPage/>} />}/>
                    <Route path="/payment" element={<MasterLayout content={<PaymentPage/>} />}/>
                    <Route path="*" element={<MasterLayout content={<NotFoundPage/>}/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default RouteIndex