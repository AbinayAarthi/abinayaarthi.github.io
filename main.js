/* Builds the page from content.js. You do not need to edit this file. */
(function () {
  const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const ytId = u => { const m = String(u).match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/); return m ? m[1] : null; };
  const $ = id => document.getElementById(id);

  document.querySelectorAll('[data-fill]').forEach(el => { const v = SITE[el.dataset.fill]; if (v) el.textContent = v; });
  document.title = SITE.name + " | Video Editor";
  $('year').textContent = new Date().getFullYear();

  // Mobile menu
  const burger = $('burger'), menu = $('menu');
  burger.onclick = () => { const o = menu.classList.toggle('open'); burger.setAttribute('aria-expanded', o); };
  menu.querySelectorAll('a').forEach(a => a.onclick = () => { menu.classList.remove('open'); burger.setAttribute('aria-expanded', false); });

  // Showreel
  const id = SITE.showreel && ytId(SITE.showreel);
  $('reel').innerHTML = id
    ? '<iframe src="https://www.youtube-nocookie.com/embed/' + id + '" title="Showreel" loading="lazy" allowfullscreen></iframe>'
    : SITE.showreel ? '<a class="ph" href="' + esc(SITE.showreel) + '" target="_blank" rel="noopener">Watch the showreel</a>'
    : '<div class="ph">Showreel video goes here</div>';
  $('reelNote').textContent = SITE.showreelNote || '';

  // Resume
  if (SITE.resume) {
    [$('resumeBtn'), $('heroResume')].forEach(b => { b.href = SITE.resume; b.setAttribute('download', ''); b.hidden = false; });
  } else {
    $('resumeText').textContent = 'Resume coming soon.';
  }

  // Projects
  PROJECTS.filter(p => p.title).forEach(p => {
    const thumb = p.thumbnail ? '<img src="' + esc(p.thumbnail) + '" alt="Thumbnail for ' + esc(p.title) + '" loading="lazy">' : '<span class="ph">Thumbnail</span>';
    const media = p.link ? '<a class="thumb" href="' + esc(p.link) + '" target="_blank" rel="noopener" aria-label="Watch ' + esc(p.title) + '">' + thumb + '</a>' : '<div class="thumb">' + thumb + '</div>';
    const tags = String(p.style).split(',').map(t => t.trim()).filter(Boolean).map(t => '<span>' + esc(t) + '</span>').join('');
    const act = p.link ? '<a class="btn primary small" href="' + esc(p.link) + '" target="_blank" rel="noopener">Watch</a>' : '<span class="soon">Link coming soon</span>';
    const c = document.createElement('article');
    c.className = 'glass card';
    c.innerHTML = media + '<h3>' + esc(p.title) + '</h3><p>' + esc(p.contribution) + '</p><div class="pills">' + tags + '</div>' + act;
    $('projects').appendChild(c);
  });

  // Experience
  EXPERIENCE.forEach(j => {
    const c = document.createElement('article');
    c.className = 'glass job';
    c.innerHTML = '<p class="dates">' + esc(j.dates) + '</p><h3>' + esc(j.title) + '</h3><p class="org">' + esc(j.org) + '</p><ul>' + j.points.map(x => '<li>' + esc(x) + '</li>').join('') + '</ul>';
    $('jobs').appendChild(c);
  });

  // Contact list
  [['Email', SITE.email, SITE.email && 'mailto:' + SITE.email],
   ['Phone', SITE.phone, SITE.phone && 'tel:' + SITE.phone.replace(/[^\d+]/g, '')],
   ['Location', SITE.location, ''],
   ['LinkedIn', SITE.linkedin && 'View profile', SITE.linkedin],
   ['Instagram', SITE.instagram && 'View profile', SITE.instagram]
  ].forEach(r => {
    if (!r[1]) return;
    const li = document.createElement('li');
    li.innerHTML = '<span>' + r[0] + '</span>' + (r[2] ? '<a href="' + esc(r[2]) + '">' + esc(r[1]) + '</a>' : '<b>' + esc(r[1]) + '</b>');
    $('contactList').appendChild(li);
  });

  // Contact form: opens the visitor's email app
  $('form').onsubmit = e => {
    e.preventDefault();
    const f = e.target;
    const body = f.msg.value + '\n\nFrom: ' + f.name.value + ' (' + f.email.value + ')';
    location.href = 'mailto:' + SITE.email + '?subject=' + encodeURIComponent('Portfolio message from ' + f.name.value) + '&body=' + encodeURIComponent(body);
  };

  // Drifting dots (still if the visitor prefers reduced motion)
  const cv = $('stars'), cx = cv.getContext('2d');
  let w, h, dots = [];
  const size = () => { w = cv.width = innerWidth; h = cv.height = innerHeight; dots = Array.from({length: Math.round(w * h / 14000)}, () => ({x: Math.random() * w, y: Math.random() * h, r: Math.random() * 1.2 + .3, v: Math.random() * .12 + .03, c: Math.random() < .25 ? '0,180,255' : '255,255,255'})); };
  const draw = () => { cx.clearRect(0, 0, w, h); dots.forEach(d => { cx.fillStyle = 'rgba(' + d.c + ',.45)'; cx.beginPath(); cx.arc(d.x, d.y, d.r, 0, 6.3); cx.fill(); d.y -= d.v; if (d.y < -2) { d.y = h + 2; d.x = Math.random() * w; } }); };
  size(); addEventListener('resize', size);
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) draw();
  else (function loop() { draw(); requestAnimationFrame(loop); })();
})();
