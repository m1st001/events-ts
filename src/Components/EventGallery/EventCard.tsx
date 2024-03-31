import React from 'react';
import {Card, CardHeader, CardBody, CardFooter, Avatar, Button, Spacer} from "@nextui-org/react";

interface EventProps {
    id: number;
    name: string;
    space: number;
    startDate: Date;
    location: string;
    description: string;
}
function EventCard({ id, name, space, startDate, location, description }: EventProps) {
    const [isFollowed, setIsFollowed] = React.useState(false);
    return (
        <div className="container">
            <Card className="w-64" style={{
                width: "256px",
                height: "205px"}}>
                <CardHeader className="justify-between gap-1">
                    <div className="flex">
                        <Avatar isBordered radius="full" size="md" src="/avatars/avatar-1.png" className="mt-1" />
                        <Spacer x={2}/>
                        <div className="flex flex-col gap-1 items-start justify-center">
                            <div className="flex gap-2">
                                <h4 className="text-small font-semibold leading-none text-default-600">{name}</h4>
                                <h4 className="text-small font-semibold leading-none text-default-400">Id:{id}</h4>
                            </div>
                            <div className="flex text-default-400">
                                <i className="bi-geo-alt"/>
                                <h4 className="text-small tracking-tight"> {location}</h4>
                            </div>
                        </div>
                    </div>
                    <Button
                        className={isFollowed ? "bg-transparent text-foreground border-default-200" : ""}
                        color="primary"
                        radius="full"
                        size="sm"
                        variant={isFollowed ? "bordered" : "solid"}
                        onPress={() => setIsFollowed(!isFollowed)}
                    >
                        {isFollowed ? "Cancel" : "Register"}
                    </Button>
                </CardHeader>
                <CardBody className="flex-grow-0 px-3 py-0 text-small text-default-400 ">
                    <p>
                        Starts {startDate.getDate() + '.' + (startDate.getMonth() + 1) + '.' + startDate.getFullYear()} at {startDate.getHours()}:{startDate.getMinutes()}
                    </p>
                    <span className="pt-2">
                            Tags:
                    </span>
                    <p>
                        Description:
                    </p>
                    <p className="">
                        {description}0
                    </p>
                </CardBody>
                <CardFooter className="gap-3">
                    <div className="flex gap-1">
                        <p className="font-semibold text-default-400 text-small">1</p>
                        <p className=" text-default-400 text-small">Registered</p>
                    </div>
                    <div className="flex gap-1">
                        <p className="font-semibold text-default-400 text-small">{space}</p>
                        <p className="text-default-400 text-small">Capacity</p>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}

export default EventCard;