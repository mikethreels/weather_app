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
  };

  // const main = () => {
  //   const location = getLocation();
  // };
  return {
    getLocation,
  };
})();
export default userInterface;