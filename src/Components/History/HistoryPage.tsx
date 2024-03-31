import React from 'react';
import NavbarComponent from "../Global/Navbar";
import Footer from "../Global/Footer";
import HistoryComponent from "./HistoryComponent";

function HistoryPage() {
    return (
        <main className="dark text-foreground bg-background" style={{height: "100vh"}}>
            <div className="App">
                <NavbarComponent/>
                <HistoryComponent/>
                <Footer/>
            </div>
        </main>
    );
}

export default HistoryPage;