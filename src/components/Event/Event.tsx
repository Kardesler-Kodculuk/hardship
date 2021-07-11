import { useState } from "react";
import "./Event.css";

export function Event(props: {
  setIsFrozen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  message: string;
}) {
  const { setIsFrozen, message, title } = props;
  const [visible, setVisible] = useState(true);
  return (
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
            setIsFrozen(false);
            setVisible(false);
          }}
          className="eventButton"
        >
          Dikkat Et!
        </button>
      </div>
    </div>
  );
}
