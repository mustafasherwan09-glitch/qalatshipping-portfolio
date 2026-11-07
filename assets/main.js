/* =========================================================================
   Qalat Shipping — site script (shared by every page)
   Needs: assets/config.js (CONFIG, SIZE_CHART) and assets/i18n.js (I18N)
   ========================================================================= */
(function () {
  'use strict';

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  var LANGS = {
    ku: { code: 'ckb', dir: 'rtl', label: 'کوردی', short: 'KU', og: 'ku_IQ' },
    ar: { code: 'ar', dir: 'rtl', label: 'العربية', short: 'AR', og: 'ar_IQ' },
    en: { code: 'en', dir: 'ltr', label: 'English', short: 'EN', og: 'en_US' }
  };
  var STORE_KEY = 'qalat-lang';
  var PAGE = document.body.getAttribute('data-page') || 'home';
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var lang = CONFIG.defaultLang;

  /* ---------------- Numbers ---------------- */
  var nf = new Intl.NumberFormat('en-US');
  var usdFmt = new Intl.NumberFormat('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
  var waBase = 'https://wa.me/' + CONFIG.whatsapp;

  /* ---------------- Translation helpers ---------------- */
  function tr(key) {
    var d = I18N[lang] || {};
    if (d[key] != null) return d[key];
    return I18N.en[key] != null ? I18N.en[key] : '';
  }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function ltr(s) { return '<span class="ltr" dir="ltr">' + s + '</span>'; }
  function link(href, text, ext) {
    return '<a href="' + href + '"' + (ext ? ' target="_blank" rel="noopener"' : '') + '>' + text + '</a>';
  }

  /* Replace {tokens}. html=true → rich HTML (links, LTR numbers); html=false → plain text */
  function fill(str, html, extra) {
    if (str == null) return '';
    if (html === undefined) html = true;
    var L = html ? ltr : function (s) { return s; };
    var time = CONFIG.hours.open + '–' + CONFIG.hours.close;
    var t = {
      name: CONFIG.name[lang] || CONFIG.name.en,
      phone: L(CONFIG.phone),
      phoneLink: html ? link(CONFIG.phoneHref, ltr(CONFIG.phone)) : CONFIG.phone,
      waLink: html ? link(waBase, ltr(CONFIG.phone), true) : CONFIG.phone,
      email: L(CONFIG.email),
      emailLink: html ? link('mailto:' + CONFIG.email, ltr(CONFIG.email)) : CONFIG.email,
      ig: L('@' + CONFIG.instagram.handle),
      igLink: html ? link(CONFIG.instagram.url, ltr('@' + CONFIG.instagram.handle), true) : '@' + CONFIG.instagram.handle,
      fbLink: html ? link(CONFIG.facebook, esc(tr('label.facebookPage')), true) : tr('label.facebookPage') + ' (' + CONFIG.facebook + ')',
      site: L(CONFIG.siteLabel),
      address: CONFIG.address[lang] || CONFIG.address.en,
      time: L(time),
      rate: L(nf.format(CONFIG.rate)),
      rate100: L(nf.format(CONFIG.rate * 100)),
      feeKRG: L(nf.format(CONFIG.feeKurdistan)),
      feeOther: L(nf.format(CONFIG.feeOther)),
      days: L(CONFIG.deliveryMin + '–' + CONFIG.deliveryMax),
      prepayLimit: L(String(CONFIG.prepayThresholdUSD)),
      prepayPct: L(CONFIG.prepayPercent + '%'),
      restPct: L((100 - CONFIG.prepayPercent) + '%'),
      attempts: L(CONFIG.attemptsMin + '–' + CONFIG.attemptsMax),
      retention: L(String(CONFIG.retentionMonths)),
      refundHours: L(CONFIG.refundHours),
      responseDays: L(String(CONFIG.privacyResponseDays)),
      minAge: L(String(CONFIG.minAge)),
      updated: tr('legal.updatedDate'),
      year: String(new Date().getFullYear())
    };
    t.hours = String(tr('hours.text')).replace('{time}', t.time);
    if (extra) for (var k in extra) t[k] = extra[k];
    var out = String(str).replace(/\{(\w+)\}/g, function (m, key) { return key in t ? t[key] : m; });
    if (html) {
      out = out
        .replace(/\n/g, '<br>')
        .replace(/\bSHEIN\b(?![^<]*>)/g, '<span class="shein">SHEIN</span>')
        .replace(/\[([^\]<>]+)\]/g, '<mark class="ph">[$1]</mark>');
    }
    return out;
  }

  /* ---------------- WhatsApp ---------------- */
  function waUrl(msg) { return waBase + '?text=' + encodeURIComponent(msg); }
  function updateWA() {
    $$('[data-wa]').forEach(function (a) {
      var key = 'wa.' + a.getAttribute('data-wa');
      a.href = waUrl(fill(tr(key) || tr('wa.greet'), false));
      a.target = '_blank';
      a.rel = 'noopener';
    });
  }

  /* ---------------- Static business links ---------------- */
  function fillLinks() {
    $$('[data-href="phone"]').forEach(function (a) { a.href = CONFIG.phoneHref; });
    $$('[data-href="email"]').forEach(function (a) { a.href = 'mailto:' + CONFIG.email; });
    $$('[data-href="instagram"]').forEach(function (a) { a.href = CONFIG.instagram.url; a.target = '_blank'; a.rel = 'noopener'; });
    $$('[data-href="facebook"]').forEach(function (a) { a.href = CONFIG.facebook; a.target = '_blank'; a.rel = 'noopener'; });
    $$('[data-href="map"]').forEach(function (a) { a.href = CONFIG.mapUrl; a.target = '_blank'; a.rel = 'noopener'; });
    var v = {
      phone: CONFIG.phone, email: CONFIG.email, ig: '@' + CONFIG.instagram.handle,
      rate: nf.format(CONFIG.rate), rate100: nf.format(CONFIG.rate * 100),
      feeKRG: nf.format(CONFIG.feeKurdistan), feeOther: nf.format(CONFIG.feeOther),
      days: CONFIG.deliveryMin + '–' + CONFIG.deliveryMax
    };
    $$('[data-cfg]').forEach(function (el) { var k = el.getAttribute('data-cfg'); if (k in v) el.textContent = v[k]; });
  }

  /* ---------------- Erbil Citadel line drawing ---------------- */
  function citadelSVG() {
    var B = 172, P = [];
    var r = function (n) { return Math.round(n * 10) / 10; };
    function add(d, cls, delay) {
      P.push('<path pathLength="1" d="' + d + '"' + (cls ? ' class="' + cls + '"' : '') + ' style="--d:' + Math.round(delay) + 'ms"/>');
    }
    function win(cx, y, w, h, delay) {
      var hw = w / 2;
      add('M' + r(cx - hw) + ' ' + r(y + h) + 'V' + r(y + hw) + 'A' + hw + ' ' + hw + ' 0 0 1 ' + r(cx + hw) + ' ' + r(y + hw) + 'V' + r(y + h) + 'Z', 'fine', delay);
    }
    var T = [
      { x: 96, w: 28, t: 118, win: 1 }, { x: 124, w: 38, t: 128 }, { x: 162, w: 30, t: 106, win: 1 },
      { x: 192, w: 46, t: 122 }, { x: 238, w: 44, t: 90, win: 2 }, { x: 282, w: 62, t: 116, gate: true },
      { x: 344, w: 46, t: 80, win: 2 }, { x: 390, w: 14, t: 110 }, { x: 404, w: 112, t: 96, arches: 6 },
      { x: 516, w: 60, t: 68, win: 3 }, { x: 576, w: 76, t: 100, arches: 4 }, { x: 652, w: 46, t: 84, win: 2 },
      { x: 698, w: 32, t: 116 }, { x: 730, w: 28, t: 102, win: 1 }, { x: 758, w: 22, t: 122 }
    ];
    T.forEach(function (b, i) {
      var dl = 250 + i * 75;
      var n = Math.max(2, Math.round((b.w + 4) / 9)), segs = 2 * n - 1, u = b.w / segs, mh = 4;
      var d = 'M' + b.x + ' ' + B + 'V' + b.t;
      for (var s = 0; s < segs; s++) {
        var nx = r(b.x + (s + 1) * u);
        if (s % 2 === 0) { d += 'H' + nx; if (s < segs - 1) d += 'V' + (b.t + mh); }
        else { d += 'H' + nx + 'V' + b.t; }
      }
      add(d + 'V' + B, '', dl);
      add('M' + b.x + ' ' + (b.t + 9) + 'H' + (b.x + b.w), 'fine', dl + 260);
      add('M' + (b.x + 3) + ' ' + (B - 13) + 'H' + (b.x + b.w - 3) + 'M' + (b.x + 5) + ' ' + (B - 18) + 'H' + (b.x + b.w - 5), 'fine', dl + 420);
      if (b.win) {
        var c = b.w >= 56 ? 3 : (b.w >= 40 ? 2 : 1);
        for (var row = 0; row < b.win; row++) for (var k = 0; k < c; k++) win(b.x + b.w * (k + 1) / (c + 1), b.t + 16 + row * 18, 5, 9, dl + 500 + row * 80);
      }
      if (b.arches) for (var a = 0; a < b.arches; a++) win(b.x + b.w * (a + 1) / (b.arches + 1), b.t + 20, 6, 11, dl + 500);
      if (b.gate) {
        var cx = b.x + b.w / 2;
        add('M' + (cx - 13) + ' ' + B + 'V' + (B - 34) + 'H' + (cx + 13) + 'V' + B, '', dl + 300);
        add('M' + (cx - 8) + ' ' + B + 'V' + (B - 20) + 'A8 8 0 0 1 ' + (cx + 8) + ' ' + (B - 20) + 'V' + B, '', dl + 450);
      }
    });
    add('M14 206C46 202 70 186 88 172C94 167 102 166 112 166L768 164C782 164 790 168 798 176C814 192 830 202 848 206Z', 'hill', 0);
    add('M40 206C110 194 200 176 284 165', '', 600);
    add('M78 206C150 195 232 180 300 169', '', 680);
    add('M104 206V200a6 6 0 0 1 12 0v6', 'fine', 900);
    add('M150 190c22-4 44-4 64 0M330 182c30-6 60-4 90 4M470 176c40 4 70 14 100 22M600 180c30 2 60 10 80 18M700 172c20 8 40 20 60 28M410 196c26-3 50-2 72 4', 'fine', 1200);
    add('M6 206H854', '', 0);
    add('M90 212H770', 'fine', 300);
    return '<svg viewBox="0 0 860 216" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true">' + P.join('') + '</svg>';
  }
  function renderCitadels() {
    var svg = citadelSVG();
    $$('[data-citadel]').forEach(function (el) { el.innerHTML = svg; });
  }

  /* ---------------- Legal pages ---------------- */
  function blocks(items) {
    var out = '', list = null, rows = null;
    function flush() {
      if (list) { out += '<ul>' + list.join('') + '</ul>'; list = null; }
      if (rows) {
        var cells = function (row) { return row.replace(/^\||\|$/g, '').split('|').map(function (c) { return c.trim(); }); };
        var head = cells(rows[0]);
        out += '<div class="table-scroll"><table><thead><tr>' + head.map(function (c) { return '<th scope="col">' + fill(c) + '</th>'; }).join('') + '</tr></thead><tbody>' +
          rows.slice(1).map(function (r) { return '<tr>' + cells(r).map(function (c) { return '<td>' + fill(c) + '</td>'; }).join('') + '</tr>'; }).join('') +
          '</tbody></table></div>';
        rows = null;
      }
    }
    (items || []).forEach(function (s) {
      s = String(s);
      if (s.indexOf('- ') === 0) { if (rows) flush(); (list = list || []).push('<li>' + fill(s.slice(2)) + '</li>'); return; }
      if (s.charAt(0) === '|') { if (list) flush(); (rows = rows || []).push(s); return; }
      flush();
      if (s.indexOf('## ') === 0) out += '<h3>' + fill(s.slice(3)) + '</h3>';
      else out += '<p>' + fill(s) + '</p>';
    });
    flush();
    return out;
  }
  function renderLegal() {
    var box = $('#legal');
    if (!box) return;
    var name = box.getAttribute('data-legal');
    var d = tr('legal.' + name);
    if (!d || !d.sections) return;
    var title = $('#pageTitle');
    if (title) title.innerHTML = fill(d.title);
    var meta = $('#legalMeta');
    if (meta) meta.innerHTML = '<span>' + esc(tr('label.updated')) + ': <time datetime="' + CONFIG.updated + '">' + fill(tr('legal.updatedDate')) + '</time></span>' +
      '<button type="button" class="print-btn" data-print><svg class="ic" aria-hidden="true"><use href="#i-print"/></svg>' + esc(tr('label.print')) + '</button>';
    var html = '';
    if (d.intro) html += '<p class="legal-intro">' + fill(d.intro) + '</p>';
    html += '<nav class="toc" aria-label="' + esc(tr('a11y.toc')) + '"><h2>' + esc(tr('legal.toc')) + '</h2><ol>' +
      d.sections.map(function (s, i) { return '<li><a href="#s' + (i + 1) + '">' + fill(s.h) + '</a></li>'; }).join('') + '</ol></nav>';
    html += d.sections.map(function (s, i) {
      return '<section class="legal-section" id="s' + (i + 1) + '" aria-labelledby="s' + (i + 1) + 'h"><h2 id="s' + (i + 1) + 'h"><span class="n">' + (i + 1) + '.</span><span>' + fill(s.h) + '</span></h2>' + blocks(s.b) + '</section>';
    }).join('');
    var others = ['shipping', 'returns', 'privacy', 'terms'].filter(function (p) { return p !== name; });
    html += '<aside class="legal-other"><strong>' + esc(tr('footer.policies')) + '</strong><ul>' +
      others.map(function (p) { return '<li><a href="' + p + '.html">' + esc(tr('nav.' + p)) + '</a></li>'; }).join('') + '</ul></aside>';
    box.innerHTML = html;
    $$('[data-print]', meta || document).forEach(function (b) { b.addEventListener('click', function () { window.print(); }); });
    if (location.hash && /^#s\d+$/.test(location.hash)) { var t = $(location.hash); if (t) t.scrollIntoView(); }
  }

  /* ---------------- Size tables & tabs ---------------- */
  function renderSizes() {
    ['women', 'men'].forEach(function (g) {
      var tb = $('#tb-' + g);
      if (!tb) return;
      tb.innerHTML = SIZE_CHART[g].map(function (row) {
        return '<tr><th scope="row">' + row[0] + '</th>' + row.slice(1).map(function (c) { return '<td><span dir="ltr">' + c + '</span></td>'; }).join('') + '</tr>';
      }).join('');
    });
  }
  function setupTabs() {
    var tabs = $$('[role="tab"]');
    function select(tab, focus) {
      tabs.forEach(function (t) {
        var on = t === tab;
        t.setAttribute('aria-selected', on ? 'true' : 'false');
        t.tabIndex = on ? 0 : -1;
        document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
      });
      if (focus) tab.focus();
    }
    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { select(t); });
      t.addEventListener('keydown', function (e) {
        if (['ArrowLeft', 'ArrowRight', 'Home', 'End'].indexOf(e.key) === -1) return;
        e.preventDefault();
        var step = (e.key === 'ArrowRight' ? 1 : -1) * (document.documentElement.dir === 'rtl' ? -1 : 1);
        var n = e.key === 'Home' ? 0 : e.key === 'End' ? tabs.length - 1 : (i + step + tabs.length) % tabs.length;
        select(tabs[n], true);
      });
    });
  }

  /* ---------------- Price calculator ---------------- */
  function normalizeDigits(s) {
    return s.replace(/[\u0660-\u0669]/g, function (d) { return String(d.charCodeAt(0) - 0x0660); })
            .replace(/[\u06F0-\u06F9]/g, function (d) { return String(d.charCodeAt(0) - 0x06F0); });
  }
  function parseUSD(raw) {
    var s = normalizeDigits(String(raw || '')).replace(/[\s$]/g, '').replace(/\u066C/g, ',');
    if (!s) return { state: 'empty' };
    s = s.replace(/,(?=\d{3}(?!\d))/g, '').replace(/[,\u066B]/g, '.');
    if (!/^(\d+\.?\d*|\.\d+)$/.test(s)) return { state: 'invalid' };
    var v = Number(s);
    if (!isFinite(v) || v > CONFIG.calcMaxUSD) return { state: 'invalid' };
    if (v === 0) return { state: 'empty' };
    return { state: 'ok', value: v };
  }
  function toIQD(usd) {
    var iqd = Math.round(usd * 100) * CONFIG.rate / 100;   // cents → no float drift
    var step = CONFIG.roundTo > 1 ? CONFIG.roundTo : 1;
    return Math.round(iqd / step) * step;
  }
  function quote(usd, area) {
    var items = toIQD(usd);
    var fee = area === 'other' ? CONFIG.feeOther : CONFIG.feeKurdistan;
    var total = items + fee;
    var needsPrepay = usd > CONFIG.prepayThresholdUSD;
    var prepay = needsPrepay ? Math.round(total * CONFIG.prepayPercent / 100) : 0;
    return { items: items, fee: fee, total: total, prepay: prepay, cod: total - prepay, needsPrepay: needsPrepay };
  }
  function updateCalc() {
    var input = $('#usd');
    if (!input) return;
    var res = parseUSD(input.value);
    var areaEl = $('input[name="area"]:checked');
    var area = areaEl ? areaEl.value : 'krg';
    var invalid = res.state === 'invalid';
    $('#usdWrap').classList.toggle('invalid', invalid);
    input.setAttribute('aria-invalid', invalid ? 'true' : 'false');
    var err = $('#calcErr');
    err.hidden = !invalid;
    err.textContent = invalid ? tr('calc.invalid') : '';
    var fee = area === 'other' ? CONFIG.feeOther : CONFIG.feeKurdistan;
    $('#feeOut').textContent = nf.format(fee);
    var wa = $('#calcWa');
    if (res.state !== 'ok') {
      $('#itemsOut').textContent = '—';
      $('#totalOut').textContent = '—';
      $('#totalBig').textContent = '0';
      $('#calcSplit').hidden = true;
      $('#calcNoPre').hidden = false;
      wa.href = waUrl(fill(tr('wa.greet'), false));
      return;
    }
    var q = quote(res.value, area);
    $('#itemsOut').textContent = nf.format(q.items);
    $('#totalOut').textContent = nf.format(q.total);
    $('#totalBig').textContent = nf.format(q.total);
    $('#calcSplit').hidden = !q.needsPrepay;
    $('#calcNoPre').hidden = q.needsPrepay;
    $('#prepayOut').textContent = nf.format(q.prepay);
    $('#codOut').textContent = nf.format(q.cod);
    var areaName = tr(area === 'other' ? 'calc.areaOther' : 'calc.areaKRG');
    var prepayLine = q.needsPrepay ? fill(tr('wa.calcPrepay'), false, { prepay: nf.format(q.prepay), cod: nf.format(q.cod) }) : '';
    wa.href = waUrl(fill(tr('wa.calc'), false, {
      usd: usdFmt.format(res.value), items: nf.format(q.items), area: areaName, fee: nf.format(q.fee),
      total: nf.format(q.total), prepayLine: prepayLine
    }));
  }
  function setupCalc() {
    var input = $('#usd');
    if (!input) return;
    input.addEventListener('input', updateCalc);
    $$('input[name="area"]').forEach(function (r) { r.addEventListener('change', updateCalc); });
    $$('[data-amt]').forEach(function (b) {
      b.addEventListener('click', function () { input.value = b.getAttribute('data-amt'); updateCalc(); });
    });
  }

  /* ---------------- Lazy Google Map ---------------- */
  function setupMaps() {
    var boxes = $$('[data-map]');
    if (!boxes.length) return;
    function load(box) {
      if (box.querySelector('iframe')) return;
      var f = document.createElement('iframe');
      f.src = CONFIG.mapEmbed;
      f.loading = 'lazy';
      f.referrerPolicy = 'no-referrer-when-downgrade';
      f.title = tr('label.mapTitle');
      f.allowFullscreen = true;
      box.appendChild(f);
    }
    if (!('IntersectionObserver' in window)) { boxes.forEach(load); return; }
    var io = new IntersectionObserver(function (en) {
      en.forEach(function (e) { if (e.isIntersecting) { load(e.target); io.unobserve(e.target); } });
    }, { rootMargin: '300px 0px' });
    boxes.forEach(function (b) { io.observe(b); });
  }

  /* ---------------- Contact form → WhatsApp (nothing stored) ---------------- */
  function setupForm() {
    var form = $('#contactForm');
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = $('#cMsg').value.trim();
      var err = $('#formErr');
      if (!msg) { err.hidden = false; err.textContent = tr('form.err'); $('#cMsg').focus(); return; }
      err.hidden = true;
      var text = fill(tr('wa.contact'), false, { cname: $('#cName').value.trim() || '-', ccity: $('#cCity').value.trim() || '-', cmsg: msg });
      window.open(waUrl(text), '_blank', 'noopener');
    });
  }

  /* ---------------- Language ---------------- */
  function setLang(next, save) {
    if (!I18N[next] || !LANGS[next]) next = CONFIG.defaultLang;
    lang = next;
    var meta = LANGS[next], root = document.documentElement;
    root.lang = meta.code;
    root.dir = meta.dir;

    $$('[data-i18n]').forEach(function (el) { el.innerHTML = fill(tr(el.getAttribute('data-i18n'))); });
    $$('[data-tpl]').forEach(function (el) { el.innerHTML = fill(el.getAttribute('data-tpl')); });
    $$('[data-i18n-attr]').forEach(function (el) {
      el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
        var p = pair.split(':');
        if (p.length === 2) el.setAttribute(p[0].trim(), fill(tr(p[1].trim()), false));
      });
    });
    renderLegal();

    var titleKey = 'page.' + PAGE + '.title', descKey = 'page.' + PAGE + '.desc';
    if (tr(titleKey)) document.title = fill(tr(titleKey), false);
    var desc = fill(tr(descKey), false);
    [['meta[name="description"]', desc], ['meta[property="og:title"]', document.title], ['meta[property="og:description"]', desc],
     ['meta[name="twitter:title"]', document.title], ['meta[name="twitter:description"]', desc], ['meta[property="og:locale"]', meta.og]]
      .forEach(function (m) { var el = $(m[0]); if (el && m[1]) el.setAttribute('content', m[1]); });

    var cur = $('#langCurrent'), sh = $('#langShort');
    if (cur) cur.textContent = meta.label;
    if (sh) sh.textContent = meta.short;
    $$('#langMenu button').forEach(function (b) { b.setAttribute('aria-current', b.getAttribute('data-lang') === next ? 'true' : 'false'); });

    $$('iframe[src*="google.com/maps"]').forEach(function (f) { f.title = tr('label.mapTitle'); });
    updateWA();
    updateCalc();
    if (save) { try { localStorage.setItem(STORE_KEY, next); } catch (e) { /* storage unavailable */ } }
  }
  function initialLang() {
    var l = null;
    try { l = new URLSearchParams(location.search).get('lang'); } catch (e) {}
    if (l && I18N[l]) { try { localStorage.setItem(STORE_KEY, l); } catch (e) {} return l; }
    try { l = localStorage.getItem(STORE_KEY); } catch (e) { l = null; }
    return (l && I18N[l]) ? l : CONFIG.defaultLang;
  }

  /* ---------------- Header: language menu, mobile nav, scroll ---------------- */
  function setupHeader() {
    var langBtn = $('#langBtn'), langMenu = $('#langMenu'), menuBtn = $('#menuBtn'), nav = $('#mainNav'), header = $('#siteHeader');
    if (!langBtn) return;
    $$('#mainNav a').forEach(function (a) { if (a.getAttribute('data-nav') === PAGE) a.setAttribute('aria-current', 'page'); });
    function openLang(open) {
      langMenu.hidden = !open;
      langBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (open) (langMenu.querySelector('[aria-current="true"]') || langMenu.querySelector('button')).focus();
    }
    function openNav(open) { nav.classList.toggle('open', open); menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false'); }
    langBtn.addEventListener('click', function (e) { e.stopPropagation(); openNav(false); openLang(langMenu.hidden); });
    $$('#langMenu button').forEach(function (b) {
      b.addEventListener('click', function () { setLang(b.getAttribute('data-lang'), true); openLang(false); langBtn.focus(); });
    });
    langMenu.addEventListener('keydown', function (e) {
      var items = $$('#langMenu button'), i = items.indexOf(document.activeElement);
      if (e.key === 'ArrowDown') { e.preventDefault(); items[(i + 1) % items.length].focus(); }
      if (e.key === 'ArrowUp') { e.preventDefault(); items[(i - 1 + items.length) % items.length].focus(); }
    });
    menuBtn.addEventListener('click', function (e) { e.stopPropagation(); openLang(false); openNav(!nav.classList.contains('open')); });
    $$('#mainNav a').forEach(function (a) { a.addEventListener('click', function () { openNav(false); }); });
    document.addEventListener('click', function (e) {
      if (!langMenu.hidden && !e.target.closest('.lang')) openLang(false);
      if (nav.classList.contains('open') && !e.target.closest('#mainNav') && !e.target.closest('#menuBtn')) openNav(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape') return;
      if (!langMenu.hidden) { openLang(false); langBtn.focus(); }
      if (nav.classList.contains('open')) { openNav(false); menuBtn.focus(); }
    });
    var ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () { header.classList.toggle('scrolled', window.scrollY > 8); ticking = false; });
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------------- Scroll reveal ---------------- */
  function setupReveal() {
    $$('.stagger').forEach(function (g) {
      Array.prototype.forEach.call(g.children, function (c, i) { c.classList.add('reveal'); c.style.setProperty('--rd', (i * 90) + 'ms'); });
    });
    var items = $$('.reveal');
    if (reduceMotion || !('IntersectionObserver' in window)) { items.forEach(function (el) { el.classList.add('in'); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    items.forEach(function (el) { io.observe(el); });
    window.addEventListener('beforeprint', function () { items.forEach(function (el) { el.classList.add('in'); }); });
  }

  /* ---------------- Init ---------------- */
  renderCitadels();
  renderSizes();
  fillLinks();
  setupTabs();
  setupCalc();
  setupForm();
  setupHeader();
  setLang(initialLang(), false);
  setupMaps();
  setupReveal();

  window.Qalat = { setLang: setLang, quote: quote, parseUSD: parseUSD, toIQD: toIQD };
})();
