import { Room } from "controller";
import { useGame } from "@services";
import { useState } from "react";
import "./Event.css";
import { useEffect } from "react";

export function Event(props: {
  room: Room;
  id: number;
  show: boolean;
  title: string;
  message: string;
}) {
  const { unFreeze, freeze } = useGame();
  const { room, id, message, title, show } = props;
  useEffect(() => {
    freeze();
  }, []);
  return (
    <div>
      <div className={show ? "visibleEvent" : "hiddenEvent"}>
        <div className="eventHeaderSection">
          <h1>{title}</h1>
        </div>
        <div className="eventTextSection">
          <p>{message}</p>
        </div>
        <div className="eventButtonSection">
          <button
            onClick={() => {
              room.eventHandler.hideEvent(id);
              unFreeze();
            }}
            className="eventButton"
          >
            Kapat!
          </button>
        </div>
      </div>
    </div>
  );
}
