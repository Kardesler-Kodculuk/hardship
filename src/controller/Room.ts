import Events, { Event } from "./Events";

export class Room {
  eventHandler: Events;
  description: string;
  staffCount: number;
  failureRate: number;
  title: string;
  name: string;
  constructor(
    name: string,
    title: string,
    description: string,
    ...events: Event[]
  ) {
    this.name = name;
    this.title = title;
    this.eventHandler = new Events(...events);
    this.failureRate = 30;
    this.staffCount = 0;
    this.description = description;
  }

  fireEvent(): number {
    return this.eventHandler.fireEvent();
  }

  stopEvent() {
    this.eventHandler.stopEvent();
  }

  //Adds a single staff to room, decreases the failure rate of the room
  //Room can not have staff more than 10
  addStaff() {
    if (!this.canAddStaff()) {
      throw new Error("You can not add more staff");
    }
    this.staffCount += 1;
    this.failureRate -= 10;
  }

  //Remove a single staff from the room and increase failure rate of the room
  //Removal can not be done if room does not have staff
  removeStaff() {
    if (!this.canRemoveStaff()) {
      throw new Error("No staff to remove");
    }
    this.staffCount -= 1;
    this.failureRate += 10;
  }

  canAddStaff() {
    return this.staffCount < 10;
  }

  canRemoveStaff() {
    return this.staffCount > 0;
  }
}
