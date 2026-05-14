# Issues Report

## 1. Critical request chain caused by Google Fonts
**Issue:** 992ms critical request chain from Google Fonts loaded via external CDN (638ms CSS + 3 font files at ~988ms). No preconnect hints set.

**Fix:**
- Self-host fonts using `google-webfonts-helper` with `font-display: swap` to eliminate the chain.
- Add `preconnect` for `fonts.googleapis.com` and `fonts.gstatic.com` if keeping CDN temporarily.
- Defer JS (`index-C3QoJTKD.js`) and preload CSS (`index-CWV1apt7.css`) to break the chain: HTML → JS → Fonts → CSS.

---

## 2. Oversized logo images
**Issue:** Logo images are significantly oversized for their display dimensions, wasting bandwidth and slowing LCP/FCP.

**Examples:**
- Logo6: 696×277px file displayed at 211×84px (35.2KB → could be 2.9KB)
- Logo1: 1837×368px file displayed at 217×43px (16.6KB → could be 0.2KB)
- Total potential savings: ~48.7KB

**Fix:** Resize source images to match display dimensions (2x for retina) and compress. Use responsive images with `srcset` if logos display at different sizes across breakpoints.

---

## 3. Low contrast text (accessibility issue)
**Issue:** Orange text on white background fails WCAG contrast standards.

**Failing elements:**
- `text-orange-500` on white: "100+", "365", phone number
- `text-orange-600` on white: "01", "02", "03" step numbers

**Fix:** Darken orange shades to meet WCAG AA contrast ratio (4.5:1 for normal text, 3:1 for large text):
- Replace `text-orange-500` with `text-orange-700` or `text-orange-800`
- Replace `text-orange-600` with `text-orange-800` or `text-orange-900`

---

## 4. Unused JavaScript in vendor bundle
**Issue:** 29KB of unused JavaScript in vendor bundle (`vendor-react-COrq-mw-.js`, 70.9KB total).

**Fix:** Code-split React vendor chunks. Lazy-load non-critical components with `React.lazy()` and `Suspense`. Tree-shake unused React features if not needed.

---

## 5. Unused React bundle on initial load (41%)
**Issue:** 29KB (41%) of vendor React bundle unused on initial load.

**Fix:**
- Lazy-load routes/components with `React.lazy()` + `Suspense`
- Verify tree-shaking is working (check import syntax)
- Consider lighter React alternative (Preact) or partial hydration if using SSR

---

## 6. Carousel dot navigation too small
**Issue:** Dot navigation buttons fail minimum touch target size (48×48px required).

**Fix:** Increase dot button size to minimum 48×48px. Either:
- Make visible dot 48×48px, or
- Keep small dot visually but increase clickable area with padding (`p-3 min-w-[48px] min-h-[48px]`)

**Example:**
```html
<button class="dot w-12 h-12 p-3" aria-label="Go to slide X">