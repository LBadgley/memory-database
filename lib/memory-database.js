const uuid = require('uuid/v4');

class MemoryDatabase {
  constructor() {
    this.store = {};
  }

  create(dog) {
    const id = uuid();
    const newObj = { ...dog, id: id };
    this.store[id] = newObj;
    return newObj;
  }
  findById(id) {
    return this.store[id] || null;
  }
  find(){
    return Object.values(this.store);
  }
}

module.exports = MemoryDatabase;


