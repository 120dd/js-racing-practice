import { Util } from './util.js';

const util = new Util();

/**
 * 이름을 받아서 car 객체를 만드는 클래스
 */
export class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    const randomNumber = util.getRandomNumberInRange(0, 9);
    if (randomNumber >= 4) {
      this.position++;
    }
  }
}
