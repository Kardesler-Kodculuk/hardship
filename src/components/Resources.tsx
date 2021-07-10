import { gameManager, states } from "@controller";
import React from "react";
import "./Resources.css";

interface ResourceBarProps {
  resourceName: string;
  totalResources: number;
  resourceLimit: number;
}

function ResourceBar(props: ResourceBarProps) {
  return (
    <div className={props.resourceName + "ResourceBar"}>
      <div className="barBackground">
        <div
          className="barForeground"
          style={{
            width: (props.totalResources / props.resourceLimit) * 100 + "px",
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
      {props.resourceName} - {props.totalResources}/{props.resourceLimit}
    </div>
  );
}

export default function Resources() {
  return (
    <div className="ResourceDock">
      <div className="ResourceBars">
        {["energy", "food", "progress", "sanity"].map((element, index) => {
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
    </div>
  );
}
