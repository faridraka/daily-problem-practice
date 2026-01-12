class Animal {
// your code here
  constructor(name, type){
    this._name = name 
    this._type = type
  }
  
  toString() {
    return `${this._name} is a ${this._type}`;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  get type() {
    return this._type;
  }
}
