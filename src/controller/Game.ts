interface resource {
  total: number
  change: number
}

export type states = {
  energy: resource
  sanity: resource
  food: resource
  humans: resource
  progress: resource
}

class Game {
  resources: states
  constructor() {
    this.resources = {
      energy: { total: 0, change: 1 },
      humans: { total: 0, change: 0 },
      food: { total: 0, change: 0 },
      sanity: { total: 0, change: 1 },
      progress: { total: 0, change: 0 },
    }
  }

  /**
   * Modify game resource totals and modifiers.
   * @param resourceChange
   */
  modifyResources(resourceChange: states) {
    type s = keyof states
    for (let key in this.resources) {
      this.resources[key as s].total += resourceChange[key as s].total
      this.resources[key as s].change += resourceChange[key as s].change
    }
  }

  gameLoop(deltaTime: number) {
    for (let key in this.resources) {
      this.resources[key as keyof states].total +=
        this.resources[key as keyof states].change * deltaTime
    }
  }
}

export default new Game()
