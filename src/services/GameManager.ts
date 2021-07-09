interface resource {
    total: number
    modifier: number
}

type states = {
    [key: string]: resource
}

class Game {
    resources: states
    constructor() {
        this.resources = {
            energy: { total: 0, modifier: 0 },
            humans: { total: 0, modifier: 0 },
            sanity: { total: 0, modifier: 0 },
            progress: { total: 0, modifier: 0 }
        }
    }

    modifyResources(resourceChange: states) {
        this.resorces.
    }
}

export default new Game();