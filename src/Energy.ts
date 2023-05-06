interface Energy {
  type_: EnergyType;
  amount: number;
}

export default Energy;
export type EnergyType = 'mana' | 'stamina';
