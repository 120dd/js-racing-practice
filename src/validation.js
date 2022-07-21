import { Util } from './util.js';

export class Validation {
  constructor() {
    this.util = new Util();
  }

  /**
     * 차량의 이름이 5글자 이하인지 확인
     * @param {string} rowName
     * @return {boolean}
     */
  checkCarNameLength(rowName) {
    const carNamesArray = this.util.convertStringToSplitArray(rowName, ',');
    const result = [];
    carNamesArray.forEach((carName) => {
      result.push(this.util.isLengthCorrect(carName, 5));
    });
    return !result.includes(false);
  }
}
