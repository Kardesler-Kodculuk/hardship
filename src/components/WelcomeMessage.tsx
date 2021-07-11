import { useEffect, useState } from "react";
import "./WelcomeMessage.css";

export function WelcomeMessage() {
  const [visible, setVisible] = useState(true);
  return (
    <div className={visible ? "visibleWelcome" : "hiddenWelcome"}>
      <div className="welcomeMessageHeaderSection">
        <h1>FATAL SYSTEM ERROR</h1>
      </div>
      <div className="welcomeMessageTextSection">
        <p>C:\{">"} TYPE ERRORLOGS.TXT | MORE</p>
        <p>
          Merhaba Kaptan, normal şartlar altında gemimiz yolculuğu boyunca
          mürettebatın da sizin de uyku halinde dondurulmuş tutulmanız
          gerekiyordu, ancak bir <em>sistem hatasından</em> ötürü otomatik
          sistemler devre dışı kalmış durumda, dolayısıyla geminin yönetimi size
          devredilecek.
        </p>
        <p>
          Kaynaklarınızı dikkatli kullanın, her odanın düzgün işlemesi için
          mürettebata ihtiyacı var, ihtiyaç durumunda yeni mürettebat
          uyandırabilirsiniz. Düzgün işlemeyen odalar yarardan çok zarara sebep
          olabilirler.
        </p>
        <p>İyi şanslar kaptan.</p>
      </div>
      <div className="welcomeMessageButtonSection">
        <button
          onClick={() => {
            setVisible(false);
          }}
          className="welcomeMessageButton"
        >
          Güverteye Adım At
        </button>
      </div>
    </div>
  );
}
