function isEmptyInput(input) {
  // Check for null, undefined, or empty string
  if (input === null || input === undefined || (typeof input === 'string' && input.trim() === '')) {
    return true;
  }

  // Check for empty array
  if (Array.isArray(input) && input.length === 0) {
    return true;
  }

  // Check for empty object (ensure input is an object and not an array)
  if (typeof input === 'object' && !Array.isArray(input) && Object.keys(input).length === 0) {
    return true;
  }

  return false;
}

module.exports = isEmptyInput;
