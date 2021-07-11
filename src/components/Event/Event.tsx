import { Room } from "controller";
import { useGame } from "@services";
import { useState } from "react";
import "./Event.css";
import { useEffect } from "react";

export function Event(props: {
  room: Room;
  count: number;
  show: boolean;
  title: string;
  message: string;
}) {
  const { unFreeze } = useGame();
  const { room, count, message, title, show } = props;

  return (
    <div>
      <div className={show ? "visibleEvent" : "hiddenEvent"}>
        <div className="eventHeaderSection">
          <h1>{title + count}</h1>
        </div>
        <div className="eventTextSection">
          <p>{message}</p>
        </div>
        <div className="eventButtonSection">
          <button
            onClick={() => {
              room.eventHandler.hideEvent(count);
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
