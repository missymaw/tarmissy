(function () {
  "use strict";

  const PLANTILLAS = [
    { label: "a1 gallery", file: "a1-gallery.js" },
    { label: "ali animus", file: "ali-animus.js" },
    { label: "chonkylotus", file: "chonkylotus.js" },
    { label: "chrls dsgn", file: "chrls-dsgn.js" },
    { label: "cyberpunk neon animado", file: "cyberpunk-neon-animado.js" },
    { label: "dribbble", file: "dribbble.js" },
    { label: "elena tiffany", file: "elena-tiffany.js" },
    { label: "everylunaever", file: "everylunaever.js" },
    { label: "faymas", file: "faymas.js" },
    { label: "finstey", file: "finstey.js" },
    { label: "juls passion", file: "juls-passion.js" },
    { label: "lilly vinnily", file: "lilly-vinnily.js" },
    { label: "mariana gomes", file: "mariana-gomes.js" },
    { label: "olivia brooke", file: "olivia-brooke.js" },
    { label: "sarah anderson", file: "sarah-anderson.js" },
    { label: "tali edri", file: "tali-edri.js" },
    { label: "valerie senior", file: "valerie-senior.js" },
    { label: "yumie tsuchinoko", file: "yumie-tsuchinoko.js" }
  ];

  function basename(path) {
    return String(path || "").split("?")[0].split("/").pop();
  }

  function init() {
    if (document.getElementById("tarjeta-template-toolbar")) return;

    const toolbar = document.createElement("aside");
    toolbar.id = "tarjeta-template-toolbar";
    toolbar.setAttribute("aria-label", "Selector de plantillas");

    const style = document.createElement("style");
    style.id = "tarjeta-template-toolbar-styles";
    style.textContent = `
      #tarjeta-template-toolbar {
        position: fixed;
        z-index: 2147483000;
        right: 16px;
        bottom: 16px;
        width: min(330px, calc(100vw - 24px));
        color: #18211d;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      }

      #tarjeta-template-toolbar *,
      #tarjeta-template-toolbar *::before,
      #tarjeta-template-toolbar *::after {
        box-sizing: border-box;
      }

      #tarjeta-template-toolbar .tt-panel {
        display: none;
        background: #fff;
        border: 1px solid #dfe5e0;
        border-radius: 14px;
        padding: 13px;
        margin-bottom: 10px;
        box-shadow: 0 8px 30px rgba(0,0,0,.18);
      }

      #tarjeta-template-toolbar.tt-open .tt-panel {
        display: block;
      }

      #tarjeta-template-toolbar .tt-heading,
      #tarjeta-template-toolbar .tt-controls {
        display: flex;
        align-items: center;
        gap: 9px;
      }

      #tarjeta-template-toolbar .tt-heading {
        justify-content: space-between;
        margin-bottom: 10px;
      }

      #tarjeta-template-toolbar .tt-title {
        margin: 0;
        font-size: 13px;
        font-weight: 850;
      }

      #tarjeta-template-toolbar .tt-status {
        min-width: 0;
        flex: 1;
        overflow-wrap: anywhere;
        font-size: 12px;
        line-height: 1.4;
      }

      #tarjeta-template-toolbar .tt-message {
        margin: 10px 0 0;
        color: #58635d;
        font-size: 11px;
        line-height: 1.45;
      }

      #tarjeta-template-toolbar button {
        display: inline-grid;
        place-items: center;
        min-width: 40px;
        min-height: 40px;
        padding: 7px;
        border: 1px solid #d8e2da;
        border-radius: 10px;
        background: #fff;
        color: #145c31;
        font: inherit;
        font-size: 16px;
        font-weight: 850;
        cursor: pointer;
      }

      #tarjeta-template-toolbar button:hover {
        background: #edf6ef;
      }

      #tarjeta-template-toolbar button:focus-visible {
        outline: 3px solid #e3232c;
        outline-offset: 2px;
      }

      #tarjeta-template-toolbar .tt-toggle {
        width: 50px;
        height: 50px;
        min-width: 50px;
        min-height: 50px;
        margin-left: auto;
        border: 2px solid #fff;
        border-radius: 50%;
        background: #087a3d;
        color: #fff;
        box-shadow: 0 5px 18px rgba(0,0,0,.24);
        font-size: 22px;
      }

      @media (max-width: 480px) {
        #tarjeta-template-toolbar {
          right: 10px;
          bottom: 10px;
        }
      }
    `;

    toolbar.innerHTML = `
      <div class="tt-panel">
        <div class="tt-heading">
          <p class="tt-title">Cambiar plantilla</p>
          <button
            type="button"
            data-close
            aria-label="Ocultar selector"
            title="Ocultar selector">×</button>
        </div>

        <div class="tt-controls">
          <button
            type="button"
            data-previous
            aria-label="Plantilla anterior"
            title="Plantilla anterior">‹</button>

          <div class="tt-status" data-status aria-live="polite"></div>

          <button
            type="button"
            data-next
            aria-label="Siguiente plantilla"
            title="Siguiente plantilla">›</button>
        </div>

        <p class="tt-message">
          La selección cambia la vista previa. El contenido de la tarjeta se conserva.
        </p>
      </div>

      <button
        type="button"
        class="tt-toggle"
        data-toggle
        aria-label="Mostrar selector de plantillas"
        title="Cambiar plantilla">◐</button>
    `;

    document.head.appendChild(style);
    document.body.appendChild(toolbar);

    const status = toolbar.querySelector("[data-status]");
    const previous = toolbar.querySelector("[data-previous]");
    const next = toolbar.querySelector("[data-next]");

    function activeIndex() {
      const current = basename(
        (window.TARJETA_CONFIG || {}).templateFile || "finstey.js"
      );

      const index = PLANTILLAS.findIndex(function (item) {
        return item.file === current;
      });

      return index >= 0
        ? index
        : PLANTILLAS.findIndex(function (item) {
            return item.file === "finstey.js";
          });
    }

    function updateStatus() {
      const index = activeIndex();
      const current = PLANTILLAS[index];

      status.textContent = current
        ? current.label + " · " + (index + 1) + " de " + PLANTILLAS.length
        : "Plantilla no registrada";
    }

    function moveTemplate(direction) {
      const currentIndex = activeIndex();

      if (currentIndex < 0 || !PLANTILLAS.length) return;

      const nextIndex =
        (currentIndex + direction + PLANTILLAS.length) % PLANTILLAS.length;

      const target = PLANTILLAS[nextIndex];
      const url = new URL(window.location.href);

      url.searchParams.set("plantilla", target.file);
      window.location.assign(url.href);
    }

    previous.addEventListener("click", function () {
      moveTemplate(-1);
    });

    next.addEventListener("click", function () {
      moveTemplate(1);
    });

    toolbar.querySelector("[data-toggle]").addEventListener("click", function () {
      const open = toolbar.classList.toggle("tt-open");

      this.setAttribute(
        "aria-label",
        open ? "Ocultar selector de plantillas" : "Mostrar selector de plantillas"
      );

      this.setAttribute(
        "title",
        open ? "Ocultar selector" : "Cambiar plantilla"
      );
    });

    toolbar.querySelector("[data-close]").addEventListener("click", function () {
      toolbar.classList.remove("tt-open");
      toolbar.querySelector("[data-toggle]").focus();
    });

    updateStatus();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();