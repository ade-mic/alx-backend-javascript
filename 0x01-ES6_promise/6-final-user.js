// Import the necessary functions
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

// Define and export the handleProfileSignup function
export default function handleProfileSignup(firstName, lastName, fileName) {
  // Call the two functions and pass the appropriate arguments
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPromise = uploadPhoto(fileName);

  // Use Promise.allSettled to handle both resolved and rejected promises
  return Promise.allSettled([signUpPromise, uploadPromise])
    .then((results) => results.map((result) => {
      if (result.status === 'pending') {
        // If somehow the promise is pending,
        // return nothing for value (though Promise.allSettled doesn't return pending)
        return {
          status: result.status,
          value: undefined,
        };
      }
      // For settled promises, return status and value or reason
      return {
        status: result.status,
        value: result.value,
      };
    }));
}
