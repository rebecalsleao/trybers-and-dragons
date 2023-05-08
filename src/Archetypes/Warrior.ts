import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private static _createdArchetypeInstances = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    Warrior._createdArchetypeInstances += 1;
    this._energyType = 'stamina';
  }

  static createdArchetypeInstances(): number {
    return Warrior._createdArchetypeInstances;
  }

  get energyType() {
    return this._energyType;
  }
}

export default Warrior;