import { createEvent, Event } from "./Events"
import { Room } from "./Room"

const GeneratorEvents: Event[] = [
  createEvent(
    1000,
    "Işıklar Gitti!",
    "Enerji kıtlığımız yüzünden sık sık ışıkları kesmek zorunda kalıyoruz, mürettebat rahatsız.",
    { to: "sanity", type: "continuous", value: -0.25 }
  ),
  createEvent(
    1001,
    "Failing Pods",
    "Cryogenic pods are failing, putting extra pressure on food supply.",
    { to: "sanity", type: "single", value: -100 }
  ),
]

const CafeteriaEvents: Event[] = [
  createEvent(
    2000,
    "Tat Değişikliği",
    "Gıda stoğumuz hızla tükenmekte, çaresizlikten giderek daha kötü yemeklere başvuruyoruz...",
    { to: "sanity", type: "single", value: -100 },
    { to: "sanity", type: "continuous", value: -0.25 }
  ),
]

const LivingAreaEvents: Event[] = [
  createEvent(
    3000,
    "Hatalar ve Kazalar",
    "Bir yığın uykusuz insan bir yığın kazaya sebep oluyor, geminin her yerinde sorunlar oluşuyor.",
    { to: "energy", type: "continuous", value: -0.05 },
    { to: "food", type: "continuous", value: -0.05 },
    { to: "progress", type: "continuous", value: -0.05 },
    { to: "sanity", type: "continuous", value: -0.05 }
  ),
]

const ControlDeckEvents: Event[] = [
  createEvent(
    4000,
    "Yanlış Yol",
    "Gemimimiz yanlış yola girdi, bu bize ciddi sorunlara sebep olacak.",
    { to: "progress", type: "single", value: -100 },
    { to: "sanity", type: "continuous", value: -0.25 }
  ),
]

const ArmoryEvents: Event[] = [
  createEvent(
    4000,
    "Uzaylılar Saldırıyor",
    "Uzaylı saldırısına hazırlıksız yakalandık, gemimiz kaçış manevraları yapıp zaman kaybetmek zorunda kaldı.",
    { to: "progress", type: "single", value: -100 },
    { to: "sanity", type: "continuous", value: -0.25 }
  ),
]

const Generator = new Room(
  "generator",
  "Jenaretör",
  "Generates electricity",
  ...GeneratorEvents
)
const Cafeteria = new Room(
  "cafeteria",
  "Kafeterya",
  "Generates food",
  ...CafeteriaEvents
)
const LivingArea = new Room("living", "Yatakhane", "", ...LivingAreaEvents)
const ControlDeck = new Room("control", "Köprü", "", ...ControlDeckEvents)
const Armory = new Room(
  "armory",
  "Cephanelik",
  "Defends the ship",
  ...ArmoryEvents
)
const ColdRoom = new Room("cold", "Soğuk Oda", "Stores frozen humans", ...[])

const rooms = [Generator, Cafeteria, LivingArea, ControlDeck, Armory, ColdRoom]

export {
  rooms,
  Generator,
  LivingArea,
  Cafeteria,
  ControlDeck,
  Armory,
  ColdRoom,
}

export {
  GeneratorEvents,
  CafeteriaEvents,
  LivingAreaEvents,
  ControlDeckEvents,
  ArmoryEvents,
}
