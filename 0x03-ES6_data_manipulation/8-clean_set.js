export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }

  if (!set || !(set instanceof Set)) {
    return '';
  }

  let result = '';
  set.forEach((value) => {
    if (value.startsWith(startString)) {
      result += `${value.slice(startString.length)}-`;
    }
  });

  // Remove the trailing '-' if result is not empty
  return result ? result.slice(0, -1) : '';
}
