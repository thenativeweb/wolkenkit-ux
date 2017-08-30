import icons from '../icons';

const id = 'wolkenkit-ux-icons';

const enableIcons = function () {
  if (!document.getElementById(id)) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

    svg.id = id;
    svg.innerHTML = icons;
    svg.style.display = 'none';

    document.body.insertBefore(svg, document.body.firstChild);
  }
};

export default enableIcons;
