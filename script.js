// // ─── NAVBAR SCROLL ───
// window.addEventListener("scroll", () => {
//   document
//     .getElementById("navbar")
//     .classList.toggle("scrolled", window.scrollY > 60);
// });

// // ─── HAMBURGER MENU ───
// document.getElementById("hamburger").addEventListener("click", () => {
//   document.getElementById("mobileMenu").classList.add("open");
// });
// document.getElementById("mobileClose").addEventListener("click", closeMobile);
// function closeMobile() {
//   document.getElementById("mobileMenu").classList.remove("open");
// }

// // ─── SCROLL REVEAL ───
// const revealEls = document.querySelectorAll(".reveal");
// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((e) => {
//       if (e.isIntersecting) {
//         e.target.classList.add("visible");
//         observer.unobserve(e.target);
//       }
//     });
//   },
//   { threshold: 0.12 },
// );
// revealEls.forEach((el) => observer.observe(el));

// // ─── WHATSAPP FORM ───
// function sendWhatsApp() {
//   const name =
//     document.querySelector('input[placeholder="Full name"]').value || "Guest";
//   const phone =
//     document.querySelector('input[placeholder="+91 XXXXX XXXXX"]').value ||
//     "Not provided";
//   const checkin =
//     document.querySelectorAll('input[type="date"]')[0].value || "TBD";
//   const checkout =
//     document.querySelectorAll('input[type="date"]')[1].value || "TBD";
//   const room = document.querySelector("select").value || "Any available";
//   const msg = document.querySelector("textarea").value || "";

//   const text = `Namaste Dippak ji! 🙏\n\nI would like to enquire about Cool Pahadi Homestay.\n\n👤 Name: ${name}\n📞 Phone: ${phone}\n📅 Check-In: ${checkin}\n📅 Check-Out: ${checkout}\n🏡 Room: ${room}\n💬 Message: ${msg}\n\nThank you!`;

//   window.open(
//     "https://wa.me/918755812267?text=" + encodeURIComponent(text),
//     "_blank",
//   );
// }


// ════════════════════════════════════════════════
// NAVBAR SCROLL
// ════════════════════════════════════════════════
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
});
 
// ════════════════════════════════════════════════
// HAMBURGER MENU
// ════════════════════════════════════════════════
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('mobileMenu').classList.add('open');
});
document.getElementById('mobileClose').addEventListener('click', closeMobile);
function closeMobile() {
  document.getElementById('mobileMenu').classList.remove('open');
}
 
// ════════════════════════════════════════════════
// SCROLL REVEAL
// ════════════════════════════════════════════════
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => observer.observe(el));
 
// ════════════════════════════════════════════════
// WHATSAPP CONTACT FORM
// ════════════════════════════════════════════════
function sendWhatsApp() {
  const name    = document.querySelector('input[placeholder="Full name"]').value || 'Guest';
  const phone   = document.querySelector('input[placeholder="+91 XXXXX XXXXX"]').value || 'Not provided';
  const checkin = document.querySelectorAll('input[type="date"]')[0].value || 'TBD';
  const checkout= document.querySelectorAll('input[type="date"]')[1].value || 'TBD';
  const room    = document.querySelector('select').value || 'Any available';
  const msg     = document.querySelector('textarea').value || '';
  const text = `Namaste Dippak ji! 🙏\n\nI would like to enquire about Cool Pahadi Homestay.\n\n👤 Name: ${name}\n📞 Phone: ${phone}\n📅 Check-In: ${checkin}\n📅 Check-Out: ${checkout}\n🏡 Room: ${room}\n💬 Message: ${msg}\n\nThank you!`;
  window.open('https://wa.me/919999999999?text=' + encodeURIComponent(text), '_blank');
}
 
// ════════════════════════════════════════════════
// REVIEW ENGINE
// ════════════════════════════════════════════════
 
// ── Avatar colour palette ──
const AVATAR_COLORS = [
  '#c8832a','#3d5c2e','#6ba3be','#a0522d',
  '#7a9a5b','#b06040','#4a7a8a','#8a6030',
  '#5a7a3a','#7a5090','#3a7a6a','#9a4050'
];
 
// ── Storage key ──
const STORAGE_KEY = 'coolpahadi_reviews_v1';
 
// ── Seed reviews (shown before any user reviews) ──
const SEED_REVIEWS = [
  {
    id: 'seed1',
    name: 'Priya Sharma',
    city: 'New Delhi',
    room: 'Auli Suite',
    rating: 5,
    tags: ['Views','Food','Hospitality'],
    text: 'Staying at Cool Pahadi was a life-changing experience. The panoramic Himalayan view from the Auli Suite left me speechless every single morning. Dippak bhai\'s warmth and the delicious Pahadi food made it feel like home. I will be back every year!',
    date: '2025-03-12',
    helpful: 14,
    likedBy: []
  },
  {
    id: 'seed2',
    name: 'Rahul & Sneha Mehta',
    city: 'Mumbai',
    room: 'Kedarnath Kothri',
    rating: 5,
    tags: ['Room Decor','Peaceful','Food'],
    text: 'The Kedarnath Kothri was like stepping into a completely different era — Garhwali folk art on the walls, brass lamps, handwoven blankets. The Gahat ki dal and mandua rotis were the most authentic Uttarakhand food we have ever tasted. Absolutely magical.',
    date: '2025-02-20',
    helpful: 11,
    likedBy: []
  },
  {
    id: 'seed3',
    name: 'Arjun Nair',
    city: 'Bengaluru',
    room: 'Munsiyari Loft',
    rating: 5,
    tags: ['Trekking','Bonfire','Views'],
    text: 'We arranged a full-day trek through Dippak bhai and it was simply phenomenal. The local guide knew every bird, every trail, every wildflower. The bonfire that night under a sky full of stars — I have no words. This place is pure soul medicine.',
    date: '2025-01-08',
    helpful: 9,
    likedBy: []
  }
];
 
// ── Load reviews from localStorage (merge with seeds) ──
function loadReviews() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    const userReviews = stored ? JSON.parse(stored) : [];
    return [...userReviews, ...SEED_REVIEWS];
  } catch(e) {
    return [...SEED_REVIEWS];
  }
}
 
// ── Save only user-submitted reviews to localStorage ──
function saveUserReviews(all) {
  try {
    const userOnly = all.filter(r => !r.id.startsWith('seed'));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userOnly));
  } catch(e) {}
}
 
// ── State ──
let allReviews = loadReviews();
let currentSort = 'newest';
 
// ── Helpers ──
function starsHTML(n) {
  return '★'.repeat(n) + '☆'.repeat(5 - n);
}
 
function avatarColor(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
}
 
function avatarInitials(name) {
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
  return name.slice(0, 2).toUpperCase();
}
 
function formatDate(dateStr) {
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
  } catch(e) { return dateStr; }
}
 
function sortedReviews(reviews, mode) {
  const copy = [...reviews];
  if (mode === 'newest')  return copy.sort((a, b) => new Date(b.date) - new Date(a.date));
  if (mode === 'highest') return copy.sort((a, b) => b.rating - a.rating);
  if (mode === 'helpful') return copy.sort((a, b) => (b.helpful||0) - (a.helpful||0));
  return copy;
}
 
// ── Render the full reviews panel ──
function renderReviews() {
  const list = document.getElementById('reviews-list');
  if (!list) return;
 
  const sorted = sortedReviews(allReviews, currentSort);
 
  if (sorted.length === 0) {
    list.innerHTML = `<div class="no-reviews">
      <span class="no-rv-emoji">🌿</span>
      <p>No reviews yet — be the first to share your Cool Pahadi story!<br>Your words will inspire the next traveller.</p>
    </div>`;
    updateSummary([]);
    return;
  }
 
  list.innerHTML = sorted.map((r, idx) => {
    const color = avatarColor(r.name);
    const initials = avatarInitials(r.name);
    const tagsHTML = (r.tags || []).map(t => `<span class="rv-tag">${t}</span>`).join('');
    const isNew = idx === 0 && !r.id.startsWith('seed') && (Date.now() - new Date(r.date).getTime() < 60000);
    return `
    <div class="rv-card${isNew ? ' new-card' : ''}" id="rv-${r.id}">
      <div class="rv-top">
        <div class="rv-author">
          <div class="rv-avatar" style="background:${color}">${initials}</div>
          <div class="rv-name">
            <strong>${escapeHTML(r.name)}</strong>
            <div class="rv-meta">
              ${r.city ? `<span>📍 ${escapeHTML(r.city)}</span>` : ''}
              ${r.room ? `<span>🏡 ${escapeHTML(r.room)}</span>` : ''}
            </div>
          </div>
        </div>
        <div class="rv-stars">${starsHTML(r.rating)}</div>
      </div>
      ${tagsHTML ? `<div class="rv-tags">${tagsHTML}</div>` : ''}
      <p class="rv-review-text">${escapeHTML(r.text)}</p>
      <button class="rv-helpful${(r.likedBy||[]).includes('me') ? ' liked' : ''}"
              onclick="markHelpful('${r.id}', this)">
        👍 Helpful ${r.helpful > 0 ? `(${r.helpful})` : ''}
      </button>
      <div class="rv-date">Posted on ${formatDate(r.date)}</div>
    </div>`;
  }).join('');
 
  updateSummary(allReviews);
}
 
// ── Update average score + bar chart ──
function updateSummary(reviews) {
  const avgNum  = document.getElementById('avg-num');
  const avgStar = document.getElementById('avg-stars-disp');
  const avgCnt  = document.getElementById('avg-count-disp');
  if (!avgNum) return;
 
  if (reviews.length === 0) {
    avgNum.textContent  = '—';
    avgStar.textContent = '☆☆☆☆☆';
    avgCnt.textContent  = 'No reviews yet';
    [1,2,3,4,5].forEach(n => {
      document.getElementById('bar'+n).style.width = '0%';
      document.getElementById('cnt'+n).textContent = '0';
    });
    return;
  }
 
  const total = reviews.reduce((s, r) => s + r.rating, 0);
  const avg   = (total / reviews.length).toFixed(1);
  avgNum.textContent  = avg;
  avgStar.textContent = starsHTML(Math.round(avg));
  avgCnt.textContent  = `${reviews.length} review${reviews.length > 1 ? 's' : ''}`;
 
  const counts = {1:0, 2:0, 3:0, 4:0, 5:0};
  reviews.forEach(r => counts[r.rating] = (counts[r.rating]||0) + 1);
  const max = Math.max(...Object.values(counts), 1);
  [1,2,3,4,5].forEach(n => {
    document.getElementById('bar'+n).style.width = ((counts[n]/max)*100) + '%';
    document.getElementById('cnt'+n).textContent = counts[n];
  });
}
 
// ── Helpful button toggle ──
function markHelpful(id, btn) {
  const review = allReviews.find(r => r.id === id);
  if (!review) return;
  if (!review.likedBy) review.likedBy = [];
 
  if (review.likedBy.includes('me')) {
    review.likedBy = review.likedBy.filter(x => x !== 'me');
    review.helpful = Math.max(0, (review.helpful||0) - 1);
    btn.classList.remove('liked');
  } else {
    review.likedBy.push('me');
    review.helpful = (review.helpful||0) + 1;
    btn.classList.add('liked');
  }
  btn.innerHTML = `👍 Helpful${review.helpful > 0 ? ` (${review.helpful})` : ''}`;
  saveUserReviews(allReviews);
}
 
// ── Sort handler ──
function sortReviews(mode, btn) {
  currentSort = mode;
  document.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderReviews();
}
 
// ── XSS-safe escape ──
function escapeHTML(str) {
  return String(str)
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;')
    .replace(/'/g,'&#39;');
}
 
// ── Post a new review ──
function postReview() {
  const nameVal   = document.getElementById('rv-name').value.trim();
  const cityVal   = document.getElementById('rv-city').value.trim();
  const roomVal   = document.getElementById('rv-room').value;
  const textVal   = document.getElementById('rv-text').value.trim();
  const ratingEl  = document.querySelector('input[name="rating"]:checked');
 
  // Validation
  if (!nameVal) { shakeField('rv-name', 'Please enter your name'); return; }
  if (!ratingEl) { shakeField('rv-stars', 'Please select a rating'); return; }
  if (!textVal || textVal.length < 20) { shakeField('rv-text', 'Please write at least 20 characters'); return; }
 
  const rating = parseInt(ratingEl.value);
  const tags   = [...document.querySelectorAll('.tag-chip:checked')].map(el => el.value);
 
  const newReview = {
    id: 'user_' + Date.now(),
    name:   nameVal,
    city:   cityVal,
    room:   roomVal,
    rating: rating,
    tags:   tags,
    text:   textVal,
    date:   new Date().toISOString().split('T')[0],
    helpful: 0,
    likedBy: []
  };
 
  // Prepend to allReviews
  allReviews.unshift(newReview);
  saveUserReviews(allReviews);
 
  // Reset to "newest" sort and re-render
  currentSort = 'newest';
  document.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.sort-btn')[0].classList.add('active');
  renderReviews();
 
  // Scroll to newly added card
  setTimeout(() => {
    const newCard = document.getElementById('rv-' + newReview.id);
    if (newCard) newCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 200);
 
  // Reset form
  document.getElementById('rv-name').value = '';
  document.getElementById('rv-city').value = '';
  document.getElementById('rv-room').value = '';
  document.getElementById('rv-text').value = '';
  document.querySelectorAll('input[name="rating"]').forEach(r => r.checked = false);
  document.querySelectorAll('.tag-chip').forEach(c => c.checked = false);
 
  // Success message
  const successEl = document.getElementById('rv-success');
  successEl.style.display = 'block';
  setTimeout(() => { successEl.style.display = 'none'; }, 5000);
}
 
// ── Shake validation helper ──
function shakeField(id, msg) {
  const el = document.getElementById(id);
  if (!el) return;
  el.style.outline = '2px solid #e05555';
  el.style.animation = 'none';
  el.offsetHeight; // reflow
  el.style.animation = 'shakeField 0.4s ease';
  setTimeout(() => { el.style.outline = ''; el.style.animation = ''; }, 1500);
  // Also scroll to it
  el.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
 
// Inject shake keyframe
const shakeStyle = document.createElement('style');
shakeStyle.textContent = `@keyframes shakeField {
  0%,100%{transform:translateX(0)}
  20%,60%{transform:translateX(-6px)}
  40%,80%{transform:translateX(6px)}
}`;
document.head.appendChild(shakeStyle);
 
// ── Init on load ──
document.addEventListener('DOMContentLoaded', () => {
  renderReviews();
});
// Also render immediately if DOM already ready
if (document.readyState !== 'loading') {
  renderReviews();
}