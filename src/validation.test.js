import assert from 'assert';
import { Validation } from './validation';

const validation = new Validation();

describe('validation.js', () => {
  describe('#checkCarNameLength(rowName)', () => {
    it('차량의 이름이 5글자 이하일 때 true 를 반환 해야한다', () => {
      assert.ok(validation.checkCarNameLength('12345,chris,slk55') === true);
    });

    it('차량의 이름이 5글자 초과일 때 false 를 반환 해야한다', () => {
      assert.ok(validation.checkCarNameLength('123456,b,c') === false);
    });
  });
});
