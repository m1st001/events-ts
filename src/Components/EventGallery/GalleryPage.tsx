import React, {useEffect, useState} from 'react';
import {Pagination, Spacer} from "@nextui-org/react";
import {EventCard, IEvent} from "./EventCard";
import {fetchEvents} from "../../Services/ApiWrapper";
import SearchComponent from "./SearchComponent";

function GalleryPage() {
    const [events, setEvents] = useState<IEvent[]>([]);

    useEffect(() => {
        (fetchEvents().then((result) => setEvents(result)));
    }, []);

    return (
        <div className="">
            <SearchComponent/>
            <div className="container flex flex-col">
                <div className="container flex flex-wrap justify-content-center justify-center gap-4">
                    <>
                        {events.map((eventProps) => {
                            return <EventCard
                                id={eventProps.id}
                                name={eventProps.name}
                                location={eventProps.location}
                                description={eventProps.description}
                                tags={eventProps.tags}
                                registered={eventProps.registered}
                                capacity={eventProps.capacity}
                                startDate={new Date(eventProps.startDate)}/>;
                        })}
                    </>
                </div>
                <Spacer y={5}/>
                <div className="container flex justify-center">
                    <Pagination total={3} initialPage={1}/>
                </div>
            </div>
        </div>
    );
}

export default GalleryPage;