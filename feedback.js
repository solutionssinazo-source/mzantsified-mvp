/* Solutions Sinazo - feedback widget (Mzantsified + Ad//Intel), 29 Sept 2026.
 * Include with:
 *   <script src="https://mzantsified.co.za/feedback.js" data-product="mzantsified" defer></script>
 * Options (data- attributes on the script tag):
 *   data-product   "mzantsified" | "adintel"            (required)
 *   data-delay     seconds before the pop-up opens       (default 90)
 *   data-inline    CSS selector: render the form inside that element instead of the pop-up only
 *   data-button    "off" to hide the floating Feedback button
 *   data-popup     "off" to never open the timed pop-up (e.g. on the feedback page itself)
 * The pop-up keeps coming back on later visits until the person either sends
 * feedback or taps "No thanks". Closing it with \u00D7 only hides it for this visit.
 */
(function () {
  var script = document.currentScript;
  if (!script) return;
  var PRODUCT = script.getAttribute('data-product') === 'adintel' ? 'adintel' : 'mzantsified';
  var DELAY = Math.max(10, parseInt(script.getAttribute('data-delay') || '90', 10)) * 1000;
  var INLINE = script.getAttribute('data-inline');
  var SHOW_BUTTON = script.getAttribute('data-button') !== 'off';
  var POPUP = script.getAttribute('data-popup') !== 'off';
  var ENDPOINT = new URL('/api/feedback', script.src).href;
  var KEY = 'ss_feedback_' + PRODUCT;
  var NAME = PRODUCT === 'adintel' ? 'Ad//Intel' : 'Mzantsified';

  function getDecision() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function setDecision(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }

  var css = '' +
    '.ssfb,.ssfb *{box-sizing:border-box;font-family:Manrope,system-ui,-apple-system,sans-serif}' +
    '.ssfb-btn{position:fixed;right:0;top:50%;transform:translateY(-50%);writing-mode:vertical-rl;z-index:2147483000;background:#FFB612;color:#1A1204;border:0;border-radius:10px 0 0 10px;padding:14px 8px;font-weight:700;font-size:13px;letter-spacing:.02em;box-shadow:0 6px 20px rgba(0,0,0,.35);cursor:pointer;min-width:34px}' +
    '.ssfb-overlay{position:fixed;inset:0;z-index:2147483001;background:rgba(4,5,10,.72);display:flex;align-items:flex-end;justify-content:center;padding:0}' +
    '@media(min-width:640px){.ssfb-overlay{align-items:center;padding:16px}}' +
    '.ssfb-card{background:#0E1017;color:#F4F4F2;width:100%;max-width:480px;max-height:92vh;overflow:auto;border-radius:20px 20px 0 0;padding:20px 16px 24px;border:1px solid rgba(255,182,18,.25)}' +
    '@media(min-width:640px){.ssfb-card{border-radius:20px;padding:24px}}' +
    '.ssfb-inline .ssfb-card{max-height:none;border-radius:16px}' +
    '.ssfb h2{margin:0 0 4px;font-size:20px;font-weight:800;color:#FDFDFD}' +
    '.ssfb p.ssfb-sub{margin:0 0 16px;color:#A8AAB2;font-size:14px;line-height:1.45}' +
    '.ssfb label{display:block;font-size:13px;font-weight:600;color:#D6D7DB;margin:14px 0 6px}' +
    '.ssfb textarea,.ssfb input[type=text],.ssfb input[type=number]{width:100%;background:#04050A;color:#F4F4F2;border:1px solid #2A2C35;border-radius:12px;padding:10px 12px;font-size:15px}' +
    '.ssfb textarea{min-height:72px;resize:vertical}' +
    '.ssfb textarea:focus,.ssfb input:focus{outline:2px solid #FFB612;outline-offset:1px}' +
    '.ssfb-row{display:flex;flex-wrap:wrap;gap:8px}' +
    '.ssfb-chip{border:1px solid #2A2C35;background:#04050A;color:#F4F4F2;border-radius:999px;padding:9px 14px;font-size:14px;cursor:pointer;min-height:40px}' +
    '.ssfb-chip[aria-pressed=true]{background:#FFB612;color:#1A1204;border-color:#FFB612;font-weight:700}' +
    '.ssfb-actions{display:flex;gap:10px;margin-top:20px;align-items:center;flex-wrap:wrap}' +
    '.ssfb-send{background:#FFB612;color:#1A1204;border:0;border-radius:12px;padding:12px 18px;font-weight:800;font-size:15px;cursor:pointer;min-height:44px;flex:1}' +
    '.ssfb-send[disabled]{opacity:.6;cursor:wait}' +
    '.ssfb-no{background:transparent;color:#A8AAB2;border:0;padding:12px 8px;font-size:14px;cursor:pointer;min-height:44px;text-decoration:underline}' +
    '.ssfb-x{float:right;background:transparent;border:0;color:#A8AAB2;font-size:26px;line-height:1;cursor:pointer;width:44px;height:44px;margin:-10px -8px 0 0}' +
    '.ssfb-msg{margin-top:12px;font-size:14px}' +
    '.ssfb-err{color:#FF8A7A}.ssfb-ok{color:#FFD27A}' +
    '.ssfb-hp{position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden}';

  function injectCss() {
    if (document.getElementById('ssfb-css')) return;
    var s = document.createElement('style'); s.id = 'ssfb-css'; s.textContent = css;
    document.head.appendChild(s);
  }

  function chips(name, options) {
    return '<div class="ssfb-row" role="group" data-group="' + name + '">' + options.map(function (o) {
      return '<button type="button" class="ssfb-chip" aria-pressed="false" data-value="' + o[0] + '">' + o[1] + '</button>';
    }).join('') + '</div>';
  }

  function formHtml(isModal) {
    var adIntel = PRODUCT === 'adintel';
    return '' +
      '<div class="ssfb-card" role="document">' +
      (isModal ? '<button type="button" class="ssfb-x" aria-label="Close">\u00D7</button>' : '') +
      '<h2>How is ' + NAME + ' working for you?</h2>' +
      '<p class="ssfb-sub">' + (adIntel
        ? 'This is a demo. Your honest view helps us decide what to build next. It takes about a minute.'
        : 'You are one of our first users. Tell us honestly what works and what does not. It takes about a minute.') + '</p>' +
      '<form novalidate>' +
      '<label>Overall rating</label>' + chips('rating', [[5, '5 Excellent'], [4, '4 Good'], [3, '3 Okay'], [2, '2 Poor'], [1, '1 Very poor']]) +
      '<label for="ssfb-works">What works well?</label><textarea id="ssfb-works" name="whatWorks" maxlength="4000"></textarea>' +
      '<label for="ssfb-fails">What doesn\'t work, or is confusing?</label><textarea id="ssfb-fails" name="whatFails" maxlength="4000"></textarea>' +
      (adIntel
        ? '<label>Would you rather pay\u2026</label>' + chips('preferredModel', [['as_is_once_off', 'Per request'], ['monthly_subscription', 'Monthly subscription'], ['unsure', 'Not sure']]) +
          '<label for="ssfb-price">What would be a fair monthly price? (R)</label><input id="ssfb-price" type="number" inputmode="numeric" min="0" name="willingToPayZar" placeholder="e.g. 250">'
        : '') +
      '<label>Would you recommend it to someone?</label>' + chips('wouldRecommend', [['yes', 'Yes'], ['no', 'No']]) +
      '<label for="ssfb-more">Anything else?</label><textarea id="ssfb-more" name="comments" maxlength="4000"></textarea>' +
      '<label for="ssfb-name">Your name (optional)</label><input id="ssfb-name" type="text" name="name" maxlength="120" autocomplete="name">' +
      '<label for="ssfb-contact">Email or WhatsApp, if we may follow up (optional)</label><input id="ssfb-contact" type="text" name="contact" maxlength="160">' +
      '<div class="ssfb-hp" aria-hidden="true"><input type="text" name="website" tabindex="-1" autocomplete="off"></div>' +
      '<div class="ssfb-actions"><button type="submit" class="ssfb-send">Send feedback</button>' +
      (isModal ? '<button type="button" class="ssfb-no">No thanks</button>' : '') + '</div>' +
      '<div class="ssfb-msg" role="status" aria-live="polite"></div>' +
      '</form></div>';
  }

  function wire(root, onDone) {
    var picked = {};
    root.querySelectorAll('[data-group]').forEach(function (g) {
      g.addEventListener('click', function (e) {
        var b = e.target.closest('.ssfb-chip'); if (!b) return;
        g.querySelectorAll('.ssfb-chip').forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
        picked[g.getAttribute('data-group')] = b.getAttribute('data-value');
      });
    });
    var form = root.querySelector('form');
    var msg = root.querySelector('.ssfb-msg');
    var send = root.querySelector('.ssfb-send');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var f = form.elements;
      var payload = {
        product: PRODUCT,
        rating: picked.rating ? parseInt(picked.rating, 10) : null,
        whatWorks: f.whatWorks.value, whatFails: f.whatFails.value, comments: f.comments.value,
        preferredModel: picked.preferredModel || null,
        willingToPayZar: f.willingToPayZar && f.willingToPayZar.value !== '' ? Number(f.willingToPayZar.value) : null,
        wouldRecommend: picked.wouldRecommend ? picked.wouldRecommend === 'yes' : null,
        name: f.name.value, contact: f.contact.value, website: f.website.value
      };
      if (!payload.rating && !payload.whatWorks.trim() && !payload.whatFails.trim() && !payload.comments.trim()) {
        msg.className = 'ssfb-msg ssfb-err'; msg.textContent = 'Please choose a rating or write a comment.'; return;
      }
      send.disabled = true; msg.className = 'ssfb-msg'; msg.textContent = 'Sending\u2026';
      fetch(ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
        .then(function (r) { if (!r.ok) throw new Error(String(r.status)); return r.json(); })
        .then(function () {
          setDecision('submitted');
          msg.className = 'ssfb-msg ssfb-ok'; msg.textContent = 'Enkosi! Your feedback has been received.';
          form.querySelectorAll('textarea,input,button').forEach(function (x) { x.disabled = true; });
          if (onDone) setTimeout(onDone, 1800);
        })
        .catch(function () {
          send.disabled = false; msg.className = 'ssfb-msg ssfb-err';
          msg.textContent = 'Sorry, that did not send. Please check your connection and try again.';
        });
    });
  }

  var overlay = null, lastFocus = null;
  function closeModal() {
    if (!overlay) return;
    overlay.remove(); overlay = null;
    document.removeEventListener('keydown', onKey);
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  function onKey(e) { if (e.key === 'Escape') closeModal(); }
  function openModal() {
    if (overlay) return;
    injectCss();
    lastFocus = document.activeElement;
    overlay = document.createElement('div');
    overlay.className = 'ssfb ssfb-overlay';
    overlay.setAttribute('role', 'dialog'); overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', 'Feedback');
    overlay.innerHTML = formHtml(true);
    document.body.appendChild(overlay);
    overlay.querySelector('.ssfb-x').addEventListener('click', closeModal);
    overlay.querySelector('.ssfb-no').addEventListener('click', function () { setDecision('declined'); closeModal(); });
    overlay.addEventListener('click', function (e) { if (e.target === overlay) closeModal(); });
    document.addEventListener('keydown', onKey);
    wire(overlay, closeModal);
    var first = overlay.querySelector('.ssfb-chip'); if (first) first.focus();
  }

  function start() {
    injectCss();
    if (INLINE) {
      var host = document.querySelector(INLINE);
      if (host) { host.classList.add('ssfb', 'ssfb-inline'); host.innerHTML = formHtml(false); wire(host); }
    }
    if (SHOW_BUTTON) {
      var b = document.createElement('button');
      b.type = 'button'; b.className = 'ssfb ssfb-btn'; b.textContent = 'Feedback';
      b.setAttribute('aria-label', 'Give feedback on ' + NAME);
      b.addEventListener('click', openModal);
      document.body.appendChild(b);
    }
    if (POPUP && !getDecision()) setTimeout(function () { if (!getDecision()) openModal(); }, DELAY);
  }

  window.SSFeedback = { open: openModal, mountInline: function (sel) {
    var host = document.querySelector(sel); if (!host) return;
    injectCss(); host.classList.add('ssfb', 'ssfb-inline'); host.innerHTML = formHtml(false); wire(host);
  } };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
