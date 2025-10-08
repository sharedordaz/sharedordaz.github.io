// headline-mask.js — builds an SVG mask from the .headline p text and applies it to .p-blur
(function () {
  const headline = document.querySelector('.headline');
  if (!headline) return;
  const p = headline.querySelector('p');
  const blurEl = headline.querySelector('.p-blur');
  if (!p || !blurEl) return;

  const maskId = 'mask-headline-text';

  function buildMask() {
    // remove previous svg if exists
    const prev = document.getElementById(maskId + '-svg');
    if (prev && prev.parentNode) prev.parentNode.removeChild(prev);

    const rect = headline.getBoundingClientRect();
    const w = Math.max(32, Math.round(rect.width));
    const h = Math.max(32, Math.round(rect.height));

    const cs = getComputedStyle(p);
    const fontSize = cs.fontSize || '18px';
    const fontFamily = cs.fontFamily || 'Inter, system-ui, sans-serif';
    const fontWeight = cs.fontWeight || '600';
    const textContent = p.textContent.trim();

    const svgNS = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('width', 0);
    svg.setAttribute('height', 0);
    svg.style.position = 'absolute';
    svg.style.left = 0;
    svg.style.top = 0;
    svg.style.pointerEvents = 'none';
    svg.id = maskId + '-svg';

    const defs = document.createElementNS(svgNS, 'defs');
    const mask = document.createElementNS(svgNS, 'mask');
    mask.setAttribute('id', maskId);
    mask.setAttribute('maskUnits', 'userSpaceOnUse');
    mask.setAttribute('x', '0');
    mask.setAttribute('y', '0');
    mask.setAttribute('width', String(w));
    mask.setAttribute('height', String(h));

    const bg = document.createElementNS(svgNS, 'rect');
    bg.setAttribute('x', '0');
    bg.setAttribute('y', '0');
    bg.setAttribute('width', String(w));
    bg.setAttribute('height', String(h));
    bg.setAttribute('fill', 'black');

    const text = document.createElementNS(svgNS, 'text');
    text.setAttribute('x', String(w / 2));
    text.setAttribute('y', String(Math.round(h * 0.55)));
    text.setAttribute('fill', 'white');
    text.setAttribute('text-anchor', 'middle');
    text.setAttribute('font-size', fontSize);
    text.setAttribute('font-family', fontFamily);
    text.setAttribute('font-weight', fontWeight);
    text.setAttribute('dominant-baseline', 'middle');
    text.textContent = textContent;

    mask.appendChild(bg);
    mask.appendChild(text);
    defs.appendChild(mask);
    svg.appendChild(defs);
    document.body.appendChild(svg);

    // apply mask to blurEl (standard and -webkit-)
    blurEl.style.mask = `url(#${maskId})`;
    blurEl.style.webkitMask = `url(#${maskId})`;
  }

  // expose buildMask globally so typing script can call it
  window.__buildHeadlineMask = buildMask;

  // initial build after fonts loaded to avoid size shifts
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(buildMask).catch(buildMask);
  } else {
    buildMask();
  }

  let t;
  window.addEventListener('resize', () => {
    clearTimeout(t);
    t = setTimeout(buildMask, 150);
  });
})();
