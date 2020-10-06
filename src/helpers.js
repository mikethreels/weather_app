const helpers = (() => {
  let location = [];
  const showPosition = (position) => {
    location = [
      position.coords.latitude,
      position.coords.longitude,
    ];
    console.log(location);
    return location;
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      location = [15.045077599999999, 52.0534423];
    }
    console.log(location);
    return location;
  };

  return { getLocation };
})();
export default helpers;