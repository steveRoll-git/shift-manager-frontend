/**
 * Linear interpolation from `a` to `b`.
 */
export default function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t
}
