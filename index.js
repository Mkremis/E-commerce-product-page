import { DSK_EVENTS } from "./desktop.js";
import { MOBILE_EVENTS } from "./mobile.js";
import { ALL_EVENTS } from "./all.js";

document.addEventListener("click", (e) => {
  e.preventDefault();
  const CLASS_TARGET = e.target.classList[0];
  let dskSearch = Object.keys(DSK_EVENTS).find(
      (selector) => selector === CLASS_TARGET
    ),
    allSearch = Object.keys(ALL_EVENTS).find(
      (selector) => selector === CLASS_TARGET
    ),
    mobileSearch = Object.keys(MOBILE_EVENTS).find(
      (selector) => selector === CLASS_TARGET
    );
  if (dskSearch) {
    DSK_EVENTS[CLASS_TARGET].action(CLASS_TARGET, e.target);
  } else if (allSearch) {
    ALL_EVENTS[CLASS_TARGET].action(CLASS_TARGET, e.target);
  } else if (mobileSearch) {
    MOBILE_EVENTS[CLASS_TARGET].action(CLASS_TARGET, e.target);
  } else {
    return;
  }
});
