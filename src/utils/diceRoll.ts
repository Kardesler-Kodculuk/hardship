/**
 * Roll a dice, return true if the number is smaller than the
 *  one given.
 * @param possibility
 */
export function rollDie(possibility: number): boolean {
  return possibility < Math.random();
}
