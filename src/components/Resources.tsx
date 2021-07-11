import { gameManager, states } from "@controller";
import React from "react";
import "./Resources.css";

interface ResourceBarProps {
  resourceName: string;
  totalResources: number;
  resourceLimit: number;
  info?: { name: string | JSX.Element; value: string }[];
}

function getBgColourForResource(resourceName: string): string {
  switch (resourceName) {
    case "energy":
      return "#ffc107";
    case "food":
      return "#4caf50";
    case "sanity":
      return "#e91e63";
    case "progress":
      return "#03a9f4";
    default:
      return "#2196f3";
  }
}

function ResourceBar(props: ResourceBarProps) {
  return (
    <div className="barWrapper">
      <div className={props.resourceName + "ResourceBar"}>
        <img
          src={`/assets/images/icons/${props.resourceName}.svg`}
          className="barIcon"
        ></img>
        <div className="barBackground">
          <div
            className="barForeground"
            style={{
              width:
                (props.totalResources / props.resourceLimit) *
                  (props.resourceName !== "progress" ? 250 : 480) +
                "px",
              backgroundColor: getBgColourForResource(props.resourceName),
            }}
          ></div>
        </div>
      </div>
      <div className="barInfoWrapper">
        {props.info?.map((e) => (
          <div className="barInfo">
            <p>
              <b>{e.name}</b> {e.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * Like resource bar but with text instead.
 * @param props
 */
function ResourceKey(props: ResourceBarProps) {
  return (
    <div className="resourceKeyWrapper">
      <div className={props.resourceName + "ResourceKey"}>
        <img
          className={`resourceImage`}
          src={`/assets/images/icons/${props.resourceName}.svg`}
        />
        {Math.round(props.totalResources)}/{props.resourceLimit}
      </div>
      <div className="deadCount">
        <img src="/assets/images/icons/grave.svg" className="barIcon"></img>
        <p> 25 </p>
      </div>
    </div>
  );
}

export default function Resources() {
  return (
    <div className="ResourceDock">
      <div className="ResourceBars">
        {["energy", "food", "sanity"].map((element, index) => {
          return (
            <ResourceBar
              key={"resourceNames" + index}
              resourceName={element}
              totalResources={
                gameManager.resources[element as keyof states].total
              }
              resourceLimit={
                gameManager.resources[element as keyof states].limit
              }
              info={[
                {
                  name: "",
                  value: gameManager.resources[element as keyof states].name,
                },
                {
                  name: "Değişim: ",
                  value: `${Math.floor(
                    gameManager.resources[element as keyof states].change
                  )}`,
                },
              ]}
            />
          );
        })}
      </div>
      <ResourceKey
        resourceName="humans"
        totalResources={gameManager.staffCount}
        resourceLimit={gameManager.resources.humans.limit}
      />
      <ResourceBar
        resourceName="progress"
        totalResources={gameManager.resources.progress.total}
        resourceLimit={gameManager.resources.progress.limit}
      />
    </div>
  );
}
