!(function (t) {
  var a = {};
  function e(i) {
    if (a[i]) return a[i].exports;
    var n = (a[i] = { i, l: !1, exports: {} });
    return t[i].call(n.exports, n, n.exports, e), (n.l = !0), n.exports;
  }
  (e.m = t),
    (e.c = a),
    (e.d = function (t, a, i) {
      e.o(t, a) ||
        Object.defineProperty(t, a, {
          configurable: !1,
          enumerable: !0,
          get: i,
        });
    }),
    (e.n = function (t) {
      var a =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return e.d(a, "a", a), a;
    }),
    (e.o = function (t, a) {
      return Object.prototype.hasOwnProperty.call(t, a);
    }),
    (e.p = "/"),
    e((e.s = 40));
})({
  4: function (t, a) {},
  40: function (t, a, e) {
    e(4), e(5), e(6), e(7), e(8), (t.exports = e(41));
  },
  41: function (t, a) {
    jQuery(function (t) {
      var a = t(".wdcl-carousel");
      a &&
        a.each(function () {
          var a = t(this).data("pagi"),
            e = t(this).data("pagi-tablet"),
            i = t(this).data("pagi-phone"),
            n = t(this).data("variable-width"),
            o = t(this).data("nav"),
            s = t(this).data("nav-tablet"),
            r = t(this).data("nav-phone"),
            d = t(this).data("autoplay"),
            c = t(this).data("autoplay-speed"),
            l = t(this).data("speed"),
            p = t(this).data("slides"),
            h = t(this).data("slides-tablet"),
            u = t(this).data("slides-phone"),
            f = t(this).data("center"),
            g = t(this).data("infinite"),
            b = t(this).data("vertical"),
            w = t(this).data("icon-left"),
            v = t(this).data("icon-right"),
            m = t(this).data("center-mode-type"),
            _ = t(this).data("center-padding"),
            y = t(this).data("variable-width"),
            k = t(this).data("auto-height"),
            x = t(this).data("fade"),
            S = t(this).data("dir"),
            T = t(this).data("items-scroll");
          (T = T.split("|")),
            (_ = _.split("|")),
            "" === T[1] && (T[1] = T[0]),
            "" === T[2] && (T[2] = T[1]),
            "" === _[1] && (_[1] = _[0]),
            "" === _[2] && (_[2] = _[1]),
            "on" === y && ((p = 1), (h = 1), (u = 1)),
            t(this).slick({
              swipeToSlide: 1,
              focusOnSelect: !1,
              focusOnChange: !1,
              edgeFriction: 0.35,
              useTransform: !0,
              cssEase: "ease-in-out",
              adaptiveHeight: "on" === k,
              touchThreshold: 600,
              swipe: "on" !== f,
              draggable: 0,
              waitForAnimate: !0,
              variableWidth: "on" === n,
              dots: !!a,
              arrows: !!o,
              infinite: "on" === g,
              autoplay: "on" === d,
              autoplaySpeed: parseInt(c),
              touchMove: !0,
              speed: parseInt(l),
              slidesToShow: parseInt(p),
              fade: "off" !== x,
              rtl: "ltr" !== S,
              slidesToScroll: parseInt(T[0]),
              centerMode: "on" === f,
              centerPadding: "off" === y && "classic" === m ? _[0] : 0,
              vertical: "on" === b,
              prevArrow: '<button type="button" data-icon="'.concat(
                w,
                '" class="slick-arrow slick-prev">Prev</button>'
              ),
              nextArrow: '<button type="button" data-icon="'.concat(
                v,
                '" class="slick-arrow slick-next">Prev</button>'
              ),
              responsive: [
                {
                  breakpoint: 980,
                  settings: {
                    slidesToShow: parseInt(h),
                    dots: !!e,
                    arrows: !!s,
                    centerPadding: "off" === y && "classic" === m ? _[1] : 0,
                    slidesToScroll: parseInt(T[1]),
                  },
                },
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: parseInt(u),
                    dots: !!i,
                    arrows: !!r,
                    centerPadding: "off" === y && "classic" === m ? _[2] : 0,
                    slidesToScroll: parseInt(T[2]),
                  },
                },
              ],
            });
        });
      var e = t(".wdcl-lightbox-on .wdcl-lightbox-ctrl img"),
        i = t(".wdcl-lightbox-off .wdcl-lightbox-ctrl img");
      e.magnificPopup({
        type: "image",
        mainClass: "mfp-with-zoom",
        gallery: { enabled: !1 },
        zoom: { enabled: !0, duration: 300, easing: "ease-in-out" },
      }),
        i.each(function () {
          t(this).removeAttr("data-mfp-src");
        }),
        "undefined" !== typeof et_link_options_data &&
          et_link_options_data.forEach(function (a, e) {
            t(document).on(
              "click",
              ".".concat(et_link_options_data[e].class),
              function () {
                window.open(
                  et_link_options_data[e].url,
                  et_link_options_data[e].target
                );
              }
            );
          });
    });
  },
  5: function (t, a) {},
  6: function (t, a) {},
  7: function (t, a) {},
  8: function (t, a) {},
});
