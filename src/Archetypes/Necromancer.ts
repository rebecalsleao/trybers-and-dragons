import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private static _createdArchetypeInstances = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    Necromancer._createdArchetypeInstances += 1;
    this._energyType = 'mana';
  }

  static createdArchetypeInstances(): number {
    return Necromancer._createdArchetypeInstances;
  }

  get energyType() {
    return this._energyType;
  }
}

export default Necromancer;