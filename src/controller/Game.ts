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
  constructor() {
    this.resources = {
      energy: { total: 500.0, change: 10, limit: 1000, name: "Enerji" },
      humans: { total: 1.0, change: 10, limit: 250, name: "İnsan" },
      food: { total: 500.0, change: 10, limit: 1000, name: "Yemek" },
      sanity: { total: 500.0, change: 10, limit: 1000, name: "Akıl Sağlığı" },
      progress: { total: 0.0, change: 0, limit: 1000, name: "İlerleme" },
    };
    this.deadCount = 0;
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

  gameLoop(deltaTime: number) {
    for (let key in this.resources) {
      if (key === "humans") {
        continue; // Humans are not updated in the same way.
      }
      this.resources[key as keyof states].total +=
        (this.resources[key as keyof states].change -
          0.01 * this.resources.humans.total) *
        deltaTime;
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
    return false;
    return (
      this.resources.energy.total <= 0 ||
      this.resources.food.total <= 0 ||
      this.resources.humans.total <= 0 ||
      this.resources.sanity.total <= 0
    );
  }
}

export default new Game();
