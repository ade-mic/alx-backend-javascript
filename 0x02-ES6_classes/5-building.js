// 5-building.js
export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (this.constructor !== Building) {
      this.evacuationWarningMessage();
    }
  }

  get sqft() {
    return this._sqft;
  }

  // Abstract method, must be implemented in subclasses
  evacuationWarningMessage() {
    this.message = 'Class extending Building must override evacuationWarningMessage';
    throw new Error(`${this.message}`);
  }
}
