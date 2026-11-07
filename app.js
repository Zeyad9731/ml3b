
/*
=========================================================
ملعبنا — app.js
تعديل بيانات اللاعبين والحجوزات من هنا فقط.
=========================================================
*/

const PLAYERS = [
  { name: "عبدالملك الفرماوي", photo: "images/abdulmalik.jpeg",
     matches: 2, goals: 14, assists: 5, booking: 2 },
     { name: "ابراهيم ماجد", photo: "images/ibrahim-majed.jpg",
     matches: 2, goals: 10, assists: 5, booking: 0 },
  { name: "ادم محمود", photo: "images/adam.jpeg",
     matches: 2, goals: 6, assists: 3, booking: 0 },
  { name: "زياد اسماعيل", photo: "images/ism.jpeg",
     matches: 1, goals: 5, assists: 3, booking: 0 },
     { name: "احمد سابق", photo: "images/ahmed-s.jpeg",
     matches: 1, goals: 4, assists: 2, booking: 0 },
   { name: "مازن البربري", photo: "images/mazen.jpeg",
     matches: 1, goals: 2, assists: 4, booking: 0 },
    { name: "احمد حسام", photo: "images/medo.jpeg",
     matches: 2, goals: 5, assists: 0, booking: 0 },
     { name: "احمد صبحي", photo: "images/sobhy.jpeg",
     matches: 2, goals: 2, assists: 3, booking: 0 },
     { name: "محمد اسعد", photo: "images/mohd.jpeg",
     matches: 2, goals: 4, assists: 0, booking: 0 },
     { name: "محمد اسماعيل", photo: "images/esm.jpeg",
     matches: 2, goals: 2, assists: 2, booking: 0 },
     { name: "يوسف ابراهيم", photo: "images/youssef-i.jpeg",
     matches: 2, goals: 1, assists: 3, booking: 0 },
     { name: " يسين", photo: "images/yassin.jpg",
     matches: 1, goals: 1, assists: 2, booking: 0 },
  { name: "ادهم", photo: "images/adham.jpeg",
     matches: 1, goals: 0, assists: 2, booking: 0 },
  { name: "محمود المحمودي", photo: "images/mahmoud.jpeg",
     matches: 2, goals: 0, assists: 2, booking: 0 },
  { name: "عمار ياسر", photo: "images/3mar.jpeg",
    matches: 2, goals: 0, assists: 1, booking: 0 },
  { name: "عبدالرحمن عصام", photo: "images/3sam.jpeg",
     matches: 2, goals: 0, assists: 1, booking: 0 },
  { name: "محمد عباس", photo: "images/3bas.jpeg", 
    matches: 1, goals: 0, assists: 0, booking: 0 },
  { name: " تميم", photo: "images/tamem.jpeg",
     matches: 1, goals: 0, assists: 0, booking: 0 },
   { name: "محمد مصطفى", photo: "images/mostafa.jpeg",
     matches: 1, goals: 0, assists: 0, booking: 0 },
  { name: "محمد اكرامي", photo: "images/me.jpeg",
     matches: 0, goals: 0, assists: 0, booking: 0 },
  { name: "زياد البحيري", photo: "images/zezo.jpeg",
     matches: 0, goals: 0, assists: 0, booking: 0 },
  { name: "يحيى سالم", photo: "images/yahya.jpeg",
     matches: 0, goals: 0, assists: 0, booking: 0 },
  { name: "مالك مطر", photo: "images/malek-matar.jpg",
     matches: 0, goals: 0, assists: 0, booking: 0 },
  { name: "عمر وحيد", photo: "images/omar-whied.jpeg",
     matches: 0, goals: 0, assists: 0, booking: 0 },
  { name: "عمر وليد", photo: "images/omar-waleed.jpeg",
     matches: 0, goals: 0, assists: 0, booking: 0 },
  { name: "يوسف غانم", photo: "images/jojo.jpeg",
     matches: 0, goals: 0, assists: 0, booking: 0 },
  { name: "محمد طارق", photo: "images/mohamed-tarek.jpg", 
    matches: 0, goals: 0, assists: 0, booking: 0 },
  { name: "باسل وليد", photo: "images/basel.jpeg",
     matches: 0, goals: 0, assists: 0, booking: 0 }
];


const BOOKINGS = [
  {
    id: 1,
    date: "23/10/2026",
    venue: "Strikers hub",
    bestPlayer: "عبدالملك",
topScorer: "عبدالملك",
topAssists: "عبدالملك",
    slots: [
      { name: "عبدالملك الفرماوي", goals: 7, assists: 3, booking: 1 },
      { name: "ابراهيم ماجد", goals: 5, assists: 2, booking: 0 },
      { name: "ادم محمود", goals: 5, assists: 1, booking: 0 },
      { name: " يسين", goals: 1, assists: 2, booking: 0 },
      { name: "محمد اسماعيل ", goals: 1, assists: 2, booking: 0 },
      { name: "يوسف ابراهيم  ", goals: 1, assists: 2, booking: 0 },
      { name: "احمد صبحي", goals: 2, assists: 0, booking: 0 },
      { name: "ادهم", goals: 0, assists: 2, booking: 0 },
      { name: "محمود المحمودي", goals: 0, assists: 2, booking: 0 },
      { name: "محمد اسعد", goals: 1, assists: 0, booking: 0 },
      { name: " احمد حسام", goals: 1, assists: 0, booking: 0 },
      { name: "عمار ياسر ", goals: 0, assists: 1, booking: 0 },
      { name: "عبدالرحمن عصام", goals: 0, assists: 0, booking: 0 },
      { name: " محمد عباس", goals: 0, assists: 0, booking: 0 },
      { name: " تميم", goals: 0, assists: 0, booking: 0 }
    ]
  },
  {
    id: 2,
    date: "6/11/2026",
    venue: "Strikers hub",
    played: true,
    bestPlayer: "عبدالملك الفرماوي",
topScorer: "عبد الملك الفرماوي",
topAssists: "مازن البربري",
    slots: [
      { name: "عبدالملك الفرماوي", goals: 7, assists: 2,matches:6, booking: 1 },
      { name: "زياد اسماعيل", goals: 5, assists: 3,matches:6, booking: 0 },
      { name: "ابراهيم ماجد", goals: 5, assists: 3,matches:5, booking: 0 },
      { name: "احمد سابق", goals: 4, assists: 2,matches:5, booking: 0 },
      { name: " مازن البربري", goals: 2, assists: 4,matches:6, booking: 0 },
      { name: "احمد حسام", goals: 4, assists: 0,matches:6, booking: 0 },
       { name: "محمد اسعد", goals: 3, assists: 0,matches:6, booking: 0 },
       { name: "ادم محمود", goals: 1, assists: 2,matches:5, booking: 0 },
      { name: "احمد صبحي", goals: 0, assists: 3, matches:6,booking: 0 },
      { name: "محمد اسماعيل ", goals: 1, assists: 0,matches:5, booking: 0 },
      { name: "يوسف ابراهيم  ", goals: 0, assists: 1,matches:5, booking: 0 },
      { name: "عبدالرحمن عصام", goals: 0, assists: 1, matches:6, booking: 0 },
      { name: "عمار ياسر ", goals: 0, assists: 0,matches:6, booking: 0 },
      { name: "محمد مصطفى", goals: 0, assists: 0,matches:0, booking: 0 },
      { name: "محمود المحمودي", goals: 0, assists: 0,matches:6,  booking: 0 },
      
     
      
      
    ]
  }
];

// ========================================
// التنقل بين صفحات الموقع
// ========================================

let currentPage = "home";
const pageHistory = [];

function goBackPage() {
  const previous = pageHistory.pop() || "home";
  showPage(previous, true);
}

function showPage(page, fromBack = false) {
  if (!fromBack && page !== currentPage) {
    pageHistory.push(currentPage);
  }

  currentPage = page;

  document.querySelectorAll(".page").forEach(el => {
    el.classList.remove("active");
  });

  const targetPage = document.getElementById(page + "Page");
  if (targetPage) targetPage.classList.add("active");

  document.querySelectorAll(".nav-item").forEach(el => {
    el.classList.toggle("active", el.dataset.page === page);
  });

  const crumb = document.getElementById("crumbTitle");
  if (crumb) {
    crumb.textContent = ({
      home: "الرئيسية",
      players: "اللاعبون",
      bookings: "إحصائيات الحجوزات"
    })[page] || "";
  }

  if (page === "players") renderPlayers();
  if (page === "bookings") renderBooking();

  document.querySelectorAll(".page-back").forEach(button => button.remove());

  if (page !== "home") {
    const activeHead = document.querySelector(`#${page}Page .page-head`);

    if (activeHead) {
      const back = document.createElement("button");
      back.className = "page-back";
      back.type = "button";
      back.innerHTML = '<span aria-hidden="true">→</span> رجوع';
      back.onclick = goBackPage;
      activeHead.prepend(back);
    }
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ========================================
// أدوات مساعدة
// ========================================

function esc(value) {
  return String(value ?? "").replace(/[&<>"']/g, c => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[c]);
}

function normalizePlayerName(name) {
  return String(name || "").trim().replace(/\s+/g, " ");
}

function avatarHTML(player, extraClass = "") {
  const name = (player.name || "?").trim();
  const firstLetter = name.charAt(0) || "?";

  if (!player.photo) {
    return `<span class="avatar ${extraClass}">${esc(firstLetter)}</span>`;
  }

  return `
    <img
      class="avatar ${extraClass}"
      src="${esc(player.photo)}"
      alt="${esc(name)}"
      onerror="this.style.display='none'; this.insertAdjacentHTML('afterend', '<span class=&quot;avatar ${extraClass}&quot;>${firstLetter}</span>')"
    >
  `;
}

function leaders() {
  return {
    goals: Math.max(0, ...PLAYERS.map(p => Number(p.goals) || 0)),
    assists: Math.max(0, ...PLAYERS.map(p => Number(p.assists) || 0))
  };
}

// ========================================
// صفحة اللاعبين
// ========================================

function renderPlayers() {
  const q = (
    document.getElementById("playerSearch")?.value || ""
  ).trim().toLowerCase();

  const max = leaders();

  const rows = PLAYERS
    .map((p, i) => ({ p, i }))
    .filter(x => normalizePlayerName(x.p.name).toLowerCase().includes(q));

  const shownCount = document.getElementById("shownCount");
  if (shownCount) shownCount.textContent = rows.length;

  const playersBody = document.getElementById("playersBody");
  if (!playersBody) return;

  playersBody.innerHTML = rows.map(({ p, i }) => {
    const isScorer = Number(p.goals) === max.goals && max.goals > 0;
    const isCreator = Number(p.assists) === max.assists && max.assists > 0;

    const rate = Number(p.matches) > 0
      ? Math.min(100, Number(p.goals) / Number(p.matches) * 100)
      : 0;

    return `
      <tr>
        <td class="rank-col">${String(i + 1).padStart(2, "0")}</td>

        <td>
          <div
            class="player-cell"
            data-player-name="${esc(normalizePlayerName(p.name))}"
            onclick="openPlayerCard(this.dataset.playerName)"
            style="cursor:pointer"
          >
            ${avatarHTML(p)}
            <div>
              <div class="player-name">${esc(normalizePlayerName(p.name))}</div>
              <div class="player-badges">
                ${isScorer ? '<span class="badge gold">♛ الأكثر تسجيلاً</span>' : ""}
                ${isCreator ? '<span class="badge blue">✦ الأكثر صناعة</span>' : ""}
              </div>
            </div>
          </div>
        </td>

        <td class="num-cell">${Number(p.matches) || 0}</td>
        <td class="num-cell goal">${Number(p.goals) || 0}</td>
        <td class="num-cell assist">${Number(p.assists) || 0}</td>
        <td class="num-cell">${Number(p.booking) || 0}</td>

        <td>
          <span class="rate-track">
            <span style="width:${rate}%"></span>
          </span>
          <span style="color:#9cac9f;font:10px Arial">
            ${p.matches ? (Number(p.goals) / Number(p.matches)).toFixed(1) : "0.0"}
          </span>
        </td>
      </tr>
    `;
  }).join("");
}

// ========================================
// الصفحة الرئيسية
// ========================================

function renderHome() {
  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  };

  setText("homePlayers", PLAYERS.length);
  setText("sideCount", PLAYERS.length);

  setText(
    "homeGoals",
    PLAYERS.reduce((sum, p) => sum + (Number(p.goals) || 0), 0)
  );

  setText(
    "homeAssists",
    PLAYERS.reduce((sum, p) => sum + (Number(p.assists) || 0), 0)
  );

  setText("homeBookings", BOOKINGS.length);

  const maxGoals = leaders().goals;
  const top = PLAYERS.find(
    p => maxGoals > 0 && Number(p.goals) === maxGoals
  );

  const topScorerHome = document.getElementById("topScorerHome");
  if (!topScorerHome) return;

  topScorerHome.innerHTML = top
    ? `
      ${avatarHTML(top, "large")}
      <div>
        <b>${esc(normalizePlayerName(top.name))}</b>
        <small>متصدر قائمة الهدافين</small>
      </div>
      <span class="goal-chip">${Number(top.goals) || 0} ⚽</span>
    `
    : `
      <span class="avatar large">?</span>
      <div>
        <b>لسه المنافسة مفتوحة</b>
        <small>أول جون هيبدأ الحكاية</small>
      </div>
      <span class="goal-chip">0 ⚽</span>
    `;
}

// ========================================
// التنقل بين الحجوزات
// ========================================

let currentBooking = 0;

function moveBooking(direction) {
  const next = currentBooking + direction;

  if (next < 0 || next >= BOOKINGS.length) return;

  currentBooking = next;
  renderBooking();
}

// ========================================
// عرض إحصائيات الحجز
// ========================================


function renderBooking() {
  if (!BOOKINGS.length) return;

  currentBooking = Math.max(
    0,
    Math.min(currentBooking, BOOKINGS.length - 1)
  );

  const b = BOOKINGS[currentBooking];
  const awardWinners = document.querySelectorAll(".award-winner");

if (awardWinners.length >= 3) {
  awardWinners[0].textContent = b.bestPlayer || "لم يُحدد بعد";
  awardWinners[1].textContent = b.topScorer || "لم يُحدد بعد";
  awardWinners[2].textContent = b.topAssists || "لم يُحدد بعد";
}
  const isSecondBooking = b.id === 2;

  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  };

  setText(
    "bookingTitle",
    "الحجز رقم " + String(b.id).padStart(2, "0")
  );

  setText(
    "bookingSubtitle",
    `${b.date || "التاريخ غير محدد"} • ${b.venue || "الملعب غير محدد"}`
  );

  const counter = document.getElementById("bookingCounter");
  if (counter) {
    counter.innerHTML =
      String(currentBooking + 1).padStart(2, "0") +
      ` <span>/ ${String(BOOKINGS.length).padStart(2, "0")}</span>`;
  }

  // تغيير اسم العمود الأخير
  const bookingBody = document.getElementById("bookingBody");
  const table = bookingBody?.closest("table");
  const lastHeader = table?.querySelector("thead tr")?.lastElementChild;

  if (lastHeader) {
    lastHeader.textContent = isSecondBooking ? "ماتشات" : "لاعب الحجز";
  }

  // الحجز الثاني لم يُلعب بعد
  if (b.played === false) {
    setText("bookingPlayers", "0");
    setText("bookingGoals", "0");
    setText("bookingAssists", "0");
    setText("bookingSpecial", "لم يُحدد بعد");

    // تغيير بطاقات الجوائز الثلاثة
    // تحديث أسماء الفائزين في الجوائز الثلاثة
const awardWinners = document.querySelectorAll(".award-winner");

if (awardWinners.length >= 3) {
  awardWinners[0].textContent = b.bestPlayer || "لم يُحدد بعد";
  awardWinners[1].textContent = b.topScorer || "لم يُحدد بعد";
  awardWinners[2].textContent = b.topAssists || "لم يُحدد بعد";
}

    if (bookingBody) {
      bookingBody.innerHTML = `
        <tr>
          <td colspan="5" style="text-align:center;padding:35px 10px">
            <div style="font-size:30px;margin-bottom:12px">⚽</div>
            <b>هذا الحجز لم يُلعب بعد</b>
          </td>
        </tr>
      `;
    }
    return;
  }

  const slots = Array.from(
    { length: 15 },
    (_, i) => b.slots?.[i] || {
      name: "",
      goals: 0,
      assists: 0,
      booking: 0,
      matches: 0
    }
  );

  const filled = slots.filter(s => s.name?.trim()).length;

  setText("bookingPlayers", filled);

  setText(
    "bookingGoals",
    slots.reduce((s, p) => s + (Number(p.goals) || 0), 0)
  );

  setText(
    "bookingAssists",
    slots.reduce((s, p) => s + (Number(p.assists) || 0), 0)
  );

  const special = slots
    .filter(s => Number(s.booking) > 0 && s.name)
    .sort((a, b) => Number(b.booking) - Number(a.booking))[0];

  setText("bookingSpecial", special?.name?.trim() || "—");

  if (!bookingBody) return;
bookingBody.innerHTML = slots.map((s, i) => {
  const player = PLAYERS.find(
    p => normalizePlayerName(p.name) === normalizePlayerName(s.name || "")
  );

  return `
    <tr>
      <td class="rank-col">${String(i + 1).padStart(2, "0")}</td>

      <td>
        ${
          s.name
            ? `
              <div
                class="player-cell"
                data-player-name="${esc(normalizePlayerName(s.name))}"
                onclick="openPlayerCard(this.dataset.playerName)"
                style="cursor:pointer"
              >
                ${avatarHTML(player || { name: s.name })}
                <div class="player-name">
                  ${esc(normalizePlayerName(s.name))}
                </div>
              </div>
            `
            : `<span class="booking-empty">— خانة فارغة —</span>`
        }
      </td>

      <td class="num-cell goal">${Number(s.goals) || 0}</td>
      <td class="num-cell assist">${Number(s.assists) || 0}</td>

      <td class="num-cell">
        ${isSecondBooking
          ? (Number(s.matches) || 0)
          : (Number(s.booking) || 0)}
      </td>
    </tr>
  `;
}).join("");
}

// ========================================
// بطاقة اللاعب
// ========================================

function openPlayerCard(playerName) {
  const normalizedName = normalizePlayerName(playerName);

  const player = PLAYERS.find(
    p => normalizePlayerName(p.name) === normalizedName
  );

  if (!player) return;

  const playerBookings = BOOKINGS.map(booking => {
    const slot = (booking.slots || []).find(
      s => normalizePlayerName(s.name) === normalizedName
    );

    return slot ? { booking, slot } : null;
  }).filter(Boolean);

  let bestPlayerWins = 0;
  let topScorerWins = 0;
  let topAssistWins = 0;

  BOOKINGS.forEach(booking => {
    const slots = (booking.slots || []).filter(s => s.name?.trim());

    const mySlot = slots.find(
      s => normalizePlayerName(s.name) === normalizedName
    );

    if (!mySlot) return;

    if (Number(mySlot.booking) > 0) {
      bestPlayerWins++;
    }

    const maxGoals = Math.max(
      0,
      ...slots.map(s => Number(s.goals) || 0)
    );

    const maxAssists = Math.max(
      0,
      ...slots.map(s => Number(s.assists) || 0)
    );

    if (maxGoals > 0 && Number(mySlot.goals) === maxGoals) {
      topScorerWins++;
    }

    if (maxAssists > 0 && Number(mySlot.assists) === maxAssists) {
      topAssistWins++;
    }
  });

  const totalAwards =
    bestPlayerWins + topScorerWins + topAssistWins;

  const rank = PLAYERS.findIndex(
  p => normalizePlayerName(p.name) === normalizedName
) + 1;

  // البيانات الأساسية
  document.getElementById("profileName").textContent =
    normalizePlayerName(player.name);

  const photo = document.getElementById("profilePhoto");
  photo.src = player.photo || "";
  photo.alt = normalizePlayerName(player.name);

  document.getElementById("profileGoals").textContent =
    Number(player.goals) || 0;

  document.getElementById("profileAssists").textContent =
    Number(player.assists) || 0;

  document.getElementById("profileAwards").textContent =
    totalAwards;

  document.getElementById("profileRank").textContent =
    `المركز ${rank}`;

  // إحصائيات الحجوزات
  document.getElementById("profileBookings").innerHTML =
    playerBookings.length
      ? playerBookings.map(({ booking, slot }) => `
          <div class="profile-row">
            <span>الحجز رقم ${String(booking.id).padStart(2, "0")}</span>
            <b>
              ${Number(slot.goals) || 0} أهداف ·
              ${Number(slot.assists) || 0} أسيست
            </b>
          </div>
        `).join("")
      : `<div class="profile-row">لم يشارك في حجوزات حتى الآن</div>`;

  // الإنجازات
  document.getElementById("profileAchievements").innerHTML = `
    <div class="profile-row">
      <span>أفضل لاعب</span>
      <b>${bestPlayerWins}</b>
    </div>

    <div class="profile-row">
      <span>هداف الحجز</span>
      <b>${topScorerWins}</b>
    </div>

    <div class="profile-row">
      <span>الأكثر صناعة</span>
      <b>${topAssistWins}</b>
    </div>
  `;

  // المعلومات
  document.getElementById("profileInfo").innerHTML = `
    <div class="profile-row">
      <span>عدد الحجوزات</span>
      <b>${Number(player.matches) || 0}</b>
    </div>

    <div class="profile-row">
      <span>إجمالي المساهمات</span>
      <b>
        ${(Number(player.goals) || 0) + (Number(player.assists) || 0)}
      </b>
    </div>
  `;

  const bookingDetails = document.querySelector(".booking-details");
  if (bookingDetails) bookingDetails.open = false;

  document.getElementById("playerModal").hidden = false;
}

function closePlayerCard() {
  const modal = document.getElementById("playerModal");
  if (modal) modal.hidden = true;
}

// إغلاق البطاقة عند الضغط على الخلفية
document.addEventListener("click", function(event) {
  const modal = document.getElementById("playerModal");

  if (modal && event.target === modal) {
    closePlayerCard();
  }
});

// ========================================
// تشغيل الموقع
// ========================================

renderHome();
renderPlayers();
renderBooking();

// تحديث قائمة اللاعبين عند البحث
const playerSearch = document.getElementById("playerSearch");

if (playerSearch) {
  playerSearch.addEventListener("input", renderPlayers);
}
