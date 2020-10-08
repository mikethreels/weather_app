/* eslint-disable no-alert */
/* eslint-disable no-unused-expressions */
import output from './domManipulation';
import promises from './promise';

const userInterface = (() => {
  const showPosition = (position) => {
    const la = position.coords.latitude;
    const lo = position.coords.longitude;
    promises.info(`http://api.openweathermap.org/data/2.5/weather?lat=${la}&lon=${lo}&units=metric&appid=6f8406a0f73a73164c3328cffe2fc4db`)
      .then(data => {
        output.dataprocess(data);
      });
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
    promises.info()
      .then(data => {
        output.dataprocess(data);
      });
  };

  const navBar = () => {
    const button = document.getElementById('search_button');
    button.setAttribute('type', 'button');
    button.addEventListener('click', () => {
      const newCity = document.getElementById('newCity');
      promises.info(`http://api.openweathermap.org/data/2.5/weather?q=${newCity.value}&units=metric&appid=6f8406a0f73a73164c3328cffe2fc4db`)
        .then(data => {
          output.dataprocess(data);
        })
        .catch(() => {
          alert('unable to find your location');
        });
      newCity.value = '';
    });
  };

  return {
    getLocation,
    navBar,
  };
})();
export default userInterface;