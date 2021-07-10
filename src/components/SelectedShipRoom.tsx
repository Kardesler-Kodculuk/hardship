import React from "react";
import "./SelectedShipRoom.css";

interface SelectionProps {
  roomName: string; // Represents the internal filename.
  roomTitle: string; // Actual presented name.
}

function SelectedRoom(props: SelectionProps) {
  return (
    <div className="selectedRoom">
      <img
        className="roomImage"
        src={`/assets/images/rooms/${props.roomName}.png`}
        alt={`${props.roomTitle} resmi.`}
      ></img>
    </div>
  );
}
