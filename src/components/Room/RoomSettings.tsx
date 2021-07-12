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
    } catch (err) {}
  };

  const removeStaff = () => {
    try {
      room.removeStaff();
      remove();
    } catch (err) {}
  };
  return (
    <div className="settings">
      <div className="staffRange">
        <h1>{room.title}</h1>
        <p>
          Bu ekrandan {room.title}'da bulunan mürettabatı kontrol edebilirsiniz.
          <em> daha fazla mürettebat hata olasılığını düşürmektedir.</em>
        </p>
        <button className="staffButton addStaff" onClick={addStaff}>
          +
        </button>
        <button
          className="staffButton removeStaff"
          onClick={removeStaff}
          style={{ marginRight: "25px" }}
        >
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
