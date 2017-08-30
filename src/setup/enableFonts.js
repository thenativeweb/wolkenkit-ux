import fonts from '../fonts';

const id = 'wolkenkit-ux-fonts';

const enableFonts = function () {
  if (!document.getElementById(id)) {
    const link = document.createElement('link');

    link.id = id;
    link.rel = 'stylesheet';
    link.href = fonts;
    document.head.appendChild(link);
  }
};

export default enableFonts;
