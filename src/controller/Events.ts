import Game, {states} from "./Game";

const CHANGE:  states = {
  energy: { total: 0, change: 0 },
  humans: { total: 0, change: 0 },
  food: { total: 0, change: 0 },
  sanity: { total: 0, change: 0 },
  progress: { total: 0, change: 0 },
};

export interface Effect {
    type: "continuous" | "single"
    to: keyof states
    value: number
}

export interface Event {
  id: number
  title: string
  effects: Effect[]
}

export default class Events {
  events : Event[]
  current : states[]

  constructor(...events:Event[]){
    this.events = events
    this.current = []
  }

  fireEvent(){
    let e = this.events[~~(Math.random() * this.events.length)]
    let c = {...CHANGE}
    let r = {...CHANGE}
    e.effects.forEach(e=>{
      if(e.type === "continuous") {
        c[e.to].change += e.value
        r[e.to].change += e.value
      } else {
        c[e.to].total += e.value
        r[e.to].total += e.value
      }
    })
    this.current.push(r)
    Game.modifyResources(c)
  }

  stopEvent(){
    this.current.forEach(e=>{
      Game.modifyResources(e)
    })
  }
}