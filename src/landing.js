import helpers from './helpers';

const userInterface = (() => {
  const main = () => {
    const location = helpers.getLocation();
    console.log(location);
  };
  return { main };
})();
export default userInterface;