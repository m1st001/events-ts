import React from 'react';
import NavbarComponent from "../Global/Navbar";
import Footer from "../Global/Footer";
import CreateEventComponent from "./CreateEventComponent";
import {I18nProvider} from "@react-aria/i18n";

function CreateEventPage() {
    return (
        <main className="dark text-foreground bg-background" style={{height: "100vh"}}>
            <div className="App">
                <NavbarComponent/>
                <div className="flex justify-center py-4">
                    <I18nProvider locale="en-001">
                        <CreateEventComponent/>
                    </I18nProvider>
                </div>
                <Footer/>
            </div>
        </main>
    );
}

export default CreateEventPage;