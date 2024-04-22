import React from 'react';
import {Button, Card, CardBody, CardFooter, CardHeader, Divider, Input} from "@nextui-org/react";
import {PressEvent} from "@react-types/shared";

function CreateEventComponent() {
    function handleSubmit(event: PressEvent) {
        return;
    }
    return (
        <Card className="max-w-xl top-4" style={{
            width: "680px"
        }}>
            <CardHeader>
                <p>Create an event.</p>
            </CardHeader>
            <Divider/>
            <CardBody>
                <div className="flex flex-col gap-2">
                    <Input type="text" color="default" label="Name" placeholder="Enter your password" size="md" />
                    <Input type="text" color="default" label="Location" placeholder="Enter your password" size="md" />
                    <Input type="text" color="default" label="Description" placeholder="Enter your password" size="md" />
                </div>
            </CardBody>
            <Divider/>
            <CardFooter className="gap-4 justify-end">
                <Button
                    color="primary"
                    className="border-default-200"
                    radius="full"
                    size="sm"
                    variant="solid"
                    onPress={handleSubmit}
                >
                    Create
                </Button>
            </CardFooter>
        </Card>
    );
}

export default CreateEventComponent;