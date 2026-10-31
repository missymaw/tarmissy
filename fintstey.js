(function () {
  "use strict";

  function escapeHtml(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function safeHref(value) {
    const href = String(value || "").trim();

    if (/^(https?:\/\/|mailto:|tel:|#|\/|\.\/|\.\.\/)/i.test(href)) {
      return href;
    }

    return "";
  }

  function link(label, href, className) {
    const safe = safeHref(href);

    if (!safe) {
      return "";
    }

    const external = /^https?:\/\//i.test(safe);

    return (
      '<a class="' + escapeHtml(className || "finstey-link") + '"' +
      ' href="' + escapeHtml(safe) + '"' +
      (external ? ' target="_blank" rel="noopener noreferrer"' : "") +
      ">" + escapeHtml(label) + "</a>"
    );
  }

  function injectStyles() {
    if (document.getElementById("finstey-styles")) {
      return;
    }

    const style = document.createElement("style");
    style.id = "finstey-styles";

    style.textContent = `
      .finstey-root {
        --finstey-red: #e3232c;
        --finstey-green: #087a3d;
        --finstey-ink: #18211d;
        --finstey-muted: #58635d;
        --finstey-bg: #f5f7f5;
        --finstey-card: #ffffff;
        color: var(--finstey-ink);
        font-family: system-ui, -apple-system, BlinkMacSystemFont,
          "Segoe UI", sans-serif;
        line-height: 1.55;
        width: 100%;
      }

      .finstey-root *,
      .finstey-root *::before,
      .finstey-root *::after {
        box-sizing: border-box;
      }

      .finstey-page {
        background: var(--finstey-bg);
        min-height: 100%;
        padding: 28px 16px 40px;
      }

      .finstey-container {
        width: 100%;
        max-width: 1120px;
        margin: 0 auto;
      }

      .finstey-topbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 16px;
        margin-bottom: 24px;
      }

      .finstey-brand {
        color: var(--finstey-green);
        font-size: 1.25rem;
        font-weight: 900;
        letter-spacing: -0.04em;
        text-decoration: none;
      }

      .finstey-eyebrow {
        color: var(--finstey-green);
        font-size: 0.78rem;
        font-weight: 800;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        margin: 0 0 8px;
      }

      .finstey-hero {
        background: var(--finstey-card);
        border: 1px solid #e4e9e5;
        border-radius: 22px;
        padding: clamp(24px, 5vw, 52px);
        box-shadow: 0 12px 34px rgba(20, 45, 30, 0.06);
        overflow-wrap: anywhere;
      }

      .finstey-hero h1 {
        font-size: clamp(2rem, 5vw, 3.5rem);
        line-height: 1.08;
        letter-spacing: -0.055em;
        margin: 0 0 12px;
      }

      .finstey-role {
        color: var(--finstey-muted);
        font-size: 1rem;
        margin: 0 0 12px;
      }

      .finstey-tagline {
        font-size: clamp(1.1rem, 2.6vw, 1.45rem);
        font-weight: 750;
        max-width: 720px;
        margin: 0 0 16px;
      }

      .finstey-bio {
        max-width: 780px;
        color: var(--finstey-muted);
        margin: 0;
      }

      .finstey-badges {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-top: 22px;
      }

      .finstey-badge {
        background: #edf6ef;
        color: #145c31;
        border: 1px solid #d5ead9;
        border-radius: 999px;
        padding: 6px 11px;
        font-size: 0.8rem;
        font-weight: 700;
      }

      .finstey-actions,
      .finstey-socials,
      .finstey-contact-links {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
      }

      .finstey-actions {
        margin-top: 24px;
      }

      .finstey-button,
      .finstey-link {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        min-height: 44px;
        padding: 11px 16px;
        border: 1px solid #dfe5e0;
        border-radius: 12px;
        background: #ffffff;
        color: var(--finstey-ink);
        font-size: 0.92rem;
        font-weight: 750;
        line-height: 1.3;
        text-decoration: none;
        transition: transform 150ms ease, box-shadow 150ms ease;
      }

      .finstey-button:hover,
      .finstey-link:hover {
        transform: translateY(-1px);
        box-shadow: 0 5px 16px rgba(20, 45, 30, 0.09);
      }

      .finstey-button--primary {
        background: var(--finstey-red);
        border-color: var(--finstey-red);
        color: #ffffff;
      }

      .finstey-button--secondary {
        background: #ffffff;
        border-color: #cdded1;
        color: var(--finstey-green);
      }

      .finstey-socials {
        margin-top: 18px;
      }

      .finstey-section {
        margin-top: 30px;
      }

      .finstey-section-heading {
        margin: 0 0 16px;
      }

      .finstey-section-heading h2 {
        font-size: clamp(1.45rem, 3vw, 2rem);
        line-height: 1.2;
        letter-spacing: -0.035em;
        margin: 0 0 7px;
      }

      .finstey-section-heading p {
        color: var(--finstey-muted);
        margin: 0;
      }

      .finstey-featured {
        background: #eaf5ed;
        border: 1px solid #d4e8d9;
        border-radius: 18px;
        padding: clamp(22px, 4vw, 34px);
      }

      .finstey-featured h3 {
        font-size: clamp(1.35rem, 3vw, 1.8rem);
        line-height: 1.2;
        margin: 0 0 10px;
      }

      .finstey-featured p {
        max-width: 760px;
        margin: 0;
        color: #344b3b;
      }

      .finstey-featured .finstey-button {
        margin-top: 18px;
      }

      .finstey-service-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 14px;
      }

      .finstey-service {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        background: var(--finstey-card);
        border: 1px solid #e1e7e2;
        border-radius: 17px;
        padding: 22px;
        min-width: 0;
        overflow-wrap: anywhere;
      }

      .finstey-service h3 {
        font-size: 1.06rem;
        line-height: 1.3;
        margin: 0 0 10px;
      }

      .finstey-service p {
        color: var(--finstey-muted);
        font-size: 0.94rem;
        margin: 0 0 18px;
      }

      .finstey-service .finstey-button {
        margin-top: auto;
      }

      .finstey-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin: 0 0 18px;
      }

      .finstey-tag {
        font-size: 0.74rem;
        color: #47574b;
        background: #f1f4f1;
        border-radius: 7px;
        padding: 4px 7px;
      }

      .finstey-faq {
        display: grid;
        gap: 10px;
      }

      .finstey-faq details {
        background: var(--finstey-card);
        border: 1px solid #e1e7e2;
        border-radius: 13px;
        padding: 16px 18px;
      }

      .finstey-faq summary {
        font-weight: 750;
        cursor: pointer;
      }

      .finstey-faq details p {
        color: var(--finstey-muted);
        margin: 12px 0 0;
      }

      .finstey-contact {
        background: var(--finstey-card);
        border: 1px solid #e1e7e2;
        border-radius: 18px;
        padding: clamp(22px, 4vw, 34px);
      }

      .finstey-contact h2 {
        margin: 0 0 8px;
        font-size: 1.7rem;
      }

      .finstey-contact > p {
        color: var(--finstey-muted);
        margin: 0 0 18px;
      }

      .finstey-location {
        color: var(--finstey-muted);
        font-size: 0.9rem;
        margin-top: 18px;
      }

      .finstey-footer {
        text-align: center;
        padding: 28px 10px 0;
        color: var(--finstey-muted);
        font-size: 0.86rem;
      }

      .finstey-footer-links {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 8px;
        margin-top: 10px;
      }

      .finstey-footer-links .finstey-link {
        min-height: 36px;
        padding: 7px 11px;
        font-size: 0.82rem;
      }

      .finstey-root img {
        display: block;
        max-width: 100%;
        height: auto;
      }

      @media (max-width: 680px) {
        .finstey-page {
          padding: 16px 12px 28px;
        }

        .finstey-service-grid {
          grid-template-columns: minmax(0, 1fr);
        }

        .finstey-hero {
          border-radius: 17px;
        }

        .finstey-service {
          padding: 19px;
        }

        .finstey-actions > *,
        .finstey-service .finstey-button {
          width: 100%;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .finstey-root *,
        .finstey-root *::before,
        .finstey-root *::after {
          transition: none !important;
          animation: none !important;
          scroll-behavior: auto !important;
        }
      }
    `;

    document.head.appendChild(style);
  }

  function render(config) {
    const profile = config.profile || {};
    const content = config.content || {};
    const visibility = config.visibility || {};
    const visibleSections = visibility.sections || {};
    const footer = config.footer || {};

    function sectionEnabled(name) {
      return visibleSections[name] !== false;
    }

    function imageTag(src, alt, className) {
      const safe = safeHref(src);

      if (!safe) {
        return "";
      }

      return '<img class="' + escapeHtml(className || "") +
        '" src="' + escapeHtml(safe) +
        '" alt="' + escapeHtml(alt || "") +
        '" loading="lazy" decoding="async">';
    }

    function sectionHeading(name, fallbackTitle) {
      const titles = config.sectionTitles || {};
      const descriptions = config.sectionDescriptions || {};

      return (
        '<div class="finstey-section-heading">' +
          "<h2>" + escapeHtml(titles[name] || fallbackTitle) + "</h2>" +
          (descriptions[name]
            ? "<p>" + escapeHtml(descriptions[name]) + "</p>"
            : "") +
        "</div>"
      );
    }

    function renderActions() {
      if (visibility.actions === false) {
        return "";
      }

      const actions = Array.isArray(config.actions) ? config.actions : [];

      return actions.map(function (action) {
        const primary = action.style === "primary";
        const className = primary
          ? "finstey-button finstey-button--primary"
          : "finstey-button finstey-button--secondary";

        return link(
          (action.icon ? action.icon + " " : "") + action.label,
          action.href,
          className
        );
      }).join("");
    }

    function renderBadges() {
      if (visibility.badges === false || !Array.isArray(profile.badges)) {
        return "";
      }

      return (
        '<div class="finstey-badges">' +
          profile.badges.map(function (badge) {
            return '<span class="finstey-badge">' +
              escapeHtml(badge) + "</span>";
          }).join("") +
        "</div>"
      );
    }

    function renderSocialLinks() {
      if (visibility.socialLinks === false) {
        return "";
      }

      const links = Array.isArray(config.socialLinks)
        ? config.socialLinks
        : [];

      if (!links.length) {
        return "";
      }

      return (
        '<nav class="finstey-socials" aria-label="Enlaces externos">' +
          links.map(function (item) {
            return link(item.label, item.href, "finstey-link");
          }).join("") +
        "</nav>"
      );
    }

    function renderHero() {
      const avatar = visibility.avatar
        ? imageTag(profile.avatarImage, profile.name, "finstey-avatar")
        : "";

      const cover = visibility.cover
        ? imageTag(profile.coverImage, "", "finstey-cover")
        : "";

      return (
        '<header class="finstey-hero">' +
          cover +
          (avatar ? '<div class="finstey-avatar-wrap">' + avatar + "</div>" : "") +
          (profile.eyebrow
            ? '<p class="finstey-eyebrow">' +
                escapeHtml(profile.eyebrow) + "</p>"
            : "") +
          "<h1>" + escapeHtml(profile.name || "") + "</h1>" +
          (profile.role
            ? '<p class="finstey-role">' +
                escapeHtml(profile.role) + "</p>"
            : "") +
          (profile.tagline
            ? '<p class="finstey-tagline">' +
                escapeHtml(profile.tagline) + "</p>"
            : "") +
          (visibility.bio !== false && profile.bio
            ? '<p class="finstey-bio">' +
                escapeHtml(profile.bio) + "</p>"
            : "") +
          renderBadges() +
          '<div class="finstey-actions">' + renderActions() + "</div>" +
        "</header>"
      );
    }

    function renderFeatured() {
      if (!sectionEnabled("featured")) {
        return "";
      }

      const item = content.featured || {};

      if (!item.title && !item.description) {
        return "";
      }

      const image = item.image
        ? imageTag(item.image, item.title, "finstey-featured-image")
        : "";

      return (
        '<section class="finstey-section" id="featured">' +
          sectionHeading("featured", "Destacado") +
          '<div class="finstey-featured">' +
            (item.eyebrow
              ? '<p class="finstey-eyebrow">' +
                  escapeHtml(item.eyebrow) + "</p>"
              : "") +
            image +
            "<h3>" + escapeHtml(item.title || "") + "</h3>" +
            "<p>" + escapeHtml(item.description || "") + "</p>" +
            (item.href
              ? link(
                  item.buttonLabel || "Consultar",
                  item.href,
                  "finstey-button finstey-button--primary"
                )
              : "") +
          "</div>" +
        "</section>"
      );
    }

    function renderServices() {
      if (!sectionEnabled("services")) {
        return "";
      }

      const services = Array.isArray(content.services)
        ? content.services
        : [];

      if (!services.length) {
        return "";
      }

      const cards = services.map(function (service) {
        const tags = Array.isArray(service.tags) && service.tags.length
          ? '<div class="finstey-tags">' +
              service.tags.map(function (tag) {
                return '<span class="finstey-tag">' +
                  escapeHtml(tag) + "</span>";
              }).join("") +
            "</div>"
          : "";

        const action = link(
          service.buttonLabel || "Consultar servicio",
          service.href,
          "finstey-button finstey-button--secondary"
        );

        return (
          '<article class="finstey-service">' +
            "<h3>" + escapeHtml(service.title || "") + "</h3>" +
            "<p>" + escapeHtml(service.description || "") + "</p>" +
            tags +
            action +
          "</article>"
        );
      }).join("");

      return (
        '<section class="finstey-section" id="services">' +
          sectionHeading("services", "Servicios") +
          '<div class="finstey-service-grid">' + cards + "</div>" +
        "</section>"
      );
    }

    function renderFaq() {
      if (!sectionEnabled("faq")) {
        return "";
      }

      const items = Array.isArray(content.faq) ? content.faq : [];

      if (!items.length) {
        return "";
      }

      return (
        '<section class="finstey-section" id="faq">' +
          sectionHeading("faq", "Preguntas frecuentes") +
          '<div class="finstey-faq">' +
            items.map(function (item) {
              return (
                "<details>" +
                  "<summary>" + escapeHtml(item.question || "") + "</summary>" +
                  "<p>" + escapeHtml(item.answer || "") + "</p>" +
                "</details>"
              );
            }).join("") +
          "</div>" +
        "</section>"
      );
    }

    function renderContact() {
      if (!sectionEnabled("contact")) {
        return "";
      }

      const contact = content.contact || {};
      const contactLinks = [];

      if (contact.whatsapp) {
        contactLinks.push(
          link("Contactar por WhatsApp", contact.whatsapp,
            "finstey-button finstey-button--primary")
        );
      }

      if (contact.phone) {
        const digits = String(contact.phone).replace(/[^\d+]/g, "");

        if (digits) {
          contactLinks.push(
            link("Llamar: " + contact.phone, "tel:" + digits,
              "finstey-button finstey-button--secondary")
          );
        }
      }

      if (contact.email) {
        contactLinks.push(
          link("Enviar correo", "mailto:" + contact.email,
            "finstey-button finstey-button--secondary")
        );
      }

      if (contact.website) {
        contactLinks.push(
          link("Visitar sitio web", contact.website,
            "finstey-button finstey-button--secondary")
        );
      }

      return (
        '<section class="finstey-section" id="contact">' +
          '<div class="finstey-contact">' +
            "<h2>" + escapeHtml(contact.title || "Contacto") + "</h2>" +
            "<p>" + escapeHtml(contact.description || "") + "</p>" +
            '<div class="finstey-contact-links">' +
              contactLinks.join("") +
            "</div>" +
            (visibility.location !== false && contact.location
              ? '<p class="finstey-location">' +
                  escapeHtml(contact.location) + "</p>"
              : "") +
          "</div>" +
        "</section>"
      );
    }

    function renderFooter() {
      if (visibility.footer === false) {
        return "";
      }

      const links = Array.isArray(footer.links) ? footer.links : [];

      return (
        '<footer class="finstey-footer">' +
          "<p>" + escapeHtml(footer.text || "") + "</p>" +
          '<div class="finstey-footer-links">' +
            links.map(function (item) {
              return link(item.label, item.href, "finstey-link");
            }).join("") +
          "</div>" +
        "</footer>"
      );
    }

    const sections = {
      featured: renderFeatured,
      services: renderServices,
      faq: renderFaq,
      contact: renderContact
    };

    const order = Array.isArray(config.sectionsOrder)
      ? config.sectionsOrder
      : ["featured", "services", "faq", "contact"];

    const sectionsHtml = order.map(function (name) {
      return sections[name] ? sections[name]() : "";
    }).join("");

    return (
      '<div class="finstey-page">' +
        '<div class="finstey-container">' +
          '<div class="finstey-topbar">' +
            link("Mawddi", "https://missy.mawddi.com/", "finstey-brand") +
          "</div>" +
          renderHero() +
          renderSocialLinks() +
          sectionsHtml +
          renderFooter() +
        "</div>" +
      "</div>"
    );
  }

  function init() {
    const config = window.TARJETA_CONFIG;

    if (!config) {
      console.error(
        "Finstey: falta cargar tarjeta-config.js antes de finstey.js."
      );
      return;
    }

    let root = document.querySelector(
      "[data-tarjeta-root], #tarjeta-app, #tarjeta-root, #tarjeta-preview, #app, #root"
    );

    if (!root) {
      root = document.createElement("div");
      root.id = "tarjeta-app";
      document.body.appendChild(root);
    }

    root.classList.add("finstey-root");

    injectStyles();
    root.innerHTML = render(config);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();