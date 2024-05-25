import React from 'react';
import {Card, CardHeader, CardBody, CardFooter, Avatar, Button, Spacer} from "@nextui-org/react";

export interface IEvent {
    id: number;
    name: string;
    location: string;
    description: string;
    tags: string[];
    registered: number;
    capacity: number;
    startDate: Date;
    participantIds: string[];
}
export function EventCard({ id, name, registered, startDate, location, description, capacity, tags }: IEvent) {
    const [isFollowed, setIsFollowed] = React.useState(false);
    const startTimeString = startDate.toLocaleTimeString([],{hour: '2-digit', minute:'2-digit'});
    return (
        <div className="container">
            <Card className={"w-64 border border-primary"}
                  isHoverable={true}
                  isPressable={true}
                  style={{
                width: "290px",
                height: "210px"}}>
                <CardHeader className="flex flex-col">
                    <h4 className="text-center text-medium tracking-tight"><i
                        className="bi-circle"/> FREE {registered} / {capacity}
                    </h4>
                </CardHeader>
                <CardBody className="flex flex-col align-middle resize-y" style={{height: "60px", fontSize: "1.5rem"}}>
                    <h3 className="text-center tracking-wide">{name}</h3>
                </CardBody>
                <CardFooter className="flex gap-1 flex-col align-top">
                    <h4 className="text-medium font-semibold leading-none text-default-400">
                        <i className="bi-calendar-check"/> {startDate.toDateString()}
                    </h4>
                    <p>{startTimeString} - {startTimeString}</p>
                    <h4 className="text-small text-default-400 tracking-tight"><i className="bi-geo-alt"/> {location}</h4>
                </CardFooter>
            </Card>
        </div>
    );
}