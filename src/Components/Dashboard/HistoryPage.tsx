import React from 'react';
import NavbarComponent from "../Global/Navbar";
import Footer from "../Global/Footer";
import HistoryComponent from "./HistoryComponent";
import ProfileComponent from "./ProfileComponent";
import ScheduleComponent from "./ScheduleComponent";

function DashboardPage() {
    return (
        <main className="dark text-foreground bg-background" style={{height: "100vh"}}>
            <div className="App">
                <NavbarComponent/>
                <div>
                    <HistoryComponent/>
                    <ProfileComponent/>
                    <ScheduleComponent/>
                </div>
                <Footer/>
            </div>
        </main>
    );
}

export default DashboardPage;