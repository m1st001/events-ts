import {useMemo, useState} from 'react';
import {Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input} from "@nextui-org/react";

function SearchComponent() {
    const [selectedKeys, setSelectedKeys] = useState(new Set(["Search by"]));

    const selectedValue = useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
        [selectedKeys]
    );
    return (
        <div className="flex justify-center py-4 gap-2">
            <Input
                size="sm"
                variant="bordered"
                className="max-w-xs"
                placeholder="Type to search..."
                startContent={
                    <i className="bi-search"/>
                }
            />
            <Dropdown>
                <DropdownTrigger>
                    <Button
                        radius="sm"
                        size="sm"
                        variant="bordered"
                    >
                        {selectedValue}
                    </Button>
                </DropdownTrigger>
                <DropdownMenu
                    aria-label="Single selection example"
                    variant="flat"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={selectedKeys}
                    onSelectionChange={(keys) => setSelectedKeys(keys as Set<string>)}
                >
                    <DropdownItem key="Name">Name</DropdownItem>
                    <DropdownItem key="Author">Author</DropdownItem>
                    <DropdownItem key="Id">Id</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    );
}

export default SearchComponent;