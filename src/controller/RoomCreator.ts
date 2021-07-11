import { createEvent, Event } from "./Events";
import { Room } from "./Room";

const GeneratorEvents: Event[] = [
  createEvent(
    1000,
    "Lights Out!",
    "Lights are sometimes cut to conserve energy",
    { to: "sanity", type: "continuous", value: 0.25 }
  ),
  createEvent(
    1001,
    "Failing Pods",
    "Cryogenic pods are failing, putting extra pressure on food supply.",
    { to: "humans", type: "single", value: 10 },
    { to: "sanity", type: "single", value: -100 }
  ),
];

const CafeteriaEvents: Event[] = [
  createEvent(
    2000,
    "A Change in Taste",
    "With our food supplies dwindling we are starving.",
    { to: "sanity", type: "single", value: -100 },
    { to: "sanity", type: "continuous", value: 0.25 }
  ),
];

const LivingAreaEvents: Event[] = [
  createEvent(
    3000,
    "Mistakes, Accidents",
    "A lot of sleepless people mean a lot of accidents.",
    { to: "energy", type: "continuous", value: -0.05 },
    { to: "food", type: "continuous", value: -0.05 },
    { to: "progress", type: "continuous", value: -0.05 },
    { to: "sanity", type: "continuous", value: -0.05 }
  ),
];

const ControlDeckEvents: Event[] = [
  createEvent(
    4000,
    "	The Wrong Turn",
    "You just took the wrong turn! It will cost you.",
    { to: "progress", type: "single", value: -100 },
    { to: "sanity", type: "continuous", value: 0.25 }
  ),
];

const ArmoryEvents: Event[] = [
  createEvent(
    4000,
    "	Aliens!",
    "Alien attack, bla bla.",
    { to: "progress", type: "single", value: -100 },
    { to: "sanity", type: "continuous", value: 0.25 }
  ),
];
const ColdRoomEvents: Event[] = [
  createEvent(
    4000,
    "New Staff",
    "Your negligent of the cold room led to more mouth to feed.",
    { to: "humans", type: "single", value: 2 },
    { to: "sanity", type: "continuous", value: 0.25 }
  ),
];

const Generator = new Room(
  "generator",
  "Jenaretör",
  "Generates electricity",
  ...GeneratorEvents
);
const Cafeteria = new Room(
  "cafeteria",
  "Kafeterya",
  "Generates food",
  ...CafeteriaEvents
);
const LivingArea = new Room("living", "Yatakhane", "", ...LivingAreaEvents);
const ControlDeck = new Room("control", "Köprü", "", ...ControlDeckEvents);
const Armory = new Room(
  "armory",
  "Cephanelik",
  "Defends the ship",
  ...ArmoryEvents
);
const ColdRoom = new Room(
  "cold",
  "Soğuk Oda",
  "Stores frozen humans",
  ...ColdRoomEvents
);

const rooms = [Generator, Cafeteria, LivingArea, ControlDeck, Armory, ColdRoom];

LivingArea.fireEvent();

export {
  rooms,
  Generator,
  LivingArea,
  Cafeteria,
  ControlDeck,
  Armory,
  ColdRoom,
};
export {
  GeneratorEvents,
  CafeteriaEvents,
  LivingAreaEvents,
  ControlDeckEvents,
  ArmoryEvents,
  ColdRoomEvents,
};
