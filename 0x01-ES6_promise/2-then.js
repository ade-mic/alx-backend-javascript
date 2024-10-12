export default function hansleResponseFromAPI(promise) {
  return promise
    .then(() => {
      const data = { status: 200, body: 'success' };
      console.log('Got a response from the API');
      return (data);
    })
    .catch(() => new Error())
    .finally(() => {
      console.log('Got a response from the API');
    });
}
