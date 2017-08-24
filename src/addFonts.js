const id = 'wolkenkit-ux-fonts';

const addFonts = function () {
  if (!document.getElementById(id)) {
    const link = document.createElement('link');

    link.id = id;
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,600,700|Ubuntu:300,400,500|Ubuntu+Mono';
    document.head.appendChild(link);
  }
};

export default addFonts;
