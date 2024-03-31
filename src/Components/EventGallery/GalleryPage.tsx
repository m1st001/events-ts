import React from 'react';
import EventCard from "./EventCard";
import {Pagination, Spacer} from "@nextui-org/react";

function GalleryPage() {
    return (
        <div className="container flex flex-col">
            <div className="container flex flex-wrap justify-content-center justify-center gap-4">
                <EventCard
                    id={0}
                    name={"Event 1"}
                    space={5}
                    startDate={new Date()}
                    location={"Far"}
                    description={"Very very very very very very very very long description"}
                />
                <EventCard
                    id={1}
                    name={"Event 2"}
                    space={-1}
                    startDate={new Date()}
                    location={"Close"}
                    description={"Kinda short description"}
                />
                <EventCard
                    id={1}
                    name={"Event 2"}
                    space={-1}
                    startDate={new Date()}
                    location={"Close"}
                    description={"Kinda short description"}
                />
                <EventCard
                    id={1}
                    name={"Event 2"}
                    space={-1}
                    startDate={new Date()}
                    location={"Close"}
                    description={"Kinda short description"}
                />

            </div>
            <Spacer y={5}/>
            <div className="container flex justify-center">
                <Pagination total={3} initialPage={1}/>
            </div>
        </div>
    );
}

export default GalleryPage;