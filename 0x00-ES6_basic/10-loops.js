export default function appendToEachArrayValue(array, appendString) {
  const value = [];
  for (const val of array) {
    value.push(appendString + val);
  }

  return value;
}
