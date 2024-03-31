import React from 'react';
import {Button, Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/react";
import {Link} from "react-router-dom";
import LoginModal from "./LoginModal";

function NavbarComponent() {
    return (
        <Navbar className="">
            <NavbarBrand>
                <p className="font-bold text-inherit">m1.Events</p>
            </NavbarBrand>
            <NavbarContent className="sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="primary" to="/">
                        Gallery
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" to="/create">
                        Create
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" to="/history">
                        History
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="lg:flex">
                    <LoginModal></LoginModal>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}

export default NavbarComponent;