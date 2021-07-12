import React from "react";
import "./RoomSettings.css";
import { useState, useEffect } from "react";
import { Room } from "controller";
import { useGame } from "@services";

interface RoomSettingsProps {
  room: Room;
}

export default function RoomSettings(props: RoomSettingsProps) {
  const { room } = props;
  const { addStaff: add, removeStaff: remove } = useGame();
  const [staff, setStaff] = useState(0);

  useEffect(() => {
    setStaff(room.staffCount);
  }, [room.staffCount]);

  const addStaff = () => {
    try {
      add();
      room.addStaff();
      room.stopEvent();
    } catch (err) {
      console.log(err.message);
    }
  };

  const removeStaff = () => {
    try {
      room.removeStaff();
      remove();
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className="settings">
      <div className="staffRange">
        <button className="staffButton addStaff" onClick={addStaff}>
          +
        </button>
        <button className="staffButton removeStaff" onClick={removeStaff}>
          -
        </button>
        {[...Array(room.maxStaffCount)].map((_, i) => {
          return (
            <img
              key={"image" + room.name + i}
              alt="staffImages"
              className={
                i < room.staffCount ? `staffImage` : "dimmedStaffImage"
              }
              src={`/assets/images/icons/humans.svg`}
            />
          );
        })}
      </div>
    </div>
  );
}
