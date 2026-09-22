/* =========================================================
   GODS OF ALLIANCE — GLOBAL SITE SYSTEM
   Shared navigation + global background atmosphere
   ========================================================= */

(function () {
  "use strict";

  /* =========================
     GLOBAL STYLES
     ========================= */

  const style = document.createElement("style");

  style.textContent = `
    :root {
      --goa-gold: #e9a923;
      --goa-black: #070707;
      --goa-panel: rgba(12, 12, 12, 0.97);
      --goa-border: rgba(233, 169, 35, 0.20);
    }

    body {
      background:
        radial-gradient(
          circle at 15% 12%,
          rgba(120, 20, 32, 0.11) 0%,
          rgba(70, 10, 22, 0.045) 24%,
          transparent 48%
        ),
        radial-gradient(
          circle at 88% 35%,
          rgba(233, 169, 35, 0.065) 0%,
          rgba(120, 70, 10, 0.025) 25%,
          transparent 48%
        ),
        radial-gradient(
          circle at 48% 88%,
          rgba(95, 15, 30, 0.055) 0%,
          transparent 42%
        ),
        #070707 !important;

      background-attachment: fixed !important;
    }

    .goa-global-menu-button {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      border: 1px solid rgba(233,169,35,.55);
      background: rgba(10,10,10,.92);
      color: #ffffff;
      cursor: pointer;

      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 19px;
      line-height: 1;

      transition:
        border-color .2s ease,
        background .2s ease,
        transform .2s ease,
        color .2s ease;

      position: fixed;
      top: 17px;
      right: 22px;
      z-index: 10001;

      box-shadow:
        0 8px 30px rgba(0,0,0,.32),
        0 0 20px rgba(233,169,35,.04);
    }

    .goa-global-menu-button:hover {
      border-color: var(--goa-gold);
      color: var(--goa-gold);
      background: rgba(20,16,9,.98);
      transform: scale(1.04);
    }

    .goa-global-overlay {
      position: fixed;
      inset: 0;
      z-index: 9998;

      background: rgba(0,0,0,.68);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);

      opacity: 0;
      visibility: hidden;

      transition:
        opacity .22s ease,
        visibility .22s ease;
    }

    .goa-global-overlay.open {
      opacity: 1;
      visibility: visible;
    }

    .goa-global-panel {
      position: fixed;
      top: 0;
      right: 0;

      width: min(390px, 90vw);
      height: 100vh;

      z-index: 10000;

      background:
        radial-gradient(
          circle at 100% 0%,
          rgba(233,169,35,.08),
          transparent 32%
        ),
        radial-gradient(
          circle at 0% 75%,
          rgba(120,20,32,.10),
          transparent 40%
        ),
        rgba(8,8,8,.985);

      border-left: 1px solid rgba(233,169,35,.18);

      box-shadow: -25px 0 60px rgba(0,0,0,.55);

      transform: translateX(102%);
      transition: transform .26s ease;

      overflow-y: auto;
    }

    .goa-global-panel.open {
      transform: translateX(0);
    }

    .goa-global-panel-inner {
      padding: 92px 28px 36px;
    }

    .goa-global-eyebrow {
      color: var(--goa-gold);
      font-size: 11px;
      letter-spacing: .22em;
      font-weight: 800;
      margin-bottom: 10px;
    }

    .goa-global-title {
      color: #ffffff;
      font-size: 28px;
      font-weight: 900;
      letter-spacing: -.02em;
      margin-bottom: 8px;
    }

    .goa-global-title span {
      color: var(--goa-gold);
    }

    .goa-global-subtitle {
      color: #8f8f8f;
      font-size: 13px;
      line-height: 1.6;
      margin-bottom: 30px;
      padding-bottom: 25px;
      border-bottom: 1px solid rgba(255,255,255,.07);
    }

    .goa-global-links {
      display: flex;
      flex-direction: column;
      gap: 7px;
    }

    .goa-global-links a {
      display: flex;
      align-items: center;
      justify-content: space-between;

      min-height: 52px;
      padding: 0 17px;

      text-decoration: none;

      color: #f2f2f2;
      background: rgba(255,255,255,.025);

      border: 1px solid rgba(255,255,255,.065);
      border-radius: 9px;

      font-size: 13px;
      font-weight: 800;
      letter-spacing: .055em;

      transition:
        border-color .18s ease,
        background .18s ease,
        color .18s ease,
        transform .18s ease;
    }

    .goa-global-links a::after {
      content: "→";
      color: var(--goa-gold);
      font-size: 17px;
      transition: transform .18s ease;
    }

    .goa-global-links a:hover {
      color: #ffffff;
      border-color: rgba(233,169,35,.45);
      background: rgba(233,169,35,.055);
      transform: translateX(-2px);
    }

    .goa-global-links a:hover::after {
      transform: translateX(3px);
    }

    .goa-global-links a.active {
      border-color: rgba(233,169,35,.55);
      background: rgba(233,169,35,.08);
      color: var(--goa-gold);
    }

    .goa-global-home {
      margin-bottom: 16px !important;
    }

    .goa-global-home a {
      border-color: rgba(233,169,35,.20);
    }

    .goa-global-footer {
      margin-top: 28px;
      padding-top: 20px;
      border-top: 1px solid rgba(255,255,255,.07);

      color: #606060;
      font-size: 11px;
      line-height: 1.7;
    }

    body.goa-menu-open {
      overflow: hidden;
    }

    @media (max-width: 700px) {
      .goa-global-menu-button {
        width: 40px;
        height: 40px;
        top: 15px;
        right: 15px;
      }

      .goa-global-panel-inner {
        padding:
          82px
          20px
          30px;
      }

      .goa-global-title {
        font-size: 24px;
      }

      .goa-global-links a {
        min-height: 50px;
      }
    }
  `;

  document.head.appendChild(style);


  /* =========================
     NAVIGATION DATABASE
     Change menu items HERE.
     ========================= */

  const navigation = [
    {
      label: "HERO GUIDES",
      href: "heroes.html"
    },
    {
      label: "HWA ALL",
      href: "hwa-all.html"
    },
    {
      label: "TITANS",
      href: "titans.html"
    },
    {
      label: "BEGINNERS AREA",
      href: "beginners.html"
    },
    {
      label: "BEST TEAMS",
      href: "best-teams.html"
    },
    {
      label: "TIER LIST",
      href: "tier-list.html"
    },
    {
      label: "NEWS",
      href: "news.html"
    },
    {
      label: "EVENTS",
      href: "events.html"
    }
  ];


  /* =========================
     CURRENT PAGE
     ========================= */

  const currentPage =
    window.location.pathname.split("/").pop() || "index.html";


  /* =========================
     CREATE MENU BUTTON
     ========================= */

  const menuButton = document.createElement("button");

  menuButton.className = "goa-global-menu-button";
  menuButton.type = "button";
  menuButton.setAttribute("aria-label", "Open Gods of Alliance navigation");
  menuButton.setAttribute("aria-expanded", "false");

  menuButton.innerHTML = "☰";


  /* =========================
     CREATE OVERLAY
     ========================= */

  const overlay = document.createElement("div");
  overlay.className = "goa-global-overlay";


  /* =========================
     CREATE PANEL
     ========================= */

  const panel = document.createElement("aside");

  panel.className = "goa-global-panel";
  panel.setAttribute("aria-hidden", "true");


  const inner = document.createElement("div");
  inner.className = "goa-global-panel-inner";


  /* =========================
     PANEL BRANDING
     ========================= */

  const eyebrow = document.createElement("div");
  eyebrow.className = "goa-global-eyebrow";
  eyebrow.textContent = "EXPLORE GODS OF ALLIANCE";

  const title = document.createElement("div");
  title.className = "goa-global-title";
  title.innerHTML = 'GODS OF <span>ALLIANCE</span>';

  const subtitle = document.createElement("div");
  subtitle.className = "goa-global-subtitle";
  subtitle.textContent =
    "Hero Wars Alliance guides, tools, teams, news and practical strategies.";


  /* =========================
     HOME LINK
     ========================= */

  const homeWrapper = document.createElement("div");
  homeWrapper.className =
    "goa-global-links goa-global-home";

  const homeLink = document.createElement("a");
  homeLink.href = "index.html";
  homeLink.textContent = "HOME";

  if (currentPage === "index.html" || currentPage === "") {
    homeLink.classList.add("active");
  }

  homeWrapper.appendChild(homeLink);


  /* =========================
     NAVIGATION LINKS
     ========================= */

  const linksWrapper = document.createElement("nav");
  linksWrapper.className = "goa-global-links";

  navigation.forEach(item => {
    const link = document.createElement("a");

    link.href = item.href;
    link.textContent = item.label;

    if (currentPage === item.href) {
      link.classList.add("active");
    }

    linksWrapper.appendChild(link);
  });


  /* =========================
     PANEL FOOTER
     ========================= */

  const footer = document.createElement("div");
  footer.className = "goa-global-footer";

  footer.innerHTML =
    "© 2026 Gods of Alliance<br>Hero Wars Alliance Guides";


  /* =========================
     BUILD PANEL
     ========================= */

  inner.appendChild(eyebrow);
  inner.appendChild(title);
  inner.appendChild(subtitle);
  inner.appendChild(homeWrapper);
  inner.appendChild(linksWrapper);
  inner.appendChild(footer);

  panel.appendChild(inner);

  document.body.appendChild(overlay);
  document.body.appendChild(panel);
  document.body.appendChild(menuButton);


  /* =========================
     OPEN / CLOSE
     ========================= */

  function openMenu() {
    panel.classList.add("open");
    overlay.classList.add("open");
    document.body.classList.add("goa-menu-open");

    panel.setAttribute("aria-hidden", "false");
    menuButton.setAttribute("aria-expanded", "true");

    menuButton.innerHTML = "✕";
  }

  function closeMenu() {
    panel.classList.remove("open");
    overlay.classList.remove("open");
    document.body.classList.remove("goa-menu-open");

    panel.setAttribute("aria-hidden", "true");
    menuButton.setAttribute("aria-expanded", "false");

    menuButton.innerHTML = "☰";
  }

  menuButton.addEventListener("click", function () {
    if (panel.classList.contains("open")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  overlay.addEventListener("click", closeMenu);

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

})();
