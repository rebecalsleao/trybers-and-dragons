import Energy from '../Energy';

interface Fighter {
  attack(enemy: Fighter): void;
  special?(enemy: Fighter): void;
  levelUp(): void;
  receiveDamage(attackPoints: number): number;
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: Energy;
}

export default Fighter;
