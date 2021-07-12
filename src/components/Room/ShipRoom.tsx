import React from "react";
import "./ShipRoom.css";
import { useState } from "react";
import RoomSettings from "./RoomSettings";
import { Room, EventWithCount } from "controller";
import { Event as EventComponent } from "../Event/Event";
import { useGame } from "@services";
import { ColdRoomSettings } from "./ColdRoomSettings";
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
      className={select ? "" : "room roomDiv"}
      onClick={() => {
        if (!select) {
          setSelect(true);
        }
      }}
    >
      <img
        className={select ? "selectedRoom" : "room"}
        src={`./assets/images/rooms/${room.name}.png`}
        alt={`${room.title} resmi.`}
      ></img>
      {select ? null : (
        <div
          className={
            select || room.name === "cold"
              ? "shipRoomFailureRate lowDanger"
              : "shipRoomFailureRate " + dangerLevel(room.getFailureRate())
          }
        >
          {room.name === "cold" ? "Soğuk Oda" : room.getFailureRate() + "%"}
        </div>
      )}

      {select
        ? null
        : [...Array(room.staffCount)].map((_, i) => {
            return (
              <img
                alt="staffImages"
                className="staffCount"
                src={`./assets/images/icons/humans.svg`}
              />
            );
          })}

      <div className={select ? "settingsPanel" : "hiddenPanel"}>
        <button className="settingsClose" onClick={() => setSelect(false)}>
          X
        </button>
        {room.name === "cold" ? (
          <ColdRoomSettings />
        ) : (
          <RoomSettings room={room} />
        )}
        <Events events={room.eventHandler.currentEvents} room={room} />
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

function Events(props: { events: EventWithCount[]; room: Room }) {
  const { freeze } = useGame();
  const { events, room } = props;
  return (
    <div className="eventContainer">
      {events.map((e, i) => (
        <div
          className="eventButton"
          key={"EventShow" + room.name + i}
          onClick={() => {
            room.eventHandler.showEvent(e.count);
            freeze();
          }}
        >
          <h1>{e.title}</h1>
        </div>
      ))}
    </div>
  );
}
