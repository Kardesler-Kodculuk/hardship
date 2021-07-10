import { rooms } from "@controller";
import React from "react";
import ShipRoom from "./ShipRoom";
import "./Ship.css";

export function Ship() {
  return (
    <div className="shipWrapper">
      <div className="Ship">
        {rooms.map((room, index) => {
          return (
            <ShipRoom
              key={"shipRoom" + index}
              roomName={room.name}
              roomTitle={room.title}
            />
          );
        })}
      </div>
    </div>
  );
}
