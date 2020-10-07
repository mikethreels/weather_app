
const promises = (() => {
  async function info(url = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=6f8406a0f73a73164c3328cffe2fc4db', data = {}) {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(data),
    });
    // console.log(response.json());
    return response.json();
  }
  return { info };
})();
export default promises;