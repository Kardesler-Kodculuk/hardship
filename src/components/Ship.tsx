import { Event, Room, rooms, EventWithCount } from "@controller";
import React from "react";
import ShipRoom from "./Room/ShipRoom";
import "./Ship.css";
import { Event as EventComp } from "./Event/Event";
import { useGame } from "@services";
import { useEffect } from "react";

export function Ship(props: { gameOver: boolean }) {
  return (
    <div className="shipWrapper">
      {!props.gameOver ? (
        <div className="Ship">
          <div className="ShipRooms">
            {rooms.map((room, index) => {
              return (
                <div key={"shipRoom" + index}>
                  <ShipRoom room={room} />
                  <Events room={room} />
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}

function Events(props: { room: Room }) {
  const [event, setEvents] = React.useState<EventWithCount[] | null>(null);
  const { room } = props;
  useEffect(() => {
    setEvents(room.eventHandler.currentEvents);
  }, [room.eventHandler.currentEvents]);
  if (!event) {
    return null;
  }
  return (
    <div>
      {event.map((e, i) => {
        return (
          <div>
            <EventComp
              key={"Event" + room.name + i}
              message={e.description}
              title={e.title}
              count={e.count}
              show={e.show}
              room={room}
              effects={e.effects}
            />
          </div>
        );
      })}
    </div>
  );
}
