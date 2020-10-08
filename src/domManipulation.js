import helpers from './helpers';

const output = (() => {
  const dataprocess = (info) => {
    const contentdiv = document.getElementById('content');
    while (contentdiv.firstChild) {
      contentdiv.removeChild(contentdiv.firstChild);
    }
    const city = document.createElement('h1');
    const icon = document.createElement('img');
    const tempdiv = document.createElement('div');
    const min = document.createElement('p');
    const max = document.createElement('p');
    const weatherDescription = document.createElement('p');
    const iconCode = info.weather[0].icon;
    document.body.style.backgroundImage = helpers.nightDay(info.weather[0].icon);
    weatherDescription.innerHTML = info.weather[0].description;
    city.innerHTML = info.name;
    min.innerHTML = `Minimum Temperature ${Math.round(info.main.temp_min)} °C`;
    max.innerHTML = `Maximum Temperature ${Math.round(info.main.temp_max)} °C`;
    tempdiv.append(min);
    tempdiv.append(max);
    icon.setAttribute('src', `../src/icons/${iconCode}.png`);
    contentdiv.append(city);
    contentdiv.append(weatherDescription);
    contentdiv.append(icon);
    contentdiv.append(tempdiv);
  };

  return {
    dataprocess,
  };
})();

export default output;