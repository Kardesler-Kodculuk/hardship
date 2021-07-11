import { Effect, Room } from "controller";
import { useGame } from "@services";
import { useState } from "react";
import "./Event.css";
import { useEffect } from "react";

export function Event(props: {
  room: Room;
  count: number;
  show: boolean;
  title: string;
  effects: Effect[];
  message: string;
}) {
  const { unFreeze } = useGame();
  const { room, count, message, title, show, effects } = props;

  return (
    <div>
      <div className={show ? "visibleEvent" : "hiddenEvent"}>
        <div className="eventHeaderSection">
          <h1>{title}</h1>
        </div>
        <div className="eventTextSection">
          <p>
            <b>{room.title}</b>
          </p>
          <p>{message}</p>
          <h3 style={{ fontFamily: "VT323", color: "green" }}>Effects:</h3>
          {effects.map((e) => {
            if ((e.type = "continuous")) {
              return (
                <p>
                  {"Lowers "}
                  <b>{e.to}</b>
                  {" gain by "}
                  <b>{e.value}</b>
                </p>
              );
            } else {
              return (
                <p>
                  {"Immediate loss of "}
                  <b>{e.value}</b>
                  {" to "}
                  <b>{e.to}</b>
                </p>
              );
            }
          })}
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
