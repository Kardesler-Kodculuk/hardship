import { rollDie } from "@utils";
import { rooms } from "./RoomCreator";

interface resource {
  total: number;
  change: number;
  limit: number;
  name: string;
}

export type states = {
  energy: resource;
  sanity: resource;
  food: resource;
  humans: resource;
  progress: resource;
};

class Game {
  resources: states;
  deadCount: number;
  staffCount: number;
  constructor() {
    this.resources = {
      energy: { total: 500.0, change: 10, limit: 1000, name: "Enerji" },
      humans: { total: 5, change: 0, limit: 250, name: "İnsan" },
      food: { total: 500.0, change: 10, limit: 1000, name: "Yemek" },
      sanity: { total: 500.0, change: 10, limit: 1000, name: "Akıl Sağlığı" },
      progress: { total: 0.0, change: 0.83, limit: 1000, name: "İlerleme" },
    };
    this.deadCount = 0;
    this.staffCount = 5;
  }

  /**
   * Modify game resource totals and modifiers.
   * @param resourceChange
   */
  modifyResources(resourceChange: states) {
    type s = keyof states;
    for (let key in this.resources) {
      this.resources[key as s].total += resourceChange[key as s].total;
      this.resources[key as s].change += resourceChange[key as s].change;
      if (key == "humans" && resourceChange[key as s].total <= 0) {
        this.deadCount -= resourceChange[key as s].total; // As we keep track of them.
      }
    }
  }

  addHumans(humanCount: number) {
    this.resources.humans.total += humanCount;
  }

  //removes human from cold room
  addToStaff(humanCount: number) {
    this.resources.humans.total += humanCount;
    this.staffCount += humanCount;
  }

  //retract a human to add to room
  getSingleStaff() {
    if (this.staffCount > 0) {
      this.staffCount -= 1;
    } else {
      throw new Error("No staff to get");
    }
  }

  //put back the removed staff
  putBackStaff() {
    this.staffCount += 1;
  }

  gameLoop(deltaTime: number) {
    for (let key in this.resources) {
      if (key === "humans") {
        continue; // Humans are not updated in the same way.
      }
      if (key === "progress") {
        this.resources[key as keyof states].total +=
          this.resources[key as keyof states].change * deltaTime;
      } else {
        this.resources[key as keyof states].total +=
          (this.resources[key as keyof states].change -
            0.4 * this.resources.humans.total) *
          deltaTime;
      }
      if (
        this.resources[key as keyof states].total >=
        this.resources[key as keyof states].limit
      ) {
        this.resources[key as keyof states].total =
          this.resources[key as keyof states].limit;
      } else if (this.resources[key as keyof states].total <= 0) {
        this.resources[key as keyof states].total = 0;
      }
    }
  }

  /**
   * Return true if any resources fell to or below zero.
   */
  anyZero() {
    return (
      this.resources.energy.total <= 0 ||
      this.resources.food.total <= 0 ||
      this.resources.humans.total <= 0 ||
      this.resources.sanity.total <= 0
    );
  }
}

export default new Game();
