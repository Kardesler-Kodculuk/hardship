import { Event, Room, rooms } from "@controller";
import React from "react";
import ShipRoom from "./Room/ShipRoom";
import "./Ship.css";
import { Event as EventComp } from "./Event/Event";
import { useGame } from "@services";

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
  const { freeze } = useGame();
  const { room } = props;
  return (
    <div>
      {room.eventHandler.currentEvents.map((e, i) => {
        console.log("asdasdasd");
        return (
          <div>
            <EventComp
              key={"Event" + room.name + i}
              message={e.description}
              title={e.title}
              id={e.id}
              show={e.show}
              room={room}
            />
          </div>
        );
      })}
    </div>
  );
}
