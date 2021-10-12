// eslint-disable-next-line import/no-anonymous-default-export
import DropZone from "../../Components/DropZone";
import {createRef, useRef, useState} from "react";
import rrwebPlayer from 'rrweb-player';
import 'rrweb-player/dist/style.css';

export default function () {
    const [events, setEvents] = useState();
    const playerContainer = useRef(null);

    if(events) {
        new rrwebPlayer({
            target: playerContainer.current, // customizable root element
            props: {
                events,
            },
        });
    }

    return (
        <div style={{marginTop: '15px'}}>
            <div className={"wrapper"}>
                <div style={{display: events ? 'block' : 'none'}} ref={playerContainer}/>
            </div>
            {
                events ?
                    <div/>
                    :
                    <DropZone setEvents={setEvents}/>
            }
        </div>
    )
}
