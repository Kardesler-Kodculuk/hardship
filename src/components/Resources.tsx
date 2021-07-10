import { gameManager, states } from "@controller";
import React from "react";
import "./Resources.css";

interface ResourceBarProps {
  resourceName: string;
  totalResources: number;
  resourceLimit: number;
}

function getBgColourForResource(resourceName: string): string {
  switch (resourceName) {
    case "energy":
      return "rgba(255, 255, 0, 1)";
    case "food":
      return "rgba(0, 180, 5, 1)";
    case "sanity":
      return "rgba(180, 0, 150, 1)";
    case "progress":
      return "rgba(0, 125, 250, 0.4)";
    default:
      return "rgba(0, 0, 255, 1)";
  }
}

function ResourceBar(props: ResourceBarProps) {
  return (
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
  );
}

/**
 * Like resource bar but with text instead.
 * @param props
 */
function ResourceKey(props: ResourceBarProps) {
  return (
    <div className={props.resourceName + "ResourceKey"}>
      <img
        className={`resourceImage`}
        src={`/assets/images/icons/${props.resourceName}.svg`}
      />
      {Math.round(props.totalResources)}/{props.resourceLimit}
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
            />
          );
        })}
      </div>
      <ResourceKey
        resourceName="humans"
        totalResources={gameManager.resources.humans.total}
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
