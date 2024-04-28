import React, {FormEvent, useState} from 'react';
import {
    Button, CalendarDate,
    Card,
    CardBody,
    CardFooter,
    DateInput,
    Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure
} from "@nextui-org/react";
import {getLocalTimeZone, today} from "@internationalized/date";
import {postEvent} from "../../Services/ApiWrapper";

export interface eventDTO {
    name: string;
    location: string;
    description: string;
    tags: string;
    capacity: string;
    startTime: string;
}

function CreateEventComponent() {
    const [name, setName] = useState('');
    const [description, setDescr] = useState('');
    const [location, setLocation] = useState('');
    const [tags, setTags] = useState('');
    const [capacity, setCapacity] = useState('');
    const [startTime, setStartTime] = useState<CalendarDate>();

    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    const [created, setCreated] = useState<boolean>(false);

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        console.log(name, description, location, tags, capacity, startTime?.toDate(getLocalTimeZone()).toISOString());
        if(startTime != undefined) {
            const timeString = startTime?.toDate(getLocalTimeZone()).toISOString();
            postEvent({name, location, description, tags, capacity, startTime : timeString}).then(response => {
                if(response.ok) {
                    setCreated(true);
                }
                onOpen();
            });
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <Card className="max-w-xl top-4" style={{
                width: "680px"
            }}>
                <CardBody className="pb-0">
                    <div className="flex flex-col gap-2">
                        <Input isRequired type="text" color="default" label="Name" size="md" value={name} onChange={e => {
                            setName(e.target.value);
                        }}
                        />
                        <Input type="text" color="default" label="Description" size="md" value={description} onChange={e => {
                            setDescr(e.target.value);
                        }}
                        />
                        <Input isRequired type="text" color="default" label="Tags" size="md" placeholder="Search tags..." value={tags} onChange={e => {
                            setTags(e.target.value);
                        }}/>
                        <div className="flex flex-row gap-2">
                            <Input isRequired type="text" color="default" label="Location" size="md" value={location} onChange={e => {
                                setLocation(e.target.value)
                            }}
                            />
                            <DateInput
                                isRequired
                                granularity="minute"
                                hourCycle={24}
                                label="Date and time"
                                minValue={today(getLocalTimeZone())}
                                onChange={e => {setStartTime(e as CalendarDate)}}
                            />
                            <Input isRequired type="text" color="default"
                                   label="Capacity" placeholder="0" size="md"
                                   className="w-1/6"
                                   value={capacity}
                                   onChange={e => {setCapacity(e.target.value)}}
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
                        type="submit"
                    >
                        Create
                    </Button>
                </CardFooter>
            </Card>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="dark text-foreground" backdrop="blur">
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Result</ModalHeader>
                            <ModalBody>
                                {created ? (
                                    <p>
                                        <i className="bi-check-circle px-2"/>Event created successfully.
                                    </p>
                                ) : (
                                    <p>
                                        <i className="bi-x-circle px-2"/>There was a problem creating your event.
                                    </p>
                                )}

                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onPress={onClose}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </form>
    );
}

export default CreateEventComponent;