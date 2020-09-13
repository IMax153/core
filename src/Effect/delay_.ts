import type { HasClock } from "../Clock"
import { chain_ } from "./core"
import type { AsyncRE, Effect } from "./effect"
import { sleep } from "./sleep"

/**
 * Delay the effect of ms milliseconds
 */
export function delay_<S, R, E, A>(
  effect: Effect<S, R, E, A>,
  ms: number
): AsyncRE<R & HasClock, E, A> {
  return chain_(sleep(ms), () => effect)
}