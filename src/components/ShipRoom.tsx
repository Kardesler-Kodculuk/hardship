import React from "react";
import "./ShipRoom.css";
import { useState } from "react";

interface RoomProps {
  roomName: string; // Represents the internal filename.
  roomTitle: string; // Actual presented name.
}

/**
 * This is a room in the ship.
 */
export default function ShipRoom(props: RoomProps) {
  const [select, setSelect] = useState(false);
  return (
    <div className={select ? "" : "room"} onClick={() => setSelect(!select)}>
      <img
        className={select ? "selectedRoom" : "room"}
        src={`/assets/images/rooms/${props.roomName}.png`}
        alt={`${props.roomTitle} resmi.`}
      ></img>
    </div>
  );
}
