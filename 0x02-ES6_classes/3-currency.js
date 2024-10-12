export default class Currency {
  constructor(code, name) {
    if (typeof code === 'string' || typeof name === 'string') {
      this._code = code;
      this._name = name;
    } else {
      throw new TypeError('code and name attribure must be a string');
    }
  }

  get code() {
    return this._code;
  }

  set code(newCode) {
    if (typeof code === 'string') {
      this._code = newCode;
    } else {
      throw new TypeError('code must be a string');
    }
  }

  get name() {
    return this._name;
  }

  set neme(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    } else {
      throw new TypeError('name must be a string');
    }
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
