const assert = require('assert');
const isEmptyInput = require('../index');

describe('isEmptyInput', () => {
  it('should return true for null', () => {
    assert.strictEqual(isEmptyInput(null), true);
  });

  it('should return true for undefined', () => {
    assert.strictEqual(isEmptyInput(undefined), true);
  });

  it('should return true for empty string', () => {
    assert.strictEqual(isEmptyInput(''), true);
  });

  it('should return true for empty array', () => {
    assert.strictEqual(isEmptyInput([]), true);
  });

  it('should return true for empty object', () => {
    assert.strictEqual(isEmptyInput({}), true);
  });

  it('should return false for non-empty string', () => {
    assert.strictEqual(isEmptyInput('hello'), false);
  });

  it('should return false for non-empty array', () => {
    assert.strictEqual(isEmptyInput([1, 2, 3]), false);
  });

  it('should return false for non-empty object', () => {
    assert.strictEqual(isEmptyInput({ key: 'value' }), false);
  });

  it('should return false for numbers', () => {
    assert.strictEqual(isEmptyInput(0), false);
  });
});
