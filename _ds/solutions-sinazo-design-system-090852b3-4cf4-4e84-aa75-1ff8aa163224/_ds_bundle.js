/* @ds-bundle: {"format":4,"namespace":"SolutionsSinazoDesignSystem_090852","components":[{"name":"DiamondRule","sourcePath":"components/brand/DiamondRule.jsx"},{"name":"Logotype","sourcePath":"components/brand/Logotype.jsx"},{"name":"PatternSurface","sourcePath":"components/brand/PatternSurface.jsx"},{"name":"PortraitEmerge","sourcePath":"components/brand/PortraitEmerge.jsx"},{"name":"RomanRail","sourcePath":"components/brand/RomanRail.jsx"},{"name":"SectionLabel","sourcePath":"components/brand/SectionLabel.jsx"},{"name":"StatBlock","sourcePath":"components/brand/StatBlock.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"assets/image-slot.js":"fff26d081c8d","components/brand/DiamondRule.jsx":"98b444933f57","components/brand/Logotype.jsx":"144910bd713f","components/brand/PatternSurface.jsx":"6cd412c1570e","components/brand/PortraitEmerge.jsx":"bcd8693cd310","components/brand/RomanRail.jsx":"9cc722d3314d","components/brand/SectionLabel.jsx":"ddfa3a4bebe7","components/brand/StatBlock.jsx":"10db1afef3cf","components/core/Badge.jsx":"0d2da0c83429","components/core/Button.jsx":"ae800752e629","components/core/Card.jsx":"2e6bb5f3e3c7","components/core/Icon.jsx":"bc1cd92d5340","components/core/IconButton.jsx":"50c7975d6d7e","components/core/Tag.jsx":"b0aaf059e2a9","components/feedback/Dialog.jsx":"ee625c073162","components/feedback/Toast.jsx":"68a9ed8957d7","components/feedback/Tooltip.jsx":"34d1ceb9eab2","components/forms/Checkbox.jsx":"9631998a1e24","components/forms/Input.jsx":"325015a7469d","components/forms/Radio.jsx":"16912820b32f","components/forms/Select.jsx":"8a27abfe8282","components/forms/Switch.jsx":"fc3043bdc47f","components/navigation/NavBar.jsx":"f474d6586e36","components/navigation/Tabs.jsx":"d33adc0e89f3","ui_kits/platform/AuthShell.jsx":"cb24b41a2539","ui_kits/platform/ConsentScreen.jsx":"c7dbf43675e8","ui_kits/platform/LoginScreen.jsx":"c35b33a97174","ui_kits/platform/RecoveryScreens.jsx":"2294433da652","ui_kits/platform/RegisterScreen.jsx":"3eaafacb7487","ui_kits/website/ConsultScreen.jsx":"fc796ee9e53f","ui_kits/website/EcosystemScreen.jsx":"a9623ec3bbe6","ui_kits/website/HomeScreen.jsx":"dadb11ce3aef","ui_kits/website/SiteChrome.jsx":"529a8529074b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SolutionsSinazoDesignSystem_090852 = window.SolutionsSinazoDesignSystem_090852 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// assets/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever a design needs an image.
 * You control the slot's shape; it sizes to its container by default. When the search_stock_photos tool
 * is available, prefill the slot by default — write the photo's URL into
 * src (with credit/credit-href); the user can still fill or replace it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The sidecar is a SIBLING of the HTML file that uses this component: the
 * read is a document-relative fetch, and the host resolves the bridge's
 * sidecar writes into the previewed file's directory to match (same
 * contract as design_canvas.jsx). Pages in the same directory share one
 * sidecar; keep slot ids distinct across them.
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          Initial framing baseline: cover | contain.   (default 'cover')
 *                cover starts the image filling the frame (overflow cropped);
 *                contain starts it fully visible (letterboxed). Either way the
 *                user can always pan/scale from there — double-click, or the
 *                Edit control, enters reframe mode (drag to move, scroll or
 *                corner-handles to scale; Escape / click-out commits). The
 *                crop persists alongside the image in the sidecar.
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. Prefill it with a real
 *                photo via search_stock_photos when that tool is available
 *                (set credit/credit-href from the result). A user drop
 *                overrides it; clearing the drop reveals src again.
 *   credit       Attribution text shown as a small overlay at the
 *                bottom-left of the filled slot. REQUIRED whenever src
 *                points at any Unsplash host (images.unsplash.com,
 *                plus.unsplash.com, …): an Unsplash src with no credit
 *                renders an error tile INSTEAD of the photo (Unsplash
 *                terms forbid showing their photos unattributed). Use the
 *                exact form 'Photo by {photographer name} on Unsplash' —
 *                the overlay then links the name to credit-href and
 *                'Unsplash' to the Unsplash homepage, and links back to
 *                unsplash.com automatically get the required utm referral
 *                params appended at render time. The credit belongs to
 *                the src image, so it only shows while src is what's
 *                displayed — a user-dropped image hides it.
 *   credit-href  Link for the photographer's name in the credit overlay
 *                (their Unsplash profile URL from the stock-photo search
 *                results). http(s) URLs only — anything else renders the
 *                name as plain text.
 *
 * Sizing: the slot fills its container by default (width/height 100%).
 * Put it in a sized wrapper — absolutely positioned, a grid cell, a fixed
 * frame — and it takes exactly that box. When the parent's height is
 * indefinite (ordinary flow), it falls back to full width at a 3:2 aspect
 * ratio instead of collapsing. In a shrink-to-fit parent (a float,
 * width:max-content, an unsized absolute wrapper), percentages have
 * nothing to resolve against — size the slot or its wrapper explicitly
 * there. For a fixed-size slot, set
 * width/height on the element itself (inline style), which overrides the
 * default. When
 * layering content above a slot (full-bleed layouts), make the overlay
 * click-through — pointer-events: none on scrims/text plates, re-enabled
 * on interactive children — so the slot's hover controls stay reachable.
 * Keep the slot's bottom-left corner visually clear as well: the credit
 * overlay renders there, and a dark fade or text plate covering it hides
 * the attribution Unsplash's terms require — end the fade above that
 * corner, or keep it nearly transparent where the credit sits.
 *
 * Usage:
 *   <div style="position:relative;width:100%;height:100%">      <!-- full-bleed: -->
 *     <image-slot id="bg" shape="rect"></image-slot>            <!-- fills the wrapper -->
 *   </div>
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';

  // Unsplash terms require visible attribution wherever their photos
  // display, and every link back to unsplash.com must carry utm referral
  // params. Two render-time rules enforce that here:
  //  - an Unsplash-src slot with NO credit attribute renders an error
  //    tile INSTEAD of the photo (an uncredited Unsplash photo on screen
  //    is itself the terms violation, so it never renders bare);
  //  - rendered credit links pointing at unsplash.com get the referral
  //    params appended when absent (credit-href values live in page
  //    content that can't be edited after the fact).
  // Keep the utm_source value in sync with UTM_SOURCE in
  // platform/web-agent/unsplash.ts — this file is a project-local
  // artifact and cannot import it (equality is pinned by tests).
  const UNSPLASH_HOMEPAGE_HREF = 'https://unsplash.com/?utm_source=claude_design&utm_medium=referral';
  // Host rule mirrors the hotlink validator that admits Unsplash srcs into
  // pages in the first place (cdn$ in unsplash.ts: apex or any subdomain)
  // — Unsplash+ results serve from plus.unsplash.com, not just images.*,
  // and an admitted-but-uncredited photo must error whatever unsplash
  // host it rides on.
  // Trailing-dot FQDNs (images.unsplash.com.) are the same host to the
  // browser but would miss the regex — strip one dot so the check fails
  // CLOSED (unrecognized-but-real Unsplash srcs must error, not render).
  const isUnsplashHost = u => {
    try {
      return /(^|\.)unsplash\.com$/.test(new URL(u, document.baseURI).hostname.replace(/\.$/, ''));
    } catch {
      return false;
    }
  };
  // Render-time referral normalization for links back to Unsplash:
  // appends utm_source/utm_medium when absent, preserves every existing
  // query param, never overwrites an existing utm_source, and passes
  // non-Unsplash URLs through untouched. Input is an ABSOLUTE validated
  // http(s) URL (the credit render funnel resolves + validates first).
  const withReferral = href => {
    try {
      const u = new URL(href);
      if (!/(^|\.)unsplash\.com$/.test(u.hostname.replace(/\.$/, ''))) {
        return href;
      }
      if (!u.searchParams.has('utm_source')) {
        u.searchParams.set('utm_source', 'claude_design');
      }
      if (!u.searchParams.has('utm_medium')) {
        u.searchParams.set('utm_medium', 'referral');
      }
      return u.toString();
    } catch (e) {
      return href;
    }
  };
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  // Unload-time flush: save()'s serialization defers a mid-RTT re-fire to a
  // .then that never runs in an unloading document, silently dropping a
  // pagehide commit. Post the current slots immediately instead — content
  // is a superset snapshot of any in-flight save's, the write is a
  // whole-file last-writer-wins replace, and postMessage FIFO delivers it
  // to the host after the in-flight one, so a backend-side reorder at
  // worst reproduces the dropped-commit outcome this flush improves on.
  // Guarded on the initial sidecar read: pre-hydration slots can miss
  // other slots' persisted entries, and flushing it would clobber them —
  // that narrow case stays best-effort (the in-memory merge in load()
  // cannot happen in an unloading document anyway).
  function flushNow() {
    if (!loaded) return;
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    try {
      Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {});
    } catch (e) {}
  }
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet =
  // Fill the container by default: slots are usually placed inside a
  // sized wrapper (a hero frame, a grid cell, an inset:0 layer) and are
  // expected to take that box — a fixed intrinsic size would render as
  // a small tile in the corner of a full-bleed wrapper instead.
  // aspect-ratio is the companion fallback that keeps a bare slot
  // visible when the parent's height is indefinite: height:100%
  // resolves to auto there, and the ratio then derives height from
  // width instead of letting the slot collapse to zero height.
  // Explicit width/height on the element override all of this.
  // color:inherit (not a fixed near-black): the placeholder chrome —
  // empty-state icon/caption (currentColor) and the dashed ring — must
  // read on dark decks too, and the slide's own text color is the one
  // color guaranteed to contrast with the slide background. The soft
  // look comes from opacity on those parts, not from a baked-in alpha.
  ':host{display:block;position:relative;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;' + '  width:100%;height:100%;aspect-ratio:3/2}' + '.empty .cap,.empty .sub{opacity:.75}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(127,127,127,.08)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  // popover=manual promotes the spill to the top layer on reframe, so it is
  // not clipped by any overflow:hidden / clip-path / scroll-container
  // ancestor (a plain z-index can't escape overflow clipping). UA popover
  // defaults (inset:0;margin:auto) are reset; _applyView sets viewport px.
  '.spill{position:fixed;margin:0;inset:auto;border:0;padding:0;background:transparent;' + '  overflow:visible;transform:translate(-50%,-50%);z-index:1;cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px}' + '.empty:hover .sub{opacity:1}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed currentColor;' + '  opacity:.35;transition:border-color .12s,opacity .12s}' + ':host([data-over]) .ring{border-color:#c96442;opacity:1}' + ':host([data-filled]) .ring{display:none}' +
  // Controls overlay INSIDE the frame, pinned to the top-right corner, so
  // a full-bleed slot in an overflow:hidden container still shows them
  // (the old below-mask placement got clipped). Credit sits bottom-left,
  // so top-right avoids collision. The blurred pill background keeps them
  // legible over the image.
  // The UA [popover] base rule styles the element in EVERY state (only
  // display:none is gated on :not(:popover-open), and the display:flex
  // below overrides that) — so the UA resets live HERE, like .spill's,
  // or the ordinary hover-state strip renders as a bordered Canvas box
  // centered by margin:auto. inset:auto precedes top/right (shorthand).
  '.ctl{position:absolute;inset:auto;top:8px;right:8px;margin:0;border:0;padding:0;' + '  background:transparent;overflow:visible;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' +
  // While reframing, the spill owns the top layer and would swallow every
  // click on the in-frame controls. Promoting .ctl into the top layer
  // ABOVE the spill (shown after it — later popovers stack higher) keeps
  // Edit-as-toggle and Replace clickable mid-reframe. _applyView pins it
  // to the frame's top-right in viewport px (translateX(-100%)
  // right-aligns against the computed left edge); inset:auto clears the
  // base rule's top/right so the inline left/top position it alone.
  '.ctl:popover-open{position:fixed;inset:auto;transform:translateX(-100%)}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}' +
  // Replacement in flight: after a src swap the browser keeps painting
  // the PREVIOUS image until the new one decodes, so a Replace would
  // flash the old photo and then pop. Hide the stale frame (visibility,
  // not display — _applyView geometry still applies) and spin until the
  // new image reports in (load/error clears data-swapping).
  ':host([data-swapping]) .frame img{visibility:hidden}' + '.loading{position:absolute;inset:0;display:none;align-items:center;' + '  justify-content:center;pointer-events:none}' + ':host([data-swapping]) .loading{display:flex}' + '.loading::after{content:"";width:22px;height:22px;border-radius:50%;' + '  border:2px solid rgba(127,127,127,.25);border-top-color:currentColor;' + '  animation:om-slot-spin .7s linear infinite}' + '@keyframes om-slot-spin{to{transform:rotate(360deg)}}' +
  // Reduced motion: the static two-tone ring still reads as "working".
  '@media (prefers-reduced-motion:reduce){.loading::after{animation:none}}' + '.credit{position:absolute;left:6px;bottom:6px;max-width:calc(100% - 12px);display:none;' + '  padding:3px 7px;border-radius:5px;background:rgba(0,0,0,.55);color:#fff;' + '  font:10px/1.2 system-ui,-apple-system,sans-serif;text-decoration:none;' + '  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;backdrop-filter:blur(6px)}' +
  // The credit is a SPAN holding one or two <a>s (Unsplash's prescribed
  // form links the photographer AND Unsplash) — anchors style inline so
  // the overlay reads as one line of text.
  '.credit a{color:inherit;text-decoration:none}' + '.credit a:hover,.credit a:focus-visible{text-decoration:underline}' + ':host([data-filled][data-credit]) .credit{display:block}' +
  // Exports must ship JUST the image — no hover controls, no credit chip
  // (the host marks <html data-om-exporting> for the capture window; the
  // page-level hide script can't reach shadow DOM, this rule can).
  ':host-context([data-om-exporting]) .ctl,' + ':host-context([data-om-exporting]) .credit{display:none !important}' +
  // Print must ship just the image too: the hover-gated controls can be
  // mid-hover when print() fires, and the credit chip is screen chrome —
  // the same rule the capture window gets, keyed on print media instead
  // of the host's data-om-exporting mark (the print path sets no mark).
  '@media print{.ctl,.credit{display:none !important}}' +
  // No export-window mask rules here on purpose: the export capture
  // releases the replacement mask by REMOVING data-swapping (the
  // shadow-root pass in pages/export/shared.ts HIDE_EXPORT_CHROME_SCRIPT)
  // — attribute removal works in every engine (:host-context is
  // Chromium-only), is scoped by construction to slots actually
  // mid-swap, and hides the spinner through the same gate. A masked img
  // would otherwise be silently dropped from PPTX decks (the capture
  // walk skips visibility:hidden imgs).
  // Attribution error tile: REPLACES the photo when an Unsplash src has
  // no credit attribute — rendering the photo uncredited is the terms
  // violation, so the photo must not appear at all.
  // Calm and neutral on purpose (review feedback): the tile informs the
  // user; the fix instructions are machine-facing (usage docblock, tool
  // description, and the turn-end scan's bounce copy name the attributes
  // for the agent).
  '.attr-error{position:absolute;inset:0;display:none;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  background:#f2f1ef;color:#6e6c66;user-select:none;' + '  font:13px/1.45 system-ui,-apple-system,sans-serif}' + '.attr-error svg{opacity:.55}' + '.attr-error .cap{max-width:92%;font-weight:500;letter-spacing:.01em}' + ':host([data-attribution-error]) .attr-error{display:flex}' + ':host([data-attribution-error]) .ring{display:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  const warnIcon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>' + '<path d="M12 9v4"/><path d="M12 17h.01"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'placeholder', 'src', 'id', 'credit', 'credit-href'];
    }

    /** Duplicate-slide hook (called by deck-stage, see its
     *  _remintDuplicateIds): copy this id's stored image, if any, under a
     *  freshly minted key and return that key — so a duplicated slide's
     *  slot keeps its dropped photo instead of reverting to the
     *  placeholder. 'isFree' is the caller's uniqueness check (document
     *  ids); candidates must ALSO be unused in the sidecar, which can
     *  hold keys from other pages sharing the project root. (An EMPTY
     *  slot on another page leaves no sidecar entry, so its id is not
     *  detectable here — a minted key can collide with it and that slot
     *  would show this photo. Same blast radius as two pages reusing an
     *  id by hand, which the shared sidecar already permits.) Returns null
     *  when no id could be minted (caller strips the id, today's
     *  behavior). */
    static cloneSlot(fromId, isFree) {
      if (typeof fromId !== 'string' || !fromId) return null;
      // Pre-hydration the store can't veto candidates or source the copy
      // — degrade to the strip (today's behavior) rather than mint
      // against keys we can't see yet. Any rendered (= droppable) slot
      // means load() has already settled.
      if (!loaded) return null;
      const stem = fromId.replace(/-\d+$/, '') || fromId;
      for (let n = 2; n < 100; n++) {
        const toId = stem + '-' + n;
        if (toId === fromId) continue;
        if (slots[toId] !== undefined) {
          // Reuse a key holding this exact value (bytes AND crop) if no
          // live element here owns it — a duplicate op the host refused
          // after minting leaves such a key behind, and reusing keeps
          // refused retries from accumulating one orphaned copy per
          // attempt. Full equality (not just bytes) so a byte-identical
          // key another PAGE owns with its own crop is stepped past, not
          // adopted or rewritten. (Entries without .u never match.)
          const prev = getSlot(toId);
          const cur = getSlot(fromId);
          if (!(prev && cur && prev.u && prev.u === cur.u && prev.s === cur.s && prev.x === cur.x && prev.y === cur.y && (typeof isFree !== 'function' || isFree(toId)))) continue;
          return toId;
        }
        if (typeof isFree === 'function' && !isFree(toId)) continue;
        const v = getSlot(fromId);
        if (v) setSlot(toId, Object.assign({}, v));
        return toId;
      }
      return null;
    }
    constructor() {
      super();
      // clonable: rail thumbnails deep-clone slides and carry this shadow
      // along; reuse an already-cloned root so upgrade-after-clone works.
      // (Deliberately NOT serializable — a getHTML consumer would embed
      // multi-MB sidecar data-URLs into serialized page HTML.)
      const root = this.shadowRoot || this.attachShadow({
        mode: 'open',
        clonable: true
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="attr-error" part="attribution-error">' + warnIcon + '    <div class="cap">This photo needs attribution</div></div>' + '  <div class="loading" part="loading"></div>' + '  <div class="ring" part="ring"></div>' + '</div>' +
      // Outside .frame, like .spill/.ctl — the frame's overflow:hidden +
      // border-radius/clip-path would cut the credit off on circle/pill/mask.
      // A SPAN, not an <a>: the prescribed Unsplash credit holds two links
      // (photographer + Unsplash), built per-render in _render().
      '<span class="credit" part="credit"></span>' + '<div class="spill" popover="manual" data-dc-edit-transparent>' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' +
      // data-dc-edit-transparent: the DC editor's edit-mode picker lets
      // clicks through for chrome marked with it (EDIT_TRANSPARENT_SEL)
      // — without it, Replace/Edit clicks in Edit mode are swallowed by
      // element selection and the controls look dead.
      '<div class="ctl" popover="manual" data-dc-edit-transparent><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="edit" title="Reframe image">Edit</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ctl = root.querySelector('.ctl');
      this._credit = root.querySelector('.credit');
      this._attrError = root.querySelector('.attr-error');
      // Credit clicks open the link, not browse/reframe.
      this._credit.addEventListener('click', e => e.stopPropagation());
      this._credit.addEventListener('dblclick', e => e.stopPropagation());
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      // Encode-in-flight marker (the owning _ingest generation): while set,
      // the same-src "nothing in flight" clear in _render must not fire —
      // the stored value still points at the OLD image until the encode
      // lands, so that clear would unmask the stale image mid-replace.
      this._swapGen = 0;
      // Render-owned swap in flight: set when _render assigns a new src,
      // cleared only by the img's own load/error (or the empty branch).
      // img.complete CANNOT stand in for this — setting src only QUEUES
      // the current-request swap (a microtask), so synchronously after an
      // assignment, complete still reports the OLD settled request. The
      // pick path does exactly that: the host sets src, credit, and
      // credit-href back-to-back in one task, and renders #2/#3 would
      // read the stale complete === true and drop the mask one render
      // after it was set.
      this._loadPending = false;
      // See _render's empty branch: a transient attribution-error wipe of a
      // showing image must make the follow-up render a replacement (spinner),
      // not a first fill (blank frame).
      this._hidShowing = false;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        // The hidden controls are opacity-0 but still tabbable — without
        // this gate a keyboard user could drive them on a read-only share
        // link (mirrors the dblclick handler's editable gate).
        if (!this.hasAttribute('data-editable')) return;
        if (act === 'replace') {
          this._exitReframe(true);
          // Host-owned picker (Unsplash modal; it also offers local import).
          this.dispatchEvent(new CustomEvent('image-slot:pick', {
            bubbles: true,
            composed: true,
            detail: {
              id: this.id || null
            }
          }));
        }
        if (act === 'edit') {
          if (!this._reframes()) return;
          if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      // load/error also release the replacement-in-flight mask (via the
      // single discipline in _releaseMask): the swap is only revealed once
      // the new image can actually paint (on error the frame shows its
      // background, same as a fresh slot with a broken src).
      this._img.addEventListener('load', () => {
        this._loadPending = false;
        this._releaseMask(true);
        this._applyView();
      });
      this._img.addEventListener('error', () => {
        this._loadPending = false;
        this._releaseMask(true);
      });
      // Gated only on editable — any filled slot can be repositioned/scaled,
      // regardless of fit. Share links (no writeFile) stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
          const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // The host may inject window.omelette.writeFile AFTER the first render;
      // re-render on hover so the editable-gated controls reliably appear.
      this.addEventListener('pointerenter', this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('pointerenter', this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      // commit=false: a disconnect is not a user intent — committing here
      // would persist whatever half-finished drag a React remount or DOM
      // splice happened to interrupt. Deliberate exits commit on their own
      // paths (Escape/click-out/toggle), and unloads commit via pagehide.
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._signalReframe(true);
      // Best-effort commit when the document unloads mid-reframe (a host
      // navigation racing the enter signal, a manual reload, tab close):
      // the sidecar write rides the host bridge, which outlives this
      // document, so the crop survives even though the mode dies with the
      // DOM. Held on the instance so _exitReframe detaches exactly what
      // was attached.
      this._pagehide = () => {
        this._exitReframe(true);
        flushNow();
      };
      window.addEventListener('pagehide', this._pagehide);
      // Promote spill to the top layer, then keep it pinned over the frame:
      // scroll/resize cover the common cases, and a per-frame rect check
      // catches layout shifts that fire neither (an image above finishing
      // load, streamed DOM pushing the slot down, an ancestor transform
      // change) so the overlay can't detach from the frame.
      try {
        this._spill.showPopover();
      } catch {}
      // After the spill, so the controls stack above it in the top layer.
      try {
        this._ctl.showPopover();
      } catch {}
      this._reposition = () => {
        if (this.hasAttribute('data-reframe')) this._applyView();
      };
      window.addEventListener('scroll', this._reposition, true);
      window.addEventListener('resize', this._reposition);
      this._lastRect = '';
      this._watch = () => {
        if (!this.hasAttribute('data-reframe')) return;
        const r = this.getBoundingClientRect();
        const key = r.left + ',' + r.top + ',' + r.width + ',' + r.height;
        if (key !== this._lastRect) {
          this._lastRect = key;
          this._applyView();
        }
        this._watchId = requestAnimationFrame(this._watch);
      };
      this._watchId = requestAnimationFrame(this._watch);
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (this._reposition) {
        window.removeEventListener('scroll', this._reposition, true);
        window.removeEventListener('resize', this._reposition);
        this._reposition = null;
      }
      if (this._watchId) {
        cancelAnimationFrame(this._watchId);
        this._watchId = 0;
      }
      if (this._pagehide) {
        window.removeEventListener('pagehide', this._pagehide);
        this._pagehide = null;
      }
      try {
        this._spill.hidePopover();
      } catch {}
      try {
        this._ctl.hidePopover();
      } catch {}
      this._ctl.style.left = '';
      this._ctl.style.top = '';
      if (commit) this._commitView();
      this._signalReframe(false);
    }

    // Reframe state lives only in this DOM until commit, invisible to the
    // host's dirty signals — announce enter/exit so the host can hold
    // auto-reloads for exactly the gesture (the guest bundle forwards
    // image-slot:reframe to the host as imageSlotReframe). Dispatched on
    // the element (composed, so it escapes shadow roots) while connected;
    // a disconnected exit (disconnectedCallback) falls back to document so
    // the host still hears it.
    _signalReframe(active) {
      const target = this.isConnected ? this : document;
      target.dispatchEvent(new CustomEvent('image-slot:reframe', {
        bubbles: true,
        composed: true,
        detail: {
          active: active,
          id: this.id || null
        }
      }));
    }

    // Public: host's "Import from computer" calls this to run local browse.
    openFilePicker() {
      this._exitReframe(true);
      this._input.click();
    }

    // A src write is a newer intent for this slot's content — the host
    // pick path (setImageSlotImage) or an agent edit — so it must win
    // over any encode still in flight from an earlier drop: left live,
    // that encode lands later, passes _ingest's gen guard, and its
    // setSlot silently overwrites the pick (the stored value shadows
    // src in _render). Bumping _gen kills the encode before its own
    // _swapGen clear runs, so clear the dead claim here too — otherwise
    // _releaseMask (gated on !_swapGen) never fires and the pick's
    // spinner is stranded. src ONLY: the pick sets credit/credit-href
    // in the same task, and clearing _swapGen on those would let the
    // same-src branch unmask the old image mid-encode.
    attributeChangedCallback(name, oldVal, newVal) {
      if (name === 'src' && oldVal !== newVal) {
        this._gen++;
        this._swapGen = 0;
      }
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      // Replacing a shown image: surface the swap through the encode too,
      // not just the decode — otherwise the old photo sits there with no
      // feedback while the canvas re-encode runs. An empty slot keeps its
      // placeholder (no spinner) until the encode lands, as before.
      // _swapGen guards the mask against re-renders DURING the encode
      // (pointerenter, ResizeObserver, another slot's store write): the
      // stored value still resolves to the old image there, so _render's
      // same-src clear would otherwise unmask it mid-replace.
      if (this.hasAttribute('data-filled')) {
        this.setAttribute('data-swapping', '');
        this._swapGen = gen;
      }
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        // Clear BEFORE setSlot: its synchronous re-render must see no
        // pending encode, so a byte-identical re-upload (same data URL, no
        // load event coming) still clears the mask via the complete branch.
        this._swapGen = 0;
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._swapGen = 0;
        // Reveal the kept old image — unless another replacement (a
        // remote pick's src swap) is still in flight, in which case the
        // mask stays until THAT image settles (its load/error releases).
        this._releaseMask();
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is available on any filled slot — the user can
    // always reposition/scale. `fit` only sets the initial baseline (see
    // _geom): contain starts fully-visible, cover starts frame-filling.
    _reframes() {
      return this.hasAttribute('data-filled');
    }

    // The single release discipline for the replacement-in-flight mask
    // (data-swapping). The mask comes off only when BOTH hold:
    //  - no encode is pending (_swapGen) — mid-encode the stored value
    //    still resolves to the old image, so any reveal paints it;
    //  - the frame img has settled on its current src — an unsettled src
    //    means some replacement is still in flight (e.g. a remote pick),
    //    whoever started it, and revealing would paint the previous
    //    frame. The load/error listeners pass settled=true (the event IS
    //    the settlement signal, per spec complete is true by then);
    //    other callers rely on the complete flag (covers loaded AND
    //    failed).
    // Every release path funnels through here EXCEPT _render's empty
    // branch (the img is being cleared — nothing will ever settle).
    _releaseMask(settled) {
      if (!this._swapGen && !this._loadPending && (settled || this._img.complete)) {
        this.removeAttribute('data-swapping');
      }
    }

    // Baseline geometry, shared by clamp/apply/resize. `base` is the scale at
    // view-scale s=1: cover = fill the frame (overflow on the looser axis),
    // contain = fit fully inside (letterboxed). Zooming a contain image past
    // s where it overflows naturally becomes a crop. Null until the img has
    // loaded (naturalWidth is 0 before that) or when the slot has no layout
    // box — ResizeObserver fires with a 0×0 rect under display:none, and
    // clamping against a degenerate 1×1 frame would silently pull the stored
    // pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
      const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
      return {
        iw,
        ih,
        fw,
        fh,
        base
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      // Top-layer controls: pin to the frame's top-right in viewport px
      // (the same 8px inset as the in-frame layout; unscaled — top-layer UI
      // reads as chrome, not page content). BEFORE the geometry branch:
      // placement needs only the frame rect, and a not-yet-loaded or broken
      // src must not leave the promoted strip floating unpositioned. Gated
      // on the popover actually being open: without the Popover API,
      // showPopover() threw (swallowed in _enterReframe), .ctl stays in
      // its in-frame absolute layout, and viewport-px coordinates would
      // shove it off-frame — and matches(':popover-open') itself throws
      // there (unknown pseudo-class), hence the try/catch.
      if (this.hasAttribute('data-reframe')) {
        let onTop = false;
        try {
          onTop = this._ctl.matches(':popover-open');
        } catch {}
        if (onTop) {
          const r = this.getBoundingClientRect();
          this._ctl.style.left = r.right - 8 + 'px';
          this._ctl.style.top = r.top + 8 + 'px';
        }
      }
      if (!g) {
        // Dimensions not known yet (before img load) — centered fit so there
        // is no flash of an unpositioned image before the geometry lands.
        const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = contain ? 'contain' : 'cover';
        return;
      }
      // Baseline (cover-fill or contain-fit) × view scale. Width/height and
      // left/top are all frame-% — depends only on the frame aspect ratio, so
      // a responsive resize keeps the same crop. The spill layer mirrors the
      // same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      if (this.hasAttribute('data-reframe')) {
        // Top-layer spill: position in viewport px over the frame. The top
        // layer escapes ancestor transforms entirely, so EVERY term must be
        // in viewport units: getBoundingClientRect gives the frame's scaled
        // origin AND size, and the rect/layout ratio rescales the ghost —
        // sizing from layout px alone renders it 1/scale too large under a
        // scaled deck slide. Inner ghost + handles stay box-relative.
        const r = this.getBoundingClientRect();
        const sx = g.fw ? r.width / g.fw : 1;
        const sy = g.fh ? r.height / g.fh : 1;
        this._spill.style.width = g.iw * k * sx + 'px';
        this._spill.style.height = g.ih * k * sy + 'px';
        this._spill.style.left = r.left + (50 + this._view.x) / 100 * r.width + 'px';
        this._spill.style.top = r.top + (50 + this._view.y) / 100 * r.height + 'px';
      }
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      // An Unsplash src with no credit attribute must NOT render — showing
      // the photo uncredited is the Unsplash-terms violation itself. The
      // error tile replaces the photo until the credit is written. A
      // user-dropped image is the user's own content and always renders.
      // Trimmed: credit is agent/user-editable content, and a whitespace-
      // only value must count as missing — otherwise it would suppress the
      // error tile AND render an empty credit box (no text, no links),
      // exactly the unattributed state this gate exists to prevent.
      const credit = (this.getAttribute('credit') || '').trim();
      const attrError = !!(!credit && !this._userUrl && srcAttr && isUnsplashHost(srcAttr));
      this.toggleAttribute('data-attribution-error', attrError);
      if (url && !attrError) {
        const prev = this._img.getAttribute('src');
        if (prev !== url) {
          // Replacing an already-shown image: mark the swap BEFORE setting
          // src so the stale frame is never revealed (see the data-swapping
          // stylesheet rules). First fill (prev empty) keeps the existing
          // placeholder-until-load behavior — no spinner. _hidShowing
          // covers the pick path's transient attribution-error wipe: prev
          // is gone, but an image WAS showing, so this is a replacement.
          if (prev || this._hidShowing) this.setAttribute('data-swapping', '');
          // Mark the swap BEFORE assigning src: complete keeps reporting
          // the old settled request until the browser's
          // update-the-image-data microtask runs, so same-task re-renders
          // (the pick path's credit/credit-href setAttributes) need this
          // flag, not complete, to know a load is in flight.
          this._loadPending = true;
          this._img.src = url;
          this._ghost.src = url;
        } else {
          // Same-src re-render — release if settled, so an ingest-set
          // spinner can't stick after a byte-identical re-upload (same
          // data URL, no further load event ever fires).
          this._releaseMask();
        }
        this._hidShowing = false;
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this.removeAttribute('data-swapping');
        // The src is being removed — no load/error will ever fire for it.
        this._loadPending = false;
        // A transient attribution-error wipe of a showing image happens on
        // the pick path: the host sets src one setAttribute before credit,
        // so render N hides the old image (attrError) and render N+1
        // restores a URL. Remember the wipe so that restore renders as a
        // replacement (spinner), not a first fill (blank frame).
        this._hidShowing = attrError && !!this._img.getAttribute('src');
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        // The error tile owns the blocked-photo state; .empty stays for
        // the genuinely-empty slot.
        this._empty.style.display = attrError ? 'none' : 'flex';
        this.removeAttribute('data-filled');
      }

      // Credit belongs to the author src, so a user drop hides it.
      // textContent + the http(s)-only funnel keep external strings inert.
      const showCredit = !!(url && credit && !this._userUrl && !attrError);
      this._credit.textContent = '';
      if (showCredit) {
        // Validate once (resolved against the document, http(s) only),
        // then append the terms-required utm referral params to links
        // that point back at unsplash.com.
        let href = '';
        const rawHref = this.getAttribute('credit-href') || '';
        if (rawHref) {
          try {
            const u = new URL(rawHref, document.baseURI);
            if (u.protocol === 'http:' || u.protocol === 'https:') {
              href = withReferral(u.href);
            }
          } catch {}
        }
        const mkLink = (text, linkHref) => {
          const a = document.createElement('a');
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener noreferrer');
          a.setAttribute('href', linkHref);
          a.textContent = text;
          return a;
        };
        // Unsplash's prescribed credit is TWO links — the photographer's
        // name to their profile (credit-href) and 'Unsplash' to the
        // homepage. Render that split whenever the text has the canonical
        // shape; other text keeps the legacy single-link rendering.
        const m = /^Photo by (.+) on Unsplash$/.exec(credit);
        if (m) {
          this._credit.appendChild(document.createTextNode('Photo by '));
          this._credit.appendChild(href ? mkLink(m[1], href) : document.createTextNode(m[1]));
          this._credit.appendChild(document.createTextNode(' on '));
          this._credit.appendChild(mkLink('Unsplash', UNSPLASH_HOMEPAGE_HREF));
        } else if (href) {
          this._credit.appendChild(mkLink(credit, href));
        } else {
          this._credit.textContent = credit;
        }
      }
      this.toggleAttribute('data-credit', showCredit);
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "assets/image-slot.js", error: String((e && e.message) || e) }); }

// components/brand/DiamondRule.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The signature gold/green diamond rule that frames Solutions Sinazo surfaces.
 * Real elements (not a background) so the two-colour sequence stays exact.
 */
function DiamondRule({
  count = 24,
  size = 7,
  gap = 11,
  sequence = "gold",
  vertical = false,
  style,
  ...rest
}) {
  const colorAt = i => {
    if (sequence === "gold") return "var(--ss-gold-400)";
    if (sequence === "green") return "var(--ss-green-400)";
    if (sequence === "alternating") return i % 2 ? "var(--ss-green-400)" : "var(--ss-gold-400)";
    return i % 4 < 3 ? "var(--ss-gold-400)" : "var(--ss-green-400)";
  };
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    "aria-hidden": "true",
    style: {
      display: "flex",
      flexDirection: vertical ? "column" : "row",
      alignItems: "center",
      gap: gap,
      ...style
    }
  }), Array.from({
    length: count
  }).map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: size,
      height: size,
      flex: "0 0 auto",
      transform: "rotate(45deg)",
      background: colorAt(i)
    }
  })));
}
Object.assign(__ds_scope, { DiamondRule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/DiamondRule.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logotype.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Typographic brand lockup. NOTE: no logo file was supplied with the brand
 * materials (the only reference is a 62px screenshot crop), so the mark is
 * set in type rather than reconstructed. Drop the real SVG into
 * assets/logo-solutions-sinazo.svg and swap this component's internals.
 */
function Logotype({
  size = 20,
  stacked = true,
  tagline = false,
  style,
  ...rest
}) {
  const common = {
    fontFamily: "var(--font-mono)",
    fontWeight: 700,
    letterSpacing: "0.16em",
    lineHeight: 1,
    textTransform: "uppercase"
  };
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: "inline-flex",
      flexDirection: "column",
      gap: stacked ? size * 0.22 : 0,
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: stacked ? 0 : size * 0.4,
      flexDirection: stacked ? "column" : "row",
      ...(stacked ? {
        gap: size * 0.22
      } : null)
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...common,
      fontSize: size,
      color: "var(--paper)"
    }
  }, "Solutions"), /*#__PURE__*/React.createElement("span", {
    style: {
      ...common,
      fontSize: size,
      color: "var(--ss-gold-400)"
    }
  }, "Sinazo")), tagline ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: Math.max(8, size * 0.42),
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: "var(--text-faint)"
    }
  }, "Solutions you trust, Sinazo!") : null);
}
Object.assign(__ds_scope, { Logotype });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logotype.jsx", error: String((e && e.message) || e) }); }

// components/brand/PatternSurface.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const fields = {
  cube: "ss-pattern-cube",
  fold: "ss-pattern-fold is-diagonal",
  diamond: "ss-pattern-diamond",
  arch: "ss-pattern-arch",
  zig: "ss-pattern-zig"
};
const scrims = {
  none: null,
  left: "linear-gradient(90deg, var(--ink-900) 0%, rgba(13,13,13,0.94) 36%, rgba(13,13,13,0.42) 72%, transparent 100%)",
  bottom: "linear-gradient(0deg, var(--ink-900) 0%, rgba(13,13,13,0.88) 34%, transparent 82%)",
  radial: "radial-gradient(120% 90% at 28% 50%, rgba(13,13,13,0.95) 0%, rgba(13,13,13,0.62) 46%, transparent 78%)",
  flat: "linear-gradient(0deg, rgba(13,13,13,0.82), rgba(13,13,13,0.82))"
};

/**
 * Wraps content in the geometric luxury field with a mandatory protection
 * scrim. This is the brand's signature background layer.
 */
function PatternSurface({
  children,
  field = "cube",
  rich = false,
  scrim = "left",
  unit = 96,
  opacity = 1,
  animated = false,
  grain = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      position: "relative",
      isolation: "isolate",
      overflow: "hidden",
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: fields[field] + (rich ? " is-rich" : "") + (animated ? " ss-pattern-animated" : ""),
    style: {
      position: "absolute",
      inset: 0,
      zIndex: 0,
      opacity: opacity,
      ["--pattern-unit"]: unit + "px"
    }
  }), scrims[scrim] ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      zIndex: 1,
      background: scrims[scrim],
      pointerEvents: "none"
    }
  }) : null, grain ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      zIndex: 2,
      pointerEvents: "none",
      opacity: 0.4,
      backgroundImage: "repeating-linear-gradient(0deg, rgba(253,253,253,0.014) 0 1px, transparent 1px 3px), repeating-linear-gradient(90deg, rgba(0,0,0,0.05) 0 1px, transparent 1px 3px)"
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 3
    }
  }, children));
}
Object.assign(__ds_scope, { PatternSurface });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/PatternSurface.jsx", error: String((e && e.message) || e) }); }

// components/brand/PortraitEmerge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * "Emerging from darkness" portrait treatment. The image is masked to zero
 * before it reaches its own box, so there is no visible photo edge — the
 * subject dissolves into the brand black. Light falls centre-outward with a
 * single warm key over the face.
 */
function PortraitEmerge({
  src,
  alt = "",
  slotId,
  placeholder = "Drop the portrait here",
  variant = "editorial",
  focusX = 58,
  focusY = 40,
  reach = 74,
  falloff = 66,
  style,
  ...rest
}) {
  const vigilante = variant === "vigilante";
  const vars = {
    ["--portrait-focus-x"]: focusX + "%",
    ["--portrait-focus-y"]: focusY + "%",
    ["--portrait-reach"]: (vigilante ? reach - 12 : reach) + "%",
    ["--portrait-falloff"]: (vigilante ? falloff - 10 : falloff) + "%",
    ["--portrait-key"]: vigilante ? "rgba(53,192,131,0.08)" : "rgba(255,176,2,0.10)"
  };
  const mask = "radial-gradient(var(--portrait-reach) var(--portrait-falloff) at var(--portrait-focus-x) var(--portrait-focus-y), #000 0%, #000 30%, rgba(0,0,0,0.78) 50%, rgba(0,0,0,0.34) 70%, rgba(0,0,0,0.08) 84%, transparent 94%)";
  const media = {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    filter: vigilante ? "contrast(1.34) saturate(0.62) brightness(0.86)" : "contrast(1.16) saturate(0.86) brightness(0.98)",
    WebkitMaskImage: mask,
    maskImage: mask
  };
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      position: "relative",
      isolation: "isolate",
      overflow: "hidden",
      background: "var(--ink-900)",
      ...vars,
      ...style
    }
  }), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: media
  }) : slotId ? React.createElement("image-slot", {
    id: slotId,
    shape: "rect",
    placeholder: placeholder,
    style: media
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.24em",
      textTransform: "uppercase",
      color: "var(--ink-400)",
      textAlign: "center",
      lineHeight: 2,
      padding: "0 24px"
    }
  }, placeholder)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      zIndex: 2,
      pointerEvents: "none",
      background: "radial-gradient(82% 76% at var(--portrait-focus-x) var(--portrait-focus-y), transparent 0%, rgba(13,13,13,0.10) 46%, rgba(13,13,13,0.56) 68%, rgba(13,13,13,0.9) 86%, var(--ink-900) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      zIndex: 3,
      pointerEvents: "none",
      mixBlendMode: "soft-light",
      background: "radial-gradient(34% 30% at var(--portrait-focus-x) calc(var(--portrait-focus-y) - 4%), var(--portrait-key) 0%, transparent 72%)"
    }
  }));
}
Object.assign(__ds_scope, { PortraitEmerge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/PortraitEmerge.jsx", error: String((e && e.message) || e) }); }

// components/brand/RomanRail.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Fixed left-edge section index: roman numerals with a diamond active marker. */
function RomanRail({
  sections = [],
  active = 0,
  onSelect,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({}, rest, {
    "aria-label": "Sections",
    style: {
      width: "var(--rail-width)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "var(--sp-6)",
      padding: "var(--sp-6) 0",
      borderRight: "1px solid var(--border-hairline)",
      ...style
    }
  }), sections.map((s, i) => {
    const on = i === active;
    return /*#__PURE__*/React.createElement("button", {
      key: s.numeral || i,
      type: "button",
      onClick: onSelect ? () => onSelect(i) : undefined,
      title: s.label,
      "aria-current": on ? "true" : undefined,
      style: {
        background: "none",
        border: 0,
        padding: 0,
        cursor: onSelect ? "pointer" : "default",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "var(--fs-numeral)",
        letterSpacing: "var(--ls-numeral)",
        color: on ? "var(--text-gold)" : "var(--text-faint)",
        transition: "color var(--dur-base) var(--ease-standard)"
      }
    }, s.numeral), /*#__PURE__*/React.createElement("span", {
      style: {
        width: on ? 6 : 4,
        height: on ? 6 : 4,
        transform: "rotate(45deg)",
        background: on ? "var(--ss-gold-400)" : "var(--ink-400)",
        boxShadow: on ? "var(--glow-gold-sm)" : "none",
        transition: "all var(--dur-base) var(--ease-standard)"
      }
    }));
  }));
}
Object.assign(__ds_scope, { RomanRail });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/RomanRail.jsx", error: String((e && e.message) || e) }); }

// components/brand/SectionLabel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Mono uppercase kicker with optional roman numeral and diamond marker. */
function SectionLabel({
  children,
  numeral,
  tone = "gold",
  rule = true,
  style,
  ...rest
}) {
  const color = tone === "gold" ? "var(--text-gold)" : tone === "green" ? "var(--text-green)" : "var(--text-muted)";
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--sp-4)",
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 7,
      height: 7,
      flex: "0 0 auto",
      transform: "rotate(45deg)",
      background: color
    }
  }), numeral ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-numeral)",
      letterSpacing: "var(--ls-numeral)",
      color: "var(--text-faint)"
    }
  }, numeral) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-label)",
      letterSpacing: "var(--ls-label-wide)",
      textTransform: "uppercase",
      color: color,
      whiteSpace: "nowrap"
    }
  }, children), rule ? /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: "var(--border-hairline)"
    }
  }) : null);
}
Object.assign(__ds_scope, { SectionLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/SectionLabel.jsx", error: String((e && e.message) || e) }); }

// components/brand/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StatBlock({
  value,
  label,
  suffix,
  tone = "gold",
  align = "left",
  style,
  ...rest
}) {
  const color = tone === "gold" ? "var(--text-gold)" : tone === "green" ? "var(--text-green)" : "var(--text-display)";
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-2)",
      alignItems: align === "center" ? "center" : "flex-start",
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-display-3)",
      fontWeight: "var(--fw-display)",
      lineHeight: 0.9,
      letterSpacing: "var(--ls-display)",
      color: color
    }
  }, value), suffix ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-display-4)",
      lineHeight: 0.9,
      color: color,
      opacity: 0.8
    }
  }, suffix) : null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-label-sm)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  gold: {
    background: "var(--ss-gold-400)",
    color: "var(--text-on-gold)",
    border: "1px solid var(--ss-gold-400)"
  },
  green: {
    background: "var(--ss-green-800)",
    color: "var(--paper)",
    border: "1px solid var(--ss-green-600)"
  },
  outline: {
    background: "transparent",
    color: "var(--text-gold)",
    border: "1px solid var(--border-gold-dim)"
  },
  neutral: {
    background: "var(--ink-700)",
    color: "var(--text-secondary)",
    border: "1px solid var(--border-hairline)"
  },
  soon: {
    background: "transparent",
    color: "var(--text-muted)",
    border: "1px dashed var(--border-hairline-strong)"
  }
};
function Badge({
  children,
  tone = "outline",
  glow = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--sp-2)",
      height: 22,
      padding: "0 var(--sp-3)",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-label-sm)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      borderRadius: "var(--radius-sm)",
      ...tones[tone],
      ...(glow ? {
        boxShadow: tone === "green" ? "var(--glow-green-sm)" : "var(--glow-gold-sm)"
      } : null),
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  fontFamily: "var(--font-mono)",
  textTransform: "uppercase",
  letterSpacing: "var(--ls-label)",
  fontWeight: 500,
  border: "1px solid transparent",
  borderRadius: "var(--radius-sm)",
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "var(--sp-3)",
  textDecoration: "none",
  whiteSpace: "nowrap",
  transition: "background var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-instant) var(--ease-standard)"
};
const sizes = {
  sm: {
    height: "var(--control-h-sm)",
    padding: "0 var(--sp-4)",
    fontSize: "var(--fs-label-sm)"
  },
  md: {
    height: "var(--control-h)",
    padding: "0 var(--sp-6)",
    fontSize: "var(--fs-label)"
  },
  lg: {
    height: "var(--control-h-lg)",
    padding: "0 var(--sp-8)",
    fontSize: "var(--fs-label)",
    letterSpacing: "var(--ls-label-wide)"
  }
};
const variants = {
  primary: {
    rest: {
      background: "var(--ss-gold-400)",
      color: "var(--text-on-gold)",
      borderColor: "var(--ss-gold-400)"
    },
    hover: {
      background: "var(--ss-gold-300)",
      borderColor: "var(--ss-gold-300)",
      boxShadow: "var(--glow-gold-sm)"
    }
  },
  secondary: {
    rest: {
      background: "var(--ss-green-800)",
      color: "var(--text-on-green)",
      borderColor: "var(--ss-green-700)"
    },
    hover: {
      background: "var(--ss-green-700)",
      borderColor: "var(--ss-green-500)",
      boxShadow: "var(--glow-green-sm)"
    }
  },
  outline: {
    rest: {
      background: "transparent",
      color: "var(--text-gold)",
      borderColor: "var(--border-gold-dim)"
    },
    hover: {
      background: "rgba(255,176,2,0.08)",
      borderColor: "var(--ss-gold-400)",
      boxShadow: "var(--glow-gold-sm)"
    }
  },
  ghost: {
    rest: {
      background: "transparent",
      color: "var(--text-secondary)",
      borderColor: "transparent"
    },
    hover: {
      background: "var(--ink-700)",
      color: "var(--text-display)"
    }
  },
  link: {
    rest: {
      background: "transparent",
      color: "var(--text-gold)",
      borderColor: "transparent",
      padding: 0,
      height: "auto",
      borderBottom: "1px solid var(--border-gold-dim)",
      borderRadius: 0
    },
    hover: {
      color: "var(--ss-gold-200)",
      borderBottomColor: "var(--ss-gold-200)"
    }
  }
};
function Button({
  children,
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  disabled = false,
  fullWidth = false,
  href,
  onClick,
  type = "button",
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const v = variants[variant] || variants.primary;
  const Tag = href ? "a" : "button";
  const merged = {
    ...base,
    ...sizes[size],
    ...v.rest,
    ...(hover && !disabled ? v.hover : null),
    ...(press && !disabled ? {
      transform: "translateY(1px)",
      boxShadow: "var(--shadow-inset)"
    } : null),
    ...(fullWidth ? {
      width: "100%"
    } : null),
    ...(disabled ? {
      opacity: 0.38,
      cursor: "not-allowed",
      boxShadow: "none",
      transform: "none"
    } : null),
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
    href: href,
    type: href ? undefined : type,
    onClick: disabled ? undefined : onClick,
    "aria-disabled": disabled || undefined,
    disabled: href ? undefined : disabled,
    style: merged,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  }), iconLeft, /*#__PURE__*/React.createElement("span", null, children), iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const patternClass = {
  cube: "ss-pattern-cube is-rich",
  fold: "ss-pattern-fold is-diagonal",
  diamond: "ss-pattern-diamond",
  arch: "ss-pattern-arch",
  zig: "ss-pattern-zig is-rich"
};

/**
 * The brand's content container. Four architectural treatments so cards in a
 * grid are never all identical: hairline, gold-edge, pattern-crown, inset.
 */
function Card({
  children,
  variant = "hairline",
  pattern = "cube",
  numeral,
  eyebrow,
  title,
  interactive = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const skins = {
    hairline: {
      border: "1px solid var(--border-hairline)",
      background: "var(--surface-card)"
    },
    gold: {
      border: "1px solid var(--border-hairline)",
      borderTop: "2px solid var(--ss-gold-400)",
      background: "var(--surface-card)"
    },
    crown: {
      border: "1px solid var(--border-hairline)",
      background: "var(--surface-card)"
    },
    inset: {
      border: "1px solid var(--border-hairline)",
      background: "var(--ink-950)",
      boxShadow: "var(--shadow-inset)"
    },
    green: {
      border: "1px solid var(--ss-green-700)",
      background: "var(--ss-green-900)"
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: "relative",
      borderRadius: "var(--radius-sm)",
      transition: "transform var(--dur-base) var(--ease-out-soft), box-shadow var(--dur-base) var(--ease-out-soft), border-color var(--dur-base) var(--ease-standard)",
      cursor: interactive ? "pointer" : undefined,
      ...skins[variant],
      ...(interactive && hover ? {
        transform: "translateY(var(--lift-hover))",
        boxShadow: "var(--shadow-3)",
        borderColor: "var(--border-gold-dim)"
      } : null),
      ...style
    }
  }), variant === "crown" ? /*#__PURE__*/React.createElement("div", {
    className: patternClass[pattern],
    style: {
      height: 76,
      borderBottom: "1px solid var(--border-hairline)"
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--sp-6)"
    }
  }, numeral || eyebrow ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--sp-3)",
      marginBottom: "var(--sp-4)"
    }
  }, numeral ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-numeral)",
      letterSpacing: "var(--ls-numeral)",
      color: "var(--text-gold)"
    }
  }, numeral) : null, numeral && eyebrow ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 1,
      background: "var(--border-gold-dim)"
    }
  }) : null, eyebrow ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-label-sm)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, eyebrow) : null) : null, title ? /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-display)",
      fontSize: "var(--fs-display-4)",
      lineHeight: 1.05,
      letterSpacing: "var(--ls-display)",
      color: "var(--text-display)",
      margin: "0 0 var(--sp-3)"
    }
  }, title) : null, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CDN = "https://unpkg.com/lucide-static@0.544.0/icons/";

/**
 * Lucide glyph rendered as a CSS mask so it inherits `currentColor`.
 * SUBSTITUTION: the brand supplied no icon set — Lucide (1.5px stroke,
 * rounded caps, 24px grid) is the documented stand-in.
 */
function Icon({
  name,
  size = 16,
  strokeColor,
  style,
  label,
  ...rest
}) {
  const url = `url("${CDN}${name}.svg")`;
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    role: label ? "img" : "presentation",
    "aria-label": label,
    "aria-hidden": label ? undefined : true,
    style: {
      display: "inline-block",
      width: size,
      height: size,
      flex: "0 0 auto",
      background: strokeColor || "currentColor",
      WebkitMaskImage: url,
      maskImage: url,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: 32,
  md: 42,
  lg: 52
};
function IconButton({
  name,
  size = "md",
  variant = "outline",
  label,
  disabled,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const px = sizes[size] || sizes.md;
  const skin = {
    outline: {
      background: "transparent",
      borderColor: "var(--border-hairline-strong)",
      color: "var(--text-secondary)"
    },
    solid: {
      background: "var(--ss-gold-400)",
      borderColor: "var(--ss-gold-400)",
      color: "var(--text-on-gold)"
    },
    ghost: {
      background: "transparent",
      borderColor: "transparent",
      color: "var(--text-muted)"
    }
  }[variant];
  const hov = {
    outline: {
      borderColor: "var(--ss-gold-400)",
      color: "var(--text-gold)",
      boxShadow: "var(--glow-gold-sm)"
    },
    solid: {
      background: "var(--ss-gold-300)",
      borderColor: "var(--ss-gold-300)",
      boxShadow: "var(--glow-gold-sm)"
    },
    ghost: {
      color: "var(--text-display)",
      background: "var(--ink-700)"
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({}, rest, {
    type: "button",
    "aria-label": label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: px,
      height: px,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      border: "1px solid",
      borderRadius: "var(--radius-sm)",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "all var(--dur-fast) var(--ease-standard)",
      ...skin,
      ...(hover && !disabled ? hov : null),
      ...(disabled ? {
        opacity: 0.38
      } : null),
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: name,
    size: size === "sm" ? 14 : size === "lg" ? 20 : 16
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  icon,
  onRemove,
  active = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--sp-2)",
      height: 28,
      padding: "0 var(--sp-3)",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-label)",
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      borderRadius: "var(--radius-sm)",
      border: active ? "1px solid var(--ss-gold-400)" : "1px solid var(--border-hairline)",
      background: active ? "rgba(255,176,2,0.1)" : "var(--ink-800)",
      color: active ? "var(--text-gold)" : "var(--text-secondary)",
      transition: "all var(--dur-fast) var(--ease-standard)",
      ...style
    }
  }), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 13
  }) : null, children, onRemove ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onRemove,
    "aria-label": "Remove",
    style: {
      background: "none",
      border: 0,
      padding: 0,
      marginLeft: 2,
      display: "inline-flex",
      cursor: "pointer",
      color: "inherit",
      opacity: 0.6
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 12
  })) : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Modal panel: scrim, gold top rule, display-serif title. */
function Dialog({
  open = true,
  title,
  eyebrow,
  children,
  footer,
  onClose,
  width = 520,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      zIndex: 40,
      display: "grid",
      placeItems: "center",
      padding: "var(--sp-6)",
      background: "var(--surface-scrim)",
      backdropFilter: "blur(var(--blur-scrim))",
      WebkitBackdropFilter: "blur(var(--blur-scrim))"
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width: "100%",
      maxWidth: width,
      background: "var(--surface-card)",
      border: "1px solid var(--border-hairline)",
      borderTop: "2px solid var(--ss-gold-400)",
      borderRadius: "var(--radius-sm)",
      boxShadow: "var(--shadow-4)",
      animation: "ss-reveal-up var(--dur-base) var(--ease-out-soft)",
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: "var(--sp-6)",
      padding: "var(--sp-6) var(--sp-6) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, eyebrow ? /*#__PURE__*/React.createElement(__ds_scope.SectionLabel, {
    rule: false,
    style: {
      marginBottom: "var(--sp-4)"
    }
  }, eyebrow) : null, title ? /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-display)",
      fontSize: "var(--fs-display-4)",
      lineHeight: 1.02,
      letterSpacing: "var(--ls-display)",
      color: "var(--text-display)",
      margin: 0
    }
  }, title) : null), onClose ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    name: "x",
    label: "Close",
    variant: "ghost",
    size: "sm",
    onClick: onClose
  }) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--sp-5) var(--sp-6)",
      color: "var(--text-body)",
      fontSize: "var(--fs-body-sm)",
      lineHeight: "var(--lh-body)"
    }
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: "var(--sp-3)",
      padding: "var(--sp-5) var(--sp-6)",
      borderTop: "1px solid var(--border-hairline)"
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  success: {
    glyph: "check",
    color: "var(--status-success)"
  },
  warning: {
    glyph: "triangle-alert",
    color: "var(--status-warning)"
  },
  danger: {
    glyph: "octagon-alert",
    color: "var(--status-danger)"
  },
  info: {
    glyph: "info",
    color: "var(--text-gold)"
  }
};

/** Transient confirmation. Hairline panel with a 2px tone rule on top. */
function Toast({
  tone = "success",
  title,
  children,
  onClose,
  style,
  ...rest
}) {
  const t = tones[tone] || tones.info;
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    role: "status",
    style: {
      display: "flex",
      gap: "var(--sp-4)",
      alignItems: "flex-start",
      width: 340,
      padding: "var(--sp-4) var(--sp-5)",
      background: "var(--ink-800)",
      border: "1px solid var(--border-hairline)",
      borderTop: "2px solid " + t.color,
      borderRadius: "var(--radius-sm)",
      boxShadow: "var(--shadow-3)",
      animation: "ss-reveal-up var(--dur-base) var(--ease-out-soft)",
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.glyph,
    size: 16,
    style: {
      color: t.color,
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-label-sm)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--text-display)",
      marginBottom: 4
    }
  }, title) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-caption)",
      lineHeight: 1.5,
      color: "var(--text-secondary)"
    }
  }, children)), onClose ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    "aria-label": "Dismiss",
    style: {
      background: "none",
      border: 0,
      padding: 0,
      cursor: "pointer",
      color: "var(--text-faint)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 13
  })) : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Hover-revealed hairline panel. Wraps its trigger. */
function Tooltip({
  label,
  children,
  placement = "top",
  style,
  ...rest
}) {
  const [show, setShow] = React.useState(false);
  const pos = placement === "bottom" ? {
    top: "calc(100% + 8px)",
    left: "50%",
    transform: "translateX(-50%)"
  } : placement === "right" ? {
    left: "calc(100% + 8px)",
    top: "50%",
    transform: "translateY(-50%)"
  } : {
    bottom: "calc(100% + 8px)",
    left: "50%",
    transform: "translateX(-50%)"
  };
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }), children, show ? /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      zIndex: 30,
      ...pos,
      whiteSpace: "nowrap",
      padding: "6px var(--sp-3)",
      background: "var(--ink-700)",
      border: "1px solid var(--border-hairline-strong)",
      borderRadius: "var(--radius-sm)",
      boxShadow: "var(--shadow-2)",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-label-sm)",
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: "var(--text-secondary)",
      pointerEvents: "none"
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false,
  hint,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "flex-start",
      gap: "var(--sp-3)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      minHeight: "var(--tap-min)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({}, rest, {
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: "absolute",
      opacity: 0,
      width: 1,
      height: 1
    }
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 18,
      height: 18,
      marginTop: 3,
      flex: "0 0 auto",
      display: "grid",
      placeItems: "center",
      borderRadius: "var(--radius-sm)",
      border: "1px solid " + (checked ? "var(--ss-gold-400)" : "var(--border-hairline-strong)"),
      background: checked ? "var(--ss-gold-400)" : "var(--ink-950)",
      boxShadow: checked ? "var(--glow-gold-sm)" : "var(--shadow-inset)",
      transition: "all var(--dur-fast) var(--ease-standard)"
    }
  }, checked ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 13,
    style: {
      color: "var(--text-on-gold)"
    }
  }) : null), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2,
      paddingTop: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-body-sm)",
      color: "var(--text-body)",
      lineHeight: 1.45
    }
  }, label), hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-label-sm)",
      color: "var(--text-faint)"
    }
  }, hint) : null));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  hint,
  error,
  icon,
  disabled = false,
  required = false,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const rid = id || "ss-in-" + (label || placeholder || "field").replace(/\W+/g, "-").toLowerCase();
  const borderColor = error ? "var(--status-danger)" : focus ? "var(--ss-gold-400)" : "var(--border-hairline-strong)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-2)",
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: rid,
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-label-sm)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: focus ? "var(--text-gold)" : "var(--text-muted)",
      transition: "color var(--dur-fast) var(--ease-standard)"
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-gold)"
    }
  }, " *") : null) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--sp-3)",
      height: "var(--control-h)",
      padding: "0 var(--sp-4)",
      background: "var(--ink-950)",
      border: "1px solid " + borderColor,
      borderRadius: "var(--radius-sm)",
      boxShadow: focus ? "var(--glow-gold-sm)" : "var(--shadow-inset)",
      transition: "border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)",
      opacity: disabled ? 0.45 : 1
    }
  }, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 15,
    style: {
      color: "var(--text-faint)"
    }
  }) : null, /*#__PURE__*/React.createElement("input", _extends({}, rest, {
    id: rid,
    type: type,
    value: value,
    placeholder: placeholder,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      background: "transparent",
      border: 0,
      outline: "none",
      color: "var(--text-display)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-body-sm)"
    }
  }))), error || hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-label-sm)",
      letterSpacing: "0.08em",
      color: error ? "var(--status-danger)" : "var(--text-faint)"
    }
  }, error || hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  checked = false,
  onChange,
  name,
  value,
  disabled = false,
  hint,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "flex-start",
      gap: "var(--sp-3)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      minHeight: "var(--tap-min)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({}, rest, {
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: "absolute",
      opacity: 0,
      width: 1,
      height: 1
    }
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 16,
      height: 16,
      marginTop: 4,
      flex: "0 0 auto",
      display: "grid",
      placeItems: "center",
      transform: "rotate(45deg)",
      border: "1px solid " + (checked ? "var(--ss-gold-400)" : "var(--border-hairline-strong)"),
      background: "var(--ink-950)",
      boxShadow: checked ? "var(--glow-gold-sm)" : "var(--shadow-inset)",
      transition: "all var(--dur-fast) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      background: checked ? "var(--ss-gold-400)" : "transparent"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2,
      paddingTop: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-body-sm)",
      color: "var(--text-body)",
      lineHeight: 1.45
    }
  }, label), hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-label-sm)",
      color: "var(--text-faint)"
    }
  }, hint) : null));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  value,
  onChange,
  options = [],
  hint,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const rid = id || "ss-sel-" + (label || "field").replace(/\W+/g, "-").toLowerCase();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-2)",
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: rid,
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-label-sm)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: focus ? "var(--text-gold)" : "var(--text-muted)"
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      height: "var(--control-h)",
      background: "var(--ink-950)",
      border: "1px solid " + (focus ? "var(--ss-gold-400)" : "var(--border-hairline-strong)"),
      borderRadius: "var(--radius-sm)",
      boxShadow: focus ? "var(--glow-gold-sm)" : "var(--shadow-inset)",
      opacity: disabled ? 0.45 : 1
    }
  }, /*#__PURE__*/React.createElement("select", _extends({}, rest, {
    id: rid,
    value: value,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: "none",
      WebkitAppearance: "none",
      flex: 1,
      height: "100%",
      padding: "0 var(--sp-10) 0 var(--sp-4)",
      background: "transparent",
      border: 0,
      outline: "none",
      color: "var(--text-display)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-body-sm)",
      cursor: disabled ? "not-allowed" : "pointer"
    }
  }), options.map(o => {
    const v = typeof o === "string" ? o : o.value;
    const l = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v,
      style: {
        background: "var(--ink-800)"
      }
    }, l);
  })), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 15,
    style: {
      position: "absolute",
      right: "var(--sp-4)",
      color: "var(--text-gold)",
      pointerEvents: "none"
    }
  })), hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-label-sm)",
      color: "var(--text-faint)"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  label,
  checked = false,
  onChange,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--sp-4)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      minHeight: "var(--tap-min)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({}, rest, {
    type: "checkbox",
    role: "switch",
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: "absolute",
      opacity: 0,
      width: 1,
      height: 1
    }
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 44,
      height: 22,
      flex: "0 0 auto",
      position: "relative",
      borderRadius: "var(--radius-sm)",
      border: "1px solid " + (checked ? "var(--ss-gold-400)" : "var(--border-hairline-strong)"),
      background: checked ? "rgba(255,176,2,0.16)" : "var(--ink-950)",
      boxShadow: checked ? "var(--glow-gold-sm)" : "var(--shadow-inset)",
      transition: "all var(--dur-base) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 2,
      left: checked ? 24 : 2,
      width: 16,
      height: 16,
      background: checked ? "var(--ss-gold-400)" : "var(--ink-300)",
      transition: "left var(--dur-base) var(--ease-out-soft), background var(--dur-base) var(--ease-standard)"
    }
  })), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-label)",
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "var(--text-secondary)"
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Site header: centred lockup, mono uppercase ecosystem links, diamond rule beneath. */
function NavBar({
  links = [],
  active,
  onNavigate,
  action,
  rule = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({}, rest, {
    style: {
      position: "relative",
      background: "var(--ink-900)",
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr auto 1fr",
      alignItems: "center",
      gap: "var(--sp-6)",
      padding: "var(--sp-5) var(--gutter-page)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logotype, {
    size: 15,
    stacked: false,
    style: {
      justifySelf: "start"
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "var(--sp-8)"
    }
  }, links.map(l => {
    const label = typeof l === "string" ? l : l.label;
    const on = label === active;
    return /*#__PURE__*/React.createElement("button", {
      key: label,
      type: "button",
      onClick: onNavigate ? () => onNavigate(label) : undefined,
      style: {
        background: "none",
        border: 0,
        padding: 0,
        cursor: "pointer",
        fontFamily: "var(--font-mono)",
        fontSize: "var(--fs-label)",
        letterSpacing: "var(--ls-label)",
        textTransform: "uppercase",
        color: on ? "var(--text-gold)" : "var(--text-muted)",
        transition: "color var(--dur-fast) var(--ease-standard)"
      }
    }, label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      justifySelf: "end"
    }
  }, action)), rule ? /*#__PURE__*/React.createElement(__ds_scope.DiamondRule, {
    count: 60,
    size: 6,
    gap: 13,
    sequence: "sequenced",
    style: {
      padding: "0 var(--gutter-page)",
      overflow: "hidden"
    }
  }) : null);
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Mono uppercase tab row with a gold underline on the active item. */
function Tabs({
  tabs = [],
  active = 0,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    role: "tablist",
    style: {
      display: "flex",
      alignItems: "stretch",
      gap: "var(--sp-8)",
      borderBottom: "1px solid var(--border-hairline)",
      ...style
    }
  }), tabs.map((t, i) => {
    const label = typeof t === "string" ? t : t.label;
    const on = i === active;
    return /*#__PURE__*/React.createElement("button", {
      key: label,
      role: "tab",
      type: "button",
      "aria-selected": on,
      onClick: onChange ? () => onChange(i) : undefined,
      style: {
        position: "relative",
        background: "none",
        border: 0,
        padding: "0 0 var(--sp-4)",
        cursor: "pointer",
        fontFamily: "var(--font-mono)",
        fontSize: "var(--fs-label)",
        letterSpacing: "var(--ls-label)",
        textTransform: "uppercase",
        color: on ? "var(--text-gold)" : "var(--text-muted)",
        transition: "color var(--dur-fast) var(--ease-standard)"
      }
    }, label, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: -1,
        height: 2,
        background: on ? "var(--ss-gold-400)" : "transparent",
        boxShadow: on ? "var(--glow-gold-sm)" : "none",
        transition: "background var(--dur-base) var(--ease-standard)"
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/AuthShell.jsx
try { (() => {
const {
  PatternSurface,
  Logotype,
  SectionLabel,
  DiamondRule,
  StatBlock
} = window.SolutionsSinazoDesignSystem_090852;

/** Split auth layout: geometric brand panel left, form panel right. */
function AuthShell({
  numeral,
  eyebrow,
  headline,
  blurb,
  children,
  footer
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr) minmax(0,520px)",
      minHeight: 720,
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement(PatternSurface, {
    field: "cube",
    scrim: "left",
    unit: 104,
    grain: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      height: "100%",
      minHeight: 720,
      padding: "44px 40px"
    }
  }, /*#__PURE__*/React.createElement(Logotype, {
    size: 15,
    stacked: false
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, {
    numeral: numeral,
    style: {
      marginBottom: 28,
      maxWidth: 380
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h1", {
    className: "ss-display-2",
    style: {
      maxWidth: "15ch",
      marginBottom: 22
    }
  }, headline), /*#__PURE__*/React.createElement("p", {
    className: "ss-body-lg",
    style: {
      maxWidth: "40ch",
      margin: 0
    }
  }, blurb)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2,minmax(0,1fr))",
      gap: 26,
      maxWidth: 380,
      paddingBottom: 26
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: "6",
    label: "Ventures, one account"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "2FA",
    label: "On every profile",
    tone: "green"
  })), /*#__PURE__*/React.createElement(DiamondRule, {
    count: 30,
    sequence: "sequenced"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderLeft: "1px solid var(--border-hairline)",
      background: "var(--ink-950)",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "56px 48px"
    }
  }, children), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border-hairline)",
      padding: "20px 48px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 16,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.28em",
      textTransform: "uppercase",
      color: "var(--text-faint)"
    }
  }, "Est. 2022 \xB7 Reg. Dec 2025"), footer)));
}
function AuthHead({
  title,
  sub
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 30
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: 38,
      lineHeight: 1.02,
      letterSpacing: "-0.015em",
      color: "var(--text-display)",
      margin: "0 0 10px"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "ss-body-sm",
    style: {
      margin: 0,
      maxWidth: "42ch"
    }
  }, sub));
}
function AuthLink({
  children,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    style: {
      background: "none",
      border: 0,
      padding: 0,
      cursor: "pointer",
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "var(--text-gold)",
      borderBottom: "1px solid var(--border-gold-dim)"
    }
  }, children);
}
Object.assign(window, {
  AuthShell,
  AuthHead,
  AuthLink
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/AuthShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/ConsentScreen.jsx
try { (() => {
const {
  Button,
  Card,
  Icon,
  Badge,
  Switch,
  Dialog,
  SectionLabel,
  Logotype,
  PatternSurface,
  DiamondRule
} = window.SolutionsSinazoDesignSystem_090852;
function ConsentScreen({
  onNavigate
}) {
  const [granted, setGranted] = React.useState({
    profile: true,
    email: true,
    org: false
  });
  const [done, setDone] = React.useState(false);
  const scopes = [{
    k: "profile",
    icon: "user",
    t: "Your name and profile",
    d: "First name, last name, avatar"
  }, {
    k: "email",
    icon: "mail",
    t: "Your email address",
    d: "Used to identify your account"
  }, {
    k: "org",
    icon: "building",
    t: "Your organisation",
    d: "Company name and role"
  }];
  return /*#__PURE__*/React.createElement(PatternSurface, {
    field: "diamond",
    scrim: "flat",
    unit: 120,
    style: {
      minHeight: 720,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      placeItems: "center",
      minHeight: 720,
      padding: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 560
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(Logotype, {
    size: 13,
    stacked: false
  }), /*#__PURE__*/React.createElement(Badge, {
    tone: "outline"
  }, "OAuth consent")), /*#__PURE__*/React.createElement(Card, {
    variant: "gold",
    style: {
      background: "var(--surface-card)",
      boxShadow: "var(--shadow-4)"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    numeral: "V",
    style: {
      marginBottom: 22
    }
  }, "Authorise access"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: 36,
      lineHeight: 1.02,
      letterSpacing: "-0.015em",
      color: "var(--text-display)",
      margin: "0 0 12px"
    }
  }, "Share your profile with Khuluma?"), /*#__PURE__*/React.createElement("p", {
    className: "ss-body-sm",
    style: {
      margin: "0 0 24px"
    }
  }, "Khuluma is a Solutions Sinazo venture. You can revoke this access from your account at any time."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 1,
      background: "var(--border-hairline)",
      marginBottom: 24
    }
  }, scopes.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.k,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      padding: "14px 16px",
      background: "var(--ink-950)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 18,
    style: {
      color: "var(--text-gold)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      fontWeight: 500,
      color: "var(--text-display)"
    }
  }, s.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--text-faint)",
      marginTop: 3
    }
  }, s.d)), /*#__PURE__*/React.createElement(Switch, {
    checked: granted[s.k],
    onChange: () => setGranted({
      ...granted,
      [s.k]: !granted[s.k]
    })
  })))), /*#__PURE__*/React.createElement(DiamondRule, {
    count: 26,
    sequence: "sequenced",
    style: {
      marginBottom: 24
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    onClick: () => onNavigate("Login")
  }, "Decline"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    style: {
      flex: 1
    },
    onClick: () => setDone(true),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 14
    })
  }, "Authorise"))))), /*#__PURE__*/React.createElement(Dialog, {
    open: done,
    eyebrow: "Authorised",
    title: "You are signed in to Khuluma.",
    width: 430,
    onClose: () => setDone(false),
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "sm",
      onClick: () => {
        setDone(false);
        onNavigate("Login");
      }
    }, "Back to sign in")
  }, "Access was granted for the scopes you selected. Revoke it any time from your Solutions Sinazo account."));
}
Object.assign(window, {
  ConsentScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/ConsentScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/LoginScreen.jsx
try { (() => {
const {
  Input,
  Button,
  Checkbox,
  Icon,
  Badge
} = window.SolutionsSinazoDesignSystem_090852;
function LoginScreen({
  onNavigate
}) {
  const [email, setEmail] = React.useState("melisa@solutionssinazo.co.za");
  const [pw, setPw] = React.useState("");
  const [remember, setRemember] = React.useState(true);
  const [err, setErr] = React.useState("");
  const submit = () => pw.length < 8 ? setErr("Password must be at least 8 characters.") : (setErr(""), onNavigate("Consent"));
  return /*#__PURE__*/React.createElement(AuthShell, {
    numeral: "I",
    eyebrow: "Client access",
    headline: "Solutions you trust, Sinazo!",
    blurb: "One secure account across every venture in the Solutions Sinazo ecosystem.",
    footer: /*#__PURE__*/React.createElement(AuthLink, {
      onClick: () => onNavigate("Register")
    }, "Create an account")
  }, /*#__PURE__*/React.createElement(AuthHead, {
    title: "Sign in",
    sub: "Use the email your engagement was opened with."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    icon: "mail",
    value: email,
    onChange: e => setEmail(e.target.value)
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Password",
    type: "password",
    icon: "lock",
    value: pw,
    onChange: e => setPw(e.target.value),
    error: err,
    placeholder: "Enter your password"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Keep me signed in",
    checked: remember,
    onChange: () => setRemember(!remember)
  }), /*#__PURE__*/React.createElement(AuthLink, {
    onClick: () => onNavigate("Forgot")
  }, "Forgot password")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    onClick: submit,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 14
    })
  }, "Sign in"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      padding: "6px 0"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: "var(--border-hairline)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      letterSpacing: "0.24em",
      textTransform: "uppercase",
      color: "var(--text-faint)"
    }
  }, "or"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: "var(--border-hairline)"
    }
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    fullWidth: true,
    onClick: () => onNavigate("Consent"),
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "shield-check",
      size: 15
    })
  }, "Continue with single sign-on"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      paddingTop: 6
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "green"
  }, "Encrypted"), /*#__PURE__*/React.createElement("span", {
    className: "ss-body-sm",
    style: {
      color: "var(--text-faint)",
      fontSize: 13
    }
  }, "Sessions expire after 30 minutes of inactivity."))));
}
Object.assign(window, {
  LoginScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/LoginScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/RecoveryScreens.jsx
try { (() => {
const {
  Input,
  Button,
  Icon,
  Toast,
  Badge
} = window.SolutionsSinazoDesignSystem_090852;
function ForgotPasswordScreen({
  onNavigate
}) {
  const [email, setEmail] = React.useState("");
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement(AuthShell, {
    numeral: "III",
    eyebrow: "Account recovery",
    headline: "Locked out is not lost.",
    blurb: "We send a single-use link that expires in fifteen minutes.",
    footer: /*#__PURE__*/React.createElement(AuthLink, {
      onClick: () => onNavigate("Login")
    }, "Back to sign in")
  }, /*#__PURE__*/React.createElement(AuthHead, {
    title: "Reset your password",
    sub: "Enter the email on your account and we will send a recovery link."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    icon: "mail",
    value: email,
    onChange: e => setEmail(e.target.value),
    placeholder: "melisa@solutionssinazo.co.za"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    onClick: () => setSent(true),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 14
    })
  }, "Send recovery link"), sent ? /*#__PURE__*/React.createElement(Toast, {
    tone: "info",
    title: "Link sent",
    onClose: () => setSent(false)
  }, "Check your inbox. The link expires in fifteen minutes.") : null, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement(AuthLink, {
    onClick: () => onNavigate("Reset")
  }, "I already have a link"))));
}
function ResetPasswordScreen({
  onNavigate
}) {
  const [pw, setPw] = React.useState("");
  const [again, setAgain] = React.useState("");
  const mismatch = again.length > 0 && pw !== again;
  const strength = Math.min(4, Math.floor(pw.length / 4));
  return /*#__PURE__*/React.createElement(AuthShell, {
    numeral: "IV",
    eyebrow: "Account recovery",
    headline: "Set a password you will actually keep.",
    blurb: "Twelve characters minimum. Two-factor stays enabled on your profile.",
    footer: /*#__PURE__*/React.createElement(AuthLink, {
      onClick: () => onNavigate("Login")
    }, "Back to sign in")
  }, /*#__PURE__*/React.createElement(AuthHead, {
    title: "Choose a new password",
    sub: "The recovery link is single-use and now consumed."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "New password",
    type: "password",
    icon: "lock",
    value: pw,
    onChange: e => setPw(e.target.value),
    hint: "Minimum 12 characters, one number."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6
    }
  }, [0, 1, 2, 3].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      flex: 1,
      height: 3,
      background: i < strength ? "var(--ss-gold-400)" : "var(--ink-500)",
      transition: "background var(--dur-base) var(--ease-standard)"
    }
  }))), /*#__PURE__*/React.createElement(Input, {
    label: "Confirm password",
    type: "password",
    icon: "lock",
    value: again,
    onChange: e => setAgain(e.target.value),
    error: mismatch ? "Passwords do not match." : ""
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    disabled: !pw || mismatch,
    onClick: () => onNavigate("Consent")
  }, "Save and sign in"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "center",
      paddingTop: 4
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "green"
  }, "Two-factor active"), /*#__PURE__*/React.createElement(Badge, {
    tone: "outline"
  }, "Single-use link"))));
}
Object.assign(window, {
  ForgotPasswordScreen,
  ResetPasswordScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/RecoveryScreens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/RegisterScreen.jsx
try { (() => {
const {
  Input,
  Button,
  Checkbox,
  Select,
  Icon
} = window.SolutionsSinazoDesignSystem_090852;
function RegisterScreen({
  onNavigate
}) {
  const [f, setF] = React.useState({
    first: "",
    last: "",
    email: "",
    org: "",
    role: "Founder",
    pw: ""
  });
  const set = k => e => setF({
    ...f,
    [k]: e.target.value
  });
  const [agree, setAgree] = React.useState(false);
  return /*#__PURE__*/React.createElement(AuthShell, {
    numeral: "II",
    eyebrow: "New account",
    headline: "Designed solutions begin with a conversation.",
    blurb: "Register once and your access carries across Appsolutely, Melisa, Counselease and Ripe!",
    footer: /*#__PURE__*/React.createElement(AuthLink, {
      onClick: () => onNavigate("Login")
    }, "Already registered? Sign in")
  }, /*#__PURE__*/React.createElement(AuthHead, {
    title: "Create your account",
    sub: "We only ask for what an engagement needs."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "First name",
    value: f.first,
    onChange: set("first"),
    placeholder: "Melisa",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Last name",
    value: f.last,
    onChange: set("last"),
    placeholder: "Yose",
    required: true
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Work email",
    type: "email",
    icon: "mail",
    value: f.email,
    onChange: set("email"),
    placeholder: "melisa@solutionssinazo.co.za",
    required: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Organisation",
    value: f.org,
    onChange: set("org"),
    placeholder: "Company"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Your role",
    value: f.role,
    onChange: set("role"),
    options: ["Founder", "Executive", "Product", "Operations", "Other"]
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Password",
    type: "password",
    icon: "lock",
    value: f.pw,
    onChange: set("pw"),
    hint: "Minimum 12 characters, one number.",
    required: true
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "I accept the terms of engagement and privacy notice",
    hint: "Reg. Dec 2025",
    checked: agree,
    onChange: () => setAgree(!agree)
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    disabled: !agree,
    onClick: () => onNavigate("Consent"),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 14
    })
  }, "Create account")));
}
Object.assign(window, {
  RegisterScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/RegisterScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ConsultScreen.jsx
try { (() => {
const {
  PatternSurface,
  SectionLabel,
  Card,
  Button,
  Input,
  Select,
  Checkbox,
  Toast,
  Icon,
  StatBlock
} = window.SolutionsSinazoDesignSystem_090852;
function ConsultScreen() {
  const [sent, setSent] = React.useState(false);
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    org: "",
    need: "Discovery"
  });
  const set = k => e => setForm({
    ...form,
    [k]: e.target.value
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(PatternSurface, {
    field: "diamond",
    scrim: "radial",
    unit: 120,
    style: {
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr) minmax(0,520px)",
      gap: 48,
      padding: "64px 40px 72px",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, {
    numeral: "V",
    style: {
      marginBottom: 26,
      maxWidth: 380
    }
  }, "Start here"), /*#__PURE__*/React.createElement("h1", {
    className: "ss-display-2",
    style: {
      maxWidth: "16ch",
      marginBottom: 24
    }
  }, "Tell us the problem, not the feature."), /*#__PURE__*/React.createElement("p", {
    className: "ss-body-lg",
    style: {
      maxWidth: "44ch",
      marginBottom: 36
    }
  }, "Every engagement opens with discovery. We will come back within two business days with the questions that matter and an honest view of whether we are the right partner."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2,minmax(0,1fr))",
      gap: 28,
      maxWidth: 420,
      paddingTop: 12,
      borderTop: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: "2",
    label: "Business days to reply"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "1",
    label: "Discovery call, no charge",
    tone: "green"
  }))), /*#__PURE__*/React.createElement(Card, {
    variant: "gold",
    style: {
      background: "var(--ink-950)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Your name",
    value: form.name,
    onChange: set("name"),
    placeholder: "Full name",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Work email",
    type: "email",
    icon: "mail",
    value: form.email,
    onChange: set("email"),
    placeholder: "melisa@solutionssinazo.co.za",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Organisation",
    value: form.org,
    onChange: set("org"),
    placeholder: "Company or department"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Where you are",
    value: form.need,
    onChange: set("need"),
    options: ["Discovery", "Strategic design", "Architecture", "Commercialisation", "Execution", "Assurance"]
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "I accept the terms of engagement",
    hint: "Reg. Dec 2025",
    checked: true,
    onChange: () => {}
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    onClick: () => setSent(true),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 14
    })
  }, "Request the call"))))), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      right: 24,
      bottom: 24,
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "success",
    title: "Request received",
    onClose: () => setSent(false)
  }, "Your consultation request is with the team. Expect a reply within two business days.")) : null);
}
Object.assign(window, {
  ConsultScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ConsultScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/EcosystemScreen.jsx
try { (() => {
const {
  PatternSurface,
  SectionLabel,
  Card,
  Badge,
  Tabs,
  Button,
  Tag,
  Icon
} = window.SolutionsSinazoDesignSystem_090852;
function EcosystemScreen({
  onNavigate
}) {
  const [tab, setTab] = React.useState(0);
  const tabs = ["All", "Live", "Coming soon"];
  const brands = [{
    name: "Appsolutely",
    tagline: "Applied product delivery",
    live: true,
    tags: ["Product", "Delivery"],
    logo: null
  }, {
    name: "Melisa",
    tagline: "Advisory intelligence",
    live: true,
    tags: ["Advisory"],
    logo: null
  }, {
    name: "Counselease",
    tagline: "Guided support",
    live: true,
    tags: ["Support"],
    logo: null
  }, {
    name: "Ripe!",
    tagline: "Market readiness",
    live: true,
    tags: ["Go-to-market"],
    logo: null
  }, {
    name: "Khuluma",
    tagline: "Speak. Be heard. Be you.",
    live: false,
    tags: ["Voice", "Community"],
    logo: "../../assets/logo-khuluma.png"
  }, {
    name: "BlackBox",
    tagline: "Skills. Exchange. Elevate.",
    live: false,
    tags: ["Skills", "Exchange"],
    logo: "../../assets/logo-blackbox.png"
  }, {
    name: "Mzantsified",
    tagline: "Mark not supplied",
    live: false,
    tags: ["Platform"],
    logo: null
  }];
  const shown = brands.filter(b => tab === 0 ? true : tab === 1 ? b.live : !b.live);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PatternSurface, {
    field: "fold",
    scrim: "bottom",
    unit: 104,
    style: {
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "64px 40px 44px"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    numeral: "II",
    style: {
      marginBottom: 26,
      maxWidth: 420
    }
  }, "Brand portfolio"), /*#__PURE__*/React.createElement("h1", {
    className: "ss-display-2",
    style: {
      maxWidth: "20ch",
      marginBottom: 20
    }
  }, "Specialist ventures, one visual language."), /*#__PURE__*/React.createElement("p", {
    className: "ss-body-lg",
    style: {
      maxWidth: "52ch",
      margin: 0
    }
  }, "Each venture may develop its own product expression. Wherever the parent brand is present, the surface stays green, gold and ink."))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "36px 40px 72px"
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    tabs: tabs,
    active: tab,
    onChange: setTab,
    style: {
      marginBottom: 32
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, minmax(0,1fr))",
      gap: 18
    }
  }, shown.map((b, i) => /*#__PURE__*/React.createElement(Card, {
    key: b.name,
    variant: i === 0 ? "gold" : b.live ? "hairline" : "inset",
    interactive: true,
    onClick: () => onNavigate("Consult")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12,
      marginBottom: 18,
      minHeight: 46
    }
  }, b.logo ? /*#__PURE__*/React.createElement("img", {
    src: b.logo,
    alt: b.name,
    style: {
      height: 40,
      width: "auto"
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      fontSize: 17,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: b.live ? "var(--paper)" : "var(--text-muted)"
    }
  }, b.name), b.live ? /*#__PURE__*/React.createElement(Badge, {
    tone: "green"
  }, "Live") : /*#__PURE__*/React.createElement(Badge, {
    tone: "soon"
  }, "Soon")), /*#__PURE__*/React.createElement("p", {
    className: "ss-body-sm",
    style: {
      margin: "0 0 16px"
    }
  }, b.tagline), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, b.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t
  }, t)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 44,
      display: "flex",
      alignItems: "center",
      gap: 16,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => onNavigate("Consult"),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 14
    })
  }, "Discuss a venture"), /*#__PURE__*/React.createElement("span", {
    className: "ss-label"
  }, "Solutions you trust, Sinazo!"))));
}
Object.assign(window, {
  EcosystemScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/EcosystemScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
const {
  PatternSurface,
  PortraitEmerge,
  SectionLabel,
  Button,
  Card,
  StatBlock,
  Badge,
  Icon,
  DiamondRule
} = window.SolutionsSinazoDesignSystem_090852;
function HomeHero({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(PatternSurface, {
    field: "cube",
    scrim: "left",
    unit: 116,
    animated: true,
    grain: true,
    style: {
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1.1fr) minmax(0,0.9fr)",
      minHeight: 560
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "84px 40px 64px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    numeral: "I",
    style: {
      marginBottom: 34,
      maxWidth: 420
    }
  }, "Solutions Sinazo"), /*#__PURE__*/React.createElement("h1", {
    className: "ss-display-1",
    style: {
      marginBottom: 40
    }
  }, "Conserve.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ss-green-800)"
    }
  }, "Preserve."), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ss-gold-400)"
    }
  }, "Serve.")), /*#__PURE__*/React.createElement("p", {
    className: "ss-body-lg",
    style: {
      maxWidth: "46ch",
      marginBottom: 36
    }
  }, "We do not simply provide services. We design solutions with intention \u2014 discovery, intelligence, strategy, experience and execution held together by one operating system."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNavigate("Consult"),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 14
    })
  }, "Book a consultation"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    onClick: () => onNavigate("Ecosystem")
  }, "The ecosystem"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderLeft: "1px solid var(--border-hairline)",
      background: "var(--ink-950)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 14,
      top: 40,
      writingMode: "vertical-rl",
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.34em",
      textTransform: "uppercase",
      color: "var(--text-faint)"
    }
  }, "Mamgqwashu / Miss Sinazo Melisa Yose"), /*#__PURE__*/React.createElement(PortraitEmerge, {
    slotId: "ss-hero-portrait",
    placeholder: "Founder portrait \u2014 drop a JPG or PNG here",
    focusX: 54,
    focusY: 38,
    style: {
      position: "absolute",
      inset: "0 0 0 46px"
    }
  }))));
}
function HomeStats() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "56px 40px",
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, minmax(0,1fr))",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: "6",
    label: "Ventures in the ecosystem"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "2022",
    label: "Established",
    tone: "paper"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "10",
    suffix: "+",
    label: "SSOS operating skills",
    tone: "green"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "ZA",
    label: "African-rooted, globally fluent",
    tone: "paper"
  })));
}
function HomeServices({
  onNavigate
}) {
  const items = [{
    n: "I",
    k: "Discovery",
    t: "Understand the real problem",
    b: "Stakeholders, root causes and a validated problem before anything is committed to build.",
    v: "crown"
  }, {
    n: "II",
    k: "Strategic design",
    t: "Direction you can defend",
    b: "Intelligence translated into value propositions, roadmaps and value-capture models.",
    v: "gold"
  }, {
    n: "III",
    k: "Architecture",
    t: "Foundations that hold",
    b: "Operational, data, AI, integration, security and resilience decisions made once, properly.",
    v: "hairline"
  }, {
    n: "IV",
    k: "Commercialisation",
    t: "Value that pays",
    b: "Go-to-market, pricing, unit economics and investment readiness.",
    v: "hairline"
  }, {
    n: "V",
    k: "Execution",
    t: "Approved strategy, delivered",
    b: "Plans, milestones, adoption mechanisms and operating governance.",
    v: "crown"
  }, {
    n: "VI",
    k: "Assurance",
    t: "Deliberate failure analysis",
    b: "Red-teaming, evidence audits and readiness review before the gate, not after.",
    v: "inset"
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "72px 40px",
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    numeral: "III",
    style: {
      marginBottom: 28
    }
  }, "What we do"), /*#__PURE__*/React.createElement("h2", {
    className: "ss-display-3",
    style: {
      maxWidth: "24ch",
      marginBottom: 44
    }
  }, "One operating system, applied end to end."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, minmax(0,1fr))",
      gap: 18
    }
  }, items.map(it => /*#__PURE__*/React.createElement(Card, {
    key: it.n,
    variant: it.v,
    pattern: it.n === "I" ? "cube" : "fold",
    numeral: it.n,
    eyebrow: it.k,
    title: it.t,
    interactive: true,
    onClick: () => onNavigate("Consult")
  }, /*#__PURE__*/React.createElement("p", {
    className: "ss-body-sm",
    style: {
      margin: 0
    }
  }, it.b)))));
}
function HomeEcosystemStrip({
  onNavigate
}) {
  const brands = [{
    name: "Appsolutely",
    note: "Applied product delivery",
    live: true
  }, {
    name: "Khuluma",
    note: "Speak. Be heard. Be you.",
    live: false
  }, {
    name: "Melisa",
    note: "Advisory intelligence",
    live: true
  }, {
    name: "Counselease",
    note: "Guided support",
    live: true
  }, {
    name: "Ripe!",
    note: "Market readiness",
    live: true
  }, {
    name: "BlackBox",
    note: "Skills. Exchange. Elevate.",
    live: false
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "72px 40px",
      background: "var(--ink-950)",
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    numeral: "II",
    style: {
      marginBottom: 28
    }
  }, "The ecosystem"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, minmax(0,1fr))",
      gap: 1,
      background: "var(--border-hairline)"
    }
  }, brands.map(b => /*#__PURE__*/React.createElement("button", {
    key: b.name,
    type: "button",
    onClick: () => onNavigate("Ecosystem"),
    style: {
      textAlign: "left",
      background: "var(--ink-900)",
      border: 0,
      padding: "26px 24px",
      cursor: "pointer",
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      fontSize: 16,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: b.live ? "var(--paper)" : "var(--text-muted)"
    }
  }, b.name), b.live ? /*#__PURE__*/React.createElement(Badge, {
    tone: "green"
  }, "Live") : /*#__PURE__*/React.createElement(Badge, {
    tone: "soon"
  }, "Soon")), /*#__PURE__*/React.createElement("span", {
    className: "ss-body-sm",
    style: {
      color: "var(--text-faint)"
    }
  }, b.note)))), /*#__PURE__*/React.createElement(DiamondRule, {
    count: 60,
    sequence: "sequenced",
    style: {
      marginTop: 34,
      overflow: "hidden"
    }
  }));
}
Object.assign(window, {
  HomeHero,
  HomeStats,
  HomeServices,
  HomeEcosystemStrip
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteChrome.jsx
try { (() => {
const {
  NavBar,
  RomanRail,
  DiamondRule,
  Logotype,
  Button,
  SectionLabel
} = window.SolutionsSinazoDesignSystem_090852;
const SITE_LINKS = ["Appsolutely", "Khuluma", "Melisa", "Counselease", "Ripe!", "BlackBox"];
function SiteHeader({
  active,
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "relative",
      background: "var(--ink-900)",
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr auto 1fr",
      alignItems: "center",
      gap: 24,
      padding: "18px 40px"
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => onNavigate("Home"),
    style: {
      background: "none",
      border: 0,
      padding: 0,
      cursor: "pointer",
      justifySelf: "start"
    }
  }, /*#__PURE__*/React.createElement(Logotype, {
    size: 13,
    stacked: false
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: 30
    }
  }, SITE_LINKS.map(l => /*#__PURE__*/React.createElement("button", {
    key: l,
    type: "button",
    onClick: () => onNavigate("Ecosystem"),
    style: {
      background: "none",
      border: 0,
      padding: 0,
      cursor: "pointer",
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.24em",
      textTransform: "uppercase",
      color: active === "Ecosystem" && l === "Khuluma" ? "var(--text-gold)" : "var(--text-muted)"
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      justifySelf: "end"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    onClick: () => onNavigate("Consult")
  }, "Consult"))), /*#__PURE__*/React.createElement(DiamondRule, {
    count: 72,
    size: 6,
    gap: 13,
    sequence: "sequenced",
    style: {
      padding: "0 40px 10px",
      overflow: "hidden"
    }
  }));
}
function SiteRail({
  active,
  onSelect
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: 0,
      alignSelf: "flex-start",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement(RomanRail, {
    sections: [{
      numeral: "I",
      label: "Conserve"
    }, {
      numeral: "II",
      label: "Ecosystem"
    }, {
      numeral: "III",
      label: "Services"
    }, {
      numeral: "IV",
      label: "Evidence"
    }, {
      numeral: "V",
      label: "Consult"
    }],
    active: active,
    onSelect: onSelect,
    style: {
      minHeight: 640
    }
  }));
}
function SiteFooter({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: "1px solid var(--border-hairline)",
      background: "var(--ink-950)"
    }
  }, /*#__PURE__*/React.createElement(DiamondRule, {
    count: 72,
    size: 6,
    gap: 13,
    sequence: "sequenced",
    style: {
      padding: "18px 40px 0",
      overflow: "hidden"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr",
      gap: 40,
      padding: "36px 40px 28px"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logotype, {
    size: 17,
    tagline: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    rule: false,
    tone: "muted"
  }, "Ecosystem"), SITE_LINKS.map(l => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--text-faint)"
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    rule: false,
    tone: "muted"
  }, "Coming soon"), ["BlackBox", "Khuluma", "Mzantsified"].map(l => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--text-faint)"
    }
  }, l)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => onNavigate("Consult"),
    style: {
      marginTop: 6,
      alignSelf: "flex-start",
      background: "none",
      border: 0,
      padding: 0,
      cursor: "pointer",
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--text-gold)",
      borderBottom: "1px solid var(--border-gold-dim)"
    }
  }, "Start a conversation"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 18,
      padding: "0 40px 30px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      transform: "rotate(45deg)",
      background: "var(--ss-gold-400)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.34em",
      textTransform: "uppercase",
      color: "var(--text-faint)"
    }
  }, "Est. 2022 \xB7 Reg. Dec 2025")));
}
Object.assign(window, {
  SiteHeader,
  SiteRail,
  SiteFooter,
  SITE_LINKS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteChrome.jsx", error: String((e && e.message) || e) }); }

__ds_ns.DiamondRule = __ds_scope.DiamondRule;

__ds_ns.Logotype = __ds_scope.Logotype;

__ds_ns.PatternSurface = __ds_scope.PatternSurface;

__ds_ns.PortraitEmerge = __ds_scope.PortraitEmerge;

__ds_ns.RomanRail = __ds_scope.RomanRail;

__ds_ns.SectionLabel = __ds_scope.SectionLabel;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
