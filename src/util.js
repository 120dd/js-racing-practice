export class Util {
  /**
   * 인풋이 target 을 가지고 있는지 확인
   * @param {string} rowName
   * @param {string} target
   * @return {boolean}
   */
  hasTarget(rowName, target) {
    return rowName.includes(target);
  }

  /**
   * separator 를 기준으로 rowName 을 배열로 나눔
   * @param {string} rowName
   * @param {string} separator
   * @return {[string]}
   */
  convertStringToSplitArray(rowName, separator) {
    return rowName.split(`${separator}`);
  }

  /**
   * string 의 길이가 적절한지 판단
   * @param {string} string
   * @param {number} length
   * @return {boolean}
   */
  isLengthCorrect(string, length) {
    return string.length <= length;
  }

  /**
   * 배열에 중복값이 있는지 확인
   * @param {[*]} array
   * @return {boolean}
   */
  isDuplicate(array) {
    const setCollection = new Set(array);
    return setCollection.size < array.length;
  }

  /**
   * 배열에 빈 스트링이 있는지 확인
   * @param {[]} array
   * @return {boolean}
   */
  hasEmpty(array) {
    return !array.every((el) => el);
  }
}
