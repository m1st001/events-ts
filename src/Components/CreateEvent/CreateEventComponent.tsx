import React from 'react';
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    DateInput,
    Divider,
    Input
} from "@nextui-org/react";
import {PressEvent} from "@react-types/shared";
import {I18nProvider} from "@react-aria/i18n";

function CreateEventComponent() {
    function handleSubmit(event: PressEvent) {
        return;
    }
    return (
        <Card className="max-w-xl top-4" style={{
            width: "680px"
        }}>
            <CardBody className="pb-0">
                <div className="flex flex-col gap-2">
                    <Input type="text" color="default" label="Name" size="md" />
                    <Input type="text" color="default" label="Description" size="md" />
                    <Input type="text" color="default" label="Tags" size="md" placeholder="Search tags..." />
                    <div className="flex flex-row gap-2">
                        <Input type="text" color="default" label="Location" size="md" />
                        <I18nProvider locale="en-001">
                            <DateInput
                                granularity="minute"
                                hourCycle={24}
                                label="Date and time"
                            />
                        </I18nProvider>
                        <Input type="text" color="default"
                               label="Capacity" placeholder="0" size="md"
                               className="w-1/6"
                        />
                    </div>
                </div>
            </CardBody>
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