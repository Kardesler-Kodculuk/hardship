import Events from "./Events";

class Room {
  eventHandler: Events
  constructor() {
    this.eventHandler = new Events()
  }
}