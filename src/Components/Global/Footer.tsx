import React from 'react';
import {Link} from "@nextui-org/react";

function Footer() {
    return (
        <footer className="fixed bottom-0 mb-5 px-5 w-full">
            <div className="container gap-4 w-full flex justify-center">
                <Link className="">Found a bug? <i className="bi-bug-fill px-1"/></Link>
                <Link className="">Contribute <i className="bi-git px-1"/></Link>
                <Link className="">Our Discord <i className="bi-discord px-1"/></Link>
                <p className="text-default-400">
                    Developed by m1st, 2024
                </p>
            </div>
        </footer>
    );
}

export default Footer;