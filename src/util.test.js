import assert from 'assert';
import {
  convertStringToSplitArray, hasEmpty, hasTarget, isDuplicate, isLenLessThanOrEqual, isPositiveNumber,
} from './util';

describe('js', () => {
  describe('#convertStringToSplitArray(rowName, separator)', () => {
    it('5글자 이하인 이름을 쉼표로 구분하여 입력했을 때 문자열 배열을 반환해야한다', () => {
      const result = convertStringToSplitArray('a,b,c', ',');
      assert.ok(result[0] === 'a');
      assert.ok(result[1] === 'b');
      assert.ok(result[2] === 'c');
      assert.ok(result.length === 3);
    });
  });

  describe('#hasTarget(rowName, target)', () => {
    it('rowName 에 콤마 가 있을 경우 true 를 반환해야한다', () => {
      const result = hasTarget('a,b,c', ',');
      assert.ok(result === true);
    });

    it('rowName 에 - 가 있을 경우 true 를 반환해야한다', () => {
      const result = hasTarget('a-b-c', '-');
      assert.ok(result === true);
    });

    it('rowName 에 콤마 가 없을 경우 false 를 반환해야한다', () => {
      const result = hasTarget('a-b-c', ',');
      assert.ok(result === false);
    });
  });

  describe('#isLenLessThanOrEqual(string, length)', () => {
    it('string 의 길이가 length 이하일 경우 true 를 반환해야한다', () => {
      const result = isLenLessThanOrEqual('slk55', 5);
      assert.ok(result === true);
    });

    it('string 의 길이가 length 초과일 경우 false 를 반환해야한다', () => {
      const result = isLenLessThanOrEqual('slk200k', 6);
      assert.ok(result === false);
    });
  });

  describe('#isDuplicate(array)', () => {
    it('배열에 중복값이 있을 경우 true 를 리턴해야한다', () => {
      const result = isDuplicate([1, 1, 2]);
      assert.ok(result === true);
    });

    it('배열에 중복값이 없을 경우 true 를 리턴해야한다', () => {
      const result = isDuplicate(['a', 'b', 'c']);
      assert.ok(result === false);
    });
  });

  describe('#hasEmpty(array)', () => {
    it('배열에 빈스트링이 있을 경우 true 를 리턴해야한다', () => {
      const result = hasEmpty(['a', '']);
      assert.ok(result === true);
    });

    it('배열에 빈스트링이 없을 경우 false 를 리턴 해야한다', () => {
      const result = hasEmpty(['a', 'b']);
      assert.ok(result === false);
    });
  });

  describe('#isPositiveNumber(num)', () => {
    it('num 이 양수일 경우 true 를 리턴 해야한다', () => {
      const result = isPositiveNumber(8);
      assert.ok(result === true);
    });

    it('num 이 음수일 경우 false 를 리턴 해야한다', () => {
      const result = isPositiveNumber(-2);
      assert.ok(result === false);
    });
  });
});
