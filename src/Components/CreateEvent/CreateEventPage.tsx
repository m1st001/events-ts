import React from 'react';
import NavbarComponent from "../Global/Navbar";
import Footer from "../Global/Footer";
import CreateEventComponent from "./CreateEventComponent";

function CreateEventPage() {
    return (
        <main className="dark text-foreground bg-background" style={{height: "100vh"}}>
            <div className="App">
                <NavbarComponent/>
                <CreateEventComponent/>
                <Footer/>
            </div>
        </main>
    );
}

export default CreateEventPage;