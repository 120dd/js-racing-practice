/**
 * 인풋이 target 을 가지고 있는지 확인
 * @param {string} rowName
 * @param {string} target
 * @return {boolean}
 */
export function hasTarget(rowName, target) {
  return rowName.includes(target);
}

/**
 * separator 를 기준으로 rowName 을 배열로 나눔
 * @param {string} rowName
 * @param {string} separator
 * @return {[string]}
 */
export function convertStringToSplitArray(rowName, separator) {
  return rowName.split(`${separator}`);
}

/**
 * string 의 길이가 적절한지 판단
 * @param {string} string
 * @param {number} length
 * @return {boolean}
 */
export function isLengthCorrect(string, length) {
  return string.length <= length;
}

/**
 * 배열에 중복값이 있는지 확인
 * @param {[*]} array
 * @return {boolean}
 */
export function isDuplicate(array) {
  const setCollection = new Set(array);
  return setCollection.size < array.length;
}

/**
 * 배열에 빈 스트링이 있는지 확인
 * @param {[]} array
 * @return {boolean}
 */
export function hasEmpty(array) {
  return !array.every((el) => el);
}

/**
 * 숫자가 양수인지 확인
 * @param {number} num
 * @return {boolean}
 */
export function isPositiveNumber(num) {
  return num > 0;
}

/**
 * 범위에 포함되는 랜덤 값 생성
 * @param min
 * @param max
 * @return {any}
 */
export function getRandomNumberInRange(min, max) {
  return MissionUtils.Random.pickNumberInRange(min, max);
}
