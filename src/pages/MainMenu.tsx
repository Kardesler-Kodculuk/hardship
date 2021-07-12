import { Link, useHistory } from "react-router-dom";
import React from "react";
import "./MainMenu.css";
import { boolean } from "yargs";

function HelpMenu(props: {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className={props.visible ? "helpMenuVisible" : "helpMenuHidden"}>
      <div className="helpTextArea">
        <button
          className="backButton"
          onClick={() => {
            props.setVisible(false);
          }}
        >
          {" "}
          Back
        </button>
        <h2> Hakkında </h2>
        <p>
          {" "}
          ​Gemimiz dünyadan uzaklardaki bir gezegene yola çıktığında çok basit
          bir görevimiz vardı: uyumak. Soğuk odadaki dondurulmuş uyku
          yataklarına yatacak, ve hedefimize vardığımızda uyanacaktık. Ama öyle
          olmadı...
        </p>
        <h2> Geliştiriciler </h2>
        <p>
          Umut Yiğitoğlu <br></br>Ege E. Özkan<br></br>Burak Keser
        </p>
        <h2> Lisanslar </h2>
        <ul>
          <li>
            Icons made by{" "}
            <a href="" title="surang">
              surang
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </li>
          <li>Space https://unsplash.com/photos/uhjiu8FjnsQ</li>
          <li>
            Grave - Icon made by{" "}
            <a
              href="https://www.flaticon.com/authors/nikita-golubev"
              title="Nikita Golubev"
            >
              Nikita Golubev
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </li>
          <li>
            <a
              href="
            https://fonts.google.com/specimen/Tourney?category=Display&preview.text=Hardship&preview.text_type=custom#about"
            >
              Tourney Font by Tyler Flinck
            </a>
          </li>
          <li>
            Barcode -
            https://fonts.google.com/specimen/Libre+Barcode+128?preview.text=corrupted&preview.text_type=custom&category=Display#standard-styles
          </li>
          <li>
            Roboto -
            https://fonts.google.com/specimen/Roboto?preview.text=corrupted&preview.text_type=custom&category=Serif,Sans+Serif,Display,Monospace
          </li>
          <li>
            The Space Ship Assets Pack by Gisha, CC 1.0, Modified
            https://gisha.itch.io/spaceships-asset-pack
          </li>
          <li>
            VT323 -
            https://fonts.google.com/specimen/VT323?preview.text=A0BODX&preview.text_type=custom&query=VT{" "}
          </li>
          <li>
            Roboto Slab -
            https://fonts.google.com/specimen/Roboto+Slab?preview.text=A0BODX&preview.text_type=custom&query=roboto
          </li>
        </ul>
      </div>
    </div>
  );
}

export function MainMenu() {
  let history = useHistory();
  const [helpVisible, setHelpVisible] = React.useState(false);
  return (
    <div className="mainMenuScreen">
      <HelpMenu setVisible={setHelpVisible} visible={helpVisible} />
      <div className="mainMenu">
        <header className="mainMenuGameTitle">
          Har<span className="fallenLetter">d</span>ship
        </header>
        <section className="mainMenuOptions">
          <ul>
            <li
              title="New Game"
              onClick={() => {
                history.push("/game");
              }}
            >
              Oyuna Başla
            </li>
            <li
              onClick={() => {
                setHelpVisible(true);
              }}
            >
              Hakkında
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
