function myAddEventListener(string, callback, event) {
  if (event.type === string) {
    callback(event);
  }
}
