import { useHistory } from "react-router";
import "./EndScreen.css";
import { useEffect } from "react";
import { useState } from "react";
interface ScreenProps {
  paragraphs: string[];
  showMainButton?: string;
}

/**
 * Print out the contents of the lists to a screen,
 * each element is a paragraph.
 * @param props
 * @returns
 */
function OldScreen(props: ScreenProps) {
  const history = useHistory();
  return (
    <div className="oldComputerScreen">
      {props.paragraphs
        .filter((element) => element !== "")
        .map((paragraph) => (
          <p>{paragraph}</p>
        ))}
      {props.showMainButton ? (
        <button
          onClick={() => {
            history.push("/");
          }}
        >
          {props.showMainButton}
        </button>
      ) : null}
    </div>
  );
}

export function EndScreen(props: { paragraphs: string[] }) {
  const { paragraphs } = props;
  const [renderedParagraphs, setRenderedParagraphs] = useState<string[]>([]);
  const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0); // Index of the letter in the current paragraph.
  const [hasFinished, setHasFinished] = useState(false); // True if the rendering finished.
  useEffect(() => {
    let changed = false;
    if (currentParagraphIndex >= paragraphs.length) {
      setHasFinished(true);
      return; // No need to update anything for now.
    }
    if (currentIndex >= paragraphs[currentParagraphIndex].length) {
      changed = true;
      setCurrentParagraphIndex(
        (previousCurrentParagraphIndex) => previousCurrentParagraphIndex + 1
      );
      setCurrentIndex(0);
    }
    setTimeout(() => {
      // Add the next letter.
      setRenderedParagraphs((previousRenderedParagraphs) => {
        let par = previousRenderedParagraphs;
        if (changed || (currentParagraphIndex === 0 && currentIndex === 0)) {
          // If we progressed to the next paragraph.
          par.push("");
        } else {
          par[par.length - 1] = paragraphs[currentParagraphIndex].substring(
            0,
            currentIndex + 1
          );
        }
        setCurrentIndex((previousCurrentIndex) => previousCurrentIndex + 1);
        return par;
      });
    }, 50);
  }, [currentIndex]);
  if (hasFinished) {
    return (
      <div className="victoryScreen">
        <OldScreen
          paragraphs={renderedParagraphs}
          showMainButton="Menüye Dön"
        />
      </div>
    );
  }
  return (
    <div className="victoryScreen">
      <OldScreen paragraphs={renderedParagraphs} />
    </div>
  );
}
