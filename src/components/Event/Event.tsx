import { useGame } from "@services";
import { useState } from "react";
import "./Event.css";

export function Event(props: { title: string; message: string }) {
  const { unFreeze } = useGame();
  const { message, title } = props;
  const [visible, setVisible] = useState(true);
  return (
    <div>
      <div
        onClick={() => {
          setVisible(true);
        }}
      >
        <h1>{title}</h1>
      </div>
      <div className={visible ? "visibleEvent" : "hiddenEvent"}>
        <div className="eventHeaderSection">
          <h1>{title}</h1>
        </div>
        <div className="eventTextSection">
          <p>{message}</p>
        </div>
        <div className="eventButtonSection">
          <button
            onClick={() => {
              unFreeze();
              setVisible(false);
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
