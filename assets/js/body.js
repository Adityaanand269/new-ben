/*!/wp-content/themes/everfx_3.0/js/dist/modernizr.js*/ /*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-svg-setclasses !*/ !(function (e, n, s) {
  function o(e, n) {
    return typeof e === n;
  }
  function a() {
    var e, n, s, a, t, f, r;
    for (var c in l)
      if (l.hasOwnProperty(c)) {
        if (
          ((e = []),
          (n = l[c]),
          n.name &&
            (e.push(n.name.toLowerCase()),
            n.options && n.options.aliases && n.options.aliases.length))
        )
          for (s = 0; s < n.options.aliases.length; s++)
            e.push(n.options.aliases[s].toLowerCase());
        for (a = o(n.fn, "function") ? n.fn() : n.fn, t = 0; t < e.length; t++)
          (f = e[t]),
            (r = f.split(".")),
            1 === r.length
              ? (Modernizr[r[0]] = a)
              : (!Modernizr[r[0]] ||
                  Modernizr[r[0]] instanceof Boolean ||
                  (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])),
                (Modernizr[r[0]][r[1]] = a)),
            i.push((a ? "" : "no-") + r.join("-"));
      }
  }
  function t(e) {
    var n = r.className,
      s = Modernizr._config.classPrefix || "";
    if ((c && (n = n.baseVal), Modernizr._config.enableJSClass)) {
      var o = new RegExp("(^|\\s)" + s + "no-js(\\s|$)");
      n = n.replace(o, "$1" + s + "js$2");
    }
    Modernizr._config.enableClasses &&
      ((n += " " + s + e.join(" " + s)),
      c ? (r.className.baseVal = n) : (r.className = n));
  }
  var i = [],
    l = [],
    f = {
      _version: "3.6.0",
      _config: {
        classPrefix: "",
        enableClasses: !0,
        enableJSClass: !0,
        usePrefixes: !0,
      },
      _q: [],
      on: function (e, n) {
        var s = this;
        setTimeout(function () {
          n(s[e]);
        }, 0);
      },
      addTest: function (e, n, s) {
        l.push({ name: e, fn: n, options: s });
      },
      addAsyncTest: function (e) {
        l.push({ name: null, fn: e });
      },
    },
    Modernizr = function () {};
  (Modernizr.prototype = f), (Modernizr = new Modernizr());
  var r = n.documentElement,
    c = "svg" === r.nodeName.toLowerCase();
  Modernizr.addTest(
    "svg",
    !!n.createElementNS &&
      !!n.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect
  ),
    a(),
    t(i),
    delete f.addTest,
    delete f.addAsyncTest;
  for (var u = 0; u < Modernizr._q.length; u++) Modernizr._q[u]();
  e.Modernizr = Modernizr;
})(window, document);
/*!/wp-content/themes/everfx_3.0/assets/slick/slick.min.js*/ !(function (i) {
  "use strict";
  "function" == typeof define && define.amd
    ? define(["jquery"], i)
    : "undefined" != typeof exports
    ? (module.exports = i(require("jquery")))
    : i(jQuery);
})(function (i) {
  "use strict";
  var e = window.Slick || {};
  ((e = (function () {
    var e = 0;
    return function (t, o) {
      var s,
        n = this;
      (n.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: i(t),
        appendDots: i(t),
        arrows: !0,
        asNavFor: null,
        prevArrow:
          '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow:
          '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function (e, t) {
          return i('<button type="button" />').text(t + 1);
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: 0.35,
        fade: !1,
        focusOnSelect: !1,
        focusOnChange: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3,
      }),
        (n.initials = {
          animating: !1,
          dragging: !1,
          autoPlayTimer: null,
          currentDirection: 0,
          currentLeft: null,
          currentSlide: 0,
          direction: 1,
          $dots: null,
          listWidth: null,
          listHeight: null,
          loadIndex: 0,
          $nextArrow: null,
          $prevArrow: null,
          scrolling: !1,
          slideCount: null,
          slideWidth: null,
          $slideTrack: null,
          $slides: null,
          sliding: !1,
          slideOffset: 0,
          swipeLeft: null,
          swiping: !1,
          $list: null,
          touchObject: {},
          transformsEnabled: !1,
          unslicked: !1,
        }),
        i.extend(n, n.initials),
        (n.activeBreakpoint = null),
        (n.animType = null),
        (n.animProp = null),
        (n.breakpoints = []),
        (n.breakpointSettings = []),
        (n.cssTransitions = !1),
        (n.focussed = !1),
        (n.interrupted = !1),
        (n.hidden = "hidden"),
        (n.paused = !0),
        (n.positionProp = null),
        (n.respondTo = null),
        (n.rowCount = 1),
        (n.shouldClick = !0),
        (n.$slider = i(t)),
        (n.$slidesCache = null),
        (n.transformType = null),
        (n.transitionType = null),
        (n.visibilityChange = "visibilitychange"),
        (n.windowWidth = 0),
        (n.windowTimer = null),
        (s = i(t).data("slick") || {}),
        (n.options = i.extend({}, n.defaults, o, s)),
        (n.currentSlide = n.options.initialSlide),
        (n.originalSettings = n.options),
        void 0 !== document.mozHidden
          ? ((n.hidden = "mozHidden"),
            (n.visibilityChange = "mozvisibilitychange"))
          : void 0 !== document.webkitHidden &&
            ((n.hidden = "webkitHidden"),
            (n.visibilityChange = "webkitvisibilitychange")),
        (n.autoPlay = i.proxy(n.autoPlay, n)),
        (n.autoPlayClear = i.proxy(n.autoPlayClear, n)),
        (n.autoPlayIterator = i.proxy(n.autoPlayIterator, n)),
        (n.changeSlide = i.proxy(n.changeSlide, n)),
        (n.clickHandler = i.proxy(n.clickHandler, n)),
        (n.selectHandler = i.proxy(n.selectHandler, n)),
        (n.setPosition = i.proxy(n.setPosition, n)),
        (n.swipeHandler = i.proxy(n.swipeHandler, n)),
        (n.dragHandler = i.proxy(n.dragHandler, n)),
        (n.keyHandler = i.proxy(n.keyHandler, n)),
        (n.instanceUid = e++),
        (n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
        n.registerBreakpoints(),
        n.init(!0);
    };
  })()).prototype.activateADA = function () {
    this.$slideTrack
      .find(".slick-active")
      .attr({ "aria-hidden": "false" })
      .find("a, input, button, select")
      .attr({ tabindex: "0" });
  }),
    (e.prototype.addSlide = e.prototype.slickAdd =
      function (e, t, o) {
        var s = this;
        if ("boolean" == typeof t) (o = t), (t = null);
        else if (t < 0 || t >= s.slideCount) return !1;
        s.unload(),
          "number" == typeof t
            ? 0 === t && 0 === s.$slides.length
              ? i(e).appendTo(s.$slideTrack)
              : o
              ? i(e).insertBefore(s.$slides.eq(t))
              : i(e).insertAfter(s.$slides.eq(t))
            : !0 === o
            ? i(e).prependTo(s.$slideTrack)
            : i(e).appendTo(s.$slideTrack),
          (s.$slides = s.$slideTrack.children(this.options.slide)),
          s.$slideTrack.children(this.options.slide).detach(),
          s.$slideTrack.append(s.$slides),
          s.$slides.each(function (e, t) {
            i(t).attr("data-slick-index", e);
          }),
          (s.$slidesCache = s.$slides),
          s.reinit();
      }),
    (e.prototype.animateHeight = function () {
      var i = this;
      if (
        1 === i.options.slidesToShow &&
        !0 === i.options.adaptiveHeight &&
        !1 === i.options.vertical
      ) {
        var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
        i.$list.animate({ height: e }, i.options.speed);
      }
    }),
    (e.prototype.animateSlide = function (e, t) {
      var o = {},
        s = this;
      s.animateHeight(),
        !0 === s.options.rtl && !1 === s.options.vertical && (e = -e),
        !1 === s.transformsEnabled
          ? !1 === s.options.vertical
            ? s.$slideTrack.animate(
                { left: e },
                s.options.speed,
                s.options.easing,
                t
              )
            : s.$slideTrack.animate(
                { top: e },
                s.options.speed,
                s.options.easing,
                t
              )
          : !1 === s.cssTransitions
          ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft),
            i({ animStart: s.currentLeft }).animate(
              { animStart: e },
              {
                duration: s.options.speed,
                easing: s.options.easing,
                step: function (i) {
                  (i = Math.ceil(i)),
                    !1 === s.options.vertical
                      ? ((o[s.animType] = "translate(" + i + "px, 0px)"),
                        s.$slideTrack.css(o))
                      : ((o[s.animType] = "translate(0px," + i + "px)"),
                        s.$slideTrack.css(o));
                },
                complete: function () {
                  t && t.call();
                },
              }
            ))
          : (s.applyTransition(),
            (e = Math.ceil(e)),
            !1 === s.options.vertical
              ? (o[s.animType] = "translate3d(" + e + "px, 0px, 0px)")
              : (o[s.animType] = "translate3d(0px," + e + "px, 0px)"),
            s.$slideTrack.css(o),
            t &&
              setTimeout(function () {
                s.disableTransition(), t.call();
              }, s.options.speed));
    }),
    (e.prototype.getNavTarget = function () {
      var e = this,
        t = e.options.asNavFor;
      return t && null !== t && (t = i(t).not(e.$slider)), t;
    }),
    (e.prototype.asNavFor = function (e) {
      var t = this.getNavTarget();
      null !== t &&
        "object" == typeof t &&
        t.each(function () {
          var t = i(this).slick("getSlick");
          t.unslicked || t.slideHandler(e, !0);
        });
    }),
    (e.prototype.applyTransition = function (i) {
      var e = this,
        t = {};
      !1 === e.options.fade
        ? (t[e.transitionType] =
            e.transformType + " " + e.options.speed + "ms " + e.options.cssEase)
        : (t[e.transitionType] =
            "opacity " + e.options.speed + "ms " + e.options.cssEase),
        !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
    }),
    (e.prototype.autoPlay = function () {
      var i = this;
      i.autoPlayClear(),
        i.slideCount > i.options.slidesToShow &&
          (i.autoPlayTimer = setInterval(
            i.autoPlayIterator,
            i.options.autoplaySpeed
          ));
    }),
    (e.prototype.autoPlayClear = function () {
      var i = this;
      i.autoPlayTimer && clearInterval(i.autoPlayTimer);
    }),
    (e.prototype.autoPlayIterator = function () {
      var i = this,
        e = i.currentSlide + i.options.slidesToScroll;
      i.paused ||
        i.interrupted ||
        i.focussed ||
        (!1 === i.options.infinite &&
          (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1
            ? (i.direction = 0)
            : 0 === i.direction &&
              ((e = i.currentSlide - i.options.slidesToScroll),
              i.currentSlide - 1 == 0 && (i.direction = 1))),
        i.slideHandler(e));
    }),
    (e.prototype.buildArrows = function () {
      var e = this;
      !0 === e.options.arrows &&
        ((e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow")),
        (e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow")),
        e.slideCount > e.options.slidesToShow
          ? (e.$prevArrow
              .removeClass("slick-hidden")
              .removeAttr("aria-hidden tabindex"),
            e.$nextArrow
              .removeClass("slick-hidden")
              .removeAttr("aria-hidden tabindex"),
            e.htmlExpr.test(e.options.prevArrow) &&
              e.$prevArrow.prependTo(e.options.appendArrows),
            e.htmlExpr.test(e.options.nextArrow) &&
              e.$nextArrow.appendTo(e.options.appendArrows),
            !0 !== e.options.infinite &&
              e.$prevArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"))
          : e.$prevArrow
              .add(e.$nextArrow)
              .addClass("slick-hidden")
              .attr({ "aria-disabled": "true", tabindex: "-1" }));
    }),
    (e.prototype.buildDots = function () {
      var e,
        t,
        o = this;
      if (!0 === o.options.dots) {
        for (
          o.$slider.addClass("slick-dotted"),
            t = i("<ul />").addClass(o.options.dotsClass),
            e = 0;
          e <= o.getDotCount();
          e += 1
        )
          t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
        (o.$dots = t.appendTo(o.options.appendDots)),
          o.$dots.find("li").first().addClass("slick-active");
      }
    }),
    (e.prototype.buildOut = function () {
      var e = this;
      (e.$slides = e.$slider
        .children(e.options.slide + ":not(.slick-cloned)")
        .addClass("slick-slide")),
        (e.slideCount = e.$slides.length),
        e.$slides.each(function (e, t) {
          i(t)
            .attr("data-slick-index", e)
            .data("originalStyling", i(t).attr("style") || "");
        }),
        e.$slider.addClass("slick-slider"),
        (e.$slideTrack =
          0 === e.slideCount
            ? i('<div class="slick-track"/>').appendTo(e.$slider)
            : e.$slides.wrapAll('<div class="slick-track"/>').parent()),
        (e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent()),
        e.$slideTrack.css("opacity", 0),
        (!0 !== e.options.centerMode && !0 !== e.options.swipeToSlide) ||
          (e.options.slidesToScroll = 1),
        i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
        e.setupInfinite(),
        e.buildArrows(),
        e.buildDots(),
        e.updateDots(),
        e.setSlideClasses(
          "number" == typeof e.currentSlide ? e.currentSlide : 0
        ),
        !0 === e.options.draggable && e.$list.addClass("draggable");
    }),
    (e.prototype.buildRows = function () {
      var i,
        e,
        t,
        o,
        s,
        n,
        r,
        l = this;
      if (
        ((o = document.createDocumentFragment()),
        (n = l.$slider.children()),
        l.options.rows > 1)
      ) {
        for (
          r = l.options.slidesPerRow * l.options.rows,
            s = Math.ceil(n.length / r),
            i = 0;
          i < s;
          i++
        ) {
          var d = document.createElement("div");
          for (e = 0; e < l.options.rows; e++) {
            var a = document.createElement("div");
            for (t = 0; t < l.options.slidesPerRow; t++) {
              var c = i * r + (e * l.options.slidesPerRow + t);
              n.get(c) && a.appendChild(n.get(c));
            }
            d.appendChild(a);
          }
          o.appendChild(d);
        }
        l.$slider.empty().append(o),
          l.$slider
            .children()
            .children()
            .children()
            .css({
              width: 100 / l.options.slidesPerRow + "%",
              display: "inline-block",
            });
      }
    }),
    (e.prototype.checkResponsive = function (e, t) {
      var o,
        s,
        n,
        r = this,
        l = !1,
        d = r.$slider.width(),
        a = window.innerWidth || i(window).width();
      if (
        ("window" === r.respondTo
          ? (n = a)
          : "slider" === r.respondTo
          ? (n = d)
          : "min" === r.respondTo && (n = Math.min(a, d)),
        r.options.responsive &&
          r.options.responsive.length &&
          null !== r.options.responsive)
      ) {
        s = null;
        for (o in r.breakpoints)
          r.breakpoints.hasOwnProperty(o) &&
            (!1 === r.originalSettings.mobileFirst
              ? n < r.breakpoints[o] && (s = r.breakpoints[o])
              : n > r.breakpoints[o] && (s = r.breakpoints[o]));
        null !== s
          ? null !== r.activeBreakpoint
            ? (s !== r.activeBreakpoint || t) &&
              ((r.activeBreakpoint = s),
              "unslick" === r.breakpointSettings[s]
                ? r.unslick(s)
                : ((r.options = i.extend(
                    {},
                    r.originalSettings,
                    r.breakpointSettings[s]
                  )),
                  !0 === e && (r.currentSlide = r.options.initialSlide),
                  r.refresh(e)),
              (l = s))
            : ((r.activeBreakpoint = s),
              "unslick" === r.breakpointSettings[s]
                ? r.unslick(s)
                : ((r.options = i.extend(
                    {},
                    r.originalSettings,
                    r.breakpointSettings[s]
                  )),
                  !0 === e && (r.currentSlide = r.options.initialSlide),
                  r.refresh(e)),
              (l = s))
          : null !== r.activeBreakpoint &&
            ((r.activeBreakpoint = null),
            (r.options = r.originalSettings),
            !0 === e && (r.currentSlide = r.options.initialSlide),
            r.refresh(e),
            (l = s)),
          e || !1 === l || r.$slider.trigger("breakpoint", [r, l]);
      }
    }),
    (e.prototype.changeSlide = function (e, t) {
      var o,
        s,
        n,
        r = this,
        l = i(e.currentTarget);
      switch (
        (l.is("a") && e.preventDefault(),
        l.is("li") || (l = l.closest("li")),
        (n = r.slideCount % r.options.slidesToScroll != 0),
        (o = n
          ? 0
          : (r.slideCount - r.currentSlide) % r.options.slidesToScroll),
        e.data.message)
      ) {
        case "previous":
          (s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o),
            r.slideCount > r.options.slidesToShow &&
              r.slideHandler(r.currentSlide - s, !1, t);
          break;
        case "next":
          (s = 0 === o ? r.options.slidesToScroll : o),
            r.slideCount > r.options.slidesToShow &&
              r.slideHandler(r.currentSlide + s, !1, t);
          break;
        case "index":
          var d =
            0 === e.data.index
              ? 0
              : e.data.index || l.index() * r.options.slidesToScroll;
          r.slideHandler(r.checkNavigable(d), !1, t),
            l.children().trigger("focus");
          break;
        default:
          return;
      }
    }),
    (e.prototype.checkNavigable = function (i) {
      var e, t;
      if (((e = this.getNavigableIndexes()), (t = 0), i > e[e.length - 1]))
        i = e[e.length - 1];
      else
        for (var o in e) {
          if (i < e[o]) {
            i = t;
            break;
          }
          t = e[o];
        }
      return i;
    }),
    (e.prototype.cleanUpEvents = function () {
      var e = this;
      e.options.dots &&
        null !== e.$dots &&
        (i("li", e.$dots)
          .off("click.slick", e.changeSlide)
          .off("mouseenter.slick", i.proxy(e.interrupt, e, !0))
          .off("mouseleave.slick", i.proxy(e.interrupt, e, !1)),
        !0 === e.options.accessibility &&
          e.$dots.off("keydown.slick", e.keyHandler)),
        e.$slider.off("focus.slick blur.slick"),
        !0 === e.options.arrows &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
          e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide),
          !0 === e.options.accessibility &&
            (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler),
            e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))),
        e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
        e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
        e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
        e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
        e.$list.off("click.slick", e.clickHandler),
        i(document).off(e.visibilityChange, e.visibility),
        e.cleanUpSlideEvents(),
        !0 === e.options.accessibility &&
          e.$list.off("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect &&
          i(e.$slideTrack).children().off("click.slick", e.selectHandler),
        i(window).off(
          "orientationchange.slick.slick-" + e.instanceUid,
          e.orientationChange
        ),
        i(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
        i("[draggable!=true]", e.$slideTrack).off(
          "dragstart",
          e.preventDefault
        ),
        i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
    }),
    (e.prototype.cleanUpSlideEvents = function () {
      var e = this;
      e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
        e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1));
    }),
    (e.prototype.cleanUpRows = function () {
      var i,
        e = this;
      e.options.rows > 1 &&
        ((i = e.$slides.children().children()).removeAttr("style"),
        e.$slider.empty().append(i));
    }),
    (e.prototype.clickHandler = function (i) {
      !1 === this.shouldClick &&
        (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault());
    }),
    (e.prototype.destroy = function (e) {
      var t = this;
      t.autoPlayClear(),
        (t.touchObject = {}),
        t.cleanUpEvents(),
        i(".slick-cloned", t.$slider).detach(),
        t.$dots && t.$dots.remove(),
        t.$prevArrow &&
          t.$prevArrow.length &&
          (t.$prevArrow
            .removeClass("slick-disabled slick-arrow slick-hidden")
            .removeAttr("aria-hidden aria-disabled tabindex")
            .css("display", ""),
          t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()),
        t.$nextArrow &&
          t.$nextArrow.length &&
          (t.$nextArrow
            .removeClass("slick-disabled slick-arrow slick-hidden")
            .removeAttr("aria-hidden aria-disabled tabindex")
            .css("display", ""),
          t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()),
        t.$slides &&
          (t.$slides
            .removeClass(
              "slick-slide slick-active slick-center slick-visible slick-current"
            )
            .removeAttr("aria-hidden")
            .removeAttr("data-slick-index")
            .each(function () {
              i(this).attr("style", i(this).data("originalStyling"));
            }),
          t.$slideTrack.children(this.options.slide).detach(),
          t.$slideTrack.detach(),
          t.$list.detach(),
          t.$slider.append(t.$slides)),
        t.cleanUpRows(),
        t.$slider.removeClass("slick-slider"),
        t.$slider.removeClass("slick-initialized"),
        t.$slider.removeClass("slick-dotted"),
        (t.unslicked = !0),
        e || t.$slider.trigger("destroy", [t]);
    }),
    (e.prototype.disableTransition = function (i) {
      var e = this,
        t = {};
      (t[e.transitionType] = ""),
        !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
    }),
    (e.prototype.fadeSlide = function (i, e) {
      var t = this;
      !1 === t.cssTransitions
        ? (t.$slides.eq(i).css({ zIndex: t.options.zIndex }),
          t.$slides
            .eq(i)
            .animate({ opacity: 1 }, t.options.speed, t.options.easing, e))
        : (t.applyTransition(i),
          t.$slides.eq(i).css({ opacity: 1, zIndex: t.options.zIndex }),
          e &&
            setTimeout(function () {
              t.disableTransition(i), e.call();
            }, t.options.speed));
    }),
    (e.prototype.fadeSlideOut = function (i) {
      var e = this;
      !1 === e.cssTransitions
        ? e.$slides
            .eq(i)
            .animate(
              { opacity: 0, zIndex: e.options.zIndex - 2 },
              e.options.speed,
              e.options.easing
            )
        : (e.applyTransition(i),
          e.$slides.eq(i).css({ opacity: 0, zIndex: e.options.zIndex - 2 }));
    }),
    (e.prototype.filterSlides = e.prototype.slickFilter =
      function (i) {
        var e = this;
        null !== i &&
          ((e.$slidesCache = e.$slides),
          e.unload(),
          e.$slideTrack.children(this.options.slide).detach(),
          e.$slidesCache.filter(i).appendTo(e.$slideTrack),
          e.reinit());
      }),
    (e.prototype.focusHandler = function () {
      var e = this;
      e.$slider
        .off("focus.slick blur.slick")
        .on("focus.slick blur.slick", "*", function (t) {
          t.stopImmediatePropagation();
          var o = i(this);
          setTimeout(function () {
            e.options.pauseOnFocus &&
              ((e.focussed = o.is(":focus")), e.autoPlay());
          }, 0);
        });
    }),
    (e.prototype.getCurrent = e.prototype.slickCurrentSlide =
      function () {
        return this.currentSlide;
      }),
    (e.prototype.getDotCount = function () {
      var i = this,
        e = 0,
        t = 0,
        o = 0;
      if (!0 === i.options.infinite)
        if (i.slideCount <= i.options.slidesToShow) ++o;
        else
          for (; e < i.slideCount; )
            ++o,
              (e = t + i.options.slidesToScroll),
              (t +=
                i.options.slidesToScroll <= i.options.slidesToShow
                  ? i.options.slidesToScroll
                  : i.options.slidesToShow);
      else if (!0 === i.options.centerMode) o = i.slideCount;
      else if (i.options.asNavFor)
        for (; e < i.slideCount; )
          ++o,
            (e = t + i.options.slidesToScroll),
            (t +=
              i.options.slidesToScroll <= i.options.slidesToShow
                ? i.options.slidesToScroll
                : i.options.slidesToShow);
      else
        o =
          1 +
          Math.ceil(
            (i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll
          );
      return o - 1;
    }),
    (e.prototype.getLeft = function (i) {
      var e,
        t,
        o,
        s,
        n = this,
        r = 0;
      return (
        (n.slideOffset = 0),
        (t = n.$slides.first().outerHeight(!0)),
        !0 === n.options.infinite
          ? (n.slideCount > n.options.slidesToShow &&
              ((n.slideOffset = n.slideWidth * n.options.slidesToShow * -1),
              (s = -1),
              !0 === n.options.vertical &&
                !0 === n.options.centerMode &&
                (2 === n.options.slidesToShow
                  ? (s = -1.5)
                  : 1 === n.options.slidesToShow && (s = -2)),
              (r = t * n.options.slidesToShow * s)),
            n.slideCount % n.options.slidesToScroll != 0 &&
              i + n.options.slidesToScroll > n.slideCount &&
              n.slideCount > n.options.slidesToShow &&
              (i > n.slideCount
                ? ((n.slideOffset =
                    (n.options.slidesToShow - (i - n.slideCount)) *
                    n.slideWidth *
                    -1),
                  (r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1))
                : ((n.slideOffset =
                    (n.slideCount % n.options.slidesToScroll) *
                    n.slideWidth *
                    -1),
                  (r = (n.slideCount % n.options.slidesToScroll) * t * -1))))
          : i + n.options.slidesToShow > n.slideCount &&
            ((n.slideOffset =
              (i + n.options.slidesToShow - n.slideCount) * n.slideWidth),
            (r = (i + n.options.slidesToShow - n.slideCount) * t)),
        n.slideCount <= n.options.slidesToShow &&
          ((n.slideOffset = 0), (r = 0)),
        !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow
          ? (n.slideOffset =
              (n.slideWidth * Math.floor(n.options.slidesToShow)) / 2 -
              (n.slideWidth * n.slideCount) / 2)
          : !0 === n.options.centerMode && !0 === n.options.infinite
          ? (n.slideOffset +=
              n.slideWidth * Math.floor(n.options.slidesToShow / 2) -
              n.slideWidth)
          : !0 === n.options.centerMode &&
            ((n.slideOffset = 0),
            (n.slideOffset +=
              n.slideWidth * Math.floor(n.options.slidesToShow / 2))),
        (e =
          !1 === n.options.vertical
            ? i * n.slideWidth * -1 + n.slideOffset
            : i * t * -1 + r),
        !0 === n.options.variableWidth &&
          ((o =
            n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite
              ? n.$slideTrack.children(".slick-slide").eq(i)
              : n.$slideTrack
                  .children(".slick-slide")
                  .eq(i + n.options.slidesToShow)),
          (e =
            !0 === n.options.rtl
              ? o[0]
                ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width())
                : 0
              : o[0]
              ? -1 * o[0].offsetLeft
              : 0),
          !0 === n.options.centerMode &&
            ((o =
              n.slideCount <= n.options.slidesToShow ||
              !1 === n.options.infinite
                ? n.$slideTrack.children(".slick-slide").eq(i)
                : n.$slideTrack
                    .children(".slick-slide")
                    .eq(i + n.options.slidesToShow + 1)),
            (e =
              !0 === n.options.rtl
                ? o[0]
                  ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width())
                  : 0
                : o[0]
                ? -1 * o[0].offsetLeft
                : 0),
            (e += (n.$list.width() - o.outerWidth()) / 2))),
        e
      );
    }),
    (e.prototype.getOption = e.prototype.slickGetOption =
      function (i) {
        return this.options[i];
      }),
    (e.prototype.getNavigableIndexes = function () {
      var i,
        e = this,
        t = 0,
        o = 0,
        s = [];
      for (
        !1 === e.options.infinite
          ? (i = e.slideCount)
          : ((t = -1 * e.options.slidesToScroll),
            (o = -1 * e.options.slidesToScroll),
            (i = 2 * e.slideCount));
        t < i;

      )
        s.push(t),
          (t = o + e.options.slidesToScroll),
          (o +=
            e.options.slidesToScroll <= e.options.slidesToShow
              ? e.options.slidesToScroll
              : e.options.slidesToShow);
      return s;
    }),
    (e.prototype.getSlick = function () {
      return this;
    }),
    (e.prototype.getSlideCount = function () {
      var e,
        t,
        o = this;
      return (
        (t =
          !0 === o.options.centerMode
            ? o.slideWidth * Math.floor(o.options.slidesToShow / 2)
            : 0),
        !0 === o.options.swipeToSlide
          ? (o.$slideTrack.find(".slick-slide").each(function (s, n) {
              if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft)
                return (e = n), !1;
            }),
            Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1)
          : o.options.slidesToScroll
      );
    }),
    (e.prototype.goTo = e.prototype.slickGoTo =
      function (i, e) {
        this.changeSlide({ data: { message: "index", index: parseInt(i) } }, e);
      }),
    (e.prototype.init = function (e) {
      var t = this;
      i(t.$slider).hasClass("slick-initialized") ||
        (i(t.$slider).addClass("slick-initialized"),
        t.buildRows(),
        t.buildOut(),
        t.setProps(),
        t.startLoad(),
        t.loadSlider(),
        t.initializeEvents(),
        t.updateArrows(),
        t.updateDots(),
        t.checkResponsive(!0),
        t.focusHandler()),
        e && t.$slider.trigger("init", [t]),
        !0 === t.options.accessibility && t.initADA(),
        t.options.autoplay && ((t.paused = !1), t.autoPlay());
    }),
    (e.prototype.initADA = function () {
      var e = this,
        t = Math.ceil(e.slideCount / e.options.slidesToShow),
        o = e.getNavigableIndexes().filter(function (i) {
          return i >= 0 && i < e.slideCount;
        });
      e.$slides
        .add(e.$slideTrack.find(".slick-cloned"))
        .attr({ "aria-hidden": "true", tabindex: "-1" })
        .find("a, input, button, select")
        .attr({ tabindex: "-1" }),
        null !== e.$dots &&
          (e.$slides
            .not(e.$slideTrack.find(".slick-cloned"))
            .each(function (t) {
              var s = o.indexOf(t);
              i(this).attr({
                role: "tabpanel",
                id: "slick-slide" + e.instanceUid + t,
                tabindex: -1,
              }),
                -1 !== s &&
                  i(this).attr({
                    "aria-describedby":
                      "slick-slide-control" + e.instanceUid + s,
                  });
            }),
          e.$dots
            .attr("role", "tablist")
            .find("li")
            .each(function (s) {
              var n = o[s];
              i(this).attr({ role: "presentation" }),
                i(this)
                  .find("button")
                  .first()
                  .attr({
                    role: "tab",
                    id: "slick-slide-control" + e.instanceUid + s,
                    "aria-controls": "slick-slide" + e.instanceUid + n,
                    "aria-label": s + 1 + " of " + t,
                    "aria-selected": null,
                    tabindex: "-1",
                  });
            })
            .eq(e.currentSlide)
            .find("button")
            .attr({ "aria-selected": "true", tabindex: "0" })
            .end());
      for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++)
        e.$slides.eq(s).attr("tabindex", 0);
      e.activateADA();
    }),
    (e.prototype.initArrowEvents = function () {
      var i = this;
      !0 === i.options.arrows &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow
          .off("click.slick")
          .on("click.slick", { message: "previous" }, i.changeSlide),
        i.$nextArrow
          .off("click.slick")
          .on("click.slick", { message: "next" }, i.changeSlide),
        !0 === i.options.accessibility &&
          (i.$prevArrow.on("keydown.slick", i.keyHandler),
          i.$nextArrow.on("keydown.slick", i.keyHandler)));
    }),
    (e.prototype.initDotEvents = function () {
      var e = this;
      !0 === e.options.dots &&
        (i("li", e.$dots).on(
          "click.slick",
          { message: "index" },
          e.changeSlide
        ),
        !0 === e.options.accessibility &&
          e.$dots.on("keydown.slick", e.keyHandler)),
        !0 === e.options.dots &&
          !0 === e.options.pauseOnDotsHover &&
          i("li", e.$dots)
            .on("mouseenter.slick", i.proxy(e.interrupt, e, !0))
            .on("mouseleave.slick", i.proxy(e.interrupt, e, !1));
    }),
    (e.prototype.initSlideEvents = function () {
      var e = this;
      e.options.pauseOnHover &&
        (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
        e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)));
    }),
    (e.prototype.initializeEvents = function () {
      var e = this;
      e.initArrowEvents(),
        e.initDotEvents(),
        e.initSlideEvents(),
        e.$list.on(
          "touchstart.slick mousedown.slick",
          { action: "start" },
          e.swipeHandler
        ),
        e.$list.on(
          "touchmove.slick mousemove.slick",
          { action: "move" },
          e.swipeHandler
        ),
        e.$list.on(
          "touchend.slick mouseup.slick",
          { action: "end" },
          e.swipeHandler
        ),
        e.$list.on(
          "touchcancel.slick mouseleave.slick",
          { action: "end" },
          e.swipeHandler
        ),
        e.$list.on("click.slick", e.clickHandler),
        i(document).on(e.visibilityChange, i.proxy(e.visibility, e)),
        !0 === e.options.accessibility &&
          e.$list.on("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect &&
          i(e.$slideTrack).children().on("click.slick", e.selectHandler),
        i(window).on(
          "orientationchange.slick.slick-" + e.instanceUid,
          i.proxy(e.orientationChange, e)
        ),
        i(window).on(
          "resize.slick.slick-" + e.instanceUid,
          i.proxy(e.resize, e)
        ),
        i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault),
        i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
        i(e.setPosition);
    }),
    (e.prototype.initUI = function () {
      var i = this;
      !0 === i.options.arrows &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow.show(), i.$nextArrow.show()),
        !0 === i.options.dots &&
          i.slideCount > i.options.slidesToShow &&
          i.$dots.show();
    }),
    (e.prototype.keyHandler = function (i) {
      var e = this;
      i.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
        (37 === i.keyCode && !0 === e.options.accessibility
          ? e.changeSlide({
              data: { message: !0 === e.options.rtl ? "next" : "previous" },
            })
          : 39 === i.keyCode &&
            !0 === e.options.accessibility &&
            e.changeSlide({
              data: { message: !0 === e.options.rtl ? "previous" : "next" },
            }));
    }),
    (e.prototype.lazyLoad = function () {
      function e(e) {
        i("img[data-lazy]", e).each(function () {
          var e = i(this),
            t = i(this).attr("data-lazy"),
            o = i(this).attr("data-srcset"),
            s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
            r = document.createElement("img");
          (r.onload = function () {
            e.animate({ opacity: 0 }, 100, function () {
              o && (e.attr("srcset", o), s && e.attr("sizes", s)),
                e.attr("src", t).animate({ opacity: 1 }, 200, function () {
                  e.removeAttr("data-lazy data-srcset data-sizes").removeClass(
                    "slick-loading"
                  );
                }),
                n.$slider.trigger("lazyLoaded", [n, e, t]);
            });
          }),
            (r.onerror = function () {
              e
                .removeAttr("data-lazy")
                .removeClass("slick-loading")
                .addClass("slick-lazyload-error"),
                n.$slider.trigger("lazyLoadError", [n, e, t]);
            }),
            (r.src = t);
        });
      }
      var t,
        o,
        s,
        n = this;
      if (
        (!0 === n.options.centerMode
          ? !0 === n.options.infinite
            ? (s =
                (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) +
                n.options.slidesToShow +
                2)
            : ((o = Math.max(
                0,
                n.currentSlide - (n.options.slidesToShow / 2 + 1)
              )),
              (s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide))
          : ((o = n.options.infinite
              ? n.options.slidesToShow + n.currentSlide
              : n.currentSlide),
            (s = Math.ceil(o + n.options.slidesToShow)),
            !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)),
        (t = n.$slider.find(".slick-slide").slice(o, s)),
        "anticipated" === n.options.lazyLoad)
      )
        for (
          var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0;
          a < n.options.slidesToScroll;
          a++
        )
          r < 0 && (r = n.slideCount - 1),
            (t = (t = t.add(d.eq(r))).add(d.eq(l))),
            r--,
            l++;
      e(t),
        n.slideCount <= n.options.slidesToShow
          ? e(n.$slider.find(".slick-slide"))
          : n.currentSlide >= n.slideCount - n.options.slidesToShow
          ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow))
          : 0 === n.currentSlide &&
            e(
              n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow)
            );
    }),
    (e.prototype.loadSlider = function () {
      var i = this;
      i.setPosition(),
        i.$slideTrack.css({ opacity: 1 }),
        i.$slider.removeClass("slick-loading"),
        i.initUI(),
        "progressive" === i.options.lazyLoad && i.progressiveLazyLoad();
    }),
    (e.prototype.next = e.prototype.slickNext =
      function () {
        this.changeSlide({ data: { message: "next" } });
      }),
    (e.prototype.orientationChange = function () {
      var i = this;
      i.checkResponsive(), i.setPosition();
    }),
    (e.prototype.pause = e.prototype.slickPause =
      function () {
        var i = this;
        i.autoPlayClear(), (i.paused = !0);
      }),
    (e.prototype.play = e.prototype.slickPlay =
      function () {
        var i = this;
        i.autoPlay(),
          (i.options.autoplay = !0),
          (i.paused = !1),
          (i.focussed = !1),
          (i.interrupted = !1);
      }),
    (e.prototype.postSlide = function (e) {
      var t = this;
      t.unslicked ||
        (t.$slider.trigger("afterChange", [t, e]),
        (t.animating = !1),
        t.slideCount > t.options.slidesToShow && t.setPosition(),
        (t.swipeLeft = null),
        t.options.autoplay && t.autoPlay(),
        !0 === t.options.accessibility &&
          (t.initADA(),
          t.options.focusOnChange &&
            i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()));
    }),
    (e.prototype.prev = e.prototype.slickPrev =
      function () {
        this.changeSlide({ data: { message: "previous" } });
      }),
    (e.prototype.preventDefault = function (i) {
      i.preventDefault();
    }),
    (e.prototype.progressiveLazyLoad = function (e) {
      e = e || 1;
      var t,
        o,
        s,
        n,
        r,
        l = this,
        d = i("img[data-lazy]", l.$slider);
      d.length
        ? ((t = d.first()),
          (o = t.attr("data-lazy")),
          (s = t.attr("data-srcset")),
          (n = t.attr("data-sizes") || l.$slider.attr("data-sizes")),
          ((r = document.createElement("img")).onload = function () {
            s && (t.attr("srcset", s), n && t.attr("sizes", n)),
              t
                .attr("src", o)
                .removeAttr("data-lazy data-srcset data-sizes")
                .removeClass("slick-loading"),
              !0 === l.options.adaptiveHeight && l.setPosition(),
              l.$slider.trigger("lazyLoaded", [l, t, o]),
              l.progressiveLazyLoad();
          }),
          (r.onerror = function () {
            e < 3
              ? setTimeout(function () {
                  l.progressiveLazyLoad(e + 1);
                }, 500)
              : (t
                  .removeAttr("data-lazy")
                  .removeClass("slick-loading")
                  .addClass("slick-lazyload-error"),
                l.$slider.trigger("lazyLoadError", [l, t, o]),
                l.progressiveLazyLoad());
          }),
          (r.src = o))
        : l.$slider.trigger("allImagesLoaded", [l]);
    }),
    (e.prototype.refresh = function (e) {
      var t,
        o,
        s = this;
      (o = s.slideCount - s.options.slidesToShow),
        !s.options.infinite && s.currentSlide > o && (s.currentSlide = o),
        s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0),
        (t = s.currentSlide),
        s.destroy(!0),
        i.extend(s, s.initials, { currentSlide: t }),
        s.init(),
        e || s.changeSlide({ data: { message: "index", index: t } }, !1);
    }),
    (e.prototype.registerBreakpoints = function () {
      var e,
        t,
        o,
        s = this,
        n = s.options.responsive || null;
      if ("array" === i.type(n) && n.length) {
        s.respondTo = s.options.respondTo || "window";
        for (e in n)
          if (((o = s.breakpoints.length - 1), n.hasOwnProperty(e))) {
            for (t = n[e].breakpoint; o >= 0; )
              s.breakpoints[o] &&
                s.breakpoints[o] === t &&
                s.breakpoints.splice(o, 1),
                o--;
            s.breakpoints.push(t), (s.breakpointSettings[t] = n[e].settings);
          }
        s.breakpoints.sort(function (i, e) {
          return s.options.mobileFirst ? i - e : e - i;
        });
      }
    }),
    (e.prototype.reinit = function () {
      var e = this;
      (e.$slides = e.$slideTrack
        .children(e.options.slide)
        .addClass("slick-slide")),
        (e.slideCount = e.$slides.length),
        e.currentSlide >= e.slideCount &&
          0 !== e.currentSlide &&
          (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
        e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
        e.registerBreakpoints(),
        e.setProps(),
        e.setupInfinite(),
        e.buildArrows(),
        e.updateArrows(),
        e.initArrowEvents(),
        e.buildDots(),
        e.updateDots(),
        e.initDotEvents(),
        e.cleanUpSlideEvents(),
        e.initSlideEvents(),
        e.checkResponsive(!1, !0),
        !0 === e.options.focusOnSelect &&
          i(e.$slideTrack).children().on("click.slick", e.selectHandler),
        e.setSlideClasses(
          "number" == typeof e.currentSlide ? e.currentSlide : 0
        ),
        e.setPosition(),
        e.focusHandler(),
        (e.paused = !e.options.autoplay),
        e.autoPlay(),
        e.$slider.trigger("reInit", [e]);
    }),
    (e.prototype.resize = function () {
      var e = this;
      i(window).width() !== e.windowWidth &&
        (clearTimeout(e.windowDelay),
        (e.windowDelay = window.setTimeout(function () {
          (e.windowWidth = i(window).width()),
            e.checkResponsive(),
            e.unslicked || e.setPosition();
        }, 50)));
    }),
    (e.prototype.removeSlide = e.prototype.slickRemove =
      function (i, e, t) {
        var o = this;
        if (
          ((i =
            "boolean" == typeof i
              ? !0 === (e = i)
                ? 0
                : o.slideCount - 1
              : !0 === e
              ? --i
              : i),
          o.slideCount < 1 || i < 0 || i > o.slideCount - 1)
        )
          return !1;
        o.unload(),
          !0 === t
            ? o.$slideTrack.children().remove()
            : o.$slideTrack.children(this.options.slide).eq(i).remove(),
          (o.$slides = o.$slideTrack.children(this.options.slide)),
          o.$slideTrack.children(this.options.slide).detach(),
          o.$slideTrack.append(o.$slides),
          (o.$slidesCache = o.$slides),
          o.reinit();
      }),
    (e.prototype.setCSS = function (i) {
      var e,
        t,
        o = this,
        s = {};
      !0 === o.options.rtl && (i = -i),
        (e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
        (t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
        (s[o.positionProp] = i),
        !1 === o.transformsEnabled
          ? o.$slideTrack.css(s)
          : ((s = {}),
            !1 === o.cssTransitions
              ? ((s[o.animType] = "translate(" + e + ", " + t + ")"),
                o.$slideTrack.css(s))
              : ((s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)"),
                o.$slideTrack.css(s)));
    }),
    (e.prototype.setDimensions = function () {
      var i = this;
      !1 === i.options.vertical
        ? !0 === i.options.centerMode &&
          i.$list.css({ padding: "0px " + i.options.centerPadding })
        : (i.$list.height(
            i.$slides.first().outerHeight(!0) * i.options.slidesToShow
          ),
          !0 === i.options.centerMode &&
            i.$list.css({ padding: i.options.centerPadding + " 0px" })),
        (i.listWidth = i.$list.width()),
        (i.listHeight = i.$list.height()),
        !1 === i.options.vertical && !1 === i.options.variableWidth
          ? ((i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow)),
            i.$slideTrack.width(
              Math.ceil(
                i.slideWidth * i.$slideTrack.children(".slick-slide").length
              )
            ))
          : !0 === i.options.variableWidth
          ? i.$slideTrack.width(5e3 * i.slideCount)
          : ((i.slideWidth = Math.ceil(i.listWidth)),
            i.$slideTrack.height(
              Math.ceil(
                i.$slides.first().outerHeight(!0) *
                  i.$slideTrack.children(".slick-slide").length
              )
            ));
      var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
      !1 === i.options.variableWidth &&
        i.$slideTrack.children(".slick-slide").width(i.slideWidth - e);
    }),
    (e.prototype.setFade = function () {
      var e,
        t = this;
      t.$slides.each(function (o, s) {
        (e = t.slideWidth * o * -1),
          !0 === t.options.rtl
            ? i(s).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0,
              })
            : i(s).css({
                position: "relative",
                left: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0,
              });
      }),
        t.$slides
          .eq(t.currentSlide)
          .css({ zIndex: t.options.zIndex - 1, opacity: 1 });
    }),
    (e.prototype.setHeight = function () {
      var i = this;
      if (
        1 === i.options.slidesToShow &&
        !0 === i.options.adaptiveHeight &&
        !1 === i.options.vertical
      ) {
        var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
        i.$list.css("height", e);
      }
    }),
    (e.prototype.setOption = e.prototype.slickSetOption =
      function () {
        var e,
          t,
          o,
          s,
          n,
          r = this,
          l = !1;
        if (
          ("object" === i.type(arguments[0])
            ? ((o = arguments[0]), (l = arguments[1]), (n = "multiple"))
            : "string" === i.type(arguments[0]) &&
              ((o = arguments[0]),
              (s = arguments[1]),
              (l = arguments[2]),
              "responsive" === arguments[0] && "array" === i.type(arguments[1])
                ? (n = "responsive")
                : void 0 !== arguments[1] && (n = "single")),
          "single" === n)
        )
          r.options[o] = s;
        else if ("multiple" === n)
          i.each(o, function (i, e) {
            r.options[i] = e;
          });
        else if ("responsive" === n)
          for (t in s)
            if ("array" !== i.type(r.options.responsive))
              r.options.responsive = [s[t]];
            else {
              for (e = r.options.responsive.length - 1; e >= 0; )
                r.options.responsive[e].breakpoint === s[t].breakpoint &&
                  r.options.responsive.splice(e, 1),
                  e--;
              r.options.responsive.push(s[t]);
            }
        l && (r.unload(), r.reinit());
      }),
    (e.prototype.setPosition = function () {
      var i = this;
      i.setDimensions(),
        i.setHeight(),
        !1 === i.options.fade
          ? i.setCSS(i.getLeft(i.currentSlide))
          : i.setFade(),
        i.$slider.trigger("setPosition", [i]);
    }),
    (e.prototype.setProps = function () {
      var i = this,
        e = document.body.style;
      (i.positionProp = !0 === i.options.vertical ? "top" : "left"),
        "top" === i.positionProp
          ? i.$slider.addClass("slick-vertical")
          : i.$slider.removeClass("slick-vertical"),
        (void 0 === e.WebkitTransition &&
          void 0 === e.MozTransition &&
          void 0 === e.msTransition) ||
          (!0 === i.options.useCSS && (i.cssTransitions = !0)),
        i.options.fade &&
          ("number" == typeof i.options.zIndex
            ? i.options.zIndex < 3 && (i.options.zIndex = 3)
            : (i.options.zIndex = i.defaults.zIndex)),
        void 0 !== e.OTransform &&
          ((i.animType = "OTransform"),
          (i.transformType = "-o-transform"),
          (i.transitionType = "OTransition"),
          void 0 === e.perspectiveProperty &&
            void 0 === e.webkitPerspective &&
            (i.animType = !1)),
        void 0 !== e.MozTransform &&
          ((i.animType = "MozTransform"),
          (i.transformType = "-moz-transform"),
          (i.transitionType = "MozTransition"),
          void 0 === e.perspectiveProperty &&
            void 0 === e.MozPerspective &&
            (i.animType = !1)),
        void 0 !== e.webkitTransform &&
          ((i.animType = "webkitTransform"),
          (i.transformType = "-webkit-transform"),
          (i.transitionType = "webkitTransition"),
          void 0 === e.perspectiveProperty &&
            void 0 === e.webkitPerspective &&
            (i.animType = !1)),
        void 0 !== e.msTransform &&
          ((i.animType = "msTransform"),
          (i.transformType = "-ms-transform"),
          (i.transitionType = "msTransition"),
          void 0 === e.msTransform && (i.animType = !1)),
        void 0 !== e.transform &&
          !1 !== i.animType &&
          ((i.animType = "transform"),
          (i.transformType = "transform"),
          (i.transitionType = "transition")),
        (i.transformsEnabled =
          i.options.useTransform && null !== i.animType && !1 !== i.animType);
    }),
    (e.prototype.setSlideClasses = function (i) {
      var e,
        t,
        o,
        s,
        n = this;
      if (
        ((t = n.$slider
          .find(".slick-slide")
          .removeClass("slick-active slick-center slick-current")
          .attr("aria-hidden", "true")),
        n.$slides.eq(i).addClass("slick-current"),
        !0 === n.options.centerMode)
      ) {
        var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
        (e = Math.floor(n.options.slidesToShow / 2)),
          !0 === n.options.infinite &&
            (i >= e && i <= n.slideCount - 1 - e
              ? n.$slides
                  .slice(i - e + r, i + e + 1)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")
              : ((o = n.options.slidesToShow + i),
                t
                  .slice(o - e + 1 + r, o + e + 2)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")),
            0 === i
              ? t
                  .eq(t.length - 1 - n.options.slidesToShow)
                  .addClass("slick-center")
              : i === n.slideCount - 1 &&
                t.eq(n.options.slidesToShow).addClass("slick-center")),
          n.$slides.eq(i).addClass("slick-center");
      } else
        i >= 0 && i <= n.slideCount - n.options.slidesToShow
          ? n.$slides
              .slice(i, i + n.options.slidesToShow)
              .addClass("slick-active")
              .attr("aria-hidden", "false")
          : t.length <= n.options.slidesToShow
          ? t.addClass("slick-active").attr("aria-hidden", "false")
          : ((s = n.slideCount % n.options.slidesToShow),
            (o = !0 === n.options.infinite ? n.options.slidesToShow + i : i),
            n.options.slidesToShow == n.options.slidesToScroll &&
            n.slideCount - i < n.options.slidesToShow
              ? t
                  .slice(o - (n.options.slidesToShow - s), o + s)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")
              : t
                  .slice(o, o + n.options.slidesToShow)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false"));
      ("ondemand" !== n.options.lazyLoad &&
        "anticipated" !== n.options.lazyLoad) ||
        n.lazyLoad();
    }),
    (e.prototype.setupInfinite = function () {
      var e,
        t,
        o,
        s = this;
      if (
        (!0 === s.options.fade && (s.options.centerMode = !1),
        !0 === s.options.infinite &&
          !1 === s.options.fade &&
          ((t = null), s.slideCount > s.options.slidesToShow))
      ) {
        for (
          o =
            !0 === s.options.centerMode
              ? s.options.slidesToShow + 1
              : s.options.slidesToShow,
            e = s.slideCount;
          e > s.slideCount - o;
          e -= 1
        )
          (t = e - 1),
            i(s.$slides[t])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", t - s.slideCount)
              .prependTo(s.$slideTrack)
              .addClass("slick-cloned");
        for (e = 0; e < o + s.slideCount; e += 1)
          (t = e),
            i(s.$slides[t])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", t + s.slideCount)
              .appendTo(s.$slideTrack)
              .addClass("slick-cloned");
        s.$slideTrack
          .find(".slick-cloned")
          .find("[id]")
          .each(function () {
            i(this).attr("id", "");
          });
      }
    }),
    (e.prototype.interrupt = function (i) {
      var e = this;
      i || e.autoPlay(), (e.interrupted = i);
    }),
    (e.prototype.selectHandler = function (e) {
      var t = this,
        o = i(e.target).is(".slick-slide")
          ? i(e.target)
          : i(e.target).parents(".slick-slide"),
        s = parseInt(o.attr("data-slick-index"));
      s || (s = 0),
        t.slideCount <= t.options.slidesToShow
          ? t.slideHandler(s, !1, !0)
          : t.slideHandler(s);
    }),
    (e.prototype.slideHandler = function (i, e, t) {
      var o,
        s,
        n,
        r,
        l,
        d = null,
        a = this;
      if (
        ((e = e || !1),
        !(
          (!0 === a.animating && !0 === a.options.waitForAnimate) ||
          (!0 === a.options.fade && a.currentSlide === i)
        ))
      )
        if (
          (!1 === e && a.asNavFor(i),
          (o = i),
          (d = a.getLeft(o)),
          (r = a.getLeft(a.currentSlide)),
          (a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft),
          !1 === a.options.infinite &&
            !1 === a.options.centerMode &&
            (i < 0 || i > a.getDotCount() * a.options.slidesToScroll))
        )
          !1 === a.options.fade &&
            ((o = a.currentSlide),
            !0 !== t
              ? a.animateSlide(r, function () {
                  a.postSlide(o);
                })
              : a.postSlide(o));
        else if (
          !1 === a.options.infinite &&
          !0 === a.options.centerMode &&
          (i < 0 || i > a.slideCount - a.options.slidesToScroll)
        )
          !1 === a.options.fade &&
            ((o = a.currentSlide),
            !0 !== t
              ? a.animateSlide(r, function () {
                  a.postSlide(o);
                })
              : a.postSlide(o));
        else {
          if (
            (a.options.autoplay && clearInterval(a.autoPlayTimer),
            (s =
              o < 0
                ? a.slideCount % a.options.slidesToScroll != 0
                  ? a.slideCount - (a.slideCount % a.options.slidesToScroll)
                  : a.slideCount + o
                : o >= a.slideCount
                ? a.slideCount % a.options.slidesToScroll != 0
                  ? 0
                  : o - a.slideCount
                : o),
            (a.animating = !0),
            a.$slider.trigger("beforeChange", [a, a.currentSlide, s]),
            (n = a.currentSlide),
            (a.currentSlide = s),
            a.setSlideClasses(a.currentSlide),
            a.options.asNavFor &&
              (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <=
                l.options.slidesToShow &&
              l.setSlideClasses(a.currentSlide),
            a.updateDots(),
            a.updateArrows(),
            !0 === a.options.fade)
          )
            return (
              !0 !== t
                ? (a.fadeSlideOut(n),
                  a.fadeSlide(s, function () {
                    a.postSlide(s);
                  }))
                : a.postSlide(s),
              void a.animateHeight()
            );
          !0 !== t
            ? a.animateSlide(d, function () {
                a.postSlide(s);
              })
            : a.postSlide(s);
        }
    }),
    (e.prototype.startLoad = function () {
      var i = this;
      !0 === i.options.arrows &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow.hide(), i.$nextArrow.hide()),
        !0 === i.options.dots &&
          i.slideCount > i.options.slidesToShow &&
          i.$dots.hide(),
        i.$slider.addClass("slick-loading");
    }),
    (e.prototype.swipeDirection = function () {
      var i,
        e,
        t,
        o,
        s = this;
      return (
        (i = s.touchObject.startX - s.touchObject.curX),
        (e = s.touchObject.startY - s.touchObject.curY),
        (t = Math.atan2(e, i)),
        (o = Math.round((180 * t) / Math.PI)) < 0 && (o = 360 - Math.abs(o)),
        o <= 45 && o >= 0
          ? !1 === s.options.rtl
            ? "left"
            : "right"
          : o <= 360 && o >= 315
          ? !1 === s.options.rtl
            ? "left"
            : "right"
          : o >= 135 && o <= 225
          ? !1 === s.options.rtl
            ? "right"
            : "left"
          : !0 === s.options.verticalSwiping
          ? o >= 35 && o <= 135
            ? "down"
            : "up"
          : "vertical"
      );
    }),
    (e.prototype.swipeEnd = function (i) {
      var e,
        t,
        o = this;
      if (((o.dragging = !1), (o.swiping = !1), o.scrolling))
        return (o.scrolling = !1), !1;
      if (
        ((o.interrupted = !1),
        (o.shouldClick = !(o.touchObject.swipeLength > 10)),
        void 0 === o.touchObject.curX)
      )
        return !1;
      if (
        (!0 === o.touchObject.edgeHit &&
          o.$slider.trigger("edge", [o, o.swipeDirection()]),
        o.touchObject.swipeLength >= o.touchObject.minSwipe)
      ) {
        switch ((t = o.swipeDirection())) {
          case "left":
          case "down":
            (e = o.options.swipeToSlide
              ? o.checkNavigable(o.currentSlide + o.getSlideCount())
              : o.currentSlide + o.getSlideCount()),
              (o.currentDirection = 0);
            break;
          case "right":
          case "up":
            (e = o.options.swipeToSlide
              ? o.checkNavigable(o.currentSlide - o.getSlideCount())
              : o.currentSlide - o.getSlideCount()),
              (o.currentDirection = 1);
        }
        "vertical" != t &&
          (o.slideHandler(e),
          (o.touchObject = {}),
          o.$slider.trigger("swipe", [o, t]));
      } else
        o.touchObject.startX !== o.touchObject.curX &&
          (o.slideHandler(o.currentSlide), (o.touchObject = {}));
    }),
    (e.prototype.swipeHandler = function (i) {
      var e = this;
      if (
        !(
          !1 === e.options.swipe ||
          ("ontouchend" in document && !1 === e.options.swipe) ||
          (!1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))
        )
      )
        switch (
          ((e.touchObject.fingerCount =
            i.originalEvent && void 0 !== i.originalEvent.touches
              ? i.originalEvent.touches.length
              : 1),
          (e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold),
          !0 === e.options.verticalSwiping &&
            (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
          i.data.action)
        ) {
          case "start":
            e.swipeStart(i);
            break;
          case "move":
            e.swipeMove(i);
            break;
          case "end":
            e.swipeEnd(i);
        }
    }),
    (e.prototype.swipeMove = function (i) {
      var e,
        t,
        o,
        s,
        n,
        r,
        l = this;
      return (
        (n = void 0 !== i.originalEvent ? i.originalEvent.touches : null),
        !(!l.dragging || l.scrolling || (n && 1 !== n.length)) &&
          ((e = l.getLeft(l.currentSlide)),
          (l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX),
          (l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY),
          (l.touchObject.swipeLength = Math.round(
            Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))
          )),
          (r = Math.round(
            Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))
          )),
          !l.options.verticalSwiping && !l.swiping && r > 4
            ? ((l.scrolling = !0), !1)
            : (!0 === l.options.verticalSwiping &&
                (l.touchObject.swipeLength = r),
              (t = l.swipeDirection()),
              void 0 !== i.originalEvent &&
                l.touchObject.swipeLength > 4 &&
                ((l.swiping = !0), i.preventDefault()),
              (s =
                (!1 === l.options.rtl ? 1 : -1) *
                (l.touchObject.curX > l.touchObject.startX ? 1 : -1)),
              !0 === l.options.verticalSwiping &&
                (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1),
              (o = l.touchObject.swipeLength),
              (l.touchObject.edgeHit = !1),
              !1 === l.options.infinite &&
                ((0 === l.currentSlide && "right" === t) ||
                  (l.currentSlide >= l.getDotCount() && "left" === t)) &&
                ((o = l.touchObject.swipeLength * l.options.edgeFriction),
                (l.touchObject.edgeHit = !0)),
              !1 === l.options.vertical
                ? (l.swipeLeft = e + o * s)
                : (l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s),
              !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s),
              !0 !== l.options.fade &&
                !1 !== l.options.touchMove &&
                (!0 === l.animating
                  ? ((l.swipeLeft = null), !1)
                  : void l.setCSS(l.swipeLeft))))
      );
    }),
    (e.prototype.swipeStart = function (i) {
      var e,
        t = this;
      if (
        ((t.interrupted = !0),
        1 !== t.touchObject.fingerCount ||
          t.slideCount <= t.options.slidesToShow)
      )
        return (t.touchObject = {}), !1;
      void 0 !== i.originalEvent &&
        void 0 !== i.originalEvent.touches &&
        (e = i.originalEvent.touches[0]),
        (t.touchObject.startX = t.touchObject.curX =
          void 0 !== e ? e.pageX : i.clientX),
        (t.touchObject.startY = t.touchObject.curY =
          void 0 !== e ? e.pageY : i.clientY),
        (t.dragging = !0);
    }),
    (e.prototype.unfilterSlides = e.prototype.slickUnfilter =
      function () {
        var i = this;
        null !== i.$slidesCache &&
          (i.unload(),
          i.$slideTrack.children(this.options.slide).detach(),
          i.$slidesCache.appendTo(i.$slideTrack),
          i.reinit());
      }),
    (e.prototype.unload = function () {
      var e = this;
      i(".slick-cloned", e.$slider).remove(),
        e.$dots && e.$dots.remove(),
        e.$prevArrow &&
          e.htmlExpr.test(e.options.prevArrow) &&
          e.$prevArrow.remove(),
        e.$nextArrow &&
          e.htmlExpr.test(e.options.nextArrow) &&
          e.$nextArrow.remove(),
        e.$slides
          .removeClass("slick-slide slick-active slick-visible slick-current")
          .attr("aria-hidden", "true")
          .css("width", "");
    }),
    (e.prototype.unslick = function (i) {
      var e = this;
      e.$slider.trigger("unslick", [e, i]), e.destroy();
    }),
    (e.prototype.updateArrows = function () {
      var i = this;
      Math.floor(i.options.slidesToShow / 2),
        !0 === i.options.arrows &&
          i.slideCount > i.options.slidesToShow &&
          !i.options.infinite &&
          (i.$prevArrow
            .removeClass("slick-disabled")
            .attr("aria-disabled", "false"),
          i.$nextArrow
            .removeClass("slick-disabled")
            .attr("aria-disabled", "false"),
          0 === i.currentSlide
            ? (i.$prevArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              i.$nextArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false"))
            : i.currentSlide >= i.slideCount - i.options.slidesToShow &&
              !1 === i.options.centerMode
            ? (i.$nextArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              i.$prevArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false"))
            : i.currentSlide >= i.slideCount - 1 &&
              !0 === i.options.centerMode &&
              (i.$nextArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              i.$prevArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false")));
    }),
    (e.prototype.updateDots = function () {
      var i = this;
      null !== i.$dots &&
        (i.$dots.find("li").removeClass("slick-active").end(),
        i.$dots
          .find("li")
          .eq(Math.floor(i.currentSlide / i.options.slidesToScroll))
          .addClass("slick-active"));
    }),
    (e.prototype.visibility = function () {
      var i = this;
      i.options.autoplay &&
        (document[i.hidden] ? (i.interrupted = !0) : (i.interrupted = !1));
    }),
    (i.fn.slick = function () {
      var i,
        t,
        o = this,
        s = arguments[0],
        n = Array.prototype.slice.call(arguments, 1),
        r = o.length;
      for (i = 0; i < r; i++)
        if (
          ("object" == typeof s || void 0 === s
            ? (o[i].slick = new e(o[i], s))
            : (t = o[i].slick[s].apply(o[i].slick, n)),
          void 0 !== t)
        )
          return t;
      return o;
    });
});
/*!/wp-content/cache/asset-cleanup/js/item/everfx-bootstrap-v5b600e459832ca1227d1ed252fb0dfbcc8754c83.js*/ /*!/wp-content/themes/everfx_3.0/assets/bootstrap/bootstrap.bundle.min.js*/ /*!
 * Bootstrap v4.3.1 (https://getbootstrap.com/)
 * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */ !(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports, require("jquery"))
    : "function" == typeof define && define.amd
    ? define(["exports", "jquery"], e)
    : e(((t = t || self).bootstrap = {}), t.jQuery);
})(this, function (t, p) {
  "use strict";
  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(t, i.key, i);
    }
  }
  function s(t, e, n) {
    return e && i(t.prototype, e), n && i(t, n), t;
  }
  function l(o) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {},
        e = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols &&
        (e = e.concat(
          Object.getOwnPropertySymbols(r).filter(function (t) {
            return Object.getOwnPropertyDescriptor(r, t).enumerable;
          })
        )),
        e.forEach(function (t) {
          var e, n, i;
          (e = o),
            (i = r[(n = t)]),
            n in e
              ? Object.defineProperty(e, n, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[n] = i);
        });
    }
    return o;
  }
  p = p && p.hasOwnProperty("default") ? p.default : p;
  var e = "transitionend";
  function n(t) {
    var e = this,
      n = !1;
    return (
      p(this).one(m.TRANSITION_END, function () {
        n = !0;
      }),
      setTimeout(function () {
        n || m.triggerTransitionEnd(e);
      }, t),
      this
    );
  }
  var m = {
    TRANSITION_END: "bsTransitionEnd",
    getUID: function (t) {
      for (; (t += ~~(1e6 * Math.random())), document.getElementById(t); );
      return t;
    },
    getSelectorFromElement: function (t) {
      var e = t.getAttribute("data-target");
      if (!e || "#" === e) {
        var n = t.getAttribute("href");
        e = n && "#" !== n ? n.trim() : "";
      }
      try {
        return document.querySelector(e) ? e : null;
      } catch (t) {
        return null;
      }
    },
    getTransitionDurationFromElement: function (t) {
      if (!t) return 0;
      var e = p(t).css("transition-duration"),
        n = p(t).css("transition-delay"),
        i = parseFloat(e),
        o = parseFloat(n);
      return i || o
        ? ((e = e.split(",")[0]),
          (n = n.split(",")[0]),
          1e3 * (parseFloat(e) + parseFloat(n)))
        : 0;
    },
    reflow: function (t) {
      return t.offsetHeight;
    },
    triggerTransitionEnd: function (t) {
      p(t).trigger(e);
    },
    supportsTransitionEnd: function () {
      return Boolean(e);
    },
    isElement: function (t) {
      return (t[0] || t).nodeType;
    },
    typeCheckConfig: function (t, e, n) {
      for (var i in n)
        if (Object.prototype.hasOwnProperty.call(n, i)) {
          var o = n[i],
            r = e[i],
            s =
              r && m.isElement(r)
                ? "element"
                : ((a = r),
                  {}.toString
                    .call(a)
                    .match(/\s([a-z]+)/i)[1]
                    .toLowerCase());
          if (!new RegExp(o).test(s))
            throw new Error(
              t.toUpperCase() +
                ': Option "' +
                i +
                '" provided type "' +
                s +
                '" but expected type "' +
                o +
                '".'
            );
        }
      var a;
    },
    findShadowRoot: function (t) {
      if (!document.documentElement.attachShadow) return null;
      if ("function" != typeof t.getRootNode)
        return t instanceof ShadowRoot
          ? t
          : t.parentNode
          ? m.findShadowRoot(t.parentNode)
          : null;
      var e = t.getRootNode();
      return e instanceof ShadowRoot ? e : null;
    },
  };
  (p.fn.emulateTransitionEnd = n),
    (p.event.special[m.TRANSITION_END] = {
      bindType: e,
      delegateType: e,
      handle: function (t) {
        if (p(t.target).is(this))
          return t.handleObj.handler.apply(this, arguments);
      },
    });
  var o = "alert",
    r = "bs.alert",
    a = "." + r,
    c = p.fn[o],
    h = {
      CLOSE: "close" + a,
      CLOSED: "closed" + a,
      CLICK_DATA_API: "click" + a + ".data-api",
    },
    u = "alert",
    f = "fade",
    d = "show",
    g = (function () {
      function i(t) {
        this._element = t;
      }
      var t = i.prototype;
      return (
        (t.close = function (t) {
          var e = this._element;
          t && (e = this._getRootElement(t)),
            this._triggerCloseEvent(e).isDefaultPrevented() ||
              this._removeElement(e);
        }),
        (t.dispose = function () {
          p.removeData(this._element, r), (this._element = null);
        }),
        (t._getRootElement = function (t) {
          var e = m.getSelectorFromElement(t),
            n = !1;
          return (
            e && (n = document.querySelector(e)),
            n || (n = p(t).closest("." + u)[0]),
            n
          );
        }),
        (t._triggerCloseEvent = function (t) {
          var e = p.Event(h.CLOSE);
          return p(t).trigger(e), e;
        }),
        (t._removeElement = function (e) {
          var n = this;
          if ((p(e).removeClass(d), p(e).hasClass(f))) {
            var t = m.getTransitionDurationFromElement(e);
            p(e)
              .one(m.TRANSITION_END, function (t) {
                return n._destroyElement(e, t);
              })
              .emulateTransitionEnd(t);
          } else this._destroyElement(e);
        }),
        (t._destroyElement = function (t) {
          p(t).detach().trigger(h.CLOSED).remove();
        }),
        (i._jQueryInterface = function (n) {
          return this.each(function () {
            var t = p(this),
              e = t.data(r);
            e || ((e = new i(this)), t.data(r, e)), "close" === n && e[n](this);
          });
        }),
        (i._handleDismiss = function (e) {
          return function (t) {
            t && t.preventDefault(), e.close(this);
          };
        }),
        s(i, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.3.1";
            },
          },
        ]),
        i
      );
    })();
  p(document).on(
    h.CLICK_DATA_API,
    '[data-dismiss="alert"]',
    g._handleDismiss(new g())
  ),
    (p.fn[o] = g._jQueryInterface),
    (p.fn[o].Constructor = g),
    (p.fn[o].noConflict = function () {
      return (p.fn[o] = c), g._jQueryInterface;
    });
  var _ = "button",
    v = "bs.button",
    y = "." + v,
    E = ".data-api",
    b = p.fn[_],
    w = "active",
    C = "btn",
    T = "focus",
    S = '[data-toggle^="button"]',
    D = '[data-toggle="buttons"]',
    I = 'input:not([type="hidden"])',
    A = ".active",
    O = ".btn",
    N = {
      CLICK_DATA_API: "click" + y + E,
      FOCUS_BLUR_DATA_API: "focus" + y + E + " blur" + y + E,
    },
    k = (function () {
      function n(t) {
        this._element = t;
      }
      var t = n.prototype;
      return (
        (t.toggle = function () {
          var t = !0,
            e = !0,
            n = p(this._element).closest(D)[0];
          if (n) {
            var i = this._element.querySelector(I);
            if (i) {
              if ("radio" === i.type)
                if (i.checked && this._element.classList.contains(w)) t = !1;
                else {
                  var o = n.querySelector(A);
                  o && p(o).removeClass(w);
                }
              if (t) {
                if (
                  i.hasAttribute("disabled") ||
                  n.hasAttribute("disabled") ||
                  i.classList.contains("disabled") ||
                  n.classList.contains("disabled")
                )
                  return;
                (i.checked = !this._element.classList.contains(w)),
                  p(i).trigger("change");
              }
              i.focus(), (e = !1);
            }
          }
          e &&
            this._element.setAttribute(
              "aria-pressed",
              !this._element.classList.contains(w)
            ),
            t && p(this._element).toggleClass(w);
        }),
        (t.dispose = function () {
          p.removeData(this._element, v), (this._element = null);
        }),
        (n._jQueryInterface = function (e) {
          return this.each(function () {
            var t = p(this).data(v);
            t || ((t = new n(this)), p(this).data(v, t)),
              "toggle" === e && t[e]();
          });
        }),
        s(n, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.3.1";
            },
          },
        ]),
        n
      );
    })();
  p(document)
    .on(N.CLICK_DATA_API, S, function (t) {
      t.preventDefault();
      var e = t.target;
      p(e).hasClass(C) || (e = p(e).closest(O)),
        k._jQueryInterface.call(p(e), "toggle");
    })
    .on(N.FOCUS_BLUR_DATA_API, S, function (t) {
      var e = p(t.target).closest(O)[0];
      p(e).toggleClass(T, /^focus(in)?$/.test(t.type));
    }),
    (p.fn[_] = k._jQueryInterface),
    (p.fn[_].Constructor = k),
    (p.fn[_].noConflict = function () {
      return (p.fn[_] = b), k._jQueryInterface;
    });
  var L = "carousel",
    x = "bs.carousel",
    P = "." + x,
    H = ".data-api",
    j = p.fn[L],
    R = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: "hover",
      wrap: !0,
      touch: !0,
    },
    F = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      slide: "(boolean|string)",
      pause: "(string|boolean)",
      wrap: "boolean",
      touch: "boolean",
    },
    M = "next",
    W = "prev",
    U = "left",
    B = "right",
    q = {
      SLIDE: "slide" + P,
      SLID: "slid" + P,
      KEYDOWN: "keydown" + P,
      MOUSEENTER: "mouseenter" + P,
      MOUSELEAVE: "mouseleave" + P,
      TOUCHSTART: "touchstart" + P,
      TOUCHMOVE: "touchmove" + P,
      TOUCHEND: "touchend" + P,
      POINTERDOWN: "pointerdown" + P,
      POINTERUP: "pointerup" + P,
      DRAG_START: "dragstart" + P,
      LOAD_DATA_API: "load" + P + H,
      CLICK_DATA_API: "click" + P + H,
    },
    K = "carousel",
    Q = "active",
    V = "slide",
    Y = "carousel-item-right",
    z = "carousel-item-left",
    X = "carousel-item-next",
    G = "carousel-item-prev",
    $ = "pointer-event",
    J = ".active",
    Z = ".active.carousel-item",
    tt = ".carousel-item",
    et = ".carousel-item img",
    nt = ".carousel-item-next, .carousel-item-prev",
    it = ".carousel-indicators",
    ot = "[data-slide], [data-slide-to]",
    rt = '[data-ride="carousel"]',
    st = { TOUCH: "touch", PEN: "pen" },
    at = (function () {
      function r(t, e) {
        (this._items = null),
          (this._interval = null),
          (this._activeElement = null),
          (this._isPaused = !1),
          (this._isSliding = !1),
          (this.touchTimeout = null),
          (this.touchStartX = 0),
          (this.touchDeltaX = 0),
          (this._config = this._getConfig(e)),
          (this._element = t),
          (this._indicatorsElement = this._element.querySelector(it)),
          (this._touchSupported =
            "ontouchstart" in document.documentElement ||
            0 < navigator.maxTouchPoints),
          (this._pointerEvent = Boolean(
            window.PointerEvent || window.MSPointerEvent
          )),
          this._addEventListeners();
      }
      var t = r.prototype;
      return (
        (t.next = function () {
          this._isSliding || this._slide(M);
        }),
        (t.nextWhenVisible = function () {
          !document.hidden &&
            p(this._element).is(":visible") &&
            "hidden" !== p(this._element).css("visibility") &&
            this.next();
        }),
        (t.prev = function () {
          this._isSliding || this._slide(W);
        }),
        (t.pause = function (t) {
          t || (this._isPaused = !0),
            this._element.querySelector(nt) &&
              (m.triggerTransitionEnd(this._element), this.cycle(!0)),
            clearInterval(this._interval),
            (this._interval = null);
        }),
        (t.cycle = function (t) {
          t || (this._isPaused = !1),
            this._interval &&
              (clearInterval(this._interval), (this._interval = null)),
            this._config.interval &&
              !this._isPaused &&
              (this._interval = setInterval(
                (document.visibilityState
                  ? this.nextWhenVisible
                  : this.next
                ).bind(this),
                this._config.interval
              ));
        }),
        (t.to = function (t) {
          var e = this;
          this._activeElement = this._element.querySelector(Z);
          var n = this._getItemIndex(this._activeElement);
          if (!(t > this._items.length - 1 || t < 0))
            if (this._isSliding)
              p(this._element).one(q.SLID, function () {
                return e.to(t);
              });
            else {
              if (n === t) return this.pause(), void this.cycle();
              var i = n < t ? M : W;
              this._slide(i, this._items[t]);
            }
        }),
        (t.dispose = function () {
          p(this._element).off(P),
            p.removeData(this._element, x),
            (this._items = null),
            (this._config = null),
            (this._element = null),
            (this._interval = null),
            (this._isPaused = null),
            (this._isSliding = null),
            (this._activeElement = null),
            (this._indicatorsElement = null);
        }),
        (t._getConfig = function (t) {
          return (t = l({}, R, t)), m.typeCheckConfig(L, t, F), t;
        }),
        (t._handleSwipe = function () {
          var t = Math.abs(this.touchDeltaX);
          if (!(t <= 40)) {
            var e = t / this.touchDeltaX;
            0 < e && this.prev(), e < 0 && this.next();
          }
        }),
        (t._addEventListeners = function () {
          var e = this;
          this._config.keyboard &&
            p(this._element).on(q.KEYDOWN, function (t) {
              return e._keydown(t);
            }),
            "hover" === this._config.pause &&
              p(this._element)
                .on(q.MOUSEENTER, function (t) {
                  return e.pause(t);
                })
                .on(q.MOUSELEAVE, function (t) {
                  return e.cycle(t);
                }),
            this._config.touch && this._addTouchEventListeners();
        }),
        (t._addTouchEventListeners = function () {
          var n = this;
          if (this._touchSupported) {
            var e = function (t) {
                n._pointerEvent && st[t.originalEvent.pointerType.toUpperCase()]
                  ? (n.touchStartX = t.originalEvent.clientX)
                  : n._pointerEvent ||
                    (n.touchStartX = t.originalEvent.touches[0].clientX);
              },
              i = function (t) {
                n._pointerEvent &&
                  st[t.originalEvent.pointerType.toUpperCase()] &&
                  (n.touchDeltaX = t.originalEvent.clientX - n.touchStartX),
                  n._handleSwipe(),
                  "hover" === n._config.pause &&
                    (n.pause(),
                    n.touchTimeout && clearTimeout(n.touchTimeout),
                    (n.touchTimeout = setTimeout(function (t) {
                      return n.cycle(t);
                    }, 500 + n._config.interval)));
              };
            p(this._element.querySelectorAll(et)).on(
              q.DRAG_START,
              function (t) {
                return t.preventDefault();
              }
            ),
              this._pointerEvent
                ? (p(this._element).on(q.POINTERDOWN, function (t) {
                    return e(t);
                  }),
                  p(this._element).on(q.POINTERUP, function (t) {
                    return i(t);
                  }),
                  this._element.classList.add($))
                : (p(this._element).on(q.TOUCHSTART, function (t) {
                    return e(t);
                  }),
                  p(this._element).on(q.TOUCHMOVE, function (t) {
                    var e;
                    (e = t).originalEvent.touches &&
                    1 < e.originalEvent.touches.length
                      ? (n.touchDeltaX = 0)
                      : (n.touchDeltaX =
                          e.originalEvent.touches[0].clientX - n.touchStartX);
                  }),
                  p(this._element).on(q.TOUCHEND, function (t) {
                    return i(t);
                  }));
          }
        }),
        (t._keydown = function (t) {
          if (!/input|textarea/i.test(t.target.tagName))
            switch (t.which) {
              case 37:
                t.preventDefault(), this.prev();
                break;
              case 39:
                t.preventDefault(), this.next();
            }
        }),
        (t._getItemIndex = function (t) {
          return (
            (this._items =
              t && t.parentNode
                ? [].slice.call(t.parentNode.querySelectorAll(tt))
                : []),
            this._items.indexOf(t)
          );
        }),
        (t._getItemByDirection = function (t, e) {
          var n = t === M,
            i = t === W,
            o = this._getItemIndex(e),
            r = this._items.length - 1;
          if (((i && 0 === o) || (n && o === r)) && !this._config.wrap)
            return e;
          var s = (o + (t === W ? -1 : 1)) % this._items.length;
          return -1 === s
            ? this._items[this._items.length - 1]
            : this._items[s];
        }),
        (t._triggerSlideEvent = function (t, e) {
          var n = this._getItemIndex(t),
            i = this._getItemIndex(this._element.querySelector(Z)),
            o = p.Event(q.SLIDE, {
              relatedTarget: t,
              direction: e,
              from: i,
              to: n,
            });
          return p(this._element).trigger(o), o;
        }),
        (t._setActiveIndicatorElement = function (t) {
          if (this._indicatorsElement) {
            var e = [].slice.call(this._indicatorsElement.querySelectorAll(J));
            p(e).removeClass(Q);
            var n = this._indicatorsElement.children[this._getItemIndex(t)];
            n && p(n).addClass(Q);
          }
        }),
        (t._slide = function (t, e) {
          var n,
            i,
            o,
            r = this,
            s = this._element.querySelector(Z),
            a = this._getItemIndex(s),
            l = e || (s && this._getItemByDirection(t, s)),
            c = this._getItemIndex(l),
            h = Boolean(this._interval);
          if (
            ((o = t === M ? ((n = z), (i = X), U) : ((n = Y), (i = G), B)),
            l && p(l).hasClass(Q))
          )
            this._isSliding = !1;
          else if (
            !this._triggerSlideEvent(l, o).isDefaultPrevented() &&
            s &&
            l
          ) {
            (this._isSliding = !0),
              h && this.pause(),
              this._setActiveIndicatorElement(l);
            var u = p.Event(q.SLID, {
              relatedTarget: l,
              direction: o,
              from: a,
              to: c,
            });
            if (p(this._element).hasClass(V)) {
              p(l).addClass(i), m.reflow(l), p(s).addClass(n), p(l).addClass(n);
              var f = parseInt(l.getAttribute("data-interval"), 10);
              this._config.interval = f
                ? ((this._config.defaultInterval =
                    this._config.defaultInterval || this._config.interval),
                  f)
                : this._config.defaultInterval || this._config.interval;
              var d = m.getTransitionDurationFromElement(s);
              p(s)
                .one(m.TRANSITION_END, function () {
                  p(l)
                    .removeClass(n + " " + i)
                    .addClass(Q),
                    p(s).removeClass(Q + " " + i + " " + n),
                    (r._isSliding = !1),
                    setTimeout(function () {
                      return p(r._element).trigger(u);
                    }, 0);
                })
                .emulateTransitionEnd(d);
            } else
              p(s).removeClass(Q),
                p(l).addClass(Q),
                (this._isSliding = !1),
                p(this._element).trigger(u);
            h && this.cycle();
          }
        }),
        (r._jQueryInterface = function (i) {
          return this.each(function () {
            var t = p(this).data(x),
              e = l({}, R, p(this).data());
            "object" == typeof i && (e = l({}, e, i));
            var n = "string" == typeof i ? i : e.slide;
            if (
              (t || ((t = new r(this, e)), p(this).data(x, t)),
              "number" == typeof i)
            )
              t.to(i);
            else if ("string" == typeof n) {
              if ("undefined" == typeof t[n])
                throw new TypeError('No method named "' + n + '"');
              t[n]();
            } else e.interval && e.ride && (t.pause(), t.cycle());
          });
        }),
        (r._dataApiClickHandler = function (t) {
          var e = m.getSelectorFromElement(this);
          if (e) {
            var n = p(e)[0];
            if (n && p(n).hasClass(K)) {
              var i = l({}, p(n).data(), p(this).data()),
                o = this.getAttribute("data-slide-to");
              o && (i.interval = !1),
                r._jQueryInterface.call(p(n), i),
                o && p(n).data(x).to(o),
                t.preventDefault();
            }
          }
        }),
        s(r, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.3.1";
            },
          },
          {
            key: "Default",
            get: function () {
              return R;
            },
          },
        ]),
        r
      );
    })();
  p(document).on(q.CLICK_DATA_API, ot, at._dataApiClickHandler),
    p(window).on(q.LOAD_DATA_API, function () {
      for (
        var t = [].slice.call(document.querySelectorAll(rt)),
          e = 0,
          n = t.length;
        e < n;
        e++
      ) {
        var i = p(t[e]);
        at._jQueryInterface.call(i, i.data());
      }
    }),
    (p.fn[L] = at._jQueryInterface),
    (p.fn[L].Constructor = at),
    (p.fn[L].noConflict = function () {
      return (p.fn[L] = j), at._jQueryInterface;
    });
  var lt = "collapse",
    ct = "bs.collapse",
    ht = "." + ct,
    ut = p.fn[lt],
    ft = { toggle: !0, parent: "" },
    dt = { toggle: "boolean", parent: "(string|element)" },
    pt = {
      SHOW: "show" + ht,
      SHOWN: "shown" + ht,
      HIDE: "hide" + ht,
      HIDDEN: "hidden" + ht,
      CLICK_DATA_API: "click" + ht + ".data-api",
    },
    mt = "show",
    gt = "collapse",
    _t = "collapsing",
    vt = "collapsed",
    yt = "width",
    Et = "height",
    bt = ".show, .collapsing",
    wt = '[data-toggle="collapse"]',
    Ct = (function () {
      function a(e, t) {
        (this._isTransitioning = !1),
          (this._element = e),
          (this._config = this._getConfig(t)),
          (this._triggerArray = [].slice.call(
            document.querySelectorAll(
              '[data-toggle="collapse"][href="#' +
                e.id +
                '"],[data-toggle="collapse"][data-target="#' +
                e.id +
                '"]'
            )
          ));
        for (
          var n = [].slice.call(document.querySelectorAll(wt)),
            i = 0,
            o = n.length;
          i < o;
          i++
        ) {
          var r = n[i],
            s = m.getSelectorFromElement(r),
            a = [].slice
              .call(document.querySelectorAll(s))
              .filter(function (t) {
                return t === e;
              });
          null !== s &&
            0 < a.length &&
            ((this._selector = s), this._triggerArray.push(r));
        }
        (this._parent = this._config.parent ? this._getParent() : null),
          this._config.parent ||
            this._addAriaAndCollapsedClass(this._element, this._triggerArray),
          this._config.toggle && this.toggle();
      }
      var t = a.prototype;
      return (
        (t.toggle = function () {
          p(this._element).hasClass(mt) ? this.hide() : this.show();
        }),
        (t.show = function () {
          var t,
            e,
            n = this;
          if (
            !this._isTransitioning &&
            !p(this._element).hasClass(mt) &&
            (this._parent &&
              0 ===
                (t = [].slice
                  .call(this._parent.querySelectorAll(bt))
                  .filter(function (t) {
                    return "string" == typeof n._config.parent
                      ? t.getAttribute("data-parent") === n._config.parent
                      : t.classList.contains(gt);
                  })).length &&
              (t = null),
            !(
              t &&
              (e = p(t).not(this._selector).data(ct)) &&
              e._isTransitioning
            ))
          ) {
            var i = p.Event(pt.SHOW);
            if ((p(this._element).trigger(i), !i.isDefaultPrevented())) {
              t &&
                (a._jQueryInterface.call(p(t).not(this._selector), "hide"),
                e || p(t).data(ct, null));
              var o = this._getDimension();
              p(this._element).removeClass(gt).addClass(_t),
                (this._element.style[o] = 0),
                this._triggerArray.length &&
                  p(this._triggerArray)
                    .removeClass(vt)
                    .attr("aria-expanded", !0),
                this.setTransitioning(!0);
              var r = "scroll" + (o[0].toUpperCase() + o.slice(1)),
                s = m.getTransitionDurationFromElement(this._element);
              p(this._element)
                .one(m.TRANSITION_END, function () {
                  p(n._element).removeClass(_t).addClass(gt).addClass(mt),
                    (n._element.style[o] = ""),
                    n.setTransitioning(!1),
                    p(n._element).trigger(pt.SHOWN);
                })
                .emulateTransitionEnd(s),
                (this._element.style[o] = this._element[r] + "px");
            }
          }
        }),
        (t.hide = function () {
          var t = this;
          if (!this._isTransitioning && p(this._element).hasClass(mt)) {
            var e = p.Event(pt.HIDE);
            if ((p(this._element).trigger(e), !e.isDefaultPrevented())) {
              var n = this._getDimension();
              (this._element.style[n] =
                this._element.getBoundingClientRect()[n] + "px"),
                m.reflow(this._element),
                p(this._element).addClass(_t).removeClass(gt).removeClass(mt);
              var i = this._triggerArray.length;
              if (0 < i)
                for (var o = 0; o < i; o++) {
                  var r = this._triggerArray[o],
                    s = m.getSelectorFromElement(r);
                  if (null !== s)
                    p([].slice.call(document.querySelectorAll(s))).hasClass(
                      mt
                    ) || p(r).addClass(vt).attr("aria-expanded", !1);
                }
              this.setTransitioning(!0);
              this._element.style[n] = "";
              var a = m.getTransitionDurationFromElement(this._element);
              p(this._element)
                .one(m.TRANSITION_END, function () {
                  t.setTransitioning(!1),
                    p(t._element)
                      .removeClass(_t)
                      .addClass(gt)
                      .trigger(pt.HIDDEN);
                })
                .emulateTransitionEnd(a);
            }
          }
        }),
        (t.setTransitioning = function (t) {
          this._isTransitioning = t;
        }),
        (t.dispose = function () {
          p.removeData(this._element, ct),
            (this._config = null),
            (this._parent = null),
            (this._element = null),
            (this._triggerArray = null),
            (this._isTransitioning = null);
        }),
        (t._getConfig = function (t) {
          return (
            ((t = l({}, ft, t)).toggle = Boolean(t.toggle)),
            m.typeCheckConfig(lt, t, dt),
            t
          );
        }),
        (t._getDimension = function () {
          return p(this._element).hasClass(yt) ? yt : Et;
        }),
        (t._getParent = function () {
          var t,
            n = this;
          m.isElement(this._config.parent)
            ? ((t = this._config.parent),
              "undefined" != typeof this._config.parent.jquery &&
                (t = this._config.parent[0]))
            : (t = document.querySelector(this._config.parent));
          var e =
              '[data-toggle="collapse"][data-parent="' +
              this._config.parent +
              '"]',
            i = [].slice.call(t.querySelectorAll(e));
          return (
            p(i).each(function (t, e) {
              n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e]);
            }),
            t
          );
        }),
        (t._addAriaAndCollapsedClass = function (t, e) {
          var n = p(t).hasClass(mt);
          e.length && p(e).toggleClass(vt, !n).attr("aria-expanded", n);
        }),
        (a._getTargetFromElement = function (t) {
          var e = m.getSelectorFromElement(t);
          return e ? document.querySelector(e) : null;
        }),
        (a._jQueryInterface = function (i) {
          return this.each(function () {
            var t = p(this),
              e = t.data(ct),
              n = l({}, ft, t.data(), "object" == typeof i && i ? i : {});
            if (
              (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1),
              e || ((e = new a(this, n)), t.data(ct, e)),
              "string" == typeof i)
            ) {
              if ("undefined" == typeof e[i])
                throw new TypeError('No method named "' + i + '"');
              e[i]();
            }
          });
        }),
        s(a, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.3.1";
            },
          },
          {
            key: "Default",
            get: function () {
              return ft;
            },
          },
        ]),
        a
      );
    })();
  p(document).on(pt.CLICK_DATA_API, wt, function (t) {
    "A" === t.currentTarget.tagName && t.preventDefault();
    var n = p(this),
      e = m.getSelectorFromElement(this),
      i = [].slice.call(document.querySelectorAll(e));
    p(i).each(function () {
      var t = p(this),
        e = t.data(ct) ? "toggle" : n.data();
      Ct._jQueryInterface.call(t, e);
    });
  }),
    (p.fn[lt] = Ct._jQueryInterface),
    (p.fn[lt].Constructor = Ct),
    (p.fn[lt].noConflict = function () {
      return (p.fn[lt] = ut), Ct._jQueryInterface;
    });
  for (
    var Tt = "undefined" != typeof window && "undefined" != typeof document,
      St = ["Edge", "Trident", "Firefox"],
      Dt = 0,
      It = 0;
    It < St.length;
    It += 1
  )
    if (Tt && 0 <= navigator.userAgent.indexOf(St[It])) {
      Dt = 1;
      break;
    }
  var At =
    Tt && window.Promise
      ? function (t) {
          var e = !1;
          return function () {
            e ||
              ((e = !0),
              window.Promise.resolve().then(function () {
                (e = !1), t();
              }));
          };
        }
      : function (t) {
          var e = !1;
          return function () {
            e ||
              ((e = !0),
              setTimeout(function () {
                (e = !1), t();
              }, Dt));
          };
        };
  function Ot(t) {
    return t && "[object Function]" === {}.toString.call(t);
  }
  function Nt(t, e) {
    if (1 !== t.nodeType) return [];
    var n = t.ownerDocument.defaultView.getComputedStyle(t, null);
    return e ? n[e] : n;
  }
  function kt(t) {
    return "HTML" === t.nodeName ? t : t.parentNode || t.host;
  }
  function Lt(t) {
    if (!t) return document.body;
    switch (t.nodeName) {
      case "HTML":
      case "BODY":
        return t.ownerDocument.body;
      case "#document":
        return t.body;
    }
    var e = Nt(t),
      n = e.overflow,
      i = e.overflowX,
      o = e.overflowY;
    return /(auto|scroll|overlay)/.test(n + o + i) ? t : Lt(kt(t));
  }
  var xt = Tt && !(!window.MSInputMethodContext || !document.documentMode),
    Pt = Tt && /MSIE 10/.test(navigator.userAgent);
  function Ht(t) {
    return 11 === t ? xt : 10 === t ? Pt : xt || Pt;
  }
  function jt(t) {
    if (!t) return document.documentElement;
    for (
      var e = Ht(10) ? document.body : null, n = t.offsetParent || null;
      n === e && t.nextElementSibling;

    )
      n = (t = t.nextElementSibling).offsetParent;
    var i = n && n.nodeName;
    return i && "BODY" !== i && "HTML" !== i
      ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) &&
        "static" === Nt(n, "position")
        ? jt(n)
        : n
      : t
      ? t.ownerDocument.documentElement
      : document.documentElement;
  }
  function Rt(t) {
    return null !== t.parentNode ? Rt(t.parentNode) : t;
  }
  function Ft(t, e) {
    if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
    var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
      i = n ? t : e,
      o = n ? e : t,
      r = document.createRange();
    r.setStart(i, 0), r.setEnd(o, 0);
    var s,
      a,
      l = r.commonAncestorContainer;
    if ((t !== l && e !== l) || i.contains(o))
      return "BODY" === (a = (s = l).nodeName) ||
        ("HTML" !== a && jt(s.firstElementChild) !== s)
        ? jt(l)
        : l;
    var c = Rt(t);
    return c.host ? Ft(c.host, e) : Ft(t, Rt(e).host);
  }
  function Mt(t) {
    var e =
        "top" ===
        (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top")
          ? "scrollTop"
          : "scrollLeft",
      n = t.nodeName;
    if ("BODY" !== n && "HTML" !== n) return t[e];
    var i = t.ownerDocument.documentElement;
    return (t.ownerDocument.scrollingElement || i)[e];
  }
  function Wt(t, e) {
    var n = "x" === e ? "Left" : "Top",
      i = "Left" === n ? "Right" : "Bottom";
    return (
      parseFloat(t["border" + n + "Width"], 10) +
      parseFloat(t["border" + i + "Width"], 10)
    );
  }
  function Ut(t, e, n, i) {
    return Math.max(
      e["offset" + t],
      e["scroll" + t],
      n["client" + t],
      n["offset" + t],
      n["scroll" + t],
      Ht(10)
        ? parseInt(n["offset" + t]) +
            parseInt(i["margin" + ("Height" === t ? "Top" : "Left")]) +
            parseInt(i["margin" + ("Height" === t ? "Bottom" : "Right")])
        : 0
    );
  }
  function Bt(t) {
    var e = t.body,
      n = t.documentElement,
      i = Ht(10) && getComputedStyle(n);
    return { height: Ut("Height", e, n, i), width: Ut("Width", e, n, i) };
  }
  var qt = (function () {
      function i(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      return function (t, e, n) {
        return e && i(t.prototype, e), n && i(t, n), t;
      };
    })(),
    Kt = function (t, e, n) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = n),
        t
      );
    },
    Qt =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
        return t;
      };
  function Vt(t) {
    return Qt({}, t, { right: t.left + t.width, bottom: t.top + t.height });
  }
  function Yt(t) {
    var e = {};
    try {
      if (Ht(10)) {
        e = t.getBoundingClientRect();
        var n = Mt(t, "top"),
          i = Mt(t, "left");
        (e.top += n), (e.left += i), (e.bottom += n), (e.right += i);
      } else e = t.getBoundingClientRect();
    } catch (t) {}
    var o = {
        left: e.left,
        top: e.top,
        width: e.right - e.left,
        height: e.bottom - e.top,
      },
      r = "HTML" === t.nodeName ? Bt(t.ownerDocument) : {},
      s = r.width || t.clientWidth || o.right - o.left,
      a = r.height || t.clientHeight || o.bottom - o.top,
      l = t.offsetWidth - s,
      c = t.offsetHeight - a;
    if (l || c) {
      var h = Nt(t);
      (l -= Wt(h, "x")), (c -= Wt(h, "y")), (o.width -= l), (o.height -= c);
    }
    return Vt(o);
  }
  function zt(t, e) {
    var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
      i = Ht(10),
      o = "HTML" === e.nodeName,
      r = Yt(t),
      s = Yt(e),
      a = Lt(t),
      l = Nt(e),
      c = parseFloat(l.borderTopWidth, 10),
      h = parseFloat(l.borderLeftWidth, 10);
    n && o && ((s.top = Math.max(s.top, 0)), (s.left = Math.max(s.left, 0)));
    var u = Vt({
      top: r.top - s.top - c,
      left: r.left - s.left - h,
      width: r.width,
      height: r.height,
    });
    if (((u.marginTop = 0), (u.marginLeft = 0), !i && o)) {
      var f = parseFloat(l.marginTop, 10),
        d = parseFloat(l.marginLeft, 10);
      (u.top -= c - f),
        (u.bottom -= c - f),
        (u.left -= h - d),
        (u.right -= h - d),
        (u.marginTop = f),
        (u.marginLeft = d);
    }
    return (
      (i && !n ? e.contains(a) : e === a && "BODY" !== a.nodeName) &&
        (u = (function (t, e) {
          var n =
              2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            i = Mt(e, "top"),
            o = Mt(e, "left"),
            r = n ? -1 : 1;
          return (
            (t.top += i * r),
            (t.bottom += i * r),
            (t.left += o * r),
            (t.right += o * r),
            t
          );
        })(u, e)),
      u
    );
  }
  function Xt(t) {
    if (!t || !t.parentElement || Ht()) return document.documentElement;
    for (var e = t.parentElement; e && "none" === Nt(e, "transform"); )
      e = e.parentElement;
    return e || document.documentElement;
  }
  function Gt(t, e, n, i) {
    var o = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
      r = { top: 0, left: 0 },
      s = o ? Xt(t) : Ft(t, e);
    if ("viewport" === i)
      r = (function (t) {
        var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
          n = t.ownerDocument.documentElement,
          i = zt(t, n),
          o = Math.max(n.clientWidth, window.innerWidth || 0),
          r = Math.max(n.clientHeight, window.innerHeight || 0),
          s = e ? 0 : Mt(n),
          a = e ? 0 : Mt(n, "left");
        return Vt({
          top: s - i.top + i.marginTop,
          left: a - i.left + i.marginLeft,
          width: o,
          height: r,
        });
      })(s, o);
    else {
      var a = void 0;
      "scrollParent" === i
        ? "BODY" === (a = Lt(kt(e))).nodeName &&
          (a = t.ownerDocument.documentElement)
        : (a = "window" === i ? t.ownerDocument.documentElement : i);
      var l = zt(a, s, o);
      if (
        "HTML" !== a.nodeName ||
        (function t(e) {
          var n = e.nodeName;
          if ("BODY" === n || "HTML" === n) return !1;
          if ("fixed" === Nt(e, "position")) return !0;
          var i = kt(e);
          return !!i && t(i);
        })(s)
      )
        r = l;
      else {
        var c = Bt(t.ownerDocument),
          h = c.height,
          u = c.width;
        (r.top += l.top - l.marginTop),
          (r.bottom = h + l.top),
          (r.left += l.left - l.marginLeft),
          (r.right = u + l.left);
      }
    }
    var f = "number" == typeof (n = n || 0);
    return (
      (r.left += f ? n : n.left || 0),
      (r.top += f ? n : n.top || 0),
      (r.right -= f ? n : n.right || 0),
      (r.bottom -= f ? n : n.bottom || 0),
      r
    );
  }
  function $t(t, e, i, n, o) {
    var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
    if (-1 === t.indexOf("auto")) return t;
    var s = Gt(i, n, r, o),
      a = {
        top: { width: s.width, height: e.top - s.top },
        right: { width: s.right - e.right, height: s.height },
        bottom: { width: s.width, height: s.bottom - e.bottom },
        left: { width: e.left - s.left, height: s.height },
      },
      l = Object.keys(a)
        .map(function (t) {
          return Qt({ key: t }, a[t], {
            area: ((e = a[t]), e.width * e.height),
          });
          var e;
        })
        .sort(function (t, e) {
          return e.area - t.area;
        }),
      c = l.filter(function (t) {
        var e = t.width,
          n = t.height;
        return e >= i.clientWidth && n >= i.clientHeight;
      }),
      h = 0 < c.length ? c[0].key : l[0].key,
      u = t.split("-")[1];
    return h + (u ? "-" + u : "");
  }
  function Jt(t, e, n) {
    var i =
      3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
    return zt(n, i ? Xt(e) : Ft(e, n), i);
  }
  function Zt(t) {
    var e = t.ownerDocument.defaultView.getComputedStyle(t),
      n = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0),
      i = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0);
    return { width: t.offsetWidth + i, height: t.offsetHeight + n };
  }
  function te(t) {
    var e = { left: "right", right: "left", bottom: "top", top: "bottom" };
    return t.replace(/left|right|bottom|top/g, function (t) {
      return e[t];
    });
  }
  function ee(t, e, n) {
    n = n.split("-")[0];
    var i = Zt(t),
      o = { width: i.width, height: i.height },
      r = -1 !== ["right", "left"].indexOf(n),
      s = r ? "top" : "left",
      a = r ? "left" : "top",
      l = r ? "height" : "width",
      c = r ? "width" : "height";
    return (
      (o[s] = e[s] + e[l] / 2 - i[l] / 2),
      (o[a] = n === a ? e[a] - i[c] : e[te(a)]),
      o
    );
  }
  function ne(t, e) {
    return Array.prototype.find ? t.find(e) : t.filter(e)[0];
  }
  function ie(t, n, e) {
    return (
      (void 0 === e
        ? t
        : t.slice(
            0,
            (function (t, e, n) {
              if (Array.prototype.findIndex)
                return t.findIndex(function (t) {
                  return t[e] === n;
                });
              var i = ne(t, function (t) {
                return t[e] === n;
              });
              return t.indexOf(i);
            })(t, "name", e)
          )
      ).forEach(function (t) {
        t.function &&
          console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
        var e = t.function || t.fn;
        t.enabled &&
          Ot(e) &&
          ((n.offsets.popper = Vt(n.offsets.popper)),
          (n.offsets.reference = Vt(n.offsets.reference)),
          (n = e(n, t)));
      }),
      n
    );
  }
  function oe(t, n) {
    return t.some(function (t) {
      var e = t.name;
      return t.enabled && e === n;
    });
  }
  function re(t) {
    for (
      var e = [!1, "ms", "Webkit", "Moz", "O"],
        n = t.charAt(0).toUpperCase() + t.slice(1),
        i = 0;
      i < e.length;
      i++
    ) {
      var o = e[i],
        r = o ? "" + o + n : t;
      if ("undefined" != typeof document.body.style[r]) return r;
    }
    return null;
  }
  function se(t) {
    var e = t.ownerDocument;
    return e ? e.defaultView : window;
  }
  function ae(t, e, n, i) {
    (n.updateBound = i),
      se(t).addEventListener("resize", n.updateBound, { passive: !0 });
    var o = Lt(t);
    return (
      (function t(e, n, i, o) {
        var r = "BODY" === e.nodeName,
          s = r ? e.ownerDocument.defaultView : e;
        s.addEventListener(n, i, { passive: !0 }),
          r || t(Lt(s.parentNode), n, i, o),
          o.push(s);
      })(o, "scroll", n.updateBound, n.scrollParents),
      (n.scrollElement = o),
      (n.eventsEnabled = !0),
      n
    );
  }
  function le() {
    var t, e;
    this.state.eventsEnabled &&
      (cancelAnimationFrame(this.scheduleUpdate),
      (this.state =
        ((t = this.reference),
        (e = this.state),
        se(t).removeEventListener("resize", e.updateBound),
        e.scrollParents.forEach(function (t) {
          t.removeEventListener("scroll", e.updateBound);
        }),
        (e.updateBound = null),
        (e.scrollParents = []),
        (e.scrollElement = null),
        (e.eventsEnabled = !1),
        e)));
  }
  function ce(t) {
    return "" !== t && !isNaN(parseFloat(t)) && isFinite(t);
  }
  function he(n, i) {
    Object.keys(i).forEach(function (t) {
      var e = "";
      -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(t) &&
        ce(i[t]) &&
        (e = "px"),
        (n.style[t] = i[t] + e);
    });
  }
  var ue = Tt && /Firefox/i.test(navigator.userAgent);
  function fe(t, e, n) {
    var i = ne(t, function (t) {
        return t.name === e;
      }),
      o =
        !!i &&
        t.some(function (t) {
          return t.name === n && t.enabled && t.order < i.order;
        });
    if (!o) {
      var r = "`" + e + "`",
        s = "`" + n + "`";
      console.warn(
        s +
          " modifier is required by " +
          r +
          " modifier in order to work, be sure to include it before " +
          r +
          "!"
      );
    }
    return o;
  }
  var de = [
      "auto-start",
      "auto",
      "auto-end",
      "top-start",
      "top",
      "top-end",
      "right-start",
      "right",
      "right-end",
      "bottom-end",
      "bottom",
      "bottom-start",
      "left-end",
      "left",
      "left-start",
    ],
    pe = de.slice(3);
  function me(t) {
    var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
      n = pe.indexOf(t),
      i = pe.slice(n + 1).concat(pe.slice(0, n));
    return e ? i.reverse() : i;
  }
  var ge = "flip",
    _e = "clockwise",
    ve = "counterclockwise";
  function ye(t, o, r, e) {
    var s = [0, 0],
      a = -1 !== ["right", "left"].indexOf(e),
      n = t.split(/(\+|\-)/).map(function (t) {
        return t.trim();
      }),
      i = n.indexOf(
        ne(n, function (t) {
          return -1 !== t.search(/,|\s/);
        })
      );
    n[i] &&
      -1 === n[i].indexOf(",") &&
      console.warn(
        "Offsets separated by white space(s) are deprecated, use a comma (,) instead."
      );
    var l = /\s*,\s*|\s+/,
      c =
        -1 !== i
          ? [
              n.slice(0, i).concat([n[i].split(l)[0]]),
              [n[i].split(l)[1]].concat(n.slice(i + 1)),
            ]
          : [n];
    return (
      (c = c.map(function (t, e) {
        var n = (1 === e ? !a : a) ? "height" : "width",
          i = !1;
        return t
          .reduce(function (t, e) {
            return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e)
              ? ((t[t.length - 1] = e), (i = !0), t)
              : i
              ? ((t[t.length - 1] += e), (i = !1), t)
              : t.concat(e);
          }, [])
          .map(function (t) {
            return (function (t, e, n, i) {
              var o = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                r = +o[1],
                s = o[2];
              if (!r) return t;
              if (0 !== s.indexOf("%"))
                return "vh" !== s && "vw" !== s
                  ? r
                  : (("vh" === s
                      ? Math.max(
                          document.documentElement.clientHeight,
                          window.innerHeight || 0
                        )
                      : Math.max(
                          document.documentElement.clientWidth,
                          window.innerWidth || 0
                        )) /
                      100) *
                      r;
              var a = void 0;
              switch (s) {
                case "%p":
                  a = n;
                  break;
                case "%":
                case "%r":
                default:
                  a = i;
              }
              return (Vt(a)[e] / 100) * r;
            })(t, n, o, r);
          });
      })).forEach(function (n, i) {
        n.forEach(function (t, e) {
          ce(t) && (s[i] += t * ("-" === n[e - 1] ? -1 : 1));
        });
      }),
      s
    );
  }
  var Ee = {
      placement: "bottom",
      positionFixed: !1,
      eventsEnabled: !0,
      removeOnDestroy: !1,
      onCreate: function () {},
      onUpdate: function () {},
      modifiers: {
        shift: {
          order: 100,
          enabled: !0,
          fn: function (t) {
            var e = t.placement,
              n = e.split("-")[0],
              i = e.split("-")[1];
            if (i) {
              var o = t.offsets,
                r = o.reference,
                s = o.popper,
                a = -1 !== ["bottom", "top"].indexOf(n),
                l = a ? "left" : "top",
                c = a ? "width" : "height",
                h = {
                  start: Kt({}, l, r[l]),
                  end: Kt({}, l, r[l] + r[c] - s[c]),
                };
              t.offsets.popper = Qt({}, s, h[i]);
            }
            return t;
          },
        },
        offset: {
          order: 200,
          enabled: !0,
          fn: function (t, e) {
            var n = e.offset,
              i = t.placement,
              o = t.offsets,
              r = o.popper,
              s = o.reference,
              a = i.split("-")[0],
              l = void 0;
            return (
              (l = ce(+n) ? [+n, 0] : ye(n, r, s, a)),
              "left" === a
                ? ((r.top += l[0]), (r.left -= l[1]))
                : "right" === a
                ? ((r.top += l[0]), (r.left += l[1]))
                : "top" === a
                ? ((r.left += l[0]), (r.top -= l[1]))
                : "bottom" === a && ((r.left += l[0]), (r.top += l[1])),
              (t.popper = r),
              t
            );
          },
          offset: 0,
        },
        preventOverflow: {
          order: 300,
          enabled: !0,
          fn: function (t, i) {
            var e = i.boundariesElement || jt(t.instance.popper);
            t.instance.reference === e && (e = jt(e));
            var n = re("transform"),
              o = t.instance.popper.style,
              r = o.top,
              s = o.left,
              a = o[n];
            (o.top = ""), (o.left = ""), (o[n] = "");
            var l = Gt(
              t.instance.popper,
              t.instance.reference,
              i.padding,
              e,
              t.positionFixed
            );
            (o.top = r), (o.left = s), (o[n] = a), (i.boundaries = l);
            var c = i.priority,
              h = t.offsets.popper,
              u = {
                primary: function (t) {
                  var e = h[t];
                  return (
                    h[t] < l[t] &&
                      !i.escapeWithReference &&
                      (e = Math.max(h[t], l[t])),
                    Kt({}, t, e)
                  );
                },
                secondary: function (t) {
                  var e = "right" === t ? "left" : "top",
                    n = h[e];
                  return (
                    h[t] > l[t] &&
                      !i.escapeWithReference &&
                      (n = Math.min(
                        h[e],
                        l[t] - ("right" === t ? h.width : h.height)
                      )),
                    Kt({}, e, n)
                  );
                },
              };
            return (
              c.forEach(function (t) {
                var e =
                  -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
                h = Qt({}, h, u[e](t));
              }),
              (t.offsets.popper = h),
              t
            );
          },
          priority: ["left", "right", "top", "bottom"],
          padding: 5,
          boundariesElement: "scrollParent",
        },
        keepTogether: {
          order: 400,
          enabled: !0,
          fn: function (t) {
            var e = t.offsets,
              n = e.popper,
              i = e.reference,
              o = t.placement.split("-")[0],
              r = Math.floor,
              s = -1 !== ["top", "bottom"].indexOf(o),
              a = s ? "right" : "bottom",
              l = s ? "left" : "top",
              c = s ? "width" : "height";
            return (
              n[a] < r(i[l]) && (t.offsets.popper[l] = r(i[l]) - n[c]),
              n[l] > r(i[a]) && (t.offsets.popper[l] = r(i[a])),
              t
            );
          },
        },
        arrow: {
          order: 500,
          enabled: !0,
          fn: function (t, e) {
            var n;
            if (!fe(t.instance.modifiers, "arrow", "keepTogether")) return t;
            var i = e.element;
            if ("string" == typeof i) {
              if (!(i = t.instance.popper.querySelector(i))) return t;
            } else if (!t.instance.popper.contains(i))
              return (
                console.warn(
                  "WARNING: `arrow.element` must be child of its popper element!"
                ),
                t
              );
            var o = t.placement.split("-")[0],
              r = t.offsets,
              s = r.popper,
              a = r.reference,
              l = -1 !== ["left", "right"].indexOf(o),
              c = l ? "height" : "width",
              h = l ? "Top" : "Left",
              u = h.toLowerCase(),
              f = l ? "left" : "top",
              d = l ? "bottom" : "right",
              p = Zt(i)[c];
            a[d] - p < s[u] && (t.offsets.popper[u] -= s[u] - (a[d] - p)),
              a[u] + p > s[d] && (t.offsets.popper[u] += a[u] + p - s[d]),
              (t.offsets.popper = Vt(t.offsets.popper));
            var m = a[u] + a[c] / 2 - p / 2,
              g = Nt(t.instance.popper),
              _ = parseFloat(g["margin" + h], 10),
              v = parseFloat(g["border" + h + "Width"], 10),
              y = m - t.offsets.popper[u] - _ - v;
            return (
              (y = Math.max(Math.min(s[c] - p, y), 0)),
              (t.arrowElement = i),
              (t.offsets.arrow =
                (Kt((n = {}), u, Math.round(y)), Kt(n, f, ""), n)),
              t
            );
          },
          element: "[x-arrow]",
        },
        flip: {
          order: 600,
          enabled: !0,
          fn: function (p, m) {
            if (oe(p.instance.modifiers, "inner")) return p;
            if (p.flipped && p.placement === p.originalPlacement) return p;
            var g = Gt(
                p.instance.popper,
                p.instance.reference,
                m.padding,
                m.boundariesElement,
                p.positionFixed
              ),
              _ = p.placement.split("-")[0],
              v = te(_),
              y = p.placement.split("-")[1] || "",
              E = [];
            switch (m.behavior) {
              case ge:
                E = [_, v];
                break;
              case _e:
                E = me(_);
                break;
              case ve:
                E = me(_, !0);
                break;
              default:
                E = m.behavior;
            }
            return (
              E.forEach(function (t, e) {
                if (_ !== t || E.length === e + 1) return p;
                (_ = p.placement.split("-")[0]), (v = te(_));
                var n,
                  i = p.offsets.popper,
                  o = p.offsets.reference,
                  r = Math.floor,
                  s =
                    ("left" === _ && r(i.right) > r(o.left)) ||
                    ("right" === _ && r(i.left) < r(o.right)) ||
                    ("top" === _ && r(i.bottom) > r(o.top)) ||
                    ("bottom" === _ && r(i.top) < r(o.bottom)),
                  a = r(i.left) < r(g.left),
                  l = r(i.right) > r(g.right),
                  c = r(i.top) < r(g.top),
                  h = r(i.bottom) > r(g.bottom),
                  u =
                    ("left" === _ && a) ||
                    ("right" === _ && l) ||
                    ("top" === _ && c) ||
                    ("bottom" === _ && h),
                  f = -1 !== ["top", "bottom"].indexOf(_),
                  d =
                    !!m.flipVariations &&
                    ((f && "start" === y && a) ||
                      (f && "end" === y && l) ||
                      (!f && "start" === y && c) ||
                      (!f && "end" === y && h));
                (s || u || d) &&
                  ((p.flipped = !0),
                  (s || u) && (_ = E[e + 1]),
                  d &&
                    (y =
                      "end" === (n = y) ? "start" : "start" === n ? "end" : n),
                  (p.placement = _ + (y ? "-" + y : "")),
                  (p.offsets.popper = Qt(
                    {},
                    p.offsets.popper,
                    ee(p.instance.popper, p.offsets.reference, p.placement)
                  )),
                  (p = ie(p.instance.modifiers, p, "flip")));
              }),
              p
            );
          },
          behavior: "flip",
          padding: 5,
          boundariesElement: "viewport",
        },
        inner: {
          order: 700,
          enabled: !1,
          fn: function (t) {
            var e = t.placement,
              n = e.split("-")[0],
              i = t.offsets,
              o = i.popper,
              r = i.reference,
              s = -1 !== ["left", "right"].indexOf(n),
              a = -1 === ["top", "left"].indexOf(n);
            return (
              (o[s ? "left" : "top"] =
                r[n] - (a ? o[s ? "width" : "height"] : 0)),
              (t.placement = te(e)),
              (t.offsets.popper = Vt(o)),
              t
            );
          },
        },
        hide: {
          order: 800,
          enabled: !0,
          fn: function (t) {
            if (!fe(t.instance.modifiers, "hide", "preventOverflow")) return t;
            var e = t.offsets.reference,
              n = ne(t.instance.modifiers, function (t) {
                return "preventOverflow" === t.name;
              }).boundaries;
            if (
              e.bottom < n.top ||
              e.left > n.right ||
              e.top > n.bottom ||
              e.right < n.left
            ) {
              if (!0 === t.hide) return t;
              (t.hide = !0), (t.attributes["x-out-of-boundaries"] = "");
            } else {
              if (!1 === t.hide) return t;
              (t.hide = !1), (t.attributes["x-out-of-boundaries"] = !1);
            }
            return t;
          },
        },
        computeStyle: {
          order: 850,
          enabled: !0,
          fn: function (t, e) {
            var n = e.x,
              i = e.y,
              o = t.offsets.popper,
              r = ne(t.instance.modifiers, function (t) {
                return "applyStyle" === t.name;
              }).gpuAcceleration;
            void 0 !== r &&
              console.warn(
                "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"
              );
            var s,
              a,
              l,
              c,
              h,
              u,
              f,
              d,
              p,
              m,
              g,
              _,
              v,
              y,
              E = void 0 !== r ? r : e.gpuAcceleration,
              b = jt(t.instance.popper),
              w = Yt(b),
              C = { position: o.position },
              T =
                ((s = t),
                (a = window.devicePixelRatio < 2 || !ue),
                (l = s.offsets),
                (c = l.popper),
                (h = l.reference),
                (u = Math.round),
                (f = Math.floor),
                (d = function (t) {
                  return t;
                }),
                (p = u(h.width)),
                (m = u(c.width)),
                (g = -1 !== ["left", "right"].indexOf(s.placement)),
                (_ = -1 !== s.placement.indexOf("-")),
                (y = a ? u : d),
                {
                  left: (v = a ? (g || _ || p % 2 == m % 2 ? u : f) : d)(
                    p % 2 == 1 && m % 2 == 1 && !_ && a ? c.left - 1 : c.left
                  ),
                  top: y(c.top),
                  bottom: y(c.bottom),
                  right: v(c.right),
                }),
              S = "bottom" === n ? "top" : "bottom",
              D = "right" === i ? "left" : "right",
              I = re("transform"),
              A = void 0,
              O = void 0;
            if (
              ((O =
                "bottom" === S
                  ? "HTML" === b.nodeName
                    ? -b.clientHeight + T.bottom
                    : -w.height + T.bottom
                  : T.top),
              (A =
                "right" === D
                  ? "HTML" === b.nodeName
                    ? -b.clientWidth + T.right
                    : -w.width + T.right
                  : T.left),
              E && I)
            )
              (C[I] = "translate3d(" + A + "px, " + O + "px, 0)"),
                (C[S] = 0),
                (C[D] = 0),
                (C.willChange = "transform");
            else {
              var N = "bottom" === S ? -1 : 1,
                k = "right" === D ? -1 : 1;
              (C[S] = O * N), (C[D] = A * k), (C.willChange = S + ", " + D);
            }
            var L = { "x-placement": t.placement };
            return (
              (t.attributes = Qt({}, L, t.attributes)),
              (t.styles = Qt({}, C, t.styles)),
              (t.arrowStyles = Qt({}, t.offsets.arrow, t.arrowStyles)),
              t
            );
          },
          gpuAcceleration: !0,
          x: "bottom",
          y: "right",
        },
        applyStyle: {
          order: 900,
          enabled: !0,
          fn: function (t) {
            var e, n;
            return (
              he(t.instance.popper, t.styles),
              (e = t.instance.popper),
              (n = t.attributes),
              Object.keys(n).forEach(function (t) {
                !1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t);
              }),
              t.arrowElement &&
                Object.keys(t.arrowStyles).length &&
                he(t.arrowElement, t.arrowStyles),
              t
            );
          },
          onLoad: function (t, e, n, i, o) {
            var r = Jt(o, e, t, n.positionFixed),
              s = $t(
                n.placement,
                r,
                e,
                t,
                n.modifiers.flip.boundariesElement,
                n.modifiers.flip.padding
              );
            return (
              e.setAttribute("x-placement", s),
              he(e, { position: n.positionFixed ? "fixed" : "absolute" }),
              n
            );
          },
          gpuAcceleration: void 0,
        },
      },
    },
    be = (function () {
      function r(t, e) {
        var n = this,
          i =
            2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, r),
          (this.scheduleUpdate = function () {
            return requestAnimationFrame(n.update);
          }),
          (this.update = At(this.update.bind(this))),
          (this.options = Qt({}, r.Defaults, i)),
          (this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
          (this.reference = t && t.jquery ? t[0] : t),
          (this.popper = e && e.jquery ? e[0] : e),
          (this.options.modifiers = {}),
          Object.keys(Qt({}, r.Defaults.modifiers, i.modifiers)).forEach(
            function (t) {
              n.options.modifiers[t] = Qt(
                {},
                r.Defaults.modifiers[t] || {},
                i.modifiers ? i.modifiers[t] : {}
              );
            }
          ),
          (this.modifiers = Object.keys(this.options.modifiers)
            .map(function (t) {
              return Qt({ name: t }, n.options.modifiers[t]);
            })
            .sort(function (t, e) {
              return t.order - e.order;
            })),
          this.modifiers.forEach(function (t) {
            t.enabled &&
              Ot(t.onLoad) &&
              t.onLoad(n.reference, n.popper, n.options, t, n.state);
          }),
          this.update();
        var o = this.options.eventsEnabled;
        o && this.enableEventListeners(), (this.state.eventsEnabled = o);
      }
      return (
        qt(r, [
          {
            key: "update",
            value: function () {
              return function () {
                if (!this.state.isDestroyed) {
                  var t = {
                    instance: this,
                    styles: {},
                    arrowStyles: {},
                    attributes: {},
                    flipped: !1,
                    offsets: {},
                  };
                  (t.offsets.reference = Jt(
                    this.state,
                    this.popper,
                    this.reference,
                    this.options.positionFixed
                  )),
                    (t.placement = $t(
                      this.options.placement,
                      t.offsets.reference,
                      this.popper,
                      this.reference,
                      this.options.modifiers.flip.boundariesElement,
                      this.options.modifiers.flip.padding
                    )),
                    (t.originalPlacement = t.placement),
                    (t.positionFixed = this.options.positionFixed),
                    (t.offsets.popper = ee(
                      this.popper,
                      t.offsets.reference,
                      t.placement
                    )),
                    (t.offsets.popper.position = this.options.positionFixed
                      ? "fixed"
                      : "absolute"),
                    (t = ie(this.modifiers, t)),
                    this.state.isCreated
                      ? this.options.onUpdate(t)
                      : ((this.state.isCreated = !0), this.options.onCreate(t));
                }
              }.call(this);
            },
          },
          {
            key: "destroy",
            value: function () {
              return function () {
                return (
                  (this.state.isDestroyed = !0),
                  oe(this.modifiers, "applyStyle") &&
                    (this.popper.removeAttribute("x-placement"),
                    (this.popper.style.position = ""),
                    (this.popper.style.top = ""),
                    (this.popper.style.left = ""),
                    (this.popper.style.right = ""),
                    (this.popper.style.bottom = ""),
                    (this.popper.style.willChange = ""),
                    (this.popper.style[re("transform")] = "")),
                  this.disableEventListeners(),
                  this.options.removeOnDestroy &&
                    this.popper.parentNode.removeChild(this.popper),
                  this
                );
              }.call(this);
            },
          },
          {
            key: "enableEventListeners",
            value: function () {
              return function () {
                this.state.eventsEnabled ||
                  (this.state = ae(
                    this.reference,
                    this.options,
                    this.state,
                    this.scheduleUpdate
                  ));
              }.call(this);
            },
          },
          {
            key: "disableEventListeners",
            value: function () {
              return le.call(this);
            },
          },
        ]),
        r
      );
    })();
  (be.Utils = ("undefined" != typeof window ? window : global).PopperUtils),
    (be.placements = de),
    (be.Defaults = Ee);
  var we = "dropdown",
    Ce = "bs.dropdown",
    Te = "." + Ce,
    Se = ".data-api",
    De = p.fn[we],
    Ie = new RegExp("38|40|27"),
    Ae = {
      HIDE: "hide" + Te,
      HIDDEN: "hidden" + Te,
      SHOW: "show" + Te,
      SHOWN: "shown" + Te,
      CLICK: "click" + Te,
      CLICK_DATA_API: "click" + Te + Se,
      KEYDOWN_DATA_API: "keydown" + Te + Se,
      KEYUP_DATA_API: "keyup" + Te + Se,
    },
    Oe = "disabled",
    Ne = "show",
    ke = "dropup",
    Le = "dropright",
    xe = "dropleft",
    Pe = "dropdown-menu-right",
    He = "position-static",
    je = '[data-toggle="dropdown"]',
    Re = ".dropdown form",
    Fe = ".dropdown-menu",
    Me = ".navbar-nav",
    We = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
    Ue = "top-start",
    Be = "top-end",
    qe = "bottom-start",
    Ke = "bottom-end",
    Qe = "right-start",
    Ve = "left-start",
    Ye = {
      offset: 0,
      flip: !0,
      boundary: "scrollParent",
      reference: "toggle",
      display: "dynamic",
    },
    ze = {
      offset: "(number|string|function)",
      flip: "boolean",
      boundary: "(string|element)",
      reference: "(string|element)",
      display: "string",
    },
    Xe = (function () {
      function c(t, e) {
        (this._element = t),
          (this._popper = null),
          (this._config = this._getConfig(e)),
          (this._menu = this._getMenuElement()),
          (this._inNavbar = this._detectNavbar()),
          this._addEventListeners();
      }
      var t = c.prototype;
      return (
        (t.toggle = function () {
          if (!this._element.disabled && !p(this._element).hasClass(Oe)) {
            var t = c._getParentFromElement(this._element),
              e = p(this._menu).hasClass(Ne);
            if ((c._clearMenus(), !e)) {
              var n = { relatedTarget: this._element },
                i = p.Event(Ae.SHOW, n);
              if ((p(t).trigger(i), !i.isDefaultPrevented())) {
                if (!this._inNavbar) {
                  if ("undefined" == typeof be)
                    throw new TypeError(
                      "Bootstrap's dropdowns require Popper.js (https://popper.js.org/)"
                    );
                  var o = this._element;
                  "parent" === this._config.reference
                    ? (o = t)
                    : m.isElement(this._config.reference) &&
                      ((o = this._config.reference),
                      "undefined" != typeof this._config.reference.jquery &&
                        (o = this._config.reference[0])),
                    "scrollParent" !== this._config.boundary &&
                      p(t).addClass(He),
                    (this._popper = new be(
                      o,
                      this._menu,
                      this._getPopperConfig()
                    ));
                }
                "ontouchstart" in document.documentElement &&
                  0 === p(t).closest(Me).length &&
                  p(document.body).children().on("mouseover", null, p.noop),
                  this._element.focus(),
                  this._element.setAttribute("aria-expanded", !0),
                  p(this._menu).toggleClass(Ne),
                  p(t).toggleClass(Ne).trigger(p.Event(Ae.SHOWN, n));
              }
            }
          }
        }),
        (t.show = function () {
          if (
            !(
              this._element.disabled ||
              p(this._element).hasClass(Oe) ||
              p(this._menu).hasClass(Ne)
            )
          ) {
            var t = { relatedTarget: this._element },
              e = p.Event(Ae.SHOW, t),
              n = c._getParentFromElement(this._element);
            p(n).trigger(e),
              e.isDefaultPrevented() ||
                (p(this._menu).toggleClass(Ne),
                p(n).toggleClass(Ne).trigger(p.Event(Ae.SHOWN, t)));
          }
        }),
        (t.hide = function () {
          if (
            !this._element.disabled &&
            !p(this._element).hasClass(Oe) &&
            p(this._menu).hasClass(Ne)
          ) {
            var t = { relatedTarget: this._element },
              e = p.Event(Ae.HIDE, t),
              n = c._getParentFromElement(this._element);
            p(n).trigger(e),
              e.isDefaultPrevented() ||
                (p(this._menu).toggleClass(Ne),
                p(n).toggleClass(Ne).trigger(p.Event(Ae.HIDDEN, t)));
          }
        }),
        (t.dispose = function () {
          p.removeData(this._element, Ce),
            p(this._element).off(Te),
            (this._element = null),
            (this._menu = null) !== this._popper &&
              (this._popper.destroy(), (this._popper = null));
        }),
        (t.update = function () {
          (this._inNavbar = this._detectNavbar()),
            null !== this._popper && this._popper.scheduleUpdate();
        }),
        (t._addEventListeners = function () {
          var e = this;
          p(this._element).on(Ae.CLICK, function (t) {
            t.preventDefault(), t.stopPropagation(), e.toggle();
          });
        }),
        (t._getConfig = function (t) {
          return (
            (t = l({}, this.constructor.Default, p(this._element).data(), t)),
            m.typeCheckConfig(we, t, this.constructor.DefaultType),
            t
          );
        }),
        (t._getMenuElement = function () {
          if (!this._menu) {
            var t = c._getParentFromElement(this._element);
            t && (this._menu = t.querySelector(Fe));
          }
          return this._menu;
        }),
        (t._getPlacement = function () {
          var t = p(this._element.parentNode),
            e = qe;
          return (
            t.hasClass(ke)
              ? ((e = Ue), p(this._menu).hasClass(Pe) && (e = Be))
              : t.hasClass(Le)
              ? (e = Qe)
              : t.hasClass(xe)
              ? (e = Ve)
              : p(this._menu).hasClass(Pe) && (e = Ke),
            e
          );
        }),
        (t._detectNavbar = function () {
          return 0 < p(this._element).closest(".navbar").length;
        }),
        (t._getOffset = function () {
          var e = this,
            t = {};
          return (
            "function" == typeof this._config.offset
              ? (t.fn = function (t) {
                  return (
                    (t.offsets = l(
                      {},
                      t.offsets,
                      e._config.offset(t.offsets, e._element) || {}
                    )),
                    t
                  );
                })
              : (t.offset = this._config.offset),
            t
          );
        }),
        (t._getPopperConfig = function () {
          var t = {
            placement: this._getPlacement(),
            modifiers: {
              offset: this._getOffset(),
              flip: { enabled: this._config.flip },
              preventOverflow: { boundariesElement: this._config.boundary },
            },
          };
          return (
            "static" === this._config.display &&
              (t.modifiers.applyStyle = { enabled: !1 }),
            t
          );
        }),
        (c._jQueryInterface = function (e) {
          return this.each(function () {
            var t = p(this).data(Ce);
            if (
              (t ||
                ((t = new c(this, "object" == typeof e ? e : null)),
                p(this).data(Ce, t)),
              "string" == typeof e)
            ) {
              if ("undefined" == typeof t[e])
                throw new TypeError('No method named "' + e + '"');
              t[e]();
            }
          });
        }),
        (c._clearMenus = function (t) {
          if (!t || (3 !== t.which && ("keyup" !== t.type || 9 === t.which)))
            for (
              var e = [].slice.call(document.querySelectorAll(je)),
                n = 0,
                i = e.length;
              n < i;
              n++
            ) {
              var o = c._getParentFromElement(e[n]),
                r = p(e[n]).data(Ce),
                s = { relatedTarget: e[n] };
              if ((t && "click" === t.type && (s.clickEvent = t), r)) {
                var a = r._menu;
                if (
                  p(o).hasClass(Ne) &&
                  !(
                    t &&
                    (("click" === t.type &&
                      /input|textarea/i.test(t.target.tagName)) ||
                      ("keyup" === t.type && 9 === t.which)) &&
                    p.contains(o, t.target)
                  )
                ) {
                  var l = p.Event(Ae.HIDE, s);
                  p(o).trigger(l),
                    l.isDefaultPrevented() ||
                      ("ontouchstart" in document.documentElement &&
                        p(document.body)
                          .children()
                          .off("mouseover", null, p.noop),
                      e[n].setAttribute("aria-expanded", "false"),
                      p(a).removeClass(Ne),
                      p(o).removeClass(Ne).trigger(p.Event(Ae.HIDDEN, s)));
                }
              }
            }
        }),
        (c._getParentFromElement = function (t) {
          var e,
            n = m.getSelectorFromElement(t);
          return n && (e = document.querySelector(n)), e || t.parentNode;
        }),
        (c._dataApiKeydownHandler = function (t) {
          if (
            (/input|textarea/i.test(t.target.tagName)
              ? !(
                  32 === t.which ||
                  (27 !== t.which &&
                    ((40 !== t.which && 38 !== t.which) ||
                      p(t.target).closest(Fe).length))
                )
              : Ie.test(t.which)) &&
            (t.preventDefault(),
            t.stopPropagation(),
            !this.disabled && !p(this).hasClass(Oe))
          ) {
            var e = c._getParentFromElement(this),
              n = p(e).hasClass(Ne);
            if (n && (!n || (27 !== t.which && 32 !== t.which))) {
              var i = [].slice.call(e.querySelectorAll(We));
              if (0 !== i.length) {
                var o = i.indexOf(t.target);
                38 === t.which && 0 < o && o--,
                  40 === t.which && o < i.length - 1 && o++,
                  o < 0 && (o = 0),
                  i[o].focus();
              }
            } else {
              if (27 === t.which) {
                var r = e.querySelector(je);
                p(r).trigger("focus");
              }
              p(this).trigger("click");
            }
          }
        }),
        s(c, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.3.1";
            },
          },
          {
            key: "Default",
            get: function () {
              return Ye;
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return ze;
            },
          },
        ]),
        c
      );
    })();
  p(document)
    .on(Ae.KEYDOWN_DATA_API, je, Xe._dataApiKeydownHandler)
    .on(Ae.KEYDOWN_DATA_API, Fe, Xe._dataApiKeydownHandler)
    .on(Ae.CLICK_DATA_API + " " + Ae.KEYUP_DATA_API, Xe._clearMenus)
    .on(Ae.CLICK_DATA_API, je, function (t) {
      t.preventDefault(),
        t.stopPropagation(),
        Xe._jQueryInterface.call(p(this), "toggle");
    })
    .on(Ae.CLICK_DATA_API, Re, function (t) {
      t.stopPropagation();
    }),
    (p.fn[we] = Xe._jQueryInterface),
    (p.fn[we].Constructor = Xe),
    (p.fn[we].noConflict = function () {
      return (p.fn[we] = De), Xe._jQueryInterface;
    });
  var Ge = "modal",
    $e = "bs.modal",
    Je = "." + $e,
    Ze = p.fn[Ge],
    tn = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
    en = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      focus: "boolean",
      show: "boolean",
    },
    nn = {
      HIDE: "hide" + Je,
      HIDDEN: "hidden" + Je,
      SHOW: "show" + Je,
      SHOWN: "shown" + Je,
      FOCUSIN: "focusin" + Je,
      RESIZE: "resize" + Je,
      CLICK_DISMISS: "click.dismiss" + Je,
      KEYDOWN_DISMISS: "keydown.dismiss" + Je,
      MOUSEUP_DISMISS: "mouseup.dismiss" + Je,
      MOUSEDOWN_DISMISS: "mousedown.dismiss" + Je,
      CLICK_DATA_API: "click" + Je + ".data-api",
    },
    on = "modal-dialog-scrollable",
    rn = "modal-scrollbar-measure",
    sn = "modal-backdrop",
    an = "modal-open",
    ln = "fade",
    cn = "show",
    hn = ".modal-dialog",
    un = ".modal-body",
    fn = '[data-toggle="modal"]',
    dn = '[data-dismiss="modal"]',
    pn = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
    mn = ".sticky-top",
    gn = (function () {
      function o(t, e) {
        (this._config = this._getConfig(e)),
          (this._element = t),
          (this._dialog = t.querySelector(hn)),
          (this._backdrop = null),
          (this._isShown = !1),
          (this._isBodyOverflowing = !1),
          (this._ignoreBackdropClick = !1),
          (this._isTransitioning = !1),
          (this._scrollbarWidth = 0);
      }
      var t = o.prototype;
      return (
        (t.toggle = function (t) {
          return this._isShown ? this.hide() : this.show(t);
        }),
        (t.show = function (t) {
          var e = this;
          if (!this._isShown && !this._isTransitioning) {
            p(this._element).hasClass(ln) && (this._isTransitioning = !0);
            var n = p.Event(nn.SHOW, { relatedTarget: t });
            p(this._element).trigger(n),
              this._isShown ||
                n.isDefaultPrevented() ||
                ((this._isShown = !0),
                this._checkScrollbar(),
                this._setScrollbar(),
                this._adjustDialog(),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                p(this._element).on(nn.CLICK_DISMISS, dn, function (t) {
                  return e.hide(t);
                }),
                p(this._dialog).on(nn.MOUSEDOWN_DISMISS, function () {
                  p(e._element).one(nn.MOUSEUP_DISMISS, function (t) {
                    p(t.target).is(e._element) && (e._ignoreBackdropClick = !0);
                  });
                }),
                this._showBackdrop(function () {
                  return e._showElement(t);
                }));
          }
        }),
        (t.hide = function (t) {
          var e = this;
          if (
            (t && t.preventDefault(), this._isShown && !this._isTransitioning)
          ) {
            var n = p.Event(nn.HIDE);
            if (
              (p(this._element).trigger(n),
              this._isShown && !n.isDefaultPrevented())
            ) {
              this._isShown = !1;
              var i = p(this._element).hasClass(ln);
              if (
                (i && (this._isTransitioning = !0),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                p(document).off(nn.FOCUSIN),
                p(this._element).removeClass(cn),
                p(this._element).off(nn.CLICK_DISMISS),
                p(this._dialog).off(nn.MOUSEDOWN_DISMISS),
                i)
              ) {
                var o = m.getTransitionDurationFromElement(this._element);
                p(this._element)
                  .one(m.TRANSITION_END, function (t) {
                    return e._hideModal(t);
                  })
                  .emulateTransitionEnd(o);
              } else this._hideModal();
            }
          }
        }),
        (t.dispose = function () {
          [window, this._element, this._dialog].forEach(function (t) {
            return p(t).off(Je);
          }),
            p(document).off(nn.FOCUSIN),
            p.removeData(this._element, $e),
            (this._config = null),
            (this._element = null),
            (this._dialog = null),
            (this._backdrop = null),
            (this._isShown = null),
            (this._isBodyOverflowing = null),
            (this._ignoreBackdropClick = null),
            (this._isTransitioning = null),
            (this._scrollbarWidth = null);
        }),
        (t.handleUpdate = function () {
          this._adjustDialog();
        }),
        (t._getConfig = function (t) {
          return (t = l({}, tn, t)), m.typeCheckConfig(Ge, t, en), t;
        }),
        (t._showElement = function (t) {
          var e = this,
            n = p(this._element).hasClass(ln);
          (this._element.parentNode &&
            this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
            document.body.appendChild(this._element),
            (this._element.style.display = "block"),
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            p(this._dialog).hasClass(on)
              ? (this._dialog.querySelector(un).scrollTop = 0)
              : (this._element.scrollTop = 0),
            n && m.reflow(this._element),
            p(this._element).addClass(cn),
            this._config.focus && this._enforceFocus();
          var i = p.Event(nn.SHOWN, { relatedTarget: t }),
            o = function () {
              e._config.focus && e._element.focus(),
                (e._isTransitioning = !1),
                p(e._element).trigger(i);
            };
          if (n) {
            var r = m.getTransitionDurationFromElement(this._dialog);
            p(this._dialog).one(m.TRANSITION_END, o).emulateTransitionEnd(r);
          } else o();
        }),
        (t._enforceFocus = function () {
          var e = this;
          p(document)
            .off(nn.FOCUSIN)
            .on(nn.FOCUSIN, function (t) {
              document !== t.target &&
                e._element !== t.target &&
                0 === p(e._element).has(t.target).length &&
                e._element.focus();
            });
        }),
        (t._setEscapeEvent = function () {
          var e = this;
          this._isShown && this._config.keyboard
            ? p(this._element).on(nn.KEYDOWN_DISMISS, function (t) {
                27 === t.which && (t.preventDefault(), e.hide());
              })
            : this._isShown || p(this._element).off(nn.KEYDOWN_DISMISS);
        }),
        (t._setResizeEvent = function () {
          var e = this;
          this._isShown
            ? p(window).on(nn.RESIZE, function (t) {
                return e.handleUpdate(t);
              })
            : p(window).off(nn.RESIZE);
        }),
        (t._hideModal = function () {
          var t = this;
          (this._element.style.display = "none"),
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            (this._isTransitioning = !1),
            this._showBackdrop(function () {
              p(document.body).removeClass(an),
                t._resetAdjustments(),
                t._resetScrollbar(),
                p(t._element).trigger(nn.HIDDEN);
            });
        }),
        (t._removeBackdrop = function () {
          this._backdrop &&
            (p(this._backdrop).remove(), (this._backdrop = null));
        }),
        (t._showBackdrop = function (t) {
          var e = this,
            n = p(this._element).hasClass(ln) ? ln : "";
          if (this._isShown && this._config.backdrop) {
            if (
              ((this._backdrop = document.createElement("div")),
              (this._backdrop.className = sn),
              n && this._backdrop.classList.add(n),
              p(this._backdrop).appendTo(document.body),
              p(this._element).on(nn.CLICK_DISMISS, function (t) {
                e._ignoreBackdropClick
                  ? (e._ignoreBackdropClick = !1)
                  : t.target === t.currentTarget &&
                    ("static" === e._config.backdrop
                      ? e._element.focus()
                      : e.hide());
              }),
              n && m.reflow(this._backdrop),
              p(this._backdrop).addClass(cn),
              !t)
            )
              return;
            if (!n) return void t();
            var i = m.getTransitionDurationFromElement(this._backdrop);
            p(this._backdrop).one(m.TRANSITION_END, t).emulateTransitionEnd(i);
          } else if (!this._isShown && this._backdrop) {
            p(this._backdrop).removeClass(cn);
            var o = function () {
              e._removeBackdrop(), t && t();
            };
            if (p(this._element).hasClass(ln)) {
              var r = m.getTransitionDurationFromElement(this._backdrop);
              p(this._backdrop)
                .one(m.TRANSITION_END, o)
                .emulateTransitionEnd(r);
            } else o();
          } else t && t();
        }),
        (t._adjustDialog = function () {
          var t =
            this._element.scrollHeight > document.documentElement.clientHeight;
          !this._isBodyOverflowing &&
            t &&
            (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
            this._isBodyOverflowing &&
              !t &&
              (this._element.style.paddingRight = this._scrollbarWidth + "px");
        }),
        (t._resetAdjustments = function () {
          (this._element.style.paddingLeft = ""),
            (this._element.style.paddingRight = "");
        }),
        (t._checkScrollbar = function () {
          var t = document.body.getBoundingClientRect();
          (this._isBodyOverflowing = t.left + t.right < window.innerWidth),
            (this._scrollbarWidth = this._getScrollbarWidth());
        }),
        (t._setScrollbar = function () {
          var o = this;
          if (this._isBodyOverflowing) {
            var t = [].slice.call(document.querySelectorAll(pn)),
              e = [].slice.call(document.querySelectorAll(mn));
            p(t).each(function (t, e) {
              var n = e.style.paddingRight,
                i = p(e).css("padding-right");
              p(e)
                .data("padding-right", n)
                .css("padding-right", parseFloat(i) + o._scrollbarWidth + "px");
            }),
              p(e).each(function (t, e) {
                var n = e.style.marginRight,
                  i = p(e).css("margin-right");
                p(e)
                  .data("margin-right", n)
                  .css(
                    "margin-right",
                    parseFloat(i) - o._scrollbarWidth + "px"
                  );
              });
            var n = document.body.style.paddingRight,
              i = p(document.body).css("padding-right");
            p(document.body)
              .data("padding-right", n)
              .css(
                "padding-right",
                parseFloat(i) + this._scrollbarWidth + "px"
              );
          }
          p(document.body).addClass(an);
        }),
        (t._resetScrollbar = function () {
          var t = [].slice.call(document.querySelectorAll(pn));
          p(t).each(function (t, e) {
            var n = p(e).data("padding-right");
            p(e).removeData("padding-right"), (e.style.paddingRight = n || "");
          });
          var e = [].slice.call(document.querySelectorAll("" + mn));
          p(e).each(function (t, e) {
            var n = p(e).data("margin-right");
            "undefined" != typeof n &&
              p(e).css("margin-right", n).removeData("margin-right");
          });
          var n = p(document.body).data("padding-right");
          p(document.body).removeData("padding-right"),
            (document.body.style.paddingRight = n || "");
        }),
        (t._getScrollbarWidth = function () {
          var t = document.createElement("div");
          (t.className = rn), document.body.appendChild(t);
          var e = t.getBoundingClientRect().width - t.clientWidth;
          return document.body.removeChild(t), e;
        }),
        (o._jQueryInterface = function (n, i) {
          return this.each(function () {
            var t = p(this).data($e),
              e = l({}, tn, p(this).data(), "object" == typeof n && n ? n : {});
            if (
              (t || ((t = new o(this, e)), p(this).data($e, t)),
              "string" == typeof n)
            ) {
              if ("undefined" == typeof t[n])
                throw new TypeError('No method named "' + n + '"');
              t[n](i);
            } else e.show && t.show(i);
          });
        }),
        s(o, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.3.1";
            },
          },
          {
            key: "Default",
            get: function () {
              return tn;
            },
          },
        ]),
        o
      );
    })();
  p(document).on(nn.CLICK_DATA_API, fn, function (t) {
    var e,
      n = this,
      i = m.getSelectorFromElement(this);
    i && (e = document.querySelector(i));
    var o = p(e).data($e) ? "toggle" : l({}, p(e).data(), p(this).data());
    ("A" !== this.tagName && "AREA" !== this.tagName) || t.preventDefault();
    var r = p(e).one(nn.SHOW, function (t) {
      t.isDefaultPrevented() ||
        r.one(nn.HIDDEN, function () {
          p(n).is(":visible") && n.focus();
        });
    });
    gn._jQueryInterface.call(p(e), o, this);
  }),
    (p.fn[Ge] = gn._jQueryInterface),
    (p.fn[Ge].Constructor = gn),
    (p.fn[Ge].noConflict = function () {
      return (p.fn[Ge] = Ze), gn._jQueryInterface;
    });
  var _n = [
      "background",
      "cite",
      "href",
      "itemtype",
      "longdesc",
      "poster",
      "src",
      "xlink:href",
    ],
    vn = {
      "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
      a: ["target", "href", "title", "rel"],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      div: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ["src", "alt", "title", "width", "height"],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: [],
    },
    yn = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
    En =
      /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;
  function bn(t, s, e) {
    if (0 === t.length) return t;
    if (e && "function" == typeof e) return e(t);
    for (
      var n = new window.DOMParser().parseFromString(t, "text/html"),
        a = Object.keys(s),
        l = [].slice.call(n.body.querySelectorAll("*")),
        i = function (t, e) {
          var n = l[t],
            i = n.nodeName.toLowerCase();
          if (-1 === a.indexOf(n.nodeName.toLowerCase()))
            return n.parentNode.removeChild(n), "continue";
          var o = [].slice.call(n.attributes),
            r = [].concat(s["*"] || [], s[i] || []);
          o.forEach(function (t) {
            (function (t, e) {
              var n = t.nodeName.toLowerCase();
              if (-1 !== e.indexOf(n))
                return (
                  -1 === _n.indexOf(n) ||
                  Boolean(t.nodeValue.match(yn) || t.nodeValue.match(En))
                );
              for (
                var i = e.filter(function (t) {
                    return t instanceof RegExp;
                  }),
                  o = 0,
                  r = i.length;
                o < r;
                o++
              )
                if (n.match(i[o])) return !0;
              return !1;
            })(t, r) || n.removeAttribute(t.nodeName);
          });
        },
        o = 0,
        r = l.length;
      o < r;
      o++
    )
      i(o);
    return n.body.innerHTML;
  }
  var wn = "tooltip",
    Cn = "bs.tooltip",
    Tn = "." + Cn,
    Sn = p.fn[wn],
    Dn = "bs-tooltip",
    In = new RegExp("(^|\\s)" + Dn + "\\S+", "g"),
    An = ["sanitize", "whiteList", "sanitizeFn"],
    On = {
      animation: "boolean",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
      delay: "(number|object)",
      html: "boolean",
      selector: "(string|boolean)",
      placement: "(string|function)",
      offset: "(number|string|function)",
      container: "(string|element|boolean)",
      fallbackPlacement: "(string|array)",
      boundary: "(string|element)",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      whiteList: "object",
    },
    Nn = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: "right",
      BOTTOM: "bottom",
      LEFT: "left",
    },
    kn = {
      animation: !0,
      template:
        '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !1,
      selector: !1,
      placement: "top",
      offset: 0,
      container: !1,
      fallbackPlacement: "flip",
      boundary: "scrollParent",
      sanitize: !0,
      sanitizeFn: null,
      whiteList: vn,
    },
    Ln = "show",
    xn = "out",
    Pn = {
      HIDE: "hide" + Tn,
      HIDDEN: "hidden" + Tn,
      SHOW: "show" + Tn,
      SHOWN: "shown" + Tn,
      INSERTED: "inserted" + Tn,
      CLICK: "click" + Tn,
      FOCUSIN: "focusin" + Tn,
      FOCUSOUT: "focusout" + Tn,
      MOUSEENTER: "mouseenter" + Tn,
      MOUSELEAVE: "mouseleave" + Tn,
    },
    Hn = "fade",
    jn = "show",
    Rn = ".tooltip-inner",
    Fn = ".arrow",
    Mn = "hover",
    Wn = "focus",
    Un = "click",
    Bn = "manual",
    qn = (function () {
      function i(t, e) {
        if ("undefined" == typeof be)
          throw new TypeError(
            "Bootstrap's tooltips require Popper.js (https://popper.js.org/)"
          );
        (this._isEnabled = !0),
          (this._timeout = 0),
          (this._hoverState = ""),
          (this._activeTrigger = {}),
          (this._popper = null),
          (this.element = t),
          (this.config = this._getConfig(e)),
          (this.tip = null),
          this._setListeners();
      }
      var t = i.prototype;
      return (
        (t.enable = function () {
          this._isEnabled = !0;
        }),
        (t.disable = function () {
          this._isEnabled = !1;
        }),
        (t.toggleEnabled = function () {
          this._isEnabled = !this._isEnabled;
        }),
        (t.toggle = function (t) {
          if (this._isEnabled)
            if (t) {
              var e = this.constructor.DATA_KEY,
                n = p(t.currentTarget).data(e);
              n ||
                ((n = new this.constructor(
                  t.currentTarget,
                  this._getDelegateConfig()
                )),
                p(t.currentTarget).data(e, n)),
                (n._activeTrigger.click = !n._activeTrigger.click),
                n._isWithActiveTrigger()
                  ? n._enter(null, n)
                  : n._leave(null, n);
            } else {
              if (p(this.getTipElement()).hasClass(jn))
                return void this._leave(null, this);
              this._enter(null, this);
            }
        }),
        (t.dispose = function () {
          clearTimeout(this._timeout),
            p.removeData(this.element, this.constructor.DATA_KEY),
            p(this.element).off(this.constructor.EVENT_KEY),
            p(this.element).closest(".modal").off("hide.bs.modal"),
            this.tip && p(this.tip).remove(),
            (this._isEnabled = null),
            (this._timeout = null),
            (this._hoverState = null),
            (this._activeTrigger = null) !== this._popper &&
              this._popper.destroy(),
            (this._popper = null),
            (this.element = null),
            (this.config = null),
            (this.tip = null);
        }),
        (t.show = function () {
          var e = this;
          if ("none" === p(this.element).css("display"))
            throw new Error("Please use show on visible elements");
          var t = p.Event(this.constructor.Event.SHOW);
          if (this.isWithContent() && this._isEnabled) {
            p(this.element).trigger(t);
            var n = m.findShadowRoot(this.element),
              i = p.contains(
                null !== n ? n : this.element.ownerDocument.documentElement,
                this.element
              );
            if (t.isDefaultPrevented() || !i) return;
            var o = this.getTipElement(),
              r = m.getUID(this.constructor.NAME);
            o.setAttribute("id", r),
              this.element.setAttribute("aria-describedby", r),
              this.setContent(),
              this.config.animation && p(o).addClass(Hn);
            var s =
                "function" == typeof this.config.placement
                  ? this.config.placement.call(this, o, this.element)
                  : this.config.placement,
              a = this._getAttachment(s);
            this.addAttachmentClass(a);
            var l = this._getContainer();
            p(o).data(this.constructor.DATA_KEY, this),
              p.contains(
                this.element.ownerDocument.documentElement,
                this.tip
              ) || p(o).appendTo(l),
              p(this.element).trigger(this.constructor.Event.INSERTED),
              (this._popper = new be(this.element, o, {
                placement: a,
                modifiers: {
                  offset: this._getOffset(),
                  flip: { behavior: this.config.fallbackPlacement },
                  arrow: { element: Fn },
                  preventOverflow: { boundariesElement: this.config.boundary },
                },
                onCreate: function (t) {
                  t.originalPlacement !== t.placement &&
                    e._handlePopperPlacementChange(t);
                },
                onUpdate: function (t) {
                  return e._handlePopperPlacementChange(t);
                },
              })),
              p(o).addClass(jn),
              "ontouchstart" in document.documentElement &&
                p(document.body).children().on("mouseover", null, p.noop);
            var c = function () {
              e.config.animation && e._fixTransition();
              var t = e._hoverState;
              (e._hoverState = null),
                p(e.element).trigger(e.constructor.Event.SHOWN),
                t === xn && e._leave(null, e);
            };
            if (p(this.tip).hasClass(Hn)) {
              var h = m.getTransitionDurationFromElement(this.tip);
              p(this.tip).one(m.TRANSITION_END, c).emulateTransitionEnd(h);
            } else c();
          }
        }),
        (t.hide = function (t) {
          var e = this,
            n = this.getTipElement(),
            i = p.Event(this.constructor.Event.HIDE),
            o = function () {
              e._hoverState !== Ln &&
                n.parentNode &&
                n.parentNode.removeChild(n),
                e._cleanTipClass(),
                e.element.removeAttribute("aria-describedby"),
                p(e.element).trigger(e.constructor.Event.HIDDEN),
                null !== e._popper && e._popper.destroy(),
                t && t();
            };
          if ((p(this.element).trigger(i), !i.isDefaultPrevented())) {
            if (
              (p(n).removeClass(jn),
              "ontouchstart" in document.documentElement &&
                p(document.body).children().off("mouseover", null, p.noop),
              (this._activeTrigger[Un] = !1),
              (this._activeTrigger[Wn] = !1),
              (this._activeTrigger[Mn] = !1),
              p(this.tip).hasClass(Hn))
            ) {
              var r = m.getTransitionDurationFromElement(n);
              p(n).one(m.TRANSITION_END, o).emulateTransitionEnd(r);
            } else o();
            this._hoverState = "";
          }
        }),
        (t.update = function () {
          null !== this._popper && this._popper.scheduleUpdate();
        }),
        (t.isWithContent = function () {
          return Boolean(this.getTitle());
        }),
        (t.addAttachmentClass = function (t) {
          p(this.getTipElement()).addClass(Dn + "-" + t);
        }),
        (t.getTipElement = function () {
          return (this.tip = this.tip || p(this.config.template)[0]), this.tip;
        }),
        (t.setContent = function () {
          var t = this.getTipElement();
          this.setElementContent(p(t.querySelectorAll(Rn)), this.getTitle()),
            p(t).removeClass(Hn + " " + jn);
        }),
        (t.setElementContent = function (t, e) {
          "object" != typeof e || (!e.nodeType && !e.jquery)
            ? this.config.html
              ? (this.config.sanitize &&
                  (e = bn(e, this.config.whiteList, this.config.sanitizeFn)),
                t.html(e))
              : t.text(e)
            : this.config.html
            ? p(e).parent().is(t) || t.empty().append(e)
            : t.text(p(e).text());
        }),
        (t.getTitle = function () {
          var t = this.element.getAttribute("data-original-title");
          return (
            t ||
              (t =
                "function" == typeof this.config.title
                  ? this.config.title.call(this.element)
                  : this.config.title),
            t
          );
        }),
        (t._getOffset = function () {
          var e = this,
            t = {};
          return (
            "function" == typeof this.config.offset
              ? (t.fn = function (t) {
                  return (
                    (t.offsets = l(
                      {},
                      t.offsets,
                      e.config.offset(t.offsets, e.element) || {}
                    )),
                    t
                  );
                })
              : (t.offset = this.config.offset),
            t
          );
        }),
        (t._getContainer = function () {
          return !1 === this.config.container
            ? document.body
            : m.isElement(this.config.container)
            ? p(this.config.container)
            : p(document).find(this.config.container);
        }),
        (t._getAttachment = function (t) {
          return Nn[t.toUpperCase()];
        }),
        (t._setListeners = function () {
          var i = this;
          this.config.trigger.split(" ").forEach(function (t) {
            if ("click" === t)
              p(i.element).on(
                i.constructor.Event.CLICK,
                i.config.selector,
                function (t) {
                  return i.toggle(t);
                }
              );
            else if (t !== Bn) {
              var e =
                  t === Mn
                    ? i.constructor.Event.MOUSEENTER
                    : i.constructor.Event.FOCUSIN,
                n =
                  t === Mn
                    ? i.constructor.Event.MOUSELEAVE
                    : i.constructor.Event.FOCUSOUT;
              p(i.element)
                .on(e, i.config.selector, function (t) {
                  return i._enter(t);
                })
                .on(n, i.config.selector, function (t) {
                  return i._leave(t);
                });
            }
          }),
            p(this.element)
              .closest(".modal")
              .on("hide.bs.modal", function () {
                i.element && i.hide();
              }),
            this.config.selector
              ? (this.config = l({}, this.config, {
                  trigger: "manual",
                  selector: "",
                }))
              : this._fixTitle();
        }),
        (t._fixTitle = function () {
          var t = typeof this.element.getAttribute("data-original-title");
          (this.element.getAttribute("title") || "string" !== t) &&
            (this.element.setAttribute(
              "data-original-title",
              this.element.getAttribute("title") || ""
            ),
            this.element.setAttribute("title", ""));
        }),
        (t._enter = function (t, e) {
          var n = this.constructor.DATA_KEY;
          (e = e || p(t.currentTarget).data(n)) ||
            ((e = new this.constructor(
              t.currentTarget,
              this._getDelegateConfig()
            )),
            p(t.currentTarget).data(n, e)),
            t && (e._activeTrigger["focusin" === t.type ? Wn : Mn] = !0),
            p(e.getTipElement()).hasClass(jn) || e._hoverState === Ln
              ? (e._hoverState = Ln)
              : (clearTimeout(e._timeout),
                (e._hoverState = Ln),
                e.config.delay && e.config.delay.show
                  ? (e._timeout = setTimeout(function () {
                      e._hoverState === Ln && e.show();
                    }, e.config.delay.show))
                  : e.show());
        }),
        (t._leave = function (t, e) {
          var n = this.constructor.DATA_KEY;
          (e = e || p(t.currentTarget).data(n)) ||
            ((e = new this.constructor(
              t.currentTarget,
              this._getDelegateConfig()
            )),
            p(t.currentTarget).data(n, e)),
            t && (e._activeTrigger["focusout" === t.type ? Wn : Mn] = !1),
            e._isWithActiveTrigger() ||
              (clearTimeout(e._timeout),
              (e._hoverState = xn),
              e.config.delay && e.config.delay.hide
                ? (e._timeout = setTimeout(function () {
                    e._hoverState === xn && e.hide();
                  }, e.config.delay.hide))
                : e.hide());
        }),
        (t._isWithActiveTrigger = function () {
          for (var t in this._activeTrigger)
            if (this._activeTrigger[t]) return !0;
          return !1;
        }),
        (t._getConfig = function (t) {
          var e = p(this.element).data();
          return (
            Object.keys(e).forEach(function (t) {
              -1 !== An.indexOf(t) && delete e[t];
            }),
            "number" ==
              typeof (t = l(
                {},
                this.constructor.Default,
                e,
                "object" == typeof t && t ? t : {}
              )).delay && (t.delay = { show: t.delay, hide: t.delay }),
            "number" == typeof t.title && (t.title = t.title.toString()),
            "number" == typeof t.content && (t.content = t.content.toString()),
            m.typeCheckConfig(wn, t, this.constructor.DefaultType),
            t.sanitize &&
              (t.template = bn(t.template, t.whiteList, t.sanitizeFn)),
            t
          );
        }),
        (t._getDelegateConfig = function () {
          var t = {};
          if (this.config)
            for (var e in this.config)
              this.constructor.Default[e] !== this.config[e] &&
                (t[e] = this.config[e]);
          return t;
        }),
        (t._cleanTipClass = function () {
          var t = p(this.getTipElement()),
            e = t.attr("class").match(In);
          null !== e && e.length && t.removeClass(e.join(""));
        }),
        (t._handlePopperPlacementChange = function (t) {
          var e = t.instance;
          (this.tip = e.popper),
            this._cleanTipClass(),
            this.addAttachmentClass(this._getAttachment(t.placement));
        }),
        (t._fixTransition = function () {
          var t = this.getTipElement(),
            e = this.config.animation;
          null === t.getAttribute("x-placement") &&
            (p(t).removeClass(Hn),
            (this.config.animation = !1),
            this.hide(),
            this.show(),
            (this.config.animation = e));
        }),
        (i._jQueryInterface = function (n) {
          return this.each(function () {
            var t = p(this).data(Cn),
              e = "object" == typeof n && n;
            if (
              (t || !/dispose|hide/.test(n)) &&
              (t || ((t = new i(this, e)), p(this).data(Cn, t)),
              "string" == typeof n)
            ) {
              if ("undefined" == typeof t[n])
                throw new TypeError('No method named "' + n + '"');
              t[n]();
            }
          });
        }),
        s(i, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.3.1";
            },
          },
          {
            key: "Default",
            get: function () {
              return kn;
            },
          },
          {
            key: "NAME",
            get: function () {
              return wn;
            },
          },
          {
            key: "DATA_KEY",
            get: function () {
              return Cn;
            },
          },
          {
            key: "Event",
            get: function () {
              return Pn;
            },
          },
          {
            key: "EVENT_KEY",
            get: function () {
              return Tn;
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return On;
            },
          },
        ]),
        i
      );
    })();
  (p.fn[wn] = qn._jQueryInterface),
    (p.fn[wn].Constructor = qn),
    (p.fn[wn].noConflict = function () {
      return (p.fn[wn] = Sn), qn._jQueryInterface;
    });
  var Kn = "popover",
    Qn = "bs.popover",
    Vn = "." + Qn,
    Yn = p.fn[Kn],
    zn = "bs-popover",
    Xn = new RegExp("(^|\\s)" + zn + "\\S+", "g"),
    Gn = l({}, qn.Default, {
      placement: "right",
      trigger: "click",
      content: "",
      template:
        '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    }),
    $n = l({}, qn.DefaultType, { content: "(string|element|function)" }),
    Jn = "fade",
    Zn = "show",
    ti = ".popover-header",
    ei = ".popover-body",
    ni = {
      HIDE: "hide" + Vn,
      HIDDEN: "hidden" + Vn,
      SHOW: "show" + Vn,
      SHOWN: "shown" + Vn,
      INSERTED: "inserted" + Vn,
      CLICK: "click" + Vn,
      FOCUSIN: "focusin" + Vn,
      FOCUSOUT: "focusout" + Vn,
      MOUSEENTER: "mouseenter" + Vn,
      MOUSELEAVE: "mouseleave" + Vn,
    },
    ii = (function (t) {
      var e, n;
      function i() {
        return t.apply(this, arguments) || this;
      }
      (n = t),
        ((e = i).prototype = Object.create(n.prototype)),
        ((e.prototype.constructor = e).__proto__ = n);
      var o = i.prototype;
      return (
        (o.isWithContent = function () {
          return this.getTitle() || this._getContent();
        }),
        (o.addAttachmentClass = function (t) {
          p(this.getTipElement()).addClass(zn + "-" + t);
        }),
        (o.getTipElement = function () {
          return (this.tip = this.tip || p(this.config.template)[0]), this.tip;
        }),
        (o.setContent = function () {
          var t = p(this.getTipElement());
          this.setElementContent(t.find(ti), this.getTitle());
          var e = this._getContent();
          "function" == typeof e && (e = e.call(this.element)),
            this.setElementContent(t.find(ei), e),
            t.removeClass(Jn + " " + Zn);
        }),
        (o._getContent = function () {
          return (
            this.element.getAttribute("data-content") || this.config.content
          );
        }),
        (o._cleanTipClass = function () {
          var t = p(this.getTipElement()),
            e = t.attr("class").match(Xn);
          null !== e && 0 < e.length && t.removeClass(e.join(""));
        }),
        (i._jQueryInterface = function (n) {
          return this.each(function () {
            var t = p(this).data(Qn),
              e = "object" == typeof n ? n : null;
            if (
              (t || !/dispose|hide/.test(n)) &&
              (t || ((t = new i(this, e)), p(this).data(Qn, t)),
              "string" == typeof n)
            ) {
              if ("undefined" == typeof t[n])
                throw new TypeError('No method named "' + n + '"');
              t[n]();
            }
          });
        }),
        s(i, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.3.1";
            },
          },
          {
            key: "Default",
            get: function () {
              return Gn;
            },
          },
          {
            key: "NAME",
            get: function () {
              return Kn;
            },
          },
          {
            key: "DATA_KEY",
            get: function () {
              return Qn;
            },
          },
          {
            key: "Event",
            get: function () {
              return ni;
            },
          },
          {
            key: "EVENT_KEY",
            get: function () {
              return Vn;
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return $n;
            },
          },
        ]),
        i
      );
    })(qn);
  (p.fn[Kn] = ii._jQueryInterface),
    (p.fn[Kn].Constructor = ii),
    (p.fn[Kn].noConflict = function () {
      return (p.fn[Kn] = Yn), ii._jQueryInterface;
    });
  var oi = "scrollspy",
    ri = "bs.scrollspy",
    si = "." + ri,
    ai = p.fn[oi],
    li = { offset: 10, method: "auto", target: "" },
    ci = { offset: "number", method: "string", target: "(string|element)" },
    hi = {
      ACTIVATE: "activate" + si,
      SCROLL: "scroll" + si,
      LOAD_DATA_API: "load" + si + ".data-api",
    },
    ui = "dropdown-item",
    fi = "active",
    di = '[data-spy="scroll"]',
    pi = ".nav, .list-group",
    mi = ".nav-link",
    gi = ".nav-item",
    _i = ".list-group-item",
    vi = ".dropdown",
    yi = ".dropdown-item",
    Ei = ".dropdown-toggle",
    bi = "offset",
    wi = "position",
    Ci = (function () {
      function n(t, e) {
        var n = this;
        (this._element = t),
          (this._scrollElement = "BODY" === t.tagName ? window : t),
          (this._config = this._getConfig(e)),
          (this._selector =
            this._config.target +
            " " +
            mi +
            "," +
            this._config.target +
            " " +
            _i +
            "," +
            this._config.target +
            " " +
            yi),
          (this._offsets = []),
          (this._targets = []),
          (this._activeTarget = null),
          (this._scrollHeight = 0),
          p(this._scrollElement).on(hi.SCROLL, function (t) {
            return n._process(t);
          }),
          this.refresh(),
          this._process();
      }
      var t = n.prototype;
      return (
        (t.refresh = function () {
          var e = this,
            t = this._scrollElement === this._scrollElement.window ? bi : wi,
            o = "auto" === this._config.method ? t : this._config.method,
            r = o === wi ? this._getScrollTop() : 0;
          (this._offsets = []),
            (this._targets = []),
            (this._scrollHeight = this._getScrollHeight()),
            [].slice
              .call(document.querySelectorAll(this._selector))
              .map(function (t) {
                var e,
                  n = m.getSelectorFromElement(t);
                if ((n && (e = document.querySelector(n)), e)) {
                  var i = e.getBoundingClientRect();
                  if (i.width || i.height) return [p(e)[o]().top + r, n];
                }
                return null;
              })
              .filter(function (t) {
                return t;
              })
              .sort(function (t, e) {
                return t[0] - e[0];
              })
              .forEach(function (t) {
                e._offsets.push(t[0]), e._targets.push(t[1]);
              });
        }),
        (t.dispose = function () {
          p.removeData(this._element, ri),
            p(this._scrollElement).off(si),
            (this._element = null),
            (this._scrollElement = null),
            (this._config = null),
            (this._selector = null),
            (this._offsets = null),
            (this._targets = null),
            (this._activeTarget = null),
            (this._scrollHeight = null);
        }),
        (t._getConfig = function (t) {
          if (
            "string" !=
            typeof (t = l({}, li, "object" == typeof t && t ? t : {})).target
          ) {
            var e = p(t.target).attr("id");
            e || ((e = m.getUID(oi)), p(t.target).attr("id", e)),
              (t.target = "#" + e);
          }
          return m.typeCheckConfig(oi, t, ci), t;
        }),
        (t._getScrollTop = function () {
          return this._scrollElement === window
            ? this._scrollElement.pageYOffset
            : this._scrollElement.scrollTop;
        }),
        (t._getScrollHeight = function () {
          return (
            this._scrollElement.scrollHeight ||
            Math.max(
              document.body.scrollHeight,
              document.documentElement.scrollHeight
            )
          );
        }),
        (t._getOffsetHeight = function () {
          return this._scrollElement === window
            ? window.innerHeight
            : this._scrollElement.getBoundingClientRect().height;
        }),
        (t._process = function () {
          var t = this._getScrollTop() + this._config.offset,
            e = this._getScrollHeight(),
            n = this._config.offset + e - this._getOffsetHeight();
          if ((this._scrollHeight !== e && this.refresh(), n <= t)) {
            var i = this._targets[this._targets.length - 1];
            this._activeTarget !== i && this._activate(i);
          } else {
            if (
              this._activeTarget &&
              t < this._offsets[0] &&
              0 < this._offsets[0]
            )
              return (this._activeTarget = null), void this._clear();
            for (var o = this._offsets.length; o--; ) {
              this._activeTarget !== this._targets[o] &&
                t >= this._offsets[o] &&
                ("undefined" == typeof this._offsets[o + 1] ||
                  t < this._offsets[o + 1]) &&
                this._activate(this._targets[o]);
            }
          }
        }),
        (t._activate = function (e) {
          (this._activeTarget = e), this._clear();
          var t = this._selector.split(",").map(function (t) {
              return (
                t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
              );
            }),
            n = p([].slice.call(document.querySelectorAll(t.join(","))));
          n.hasClass(ui)
            ? (n.closest(vi).find(Ei).addClass(fi), n.addClass(fi))
            : (n.addClass(fi),
              n
                .parents(pi)
                .prev(mi + ", " + _i)
                .addClass(fi),
              n.parents(pi).prev(gi).children(mi).addClass(fi)),
            p(this._scrollElement).trigger(hi.ACTIVATE, { relatedTarget: e });
        }),
        (t._clear = function () {
          [].slice
            .call(document.querySelectorAll(this._selector))
            .filter(function (t) {
              return t.classList.contains(fi);
            })
            .forEach(function (t) {
              return t.classList.remove(fi);
            });
        }),
        (n._jQueryInterface = function (e) {
          return this.each(function () {
            var t = p(this).data(ri);
            if (
              (t ||
                ((t = new n(this, "object" == typeof e && e)),
                p(this).data(ri, t)),
              "string" == typeof e)
            ) {
              if ("undefined" == typeof t[e])
                throw new TypeError('No method named "' + e + '"');
              t[e]();
            }
          });
        }),
        s(n, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.3.1";
            },
          },
          {
            key: "Default",
            get: function () {
              return li;
            },
          },
        ]),
        n
      );
    })();
  p(window).on(hi.LOAD_DATA_API, function () {
    for (
      var t = [].slice.call(document.querySelectorAll(di)), e = t.length;
      e--;

    ) {
      var n = p(t[e]);
      Ci._jQueryInterface.call(n, n.data());
    }
  }),
    (p.fn[oi] = Ci._jQueryInterface),
    (p.fn[oi].Constructor = Ci),
    (p.fn[oi].noConflict = function () {
      return (p.fn[oi] = ai), Ci._jQueryInterface;
    });
  var Ti = "bs.tab",
    Si = "." + Ti,
    Di = p.fn.tab,
    Ii = {
      HIDE: "hide" + Si,
      HIDDEN: "hidden" + Si,
      SHOW: "show" + Si,
      SHOWN: "shown" + Si,
      CLICK_DATA_API: "click" + Si + ".data-api",
    },
    Ai = "dropdown-menu",
    Oi = "active",
    Ni = "disabled",
    ki = "fade",
    Li = "show",
    xi = ".dropdown",
    Pi = ".nav, .list-group",
    Hi = ".active",
    ji = "> li > .active",
    Ri = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
    Fi = ".dropdown-toggle",
    Mi = "> .dropdown-menu .active",
    Wi = (function () {
      function i(t) {
        this._element = t;
      }
      var t = i.prototype;
      return (
        (t.show = function () {
          var n = this;
          if (
            !(
              (this._element.parentNode &&
                this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                p(this._element).hasClass(Oi)) ||
              p(this._element).hasClass(Ni)
            )
          ) {
            var t,
              i,
              e = p(this._element).closest(Pi)[0],
              o = m.getSelectorFromElement(this._element);
            if (e) {
              var r = "UL" === e.nodeName || "OL" === e.nodeName ? ji : Hi;
              i = (i = p.makeArray(p(e).find(r)))[i.length - 1];
            }
            var s = p.Event(Ii.HIDE, { relatedTarget: this._element }),
              a = p.Event(Ii.SHOW, { relatedTarget: i });
            if (
              (i && p(i).trigger(s),
              p(this._element).trigger(a),
              !a.isDefaultPrevented() && !s.isDefaultPrevented())
            ) {
              o && (t = document.querySelector(o)),
                this._activate(this._element, e);
              var l = function () {
                var t = p.Event(Ii.HIDDEN, { relatedTarget: n._element }),
                  e = p.Event(Ii.SHOWN, { relatedTarget: i });
                p(i).trigger(t), p(n._element).trigger(e);
              };
              t ? this._activate(t, t.parentNode, l) : l();
            }
          }
        }),
        (t.dispose = function () {
          p.removeData(this._element, Ti), (this._element = null);
        }),
        (t._activate = function (t, e, n) {
          var i = this,
            o = (
              !e || ("UL" !== e.nodeName && "OL" !== e.nodeName)
                ? p(e).children(Hi)
                : p(e).find(ji)
            )[0],
            r = n && o && p(o).hasClass(ki),
            s = function () {
              return i._transitionComplete(t, o, n);
            };
          if (o && r) {
            var a = m.getTransitionDurationFromElement(o);
            p(o)
              .removeClass(Li)
              .one(m.TRANSITION_END, s)
              .emulateTransitionEnd(a);
          } else s();
        }),
        (t._transitionComplete = function (t, e, n) {
          if (e) {
            p(e).removeClass(Oi);
            var i = p(e.parentNode).find(Mi)[0];
            i && p(i).removeClass(Oi),
              "tab" === e.getAttribute("role") &&
                e.setAttribute("aria-selected", !1);
          }
          if (
            (p(t).addClass(Oi),
            "tab" === t.getAttribute("role") &&
              t.setAttribute("aria-selected", !0),
            m.reflow(t),
            t.classList.contains(ki) && t.classList.add(Li),
            t.parentNode && p(t.parentNode).hasClass(Ai))
          ) {
            var o = p(t).closest(xi)[0];
            if (o) {
              var r = [].slice.call(o.querySelectorAll(Fi));
              p(r).addClass(Oi);
            }
            t.setAttribute("aria-expanded", !0);
          }
          n && n();
        }),
        (i._jQueryInterface = function (n) {
          return this.each(function () {
            var t = p(this),
              e = t.data(Ti);
            if (
              (e || ((e = new i(this)), t.data(Ti, e)), "string" == typeof n)
            ) {
              if ("undefined" == typeof e[n])
                throw new TypeError('No method named "' + n + '"');
              e[n]();
            }
          });
        }),
        s(i, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.3.1";
            },
          },
        ]),
        i
      );
    })();
  p(document).on(Ii.CLICK_DATA_API, Ri, function (t) {
    t.preventDefault(), Wi._jQueryInterface.call(p(this), "show");
  }),
    (p.fn.tab = Wi._jQueryInterface),
    (p.fn.tab.Constructor = Wi),
    (p.fn.tab.noConflict = function () {
      return (p.fn.tab = Di), Wi._jQueryInterface;
    });
  var Ui = "toast",
    Bi = "bs.toast",
    qi = "." + Bi,
    Ki = p.fn[Ui],
    Qi = {
      CLICK_DISMISS: "click.dismiss" + qi,
      HIDE: "hide" + qi,
      HIDDEN: "hidden" + qi,
      SHOW: "show" + qi,
      SHOWN: "shown" + qi,
    },
    Vi = "fade",
    Yi = "hide",
    zi = "show",
    Xi = "showing",
    Gi = { animation: "boolean", autohide: "boolean", delay: "number" },
    $i = { animation: !0, autohide: !0, delay: 500 },
    Ji = '[data-dismiss="toast"]',
    Zi = (function () {
      function i(t, e) {
        (this._element = t),
          (this._config = this._getConfig(e)),
          (this._timeout = null),
          this._setListeners();
      }
      var t = i.prototype;
      return (
        (t.show = function () {
          var t = this;
          p(this._element).trigger(Qi.SHOW),
            this._config.animation && this._element.classList.add(Vi);
          var e = function () {
            t._element.classList.remove(Xi),
              t._element.classList.add(zi),
              p(t._element).trigger(Qi.SHOWN),
              t._config.autohide && t.hide();
          };
          if (
            (this._element.classList.remove(Yi),
            this._element.classList.add(Xi),
            this._config.animation)
          ) {
            var n = m.getTransitionDurationFromElement(this._element);
            p(this._element).one(m.TRANSITION_END, e).emulateTransitionEnd(n);
          } else e();
        }),
        (t.hide = function (t) {
          var e = this;
          this._element.classList.contains(zi) &&
            (p(this._element).trigger(Qi.HIDE),
            t
              ? this._close()
              : (this._timeout = setTimeout(function () {
                  e._close();
                }, this._config.delay)));
        }),
        (t.dispose = function () {
          clearTimeout(this._timeout),
            (this._timeout = null),
            this._element.classList.contains(zi) &&
              this._element.classList.remove(zi),
            p(this._element).off(Qi.CLICK_DISMISS),
            p.removeData(this._element, Bi),
            (this._element = null),
            (this._config = null);
        }),
        (t._getConfig = function (t) {
          return (
            (t = l(
              {},
              $i,
              p(this._element).data(),
              "object" == typeof t && t ? t : {}
            )),
            m.typeCheckConfig(Ui, t, this.constructor.DefaultType),
            t
          );
        }),
        (t._setListeners = function () {
          var t = this;
          p(this._element).on(Qi.CLICK_DISMISS, Ji, function () {
            return t.hide(!0);
          });
        }),
        (t._close = function () {
          var t = this,
            e = function () {
              t._element.classList.add(Yi), p(t._element).trigger(Qi.HIDDEN);
            };
          if ((this._element.classList.remove(zi), this._config.animation)) {
            var n = m.getTransitionDurationFromElement(this._element);
            p(this._element).one(m.TRANSITION_END, e).emulateTransitionEnd(n);
          } else e();
        }),
        (i._jQueryInterface = function (n) {
          return this.each(function () {
            var t = p(this),
              e = t.data(Bi);
            if (
              (e ||
                ((e = new i(this, "object" == typeof n && n)), t.data(Bi, e)),
              "string" == typeof n)
            ) {
              if ("undefined" == typeof e[n])
                throw new TypeError('No method named "' + n + '"');
              e[n](this);
            }
          });
        }),
        s(i, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.3.1";
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return Gi;
            },
          },
          {
            key: "Default",
            get: function () {
              return $i;
            },
          },
        ]),
        i
      );
    })();
  (p.fn[Ui] = Zi._jQueryInterface),
    (p.fn[Ui].Constructor = Zi),
    (p.fn[Ui].noConflict = function () {
      return (p.fn[Ui] = Ki), Zi._jQueryInterface;
    }),
    (function () {
      if ("undefined" == typeof p)
        throw new TypeError(
          "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
        );
      var t = p.fn.jquery.split(" ")[0].split(".");
      if (
        (t[0] < 2 && t[1] < 9) ||
        (1 === t[0] && 9 === t[1] && t[2] < 1) ||
        4 <= t[0]
      )
        throw new Error(
          "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
        );
    })(),
    (t.Util = m),
    (t.Alert = g),
    (t.Button = k),
    (t.Carousel = at),
    (t.Collapse = Ct),
    (t.Dropdown = Xe),
    (t.Modal = gn),
    (t.Popover = ii),
    (t.Scrollspy = Ci),
    (t.Tab = Wi),
    (t.Toast = Zi),
    (t.Tooltip = qn),
    Object.defineProperty(t, "__esModule", { value: !0 });
});
/*!/wp-content/cache/asset-cleanup/js/item/everfx-bootstrap-select-vec136e8324f5dd50a145c62c9112bb27f97d72b6.js*/ /*!/wp-content/themes/everfx_3.0/assets/bootstrap/bootstrap-select.min.js*/ /*!
 * Bootstrap-select v1.13.9 (https://developer.snapappointments.com/bootstrap-select)
 *
 * Copyright 2012-2019 SnapAppointments, LLC
 * Licensed under MIT (https://github.com/snapappointments/bootstrap-select/blob/master/LICENSE)
 */ !(function (e, t) {
  void 0 === e && void 0 !== window && (e = window),
    "function" == typeof define && define.amd
      ? define(["jquery"], function (e) {
          return t(e);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = t(require("jquery")))
      : t(e.jQuery);
})(this, function (e) {
  !(function (z) {
    "use strict";
    var d = ["sanitize", "whiteList", "sanitizeFn"],
      l = [
        "background",
        "cite",
        "href",
        "itemtype",
        "longdesc",
        "poster",
        "src",
        "xlink:href",
      ],
      e = {
        "*": [
          "class",
          "dir",
          "id",
          "lang",
          "role",
          "tabindex",
          "style",
          /^aria-[\w-]*$/i,
        ],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: [],
      },
      r = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
      a =
        /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;
    function v(e, t) {
      var i = e.nodeName.toLowerCase();
      if (-1 !== z.inArray(i, t))
        return (
          -1 === z.inArray(i, l) ||
          Boolean(e.nodeValue.match(r) || e.nodeValue.match(a))
        );
      for (
        var s = z(t).filter(function (e, t) {
            return t instanceof RegExp;
          }),
          n = 0,
          o = s.length;
        n < o;
        n++
      )
        if (i.match(s[n])) return !0;
      return !1;
    }
    function B(e, t, i) {
      if (i && "function" == typeof i) return i(e);
      for (var s = Object.keys(t), n = 0, o = e.length; n < o; n++)
        for (
          var l = e[n].querySelectorAll("*"), r = 0, a = l.length;
          r < a;
          r++
        ) {
          var c = l[r],
            d = c.nodeName.toLowerCase();
          if (-1 !== s.indexOf(d))
            for (
              var h = [].slice.call(c.attributes),
                p = [].concat(t["*"] || [], t[d] || []),
                u = 0,
                f = h.length;
              u < f;
              u++
            ) {
              var m = h[u];
              v(m, p) || c.removeAttribute(m.nodeName);
            }
          else c.parentNode.removeChild(c);
        }
    }
    "classList" in document.createElement("_") ||
      (function (e) {
        if ("Element" in e) {
          var t = "classList",
            i = "prototype",
            s = e.Element[i],
            n = Object,
            o = function () {
              var i = z(this);
              return {
                add: function (e) {
                  return (
                    (e = Array.prototype.slice.call(arguments).join(" ")),
                    i.addClass(e)
                  );
                },
                remove: function (e) {
                  return (
                    (e = Array.prototype.slice.call(arguments).join(" ")),
                    i.removeClass(e)
                  );
                },
                toggle: function (e, t) {
                  return i.toggleClass(e, t);
                },
                contains: function (e) {
                  return i.hasClass(e);
                },
              };
            };
          if (n.defineProperty) {
            var l = { get: o, enumerable: !0, configurable: !0 };
            try {
              n.defineProperty(s, t, l);
            } catch (e) {
              (void 0 !== e.number && -2146823252 !== e.number) ||
                ((l.enumerable = !1), n.defineProperty(s, t, l));
            }
          } else n[i].__defineGetter__ && s.__defineGetter__(t, o);
        }
      })(window);
    var t,
      c,
      i,
      s = document.createElement("_");
    if ((s.classList.add("c1", "c2"), !s.classList.contains("c2"))) {
      var n = DOMTokenList.prototype.add,
        o = DOMTokenList.prototype.remove;
      (DOMTokenList.prototype.add = function () {
        Array.prototype.forEach.call(arguments, n.bind(this));
      }),
        (DOMTokenList.prototype.remove = function () {
          Array.prototype.forEach.call(arguments, o.bind(this));
        });
    }
    if ((s.classList.toggle("c3", !1), s.classList.contains("c3"))) {
      var h = DOMTokenList.prototype.toggle;
      DOMTokenList.prototype.toggle = function (e, t) {
        return 1 in arguments && !this.contains(e) == !t ? t : h.call(this, e);
      };
    }
    function E(e) {
      var t,
        i = [],
        s = e.selectedOptions;
      if (e.multiple)
        for (var n = 0, o = s.length; n < o; n++)
          (t = s[n]), i.push(t.value || t.text);
      else i = e.value;
      return i;
    }
    (s = null),
      String.prototype.startsWith ||
        ((t = (function () {
          try {
            var e = {},
              t = Object.defineProperty,
              i = t(e, e, e) && t;
          } catch (e) {}
          return i;
        })()),
        (c = {}.toString),
        (i = function (e) {
          if (null == this) throw new TypeError();
          var t = String(this);
          if (e && "[object RegExp]" == c.call(e)) throw new TypeError();
          var i = t.length,
            s = String(e),
            n = s.length,
            o = 1 < arguments.length ? arguments[1] : void 0,
            l = o ? Number(o) : 0;
          l != l && (l = 0);
          var r = Math.min(Math.max(l, 0), i);
          if (i < n + r) return !1;
          for (var a = -1; ++a < n; )
            if (t.charCodeAt(r + a) != s.charCodeAt(a)) return !1;
          return !0;
        }),
        t
          ? t(String.prototype, "startsWith", {
              value: i,
              configurable: !0,
              writable: !0,
            })
          : (String.prototype.startsWith = i)),
      Object.keys ||
        (Object.keys = function (e, t, i) {
          for (t in ((i = []), e)) i.hasOwnProperty.call(e, t) && i.push(t);
          return i;
        }),
      HTMLSelectElement &&
        !HTMLSelectElement.prototype.hasOwnProperty("selectedOptions") &&
        Object.defineProperty(HTMLSelectElement.prototype, "selectedOptions", {
          get: function () {
            return this.querySelectorAll(":checked");
          },
        });
    var p = { useDefault: !1, _set: z.valHooks.select.set };
    z.valHooks.select.set = function (e, t) {
      return (
        t && !p.useDefault && z(e).data("selected", !0),
        p._set.apply(this, arguments)
      );
    };
    var C = null,
      u = (function () {
        try {
          return new Event("change"), !0;
        } catch (e) {
          return !1;
        }
      })();
    function $(e, t, i, s) {
      for (
        var n = ["display", "subtext", "tokens"], o = !1, l = 0;
        l < n.length;
        l++
      ) {
        var r = n[l],
          a = e[r];
        if (
          a &&
          ((a = a.toString()),
          "display" === r && (a = a.replace(/<[^>]+>/g, "")),
          s && (a = w(a)),
          (a = a.toUpperCase()),
          (o = "contains" === i ? 0 <= a.indexOf(t) : a.startsWith(t)))
        )
          break;
      }
      return o;
    }
    function L(e) {
      return parseInt(e, 10) || 0;
    }
    z.fn.triggerNative = function (e) {
      var t,
        i = this[0];
      i.dispatchEvent
        ? (u
            ? (t = new Event(e, { bubbles: !0 }))
            : (t = document.createEvent("Event")).initEvent(e, !0, !1),
          i.dispatchEvent(t))
        : i.fireEvent
        ? (((t = document.createEventObject()).eventType = e),
          i.fireEvent("on" + e, t))
        : this.trigger(e);
    };
    var f = {
        "\xc0": "A",
        "\xc1": "A",
        "\xc2": "A",
        "\xc3": "A",
        "\xc4": "A",
        "\xc5": "A",
        "\xe0": "a",
        "\xe1": "a",
        "\xe2": "a",
        "\xe3": "a",
        "\xe4": "a",
        "\xe5": "a",
        "\xc7": "C",
        "\xe7": "c",
        "\xd0": "D",
        "\xf0": "d",
        "\xc8": "E",
        "\xc9": "E",
        "\xca": "E",
        "\xcb": "E",
        "\xe8": "e",
        "\xe9": "e",
        "\xea": "e",
        "\xeb": "e",
        "\xcc": "I",
        "\xcd": "I",
        "\xce": "I",
        "\xcf": "I",
        "\xec": "i",
        "\xed": "i",
        "\xee": "i",
        "\xef": "i",
        "\xd1": "N",
        "\xf1": "n",
        "\xd2": "O",
        "\xd3": "O",
        "\xd4": "O",
        "\xd5": "O",
        "\xd6": "O",
        "\xd8": "O",
        "\xf2": "o",
        "\xf3": "o",
        "\xf4": "o",
        "\xf5": "o",
        "\xf6": "o",
        "\xf8": "o",
        "\xd9": "U",
        "\xda": "U",
        "\xdb": "U",
        "\xdc": "U",
        "\xf9": "u",
        "\xfa": "u",
        "\xfb": "u",
        "\xfc": "u",
        "\xdd": "Y",
        "\xfd": "y",
        "\xff": "y",
        "\xc6": "Ae",
        "\xe6": "ae",
        "\xde": "Th",
        "\xfe": "th",
        "\xdf": "ss",
        "\u0100": "A",
        "\u0102": "A",
        "\u0104": "A",
        "\u0101": "a",
        "\u0103": "a",
        "\u0105": "a",
        "\u0106": "C",
        "\u0108": "C",
        "\u010a": "C",
        "\u010c": "C",
        "\u0107": "c",
        "\u0109": "c",
        "\u010b": "c",
        "\u010d": "c",
        "\u010e": "D",
        "\u0110": "D",
        "\u010f": "d",
        "\u0111": "d",
        "\u0112": "E",
        "\u0114": "E",
        "\u0116": "E",
        "\u0118": "E",
        "\u011a": "E",
        "\u0113": "e",
        "\u0115": "e",
        "\u0117": "e",
        "\u0119": "e",
        "\u011b": "e",
        "\u011c": "G",
        "\u011e": "G",
        "\u0120": "G",
        "\u0122": "G",
        "\u011d": "g",
        "\u011f": "g",
        "\u0121": "g",
        "\u0123": "g",
        "\u0124": "H",
        "\u0126": "H",
        "\u0125": "h",
        "\u0127": "h",
        "\u0128": "I",
        "\u012a": "I",
        "\u012c": "I",
        "\u012e": "I",
        "\u0130": "I",
        "\u0129": "i",
        "\u012b": "i",
        "\u012d": "i",
        "\u012f": "i",
        "\u0131": "i",
        "\u0134": "J",
        "\u0135": "j",
        "\u0136": "K",
        "\u0137": "k",
        "\u0138": "k",
        "\u0139": "L",
        "\u013b": "L",
        "\u013d": "L",
        "\u013f": "L",
        "\u0141": "L",
        "\u013a": "l",
        "\u013c": "l",
        "\u013e": "l",
        "\u0140": "l",
        "\u0142": "l",
        "\u0143": "N",
        "\u0145": "N",
        "\u0147": "N",
        "\u014a": "N",
        "\u0144": "n",
        "\u0146": "n",
        "\u0148": "n",
        "\u014b": "n",
        "\u014c": "O",
        "\u014e": "O",
        "\u0150": "O",
        "\u014d": "o",
        "\u014f": "o",
        "\u0151": "o",
        "\u0154": "R",
        "\u0156": "R",
        "\u0158": "R",
        "\u0155": "r",
        "\u0157": "r",
        "\u0159": "r",
        "\u015a": "S",
        "\u015c": "S",
        "\u015e": "S",
        "\u0160": "S",
        "\u015b": "s",
        "\u015d": "s",
        "\u015f": "s",
        "\u0161": "s",
        "\u0162": "T",
        "\u0164": "T",
        "\u0166": "T",
        "\u0163": "t",
        "\u0165": "t",
        "\u0167": "t",
        "\u0168": "U",
        "\u016a": "U",
        "\u016c": "U",
        "\u016e": "U",
        "\u0170": "U",
        "\u0172": "U",
        "\u0169": "u",
        "\u016b": "u",
        "\u016d": "u",
        "\u016f": "u",
        "\u0171": "u",
        "\u0173": "u",
        "\u0174": "W",
        "\u0175": "w",
        "\u0176": "Y",
        "\u0177": "y",
        "\u0178": "Y",
        "\u0179": "Z",
        "\u017b": "Z",
        "\u017d": "Z",
        "\u017a": "z",
        "\u017c": "z",
        "\u017e": "z",
        "\u0132": "IJ",
        "\u0133": "ij",
        "\u0152": "Oe",
        "\u0153": "oe",
        "\u0149": "'n",
        "\u017f": "s",
      },
      m = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
      g = RegExp(
        "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\u1ab0-\\u1aff\\u1dc0-\\u1dff]",
        "g"
      );
    function b(e) {
      return f[e];
    }
    function w(e) {
      return (e = e.toString()) && e.replace(m, b).replace(g, "");
    }
    var x,
      I,
      k,
      y,
      S,
      O =
        ((x = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#x27;",
          "`": "&#x60;",
        }),
        (I = function (e) {
          return x[e];
        }),
        (k = "(?:" + Object.keys(x).join("|") + ")"),
        (y = RegExp(k)),
        (S = RegExp(k, "g")),
        function (e) {
          return (e = null == e ? "" : "" + e), y.test(e) ? e.replace(S, I) : e;
        }),
      T = {
        32: " ",
        48: "0",
        49: "1",
        50: "2",
        51: "3",
        52: "4",
        53: "5",
        54: "6",
        55: "7",
        56: "8",
        57: "9",
        59: ";",
        65: "A",
        66: "B",
        67: "C",
        68: "D",
        69: "E",
        70: "F",
        71: "G",
        72: "H",
        73: "I",
        74: "J",
        75: "K",
        76: "L",
        77: "M",
        78: "N",
        79: "O",
        80: "P",
        81: "Q",
        82: "R",
        83: "S",
        84: "T",
        85: "U",
        86: "V",
        87: "W",
        88: "X",
        89: "Y",
        90: "Z",
        96: "0",
        97: "1",
        98: "2",
        99: "3",
        100: "4",
        101: "5",
        102: "6",
        103: "7",
        104: "8",
        105: "9",
      },
      A = 27,
      N = 13,
      D = 32,
      H = 9,
      P = 38,
      W = 40,
      M = { success: !1, major: "3" };
    try {
      (M.full = (z.fn.dropdown.Constructor.VERSION || "")
        .split(" ")[0]
        .split(".")),
        (M.major = M.full[0]),
        (M.success = !0);
    } catch (e) {}
    var R = 0,
      U = ".bs.select",
      j = {
        DISABLED: "disabled",
        DIVIDER: "divider",
        SHOW: "open",
        DROPUP: "dropup",
        MENU: "dropdown-menu",
        MENURIGHT: "dropdown-menu-right",
        MENULEFT: "dropdown-menu-left",
        BUTTONCLASS: "btn-default",
        POPOVERHEADER: "popover-title",
        ICONBASE: "glyphicon",
        TICKICON: "glyphicon-ok",
      },
      V = { MENU: "." + j.MENU },
      F = {
        span: document.createElement("span"),
        i: document.createElement("i"),
        subtext: document.createElement("small"),
        a: document.createElement("a"),
        li: document.createElement("li"),
        whitespace: document.createTextNode("\xa0"),
        fragment: document.createDocumentFragment(),
      };
    F.a.setAttribute("role", "option"),
      (F.subtext.className = "text-muted"),
      (F.text = F.span.cloneNode(!1)),
      (F.text.className = "text"),
      (F.checkMark = F.span.cloneNode(!1));
    var _ = new RegExp(P + "|" + W),
      q = new RegExp("^" + H + "$|" + A),
      G = function (e, t, i) {
        var s = F.li.cloneNode(!1);
        return (
          e &&
            (1 === e.nodeType || 11 === e.nodeType
              ? s.appendChild(e)
              : (s.innerHTML = e)),
          void 0 !== t && "" !== t && (s.className = t),
          null != i && s.classList.add("optgroup-" + i),
          s
        );
      },
      K = function (e, t, i) {
        var s = F.a.cloneNode(!0);
        return (
          e &&
            (11 === e.nodeType
              ? s.appendChild(e)
              : s.insertAdjacentHTML("beforeend", e)),
          void 0 !== t && "" !== t && (s.className = t),
          "4" === M.major && s.classList.add("dropdown-item"),
          i && s.setAttribute("style", i),
          s
        );
      },
      Y = function (e, t) {
        var i,
          s,
          n = F.text.cloneNode(!1);
        if (e.content) n.innerHTML = e.content;
        else {
          if (((n.textContent = e.text), e.icon)) {
            var o = F.whitespace.cloneNode(!1);
            ((s = (!0 === t ? F.i : F.span).cloneNode(!1)).className =
              e.iconBase + " " + e.icon),
              F.fragment.appendChild(s),
              F.fragment.appendChild(o);
          }
          e.subtext &&
            (((i = F.subtext.cloneNode(!1)).textContent = e.subtext),
            n.appendChild(i));
        }
        if (!0 === t)
          for (; 0 < n.childNodes.length; )
            F.fragment.appendChild(n.childNodes[0]);
        else F.fragment.appendChild(n);
        return F.fragment;
      },
      Z = function (e) {
        var t,
          i,
          s = F.text.cloneNode(!1);
        if (((s.innerHTML = e.label), e.icon)) {
          var n = F.whitespace.cloneNode(!1);
          ((i = F.span.cloneNode(!1)).className = e.iconBase + " " + e.icon),
            F.fragment.appendChild(i),
            F.fragment.appendChild(n);
        }
        return (
          e.subtext &&
            (((t = F.subtext.cloneNode(!1)).textContent = e.subtext),
            s.appendChild(t)),
          F.fragment.appendChild(s),
          F.fragment
        );
      },
      J = function (e, t) {
        var i = this;
        p.useDefault || ((z.valHooks.select.set = p._set), (p.useDefault = !0)),
          (this.$element = z(e)),
          (this.$newElement = null),
          (this.$button = null),
          (this.$menu = null),
          (this.options = t),
          (this.selectpicker = {
            main: {},
            current: {},
            search: {},
            view: {},
            keydown: {
              keyHistory: "",
              resetKeyHistory: {
                start: function () {
                  return setTimeout(function () {
                    i.selectpicker.keydown.keyHistory = "";
                  }, 800);
                },
              },
            },
          }),
          null === this.options.title &&
            (this.options.title = this.$element.attr("title"));
        var s = this.options.windowPadding;
        "number" == typeof s && (this.options.windowPadding = [s, s, s, s]),
          (this.val = J.prototype.val),
          (this.render = J.prototype.render),
          (this.refresh = J.prototype.refresh),
          (this.setStyle = J.prototype.setStyle),
          (this.selectAll = J.prototype.selectAll),
          (this.deselectAll = J.prototype.deselectAll),
          (this.destroy = J.prototype.destroy),
          (this.remove = J.prototype.remove),
          (this.show = J.prototype.show),
          (this.hide = J.prototype.hide),
          this.init();
      };
    function Q(e) {
      var r,
        a = arguments,
        c = e;
      if (([].shift.apply(a), !M.success)) {
        try {
          M.full = (z.fn.dropdown.Constructor.VERSION || "")
            .split(" ")[0]
            .split(".");
        } catch (e) {
          J.BootstrapVersion
            ? (M.full = J.BootstrapVersion.split(" ")[0].split("."))
            : ((M.full = [M.major, "0", "0"]),
              console.warn(
                "There was an issue retrieving Bootstrap's version. Ensure Bootstrap is being loaded before bootstrap-select and there is no namespace collision. If loading Bootstrap asynchronously, the version may need to be manually specified via $.fn.selectpicker.Constructor.BootstrapVersion.",
                e
              ));
        }
        (M.major = M.full[0]), (M.success = !0);
      }
      if ("4" === M.major) {
        var t = [];
        J.DEFAULTS.style === j.BUTTONCLASS &&
          t.push({ name: "style", className: "BUTTONCLASS" }),
          J.DEFAULTS.iconBase === j.ICONBASE &&
            t.push({ name: "iconBase", className: "ICONBASE" }),
          J.DEFAULTS.tickIcon === j.TICKICON &&
            t.push({ name: "tickIcon", className: "TICKICON" }),
          (j.DIVIDER = "dropdown-divider"),
          (j.SHOW = "show"),
          (j.BUTTONCLASS = "btn-light"),
          (j.POPOVERHEADER = "popover-header"),
          (j.ICONBASE = ""),
          (j.TICKICON = "bs-ok-default");
        for (var i = 0; i < t.length; i++) {
          e = t[i];
          J.DEFAULTS[e.name] = j[e.className];
        }
      }
      var s = this.each(function () {
        var e = z(this);
        if (e.is("select")) {
          var t = e.data("selectpicker"),
            i = "object" == typeof c && c;
          if (t) {
            if (i)
              for (var s in i) i.hasOwnProperty(s) && (t.options[s] = i[s]);
          } else {
            var n = e.data();
            for (var o in n)
              n.hasOwnProperty(o) && -1 !== z.inArray(o, d) && delete n[o];
            var l = z.extend(
              {},
              J.DEFAULTS,
              z.fn.selectpicker.defaults || {},
              n,
              i
            );
            (l.template = z.extend(
              {},
              J.DEFAULTS.template,
              z.fn.selectpicker.defaults
                ? z.fn.selectpicker.defaults.template
                : {},
              n.template,
              i.template
            )),
              e.data("selectpicker", (t = new J(this, l)));
          }
          "string" == typeof c &&
            (r = t[c] instanceof Function ? t[c].apply(t, a) : t.options[c]);
        }
      });
      return void 0 !== r ? r : s;
    }
    (J.VERSION = "1.13.9"),
      (J.DEFAULTS = {
        noneSelectedText: "Nothing selected",
        noneResultsText: "No results matched {0}",
        countSelectedText: function (e, t) {
          return 1 == e ? "{0} item selected" : "{0} items selected";
        },
        maxOptionsText: function (e, t) {
          return [
            1 == e
              ? "Limit reached ({n} item max)"
              : "Limit reached ({n} items max)",
            1 == t
              ? "Group limit reached ({n} item max)"
              : "Group limit reached ({n} items max)",
          ];
        },
        selectAllText: "Select All",
        deselectAllText: "Deselect All",
        doneButton: !1,
        doneButtonText: "Close",
        multipleSeparator: ", ",
        styleBase: "btn",
        style: j.BUTTONCLASS,
        size: "auto",
        title: null,
        selectedTextFormat: "values",
        width: !1,
        container: !1,
        hideDisabled: !1,
        showSubtext: !1,
        showIcon: !0,
        showContent: !0,
        dropupAuto: !0,
        header: !1,
        liveSearch: !1,
        liveSearchPlaceholder: null,
        liveSearchNormalize: !1,
        liveSearchStyle: "contains",
        actionsBox: !1,
        iconBase: j.ICONBASE,
        tickIcon: j.TICKICON,
        showTick: !1,
        template: { caret: '<span class="caret"></span>' },
        maxOptions: !1,
        mobile: !1,
        selectOnTab: !1,
        dropdownAlignRight: !1,
        windowPadding: 0,
        virtualScroll: 600,
        display: !1,
        sanitize: !0,
        sanitizeFn: null,
        whiteList: e,
      }),
      (J.prototype = {
        constructor: J,
        init: function () {
          var i = this,
            e = this.$element.attr("id");
          (this.selectId = R++),
            this.$element[0].classList.add("bs-select-hidden"),
            (this.multiple = this.$element.prop("multiple")),
            (this.autofocus = this.$element.prop("autofocus")),
            (this.options.showTick =
              this.$element[0].classList.contains("show-tick")),
            (this.$newElement = this.createDropdown()),
            this.$element.after(this.$newElement).prependTo(this.$newElement),
            (this.$button = this.$newElement.children("button")),
            (this.$menu = this.$newElement.children(V.MENU)),
            (this.$menuInner = this.$menu.children(".inner")),
            (this.$searchbox = this.$menu.find("input")),
            this.$element[0].classList.remove("bs-select-hidden"),
            !0 === this.options.dropdownAlignRight &&
              this.$menu[0].classList.add(j.MENURIGHT),
            void 0 !== e && this.$button.attr("data-id", e),
            this.checkDisabled(),
            this.clickListener(),
            this.options.liveSearch && this.liveSearchListener(),
            this.setStyle(),
            this.render(),
            this.setWidth(),
            this.options.container
              ? this.selectPosition()
              : this.$element.on("hide" + U, function () {
                  if (i.isVirtual()) {
                    var e = i.$menuInner[0],
                      t = e.firstChild.cloneNode(!1);
                    e.replaceChild(t, e.firstChild), (e.scrollTop = 0);
                  }
                }),
            this.$menu.data("this", this),
            this.$newElement.data("this", this),
            this.options.mobile && this.mobile(),
            this.$newElement.on({
              "hide.bs.dropdown": function (e) {
                i.$menuInner.attr("aria-expanded", !1),
                  i.$element.trigger("hide" + U, e);
              },
              "hidden.bs.dropdown": function (e) {
                i.$element.trigger("hidden" + U, e);
              },
              "show.bs.dropdown": function (e) {
                i.$menuInner.attr("aria-expanded", !0),
                  i.$element.trigger("show" + U, e);
              },
              "shown.bs.dropdown": function (e) {
                i.$element.trigger("shown" + U, e);
              },
            }),
            i.$element[0].hasAttribute("required") &&
              this.$element.on("invalid" + U, function () {
                i.$button[0].classList.add("bs-invalid"),
                  i.$element
                    .on("shown" + U + ".invalid", function () {
                      i.$element
                        .val(i.$element.val())
                        .off("shown" + U + ".invalid");
                    })
                    .on("rendered" + U, function () {
                      this.validity.valid &&
                        i.$button[0].classList.remove("bs-invalid"),
                        i.$element.off("rendered" + U);
                    }),
                  i.$button.on("blur" + U, function () {
                    i.$element.trigger("focus").trigger("blur"),
                      i.$button.off("blur" + U);
                  });
              }),
            setTimeout(function () {
              i.createLi(), i.$element.trigger("loaded" + U);
            });
        },
        createDropdown: function () {
          var e = this.multiple || this.options.showTick ? " show-tick" : "",
            t = "",
            i = this.autofocus ? " autofocus" : "";
          M.major < 4 &&
            this.$element.parent().hasClass("input-group") &&
            (t = " input-group-btn");
          var s,
            n = "",
            o = "",
            l = "",
            r = "";
          return (
            this.options.header &&
              (n =
                '<div class="' +
                j.POPOVERHEADER +
                '"><button type="button" class="close" aria-hidden="true">&times;</button>' +
                this.options.header +
                "</div>"),
            this.options.liveSearch &&
              (o =
                '<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"' +
                (null === this.options.liveSearchPlaceholder
                  ? ""
                  : ' placeholder="' +
                    O(this.options.liveSearchPlaceholder) +
                    '"') +
                ' role="textbox" aria-label="Search"></div>'),
            this.multiple &&
              this.options.actionsBox &&
              (l =
                '<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn ' +
                j.BUTTONCLASS +
                '">' +
                this.options.selectAllText +
                '</button><button type="button" class="actions-btn bs-deselect-all btn ' +
                j.BUTTONCLASS +
                '">' +
                this.options.deselectAllText +
                "</button></div></div>"),
            this.multiple &&
              this.options.doneButton &&
              (r =
                '<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm ' +
                j.BUTTONCLASS +
                '">' +
                this.options.doneButtonText +
                "</button></div></div>"),
            (s =
              '<div class="dropdown bootstrap-select' +
              e +
              t +
              '"><button type="button" class="' +
              this.options.styleBase +
              ' dropdown-toggle" ' +
              ("static" === this.options.display
                ? 'data-display="static"'
                : "") +
              'data-toggle="dropdown"' +
              i +
              ' role="button"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner"></div></div> </div>' +
              ("4" === M.major
                ? ""
                : '<span class="bs-caret">' +
                  this.options.template.caret +
                  "</span>") +
              '</button><div class="' +
              j.MENU +
              " " +
              ("4" === M.major ? "" : j.SHOW) +
              '" role="combobox">' +
              n +
              o +
              l +
              '<div class="inner ' +
              j.SHOW +
              '" role="listbox" aria-expanded="false" tabindex="-1"><ul class="' +
              j.MENU +
              " inner " +
              ("4" === M.major ? j.SHOW : "") +
              '"></ul></div>' +
              r +
              "</div></div>"),
            z(s)
          );
        },
        setPositionData: function () {
          this.selectpicker.view.canHighlight = [];
          for (var e = 0; e < this.selectpicker.current.data.length; e++) {
            var t = this.selectpicker.current.data[e],
              i = !0;
            "divider" === t.type
              ? ((i = !1), (t.height = this.sizeInfo.dividerHeight))
              : "optgroup-label" === t.type
              ? ((i = !1), (t.height = this.sizeInfo.dropdownHeaderHeight))
              : (t.height = this.sizeInfo.liHeight),
              t.disabled && (i = !1),
              this.selectpicker.view.canHighlight.push(i),
              (t.position =
                (0 === e ? 0 : this.selectpicker.current.data[e - 1].position) +
                t.height);
          }
        },
        isVirtual: function () {
          return (
            (!1 !== this.options.virtualScroll &&
              this.selectpicker.main.elements.length >=
                this.options.virtualScroll) ||
            !0 === this.options.virtualScroll
          );
        },
        createView: function (T, e) {
          e = e || 0;
          var A = this;
          this.selectpicker.current = T
            ? this.selectpicker.search
            : this.selectpicker.main;
          var N,
            D,
            H = [];
          function i(e, t) {
            var i,
              s,
              n,
              o,
              l,
              r,
              a,
              c,
              d,
              h,
              p = A.selectpicker.current.elements.length,
              u = [],
              f = !0,
              m = A.isVirtual();
            (A.selectpicker.view.scrollTop = e),
              !0 === m &&
                A.sizeInfo.hasScrollBar &&
                A.$menu[0].offsetWidth > A.sizeInfo.totalMenuWidth &&
                ((A.sizeInfo.menuWidth = A.$menu[0].offsetWidth),
                (A.sizeInfo.totalMenuWidth =
                  A.sizeInfo.menuWidth + A.sizeInfo.scrollBarWidth),
                A.$menu.css("min-width", A.sizeInfo.menuWidth)),
              (i = Math.ceil(
                (A.sizeInfo.menuInnerHeight / A.sizeInfo.liHeight) * 1.5
              )),
              (s = Math.round(p / i) || 1);
            for (var v = 0; v < s; v++) {
              var g = (v + 1) * i;
              if (
                (v === s - 1 && (g = p), (u[v] = [v * i + (v ? 1 : 0), g]), !p)
              )
                break;
              void 0 === l &&
                e <=
                  A.selectpicker.current.data[g - 1].position -
                    A.sizeInfo.menuInnerHeight &&
                (l = v);
            }
            if (
              (void 0 === l && (l = 0),
              (r = [
                A.selectpicker.view.position0,
                A.selectpicker.view.position1,
              ]),
              (n = Math.max(0, l - 1)),
              (o = Math.min(s - 1, l + 1)),
              (A.selectpicker.view.position0 =
                !1 === m ? 0 : Math.max(0, u[n][0]) || 0),
              (A.selectpicker.view.position1 =
                !1 === m ? p : Math.min(p, u[o][1]) || 0),
              (a =
                r[0] !== A.selectpicker.view.position0 ||
                r[1] !== A.selectpicker.view.position1),
              void 0 !== A.activeIndex &&
                ((D = A.selectpicker.main.elements[A.prevActiveIndex]),
                (H = A.selectpicker.main.elements[A.activeIndex]),
                (N = A.selectpicker.main.elements[A.selectedIndex]),
                t &&
                  (A.activeIndex !== A.selectedIndex &&
                    H &&
                    H.length &&
                    (H.classList.remove("active"),
                    H.firstChild && H.firstChild.classList.remove("active")),
                  (A.activeIndex = void 0)),
                A.activeIndex &&
                  A.activeIndex !== A.selectedIndex &&
                  N &&
                  N.length &&
                  (N.classList.remove("active"),
                  N.firstChild && N.firstChild.classList.remove("active"))),
              void 0 !== A.prevActiveIndex &&
                A.prevActiveIndex !== A.activeIndex &&
                A.prevActiveIndex !== A.selectedIndex &&
                D &&
                D.length &&
                (D.classList.remove("active"),
                D.firstChild && D.firstChild.classList.remove("active")),
              (t || a) &&
                ((c = A.selectpicker.view.visibleElements
                  ? A.selectpicker.view.visibleElements.slice()
                  : []),
                (A.selectpicker.view.visibleElements =
                  !1 === m
                    ? A.selectpicker.current.elements
                    : A.selectpicker.current.elements.slice(
                        A.selectpicker.view.position0,
                        A.selectpicker.view.position1
                      )),
                A.setOptionStatus(),
                (T || (!1 === m && t)) &&
                  ((d = c),
                  (h = A.selectpicker.view.visibleElements),
                  (f = !(
                    d.length === h.length &&
                    d.every(function (e, t) {
                      return e === h[t];
                    })
                  ))),
                (t || !0 === m) && f))
            ) {
              var b,
                w,
                x = A.$menuInner[0],
                I = document.createDocumentFragment(),
                k = x.firstChild.cloneNode(!1),
                $ = A.selectpicker.view.visibleElements,
                y = [];
              x.replaceChild(k, x.firstChild);
              v = 0;
              for (var S = $.length; v < S; v++) {
                var E,
                  C,
                  O = $[v];
                A.options.sanitize &&
                  (E = O.lastChild) &&
                  (C =
                    A.selectpicker.current.data[
                      v + A.selectpicker.view.position0
                    ]) &&
                  C.content &&
                  !C.sanitized &&
                  (y.push(E), (C.sanitized = !0)),
                  I.appendChild(O);
              }
              A.options.sanitize &&
                y.length &&
                B(y, A.options.whiteList, A.options.sanitizeFn),
                !0 === m &&
                  ((b =
                    0 === A.selectpicker.view.position0
                      ? 0
                      : A.selectpicker.current.data[
                          A.selectpicker.view.position0 - 1
                        ].position),
                  (w =
                    A.selectpicker.view.position1 > p - 1
                      ? 0
                      : A.selectpicker.current.data[p - 1].position -
                        A.selectpicker.current.data[
                          A.selectpicker.view.position1 - 1
                        ].position),
                  (x.firstChild.style.marginTop = b + "px"),
                  (x.firstChild.style.marginBottom = w + "px")),
                x.firstChild.appendChild(I);
            }
            if (((A.prevActiveIndex = A.activeIndex), A.options.liveSearch)) {
              if (T && t) {
                var z,
                  L = 0;
                A.selectpicker.view.canHighlight[L] ||
                  (L =
                    1 + A.selectpicker.view.canHighlight.slice(1).indexOf(!0)),
                  (z = A.selectpicker.view.visibleElements[L]),
                  A.selectpicker.view.currentActive &&
                    (A.selectpicker.view.currentActive.classList.remove(
                      "active"
                    ),
                    A.selectpicker.view.currentActive.firstChild &&
                      A.selectpicker.view.currentActive.firstChild.classList.remove(
                        "active"
                      )),
                  z &&
                    (z.classList.add("active"),
                    z.firstChild && z.firstChild.classList.add("active")),
                  (A.activeIndex = (
                    A.selectpicker.current.data[L] || {}
                  ).index);
              }
            } else A.$menuInner.trigger("focus");
          }
          this.setPositionData(),
            i(e, !0),
            this.$menuInner
              .off("scroll.createView")
              .on("scroll.createView", function (e, t) {
                A.noScroll || i(this.scrollTop, t), (A.noScroll = !1);
              }),
            z(window)
              .off("resize" + U + "." + this.selectId + ".createView")
              .on(
                "resize" + U + "." + this.selectId + ".createView",
                function () {
                  A.$newElement.hasClass(j.SHOW) &&
                    i(A.$menuInner[0].scrollTop);
                }
              );
        },
        setPlaceholder: function () {
          var e = !1;
          if (this.options.title && !this.multiple) {
            this.selectpicker.view.titleOption ||
              (this.selectpicker.view.titleOption =
                document.createElement("option")),
              (e = !0);
            var t = this.$element[0],
              i = !1,
              s = !this.selectpicker.view.titleOption.parentNode;
            if (s)
              (this.selectpicker.view.titleOption.className =
                "bs-title-option"),
                (this.selectpicker.view.titleOption.value = ""),
                (i =
                  void 0 === z(t.options[t.selectedIndex]).attr("selected") &&
                  void 0 === this.$element.data("selected"));
            (s || 0 !== this.selectpicker.view.titleOption.index) &&
              t.insertBefore(this.selectpicker.view.titleOption, t.firstChild),
              i && (t.selectedIndex = 0);
          }
          return e;
        },
        createLi: function () {
          var a = this,
            f = this.options.iconBase,
            m = ':not([hidden]):not([data-hidden="true"])',
            v = [],
            g = [],
            c = 0,
            b = 0,
            e = this.setPlaceholder() ? 1 : 0;
          this.options.hideDisabled && (m += ":not(:disabled)"),
            (!a.options.showTick && !a.multiple) ||
              F.checkMark.parentNode ||
              ((F.checkMark.className =
                f + " " + a.options.tickIcon + " check-mark"),
              F.a.appendChild(F.checkMark));
          var t = this.$element[0].querySelectorAll("select > *" + m);
          function w(e) {
            var t = g[g.length - 1];
            (t && "divider" === t.type && (t.optID || e.optID)) ||
              (((e = e || {}).type = "divider"),
              v.push(G(!1, j.DIVIDER, e.optID ? e.optID + "div" : void 0)),
              g.push(e));
          }
          function x(e, t) {
            if (
              (((t = t || {}).divider =
                "true" === e.getAttribute("data-divider")),
              t.divider)
            )
              w({ optID: t.optID });
            else {
              var i = g.length,
                s = e.style.cssText,
                n = s ? O(s) : "",
                o = (e.className || "") + (t.optgroupClass || "");
              t.optID && (o = "opt " + o),
                (t.text = e.textContent),
                (t.content = e.getAttribute("data-content")),
                (t.tokens = e.getAttribute("data-tokens")),
                (t.subtext = e.getAttribute("data-subtext")),
                (t.icon = e.getAttribute("data-icon")),
                (t.iconBase = f);
              var l = Y(t);
              v.push(G(K(l, o, n), "", t.optID)),
                (e.liIndex = i),
                (t.display = t.content || t.text),
                (t.type = "option"),
                (t.index = i),
                (t.option = e),
                (t.disabled = t.disabled || e.disabled),
                g.push(t);
              var r = 0;
              t.display && (r += t.display.length),
                t.subtext && (r += t.subtext.length),
                t.icon && (r += 1),
                c < r &&
                  ((c = r),
                  (a.selectpicker.view.widestOption = v[v.length - 1]));
            }
          }
          function i(e, t) {
            var i = t[e],
              s = t[e - 1],
              n = t[e + 1],
              o = i.querySelectorAll("option" + m);
            if (o.length) {
              var l,
                r,
                a = {
                  label: O(i.label),
                  subtext: i.getAttribute("data-subtext"),
                  icon: i.getAttribute("data-icon"),
                  iconBase: f,
                },
                c = " " + (i.className || "");
              b++, s && w({ optID: b });
              var d = Z(a);
              v.push(G(d, "dropdown-header" + c, b)),
                g.push({
                  display: a.label,
                  subtext: a.subtext,
                  type: "optgroup-label",
                  optID: b,
                });
              for (var h = 0, p = o.length; h < p; h++) {
                var u = o[h];
                0 === h && (r = (l = g.length - 1) + p),
                  x(u, {
                    headerIndex: l,
                    lastIndex: r,
                    optID: b,
                    optgroupClass: c,
                    disabled: i.disabled,
                  });
              }
              n && w({ optID: b });
            }
          }
          for (var s = t.length; e < s; e++) {
            var n = t[e];
            "OPTGROUP" !== n.tagName ? x(n, {}) : i(e, t);
          }
          (this.selectpicker.main.elements = v),
            (this.selectpicker.main.data = g),
            (this.selectpicker.current = this.selectpicker.main);
        },
        findLis: function () {
          return this.$menuInner.find(".inner > li");
        },
        render: function () {
          this.setPlaceholder();
          var e,
            t,
            i = this,
            s = this.$element[0].selectedOptions,
            n = s.length,
            o = this.$button[0],
            l = o.querySelector(".filter-option-inner-inner"),
            r = document.createTextNode(this.options.multipleSeparator),
            a = F.fragment.cloneNode(!1),
            c = !1;
          if (
            (this.togglePlaceholder(),
            this.tabIndex(),
            "static" === this.options.selectedTextFormat)
          )
            a = Y({ text: this.options.title }, !0);
          else if (
            ((e =
              this.multiple &&
              -1 !== this.options.selectedTextFormat.indexOf("count") &&
              1 < n) &&
              (e =
                (1 < (t = this.options.selectedTextFormat.split(">")).length &&
                  n > t[1]) ||
                (1 === t.length && 2 <= n)),
            !1 === e)
          ) {
            for (var d = 0; d < n && d < 50; d++) {
              var h = s[d],
                p = {},
                u = {
                  content: h.getAttribute("data-content"),
                  subtext: h.getAttribute("data-subtext"),
                  icon: h.getAttribute("data-icon"),
                };
              this.multiple && 0 < d && a.appendChild(r.cloneNode(!1)),
                h.title
                  ? (p.text = h.title)
                  : u.content && i.options.showContent
                  ? ((p.content = u.content.toString()), (c = !0))
                  : (i.options.showIcon &&
                      ((p.icon = u.icon), (p.iconBase = this.options.iconBase)),
                    i.options.showSubtext &&
                      !i.multiple &&
                      u.subtext &&
                      (p.subtext = " " + u.subtext),
                    (p.text = h.textContent.trim())),
                a.appendChild(Y(p, !0));
            }
            49 < n && a.appendChild(document.createTextNode("..."));
          } else {
            var f =
              ':not([hidden]):not([data-hidden="true"]):not([data-divider="true"])';
            this.options.hideDisabled && (f += ":not(:disabled)");
            var m = this.$element[0].querySelectorAll(
                "select > option" + f + ", optgroup" + f + " option" + f
              ).length,
              v =
                "function" == typeof this.options.countSelectedText
                  ? this.options.countSelectedText(n, m)
                  : this.options.countSelectedText;
            a = Y(
              {
                text: v
                  .replace("{0}", n.toString())
                  .replace("{1}", m.toString()),
              },
              !0
            );
          }
          if (
            (null == this.options.title &&
              (this.options.title = this.$element.attr("title")),
            a.childNodes.length ||
              (a = Y(
                {
                  text:
                    void 0 !== this.options.title
                      ? this.options.title
                      : this.options.noneSelectedText,
                },
                !0
              )),
            (o.title = a.textContent.replace(/<[^>]*>?/g, "").trim()),
            this.options.sanitize &&
              c &&
              B([a], i.options.whiteList, i.options.sanitizeFn),
            (l.innerHTML = ""),
            l.appendChild(a),
            M.major < 4 &&
              this.$newElement[0].classList.contains("bs3-has-addon"))
          ) {
            var g = o.querySelector(".filter-expand"),
              b = l.cloneNode(!0);
            (b.className = "filter-expand"),
              g ? o.replaceChild(b, g) : o.appendChild(b);
          }
          this.$element.trigger("rendered" + U);
        },
        setStyle: function (e, t) {
          var i,
            s = this.$button[0],
            n = this.$newElement[0],
            o = this.options.style.trim();
          this.$element.attr("class") &&
            this.$newElement.addClass(
              this.$element
                .attr("class")
                .replace(
                  /selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi,
                  ""
                )
            ),
            M.major < 4 &&
              (n.classList.add("bs3"),
              n.parentNode.classList.contains("input-group") &&
                (n.previousElementSibling || n.nextElementSibling) &&
                (
                  n.previousElementSibling || n.nextElementSibling
                ).classList.contains("input-group-addon") &&
                n.classList.add("bs3-has-addon")),
            (i = e ? e.trim() : o),
            "add" == t
              ? i && s.classList.add.apply(s.classList, i.split(" "))
              : "remove" == t
              ? i && s.classList.remove.apply(s.classList, i.split(" "))
              : (o && s.classList.remove.apply(s.classList, o.split(" ")),
                i && s.classList.add.apply(s.classList, i.split(" ")));
        },
        liHeight: function (e) {
          if (e || (!1 !== this.options.size && !this.sizeInfo)) {
            this.sizeInfo || (this.sizeInfo = {});
            var t = document.createElement("div"),
              i = document.createElement("div"),
              s = document.createElement("div"),
              n = document.createElement("ul"),
              o = document.createElement("li"),
              l = document.createElement("li"),
              r = document.createElement("li"),
              a = document.createElement("a"),
              c = document.createElement("span"),
              d =
                this.options.header &&
                0 < this.$menu.find("." + j.POPOVERHEADER).length
                  ? this.$menu.find("." + j.POPOVERHEADER)[0].cloneNode(!0)
                  : null,
              h = this.options.liveSearch
                ? document.createElement("div")
                : null,
              p =
                this.options.actionsBox &&
                this.multiple &&
                0 < this.$menu.find(".bs-actionsbox").length
                  ? this.$menu.find(".bs-actionsbox")[0].cloneNode(!0)
                  : null,
              u =
                this.options.doneButton &&
                this.multiple &&
                0 < this.$menu.find(".bs-donebutton").length
                  ? this.$menu.find(".bs-donebutton")[0].cloneNode(!0)
                  : null,
              f = this.$element.find("option")[0];
            if (
              ((this.sizeInfo.selectWidth = this.$newElement[0].offsetWidth),
              (c.className = "text"),
              (a.className = "dropdown-item " + (f ? f.className : "")),
              (t.className = this.$menu[0].parentNode.className + " " + j.SHOW),
              (t.style.width = this.sizeInfo.selectWidth + "px"),
              "auto" === this.options.width && (i.style.minWidth = 0),
              (i.className = j.MENU + " " + j.SHOW),
              (s.className = "inner " + j.SHOW),
              (n.className =
                j.MENU + " inner " + ("4" === M.major ? j.SHOW : "")),
              (o.className = j.DIVIDER),
              (l.className = "dropdown-header"),
              c.appendChild(document.createTextNode("\u200b")),
              a.appendChild(c),
              r.appendChild(a),
              l.appendChild(c.cloneNode(!0)),
              this.selectpicker.view.widestOption &&
                n.appendChild(
                  this.selectpicker.view.widestOption.cloneNode(!0)
                ),
              n.appendChild(r),
              n.appendChild(o),
              n.appendChild(l),
              d && i.appendChild(d),
              h)
            ) {
              var m = document.createElement("input");
              (h.className = "bs-searchbox"),
                (m.className = "form-control"),
                h.appendChild(m),
                i.appendChild(h);
            }
            p && i.appendChild(p),
              s.appendChild(n),
              i.appendChild(s),
              u && i.appendChild(u),
              t.appendChild(i),
              document.body.appendChild(t);
            var v,
              g = r.offsetHeight,
              b = l ? l.offsetHeight : 0,
              w = d ? d.offsetHeight : 0,
              x = h ? h.offsetHeight : 0,
              I = p ? p.offsetHeight : 0,
              k = u ? u.offsetHeight : 0,
              $ = z(o).outerHeight(!0),
              y = !!window.getComputedStyle && window.getComputedStyle(i),
              S = i.offsetWidth,
              E = y ? null : z(i),
              C = {
                vert:
                  L(y ? y.paddingTop : E.css("paddingTop")) +
                  L(y ? y.paddingBottom : E.css("paddingBottom")) +
                  L(y ? y.borderTopWidth : E.css("borderTopWidth")) +
                  L(y ? y.borderBottomWidth : E.css("borderBottomWidth")),
                horiz:
                  L(y ? y.paddingLeft : E.css("paddingLeft")) +
                  L(y ? y.paddingRight : E.css("paddingRight")) +
                  L(y ? y.borderLeftWidth : E.css("borderLeftWidth")) +
                  L(y ? y.borderRightWidth : E.css("borderRightWidth")),
              },
              O = {
                vert:
                  C.vert +
                  L(y ? y.marginTop : E.css("marginTop")) +
                  L(y ? y.marginBottom : E.css("marginBottom")) +
                  2,
                horiz:
                  C.horiz +
                  L(y ? y.marginLeft : E.css("marginLeft")) +
                  L(y ? y.marginRight : E.css("marginRight")) +
                  2,
              };
            (s.style.overflowY = "scroll"),
              (v = i.offsetWidth - S),
              document.body.removeChild(t),
              (this.sizeInfo.liHeight = g),
              (this.sizeInfo.dropdownHeaderHeight = b),
              (this.sizeInfo.headerHeight = w),
              (this.sizeInfo.searchHeight = x),
              (this.sizeInfo.actionsHeight = I),
              (this.sizeInfo.doneButtonHeight = k),
              (this.sizeInfo.dividerHeight = $),
              (this.sizeInfo.menuPadding = C),
              (this.sizeInfo.menuExtras = O),
              (this.sizeInfo.menuWidth = S),
              (this.sizeInfo.totalMenuWidth = this.sizeInfo.menuWidth),
              (this.sizeInfo.scrollBarWidth = v),
              (this.sizeInfo.selectHeight = this.$newElement[0].offsetHeight),
              this.setPositionData();
          }
        },
        getSelectPosition: function () {
          var e,
            t = z(window),
            i = this.$newElement.offset(),
            s = z(this.options.container);
          this.options.container && s.length && !s.is("body")
            ? (((e = s.offset()).top += parseInt(s.css("borderTopWidth"))),
              (e.left += parseInt(s.css("borderLeftWidth"))))
            : (e = { top: 0, left: 0 });
          var n = this.options.windowPadding;
          (this.sizeInfo.selectOffsetTop = i.top - e.top - t.scrollTop()),
            (this.sizeInfo.selectOffsetBot =
              t.height() -
              this.sizeInfo.selectOffsetTop -
              this.sizeInfo.selectHeight -
              e.top -
              n[2]),
            (this.sizeInfo.selectOffsetLeft = i.left - e.left - t.scrollLeft()),
            (this.sizeInfo.selectOffsetRight =
              t.width() -
              this.sizeInfo.selectOffsetLeft -
              this.sizeInfo.selectWidth -
              e.left -
              n[1]),
            (this.sizeInfo.selectOffsetTop -= n[0]),
            (this.sizeInfo.selectOffsetLeft -= n[3]);
        },
        setMenuSize: function (e) {
          this.getSelectPosition();
          var t,
            i,
            s,
            n,
            o,
            l,
            r,
            a = this.sizeInfo.selectWidth,
            c = this.sizeInfo.liHeight,
            d = this.sizeInfo.headerHeight,
            h = this.sizeInfo.searchHeight,
            p = this.sizeInfo.actionsHeight,
            u = this.sizeInfo.doneButtonHeight,
            f = this.sizeInfo.dividerHeight,
            m = this.sizeInfo.menuPadding,
            v = 0;
          if (
            (this.options.dropupAuto &&
              ((r = c * this.selectpicker.current.elements.length + m.vert),
              this.$newElement.toggleClass(
                j.DROPUP,
                this.sizeInfo.selectOffsetTop - this.sizeInfo.selectOffsetBot >
                  this.sizeInfo.menuExtras.vert &&
                  r + this.sizeInfo.menuExtras.vert + 50 >
                    this.sizeInfo.selectOffsetBot
              )),
            "auto" === this.options.size)
          )
            (n =
              3 < this.selectpicker.current.elements.length
                ? 3 * this.sizeInfo.liHeight + this.sizeInfo.menuExtras.vert - 2
                : 0),
              (i =
                this.sizeInfo.selectOffsetBot - this.sizeInfo.menuExtras.vert),
              (s = n + d + h + p + u),
              (l = Math.max(n - m.vert, 0)),
              this.$newElement.hasClass(j.DROPUP) &&
                (i =
                  this.sizeInfo.selectOffsetTop -
                  this.sizeInfo.menuExtras.vert),
              (t = (o = i) - d - h - p - u - m.vert);
          else if (
            this.options.size &&
            "auto" != this.options.size &&
            this.selectpicker.current.elements.length > this.options.size
          ) {
            for (var g = 0; g < this.options.size; g++)
              "divider" === this.selectpicker.current.data[g].type && v++;
            (t = (i = c * this.options.size + v * f + m.vert) - m.vert),
              (o = i + d + h + p + u),
              (s = l = "");
          }
          "auto" === this.options.dropdownAlignRight &&
            this.$menu.toggleClass(
              j.MENURIGHT,
              this.sizeInfo.selectOffsetLeft >
                this.sizeInfo.selectOffsetRight &&
                this.sizeInfo.selectOffsetRight <
                  this.sizeInfo.totalMenuWidth - a
            ),
            this.$menu.css({
              "max-height": o + "px",
              overflow: "hidden",
              "min-height": s + "px",
            }),
            this.$menuInner.css({
              "max-height": t + "px",
              "overflow-y": "auto",
              "min-height": l + "px",
            }),
            (this.sizeInfo.menuInnerHeight = Math.max(t, 1)),
            this.selectpicker.current.data.length &&
              this.selectpicker.current.data[
                this.selectpicker.current.data.length - 1
              ].position > this.sizeInfo.menuInnerHeight &&
              ((this.sizeInfo.hasScrollBar = !0),
              (this.sizeInfo.totalMenuWidth =
                this.sizeInfo.menuWidth + this.sizeInfo.scrollBarWidth),
              this.$menu.css("min-width", this.sizeInfo.totalMenuWidth)),
            this.dropdown &&
              this.dropdown._popper &&
              this.dropdown._popper.update();
        },
        setSize: function (e) {
          if (
            (this.liHeight(e),
            this.options.header && this.$menu.css("padding-top", 0),
            !1 !== this.options.size)
          ) {
            var t,
              i = this,
              s = z(window),
              n = 0;
            if (
              (this.setMenuSize(),
              this.options.liveSearch &&
                this.$searchbox
                  .off("input.setMenuSize propertychange.setMenuSize")
                  .on(
                    "input.setMenuSize propertychange.setMenuSize",
                    function () {
                      return i.setMenuSize();
                    }
                  ),
              "auto" === this.options.size
                ? s
                    .off(
                      "resize" +
                        U +
                        "." +
                        this.selectId +
                        ".setMenuSize scroll" +
                        U +
                        "." +
                        this.selectId +
                        ".setMenuSize"
                    )
                    .on(
                      "resize" +
                        U +
                        "." +
                        this.selectId +
                        ".setMenuSize scroll" +
                        U +
                        "." +
                        this.selectId +
                        ".setMenuSize",
                      function () {
                        return i.setMenuSize();
                      }
                    )
                : this.options.size &&
                  "auto" != this.options.size &&
                  this.selectpicker.current.elements.length >
                    this.options.size &&
                  s.off(
                    "resize" +
                      U +
                      "." +
                      this.selectId +
                      ".setMenuSize scroll" +
                      U +
                      "." +
                      this.selectId +
                      ".setMenuSize"
                  ),
              e)
            )
              n = this.$menuInner[0].scrollTop;
            else if (!i.multiple) {
              var o = i.$element[0];
              "number" ==
                typeof (t = (o.options[o.selectedIndex] || {}).liIndex) &&
                !1 !== i.options.size &&
                (n =
                  (n = i.sizeInfo.liHeight * t) -
                  i.sizeInfo.menuInnerHeight / 2 +
                  i.sizeInfo.liHeight / 2);
            }
            i.createView(!1, n);
          }
        },
        setWidth: function () {
          var i = this;
          "auto" === this.options.width
            ? requestAnimationFrame(function () {
                i.$menu.css("min-width", "0"),
                  i.$element.on("loaded" + U, function () {
                    i.liHeight(), i.setMenuSize();
                    var e = i.$newElement.clone().appendTo("body"),
                      t = e
                        .css("width", "auto")
                        .children("button")
                        .outerWidth();
                    e.remove(),
                      (i.sizeInfo.selectWidth = Math.max(
                        i.sizeInfo.totalMenuWidth,
                        t
                      )),
                      i.$newElement.css("width", i.sizeInfo.selectWidth + "px");
                  });
              })
            : "fit" === this.options.width
            ? (this.$menu.css("min-width", ""),
              this.$newElement.css("width", "").addClass("fit-width"))
            : this.options.width
            ? (this.$menu.css("min-width", ""),
              this.$newElement.css("width", this.options.width))
            : (this.$menu.css("min-width", ""),
              this.$newElement.css("width", "")),
            this.$newElement.hasClass("fit-width") &&
              "fit" !== this.options.width &&
              this.$newElement[0].classList.remove("fit-width");
        },
        selectPosition: function () {
          this.$bsContainer = z('<div class="bs-container" />');
          var s,
            n,
            o,
            l = this,
            r = z(this.options.container),
            e = function (e) {
              var t = {},
                i =
                  l.options.display ||
                  (!!z.fn.dropdown.Constructor.Default &&
                    z.fn.dropdown.Constructor.Default.display);
              l.$bsContainer
                .addClass(
                  e.attr("class").replace(/form-control|fit-width/gi, "")
                )
                .toggleClass(j.DROPUP, e.hasClass(j.DROPUP)),
                (s = e.offset()),
                r.is("body")
                  ? (n = { top: 0, left: 0 })
                  : (((n = r.offset()).top +=
                      parseInt(r.css("borderTopWidth")) - r.scrollTop()),
                    (n.left +=
                      parseInt(r.css("borderLeftWidth")) - r.scrollLeft())),
                (o = e.hasClass(j.DROPUP) ? 0 : e[0].offsetHeight),
                (M.major < 4 || "static" === i) &&
                  ((t.top = s.top - n.top + o), (t.left = s.left - n.left)),
                (t.width = e[0].offsetWidth),
                l.$bsContainer.css(t);
            };
          this.$button.on("click.bs.dropdown.data-api", function () {
            l.isDisabled() ||
              (e(l.$newElement),
              l.$bsContainer
                .appendTo(l.options.container)
                .toggleClass(j.SHOW, !l.$button.hasClass(j.SHOW))
                .append(l.$menu));
          }),
            z(window)
              .off(
                "resize" +
                  U +
                  "." +
                  this.selectId +
                  " scroll" +
                  U +
                  "." +
                  this.selectId
              )
              .on(
                "resize" +
                  U +
                  "." +
                  this.selectId +
                  " scroll" +
                  U +
                  "." +
                  this.selectId,
                function () {
                  l.$newElement.hasClass(j.SHOW) && e(l.$newElement);
                }
              ),
            this.$element.on("hide" + U, function () {
              l.$menu.data("height", l.$menu.height()), l.$bsContainer.detach();
            });
        },
        setOptionStatus: function () {
          var e = this;
          if (
            ((e.noScroll = !1),
            e.selectpicker.view.visibleElements &&
              e.selectpicker.view.visibleElements.length)
          )
            for (
              var t = 0;
              t < e.selectpicker.view.visibleElements.length;
              t++
            ) {
              var i =
                  e.selectpicker.current.data[
                    t + e.selectpicker.view.position0
                  ],
                s = i.option;
              s &&
                (e.setDisabled(i.index, i.disabled),
                e.setSelected(i.index, s.selected));
            }
        },
        setSelected: function (e, t) {
          var i,
            s,
            n = this.selectpicker.main.elements[e],
            o = this.selectpicker.main.data[e],
            l = void 0 !== this.activeIndex,
            r = this.activeIndex === e || (t && !this.multiple && !l);
          (o.selected = t),
            (s = n.firstChild),
            t && (this.selectedIndex = e),
            n.classList.toggle("selected", t),
            n.classList.toggle("active", r),
            r &&
              ((this.selectpicker.view.currentActive = n),
              (this.activeIndex = e)),
            s &&
              (s.classList.toggle("selected", t),
              s.classList.toggle("active", r),
              s.setAttribute("aria-selected", t)),
            r ||
              (!l &&
                t &&
                void 0 !== this.prevActiveIndex &&
                ((i =
                  this.selectpicker.main.elements[
                    this.prevActiveIndex
                  ]).classList.remove("active"),
                i.firstChild && i.firstChild.classList.remove("active")));
        },
        setDisabled: function (e, t) {
          var i,
            s = this.selectpicker.main.elements[e];
          (this.selectpicker.main.data[e].disabled = t),
            (i = s.firstChild),
            s.classList.toggle(j.DISABLED, t),
            i &&
              ("4" === M.major && i.classList.toggle(j.DISABLED, t),
              i.setAttribute("aria-disabled", t),
              t
                ? i.setAttribute("tabindex", -1)
                : i.setAttribute("tabindex", 0));
        },
        isDisabled: function () {
          return this.$element[0].disabled;
        },
        checkDisabled: function () {
          var e = this;
          this.isDisabled()
            ? (this.$newElement[0].classList.add(j.DISABLED),
              this.$button
                .addClass(j.DISABLED)
                .attr("tabindex", -1)
                .attr("aria-disabled", !0))
            : (this.$button[0].classList.contains(j.DISABLED) &&
                (this.$newElement[0].classList.remove(j.DISABLED),
                this.$button.removeClass(j.DISABLED).attr("aria-disabled", !1)),
              -1 != this.$button.attr("tabindex") ||
                this.$element.data("tabindex") ||
                this.$button.removeAttr("tabindex")),
            this.$button.on("click", function () {
              return !e.isDisabled();
            });
        },
        togglePlaceholder: function () {
          var e = this.$element[0],
            t = e.selectedIndex,
            i = -1 === t;
          i || e.options[t].value || (i = !0),
            this.$button.toggleClass("bs-placeholder", i);
        },
        tabIndex: function () {
          this.$element.data("tabindex") !== this.$element.attr("tabindex") &&
            -98 !== this.$element.attr("tabindex") &&
            "-98" !== this.$element.attr("tabindex") &&
            (this.$element.data("tabindex", this.$element.attr("tabindex")),
            this.$button.attr("tabindex", this.$element.data("tabindex"))),
            this.$element.attr("tabindex", -98);
        },
        clickListener: function () {
          var S = this,
            t = z(document);
          function e() {
            S.options.liveSearch
              ? S.$searchbox.trigger("focus")
              : S.$menuInner.trigger("focus");
          }
          function i() {
            S.dropdown &&
            S.dropdown._popper &&
            S.dropdown._popper.state.isCreated
              ? e()
              : requestAnimationFrame(i);
          }
          t.data("spaceSelect", !1),
            this.$button.on("keyup", function (e) {
              /(32)/.test(e.keyCode.toString(10)) &&
                t.data("spaceSelect") &&
                (e.preventDefault(), t.data("spaceSelect", !1));
            }),
            this.$newElement.on("show.bs.dropdown", function () {
              3 < M.major &&
                !S.dropdown &&
                ((S.dropdown = S.$button.data("bs.dropdown")),
                (S.dropdown._menu = S.$menu[0]));
            }),
            this.$button.on("click.bs.dropdown.data-api", function () {
              S.$newElement.hasClass(j.SHOW) || S.setSize();
            }),
            this.$element.on("shown" + U, function () {
              S.$menuInner[0].scrollTop !== S.selectpicker.view.scrollTop &&
                (S.$menuInner[0].scrollTop = S.selectpicker.view.scrollTop),
                3 < M.major ? requestAnimationFrame(i) : e();
            }),
            this.$menuInner.on("click", "li a", function (e, t) {
              var i = z(this),
                s = S.isVirtual() ? S.selectpicker.view.position0 : 0,
                n = S.selectpicker.current.data[i.parent().index() + s],
                o = n.index,
                l = E(S.$element[0]),
                r = S.$element.prop("selectedIndex"),
                a = !0;
              if (
                (S.multiple &&
                  1 !== S.options.maxOptions &&
                  e.stopPropagation(),
                e.preventDefault(),
                !S.isDisabled() && !i.parent().hasClass(j.DISABLED))
              ) {
                var c = S.$element.find("option"),
                  d = n.option,
                  h = z(d),
                  p = d.selected,
                  u = h.parent("optgroup"),
                  f = u.find("option"),
                  m = S.options.maxOptions,
                  v = u.data("maxOptions") || !1;
                if (
                  (o === S.activeIndex && (t = !0),
                  t ||
                    ((S.prevActiveIndex = S.activeIndex),
                    (S.activeIndex = void 0)),
                  S.multiple)
                ) {
                  if (
                    ((d.selected = !p),
                    S.setSelected(o, !p),
                    i.trigger("blur"),
                    !1 !== m || !1 !== v)
                  ) {
                    var g = m < c.filter(":selected").length,
                      b = v < u.find("option:selected").length;
                    if ((m && g) || (v && b))
                      if (m && 1 == m) {
                        c.prop("selected", !1), h.prop("selected", !0);
                        for (var w = 0; w < c.length; w++) S.setSelected(w, !1);
                        S.setSelected(o, !0);
                      } else if (v && 1 == v) {
                        u.find("option:selected").prop("selected", !1),
                          h.prop("selected", !0);
                        for (w = 0; w < f.length; w++) {
                          d = f[w];
                          S.setSelected(c.index(d), !1);
                        }
                        S.setSelected(o, !0);
                      } else {
                        var x =
                            "string" == typeof S.options.maxOptionsText
                              ? [
                                  S.options.maxOptionsText,
                                  S.options.maxOptionsText,
                                ]
                              : S.options.maxOptionsText,
                          I = "function" == typeof x ? x(m, v) : x,
                          k = I[0].replace("{n}", m),
                          $ = I[1].replace("{n}", v),
                          y = z('<div class="notify"></div>');
                        I[2] &&
                          ((k = k.replace("{var}", I[2][1 < m ? 0 : 1])),
                          ($ = $.replace("{var}", I[2][1 < v ? 0 : 1]))),
                          h.prop("selected", !1),
                          S.$menu.append(y),
                          m &&
                            g &&
                            (y.append(z("<div>" + k + "</div>")),
                            (a = !1),
                            S.$element.trigger("maxReached" + U)),
                          v &&
                            b &&
                            (y.append(z("<div>" + $ + "</div>")),
                            (a = !1),
                            S.$element.trigger("maxReachedGrp" + U)),
                          setTimeout(function () {
                            S.setSelected(o, !1);
                          }, 10),
                          y.delay(750).fadeOut(300, function () {
                            z(this).remove();
                          });
                      }
                  }
                } else
                  c.prop("selected", !1),
                    (d.selected = !0),
                    S.setSelected(o, !0);
                !S.multiple || (S.multiple && 1 === S.options.maxOptions)
                  ? S.$button.trigger("focus")
                  : S.options.liveSearch && S.$searchbox.trigger("focus"),
                  a &&
                    ((l != E(S.$element[0]) && S.multiple) ||
                      (r != S.$element.prop("selectedIndex") && !S.multiple)) &&
                    ((C = [d.index, h.prop("selected"), l]),
                    S.$element.triggerNative("change"));
              }
            }),
            this.$menu.on(
              "click",
              "li." +
                j.DISABLED +
                " a, ." +
                j.POPOVERHEADER +
                ", ." +
                j.POPOVERHEADER +
                " :not(.close)",
              function (e) {
                e.currentTarget == this &&
                  (e.preventDefault(),
                  e.stopPropagation(),
                  S.options.liveSearch && !z(e.target).hasClass("close")
                    ? S.$searchbox.trigger("focus")
                    : S.$button.trigger("focus"));
              }
            ),
            this.$menuInner.on(
              "click",
              ".divider, .dropdown-header",
              function (e) {
                e.preventDefault(),
                  e.stopPropagation(),
                  S.options.liveSearch
                    ? S.$searchbox.trigger("focus")
                    : S.$button.trigger("focus");
              }
            ),
            this.$menu.on(
              "click",
              "." + j.POPOVERHEADER + " .close",
              function () {
                S.$button.trigger("click");
              }
            ),
            this.$searchbox.on("click", function (e) {
              e.stopPropagation();
            }),
            this.$menu.on("click", ".actions-btn", function (e) {
              S.options.liveSearch
                ? S.$searchbox.trigger("focus")
                : S.$button.trigger("focus"),
                e.preventDefault(),
                e.stopPropagation(),
                z(this).hasClass("bs-select-all")
                  ? S.selectAll()
                  : S.deselectAll();
            }),
            this.$element
              .on("change" + U, function () {
                S.render(), S.$element.trigger("changed" + U, C), (C = null);
              })
              .on("focus" + U, function () {
                S.options.mobile || S.$button.trigger("focus");
              });
        },
        liveSearchListener: function () {
          var u = this,
            f = document.createElement("li");
          this.$button.on("click.bs.dropdown.data-api", function () {
            u.$searchbox.val() && u.$searchbox.val("");
          }),
            this.$searchbox.on(
              "click.bs.dropdown.data-api focus.bs.dropdown.data-api touchend.bs.dropdown.data-api",
              function (e) {
                e.stopPropagation();
              }
            ),
            this.$searchbox.on("input propertychange", function () {
              var e = u.$searchbox.val();
              if (
                ((u.selectpicker.search.elements = []),
                (u.selectpicker.search.data = []),
                e)
              ) {
                var t = [],
                  i = e.toUpperCase(),
                  s = {},
                  n = [],
                  o = u._searchStyle(),
                  l = u.options.liveSearchNormalize;
                l && (i = w(i)),
                  (u._$lisSelected = u.$menuInner.find(".selected"));
                for (var r = 0; r < u.selectpicker.main.data.length; r++) {
                  var a = u.selectpicker.main.data[r];
                  s[r] || (s[r] = $(a, i, o, l)),
                    s[r] &&
                      void 0 !== a.headerIndex &&
                      -1 === n.indexOf(a.headerIndex) &&
                      (0 < a.headerIndex &&
                        ((s[a.headerIndex - 1] = !0),
                        n.push(a.headerIndex - 1)),
                      (s[a.headerIndex] = !0),
                      n.push(a.headerIndex),
                      (s[a.lastIndex + 1] = !0)),
                    s[r] && "optgroup-label" !== a.type && n.push(r);
                }
                r = 0;
                for (var c = n.length; r < c; r++) {
                  var d = n[r],
                    h = n[r - 1],
                    p =
                      ((a = u.selectpicker.main.data[d]),
                      u.selectpicker.main.data[h]);
                  ("divider" !== a.type ||
                    ("divider" === a.type &&
                      p &&
                      "divider" !== p.type &&
                      c - 1 !== r)) &&
                    (u.selectpicker.search.data.push(a),
                    t.push(u.selectpicker.main.elements[d]));
                }
                (u.activeIndex = void 0),
                  (u.noScroll = !0),
                  u.$menuInner.scrollTop(0),
                  (u.selectpicker.search.elements = t),
                  u.createView(!0),
                  t.length ||
                    ((f.className = "no-results"),
                    (f.innerHTML = u.options.noneResultsText.replace(
                      "{0}",
                      '"' + O(e) + '"'
                    )),
                    u.$menuInner[0].firstChild.appendChild(f));
              } else u.$menuInner.scrollTop(0), u.createView(!1);
            });
        },
        _searchStyle: function () {
          return this.options.liveSearchStyle || "contains";
        },
        val: function (e) {
          if (void 0 === e) return this.$element.val();
          var t = E(this.$element[0]);
          return (
            (C = [null, null, t]),
            this.$element.val(e).trigger("changed" + U, C),
            this.render(),
            (C = null),
            this.$element
          );
        },
        changeAll: function (e) {
          if (this.multiple) {
            void 0 === e && (e = !0);
            var t = this.$element[0],
              i = 0,
              s = 0,
              n = E(t);
            t.classList.add("bs-select-hidden");
            for (
              var o = 0, l = this.selectpicker.current.elements.length;
              o < l;
              o++
            ) {
              var r = this.selectpicker.current.data[o],
                a = r.option;
              a &&
                !r.disabled &&
                "divider" !== r.type &&
                (r.selected && i++, (a.selected = e) && s++);
            }
            t.classList.remove("bs-select-hidden"),
              i !== s &&
                (this.setOptionStatus(),
                this.togglePlaceholder(),
                (C = [null, null, n]),
                this.$element.triggerNative("change"));
          }
        },
        selectAll: function () {
          return this.changeAll(!0);
        },
        deselectAll: function () {
          return this.changeAll(!1);
        },
        toggle: function (e) {
          (e = e || window.event) && e.stopPropagation(),
            this.$button.trigger("click.bs.dropdown.data-api");
        },
        keydown: function (e) {
          var t,
            i,
            s,
            n,
            o,
            l = z(this),
            r = l.hasClass("dropdown-toggle"),
            a = (r ? l.closest(".dropdown") : l.closest(V.MENU)).data("this"),
            c = a.findLis(),
            d = !1,
            h = e.which === H && !r && !a.options.selectOnTab,
            p = _.test(e.which) || h,
            u = a.$menuInner[0].scrollTop,
            f = a.isVirtual(),
            m = !0 === f ? a.selectpicker.view.position0 : 0;
          if (
            !(i = a.$newElement.hasClass(j.SHOW)) &&
            (p ||
              (48 <= e.which && e.which <= 57) ||
              (96 <= e.which && e.which <= 105) ||
              (65 <= e.which && e.which <= 90)) &&
            (a.$button.trigger("click.bs.dropdown.data-api"),
            a.options.liveSearch)
          )
            a.$searchbox.trigger("focus");
          else {
            if (
              (e.which === A &&
                i &&
                (e.preventDefault(),
                a.$button
                  .trigger("click.bs.dropdown.data-api")
                  .trigger("focus")),
              p)
            ) {
              if (!c.length) return;
              void 0 ===
                (t = !0 === f ? c.index(c.filter(".active")) : a.activeIndex) &&
                (t = -1),
                -1 !== t &&
                  ((s =
                    a.selectpicker.current.elements[t + m]).classList.remove(
                    "active"
                  ),
                  s.firstChild && s.firstChild.classList.remove("active")),
                e.which === P
                  ? (-1 !== t && t--,
                    t + m < 0 && (t += c.length),
                    a.selectpicker.view.canHighlight[t + m] ||
                      (-1 ===
                        (t =
                          a.selectpicker.view.canHighlight
                            .slice(0, t + m)
                            .lastIndexOf(!0) - m) &&
                        (t = c.length - 1)))
                  : (e.which === W || h) &&
                    (++t + m >= a.selectpicker.view.canHighlight.length &&
                      (t = 0),
                    a.selectpicker.view.canHighlight[t + m] ||
                      (t =
                        t +
                        1 +
                        a.selectpicker.view.canHighlight
                          .slice(t + m + 1)
                          .indexOf(!0))),
                e.preventDefault();
              var v = m + t;
              e.which === P
                ? 0 === m && t === c.length - 1
                  ? ((a.$menuInner[0].scrollTop = a.$menuInner[0].scrollHeight),
                    (v = a.selectpicker.current.elements.length - 1))
                  : (d =
                      (o =
                        (n = a.selectpicker.current.data[v]).position -
                        n.height) < u)
                : (e.which === W || h) &&
                  (0 === t
                    ? (v = a.$menuInner[0].scrollTop = 0)
                    : (d =
                        u <
                        (o =
                          (n = a.selectpicker.current.data[v]).position -
                          a.sizeInfo.menuInnerHeight))),
                (s = a.selectpicker.current.elements[v]) &&
                  (s.classList.add("active"),
                  s.firstChild && s.firstChild.classList.add("active")),
                (a.activeIndex = a.selectpicker.current.data[v].index),
                (a.selectpicker.view.currentActive = s),
                d && (a.$menuInner[0].scrollTop = o),
                a.options.liveSearch
                  ? a.$searchbox.trigger("focus")
                  : l.trigger("focus");
            } else if (
              (!l.is("input") && !q.test(e.which)) ||
              (e.which === D && a.selectpicker.keydown.keyHistory)
            ) {
              var g,
                b,
                w = [];
              e.preventDefault(),
                (a.selectpicker.keydown.keyHistory += T[e.which]),
                a.selectpicker.keydown.resetKeyHistory.cancel &&
                  clearTimeout(a.selectpicker.keydown.resetKeyHistory.cancel),
                (a.selectpicker.keydown.resetKeyHistory.cancel =
                  a.selectpicker.keydown.resetKeyHistory.start()),
                (b = a.selectpicker.keydown.keyHistory),
                /^(.)\1+$/.test(b) && (b = b.charAt(0));
              for (var x = 0; x < a.selectpicker.current.data.length; x++) {
                var I = a.selectpicker.current.data[x];
                $(I, b, "startsWith", !0) &&
                  a.selectpicker.view.canHighlight[x] &&
                  w.push(I.index);
              }
              if (w.length) {
                var k = 0;
                c.removeClass("active").find("a").removeClass("active"),
                  1 === b.length &&
                    (-1 === (k = w.indexOf(a.activeIndex)) || k === w.length - 1
                      ? (k = 0)
                      : k++),
                  (g = w[k]),
                  (d =
                    0 < u - (n = a.selectpicker.main.data[g]).position
                      ? ((o = n.position - n.height), !0)
                      : ((o = n.position - a.sizeInfo.menuInnerHeight),
                        n.position > u + a.sizeInfo.menuInnerHeight)),
                  (s = a.selectpicker.main.elements[g]).classList.add("active"),
                  s.firstChild && s.firstChild.classList.add("active"),
                  (a.activeIndex = w[k]),
                  s.firstChild.focus(),
                  d && (a.$menuInner[0].scrollTop = o),
                  l.trigger("focus");
              }
            }
            i &&
              ((e.which === D && !a.selectpicker.keydown.keyHistory) ||
                e.which === N ||
                (e.which === H && a.options.selectOnTab)) &&
              (e.which !== D && e.preventDefault(),
              (a.options.liveSearch && e.which === D) ||
                (a.$menuInner.find(".active a").trigger("click", !0),
                l.trigger("focus"),
                a.options.liveSearch ||
                  (e.preventDefault(), z(document).data("spaceSelect", !0))));
          }
        },
        mobile: function () {
          this.$element[0].classList.add("mobile-device");
        },
        refresh: function () {
          var e = z.extend({}, this.options, this.$element.data());
          (this.options = e),
            this.checkDisabled(),
            this.setStyle(),
            this.render(),
            this.createLi(),
            this.setWidth(),
            this.setSize(!0),
            this.$element.trigger("refreshed" + U);
        },
        hide: function () {
          this.$newElement.hide();
        },
        show: function () {
          this.$newElement.show();
        },
        remove: function () {
          this.$newElement.remove(), this.$element.remove();
        },
        destroy: function () {
          this.$newElement.before(this.$element).remove(),
            this.$bsContainer
              ? this.$bsContainer.remove()
              : this.$menu.remove(),
            this.$element
              .off(U)
              .removeData("selectpicker")
              .removeClass("bs-select-hidden selectpicker"),
            z(window).off(U + "." + this.selectId);
        },
      });
    var X = z.fn.selectpicker;
    (z.fn.selectpicker = Q),
      (z.fn.selectpicker.Constructor = J),
      (z.fn.selectpicker.noConflict = function () {
        return (z.fn.selectpicker = X), this;
      }),
      z(document)
        .off("keydown.bs.dropdown.data-api")
        .on(
          "keydown" + U,
          '.bootstrap-select [data-toggle="dropdown"], .bootstrap-select [role="listbox"], .bootstrap-select .bs-searchbox input',
          J.prototype.keydown
        )
        .on(
          "focusin.modal",
          '.bootstrap-select [data-toggle="dropdown"], .bootstrap-select [role="listbox"], .bootstrap-select .bs-searchbox input',
          function (e) {
            e.stopPropagation();
          }
        ),
      z(window).on("load" + U + ".data-api", function () {
        z(".selectpicker").each(function () {
          var e = z(this);
          Q.call(e, e.data());
        });
      });
  })(e);
});
