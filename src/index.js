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
    this.gameUi.setCarNamesUpdateHandler(carNames => {
      carNames.forEach((name) => {
        this.cars.push(new Car(name));
      });
    });
  }

  /**
   * 시도할 횟수 확인 버튼을 눌렀을 때 실행 결과를 출력
   */
  pressCountSubmitButton() {
    this.gameUi.racingCounterSubmitHandler((e) => {
      e.preventDefault();
      this.count = Number(this.gameUi.racingCountInputValue());
      this.play(this.cars, this.count);
    });
  }

  play(cars, count) {
    for (let i = 0; i < count; i++) {
      cars.forEach((car) => {
        this.gameUi.showResult(car.name, car.position);
      });
    }
    this.gameUi.showWinner(this.cars[0].name);
  }
}

const racingGame = new RacingGame();

racingGame.initialize();
// TODO: refactoring
racingGame.pressCountSubmitButton();
