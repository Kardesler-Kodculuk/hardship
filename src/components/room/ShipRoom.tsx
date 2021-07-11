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
      className={select ? "" : "room"}
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

      <div className={select ? "settingsPanel" : "hiddenPanel"}>
        <button className="settingsClose" onClick={() => setSelect(false)}>
          X
        </button>

        <RoomSettings room={room} />
      </div>
    </div>
  );
}
