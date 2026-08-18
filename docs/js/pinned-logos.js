/**
 * Pinned logos / temas — GSAP ScrollTrigger
 * Iconos con movimiento parallax ligado al scroll
 */
(function () {
  "use strict";

  var booted = false;

  // Direcciones distintas por logo: se mueven mientras haces scroll
  var drift = [
    { x: -70, y: 55 },
    { x: 80, y: 40 },
    { x: -90, y: -30 },
    { x: 75, y: -45 },
    { x: -55, y: 70 },
    { x: 60, y: -65 },
    { x: -40, y: -80 },
    { x: 50, y: -75 },
  ];

  function initPinnedLogos() {
    if (booted) return true;

    var section = document.querySelector("[data-pinned-logos]");
    if (!section) return true;

    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
      return false;
    }

    booted = true;
    gsap.registerPlugin(ScrollTrigger);

    document.documentElement.style.scrollBehavior = "auto";
    document.documentElement.classList.remove("scroll-smooth");

    var words = gsap.utils.toArray(
      section.querySelectorAll(".pinned-logos__text .word, .headline .word")
    );
    var allLogos = gsap.utils.toArray(
      section.querySelectorAll(".pinned-logo, .logo")
    );
    var logos = allLogos.filter(function (el) {
      return window.getComputedStyle(el).display !== "none";
    });
    var finals = logos.filter(function (el) {
      return el.classList.contains("logo-final");
    });
    var exits = logos.filter(function (el) {
      return !el.classList.contains("logo-final");
    });

    gsap.set(words, { opacity: 0, filter: "blur(10px)", y: 16 });
    logos.forEach(function (logo, i) {
      var d = drift[i % drift.length];
      gsap.set(logo, {
        opacity: 0,
        scale: 0.65,
        filter: "blur(8px)",
        x: -d.x * 0.35,
        y: -d.y * 0.35,
      });
    });

    section.classList.add("is-pinned-ready");

    var tl = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=320%",
        pin: true,
        pinReparent: true,
        scrub: 1.2,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        fastScrollEnd: true,
      },
    });

    // Fase 1 — aparecen y empiezan a moverse
    tl.to(
      logos,
      {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        stagger: 0.05,
        duration: 0.35,
        ease: "power2.out",
      },
      0
    );
    tl.to(
      words,
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        stagger: 0.06,
        duration: 0.35,
        ease: "power2.out",
      },
      0.04
    );

    // Movimiento continuo de cada icono durante casi todo el scroll
    logos.forEach(function (logo, i) {
      var d = drift[i % drift.length];
      var isFinal = logo.classList.contains("logo-final");

      // Deriva mientras la sección está pinned
      tl.to(
        logo,
        {
          x: d.x,
          y: d.y,
          duration: 0.85,
          ease: "none",
        },
        0.08
      );

      if (isFinal) {
        // Los finales convergen hacia el centro y crecen
        tl.to(
          logo,
          {
            x: i % 2 === 0 ? -36 : 36,
            y: -28,
            scale: 1.45,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.35,
            ease: "power2.inOut",
          },
          0.78
        );
      }
    });

    // Fase 3 — salen los que no son finales
    if (exits.length) {
      tl.to(
        exits,
        {
          opacity: 0,
          filter: "blur(8px)",
          scale: 0.75,
          stagger: 0.03,
          duration: 0.28,
          ease: "power2.in",
        },
        0.72
      );
    }

    if (words.length > 4) {
      tl.to(
        words.slice(4).reverse(),
        {
          opacity: 0,
          filter: "blur(8px)",
          stagger: 0.04,
          duration: 0.25,
          ease: "power2.in",
        },
        0.72
      );
    } else {
      tl.to(
        words,
        {
          opacity: 0.12,
          filter: "blur(6px)",
          duration: 0.25,
        },
        0.72
      );
    }

    tl.to({}, { duration: 0.12 });

    function refresh() {
      ScrollTrigger.refresh();
    }

    requestAnimationFrame(function () {
      requestAnimationFrame(refresh);
    });
    window.addEventListener("load", refresh);
    window.addEventListener("resize", function () {
      clearTimeout(window.__pinnedRefreshTimer);
      window.__pinnedRefreshTimer = setTimeout(refresh, 150);
    });
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(refresh);
    }

    return true;
  }

  function boot() {
    if (initPinnedLogos()) return;
    var tries = 0;
    var timer = setInterval(function () {
      tries += 1;
      if (initPinnedLogos() || tries > 50) {
        clearInterval(timer);
        if (!booted) {
          var section = document.querySelector("[data-pinned-logos]");
          if (section) section.classList.add("is-pinned-fallback");
        }
      }
    }, 100);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
