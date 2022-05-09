import { fromEvent } from "rxjs";

let click$ = fromEvent(document, 'click');

// click$.subscribe(console.log)

// console.log("Tracker active");
