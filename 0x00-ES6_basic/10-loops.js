export default function appendToEachArrayValue(array, appendString) {
  const value = array;
  for (const [idx, val] of value.entries()) {
    value[idx] = appendString + val;
  }

  return value;
}
