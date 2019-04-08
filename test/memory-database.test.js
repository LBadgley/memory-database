const MemoryDatabase = require('../lib/memory-database');

describe('memory-db methods', () => {
  let db = null;
  beforeEach(() => {
    db = new MemoryDatabase();
  });

  it('create empty store', () => {
    expect(db.store).toEqual({});
  });

  it('can create a new item', () => {
    const dog = {
      name: 'Rufus',
    };

    const newDog = db.create(dog);
    expect(Object.values(db.store)).toContainEqual(newDog);
  });

  it('returns obj from id', () => {
    const dog = { name: 'Rufus' };
    const newDog = db.create(dog);
    expect(db.findById(newDog.id)).toEqual({ ...newDog });
  });

  it('return null from invalid id', () => {
    const dog = { name: 'Rufus' };
    db.create(dog);
    expect(db.findById(2)).toEqual(null);
  });

  it('returns all objs in this.store', () => {
    const dog2 = db.create({ name: 'Katey Rose' });
    const dog3 = db.create({ name: 'Lewis' });
    expect(db.find()).toEqual([{ ...dog2 }, { ...dog3 }]);
  });
  it('finds and replaces obj based on id', () => {
    const newDog = db.create({ name: 'Rufus' });
    let id = newDog.id;
    expect(db.findByIdReplace(id, { name: 'Rufus' })).toEqual({ id: expect.any(String), name: 'Rufus' });
  });
  it('find obj and deletes by id', () => {
    const newDog = db.create({ name: 'Raj' });
    let id = newDog.id;
    expect(db.findByIdDelete(id)).toEqual({ ...newDog });
  });
  test('drop clears all items from storage', () => {
    db.create({ name: 'Ruby' });
    db.drop();
    expect(db.store).toEqual({});
  });
});
  
