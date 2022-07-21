import { GameUi } from './ui.js';
import { Car } from './car.js';

class RacingGame {
  constructor() {
    this.cars = [];
    this.count = 0;
    this.gameUi = new GameUi();
  }

  initialize() {
    this.gameUi.initialize();
    this.gameUi.setCarNamesUpdateHandler((carNames) => {
      this.cars = [];
      carNames.forEach((name) => {
        this.cars.push(new Car(name));
      });
    });
    this.gameUi.setCountUpdateHandler((count) => {
      this.count = count;
      if (this.cars.length === 0) {
        this.gameUi.alertMessage('자동차 이름을 입력해주세요');
        return;
      }
      this.play(this.cars, this.count);
    });
  }

  /**
   * 인풋을 받아 게임 결과와 우승자를 출력
   * @param {[cars]} cars
   * @param count
   */
  play(cars, count) {
    for (let i = 0; i < count; i++) {
      cars.forEach((car) => {
        car.move();
        this.gameUi.showResult(car.name, car.position);
      });
    }
    this.getWinners(cars);
  }

  /**
   * 차량들의 정보를 받아, 우승자 출력
   * @param {[cars]} cars
   */
  getWinners(cars) {
    const positions = [];
    cars.map((car) => {
      positions.push(car.position);
    });
    const max = positions.reduce((m, n) => Math.max(m, n));
    const maxIndex = [...positions.keys()].filter((i) => positions[i] === max);
    maxIndex.forEach((index) => {
      this.gameUi.showWinner(this.cars[index].name);
    });
  }
}

const racingGame = new RacingGame();
racingGame.initialize();
