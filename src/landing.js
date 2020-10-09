/* eslint-disable no-alert */
/* eslint-disable no-unused-expressions */
import output from './domManipulation';
import promises from './promise';

const userInterface = (() => {
  let unit = 'metric';
  let newCity;
  const showPosition = (position) => {
    const la = position.coords.latitude;
    const lo = position.coords.longitude;
    const unitButton = document.getElementById('unit_button');
    unitButton.firstChild.data = 'Celcius';
    promises.info(`https://api.openweathermap.org/data/2.5/weather?lat=${la}&lon=${lo}&units=${unit}&appid=6f8406a0f73a73164c3328cffe2fc4db`)
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
      newCity = document.getElementById('newCity');
      promises.info(`https://api.openweathermap.org/data/2.5/weather?q=${newCity.value}&units=${unit}&appid=6f8406a0f73a73164c3328cffe2fc4db`)
        .then(data => {
          output.dataprocess(data);
        })
        .catch(() => {
          alert('unable to find your location');
        });
      newCity.value = '';
    });
  };

  const ChangeUnit = () => {
    const unitButton = document.getElementById('unit_button');
    unitButton.setAttribute('type', 'button');
    unitButton.addEventListener('click', () => {
      if (unitButton.firstChild.data === 'Celcius') {
        unitButton.firstChild.data = 'Fahrenheit';
        unit = 'imperial';
      } else {
        unitButton.firstChild.data = 'Celcius';
        unit = 'metric';
      }
      newCity = document.getElementById('city_name');
      promises.info(`https://api.openweathermap.org/data/2.5/weather?q=${newCity.innerHTML}&units=${unit}&appid=6f8406a0f73a73164c3328cffe2fc4db`)
        .then(data => {
          output.dataprocess(data);
        })
        .catch(() => {
          alert('unable to find your location');
        });
    });
  };

  return {
    getLocation,
    navBar,
    ChangeUnit,
  };
})();
export default userInterface;