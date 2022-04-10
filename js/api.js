const URLS = {
  GET: 'https://25.javascript.pages.academy/kekstagram/data',
  POST: 'https://25.javascript.pages.academy/kekstagram',
};

const getData = (onSuccess) => {
  fetch(URLS.GET)
    .then((response) => response.json())
    .then((pictures) => {
      onSuccess(pictures);
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    URLS.POST,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      }
    })
    .catch((err) => {
      onFail(err.message);
    });
};


export { getData, sendData };
