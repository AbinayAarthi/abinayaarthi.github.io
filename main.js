/* Builds the page from content.js. You do not need to edit this file. */
(function () {
  const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const ytId = u => { const m = String(u).match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/); return m ? m[1] : null; };

  document.querySelectorAll('[data-fill]').forEach(el => {
    const v = SITE[el.dataset.fill];
    if (v) el.textContent = v;
  });
  document.title = SITE.name + " | Video Editor";
  document.getElementById('year').textContent = new Date().getFullYear();

  // Showreel
  const reel = document.getElementById('reel');
  const id = SITE.showreel && ytId(SITE.showreel);
  if (id) {
    reel.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + id + '" title="Showreel" loading="lazy" allowfullscreen></iframe>';
  } else if (SITE.showreel) {
    reel.innerHTML = '<a class="ph" href="' + esc(SITE.showreel) + '" target="_blank" rel="noopener">Watch the showreel</a>';
  } else {
    reel.innerHTML = '<div class="ph">Showreel video goes here</div>';
  }
  document.getElementById('reelNote').textContent = SITE.showreelNote || '';

  // Projects
  const grid = document.getElementById('projects');
  PROJECTS.filter(p => p.title).forEach(p => {
    const thumb = p.thumbnail
      ? '<img src="' + esc(p.thumbnail) + '" alt="Thumbnail for ' + esc(p.title) + '" loading="lazy">'
      : '<span class="ph">Thumbnail</span>';
    const media = p.link
      ? '<a class="thumb" href="' + esc(p.link) + '" target="_blank" rel="noopener" aria-label="Watch ' + esc(p.title) + '">' + thumb + '</a>'
      : '<div class="thumb">' + thumb + '</div>';
    const action = p.link
      ? '<a class="watch" href="' + esc(p.link) + '" target="_blank" rel="noopener">Watch video</a>'
      : '<span class="soon">Video link coming soon</span>';
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = media +
      '<h3>' + esc(p.title) + '</h3>' +
      '<dl><dt>Editing style</dt><dd>' + esc(p.style) + '</dd>' +
      '<dt>My contribution</dt><dd>' + esc(p.contribution) + '</dd></dl>' + action;
    grid.appendChild(card);
  });

  // Contact
  const list = document.getElementById('contactList');
  const rows = [
    ['Email', SITE.email, SITE.email && 'mailto:' + SITE.email],
    ['Phone', SITE.phone, SITE.phone && 'tel:' + SITE.phone.replace(/[^\d+]/g, '')],
    ['Location', SITE.location, ''],
    ['LinkedIn', SITE.linkedin && 'View profile', SITE.linkedin],
    ['Instagram', SITE.instagram && 'View profile', SITE.instagram]
  ];
  rows.forEach(r => {
    if (!r[1]) return;
    const li = document.createElement('li');
    li.innerHTML = '<span>' + r[0] + '</span>' + (r[2] ? '<a href="' + esc(r[2]) + '">' + esc(r[1]) + '</a>' : '<b>' + esc(r[1]) + '</b>');
    list.appendChild(li);
  });
})();
