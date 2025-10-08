// typing.js — typewriter effect for headline and paragraph, keeps mask in sync
(function () {
  const headline = document.querySelector('.headline');
  if (!headline) return;
  const h1 = headline.querySelector('h1');
  const p = headline.querySelector('p');
  if (!h1 || !p) return;

  const fullH1 = h1.textContent.trim();
  const fullP = p.textContent.trim();
  h1.textContent = '';
  p.textContent = '';

  headline.classList.add('typing');

  function typeText(el, text, delay = 60) {
    return new Promise((resolve) => {
      let i = 0;
      const t = setInterval(() => {
        el.textContent += text.charAt(i);
        i++;
        // update mask while typing (if available)
        if (window.__buildHeadlineMask) window.__buildHeadlineMask();
        if (i >= text.length) {
          clearInterval(t);
          setTimeout(resolve, 120);
        }
      }, delay + Math.round(Math.random() * 40));
    });
  }

  (async function () {
    await typeText(h1, fullH1, 70);
    await typeText(p, fullP, 45);
    // done typing
    headline.classList.remove('typing');
    if (window.__buildHeadlineMask) window.__buildHeadlineMask();
  })();
})();
