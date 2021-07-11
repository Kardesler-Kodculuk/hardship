import { rooms } from "@controller";
import React from "react";
import ShipRoom from "./Room/ShipRoom";
import "./Ship.css";

export function Ship(props: { gameOver: boolean }) {
  return (
    <div className="shipWrapper">
      {!props.gameOver ? (
        <div className="Ship">
          <div className="ShipRooms">
            {rooms.map((room, index) => {
              return <ShipRoom key={"shipRoom" + index} room={room} />;
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}
