import { GameUi } from './ui.js';
import { Car } from './car.js';
import { Util } from './util.js';

const util = new Util();

class RacingGame {
  constructor() {
    this.cars = [];
    this.count = 0;
    this.gameUi = new GameUi();
  }

  initialize() {
    this.gameUi.initialize();

    this.gameUi.setCarNamesUpdateHandler((carNames) => {
      const validationResult = this.validateCarNames(carNames);
      if (validationResult) {
        this.gameUi.alertMessages(validationResult);
      } else {
        this.cars = [];
        carNames.forEach((name) => {
          this.cars.push(new Car(name));
        });
      }
    });

    this.gameUi.setCountUpdateHandler((count) => {
      this.count = count;
      if (this.cars.length === 0) {
        this.gameUi.alertMessages('자동차 이름을 입력해주세요');
        return;
      }
      this.play(this.cars, this.count);
    });
  }

  /**
   * carNames 가 정책에 맞는지 검사합니다.
   * @param carNames
   * @return {undefined | string[]} validation 이 실패한 상세 오류 메세지
   */
  validateCarNames(carNames) {
    const results = [];

    if (!this.isCarNameUnique(carNames)) {
      results.push('차량의 이름이 중복되었습니다');
    }

    const failedTotalCount = carNames.reduce((failedCount, carName) => {
      if (this.isCarNameLessThanMaxLen(carName)) {
        return failedCount;
      } else {
        return failedCount + 1;
      }
    }, 0);

    if (failedTotalCount > 0) {
      results.push('차량의 이름은 5 글자 까지만 가능합니다');
    }

    return results.length === 0 ? undefined : results;
  }

  isCarNameLessThanMaxLen(carName) {
    return carName.length <= 5;
  }

  isCarNameUnique(carNames) {
    return !util.isDuplicate(carNames);
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
      this.gameUi.showWinner(this.cars[index]);
    });
  }
}

const racingGame = new RacingGame();
racingGame.initialize();
