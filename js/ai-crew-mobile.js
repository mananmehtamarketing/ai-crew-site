/* =================================================================
   AI Crew · Site-wide mobile + UX behaviour (v2026-05-14)
   - Rebuilds the .mobile-nav into the canonical collapsible structure
   - Auto-scrolling horizontal sliders on mobile (industries, hardware, pillars)
   - Closes mobile nav on bfcache restore (fixes the "can't scroll" glitch on back nav)
   ================================================================= */
(function(){
  'use strict';

  // -----------------------------------------------------------------
  // 1) Canonical mobile menu HTML · same on every page.
  //    We rewrite the existing #mobileNav contents so no per-page edits needed.
  // -----------------------------------------------------------------
  var MOBILE_NAV_HTML = ''
    + '<div class="mobile-nav-inner">'
    +   '<div class="mn-section" data-open="true">'
    +     '<button class="mn-section-title" type="button" aria-expanded="true">For You <span class="mn-chev material-symbols-outlined">expand_more</span></button>'
    +     '<div class="mn-section-body"><div class="mn-sub">'
    +       '<a href="/for-founders">For Founders <span class="mn-sub-desc">Tech, SaaS, agency, D2C</span></a>'
    +       '<a href="/for-professionals">For Professionals <span class="mn-sub-desc">Lawyers, doctors, CAs, advisors</span></a>'
    +       '<a href="/for-companies">For Companies <span class="mn-sub-desc">10-200 person teams</span></a>'
    +     '</div></div>'
    +   '</div>'
    +   '<div class="mn-section" data-open="false">'
    +     '<button class="mn-section-title" type="button" aria-expanded="false">AI Services <span class="mn-chev material-symbols-outlined">expand_more</span></button>'
    +     '<div class="mn-section-body"><div class="mn-sub">'
    +       '<a href="/services/ai-strategy-audit">AI Strategy &amp; Audits</a>'
    +       '<a href="/services/ai-workflow-automation">AI Workflow Automation</a>'
    +       '<a href="/services/ai-agents">Custom AI Agents</a>'
    +       '<a href="/content-studio">AI Content Studio</a>'
    +       '<a href="/outreach">AI Outreach</a>'
    +       '<a href="/web-dev">AI Websites</a>'
    +       '<a href="/services/ai-training">AI Training for Teams</a>'
    +     '</div></div>'
    +   '</div>'
    +   '<div class="mn-section" data-open="false">'
    +     '<button class="mn-section-title" type="button" aria-expanded="false">Industries <span class="mn-chev material-symbols-outlined">expand_more</span></button>'
    +     '<div class="mn-section-body"><div class="mn-sub">'
    +       '<a href="/industries">All Industries</a>'
    +       '<a href="/industries/tech-b2b/">Tech &amp; B2B SaaS</a>'
    +       '<a href="/industries/healthcare/">Healthcare</a>'
    +       '<a href="/industries/legal/">Legal</a>'
    +       '<a href="/industries/accounting/">Accounting</a>'
    +       '<a href="/industries/wealth-advisory/">Wealth Advisory</a>'
    +       '<a href="/industries/architecture/">Architecture</a>'
    +       '<a href="/industries/creative-agencies/">Creative Agencies</a>'
    +       '<a href="/industries/hospitality/">Hospitality &amp; F&amp;B</a>'
    +       '<a href="/industries/d2c/">D2C &amp; E-commerce</a>'
    +       '<a href="/industries/manufacturing/">Manufacturing</a>'
    +       '<a href="/industries/retail/">Retail</a>'
    +       '<a href="/industries/sports/">Sports &amp; Fitness</a>'
    +     '</div></div>'
    +   '</div>'
    +   '<div class="mn-section" data-open="true">'
    +     '<button class="mn-section-title" type="button" aria-expanded="true">Explore <span class="mn-chev material-symbols-outlined">expand_more</span></button>'
    +     '<div class="mn-section-body"><div class="mn-sub">'
    +       '<a href="/ai-hardware">AI Hardware</a>'
    +       '<a href="/case-studies">Case Studies</a>'
    +       '<a href="/about">About</a>'
    +       '<a href="/how-we-work">How we work</a>'
    +       '<a href="/built-with-ai">Built with AI</a>'
    +     '</div></div>'
    +   '</div>'
    +   '<a href="/book-demo" class="mobile-cta">Book a Call →</a>'
    +   '<div class="mn-foot">'
    +     '<div><a href="https://marketincrew.com" target="_blank" rel="noopener">marketincrew.com</a> · the marketing agency</div>'
    +     '<div><a href="https://www.mananmehta.com" target="_blank" rel="noopener">mananmehta.com</a> · Manan Mehta, founder</div>'
    +     '<div style="margin-top:.75rem;">manan.mehta@marketincrew.com · Mumbai · Paris</div>'
    +   '</div>'
    + '</div>';

  function rebuildMobileNav(){
    var mn = document.getElementById('mobileNav');
    if (!mn) return;
    // Only rewrite if not already rewritten (prevents double-init on hot reload)
    if (mn.getAttribute('data-rebuilt') === '1') return;
    mn.innerHTML = MOBILE_NAV_HTML;
    mn.setAttribute('data-rebuilt', '1');
    mn.setAttribute('aria-hidden', 'true');
  }

  function wireMobileMenu(){
    var mtOrig = document.getElementById('menuToggle');
    var mn = document.getElementById('mobileNav');
    if (!mtOrig || !mn) return;
    // Replace the original toggle with a fresh clone first, so any per-page click handler is gone.
    var mt = mtOrig.cloneNode(true);
    mtOrig.parentNode.replaceChild(mt, mtOrig);
    // open/close target the LIVE node `mt`, not the detached one.
    var open = function(){
      mn.classList.add('open'); mt.classList.add('is-open');
      document.body.classList.add('mn-open');
      mn.setAttribute('aria-hidden','false');
      var inner = mn.querySelector('.mobile-nav-inner');
      if (inner) inner.scrollTop = 0;
    };
    var close = function(){
      mn.classList.remove('open'); mt.classList.remove('is-open');
      document.body.classList.remove('mn-open');
      mn.setAttribute('aria-hidden','true');
    };
    mt.addEventListener('click', function(e){
      e.preventDefault();
      if (mn.classList.contains('open')) close(); else open();
    });
    mn.addEventListener('click', function(e){
      var a = e.target.closest && e.target.closest('a');
      if (a && a.getAttribute('href') && !a.target) close();
    });
    document.addEventListener('keydown', function(e){
      if (e.key === 'Escape' && mn.classList.contains('open')) close();
    });
    // Back/forward cache: ALWAYS close on pageshow so scroll works after navigation
    window.addEventListener('pageshow', function(){ close(); });
    // Collapsible groups
    mn.querySelectorAll('.mn-section').forEach(function(sec){
      var btn = sec.querySelector('.mn-section-title');
      if (!btn) return;
      btn.addEventListener('click', function(){
        var isOpen = sec.getAttribute('data-open') === 'true';
        sec.setAttribute('data-open', isOpen ? 'false' : 'true');
        btn.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
      });
    });
  }

  // -----------------------------------------------------------------
  // 2) Auto-scroll horizontal sliders on mobile
  // -----------------------------------------------------------------
  function wireAutoSliders(){
    if (window.innerWidth >= 768) return;
    var selectors = ['.industries-grid', '.pw-grid', '.pillar-slider', '.crew-pills', '.testi-slider'];
    var speed = 0.35;
    selectors.forEach(function(sel){
      document.querySelectorAll(sel).forEach(function(el){
        if (el.dataset.autoslider === '1') return;
        if (el.scrollWidth <= el.clientWidth + 10) return;
        el.dataset.autoslider = '1';
        var paused = false, idleTimer;
        var pause = function(){
          paused = true; clearTimeout(idleTimer);
          idleTimer = setTimeout(function(){ paused = false; }, 4000);
        };
        el.addEventListener('touchstart', pause, {passive:true});
        el.addEventListener('touchmove', pause, {passive:true});
        (function tick(){
          if (!paused) {
            el.scrollLeft += speed;
            if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 1) el.scrollLeft = 0;
          }
          requestAnimationFrame(tick);
        })();
      });
    });
  }

  // -----------------------------------------------------------------
  // 3) Three-Layers cards: tap to expand on mobile (Read more / Show less)
  // -----------------------------------------------------------------
  function wirePillarReadMore(){
    if (window.innerWidth >= 640) return; // desktop: do nothing
    document.querySelectorAll('.pillar-card').forEach(function(card){
      if (card.dataset.readmore === '1') return;
      card.dataset.readmore = '1';
      // Intercept the anchor's click so first tap toggles, second tap navigates
      card.addEventListener('click', function(e){
        if (!card.classList.contains('is-open')) {
          e.preventDefault();
          card.classList.add('is-open');
        }
        // second tap: let the link navigate normally
      });
    });
  }

  function init(){
    rebuildMobileNav();
    wireMobileMenu();
    wireAutoSliders();
    wirePillarReadMore();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
