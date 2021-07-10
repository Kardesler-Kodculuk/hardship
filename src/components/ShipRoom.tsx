import React from "react";
import "./ShipRoom.css";

interface RoomProps {
  roomName: string; // Represents the internal filename.
  roomTitle: string; // Actual presented name.
}

/**
 * This is a room in the ship.
 */
export default function ShipRoom(props: RoomProps) {
  return (
    <div className="Room">
      <img
        className="roomImage"
        src={`/assets/images/rooms/${props.roomName}.png`}
        alt={`${props.roomTitle} resmi.`}
      ></img>
    </div>
  );
}
interface SelectionProps {
  roomName: string; // Represents the internal filename.
  roomTitle: string; // Actual presented name.
}
function SelectedRoom(props: SelectionProps) {
  return (
    <div>
      <img
        className="roomImage"
        src={`/assets/images/rooms/${props.roomName}.png`}
        alt={`${props.roomTitle} resmi.`}
      ></img>
    </div>
  );
}
