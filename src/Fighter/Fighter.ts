import Energy from '../Energy';
import SimpleFighter from './SimpleFighter';

interface Fighter {
  attack(enemy: Fighter | SimpleFighter): void;
  special?(enemy: Fighter | SimpleFighter): void;
  levelUp(): void;
  receiveDamage(attackPoints: number): number;
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: Energy;
}

export default Fighter;