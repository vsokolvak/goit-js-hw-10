export const createiziToastMsg = (timeOut, promiseStatus) => {
  return {
    message: `${promiseStatus ? '✅ Fulfilled' : '❌ Rejected'} promise in ${
      timeOut / 1000
    } second`,
    messageColor: 'white',
    messageSize: '26',
    messageLineHeight: '36',
    backgroundColor: promiseStatus ? 'green' : 'red',
    imageWidth: 30,
    closeOnEscape: !false,
    closeOnClick: !false,
    position: 'topRight',
    progressBarColor: 'darkgreen',
    timeout: 1000,
  };
};