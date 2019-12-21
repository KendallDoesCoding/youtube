import assets from './assets/*.png';

export default ({ state, ready }) => {
  let loaded = 0;
  const images = [
    'tank',
  ]

  for (const imageFileBaseName of images) {
    const image = new Image();
    image.onload = function () {
      state.images[imageFileBaseName] = image;
      loaded++;
      if (loaded === images.length) {
        console.log('ready');
        ready();
      }
    }
    image.src = assets[imageFileBaseName]
  }
}