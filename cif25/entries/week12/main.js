// Use DOMContentLoaded so elements exist when we attach events
document.addEventListener('DOMContentLoaded', () => {
  // BUTTON: expand + change colors on hover (and click -> homepage)
  const btn = document.getElementById('homeBtn');

  if (btn) {
    // mouse enter: expand & change colors
    btn.addEventListener('mouseenter', () => {
      btn.style.transform = 'scale(1.12)';
      btn.style.background = '#e50914'; // red
      btn.style.boxShadow = '0 10px 28px rgba(229,9,20,0.28)';
    });

    // mouse leave: reset
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'scale(1)';
      btn.style.background = '#0044ff'; // blue
      btn.style.boxShadow = '0 6px 18px rgba(0,68,255,0.18)';
    });

    // click: navigate to homepage (change path if needed)
    btn.addEventListener('click', () => {
      window.location.href = '../home/index6.html';
    });
  } else {
    console.warn('homeBtn not found — check that the ID matches in HTML.');
  }

  // OPTIONAL: spider-web cursor via JS (emoji svg inline)
  try {
    const webSvg = encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32'><text y='26' font-size='26'>🕸️</text></svg>`
    );
    document.body.style.cursor = `url("data:image/svg+xml;utf8,${webSvg}") 0 0, auto`;
  } catch (e) {
    // failsafe: do nothing
    console.warn('Could not set emoji cursor, falling back to default.');
  }
});