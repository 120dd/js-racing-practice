import { GameUi } from './ui.js';

class RacingGame {
  constructor() {
    this.cars = [];
    this.count = 0;
    this.gameUi = new GameUi();
  }

  preventSubmit() {
    this.gameUi.racingFormSubmit((e) => { e.preventDefault(); });
  }

  pressNameSubmitButton() {
    this.gameUi.carsNamesSubmitHandler((e) => {
      e.preventDefault();
      const rowNames = this.gameUi.carNamesInputValue();
      this.cars = rowNames.split(',');
    });
  }

  /** 시도할 횟수 확인 버튼을 눌렀을 때 실행 결과를 출력
   * */
  pressCountSubmitButton() {
    this.gameUi.racingCounterSubmitHandler((e) => {
      e.preventDefault();
      this.count = Number(this.gameUi.racingCountInputValue());
      this.play(this.cars, this.count);
    });
  }
}

const racingGame = new RacingGame();
racingGame.preventSubmit();
racingGame.pressNameSubmitButton();
racingGame.pressCountSubmitButton();
