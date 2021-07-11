import React from "react";
import "./ShipRoom.css";
import { useState } from "react";
import RoomSettings from "./RoomSettings";
import { Room } from "controller";

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
      className={select ? "" : ""}
      onClick={() => {
        if (!select) {
          setSelect(true);
        }
      }}
    >
      <img
        className={select ? "selectedRoom" : "room"}
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
      <RenderWarning failureRate={room.failureRate} />
      <div className={select ? "settingsPanel" : "hiddenPanel"}>
        <button className="settingsClose" onClick={() => setSelect(false)}>
          X
        </button>

        <RoomSettings room={room} />
      </div>
    </div>
  );
}

function RenderWarning(props: { failureRate: number }) {
  const { failureRate } = props;
  if (failureRate >= 20) {
    return (
      <img
        alt="staffImages"
        className="warnings"
        src={`/assets/images/rooms/warning.png`}
      />
    );
  } else if (failureRate >= 70) {
    return (
      <img
        alt="staffImages"
        className="warnings"
        src={`/assets/images/rooms/danger.png`}
      />
    );
  } else {
    return null;
  }
}
