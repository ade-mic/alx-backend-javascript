export default function getResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success === true) {
      const data = { status: 200, body: 'Success' };
      resolve(data);
    } else {
      const errorMessage = 'The fake API is not working currently';
      reject(new Error(errorMessage));
    }
  });
}
