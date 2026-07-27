/* Career Resume Lift — Theme JS
   Handles: mobile nav, dark mode toggle, sticky CTA, scroll reveal,
   FAQ accordion, cart drawer + AJAX cart operations, product variant picker.
*/
(function () {
  'use strict';

  document.documentElement.classList.remove('no-js');

  /* ---------------- Theme (dark mode) toggle ---------------- */
  function initThemeToggle() {
    var root = document.documentElement;
    var stored = localStorage.getItem('crl-theme');
    if (stored) root.setAttribute('data-theme', stored);

    document.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-theme-toggle]');
      if (!btn) return;
      var current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      var next = current === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('crl-theme', next);
    });
  }

  /* ---------------- Mobile nav ---------------- */
  function initMobileNav() {
    var trigger = document.querySelector('[data-mobile-menu-trigger]');
    var menu = document.querySelector('[data-mobile-menu]');
    if (!trigger || !menu) return;

    trigger.addEventListener('click', function () {
      menu.classList.toggle('is-open');
      document.body.style.overflow = menu.classList.contains('is-open') ? 'hidden' : '';
    });

    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ---------------- Sticky CTA ---------------- */
  function initStickyCta() {
    var el = document.querySelector('[data-sticky-cta]');
    if (!el) return;
    el.hidden = false;

    var dismissed = sessionStorage.getItem('crl-sticky-dismissed') === '1';

    function onScroll() {
      if (dismissed) return;
      if (window.scrollY > 900) {
        el.classList.add('is-visible');
      } else {
        el.classList.remove('is-visible');
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });

    var dismissBtn = el.querySelector('[data-sticky-cta-dismiss]');
    if (dismissBtn) {
      dismissBtn.addEventListener('click', function () {
        dismissed = true;
        el.classList.remove('is-visible');
        sessionStorage.setItem('crl-sticky-dismissed', '1');
      });
    }
  }

  /* ---------------- Scroll reveal ---------------- */
  function initScrollReveal() {
    var items = document.querySelectorAll('[data-reveal]');
    if (!items.length) return;

    if (!('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var delay = entry.target.getAttribute('data-reveal-delay') || 0;
            setTimeout(function () {
              entry.target.classList.add('is-visible');
            }, Number(delay));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -80px 0px' }
    );

    items.forEach(function (el) { observer.observe(el); });
  }

  /* ---------------- Accordion (FAQ) ---------------- */
  function initAccordion() {
    document.addEventListener('click', function (e) {
      var trigger = e.target.closest('.accordion-trigger');
      if (!trigger) return;
      var item = trigger.closest('.accordion-item');
      var content = item.querySelector('.accordion-content');
      var isOpen = item.classList.contains('is-open');

      // Close siblings within the same accordion (single-open behavior)
      var accordion = item.closest('.accordion');
      if (accordion) {
        accordion.querySelectorAll('.accordion-item.is-open').forEach(function (openItem) {
          if (openItem !== item) {
            openItem.classList.remove('is-open');
            openItem.querySelector('.accordion-content').style.maxHeight = null;
          }
        });
      }

      if (isOpen) {
        item.classList.remove('is-open');
        content.style.maxHeight = null;
      } else {
        item.classList.add('is-open');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  }

  /* ---------------- Desktop nav dropdown (keyboard support) ---------------- */
  function initNavDropdowns() {
    document.querySelectorAll('[data-menu-trigger]').forEach(function (trigger) {
      trigger.addEventListener('click', function () {
        var expanded = trigger.getAttribute('aria-expanded') === 'true';
        trigger.setAttribute('aria-expanded', String(!expanded));
      });
    });
  }

  /* ---------------- Cart (AJAX) ---------------- */
  var CartAPI = {
    get: function () {
      return fetch('/cart.js').then(function (r) { return r.json(); });
    },
    add: function (id, quantity, properties) {
      var body = { id: id, quantity: quantity || 1 };
      if (properties) body.properties = properties;
      return fetch('/cart/add.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(body)
      }).then(function (r) {
        if (!r.ok) return r.json().then(function (err) { throw err; });
        return r.json();
      });
    },
    change: function (line, quantity) {
      return fetch('/cart/change.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ line: line, quantity: quantity })
      }).then(function (r) { return r.json(); });
    }
  };

  function updateCartCount(count) {
    document.querySelectorAll('[data-cart-count]').forEach(function (el) {
      el.textContent = count;
      el.classList.toggle('is-hidden', count === 0);
    });
  }

  function openCartDrawer() {
    var drawer = document.querySelector('[data-cart-drawer]');
    if (!drawer) return;
    drawer.classList.add('is-open');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeCartDrawer() {
    var drawer = document.querySelector('[data-cart-drawer]');
    if (!drawer) return;
    drawer.classList.remove('is-open');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function escapeHtml(str) {
    var div = document.createElement('div');
    div.textContent = str == null ? '' : String(str);
    return div.innerHTML;
  }

  function cartItemHtml(item, index) {
    var line = index + 1;
    var variantLabel = item.variant_title && item.variant_title !== 'Default Title'
      ? '<p class="cart-item__variant">' + escapeHtml(item.variant_title) + '</p>'
      : '';
    var image = item.image
      ? '<img src="' + item.image + '&width=160" alt="' + escapeHtml(item.product_title) + '" width="80" height="80" loading="lazy">'
      : '<span class="cart-item__image-placeholder">' + placeholderIconSvg() + '</span>';

    return (
      '<li class="cart-item" data-cart-item data-line="' + line + '">' +
        '<a href="' + item.url + '" class="cart-item__image">' + image + '</a>' +
        '<div class="cart-item__details">' +
          '<a href="' + item.url + '" class="cart-item__title">' + escapeHtml(item.product_title) + '</a>' +
          variantLabel +
          '<div class="cart-item__row">' +
            '<div class="quantity-stepper" data-quantity-stepper>' +
              '<button type="button" data-quantity-minus aria-label="Decrease quantity">&minus;</button>' +
              '<input type="number" min="0" value="' + item.quantity + '" data-quantity-input data-line="' + line + '" aria-label="Quantity">' +
              '<button type="button" data-quantity-plus aria-label="Increase quantity">&plus;</button>' +
            '</div>' +
            '<span class="cart-item__price">' + formatMoney(item.final_line_price) + '</span>' +
          '</div>' +
        '</div>' +
        '<button class="cart-item__remove" data-cart-remove data-line="' + line + '" aria-label="Remove">' + xIconSvg() + '</button>' +
      '</li>'
    );
  }

  function placeholderIconSvg() {
    return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>';
  }
  function xIconSvg() {
    return '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>';
  }

  function renderCart(cart) {
    // Both the cart drawer and the standalone cart page render [data-cart-items]/
    // [data-cart-footer]/[data-cart-subtotal] markup, so update every instance found.
    var bodies = document.querySelectorAll('[data-cart-items]');
    var footers = document.querySelectorAll('[data-cart-footer]');
    var subtotals = document.querySelectorAll('[data-cart-subtotal]');

    var html;
    if (cart.item_count === 0) {
      html =
        '<div class="cart-empty">' +
          '<p class="cart-empty__title">Your cart is empty</p>' +
          '<p class="cart-empty__desc">Looks like you haven\'t chosen a resume package yet.</p>' +
          '<a href="/collections/all" class="btn btn--primary">Browse Services</a>' +
        '</div>';
    } else {
      html = '<ul class="cart-items-list">' + cart.items.map(cartItemHtml).join('') + '</ul>';
    }
    bodies.forEach(function (body) { body.innerHTML = html; });
    footers.forEach(function (footer) { footer.hidden = cart.item_count === 0; });
    subtotals.forEach(function (subtotal) { subtotal.textContent = formatMoney(cart.total_price); });
    updateCartCount(cart.item_count);
  }

  function initCart() {
    document.addEventListener('click', function (e) {
      if (e.target.closest('[data-cart-icon]')) {
        e.preventDefault();
        CartAPI.get().then(function (cart) {
          renderCart(cart);
          openCartDrawer();
        });
      }
      if (e.target.closest('[data-cart-drawer-close]')) {
        closeCartDrawer();
      }
      if (e.target.closest('[data-cart-remove]')) {
        e.preventDefault();
        var line = e.target.closest('[data-cart-remove]').getAttribute('data-line');
        CartAPI.change(line, 0).then(renderCart);
      }
      if (e.target.closest('[data-quantity-plus]') || e.target.closest('[data-quantity-minus]')) {
        var btn = e.target.closest('[data-quantity-plus], [data-quantity-minus]');
        var wrap = btn.closest('[data-quantity-stepper]');
        var input = wrap.querySelector('[data-quantity-input]');
        var value = parseInt(input.value, 10) || 1;
        value = btn.hasAttribute('data-quantity-plus') ? value + 1 : Math.max(0, value - 1);
        input.value = value;
        input.dispatchEvent(new Event('change'));
      }
    });

    document.addEventListener('change', function (e) {
      if (e.target.matches('[data-quantity-input]')) {
        var line = e.target.getAttribute('data-line');
        var quantity = parseInt(e.target.value, 10) || 0;
        CartAPI.change(line, quantity).then(renderCart);
      }
    });

    document.addEventListener('submit', function (e) {
      var form = e.target.closest('form[data-product-form]');
      if (!form) return;
      e.preventDefault();

      var submitBtn = form.querySelector('[type="submit"]');
      var variantId = form.querySelector('[name="id"]').value;
      var originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Adding…';

      CartAPI.add(variantId, 1)
        .then(function () { return CartAPI.get(); })
        .then(function (cart) {
          renderCart(cart);
          openCartDrawer();
        })
        .catch(function (err) {
          alert((err && err.description) || 'Could not add this package to your cart. Please try again.');
        })
        .finally(function () {
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
        });
    });
  }

  function formatMoney(cents) {
    return '$' + (cents / 100).toFixed(2);
  }

  /* ---------------- Product variant picker ---------------- */
  function initVariantPicker() {
    document.querySelectorAll('[data-product-form]').forEach(function (form) {
      var radios = form.querySelectorAll('[data-variant-radio]');
      if (!radios.length) return;

      radios.forEach(function (radio) {
        radio.addEventListener('change', function () {
          var idInput = form.querySelector('[name="id"]');
          idInput.value = radio.value;

          var price = radio.getAttribute('data-price');
          var priceEl = document.querySelector('[data-product-price]');
          if (priceEl && price) priceEl.textContent = price;

          var available = radio.getAttribute('data-available') === 'true';
          var submitBtn = form.querySelector('[type="submit"]');
          if (submitBtn) {
            submitBtn.disabled = !available;
            submitBtn.textContent = available ? submitBtn.getAttribute('data-add-label') : submitBtn.getAttribute('data-sold-out-label');
          }
        });
      });
    });
  }

  /* ---------------- Init ---------------- */
  document.addEventListener('DOMContentLoaded', function () {
    initThemeToggle();
    initMobileNav();
    initStickyCta();
    initScrollReveal();
    initAccordion();
    initNavDropdowns();
    initCart();
    initVariantPicker();
  });
})();
