const cosplayPhotos = [
  { id: 1,  url: ["you02.jpg", "a03.jpg","a04.jpg","a05.jpg"], title: "彩虹社にじさんじ", coser: "zxuytnn_", ig: "https://instagram.com", photographer: "幽靈小攝影" },
  { id: 2,  url: ["b01.jpg","b02.jpg","b03.jpg","b04.jpg","b05.jpg","b06.jpg","b07.jpg"], title: "彩虹社にじさんじ", coser: "gray_mond_", ig: "https://instagram.com", photographer: "幽靈小攝影" },
  { id: 3,  url: ["c01.jpg","c03.jpg","c02.jpg","c04.jpg","c05.jpg"], title: "彌豆子與善意雙人照", coser: ["zxuytnn_", "xiaqiancos"], ig: ["https://instagram.com", "https://instagram.com"], photographer: "幽靈小攝影" },
  { id: 4,  url: ["d01.jpg","d02.jpg","d03.jpg","d04.jpg","d05.jpg","d06.jpg"], title: "模特兒", coser: "maggie.08.29", ig: "https://instagram.com", photographer: "幽靈小攝影" }
];

const gallery  = document.getElementById("gallery");
const lightbox = document.getElementById("lightbox");
const lbImg    = document.getElementById("lbImg");
const lbTitle  = document.getElementById("lbTitle");
const lbBy     = document.getElementById("lbBy");
const lbCount  = document.getElementById("lbCount");
const lbCosers = document.getElementById("lbCoser") ? document.getElementById("lbCoser").parentElement : null;   
const lbDots   = document.getElementById("lbDots");
const lbSlidePrev = document.getElementById("lbSlidePrev");
const lbSlideNext = document.getElementById("lbSlideNext");
let currentIndex = 0;   
let currentSlide = 0;   
let posts = [];

function getImages(photo) {
  return (Array.isArray(photo.url) ? photo.url : [photo.url]).map((u) => (u || "").trim()).filter(Boolean);
}

const MULTI_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="7" y="7" width="14" height="14" rx="2"/><path d="M3 17V5a2 2 0 0 1 2-2h12"/></svg>';
const IG_ICON = '<svg class="ig-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>';

function toIgUrl(ig) {
  if (!ig) return "";
  ig = ig.trim();
  if (/^https?:\/\//i.test(ig)) return ig;
  const handle = ig.replace(/^@/, "");
  return /^[\w.]+$/.test(handle) ? "https://instagram.com" + handle + "/" : "";
}

function getCosers(photo) {
  const names = Array.isArray(photo.coser) ? photo.coser : [photo.coser];
  const igs   = Array.isArray(photo.ig) ? photo.ig : [photo.ig];
  return names.map((name, i) => ({ name: (name || "").trim(), igUrl: toIgUrl(igs[i]) })).filter((c) => c.name);
}

function makeCoserTag(c, className) {
  const tag = document.createElement(c.igUrl ? "a" : "span");
  tag.className = className;
  tag.textContent = c.name;
  if (c.igUrl) {
    tag.href = c.igUrl;
    tag.target = "_blank";
    tag.rel = "noopener noreferrer";
    if (className === "coser-tag") tag.insertAdjacentHTML("beforeend", IG_ICON);
    tag.addEventListener("click", (e) => e.stopPropagation());   
    tag.addEventListener("keydown", (e) => e.stopPropagation());
  }
  return tag;
}

function renderGallery() {
  if (!gallery) return;
  gallery.innerHTML = "";
  posts = cosplayPhotos.filter((p) => getImages(p).length > 0);
  posts.forEach((photo, index) => {
    const card = document.createElement("div");
    card.className = "photo-card show";
    card.tabIndex = 0;

    const images = getImages(photo);
    const img = document.createElement("img");
    img.src = "./" + images[0];   
    img.alt = photo.title;
    img.loading = "lazy";
    img.addEventListener("load", () => img.classList.add("loaded"));
    img.addEventListener("error", () => img.classList.add("broken"));

    const info = document.createElement("div");
    info.className = "photo-info";
    info.innerHTML = `<div class="title"></div><div class="by"></div>`;
    info.querySelector(".title").textContent = photo.title;
    info.querySelector(".by").textContent = "📷 " + (photo.photographer || "幽靈小攝影");

    card.append(img, info);

    if (images.length > 1) {
      const badge = document.createElement("span");
      badge.className = "multi-badge";
      badge.innerHTML = MULTI_ICON + images.length;
      card.appendChild(badge);
    }

    const cosers = getCosers(photo);
    if (cosers.length) {
      const tagsWrapper = document.createElement("div");
      tagsWrapper.className = "coser-tags";
      cosers.forEach((c) => tagsWrapper.appendChild(makeCoserTag(c, "coser-tag")));
      card.appendChild(tagsWrapper);
    }

    const openMe = () => openLightbox(index);
    card.addEventListener("click", openMe);
    card.addEventListener("keydown", (e) => { if (e.key === "Enter") openMe(); });
    gallery.appendChild(card);
  });
}

function openLightbox(index) {
  currentIndex = index;
  currentSlide = 0;
  if (!lightbox) return;
  lightbox.setAttribute("aria-hidden", "false");
  lightbox.classList.add("open");
  document.body.style.overflow = "hidden"; 
  updateLightbox();
  setTimeout(() => lightbox.focus(), 100);
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.setAttribute("aria-hidden", "true");
  lightbox.classList.remove("open");
  document.body.style.overflow = ""; 
  lbImg.src = ""; 
}

function updateLightbox() {
  const photo  = posts[currentIndex];
  const images = getImages(photo);
  if (currentSlide < 0) currentSlide = 0;
  if (currentSlide >= images.length) currentSlide = images.length - 1;

  if (lbImg) {
    lbImg.src = "./" + images[currentSlide];
  }
  if (lbTitle) lbTitle.textContent = photo.title;
  if (lbBy) lbBy.textContent = "📷 " + (photo.photographer || "幽靈小攝影");
  if (lbCount) lbCount.textContent = images.length > 1 ? `${currentSlide + 1} / ${images.length}` : "";

  if (lbCosers) {
    lbCosers.innerHTML = "";
    const cosers = getCosers(photo);
    cosers.forEach((c) => lbCosers.appendChild(makeCoserTag(c, "lb-coser")));
  }

  if (lbDots) {
    lbDots.innerHTML = "";
    if (images.length > 1) {
      images.forEach((_, i) => {
        const dot = document.createElement("button");
        dot.className = "lb-dot" + (i === currentSlide ? " active" : "");
        dot.addEventListener("click", () => { currentSlide = i; updateLightbox(); });
        lbDots.appendChild(dot);
      });
      if (lbSlidePrev) lbSlidePrev.style.display = currentSlide > 0 ? "block" : "none";
      if (lbSlideNext) lbSlideNext.style.display = currentSlide < images.length - 1 ? "block" : "none";
    } else {
      if (lbSlidePrev) lbSlidePrev.style.display = "none";
      if (lbSlideNext) lbSlideNext.style.display = "none";
    }
  }
}

function nextPost() { if (currentIndex < posts.length - 1) { currentIndex++; currentSlide = 0; updateLightbox(); } }
function prevPost() { if (currentIndex > 0) { currentIndex--; currentSlide = 0; updateLightbox(); } }
function nextSlide() { const images = getImages(posts[currentIndex]); if (currentSlide < images.length - 1) { currentSlide++; updateLightbox(); } }
function prevSlide() { if (currentSlide > 0) { currentSlide--; updateLightbox(); } }

if (document.getElementById("lbClose")) document.getElementById("lbClose").addEventListener("click", closeLightbox);
if (document.getElementById("lbPrev")) document.getElementById("lbPrev").addEventListener("click", prevPost);
if (document.getElementById("lbNext")) document.getElementById("lbNext").addEventListener("click", nextPost);
if (lbSlidePrev) lbSlidePrev.addEventListener("click", prevSlide);
if (lbSlideNext) lbSlideNext.addEventListener("click", nextSlide);

if (lightbox) {
  lightbox.addEventListener("click", (e) => { if (e.target === lightbox || e.target === document.getElementById("lbStage")) closeLightbox(); });
}

document.addEventListener("keydown", (e) => {
  if (!lightbox || !lightbox.classList.contains("open")) return;
  if (e.key === "Escape") closeLightbox();
  const images = getImages(posts[currentIndex]);
  if (images.length > 1) {
    if (e.key === "ArrowLeft") prevSlide();
    if (e.key === "ArrowRight") nextSlide();
  } else {
    if (e.key === "ArrowLeft") prevPost();
    if (e.key === "ArrowRight") nextPost();
  }
});

const yearSpan = document.getElementById("year");
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

renderGallery();
