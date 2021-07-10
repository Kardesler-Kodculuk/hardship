import { createEvent, Event } from "./Events"
import { Room } from "./Room"

const GeneratorEvents: Event[] = [
  createEvent(1000, "Lights Out!", "Lights are sometimes cut to conserve energy",
    { to: "sanity", type: "continuous", value: .25 }),
  createEvent(1001, "Failing Pods", "Cryogenic pods are failing, putting extra pressure on food supply.",
    { to: "humans", type: "single", value: 10 }, { to: "sanity", type: "single", value: -100 })
]

const CafeteriaEvents: Event[] = [
  createEvent(2000, "A Change in Taste", "With our food supplies dwindling we are starving.",
    { to: "sanity", type: "single", value: -100 }, { to: "sanity", type: "continuous", value: .25 })
]

const LivingAreaEvents: Event[] = [
  createEvent(3000, "Mistakes, Accidents", "A lot of sleepless people mean a lot of accidents.",
    { to: "energy", type: "continuous", value: .05 }, { to: "food", type: "continuous", value: .05 },
    { to: "progress", type: "continuous", value: .05 }, { to: "sanity", type: "continuous", value: .05 })
]

const ControlDeckEvents: Event[] = [
  createEvent(4000, "	The Wrong Turn", "You just took the wrong turn! It will cost you.",
    { to: "progress", type: "single", value: -100 }, { to: "sanity", type: "continuous", value: .25 })
]

const ArmoryEvents: Event[] = [
  createEvent(4000, "	Aliens!", "Alien attack, bla bla.",
    { to: "progress", type: "single", value: -100 }, { to: "sanity", type: "continuous", value: .25 })
]
const ColdRoomEvents: Event[] = [
  createEvent(4000, "New Staff", "Your negligent of the cold room led to more mouth to feed.",
    { to: "humans", type: "single", value: 2 }, { to: "sanity", type: "continuous", value: .25 })
]

const Generator = new Room("Generator", "Generates electricity", ...GeneratorEvents)
const Cafeteria = new Room("Living Area", "Generates food", ...LivingAreaEvents)
const LivingArea = new Room("Cafeteria", "Staff bedroom", ...CafeteriaEvents)
const ControlDeck = new Room("ControlDeck", "Controls the ship", ...ControlDeckEvents)
const Armory = new Room("Armory", "Defends the ship", ...ArmoryEvents)
const ColdRoom = new Room("Cold Room", "Stores frozen humans", ...ColdRoomEvents)

export { Generator, LivingArea, Cafeteria, ControlDeck, Armory, ColdRoom }
export { GeneratorEvents, CafeteriaEvents, LivingAreaEvents, ControlDeckEvents, ArmoryEvents, ColdRoomEvents }