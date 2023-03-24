function myAddEventListener(string, callback, event) {
  if (event.type === "click") {
    callback(event);
  }

  // note that addEventListener doesn't
  // return anything!
}
