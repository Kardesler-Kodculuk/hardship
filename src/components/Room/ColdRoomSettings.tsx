import "./RoomSettings.css";
import "./ColdRoomSettings.css";
import { gameManager } from "@controller";

export function ColdRoomSettings() {
  return (
    <div className="settings">
      <div className="coldRoomControls">
        <p className="coldRoomWarning">
          C:\&gt; ODAKONTROL.EXE <br></br>
          Bu ekrandan soğuk odada uyumakta olan yolcuları kontrol edebilirsiniz.
          Uyandığınız yolcular size mürettebat olarak katılacaklar, ancak dikkat
          edin, daha fazla mürettat iyi bir şey gibi görünse de,{" "}
          <em>daha fazla mürettebat daha fazla kaynak harcayacaktır.</em>
        </p>
        <button
          onClick={() => {
            gameManager.addHumans(1);
          }}
          disabled={
            gameManager.deadCount + gameManager.resources.humans.total >=
            gameManager.resources.humans.limit
          }
          className="wakeUpPassanger"
        >
          Yolcu Uyandır
        </button>
      </div>
    </div>
  );
}
