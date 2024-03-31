import React from 'react';
import {Input} from "@nextui-org/react";

function CreateEventComponent() {
    return (
        <div className="w-full flex flex-col gap-4">
            <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                <Input type="email" label="Email"/>
                <Input type="email" label="Email" placeholder="Enter your email"/>
            </div>
        </div>
    );
}

export default CreateEventComponent;