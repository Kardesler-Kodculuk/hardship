import "./RoomSettings.css";
import "./ColdRoomSettings.css";
import { gameManager } from "@controller";
import { useGame } from "@services";

export function ColdRoomSettings() {
  const { wakeStaff } = useGame();
  console.log(gameManager.resources.humans);
  return (
    <div className="settings">
      <div className="coldRoomControls">
        <p className="coldRoomWarning">
          C:\&gt; ODAKONTROL.EXE <br></br>
          Bu ekrandan soğuk odada uyumakta olan yolcuları kontrol edebilirsiniz.
          Uyandığınız yolcular size mürettebat olarak katılacaklar, ancak dikkat
          edin, daha fazla mürettat iyi bir şey gibi görünse de,{" "}
          <em>daha fazla mürettebat daha fazla kaynak harcayacaktır.</em>
          {gameManager.deadCount + gameManager.resources.humans.total >=
          gameManager.resources.humans.limit ? (
            <p>
              <em>Soğuk odada uyuyan yolcu kalmadı.</em>
            </p>
          ) : null}
        </p>
        <button
          onClick={() => {
            wakeStaff();
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
