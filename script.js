/* =====================================================================
   📸 照片資料區（以後只需要改這裡！）

   ⚠️ index.html、style.css、script.js 三個檔案要放在同一個資料夾，
      網頁才會正常顯示。
   =====================================================================

   ▶ 如何「新增」一張照片：
     1. 複製下面任意一行 { id: ..., url: ..., title: ..., photographer: ... },
     2. 貼在最後一行的下面（記得每一行結尾都要有逗號 , ）
     3. 修改內容：
        - id           ：編號，不要跟別張重複就好（例如接著寫 13、14、15…）
        - url          ：照片路徑（見下方說明）
        - title        ：角色名稱／Coser 名稱，會顯示在照片上
        - photographer ：攝影師備註，預設「幽靈小攝影」
        - coser        ：Coser 的名字或 ID，會顯示成照片左上角的標籤
                         （不想顯示標籤就寫 coser: "" 或整個刪掉）
        - ig           ：Coser 的 Instagram，填了之後點標籤就會開啟 IG
                         兩種寫法都可以：
                           ig: "https://www.instagram.com/帳號/"   ← 直接貼完整連結
                           ig: "@帳號"  或  ig: "帳號"              ← 只寫帳號也行
                         （沒有 IG 就寫 ig: "" 或整個刪掉，標籤就只顯示名字）

   ▶ 一張照片有「兩位（或更多）Coser」：
     coser 和 ig 都改用中括號 [ ] 包起來，依順序一一對應：
       coser: ["zxuytnn_", "小明"],
       ig:    ["@zxuytnn_", "@xiaoming"],
     - 照片上會出現兩個標籤，各自連到自己的 IG
     - 其中一位沒有 IG，就在那個位置寫 ""，例如 ig: ["@zxuytnn_", ""]
     4. 存檔，重新整理網頁，照片就會自動出現！

   ▶ 如何「替換」照片：
     直接把該行的 url 改成新照片的路徑即可。

   ▶ 如何「刪除」照片：
     把整行刪掉即可。

   ▶ 照片路徑（url）的寫法：
     - 本機照片（推薦）：在 index.html 旁邊建立一個資料夾 images，
       把照片放進去，然後寫成 url: "images/檔名.jpg"
       資料夾結構範例：
         📁 我的網站
           ├─ index.html   ← 網頁本體（雙擊開啟）
           ├─ style.css    ← 樣式
           ├─ script.js    ← 照片資料＋功能（就是這個檔案）
           └─ 📁 images
                ├─ miku01.jpg
                └─ raiden.png
     - 網路照片：直接貼完整網址，例如 url: "https://example.com/photo.jpg"
     - 注意：檔名大小寫要一致，建議用英文／數字命名，避免空白與中文。

   ▶ 一則作品放「多張照片」（像 IG 貼文一樣可以左右滑）：
     把 url 改成用中括號 [ ] 包起來，裡面一張一張用逗號隔開：
       url: ["images/miku01.jpg", "images/miku02.jpg", "images/miku03.jpg"],
     - 第一張會當作相片牆上的封面
     - 相片牆上會出現「多張」小圖示，點開大圖後可以左右切換這則的照片
     - 只有一張照片的話，照舊寫 url: "images/xxx.jpg" 就好

   ▶ 照片的排列順序 = 這個陣列由上到下的順序。
     想把某張放到最前面，就把那一行剪下、貼到最上面。

   ⚠️ 目前的照片都是範例圖片（picsum.photos），請換成你自己的照片。
   ===================================================================== */

const cosplayPhotos = [
  { id: 1,  url: ["you02.JPG", "a03.jpg","a04.jpg","a05.jpg"], title: "彩虹社にじさんじ", coser: "zxuytnn_", ig: "https://www.instagram.com/zxuytnn_/", photographer: "幽靈小攝影" },
  { id: 2,  url: ["b01.jpg","b02.jpg","/b03.jpg","b04.jpg","b05.jpg","/b06.jpg","images/b07.jpg"], title: "彩虹社にじさんじ", coser: "gray_mond_", ig: "https://www.instagram.com/gray_mond_/", photographer: "幽靈小攝影" },
  { id: 3, url: ["c01.jpg","c03.jpg","c02.jpg","c04.jpg","c05.jpg"], title: "彌豆子與善意雙人照", coser: ["zxuytnn_", "xiaqiancos"], ig: ["https://www.instagram.com/zyn._.016/", "https://www.instagram.com/xiaqiancos/"], photographer: "幽靈小攝影" },
  { id: 4,  url: ["d01.jpg","d02.jpg","d03.jpg","d04.jpg","d05.jpg","d06.jpg"], title: "模特兒", Coser: "maggie.08.29", ig: "https://www.instagram.com/maggie.08.29/", photographer: "幽靈小攝影" },
  { id: 5,  url: "",    title: "範例角色 05", cpser: "範例Coser D", ig: "", photographer: "幽靈小攝影" },
  { id: 6,  url: "",  title: "範例角色 06", coser: "範例Coser B", ig: "@instagram", photographer: "幽靈小攝影" },
  { id: 7,  url: "", title: "範例角色 07", coser: "範例Coser E", ig: "", photographer: "幽靈小攝影" },
  { id: 8,  url: "", title: "範例角色 08", coser: "範例Coser C", ig: "", photographer: "幽靈小攝影" },
  { id: 9,  url: "", title: "範例角色 09", coser: "範例Coser F", ig: "", photographer: "幽靈小攝影" },
  { id: 10, url: "", title: "範例角色 10", coser: "範例Coser D", ig: "", photographer: "幽靈小攝影" },
  { id: 11, url: "", title: "範例角色 11", coser: "範例Coser A", ig: "https://www.instagram.com/instagram/", photographer: "幽靈小攝影" },
  { id: 12, url: "", title: "範例角色 12", coser: "範例Coser E", ig: "", photographer: "幽靈小攝影" },

  // 👇 新增照片範例（本機照片）：把開頭的 // 刪掉就會生效
  // { id: 13, url: "images/miku01.jpg", title: "初音未來", coser: "小明", ig: "https://www.instagram.com/xiaoming/", photographer: "幽靈小攝影" },
  // { id: 14, url: ["images/rei01.jpg", "images/rei02.jpg", "images/rei03.jpg"], title: "綾波零", coser: "小明", ig: "@xiaoming", photographer: "幽靈小攝影" },
];

/* =====================================================================
   以下是網站程式邏輯，一般不需要修改
   ===================================================================== */

const gallery  = document.getElementById("gallery");
const lightbox = document.getElementById("lightbox");
const lbImg    = document.getElementById("lbImg");
const lbTitle  = document.getElementById("lbTitle");
const lbBy     = document.getElementById("lbBy");
const lbCount  = document.getElementById("lbCount");
const lbCosers = document.getElementById("lbCoser").parentElement;   // 燈箱裡放 Coser 標籤的地方
const lbDots   = document.getElementById("lbDots");
const lbSlidePrev = document.getElementById("lbSlidePrev");
const lbSlideNext = document.getElementById("lbSlideNext");
let currentIndex = 0;   // 目前是第幾則作品
let currentSlide = 0;   // 目前是這則作品的第幾張

// 取出一則作品的所有照片（url 可以是一張，也可以是 [ ] 包起來的多張）
function getImages(photo) {
  return (Array.isArray(photo.url) ? photo.url : [photo.url])
    .map((u) => (u || "").trim())   // 去掉路徑前後不小心多打的空白
    .filter(Boolean);
}

// 只顯示有填照片的作品（url 留空 "" 的那行會先被跳過，等你填好照片才出現）
let posts = [];

const MULTI_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="7" y="7" width="14" height="14" rx="2"/><path d="M3 17V5a2 2 0 0 1 2-2h12"/></svg>';

const IG_ICON = '<svg class="ig-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>';

// 把 ig 欄位轉成連結：完整網址直接用；只寫帳號（可含 @）就自動補成 IG 網址
function toIgUrl(ig) {
  if (!ig) return "";
  ig = ig.trim();
  if (/^https?:\/\//i.test(ig)) return ig;
  const handle = ig.replace(/^@/, "");
  return /^[\w.]+$/.test(handle) ? "https://www.instagram.com/" + handle + "/" : "";
}

// 取出一則作品的所有 Coser：coser / ig 可以寫一個，也可以用 [ ] 寫好幾個（依順序配對）
function getCosers(photo) {
  const names = Array.isArray(photo.coser) ? photo.coser : [photo.coser];
  const igs   = Array.isArray(photo.ig) ? photo.ig : [photo.ig];
  return names
    .map((name, i) => ({ name: (name || "").trim(), igUrl: toIgUrl(igs[i]) }))
    .filter((c) => c.name);
}

// 做出一個 Coser 標籤：有 IG 就是可以點的連結，沒有就是單純文字
function makeCoserTag(c, className) {
  const tag = document.createElement(c.igUrl ? "a" : "span");
  tag.className = className;
  tag.textContent = c.name;
  if (c.igUrl) {
    tag.href = c.igUrl;
    tag.target = "_blank";
    tag.rel = "noopener noreferrer";
    tag.title = "到 Instagram 看 " + c.name;
    if (className === "coser-tag") tag.insertAdjacentHTML("beforeend", IG_ICON);
    tag.addEventListener("click", (e) => e.stopPropagation());   // 點標籤不要打開大圖
    tag.addEventListener("keydown", (e) => e.stopPropagation());
  }
  return tag;
}

// 讀取陣列，自動產生相片牆
function renderGallery() {
  gallery.innerHTML = "";
  posts = cosplayPhotos.filter((p) => getImages(p).length > 0);
  posts.forEach((photo, index) => {
    const card = document.createElement("div");
    card.className = "photo-card";
    card.tabIndex = 0;

    const images = getImages(photo);
    const img = document.createElement("img");
    img.src = images[0];   // 第一張當封面
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

    // 這則有多張照片：右上角顯示「多張」小圖示和張數
    if (images.length > 1) {
      const badge = document.createElement("span");
      badge.className = "multi-badge";
      badge.innerHTML = MULTI_ICON + images.length;
      card.appendChild(badge);
    }

    // 有填 coser 才顯示左上角標籤；有填 ig 的話標籤可以點（多位 Coser 會各一個標籤）
    const cosers = getCosers(photo);
    if (cosers.length) {
      const tags = document.createElement("div");
      tags.className = "coser-tags";
      cosers.forEach((c) => tags.appendChild(makeCoserTag(c, "coser-tag")));
      card.appendChild(tags);
    }
    card.addEventListener("click", () => openLightbox(index));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openLightbox(index); }
    });
    gallery.appendChild(card);
    revealObserver.observe(card);
  });
}

// 照片捲動進畫面時淡入
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      revealObserver.unobserve(entry.target);
    }
  });
}, { rootMargin: "0px 0px -40px 0px" });

// 換到第 index 則作品的第 slide 張
function showPhoto(index, slide = 0) {
  const total = posts.length;
  currentIndex = (index + total) % total;   // 循環：最後一則的下一則回到第一則
  const photo = posts[currentIndex];
  const images = getImages(photo);
  currentSlide = slide < 0 ? images.length - 1 : Math.min(slide, images.length - 1);
  showSlide(images);
  lbImg.alt = photo.title;
  lbTitle.textContent = photo.title;
  lbCosers.innerHTML = "";
  getCosers(photo).forEach((c) => {
    const tag = makeCoserTag(c, "lb-coser");
    tag.textContent = "Coser · " + c.name;
    if (c.igUrl) tag.insertAdjacentHTML("beforeend", IG_ICON);
    lbCosers.appendChild(tag);
  });
  lbBy.textContent = "📷 " + (photo.photographer || "幽靈小攝影");
  lbCount.textContent = `第 ${currentIndex + 1} / ${total} 則`;
}

// 顯示這則作品目前那一張，並更新小圓點和左右小箭頭
function showSlide(images) {
  const src = images[currentSlide];
  lbImg.classList.add("fading");
  setTimeout(() => {
    lbImg.src = src;
    lbImg.onload = () => lbImg.classList.remove("fading");
    if (lbImg.complete) lbImg.classList.remove("fading");
  }, lightbox.classList.contains("open") ? 150 : 0);

  lbDots.innerHTML = "";
  if (images.length > 1) {
    images.forEach((_, i) => {
      const dot = document.createElement("span");
      dot.className = "lb-dot" + (i === currentSlide ? " active" : "");
      lbDots.appendChild(dot);
    });
  }
  lbSlidePrev.hidden = currentSlide === 0;
  lbSlideNext.hidden = currentSlide >= images.length - 1;
}

// 在同一則作品裡切換；滑到最後一張再往後，就跳到下一則
function changeSlide(step) {
  const images = getImages(posts[currentIndex]);
  const next = currentSlide + step;
  if (next < 0) return showPhoto(currentIndex - 1, -1);              // 上一則的最後一張
  if (next >= images.length) return showPhoto(currentIndex + 1, 0); // 下一則的第一張
  currentSlide = next;
  showSlide(images);
}

function openLightbox(index) {
  showPhoto(index);
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";  // 開啟時鎖住背景捲動
}

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.getElementById("lbClose").addEventListener("click", closeLightbox);
document.getElementById("lbPrev").addEventListener("click", (e) => { e.stopPropagation(); showPhoto(currentIndex - 1); });
document.getElementById("lbNext").addEventListener("click", (e) => { e.stopPropagation(); showPhoto(currentIndex + 1); });
lbSlidePrev.addEventListener("click", (e) => { e.stopPropagation(); changeSlide(-1); });
lbSlideNext.addEventListener("click", (e) => { e.stopPropagation(); changeSlide(1); });

// 點擊照片以外的黑色區域就關閉
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

// 鍵盤操作：← → 一張一張看（看完這則會接著下一則）、Esc 關閉
document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("open")) return;
  if (e.key === "ArrowLeft")  changeSlide(-1);
  if (e.key === "ArrowRight") changeSlide(1);
  if (e.key === "Escape")     closeLightbox();
});

// 手機左右滑動切換
let touchStartX = 0;
lightbox.addEventListener("touchstart", (e) => { touchStartX = e.changedTouches[0].clientX; }, { passive: true });
lightbox.addEventListener("touchend", (e) => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(dx) > 50) changeSlide(dx < 0 ? 1 : -1);
});

document.getElementById("year").textContent = new Date().getFullYear();
renderGallery();
