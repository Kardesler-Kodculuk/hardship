import Game, { states } from "./Game"

const CHANGE: states = {
  energy: { total: 0, change: 0, limit: 0, name: "Enerji" },
  humans: { total: 0, change: 0, limit: 0, name: "İnsan" },
  food: { total: 0, change: 0, limit: 0, name: "Yemek" },
  sanity: { total: 0, change: 0, limit: 0, name: "Akıl Sağlığı" },
  progress: { total: 0, change: 0, limit: 0, name: "İlerleme" },
}

export interface Effect {
  type: "continuous" | "single"
  to: keyof states
  to_tr: "Enerji" | "İnsan" | "Yemek" | "Akıl Sağlığı" | "İlerleme"
  value: number
}

export interface Event {
  id: number
  show: boolean
  title: string
  description: string
  effects: Effect[]
}

export interface EventWithCount {
  id: number
  count: number
  show: boolean
  title: string
  description: string
  effects: Effect[]
}
export default class Events {
  events: Event[]
  currentEvents: EventWithCount[]
  currentEffects: states[]
  //needs an array of events
  constructor(...events: Event[]) {
    this.events = events
    this.currentEffects = []
    this.currentEvents = []
  }

  //fires a random event from the event arrays
  fireEvent(): EventWithCount | null {
    if (this.currentEventCount() < 2) {
      let e = this.events[~~(Math.random() * this.events.length)]
      let c = { ...CHANGE }
      let r = { ...CHANGE }
      e.effects.forEach((e) => {
        if (e.type === "continuous") {
          c[e.to] = { ...c[e.to], change: c[e.to].change + e.value }
          r[e.to] = { ...r[e.to], change: r[e.to].change - e.value }
        } else {
          c[e.to] = { ...c[e.to], total: c[e.to].total + e.value }
        }
      })
      Game.modifyResources(c)
      this.currentEffects.push(r)
      this.currentEvents.push({ ...e, count: this.currentEventCount() })
      return { ...e, count: this.currentEventCount() }
    }
    return null
  }

  //Stops the all current events
  stopEvent() {
    if (!this.isEventPresent()) {
      throw new Error("There is no present event")
    }
    this.currentEffects.forEach((e) => {
      Game.modifyResources(e)
    })
    this.currentEvents = []
    this.currentEffects = []
  }

  isEventPresent(): boolean {
    return this.currentEffects.length !== 0
  }

  currentEventCount(): number {
    return this.currentEffects.length
  }

  showEvent(count: number) {
    const e = this.currentEvents.find((e) => e.count === count)
    if (e) {
      e.show = true
    } else {
      throw new Error("Event not found")
    }
  }

  hideEvent(count: number) {
    const e = this.currentEvents.find((e) => e.count === count)
    if (e) {
      e.show = false
    } else {
      throw new Error("Event not found")
    }
  }

  isShown(count: number): boolean {
    const e = this.currentEvents.find((e) => e.count === count)
    if (e) {
      return e.show
    } else {
      throw new Error("Event not found")
    }
  }
  clear() {
    this.currentEffects = []
    this.currentEvents = []
  }
}

export function createEvent(
  id: number,
  title: string,
  description: string,
  ...effects: Effect[]
): Event {
  return { id, description, title, effects, show: true }
}
