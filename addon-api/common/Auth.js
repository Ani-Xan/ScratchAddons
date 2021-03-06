export default class Auth extends EventTarget {
  constructor(addonObject) {
    super();
    scratchAddons.eventTargets.auth.push(this);
  }
  get isLoggedIn() {
    return scratchAddons.globalState.auth.isLoggedIn;
  }
  get username() {
    return scratchAddons.globalState.auth.username;
  }
  get userId() {
    return scratchAddons.globalState.auth.userId;
  }
  get xToken() {
    return scratchAddons.globalState.auth.xToken;
  }
  get sessionId() {
    return scratchAddons.globalState.auth.sessionId;
  }
  get csrfToken() {
    return scratchAddons.globalState.auth.csrfToken;
  }
  _removeEventListeners() {
    scratchAddons.eventTargets.auth.splice(
      scratchAddons.eventTargets.auth.findIndex((x) => x === this),
      1
    );
  }
}
