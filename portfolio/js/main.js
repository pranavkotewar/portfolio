/* MAIN.JS — content.js ke data se page banata hai. Normally ise edit karne ki zaroorat nahi. */
(function () {
  const S = SITE;
  const $ = (id) => document.getElementById(id);
  const esc = (t) => String(t == null ? '' : t).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  const ICON = {
    github: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>',
    email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
    twitter: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>',
    external: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6M10 14 21 3"/></svg>',
    download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>'
  };

  /* ── META ── */
  document.title = S.meta.title;
  const md = document.querySelector('meta[name="description"]');
  if (md) md.setAttribute('content', S.meta.description);

  /* ── NAV ── */
  $('navLogo').textContent = S.logo;
  const navItems = [['about', 'About'], ['skills', 'Skills'], ['projects', 'Projects']];
  const hasEdu = Array.isArray(S.education) && S.education.length > 0;
  if (hasEdu) navItems.push(['education', 'Education']);
  navItems.push(['contact', 'Contact']);
  $('navLinks').innerHTML = navItems.map(([id, label]) => `<li><a href="#${id}" data-nav="${id}">${label}</a></li>`).join('');

  const menuBtn = $('menuBtn'), navLinks = $('navLinks');
  const closeMenu = () => { navLinks.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false'); };
  menuBtn.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });
  navLinks.addEventListener('click', (e) => { if (e.target.closest('a')) closeMenu(); });

  $('themeBtn').addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });

  /* ── HERO ── */
  const parts = S.name.trim().split(/\s+/);
  const first = parts.shift();
  $('heroName').innerHTML = `${esc(first)}<br><span class="grad">${esc(parts.join(' '))}</span>`;
  if (S.availability) $('heroBadgeText').textContent = S.availability; else $('heroBadge').hidden = true;
  $('heroIntro').textContent = S.intro;

  const cta = [`<a href="#projects" class="btn primary">View Projects</a>`];
  if (S.resumeUrl) cta.push(`<a href="${esc(S.resumeUrl)}" class="btn" target="_blank" rel="noopener">${ICON.download} Resume</a>`);
  cta.push(`<a href="#contact" class="btn">Get in Touch</a>`);
  $('heroCta').innerHTML = cta.join('');

  const socialHTML = () => {
    const o = S.social || {};
    const out = [];
    if (o.github) out.push(`<a href="${esc(o.github)}" target="_blank" rel="noopener" aria-label="GitHub" title="GitHub">${ICON.github}</a>`);
    if (o.linkedin) out.push(`<a href="${esc(o.linkedin)}" target="_blank" rel="noopener" aria-label="LinkedIn" title="LinkedIn">${ICON.linkedin}</a>`);
    if (o.twitter) out.push(`<a href="${esc(o.twitter)}" target="_blank" rel="noopener" aria-label="Twitter" title="Twitter">${ICON.twitter}</a>`);
    if (o.instagram) out.push(`<a href="${esc(o.instagram)}" target="_blank" rel="noopener" aria-label="Instagram" title="Instagram">${ICON.instagram}</a>`);
    if (o.email) out.push(`<a href="mailto:${esc(o.email)}" aria-label="Email" title="Email">${ICON.email}</a>`);
    return out.join('');
  };
  $('heroSocials').innerHTML = socialHTML();

  /* typing effect */
  (function typing() {
    const roles = (S.roles && S.roles.length) ? S.roles : [''];
    const el = $('roleText');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { el.textContent = roles[0]; return; }
    let r = 0, c = 0, del = false;
    (function tick() {
      const word = roles[r];
      el.textContent = word.slice(0, c);
      let delay = del ? 40 : 85;
      if (!del && c === word.length) { del = true; delay = 1500; }
      else if (del && c === 0) { del = false; r = (r + 1) % roles.length; delay = 350; }
      else c += del ? -1 : 1;
      setTimeout(tick, delay);
    })();
  })();

  /* ── MARQUEE (skills se) ── */
  const all = [...new Set((S.skills || []).flatMap((g) => g.items))];
  const row = all.map((t) => `<span class="marquee-item">${esc(t)}</span>`).join('');
  $('marqueeTrack').innerHTML = row + row + row + row;

  /* ── ABOUT ── */
  const A = S.about;
  $('aboutTitle').textContent = A.heading;
  $('aboutText').innerHTML = A.paragraphs.map((p) => `<p>${p}</p>`).join('');   // <strong> allowed
  $('aboutFacts').innerHTML = (A.facts || []).map((f) => `<li><b>${esc(f.label)}</b><span>${esc(f.value)}</span></li>`).join('');
  $('aboutStats').innerHTML = (A.stats || []).map((s) => `<div class="stat"><b>${esc(s.value)}</b><span>${esc(s.label)}</span></div>`).join('');
  $('avatar').textContent = A.initials;
  const img = $('profileImg');
  img.onload = () => { img.style.display = 'block'; $('avatar').style.display = 'none'; };
  img.onerror = () => { img.style.display = 'none'; $('avatar').style.display = 'grid'; };
  img.alt = S.name;
  img.src = A.photo;

  /* ── SKILLS ── */
  $('skillsGrid').innerHTML = (S.skills || []).map((g) => `
    <div class="skill-card reveal">
      <h3>${esc(g.category)}</h3>
      <div class="tags">${g.items.map((i) => `<span class="tag">${esc(i)}</span>`).join('')}</div>
    </div>`).join('');

  /* ── PROJECTS ── */
  $('projectsList').innerHTML = (S.projects || []).map((p, i) => {
    const num = String(i + 1).padStart(2, '0');
    const feats = (p.features && p.features.length) ? `<ul class="features">${p.features.map((f) => `<li>${esc(f)}</li>`).join('')}</ul>` : '';
    const flow = (p.pipeline && p.pipeline.length) ? `
      <div class="pipeline"><small>Pipeline</small><div class="flow">
        ${p.pipeline.map((s, k) => `<span class="step"><em>${k + 1}</em>${esc(s)}</span>`).join('<span class="arrow">→</span>')}
      </div></div>` : '';
    const links = [
      p.github ? `<a class="pbtn" href="${esc(p.github)}" target="_blank" rel="noopener">${ICON.github} Code</a>` : '',
      p.demo ? `<a class="pbtn" href="${esc(p.demo)}" target="_blank" rel="noopener">${ICON.external} Live Demo</a>` : ''
    ].join('');
    return `
    <article class="project reveal">
      <div class="project-head">
        <div class="project-num">${num}</div>
        <div><h3>${esc(p.title)}</h3>${p.tagline ? `<p class="tagline">${esc(p.tagline)}</p>` : ''}</div>
      </div>
      <p class="project-desc">${esc(p.description)}</p>
      ${feats}${flow}
      <div class="project-foot">
        <div class="tags">${(p.tech || []).map((t) => `<span class="tag">${esc(t)}</span>`).join('')}</div>
        <div class="project-links">${links}</div>
      </div>
    </article>`;
  }).join('');

  /* ── EDUCATION ── */
  if (hasEdu) {
    $('education').hidden = false;
    $('timeline').innerHTML = S.education.map((e) => `
      <li class="tl-item reveal">
        <span class="tl-period">${esc(e.period)}</span>
        <h3>${esc(e.title)}</h3>
        <p class="tl-place">${esc(e.place)}</p>
        ${e.note ? `<p class="tl-note">${esc(e.note)}</p>` : ''}
      </li>`).join('');
    $('contactEyebrow').textContent = '05 — Contact';
  } else {
    $('contactEyebrow').textContent = '04 — Contact';
  }

  /* ── CONTACT / FOOTER ── */
  const words = S.contact.heading.trim().split(/\s+/);
  const mid = Math.ceil(words.length / 2);
  $('contactTitle').innerHTML = `${esc(words.slice(0, mid).join(' '))}<br><span class="grad">${esc(words.slice(mid).join(' '))}</span>`;
  $('contactText').textContent = S.contact.text;
  $('contactMail').href = 'mailto:' + S.social.email;
  $('contactSocials').innerHTML = socialHTML();
  $('footerText').textContent = S.footer;

  /* ── SCROLL EFFECTS ── */
  const nav = $('navbar'), bar = $('progress');
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
    const h = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + '%';
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

  /* active nav link */
  const links = [...document.querySelectorAll('[data-nav]')];
  const so = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) links.forEach((a) => a.classList.toggle('active', a.dataset.nav === e.target.id));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  navItems.forEach(([id]) => { const s = $(id); if (s) so.observe(s); });

  /* project card glow follows mouse */
  document.querySelectorAll('.project').forEach((c) => {
    c.addEventListener('mousemove', (e) => {
      const r = c.getBoundingClientRect();
      c.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      c.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
  });
})();
