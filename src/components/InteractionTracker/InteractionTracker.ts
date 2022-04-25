import { fromEvent } from "rxjs";

let click$ = fromEvent(document, 'click');

click$.subscribe(console.log)

let interactionTracker;

console.log("Tracker active");
