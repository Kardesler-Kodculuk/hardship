interface resource {
  total: number;
  change: number;
  limit: number;
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
  constructor() {
    this.resources = {
      energy: { total: 0.0, change: 10, limit: 1000 },
      humans: { total: 0.0, change: 0.1, limit: 250 },
      food: { total: 0.0, change: 0, limit: 1000 },
      sanity: { total: 0.0, change: 0.01, limit: 1000 },
      progress: { total: 0.0, change: 0.1, limit: 1000 },
    };
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
    }
  }

  gameLoop(deltaTime: number) {
    for (let key in this.resources) {
      this.resources[key as keyof states].total +=
        this.resources[key as keyof states].change * deltaTime;
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
}

export default new Game();
