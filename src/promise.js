
const promises = (() => {
  const defaultUrl = 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=6f8406a0f73a73164c3328cffe2fc4db';
  const info = (url = defaultUrl) => new Promise((resolve, reject) => {
    fetch(url,
      {
        mode: 'cors',
      }).then(res => res.json()).then((res) => {
      if (res.cod === 200) {
        resolve(res);
      } else {
        reject();
      }
    });
  });
  return { info };
})();
export default promises;