import { Link, useHistory } from "react-router-dom";
import React from "react";
import "./MainMenu.css";
import { boolean } from "yargs";

const licenses = [
  {
    department: "kessler",
    relatedTo: "stuff",
    name: "@testing-library/jest-dom",
    licensePeriod: "perpetual",
    material: "material",
    licenseType: "MIT",
    link: "git+https://github.com/testing-library/jest-dom.git",
    remoteVersion: "5.14.1",
    installedVersion: "5.14.1",
    author: "Ernesto Garcia",
  },
  {
    department: "kessler",
    relatedTo: "stuff",
    name: "@testing-library/react",
    licensePeriod: "perpetual",
    material: "material",
    licenseType: "MIT",
    link: "git+https://github.com/testing-library/react-testing-library.git",
    remoteVersion: "11.2.7",
    installedVersion: "11.2.7",
    author: "Kent C. Dodds",
  },
  {
    department: "kessler",
    relatedTo: "stuff",
    name: "@testing-library/user-event",
    licensePeriod: "perpetual",
    material: "material",
    licenseType: "MIT",
    link: "git+https://github.com/testing-library/user-event.git",
    remoteVersion: "12.8.3",
    installedVersion: "12.8.3",
    author: "Giorgio Polvara",
  },
  {
    department: "kessler",
    relatedTo: "stuff",
    name: "@types/jest",
    licensePeriod: "perpetual",
    material: "material",
    licenseType: "MIT",
    link: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
    remoteVersion: "26.0.24",
    installedVersion: "26.0.24",
  },
  {
    department: "kessler",
    relatedTo: "stuff",
    name: "@types/node",
    licensePeriod: "perpetual",
    material: "material",
    licenseType: "MIT",
    link: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
    remoteVersion: "12.20.16",
    installedVersion: "12.20.16",
  },
  {
    department: "kessler",
    relatedTo: "stuff",
    name: "@types/react",
    licensePeriod: "perpetual",
    material: "material",
    licenseType: "MIT",
    link: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
    remoteVersion: "17.0.14",
    installedVersion: "17.0.14",
  },
  {
    department: "kessler",
    relatedTo: "stuff",
    name: "@types/react-dom",
    licensePeriod: "perpetual",
    material: "material",
    licenseType: "MIT",
    link: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
    remoteVersion: "17.0.9",
    installedVersion: "17.0.9",
  },
  {
    department: "kessler",
    relatedTo: "stuff",
    name: "animejs",
    licensePeriod: "perpetual",
    material: "material",
    licenseType: "MIT",
    link: "git+https://github.com/juliangarnier/anime.git",
    remoteVersion: "3.2.1",
    installedVersion: "3.2.1",
    author: "Julian Garnier",
  },
  {
    department: "kessler",
    relatedTo: "stuff",
    name: "react",
    licensePeriod: "perpetual",
    material: "material",
    licenseType: "MIT",
    link: "git+https://github.com/facebook/react.git",
    remoteVersion: "17.0.2",
    installedVersion: "17.0.2",
  },
  {
    department: "kessler",
    relatedTo: "stuff",
    name: "react-audio-player",
    licensePeriod: "perpetual",
    material: "material",
    licenseType: "MIT",
    link: "git+https://github.com/justinmc/react-audio-player.git",
    remoteVersion: "0.17.0",
    installedVersion: "0.17.0",
    author: "Justin McCandless",
  },
  {
    department: "kessler",
    relatedTo: "stuff",
    name: "react-dom",
    licensePeriod: "perpetual",
    material: "material",
    licenseType: "MIT",
    link: "git+https://github.com/facebook/react.git",
    remoteVersion: "17.0.2",
    installedVersion: "17.0.2",
  },
  {
    department: "kessler",
    relatedTo: "stuff",
    name: "react-router",
    licensePeriod: "perpetual",
    material: "material",
    licenseType: "MIT",
    link: "git+https://github.com/ReactTraining/react-router.git",
    remoteVersion: "5.2.0",
    installedVersion: "5.2.0",
    author: "React Training",
  },
  {
    department: "kessler",
    relatedTo: "stuff",
    name: "react-router-dom",
    licensePeriod: "perpetual",
    material: "material",
    licenseType: "MIT",
    link: "git+https://github.com/ReactTraining/react-router.git",
    remoteVersion: "5.2.0",
    installedVersion: "5.2.0",
    author: "React Training",
  },
  {
    department: "kessler",
    relatedTo: "stuff",
    name: "react-scripts",
    licensePeriod: "perpetual",
    material: "material",
    licenseType: "MIT",
    link: "git+https://github.com/facebook/create-react-app.git",
    remoteVersion: "4.0.3",
    installedVersion: "4.0.3",
  },
  {
    department: "kessler",
    relatedTo: "stuff",
    name: "typescript",
    licensePeriod: "perpetual",
    material: "material",
    licenseType: "Apache-2.0",
    link: "git+https://github.com/Microsoft/TypeScript.git",
    remoteVersion: "4.3.5",
    installedVersion: "4.3.5",
    author: "Microsoft Corp.",
  },
  {
    department: "kessler",
    relatedTo: "stuff",
    name: "web-vitals",
    licensePeriod: "perpetual",
    material: "material",
    licenseType: "Apache-2.0",
    link: "git+https://github.com/GoogleChrome/web-vitals.git",
    remoteVersion: "1.1.2",
    installedVersion: "1.1.2",
    author: "Philip Walton",
  },
];

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
        <h2> Hakk??nda </h2>
        <p>
          {" "}
          ???Gemimiz d??nyadan uzaklardaki bir gezegene yola ????kt??????nda ??ok basit
          bir g??revimiz vard??: uyumak. So??uk odadaki dondurulmu?? uyku
          yataklar??na yatacak, ve hedefimize vard??????m??zda uyanacakt??k. Ama ??yle
          olmad??...
        </p>
        <h2> Geli??tiriciler </h2>
        <p>
          Samet Umut Yi??ito??lu <br></br>Ege Emir ??zkan<br></br>Burak Keser
        </p>
        <h2> Lisanslar </h2>
        <ul>
          <li>
            Icons [Grave Icon] made by{" "}
            <a href="" title="surang">
              surang
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </li>
          <li>
            <a href="https://unsplash.com/photos/uhjiu8FjnsQ"> Photo by </a>
            <a href="https://unsplash.com/photos/KFIjzXYg1RM">
              {" "}
              Jeremy Bishop{" "}
            </a>
            on <a href="https://unsplash.com/"> Unsplash.</a>
          </li>
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
            <a
              href="
            https://fonts.google.com/specimen/Roboto"
            >
              Roboto Font by Christian Robertson
            </a>
          </li>
          <li>
            <a href="https://gisha.itch.io/spaceships-asset-pack">
              The Space Ship Assets Pack by Gisha, CC 1.0, Modified
            </a>
          </li>
          <li>
            <a href="https://fonts.google.com/specimen/VT323">
              VT323 Font by Peter Hull
            </a>
          </li>
          <li>
            <a href="https://fonts.google.com/specimen/Roboto+Slab">
              Roboto Slab by Christian Robertson
            </a>
          </li>
          <li>
            <a href="https://dos88.itch.io/dos-88-music-library">
              Checking Manifest{" "}
            </a>{" "}
            by
            <a href="https://www.youtube.com/user/AntiMulletpunk">DOS88</a>
          </li>
        </ul>
        <h2> Yaz??l??m Lisanslar?? </h2>
        <ul>
          {licenses.map((lic, index) => (
            <li key={"license" + index}>
              <a href={lic.link}>{lic.name}</a> by {lic.author} licenses under{" "}
              {lic.licenseType}
            </li>
          ))}
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
              Oyuna Ba??la
            </li>
            <li
              onClick={() => {
                setHelpVisible(true);
              }}
            >
              Hakk??nda
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
