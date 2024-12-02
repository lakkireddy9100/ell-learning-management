import { useEffect, useState } from "react";
import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import Footer from "./components/home/Footer/Footer";
import FooterBottom from "./components/home/Footer/FooterBottom";
import Header from "./components/home/Header/Header";
import HeaderBottom from "./components/home/Header/HeaderBottom";
import SpecialCase from "./components/SpecialCase/SpecialCase";
import About from "./pages/About/About";
import SignIn from "./pages/Account/SignIn";
import SignUp from "./pages/Account/SignUp";
import Cart from "./pages/Cart/Cart";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Journal from "./pages/Journal/Journal";
import Offer from "./pages/Offer/Offer";
import Payment from "./pages/payment/Payment";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Shop from "./pages/Shop/Shop";
import LoadingScreen from "./components/home/Header/LoadingScreen"; // Add this import

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate a 3-second loading period
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 8000);

        return () => clearTimeout(timer); // Cleanup timer to prevent memory leaks
    }, []);

    // Layout for shared components
    const Layout = () => (
        <div>
            <Header />
            <HeaderBottom />

            <Footer />
            <FooterBottom />
        </div>
    );

    // Define the routes
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route>
                <Route path="/" element={<Layout />}>
                    {/* ==================== Header Navlink Start here =================== */}
                    <Route index element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/journal" element={<Journal />} />
                    {/* ==================== Header Navlink End here ===================== */}
                    <Route path="/offer" element={<Offer />} />
                    <Route path="/product/:_id" element={<ProductDetails />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/paymentgateway" element={<Payment />} />
                </Route>
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />
            </Route>
        )
    );

    // Render the loading screen or the application
    return (
        <div className="font-bodyFont">
            {isLoading ? (
                <LoadingScreen /> // Display loading screen for 3 seconds
            ) : (
                <RouterProvider router={router} /> // Render the main app
            )}
        </div>
    );
};

export default App;
