import React from 'react';
import {Button, Input} from "@nextui-org/react";

function SearchComponent() {
    return (
        <div className="flex flex-none justify-end py-2 gap-2">
            <Input
                type="email"
                size="md"
                variant="bordered"
                defaultValue="searchBar"
                className="max-w-xs"
            />
            <Button></Button>
        </div>
    );
}

export default SearchComponent;