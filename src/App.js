import React from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import LandingPage from "./components/landing_page/LandingPage";

function App() {
    return (
        <div className="w-full">
            <Header />
            <LandingPage />
            <Footer />
        </div>
    );
}

export default App;
