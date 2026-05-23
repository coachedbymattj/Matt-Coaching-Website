(function () {
  "use strict";

  /* ---------- Current year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Sticky header shadow on scroll ---------- */
  var header = document.getElementById("site-header");
  function onScroll() {
    if (!header) return;
    if (window.scrollY > 8) {
      header.classList.add("shadow-soft");
    } else {
      header.classList.remove("shadow-soft");
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu toggle ---------- */
  var toggle = document.getElementById("nav-toggle");
  var menu = document.getElementById("mobile-menu");
  var iconOpen = document.getElementById("icon-open");
  var iconClose = document.getElementById("icon-close");

  function setMenu(open) {
    if (!menu) return;
    menu.classList.toggle("hidden", !open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    if (iconOpen) iconOpen.classList.toggle("hidden", open);
    if (iconClose) iconClose.classList.toggle("hidden", !open);
  }

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      setMenu(menu.classList.contains("hidden"));
    });
    // Close menu when a link is tapped
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () { setMenu(false); });
    });
    // Close on Escape
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !menu.classList.contains("hidden")) {
        setMenu(false);
        toggle.focus();
      }
    });
  }

  /* ---------- Accordion: keep one panel open at a time ---------- */
  var accordion = document.querySelector("[data-accordion]");
  if (accordion) {
    var items = accordion.querySelectorAll("details");
    items.forEach(function (item) {
      item.addEventListener("toggle", function () {
        if (item.open) {
          items.forEach(function (other) {
            if (other !== item) other.open = false;
          });
        }
      });
    });
  }

  /* ---------- Scroll reveal ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(function (el) { observer.observe(el); });
  }

  /* ---------- Booking form validation (client-side only) ---------- */
  var form = document.getElementById("booking-form");
  if (form) {
    var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function showError(field, show) {
      var msg = form.querySelector('[data-error-for="' + field.id + '"]');
      if (msg) msg.classList.toggle("hidden", !show);
      field.setAttribute("aria-invalid", show ? "true" : "false");
      field.classList.toggle("border-danger", show);
      field.classList.toggle("ring-2", show);
      field.classList.toggle("ring-danger/30", show);
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.elements.name;
      var email = form.elements.email;
      var valid = true;

      if (!name.value.trim()) { showError(name, true); valid = false; }
      else { showError(name, false); }

      if (!emailRe.test(email.value.trim())) { showError(email, true); valid = false; }
      else { showError(email, false); }

      if (!valid) {
        var firstInvalid = form.querySelector('[aria-invalid="true"]');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      var success = document.getElementById("form-success");
      if (success) {
        success.classList.remove("hidden");
        success.focus && success.focus();
      }
      form.querySelector('button[type="submit"]').disabled = true;
      // NOTE: wire this up to a form backend (Formspree / Netlify Forms) to actually send.
    });

    // Clear error as the user corrects the field
    ["name", "email"].forEach(function (id) {
      var f = form.elements[id];
      if (f) f.addEventListener("input", function () { showError(f, false); });
    });
  }
})();
