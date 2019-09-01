/**
 * 提升math.round的性能
 */
export function mathRound(somenum: number): number {
  // // With a bitwise or.
  // let rounded = (0.5 + somenum) | 0;
  // // A double bitwise not.
  // let rounded = ~~(0.5 + somenum);
  // Finally, a left bitwise shift.
  let rounded = (0.5 + somenum) << 0
  return rounded
}

/**
 * 提升math.floor的性能
 */
export function mathFloor(somenum: number): number {
  let rounded = somenum << 0
  return rounded
}
