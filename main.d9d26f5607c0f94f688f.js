!function (t) {
  var e = {};

  function n(r) {
    if (e[r]) return e[r].exports;
    var i = e[r] = {i: r, l: !1, exports: {}};
    return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
  }

  n.m = t, n.c = e, n.d = function (t, e, r) {
    n.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: r})
  }, n.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
  }, n.t = function (t, e) {
    if (1 & e && (t = n(t)), 8 & e) return t;
    if (4 & e && "object" == typeof t && t && t.__esModule) return t;
    var r = Object.create(null);
    if (n.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: t
    }), 2 & e && "string" != typeof t) for (var i in t) n.d(r, i, function (e) {
      return t[e]
    }.bind(null, i));
    return r
  }, n.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t.default
    } : function () {
      return t
    };
    return n.d(e, "a", e), e
  }, n.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
  }, n.p = "", n(n.s = 2)
}([function (t, e, n) {
}, function (t) {
  t.exports = JSON.parse('{"product":[{"name":"Парикмахерское кресло «Норм» гидравлическое","img":"http://dev-wbooster.ru/test_task/img/img-1.png","price":"9900"},{"name":"Парикмахерское кресло «Норм» гидравлическое","img":"http://dev-wbooster.ru/test_task/img/img-1.png","price":"9900"},{"name":"Парикмахерское кресло «Норм» гидравлическое","img":"http://dev-wbooster.ru/test_task/img/img-1.png","price":"9900"},{"name":"Парикмахерское кресло «Норм» гидравлическое","img":"http://dev-wbooster.ru/test_task/img/img-1.png","price":"9900"},{"name":"Парикмахерское кресло «Норм» гидравлическое","img":"http://dev-wbooster.ru/test_task/img/img-1.png","price":"9900"},{"name":"Парикмахерское кресло «Норм» гидравлическое","img":"http://dev-wbooster.ru/test_task/img/img-1.png","price":"9900"}]}')
}, function (t, e, n) {
  "use strict";

  function r(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
    }
  }

  n.r(e);
  var i = function () {
    function t(e) {
      !function (t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      }(this, t), this.url = e
    }

    var e, n, i;
    return e = t, (n = [{
      key: "getRes", value: function () {
        var t = this;
        return fetch(this.url, {method: "GET"}).then((function (e) {
          return t._getResponseData(e)
        }))
      }
    }, {
      key: "_getResponseData", value: function (t) {
        return t.ok ? t.json() : Promise.reject(t.status)
      }
    }]) && r(e.prototype, n), i && r(e, i), t
  }();
  n(0);

  function o(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
    }
  }

  var a = function () {
    function t(e, n, r) {
      var i, o, a, u = this;
      !function (t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      }(this, t), a = function () {
        u.openPopup()
      }, (o = "open") in (i = this) ? Object.defineProperty(i, o, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : i[o] = a, this.template = n, this.title = e.name, this.price = e.price, this.img = e.img, this.openPopup = r
    }

    var e, n, r;
    return e = t, (n = [{
      key: "createCard", value: function () {
        return this.container = this.template.cloneNode(!0), this.btn = this.template.querySelector(".button"), this.container.querySelector(".card-item__img").setAttribute("src", this.img), this.container.querySelector(".card-item__title").textContent = this.title, this.container.querySelector(".card-item__price").textContent = "".concat(this.price, " руб."), this.setEventListeners(), this.container
      }
    }, {
      key: "setEventListeners", value: function () {
        this.container.querySelector(".button").addEventListener("click", this.open)
      }
    }]) && o(e.prototype, n), r && o(e, r), t
  }();

  function u(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
    }
  }

  var c = function () {
      function t(e) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, t), this.container = e
      }

      var e, n, r;
      return e = t, (n = [{
        key: "_addCard", value: function (t) {
          this.container.append(t)
        }
      }, {
        key: "render", value: function (t) {
          var e = this;
          t.forEach((function (t) {
            return e._addCard(t)
          }))
        }
      }]) && u(e.prototype, n), r && u(e, r), t
    }(), s = document.querySelector(".template").content, l = document.querySelector(".card-items"),
    f = document.querySelector(".popup"), p = document.querySelector(".popup__close"), d = n(1),
    m = document.querySelector(".popup__form"), y = document.querySelector("#popup-button"),
    h = "Это обязательное поле", v = "необходим e-mail в формате: email@gmail.com",
    b = "необходим e-mail в формате: email@gmail.com", g = function () {
      f.classList.add("popup_is-opened")
    };

  function _(t) {
    return function (t) {
      if (Array.isArray(t)) return t
    }(t) || function (t) {
      if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
    }(t) || function (t, e) {
      if (!t) return;
      if ("string" == typeof t) return S(t, e);
      var n = Object.prototype.toString.call(t).slice(8, -1);
      "Object" === n && t.constructor && (n = t.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(t);
      if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return S(t, e)
    }(t) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
  }

  function S(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
    return r
  }

  function k(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
    }
  }

  var w = function () {
    function t(e, n) {
      !function (t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      }(this, t), this.form = e, this.button = n, this.isFieldValid = this.isFieldValid.bind(this)
    }

    var e, n, r;
    return e = t, (n = [{
      key: "_checkInputValidity", value: function (t) {
        return t.setCustomValidity(""), t.validity.valueMissing ? (t.setCustomValidity(h), !1) : t.validity.typeMismatch && "userPhone" === t.type ? (t.setCustomValidity(b), !1) : t.validity.typeMismatch && "userEmail" === t.type ? (t.setCustomValidity(v), !1) : t.checkValidity()
      }
    }, {
      key: "isFieldValid", value: function (t) {
        t.preventDefault();
        var e = t.target, n = t.currentTarget, r = e.parentNode.querySelector("#".concat(e.id, "-error")),
          i = this._checkInputValidity(e);
        r.textContent = e.validationMessage;
        var o = n.checkValidity();
        return this.setSubmitButtonState(o), i
      }
    }, {
      key: "resetError", value: function () {
        _(this.form.querySelectorAll("span.error")).slice(0).forEach((function (t) {
          t.textContent = ""
        }))
      }
    }, {
      key: "setSubmitButtonState", value: function (t) {
        t ? this.button.classList.remove("button_disabled") : this.button.classList.add("button_disabled")
      }
    }, {
      key: "setEventListenersValidation", value: function () {
        this.form.addEventListener("input", this.isFieldValid)
      }
    }]) && k(e.prototype, n), r && k(e, r), t
  }(), E = new i(d), j = new c(l), C = new w(m, y);
  E.getRes().then((function (t) {
    var e, n;
    e = t.product, n = e.map((function (t) {
      return new a(t, s, g).createCard()
    })), j.render(n)
  })).catch((function (t) {
    console.log("Ошибка ".concat(t, " "))
  })), p.addEventListener("click", (function () {
    f.classList.remove("popup_is-opened")
  })), C.setEventListenersValidation(), y.addEventListener("click", (function () {
    C.resetError(), C.setSubmitButtonState(!1)
  }))
}]);