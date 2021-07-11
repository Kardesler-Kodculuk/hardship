import { rooms } from "@controller";
import React from "react";
import ShipRoom from "./room/ShipRoom";
import "./Ship.css";

export function Ship() {
  return (
    <div className="shipWrapper">
      <div className="Ship">
        <div className="ShipRooms">
          {rooms.map((room, index) => {
            return <ShipRoom key={"shipRoom" + index} room={room} />;
          })}
        </div>
      </div>
    </div>
  );
}
