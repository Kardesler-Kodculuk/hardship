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
    "Soğuk oda için enerji lazım!",
    "Dolaplar çalışmayı durduruyor, mürettabat insanları için üzülüyor.",
    { to: "sanity", type: "single", value: -100 },
    { to: "humans", type: "single", value: -1 }
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
  createEvent(
    2001,
    "Açlık!",
    "Gıda stoğumuz hızla tükenmekte, açlıktan ölüyoruz...",
    { to: "food", type: "single", value: -100 },
    { to: "sanity", type: "single", value: -100 },
    { to: "sanity", type: "continuous", value: -0.25 }
  ),
  createEvent(
    2001,
    "Yemekler Bozuluyor!",
    "Kaynakları kontrol etmek için daha fazla mürettebata ihtiyaç var...",
    { to: "food", type: "single", value: -100 },
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
  createEvent(
    300, "Stres Yeme", "İnsanlar uykusuzluk oluşan stres için yemeye başvuruyor.",
    { to: "food", type: "continuous", value: -0.25 },
    { to: "sanity", type: "continuous", value: -0.25 }
  ),
  createEvent(
    300, "Kabsular", "Mürettabat normalden daha fazla kabusa maruz kalıyor.",
    { to: "sanity", type: "continuous", value: -0.25 }
  )
]

const ControlDeckEvents: Event[] = [
  createEvent(
    4000,
    "Yanlış Yol",
    "Gemimimiz yanlış yola girdi, bu bize ciddi sorunlara sebep olacak.",
    { to: "progress", type: "single", value: -100 },
    { to: "sanity", type: "continuous", value: -0.25 }
  ),
  createEvent(
    4000,
    "Yol Kaygisi!",
    "Kaptan yolculuk konusunda gereğinden fazla endişelenmeye başladı, yardıma ihtiyacı var.",
    { to: "progress", type: "continuous", value: -0.25 },
    { to: "sanity", type: "continuous", value: -0.25 }
  ),
  createEvent(
    4000,
    "Meteorla Yakın Temas!",
    "Mürettabatın dikkatsiğliği sonucu nerdeyse gemi parçalanıyordu! Yolcular stresli",
    { to: "sanity", type: "continuous", value: -0.25 },
    { to: "sanity", type: "single", value: -50 }
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
  createEvent(
    4000,
    "Isyan!",
    "Bir anlık dikkatiszlik mürettabattaki sivrizekalıları yoldan çıkarttı, cephaneliğe sahip çık.",
    { to: "progress", type: "single", value: -100 },
    { to: "food", type: "single", value: -50 },
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
