# Project Hardship

## Gameplay

### Resource

| Resource | Description| Generated In
|------|---------|------------|
| Energy | To run the rooms and pods. | Generator |
| Food | To be consumed by woken up humans. | Cafeteria |
| Sanity | To be consumed by woken up humans. | Bedroom |
| Human | To, you know, do stuff. | Cold Room |

### Rooms

| Event ID | Room | Purpose |
| -------- |------|---------|
| 1000 | Generator | Generate electricity |
| 2000 | Cafeteria | Generate food |
| 3000 | Living Area  | Staff bedroom |
| 4000 | Control Deck | Control the ship |
| 5000 | Armory | Defend the ship |
| 6000 | Cold Room | Store frozen humans |

### Events

| Alias | Description |
| ----- | ----------- |
|E |Energy|
|S |Sanity|
|H |Human|
|F |Food|
|dX |X Consumption |

| ID | Title | Description |  Effect |
| -- | ----- | ----------- | --------- |
| 1000 | Lights Out! | Lights are sometimes cut to conserve energy  |  +0.25*dS |
| 1001 | Failing Pods | Cryogenic pods are failing, putting extra pressure on food supply. | +10H,-100S|
| 2000 | A Change in Taste | With our food supplies dwindling, we may have to eat Crew or Passengers. As usual. | +100F, -100S, 0*25dF |
| 2001 | Starvation. |
| 3000 |  ||
| 4000 |  ||
| 6000 |  ||