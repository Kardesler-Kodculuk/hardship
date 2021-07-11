import React from "react";
import "./ShipRoom.css";
import { useState } from "react";
import RoomSettings from "./RoomSettings";
import { Room, Event } from "controller";
import { Event as EventComponent } from "../Event/Event";
interface RoomProps {
  room: Room;
}

/**
 * This is a room in the ship.
 */
export default function ShipRoom(props: RoomProps) {
  const { room } = props;
  const [select, setSelect] = useState(false);
  return (
    <div
      className={select ? "" : "room "}
      onClick={() => {
        if (!select) {
          setSelect(true);
        }
      }}
    >
      <img
        className={
          select ? "selectedRoom" : "room " + dangerLevel(room.failureRate)
        }
        src={`/assets/images/rooms/${room.name}.png`}
        alt={`${room.title} resmi.`}
      ></img>
      {[...Array(room.staffCount)].map((_, i) => {
        return (
          <img
            alt="staffImages"
            className="staffCount"
            src={`/assets/images/icons/humans.svg`}
          />
        );
      })}
      <div className={select ? "settingsPanel" : "hiddenPanel"}>
        <button className="settingsClose" onClick={() => setSelect(false)}>
          X
        </button>
        <RoomSettings room={room} />
        <Events events={room.eventHandler.currentEvents} />
      </div>
    </div>
  );
}

function dangerLevel(failureRate: number) {
  if (failureRate < 10) {
    return "lowDanger";
  } else if (failureRate < 50) {
    return "moderateDanger";
  } else {
    return "highDanger";
  }
}

function Events(props: { events: Event[] }) {
  const { events } = props;
  return <div>{events.map((e) => null)}</div>;
}
