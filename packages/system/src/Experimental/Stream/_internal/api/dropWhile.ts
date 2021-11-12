// ets_tracing: off

import type { Predicate } from "../../../../Function"
import * as SK from "../../Sink"
import type * as C from "../core"
import * as PipeThrough from "./pipeThrough"

/**
 * Drops all elements of the stream for as long as the specified predicate
 * evaluates to `true`.
 */
export function dropWhile_<R, E, A>(
  self: C.Stream<R, E, A>,
  f: Predicate<A>
): C.Stream<R, E, A> {
  return PipeThrough.pipeThrough(self, SK.dropWhile<E, A>(f))
}

/**
 * Drops all elements of the stream for as long as the specified predicate
 * evaluates to `true`.
 *
 * @ets_data_first dropWhile_
 */
export function dropWhile<A>(f: Predicate<A>) {
  return <R, E>(self: C.Stream<R, E, A>) => dropWhile_(self, f)
}