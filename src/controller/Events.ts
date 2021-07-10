import Game, { states } from "./Game"

const CHANGE: states = {
  energy: { total: 0, change: 0, limit: 0 },
  humans: { total: 0, change: 0, limit: 0 },
  food: { total: 0, change: 0, limit: 0 },
  sanity: { total: 0, change: 0, limit: 0 },
  progress: { total: 0, change: 0, limit: 0 },
}

export interface Effect {
  type: "continuous" | "single"
  to: keyof states
  value: number
}

export interface Event {
  id: number
  title: string
  description: string
  effects: Effect[]
}

export default class Events {
  events: Event[]
  current: states[]
  //needs an array of events
  constructor(...events: Event[]) {
    this.events = events
    this.current = []
  }

  //fires a random event from the event arrays
  fireEvent() {
    let e = this.events[~~(Math.random() * this.events.length)]
    let c = { ...CHANGE }
    let r = { ...CHANGE }
    e.effects.forEach(e => {
      if (e.type === "continuous") {
        c[e.to].change += e.value
        r[e.to].change += e.value
      } else {
        c[e.to].total += e.value
        r[e.to].total += e.value
      }
    })
    this.current.push(r)
    Game.modifyResources(c)
    return this.currentEventCount()
  }

  //Stops the all current events
  stopEvent() {
    if (!this.isEventPresent()) {
      throw new Error('There is no present event')
    }
    this.current.forEach(e => {
      Game.modifyResources(e)
    })
  }

  isEventPresent(): boolean {
    return this.current.length !== 0
  }

  currentEventCount(): number {
    return this.current.length
  }
}

export function createEvent(id: number, title: string, description: string, ...effects: Effect[]): Event {
  return { id, description, title, effects }
}
