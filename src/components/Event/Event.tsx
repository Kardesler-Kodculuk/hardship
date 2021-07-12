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
          <h3 style={{ fontFamily: "VT323", color: "green" }}>Etkiler:</h3>
          {effects.map((e) => {
            if (e.type === "continuous") {
              return (
                <p>
                  <b>{e.to_tr}</b>
                  {" kaynağının değişimi "}
                  <b>{e.value}</b>
                  {" azaldı"}
                </p>
              );
            } else {
              return (
                <p>
                  <b>{e.to_tr}</b>
                  {" kaynağı "}
                  <b>{e.value}</b>
                  {e.value > 0 ? " arttı." : " azaldı."}
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
            Kahretsin!
          </button>
        </div>
      </div>
    </div>
  );
}
