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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
          necessitatibus repudiandae? Animi, tenetur quibusdam! Nihil incidunt
          quisquam maxime magni quaerat aliquid culpa doloremque velit possimus
          perferendis. Facilis id saepe tenetur.
        </p>
        <h2> Geliştiriciler </h2>
        <p>
          Umut Yiğitoğlu <br></br>Ege E. Özkan<br></br>Burak Keser
        </p>
        <h2> Lisanslar </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias,
          ratione. Nisi autem ipsam aspernatur aut? At vel alias quod ullam
          exercitationem quidem qui itaque, beatae, dolorum, fuga voluptatum
          nihil illo!
        </p>
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
          Har<text className="fallenLetter">d</text>ship
        </header>
        <section className="mainMenuOptions">
          <ul>
            <li title="New Game">
              <Link to="/game">Oyuna Başla</Link>
            </li>
            <li>
              <a
                href="#"
                onClick={() => {
                  setHelpVisible(true);
                }}
              >
                Hakkında
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
