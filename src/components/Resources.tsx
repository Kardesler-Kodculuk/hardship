import { gameManager, states } from "@controller";
import React from "react";

interface ResourceBarProps {
  resourceName: string;
  totalResources: number;
}

function ResourceBar(props: ResourceBarProps) {
  return (
    <div className={props.resourceName + "ResourceBar"}>
      {props.totalResources}
    </div>
  );
}

export default function Resources() {
  return (
    <div className="ResourceDock">
      {["energy", "humans", "food", "progress", "sanity"].map(
        (element, index) => {
          return (
            <ResourceBar
              key={"resourceNames" + index}
              resourceName={element}
              totalResources={
                gameManager.resources[element as keyof states].total
              }
            />
          );
        }
      )}
    </div>
  );
}
