import Race from './Race';

class Halfling extends Race {
  static _createdRacesInstances = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling._createdRacesInstances += 1;
    this._maxLifePoints = 60;
  }

  static createdRacesInstances(): number {
    return Halfling._createdRacesInstances;
  }
  
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Halfling;
