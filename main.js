(() => {
  const C = window.CONTENT;
  const $ = (id) => document.getElementById(id);

  const el = (tag, attrs = {}, text = '') => {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) node.setAttribute(k, v);
    if (text) node.textContent = text;
    return node;
  };

  const tagList = (tags = []) => {
    const ul = el('ul', { class: 'tags' });
    tags.forEach((t) => {
      ul.append(el('li', {}, t));
    });
    return ul;
  };

  const safeGet = (key) => {
    try {
      return localStorage.getItem(key);
    } catch (_) {
      return null;
    }
  };
  const safeSet = (key, value) => {
    try {
      localStorage.setItem(key, value);
    } catch (_) {}
  };

  let lang = safeGet('lang') || (navigator.language || 'es').slice(0, 2);
  if (!['es', 'en'].includes(lang)) lang = 'es';

  function render() {
    const d = C[lang];
    const ui = C.ui[lang];
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach((node) => {
      const text = ui[node.dataset.i18n];
      if (text) node.textContent = text;
    });

    $('name').textContent = d.name;
    $('role').textContent = d.role;
    $('intro').textContent = d.intro;

    const facts = $('facts');
    facts.replaceChildren();
    d.facts.filter(Boolean).forEach((f) => {
      facts.append(el('li', {}, f));
    });

    const exp = $('experience');
    exp.replaceChildren();
    d.experience.forEach((job) => {
      const card = el('article', { class: 'job' });
      const head = el('div', { class: 'job-head' });
      const titleBox = el('div');
      titleBox.append(el('h3', {}, job.title), el('div', { class: 'meta' }, job.company));
      head.append(titleBox);
      if (job.period) head.append(el('div', { class: 'meta' }, job.period));
      const ul = el('ul');
      job.points.forEach((p) => {
        ul.append(el('li', {}, p));
      });
      card.append(head, ul, tagList(job.tags));
      exp.append(card);
    });

    const projects = $('projects');
    projects.replaceChildren();
    d.projects.forEach((p) => {
      const card = el('article', { class: 'card' });
      card.append(el('div', { class: 'kind' }, p.kind), el('h3', {}, p.title), el('p', {}, p.text), tagList(p.tags));
      if (p.demo || p.code) {
        const links = el('div', { class: 'links' });
        if (p.demo) links.append(el('a', { href: p.demo, target: '_blank', rel: 'noopener' }, ui['project.demo']));
        if (p.code) links.append(el('a', { href: p.code, target: '_blank', rel: 'noopener' }, ui['project.code']));
        card.append(links);
      }
      projects.append(card);
    });

    const skills = $('skills');
    skills.replaceChildren();
    d.skills.forEach((s) => {
      const box = el('div', { class: 'card' });
      box.append(el('h3', {}, s.group), el('p', {}, s.items));
      skills.append(box);
    });

    const edu = $('education');
    edu.replaceChildren();
    d.education.forEach((e) => {
      edu.append(el('li', {}, e));
    });
    $('formacion').hidden = d.education.length === 0;

    const contact = $('contact');
    contact.replaceChildren();
    const L = C.links;
    if (L.email) contact.append(el('a', { class: 'btn primary', href: `mailto:${L.email}` }, L.email));
    if (L.github) contact.append(el('a', { class: 'btn', href: L.github, target: '_blank', rel: 'noopener' }, 'GitHub'));
    if (L.linkedin) contact.append(el('a', { class: 'btn', href: L.linkedin, target: '_blank', rel: 'noopener' }, 'LinkedIn'));

    $('reference').textContent = d.reference || '';

    const langBtn = $('lang-btn');
    langBtn.textContent = lang === 'es' ? 'EN' : 'ES';
    langBtn.setAttribute('aria-label', ui.langBtn);
    $('theme-btn').setAttribute('aria-label', ui.themeBtn);
    document.title = `${d.name} · ${d.role.split('·')[0].trim()}`;
  }

  $('lang-btn').addEventListener('click', () => {
    lang = lang === 'es' ? 'en' : 'es';
    safeSet('lang', lang);
    render();
  });

  $('theme-btn').addEventListener('click', () => {
    const root = document.documentElement;
    const current =
      root.dataset.theme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    const next = current === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    safeSet('theme', next);
  });

  $('year').textContent = new Date().getFullYear();
  render();
})();
