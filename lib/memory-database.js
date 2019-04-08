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
  findByIdReplace(id, object) {
    if(this.findById(id)) {
      this.store[id] = { ...object, id: id };
      return this.store[id];
    } else {
      return null;
    }
  }
  findByIdDelete(id) {
    const idToFind = this.store[id];
    delete this.store[id];
    if(idToFind) {
      return idToFind;
    } else {
      return null;
    }
  }

}

module.exports = MemoryDatabase;


