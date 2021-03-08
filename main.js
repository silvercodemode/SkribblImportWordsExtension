!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e =
        "undefined" != typeof globalThis
          ? globalThis
          : e || self).firebase = t());
})(this, function () {
  "use strict";
  var r = function (e, t) {
    return (r =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (e, t) {
          e.__proto__ = t;
        }) ||
      function (e, t) {
        for (var n in t)
          Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
      })(e, t);
  };
  var i = function () {
    return (i =
      Object.assign ||
      function (e) {
        for (var t, n = 1, r = arguments.length; n < r; n++)
          for (var o in (t = arguments[n]))
            Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
        return e;
      }).apply(this, arguments);
  };
  function e(e, a, s, c) {
    return new (s = s || Promise)(function (n, t) {
      function r(e) {
        try {
          i(c.next(e));
        } catch (e) {
          t(e);
        }
      }
      function o(e) {
        try {
          i(c.throw(e));
        } catch (e) {
          t(e);
        }
      }
      function i(e) {
        var t;
        e.done
          ? n(e.value)
          : ((t = e.value) instanceof s
              ? t
              : new s(function (e) {
                  e(t);
                })
            ).then(r, o);
      }
      i((c = c.apply(e, a || [])).next());
    });
  }
  function n(n, r) {
    var o,
      i,
      a,
      s = {
        label: 0,
        sent: function () {
          if (1 & a[0]) throw a[1];
          return a[1];
        },
        trys: [],
        ops: [],
      },
      e = { next: t(0), throw: t(1), return: t(2) };
    return (
      "function" == typeof Symbol &&
        (e[Symbol.iterator] = function () {
          return this;
        }),
      e
    );
    function t(t) {
      return function (e) {
        return (function (t) {
          if (o) throw new TypeError("Generator is already executing.");
          for (; s; )
            try {
              if (
                ((o = 1),
                i &&
                  (a =
                    2 & t[0]
                      ? i.return
                      : t[0]
                      ? i.throw || ((a = i.return) && a.call(i), 0)
                      : i.next) &&
                  !(a = a.call(i, t[1])).done)
              )
                return a;
              switch (((i = 0), (t = a ? [2 & t[0], a.value] : t)[0])) {
                case 0:
                case 1:
                  a = t;
                  break;
                case 4:
                  return s.label++, { value: t[1], done: !1 };
                case 5:
                  s.label++, (i = t[1]), (t = [0]);
                  continue;
                case 7:
                  (t = s.ops.pop()), s.trys.pop();
                  continue;
                default:
                  if (
                    !(a = 0 < (a = s.trys).length && a[a.length - 1]) &&
                    (6 === t[0] || 2 === t[0])
                  ) {
                    s = 0;
                    continue;
                  }
                  if (3 === t[0] && (!a || (t[1] > a[0] && t[1] < a[3]))) {
                    s.label = t[1];
                    break;
                  }
                  if (6 === t[0] && s.label < a[1]) {
                    (s.label = a[1]), (a = t);
                    break;
                  }
                  if (a && s.label < a[2]) {
                    (s.label = a[2]), s.ops.push(t);
                    break;
                  }
                  a[2] && s.ops.pop(), s.trys.pop();
                  continue;
              }
              t = r.call(n, s);
            } catch (e) {
              (t = [6, e]), (i = 0);
            } finally {
              o = a = 0;
            }
          if (5 & t[0]) throw t[1];
          return { value: t[0] ? t[1] : void 0, done: !0 };
        })([t, e]);
      };
    }
  }
  function u(e, t) {
    var n = "function" == typeof Symbol && e[Symbol.iterator];
    if (!n) return e;
    var r,
      o,
      i = n.call(e),
      a = [];
    try {
      for (; (void 0 === t || 0 < t--) && !(r = i.next()).done; )
        a.push(r.value);
    } catch (e) {
      o = { error: e };
    } finally {
      try {
        r && !r.done && (n = i.return) && n.call(i);
      } finally {
        if (o) throw o.error;
      }
    }
    return a;
  }
  function p(e, t) {
    if (!(t instanceof Object)) return t;
    switch (t.constructor) {
      case Date:
        return new Date(t.getTime());
      case Object:
        void 0 === e && (e = {});
        break;
      case Array:
        e = [];
        break;
      default:
        return t;
    }
    for (var n in t)
      t.hasOwnProperty(n) && "__proto__" !== n && (e[n] = p(e[n], t[n]));
    return e;
  }
  var o =
    ((t.prototype.wrapCallback = function (n) {
      var r = this;
      return function (e, t) {
        e ? r.reject(e) : r.resolve(t),
          "function" == typeof n &&
            (r.promise.catch(function () {}), 1 === n.length ? n(e) : n(e, t));
      };
    }),
    t);
  function t() {
    var n = this;
    (this.reject = function () {}),
      (this.resolve = function () {}),
      (this.promise = new Promise(function (e, t) {
        (n.resolve = e), (n.reject = t);
      }));
  }
  var a,
    s = "FirebaseError",
    c =
      ((function (e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Class extends value " + String(t) + " is not a constructor or null"
          );
        function n() {
          this.constructor = e;
        }
        r(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n()));
      })(l, (a = Error)),
      l);
  function l(e, t, n) {
    t = a.call(this, t) || this;
    return (
      (t.code = e),
      (t.customData = n),
      (t.name = s),
      Object.setPrototypeOf(t, l.prototype),
      Error.captureStackTrace && Error.captureStackTrace(t, f.prototype.create),
      t
    );
  }
  var f =
    ((h.prototype.create = function (e) {
      for (var t = [], n = 1; n < arguments.length; n++)
        t[n - 1] = arguments[n];
      var r,
        o = t[0] || {},
        i = this.service + "/" + e,
        e = this.errors[e],
        e = e
          ? ((r = o),
            e.replace(d, function (e, t) {
              var n = r[t];
              return null != n ? String(n) : "<" + t + "?>";
            }))
          : "Error",
        e = this.serviceName + ": " + e + " (" + i + ").";
      return new c(i, e, o);
    }),
    h);
  function h(e, t, n) {
    (this.service = e), (this.serviceName = t), (this.errors = n);
  }
  var d = /\{\$([^}]+)}/g;
  function v(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }
  function m(e, t) {
    t = new y(e, t);
    return t.subscribe.bind(t);
  }
  var y =
    ((g.prototype.next = function (t) {
      this.forEachObserver(function (e) {
        e.next(t);
      });
    }),
    (g.prototype.error = function (t) {
      this.forEachObserver(function (e) {
        e.error(t);
      }),
        this.close(t);
    }),
    (g.prototype.complete = function () {
      this.forEachObserver(function (e) {
        e.complete();
      }),
        this.close();
    }),
    (g.prototype.subscribe = function (e, t, n) {
      var r,
        o = this;
      if (void 0 === e && void 0 === t && void 0 === n)
        throw new Error("Missing Observer.");
      void 0 ===
        (r = (function (e, t) {
          if ("object" != typeof e || null === e) return !1;
          for (var n = 0, r = t; n < r.length; n++) {
            var o = r[n];
            if (o in e && "function" == typeof e[o]) return !0;
          }
          return !1;
        })(e, ["next", "error", "complete"])
          ? e
          : { next: e, error: t, complete: n }).next && (r.next = b),
        void 0 === r.error && (r.error = b),
        void 0 === r.complete && (r.complete = b);
      n = this.unsubscribeOne.bind(this, this.observers.length);
      return (
        this.finalized &&
          this.task.then(function () {
            try {
              o.finalError ? r.error(o.finalError) : r.complete();
            } catch (e) {}
          }),
        this.observers.push(r),
        n
      );
    }),
    (g.prototype.unsubscribeOne = function (e) {
      void 0 !== this.observers &&
        void 0 !== this.observers[e] &&
        (delete this.observers[e],
        --this.observerCount,
        0 === this.observerCount &&
          void 0 !== this.onNoObservers &&
          this.onNoObservers(this));
    }),
    (g.prototype.forEachObserver = function (e) {
      if (!this.finalized)
        for (var t = 0; t < this.observers.length; t++) this.sendOne(t, e);
    }),
    (g.prototype.sendOne = function (e, t) {
      var n = this;
      this.task.then(function () {
        if (void 0 !== n.observers && void 0 !== n.observers[e])
          try {
            t(n.observers[e]);
          } catch (e) {
            "undefined" != typeof console && console.error && console.error(e);
          }
      });
    }),
    (g.prototype.close = function (e) {
      var t = this;
      this.finalized ||
        ((this.finalized = !0),
        void 0 !== e && (this.finalError = e),
        this.task.then(function () {
          (t.observers = void 0), (t.onNoObservers = void 0);
        }));
    }),
    g);
  function g(e, t) {
    var n = this;
    (this.observers = []),
      (this.unsubscribes = []),
      (this.observerCount = 0),
      (this.task = Promise.resolve()),
      (this.finalized = !1),
      (this.onNoObservers = t),
      this.task
        .then(function () {
          e(n);
        })
        .catch(function (e) {
          n.error(e);
        });
  }
  function b() {}
  var w =
    ((E.prototype.setInstantiationMode = function (e) {
      return (this.instantiationMode = e), this;
    }),
    (E.prototype.setMultipleInstances = function (e) {
      return (this.multipleInstances = e), this;
    }),
    (E.prototype.setServiceProps = function (e) {
      return (this.serviceProps = e), this;
    }),
    E);
  function E(e, t, n) {
    (this.name = e),
      (this.instanceFactory = t),
      (this.type = n),
      (this.multipleInstances = !1),
      (this.serviceProps = {}),
      (this.instantiationMode = "LAZY");
  }
  var O = "[DEFAULT]",
    _ =
      ((I.prototype.get = function (e) {
        void 0 === e && (e = O);
        var t = this.normalizeInstanceIdentifier(e);
        if (!this.instancesDeferred.has(t)) {
          var n = new o();
          this.instancesDeferred.set(t, n);
          try {
            var r = this.getOrInitializeService(t);
            r && n.resolve(r);
          } catch (e) {}
        }
        return this.instancesDeferred.get(t).promise;
      }),
      (I.prototype.getImmediate = function (e) {
        var t = i({ identifier: O, optional: !1 }, e),
          e = t.identifier,
          n = t.optional,
          r = this.normalizeInstanceIdentifier(e);
        try {
          var o = this.getOrInitializeService(r);
          if (o) return o;
          if (n) return null;
          throw Error("Service " + this.name + " is not available");
        } catch (e) {
          if (n) return null;
          throw e;
        }
      }),
      (I.prototype.getComponent = function () {
        return this.component;
      }),
      (I.prototype.setComponent = function (e) {
        var t, n;
        if (e.name !== this.name)
          throw Error(
            "Mismatching Component " +
              e.name +
              " for Provider " +
              this.name +
              "."
          );
        if (this.component)
          throw Error(
            "Component for " + this.name + " has already been provided"
          );
        if ("EAGER" === (this.component = e).instantiationMode)
          try {
            this.getOrInitializeService(O);
          } catch (e) {}
        try {
          for (
            var r = (function (e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                  n = t && e[t],
                  r = 0;
                if (n) return n.call(e);
                if (e && "number" == typeof e.length)
                  return {
                    next: function () {
                      return {
                        value: (e = e && r >= e.length ? void 0 : e) && e[r++],
                        done: !e,
                      };
                    },
                  };
                throw new TypeError(
                  t
                    ? "Object is not iterable."
                    : "Symbol.iterator is not defined."
                );
              })(this.instancesDeferred.entries()),
              o = r.next();
            !o.done;
            o = r.next()
          ) {
            var i = u(o.value, 2),
              a = i[0],
              s = i[1],
              c = this.normalizeInstanceIdentifier(a);
            try {
              var l = this.getOrInitializeService(c);
              s.resolve(l);
            } catch (e) {}
          }
        } catch (e) {
          t = { error: e };
        } finally {
          try {
            o && !o.done && (n = r.return) && n.call(r);
          } finally {
            if (t) throw t.error;
          }
        }
      }),
      (I.prototype.clearInstance = function (e) {
        void 0 === e && (e = O),
          this.instancesDeferred.delete(e),
          this.instances.delete(e);
      }),
      (I.prototype.delete = function () {
        return e(this, void 0, void 0, function () {
          var t;
          return n(this, function (e) {
            switch (e.label) {
              case 0:
                return (
                  (t = Array.from(this.instances.values())),
                  [
                    4,
                    Promise.all(
                      (function () {
                        for (var e = [], t = 0; t < arguments.length; t++)
                          e = e.concat(u(arguments[t]));
                        return e;
                      })(
                        t
                          .filter(function (e) {
                            return "INTERNAL" in e;
                          })
                          .map(function (e) {
                            return e.INTERNAL.delete();
                          }),
                        t
                          .filter(function (e) {
                            return "_delete" in e;
                          })
                          .map(function (e) {
                            return e._delete();
                          })
                      )
                    ),
                  ]
                );
              case 1:
                return e.sent(), [2];
            }
          });
        });
      }),
      (I.prototype.isComponentSet = function () {
        return null != this.component;
      }),
      (I.prototype.isInitialized = function (e) {
        return void 0 === e && (e = O), this.instances.has(e);
      }),
      (I.prototype.getOrInitializeService = function (e) {
        var t,
          n = this.instances.get(e);
        return (
          !n &&
            this.component &&
            ((n = this.component.instanceFactory(
              this.container,
              (t = e) === O ? void 0 : t
            )),
            this.instances.set(e, n)),
          n || null
        );
      }),
      (I.prototype.normalizeInstanceIdentifier = function (e) {
        return !this.component || this.component.multipleInstances ? e : O;
      }),
      I);
  function I(e, t) {
    (this.name = e),
      (this.container = t),
      (this.component = null),
      (this.instances = new Map()),
      (this.instancesDeferred = new Map());
  }
  var N =
    ((L.prototype.addComponent = function (e) {
      var t = this.getProvider(e.name);
      if (t.isComponentSet())
        throw new Error(
          "Component " +
            e.name +
            " has already been registered with " +
            this.name
        );
      t.setComponent(e);
    }),
    (L.prototype.addOrOverwriteComponent = function (e) {
      this.getProvider(e.name).isComponentSet() &&
        this.providers.delete(e.name),
        this.addComponent(e);
    }),
    (L.prototype.getProvider = function (e) {
      if (this.providers.has(e)) return this.providers.get(e);
      var t = new _(e, this);
      return this.providers.set(e, t), t;
    }),
    (L.prototype.getProviders = function () {
      return Array.from(this.providers.values());
    }),
    L);
  function L(e) {
    (this.name = e), (this.providers = new Map());
  }
  function S() {
    for (var e = 0, t = 0, n = arguments.length; t < n; t++)
      e += arguments[t].length;
    for (var r = Array(e), o = 0, t = 0; t < n; t++)
      for (var i = arguments[t], a = 0, s = i.length; a < s; a++, o++)
        r[o] = i[a];
    return r;
  }
  var R,
    P = [];
  ((F = R = R || {})[(F.DEBUG = 0)] = "DEBUG"),
    (F[(F.VERBOSE = 1)] = "VERBOSE"),
    (F[(F.INFO = 2)] = "INFO"),
    (F[(F.WARN = 3)] = "WARN"),
    (F[(F.ERROR = 4)] = "ERROR"),
    (F[(F.SILENT = 5)] = "SILENT");
  function A(e, t) {
    for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
    if (!(t < e.logLevel)) {
      var o = new Date().toISOString(),
        i = D[t];
      if (!i)
        throw new Error(
          "Attempted to log a message with an invalid logType (value: " +
            t +
            ")"
        );
      console[i].apply(console, S(["[" + o + "]  " + e.name + ":"], n));
    }
  }
  var C = {
      debug: R.DEBUG,
      verbose: R.VERBOSE,
      info: R.INFO,
      warn: R.WARN,
      error: R.ERROR,
      silent: R.SILENT,
    },
    j = R.INFO,
    D =
      (((x = {})[R.DEBUG] = "log"),
      (x[R.VERBOSE] = "log"),
      (x[R.INFO] = "info"),
      (x[R.WARN] = "warn"),
      (x[R.ERROR] = "error"),
      x),
    F =
      (Object.defineProperty(k.prototype, "logLevel", {
        get: function () {
          return this._logLevel;
        },
        set: function (e) {
          if (!(e in R))
            throw new TypeError(
              'Invalid value "' + e + '" assigned to `logLevel`'
            );
          this._logLevel = e;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (k.prototype.setLogLevel = function (e) {
        this._logLevel = "string" == typeof e ? C[e] : e;
      }),
      Object.defineProperty(k.prototype, "logHandler", {
        get: function () {
          return this._logHandler;
        },
        set: function (e) {
          if ("function" != typeof e)
            throw new TypeError(
              "Value assigned to `logHandler` must be a function"
            );
          this._logHandler = e;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(k.prototype, "userLogHandler", {
        get: function () {
          return this._userLogHandler;
        },
        set: function (e) {
          this._userLogHandler = e;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (k.prototype.debug = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this._userLogHandler &&
          this._userLogHandler.apply(this, S([this, R.DEBUG], e)),
          this._logHandler.apply(this, S([this, R.DEBUG], e));
      }),
      (k.prototype.log = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this._userLogHandler &&
          this._userLogHandler.apply(this, S([this, R.VERBOSE], e)),
          this._logHandler.apply(this, S([this, R.VERBOSE], e));
      }),
      (k.prototype.info = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this._userLogHandler &&
          this._userLogHandler.apply(this, S([this, R.INFO], e)),
          this._logHandler.apply(this, S([this, R.INFO], e));
      }),
      (k.prototype.warn = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this._userLogHandler &&
          this._userLogHandler.apply(this, S([this, R.WARN], e)),
          this._logHandler.apply(this, S([this, R.WARN], e));
      }),
      (k.prototype.error = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this._userLogHandler &&
          this._userLogHandler.apply(this, S([this, R.ERROR], e)),
          this._logHandler.apply(this, S([this, R.ERROR], e));
      }),
      k);
  function k(e) {
    (this.name = e),
      (this._logLevel = j),
      (this._logHandler = A),
      (this._userLogHandler = null),
      P.push(this);
  }
  function T(t) {
    P.forEach(function (e) {
      e.setLogLevel(t);
    });
  }
  function H(a, t) {
    for (var e = 0, n = P; e < n.length; e++)
      !(function (e) {
        var i = null;
        t && t.level && (i = C[t.level]),
          (e.userLogHandler =
            null === a
              ? null
              : function (e, t) {
                  for (var n = [], r = 2; r < arguments.length; r++)
                    n[r - 2] = arguments[r];
                  var o = n
                    .map(function (e) {
                      if (null == e) return null;
                      if ("string" == typeof e) return e;
                      if ("number" == typeof e || "boolean" == typeof e)
                        return e.toString();
                      if (e instanceof Error) return e.message;
                      try {
                        return JSON.stringify(e);
                      } catch (e) {
                        return null;
                      }
                    })
                    .filter(function (e) {
                      return e;
                    })
                    .join(" ");
                  t >= (null != i ? i : e.logLevel) &&
                    a({
                      level: R[t].toLowerCase(),
                      message: o,
                      args: n,
                      type: e.name,
                    });
                });
      })(n[e]);
  }
  var x =
      (((x = {})["no-app"] =
        "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),
      (x["bad-app-name"] = "Illegal App name: '{$appName}"),
      (x["duplicate-app"] = "Firebase App named '{$appName}' already exists"),
      (x["app-deleted"] = "Firebase App named '{$appName}' already deleted"),
      (x["invalid-app-argument"] =
        "firebase.{$appName}() takes either no argument or a Firebase App instance."),
      (x["invalid-log-argument"] =
        "First argument to `onLog` must be null or a function."),
      x),
    z = new f("app", "Firebase", x),
    B = "@firebase/app",
    V = "[DEFAULT]",
    U =
      (((x = {})[B] = "fire-core"),
      (x["@firebase/analytics"] = "fire-analytics"),
      (x["@firebase/auth"] = "fire-auth"),
      (x["@firebase/database"] = "fire-rtdb"),
      (x["@firebase/functions"] = "fire-fn"),
      (x["@firebase/installations"] = "fire-iid"),
      (x["@firebase/messaging"] = "fire-fcm"),
      (x["@firebase/performance"] = "fire-perf"),
      (x["@firebase/remote-config"] = "fire-rc"),
      (x["@firebase/storage"] = "fire-gcs"),
      (x["@firebase/firestore"] = "fire-fst"),
      (x["fire-js"] = "fire-js"),
      (x["firebase-wrapper"] = "fire-js-all"),
      x),
    M = new F("@firebase/app"),
    W =
      (Object.defineProperty(G.prototype, "automaticDataCollectionEnabled", {
        get: function () {
          return this.checkDestroyed_(), this.automaticDataCollectionEnabled_;
        },
        set: function (e) {
          this.checkDestroyed_(), (this.automaticDataCollectionEnabled_ = e);
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(G.prototype, "name", {
        get: function () {
          return this.checkDestroyed_(), this.name_;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(G.prototype, "options", {
        get: function () {
          return this.checkDestroyed_(), this.options_;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (G.prototype.delete = function () {
        var t = this;
        return new Promise(function (e) {
          t.checkDestroyed_(), e();
        })
          .then(function () {
            return (
              t.firebase_.INTERNAL.removeApp(t.name_),
              Promise.all(
                t.container.getProviders().map(function (e) {
                  return e.delete();
                })
              )
            );
          })
          .then(function () {
            t.isDeleted_ = !0;
          });
      }),
      (G.prototype._getService = function (e, t) {
        return (
          void 0 === t && (t = V),
          this.checkDestroyed_(),
          this.container.getProvider(e).getImmediate({ identifier: t })
        );
      }),
      (G.prototype._removeServiceInstance = function (e, t) {
        void 0 === t && (t = V), this.container.getProvider(e).clearInstance(t);
      }),
      (G.prototype._addComponent = function (t) {
        try {
          this.container.addComponent(t);
        } catch (e) {
          M.debug(
            "Component " +
              t.name +
              " failed to register with FirebaseApp " +
              this.name,
            e
          );
        }
      }),
      (G.prototype._addOrOverwriteComponent = function (e) {
        this.container.addOrOverwriteComponent(e);
      }),
      (G.prototype.toJSON = function () {
        return {
          name: this.name,
          automaticDataCollectionEnabled: this.automaticDataCollectionEnabled,
          options: this.options,
        };
      }),
      (G.prototype.checkDestroyed_ = function () {
        if (this.isDeleted_)
          throw z.create("app-deleted", { appName: this.name_ });
      }),
      G);
  function G(e, t, n) {
    var r = this;
    (this.firebase_ = n),
      (this.isDeleted_ = !1),
      (this.name_ = t.name),
      (this.automaticDataCollectionEnabled_ =
        t.automaticDataCollectionEnabled || !1),
      (this.options_ = p(void 0, e)),
      (this.container = new N(t.name)),
      this._addComponent(
        new w(
          "app",
          function () {
            return r;
          },
          "PUBLIC"
        )
      ),
      this.firebase_.INTERNAL.components.forEach(function (e) {
        return r._addComponent(e);
      });
  }
  (W.prototype.name && W.prototype.options) ||
    W.prototype.delete ||
    console.log("dc");
  var $ = "8.2.10";
  function Y(a) {
    var s = {},
      c = new Map(),
      l = {
        __esModule: !0,
        initializeApp: function (e, t) {
          void 0 === t && (t = {});
          ("object" == typeof t && null !== t) || (t = { name: t });
          var n = t;
          void 0 === n.name && (n.name = V);
          t = n.name;
          if ("string" != typeof t || !t)
            throw z.create("bad-app-name", { appName: String(t) });
          if (v(s, t)) throw z.create("duplicate-app", { appName: t });
          n = new a(e, n, l);
          return (s[t] = n);
        },
        app: u,
        registerVersion: function (e, t, n) {
          var r = null !== (o = U[e]) && void 0 !== o ? o : e;
          n && (r += "-" + n);
          var o = r.match(/\s|\//),
            e = t.match(/\s|\//);
          if (o || e) {
            n = [
              'Unable to register library "' +
                r +
                '" with version "' +
                t +
                '":',
            ];
            return (
              o &&
                n.push(
                  'library name "' +
                    r +
                    '" contains illegal characters (whitespace or "/")'
                ),
              o && e && n.push("and"),
              e &&
                n.push(
                  'version name "' +
                    t +
                    '" contains illegal characters (whitespace or "/")'
                ),
              void M.warn(n.join(" "))
            );
          }
          i(
            new w(
              r + "-version",
              function () {
                return { library: r, version: t };
              },
              "VERSION"
            )
          );
        },
        setLogLevel: T,
        onLog: function (e, t) {
          if (null !== e && "function" != typeof e)
            throw z.create("invalid-log-argument");
          H(e, t);
        },
        apps: null,
        SDK_VERSION: $,
        INTERNAL: {
          registerComponent: i,
          removeApp: function (e) {
            delete s[e];
          },
          components: c,
          useAsService: function (e, t) {
            if ("serverAuth" === t) return null;
            return t;
          },
        },
      };
    function u(e) {
      if (!v(s, (e = e || V))) throw z.create("no-app", { appName: e });
      return s[e];
    }
    function i(n) {
      var e,
        r = n.name;
      if (c.has(r))
        return (
          M.debug(
            "There were multiple attempts to register component " + r + "."
          ),
          "PUBLIC" === n.type ? l[r] : null
        );
      c.set(r, n),
        "PUBLIC" === n.type &&
          ((e = function (e) {
            if ("function" != typeof (e = void 0 === e ? u() : e)[r])
              throw z.create("invalid-app-argument", { appName: r });
            return e[r]();
          }),
          void 0 !== n.serviceProps && p(e, n.serviceProps),
          (l[r] = e),
          (a.prototype[r] = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            return this._getService
              .bind(this, r)
              .apply(this, n.multipleInstances ? e : []);
          }));
      for (var t = 0, o = Object.keys(s); t < o.length; t++) {
        var i = o[t];
        s[i]._addComponent(n);
      }
      return "PUBLIC" === n.type ? l[r] : null;
    }
    return (
      (l.default = l),
      Object.defineProperty(l, "apps", {
        get: function () {
          return Object.keys(s).map(function (e) {
            return s[e];
          });
        },
      }),
      (u.App = a),
      l
    );
  }
  var x = (function e() {
      var t = Y(W);
      return (
        (t.INTERNAL = i(i({}, t.INTERNAL), {
          createFirebaseNamespace: e,
          extendNamespace: function (e) {
            p(t, e);
          },
          createSubscribe: m,
          ErrorFactory: f,
          deepExtend: p,
        })),
        t
      );
    })(),
    J =
      ((K.prototype.getPlatformInfoString = function () {
        return this.container
          .getProviders()
          .map(function (e) {
            if (
              (function (e) {
                e = e.getComponent();
                return "VERSION" === (null == e ? void 0 : e.type);
              })(e)
            ) {
              e = e.getImmediate();
              return e.library + "/" + e.version;
            }
            return null;
          })
          .filter(function (e) {
            return e;
          })
          .join(" ");
      }),
      K);
  function K(e) {
    this.container = e;
  }
  "object" == typeof self &&
    self.self === self &&
    void 0 !== self.firebase &&
    (M.warn(
      "\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  "
    ),
    (F = self.firebase.SDK_VERSION) &&
      0 <= F.indexOf("LITE") &&
      M.warn(
        "\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    "
      ));
  var Z = x.initializeApp;
  x.initializeApp = function () {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return (
      (function () {
        try {
          return (
            "[object process]" ===
            Object.prototype.toString.call(global.process)
          );
        } catch (e) {
          return;
        }
      })() &&
        M.warn(
          '\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the "main" field in package.json.\n      \n      If you are using Webpack, you can specify "main" as the first item in\n      "resolve.mainFields":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the @rollup/plugin-node-resolve plugin and specify "main"\n      as the first item in "mainFields", e.g. [\'main\', \'module\'].\n      https://github.com/rollup/@rollup/plugin-node-resolve\n      '
        ),
      Z.apply(void 0, e)
    );
  };
  var q,
    Q,
    X = x;
  (q = X).INTERNAL.registerComponent(
    new w(
      "platform-logger",
      function (e) {
        return new J(e);
      },
      "PRIVATE"
    )
  ),
    q.registerVersion(B, "0.6.15", Q),
    q.registerVersion("fire-js", "");
  return X.registerVersion("firebase", "8.2.10", "app"), X;
});
//# sourceMappingURL=firebase-app.js.map

!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(require("@firebase/app"))
    : "function" == typeof define && define.amd
    ? define(["@firebase/app"], e)
    : e(
        (t = "undefined" != typeof globalThis ? globalThis : t || self).firebase
      );
})(this, function (xg) {
  "use strict";
  try {
    (function () {
      function t(t) {
        return t && "object" == typeof t && "default" in t ? t : { default: t };
      }
      var l,
        e = t(xg);
      function s() {
        for (var t = 0, e = 0, n = arguments.length; e < n; e++)
          t += arguments[e].length;
        for (var r = Array(t), i = 0, e = 0; e < n; e++)
          for (var o = arguments[e], s = 0, u = o.length; s < u; s++, i++)
            r[i] = o[s];
        return r;
      }
      ((Ee = l = l || {})[(Ee.DEBUG = 0)] = "DEBUG"),
        (Ee[(Ee.VERBOSE = 1)] = "VERBOSE"),
        (Ee[(Ee.INFO = 2)] = "INFO"),
        (Ee[(Ee.WARN = 3)] = "WARN"),
        (Ee[(Ee.ERROR = 4)] = "ERROR"),
        (Ee[(Ee.SILENT = 5)] = "SILENT");
      function n(t, e) {
        for (var n = [], r = 2; r < arguments.length; r++)
          n[r - 2] = arguments[r];
        if (!(e < t.logLevel)) {
          var i = new Date().toISOString(),
            o = u[e];
          if (!o)
            throw new Error(
              "Attempted to log a message with an invalid logType (value: " +
                e +
                ")"
            );
          console[o].apply(console, s(["[" + i + "]  " + t.name + ":"], n));
        }
      }
      var r = {
          debug: l.DEBUG,
          verbose: l.VERBOSE,
          info: l.INFO,
          warn: l.WARN,
          error: l.ERROR,
          silent: l.SILENT,
        },
        i = l.INFO,
        u =
          (((Ie = {})[l.DEBUG] = "log"),
          (Ie[l.VERBOSE] = "log"),
          (Ie[l.INFO] = "info"),
          (Ie[l.WARN] = "warn"),
          (Ie[l.ERROR] = "error"),
          Ie),
        o =
          (Object.defineProperty(a.prototype, "logLevel", {
            get: function () {
              return this._logLevel;
            },
            set: function (t) {
              if (!(t in l))
                throw new TypeError(
                  'Invalid value "' + t + '" assigned to `logLevel`'
                );
              this._logLevel = t;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (a.prototype.setLogLevel = function (t) {
            this._logLevel = "string" == typeof t ? r[t] : t;
          }),
          Object.defineProperty(a.prototype, "logHandler", {
            get: function () {
              return this._logHandler;
            },
            set: function (t) {
              if ("function" != typeof t)
                throw new TypeError(
                  "Value assigned to `logHandler` must be a function"
                );
              this._logHandler = t;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(a.prototype, "userLogHandler", {
            get: function () {
              return this._userLogHandler;
            },
            set: function (t) {
              this._userLogHandler = t;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (a.prototype.debug = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            this._userLogHandler &&
              this._userLogHandler.apply(this, s([this, l.DEBUG], t)),
              this._logHandler.apply(this, s([this, l.DEBUG], t));
          }),
          (a.prototype.log = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            this._userLogHandler &&
              this._userLogHandler.apply(this, s([this, l.VERBOSE], t)),
              this._logHandler.apply(this, s([this, l.VERBOSE], t));
          }),
          (a.prototype.info = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            this._userLogHandler &&
              this._userLogHandler.apply(this, s([this, l.INFO], t)),
              this._logHandler.apply(this, s([this, l.INFO], t));
          }),
          (a.prototype.warn = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            this._userLogHandler &&
              this._userLogHandler.apply(this, s([this, l.WARN], t)),
              this._logHandler.apply(this, s([this, l.WARN], t));
          }),
          (a.prototype.error = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            this._userLogHandler &&
              this._userLogHandler.apply(this, s([this, l.ERROR], t)),
              this._logHandler.apply(this, s([this, l.ERROR], t));
          }),
          a);
      function a(t) {
        (this.name = t),
          (this._logLevel = i),
          (this._logHandler = n),
          (this._userLogHandler = null);
      }
      var c = function (t, e) {
        return (c =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          })(t, e);
      };
      function h(t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Class extends value " + String(e) + " is not a constructor or null"
          );
        function n() {
          this.constructor = t;
        }
        c(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((n.prototype = e.prototype), new n()));
      }
      function y(t, s, u, a) {
        return new (u = u || Promise)(function (n, e) {
          function r(t) {
            try {
              o(a.next(t));
            } catch (t) {
              e(t);
            }
          }
          function i(t) {
            try {
              o(a.throw(t));
            } catch (t) {
              e(t);
            }
          }
          function o(t) {
            var e;
            t.done
              ? n(t.value)
              : ((e = t.value) instanceof u
                  ? e
                  : new u(function (t) {
                      t(e);
                    })
                ).then(r, i);
          }
          o((a = a.apply(t, s || [])).next());
        });
      }
      function v(n, r) {
        var i,
          o,
          s,
          u = {
            label: 0,
            sent: function () {
              if (1 & s[0]) throw s[1];
              return s[1];
            },
            trys: [],
            ops: [],
          },
          t = { next: e(0), throw: e(1), return: e(2) };
        return (
          "function" == typeof Symbol &&
            (t[Symbol.iterator] = function () {
              return this;
            }),
          t
        );
        function e(e) {
          return function (t) {
            return (function (e) {
              if (i) throw new TypeError("Generator is already executing.");
              for (; u; )
                try {
                  if (
                    ((i = 1),
                    o &&
                      (s =
                        2 & e[0]
                          ? o.return
                          : e[0]
                          ? o.throw || ((s = o.return) && s.call(o), 0)
                          : o.next) &&
                      !(s = s.call(o, e[1])).done)
                  )
                    return s;
                  switch (((o = 0), (e = s ? [2 & e[0], s.value] : e)[0])) {
                    case 0:
                    case 1:
                      s = e;
                      break;
                    case 4:
                      return u.label++, { value: e[1], done: !1 };
                    case 5:
                      u.label++, (o = e[1]), (e = [0]);
                      continue;
                    case 7:
                      (e = u.ops.pop()), u.trys.pop();
                      continue;
                    default:
                      if (
                        !(s = 0 < (s = u.trys).length && s[s.length - 1]) &&
                        (6 === e[0] || 2 === e[0])
                      ) {
                        u = 0;
                        continue;
                      }
                      if (3 === e[0] && (!s || (e[1] > s[0] && e[1] < s[3]))) {
                        u.label = e[1];
                        break;
                      }
                      if (6 === e[0] && u.label < s[1]) {
                        (u.label = s[1]), (s = e);
                        break;
                      }
                      if (s && u.label < s[2]) {
                        (u.label = s[2]), u.ops.push(e);
                        break;
                      }
                      s[2] && u.ops.pop(), u.trys.pop();
                      continue;
                  }
                  e = r.call(n, u);
                } catch (t) {
                  (e = [6, t]), (o = 0);
                } finally {
                  i = s = 0;
                }
              if (5 & e[0]) throw e[1];
              return { value: e[0] ? e[1] : void 0, done: !0 };
            })([e, t]);
          };
        }
      }
      function f() {
        for (var t = 0, e = 0, n = arguments.length; e < n; e++)
          t += arguments[e].length;
        for (var r = Array(t), i = 0, e = 0; e < n; e++)
          for (var o = arguments[e], s = 0, u = o.length; s < u; s++, i++)
            r[i] = o[s];
        return r;
      }
      function p() {
        return "undefined" != typeof navigator &&
          "string" == typeof navigator.userAgent
          ? navigator.userAgent
          : "";
      }
      var d,
        g = "FirebaseError",
        m = (h(b, (d = Error)), b);
      function b(t, e, n) {
        e = d.call(this, e) || this;
        return (
          (e.code = t),
          (e.customData = n),
          (e.name = g),
          Object.setPrototypeOf(e, b.prototype),
          Error.captureStackTrace &&
            Error.captureStackTrace(e, w.prototype.create),
          e
        );
      }
      var w =
        ((_.prototype.create = function (t) {
          for (var e = [], n = 1; n < arguments.length; n++)
            e[n - 1] = arguments[n];
          var r,
            i = e[0] || {},
            o = this.service + "/" + t,
            t = this.errors[t],
            t = t
              ? ((r = i),
                t.replace(E, function (t, e) {
                  var n = r[e];
                  return null != n ? String(n) : "<" + e + "?>";
                }))
              : "Error",
            t = this.serviceName + ": " + t + " (" + o + ").";
          return new m(o, t, i);
        }),
        _);
      function _(t, e, n) {
        (this.service = t), (this.serviceName = e), (this.errors = n);
      }
      var E = /\{\$([^}]+)}/g,
        I = function (t, e) {
          return (I =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            })(t, e);
        };
      function T(t) {
        var e = "function" == typeof Symbol && Symbol.iterator,
          n = e && t[e],
          r = 0;
        if (n) return n.call(t);
        if (t && "number" == typeof t.length)
          return {
            next: function () {
              return {
                value: (t = t && r >= t.length ? void 0 : t) && t[r++],
                done: !t,
              };
            },
          };
        throw new TypeError(
          e ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      }
      var N,
        A =
          "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof window
            ? window
            : "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : {},
        S = {},
        x = A || self;
      function D() {}
      function O(t) {
        var e = typeof t;
        return (
          "array" ==
            (e =
              "object" != e
                ? e
                : t
                ? Array.isArray(t)
                  ? "array"
                  : e
                : "null") ||
          ("object" == e && "number" == typeof t.length)
        );
      }
      function k(t) {
        var e = typeof t;
        return ("object" == e && null != t) || "function" == e;
      }
      var P = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
        C = 0;
      function L(t, e, n) {
        return t.call.apply(t.bind, arguments);
      }
      function R(e, n, t) {
        if (!e) throw Error();
        if (2 < arguments.length) {
          var r = Array.prototype.slice.call(arguments, 2);
          return function () {
            var t = Array.prototype.slice.call(arguments);
            return Array.prototype.unshift.apply(t, r), e.apply(n, t);
          };
        }
        return function () {
          return e.apply(n, arguments);
        };
      }
      function V(t, e, n) {
        return (V =
          Function.prototype.bind &&
          -1 != Function.prototype.bind.toString().indexOf("native code")
            ? L
            : R).apply(null, arguments);
      }
      function M(e) {
        var n = Array.prototype.slice.call(arguments, 1);
        return function () {
          var t = n.slice();
          return t.push.apply(t, arguments), e.apply(this, t);
        };
      }
      function U() {
        return Date.now();
      }
      function j(t, o) {
        function e() {}
        (e.prototype = o.prototype),
          (t.X = o.prototype),
          (t.prototype = new e()),
          ((t.prototype.constructor = t).Kb = function (t, e, n) {
            for (
              var r = Array(arguments.length - 2), i = 2;
              i < arguments.length;
              i++
            )
              r[i - 2] = arguments[i];
            return o.prototype[e].apply(t, r);
          });
      }
      function F() {
        (this.j = this.j), (this.i = this.i);
      }
      (F.prototype.j = !1),
        (F.prototype.ja = function () {
          var t;
          !this.j &&
            ((this.j = !0), this.G(), 0) &&
            ((t = this),
            (Object.prototype.hasOwnProperty.call(t, P) && t[P]) ||
              (t[P] = ++C));
        }),
        (F.prototype.G = function () {
          if (this.i) for (; this.i.length; ) this.i.shift()();
        });
      var q = Array.prototype.indexOf
          ? function (t, e) {
              return Array.prototype.indexOf.call(t, e, void 0);
            }
          : function (t, e) {
              if ("string" == typeof t)
                return "string" != typeof e || 1 != e.length
                  ? -1
                  : t.indexOf(e, 0);
              for (var n = 0; n < t.length; n++)
                if (n in t && t[n] === e) return n;
              return -1;
            },
        B = Array.prototype.forEach
          ? function (t, e, n) {
              Array.prototype.forEach.call(t, e, n);
            }
          : function (t, e, n) {
              for (
                var r = t.length,
                  i = "string" == typeof t ? t.split("") : t,
                  o = 0;
                o < r;
                o++
              )
                o in i && e.call(n, i[o], o, t);
            };
      function G() {
        return Array.prototype.concat.apply([], arguments);
      }
      function z(t) {
        var e = t.length;
        if (0 < e) {
          for (var n = Array(e), r = 0; r < e; r++) n[r] = t[r];
          return n;
        }
        return [];
      }
      function H(t) {
        return /^[\s\xa0]*$/.test(t);
      }
      var Q,
        Y = String.prototype.trim
          ? function (t) {
              return t.trim();
            }
          : function (t) {
              return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1];
            };
      function K(t, e) {
        return -1 != t.indexOf(e);
      }
      function X(t, e) {
        return t < e ? -1 : e < t ? 1 : 0;
      }
      t: {
        var W = x.navigator;
        if (W) {
          W = W.userAgent;
          if (W) {
            Q = W;
            break t;
          }
        }
        Q = "";
      }
      function J(t, e, n) {
        for (var r in t) e.call(n, t[r], r, t);
      }
      function Z(t) {
        var e,
          n = {};
        for (e in t) n[e] = t[e];
        return n;
      }
      var $ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
        " "
      );
      function tt(t) {
        for (var e, n, r = 1; r < arguments.length; r++) {
          for (e in (n = arguments[r])) t[e] = n[e];
          for (var i = 0; i < $.length; i++)
            (e = $[i]),
              Object.prototype.hasOwnProperty.call(n, e) && (t[e] = n[e]);
        }
      }
      function et(t) {
        return et[" "](t), t;
      }
      et[" "] = D;
      var nt,
        rt = K(Q, "Opera"),
        it = K(Q, "Trident") || K(Q, "MSIE"),
        ot = K(Q, "Edge"),
        st = ot || it,
        ut =
          K(Q, "Gecko") &&
          !(K(Q.toLowerCase(), "webkit") && !K(Q, "Edge")) &&
          !(K(Q, "Trident") || K(Q, "MSIE")) &&
          !K(Q, "Edge"),
        at = K(Q.toLowerCase(), "webkit") && !K(Q, "Edge");
      function ct() {
        var t = x.document;
        return t ? t.documentMode : void 0;
      }
      t: {
        var ht = "",
          ft =
            ((ft = Q),
            ut
              ? /rv:([^\);]+)(\)|;)/.exec(ft)
              : ot
              ? /Edge\/([\d\.]+)/.exec(ft)
              : it
              ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(ft)
              : at
              ? /WebKit\/(\S+)/.exec(ft)
              : rt
              ? /(?:Version)[ \/]?(\S+)/.exec(ft)
              : void 0);
        if ((ft && (ht = ft ? ft[1] : ""), it)) {
          ft = ct();
          if (null != ft && ft > parseFloat(ht)) {
            nt = String(ft);
            break t;
          }
        }
        nt = ht;
      }
      var lt = {};
      function pt(u) {
        return (
          (t = u),
          (e = function () {
            for (
              var t = 0,
                e = Y(String(nt)).split("."),
                n = Y(String(u)).split("."),
                r = Math.max(e.length, n.length),
                i = 0;
              0 == t && i < r;
              i++
            )
              for (
                var o = e[i] || "", s = n[i] || "";
                (o = /(\d*)(\D*)(.*)/.exec(o) || ["", "", "", ""]),
                  (s = /(\d*)(\D*)(.*)/.exec(s) || ["", "", "", ""]),
                  (0 != o[0].length || 0 != s[0].length) &&
                    ((t =
                      X(
                        0 == o[1].length ? 0 : parseInt(o[1], 10),
                        0 == s[1].length ? 0 : parseInt(s[1], 10)
                      ) ||
                      X(0 == o[2].length, 0 == s[2].length) ||
                      X(o[2], s[2])),
                    (o = o[3]),
                    (s = s[3]),
                    0 == t);

              );
            return 0 <= t;
          }),
          (n = lt),
          Object.prototype.hasOwnProperty.call(n, t) ? n[t] : (n[t] = e(t))
        );
        var t, e, n;
      }
      var dt = (x.document && it && (ct() || parseInt(nt, 10))) || void 0,
        yt = !it || 9 <= Number(dt),
        vt = it && !pt("9"),
        gt = (function () {
          if (!x.addEventListener || !Object.defineProperty) return !1;
          var t = !1,
            e = Object.defineProperty({}, "passive", {
              get: function () {
                t = !0;
              },
            });
          try {
            x.addEventListener("test", D, e),
              x.removeEventListener("test", D, e);
          } catch (t) {}
          return t;
        })();
      function mt(t, e) {
        (this.type = t),
          (this.a = this.target = e),
          (this.defaultPrevented = !1);
      }
      function bt(t, e) {
        if (
          (mt.call(this, t ? t.type : ""),
          (this.relatedTarget = this.a = this.target = null),
          (this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0),
          (this.key = ""),
          (this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1),
          (this.pointerId = 0),
          (this.pointerType = ""),
          (this.c = null),
          t)
        ) {
          var n = (this.type = t.type),
            r =
              t.changedTouches && t.changedTouches.length
                ? t.changedTouches[0]
                : null;
          if (
            ((this.target = t.target || t.srcElement),
            (this.a = e),
            (e = t.relatedTarget))
          ) {
            if (ut) {
              t: {
                try {
                  et(e.nodeName);
                  var i = !0;
                  break t;
                } catch (t) {}
                i = !1;
              }
              i || (e = null);
            }
          } else
            "mouseover" == n
              ? (e = t.fromElement)
              : "mouseout" == n && (e = t.toElement);
          (this.relatedTarget = e),
            r
              ? ((this.clientX = void 0 !== r.clientX ? r.clientX : r.pageX),
                (this.clientY = void 0 !== r.clientY ? r.clientY : r.pageY),
                (this.screenX = r.screenX || 0),
                (this.screenY = r.screenY || 0))
              : ((this.clientX = void 0 !== t.clientX ? t.clientX : t.pageX),
                (this.clientY = void 0 !== t.clientY ? t.clientY : t.pageY),
                (this.screenX = t.screenX || 0),
                (this.screenY = t.screenY || 0)),
            (this.button = t.button),
            (this.key = t.key || ""),
            (this.ctrlKey = t.ctrlKey),
            (this.altKey = t.altKey),
            (this.shiftKey = t.shiftKey),
            (this.metaKey = t.metaKey),
            (this.pointerId = t.pointerId || 0),
            (this.pointerType =
              "string" == typeof t.pointerType
                ? t.pointerType
                : wt[t.pointerType] || ""),
            (this.c = t).defaultPrevented && this.b();
        }
      }
      (mt.prototype.b = function () {
        this.defaultPrevented = !0;
      }),
        j(bt, mt);
      var wt = { 2: "touch", 3: "pen", 4: "mouse" };
      bt.prototype.b = function () {
        bt.X.b.call(this);
        var t = this.c;
        if (t.preventDefault) t.preventDefault();
        else if (((t.returnValue = !1), vt))
          try {
            (t.ctrlKey || (112 <= t.keyCode && t.keyCode <= 123)) &&
              (t.keyCode = -1);
          } catch (t) {}
      };
      var _t = "closure_listenable_" + ((1e6 * Math.random()) | 0),
        Et = 0;
      function It(t, e, n, r, i) {
        (this.listener = t),
          (this.proxy = null),
          (this.src = e),
          (this.type = n),
          (this.capture = !!r),
          (this.ca = i),
          (this.key = ++Et),
          (this.Y = this.Z = !1);
      }
      function Tt(t) {
        (t.Y = !0),
          (t.listener = null),
          (t.proxy = null),
          (t.src = null),
          (t.ca = null);
      }
      function Nt(t) {
        (this.src = t), (this.a = {}), (this.b = 0);
      }
      function At(t, e) {
        var n,
          r,
          i,
          o = e.type;
        o in t.a &&
          ((n = t.a[o]),
          (i = 0 <= (r = q(n, e))) && Array.prototype.splice.call(n, r, 1),
          i && (Tt(e), 0 == t.a[o].length && (delete t.a[o], t.b--)));
      }
      function St(t, e, n, r) {
        for (var i = 0; i < t.length; ++i) {
          var o = t[i];
          if (!o.Y && o.listener == e && o.capture == !!n && o.ca == r)
            return i;
        }
        return -1;
      }
      Nt.prototype.add = function (t, e, n, r, i) {
        var o = t.toString();
        (t = this.a[o]) || ((t = this.a[o] = []), this.b++);
        var s = St(t, e, r, i);
        return (
          -1 < s
            ? ((e = t[s]), n || (e.Z = !1))
            : (((e = new It(e, this.src, o, !!r, i)).Z = n), t.push(e)),
          e
        );
      };
      var xt = "closure_lm_" + ((1e6 * Math.random()) | 0),
        Dt = {};
      function Ot(t, e, n, r, i) {
        if (r && r.once)
          return (function t(e, n, r, i, o) {
            if (Array.isArray(n)) {
              for (var s = 0; s < n.length; s++) t(e, n[s], r, i, o);
              return null;
            }
            r = Ut(r);
            return e && e[_t]
              ? e.wa(n, r, k(i) ? !!i.capture : !!i, o)
              : kt(e, n, r, !0, i, o);
          })(t, e, n, r, i);
        if (Array.isArray(e)) {
          for (var o = 0; o < e.length; o++) Ot(t, e[o], n, r, i);
          return null;
        }
        return (
          (n = Ut(n)),
          t && t[_t]
            ? t.va(e, n, k(r) ? !!r.capture : !!r, i)
            : kt(t, e, n, !1, r, i)
        );
      }
      function kt(t, e, n, r, i, o) {
        if (!e) throw Error("Invalid event type");
        var s = k(i) ? !!i.capture : !!i;
        if (s && !yt) return null;
        var u,
          a,
          c = Vt(t);
        if ((c || (t[xt] = c = new Nt(t)), (n = c.add(e, n, r, s, o)).proxy))
          return n;
        if (
          ((u = Rt),
          (r = a = yt
            ? function (t) {
                return u.call(a.src, a.listener, t);
              }
            : function (t) {
                if (!(t = u.call(a.src, a.listener, t))) return t;
              }),
          ((n.proxy = r).src = t),
          (r.listener = n),
          t.addEventListener)
        )
          void 0 === (i = !gt ? s : i) && (i = !1),
            t.addEventListener(e.toString(), r, i);
        else if (t.attachEvent) t.attachEvent(Ct(e.toString()), r);
        else {
          if (!t.addListener || !t.removeListener)
            throw Error("addEventListener and attachEvent are unavailable.");
          t.addListener(r);
        }
        return n;
      }
      function Pt(t) {
        var e, n, r;
        "number" != typeof t &&
          t &&
          !t.Y &&
          ((e = t.src) && e[_t]
            ? At(e.c, t)
            : ((n = t.type),
              (r = t.proxy),
              e.removeEventListener
                ? e.removeEventListener(n, r, t.capture)
                : e.detachEvent
                ? e.detachEvent(Ct(n), r)
                : e.addListener && e.removeListener && e.removeListener(r),
              (n = Vt(e))
                ? (At(n, t), 0 == n.b && ((n.src = null), (e[xt] = null)))
                : Tt(t)));
      }
      function Ct(t) {
        return t in Dt ? Dt[t] : (Dt[t] = "on" + t);
      }
      function Lt(t, e) {
        var n = t.listener,
          r = t.ca || t.src;
        return t.Z && Pt(t), n.call(r, e);
      }
      function Rt(t, e) {
        if (t.Y) return !0;
        if (yt) return Lt(t, new bt(e, this));
        if (!e)
          t: {
            e = ["window", "event"];
            for (var n = x, r = 0; r < e.length; r++)
              if (null == (n = n[e[r]])) {
                e = null;
                break t;
              }
            e = n;
          }
        return Lt(t, (e = new bt(e, this)));
      }
      function Vt(t) {
        return (t = t[xt]) instanceof Nt ? t : null;
      }
      var Mt = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0);
      function Ut(e) {
        return "function" == typeof e
          ? e
          : (e[Mt] ||
              (e[Mt] = function (t) {
                return e.handleEvent(t);
              }),
            e[Mt]);
      }
      function jt() {
        F.call(this), (this.c = new Nt(this)), ((this.J = this).C = null);
      }
      function Ft(t, e) {
        var n,
          r = t.C;
        if (r) for (n = []; r; r = r.C) n.push(r);
        if (
          ((t = t.J),
          (r = e.type || e),
          "string" == typeof e
            ? (e = new mt(e, t))
            : e instanceof mt
            ? (e.target = e.target || t)
            : ((s = e), tt((e = new mt(r, t)), s)),
          (s = !0),
          n)
        )
          for (var i = n.length - 1; 0 <= i; i--)
            var o = (e.a = n[i]), s = qt(o, r, !0, e) && s;
        if (
          ((s = qt((o = e.a = t), r, !0, e) && s),
          (s = qt(o, r, !1, e) && s),
          n)
        )
          for (i = 0; i < n.length; i++)
            s = qt((o = e.a = n[i]), r, !1, e) && s;
      }
      function qt(t, e, n, r) {
        if (!(e = t.c.a[String(e)])) return !0;
        e = e.concat();
        for (var i = !0, o = 0; o < e.length; ++o) {
          var s,
            u,
            a = e[o];
          a &&
            !a.Y &&
            a.capture == n &&
            ((s = a.listener),
            (u = a.ca || a.src),
            a.Z && At(t.c, a),
            (i = !1 !== s.call(u, r) && i));
        }
        return i && !r.defaultPrevented;
      }
      j(jt, F),
        (jt.prototype[_t] = !0),
        ((N = jt.prototype).addEventListener = function (t, e, n, r) {
          Ot(this, t, e, n, r);
        }),
        (N.removeEventListener = function (t, e, n, r) {
          !(function t(e, n, r, i, o) {
            if (Array.isArray(n))
              for (var s = 0; s < n.length; s++) t(e, n[s], r, i, o);
            else
              (i = k(i) ? !!i.capture : !!i),
                (r = Ut(r)),
                e && e[_t]
                  ? ((e = e.c),
                    (n = String(n).toString()) in e.a &&
                      -1 < (r = St((s = e.a[n]), r, i, o)) &&
                      (Tt(s[r]),
                      Array.prototype.splice.call(s, r, 1),
                      0 == s.length && (delete e.a[n], e.b--)))
                  : (e = e && Vt(e)) &&
                    ((n = e.a[n.toString()]),
                    (r =
                      (e = -1) < (e = n ? St(n, r, i, o) : e) ? n[e] : null) &&
                      Pt(r));
          })(this, t, e, n, r);
        }),
        (N.G = function () {
          if ((jt.X.G.call(this), this.c)) {
            var t,
              e = this.c;
            for (t in e.a) {
              for (var n = e.a[t], r = 0; r < n.length; r++) Tt(n[r]);
              delete e.a[t], e.b--;
            }
          }
          this.C = null;
        }),
        (N.va = function (t, e, n, r) {
          return this.c.add(String(t), e, !1, n, r);
        }),
        (N.wa = function (t, e, n, r) {
          return this.c.add(String(t), e, !0, n, r);
        });
      var Bt = x.JSON.stringify;
      function Gt() {
        this.b = this.a = null;
      }
      var zt,
        Ht =
          ((Qt.prototype.get = function () {
            var t;
            return (
              0 < this.b
                ? (this.b--, (t = this.a), (this.a = t.next), (t.next = null))
                : (t = this.c()),
              t
            );
          }),
          new Qt(
            function () {
              return new Yt();
            },
            function (t) {
              t.reset();
            }
          ));
      function Qt(t, e) {
        (this.c = t), (this.f = e), (this.b = 0), (this.a = null);
      }
      function Yt() {
        this.next = this.b = this.a = null;
      }
      function Kt(t, e) {
        var n;
        zt ||
          ((n = x.Promise.resolve(void 0)),
          (zt = function () {
            n.then(Jt);
          })),
          Xt || (zt(), (Xt = !0)),
          Wt.add(t, e);
      }
      (Gt.prototype.add = function (t, e) {
        var n = Ht.get();
        n.set(t, e), this.b ? (this.b.next = n) : (this.a = n), (this.b = n);
      }),
        (Yt.prototype.set = function (t, e) {
          (this.a = t), (this.b = e), (this.next = null);
        });
      var Xt = !(Yt.prototype.reset = function () {
          this.next = this.b = this.a = null;
        }),
        Wt = new Gt();
      function Jt() {
        for (
          var t, e;
          (n = e = void 0),
            (n = null),
            (e = Wt).a &&
              ((n = e.a),
              (e.a = e.a.next),
              e.a || (e.b = null),
              (n.next = null)),
            (t = n);

        ) {
          try {
            t.a.call(t.b);
          } catch (t) {
            !(function (t) {
              x.setTimeout(function () {
                throw t;
              }, 0);
            })(t);
          }
          var n = Ht;
          n.f(t), n.b < 100 && (n.b++, (t.next = n.a), (n.a = t));
        }
        Xt = !1;
      }
      function Zt(t, e) {
        jt.call(this),
          (this.b = t || 1),
          (this.a = e || x),
          (this.f = V(this.Za, this)),
          (this.g = U());
      }
      function $t(t) {
        (t.aa = !1), t.M && (t.a.clearTimeout(t.M), (t.M = null));
      }
      function te(t, e, n) {
        if ("function" == typeof t) n && (t = V(t, n));
        else {
          if (!t || "function" != typeof t.handleEvent)
            throw Error("Invalid listener argument");
          t = V(t.handleEvent, t);
        }
        return 2147483647 < Number(e) ? -1 : x.setTimeout(t, e || 0);
      }
      j(Zt, jt),
        ((N = Zt.prototype).aa = !1),
        (N.M = null),
        (N.Za = function () {
          var t;
          this.aa &&
            (0 < (t = U() - this.g) && t < 0.8 * this.b
              ? (this.M = this.a.setTimeout(this.f, this.b - t))
              : (this.M && (this.a.clearTimeout(this.M), (this.M = null)),
                Ft(this, "tick"),
                this.aa && ($t(this), this.start())));
        }),
        (N.start = function () {
          (this.aa = !0),
            this.M ||
              ((this.M = this.a.setTimeout(this.f, this.b)), (this.g = U()));
        }),
        (N.G = function () {
          Zt.X.G.call(this), $t(this), delete this.a;
        });
      var ee,
        ne,
        re,
        ie =
          (I((ne = se), (re = ee = F)),
          (ne.prototype =
            null === re
              ? Object.create(re)
              : ((oe.prototype = re.prototype), new oe())),
          (se.prototype.f = function (t) {
            (this.b = arguments),
              this.a
                ? (this.c = !0)
                : (function t(e) {
                    e.a = te(function () {
                      (e.a = null), e.c && ((e.c = !1), t(e));
                    }, e.h);
                    var n = e.b;
                    (e.b = null), e.g.apply(null, n);
                  })(this);
          }),
          (se.prototype.G = function () {
            ee.prototype.G.call(this),
              this.a &&
                (x.clearTimeout(this.a),
                (this.a = null),
                (this.c = !1),
                (this.b = null));
          }),
          se);
      function oe() {
        this.constructor = ne;
      }
      function se(t, e) {
        var n = ee.call(this) || this;
        return (n.g = t), (n.h = e), (n.b = null), (n.c = !1), (n.a = null), n;
      }
      function ue(t) {
        F.call(this), (this.b = t), (this.a = {});
      }
      j(ue, F);
      var ae = [];
      function ce(t, e, n, r) {
        Array.isArray(n) || (n && (ae[0] = n.toString()), (n = ae));
        for (var i = 0; i < n.length; i++) {
          var o = Ot(e, n[i], r || t.handleEvent, !1, t.b || t);
          if (!o) break;
          t.a[o.key] = o;
        }
      }
      function he(t) {
        J(
          t.a,
          function (t, e) {
            this.a.hasOwnProperty(e) && Pt(t);
          },
          t
        ),
          (t.a = {});
      }
      function fe() {
        this.a = !0;
      }
      function le(t, e, n, r) {
        t.info(function () {
          return (
            "XMLHTTP TEXT (" +
            e +
            "): " +
            (function (t, e) {
              if (!t.a) return e;
              if (!e) return null;
              try {
                var n = JSON.parse(e);
                if (n)
                  for (t = 0; t < n.length; t++)
                    if (Array.isArray(n[t])) {
                      var r = n[t];
                      if (!(r.length < 2)) {
                        var i = r[1];
                        if (Array.isArray(i) && !(i.length < 1)) {
                          r = i[0];
                          if ("noop" != r && "stop" != r && "close" != r)
                            for (var o = 1; o < i.length; o++) i[o] = "";
                        }
                      }
                    }
                return Bt(n);
              } catch (t) {
                return e;
              }
            })(t, n) +
            (r ? " " + r : "")
          );
        });
      }
      (ue.prototype.G = function () {
        ue.X.G.call(this), he(this);
      }),
        (ue.prototype.handleEvent = function () {
          throw Error("EventHandler.handleEvent not implemented");
        }),
        (fe.prototype.info = function () {});
      var pe = {},
        de = null;
      function ye() {
        return (de = de || new jt());
      }
      function ve(t) {
        mt.call(this, pe.Fa, t);
      }
      function ge(t) {
        var e = ye();
        Ft(e, new ve(e));
      }
      function me(t, e) {
        mt.call(this, pe.STAT_EVENT, t), (this.stat = e);
      }
      function be(t) {
        var e = ye();
        Ft(e, new me(e, t));
      }
      function we(t) {
        mt.call(this, pe.Ga, t);
      }
      function _e(t, e) {
        if ("function" != typeof t)
          throw Error("Fn must not be null and must be a function");
        return x.setTimeout(function () {
          t();
        }, e);
      }
      (pe.Fa = "serverreachability"),
        j(ve, mt),
        (pe.STAT_EVENT = "statevent"),
        j(me, mt),
        (pe.Ga = "timingevent"),
        j(we, mt);
      var Ee = {
          NO_ERROR: 0,
          $a: 1,
          nb: 2,
          mb: 3,
          hb: 4,
          lb: 5,
          ob: 6,
          Da: 7,
          TIMEOUT: 8,
          rb: 9,
        },
        Ie = {
          fb: "complete",
          Bb: "success",
          Ea: "error",
          Da: "abort",
          tb: "ready",
          ub: "readystatechange",
          TIMEOUT: "timeout",
          pb: "incrementaldata",
          sb: "progress",
          ib: "downloadprogress",
          Jb: "uploadprogress",
        };
      function Te() {}
      function Ne(t) {
        var e;
        return (e = !(e = t.a) ? (t.a = {}) : e);
      }
      function Ae() {}
      Te.prototype.a = null;
      var Se,
        A = { OPEN: "a", eb: "b", Ea: "c", qb: "d" };
      function xe() {
        mt.call(this, "d");
      }
      function De() {
        mt.call(this, "c");
      }
      function Oe() {}
      function ke(t, e, n, r) {
        (this.g = t),
          (this.c = e),
          (this.f = n),
          (this.S = r || 1),
          (this.J = new ue(this)),
          (this.P = Pe),
          (t = st ? 125 : void 0),
          (this.R = new Zt(t)),
          (this.B = null),
          (this.b = !1),
          (this.j = this.l = this.i = this.H = this.u = this.T = this.o = null),
          (this.s = []),
          (this.a = null),
          (this.D = 0),
          (this.h = this.m = null),
          (this.N = -1),
          (this.A = !1),
          (this.O = 0),
          (this.F = null),
          (this.V = this.C = this.U = this.I = !1);
      }
      j(xe, mt), j(De, mt), j(Oe, Te), (Se = new Oe());
      var Pe = 45e3,
        Ce = {},
        Le = {};
      function Re(t, e, n) {
        (t.H = 1), (t.i = nn(We(e))), (t.j = n), (t.I = !0), Ve(t, null);
      }
      function Ve(t, e) {
        (t.u = U()), Ue(t), (t.l = We(t.i));
        var s,
          u,
          a,
          c,
          h,
          f,
          n = t.l,
          r = t.S;
        Array.isArray(r) || (r = [String(r)]),
          vn(n.b, "t", r),
          (t.D = 0),
          (t.a = cr(t.g, t.g.C ? e : null)),
          0 < t.O && (t.F = new ie(V(t.Ca, t, t.a), t.O)),
          ce(t.J, t.a, "readystatechange", t.Xa),
          (e = t.B ? Z(t.B) : {}),
          t.j
            ? (t.m || (t.m = "POST"),
              (e["Content-Type"] = "application/x-www-form-urlencoded"),
              t.a.ba(t.l, t.m, t.j, e))
            : ((t.m = "GET"), t.a.ba(t.l, t.m, null, e)),
          ge(1),
          (s = t.c),
          (u = t.m),
          (a = t.l),
          (c = t.f),
          (h = t.S),
          (f = t.j),
          s.info(function () {
            if (s.a)
              if (f)
                for (var t = "", e = f.split("&"), n = 0; n < e.length; n++) {
                  var r,
                    i,
                    o = e[n].split("=");
                  1 < o.length &&
                    ((r = o[0]),
                    (o = o[1]),
                    (t =
                      2 <= (i = r.split("_")).length && "type" == i[1]
                        ? t + (r + "=") + o + "&"
                        : t + (r + "=redacted&")));
                }
              else t = null;
            else t = f;
            return (
              "XMLHTTP REQ (" +
              c +
              ") [attempt " +
              h +
              "]: " +
              u +
              "\n" +
              a +
              "\n" +
              t
            );
          });
      }
      function Me(t, e, n) {
        for (var r, i, o, s = !0; !t.A && t.D < n.length; ) {
          var u =
            ((u = n),
            (o = i = void 0),
            (i = (r = t).D),
            -1 == (o = u.indexOf("\n", i))
              ? Le
              : ((i = Number(u.substring(i, o))),
                isNaN(i)
                  ? Ce
                  : (o += 1) + i > u.length
                  ? Le
                  : ((u = u.substr(o, i)), (r.D = o + i), u)));
          if (u == Le) {
            4 == e && ((t.h = 4), be(14), (s = !1)),
              le(t.c, t.f, null, "[Incomplete Response]");
            break;
          }
          if (u == Ce) {
            (t.h = 4), be(15), le(t.c, t.f, n, "[Invalid Chunk]"), (s = !1);
            break;
          }
          le(t.c, t.f, u, null), Ge(t, u);
        }
        4 == e && 0 == n.length && ((t.h = 1), be(16), (s = !1)),
          (t.b = t.b && s),
          s
            ? 0 < n.length &&
              !t.V &&
              ((t.V = !0),
              (e = t.g).a == t &&
                e.U &&
                !e.F &&
                (e.c.info(
                  "Great, no buffering proxy detected. Bytes received: " +
                    n.length
                ),
                er(e),
                (e.F = !0),
                be(11)))
            : (le(t.c, t.f, n, "[Invalid Chunked Response]"), Be(t), qe(t));
      }
      function Ue(t) {
        (t.T = U() + t.P), je(t, t.P);
      }
      function je(t, e) {
        if (null != t.o) throw Error("WatchDog timer not null");
        t.o = _e(V(t.Va, t), e);
      }
      function Fe(t) {
        t.o && (x.clearTimeout(t.o), (t.o = null));
      }
      function qe(t) {
        0 == t.g.v || t.A || ir(t.g, t);
      }
      function Be(t) {
        Fe(t);
        var e = t.F;
        e && "function" == typeof e.ja && e.ja(),
          (t.F = null),
          $t(t.R),
          he(t.J),
          t.a && ((e = t.a), (t.a = null), e.abort(), e.ja());
      }
      function Ge(t, e) {
        try {
          var n,
            r,
            i,
            o,
            s,
            u = t.g;
          if (0 != u.v && (u.a == t || In(u.b, t)))
            if (((u.I = t.N), !t.C && In(u.b, t) && 3 == u.v)) {
              try {
                var a = u.ka.a.parse(e);
              } catch (t) {
                a = null;
              }
              if (Array.isArray(a) && 3 == a.length) {
                var c = a;
                if (0 == c[0]) {
                  t: if (!u.j) {
                    if (u.a) {
                      if (!(u.a.u + 3e3 < t.u)) break t;
                      rr(u), Qn(u);
                    }
                    tr(u), be(18);
                  }
                } else
                  (u.oa = c[1]),
                    0 < u.oa - u.P &&
                      c[2] < 37500 &&
                      u.H &&
                      0 == u.o &&
                      !u.m &&
                      (u.m = _e(V(u.Sa, u), 6e3));
                if (En(u.b) <= 1 && u.ea) {
                  try {
                    u.ea();
                  } catch (t) {}
                  u.ea = void 0;
                }
              } else sr(u, 11);
            } else if (((!t.C && u.a != t) || rr(u), !H(e)))
              for (e = a = u.ka.a.parse(e), a = 0; a < e.length; a++)
                (c = e[a]),
                  (u.P = c[0]),
                  (c = c[1]),
                  2 == u.v
                    ? "c" == c[0]
                      ? ((u.J = c[1]),
                        (u.ga = c[2]),
                        null != (r = c[3]) &&
                          ((u.ha = r), u.c.info("VER=" + u.ha)),
                        null != (o = c[4]) &&
                          ((u.pa = o), u.c.info("SVER=" + u.pa)),
                        null != (r = c[5]) &&
                          "number" == typeof r &&
                          0 < r &&
                          ((n = 1.5 * r),
                          (u.D = n),
                          u.c.info("backChannelRequestTimeoutMs_=" + n)),
                        (n = u),
                        (o = t.a) &&
                          (!(r = o.a
                            ? o.a.getResponseHeader("X-Client-Wire-Protocol")
                            : null) ||
                            (!(i = n.b).a &&
                              (K(r, "spdy") || K(r, "quic") || K(r, "h2")) &&
                              ((i.f = i.g),
                              (i.a = new Set()),
                              i.b && (Tn(i, i.b), (i.b = null)))),
                          !n.A ||
                            ((s = o.a
                              ? o.a.getResponseHeader("X-HTTP-Session-Id")
                              : null) &&
                              ((n.na = s), en(n.B, n.A, s)))),
                        (u.v = 3),
                        u.f && u.f.ta(),
                        u.U &&
                          ((u.N = U() - t.u),
                          u.c.info("Handshake RTT: " + u.N + "ms")),
                        (i = t),
                        ((n = u).la = ar(n, n.C ? n.ga : null, n.fa)),
                        i.C
                          ? (Nn(n.b, i),
                            (o = i),
                            (s = n.D) && o.setTimeout(s),
                            o.o && (Fe(o), Ue(o)),
                            (n.a = i))
                          : $n(n),
                        0 < u.g.length && Xn(u))
                      : ("stop" != c[0] && "close" != c[0]) || sr(u, 7)
                    : 3 == u.v &&
                      ("stop" == c[0] || "close" == c[0]
                        ? "stop" == c[0]
                          ? sr(u, 7)
                          : Hn(u)
                        : "noop" != c[0] && u.f && u.f.sa(c),
                      (u.o = 0));
          ge(4);
        } catch (t) {}
      }
      function ze(t, e) {
        if (t.forEach && "function" == typeof t.forEach) t.forEach(e, void 0);
        else if (O(t) || "string" == typeof t) B(t, e, void 0);
        else {
          if (t.L && "function" == typeof t.L) var n = t.L();
          else if (t.K && "function" == typeof t.K) n = void 0;
          else if (O(t) || "string" == typeof t) {
            n = [];
            for (var r = t.length, i = 0; i < r; i++) n.push(i);
          } else for (i in ((n = []), (r = 0), t)) n[r++] = i;
          i = (r = (function (t) {
            if (t.K && "function" == typeof t.K) return t.K();
            if ("string" == typeof t) return t.split("");
            if (O(t)) {
              for (var e = [], n = t.length, r = 0; r < n; r++) e.push(t[r]);
              return e;
            }
            for (r in ((e = []), (n = 0), t)) e[n++] = t[r];
            return e;
          })(t)).length;
          for (var o = 0; o < i; o++) e.call(void 0, r[o], n && n[o], t);
        }
      }
      function He(t, e) {
        (this.b = {}), (this.a = []), (this.c = 0);
        var n = arguments.length;
        if (1 < n) {
          if (n % 2) throw Error("Uneven number of arguments");
          for (var r = 0; r < n; r += 2)
            this.set(arguments[r], arguments[r + 1]);
        } else if (t)
          if (t instanceof He)
            for (n = t.L(), r = 0; r < n.length; r++)
              this.set(n[r], t.get(n[r]));
          else for (r in t) this.set(r, t[r]);
      }
      function Qe(t) {
        if (t.c != t.a.length) {
          for (var e = 0, n = 0; e < t.a.length; ) {
            var r = t.a[e];
            Ye(t.b, r) && (t.a[n++] = r), e++;
          }
          t.a.length = n;
        }
        if (t.c != t.a.length) {
          for (var i = {}, n = (e = 0); e < t.a.length; )
            Ye(i, (r = t.a[e])) || (i[(t.a[n++] = r)] = 1), e++;
          t.a.length = n;
        }
      }
      function Ye(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }
      ((N = ke.prototype).setTimeout = function (t) {
        this.P = t;
      }),
        (N.Xa = function (t) {
          t = t.target;
          var e = this.F;
          e && 3 == qn(t) ? e.f() : this.Ca(t);
        }),
        (N.Ca = function (t) {
          try {
            if (t == this.a)
              t: {
                var e = qn(this.a),
                  n = this.a.ua(),
                  r = this.a.W();
                if (!(e < 3 || (3 == e && !st && !this.a.$()))) {
                  this.A || 4 != e || 7 == n || ge(8 == n || r <= 0 ? 3 : 2),
                    Fe(this);
                  var i = this.a.W();
                  this.N = i;
                  var o = this.a.$();
                  if (
                    ((this.b = 200 == i),
                    (r = this.c),
                    (a = this.m),
                    (c = this.l),
                    (h = this.f),
                    (f = this.S),
                    (l = e),
                    (p = i),
                    r.info(function () {
                      return (
                        "XMLHTTP RESP (" +
                        h +
                        ") [ attempt " +
                        f +
                        "]: " +
                        a +
                        "\n" +
                        c +
                        "\n" +
                        l +
                        " " +
                        p
                      );
                    }),
                    this.b)
                  ) {
                    if (this.U && !this.C) {
                      e: {
                        if (this.a) {
                          var s = this.a;
                          if (
                            (s = s.a
                              ? s.a.getResponseHeader("X-HTTP-Initial-Response")
                              : null) &&
                            !H(s)
                          ) {
                            var u = s;
                            break e;
                          }
                        }
                        u = null;
                      }
                      if (!u) {
                        (this.b = !1), (this.h = 3), be(12), Be(this), qe(this);
                        break t;
                      }
                      le(
                        this.c,
                        this.f,
                        u,
                        "Initial handshake response via X-HTTP-Initial-Response"
                      ),
                        (this.C = !0),
                        Ge(this, u);
                    }
                    this.I
                      ? (Me(this, e, o),
                        st &&
                          this.b &&
                          3 == e &&
                          (ce(this.J, this.R, "tick", this.Wa), this.R.start()))
                      : (le(this.c, this.f, o, null), Ge(this, o)),
                      4 == e && Be(this),
                      this.b &&
                        !this.A &&
                        (4 == e ? ir(this.g, this) : ((this.b = !1), Ue(this)));
                  } else
                    400 == i && 0 < o.indexOf("Unknown SID")
                      ? ((this.h = 3), be(12))
                      : ((this.h = 0), be(13)),
                      Be(this),
                      qe(this);
                }
              }
          } catch (t) {}
          var a, c, h, f, l, p;
        }),
        (N.Wa = function () {
          var t, e;
          this.a &&
            ((t = qn(this.a)),
            (e = this.a.$()),
            this.D < e.length &&
              (Fe(this), Me(this, t, e), this.b && 4 != t && Ue(this)));
        }),
        (N.cancel = function () {
          (this.A = !0), Be(this);
        }),
        (N.Va = function () {
          this.o = null;
          var t,
            e,
            n = U();
          0 <= n - this.T
            ? ((t = this.c),
              (e = this.l),
              t.info(function () {
                return "TIMEOUT: " + e;
              }),
              2 != this.H && (ge(3), be(17)),
              Be(this),
              (this.h = 2),
              qe(this))
            : je(this, this.T - n);
        }),
        ((N = He.prototype).K = function () {
          Qe(this);
          for (var t = [], e = 0; e < this.a.length; e++)
            t.push(this.b[this.a[e]]);
          return t;
        }),
        (N.L = function () {
          return Qe(this), this.a.concat();
        }),
        (N.get = function (t, e) {
          return Ye(this.b, t) ? this.b[t] : e;
        }),
        (N.set = function (t, e) {
          Ye(this.b, t) || (this.c++, this.a.push(t)), (this.b[t] = e);
        }),
        (N.forEach = function (t, e) {
          for (var n = this.L(), r = 0; r < n.length; r++) {
            var i = n[r],
              o = this.get(i);
            t.call(e, o, i, this);
          }
        });
      var Ke = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
      function Xe(t, e) {
        var n;
        (this.c = this.j = this.f = ""),
          (this.h = null),
          (this.i = this.g = ""),
          (this.a = !1),
          t instanceof Xe
            ? ((this.a = void 0 !== e ? e : t.a),
              Je(this, t.f),
              (this.j = t.j),
              Ze(this, t.c),
              $e(this, t.h),
              (this.g = t.g),
              (e = t.b),
              ((n = new ln()).c = e.c),
              e.a && ((n.a = new He(e.a)), (n.b = e.b)),
              tn(this, n),
              (this.i = t.i))
            : t && (n = String(t).match(Ke))
            ? ((this.a = !!e),
              Je(this, n[1] || "", !0),
              (this.j = rn(n[2] || "")),
              Ze(this, n[3] || "", !0),
              $e(this, n[4]),
              (this.g = rn(n[5] || "", !0)),
              tn(this, n[6] || "", !0),
              (this.i = rn(n[7] || "")))
            : ((this.a = !!e), (this.b = new ln(null, this.a)));
      }
      function We(t) {
        return new Xe(t);
      }
      function Je(t, e, n) {
        (t.f = n ? rn(e, !0) : e), t.f && (t.f = t.f.replace(/:$/, ""));
      }
      function Ze(t, e, n) {
        t.c = n ? rn(e, !0) : e;
      }
      function $e(t, e) {
        if (e) {
          if (((e = Number(e)), isNaN(e) || e < 0))
            throw Error("Bad port number " + e);
          t.h = e;
        } else t.h = null;
      }
      function tn(t, e, n) {
        var r, i;
        e instanceof ln
          ? ((t.b = e),
            (r = t.b),
            (i = t.a) &&
              !r.f &&
              (pn(r),
              (r.c = null),
              r.a.forEach(function (t, e) {
                var n = e.toLowerCase();
                e != n && (dn(this, e), vn(this, n, t));
              }, r)),
            (r.f = i))
          : (n || (e = on(e, hn)), (t.b = new ln(e, t.a)));
      }
      function en(t, e, n) {
        t.b.set(e, n);
      }
      function nn(t) {
        return (
          en(
            t,
            "zx",
            Math.floor(2147483648 * Math.random()).toString(36) +
              Math.abs(Math.floor(2147483648 * Math.random()) ^ U()).toString(
                36
              )
          ),
          t
        );
      }
      function rn(t, e) {
        return t
          ? e
            ? decodeURI(t.replace(/%25/g, "%2525"))
            : decodeURIComponent(t)
          : "";
      }
      function on(t, e, n) {
        return "string" == typeof t
          ? ((t = encodeURI(t).replace(e, sn)),
            (t = n ? t.replace(/%25([0-9a-fA-F]{2})/g, "%$1") : t))
          : null;
      }
      function sn(t) {
        return (
          "%" +
          (((t = t.charCodeAt(0)) >> 4) & 15).toString(16) +
          (15 & t).toString(16)
        );
      }
      Xe.prototype.toString = function () {
        var t = [],
          e = this.f;
        e && t.push(on(e, un, !0), ":");
        var n = this.c;
        return (
          (!n && "file" != e) ||
            (t.push("//"),
            (e = this.j) && t.push(on(e, un, !0), "@"),
            t.push(
              encodeURIComponent(String(n)).replace(
                /%25([0-9a-fA-F]{2})/g,
                "%$1"
              )
            ),
            null != (n = this.h) && t.push(":", String(n))),
          (n = this.g) &&
            (this.c && "/" != n.charAt(0) && t.push("/"),
            t.push(on(n, "/" == n.charAt(0) ? cn : an, !0))),
          (n = this.b.toString()) && t.push("?", n),
          (n = this.i) && t.push("#", on(n, fn)),
          t.join("")
        );
      };
      var un = /[#\/\?@]/g,
        an = /[#\?:]/g,
        cn = /[#\?]/g,
        hn = /[#\?@]/g,
        fn = /#/g;
      function ln(t, e) {
        (this.b = this.a = null), (this.c = t || null), (this.f = !!e);
      }
      function pn(n) {
        n.a ||
          ((n.a = new He()),
          (n.b = 0),
          n.c &&
            (function (t, e) {
              if (t) {
                t = t.split("&");
                for (var n = 0; n < t.length; n++) {
                  var r,
                    i = t[n].indexOf("="),
                    o = null;
                  0 <= i
                    ? ((r = t[n].substring(0, i)), (o = t[n].substring(i + 1)))
                    : (r = t[n]),
                    e(r, o ? decodeURIComponent(o.replace(/\+/g, " ")) : "");
                }
              }
            })(n.c, function (t, e) {
              n.add(decodeURIComponent(t.replace(/\+/g, " ")), e);
            }));
      }
      function dn(t, e) {
        pn(t),
          (e = gn(t, e)),
          Ye(t.a.b, e) &&
            ((t.c = null),
            (t.b -= t.a.get(e).length),
            Ye((t = t.a).b, e) &&
              (delete t.b[e], t.c--, t.a.length > 2 * t.c && Qe(t)));
      }
      function yn(t, e) {
        return pn(t), (e = gn(t, e)), Ye(t.a.b, e);
      }
      function vn(t, e, n) {
        dn(t, e),
          0 < n.length &&
            ((t.c = null), t.a.set(gn(t, e), z(n)), (t.b += n.length));
      }
      function gn(t, e) {
        return (e = String(e)), (e = t.f ? e.toLowerCase() : e);
      }
      ((N = ln.prototype).add = function (t, e) {
        pn(this), (this.c = null), (t = gn(this, t));
        var n = this.a.get(t);
        return n || this.a.set(t, (n = [])), n.push(e), (this.b += 1), this;
      }),
        (N.forEach = function (n, r) {
          pn(this),
            this.a.forEach(function (t, e) {
              B(
                t,
                function (t) {
                  n.call(r, t, e, this);
                },
                this
              );
            }, this);
        }),
        (N.L = function () {
          pn(this);
          for (
            var t = this.a.K(), e = this.a.L(), n = [], r = 0;
            r < e.length;
            r++
          )
            for (var i = t[r], o = 0; o < i.length; o++) n.push(e[r]);
          return n;
        }),
        (N.K = function (t) {
          pn(this);
          var e = [];
          if ("string" == typeof t)
            yn(this, t) && (e = G(e, this.a.get(gn(this, t))));
          else {
            t = this.a.K();
            for (var n = 0; n < t.length; n++) e = G(e, t[n]);
          }
          return e;
        }),
        (N.set = function (t, e) {
          return (
            pn(this),
            (this.c = null),
            yn(this, (t = gn(this, t))) && (this.b -= this.a.get(t).length),
            this.a.set(t, [e]),
            (this.b += 1),
            this
          );
        }),
        (N.get = function (t, e) {
          return t && 0 < (t = this.K(t)).length ? String(t[0]) : e;
        }),
        (N.toString = function () {
          if (this.c) return this.c;
          if (!this.a) return "";
          for (var t = [], e = this.a.L(), n = 0; n < e.length; n++)
            for (
              var r = e[n],
                i = encodeURIComponent(String(r)),
                r = this.K(r),
                o = 0;
              o < r.length;
              o++
            ) {
              var s = i;
              "" !== r[o] && (s += "=" + encodeURIComponent(String(r[o]))),
                t.push(s);
            }
          return (this.c = t.join("&"));
        });
      var mn = function (t, e) {
        (this.b = t), (this.a = e);
      };
      function bn(t) {
        (this.g = t || wn),
          (t = x.PerformanceNavigationTiming
            ? 0 < (t = x.performance.getEntriesByType("navigation")).length &&
              ("hq" == t[0].nextHopProtocol || "h2" == t[0].nextHopProtocol)
            : !!(x.ia && x.ia.ya && x.ia.ya() && x.ia.ya().Lb)),
          (this.f = t ? this.g : 1),
          (this.a = null),
          1 < this.f && (this.a = new Set()),
          (this.b = null),
          (this.c = []);
      }
      var wn = 10;
      function _n(t) {
        return t.b || (t.a && t.a.size >= t.f);
      }
      function En(t) {
        return t.b ? 1 : t.a ? t.a.size : 0;
      }
      function In(t, e) {
        return t.b ? t.b == e : t.a && t.a.has(e);
      }
      function Tn(t, e) {
        t.a ? t.a.add(e) : (t.b = e);
      }
      function Nn(t, e) {
        t.b && t.b == e ? (t.b = null) : t.a && t.a.has(e) && t.a.delete(e);
      }
      function An(t) {
        var e, n;
        if (null != t.b) return t.c.concat(t.b.s);
        if (null == t.a || 0 === t.a.size) return z(t.c);
        var r = t.c;
        try {
          for (var i = T(t.a.values()), o = i.next(); !o.done; o = i.next())
            var s = o.value, r = r.concat(s.s);
        } catch (t) {
          e = { error: t };
        } finally {
          try {
            o && !o.done && (n = i.return) && n.call(i);
          } finally {
            if (e) throw e.error;
          }
        }
        return r;
      }
      function Sn() {}
      function xn() {
        this.a = new Sn();
      }
      function Dn(t, e, n, r, i) {
        try {
          (e.onload = null),
            (e.onerror = null),
            (e.onabort = null),
            (e.ontimeout = null),
            i(r);
        } catch (t) {}
      }
      (bn.prototype.cancel = function () {
        var e, t;
        if (((this.c = An(this)), this.b)) this.b.cancel(), (this.b = null);
        else if (this.a && 0 !== this.a.size) {
          try {
            for (
              var n = T(this.a.values()), r = n.next();
              !r.done;
              r = n.next()
            )
              r.value.cancel();
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              r && !r.done && (t = n.return) && t.call(n);
            } finally {
              if (e) throw e.error;
            }
          }
          this.a.clear();
        }
      }),
        (Sn.prototype.stringify = function (t) {
          return x.JSON.stringify(t, void 0);
        }),
        (Sn.prototype.parse = function (t) {
          return x.JSON.parse(t, void 0);
        });
      var On = x.JSON.parse;
      function kn(t) {
        jt.call(this),
          (this.headers = new He()),
          (this.H = t || null),
          (this.b = !1),
          (this.s = this.a = null),
          (this.B = ""),
          (this.h = 0),
          (this.f = ""),
          (this.g = this.A = this.l = this.u = !1),
          (this.o = 0),
          (this.m = null),
          (this.I = Pn),
          (this.D = this.F = !1);
      }
      j(kn, jt);
      var Pn = "",
        Cn = /^https?$/i,
        Ln = ["POST", "PUT"];
      function Rn(t) {
        return "content-type" == t.toLowerCase();
      }
      function Vn(t, e) {
        (t.b = !1),
          t.a && ((t.g = !0), t.a.abort(), (t.g = !1)),
          (t.f = e),
          (t.h = 5),
          Mn(t),
          jn(t);
      }
      function Mn(t) {
        t.u || ((t.u = !0), Ft(t, "complete"), Ft(t, "error"));
      }
      function Un(t) {
        if (t.b && void 0 !== S && (!t.s[1] || 4 != qn(t) || 2 != t.W()))
          if (t.l && 4 == qn(t)) te(t.za, 0, t);
          else if ((Ft(t, "readystatechange"), 4 == qn(t))) {
            t.b = !1;
            try {
              var e,
                n,
                r,
                i,
                o = t.W();
              t: switch (o) {
                case 200:
                case 201:
                case 202:
                case 204:
                case 206:
                case 304:
                case 1223:
                  var s = !0;
                  break t;
                default:
                  s = !1;
              }
              (e = s) ||
                ((n = 0 === o) &&
                  (!(i = String(t.B).match(Ke)[1] || null) &&
                    x.self &&
                    x.self.location &&
                    (i = (r = x.self.location.protocol).substr(
                      0,
                      r.length - 1
                    )),
                  (n = !Cn.test(i ? i.toLowerCase() : ""))),
                (e = n));
              if (e) Ft(t, "complete"), Ft(t, "success");
              else {
                t.h = 6;
                try {
                  var u = 2 < qn(t) ? t.a.statusText : "";
                } catch (o) {
                  u = "";
                }
                (t.f = u + " [" + t.W() + "]"), Mn(t);
              }
            } finally {
              jn(t);
            }
          }
      }
      function jn(t, e) {
        if (t.a) {
          Fn(t);
          var n = t.a,
            r = t.s[0] ? D : null;
          (t.a = null), (t.s = null), e || Ft(t, "ready");
          try {
            n.onreadystatechange = r;
          } catch (t) {}
        }
      }
      function Fn(t) {
        t.a && t.D && (t.a.ontimeout = null),
          t.m && (x.clearTimeout(t.m), (t.m = null));
      }
      function qn(t) {
        return t.a ? t.a.readyState : 0;
      }
      function Bn(t, e, n) {
        t: {
          for (r in n) {
            var r = !1;
            break t;
          }
          r = !0;
        }
        var i;
        r ||
          ((i = ""),
          J(n, function (t, e) {
            (i += e), (i += ":"), (i += t), (i += "\r\n");
          }),
          (n = i),
          "string" == typeof t
            ? null != n && encodeURIComponent(String(n))
            : en(t, e, n));
      }
      function Gn(t, e, n) {
        return (
          (n && n.internalChannelParams && n.internalChannelParams[t]) || e
        );
      }
      function zn(t) {
        (this.pa = 0),
          (this.g = []),
          (this.c = new fe()),
          (this.ga = this.la = this.B = this.fa = this.a = this.na = this.A = this.V = this.i = this.O = this.l = null),
          (this.Oa = this.R = 0),
          (this.La = Gn("failFast", !1, t)),
          (this.H = this.m = this.j = this.h = this.f = null),
          (this.S = !0),
          (this.I = this.oa = this.P = -1),
          (this.T = this.o = this.u = 0),
          (this.Ha = Gn("baseRetryDelayMs", 5e3, t)),
          (this.Ra = Gn("retryDelaySeedMs", 1e4, t)),
          (this.Ma = Gn("forwardChannelMaxRetries", 2, t)),
          (this.ma = Gn("forwardChannelRequestTimeoutMs", 2e4, t)),
          (this.Na = (t && t.g) || void 0),
          (this.D = void 0),
          (this.C = (t && t.supportsCrossDomainXhr) || !1),
          (this.J = ""),
          (this.b = new bn(t && t.concurrentRequestLimit)),
          (this.ka = new xn()),
          (this.da = (t && t.fastHandshake) || !1),
          (this.Ia = (t && t.b) || !1),
          t && t.f && (this.c.a = !1),
          t && t.forceLongPolling && (this.S = !1),
          (this.U = (!this.da && this.S && t && t.detectBufferingProxy) || !1),
          (this.ea = void 0),
          (this.N = 0),
          (this.F = !1),
          (this.s = null),
          (this.Ka = (t && t.c) || !1) &&
            this.c.info("Opt-in to enable Chrome Origin Trials.");
      }
      function Hn(t) {
        var e, n;
        Yn(t),
          3 == t.v &&
            ((e = t.R++),
            en((n = We(t.B)), "SID", t.J),
            en(n, "RID", e),
            en(n, "TYPE", "terminate"),
            Jn(t, n),
            ((e = new ke(t, t.c, e, void 0)).H = 2),
            (e.i = nn(We(n))),
            (n = !1),
            !(n =
              x.navigator && x.navigator.sendBeacon
                ? x.navigator.sendBeacon(e.i.toString(), "")
                : n) &&
              x.Image &&
              ((new Image().src = e.i), (n = !0)),
            n || ((e.a = cr(e.g, null)), e.a.ba(e.i)),
            (e.u = U()),
            Ue(e)),
          ur(t);
      }
      function Qn(t) {
        t.a && (er(t), t.a.cancel(), (t.a = null));
      }
      function Yn(t) {
        Qn(t),
          t.j && (x.clearTimeout(t.j), (t.j = null)),
          rr(t),
          t.b.cancel(),
          t.h && ("number" == typeof t.h && x.clearTimeout(t.h), (t.h = null));
      }
      function Kn(t, e) {
        t.g.push(new mn(t.Oa++, e)), 3 == t.v && Xn(t);
      }
      function Xn(t) {
        _n(t.b) || t.h || ((t.h = !0), Kt(t.Ba, t), (t.u = 0));
      }
      function Wn(t, e) {
        var n = e ? e.f : t.R++,
          r = We(t.B);
        en(r, "SID", t.J),
          en(r, "RID", n),
          en(r, "AID", t.P),
          Jn(t, r),
          t.i && t.l && Bn(r, t.i, t.l),
          (n = new ke(t, t.c, n, t.u + 1)),
          null === t.i && (n.B = t.l),
          e && (t.g = e.s.concat(t.g)),
          (e = Zn(t, n, 1e3)),
          n.setTimeout(
            Math.round(0.5 * t.ma) + Math.round(0.5 * t.ma * Math.random())
          ),
          Tn(t.b, n),
          Re(n, r, e);
      }
      function Jn(t, n) {
        t.f &&
          ze({}, function (t, e) {
            en(n, e, t);
          });
      }
      function Zn(t, e, n) {
        n = Math.min(t.g.length, n);
        var r = t.f ? V(t.f.Ja, t.f, t) : null;
        t: for (var i = t.g, o = -1; ; ) {
          var s = ["count=" + n];
          -1 == o
            ? 0 < n
              ? ((o = i[0].b), s.push("ofs=" + o))
              : (o = 0)
            : s.push("ofs=" + o);
          for (var u = !0, a = 0; a < n; a++) {
            var c = i[a].b,
              h = i[a].a;
            if ((c -= o) < 0) (o = Math.max(0, i[a].b - 100)), (u = !1);
            else
              try {
                !(function (t, r) {
                  var i = "req" + c + "_" || "";
                  try {
                    ze(t, function (t, e) {
                      var n = t;
                      k(t) && (n = Bt(t)),
                        r.push(i + e + "=" + encodeURIComponent(n));
                    });
                  } catch (t) {
                    throw (
                      (r.push(i + "type=" + encodeURIComponent("_badmap")), t)
                    );
                  }
                })(h, s);
              } catch (t) {
                r && r(h);
              }
          }
          if (u) {
            r = s.join("&");
            break t;
          }
        }
        return (t = t.g.splice(0, n)), (e.s = t), r;
      }
      function $n(t) {
        t.a || t.j || ((t.T = 1), Kt(t.Aa, t), (t.o = 0));
      }
      function tr(t) {
        return (
          !(t.a || t.j || 3 <= t.o) &&
          (t.T++, (t.j = _e(V(t.Aa, t), or(t, t.o))), t.o++, 1)
        );
      }
      function er(t) {
        null != t.s && (x.clearTimeout(t.s), (t.s = null));
      }
      function nr(t) {
        (t.a = new ke(t, t.c, "rpc", t.T)),
          null === t.i && (t.a.B = t.l),
          (t.a.O = 0);
        var e = We(t.la);
        en(e, "RID", "rpc"),
          en(e, "SID", t.J),
          en(e, "CI", t.H ? "0" : "1"),
          en(e, "AID", t.P),
          Jn(t, e),
          en(e, "TYPE", "xmlhttp"),
          t.i && t.l && Bn(e, t.i, t.l),
          t.D && t.a.setTimeout(t.D);
        var n = t.a;
        (t = t.ga),
          (n.H = 1),
          (n.i = nn(We(e))),
          (n.j = null),
          (n.I = !0),
          Ve(n, t);
      }
      function rr(t) {
        null != t.m && (x.clearTimeout(t.m), (t.m = null));
      }
      function ir(t, e) {
        var n,
          r,
          i,
          o = null;
        if (t.a == e) {
          rr(t), er(t), (t.a = null);
          var s = 2;
        } else {
          if (!In(t.b, e)) return;
          (o = e.s), Nn(t.b, e), (s = 1);
        }
        if (((t.I = e.N), 0 != t.v))
          if (e.b)
            1 == s
              ? ((o = e.j ? e.j.length : 0),
                (e = U() - e.u),
                (n = t.u),
                Ft((s = ye()), new we(s)),
                Xn(t))
              : $n(t);
          else if (
            3 == (n = e.h) ||
            (0 == n && 0 < t.I) ||
            ((1 != s ||
              ((i = e),
              En((r = t).b) >= r.b.f - (r.h ? 1 : 0) ||
                (r.h
                  ? ((r.g = i.s.concat(r.g)), 0)
                  : 1 == r.v ||
                    2 == r.v ||
                    r.u >= (r.La ? 0 : r.Ma) ||
                    ((r.h = _e(V(r.Ba, r, i), or(r, r.u))), r.u++, 0)))) &&
              (2 != s || !tr(t)))
          )
            switch (
              (o && 0 < o.length && ((e = t.b), (e.c = e.c.concat(o))), n)
            ) {
              case 1:
                sr(t, 5);
                break;
              case 4:
                sr(t, 10);
                break;
              case 3:
                sr(t, 6);
                break;
              default:
                sr(t, 2);
            }
      }
      function or(t, e) {
        var n = t.Ha + Math.floor(Math.random() * t.Ra);
        return t.f || (n *= 2), n * e;
      }
      function sr(t, e) {
        var n, r, i, o;
        t.c.info("Error code " + e),
          2 == e
            ? ((r = null),
              t.f && (r = null),
              (o = V(t.Ya, t)),
              r ||
                ((r = new Xe("//www.google.com/images/cleardot.gif")),
                (x.location && "http" == x.location.protocol) || Je(r, "https"),
                nn(r)),
              (n = r.toString()),
              (r = o),
              (o = new fe()),
              x.Image
                ? (((i = new Image()).onload = M(
                    Dn,
                    o,
                    i,
                    "TestLoadImage: loaded",
                    !0,
                    r
                  )),
                  (i.onerror = M(Dn, o, i, "TestLoadImage: error", !1, r)),
                  (i.onabort = M(Dn, o, i, "TestLoadImage: abort", !1, r)),
                  (i.ontimeout = M(Dn, o, i, "TestLoadImage: timeout", !1, r)),
                  x.setTimeout(function () {
                    i.ontimeout && i.ontimeout();
                  }, 1e4),
                  (i.src = n))
                : r(!1))
            : be(2),
          (t.v = 0),
          t.f && t.f.ra(e),
          ur(t),
          Yn(t);
      }
      function ur(t) {
        (t.v = 0),
          (t.I = -1),
          t.f &&
            ((0 == An(t.b).length && 0 == t.g.length) ||
              ((t.b.c.length = 0), z(t.g), (t.g.length = 0)),
            t.f.qa());
      }
      function ar(t, e, n) {
        var r,
          i,
          o,
          s,
          u,
          a = (s = n) instanceof Xe ? We(s) : new Xe(s, void 0);
        return (
          "" != a.c
            ? (e && Ze(a, e + "." + a.c), $e(a, a.h))
            : ((u = x.location),
              (r = u.protocol),
              (i = e ? e + "." + u.hostname : u.hostname),
              (o = +u.port),
              (s = n),
              (u = new Xe(null, void 0)),
              r && Je(u, r),
              i && Ze(u, i),
              o && $e(u, o),
              s && (u.g = s),
              (a = u)),
          t.V &&
            J(t.V, function (t, e) {
              en(a, e, t);
            }),
          (e = t.A),
          (n = t.na),
          e && n && en(a, e, n),
          en(a, "VER", t.ha),
          Jn(t, a),
          a
        );
      }
      function cr(t, e) {
        if (e && !t.C)
          throw Error("Can't create secondary domain capable XhrIo object.");
        return ((e = new kn(t.Na)).F = t.C), e;
      }
      function hr() {}
      function fr() {
        if (it && !(10 <= Number(dt)))
          throw Error("Environmental error: no available transport.");
      }
      function lr(t, e) {
        jt.call(this),
          (this.a = new zn(e)),
          (this.o = t),
          (this.b = (e && e.messageUrlParams) || null),
          (t = (e && e.messageHeaders) || null),
          e &&
            e.clientProtocolHeaderRequired &&
            (t
              ? (t["X-Client-Protocol"] = "webchannel")
              : (t = { "X-Client-Protocol": "webchannel" })),
          (this.a.l = t),
          (t = (e && e.initMessageHeaders) || null),
          e &&
            e.messageContentType &&
            (t
              ? (t["X-WebChannel-Content-Type"] = e.messageContentType)
              : (t = { "X-WebChannel-Content-Type": e.messageContentType })),
          e &&
            e.a &&
            (t
              ? (t["X-WebChannel-Client-Profile"] = e.a)
              : (t = { "X-WebChannel-Client-Profile": e.a })),
          (this.a.O = t),
          (t = e && e.httpHeadersOverwriteParam) && !H(t) && (this.a.i = t),
          (this.m = (e && e.supportsCrossDomainXhr) || !1),
          (this.l = (e && e.sendRawJson) || !1),
          (e = e && e.httpSessionIdParam) &&
            !H(e) &&
            ((this.a.A = e),
            null !== (t = this.b) &&
              e in t &&
              e in (t = this.b) &&
              delete t[e]),
          (this.f = new yr(this));
      }
      function pr(t) {
        xe.call(this);
        var e = t.__sm__;
        if (e) {
          t: {
            for (var n in e) {
              t = n;
              break t;
            }
            t = void 0;
          }
          (this.c = t)
            ? ((t = this.c), (this.data = null !== e && t in e ? e[t] : void 0))
            : (this.data = e);
        } else this.data = t;
      }
      function dr() {
        De.call(this), (this.status = 1);
      }
      function yr(t) {
        this.a = t;
      }
      ((N = kn.prototype).ba = function (t, e, n, r) {
        if (this.a)
          throw Error(
            "[goog.net.XhrIo] Object is active with another request=" +
              this.B +
              "; newUri=" +
              t
          );
        (e = e ? e.toUpperCase() : "GET"),
          (this.B = t),
          (this.f = ""),
          (this.h = 0),
          (this.u = !1),
          (this.b = !0),
          (this.a = new XMLHttpRequest()),
          (this.s = this.H ? Ne(this.H) : Ne(Se)),
          (this.a.onreadystatechange = V(this.za, this));
        try {
          (this.A = !0), this.a.open(e, String(t), !0), (this.A = !1);
        } catch (t) {
          return void Vn(this, t);
        }
        t = n || "";
        var i,
          o = new He(this.headers);
        r &&
          ze(r, function (t, e) {
            o.set(e, t);
          }),
          (r = (function (t) {
            t: {
              for (
                var e = Rn,
                  n = t.length,
                  r = "string" == typeof t ? t.split("") : t,
                  i = 0;
                i < n;
                i++
              )
                if (i in r && e.call(void 0, r[i], i, t)) {
                  e = i;
                  break t;
                }
              e = -1;
            }
            return e < 0 ? null : "string" == typeof t ? t.charAt(e) : t[e];
          })(o.L())),
          (n = x.FormData && t instanceof x.FormData),
          0 <= q(Ln, e) &&
            !r &&
            !n &&
            o.set(
              "Content-Type",
              "application/x-www-form-urlencoded;charset=utf-8"
            ),
          o.forEach(function (t, e) {
            this.a.setRequestHeader(e, t);
          }, this),
          this.I && (this.a.responseType = this.I),
          "withCredentials" in this.a &&
            this.a.withCredentials !== this.F &&
            (this.a.withCredentials = this.F);
        try {
          Fn(this),
            0 < this.o &&
              ((this.D =
                ((i = this.a),
                it &&
                  pt(9) &&
                  "number" == typeof i.timeout &&
                  void 0 !== i.ontimeout))
                ? ((this.a.timeout = this.o),
                  (this.a.ontimeout = V(this.xa, this)))
                : (this.m = te(this.xa, this.o, this))),
            (this.l = !0),
            this.a.send(t),
            (this.l = !1);
        } catch (t) {
          Vn(this, t);
        }
      }),
        (N.xa = function () {
          void 0 !== S &&
            this.a &&
            ((this.f = "Timed out after " + this.o + "ms, aborting"),
            (this.h = 8),
            Ft(this, "timeout"),
            this.abort(8));
        }),
        (N.abort = function (t) {
          this.a &&
            this.b &&
            ((this.b = !1),
            (this.g = !0),
            this.a.abort(),
            (this.g = !1),
            (this.h = t || 7),
            Ft(this, "complete"),
            Ft(this, "abort"),
            jn(this));
        }),
        (N.G = function () {
          this.a &&
            (this.b &&
              ((this.b = !1), (this.g = !0), this.a.abort(), (this.g = !1)),
            jn(this, !0)),
            kn.X.G.call(this);
        }),
        (N.za = function () {
          this.j || (this.A || this.l || this.g ? Un(this) : this.Ua());
        }),
        (N.Ua = function () {
          Un(this);
        }),
        (N.W = function () {
          try {
            return 2 < qn(this) ? this.a.status : -1;
          } catch (t) {
            return -1;
          }
        }),
        (N.$ = function () {
          try {
            return this.a ? this.a.responseText : "";
          } catch (t) {
            return "";
          }
        }),
        (N.Pa = function (t) {
          if (this.a) {
            var e = this.a.responseText;
            return t && 0 == e.indexOf(t) && (e = e.substring(t.length)), On(e);
          }
        }),
        (N.ua = function () {
          return this.h;
        }),
        (N.Qa = function () {
          return "string" == typeof this.f ? this.f : String(this.f);
        }),
        ((N = zn.prototype).ha = 8),
        (N.v = 1),
        (N.Ba = function (t) {
          if (this.h)
            if (((this.h = null), 1 == this.v)) {
              if (!t) {
                (this.R = Math.floor(1e5 * Math.random())), (t = this.R++);
                var e,
                  n = new ke(this, this.c, t, void 0),
                  r = this.l;
                if (
                  (this.O && (r ? tt((r = Z(r)), this.O) : (r = this.O)),
                  null === this.i && (n.B = r),
                  this.da)
                )
                  t: {
                    for (var i = (e = 0); i < this.g.length; i++) {
                      var o = this.g[i];
                      if (
                        ("__data__" in o.a &&
                        "string" == typeof (o = o.a.__data__)
                          ? (o = o.length)
                          : (o = void 0),
                        void 0 === o)
                      )
                        break;
                      if (4096 < (e += o)) {
                        e = i;
                        break t;
                      }
                      if (4096 === e || i === this.g.length - 1) {
                        e = i + 1;
                        break t;
                      }
                    }
                    e = 1e3;
                  }
                else e = 1e3;
                (e = Zn(this, n, e)),
                  en((i = We(this.B)), "RID", t),
                  en(i, "CVER", 22),
                  this.A && en(i, "X-HTTP-Session-Id", this.A),
                  Jn(this, i),
                  this.i && r && Bn(i, this.i, r),
                  Tn(this.b, n),
                  this.Ia && en(i, "TYPE", "init"),
                  this.da
                    ? (en(i, "$req", e),
                      en(i, "SID", "null"),
                      (n.U = !0),
                      Re(n, i, null))
                    : Re(n, i, e),
                  (this.v = 2);
              }
            } else
              3 == this.v &&
                (t
                  ? Wn(this, t)
                  : 0 == this.g.length || _n(this.b) || Wn(this));
        }),
        (N.Aa = function () {
          var t;
          (this.j = null),
            nr(this),
            this.U &&
              !(this.F || null == this.a || this.N <= 0) &&
              ((t = 2 * this.N),
              this.c.info("BP detection timer enabled: " + t),
              (this.s = _e(V(this.Ta, this), t)));
        }),
        (N.Ta = function () {
          this.s &&
            ((this.s = null),
            this.c.info("BP detection timeout reached."),
            this.c.info("Buffering proxy detected and switch to long-polling!"),
            (this.H = !1),
            (this.F = !0),
            be(10),
            Qn(this),
            nr(this));
        }),
        (N.Sa = function () {
          null != this.m && ((this.m = null), Qn(this), tr(this), be(19));
        }),
        (N.Ya = function (t) {
          t
            ? (this.c.info("Successfully pinged google.com"), be(2))
            : (this.c.info("Failed to ping google.com"), be(1));
        }),
        ((N = hr.prototype).ta = function () {}),
        (N.sa = function () {}),
        (N.ra = function () {}),
        (N.qa = function () {}),
        (N.Ja = function () {}),
        (fr.prototype.a = function (t, e) {
          return new lr(t, e);
        }),
        j(lr, jt),
        (lr.prototype.g = function () {
          (this.a.f = this.f), this.m && (this.a.C = !0);
          var t = this.a,
            e = this.o,
            n = this.b || void 0;
          be(0),
            (t.fa = e),
            (t.V = n || {}),
            (t.H = t.S),
            (t.B = ar(t, null, t.fa)),
            Xn(t);
        }),
        (lr.prototype.close = function () {
          Hn(this.a);
        }),
        (lr.prototype.h = function (t) {
          var e;
          "string" == typeof t
            ? (((e = {}).__data__ = t), Kn(this.a, e))
            : this.l
            ? (((e = {}).__data__ = Bt(t)), Kn(this.a, e))
            : Kn(this.a, t);
        }),
        (lr.prototype.G = function () {
          (this.a.f = null),
            delete this.f,
            Hn(this.a),
            delete this.a,
            lr.X.G.call(this);
        }),
        j(pr, xe),
        j(dr, De),
        j(yr, hr),
        (yr.prototype.ta = function () {
          Ft(this.a, "a");
        }),
        (yr.prototype.sa = function (t) {
          Ft(this.a, new pr(t));
        }),
        (yr.prototype.ra = function (t) {
          Ft(this.a, new dr());
        }),
        (yr.prototype.qa = function () {
          Ft(this.a, "b");
        }),
        (fr.prototype.createWebChannel = fr.prototype.a),
        (lr.prototype.send = lr.prototype.h),
        (lr.prototype.open = lr.prototype.g),
        (Ee.NO_ERROR = 0),
        (Ee.TIMEOUT = 8),
        (Ee.HTTP_ERROR = 6),
        (Ie.COMPLETE = "complete"),
        ((Ae.EventType = A).OPEN = "a"),
        (A.CLOSE = "b"),
        (A.ERROR = "c"),
        (A.MESSAGE = "d"),
        (jt.prototype.listen = jt.prototype.va),
        (kn.prototype.listenOnce = kn.prototype.wa),
        (kn.prototype.getLastError = kn.prototype.Qa),
        (kn.prototype.getLastErrorCode = kn.prototype.ua),
        (kn.prototype.getStatus = kn.prototype.W),
        (kn.prototype.getResponseJson = kn.prototype.Pa),
        (kn.prototype.getResponseText = kn.prototype.$),
        (kn.prototype.send = kn.prototype.ba);
      var vr = ye,
        gr = Ee,
        mr = Ie,
        br = pe,
        wr = 10,
        _r = 11,
        Er = Ae,
        Ir = kn,
        Tr = function (t, e, n, r, i, o) {
          (this.t = t),
            (this.persistenceKey = e),
            (this.host = n),
            (this.ssl = r),
            (this.forceLongPolling = i),
            (this.i = o);
        },
        Nr =
          (Object.defineProperty(Sr.prototype, "o", {
            get: function () {
              return "(default)" === this.database;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (Sr.prototype.isEqual = function (t) {
            return (
              t instanceof Sr &&
              t.projectId === this.projectId &&
              t.database === this.database
            );
          }),
          Sr),
        Ar = new o("@firebase/firestore");
      function Sr(t, e) {
        (this.projectId = t), (this.database = e || "(default)");
      }
      function xr() {
        return Ar.logLevel;
      }
      function Dr(t) {
        for (var e, n = [], r = 1; r < arguments.length; r++)
          n[r - 1] = arguments[r];
        Ar.logLevel <= l.DEBUG &&
          ((e = n.map(Pr)),
          Ar.debug.apply(Ar, f(["Firestore (8.2.10): " + t], e)));
      }
      function Or(t) {
        for (var e, n = [], r = 1; r < arguments.length; r++)
          n[r - 1] = arguments[r];
        Ar.logLevel <= l.ERROR &&
          ((e = n.map(Pr)),
          Ar.error.apply(Ar, f(["Firestore (8.2.10): " + t], e)));
      }
      function kr(t) {
        for (var e, n = [], r = 1; r < arguments.length; r++)
          n[r - 1] = arguments[r];
        Ar.logLevel <= l.WARN &&
          ((e = n.map(Pr)),
          Ar.warn.apply(Ar, f(["Firestore (8.2.10): " + t], e)));
      }
      function Pr(e) {
        if ("string" == typeof e) return e;
        try {
          return JSON.stringify(e);
        } catch (t) {
          return e;
        }
      }
      function Cr(t) {
        t =
          "FIRESTORE (8.2.10) INTERNAL ASSERTION FAILED: " +
          (t = void 0 === t ? "Unexpected state" : t);
        throw (Or(t), new Error(t));
      }
      function Lr(t) {
        t || Cr();
      }
      var Rr =
        ((Vr.u = function () {
          for (
            var t =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
              e = Math.floor(256 / t.length) * t.length,
              n = "";
            n.length < 20;

          )
            for (
              var r = (function (t) {
                  var e =
                      "undefined" != typeof self &&
                      (self.crypto || self.msCrypto),
                    n = new Uint8Array(t);
                  if (e && "function" == typeof e.getRandomValues)
                    e.getRandomValues(n);
                  else
                    for (var r = 0; r < t; r++)
                      n[r] = Math.floor(256 * Math.random());
                  return n;
                })(40),
                i = 0;
              i < r.length;
              ++i
            )
              n.length < 20 && r[i] < e && (n += t.charAt(r[i] % t.length));
          return n;
        }),
        Vr);
      function Vr() {}
      function Mr(t, e) {
        return t < e ? -1 : e < t ? 1 : 0;
      }
      function Ur(t, n, r) {
        return (
          t.length === n.length &&
          t.every(function (t, e) {
            return r(t, n[e]);
          })
        );
      }
      function jr(t) {
        return t + "\0";
      }
      var Fr =
        ((qr.fromBase64String = function (t) {
          return new qr(atob(t));
        }),
        (qr.fromUint8Array = function (t) {
          return new qr(
            (function (t) {
              for (var e = "", n = 0; n < t.length; ++n)
                e += String.fromCharCode(t[n]);
              return e;
            })(t)
          );
        }),
        (qr.prototype.toBase64 = function () {
          return (t = this.h), btoa(t);
          var t;
        }),
        (qr.prototype.toUint8Array = function () {
          return (function (t) {
            for (var e = new Uint8Array(t.length), n = 0; n < t.length; n++)
              e[n] = t.charCodeAt(n);
            return e;
          })(this.h);
        }),
        (qr.prototype.l = function () {
          return 2 * this.h.length;
        }),
        (qr.prototype._ = function (t) {
          return Mr(this.h, t.h);
        }),
        (qr.prototype.isEqual = function (t) {
          return this.h === t.h;
        }),
        qr);
      function qr(t) {
        this.h = t;
      }
      Fr.T = new Fr("");
      var Br,
        Gr = {
          OK: "ok",
          CANCELLED: "cancelled",
          UNKNOWN: "unknown",
          INVALID_ARGUMENT: "invalid-argument",
          DEADLINE_EXCEEDED: "deadline-exceeded",
          NOT_FOUND: "not-found",
          ALREADY_EXISTS: "already-exists",
          PERMISSION_DENIED: "permission-denied",
          UNAUTHENTICATED: "unauthenticated",
          RESOURCE_EXHAUSTED: "resource-exhausted",
          FAILED_PRECONDITION: "failed-precondition",
          ABORTED: "aborted",
          OUT_OF_RANGE: "out-of-range",
          UNIMPLEMENTED: "unimplemented",
          INTERNAL: "internal",
          UNAVAILABLE: "unavailable",
          DATA_LOSS: "data-loss",
        },
        zr = (h(Xr, (Br = Error)), Xr),
        Hr =
          ((Kr.fromBase64String = function (t) {
            try {
              return new Kr(Fr.fromBase64String(t));
            } catch (t) {
              throw new zr(
                Gr.INVALID_ARGUMENT,
                "Failed to construct data from Base64 string: " + t
              );
            }
          }),
          (Kr.fromUint8Array = function (t) {
            return new Kr(Fr.fromUint8Array(t));
          }),
          (Kr.prototype.toBase64 = function () {
            return this.I.toBase64();
          }),
          (Kr.prototype.toUint8Array = function () {
            return this.I.toUint8Array();
          }),
          (Kr.prototype.toString = function () {
            return "Bytes(base64: " + this.toBase64() + ")";
          }),
          (Kr.prototype.isEqual = function (t) {
            return this.I.isEqual(t.I);
          }),
          Kr),
        Qr =
          ((Yr.prototype.m = function () {
            return null != this.uid;
          }),
          (Yr.prototype.A = function () {
            return this.m() ? "uid:" + this.uid : "anonymous-user";
          }),
          (Yr.prototype.isEqual = function (t) {
            return t.uid === this.uid;
          }),
          Yr);
      function Yr(t) {
        this.uid = t;
      }
      function Kr(t) {
        this.I = t;
      }
      function Xr(t, e) {
        var n = this;
        return (
          ((n = Br.call(this, e) || this).code = t),
          (n.message = e),
          (n.name = "FirebaseError"),
          (n.toString = function () {
            return n.name + ": [code=" + n.code + "]: " + n.message;
          }),
          n
        );
      }
      (Qr.UNAUTHENTICATED = new Qr(null)),
        (Qr.R = new Qr("google-credentials-uid")),
        (Qr.P = new Qr("first-party-uid"));
      function Wr(t, e) {
        (this.user = e),
          (this.type = "OAuth"),
          (this.g = {}),
          (this.g.Authorization = "Bearer " + t);
      }
      var Jr =
          ((si.prototype.getToken = function () {
            return Promise.resolve(null);
          }),
          (si.prototype.p = function () {}),
          (si.prototype.v = function (t) {
            (this.V = t)(Qr.UNAUTHENTICATED);
          }),
          (si.prototype.S = function () {
            this.V = null;
          }),
          si),
        Zr =
          ((oi.prototype.getToken = function () {
            var e = this,
              n = this.N,
              t = this.forceRefresh;
            return (
              (this.forceRefresh = !1),
              this.auth
                ? this.auth.getToken(t).then(function (t) {
                    return e.N !== n
                      ? (Dr(
                          "FirebaseCredentialsProvider",
                          "getToken aborted due to token change."
                        ),
                        e.getToken())
                      : t
                      ? (Lr("string" == typeof t.accessToken),
                        new Wr(t.accessToken, e.currentUser))
                      : null;
                  })
                : Promise.resolve(null)
            );
          }),
          (oi.prototype.p = function () {
            this.forceRefresh = !0;
          }),
          (oi.prototype.v = function (t) {
            (this.V = t), this.C && t(this.currentUser);
          }),
          (oi.prototype.S = function () {
            this.auth && this.auth.removeAuthTokenListener(this.D),
              (this.D = null),
              (this.V = null);
          }),
          (oi.prototype.$ = function () {
            var t = this.auth && this.auth.getUid();
            return Lr(null === t || "string" == typeof t), new Qr(t);
          }),
          oi),
        $r =
          (Object.defineProperty(ii.prototype, "g", {
            get: function () {
              var t = { "X-Goog-AuthUser": this.O },
                e = this.F.auth.getAuthHeaderValueForFirstParty([]);
              return e && (t.Authorization = e), t;
            },
            enumerable: !1,
            configurable: !0,
          }),
          ii),
        ti =
          ((ri.prototype.getToken = function () {
            return Promise.resolve(new $r(this.F, this.O));
          }),
          (ri.prototype.v = function (t) {
            t(Qr.P);
          }),
          (ri.prototype.S = function () {}),
          (ri.prototype.p = function () {}),
          ri),
        ei =
          ((ni.prototype.M = function (t) {
            return (
              (this.previousValue = Math.max(t, this.previousValue)),
              this.previousValue
            );
          }),
          (ni.prototype.next = function () {
            var t = ++this.previousValue;
            return this.L && this.L(t), t;
          }),
          ni);
      function ni(t, e) {
        var n = this;
        (this.previousValue = t),
          e &&
            ((e.k = function (t) {
              return n.M(t);
            }),
            (this.L = function (t) {
              return e.B(t);
            }));
      }
      function ri(t, e) {
        (this.F = t), (this.O = e);
      }
      function ii(t, e) {
        (this.F = t),
          (this.O = e),
          (this.type = "FirstParty"),
          (this.user = Qr.P);
      }
      function oi(t) {
        var e = this;
        (this.D = null),
          (this.currentUser = Qr.UNAUTHENTICATED),
          (this.C = !1),
          (this.N = 0),
          (this.V = null),
          (this.forceRefresh = !1),
          (this.D = function () {
            e.N++,
              (e.currentUser = e.$()),
              (e.C = !0),
              e.V && e.V(e.currentUser);
          }),
          (this.N = 0),
          (this.auth = t.getImmediate({ optional: !0 })),
          this.auth
            ? this.auth.addAuthTokenListener(this.D)
            : (this.D(null),
              t.get().then(
                function (t) {
                  (e.auth = t), e.D && e.auth.addAuthTokenListener(e.D);
                },
                function () {}
              ));
      }
      function si() {
        this.V = null;
      }
      ei.q = -1;
      var ui,
        ai,
        ci =
          ((wi.now = function () {
            return wi.fromMillis(Date.now());
          }),
          (wi.fromDate = function (t) {
            return wi.fromMillis(t.getTime());
          }),
          (wi.fromMillis = function (t) {
            var e = Math.floor(t / 1e3);
            return new wi(e, 1e6 * (t - 1e3 * e));
          }),
          (wi.prototype.toDate = function () {
            return new Date(this.toMillis());
          }),
          (wi.prototype.toMillis = function () {
            return 1e3 * this.seconds + this.nanoseconds / 1e6;
          }),
          (wi.prototype.U = function (t) {
            return this.seconds === t.seconds
              ? Mr(this.nanoseconds, t.nanoseconds)
              : Mr(this.seconds, t.seconds);
          }),
          (wi.prototype.isEqual = function (t) {
            return (
              t.seconds === this.seconds && t.nanoseconds === this.nanoseconds
            );
          }),
          (wi.prototype.toString = function () {
            return (
              "Timestamp(seconds=" +
              this.seconds +
              ", nanoseconds=" +
              this.nanoseconds +
              ")"
            );
          }),
          (wi.prototype.toJSON = function () {
            return { seconds: this.seconds, nanoseconds: this.nanoseconds };
          }),
          (wi.prototype.valueOf = function () {
            var t = this.seconds - -62135596800;
            return (
              String(t).padStart(12, "0") +
              "." +
              String(this.nanoseconds).padStart(9, "0")
            );
          }),
          wi),
        hi =
          ((bi.K = function (t) {
            return new bi(t);
          }),
          (bi.min = function () {
            return new bi(new ci(0, 0));
          }),
          (bi.prototype._ = function (t) {
            return this.timestamp.U(t.timestamp);
          }),
          (bi.prototype.isEqual = function (t) {
            return this.timestamp.isEqual(t.timestamp);
          }),
          (bi.prototype.W = function () {
            return (
              1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3
            );
          }),
          (bi.prototype.toString = function () {
            return "SnapshotVersion(" + this.timestamp.toString() + ")";
          }),
          (bi.prototype.j = function () {
            return this.timestamp;
          }),
          bi),
        Ie =
          (Object.defineProperty(mi.prototype, "length", {
            get: function () {
              return this.G;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (mi.prototype.isEqual = function (t) {
            return 0 === mi.H(this, t);
          }),
          (mi.prototype.child = function (t) {
            var e = this.segments.slice(this.offset, this.limit());
            return (
              t instanceof mi
                ? t.forEach(function (t) {
                    e.push(t);
                  })
                : e.push(t),
              this.J(e)
            );
          }),
          (mi.prototype.limit = function () {
            return this.offset + this.length;
          }),
          (mi.prototype.Y = function (t) {
            return (
              (t = void 0 === t ? 1 : t),
              this.J(this.segments, this.offset + t, this.length - t)
            );
          }),
          (mi.prototype.X = function () {
            return this.J(this.segments, this.offset, this.length - 1);
          }),
          (mi.prototype.Z = function () {
            return this.segments[this.offset];
          }),
          (mi.prototype.tt = function () {
            return this.get(this.length - 1);
          }),
          (mi.prototype.get = function (t) {
            return this.segments[this.offset + t];
          }),
          (mi.prototype.et = function () {
            return 0 === this.length;
          }),
          (mi.prototype.nt = function (t) {
            if (t.length < this.length) return !1;
            for (var e = 0; e < this.length; e++)
              if (this.get(e) !== t.get(e)) return !1;
            return !0;
          }),
          (mi.prototype.st = function (t) {
            if (this.length + 1 !== t.length) return !1;
            for (var e = 0; e < this.length; e++)
              if (this.get(e) !== t.get(e)) return !1;
            return !0;
          }),
          (mi.prototype.forEach = function (t) {
            for (var e = this.offset, n = this.limit(); e < n; e++)
              t(this.segments[e]);
          }),
          (mi.prototype.it = function () {
            return this.segments.slice(this.offset, this.limit());
          }),
          (mi.H = function (t, e) {
            for (var n = Math.min(t.length, e.length), r = 0; r < n; r++) {
              var i = t.get(r),
                o = e.get(r);
              if (i < o) return -1;
              if (o < i) return 1;
            }
            return t.length < e.length ? -1 : t.length > e.length ? 1 : 0;
          }),
          mi),
        fi =
          (h(gi, (ai = Ie)),
          (gi.prototype.J = function (t, e, n) {
            return new gi(t, e, n);
          }),
          (gi.prototype.rt = function () {
            return this.it().join("/");
          }),
          (gi.prototype.toString = function () {
            return this.rt();
          }),
          (gi.ot = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            for (var n = [], r = 0, i = t; r < i.length; r++) {
              var o = i[r];
              if (0 <= o.indexOf("//"))
                throw new zr(
                  Gr.INVALID_ARGUMENT,
                  "Invalid segment (" +
                    o +
                    "). Paths must not contain // in them."
                );
              n.push.apply(
                n,
                o.split("/").filter(function (t) {
                  return 0 < t.length;
                })
              );
            }
            return new gi(n);
          }),
          (gi.ct = function () {
            return new gi([]);
          }),
          gi),
        li = /^[_a-zA-Z][_a-zA-Z0-9]*$/,
        pi =
          (h(vi, (ui = Ie)),
          (vi.prototype.J = function (t, e, n) {
            return new vi(t, e, n);
          }),
          (vi.at = function (t) {
            return li.test(t);
          }),
          (vi.prototype.rt = function () {
            return this.it()
              .map(function (t) {
                return (
                  (t = t.replace(/\\/g, "\\\\").replace(/`/g, "\\`")),
                  (t = !vi.at(t) ? "`" + t + "`" : t)
                );
              })
              .join(".");
          }),
          (vi.prototype.toString = function () {
            return this.rt();
          }),
          (vi.prototype.ut = function () {
            return 1 === this.length && "__name__" === this.get(0);
          }),
          (vi.ht = function () {
            return new vi(["__name__"]);
          }),
          (vi.lt = function (t) {
            for (
              var e = [],
                n = "",
                r = 0,
                i = function () {
                  if (0 === n.length)
                    throw new zr(
                      Gr.INVALID_ARGUMENT,
                      "Invalid field path (" +
                        t +
                        "). Paths must not be empty, begin with '.', end with '.', or contain '..'"
                    );
                  e.push(n), (n = "");
                },
                o = !1;
              r < t.length;

            ) {
              var s = t[r];
              if ("\\" === s) {
                if (r + 1 === t.length)
                  throw new zr(
                    Gr.INVALID_ARGUMENT,
                    "Path has trailing escape character: " + t
                  );
                var u = t[r + 1];
                if ("\\" !== u && "." !== u && "`" !== u)
                  throw new zr(
                    Gr.INVALID_ARGUMENT,
                    "Path has invalid escape sequence: " + t
                  );
                (n += u), (r += 2);
              } else
                "`" === s ? (o = !o) : "." !== s || o ? (n += s) : i(), r++;
            }
            if ((i(), o))
              throw new zr(Gr.INVALID_ARGUMENT, "Unterminated ` in path: " + t);
            return new vi(e);
          }),
          (vi.ct = function () {
            return new vi([]);
          }),
          vi),
        di =
          ((yi._t = function (t) {
            return new yi(fi.ot(t));
          }),
          (yi.ft = function (t) {
            return new yi(fi.ot(t).Y(5));
          }),
          (yi.prototype.dt = function (t) {
            return (
              2 <= this.path.length && this.path.get(this.path.length - 2) === t
            );
          }),
          (yi.prototype.isEqual = function (t) {
            return null !== t && 0 === fi.H(this.path, t.path);
          }),
          (yi.prototype.toString = function () {
            return this.path.toString();
          }),
          (yi.H = function (t, e) {
            return fi.H(t.path, e.path);
          }),
          (yi.wt = function (t) {
            return t.length % 2 == 0;
          }),
          (yi.Et = function (t) {
            return new yi(new fi(t.slice()));
          }),
          yi);
      function yi(t) {
        this.path = t;
      }
      function vi() {
        return (null !== ui && ui.apply(this, arguments)) || this;
      }
      function gi() {
        return (null !== ai && ai.apply(this, arguments)) || this;
      }
      function mi(t, e, n) {
        void 0 === e ? (e = 0) : e > t.length && Cr(),
          void 0 === n ? (n = t.length - e) : n > t.length - e && Cr(),
          (this.segments = t),
          (this.offset = e),
          (this.G = n);
      }
      function bi(t) {
        this.timestamp = t;
      }
      function wi(t, e) {
        if (((this.seconds = t), (this.nanoseconds = e) < 0))
          throw new zr(
            Gr.INVALID_ARGUMENT,
            "Timestamp nanoseconds out of range: " + e
          );
        if (1e9 <= e)
          throw new zr(
            Gr.INVALID_ARGUMENT,
            "Timestamp nanoseconds out of range: " + e
          );
        if (t < -62135596800)
          throw new zr(
            Gr.INVALID_ARGUMENT,
            "Timestamp seconds out of range: " + t
          );
        if (253402300800 <= t)
          throw new zr(
            Gr.INVALID_ARGUMENT,
            "Timestamp seconds out of range: " + t
          );
      }
      function _i(t) {
        var e,
          n = 0;
        for (e in t) Object.prototype.hasOwnProperty.call(t, e) && n++;
        return n;
      }
      function Ei(t, e) {
        for (var n in t)
          Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n]);
      }
      function Ii(t) {
        for (var e in t)
          if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
        return !0;
      }
      var Ti =
          ((Ai.prototype.Tt = function (t) {
            for (var e = 0, n = this.fields; e < n.length; e++)
              if (n[e].nt(t)) return !0;
            return !1;
          }),
          (Ai.prototype.isEqual = function (t) {
            return Ur(this.fields, t.fields, function (t, e) {
              return t.isEqual(e);
            });
          }),
          Ai),
        Ni = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
      function Ai(t) {
        (this.fields = t).sort(pi.H);
      }
      function Si(t) {
        if ((Lr(!!t), "string" != typeof t))
          return { seconds: xi(t.seconds), nanos: xi(t.nanos) };
        var e = 0,
          n = Ni.exec(t);
        Lr(!!n),
          n[1] &&
            ((n = ((n = n[1]) + "000000000").substr(0, 9)), (e = Number(n)));
        t = new Date(t);
        return { seconds: Math.floor(t.getTime() / 1e3), nanos: e };
      }
      function xi(t) {
        return "number" == typeof t ? t : "string" == typeof t ? Number(t) : 0;
      }
      function Di(t) {
        return "string" == typeof t
          ? Fr.fromBase64String(t)
          : Fr.fromUint8Array(t);
      }
      function Oi(t) {
        return (
          "server_timestamp" ===
          (null ===
            (t = (
              (null === (t = null == t ? void 0 : t.mapValue) || void 0 === t
                ? void 0
                : t.fields) || {}
            ).__type__) || void 0 === t
            ? void 0
            : t.stringValue)
        );
      }
      function ki(t) {
        t = Si(t.mapValue.fields.__local_write_time__.timestampValue);
        return new ci(t.seconds, t.nanos);
      }
      function Pi(t) {
        return null == t;
      }
      function Ci(t) {
        return 0 === t && 1 / t == -1 / 0;
      }
      function Li(t) {
        return (
          "number" == typeof t &&
          Number.isInteger(t) &&
          !Ci(t) &&
          t <= Number.MAX_SAFE_INTEGER &&
          t >= Number.MIN_SAFE_INTEGER
        );
      }
      function Ri(t) {
        return "nullValue" in t
          ? 0
          : "booleanValue" in t
          ? 1
          : "integerValue" in t || "doubleValue" in t
          ? 2
          : "timestampValue" in t
          ? 3
          : "stringValue" in t
          ? 5
          : "bytesValue" in t
          ? 6
          : "referenceValue" in t
          ? 7
          : "geoPointValue" in t
          ? 8
          : "arrayValue" in t
          ? 9
          : "mapValue" in t
          ? Oi(t)
            ? 4
            : 10
          : Cr();
      }
      function Vi(r, i) {
        var t,
          e,
          n = Ri(r);
        if (n !== Ri(i)) return !1;
        switch (n) {
          case 0:
            return !0;
          case 1:
            return r.booleanValue === i.booleanValue;
          case 4:
            return ki(r).isEqual(ki(i));
          case 3:
            return (function (t) {
              if (
                "string" == typeof r.timestampValue &&
                "string" == typeof t.timestampValue &&
                r.timestampValue.length === t.timestampValue.length
              )
                return r.timestampValue === t.timestampValue;
              var e = Si(r.timestampValue),
                t = Si(t.timestampValue);
              return e.seconds === t.seconds && e.nanos === t.nanos;
            })(i);
          case 5:
            return r.stringValue === i.stringValue;
          case 6:
            return (e = i), Di(r.bytesValue).isEqual(Di(e.bytesValue));
          case 7:
            return r.referenceValue === i.referenceValue;
          case 8:
            return (
              (t = i),
              xi((e = r).geoPointValue.latitude) ===
                xi(t.geoPointValue.latitude) &&
                xi(e.geoPointValue.longitude) === xi(t.geoPointValue.longitude)
            );
          case 2:
            return (function (t, e) {
              if ("integerValue" in t && "integerValue" in e)
                return xi(t.integerValue) === xi(e.integerValue);
              if ("doubleValue" in t && "doubleValue" in e) {
                (t = xi(t.doubleValue)), (e = xi(e.doubleValue));
                return t === e ? Ci(t) === Ci(e) : isNaN(t) && isNaN(e);
              }
              return !1;
            })(r, i);
          case 9:
            return Ur(r.arrayValue.values || [], i.arrayValue.values || [], Vi);
          case 10:
            return (function () {
              var t,
                e = r.mapValue.fields || {},
                n = i.mapValue.fields || {};
              if (_i(e) !== _i(n)) return !1;
              for (t in e)
                if (e.hasOwnProperty(t) && (void 0 === n[t] || !Vi(e[t], n[t])))
                  return !1;
              return !0;
            })();
          default:
            return Cr();
        }
      }
      function Mi(t, e) {
        return (
          void 0 !==
          (t.values || []).find(function (t) {
            return Vi(t, e);
          })
        );
      }
      function Ui(t, e) {
        var n,
          r,
          i,
          o = Ri(t),
          s = Ri(e);
        if (o !== s) return Mr(o, s);
        switch (o) {
          case 0:
            return 0;
          case 1:
            return Mr(t.booleanValue, e.booleanValue);
          case 2:
            return (
              (r = e),
              (i = xi(t.integerValue || t.doubleValue)),
              (r = xi(r.integerValue || r.doubleValue)),
              i < r
                ? -1
                : r < i
                ? 1
                : i === r
                ? 0
                : isNaN(i)
                ? isNaN(r)
                  ? 0
                  : -1
                : 1
            );
          case 3:
            return ji(t.timestampValue, e.timestampValue);
          case 4:
            return ji(ki(t), ki(e));
          case 5:
            return Mr(t.stringValue, e.stringValue);
          case 6:
            return (function (t, e) {
              (t = Di(t)), (e = Di(e));
              return t._(e);
            })(t.bytesValue, e.bytesValue);
          case 7:
            return (function (t, e) {
              for (
                var n = t.split("/"), r = e.split("/"), i = 0;
                i < n.length && i < r.length;
                i++
              ) {
                var o = Mr(n[i], r[i]);
                if (0 !== o) return o;
              }
              return Mr(n.length, r.length);
            })(t.referenceValue, e.referenceValue);
          case 8:
            return (
              (n = t.geoPointValue),
              (i = e.geoPointValue),
              0 !== (r = Mr(xi(n.latitude), xi(i.latitude)))
                ? r
                : Mr(xi(n.longitude), xi(i.longitude))
            );
          case 9:
            return (function (t, e) {
              for (
                var n = t.values || [], r = e.values || [], i = 0;
                i < n.length && i < r.length;
                ++i
              ) {
                var o = Ui(n[i], r[i]);
                if (o) return o;
              }
              return Mr(n.length, r.length);
            })(t.arrayValue, e.arrayValue);
          case 10:
            return (function (t, e) {
              var n = t.fields || {},
                r = Object.keys(n),
                i = e.fields || {},
                o = Object.keys(i);
              r.sort(), o.sort();
              for (var s = 0; s < r.length && s < o.length; ++s) {
                var u = Mr(r[s], o[s]);
                if (0 !== u) return u;
                u = Ui(n[r[s]], i[o[s]]);
                if (0 !== u) return u;
              }
              return Mr(r.length, o.length);
            })(t.mapValue, e.mapValue);
          default:
            throw Cr();
        }
      }
      function ji(t, e) {
        if (
          "string" == typeof t &&
          "string" == typeof e &&
          t.length === e.length
        )
          return Mr(t, e);
        var n = Si(t),
          t = Si(e),
          e = Mr(n.seconds, t.seconds);
        return 0 !== e ? e : Mr(n.nanos, t.nanos);
      }
      function Fi(t) {
        return (function s(t) {
          return "nullValue" in t
            ? "null"
            : "booleanValue" in t
            ? "" + t.booleanValue
            : "integerValue" in t
            ? "" + t.integerValue
            : "doubleValue" in t
            ? "" + t.doubleValue
            : "timestampValue" in t
            ? (function (t) {
                var t = Si(t);
                return "time(" + t.seconds + "," + t.nanos + ")";
              })(t.timestampValue)
            : "stringValue" in t
            ? t.stringValue
            : "bytesValue" in t
            ? Di(t.bytesValue).toBase64()
            : "referenceValue" in t
            ? ((e = t.referenceValue), di.ft(e).toString())
            : "geoPointValue" in t
            ? "geo(" + (e = t.geoPointValue).latitude + "," + e.longitude + ")"
            : "arrayValue" in t
            ? (function (t) {
                for (
                  var e = "[", n = !0, r = 0, i = t.values || [];
                  r < i.length;
                  r++
                )
                  n ? (n = !1) : (e += ","), (e += s(i[r]));
                return e + "]";
              })(t.arrayValue)
            : "mapValue" in t
            ? (function (t) {
                for (
                  var e = "{",
                    n = !0,
                    r = 0,
                    i = Object.keys(t.fields || {}).sort();
                  r < i.length;
                  r++
                ) {
                  var o = i[r];
                  n ? (n = !1) : (e += ","), (e += o + ":" + s(t.fields[o]));
                }
                return e + "}";
              })(t.mapValue)
            : Cr();
          var e;
        })(t);
      }
      function qi(t, e) {
        return {
          referenceValue:
            "projects/" +
            t.projectId +
            "/databases/" +
            t.database +
            "/documents/" +
            e.path.rt(),
        };
      }
      function Bi(t) {
        return t && "integerValue" in t;
      }
      function Gi(t) {
        return !!t && "arrayValue" in t;
      }
      function zi(t) {
        return t && "nullValue" in t;
      }
      function Hi(t) {
        return t && "doubleValue" in t && isNaN(Number(t.doubleValue));
      }
      function Qi(t) {
        return t && "mapValue" in t;
      }
      var Yi =
          ((Wi.empty = function () {
            return new Wi({ mapValue: {} });
          }),
          (Wi.prototype.field = function (t) {
            if (t.et()) return this.proto;
            for (var e = this.proto, n = 0; n < t.length - 1; ++n) {
              if (!e.mapValue.fields) return null;
              if (!Qi((e = e.mapValue.fields[t.get(n)]))) return null;
            }
            return (e = (e.mapValue.fields || {})[t.tt()]) || null;
          }),
          (Wi.prototype.isEqual = function (t) {
            return Vi(this.proto, t.proto);
          }),
          Wi),
        Ki =
          ((Xi.prototype.set = function (t, e) {
            return this.Rt(t, e), this;
          }),
          (Xi.prototype.delete = function (t) {
            return this.Rt(t, null), this;
          }),
          (Xi.prototype.Rt = function (t, e) {
            for (var n = this.At, r = 0; r < t.length - 1; ++r)
              var i = t.get(r),
                o = n.get(i),
                n =
                  (o instanceof Map ||
                    ((o =
                      o && 10 === Ri(o)
                        ? new Map(Object.entries(o.mapValue.fields || {}))
                        : new Map()),
                    n.set(i, o)),
                  o);
            n.set(t.tt(), e);
          }),
          (Xi.prototype.Pt = function () {
            var t = this.yt(pi.ct(), this.At);
            return null != t ? new Yi(t) : this.It;
          }),
          (Xi.prototype.yt = function (r, t) {
            var i = this,
              o = !1,
              e = this.It.field(r),
              s = Qi(e) ? Object.assign({}, e.mapValue.fields) : {};
            return (
              t.forEach(function (t, e) {
                var n;
                t instanceof Map
                  ? null != (n = i.yt(r.child(e), t)) && ((s[e] = n), (o = !0))
                  : null !== t
                  ? ((s[e] = t), (o = !0))
                  : s.hasOwnProperty(e) && (delete s[e], (o = !0));
              }),
              o ? { mapValue: { fields: s } } : null
            );
          }),
          Xi);
      function Xi(t) {
        void 0 === t && (t = Yi.empty()), (this.It = t), (this.At = new Map());
      }
      function Wi(t) {
        this.proto = t;
      }
      var Ji,
        Zi,
        $i,
        o = function (t, e) {
          (this.key = t), (this.version = e);
        },
        to =
          (h(so, ($i = o)),
          (so.prototype.field = function (t) {
            return this.gt.field(t);
          }),
          (so.prototype.data = function () {
            return this.gt;
          }),
          (so.prototype.bt = function () {
            return this.gt.proto;
          }),
          (so.prototype.isEqual = function (t) {
            return (
              t instanceof so &&
              this.key.isEqual(t.key) &&
              this.version.isEqual(t.version) &&
              this.Vt === t.Vt &&
              this.hasCommittedMutations === t.hasCommittedMutations &&
              this.gt.isEqual(t.gt)
            );
          }),
          (so.prototype.toString = function () {
            return (
              "Document(" +
              this.key +
              ", " +
              this.version +
              ", " +
              this.gt.toString() +
              ", {hasLocalMutations: " +
              this.Vt +
              "}), {hasCommittedMutations: " +
              this.hasCommittedMutations +
              "})"
            );
          }),
          Object.defineProperty(so.prototype, "hasPendingWrites", {
            get: function () {
              return this.Vt || this.hasCommittedMutations;
            },
            enumerable: !1,
            configurable: !0,
          }),
          so),
        eo =
          (h(oo, (Zi = o)),
          (oo.prototype.toString = function () {
            return "NoDocument(" + this.key + ", " + this.version + ")";
          }),
          Object.defineProperty(oo.prototype, "hasPendingWrites", {
            get: function () {
              return this.hasCommittedMutations;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (oo.prototype.isEqual = function (t) {
            return (
              t instanceof oo &&
              t.hasCommittedMutations === this.hasCommittedMutations &&
              t.version.isEqual(this.version) &&
              t.key.isEqual(this.key)
            );
          }),
          oo),
        no =
          (h(io, (Ji = o)),
          (io.prototype.toString = function () {
            return "UnknownDocument(" + this.key + ", " + this.version + ")";
          }),
          Object.defineProperty(io.prototype, "hasPendingWrites", {
            get: function () {
              return !0;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (io.prototype.isEqual = function (t) {
            return (
              t instanceof io &&
              t.version.isEqual(this.version) &&
              t.key.isEqual(this.key)
            );
          }),
          io),
        ro = function (t, e, n, r, i, o, s) {
          void 0 === e && (e = null),
            void 0 === n && (n = []),
            void 0 === r && (r = []),
            void 0 === i && (i = null),
            void 0 === o && (o = null),
            void 0 === s && (s = null),
            (this.path = t),
            (this.collectionGroup = e),
            (this.orderBy = n),
            (this.filters = r),
            (this.limit = i),
            (this.startAt = o),
            (this.endAt = s),
            (this.vt = null);
        };
      function io() {
        return (null !== Ji && Ji.apply(this, arguments)) || this;
      }
      function oo(t, e, n) {
        var r = this;
        return (
          ((r = Zi.call(this, t, e) || this).hasCommittedMutations = !(
            !n || !n.hasCommittedMutations
          )),
          r
        );
      }
      function so(t, e, n, r) {
        var i = this;
        return (
          ((i = $i.call(this, t, e) || this).gt = n),
          (i.Vt = !!r.Vt),
          (i.hasCommittedMutations = !!r.hasCommittedMutations),
          i
        );
      }
      function uo(t, e, n, r, i, o, s) {
        return new ro(
          t,
          (e = void 0 === e ? null : e),
          (n = void 0 === n ? [] : n),
          (r = void 0 === r ? [] : r),
          (i = void 0 === i ? null : i),
          (o = void 0 === o ? null : o),
          (s = void 0 === s ? null : s)
        );
      }
      function ao(t) {
        var e = t;
        return (
          null === e.vt &&
            ((t = e.path.rt()),
            null !== e.collectionGroup && (t += "|cg:" + e.collectionGroup),
            (t += "|f:"),
            (t += e.filters
              .map(function (t) {
                return (t = t).field.rt() + t.op.toString() + Fi(t.value);
              })
              .join(",")),
            (t += "|ob:"),
            (t += e.orderBy
              .map(function (t) {
                return (t = t).field.rt() + t.dir;
              })
              .join(",")),
            Pi(e.limit) || ((t += "|l:"), (t += e.limit)),
            e.startAt && ((t += "|lb:"), (t += Uo(e.startAt))),
            e.endAt && ((t += "|ub:"), (t += Uo(e.endAt))),
            (e.vt = t)),
          e.vt
        );
      }
      function co(t, e) {
        if (t.limit !== e.limit) return !1;
        if (t.orderBy.length !== e.orderBy.length) return !1;
        for (var n, r, i = 0; i < t.orderBy.length; i++)
          if (
            ((n = t.orderBy[i]),
            (r = e.orderBy[i]),
            n.dir !== r.dir || !n.field.isEqual(r.field))
          )
            return !1;
        if (t.filters.length !== e.filters.length) return !1;
        for (var o, s, u = 0; u < t.filters.length; u++)
          if (
            ((o = t.filters[u]),
            (s = e.filters[u]),
            o.op !== s.op || !o.field.isEqual(s.field) || !Vi(o.value, s.value))
          )
            return !1;
        return (
          t.collectionGroup === e.collectionGroup &&
          !!t.path.isEqual(e.path) &&
          !!qo(t.startAt, e.startAt) &&
          qo(t.endAt, e.endAt)
        );
      }
      function ho(t) {
        return (
          di.wt(t.path) && null === t.collectionGroup && 0 === t.filters.length
        );
      }
      var fo,
        lo =
          (h(po, (fo = function () {})),
          (po.create = function (t, e, n) {
            return t.ut()
              ? "in" === e || "not-in" === e
                ? this.St(t, e, n)
                : new mo(t, e, n)
              : "array-contains" === e
              ? new Do(t, n)
              : "in" === e
              ? new Oo(t, n)
              : "not-in" === e
              ? new ko(t, n)
              : "array-contains-any" === e
              ? new Po(t, n)
              : new po(t, e, n);
          }),
          (po.St = function (t, e, n) {
            return new ("in" === e ? bo : wo)(t, n);
          }),
          (po.prototype.matches = function (t) {
            t = t.field(this.field);
            return "!=" === this.op
              ? null !== t && this.Dt(Ui(t, this.value))
              : null !== t &&
                  Ri(this.value) === Ri(t) &&
                  this.Dt(Ui(t, this.value));
          }),
          (po.prototype.Dt = function (t) {
            switch (this.op) {
              case "<":
                return t < 0;
              case "<=":
                return t <= 0;
              case "==":
                return 0 === t;
              case "!=":
                return 0 !== t;
              case ">":
                return 0 < t;
              case ">=":
                return 0 <= t;
              default:
                return Cr();
            }
          }),
          (po.prototype.Ct = function () {
            return 0 <= ["<", "<=", ">", ">=", "!=", "not-in"].indexOf(this.op);
          }),
          po);
      function po(t, e, n) {
        var r = this;
        return (
          ((r = fo.call(this) || this).field = t), (r.op = e), (r.value = n), r
        );
      }
      var yo,
        vo,
        go,
        mo =
          (h(Io, (go = lo)),
          (Io.prototype.matches = function (t) {
            t = di.H(t.key, this.key);
            return this.Dt(t);
          }),
          Io),
        bo =
          (h(Eo, (vo = lo)),
          (Eo.prototype.matches = function (e) {
            return this.keys.some(function (t) {
              return t.isEqual(e.key);
            });
          }),
          Eo),
        wo =
          (h(_o, (yo = lo)),
          (_o.prototype.matches = function (e) {
            return !this.keys.some(function (t) {
              return t.isEqual(e.key);
            });
          }),
          _o);
      function _o(t, e) {
        var n = this;
        return ((n = yo.call(this, t, "not-in", e) || this).keys = To(0, e)), n;
      }
      function Eo(t, e) {
        var n = this;
        return ((n = vo.call(this, t, "in", e) || this).keys = To(0, e)), n;
      }
      function Io(t, e, n) {
        var r = this;
        return (
          ((r = go.call(this, t, e, n) || this).key = di.ft(n.referenceValue)),
          r
        );
      }
      function To(t, e) {
        return (
          (null === (e = e.arrayValue) || void 0 === e ? void 0 : e.values) ||
          []
        ).map(function (t) {
          return di.ft(t.referenceValue);
        });
      }
      var No,
        Ao,
        So,
        xo,
        Do =
          (h(Mo, (xo = lo)),
          (Mo.prototype.matches = function (t) {
            t = t.field(this.field);
            return Gi(t) && Mi(t.arrayValue, this.value);
          }),
          Mo),
        Oo =
          (h(Vo, (So = lo)),
          (Vo.prototype.matches = function (t) {
            t = t.field(this.field);
            return null !== t && Mi(this.value.arrayValue, t);
          }),
          Vo),
        ko =
          (h(Ro, (Ao = lo)),
          (Ro.prototype.matches = function (t) {
            if (Mi(this.value.arrayValue, { nullValue: "NULL_VALUE" }))
              return !1;
            t = t.field(this.field);
            return null !== t && !Mi(this.value.arrayValue, t);
          }),
          Ro),
        Po =
          (h(Lo, (No = lo)),
          (Lo.prototype.matches = function (t) {
            var e = this,
              t = t.field(this.field);
            return (
              !(!Gi(t) || !t.arrayValue.values) &&
              t.arrayValue.values.some(function (t) {
                return Mi(e.value.arrayValue, t);
              })
            );
          }),
          Lo),
        Co = function (t, e) {
          (this.position = t), (this.before = e);
        };
      function Lo(t, e) {
        return No.call(this, t, "array-contains-any", e) || this;
      }
      function Ro(t, e) {
        return Ao.call(this, t, "not-in", e) || this;
      }
      function Vo(t, e) {
        return So.call(this, t, "in", e) || this;
      }
      function Mo(t, e) {
        return xo.call(this, t, "array-contains", e) || this;
      }
      function Uo(t) {
        return (t.before ? "b" : "a") + ":" + t.position.map(Fi).join(",");
      }
      var jo = function (t, e) {
        void 0 === e && (e = "asc"), (this.field = t), (this.dir = e);
      };
      function Fo(t, e, n) {
        for (var r = 0, i = 0; i < t.position.length; i++) {
          var o = e[i],
            s = t.position[i],
            r = o.field.ut()
              ? di.H(di.ft(s.referenceValue), n.key)
              : Ui(s, n.field(o.field));
          if (("desc" === o.dir && (r *= -1), 0 !== r)) break;
        }
        return t.before ? r <= 0 : r < 0;
      }
      function qo(t, e) {
        if (null === t) return null === e;
        if (null === e) return !1;
        if (t.before !== e.before || t.position.length !== e.position.length)
          return !1;
        for (var n = 0; n < t.position.length; n++)
          if (!Vi(t.position[n], e.position[n])) return !1;
        return !0;
      }
      var Bo = function (t, e, n, r, i, o, s, u) {
        void 0 === e && (e = null),
          void 0 === n && (n = []),
          void 0 === r && (r = []),
          void 0 === i && (i = null),
          void 0 === o && (o = "F"),
          void 0 === s && (s = null),
          void 0 === u && (u = null),
          (this.path = t),
          (this.collectionGroup = e),
          (this.xt = n),
          (this.filters = r),
          (this.limit = i),
          (this.limitType = o),
          (this.startAt = s),
          (this.endAt = u),
          (this.Nt = null),
          (this.$t = null),
          this.startAt,
          this.endAt;
      };
      function Go(t, e, n, r, i, o, s, u) {
        return new Bo(t, e, n, r, i, o, s, u);
      }
      function zo(t) {
        return new Bo(t);
      }
      function Ho(t) {
        return !Pi(t.limit) && "F" === t.limitType;
      }
      function Qo(t) {
        return !Pi(t.limit) && "L" === t.limitType;
      }
      function Yo(t) {
        return 0 < t.xt.length ? t.xt[0].field : null;
      }
      function Ko(t) {
        for (var e = 0, n = t.filters; e < n.length; e++) {
          var r = n[e];
          if (r.Ct()) return r.field;
        }
        return null;
      }
      function Xo(t) {
        return null !== t.collectionGroup;
      }
      function Wo(t) {
        var e = t;
        if (null === e.Nt) {
          e.Nt = [];
          var n = Ko(e),
            t = Yo(e);
          if (null !== n && null === t)
            n.ut() || e.Nt.push(new jo(n)), e.Nt.push(new jo(pi.ht(), "asc"));
          else {
            for (var r = !1, i = 0, o = e.xt; i < o.length; i++) {
              var s = o[i];
              e.Nt.push(s), s.field.ut() && (r = !0);
            }
            r ||
              ((n = 0 < e.xt.length ? e.xt[e.xt.length - 1].dir : "asc"),
              e.Nt.push(new jo(pi.ht(), n)));
          }
        }
        return e.Nt;
      }
      function Jo(t) {
        var e = t;
        if (!e.$t)
          if ("F" === e.limitType)
            e.$t = uo(
              e.path,
              e.collectionGroup,
              Wo(e),
              e.filters,
              e.limit,
              e.startAt,
              e.endAt
            );
          else {
            for (var n = [], r = 0, i = Wo(e); r < i.length; r++) {
              var o = i[r],
                s = "desc" === o.dir ? "asc" : "desc";
              n.push(new jo(o.field, s));
            }
            var u = e.endAt ? new Co(e.endAt.position, !e.endAt.before) : null,
              t = e.startAt
                ? new Co(e.startAt.position, !e.startAt.before)
                : null;
            e.$t = uo(e.path, e.collectionGroup, n, e.filters, e.limit, u, t);
          }
        return e.$t;
      }
      function Zo(t, e, n) {
        return new Bo(
          t.path,
          t.collectionGroup,
          t.xt.slice(),
          t.filters.slice(),
          e,
          n,
          t.startAt,
          t.endAt
        );
      }
      function $o(t, e) {
        return co(Jo(t), Jo(e)) && t.limitType === e.limitType;
      }
      function ts(t) {
        return ao(Jo(t)) + "|lt:" + t.limitType;
      }
      function es(t) {
        return (
          "Query(target=" +
          ((e = Jo(t)),
          (n = e.path.rt()),
          null !== e.collectionGroup &&
            (n += " collectionGroup=" + e.collectionGroup),
          0 < e.filters.length &&
            (n +=
              ", filters: [" +
              e.filters
                .map(function (t) {
                  return (t = t).field.rt() + " " + t.op + " " + Fi(t.value);
                })
                .join(", ") +
              "]"),
          Pi(e.limit) || (n += ", limit: " + e.limit),
          0 < e.orderBy.length &&
            (n +=
              ", orderBy: [" +
              e.orderBy
                .map(function (t) {
                  return (t = t).field.rt() + " (" + t.dir + ")";
                })
                .join(", ") +
              "]"),
          e.startAt && (n += ", startAt: " + Uo(e.startAt)),
          e.endAt && (n += ", endAt: " + Uo(e.endAt)),
          "Target(" + n + ")") +
          "; limitType=" +
          t.limitType +
          ")"
        );
        var e, n;
      }
      function ns(i, t) {
        return (
          (e = i),
          (n = t.key.path),
          (null !== e.collectionGroup
            ? t.key.dt(e.collectionGroup) && e.path.nt(n)
            : di.wt(e.path)
            ? e.path.isEqual(n)
            : e.path.st(n)) &&
            (function (t) {
              for (var e = 0, n = i.xt; e < n.length; e++) {
                var r = n[e];
                if (!r.field.ut() && null === t.field(r.field)) return;
              }
              return 1;
            })(t) &&
            (function (t) {
              for (var e = 0, n = i.filters; e < n.length; e++)
                if (!n[e].matches(t)) return;
              return 1;
            })(t) &&
            ((n = t),
            (!(t = i).startAt || Fo(t.startAt, Wo(t), n)) &&
              (!t.endAt || !Fo(t.endAt, Wo(t), n)))
        );
        var e, n;
      }
      function rs(u) {
        return function (t, e) {
          for (var n = !1, r = 0, i = Wo(u); r < i.length; r++) {
            var o = i[r],
              s = (function (t, r, e) {
                var n = t.field.ut()
                  ? di.H(r.key, e.key)
                  : (function (t, e) {
                      var n = r.field(t),
                        t = e.field(t);
                      return null !== n && null !== t ? Ui(n, t) : Cr();
                    })(t.field, e);
                switch (t.dir) {
                  case "asc":
                    return n;
                  case "desc":
                    return -1 * n;
                  default:
                    return Cr();
                }
              })(o, t, e);
            if (0 !== s) return s;
            n = n || o.field.ut();
          }
          return 0;
        };
      }
      var is =
        ((os.prototype.kt = function (t) {
          return new os(
            this.target,
            this.targetId,
            this.Ft,
            t,
            this.Ot,
            this.lastLimboFreeSnapshotVersion,
            this.resumeToken
          );
        }),
        (os.prototype.Mt = function (t, e) {
          return new os(
            this.target,
            this.targetId,
            this.Ft,
            this.sequenceNumber,
            e,
            this.lastLimboFreeSnapshotVersion,
            t
          );
        }),
        (os.prototype.Lt = function (t) {
          return new os(
            this.target,
            this.targetId,
            this.Ft,
            this.sequenceNumber,
            this.Ot,
            t,
            this.resumeToken
          );
        }),
        os);
      function os(t, e, n, r, i, o, s) {
        void 0 === i && (i = hi.min()),
          void 0 === o && (o = hi.min()),
          void 0 === s && (s = Fr.T),
          (this.target = t),
          (this.targetId = e),
          (this.Ft = n),
          (this.sequenceNumber = r),
          (this.Ot = i),
          (this.lastLimboFreeSnapshotVersion = o),
          (this.resumeToken = s);
      }
      function ss(t, e) {
        if (t.Bt) {
          if (isNaN(e)) return { doubleValue: "NaN" };
          if (e === 1 / 0) return { doubleValue: "Infinity" };
          if (e === -1 / 0) return { doubleValue: "-Infinity" };
        }
        return { doubleValue: Ci(e) ? "-0" : e };
      }
      function us(t) {
        return { integerValue: "" + t };
      }
      function as(t, e) {
        return Li(e) ? us(e) : ss(t, e);
      }
      Ie = function () {
        this.qt = void 0;
      };
      function cs(t, e) {
        return t instanceof Es
          ? Bi((t = e)) || (t && "doubleValue" in t)
            ? e
            : { integerValue: 0 }
          : null;
      }
      var hs,
        fs,
        ls = (h(ys, (fs = Ie)), ys),
        ps = (h(ds, (hs = Ie)), ds);
      function ds(t) {
        var e = this;
        return ((e = hs.call(this) || this).elements = t), e;
      }
      function ys() {
        return (null !== fs && fs.apply(this, arguments)) || this;
      }
      function vs(t, e) {
        for (var n = Ns(e), r = 0, i = t.elements; r < i.length; r++)
          !(function (e) {
            n.some(function (t) {
              return Vi(t, e);
            }) || n.push(e);
          })(i[r]);
        return { arrayValue: { values: n } };
      }
      var gs,
        ms = (h(bs, (gs = Ie)), bs);
      function bs(t) {
        var e = this;
        return ((e = gs.call(this) || this).elements = t), e;
      }
      function ws(t, e) {
        for (var n = Ns(e), r = 0, i = t.elements; r < i.length; r++)
          !(function (e) {
            n = n.filter(function (t) {
              return !Vi(t, e);
            });
          })(i[r]);
        return { arrayValue: { values: n } };
      }
      var _s,
        Es = (h(Is, (_s = Ie)), Is);
      function Is(t, e) {
        var n = this;
        return ((n = _s.call(this) || this).Qt = t), (n.Ut = e), n;
      }
      function Ts(t) {
        return xi(t.integerValue || t.doubleValue);
      }
      function Ns(t) {
        return Gi(t) && t.arrayValue.values ? t.arrayValue.values.slice() : [];
      }
      function As(t, e) {
        (this.version = t), (this.transformResults = e);
      }
      var Ss = function (t, e) {
          (this.field = t), (this.transform = e);
        },
        xs =
          ((Ds.Kt = function () {
            return new Ds();
          }),
          (Ds.exists = function (t) {
            return new Ds(void 0, t);
          }),
          (Ds.updateTime = function (t) {
            return new Ds(t);
          }),
          Object.defineProperty(Ds.prototype, "Wt", {
            get: function () {
              return void 0 === this.updateTime && void 0 === this.exists;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (Ds.prototype.isEqual = function (t) {
            return (
              this.exists === t.exists &&
              (this.updateTime
                ? !!t.updateTime && this.updateTime.isEqual(t.updateTime)
                : !t.updateTime)
            );
          }),
          Ds);
      function Ds(t, e) {
        (this.updateTime = t), (this.exists = e);
      }
      function Os(t, e) {
        return void 0 !== t.updateTime
          ? e instanceof to && e.version.isEqual(t.updateTime)
          : void 0 === t.exists || t.exists === e instanceof to;
      }
      o = function () {};
      function ks(t, e, n) {
        return t instanceof Vs
          ? (function (t, e, n) {
              if (!Os(t.jt, e)) return e;
              var r = t.value,
                n = Bs(t.fieldTransforms, n, e),
                r = Gs(t.fieldTransforms, r, n),
                e = Cs(e);
              return new to(t.key, e, r, { Vt: !0 });
            })(t, e, n)
          : t instanceof Ms
          ? (function (t, e, n) {
              if (!Os(t.jt, e)) return e;
              var r = Cs(e),
                e = Fs(t, e, Bs(t.fieldTransforms, n, e));
              return new to(t.key, r, e, { Vt: !0 });
            })(t, e, n)
          : ((e = e), Os((t = t).jt, e) ? new eo(t.key, hi.min()) : e);
      }
      function Ps(t, e) {
        return (
          t.type === e.type &&
          !!t.key.isEqual(e.key) &&
          !!t.jt.isEqual(e.jt) &&
          ((n = t.fieldTransforms),
          (r = e.fieldTransforms),
          !!(
            (void 0 === n && void 0 === r) ||
            (n &&
              r &&
              Ur(n, r, function (t, e) {
                return (
                  (e = e),
                  (t = t).field.isEqual(e.field) &&
                    ((t = t.transform),
                    (e = e.transform),
                    (t instanceof ps && e instanceof ps) ||
                    (t instanceof ms && e instanceof ms)
                      ? Ur(t.elements, e.elements, Vi)
                      : t instanceof Es && e instanceof Es
                      ? Vi(t.Ut, e.Ut)
                      : t instanceof ls && e instanceof ls)
                );
              }))
          )) &&
          (0 === t.type
            ? t.value.isEqual(e.value)
            : 1 !== t.type || (t.data.isEqual(e.data) && t.Gt.isEqual(e.Gt)))
        );
        var n, r;
      }
      function Cs(t) {
        return t instanceof to ? t.version : hi.min();
      }
      var Ls,
        Rs,
        Vs = (h(js, (Rs = o)), js),
        Ms = (h(Us, (Ls = o)), Us);
      function Us(t, e, n, r, i) {
        void 0 === i && (i = []);
        var o = this;
        return (
          ((o = Ls.call(this) || this).key = t),
          (o.data = e),
          (o.Gt = n),
          (o.jt = r),
          (o.fieldTransforms = i),
          (o.type = 1),
          o
        );
      }
      function js(t, e, n, r) {
        void 0 === r && (r = []);
        var i = this;
        return (
          ((i = Rs.call(this) || this).key = t),
          (i.value = e),
          (i.jt = n),
          (i.fieldTransforms = r),
          (i.type = 0),
          i
        );
      }
      function Fs(t, e, n) {
        var r, i, o;
        return (
          (i = t),
          (e = r = e instanceof to ? e.data() : Yi.empty()),
          (o = new Ki(e)),
          i.Gt.fields.forEach(function (t) {
            var e;
            t.et() ||
              (null !== (e = i.data.field(t)) ? o.set(t, e) : o.delete(t));
          }),
          (r = o.Pt()),
          Gs(t.fieldTransforms, r, n)
        );
      }
      function qs(t, e, n) {
        var r = [];
        Lr(t.length === n.length);
        for (var i = 0; i < n.length; i++) {
          var o = t[i],
            s = o.transform,
            u = null;
          e instanceof to && (u = e.field(o.field)),
            r.push(
              ((o = s),
              (s = u),
              (u = n[i]),
              o instanceof ps ? vs(o, s) : o instanceof ms ? ws(o, s) : u)
            );
        }
        return r;
      }
      function Bs(t, e, n) {
        for (var r, i = [], o = 0, s = t; o < s.length; o++) {
          var u = s[o],
            a = u.transform,
            c = null;
          n instanceof to && (c = n.field(u.field)),
            i.push(
              ((r = c),
              (u = e),
              (c = void 0),
              (a = a) instanceof ls
                ? ((c = {
                    fields: {
                      __type__: { stringValue: "server_timestamp" },
                      __local_write_time__: {
                        timestampValue: {
                          seconds: u.seconds,
                          nanos: u.nanoseconds,
                        },
                      },
                    },
                  }),
                  r && (c.fields.__previous_value__ = r),
                  { mapValue: c })
                : a instanceof ps
                ? vs(a, r)
                : a instanceof ms
                ? ws(a, r)
                : ((a = cs((c = a), r)),
                  (r = Ts(a) + Ts(c.Ut)),
                  Bi(a) && Bi(c.Ut) ? us(r) : ss(c.Qt, r)))
            );
        }
        return i;
      }
      function Gs(t, e, n) {
        for (var r = new Ki(e), i = 0; i < t.length; i++) {
          var o = t[i];
          r.set(o.field, n[i]);
        }
        return r.Pt();
      }
      function zs(t) {
        this.count = t;
      }
      var Hs,
        Qs,
        Ys,
        Ks = (h(Js, (Ys = o)), Js),
        Xs = (h(Ws, (Qs = o)), Ws);
      function Ws(t, e) {
        var n = this;
        return (
          ((n = Qs.call(this) || this).key = t),
          (n.jt = e),
          (n.type = 3),
          (n.fieldTransforms = []),
          n
        );
      }
      function Js(t, e) {
        var n = this;
        return (
          ((n = Ys.call(this) || this).key = t),
          (n.jt = e),
          (n.type = 2),
          (n.fieldTransforms = []),
          n
        );
      }
      function Zs(t) {
        switch (t) {
          case Gr.OK:
            return Cr(), 0;
          case Gr.CANCELLED:
          case Gr.UNKNOWN:
          case Gr.DEADLINE_EXCEEDED:
          case Gr.RESOURCE_EXHAUSTED:
          case Gr.INTERNAL:
          case Gr.UNAVAILABLE:
          case Gr.UNAUTHENTICATED:
            return;
          case Gr.INVALID_ARGUMENT:
          case Gr.NOT_FOUND:
          case Gr.ALREADY_EXISTS:
          case Gr.PERMISSION_DENIED:
          case Gr.FAILED_PRECONDITION:
          case Gr.ABORTED:
          case Gr.OUT_OF_RANGE:
          case Gr.UNIMPLEMENTED:
          case Gr.DATA_LOSS:
            return 1;
          default:
            return Cr(), 0;
        }
      }
      function $s(t) {
        if (void 0 === t) return Or("GRPC error has no .code"), Gr.UNKNOWN;
        switch (t) {
          case Hs.OK:
            return Gr.OK;
          case Hs.CANCELLED:
            return Gr.CANCELLED;
          case Hs.UNKNOWN:
            return Gr.UNKNOWN;
          case Hs.DEADLINE_EXCEEDED:
            return Gr.DEADLINE_EXCEEDED;
          case Hs.RESOURCE_EXHAUSTED:
            return Gr.RESOURCE_EXHAUSTED;
          case Hs.INTERNAL:
            return Gr.INTERNAL;
          case Hs.UNAVAILABLE:
            return Gr.UNAVAILABLE;
          case Hs.UNAUTHENTICATED:
            return Gr.UNAUTHENTICATED;
          case Hs.INVALID_ARGUMENT:
            return Gr.INVALID_ARGUMENT;
          case Hs.NOT_FOUND:
            return Gr.NOT_FOUND;
          case Hs.ALREADY_EXISTS:
            return Gr.ALREADY_EXISTS;
          case Hs.PERMISSION_DENIED:
            return Gr.PERMISSION_DENIED;
          case Hs.FAILED_PRECONDITION:
            return Gr.FAILED_PRECONDITION;
          case Hs.ABORTED:
            return Gr.ABORTED;
          case Hs.OUT_OF_RANGE:
            return Gr.OUT_OF_RANGE;
          case Hs.UNIMPLEMENTED:
            return Gr.UNIMPLEMENTED;
          case Hs.DATA_LOSS:
            return Gr.DATA_LOSS;
          default:
            return Cr();
        }
      }
      ((Ie = Hs = Hs || {})[(Ie.OK = 0)] = "OK"),
        (Ie[(Ie.CANCELLED = 1)] = "CANCELLED"),
        (Ie[(Ie.UNKNOWN = 2)] = "UNKNOWN"),
        (Ie[(Ie.INVALID_ARGUMENT = 3)] = "INVALID_ARGUMENT"),
        (Ie[(Ie.DEADLINE_EXCEEDED = 4)] = "DEADLINE_EXCEEDED"),
        (Ie[(Ie.NOT_FOUND = 5)] = "NOT_FOUND"),
        (Ie[(Ie.ALREADY_EXISTS = 6)] = "ALREADY_EXISTS"),
        (Ie[(Ie.PERMISSION_DENIED = 7)] = "PERMISSION_DENIED"),
        (Ie[(Ie.UNAUTHENTICATED = 16)] = "UNAUTHENTICATED"),
        (Ie[(Ie.RESOURCE_EXHAUSTED = 8)] = "RESOURCE_EXHAUSTED"),
        (Ie[(Ie.FAILED_PRECONDITION = 9)] = "FAILED_PRECONDITION"),
        (Ie[(Ie.ABORTED = 10)] = "ABORTED"),
        (Ie[(Ie.OUT_OF_RANGE = 11)] = "OUT_OF_RANGE"),
        (Ie[(Ie.UNIMPLEMENTED = 12)] = "UNIMPLEMENTED"),
        (Ie[(Ie.INTERNAL = 13)] = "INTERNAL"),
        (Ie[(Ie.UNAVAILABLE = 14)] = "UNAVAILABLE"),
        (Ie[(Ie.DATA_LOSS = 15)] = "DATA_LOSS");
      var tu =
          ((ou.prototype.zt = function (t, e) {
            return new ou(
              this.H,
              this.root.zt(t, e, this.H).copy(null, null, nu.Ht, null, null)
            );
          }),
          (ou.prototype.remove = function (t) {
            return new ou(
              this.H,
              this.root.remove(t, this.H).copy(null, null, nu.Ht, null, null)
            );
          }),
          (ou.prototype.get = function (t) {
            for (var e = this.root; !e.et(); ) {
              var n = this.H(t, e.key);
              if (0 === n) return e.value;
              n < 0 ? (e = e.left) : 0 < n && (e = e.right);
            }
            return null;
          }),
          (ou.prototype.indexOf = function (t) {
            for (var e = 0, n = this.root; !n.et(); ) {
              var r = this.H(t, n.key);
              if (0 === r) return e + n.left.size;
              n = r < 0 ? n.left : ((e += n.left.size + 1), n.right);
            }
            return -1;
          }),
          (ou.prototype.et = function () {
            return this.root.et();
          }),
          Object.defineProperty(ou.prototype, "size", {
            get: function () {
              return this.root.size;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (ou.prototype.Jt = function () {
            return this.root.Jt();
          }),
          (ou.prototype.Yt = function () {
            return this.root.Yt();
          }),
          (ou.prototype.Xt = function (t) {
            return this.root.Xt(t);
          }),
          (ou.prototype.forEach = function (n) {
            this.Xt(function (t, e) {
              return n(t, e), !1;
            });
          }),
          (ou.prototype.toString = function () {
            var n = [];
            return (
              this.Xt(function (t, e) {
                return n.push(t + ":" + e), !1;
              }),
              "{" + n.join(", ") + "}"
            );
          }),
          (ou.prototype.Zt = function (t) {
            return this.root.Zt(t);
          }),
          (ou.prototype.te = function () {
            return new eu(this.root, null, this.H, !1);
          }),
          (ou.prototype.ee = function (t) {
            return new eu(this.root, t, this.H, !1);
          }),
          (ou.prototype.ne = function () {
            return new eu(this.root, null, this.H, !0);
          }),
          (ou.prototype.se = function (t) {
            return new eu(this.root, t, this.H, !0);
          }),
          ou),
        eu =
          ((iu.prototype.oe = function () {
            var t = this.re.pop(),
              e = { key: t.key, value: t.value };
            if (this.ie)
              for (t = t.left; !t.et(); ) this.re.push(t), (t = t.right);
            else for (t = t.right; !t.et(); ) this.re.push(t), (t = t.left);
            return e;
          }),
          (iu.prototype.ce = function () {
            return 0 < this.re.length;
          }),
          (iu.prototype.ae = function () {
            if (0 === this.re.length) return null;
            var t = this.re[this.re.length - 1];
            return { key: t.key, value: t.value };
          }),
          iu),
        nu =
          ((ru.prototype.copy = function (t, e, n, r, i) {
            return new ru(
              null != t ? t : this.key,
              null != e ? e : this.value,
              null != n ? n : this.color,
              null != r ? r : this.left,
              null != i ? i : this.right
            );
          }),
          (ru.prototype.et = function () {
            return !1;
          }),
          (ru.prototype.Xt = function (t) {
            return (
              this.left.Xt(t) || t(this.key, this.value) || this.right.Xt(t)
            );
          }),
          (ru.prototype.Zt = function (t) {
            return (
              this.right.Zt(t) || t(this.key, this.value) || this.left.Zt(t)
            );
          }),
          (ru.prototype.min = function () {
            return this.left.et() ? this : this.left.min();
          }),
          (ru.prototype.Jt = function () {
            return this.min().key;
          }),
          (ru.prototype.Yt = function () {
            return this.right.et() ? this.key : this.right.Yt();
          }),
          (ru.prototype.zt = function (t, e, n) {
            var r = this,
              i = n(t, r.key);
            return (r =
              i < 0
                ? r.copy(null, null, null, r.left.zt(t, e, n), null)
                : 0 === i
                ? r.copy(null, e, null, null, null)
                : r.copy(null, null, null, null, r.right.zt(t, e, n))).ue();
          }),
          (ru.prototype.he = function () {
            if (this.left.et()) return ru.EMPTY;
            var t = this;
            return (t = (t =
              !t.left.le() && !t.left.left.le() ? t._e() : t).copy(
              null,
              null,
              null,
              t.left.he(),
              null
            )).ue();
          }),
          (ru.prototype.remove = function (t, e) {
            var n,
              r = this;
            if (e(t, r.key) < 0)
              r = (r = !(r.left.et() || r.left.le() || r.left.left.le())
                ? r._e()
                : r).copy(null, null, null, r.left.remove(t, e), null);
            else {
              if (
                0 ===
                e(
                  t,
                  (r = !(
                    (r = r.left.le() ? r.fe() : r).right.et() ||
                    r.right.le() ||
                    r.right.left.le()
                  )
                    ? r.de()
                    : r).key
                )
              ) {
                if (r.right.et()) return ru.EMPTY;
                (n = r.right.min()),
                  (r = r.copy(n.key, n.value, null, null, r.right.he()));
              }
              r = r.copy(null, null, null, null, r.right.remove(t, e));
            }
            return r.ue();
          }),
          (ru.prototype.le = function () {
            return this.color;
          }),
          (ru.prototype.ue = function () {
            var t = this;
            return (t =
              (t =
                (t = t.right.le() && !t.left.le() ? t.we() : t).left.le() &&
                t.left.left.le()
                  ? t.fe()
                  : t).left.le() && t.right.le()
                ? t.Ee()
                : t);
          }),
          (ru.prototype._e = function () {
            var t = this.Ee();
            return (t = t.right.left.le()
              ? (t = (t = t.copy(
                  null,
                  null,
                  null,
                  null,
                  t.right.fe()
                )).we()).Ee()
              : t);
          }),
          (ru.prototype.de = function () {
            var t = this.Ee();
            return (t = t.left.left.le() ? (t = t.fe()).Ee() : t);
          }),
          (ru.prototype.we = function () {
            var t = this.copy(null, null, ru.RED, null, this.right.left);
            return this.right.copy(null, null, this.color, t, null);
          }),
          (ru.prototype.fe = function () {
            var t = this.copy(null, null, ru.RED, this.left.right, null);
            return this.left.copy(null, null, this.color, null, t);
          }),
          (ru.prototype.Ee = function () {
            var t = this.left.copy(null, null, !this.left.color, null, null),
              e = this.right.copy(null, null, !this.right.color, null, null);
            return this.copy(null, null, !this.color, t, e);
          }),
          (ru.prototype.Te = function () {
            var t = this.Ie();
            return Math.pow(2, t) <= this.size + 1;
          }),
          (ru.prototype.Ie = function () {
            if (this.le() && this.left.le()) throw Cr();
            if (this.right.le()) throw Cr();
            var t = this.left.Ie();
            if (t !== this.right.Ie()) throw Cr();
            return t + (this.le() ? 0 : 1);
          }),
          ru);
      function ru(t, e, n, r, i) {
        (this.key = t),
          (this.value = e),
          (this.color = null != n ? n : ru.RED),
          (this.left = null != r ? r : ru.EMPTY),
          (this.right = null != i ? i : ru.EMPTY),
          (this.size = this.left.size + 1 + this.right.size);
      }
      function iu(t, e, n, r) {
        (this.ie = r), (this.re = []);
        for (var i = 1; !t.et(); )
          if (((i = e ? n(t.key, e) : 1), r && (i *= -1), i < 0))
            t = this.ie ? t.left : t.right;
          else {
            if (0 === i) {
              this.re.push(t);
              break;
            }
            this.re.push(t), (t = this.ie ? t.right : t.left);
          }
      }
      function ou(t, e) {
        (this.H = t), (this.root = e || nu.EMPTY);
      }
      function su() {
        this.size = 0;
      }
      (nu.EMPTY = null),
        (nu.RED = !0),
        (nu.Ht = !1),
        (nu.EMPTY =
          (Object.defineProperty(su.prototype, "key", {
            get: function () {
              throw Cr();
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(su.prototype, "value", {
            get: function () {
              throw Cr();
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(su.prototype, "color", {
            get: function () {
              throw Cr();
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(su.prototype, "left", {
            get: function () {
              throw Cr();
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(su.prototype, "right", {
            get: function () {
              throw Cr();
            },
            enumerable: !1,
            configurable: !0,
          }),
          (su.prototype.copy = function (t, e, n, r, i) {
            return this;
          }),
          (su.prototype.zt = function (t, e, n) {
            return new nu(t, e);
          }),
          (su.prototype.remove = function (t, e) {
            return this;
          }),
          (su.prototype.et = function () {
            return !0;
          }),
          (su.prototype.Xt = function (t) {
            return !1;
          }),
          (su.prototype.Zt = function (t) {
            return !1;
          }),
          (su.prototype.Jt = function () {
            return null;
          }),
          (su.prototype.Yt = function () {
            return null;
          }),
          (su.prototype.le = function () {
            return !1;
          }),
          (su.prototype.Te = function () {
            return !0;
          }),
          (su.prototype.Ie = function () {
            return 0;
          }),
          new su()));
      var uu =
          ((fu.prototype.has = function (t) {
            return null !== this.data.get(t);
          }),
          (fu.prototype.first = function () {
            return this.data.Jt();
          }),
          (fu.prototype.last = function () {
            return this.data.Yt();
          }),
          Object.defineProperty(fu.prototype, "size", {
            get: function () {
              return this.data.size;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (fu.prototype.indexOf = function (t) {
            return this.data.indexOf(t);
          }),
          (fu.prototype.forEach = function (n) {
            this.data.Xt(function (t, e) {
              return n(t), !1;
            });
          }),
          (fu.prototype.me = function (t, e) {
            for (var n = this.data.ee(t[0]); n.ce(); ) {
              var r = n.oe();
              if (0 <= this.H(r.key, t[1])) return;
              e(r.key);
            }
          }),
          (fu.prototype.Ae = function (t, e) {
            for (
              var n = void 0 !== e ? this.data.ee(e) : this.data.te();
              n.ce();

            )
              if (!t(n.oe().key)) return;
          }),
          (fu.prototype.Re = function (t) {
            t = this.data.ee(t);
            return t.ce() ? t.oe().key : null;
          }),
          (fu.prototype.te = function () {
            return new au(this.data.te());
          }),
          (fu.prototype.ee = function (t) {
            return new au(this.data.ee(t));
          }),
          (fu.prototype.add = function (t) {
            return this.copy(this.data.remove(t).zt(t, !0));
          }),
          (fu.prototype.delete = function (t) {
            return this.has(t) ? this.copy(this.data.remove(t)) : this;
          }),
          (fu.prototype.et = function () {
            return this.data.et();
          }),
          (fu.prototype.Pe = function (t) {
            var e = this;
            return (
              e.size < t.size && ((e = t), (t = this)),
              t.forEach(function (t) {
                e = e.add(t);
              }),
              e
            );
          }),
          (fu.prototype.isEqual = function (t) {
            if (!(t instanceof fu)) return !1;
            if (this.size !== t.size) return !1;
            for (var e = this.data.te(), n = t.data.te(); e.ce(); ) {
              var r = e.oe().key,
                i = n.oe().key;
              if (0 !== this.H(r, i)) return !1;
            }
            return !0;
          }),
          (fu.prototype.it = function () {
            var e = [];
            return (
              this.forEach(function (t) {
                e.push(t);
              }),
              e
            );
          }),
          (fu.prototype.toString = function () {
            var e = [];
            return (
              this.forEach(function (t) {
                return e.push(t);
              }),
              "SortedSet(" + e.toString() + ")"
            );
          }),
          (fu.prototype.copy = function (t) {
            var e = new fu(this.H);
            return (e.data = t), e;
          }),
          fu),
        au =
          ((hu.prototype.oe = function () {
            return this.ye.oe().key;
          }),
          (hu.prototype.ce = function () {
            return this.ye.ce();
          }),
          hu),
        cu = new tu(di.H);
      function hu(t) {
        this.ye = t;
      }
      function fu(t) {
        (this.H = t), (this.data = new tu(this.H));
      }
      var lu = new tu(di.H);
      var pu = new tu(di.H);
      var du = new uu(di.H);
      function yu() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        for (var n = du, r = 0, i = t; r < i.length; r++)
          var o = i[r], n = n.add(o);
        return n;
      }
      var vu = new uu(Mr);
      var gu =
          ((Cu.pe = function (t) {
            return new Cu(t.H);
          }),
          (Cu.prototype.has = function (t) {
            return null != this.ge.get(t);
          }),
          (Cu.prototype.get = function (t) {
            return this.ge.get(t);
          }),
          (Cu.prototype.first = function () {
            return this.Ve.Jt();
          }),
          (Cu.prototype.last = function () {
            return this.Ve.Yt();
          }),
          (Cu.prototype.et = function () {
            return this.Ve.et();
          }),
          (Cu.prototype.indexOf = function (t) {
            t = this.ge.get(t);
            return t ? this.Ve.indexOf(t) : -1;
          }),
          Object.defineProperty(Cu.prototype, "size", {
            get: function () {
              return this.Ve.size;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (Cu.prototype.forEach = function (n) {
            this.Ve.Xt(function (t, e) {
              return n(t), !1;
            });
          }),
          (Cu.prototype.add = function (t) {
            var e = this.delete(t.key);
            return e.copy(e.ge.zt(t.key, t), e.Ve.zt(t, null));
          }),
          (Cu.prototype.delete = function (t) {
            var e = this.get(t);
            return e ? this.copy(this.ge.remove(t), this.Ve.remove(e)) : this;
          }),
          (Cu.prototype.isEqual = function (t) {
            if (!(t instanceof Cu)) return !1;
            if (this.size !== t.size) return !1;
            for (var e = this.Ve.te(), n = t.Ve.te(); e.ce(); ) {
              var r = e.oe().key,
                i = n.oe().key;
              if (!r.isEqual(i)) return !1;
            }
            return !0;
          }),
          (Cu.prototype.toString = function () {
            var e = [];
            return (
              this.forEach(function (t) {
                e.push(t.toString());
              }),
              0 === e.length
                ? "DocumentSet ()"
                : "DocumentSet (\n  " + e.join("  \n") + "\n)"
            );
          }),
          (Cu.prototype.copy = function (t, e) {
            var n = new Cu();
            return (n.H = this.H), (n.ge = t), (n.Ve = e), n;
          }),
          Cu),
        mu =
          ((Pu.prototype.track = function (t) {
            var e = t.doc.key,
              n = this.be.get(e);
            !n || (0 !== t.type && 3 === n.type)
              ? (this.be = this.be.zt(e, t))
              : 3 === t.type && 1 !== n.type
              ? (this.be = this.be.zt(e, { type: n.type, doc: t.doc }))
              : 2 === t.type && 2 === n.type
              ? (this.be = this.be.zt(e, { type: 2, doc: t.doc }))
              : 2 === t.type && 0 === n.type
              ? (this.be = this.be.zt(e, { type: 0, doc: t.doc }))
              : 1 === t.type && 0 === n.type
              ? (this.be = this.be.remove(e))
              : 1 === t.type && 2 === n.type
              ? (this.be = this.be.zt(e, { type: 1, doc: n.doc }))
              : 0 === t.type && 1 === n.type
              ? (this.be = this.be.zt(e, { type: 2, doc: t.doc }))
              : Cr();
          }),
          (Pu.prototype.ve = function () {
            var n = [];
            return (
              this.be.Xt(function (t, e) {
                n.push(e);
              }),
              n
            );
          }),
          Pu),
        bu =
          ((ku.Ne = function (t, e, n, r) {
            var i = [];
            return (
              e.forEach(function (t) {
                i.push({ type: 0, doc: t });
              }),
              new ku(t, e, gu.pe(e), i, n, r, !0, !1)
            );
          }),
          Object.defineProperty(ku.prototype, "hasPendingWrites", {
            get: function () {
              return !this.De.et();
            },
            enumerable: !1,
            configurable: !0,
          }),
          (ku.prototype.isEqual = function (t) {
            if (
              !(
                this.fromCache === t.fromCache &&
                this.Ce === t.Ce &&
                this.De.isEqual(t.De) &&
                $o(this.query, t.query) &&
                this.docs.isEqual(t.docs) &&
                this.Se.isEqual(t.Se)
              )
            )
              return !1;
            var e = this.docChanges,
              n = t.docChanges;
            if (e.length !== n.length) return !1;
            for (var r = 0; r < e.length; r++)
              if (e[r].type !== n[r].type || !e[r].doc.isEqual(n[r].doc))
                return !1;
            return !0;
          }),
          ku),
        wu =
          ((Ou.Me = function (t, e) {
            var n = new Map();
            return n.set(t, _u.Le(t, e)), new Ou(hi.min(), n, vu, cu, yu());
          }),
          Ou),
        _u =
          ((Du.Le = function (t, e) {
            return new Du(Fr.T, e, yu(), yu(), yu());
          }),
          Du),
        Eu = function (t, e, n, r) {
          (this.Ke = t),
            (this.removedTargetIds = e),
            (this.key = n),
            (this.We = r);
        },
        Iu = function (t, e) {
          (this.targetId = t), (this.je = e);
        },
        Tu = function (t, e, n, r) {
          void 0 === n && (n = Fr.T),
            void 0 === r && (r = null),
            (this.state = t),
            (this.targetIds = e),
            (this.resumeToken = n),
            (this.cause = r);
        },
        Nu =
          (Object.defineProperty(xu.prototype, "Be", {
            get: function () {
              return this.Je;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(xu.prototype, "resumeToken", {
            get: function () {
              return this.He;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(xu.prototype, "Xe", {
            get: function () {
              return 0 !== this.Ge;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(xu.prototype, "Ze", {
            get: function () {
              return this.Ye;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (xu.prototype.tn = function (t) {
            0 < t.l() && ((this.Ye = !0), (this.He = t));
          }),
          (xu.prototype.en = function () {
            var n = yu(),
              r = yu(),
              i = yu();
            return (
              this.ze.forEach(function (t, e) {
                switch (e) {
                  case 0:
                    n = n.add(t);
                    break;
                  case 2:
                    r = r.add(t);
                    break;
                  case 1:
                    i = i.add(t);
                    break;
                  default:
                    Cr();
                }
              }),
              new _u(this.He, this.Je, n, r, i)
            );
          }),
          (xu.prototype.nn = function () {
            (this.Ye = !1), (this.ze = Ru());
          }),
          (xu.prototype.sn = function (t, e) {
            (this.Ye = !0), (this.ze = this.ze.zt(t, e));
          }),
          (xu.prototype.rn = function (t) {
            (this.Ye = !0), (this.ze = this.ze.remove(t));
          }),
          (xu.prototype.on = function () {
            this.Ge += 1;
          }),
          (xu.prototype.cn = function () {
            --this.Ge;
          }),
          (xu.prototype.an = function () {
            (this.Ye = !0), (this.Je = !0);
          }),
          xu),
        Au =
          ((Su.prototype.dn = function (t) {
            for (var e = 0, n = t.Ke; e < n.length; e++) {
              var r = n[e];
              t.We instanceof to
                ? this.wn(r, t.We)
                : t.We instanceof eo && this.En(r, t.key, t.We);
            }
            for (var i = 0, o = t.removedTargetIds; i < o.length; i++)
              (r = o[i]), this.En(r, t.key, t.We);
          }),
          (Su.prototype.Tn = function (n) {
            var r = this;
            this.In(n, function (t) {
              var e = r.mn(t);
              switch (n.state) {
                case 0:
                  r.An(t) && e.tn(n.resumeToken);
                  break;
                case 1:
                  e.cn(), e.Xe || e.nn(), e.tn(n.resumeToken);
                  break;
                case 2:
                  e.cn(), e.Xe || r.removeTarget(t);
                  break;
                case 3:
                  r.An(t) && (e.an(), e.tn(n.resumeToken));
                  break;
                case 4:
                  r.An(t) && (r.Rn(t), e.tn(n.resumeToken));
                  break;
                default:
                  Cr();
              }
            });
          }),
          (Su.prototype.In = function (t, n) {
            var r = this;
            0 < t.targetIds.length
              ? t.targetIds.forEach(n)
              : this.hn.forEach(function (t, e) {
                  r.An(e) && n(e);
                });
          }),
          (Su.prototype.Pn = function (t) {
            var e = t.targetId,
              n = t.je.count,
              t = this.yn(e);
            t &&
              (ho((t = t.target))
                ? 0 === n
                  ? ((t = new di(t.path)), this.En(e, t, new eo(t, hi.min())))
                  : Lr(1 === n)
                : this.gn(e) !== n && (this.Rn(e), (this.fn = this.fn.add(e))));
          }),
          (Su.prototype.Vn = function (r) {
            var i = this,
              o = new Map();
            this.hn.forEach(function (t, e) {
              var n = i.yn(e);
              n &&
                (t.Be &&
                  ho(n.target) &&
                  ((n = new di(n.target.path)),
                  null !== i.ln.get(n) ||
                    i.pn(e, n) ||
                    i.En(e, n, new eo(n, r))),
                t.Ze && (o.set(e, t.en()), t.nn()));
            });
            var s = yu();
            this._n.forEach(function (t, e) {
              var n = !0;
              e.Ae(function (t) {
                t = i.yn(t);
                return !t || 2 === t.Ft || (n = !1);
              }),
                n && (s = s.add(t));
            });
            var t = new wu(r, o, this.fn, this.ln, s);
            return (this.ln = cu), (this._n = Lu()), (this.fn = new uu(Mr)), t;
          }),
          (Su.prototype.wn = function (t, e) {
            var n;
            this.An(t) &&
              ((n = this.pn(t, e.key) ? 2 : 0),
              this.mn(t).sn(e.key, n),
              (this.ln = this.ln.zt(e.key, e)),
              (this._n = this._n.zt(e.key, this.bn(e.key).add(t))));
          }),
          (Su.prototype.En = function (t, e, n) {
            var r;
            this.An(t) &&
              ((r = this.mn(t)),
              this.pn(t, e) ? r.sn(e, 1) : r.rn(e),
              (this._n = this._n.zt(e, this.bn(e).delete(t))),
              n && (this.ln = this.ln.zt(e, n)));
          }),
          (Su.prototype.removeTarget = function (t) {
            this.hn.delete(t);
          }),
          (Su.prototype.gn = function (t) {
            var e = this.mn(t).en();
            return this.un.vn(t).size + e.qe.size - e.Qe.size;
          }),
          (Su.prototype.on = function (t) {
            this.mn(t).on();
          }),
          (Su.prototype.mn = function (t) {
            var e = this.hn.get(t);
            return e || ((e = new Nu()), this.hn.set(t, e)), e;
          }),
          (Su.prototype.bn = function (t) {
            var e = this._n.get(t);
            return e || ((e = new uu(Mr)), (this._n = this._n.zt(t, e))), e;
          }),
          (Su.prototype.An = function (t) {
            var e = null !== this.yn(t);
            return (
              e || Dr("WatchChangeAggregator", "Detected inactive target", t), e
            );
          }),
          (Su.prototype.yn = function (t) {
            var e = this.hn.get(t);
            return e && e.Xe ? null : this.un.Sn(t);
          }),
          (Su.prototype.Rn = function (e) {
            var n = this;
            this.hn.set(e, new Nu()),
              this.un.vn(e).forEach(function (t) {
                n.En(e, t, null);
              });
          }),
          (Su.prototype.pn = function (t, e) {
            return this.un.vn(t).has(e);
          }),
          Su);
      function Su(t) {
        (this.un = t),
          (this.hn = new Map()),
          (this.ln = cu),
          (this._n = Lu()),
          (this.fn = new uu(Mr));
      }
      function xu() {
        (this.Ge = 0),
          (this.ze = Ru()),
          (this.He = Fr.T),
          (this.Je = !1),
          (this.Ye = !0);
      }
      function Du(t, e, n, r, i) {
        (this.resumeToken = t),
          (this.Be = e),
          (this.qe = n),
          (this.Ue = r),
          (this.Qe = i);
      }
      function Ou(t, e, n, r, i) {
        (this.Ot = t),
          (this.$e = e),
          (this.Fe = n),
          (this.Oe = r),
          (this.ke = i);
      }
      function ku(t, e, n, r, i, o, s, u) {
        (this.query = t),
          (this.docs = e),
          (this.Se = n),
          (this.docChanges = r),
          (this.De = i),
          (this.fromCache = o),
          (this.Ce = s),
          (this.xe = u);
      }
      function Pu() {
        this.be = new tu(di.H);
      }
      function Cu(n) {
        (this.H = n
          ? function (t, e) {
              return n(t, e) || di.H(t.key, e.key);
            }
          : function (t, e) {
              return di.H(t.key, e.key);
            }),
          (this.ge = lu),
          (this.Ve = new tu(this.H));
      }
      function Lu() {
        return new tu(di.H);
      }
      function Ru() {
        return new tu(di.H);
      }
      var Vu = { asc: "ASCENDING", desc: "DESCENDING" },
        Mu = {
          "<": "LESS_THAN",
          "<=": "LESS_THAN_OR_EQUAL",
          ">": "GREATER_THAN",
          ">=": "GREATER_THAN_OR_EQUAL",
          "==": "EQUAL",
          "!=": "NOT_EQUAL",
          "array-contains": "ARRAY_CONTAINS",
          in: "IN",
          "not-in": "NOT_IN",
          "array-contains-any": "ARRAY_CONTAINS_ANY",
        },
        Uu = function (t, e) {
          (this.t = t), (this.Bt = e);
        };
      function ju(t, e) {
        return t.Bt
          ? new Date(1e3 * e.seconds)
              .toISOString()
              .replace(/\.\d*/, "")
              .replace("Z", "") +
              "." +
              ("000000000" + e.nanoseconds).slice(-9) +
              "Z"
          : { seconds: "" + e.seconds, nanos: e.nanoseconds };
      }
      function Fu(t, e) {
        return t.Bt ? e.toBase64() : e.toUint8Array();
      }
      function qu(t) {
        return Lr(!!t), hi.K(((t = Si(t)), new ci(t.seconds, t.nanos)));
      }
      function Bu(t, e) {
        return new fi(["projects", t.projectId, "databases", t.database])
          .child("documents")
          .child(e)
          .rt();
      }
      function Gu(t) {
        t = fi.ot(t);
        return Lr(ca(t)), t;
      }
      function zu(t, e) {
        return Bu(t.t, e.path);
      }
      function Hu(t, e) {
        e = Gu(e);
        if (e.get(1) !== t.t.projectId)
          throw new zr(
            Gr.INVALID_ARGUMENT,
            "Tried to deserialize key from different project: " +
              e.get(1) +
              " vs " +
              t.t.projectId
          );
        if (e.get(3) !== t.t.database)
          throw new zr(
            Gr.INVALID_ARGUMENT,
            "Tried to deserialize key from different database: " +
              e.get(3) +
              " vs " +
              t.t.database
          );
        return new di(Xu(e));
      }
      function Qu(t, e) {
        return Bu(t.t, e);
      }
      function Yu(t) {
        t = Gu(t);
        return 4 === t.length ? fi.ct() : Xu(t);
      }
      function Ku(t) {
        return new fi([
          "projects",
          t.t.projectId,
          "databases",
          t.t.database,
        ]).rt();
      }
      function Xu(t) {
        return Lr(4 < t.length && "documents" === t.get(4)), t.Y(5);
      }
      function Wu(t, e, n) {
        return { name: zu(t, e), fields: n.proto.mapValue.fields };
      }
      function Ju(t, e, n) {
        var r = Hu(t, e.name),
          t = qu(e.updateTime),
          e = new Yi({ mapValue: { fields: e.fields } });
        return new to(r, t, e, { hasCommittedMutations: !!n });
      }
      function Zu(t, e) {
        var n, r, i;
        if (e instanceof Vs) n = { update: Wu(t, e.key, e.value) };
        else if (e instanceof Ks) n = { delete: zu(t, e.key) };
        else if (e instanceof Ms)
          n = {
            update: Wu(t, e.key, e.data),
            updateMask:
              ((i = e.Gt),
              (r = []),
              i.fields.forEach(function (t) {
                return r.push(t.rt());
              }),
              { fieldPaths: r }),
          };
        else {
          if (!(e instanceof Xs)) return Cr();
          n = { verify: zu(t, e.key) };
        }
        return (
          0 < e.fieldTransforms.length &&
            (n.updateTransforms = e.fieldTransforms.map(function (t) {
              var e = t.transform;
              if (e instanceof ls)
                return {
                  fieldPath: t.field.rt(),
                  setToServerValue: "REQUEST_TIME",
                };
              if (e instanceof ps)
                return {
                  fieldPath: t.field.rt(),
                  appendMissingElements: { values: e.elements },
                };
              if (e instanceof ms)
                return {
                  fieldPath: t.field.rt(),
                  removeAllFromArray: { values: e.elements },
                };
              if (e instanceof Es)
                return { fieldPath: t.field.rt(), increment: e.Ut };
              throw Cr();
            })),
          e.jt.Wt ||
            (n.currentDocument =
              void 0 !== (i = e.jt).updateTime
                ? { updateTime: ((e = t), (t = i.updateTime), ju(e, t.j())) }
                : void 0 !== i.exists
                ? { exists: i.exists }
                : Cr()),
          n
        );
      }
      function $u(e, t) {
        var n = t.currentDocument
            ? void 0 !== (s = t.currentDocument).updateTime
              ? xs.updateTime(qu(s.updateTime))
              : void 0 !== s.exists
              ? xs.exists(s.exists)
              : xs.Kt()
            : xs.Kt(),
          r = t.updateTransforms
            ? t.updateTransforms.map(function (t) {
                return (function (t, e) {
                  var n,
                    r = null;
                  "setToServerValue" in e
                    ? (Lr("REQUEST_TIME" === e.setToServerValue),
                      (r = new ls()))
                    : "appendMissingElements" in e
                    ? ((n = e.appendMissingElements.values || []),
                      (r = new ps(n)))
                    : "removeAllFromArray" in e
                    ? ((n = e.removeAllFromArray.values || []), (r = new ms(n)))
                    : "increment" in e
                    ? (r = new Es(t, e.increment))
                    : Cr();
                  e = pi.lt(e.fieldPath);
                  return new Ss(e, r);
                })(e, t);
              })
            : [];
        if (t.update) {
          t.update.name;
          var i = Hu(e, t.update.name),
            o = new Yi({ mapValue: { fields: t.update.fields } });
          if (t.updateMask) {
            var s =
              ((s = t.updateMask.fieldPaths || []),
              new Ti(
                s.map(function (t) {
                  return pi.lt(t);
                })
              ));
            return new Ms(i, o, s, n, r);
          }
          return new Vs(i, o, n, r);
        }
        if (t.delete) {
          r = Hu(e, t.delete);
          return new Ks(r, n);
        }
        if (t.verify) {
          t = Hu(e, t.verify);
          return new Xs(t, n);
        }
        return Cr();
      }
      function ta(t, e) {
        return { documents: [Qu(t, e.path)] };
      }
      function ea(t, e) {
        var n = { structuredQuery: {} },
          r = e.path;
        null !== e.collectionGroup
          ? ((n.parent = Qu(t, r)),
            (n.structuredQuery.from = [
              { collectionId: e.collectionGroup, allDescendants: !0 },
            ]))
          : ((n.parent = Qu(t, r.X())),
            (n.structuredQuery.from = [{ collectionId: r.tt() }]));
        r = (function (t) {
          if (0 !== t.length) {
            t = t.map(function (t) {
              if ("==" === t.op) {
                if (Hi(t.value))
                  return { unaryFilter: { field: oa(t.field), op: "IS_NAN" } };
                if (zi(t.value))
                  return { unaryFilter: { field: oa(t.field), op: "IS_NULL" } };
              } else if ("!=" === t.op) {
                if (Hi(t.value))
                  return {
                    unaryFilter: { field: oa(t.field), op: "IS_NOT_NAN" },
                  };
                if (zi(t.value))
                  return {
                    unaryFilter: { field: oa(t.field), op: "IS_NOT_NULL" },
                  };
              }
              return {
                fieldFilter: {
                  field: oa(t.field),
                  op: ((e = t.op), Mu[e]),
                  value: t.value,
                },
              };
              var e;
            });
            return 1 === t.length
              ? t[0]
              : { compositeFilter: { op: "AND", filters: t } };
          }
        })(e.filters);
        r && (n.structuredQuery.where = r);
        r = (function (t) {
          if (0 !== t.length)
            return t.map(function (t) {
              return {
                field: oa((t = t).field),
                direction: ((t = t.dir), Vu[t]),
              };
            });
        })(e.orderBy);
        r && (n.structuredQuery.orderBy = r);
        (r = e.limit), (r = t.Bt || Pi(r) ? r : { value: r });
        return (
          null !== r && (n.structuredQuery.limit = r),
          e.startAt && (n.structuredQuery.startAt = ra(e.startAt)),
          e.endAt && (n.structuredQuery.endAt = ra(e.endAt)),
          n
        );
      }
      function na(t) {
        var e = Yu(t.parent),
          n = t.structuredQuery,
          r = n.from ? n.from.length : 0,
          i = null;
        0 < r &&
          (Lr(1 === r),
          (u = n.from[0]).allDescendants
            ? (i = u.collectionId)
            : (e = e.child(u.collectionId)));
        var o = [];
        n.where &&
          (o = (function e(t) {
            return t
              ? void 0 !== t.unaryFilter
                ? [aa(t)]
                : void 0 !== t.fieldFilter
                ? [ua(t)]
                : void 0 !== t.compositeFilter
                ? t.compositeFilter.filters
                    .map(function (t) {
                      return e(t);
                    })
                    .reduce(function (t, e) {
                      return t.concat(e);
                    })
                : Cr()
              : [];
          })(n.where));
        var s = [],
          t = null,
          r = null,
          u = null;
        return Go(
          e,
          i,
          (s = n.orderBy
            ? n.orderBy.map(function (t) {
                return new jo(
                  sa((e = t).field),
                  (function () {
                    switch (e.direction) {
                      case "ASCENDING":
                        return "asc";
                      case "DESCENDING":
                        return "desc";
                      default:
                        return;
                    }
                  })()
                );
                var e;
              })
            : s),
          o,
          (t = n.limit
            ? Pi((o = "object" == typeof (o = n.limit) ? o.value : o))
              ? null
              : o
            : t),
          "F",
          (r = n.startAt ? ia(n.startAt) : r),
          (u = n.endAt ? ia(n.endAt) : u)
        );
      }
      function ra(t) {
        return { before: t.before, values: t.position };
      }
      function ia(t) {
        var e = !!t.before,
          t = t.values || [];
        return new Co(t, e);
      }
      function oa(t) {
        return { fieldPath: t.rt() };
      }
      function sa(t) {
        return pi.lt(t.fieldPath);
      }
      function ua(t) {
        return lo.create(
          sa(t.fieldFilter.field),
          (function () {
            switch (t.fieldFilter.op) {
              case "EQUAL":
                return "==";
              case "NOT_EQUAL":
                return "!=";
              case "GREATER_THAN":
                return ">";
              case "GREATER_THAN_OR_EQUAL":
                return ">=";
              case "LESS_THAN":
                return "<";
              case "LESS_THAN_OR_EQUAL":
                return "<=";
              case "ARRAY_CONTAINS":
                return "array-contains";
              case "IN":
                return "in";
              case "NOT_IN":
                return "not-in";
              case "ARRAY_CONTAINS_ANY":
                return "array-contains-any";
              case "OPERATOR_UNSPECIFIED":
              default:
                return Cr();
            }
          })(),
          t.fieldFilter.value
        );
      }
      function aa(t) {
        switch (t.unaryFilter.op) {
          case "IS_NAN":
            var e = sa(t.unaryFilter.field);
            return lo.create(e, "==", { doubleValue: NaN });
          case "IS_NULL":
            e = sa(t.unaryFilter.field);
            return lo.create(e, "==", { nullValue: "NULL_VALUE" });
          case "IS_NOT_NAN":
            var n = sa(t.unaryFilter.field);
            return lo.create(n, "!=", { doubleValue: NaN });
          case "IS_NOT_NULL":
            n = sa(t.unaryFilter.field);
            return lo.create(n, "!=", { nullValue: "NULL_VALUE" });
          case "OPERATOR_UNSPECIFIED":
          default:
            return Cr();
        }
      }
      function ca(t) {
        return (
          4 <= t.length && "projects" === t.get(0) && "databases" === t.get(2)
        );
      }
      var ha,
        fa = function () {
          var n = this;
          this.promise = new Promise(function (t, e) {
            (n.resolve = t), (n.reject = e);
          });
        },
        la =
          ((_a.prototype.catch = function (t) {
            return this.next(void 0, t);
          }),
          (_a.prototype.next = function (r, i) {
            var o = this;
            return (
              this.Nn && Cr(),
              (this.Nn = !0),
              this.xn
                ? this.error
                  ? this.$n(i, this.error)
                  : this.Fn(r, this.result)
                : new _a(function (e, n) {
                    (o.Dn = function (t) {
                      o.Fn(r, t).next(e, n);
                    }),
                      (o.Cn = function (t) {
                        o.$n(i, t).next(e, n);
                      });
                  })
            );
          }),
          (_a.prototype.On = function () {
            var n = this;
            return new Promise(function (t, e) {
              n.next(t, e);
            });
          }),
          (_a.prototype.kn = function (t) {
            try {
              var e = t();
              return e instanceof _a ? e : _a.resolve(e);
            } catch (t) {
              return _a.reject(t);
            }
          }),
          (_a.prototype.Fn = function (t, e) {
            return t
              ? this.kn(function () {
                  return t(e);
                })
              : _a.resolve(e);
          }),
          (_a.prototype.$n = function (t, e) {
            return t
              ? this.kn(function () {
                  return t(e);
                })
              : _a.reject(e);
          }),
          (_a.resolve = function (n) {
            return new _a(function (t, e) {
              t(n);
            });
          }),
          (_a.reject = function (n) {
            return new _a(function (t, e) {
              e(n);
            });
          }),
          (_a.Mn = function (t) {
            return new _a(function (e, n) {
              var r = 0,
                i = 0,
                o = !1;
              t.forEach(function (t) {
                ++r,
                  t.next(
                    function () {
                      ++i, o && i === r && e();
                    },
                    function (t) {
                      return n(t);
                    }
                  );
              }),
                (o = !0),
                i === r && e();
            });
          }),
          (_a.Ln = function (t) {
            for (var n = _a.resolve(!1), e = 0, r = t; e < r.length; e++)
              !(function (e) {
                n = n.next(function (t) {
                  return t ? _a.resolve(t) : e();
                });
              })(r[e]);
            return n;
          }),
          (_a.forEach = function (t, n) {
            var r = this,
              i = [];
            return (
              t.forEach(function (t, e) {
                i.push(n.call(r, t, e));
              }),
              this.Mn(i)
            );
          }),
          _a),
        pa =
          ((wa.open = function (t, e, n, r) {
            try {
              return new wa(e, t.transaction(r, n));
            } catch (t) {
              throw new va(e, t);
            }
          }),
          Object.defineProperty(wa.prototype, "qn", {
            get: function () {
              return this.Bn.promise;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (wa.prototype.abort = function (t) {
            t && this.Bn.reject(t),
              this.aborted ||
                (Dr(
                  "SimpleDb",
                  "Aborting transaction:",
                  t ? t.message : "Client-initiated abort"
                ),
                (this.aborted = !0),
                this.transaction.abort());
          }),
          (wa.prototype.store = function (t) {
            t = this.transaction.objectStore(t);
            return new Ia(t);
          }),
          wa),
        da =
          ((ba.delete = function (t) {
            return (
              Dr("SimpleDb", "Removing database:", t),
              Na(window.indexedDB.deleteDatabase(t)).On()
            );
          }),
          (ba.Kn = function () {
            if ("undefined" == typeof indexedDB) return !1;
            if (ba.Wn()) return !0;
            var t = p(),
              e = ba.Qn(t),
              n = 0 < e && e < 10,
              e = ba.jn(t),
              e = 0 < e && e < 4.5;
            return !(
              0 < t.indexOf("MSIE ") ||
              0 < t.indexOf("Trident/") ||
              0 < t.indexOf("Edge/") ||
              n ||
              e
            );
          }),
          (ba.Wn = function () {
            var t;
            return (
              "undefined" != typeof process &&
              "YES" ===
                (null === (t = process.env) || void 0 === t ? void 0 : t.Gn)
            );
          }),
          (ba.zn = function (t, e) {
            return t.store(e);
          }),
          (ba.Qn = function (t) {
            (t = t.match(/i(?:phone|pad|pod) os ([\d_]+)/i)),
              (t = t ? t[1].split("_").slice(0, 2).join(".") : "-1");
            return Number(t);
          }),
          (ba.jn = function (t) {
            (t = t.match(/Android ([\d.]+)/i)),
              (t = t ? t[1].split(".").slice(0, 2).join(".") : "-1");
            return Number(t);
          }),
          (ba.prototype.Hn = function (o) {
            return y(this, void 0, void 0, function () {
              var e,
                i = this;
              return v(this, function (t) {
                switch (t.label) {
                  case 0:
                    return this.db
                      ? [3, 2]
                      : (Dr("SimpleDb", "Opening database:", this.name),
                        (e = this),
                        [
                          4,
                          new Promise(function (e, n) {
                            var r = indexedDB.open(i.name, i.version);
                            (r.onsuccess = function (t) {
                              t = t.target.result;
                              e(t);
                            }),
                              (r.onblocked = function () {
                                n(
                                  new va(
                                    o,
                                    "Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."
                                  )
                                );
                              }),
                              (r.onerror = function (t) {
                                t = t.target.error;
                                "VersionError" === t.name
                                  ? n(
                                      new zr(
                                        Gr.FAILED_PRECONDITION,
                                        "A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh."
                                      )
                                    )
                                  : n(new va(o, t));
                              }),
                              (r.onupgradeneeded = function (t) {
                                Dr(
                                  "SimpleDb",
                                  'Database "' +
                                    i.name +
                                    '" requires upgrade from version:',
                                  t.oldVersion
                                );
                                var e = t.target.result;
                                i.Un.Jn(
                                  e,
                                  r.transaction,
                                  t.oldVersion,
                                  i.version
                                ).next(function () {
                                  Dr(
                                    "SimpleDb",
                                    "Database upgrade to version " +
                                      i.version +
                                      " complete"
                                  );
                                });
                              });
                          }),
                        ]);
                  case 1:
                    (e.db = t.sent()), (t.label = 2);
                  case 2:
                    return [
                      2,
                      (this.Yn &&
                        (this.db.onversionchange = function (t) {
                          return i.Yn(t);
                        }),
                      this.db),
                    ];
                }
              });
            });
          }),
          (ba.prototype.Xn = function (e) {
            (this.Yn = e),
              this.db &&
                (this.db.onversionchange = function (t) {
                  return e(t);
                });
          }),
          (ba.prototype.runTransaction = function (u, n, a, c) {
            return y(this, void 0, void 0, function () {
              var i, o, s, e;
              return v(this, function (t) {
                switch (t.label) {
                  case 0:
                    (i = "readonly" === n),
                      (o = 0),
                      (e = function () {
                        var e, n, r;
                        return v(this, function (t) {
                          switch (t.label) {
                            case 0:
                              ++o, (t.label = 1);
                            case 1:
                              return t.trys.push([1, 4, , 5]), [4, s.Hn(u)];
                            case 2:
                              return (
                                (s.db = t.sent()),
                                (e = pa.open(
                                  s.db,
                                  u,
                                  i ? "readonly" : "readwrite",
                                  a
                                )),
                                (n = c(e)
                                  .catch(function (t) {
                                    return e.abort(t), la.reject(t);
                                  })
                                  .On()),
                                (r = {}),
                                n.catch(function () {}),
                                [4, e.qn]
                              );
                            case 3:
                              return [2, ((r.value = (t.sent(), n)), r)];
                            case 4:
                              return (
                                (n = t.sent()),
                                (r = "FirebaseError" !== n.name && o < 3),
                                Dr(
                                  "SimpleDb",
                                  "Transaction failed with error:",
                                  n.message,
                                  "Retrying:",
                                  r
                                ),
                                s.close(),
                                r ? [3, 5] : [2, { value: Promise.reject(n) }]
                              );
                            case 5:
                              return [2];
                          }
                        });
                      }),
                      (s = this),
                      (t.label = 1);
                  case 1:
                    return [5, e()];
                  case 2:
                    if ("object" == typeof (e = t.sent())) return [2, e.value];
                    t.label = 3;
                  case 3:
                    return [3, 1];
                  case 4:
                    return [2];
                }
              });
            });
          }),
          (ba.prototype.close = function () {
            this.db && this.db.close(), (this.db = void 0);
          }),
          ba),
        ya =
          (Object.defineProperty(ma.prototype, "xn", {
            get: function () {
              return this.ts;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(ma.prototype, "ns", {
            get: function () {
              return this.es;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(ma.prototype, "cursor", {
            set: function (t) {
              this.Zn = t;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (ma.prototype.done = function () {
            this.ts = !0;
          }),
          (ma.prototype.ss = function (t) {
            this.es = t;
          }),
          (ma.prototype.delete = function () {
            return Na(this.Zn.delete());
          }),
          ma),
        va = (h(ga, (ha = zr)), ga);
      function ga(t, e) {
        var n = this;
        return (
          ((n =
            ha.call(
              this,
              Gr.UNAVAILABLE,
              "IndexedDB transaction '" + t + "' failed: " + e
            ) || this).name = "IndexedDbTransactionError"),
          n
        );
      }
      function ma(t) {
        (this.Zn = t), (this.ts = !1), (this.es = null);
      }
      function ba(t, e, n) {
        (this.name = t),
          (this.version = e),
          (this.Un = n),
          12.2 === ba.Qn(p()) &&
            Or(
              "Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround."
            );
      }
      function wa(e, t) {
        var n = this;
        (this.action = e),
          (this.transaction = t),
          (this.aborted = !1),
          (this.Bn = new fa()),
          (this.transaction.oncomplete = function () {
            n.Bn.resolve();
          }),
          (this.transaction.onabort = function () {
            t.error ? n.Bn.reject(new va(e, t.error)) : n.Bn.resolve();
          }),
          (this.transaction.onerror = function (t) {
            t = Sa(t.target.error);
            n.Bn.reject(new va(e, t));
          });
      }
      function _a(t) {
        var e = this;
        (this.Dn = null),
          (this.Cn = null),
          (this.result = void 0),
          (this.error = void 0),
          (this.xn = !1),
          (this.Nn = !1),
          t(
            function (t) {
              (e.xn = !0), (e.result = t), e.Dn && e.Dn(t);
            },
            function (t) {
              (e.xn = !0), (e.error = t), e.Cn && e.Cn(t);
            }
          );
      }
      function Ea(t) {
        return "IndexedDbTransactionError" === t.name;
      }
      var Ia =
        ((Ta.prototype.put = function (t, e) {
          t =
            void 0 !== e
              ? (Dr("SimpleDb", "PUT", this.store.name, t, e),
                this.store.put(e, t))
              : (Dr("SimpleDb", "PUT", this.store.name, "<auto-key>", t),
                this.store.put(t));
          return Na(t);
        }),
        (Ta.prototype.add = function (t) {
          return (
            Dr("SimpleDb", "ADD", this.store.name, t, t), Na(this.store.add(t))
          );
        }),
        (Ta.prototype.get = function (e) {
          var n = this;
          return Na(this.store.get(e)).next(function (t) {
            return (
              void 0 === t && (t = null),
              Dr("SimpleDb", "GET", n.store.name, e, t),
              t
            );
          });
        }),
        (Ta.prototype.delete = function (t) {
          return (
            Dr("SimpleDb", "DELETE", this.store.name, t),
            Na(this.store.delete(t))
          );
        }),
        (Ta.prototype.count = function () {
          return (
            Dr("SimpleDb", "COUNT", this.store.name), Na(this.store.count())
          );
        }),
        (Ta.prototype.rs = function (t, e) {
          var e = this.cursor(this.options(t, e)),
            n = [];
          return this.os(e, function (t, e) {
            n.push(e);
          }).next(function () {
            return n;
          });
        }),
        (Ta.prototype.cs = function (t, e) {
          Dr("SimpleDb", "DELETE ALL", this.store.name);
          e = this.options(t, e);
          e.us = !1;
          e = this.cursor(e);
          return this.os(e, function (t, e, n) {
            return n.delete();
          });
        }),
        (Ta.prototype.hs = function (t, e) {
          e ? (n = t) : ((n = {}), (e = t));
          var n = this.cursor(n);
          return this.os(n, e);
        }),
        (Ta.prototype.ls = function (r) {
          var t = this.cursor({});
          return new la(function (n, e) {
            (t.onerror = function (t) {
              t = Sa(t.target.error);
              e(t);
            }),
              (t.onsuccess = function (t) {
                var e = t.target.result;
                e
                  ? r(e.primaryKey, e.value).next(function (t) {
                      t ? e.continue() : n();
                    })
                  : n();
              });
          });
        }),
        (Ta.prototype.os = function (t, i) {
          var o = [];
          return new la(function (r, e) {
            (t.onerror = function (t) {
              e(t.target.error);
            }),
              (t.onsuccess = function (t) {
                var e,
                  n = t.target.result;
                n
                  ? ((e = new ya(n)),
                    (t = i(n.primaryKey, n.value, e)) instanceof la &&
                      ((t = t.catch(function (t) {
                        return e.done(), la.reject(t);
                      })),
                      o.push(t)),
                    e.xn
                      ? r()
                      : null === e.ns
                      ? n.continue()
                      : n.continue(e.ns))
                  : r();
              });
          }).next(function () {
            return la.Mn(o);
          });
        }),
        (Ta.prototype.options = function (t, e) {
          var n;
          return (
            void 0 !== t && ("string" == typeof t ? (n = t) : (e = t)),
            { index: n, range: e }
          );
        }),
        (Ta.prototype.cursor = function (t) {
          var e = "next";
          if ((t.reverse && (e = "prev"), t.index)) {
            var n = this.store.index(t.index);
            return t.us
              ? n.openKeyCursor(t.range, e)
              : n.openCursor(t.range, e);
          }
          return this.store.openCursor(t.range, e);
        }),
        Ta);
      function Ta(t) {
        this.store = t;
      }
      function Na(t) {
        return new la(function (e, n) {
          (t.onsuccess = function (t) {
            t = t.target.result;
            e(t);
          }),
            (t.onerror = function (t) {
              t = Sa(t.target.error);
              n(t);
            });
        });
      }
      var Aa = !1;
      function Sa(t) {
        var e = da.Qn(p());
        if (12.2 <= e && e < 13) {
          e =
            "An internal error was encountered in the Indexed Database server";
          if (0 <= t.message.indexOf(e)) {
            var n = new zr(
              "internal",
              "IOS_INDEXEDDB_BUG1: IndexedDb has thrown '" +
                e +
                "'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround."
            );
            return (
              Aa ||
                ((Aa = !0),
                setTimeout(function () {
                  throw n;
                }, 0)),
              n
            );
          }
        }
        return t;
      }
      var xa =
        ((Da.Ts = function (t, e, n, r, i) {
          i = new Da(t, e, Date.now() + n, r, i);
          return i.start(n), i;
        }),
        (Da.prototype.start = function (t) {
          var e = this;
          this.Is = setTimeout(function () {
            return e.As();
          }, t);
        }),
        (Da.prototype.Rs = function () {
          return this.As();
        }),
        (Da.prototype.cancel = function (t) {
          null !== this.Is &&
            (this.clearTimeout(),
            this.Es.reject(
              new zr(Gr.CANCELLED, "Operation cancelled" + (t ? ": " + t : ""))
            ));
        }),
        (Da.prototype.As = function () {
          var e = this;
          this._s.Ps(function () {
            return null !== e.Is
              ? (e.clearTimeout(),
                e.op().then(function (t) {
                  return e.Es.resolve(t);
                }))
              : Promise.resolve();
          });
        }),
        (Da.prototype.clearTimeout = function () {
          null !== this.Is &&
            (this.ws(this), clearTimeout(this.Is), (this.Is = null));
        }),
        Da);
      function Da(t, e, n, r, i) {
        (this._s = t),
          (this.fs = e),
          (this.ds = n),
          (this.op = r),
          (this.ws = i),
          (this.Es = new fa()),
          (this.then = this.Es.promise.then.bind(this.Es.promise)),
          this.Es.promise.catch(function (t) {});
      }
      function Oa(t, e) {
        if ((Or("AsyncQueue", e + ": " + t), Ea(t)))
          return new zr(Gr.UNAVAILABLE, e + ": " + t);
        throw t;
      }
      var ka =
          "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",
        o =
          ((Pa.prototype.gs = function (t) {
            this.ys.push(t);
          }),
          (Pa.prototype.Vs = function () {
            this.ys.forEach(function (t) {
              return t();
            });
          }),
          Pa);
      function Pa() {
        this.ys = [];
      }
      function Ca(t) {
        for (var e = "", n = 0; n < t.length; n++)
          0 < e.length && (e = La(e)),
            (e = (function (t, e) {
              for (var n = e, r = t.length, i = 0; i < r; i++) {
                var o = t.charAt(i);
                switch (o) {
                  case "\0":
                    n += "\x01\x10";
                    break;
                  case "\x01":
                    n += "\x01\x11";
                    break;
                  default:
                    n += o;
                }
              }
              return n;
            })(t.get(n), e));
        return La(e);
      }
      function La(t) {
        return t + "\x01\x01";
      }
      function Ra(t) {
        var e = t.length;
        if ((Lr(2 <= e), 2 === e))
          return Lr("\x01" === t.charAt(0) && "\x01" === t.charAt(1)), fi.ct();
        for (var n = e - 2, r = [], i = "", o = 0; o < e; ) {
          var s = t.indexOf("\x01", o);
          switch (((s < 0 || n < s) && Cr(), t.charAt(s + 1))) {
            case "\x01":
              var u = t.substring(o, s),
                a = void 0;
              0 === i.length ? (a = u) : ((a = i += u), (i = "")), r.push(a);
              break;
            case "\x10":
              (i += t.substring(o, s)), (i += "\0");
              break;
            case "\x11":
              i += t.substring(o, s + 1);
              break;
            default:
              Cr();
          }
          o = s + 2;
        }
        return new fi(r);
      }
      function Va(t, e, n) {
        (this.ownerId = t),
          (this.allowTabSynchronization = e),
          (this.leaseTimestampMs = n);
      }
      var Ma = function (t, e) {
        (this.seconds = t), (this.nanoseconds = e);
      };
      (Va.store = "owner"), (Va.key = "owner");
      function Ua(t, e, n) {
        (this.userId = t),
          (this.lastAcknowledgedBatchId = e),
          (this.lastStreamToken = n);
      }
      (Ua.store = "mutationQueues"), (Ua.keyPath = "userId");
      function ja(t, e, n, r, i) {
        (this.userId = t),
          (this.batchId = e),
          (this.localWriteTimeMs = n),
          (this.baseMutations = r),
          (this.mutations = i);
      }
      (ja.store = "mutations"),
        (ja.keyPath = "batchId"),
        (ja.userMutationsIndex = "userMutationsIndex"),
        (ja.userMutationsKeyPath = ["userId", "batchId"]);
      var Fa =
        ((qa.prefixForUser = function (t) {
          return [t];
        }),
        (qa.prefixForPath = function (t, e) {
          return [t, Ca(e)];
        }),
        (qa.key = function (t, e, n) {
          return [t, Ca(e), n];
        }),
        qa);
      function qa() {}
      (Fa.store = "documentMutations"), (Fa.PLACEHOLDER = new Fa());
      function Ba(t, e) {
        (this.path = t), (this.readTime = e);
      }
      function Ga(t, e) {
        (this.path = t), (this.version = e);
      }
      var za = function (t, e, n, r, i, o) {
        (this.unknownDocument = t),
          (this.noDocument = e),
          (this.document = n),
          (this.hasCommittedMutations = r),
          (this.readTime = i),
          (this.parentPath = o);
      };
      (za.store = "remoteDocuments"),
        (za.readTimeIndex = "readTimeIndex"),
        (za.readTimeIndexPath = "readTime"),
        (za.collectionReadTimeIndex = "collectionReadTimeIndex"),
        (za.collectionReadTimeIndexPath = ["parentPath", "readTime"]);
      function Ha(t) {
        this.byteSize = t;
      }
      (Ha.store = "remoteDocumentGlobal"), (Ha.key = "remoteDocumentGlobalKey");
      function Qa(t, e, n, r, i, o, s) {
        (this.targetId = t),
          (this.canonicalId = e),
          (this.readTime = n),
          (this.resumeToken = r),
          (this.lastListenSequenceNumber = i),
          (this.lastLimboFreeSnapshotVersion = o),
          (this.query = s);
      }
      (Qa.store = "targets"),
        (Qa.keyPath = "targetId"),
        (Qa.queryTargetsIndexName = "queryTargetsIndex"),
        (Qa.queryTargetsKeyPath = ["canonicalId", "targetId"]);
      var Ya = function (t, e, n) {
        (this.targetId = t), (this.path = e), (this.sequenceNumber = n);
      };
      (Ya.store = "targetDocuments"),
        (Ya.keyPath = ["targetId", "path"]),
        (Ya.documentTargetsIndex = "documentTargetsIndex"),
        (Ya.documentTargetsKeyPath = ["path", "targetId"]);
      function Ka(t, e, n, r) {
        (this.highestTargetId = t),
          (this.highestListenSequenceNumber = e),
          (this.lastRemoteSnapshotVersion = n),
          (this.targetCount = r);
      }
      (Ka.key = "targetGlobalKey"), (Ka.store = "targetGlobal");
      function Xa(t, e) {
        (this.collectionId = t), (this.parent = e);
      }
      (Xa.store = "collectionParents"),
        (Xa.keyPath = ["collectionId", "parent"]);
      function Wa(t, e, n, r) {
        (this.clientId = t),
          (this.updateTimeMs = e),
          (this.networkEnabled = n),
          (this.inForeground = r);
      }
      (Wa.store = "clientMetadata"), (Wa.keyPath = "clientId");
      function Ja(t, e, n) {
        (this.bundleId = t), (this.createTime = e), (this.version = n);
      }
      (Ja.store = "bundles"), (Ja.keyPath = "bundleId");
      function Za(t, e, n) {
        (this.name = t), (this.readTime = e), (this.bundledQuery = n);
      }
      (Za.store = "namedQueries"), (Za.keyPath = "name");
      var $a,
        tc = f(
          f(
            f(
              f(
                [
                  Ua.store,
                  ja.store,
                  Fa.store,
                  za.store,
                  Qa.store,
                  Va.store,
                  Ka.store,
                  Ya.store,
                ],
                [Wa.store]
              ),
              [Ha.store]
            ),
            [Xa.store]
          ),
          [Ja.store, Za.store]
        ),
        ec = (h(nc, ($a = o)), nc);
      function nc(t, e) {
        var n = this;
        return ((n = $a.call(this) || this).ps = t), (n.bs = e), n;
      }
      function rc(t, e) {
        return da.zn(t.ps, e);
      }
      var ic =
          ((ac.prototype.Ss = function (t, e, n) {
            for (
              var r, i, o, s, u, a, c = n.Ds, h = 0;
              h < this.mutations.length;
              h++
            ) {
              var f = this.mutations[h];
              f.key.isEqual(t) &&
                ((r = f),
                (i = e),
                (o = c[h]),
                (f = a = u = s = void 0),
                (e =
                  r instanceof Vs
                    ? ((u = o),
                      (a = (s = r).value),
                      (f = qs(s.fieldTransforms, i, u.transformResults)),
                      (a = Gs(s.fieldTransforms, a, f)),
                      new to(s.key, u.version, a, {
                        hasCommittedMutations: !0,
                      }))
                    : r instanceof Ms
                    ? (function (t, e, n) {
                        if (!Os(t.jt, e)) return new no(t.key, n.version);
                        e = Fs(
                          t,
                          e,
                          qs(t.fieldTransforms, e, n.transformResults)
                        );
                        return new to(t.key, n.version, e, {
                          hasCommittedMutations: !0,
                        });
                      })(r, i, o)
                    : new eo(r.key, o.version, { hasCommittedMutations: !0 })));
            }
            return e;
          }),
          (ac.prototype.Cs = function (t, e) {
            for (var n = 0, r = this.baseMutations; n < r.length; n++)
              (i = r[n]).key.isEqual(t) && (e = ks(i, e, this.vs));
            for (var i, o = 0, s = this.mutations; o < s.length; o++)
              (i = s[o]).key.isEqual(t) && (e = ks(i, e, this.vs));
            return e;
          }),
          (ac.prototype.xs = function (n) {
            var r = this,
              i = n;
            return (
              this.mutations.forEach(function (t) {
                var e = r.Cs(t.key, n.get(t.key));
                e && (i = i.zt(t.key, e));
              }),
              i
            );
          }),
          (ac.prototype.keys = function () {
            return this.mutations.reduce(function (t, e) {
              return t.add(e.key);
            }, yu());
          }),
          (ac.prototype.isEqual = function (t) {
            return (
              this.batchId === t.batchId &&
              Ur(this.mutations, t.mutations, Ps) &&
              Ur(this.baseMutations, t.baseMutations, Ps)
            );
          }),
          ac),
        oc =
          ((uc.from = function (t, e, n) {
            Lr(t.mutations.length === n.length);
            for (var r = pu, i = t.mutations, o = 0; o < i.length; o++)
              r = r.zt(i[o].key, n[o].version);
            return new uc(t, e, n, r);
          }),
          uc),
        sc = function (t) {
          this.Fs = t;
        };
      function uc(t, e, n, r) {
        (this.batch = t), (this.Ns = e), (this.Ds = n), (this.$s = r);
      }
      function ac(t, e, n, r) {
        (this.batchId = t),
          (this.vs = e),
          (this.baseMutations = n),
          (this.mutations = r);
      }
      function cc(t, e) {
        if (e.document) return Ju(t.Fs, e.document, !!e.hasCommittedMutations);
        if (e.noDocument) {
          var n = di.Et(e.noDocument.path),
            r = dc(e.noDocument.readTime);
          return new eo(n, r, {
            hasCommittedMutations: !!e.hasCommittedMutations,
          });
        }
        if (e.unknownDocument) {
          (n = di.Et(e.unknownDocument.path)),
            (r = dc(e.unknownDocument.version));
          return new no(n, r);
        }
        return Cr();
      }
      function hc(t, e, n) {
        var r = fc(n),
          n = e.key.path.X().it();
        if (e instanceof to) {
          var i = {
              name: zu((o = t.Fs), (s = e).key),
              fields: s.bt().mapValue.fields,
              updateTime: ju(o, s.version.j()),
            },
            o = e.hasCommittedMutations;
          return new za(null, null, i, o, r, n);
        }
        if (e instanceof eo) {
          var s = e.key.path.it(),
            i = pc(e.version),
            o = e.hasCommittedMutations;
          return new za(null, new Ba(s, i), null, o, r, n);
        }
        if (e instanceof no) {
          (o = e.key.path.it()), (e = pc(e.version));
          return new za(new Ga(o, e), null, null, !0, r, n);
        }
        return Cr();
      }
      function fc(t) {
        t = t.j();
        return [t.seconds, t.nanoseconds];
      }
      function lc(t) {
        t = new ci(t[0], t[1]);
        return hi.K(t);
      }
      function pc(t) {
        t = t.j();
        return new Ma(t.seconds, t.nanoseconds);
      }
      function dc(t) {
        t = new ci(t.seconds, t.nanoseconds);
        return hi.K(t);
      }
      function yc(e, t) {
        for (
          var n = (t.baseMutations || []).map(function (t) {
              return $u(e.Fs, t);
            }),
            r = 0;
          r < t.mutations.length - 1;
          ++r
        ) {
          var i,
            o = t.mutations[r];
          r + 1 < t.mutations.length &&
            void 0 !== t.mutations[r + 1].transform &&
            ((i = t.mutations[r + 1]),
            (o.updateTransforms = i.transform.fieldTransforms),
            t.mutations.splice(r + 1, 1),
            ++r);
        }
        var s = t.mutations.map(function (t) {
            return $u(e.Fs, t);
          }),
          u = ci.fromMillis(t.localWriteTimeMs);
        return new ic(t.batchId, u, n, s);
      }
      function vc(t) {
        var e = dc(t.readTime),
          n =
            void 0 !== t.lastLimboFreeSnapshotVersion
              ? dc(t.lastLimboFreeSnapshotVersion)
              : hi.min(),
          r =
            void 0 !== t.query.documents
              ? (Lr(1 === (r = t.query).documents.length),
                Jo(zo(Yu(r.documents[0]))))
              : Jo(na(t.query));
        return new is(
          r,
          t.targetId,
          0,
          t.lastListenSequenceNumber,
          e,
          n,
          Fr.fromBase64String(t.resumeToken)
        );
      }
      function gc(t, e) {
        var n = pc(e.Ot),
          r = pc(e.lastLimboFreeSnapshotVersion),
          i = (ho(e.target) ? ta : ea)(t.Fs, e.target),
          t = e.resumeToken.toBase64();
        return new Qa(e.targetId, ao(e.target), n, t, e.sequenceNumber, r, i);
      }
      function mc(t) {
        var e = na({ parent: t.parent, structuredQuery: t.structuredQuery });
        return "LAST" === t.limitType ? Zo(e, e.limit, "L") : e;
      }
      var bc =
        ((wc.prototype.Os = function (t, e) {
          return _c(t)
            .get(e)
            .next(function (t) {
              if (t)
                return {
                  id: (t = t).bundleId,
                  createTime: dc(t.createTime),
                  version: t.version,
                };
            });
        }),
        (wc.prototype.ks = function (t, e) {
          return _c(t).put({
            bundleId: (e = e).id,
            createTime: pc(qu(e.createTime)),
            version: e.version,
          });
        }),
        (wc.prototype.Ms = function (t, e) {
          return Ec(t)
            .get(e)
            .next(function (t) {
              if (t)
                return {
                  name: (t = t).name,
                  query: mc(t.bundledQuery),
                  readTime: dc(t.readTime),
                };
            });
        }),
        (wc.prototype.Ls = function (t, e) {
          return Ec(t).put({
            name: (e = e).name,
            readTime: pc(qu(e.readTime)),
            bundledQuery: e.bundledQuery,
          });
        }),
        wc);
      function wc() {}
      function _c(t) {
        return rc(t, Ja.store);
      }
      function Ec(t) {
        return rc(t, Za.store);
      }
      var Ic =
          ((xc.prototype.qs = function (t, e) {
            return this.Bs.add(e), la.resolve();
          }),
          (xc.prototype.Us = function (t, e) {
            return la.resolve(this.Bs.getEntries(e));
          }),
          xc),
        Tc =
          ((Sc.prototype.add = function (t) {
            var e = t.tt(),
              n = t.X(),
              r = this.index[e] || new uu(fi.H),
              t = !r.has(n);
            return (this.index[e] = r.add(n)), t;
          }),
          (Sc.prototype.has = function (t) {
            var e = t.tt(),
              t = t.X(),
              e = this.index[e];
            return e && e.has(t);
          }),
          (Sc.prototype.getEntries = function (t) {
            return (this.index[t] || new uu(fi.H)).it();
          }),
          Sc),
        Nc =
          ((Ac.prototype.qs = function (t, e) {
            var n = this;
            if (this.Qs.has(e)) return la.resolve();
            var r = e.tt(),
              i = e.X();
            t.gs(function () {
              n.Qs.add(e);
            });
            i = { collectionId: r, parent: Ca(i) };
            return Dc(t).put(i);
          }),
          (Ac.prototype.Us = function (t, i) {
            var o = [],
              e = IDBKeyRange.bound([i, ""], [jr(i), ""], !1, !0);
            return Dc(t)
              .rs(e)
              .next(function (t) {
                for (var e = 0, n = t; e < n.length; e++) {
                  var r = n[e];
                  if (r.collectionId !== i) break;
                  o.push(Ra(r.parent));
                }
                return o;
              });
          }),
          Ac);
      function Ac() {
        this.Qs = new Tc();
      }
      function Sc() {
        this.index = {};
      }
      function xc() {
        this.Bs = new Tc();
      }
      function Dc(t) {
        return rc(t, Xa.store);
      }
      var Oc = { Ks: !1, Ws: 0, js: 0, Gs: 0 },
        kc =
          ((Pc.Ys = function (t) {
            return new Pc(t, Pc.Xs, Pc.Zs);
          }),
          Pc);
      function Pc(t, e, n) {
        (this.zs = t), (this.Hs = e), (this.Js = n);
      }
      function Cc(e) {
        return y(this, void 0, void 0, function () {
          return v(this, function (t) {
            if (e.code !== Gr.FAILED_PRECONDITION || e.message !== ka) throw e;
            return Dr("LocalStore", "Unexpectedly lost primary lease"), [2];
          });
        });
      }
      (kc.Xs = 10),
        (kc.Zs = 1e3),
        (kc.ti = new kc(41943040, kc.Xs, kc.Zs)),
        (kc.ei = new kc(-1, 0, 0));
      var Lc =
          ((Vc.prototype.get = function (t) {
            var e = this.ni(t),
              e = this.ii[e];
            if (void 0 !== e)
              for (var n = 0, r = e; n < r.length; n++) {
                var i = r[n],
                  o = i[0],
                  i = i[1];
                if (this.si(o, t)) return i;
              }
          }),
          (Vc.prototype.has = function (t) {
            return void 0 !== this.get(t);
          }),
          (Vc.prototype.set = function (t, e) {
            var n = this.ni(t),
              r = this.ii[n];
            if (void 0 !== r) {
              for (var i = 0; i < r.length; i++)
                if (this.si(r[i][0], t)) return void (r[i] = [t, e]);
              r.push([t, e]);
            } else this.ii[n] = [[t, e]];
          }),
          (Vc.prototype.delete = function (t) {
            var e = this.ni(t),
              n = this.ii[e];
            if (void 0 === n) return !1;
            for (var r = 0; r < n.length; r++)
              if (this.si(n[r][0], t))
                return 1 === n.length ? delete this.ii[e] : n.splice(r, 1), !0;
            return !1;
          }),
          (Vc.prototype.forEach = function (s) {
            Ei(this.ii, function (t, e) {
              for (var n = 0, r = e; n < r.length; n++) {
                var i = r[n],
                  o = i[0],
                  i = i[1];
                s(o, i);
              }
            });
          }),
          (Vc.prototype.et = function () {
            return Ii(this.ii);
          }),
          Vc),
        Ie =
          ((Rc.prototype.ci = function (t) {
            t = this.ri.get(t);
            return t ? t.readTime : hi.min();
          }),
          (Rc.prototype.ai = function (t, e) {
            this.ui(), this.ri.set(t.key, { hi: t, readTime: e });
          }),
          (Rc.prototype.li = function (t, e) {
            void 0 === e && (e = null),
              this.ui(),
              this.ri.set(t, { hi: null, readTime: e });
          }),
          (Rc.prototype._i = function (t, e) {
            this.ui();
            var n = this.ri.get(e);
            return void 0 !== n ? la.resolve(n.hi) : this.fi(t, e);
          }),
          (Rc.prototype.getEntries = function (t, e) {
            return this.di(t, e);
          }),
          (Rc.prototype.apply = function (t) {
            return this.ui(), (this.oi = !0), this.wi(t);
          }),
          (Rc.prototype.ui = function () {}),
          Rc);
      function Rc() {
        (this.ri = new Lc(
          function (t) {
            return t.toString();
          },
          function (t, e) {
            return t.isEqual(e);
          }
        )),
          (this.oi = !1);
      }
      function Vc(t, e) {
        (this.ni = t), (this.si = e), (this.ii = {});
      }
      function Mc(t, e, n) {
        var r = t.store(ja.store),
          i = t.store(Fa.store),
          o = [],
          t = IDBKeyRange.only(n.batchId),
          s = 0,
          t = r.hs({ range: t }, function (t, e, n) {
            return s++, n.delete();
          });
        o.push(
          t.next(function () {
            Lr(1 === s);
          })
        );
        for (var u = [], a = 0, c = n.mutations; a < c.length; a++) {
          var h = c[a],
            f = Fa.key(e, h.key.path, n.batchId);
          o.push(i.delete(f)), u.push(h.key);
        }
        return la.Mn(o).next(function () {
          return u;
        });
      }
      function Uc(t) {
        var e;
        if (t.document) e = t.document;
        else if (t.unknownDocument) e = t.unknownDocument;
        else {
          if (!t.noDocument) throw Cr();
          e = t.noDocument;
        }
        return JSON.stringify(e).length;
      }
      var jc =
        ((Fc.mi = function (t, e, n, r) {
          return Lr("" !== t.uid), new Fc(t.m() ? t.uid : "", e, n, r);
        }),
        (Fc.prototype.Ai = function (t) {
          var r = !0,
            e = IDBKeyRange.bound(
              [this.userId, Number.NEGATIVE_INFINITY],
              [this.userId, Number.POSITIVE_INFINITY]
            );
          return Bc(t)
            .hs({ index: ja.userMutationsIndex, range: e }, function (t, e, n) {
              (r = !1), n.done();
            })
            .next(function () {
              return r;
            });
        }),
        (Fc.prototype.Ri = function (d, y, v, g) {
          var m = this,
            b = Gc(d),
            w = Bc(d);
          return w.add({}).next(function (t) {
            Lr("number" == typeof t);
            for (
              var e,
                n,
                r,
                i,
                o,
                s = new ic(t, y, v, g),
                u =
                  ((e = m.Qt),
                  (n = m.userId),
                  (i = (r = s).baseMutations.map(function (t) {
                    return Zu(e.Fs, t);
                  })),
                  (o = r.mutations.map(function (t) {
                    return Zu(e.Fs, t);
                  })),
                  new ja(n, r.batchId, r.vs.toMillis(), i, o)),
                a = [],
                c = new uu(function (t, e) {
                  return Mr(t.rt(), e.rt());
                }),
                h = 0,
                f = g;
              h < f.length;
              h++
            ) {
              var l = f[h],
                p = Fa.key(m.userId, l.key.path, t),
                c = c.add(l.key.path.X());
              a.push(w.put(u)), a.push(b.put(p, Fa.PLACEHOLDER));
            }
            return (
              c.forEach(function (t) {
                a.push(m.Ei.qs(d, t));
              }),
              d.gs(function () {
                m.Ii[t] = s.keys();
              }),
              la.Mn(a).next(function () {
                return s;
              })
            );
          });
        }),
        (Fc.prototype.Pi = function (t, e) {
          var n = this;
          return Bc(t)
            .get(e)
            .next(function (t) {
              return t ? (Lr(t.userId === n.userId), yc(n.Qt, t)) : null;
            });
        }),
        (Fc.prototype.yi = function (t, e) {
          var n = this;
          return this.Ii[e]
            ? la.resolve(this.Ii[e])
            : this.Pi(t, e).next(function (t) {
                if (t) {
                  t = t.keys();
                  return (n.Ii[e] = t);
                }
                return null;
              });
        }),
        (Fc.prototype.gi = function (t, e) {
          var r = this,
            i = e + 1,
            e = IDBKeyRange.lowerBound([this.userId, i]),
            o = null;
          return Bc(t)
            .hs({ index: ja.userMutationsIndex, range: e }, function (t, e, n) {
              e.userId === r.userId && (Lr(e.batchId >= i), (o = yc(r.Qt, e))),
                n.done();
            })
            .next(function () {
              return o;
            });
        }),
        (Fc.prototype.Vi = function (t) {
          var e = IDBKeyRange.upperBound([
              this.userId,
              Number.POSITIVE_INFINITY,
            ]),
            r = -1;
          return Bc(t)
            .hs(
              { index: ja.userMutationsIndex, range: e, reverse: !0 },
              function (t, e, n) {
                (r = e.batchId), n.done();
              }
            )
            .next(function () {
              return r;
            });
        }),
        (Fc.prototype.pi = function (t) {
          var e = this,
            n = IDBKeyRange.bound(
              [this.userId, -1],
              [this.userId, Number.POSITIVE_INFINITY]
            );
          return Bc(t)
            .rs(ja.userMutationsIndex, n)
            .next(function (t) {
              return t.map(function (t) {
                return yc(e.Qt, t);
              });
            });
        }),
        (Fc.prototype.bi = function (o, s) {
          var u = this,
            t = Fa.prefixForPath(this.userId, s.path),
            t = IDBKeyRange.lowerBound(t),
            a = [];
          return Gc(o)
            .hs({ range: t }, function (t, e, n) {
              var r = t[0],
                i = t[1],
                t = t[2],
                i = Ra(i);
              if (r === u.userId && s.path.isEqual(i))
                return Bc(o)
                  .get(t)
                  .next(function (t) {
                    if (!t) throw Cr();
                    Lr(t.userId === u.userId), a.push(yc(u.Qt, t));
                  });
              n.done();
            })
            .next(function () {
              return a;
            });
        }),
        (Fc.prototype.vi = function (e, t) {
          var s = this,
            u = new uu(Mr),
            n = [];
          return (
            t.forEach(function (o) {
              var t = Fa.prefixForPath(s.userId, o.path),
                t = IDBKeyRange.lowerBound(t),
                t = Gc(e).hs({ range: t }, function (t, e, n) {
                  var r = t[0],
                    i = t[1],
                    t = t[2],
                    i = Ra(i);
                  r === s.userId && o.path.isEqual(i)
                    ? (u = u.add(t))
                    : n.done();
                });
              n.push(t);
            }),
            la.Mn(n).next(function () {
              return s.Si(e, u);
            })
          );
        }),
        (Fc.prototype.Di = function (t, e) {
          var o = this,
            s = e.path,
            u = s.length + 1,
            e = Fa.prefixForPath(this.userId, s),
            e = IDBKeyRange.lowerBound(e),
            a = new uu(Mr);
          return Gc(t)
            .hs({ range: e }, function (t, e, n) {
              var r = t[0],
                i = t[1],
                t = t[2],
                i = Ra(i);
              r === o.userId && s.nt(i)
                ? i.length === u && (a = a.add(t))
                : n.done();
            })
            .next(function () {
              return o.Si(t, a);
            });
        }),
        (Fc.prototype.Si = function (e, t) {
          var n = this,
            r = [],
            i = [];
          return (
            t.forEach(function (t) {
              i.push(
                Bc(e)
                  .get(t)
                  .next(function (t) {
                    if (null === t) throw Cr();
                    Lr(t.userId === n.userId), r.push(yc(n.Qt, t));
                  })
              );
            }),
            la.Mn(i).next(function () {
              return r;
            })
          );
        }),
        (Fc.prototype.Ci = function (e, n) {
          var r = this;
          return Mc(e.ps, this.userId, n).next(function (t) {
            return (
              e.gs(function () {
                r.xi(n.batchId);
              }),
              la.forEach(t, function (t) {
                return r.Ti.Ni(e, t);
              })
            );
          });
        }),
        (Fc.prototype.xi = function (t) {
          delete this.Ii[t];
        }),
        (Fc.prototype.$i = function (e) {
          var i = this;
          return this.Ai(e).next(function (t) {
            if (!t) return la.resolve();
            var t = IDBKeyRange.lowerBound(Fa.prefixForUser(i.userId)),
              r = [];
            return Gc(e)
              .hs({ range: t }, function (t, e, n) {
                t[0] === i.userId ? ((t = Ra(t[1])), r.push(t)) : n.done();
              })
              .next(function () {
                Lr(0 === r.length);
              });
          });
        }),
        (Fc.prototype.Fi = function (t, e) {
          return qc(t, this.userId, e);
        }),
        (Fc.prototype.Oi = function (t) {
          var e = this;
          return zc(t)
            .get(this.userId)
            .next(function (t) {
              return t || new Ua(e.userId, -1, "");
            });
        }),
        Fc);
      function Fc(t, e, n, r) {
        (this.userId = t),
          (this.Qt = e),
          (this.Ei = n),
          (this.Ti = r),
          (this.Ii = {});
      }
      function qc(t, o, e) {
        var e = Fa.prefixForPath(o, e.path),
          s = e[1],
          e = IDBKeyRange.lowerBound(e),
          u = !1;
        return Gc(t)
          .hs({ range: e, us: !0 }, function (t, e, n) {
            var r = t[0],
              i = t[1];
            t[2], r === o && i === s && (u = !0), n.done();
          })
          .next(function () {
            return u;
          });
      }
      function Bc(t) {
        return rc(t, ja.store);
      }
      function Gc(t) {
        return rc(t, Fa.store);
      }
      function zc(t) {
        return rc(t, Ua.store);
      }
      var Hc =
          ((Kc.prototype.next = function () {
            return (this.ki += 2), this.ki;
          }),
          (Kc.Mi = function () {
            return new Kc(0);
          }),
          (Kc.Li = function () {
            return new Kc(-1);
          }),
          Kc),
        Qc =
          ((Yc.prototype.Bi = function (n) {
            var r = this;
            return this.qi(n).next(function (t) {
              var e = new Hc(t.highestTargetId);
              return (
                (t.highestTargetId = e.next()),
                r.Ui(n, t).next(function () {
                  return t.highestTargetId;
                })
              );
            });
          }),
          (Yc.prototype.Qi = function (t) {
            return this.qi(t).next(function (t) {
              return hi.K(
                new ci(
                  t.lastRemoteSnapshotVersion.seconds,
                  t.lastRemoteSnapshotVersion.nanoseconds
                )
              );
            });
          }),
          (Yc.prototype.Ki = function (t) {
            return this.qi(t).next(function (t) {
              return t.highestListenSequenceNumber;
            });
          }),
          (Yc.prototype.Wi = function (e, n, r) {
            var i = this;
            return this.qi(e).next(function (t) {
              return (
                (t.highestListenSequenceNumber = n),
                r && (t.lastRemoteSnapshotVersion = r.j()),
                n > t.highestListenSequenceNumber &&
                  (t.highestListenSequenceNumber = n),
                i.Ui(e, t)
              );
            });
          }),
          (Yc.prototype.ji = function (e, n) {
            var r = this;
            return this.Gi(e, n).next(function () {
              return r.qi(e).next(function (t) {
                return (t.targetCount += 1), r.zi(n, t), r.Ui(e, t);
              });
            });
          }),
          (Yc.prototype.Hi = function (t, e) {
            return this.Gi(t, e);
          }),
          (Yc.prototype.Ji = function (e, t) {
            var n = this;
            return this.Yi(e, t.targetId)
              .next(function () {
                return Xc(e).delete(t.targetId);
              })
              .next(function () {
                return n.qi(e);
              })
              .next(function (t) {
                return Lr(0 < t.targetCount), --t.targetCount, n.Ui(e, t);
              });
          }),
          (Yc.prototype.Xi = function (n, r, i) {
            var o = this,
              s = 0,
              u = [];
            return Xc(n)
              .hs(function (t, e) {
                e = vc(e);
                e.sequenceNumber <= r &&
                  null === i.get(e.targetId) &&
                  (s++, u.push(o.Ji(n, e)));
              })
              .next(function () {
                return la.Mn(u);
              })
              .next(function () {
                return s;
              });
          }),
          (Yc.prototype.In = function (t, n) {
            return Xc(t).hs(function (t, e) {
              e = vc(e);
              n(e);
            });
          }),
          (Yc.prototype.qi = function (t) {
            return Wc(t)
              .get(Ka.key)
              .next(function (t) {
                return Lr(null !== t), t;
              });
          }),
          (Yc.prototype.Ui = function (t, e) {
            return Wc(t).put(Ka.key, e);
          }),
          (Yc.prototype.Gi = function (t, e) {
            return Xc(t).put(gc(this.Qt, e));
          }),
          (Yc.prototype.zi = function (t, e) {
            var n = !1;
            return (
              t.targetId > e.highestTargetId &&
                ((e.highestTargetId = t.targetId), (n = !0)),
              t.sequenceNumber > e.highestListenSequenceNumber &&
                ((e.highestListenSequenceNumber = t.sequenceNumber), (n = !0)),
              n
            );
          }),
          (Yc.prototype.Zi = function (t) {
            return this.qi(t).next(function (t) {
              return t.targetCount;
            });
          }),
          (Yc.prototype.tr = function (t, r) {
            var e = ao(r),
              e = IDBKeyRange.bound(
                [e, Number.NEGATIVE_INFINITY],
                [e, Number.POSITIVE_INFINITY]
              ),
              i = null;
            return Xc(t)
              .hs(
                { range: e, index: Qa.queryTargetsIndexName },
                function (t, e, n) {
                  e = vc(e);
                  co(r, e.target) && ((i = e), n.done());
                }
              )
              .next(function () {
                return i;
              });
          }),
          (Yc.prototype.er = function (n, t, r) {
            var i = this,
              o = [],
              s = Jc(n);
            return (
              t.forEach(function (t) {
                var e = Ca(t.path);
                o.push(s.put(new Ya(r, e))), o.push(i.Ti.nr(n, r, t));
              }),
              la.Mn(o)
            );
          }),
          (Yc.prototype.sr = function (n, t, r) {
            var i = this,
              o = Jc(n);
            return la.forEach(t, function (t) {
              var e = Ca(t.path);
              return la.Mn([o.delete([r, e]), i.Ti.ir(n, r, t)]);
            });
          }),
          (Yc.prototype.Yi = function (t, e) {
            (t = Jc(t)), (e = IDBKeyRange.bound([e], [e + 1], !1, !0));
            return t.delete(e);
          }),
          (Yc.prototype.rr = function (t, e) {
            var e = IDBKeyRange.bound([e], [e + 1], !1, !0),
              t = Jc(t),
              r = yu();
            return t
              .hs({ range: e, us: !0 }, function (t, e, n) {
                (t = Ra(t[1])), (t = new di(t));
                r = r.add(t);
              })
              .next(function () {
                return r;
              });
          }),
          (Yc.prototype.Fi = function (t, e) {
            var e = Ca(e.path),
              e = IDBKeyRange.bound([e], [jr(e)], !1, !0),
              i = 0;
            return Jc(t)
              .hs(
                { index: Ya.documentTargetsIndex, us: !0, range: e },
                function (t, e, n) {
                  var r = t[0];
                  t[1], 0 !== r && (i++, n.done());
                }
              )
              .next(function () {
                return 0 < i;
              });
          }),
          (Yc.prototype.Sn = function (t, e) {
            return Xc(t)
              .get(e)
              .next(function (t) {
                return t ? vc(t) : null;
              });
          }),
          Yc);
      function Yc(t, e) {
        (this.Ti = t), (this.Qt = e);
      }
      function Kc(t) {
        this.ki = t;
      }
      function Xc(t) {
        return rc(t, Qa.store);
      }
      function Wc(t) {
        return rc(t, Ka.store);
      }
      function Jc(t) {
        return rc(t, Ya.store);
      }
      function Zc(t, e) {
        var n = t[0],
          r = t[1],
          t = e[0],
          e = e[1],
          t = Mr(n, t);
        return 0 === t ? Mr(r, e) : t;
      }
      var $c =
          ((sh.prototype.ur = function () {
            return ++this.ar;
          }),
          (sh.prototype.hr = function (t) {
            var e = [t, this.ur()];
            this.buffer.size < this.cr
              ? (this.buffer = this.buffer.add(e))
              : Zc(e, (t = this.buffer.last())) < 0 &&
                (this.buffer = this.buffer.delete(t).add(e));
          }),
          Object.defineProperty(sh.prototype, "maxValue", {
            get: function () {
              return this.buffer.last()[0];
            },
            enumerable: !1,
            configurable: !0,
          }),
          sh),
        th =
          ((oh.prototype.start = function (t) {
            -1 !== this.lr.params.zs && this.wr(t);
          }),
          (oh.prototype.stop = function () {
            this.dr && (this.dr.cancel(), (this.dr = null));
          }),
          Object.defineProperty(oh.prototype, "Er", {
            get: function () {
              return null !== this.dr;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (oh.prototype.wr = function (n) {
            var t = this,
              e = this._r ? 3e5 : 6e4;
            Dr(
              "LruGarbageCollector",
              "Garbage collection scheduled in " + e + "ms"
            ),
              (this.dr = this._s.Tr("lru_garbage_collection", e, function () {
                return y(t, void 0, void 0, function () {
                  var e;
                  return v(this, function (t) {
                    switch (t.label) {
                      case 0:
                        (this.dr = null), (this._r = !0), (t.label = 1);
                      case 1:
                        return t.trys.push([1, 3, , 7]), [4, n.Ir(this.lr)];
                      case 2:
                        return t.sent(), [3, 7];
                      case 3:
                        return Ea((e = t.sent()))
                          ? (Dr(
                              "LruGarbageCollector",
                              "Ignoring IndexedDB error during garbage collection: ",
                              e
                            ),
                            [3, 6])
                          : [3, 4];
                      case 4:
                        return [4, Cc(e)];
                      case 5:
                        t.sent(), (t.label = 6);
                      case 6:
                        return [3, 7];
                      case 7:
                        return [4, this.wr(n)];
                      case 8:
                        return t.sent(), [2];
                    }
                  });
                });
              }));
          }),
          oh),
        eh =
          ((ih.prototype.Ar = function (t, e) {
            return this.mr.Rr(t).next(function (t) {
              return Math.floor((e / 100) * t);
            });
          }),
          (ih.prototype.Pr = function (t, e) {
            var n = this;
            if (0 === e) return la.resolve(ei.q);
            var r = new $c(e);
            return this.mr
              .In(t, function (t) {
                return r.hr(t.sequenceNumber);
              })
              .next(function () {
                return n.mr.yr(t, function (t) {
                  return r.hr(t);
                });
              })
              .next(function () {
                return r.maxValue;
              });
          }),
          (ih.prototype.Xi = function (t, e, n) {
            return this.mr.Xi(t, e, n);
          }),
          (ih.prototype.gr = function (t, e) {
            return this.mr.gr(t, e);
          }),
          (ih.prototype.Vr = function (e, n) {
            var r = this;
            return -1 === this.params.zs
              ? (Dr(
                  "LruGarbageCollector",
                  "Garbage collection skipped; disabled"
                ),
                la.resolve(Oc))
              : this.pr(e).next(function (t) {
                  return t < r.params.zs
                    ? (Dr(
                        "LruGarbageCollector",
                        "Garbage collection skipped; Cache size " +
                          t +
                          " is lower than threshold " +
                          r.params.zs
                      ),
                      Oc)
                    : r.br(e, n);
                });
          }),
          (ih.prototype.pr = function (t) {
            return this.mr.pr(t);
          }),
          (ih.prototype.br = function (e, n) {
            var r,
              i,
              o,
              s,
              u,
              a,
              c,
              h = this,
              f = Date.now();
            return this.Ar(e, this.params.Hs)
              .next(function (t) {
                return (
                  (i =
                    t > h.params.Js
                      ? (Dr(
                          "LruGarbageCollector",
                          "Capping sequence numbers to collect down to the maximum of " +
                            h.params.Js +
                            " from " +
                            t
                        ),
                        h.params.Js)
                      : t),
                  (s = Date.now()),
                  h.Pr(e, i)
                );
              })
              .next(function (t) {
                return (r = t), (u = Date.now()), h.Xi(e, r, n);
              })
              .next(function (t) {
                return (o = t), (a = Date.now()), h.gr(e, r);
              })
              .next(function (t) {
                return (
                  (c = Date.now()),
                  xr() <= l.DEBUG &&
                    Dr(
                      "LruGarbageCollector",
                      "LRU Garbage Collection\n\tCounted targets in " +
                        (s - f) +
                        "ms\n\tDetermined least recently used " +
                        i +
                        " in " +
                        (u - s) +
                        "ms\n\tRemoved " +
                        o +
                        " targets in " +
                        (a - u) +
                        "ms\n\tRemoved " +
                        t +
                        " documents in " +
                        (c - a) +
                        "ms\nTotal Duration: " +
                        (c - f) +
                        "ms"
                    ),
                  la.resolve({ Ks: !0, Ws: i, js: o, Gs: t })
                );
              });
          }),
          ih),
        nh =
          ((rh.prototype.Rr = function (t) {
            var n = this.vr(t);
            return this.db
              .Sr()
              .Zi(t)
              .next(function (e) {
                return n.next(function (t) {
                  return e + t;
                });
              });
          }),
          (rh.prototype.vr = function (t) {
            var e = 0;
            return this.yr(t, function (t) {
              e++;
            }).next(function () {
              return e;
            });
          }),
          (rh.prototype.In = function (t, e) {
            return this.db.Sr().In(t, e);
          }),
          (rh.prototype.yr = function (t, n) {
            return this.Dr(t, function (t, e) {
              return n(e);
            });
          }),
          (rh.prototype.nr = function (t, e, n) {
            return uh(t, n);
          }),
          (rh.prototype.ir = function (t, e, n) {
            return uh(t, n);
          }),
          (rh.prototype.Xi = function (t, e, n) {
            return this.db.Sr().Xi(t, e, n);
          }),
          (rh.prototype.Ni = uh),
          (rh.prototype.Cr = function (t, e) {
            return (
              (r = e),
              (i = !1),
              zc((n = t))
                .ls(function (t) {
                  return qc(n, t, r).next(function (t) {
                    return t && (i = !0), la.resolve(!t);
                  });
                })
                .next(function () {
                  return i;
                })
            );
            var n, r, i;
          }),
          (rh.prototype.gr = function (n, r) {
            var i = this,
              o = this.db.$r().Nr(),
              s = [],
              u = 0;
            return this.Dr(n, function (e, t) {
              t <= r &&
                ((t = i.Cr(n, e).next(function (t) {
                  if (!t)
                    return (
                      u++,
                      o._i(n, e).next(function () {
                        return o.li(e), Jc(n).delete([0, Ca(e.path)]);
                      })
                    );
                })),
                s.push(t));
            })
              .next(function () {
                return la.Mn(s);
              })
              .next(function () {
                return o.apply(n);
              })
              .next(function () {
                return u;
              });
          }),
          (rh.prototype.removeTarget = function (t, e) {
            e = e.kt(t.bs);
            return this.db.Sr().Hi(t, e);
          }),
          (rh.prototype.Fr = uh),
          (rh.prototype.Dr = function (t, r) {
            var i,
              t = Jc(t),
              o = ei.q;
            return t
              .hs({ index: Ya.documentTargetsIndex }, function (t, e) {
                var n = t[0],
                  t = (t[1], e.path),
                  e = e.sequenceNumber;
                0 === n
                  ? (o !== ei.q && r(new di(Ra(i)), o), (o = e), (i = t))
                  : (o = ei.q);
              })
              .next(function () {
                o !== ei.q && r(new di(Ra(i)), o);
              });
          }),
          (rh.prototype.pr = function (t) {
            return this.db.$r().Or(t);
          }),
          rh);
      function rh(t, e) {
        (this.db = t), (this.lr = new eh(this, e));
      }
      function ih(t, e) {
        (this.mr = t), (this.params = e);
      }
      function oh(t, e) {
        (this.lr = t), (this._s = e), (this._r = !1), (this.dr = null);
      }
      function sh(t) {
        (this.cr = t), (this.buffer = new uu(Zc)), (this.ar = 0);
      }
      function uh(t, e) {
        return Jc(t).put(((t = t.bs), new Ya(0, Ca(e.path), t)));
      }
      var ah,
        ch =
          ((lh.prototype.ai = function (t, e, n) {
            return dh(t).put(yh(e), n);
          }),
          (lh.prototype.li = function (t, e) {
            (t = dh(t)), (e = yh(e));
            return t.delete(e);
          }),
          (lh.prototype.updateMetadata = function (e, n) {
            var r = this;
            return this.getMetadata(e).next(function (t) {
              return (t.byteSize += n), r.kr(e, t);
            });
          }),
          (lh.prototype._i = function (t, e) {
            var n = this;
            return dh(t)
              .get(yh(e))
              .next(function (t) {
                return n.Mr(t);
              });
          }),
          (lh.prototype.Lr = function (t, e) {
            var n = this;
            return dh(t)
              .get(yh(e))
              .next(function (t) {
                var e = n.Mr(t);
                return e ? { hi: e, size: Uc(t) } : null;
              });
          }),
          (lh.prototype.getEntries = function (t, e) {
            var n = this,
              r = cu;
            return this.Br(t, e, function (t, e) {
              e = n.Mr(e);
              r = r.zt(t, e);
            }).next(function () {
              return r;
            });
          }),
          (lh.prototype.qr = function (t, e) {
            var r = this,
              i = cu,
              o = new tu(di.H);
            return this.Br(t, e, function (t, e) {
              var n = r.Mr(e);
              o = n
                ? ((i = i.zt(t, n)), o.zt(t, Uc(e)))
                : ((i = i.zt(t, null)), o.zt(t, 0));
            }).next(function () {
              return { Ur: i, Qr: o };
            });
          }),
          (lh.prototype.Br = function (t, e, i) {
            if (e.et()) return la.resolve();
            var n = IDBKeyRange.bound(e.first().path.it(), e.last().path.it()),
              o = e.te(),
              s = o.oe();
            return dh(t)
              .hs({ range: n }, function (t, e, n) {
                for (var r = di.Et(t); s && di.H(s, r) < 0; )
                  i(s, null), (s = o.oe());
                s && s.isEqual(r) && (i(s, e), (s = o.ce() ? o.oe() : null)),
                  s ? n.ss(s.path.it()) : n.done();
              })
              .next(function () {
                for (; s; ) i(s, null), (s = o.ce() ? o.oe() : null);
              });
          }),
          (lh.prototype.Kr = function (t, r, e) {
            var n,
              i = this,
              o = lu,
              s = r.path.length + 1,
              u = {};
            return (
              e.isEqual(hi.min())
                ? ((n = r.path.it()), (u.range = IDBKeyRange.lowerBound(n)))
                : ((n = r.path.it()),
                  (e = fc(e)),
                  (u.range = IDBKeyRange.lowerBound([n, e], !0)),
                  (u.index = za.collectionReadTimeIndex)),
              dh(t)
                .hs(u, function (t, e, n) {
                  t.length === s &&
                    ((e = cc(i.Qt, e)),
                    r.path.nt(e.key.path)
                      ? e instanceof to && ns(r, e) && (o = o.zt(e.key, e))
                      : n.done());
                })
                .next(function () {
                  return o;
                })
            );
          }),
          (lh.prototype.Nr = function (t) {
            return new hh(this, !!t && t.Wr);
          }),
          (lh.prototype.Or = function (t) {
            return this.getMetadata(t).next(function (t) {
              return t.byteSize;
            });
          }),
          (lh.prototype.getMetadata = function (t) {
            return ph(t)
              .get(Ha.key)
              .next(function (t) {
                return Lr(!!t), t;
              });
          }),
          (lh.prototype.kr = function (t, e) {
            return ph(t).put(Ha.key, e);
          }),
          (lh.prototype.Mr = function (t) {
            if (t) {
              t = cc(this.Qt, t);
              return t instanceof eo && t.version.isEqual(hi.min()) ? null : t;
            }
            return null;
          }),
          lh),
        hh =
          (h(fh, (ah = Ie)),
          (fh.prototype.wi = function (i) {
            var o = this,
              s = [],
              u = 0,
              a = new uu(function (t, e) {
                return Mr(t.rt(), e.rt());
              });
            return (
              this.ri.forEach(function (t, e) {
                var n,
                  r = o.Gr.get(t);
                e.hi
                  ? ((n = hc(o.jr.Qt, e.hi, o.ci(t))),
                    (a = a.add(t.path.X())),
                    (e = Uc(n)),
                    (u += e - r),
                    s.push(o.jr.ai(i, t, n)))
                  : ((u -= r),
                    o.Wr
                      ? ((r = hc(o.jr.Qt, new eo(t, hi.min()), o.ci(t))),
                        s.push(o.jr.ai(i, t, r)))
                      : s.push(o.jr.li(i, t)));
              }),
              a.forEach(function (t) {
                s.push(o.jr.Ei.qs(i, t));
              }),
              s.push(this.jr.updateMetadata(i, u)),
              la.Mn(s)
            );
          }),
          (fh.prototype.fi = function (t, e) {
            var n = this;
            return this.jr.Lr(t, e).next(function (t) {
              return null === t
                ? (n.Gr.set(e, 0), null)
                : (n.Gr.set(e, t.size), t.hi);
            });
          }),
          (fh.prototype.di = function (t, e) {
            var n = this;
            return this.jr.qr(t, e).next(function (t) {
              var e = t.Ur;
              return (
                t.Qr.forEach(function (t, e) {
                  n.Gr.set(t, e);
                }),
                e
              );
            });
          }),
          fh);
      function fh(t, e) {
        var n = this;
        return (
          ((n = ah.call(this) || this).jr = t),
          (n.Wr = e),
          (n.Gr = new Lc(
            function (t) {
              return t.toString();
            },
            function (t, e) {
              return t.isEqual(e);
            }
          )),
          n
        );
      }
      function lh(t, e) {
        (this.Qt = t), (this.Ei = e);
      }
      function ph(t) {
        return rc(t, Ha.store);
      }
      function dh(t) {
        return rc(t, za.store);
      }
      function yh(t) {
        return t.path.it();
      }
      var vh =
        ((gh.prototype.Jn = function (e, n, t, r) {
          var i = this;
          Lr(t < r && 0 <= t && r <= 11);
          var o = new pa("createOrUpgrade", n);
          t < 1 &&
            1 <= r &&
            (e.createObjectStore(Va.store),
            (s = e).createObjectStore(Ua.store, { keyPath: Ua.keyPath }),
            s
              .createObjectStore(ja.store, {
                keyPath: ja.keyPath,
                autoIncrement: !0,
              })
              .createIndex(ja.userMutationsIndex, ja.userMutationsKeyPath, {
                unique: !0,
              }),
            s.createObjectStore(Fa.store),
            mh(e),
            e.createObjectStore(za.store));
          var s,
            u = la.resolve();
          return (
            t < 3 &&
              3 <= r &&
              (0 !== t &&
                ((s = e).deleteObjectStore(Ya.store),
                s.deleteObjectStore(Qa.store),
                s.deleteObjectStore(Ka.store),
                mh(e)),
              (u = u.next(function () {
                return (
                  (t = o.store(Ka.store)),
                  (e = new Ka(0, 0, hi.min().j(), 0)),
                  t.put(Ka.key, e)
                );
                var t, e;
              }))),
            t < 4 &&
              4 <= r &&
              (u = (u =
                0 !== t
                  ? u.next(function () {
                      return (
                        (n = e),
                        (r = o)
                          .store(ja.store)
                          .rs()
                          .next(function (t) {
                            n.deleteObjectStore(ja.store),
                              n
                                .createObjectStore(ja.store, {
                                  keyPath: ja.keyPath,
                                  autoIncrement: !0,
                                })
                                .createIndex(
                                  ja.userMutationsIndex,
                                  ja.userMutationsKeyPath,
                                  { unique: !0 }
                                );
                            var e = r.store(ja.store),
                              t = t.map(function (t) {
                                return e.put(t);
                              });
                            return la.Mn(t);
                          })
                      );
                      var n, r;
                    })
                  : u).next(function () {
                e.createObjectStore(Wa.store, { keyPath: Wa.keyPath });
              })),
            t < 5 &&
              5 <= r &&
              (u = u.next(function () {
                return i.zr(o);
              })),
            t < 6 &&
              6 <= r &&
              (u = u.next(function () {
                return e.createObjectStore(Ha.store), i.Hr(o);
              })),
            t < 7 &&
              7 <= r &&
              (u = u.next(function () {
                return i.Jr(o);
              })),
            t < 8 &&
              8 <= r &&
              (u = u.next(function () {
                return i.Yr(e, o);
              })),
            t < 9 &&
              9 <= r &&
              (u = u.next(function () {
                var t;
                (t = e).objectStoreNames.contains("remoteDocumentChanges") &&
                  t.deleteObjectStore("remoteDocumentChanges"),
                  (t = n.objectStore(za.store)).createIndex(
                    za.readTimeIndex,
                    za.readTimeIndexPath,
                    { unique: !1 }
                  ),
                  t.createIndex(
                    za.collectionReadTimeIndex,
                    za.collectionReadTimeIndexPath,
                    { unique: !1 }
                  );
              })),
            t < 10 &&
              10 <= r &&
              (u = u.next(function () {
                return i.Xr(o);
              })),
            (u =
              t < 11 && 11 <= r
                ? u.next(function () {
                    e.createObjectStore(Ja.store, { keyPath: Ja.keyPath }),
                      e.createObjectStore(Za.store, { keyPath: Za.keyPath });
                  })
                : u)
          );
        }),
        (gh.prototype.Hr = function (e) {
          var n = 0;
          return e
            .store(za.store)
            .hs(function (t, e) {
              n += Uc(e);
            })
            .next(function () {
              var t = new Ha(n);
              return e.store(Ha.store).put(Ha.key, t);
            });
        }),
        (gh.prototype.zr = function (n) {
          var r = this,
            t = n.store(Ua.store),
            i = n.store(ja.store);
          return t.rs().next(function (t) {
            return la.forEach(t, function (e) {
              var t = IDBKeyRange.bound(
                [e.userId, -1],
                [e.userId, e.lastAcknowledgedBatchId]
              );
              return i.rs(ja.userMutationsIndex, t).next(function (t) {
                return la.forEach(t, function (t) {
                  Lr(t.userId === e.userId);
                  t = yc(r.Qt, t);
                  return Mc(n, e.userId, t).next(function () {});
                });
              });
            });
          });
        }),
        (gh.prototype.Jr = function (t) {
          var o = t.store(Ya.store),
            e = t.store(za.store);
          return t
            .store(Ka.store)
            .get(Ka.key)
            .next(function (r) {
              var i = [];
              return e
                .hs(function (t, e) {
                  var n = new fi(t),
                    t = [0, Ca(n)];
                  i.push(
                    o.get(t).next(function (t) {
                      return t
                        ? la.resolve()
                        : o.put(
                            new Ya(0, Ca(n), r.highestListenSequenceNumber)
                          );
                    })
                  );
                })
                .next(function () {
                  return la.Mn(i);
                });
            });
        }),
        (gh.prototype.Yr = function (t, e) {
          t.createObjectStore(Xa.store, { keyPath: Xa.keyPath });
          function r(t) {
            if (i.add(t)) {
              var e = t.tt(),
                t = t.X();
              return n.put({ collectionId: e, parent: Ca(t) });
            }
          }
          var n = e.store(Xa.store),
            i = new Tc();
          return e
            .store(za.store)
            .hs({ us: !0 }, function (t, e) {
              t = new fi(t);
              return r(t.X());
            })
            .next(function () {
              return e.store(Fa.store).hs({ us: !0 }, function (t, e) {
                t[0];
                var n = t[1],
                  n = (t[2], Ra(n));
                return r(n.X());
              });
            });
        }),
        (gh.prototype.Xr = function (t) {
          var n = this,
            r = t.store(Qa.store);
          return r.hs(function (t, e) {
            (e = vc(e)), (e = gc(n.Qt, e));
            return r.put(e);
          });
        }),
        gh);
      function gh(t) {
        this.Qt = t;
      }
      function mh(t) {
        t
          .createObjectStore(Ya.store, { keyPath: Ya.keyPath })
          .createIndex(Ya.documentTargetsIndex, Ya.documentTargetsKeyPath, {
            unique: !0,
          }),
          t
            .createObjectStore(Qa.store, { keyPath: Qa.keyPath })
            .createIndex(Qa.queryTargetsIndexName, Qa.queryTargetsKeyPath, {
              unique: !0,
            }),
          t.createObjectStore(Ka.store);
      }
      var bh =
          "Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",
        wh =
          ((_h.prototype.start = function () {
            var e = this;
            return this.To()
              .then(function () {
                if (!e.isPrimary && !e.allowTabSynchronization)
                  throw new zr(Gr.FAILED_PRECONDITION, bh);
                return (
                  e.Io(),
                  e.mo(),
                  e.Ao(),
                  e.runTransaction(
                    "getHighestListenSequenceNumber",
                    "readonly",
                    function (t) {
                      return e._o.Ki(t);
                    }
                  )
                );
              })
              .then(function (t) {
                e.so = new ei(t, e.eo);
              })
              .then(function () {
                e.io = !0;
              })
              .catch(function (t) {
                return e.lo && e.lo.close(), Promise.reject(t);
              });
          }),
          (_h.prototype.Ro = function (n) {
            var t = this;
            return (
              (this.uo = function (e) {
                return y(t, void 0, void 0, function () {
                  return v(this, function (t) {
                    return this.Er ? [2, n(e)] : [2];
                  });
                });
              }),
              n(this.isPrimary)
            );
          }),
          (_h.prototype.Po = function (n) {
            var t = this;
            this.lo.Xn(function (e) {
              return y(t, void 0, void 0, function () {
                return v(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return null === e.newVersion ? [4, n()] : [3, 2];
                    case 1:
                      t.sent(), (t.label = 2);
                    case 2:
                      return [2];
                  }
                });
              });
            });
          }),
          (_h.prototype.yo = function (t) {
            var e = this;
            this.networkEnabled !== t &&
              ((this.networkEnabled = t),
              this.Zr.Ps(function () {
                return y(e, void 0, void 0, function () {
                  return v(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return this.Er ? [4, this.To()] : [3, 2];
                      case 1:
                        t.sent(), (t.label = 2);
                      case 2:
                        return [2];
                    }
                  });
                });
              }));
          }),
          (_h.prototype.To = function () {
            var n = this;
            return this.runTransaction(
              "updateClientMetadataAndTryBecomePrimary",
              "readwrite",
              function (e) {
                return Ih(e)
                  .put(
                    new Wa(
                      n.clientId,
                      Date.now(),
                      n.networkEnabled,
                      n.inForeground
                    )
                  )
                  .next(function () {
                    if (n.isPrimary)
                      return n.Vo(e).next(function (t) {
                        t ||
                          ((n.isPrimary = !1),
                          n.Zr.po(function () {
                            return n.uo(!1);
                          }));
                      });
                  })
                  .next(function () {
                    return n.bo(e);
                  })
                  .next(function (t) {
                    return n.isPrimary && !t
                      ? n.vo(e).next(function () {
                          return !1;
                        })
                      : !!t &&
                          n.So(e).next(function () {
                            return !0;
                          });
                  });
              }
            )
              .catch(function (t) {
                if (Ea(t))
                  return (
                    Dr(
                      "IndexedDbPersistence",
                      "Failed to extend owner lease: ",
                      t
                    ),
                    n.isPrimary
                  );
                if (!n.allowTabSynchronization) throw t;
                return (
                  Dr(
                    "IndexedDbPersistence",
                    "Releasing owner lease after error during lease refresh",
                    t
                  ),
                  !1
                );
              })
              .then(function (t) {
                n.isPrimary !== t &&
                  n.Zr.po(function () {
                    return n.uo(t);
                  }),
                  (n.isPrimary = t);
              });
          }),
          (_h.prototype.Vo = function (t) {
            var e = this;
            return Eh(t)
              .get(Va.key)
              .next(function (t) {
                return la.resolve(e.Do(t));
              });
          }),
          (_h.prototype.Co = function (t) {
            return Ih(t).delete(this.clientId);
          }),
          (_h.prototype.xo = function () {
            return y(this, void 0, void 0, function () {
              var e,
                n,
                r,
                i,
                o = this;
              return v(this, function (t) {
                switch (t.label) {
                  case 0:
                    return !this.isPrimary || this.No(this.ao, 18e5)
                      ? [3, 2]
                      : ((this.ao = Date.now()),
                        [
                          4,
                          this.runTransaction(
                            "maybeGarbageCollectMultiClientState",
                            "readwrite-primary",
                            function (t) {
                              var r = rc(t, Wa.store);
                              return r.rs().next(function (t) {
                                var e = o.$o(t, 18e5),
                                  n = t.filter(function (t) {
                                    return -1 === e.indexOf(t);
                                  });
                                return la
                                  .forEach(n, function (t) {
                                    return r.delete(t.clientId);
                                  })
                                  .next(function () {
                                    return n;
                                  });
                              });
                            }
                          ).catch(function () {
                            return [];
                          }),
                        ]);
                  case 1:
                    if (((e = t.sent()), this.Eo))
                      for (n = 0, r = e; n < r.length; n++)
                        (i = r[n]), this.Eo.removeItem(this.Fo(i.clientId));
                    t.label = 2;
                  case 2:
                    return [2];
                }
              });
            });
          }),
          (_h.prototype.Ao = function () {
            var t = this;
            this.co = this.Zr.Tr("client_metadata_refresh", 4e3, function () {
              return t
                .To()
                .then(function () {
                  return t.xo();
                })
                .then(function () {
                  return t.Ao();
                });
            });
          }),
          (_h.prototype.Do = function (t) {
            return !!t && t.ownerId === this.clientId;
          }),
          (_h.prototype.bo = function (e) {
            var r = this;
            return this.no
              ? la.resolve(!0)
              : Eh(e)
                  .get(Va.key)
                  .next(function (t) {
                    if (
                      null !== t &&
                      r.No(t.leaseTimestampMs, 5e3) &&
                      !r.Oo(t.ownerId)
                    ) {
                      if (r.Do(t) && r.networkEnabled) return !0;
                      if (!r.Do(t)) {
                        if (!t.allowTabSynchronization)
                          throw new zr(Gr.FAILED_PRECONDITION, bh);
                        return !1;
                      }
                    }
                    return (
                      !(!r.networkEnabled || !r.inForeground) ||
                      Ih(e)
                        .rs()
                        .next(function (t) {
                          return (
                            void 0 ===
                            r.$o(t, 5e3).find(function (t) {
                              if (r.clientId !== t.clientId) {
                                var e = !r.networkEnabled && t.networkEnabled,
                                  n = !r.inForeground && t.inForeground,
                                  t = r.networkEnabled === t.networkEnabled;
                                if (e || (n && t)) return !0;
                              }
                              return !1;
                            })
                          );
                        })
                    );
                  })
                  .next(function (t) {
                    return (
                      r.isPrimary !== t &&
                        Dr(
                          "IndexedDbPersistence",
                          "Client " +
                            (t ? "is" : "is not") +
                            " eligible for a primary lease."
                        ),
                      t
                    );
                  });
          }),
          (_h.prototype.ko = function () {
            return y(this, void 0, void 0, function () {
              var n = this;
              return v(this, function (t) {
                switch (t.label) {
                  case 0:
                    return (
                      (this.io = !1),
                      this.Mo(),
                      this.co && (this.co.cancel(), (this.co = null)),
                      this.Lo(),
                      this.Bo(),
                      [
                        4,
                        this.lo.runTransaction(
                          "shutdown",
                          "readwrite",
                          [Va.store, Wa.store],
                          function (t) {
                            var e = new ec(t, ei.q);
                            return n.vo(e).next(function () {
                              return n.Co(e);
                            });
                          }
                        ),
                      ]
                    );
                  case 1:
                    return t.sent(), this.lo.close(), this.qo(), [2];
                }
              });
            });
          }),
          (_h.prototype.$o = function (t, e) {
            var n = this;
            return t.filter(function (t) {
              return n.No(t.updateTimeMs, e) && !n.Oo(t.clientId);
            });
          }),
          (_h.prototype.Uo = function () {
            var e = this;
            return this.runTransaction(
              "getActiveClients",
              "readonly",
              function (t) {
                return Ih(t)
                  .rs()
                  .next(function (t) {
                    return e.$o(t, 18e5).map(function (t) {
                      return t.clientId;
                    });
                  });
              }
            );
          }),
          Object.defineProperty(_h.prototype, "Er", {
            get: function () {
              return this.io;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (_h.prototype.Qo = function (t) {
            return jc.mi(t, this.Qt, this.Ei, this.Ti);
          }),
          (_h.prototype.Sr = function () {
            return this._o;
          }),
          (_h.prototype.$r = function () {
            return this.fo;
          }),
          (_h.prototype.Ko = function () {
            return this.Ei;
          }),
          (_h.prototype.Wo = function () {
            return this.wo;
          }),
          (_h.prototype.runTransaction = function (e, n, r) {
            var i = this;
            Dr("IndexedDbPersistence", "Starting transaction:", e);
            var o,
              t = "readonly" === n ? "readonly" : "readwrite";
            return this.lo
              .runTransaction(e, t, tc, function (t) {
                return (
                  (o = new ec(t, i.so ? i.so.next() : ei.q)),
                  "readwrite-primary" === n
                    ? i
                        .Vo(o)
                        .next(function (t) {
                          return !!t || i.bo(o);
                        })
                        .next(function (t) {
                          if (!t)
                            throw (
                              (Or(
                                "Failed to obtain primary lease for action '" +
                                  e +
                                  "'."
                              ),
                              (i.isPrimary = !1),
                              i.Zr.po(function () {
                                return i.uo(!1);
                              }),
                              new zr(Gr.FAILED_PRECONDITION, ka))
                            );
                          return r(o);
                        })
                        .next(function (t) {
                          return i.So(o).next(function () {
                            return t;
                          });
                        })
                    : i.jo(o).next(function () {
                        return r(o);
                      })
                );
              })
              .then(function (t) {
                return o.Vs(), t;
              });
          }),
          (_h.prototype.jo = function (t) {
            var e = this;
            return Eh(t)
              .get(Va.key)
              .next(function (t) {
                if (
                  null !== t &&
                  e.No(t.leaseTimestampMs, 5e3) &&
                  !e.Oo(t.ownerId) &&
                  !e.Do(t) &&
                  !(
                    e.no ||
                    (e.allowTabSynchronization && t.allowTabSynchronization)
                  )
                )
                  throw new zr(Gr.FAILED_PRECONDITION, bh);
              });
          }),
          (_h.prototype.So = function (t) {
            var e = new Va(
              this.clientId,
              this.allowTabSynchronization,
              Date.now()
            );
            return Eh(t).put(Va.key, e);
          }),
          (_h.Kn = function () {
            return da.Kn();
          }),
          (_h.prototype.vo = function (t) {
            var e = this,
              n = Eh(t);
            return n.get(Va.key).next(function (t) {
              return e.Do(t)
                ? (Dr("IndexedDbPersistence", "Releasing primary lease."),
                  n.delete(Va.key))
                : la.resolve();
            });
          }),
          (_h.prototype.No = function (t, e) {
            var n = Date.now();
            return !(
              t < n - e ||
              (n < t &&
                (Or(
                  "Detected an update time that is in the future: " +
                    t +
                    " > " +
                    n
                ),
                1))
            );
          }),
          (_h.prototype.Io = function () {
            var t = this;
            null !== this.document &&
              "function" == typeof this.document.addEventListener &&
              ((this.oo = function () {
                t.Zr.Ps(function () {
                  return (
                    (t.inForeground = "visible" === t.document.visibilityState),
                    t.To()
                  );
                });
              }),
              this.document.addEventListener("visibilitychange", this.oo),
              (this.inForeground =
                "visible" === this.document.visibilityState));
          }),
          (_h.prototype.Lo = function () {
            this.oo &&
              (this.document.removeEventListener("visibilitychange", this.oo),
              (this.oo = null));
          }),
          (_h.prototype.mo = function () {
            var t,
              e = this;
            "function" ==
              typeof (null === (t = this.window) || void 0 === t
                ? void 0
                : t.addEventListener) &&
              ((this.ro = function () {
                e.Mo(),
                  e.Zr.Ps(function () {
                    return e.ko();
                  });
              }),
              this.window.addEventListener("unload", this.ro));
          }),
          (_h.prototype.Bo = function () {
            this.ro &&
              (this.window.removeEventListener("unload", this.ro),
              (this.ro = null));
          }),
          (_h.prototype.Oo = function (t) {
            try {
              var e =
                null !==
                (null === (e = this.Eo) || void 0 === e
                  ? void 0
                  : e.getItem(this.Fo(t)));
              return (
                Dr(
                  "IndexedDbPersistence",
                  "Client '" +
                    t +
                    "' " +
                    (e ? "is" : "is not") +
                    " zombied in LocalStorage"
                ),
                e
              );
            } catch (t) {
              return (
                Or(
                  "IndexedDbPersistence",
                  "Failed to get zombied client id.",
                  t
                ),
                !1
              );
            }
          }),
          (_h.prototype.Mo = function () {
            if (this.Eo)
              try {
                this.Eo.setItem(this.Fo(this.clientId), String(Date.now()));
              } catch (t) {
                Or("Failed to set zombie client id.", t);
              }
          }),
          (_h.prototype.qo = function () {
            if (this.Eo)
              try {
                this.Eo.removeItem(this.Fo(this.clientId));
              } catch (t) {}
          }),
          (_h.prototype.Fo = function (t) {
            return "firestore_zombie_" + this.persistenceKey + "_" + t;
          }),
          _h);
      function _h(t, e, n, r, i, o, s, u, a, c) {
        if (
          ((this.allowTabSynchronization = t),
          (this.persistenceKey = e),
          (this.clientId = n),
          (this.Zr = i),
          (this.window = o),
          (this.document = s),
          (this.eo = a),
          (this.no = c),
          (this.so = null),
          (this.io = !1),
          (this.isPrimary = !1),
          (this.networkEnabled = !0),
          (this.ro = null),
          (this.inForeground = !1),
          (this.oo = null),
          (this.co = null),
          (this.ao = Number.NEGATIVE_INFINITY),
          (this.uo = function (t) {
            return Promise.resolve();
          }),
          !_h.Kn())
        )
          throw new zr(
            Gr.UNIMPLEMENTED,
            "This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled."
          );
        (this.Ti = new nh(this, r)),
          (this.ho = e + "main"),
          (this.Qt = new sc(u)),
          (this.lo = new da(this.ho, 11, new vh(this.Qt))),
          (this._o = new Qc(this.Ti, this.Qt)),
          (this.Ei = new Nc()),
          (this.fo = ((e = this.Qt), (u = this.Ei), new ch(e, u))),
          (this.wo = new bc()),
          this.window && this.window.localStorage
            ? (this.Eo = this.window.localStorage)
            : ((this.Eo = null),
              !1 === c &&
                Or(
                  "IndexedDbPersistence",
                  "LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."
                ));
      }
      function Eh(t) {
        return rc(t, Va.store);
      }
      function Ih(t) {
        return rc(t, Wa.store);
      }
      function Th(t, e) {
        var n = t.projectId;
        return t.o || (n += "." + t.database), "firestore/" + e + "/" + n + "/";
      }
      function Nh(t, e) {
        (this.progress = t), (this.Go = e);
      }
      var Ah =
          ((Ch.prototype.Ho = function (e, n) {
            var r = this;
            return this.zo.bi(e, n).next(function (t) {
              return r.Jo(e, n, t);
            });
          }),
          (Ch.prototype.Jo = function (t, r, i) {
            return this.fo._i(t, r).next(function (t) {
              for (var e = 0, n = i; e < n.length; e++) t = n[e].Cs(r, t);
              return t;
            });
          }),
          (Ch.prototype.Yo = function (t, e, i) {
            var o = cu;
            return (
              e.forEach(function (t, e) {
                for (var n = 0, r = i; n < r.length; n++) e = r[n].Cs(t, e);
                o = o.zt(t, e);
              }),
              o
            );
          }),
          (Ch.prototype.Xo = function (e, t) {
            var n = this;
            return this.fo.getEntries(e, t).next(function (t) {
              return n.Zo(e, t);
            });
          }),
          (Ch.prototype.Zo = function (e, r) {
            var i = this;
            return this.zo.vi(e, r).next(function (t) {
              var t = i.Yo(e, r, t),
                n = cu;
              return (
                t.forEach(function (t, e) {
                  (e = e || new eo(t, hi.min())), (n = n.zt(t, e));
                }),
                n
              );
            });
          }),
          (Ch.prototype.Kr = function (t, e, n) {
            return (
              (r = e),
              di.wt(r.path) &&
              null === r.collectionGroup &&
              0 === r.filters.length
                ? this.tc(t, e.path)
                : Xo(e)
                ? this.ec(t, e, n)
                : this.nc(t, e, n)
            );
            var r;
          }),
          (Ch.prototype.tc = function (t, e) {
            return this.Ho(t, new di(e)).next(function (t) {
              var e = lu;
              return (e = t instanceof to ? e.zt(t.key, t) : e);
            });
          }),
          (Ch.prototype.ec = function (n, r, i) {
            var o = this,
              s = r.collectionGroup,
              u = lu;
            return this.Ei.Us(n, s).next(function (t) {
              return la
                .forEach(t, function (t) {
                  var e,
                    e =
                      ((e = r),
                      (t = t.child(s)),
                      new Bo(
                        t,
                        null,
                        e.xt.slice(),
                        e.filters.slice(),
                        e.limit,
                        e.limitType,
                        e.startAt,
                        e.endAt
                      ));
                  return o.nc(n, e, i).next(function (t) {
                    t.forEach(function (t, e) {
                      u = u.zt(t, e);
                    });
                  });
                })
                .next(function () {
                  return u;
                });
            });
          }),
          (Ch.prototype.nc = function (e, n, t) {
            var a,
              c,
              r = this;
            return this.fo
              .Kr(e, n, t)
              .next(function (t) {
                return (a = t), r.zo.Di(e, n);
              })
              .next(function (t) {
                return (
                  (c = t),
                  r.sc(e, c, a).next(function (t) {
                    a = t;
                    for (var e = 0, n = c; e < n.length; e++)
                      for (
                        var r = n[e], i = 0, o = r.mutations;
                        i < o.length;
                        i++
                      ) {
                        var s = o[i],
                          u = s.key,
                          s = ks(s, a.get(u), r.vs);
                        a = s instanceof to ? a.zt(u, s) : a.remove(u);
                      }
                  })
                );
              })
              .next(function () {
                return (
                  a.forEach(function (t, e) {
                    ns(n, e) || (a = a.remove(t));
                  }),
                  a
                );
              });
          }),
          (Ch.prototype.sc = function (t, e, n) {
            for (var r = yu(), i = 0, o = e; i < o.length; i++)
              for (var s = 0, u = o[i].mutations; s < u.length; s++) {
                var a = u[s];
                a instanceof Ms && null === n.get(a.key) && (r = r.add(a.key));
              }
            var c = n;
            return this.fo.getEntries(t, r).next(function (t) {
              return (
                t.forEach(function (t, e) {
                  null !== e && e instanceof to && (c = c.zt(t, e));
                }),
                c
              );
            });
          }),
          Ch),
        Sh =
          ((Ph.oc = function (t, e) {
            for (
              var n = yu(), r = yu(), i = 0, o = e.docChanges;
              i < o.length;
              i++
            ) {
              var s = o[i];
              switch (s.type) {
                case 0:
                  n = n.add(s.doc.key);
                  break;
                case 1:
                  r = r.add(s.doc.key);
              }
            }
            return new Ph(t, e.fromCache, n, r);
          }),
          Ph),
        xh =
          ((kh.prototype.cc = function (t) {
            this.ac = t;
          }),
          (kh.prototype.Kr = function (e, r, i, o) {
            var s = this;
            return (0 === r.filters.length &&
              null === r.limit &&
              null == r.startAt &&
              null == r.endAt &&
              (0 === r.xt.length ||
                (1 === r.xt.length && r.xt[0].field.ut()))) ||
              i.isEqual(hi.min())
              ? this.uc(e, r)
              : this.ac.Xo(e, o).next(function (t) {
                  var n = s.hc(r, t);
                  return (Ho(r) || Qo(r)) && s.lc(r.limitType, n, o, i)
                    ? s.uc(e, r)
                    : (xr() <= l.DEBUG &&
                        Dr(
                          "QueryEngine",
                          "Re-using previous result from %s to execute query: %s",
                          i.toString(),
                          es(r)
                        ),
                      s.ac.Kr(e, r, i).next(function (e) {
                        return (
                          n.forEach(function (t) {
                            e = e.zt(t.key, t);
                          }),
                          e
                        );
                      }));
                });
          }),
          (kh.prototype.hc = function (n, t) {
            var r = new uu(rs(n));
            return (
              t.forEach(function (t, e) {
                e instanceof to && ns(n, e) && (r = r.add(e));
              }),
              r
            );
          }),
          (kh.prototype.lc = function (t, e, n, r) {
            if (n.size !== e.size) return !0;
            e = "F" === t ? e.last() : e.first();
            return !!e && (e.hasPendingWrites || 0 < e.version._(r));
          }),
          (kh.prototype.uc = function (t, e) {
            return (
              xr() <= l.DEBUG &&
                Dr(
                  "QueryEngine",
                  "Using full collection scan to execute query:",
                  es(e)
                ),
              this.ac.Kr(t, e, hi.min())
            );
          }),
          kh),
        Dh =
          ((Oh.prototype.Ir = function (e) {
            var n = this;
            return this.persistence.runTransaction(
              "Collect garbage",
              "readwrite-primary",
              function (t) {
                return e.Vr(t, n.fc);
              }
            );
          }),
          Oh);
      function Oh(t, e, n, r) {
        (this.persistence = t),
          (this._c = e),
          (this.Qt = r),
          (this.fc = new tu(Mr)),
          (this.dc = new Lc(ao, co)),
          (this.wc = hi.min()),
          (this.zo = t.Qo(n)),
          (this.Ec = t.$r()),
          (this._o = t.Sr()),
          (this.Tc = new Ah(this.Ec, this.zo, this.persistence.Ko())),
          (this.wo = t.Wo()),
          this._c.cc(this.Tc);
      }
      function kh() {}
      function Ph(t, e, n, r) {
        (this.targetId = t), (this.fromCache = e), (this.ic = n), (this.rc = r);
      }
      function Ch(t, e, n) {
        (this.fo = t), (this.zo = e), (this.Ei = n);
      }
      function Lh(t, e, n, r) {
        return new Dh(t, e, n, r);
      }
      function Rh(i, o) {
        return y(this, void 0, void 0, function () {
          var e, n, m, r;
          return v(this, function (t) {
            switch (t.label) {
              case 0:
                return (
                  (n = (e = i).zo),
                  (m = e.Tc),
                  [
                    4,
                    e.persistence.runTransaction(
                      "Handle user change",
                      "readonly",
                      function (v) {
                        var g;
                        return e.zo
                          .pi(v)
                          .next(function (t) {
                            return (
                              (g = t),
                              (n = e.persistence.Qo(o)),
                              (m = new Ah(e.Ec, n, e.persistence.Ko())),
                              n.pi(v)
                            );
                          })
                          .next(function (t) {
                            for (
                              var e = [], n = [], r = yu(), i = 0, o = g;
                              i < o.length;
                              i++
                            ) {
                              var s = o[i];
                              e.push(s.batchId);
                              for (
                                var u = 0, a = s.mutations;
                                u < a.length;
                                u++
                              )
                                var c = a[u], r = r.add(c.key);
                            }
                            for (var h = 0, f = t; h < f.length; h++) {
                              var l = f[h];
                              n.push(l.batchId);
                              for (
                                var p = 0, d = l.mutations;
                                p < d.length;
                                p++
                              ) {
                                var y = d[p];
                                r = r.add(y.key);
                              }
                            }
                            return m.Xo(v, r).next(function (t) {
                              return { Ic: t, mc: e, Ac: n };
                            });
                          });
                      }
                    ),
                  ]
                );
              case 1:
                return (
                  (r = t.sent()),
                  [2, ((e.zo = n), (e.Tc = m), e._c.cc(e.Tc), r)]
                );
            }
          });
        });
      }
      function Vh(t, h) {
        var f = t;
        return f.persistence.runTransaction(
          "Acknowledge batch",
          "readwrite-primary",
          function (t) {
            var e,
              r,
              i,
              o,
              s,
              n,
              u,
              a = h.batch.keys(),
              c = f.Ec.Nr({ Wr: !0 });
            return (
              (e = f),
              (r = t),
              (o = c),
              (s = (i = h).batch),
              (n = s.keys()),
              (u = la.resolve()),
              n.forEach(function (n) {
                u = u
                  .next(function () {
                    return o._i(r, n);
                  })
                  .next(function (t) {
                    var e = t,
                      t = i.$s.get(n);
                    Lr(null !== t),
                      (!e || e.version._(t) < 0) &&
                        (e = s.Ss(n, e, i)) &&
                        o.ai(e, i.Ns);
                  });
              }),
              u
                .next(function () {
                  return e.zo.Ci(r, s);
                })
                .next(function () {
                  return c.apply(t);
                })
                .next(function () {
                  return f.zo.$i(t);
                })
                .next(function () {
                  return f.Tc.Xo(t, a);
                })
            );
          }
        );
      }
      function Mh(t) {
        var e = t;
        return e.persistence.runTransaction(
          "Get last remote snapshot version",
          "readonly",
          function (t) {
            return e._o.Qi(t);
          }
        );
      }
      function Uh(t, r) {
        var a = t,
          c = r.Ot,
          h = a.fc;
        return a.persistence
          .runTransaction(
            "Apply remote event",
            "readwrite-primary",
            function (s) {
              var t = a.Ec.Nr({ Wr: !0 });
              h = a.fc;
              var u = [];
              r.$e.forEach(function (t, e) {
                var n,
                  r,
                  i,
                  o = h.get(e);
                o &&
                  (u.push(
                    a._o.sr(s, t.Qe, e).next(function () {
                      return a._o.er(s, t.qe, e);
                    })
                  ),
                  0 < (i = t.resumeToken).l() &&
                    ((n = o.Mt(i, c).kt(s.bs)),
                    (h = h.zt(e, n)),
                    (r = o),
                    (i = t),
                    Lr(0 < (o = n).resumeToken.l()),
                    (0 === r.resumeToken.l() ||
                      3e8 <= o.Ot.W() - r.Ot.W() ||
                      0 < i.qe.size + i.Ue.size + i.Qe.size) &&
                      u.push(a._o.Hi(s, n))));
              });
              var e,
                n = cu;
              return (
                r.Oe.forEach(function (t, e) {
                  r.ke.has(t) && u.push(a.persistence.Ti.Fr(s, t));
                }),
                u.push(
                  jh(s, t, r.Oe, c, void 0).next(function (t) {
                    n = t;
                  })
                ),
                c.isEqual(hi.min()) ||
                  ((e = a._o.Qi(s).next(function (t) {
                    return a._o.Wi(s, s.bs, c);
                  })),
                  u.push(e)),
                la
                  .Mn(u)
                  .next(function () {
                    return t.apply(s);
                  })
                  .next(function () {
                    return a.Tc.Zo(s, n);
                  })
              );
            }
          )
          .then(function (t) {
            return (a.fc = h), t;
          });
      }
      function jh(t, s, e, u, a) {
        var n = yu();
        return (
          e.forEach(function (t) {
            return (n = n.add(t));
          }),
          s.getEntries(t, n).next(function (i) {
            var o = cu;
            return (
              e.forEach(function (t, e) {
                var n = i.get(t),
                  r = (null == a ? void 0 : a.get(t)) || u;
                e instanceof eo && e.version.isEqual(hi.min())
                  ? (s.li(t, r), (o = o.zt(t, e)))
                  : null == n ||
                    0 < e.version._(n.version) ||
                    (0 === e.version._(n.version) && n.hasPendingWrites)
                  ? (s.ai(e, r), (o = o.zt(t, e)))
                  : Dr(
                      "LocalStore",
                      "Ignoring outdated watch update for ",
                      t,
                      ". Current version:",
                      n.version,
                      " Watch version:",
                      e.version
                    );
              }),
              o
            );
          })
        );
      }
      function Fh(t, r) {
        var i = t;
        return i.persistence
          .runTransaction("Allocate target", "readwrite", function (e) {
            var n;
            return i._o.tr(e, r).next(function (t) {
              return t
                ? ((n = t), la.resolve(n))
                : i._o.Bi(e).next(function (t) {
                    return (
                      (n = new is(r, t, 0, e.bs)),
                      i._o.ji(e, n).next(function () {
                        return n;
                      })
                    );
                  });
            });
          })
          .then(function (t) {
            var e = i.fc.get(t.targetId);
            return (
              (null === e || 0 < t.Ot._(e.Ot)) &&
                ((i.fc = i.fc.zt(t.targetId, t)), i.dc.set(r, t.targetId)),
              t
            );
          });
      }
      function qh(i, o, s) {
        return y(this, void 0, void 0, function () {
          var e, n, r;
          return v(this, function (t) {
            switch (t.label) {
              case 0:
                (n = (e = i).fc.get(o)),
                  (r = s ? "readwrite" : "readwrite-primary"),
                  (t.label = 1);
              case 1:
                return (
                  t.trys.push([1, 4, , 5]),
                  s
                    ? [3, 3]
                    : [
                        4,
                        e.persistence.runTransaction(
                          "Release target",
                          r,
                          function (t) {
                            return e.persistence.Ti.removeTarget(t, n);
                          }
                        ),
                      ]
                );
              case 2:
                t.sent(), (t.label = 3);
              case 3:
                return [3, 5];
              case 4:
                if (!Ea((r = t.sent()))) throw r;
                return (
                  Dr(
                    "LocalStore",
                    "Failed to update sequence numbers for target " +
                      o +
                      ": " +
                      r
                  ),
                  [3, 5]
                );
              case 5:
                return (e.fc = e.fc.remove(o)), e.dc.delete(n.target), [2];
            }
          });
        });
      }
      function Bh(t, o, s) {
        var u = t,
          a = hi.min(),
          c = yu();
        return u.persistence.runTransaction(
          "Execute query",
          "readonly",
          function (e) {
            return (
              (t = u),
              (n = e),
              (r = Jo(o)),
              (void 0 !== (t = (i = t).dc.get(r))
                ? la.resolve(i.fc.get(t))
                : i._o.tr(n, r)
              )
                .next(function (t) {
                  if (t)
                    return (
                      (a = t.lastLimboFreeSnapshotVersion),
                      u._o.rr(e, t.targetId).next(function (t) {
                        c = t;
                      })
                    );
                })
                .next(function () {
                  return u._c.Kr(e, o, s ? a : hi.min(), s ? c : yu());
                })
                .next(function (t) {
                  return { documents: t, Rc: c };
                })
            );
            var t, n, r, i;
          }
        );
      }
      function Gh(t, e) {
        var n = t,
          r = n._o,
          t = n.fc.get(e);
        return t
          ? Promise.resolve(t.target)
          : n.persistence.runTransaction(
              "Get target data",
              "readonly",
              function (t) {
                return r.Sn(t, e).next(function (t) {
                  return t ? t.target : null;
                });
              }
            );
      }
      function zh(t) {
        var s = t;
        return s.persistence
          .runTransaction("Get new document changes", "readonly", function (t) {
            return (
              (e = s.Ec),
              (n = t),
              (t = s.wc),
              (r = e),
              (i = cu),
              (o = fc(t)),
              (t = dh(n)),
              (n = IDBKeyRange.lowerBound(o, !0)),
              t
                .hs({ index: za.readTimeIndex, range: n }, function (t, e) {
                  var n = cc(r.Qt, e);
                  (i = i.zt(n.key, n)), (o = e.readTime);
                })
                .next(function () {
                  return { Go: i, readTime: lc(o) };
                })
            );
            var e, n, r, i, o;
          })
          .then(function (t) {
            var e = t.Go,
              t = t.readTime;
            return (s.wc = t), e;
          });
      }
      function Hh(n) {
        return y(this, void 0, void 0, function () {
          var e;
          return v(this, function (t) {
            return [
              2,
              (e = n).persistence
                .runTransaction(
                  "Synchronize last document change read time",
                  "readonly",
                  function (t) {
                    return (
                      (t = dh(t)),
                      (r = hi.min()),
                      t
                        .hs(
                          { index: za.readTimeIndex, reverse: !0 },
                          function (t, e, n) {
                            e.readTime && (r = lc(e.readTime)), n.done();
                          }
                        )
                        .next(function () {
                          return r;
                        })
                    );
                    var r;
                  }
                )
                .then(function (t) {
                  e.wc = t;
                }),
            ];
          });
        });
      }
      var Qh,
        Yh,
        Kh =
          ((df.prototype.Os = function (t, e) {
            return la.resolve(this.Vc.get(e));
          }),
          (df.prototype.ks = function (t, e) {
            return (
              this.Vc.set(e.id, {
                id: e.id,
                version: e.version,
                createTime: qu(e.createTime),
              }),
              la.resolve()
            );
          }),
          (df.prototype.Ms = function (t, e) {
            return la.resolve(this.bc.get(e));
          }),
          (df.prototype.Ls = function (t, e) {
            return (
              this.bc.set(e.name, {
                name: (e = e).name,
                query: mc(e.bundledQuery),
                readTime: qu(e.readTime),
              }),
              la.resolve()
            );
          }),
          df),
        Xh =
          ((pf.prototype.et = function () {
            return this.vc.et();
          }),
          (pf.prototype.nr = function (t, e) {
            e = new Wh(t, e);
            (this.vc = this.vc.add(e)), (this.Dc = this.Dc.add(e));
          }),
          (pf.prototype.xc = function (t, e) {
            var n = this;
            t.forEach(function (t) {
              return n.nr(t, e);
            });
          }),
          (pf.prototype.ir = function (t, e) {
            this.Nc(new Wh(t, e));
          }),
          (pf.prototype.$c = function (t, e) {
            var n = this;
            t.forEach(function (t) {
              return n.ir(t, e);
            });
          }),
          (pf.prototype.Fc = function (t) {
            var e = this,
              n = new di(new fi([])),
              r = new Wh(n, t),
              t = new Wh(n, t + 1),
              i = [];
            return (
              this.Dc.me([r, t], function (t) {
                e.Nc(t), i.push(t.key);
              }),
              i
            );
          }),
          (pf.prototype.Oc = function () {
            var e = this;
            this.vc.forEach(function (t) {
              return e.Nc(t);
            });
          }),
          (pf.prototype.Nc = function (t) {
            (this.vc = this.vc.delete(t)), (this.Dc = this.Dc.delete(t));
          }),
          (pf.prototype.kc = function (t) {
            var e = new di(new fi([])),
              n = new Wh(e, t),
              t = new Wh(e, t + 1),
              r = yu();
            return (
              this.Dc.me([n, t], function (t) {
                r = r.add(t.key);
              }),
              r
            );
          }),
          (pf.prototype.Fi = function (t) {
            var e = new Wh(t, 0),
              e = this.vc.Re(e);
            return null !== e && t.isEqual(e.key);
          }),
          pf),
        Wh =
          ((lf.Sc = function (t, e) {
            return di.H(t.key, e.key) || Mr(t.Mc, e.Mc);
          }),
          (lf.Cc = function (t, e) {
            return Mr(t.Mc, e.Mc) || di.H(t.key, e.key);
          }),
          lf),
        Jh =
          ((ff.prototype.Ai = function (t) {
            return la.resolve(0 === this.zo.length);
          }),
          (ff.prototype.Ri = function (t, e, n, r) {
            var i = this.Lc;
            this.Lc++, 0 < this.zo.length && this.zo[this.zo.length - 1];
            n = new ic(i, e, n, r);
            this.zo.push(n);
            for (var o = 0, s = r; o < s.length; o++) {
              var u = s[o];
              (this.Bc = this.Bc.add(new Wh(u.key, i))),
                this.Ei.qs(t, u.key.path.X());
            }
            return la.resolve(n);
          }),
          (ff.prototype.Pi = function (t, e) {
            return la.resolve(this.qc(e));
          }),
          (ff.prototype.gi = function (t, e) {
            (e += 1), (e = this.Uc(e)), (e = e < 0 ? 0 : e);
            return la.resolve(this.zo.length > e ? this.zo[e] : null);
          }),
          (ff.prototype.Vi = function () {
            return la.resolve(0 === this.zo.length ? -1 : this.Lc - 1);
          }),
          (ff.prototype.pi = function (t) {
            return la.resolve(this.zo.slice());
          }),
          (ff.prototype.bi = function (t, e) {
            var n = this,
              r = new Wh(e, 0),
              e = new Wh(e, Number.POSITIVE_INFINITY),
              i = [];
            return (
              this.Bc.me([r, e], function (t) {
                t = n.qc(t.Mc);
                i.push(t);
              }),
              la.resolve(i)
            );
          }),
          (ff.prototype.vi = function (t, e) {
            var n = this,
              r = new uu(Mr);
            return (
              e.forEach(function (t) {
                var e = new Wh(t, 0),
                  t = new Wh(t, Number.POSITIVE_INFINITY);
                n.Bc.me([e, t], function (t) {
                  r = r.add(t.Mc);
                });
              }),
              la.resolve(this.Qc(r))
            );
          }),
          (ff.prototype.Di = function (t, e) {
            var n = e.path,
              r = n.length + 1,
              e = n;
            di.wt(e) || (e = e.child(""));
            var e = new Wh(new di(e), 0),
              i = new uu(Mr);
            return (
              this.Bc.Ae(function (t) {
                var e = t.key.path;
                return !!n.nt(e) && (e.length === r && (i = i.add(t.Mc)), !0);
              }, e),
              la.resolve(this.Qc(i))
            );
          }),
          (ff.prototype.Qc = function (t) {
            var e = this,
              n = [];
            return (
              t.forEach(function (t) {
                t = e.qc(t);
                null !== t && n.push(t);
              }),
              n
            );
          }),
          (ff.prototype.Ci = function (n, r) {
            var i = this;
            Lr(0 === this.Kc(r.batchId, "removed")), this.zo.shift();
            var o = this.Bc;
            return la
              .forEach(r.mutations, function (t) {
                var e = new Wh(t.key, r.batchId);
                return (o = o.delete(e)), i.Ti.Ni(n, t.key);
              })
              .next(function () {
                i.Bc = o;
              });
          }),
          (ff.prototype.xi = function (t) {}),
          (ff.prototype.Fi = function (t, e) {
            var n = new Wh(e, 0),
              n = this.Bc.Re(n);
            return la.resolve(e.isEqual(n && n.key));
          }),
          (ff.prototype.$i = function (t) {
            return this.zo.length, la.resolve();
          }),
          (ff.prototype.Kc = function (t, e) {
            return this.Uc(t);
          }),
          (ff.prototype.Uc = function (t) {
            return 0 === this.zo.length ? 0 : t - this.zo[0].batchId;
          }),
          (ff.prototype.qc = function (t) {
            t = this.Uc(t);
            return t < 0 || t >= this.zo.length ? null : this.zo[t];
          }),
          ff),
        Zh =
          ((hf.prototype.ai = function (t, e, n) {
            var r = e.key,
              i = this.docs.get(r),
              o = i ? i.size : 0,
              i = this.Wc(e);
            return (
              (this.docs = this.docs.zt(r, { hi: e, size: i, readTime: n })),
              (this.size += i - o),
              this.Ei.qs(t, r.path.X())
            );
          }),
          (hf.prototype.li = function (t) {
            var e = this.docs.get(t);
            e && ((this.docs = this.docs.remove(t)), (this.size -= e.size));
          }),
          (hf.prototype._i = function (t, e) {
            e = this.docs.get(e);
            return la.resolve(e ? e.hi : null);
          }),
          (hf.prototype.getEntries = function (t, e) {
            var n = this,
              r = cu;
            return (
              e.forEach(function (t) {
                var e = n.docs.get(t);
                r = r.zt(t, e ? e.hi : null);
              }),
              la.resolve(r)
            );
          }),
          (hf.prototype.Kr = function (t, e, n) {
            for (
              var r = lu, i = new di(e.path.child("")), o = this.docs.ee(i);
              o.ce();

            ) {
              var s = o.oe(),
                u = s.key,
                a = s.value,
                s = a.hi,
                a = a.readTime;
              if (!e.path.nt(u.path)) break;
              a._(n) <= 0 ||
                (s instanceof to && ns(e, s) && (r = r.zt(s.key, s)));
            }
            return la.resolve(r);
          }),
          (hf.prototype.jc = function (t, e) {
            return la.forEach(this.docs, function (t) {
              return e(t);
            });
          }),
          (hf.prototype.Nr = function (t) {
            return new $h(this);
          }),
          (hf.prototype.Or = function (t) {
            return la.resolve(this.size);
          }),
          hf),
        $h =
          (h(cf, (Yh = Ie)),
          (cf.prototype.wi = function (n) {
            var r = this,
              i = [];
            return (
              this.ri.forEach(function (t, e) {
                e && e.hi ? i.push(r.jr.ai(n, e.hi, r.ci(t))) : r.jr.li(t);
              }),
              la.Mn(i)
            );
          }),
          (cf.prototype.fi = function (t, e) {
            return this.jr._i(t, e);
          }),
          (cf.prototype.di = function (t, e) {
            return this.jr.getEntries(t, e);
          }),
          cf),
        tf =
          ((af.prototype.In = function (t, n) {
            return (
              this.Gc.forEach(function (t, e) {
                return n(e);
              }),
              la.resolve()
            );
          }),
          (af.prototype.Qi = function (t) {
            return la.resolve(this.lastRemoteSnapshotVersion);
          }),
          (af.prototype.Ki = function (t) {
            return la.resolve(this.zc);
          }),
          (af.prototype.Bi = function (t) {
            return (
              (this.highestTargetId = this.Jc.next()),
              la.resolve(this.highestTargetId)
            );
          }),
          (af.prototype.Wi = function (t, e, n) {
            return (
              n && (this.lastRemoteSnapshotVersion = n),
              e > this.zc && (this.zc = e),
              la.resolve()
            );
          }),
          (af.prototype.Gi = function (t) {
            this.Gc.set(t.target, t);
            var e = t.targetId;
            e > this.highestTargetId &&
              ((this.Jc = new Hc(e)), (this.highestTargetId = e)),
              t.sequenceNumber > this.zc && (this.zc = t.sequenceNumber);
          }),
          (af.prototype.ji = function (t, e) {
            return this.Gi(e), (this.targetCount += 1), la.resolve();
          }),
          (af.prototype.Hi = function (t, e) {
            return this.Gi(e), la.resolve();
          }),
          (af.prototype.Ji = function (t, e) {
            return (
              this.Gc.delete(e.target),
              this.Hc.Fc(e.targetId),
              --this.targetCount,
              la.resolve()
            );
          }),
          (af.prototype.Xi = function (n, r, i) {
            var o = this,
              s = 0,
              u = [];
            return (
              this.Gc.forEach(function (t, e) {
                e.sequenceNumber <= r &&
                  null === i.get(e.targetId) &&
                  (o.Gc.delete(t), u.push(o.Yi(n, e.targetId)), s++);
              }),
              la.Mn(u).next(function () {
                return s;
              })
            );
          }),
          (af.prototype.Zi = function (t) {
            return la.resolve(this.targetCount);
          }),
          (af.prototype.tr = function (t, e) {
            e = this.Gc.get(e) || null;
            return la.resolve(e);
          }),
          (af.prototype.er = function (t, e, n) {
            return this.Hc.xc(e, n), la.resolve();
          }),
          (af.prototype.sr = function (e, t, n) {
            this.Hc.$c(t, n);
            var r = this.persistence.Ti,
              i = [];
            return (
              r &&
                t.forEach(function (t) {
                  i.push(r.Ni(e, t));
                }),
              la.Mn(i)
            );
          }),
          (af.prototype.Yi = function (t, e) {
            return this.Hc.Fc(e), la.resolve();
          }),
          (af.prototype.rr = function (t, e) {
            e = this.Hc.kc(e);
            return la.resolve(e);
          }),
          (af.prototype.Fi = function (t, e) {
            return la.resolve(this.Hc.Fi(e));
          }),
          af),
        ef =
          ((uf.prototype.start = function () {
            return Promise.resolve();
          }),
          (uf.prototype.ko = function () {
            return (this.io = !1), Promise.resolve();
          }),
          Object.defineProperty(uf.prototype, "Er", {
            get: function () {
              return this.io;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (uf.prototype.Po = function () {}),
          (uf.prototype.yo = function () {}),
          (uf.prototype.Ko = function () {
            return this.Ei;
          }),
          (uf.prototype.Qo = function (t) {
            var e = this.Yc[t.A()];
            return (
              e || ((e = new Jh(this.Ei, this.Ti)), (this.Yc[t.A()] = e)), e
            );
          }),
          (uf.prototype.Sr = function () {
            return this._o;
          }),
          (uf.prototype.$r = function () {
            return this.fo;
          }),
          (uf.prototype.Wo = function () {
            return this.wo;
          }),
          (uf.prototype.runTransaction = function (t, e, n) {
            var r = this;
            Dr("MemoryPersistence", "Starting transaction:", t);
            var i = new nf(this.so.next());
            return (
              this.Ti.Zc(),
              n(i)
                .next(function (t) {
                  return r.Ti.ta(i).next(function () {
                    return t;
                  });
                })
                .On()
                .then(function (t) {
                  return i.Vs(), t;
                })
            );
          }),
          (uf.prototype.ea = function (e, n) {
            return la.Ln(
              Object.values(this.Yc).map(function (t) {
                return function () {
                  return t.Fi(e, n);
                };
              })
            );
          }),
          uf),
        nf = (h(sf, (Qh = o)), sf),
        rf =
          ((of.ia = function (t) {
            return new of(t);
          }),
          Object.defineProperty(of.prototype, "ra", {
            get: function () {
              if (this.sa) return this.sa;
              throw Cr();
            },
            enumerable: !1,
            configurable: !0,
          }),
          (of.prototype.nr = function (t, e, n) {
            return this.na.nr(n, e), this.ra.delete(n.toString()), la.resolve();
          }),
          (of.prototype.ir = function (t, e, n) {
            return this.na.ir(n, e), this.ra.add(n.toString()), la.resolve();
          }),
          (of.prototype.Ni = function (t, e) {
            return this.ra.add(e.toString()), la.resolve();
          }),
          (of.prototype.removeTarget = function (t, e) {
            var n = this;
            this.na.Fc(e.targetId).forEach(function (t) {
              return n.ra.add(t.toString());
            });
            var r = this.persistence.Sr();
            return r
              .rr(t, e.targetId)
              .next(function (t) {
                t.forEach(function (t) {
                  return n.ra.add(t.toString());
                });
              })
              .next(function () {
                return r.Ji(t, e);
              });
          }),
          (of.prototype.Zc = function () {
            this.sa = new Set();
          }),
          (of.prototype.ta = function (n) {
            var r = this,
              i = this.persistence.$r().Nr();
            return la
              .forEach(this.ra, function (t) {
                var e = di._t(t);
                return r.oa(n, e).next(function (t) {
                  t || i.li(e);
                });
              })
              .next(function () {
                return (r.sa = null), i.apply(n);
              });
          }),
          (of.prototype.Fr = function (t, e) {
            var n = this;
            return this.oa(t, e).next(function (t) {
              t ? n.ra.delete(e.toString()) : n.ra.add(e.toString());
            });
          }),
          (of.prototype.Xc = function (t) {
            return 0;
          }),
          (of.prototype.oa = function (t, e) {
            var n = this;
            return la.Ln([
              function () {
                return la.resolve(n.na.Fi(e));
              },
              function () {
                return n.persistence.Sr().Fi(t, e);
              },
              function () {
                return n.persistence.ea(t, e);
              },
            ]);
          }),
          of);
      function of(t) {
        (this.persistence = t), (this.na = new Xh()), (this.sa = null);
      }
      function sf(t) {
        var e = this;
        return ((e = Qh.call(this) || this).bs = t), e;
      }
      function uf(t, e) {
        var n = this;
        (this.Yc = {}),
          (this.so = new ei(0)),
          (this.io = !1),
          (this.io = !0),
          (this.Ti = t(this)),
          (this._o = new tf(this)),
          (this.Ei = new Ic()),
          (this.fo =
            ((t = this.Ei),
            new Zh(t, function (t) {
              return n.Ti.Xc(t);
            }))),
          (this.Qt = new sc(e)),
          (this.wo = new Kh(this.Qt));
      }
      function af(t) {
        (this.persistence = t),
          (this.Gc = new Lc(ao, co)),
          (this.lastRemoteSnapshotVersion = hi.min()),
          (this.highestTargetId = 0),
          (this.zc = 0),
          (this.Hc = new Xh()),
          (this.targetCount = 0),
          (this.Jc = Hc.Mi());
      }
      function cf(t) {
        var e = this;
        return ((e = Yh.call(this) || this).jr = t), e;
      }
      function hf(t, e) {
        (this.Ei = t),
          (this.Wc = e),
          (this.docs = new tu(di.H)),
          (this.size = 0);
      }
      function ff(t, e) {
        (this.Ei = t),
          (this.Ti = e),
          (this.zo = []),
          (this.Lc = 1),
          (this.Bc = new uu(Wh.Sc));
      }
      function lf(t, e) {
        (this.key = t), (this.Mc = e);
      }
      function pf() {
        (this.vc = new uu(Wh.Sc)), (this.Dc = new uu(Wh.Cc));
      }
      function df(t) {
        (this.Qt = t), (this.Vc = new Map()), (this.bc = new Map());
      }
      function yf(t, e) {
        return "firestore_clients_" + t + "_" + e;
      }
      function vf(t, e, n) {
        n = "firestore_mutations_" + t + "_" + n;
        return e.m() && (n += "_" + e.uid), n;
      }
      function gf(t, e) {
        return "firestore_targets_" + t + "_" + e;
      }
      var mf,
        bf =
          ((Bf.ca = function (t, e, n) {
            var r,
              i = JSON.parse(n),
              o =
                "object" == typeof i &&
                -1 !==
                  ["pending", "acknowledged", "rejected"].indexOf(i.state) &&
                (void 0 === i.error || "object" == typeof i.error);
            return (
              o &&
                i.error &&
                (o =
                  "string" == typeof i.error.message &&
                  "string" == typeof i.error.code) &&
                (r = new zr(i.error.code, i.error.message)),
              o
                ? new Bf(t, e, i.state, r)
                : (Or(
                    "SharedClientState",
                    "Failed to parse mutation state for ID '" + e + "': " + n
                  ),
                  null)
            );
          }),
          (Bf.prototype.aa = function () {
            var t = { state: this.state, updateTimeMs: Date.now() };
            return (
              this.error &&
                (t.error = {
                  code: this.error.code,
                  message: this.error.message,
                }),
              JSON.stringify(t)
            );
          }),
          Bf),
        wf =
          ((qf.ca = function (t, e) {
            var n,
              r = JSON.parse(e),
              i =
                "object" == typeof r &&
                -1 !==
                  ["not-current", "current", "rejected"].indexOf(r.state) &&
                (void 0 === r.error || "object" == typeof r.error);
            return (
              i &&
                r.error &&
                (i =
                  "string" == typeof r.error.message &&
                  "string" == typeof r.error.code) &&
                (n = new zr(r.error.code, r.error.message)),
              i
                ? new qf(t, r.state, n)
                : (Or(
                    "SharedClientState",
                    "Failed to parse target state for ID '" + t + "': " + e
                  ),
                  null)
            );
          }),
          (qf.prototype.aa = function () {
            var t = { state: this.state, updateTimeMs: Date.now() };
            return (
              this.error &&
                (t.error = {
                  code: this.error.code,
                  message: this.error.message,
                }),
              JSON.stringify(t)
            );
          }),
          qf),
        _f =
          ((Ff.ca = function (t, e) {
            for (
              var n = JSON.parse(e),
                r = "object" == typeof n && n.activeTargetIds instanceof Array,
                i = vu,
                o = 0;
              r && o < n.activeTargetIds.length;
              ++o
            )
              (r = Li(n.activeTargetIds[o])), (i = i.add(n.activeTargetIds[o]));
            return r
              ? new Ff(t, i)
              : (Or(
                  "SharedClientState",
                  "Failed to parse client data for instance '" + t + "': " + e
                ),
                null);
          }),
          Ff),
        Ef =
          ((jf.ca = function (t) {
            var e = JSON.parse(t);
            return "object" == typeof e &&
              -1 !== ["Unknown", "Online", "Offline"].indexOf(e.onlineState) &&
              "string" == typeof e.clientId
              ? new jf(e.clientId, e.onlineState)
              : (Or("SharedClientState", "Failed to parse online state: " + t),
                null);
          }),
          jf),
        If =
          ((Uf.prototype.ua = function (t) {
            this.activeTargetIds = this.activeTargetIds.add(t);
          }),
          (Uf.prototype.ha = function (t) {
            this.activeTargetIds = this.activeTargetIds.delete(t);
          }),
          (Uf.prototype.aa = function () {
            var t = {
              activeTargetIds: this.activeTargetIds.it(),
              updateTimeMs: Date.now(),
            };
            return JSON.stringify(t);
          }),
          Uf),
        Tf =
          ((Mf.Kn = function (t) {
            return !(!t || !t.localStorage);
          }),
          (Mf.prototype.start = function () {
            return y(this, void 0, void 0, function () {
              var e,
                n,
                r,
                i,
                o,
                s,
                u,
                a,
                c,
                h,
                f = this;
              return v(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, this._a.Uo()];
                  case 1:
                    for (s = t.sent(), e = 0, n = s; e < n.length; e++)
                      (r = n[e]) !== this.la &&
                        (i = this.getItem(yf(this.persistenceKey, r))) &&
                        (o = _f.ca(r, i)) &&
                        (this.Ea = this.Ea.zt(o.clientId, o));
                    for (
                      this.Va(),
                        (s = this.storage.getItem(this.ya)) &&
                          (u = this.pa(s)) &&
                          this.ba(u),
                        a = 0,
                        c = this.Ta;
                      a < c.length;
                      a++
                    )
                      (h = c[a]), this.wa(h);
                    return (
                      (this.Ta = []),
                      this.window.addEventListener("unload", function () {
                        return f.ko();
                      }),
                      (this.Er = !0),
                      [2]
                    );
                }
              });
            });
          }),
          (Mf.prototype.B = function (t) {
            this.setItem(this.ma, JSON.stringify(t));
          }),
          (Mf.prototype.va = function () {
            return this.Sa(this.Ea);
          }),
          (Mf.prototype.Da = function (n) {
            var r = !1;
            return (
              this.Ea.forEach(function (t, e) {
                e.activeTargetIds.has(n) && (r = !0);
              }),
              r
            );
          }),
          (Mf.prototype.Ca = function (t) {
            this.xa(t, "pending");
          }),
          (Mf.prototype.Na = function (t, e, n) {
            this.xa(t, e, n), this.$a(t);
          }),
          (Mf.prototype.Fa = function (t) {
            var e,
              n = "not-current";
            return (
              this.Da(t) &&
                (!(e = this.storage.getItem(gf(this.persistenceKey, t))) ||
                  ((e = wf.ca(t, e)) && (n = e.state))),
              this.Oa.ua(t),
              this.Va(),
              n
            );
          }),
          (Mf.prototype.ka = function (t) {
            this.Oa.ha(t), this.Va();
          }),
          (Mf.prototype.Ma = function (t) {
            return this.Oa.activeTargetIds.has(t);
          }),
          (Mf.prototype.La = function (t) {
            this.removeItem(gf(this.persistenceKey, t));
          }),
          (Mf.prototype.Ba = function (t, e, n) {
            this.qa(t, e, n);
          }),
          (Mf.prototype.Ua = function (t, e, n) {
            var r = this;
            e.forEach(function (t) {
              r.$a(t);
            }),
              (this.currentUser = t),
              n.forEach(function (t) {
                r.Ca(t);
              });
          }),
          (Mf.prototype.Qa = function (t) {
            this.Ka(t);
          }),
          (Mf.prototype.Wa = function () {
            this.ja();
          }),
          (Mf.prototype.ko = function () {
            this.Er &&
              (this.window.removeEventListener("storage", this.da),
              this.removeItem(this.Ia),
              (this.Er = !1));
          }),
          (Mf.prototype.getItem = function (t) {
            var e = this.storage.getItem(t);
            return Dr("SharedClientState", "READ", t, e), e;
          }),
          (Mf.prototype.setItem = function (t, e) {
            Dr("SharedClientState", "SET", t, e), this.storage.setItem(t, e);
          }),
          (Mf.prototype.removeItem = function (t) {
            Dr("SharedClientState", "REMOVE", t), this.storage.removeItem(t);
          }),
          (Mf.prototype.wa = function (t) {
            var e = this,
              o = t;
            o.storageArea === this.storage &&
              (Dr("SharedClientState", "EVENT", o.key, o.newValue),
              o.key !== this.Ia
                ? this.Zr.po(function () {
                    return y(e, void 0, void 0, function () {
                      var e, n, r, i;
                      return v(this, function (t) {
                        if (this.Er) {
                          if (null !== o.key)
                            if (this.Aa.test(o.key)) {
                              if (null == o.newValue)
                                return (
                                  (e = this.Ga(o.key)), [2, this.za(e, null)]
                                );
                              if ((e = this.Ha(o.key, o.newValue)))
                                return [2, this.za(e.clientId, e)];
                            } else if (this.Ra.test(o.key)) {
                              if (
                                null !== o.newValue &&
                                (n = this.Ja(o.key, o.newValue))
                              )
                                return [2, this.Ya(n)];
                            } else if (this.Pa.test(o.key)) {
                              if (
                                null !== o.newValue &&
                                (r = this.Xa(o.key, o.newValue))
                              )
                                return [2, this.Za(r)];
                            } else if (o.key === this.ya) {
                              if (
                                null !== o.newValue &&
                                (i = this.pa(o.newValue))
                              )
                                return [2, this.ba(i)];
                            } else if (o.key === this.ma)
                              (i = (function (t) {
                                var e = ei.q;
                                if (null != t)
                                  try {
                                    var n = JSON.parse(t);
                                    Lr("number" == typeof n), (e = n);
                                  } catch (t) {
                                    Or(
                                      "SharedClientState",
                                      "Failed to read sequence number from WebStorage",
                                      t
                                    );
                                  }
                                return e;
                              })(o.newValue)) !== ei.q && this.k(i);
                            else if (o.key === this.ga)
                              return [2, this._a.tu()];
                        } else this.Ta.push(o);
                        return [2];
                      });
                    });
                  })
                : Or(
                    "Received WebStorage notification for local change. Another client might have garbage-collected our state"
                  ));
          }),
          Object.defineProperty(Mf.prototype, "Oa", {
            get: function () {
              return this.Ea.get(this.la);
            },
            enumerable: !1,
            configurable: !0,
          }),
          (Mf.prototype.Va = function () {
            this.setItem(this.Ia, this.Oa.aa());
          }),
          (Mf.prototype.xa = function (t, e, n) {
            (n = new bf(this.currentUser, t, e, n)),
              (t = vf(this.persistenceKey, this.currentUser, t));
            this.setItem(t, n.aa());
          }),
          (Mf.prototype.$a = function (t) {
            t = vf(this.persistenceKey, this.currentUser, t);
            this.removeItem(t);
          }),
          (Mf.prototype.Ka = function (t) {
            t = { clientId: this.la, onlineState: t };
            this.storage.setItem(this.ya, JSON.stringify(t));
          }),
          (Mf.prototype.qa = function (t, e, n) {
            var r = gf(this.persistenceKey, t),
              n = new wf(t, e, n);
            this.setItem(r, n.aa());
          }),
          (Mf.prototype.ja = function () {
            this.setItem(this.ga, "value-not-used");
          }),
          (Mf.prototype.Ga = function (t) {
            t = this.Aa.exec(t);
            return t ? t[1] : null;
          }),
          (Mf.prototype.Ha = function (t, e) {
            t = this.Ga(t);
            return _f.ca(t, e);
          }),
          (Mf.prototype.Ja = function (t, e) {
            var n = this.Ra.exec(t),
              t = Number(n[1]),
              n = void 0 !== n[2] ? n[2] : null;
            return bf.ca(new Qr(n), t, e);
          }),
          (Mf.prototype.Xa = function (t, e) {
            (t = this.Pa.exec(t)), (t = Number(t[1]));
            return wf.ca(t, e);
          }),
          (Mf.prototype.pa = function (t) {
            return Ef.ca(t);
          }),
          (Mf.prototype.Ya = function (e) {
            return y(this, void 0, void 0, function () {
              return v(this, function (t) {
                return e.user.uid === this.currentUser.uid
                  ? [2, this._a.eu(e.batchId, e.state, e.error)]
                  : (Dr(
                      "SharedClientState",
                      "Ignoring mutation for non-active user " + e.user.uid
                    ),
                    [2]);
              });
            });
          }),
          (Mf.prototype.Za = function (t) {
            return this._a.nu(t.targetId, t.state, t.error);
          }),
          (Mf.prototype.za = function (t, e) {
            var n = this,
              r = e ? this.Ea.zt(t, e) : this.Ea.remove(t),
              i = this.Sa(this.Ea),
              o = this.Sa(r),
              s = [],
              u = [];
            return (
              o.forEach(function (t) {
                i.has(t) || s.push(t);
              }),
              i.forEach(function (t) {
                o.has(t) || u.push(t);
              }),
              this._a.su(s, u).then(function () {
                n.Ea = r;
              })
            );
          }),
          (Mf.prototype.ba = function (t) {
            this.Ea.get(t.clientId) && this.fa(t.onlineState);
          }),
          (Mf.prototype.Sa = function (t) {
            var n = vu;
            return (
              t.forEach(function (t, e) {
                n = n.Pe(e.activeTargetIds);
              }),
              n
            );
          }),
          Mf),
        Nf =
          ((Vf.prototype.Ca = function (t) {}),
          (Vf.prototype.Na = function (t, e, n) {}),
          (Vf.prototype.Fa = function (t) {
            return this.iu.ua(t), this.ru[t] || "not-current";
          }),
          (Vf.prototype.Ba = function (t, e, n) {
            this.ru[t] = e;
          }),
          (Vf.prototype.ka = function (t) {
            this.iu.ha(t);
          }),
          (Vf.prototype.Ma = function (t) {
            return this.iu.activeTargetIds.has(t);
          }),
          (Vf.prototype.La = function (t) {
            delete this.ru[t];
          }),
          (Vf.prototype.va = function () {
            return this.iu.activeTargetIds;
          }),
          (Vf.prototype.Da = function (t) {
            return this.iu.activeTargetIds.has(t);
          }),
          (Vf.prototype.start = function () {
            return (this.iu = new If()), Promise.resolve();
          }),
          (Vf.prototype.Ua = function (t, e, n) {}),
          (Vf.prototype.Qa = function (t) {}),
          (Vf.prototype.ko = function () {}),
          (Vf.prototype.B = function (t) {}),
          (Vf.prototype.Wa = function () {}),
          Vf),
        Af =
          ((Rf.prototype.ou = function (t) {}),
          (Rf.prototype.ko = function () {}),
          Rf),
        Sf =
          ((Lf.prototype.ou = function (t) {
            this.lu.push(t);
          }),
          (Lf.prototype.ko = function () {
            window.removeEventListener("online", this.cu),
              window.removeEventListener("offline", this.uu);
          }),
          (Lf.prototype._u = function () {
            window.addEventListener("online", this.cu),
              window.addEventListener("offline", this.uu);
          }),
          (Lf.prototype.au = function () {
            Dr(
              "ConnectivityMonitor",
              "Network connectivity changed: AVAILABLE"
            );
            for (var t = 0, e = this.lu; t < e.length; t++) (0, e[t])(0);
          }),
          (Lf.prototype.hu = function () {
            Dr(
              "ConnectivityMonitor",
              "Network connectivity changed: UNAVAILABLE"
            );
            for (var t = 0, e = this.lu; t < e.length; t++) (0, e[t])(1);
          }),
          (Lf.Kn = function () {
            return (
              "undefined" != typeof window &&
              void 0 !== window.addEventListener &&
              void 0 !== window.removeEventListener
            );
          }),
          Lf),
        xf = {
          BatchGetDocuments: "batchGet",
          Commit: "commit",
          RunQuery: "runQuery",
        },
        Df =
          ((Cf.prototype.wu = function (t) {
            this.Eu = t;
          }),
          (Cf.prototype.Tu = function (t) {
            this.Iu = t;
          }),
          (Cf.prototype.onMessage = function (t) {
            this.mu = t;
          }),
          (Cf.prototype.close = function () {
            this.du();
          }),
          (Cf.prototype.send = function (t) {
            this.fu(t);
          }),
          (Cf.prototype.Au = function () {
            this.Eu();
          }),
          (Cf.prototype.Ru = function (t) {
            this.Iu(t);
          }),
          (Cf.prototype.Pu = function (t) {
            this.mu(t);
          }),
          Cf),
        Of =
          ((Pf.prototype.pu = function (e, t, n, r) {
            var i = this.bu(e, t);
            Dr("RestConnection", "Sending: ", i, n);
            t = {};
            return (
              this.vu(t, r),
              this.Su(e, i, t, n).then(
                function (t) {
                  return Dr("RestConnection", "Received: ", t), t;
                },
                function (t) {
                  throw (
                    (kr(
                      "RestConnection",
                      e + " failed with error: ",
                      t,
                      "url: ",
                      i,
                      "request:",
                      n
                    ),
                    t)
                  );
                }
              )
            );
          }),
          (Pf.prototype.Du = function (t, e, n, r) {
            return this.pu(t, e, n, r);
          }),
          (Pf.prototype.vu = function (t, e) {
            if (
              ((t["X-Goog-Api-Client"] = "gl-js/ fire/8.2.10"),
              (t["Content-Type"] = "text/plain"),
              e)
            )
              for (var n in e.g) e.g.hasOwnProperty(n) && (t[n] = e.g[n]);
          }),
          (Pf.prototype.bu = function (t, e) {
            t = xf[t];
            return this.gu + "/v1/" + e + ":" + t;
          }),
          h(kf, (mf = Pf)),
          (kf.prototype.Su = function (o, e, s, u) {
            return new Promise(function (n, r) {
              var i = new Ir();
              i.listenOnce(mr.COMPLETE, function () {
                try {
                  switch (i.getLastErrorCode()) {
                    case gr.NO_ERROR:
                      var t = i.getResponseJson();
                      Dr("Connection", "XHR received:", JSON.stringify(t)),
                        n(t);
                      break;
                    case gr.TIMEOUT:
                      Dr("Connection", 'RPC "' + o + '" timed out'),
                        r(new zr(Gr.DEADLINE_EXCEEDED, "Request time out"));
                      break;
                    case gr.HTTP_ERROR:
                      var e = i.getStatus();
                      Dr(
                        "Connection",
                        'RPC "' + o + '" failed with status:',
                        e,
                        "response text:",
                        i.getResponseText()
                      ),
                        0 < e
                          ? (t = i.getResponseJson().error) &&
                            t.status &&
                            t.message
                            ? ((e = t.status.toLowerCase().replace(/_/g, "-")),
                              (e =
                                0 <= Object.values(Gr).indexOf(e)
                                  ? e
                                  : Gr.UNKNOWN),
                              r(new zr(e, t.message)))
                            : r(
                                new zr(
                                  Gr.UNKNOWN,
                                  "Server responded with status " +
                                    i.getStatus()
                                )
                              )
                          : r(new zr(Gr.UNAVAILABLE, "Connection failed."));
                      break;
                    default:
                      Cr();
                  }
                } finally {
                  Dr("Connection", 'RPC "' + o + '" completed.');
                }
              });
              var t = JSON.stringify(u);
              i.send(e, "POST", t, s, 15);
            });
          }),
          (kf.prototype.Cu = function (t, e) {
            var n,
              r = [
                this.gu,
                "/",
                "google.firestore.v1.Firestore",
                "/",
                t,
                "/channel",
              ],
              i = new fr(),
              o = vr(),
              t = {
                httpSessionIdParam: "gsessionid",
                initMessageHeaders: {},
                messageUrlParams: {
                  database:
                    "projects/" +
                    this.t.projectId +
                    "/databases/" +
                    this.t.database,
                },
                sendRawJson: !0,
                supportsCrossDomainXhr: !0,
                internalChannelParams: { forwardChannelRequestTimeoutMs: 6e5 },
                forceLongPolling: this.forceLongPolling,
                detectBufferingProxy: this.i,
              };
            this.vu(t.initMessageHeaders, e),
              ("undefined" != typeof window &&
                (window.cordova || window.phonegap || window.PhoneGap) &&
                /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(
                  p()
                )) ||
                ("object" == typeof navigator &&
                  "ReactNative" === navigator.product) ||
                0 <= p().indexOf("Electron/") ||
                0 <= (n = p()).indexOf("MSIE ") ||
                0 <= n.indexOf("Trident/") ||
                0 <= p().indexOf("MSAppHost/") ||
                ("object" ==
                  typeof (n =
                    "object" == typeof chrome
                      ? chrome.runtime
                      : "object" == typeof browser
                      ? browser.runtime
                      : void 0) &&
                  void 0 !== n.id) ||
                (t.httpHeadersOverwriteParam = "$httpHeaders");
            r = r.join("");
            Dr("Connection", "Creating WebChannel: " + r, t);
            var s = i.createWebChannel(r, t),
              u = !1,
              a = !1,
              c = new Df({
                fu: function (t) {
                  a
                    ? Dr(
                        "Connection",
                        "Not sending because WebChannel is closed:",
                        t
                      )
                    : (u ||
                        (Dr("Connection", "Opening WebChannel transport."),
                        s.open(),
                        (u = !0)),
                      Dr("Connection", "WebChannel sending:", t),
                      s.send(t));
                },
                du: function () {
                  return s.close();
                },
              }),
              t = function (t, e, n) {
                t.listen(e, function (t) {
                  try {
                    n(t);
                  } catch (t) {
                    setTimeout(function () {
                      throw t;
                    }, 0);
                  }
                });
              };
            return (
              t(s, Er.EventType.OPEN, function () {
                a || Dr("Connection", "WebChannel transport opened.");
              }),
              t(s, Er.EventType.CLOSE, function () {
                a ||
                  ((a = !0),
                  Dr("Connection", "WebChannel transport closed"),
                  c.Ru());
              }),
              t(s, Er.EventType.ERROR, function (t) {
                a ||
                  ((a = !0),
                  kr("Connection", "WebChannel transport errored:", t),
                  c.Ru(
                    new zr(
                      Gr.UNAVAILABLE,
                      "The operation could not be completed"
                    )
                  ));
              }),
              t(s, Er.EventType.MESSAGE, function (t) {
                var e, n, r, i;
                a ||
                  (Lr(!!(e = t.data[0])),
                  (n =
                    e.error ||
                    (null === (i = e[0]) || void 0 === i ? void 0 : i.error))
                    ? (Dr("Connection", "WebChannel received error:", n),
                      (r = n.status),
                      (t = (function () {
                        var t = Hs[r];
                        if (void 0 !== t) return $s(t);
                      })()),
                      (i = n.message),
                      void 0 === t &&
                        ((t = Gr.INTERNAL),
                        (i =
                          "Unknown error status: " +
                          r +
                          " with message " +
                          n.message)),
                      (a = !0),
                      c.Ru(new zr(t, i)),
                      s.close())
                    : (Dr("Connection", "WebChannel received:", e), c.Pu(e)));
              }),
              t(o, br.STAT_EVENT, function (t) {
                t.stat === wr
                  ? Dr("Connection", "Detected buffering proxy")
                  : t.stat === _r &&
                    Dr("Connection", "Detected no buffering proxy");
              }),
              setTimeout(function () {
                c.Au();
              }, 0),
              c
            );
          }),
          kf);
      function kf(t) {
        var e = this;
        return (
          ((e = mf.call(this, t) || this).forceLongPolling =
            t.forceLongPolling),
          (e.i = t.i),
          e
        );
      }
      function Pf(t) {
        (this.yu = t), (this.t = t.t);
        var e = t.ssl ? "https" : "http";
        (this.gu = e + "://" + t.host),
          (this.Vu =
            "projects/" +
            this.t.projectId +
            "/databases/" +
            this.t.database +
            "/documents");
      }
      function Cf(t) {
        (this.fu = t.fu), (this.du = t.du);
      }
      function Lf() {
        var t = this;
        (this.cu = function () {
          return t.au();
        }),
          (this.uu = function () {
            return t.hu();
          }),
          (this.lu = []),
          this._u();
      }
      function Rf() {}
      function Vf() {
        (this.iu = new If()), (this.ru = {}), (this.fa = null), (this.k = null);
      }
      function Mf(t, e, n, r, i) {
        (this.window = t),
          (this.Zr = e),
          (this.persistenceKey = n),
          (this.la = r),
          (this._a = null),
          (this.fa = null),
          (this.k = null),
          (this.da = this.wa.bind(this)),
          (this.Ea = new tu(Mr)),
          (this.Er = !1),
          (this.Ta = []);
        n = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        (this.storage = this.window.localStorage),
          (this.currentUser = i),
          (this.Ia = yf(this.persistenceKey, this.la)),
          (this.ma = "firestore_sequence_number_" + this.persistenceKey),
          (this.Ea = this.Ea.zt(this.la, new If())),
          (this.Aa = new RegExp("^firestore_clients_" + n + "_([^_]*)$")),
          (this.Ra = new RegExp(
            "^firestore_mutations_" + n + "_(\\d+)(?:_(.*))?$"
          )),
          (this.Pa = new RegExp("^firestore_targets_" + n + "_(\\d+)$")),
          (this.ya = "firestore_online_state_" + this.persistenceKey),
          (this.ga = "firestore_bundle_loaded_" + this.persistenceKey),
          this.window.addEventListener("storage", this.da);
      }
      function Uf() {
        this.activeTargetIds = vu;
      }
      function jf(t, e) {
        (this.clientId = t), (this.onlineState = e);
      }
      function Ff(t, e) {
        (this.clientId = t), (this.activeTargetIds = e);
      }
      function qf(t, e, n) {
        (this.targetId = t), (this.state = e), (this.error = n);
      }
      function Bf(t, e, n, r) {
        (this.user = t), (this.batchId = e), (this.state = n), (this.error = r);
      }
      function Gf() {
        return "undefined" != typeof window ? window : null;
      }
      function zf() {
        return "undefined" != typeof document ? document : null;
      }
      function Hf(t) {
        return new Uu(t, !0);
      }
      function Qf(t, e, n, r, i) {
        var o = this;
        (this.bh = t),
          (this.Sh = e),
          (this._s = n),
          (this.Dh = {}),
          (this.Ch = []),
          (this.xh = new Map()),
          (this.Nh = new Set()),
          (this.$h = []),
          (this.Fh = i),
          this.Fh.ou(function (t) {
            n.Ps(function () {
              return y(o, void 0, void 0, function () {
                return v(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return yl(this)
                        ? (Dr(
                            "RemoteStore",
                            "Restarting streams for network reachability change."
                          ),
                          [
                            4,
                            (function (n) {
                              return y(this, void 0, void 0, function () {
                                var e;
                                return v(this, function (t) {
                                  switch (t.label) {
                                    case 0:
                                      return (e = n).Nh.add(4), [4, al(e)];
                                    case 1:
                                      return (
                                        t.sent(),
                                        e.Oh.set("Unknown"),
                                        e.Nh.delete(4),
                                        [4, ul(e)]
                                      );
                                    case 2:
                                      return t.sent(), [2];
                                  }
                                });
                              });
                            })(this),
                          ])
                        : [3, 2];
                    case 1:
                      t.sent(), (t.label = 2);
                    case 2:
                      return [2];
                  }
                });
              });
            });
          }),
          (this.Oh = new tl(n, r));
      }
      var Yf,
        Kf,
        Xf,
        Wf =
          ((sl.prototype.reset = function () {
            this.Fu = 0;
          }),
          (sl.prototype.Mu = function () {
            this.Fu = this.$u;
          }),
          (sl.prototype.Lu = function (t) {
            var e = this;
            this.cancel();
            var n = Math.floor(this.Fu + this.Bu()),
              r = Math.max(0, Date.now() - this.ku),
              i = Math.max(0, n - r);
            0 < i &&
              Dr(
                "ExponentialBackoff",
                "Backing off for " +
                  i +
                  " ms (base delay: " +
                  this.Fu +
                  " ms, delay with jitter: " +
                  n +
                  " ms, last attempt: " +
                  r +
                  " ms ago)"
              ),
              (this.Ou = this.Zr.Tr(this.fs, i, function () {
                return (e.ku = Date.now()), t();
              })),
              (this.Fu *= this.Nu),
              this.Fu < this.xu && (this.Fu = this.xu),
              this.Fu > this.$u && (this.Fu = this.$u);
          }),
          (sl.prototype.qu = function () {
            null !== this.Ou && (this.Ou.Rs(), (this.Ou = null));
          }),
          (sl.prototype.cancel = function () {
            null !== this.Ou && (this.Ou.cancel(), (this.Ou = null));
          }),
          (sl.prototype.Bu = function () {
            return (Math.random() - 0.5) * this.Fu;
          }),
          sl),
        Ie =
          ((ol.prototype.zu = function () {
            return 1 === this.state || 2 === this.state || 4 === this.state;
          }),
          (ol.prototype.Hu = function () {
            return 2 === this.state;
          }),
          (ol.prototype.start = function () {
            3 !== this.state ? this.auth() : this.Ju();
          }),
          (ol.prototype.stop = function () {
            return y(this, void 0, void 0, function () {
              return v(this, function (t) {
                switch (t.label) {
                  case 0:
                    return this.zu() ? [4, this.close(0)] : [3, 2];
                  case 1:
                    t.sent(), (t.label = 2);
                  case 2:
                    return [2];
                }
              });
            });
          }),
          (ol.prototype.Yu = function () {
            (this.state = 0), this.Gu.reset();
          }),
          (ol.prototype.Xu = function () {
            var t = this;
            this.Hu() &&
              null === this.ju &&
              (this.ju = this.Zr.Tr(this.Uu, 6e4, function () {
                return t.Zu();
              }));
          }),
          (ol.prototype.th = function (t) {
            this.eh(), this.stream.send(t);
          }),
          (ol.prototype.Zu = function () {
            return y(this, void 0, void 0, function () {
              return v(this, function (t) {
                return this.Hu() ? [2, this.close(0)] : [2];
              });
            });
          }),
          (ol.prototype.eh = function () {
            this.ju && (this.ju.cancel(), (this.ju = null));
          }),
          (ol.prototype.close = function (e, n) {
            return y(this, void 0, void 0, function () {
              return v(this, function (t) {
                switch (t.label) {
                  case 0:
                    return (
                      this.eh(),
                      this.Gu.cancel(),
                      this.Wu++,
                      3 !== e
                        ? this.Gu.reset()
                        : n && n.code === Gr.RESOURCE_EXHAUSTED
                        ? (Or(n.toString()),
                          Or(
                            "Using maximum backoff delay to prevent overloading the backend."
                          ),
                          this.Gu.Mu())
                        : n && n.code === Gr.UNAUTHENTICATED && this.Ku.p(),
                      null !== this.stream &&
                        (this.nh(), this.stream.close(), (this.stream = null)),
                      (this.state = e),
                      [4, this.listener.Tu(n)]
                    );
                  case 1:
                    return t.sent(), [2];
                }
              });
            });
          }),
          (ol.prototype.nh = function () {}),
          (ol.prototype.auth = function () {
            var n = this;
            this.state = 1;
            var t = this.sh(this.Wu),
              e = this.Wu;
            this.Ku.getToken().then(
              function (t) {
                n.Wu === e && n.ih(t);
              },
              function (e) {
                t(function () {
                  var t = new zr(
                    Gr.UNKNOWN,
                    "Fetching auth token failed: " + e.message
                  );
                  return n.rh(t);
                });
              }
            );
          }),
          (ol.prototype.ih = function (t) {
            var e = this,
              n = this.sh(this.Wu);
            (this.stream = this.oh(t)),
              this.stream.wu(function () {
                n(function () {
                  return (e.state = 2), e.listener.wu();
                });
              }),
              this.stream.Tu(function (t) {
                n(function () {
                  return e.rh(t);
                });
              }),
              this.stream.onMessage(function (t) {
                n(function () {
                  return e.onMessage(t);
                });
              });
          }),
          (ol.prototype.Ju = function () {
            var t = this;
            (this.state = 4),
              this.Gu.Lu(function () {
                return y(t, void 0, void 0, function () {
                  return v(this, function (t) {
                    return (this.state = 0), this.start(), [2];
                  });
                });
              });
          }),
          (ol.prototype.rh = function (t) {
            return (
              Dr("PersistentStream", "close with error: " + t),
              (this.stream = null),
              this.close(3, t)
            );
          }),
          (ol.prototype.sh = function (e) {
            var n = this;
            return function (t) {
              n.Zr.Ps(function () {
                return n.Wu === e
                  ? t()
                  : (Dr(
                      "PersistentStream",
                      "stream callback skipped by getCloseGuardedDispatcher."
                    ),
                    Promise.resolve());
              });
            };
          }),
          ol),
        Jf =
          (h(il, (Xf = Ie)),
          (il.prototype.oh = function (t) {
            return this.Qu.Cu("Listen", t);
          }),
          (il.prototype.onMessage = function (t) {
            this.Gu.reset();
            var e = (function (t, e) {
                if ("targetChange" in e) {
                  e.targetChange;
                  var n =
                      "NO_CHANGE" ===
                      (o = e.targetChange.targetChangeType || "NO_CHANGE")
                        ? 0
                        : "ADD" === o
                        ? 1
                        : "REMOVE" === o
                        ? 2
                        : "CURRENT" === o
                        ? 3
                        : "RESET" === o
                        ? 4
                        : Cr(),
                    r = e.targetChange.targetIds || [],
                    i =
                      ((s = e.targetChange.resumeToken),
                      t.Bt
                        ? (Lr(void 0 === s || "string" == typeof s),
                          Fr.fromBase64String(s || ""))
                        : (Lr(void 0 === s || s instanceof Uint8Array),
                          Fr.fromUint8Array(s || new Uint8Array()))),
                    o =
                      (u = e.targetChange.cause) &&
                      ((a = void 0 === (c = u).code ? Gr.UNKNOWN : $s(c.code)),
                      new zr(a, c.message || "")),
                    s = new Tu(n, r, i, o || null);
                } else if ("documentChange" in e) {
                  e.documentChange,
                    (n = e.documentChange).document,
                    n.document.name,
                    n.document.updateTime,
                    (r = Hu(t, n.document.name)),
                    (i = qu(n.document.updateTime));
                  var u = new Yi({ mapValue: { fields: n.document.fields } }),
                    a = ((o = new to(r, i, u, {})), n.targetIds || []),
                    c = n.removedTargetIds || [];
                  s = new Eu(a, c, o.key, o);
                } else if ("documentDelete" in e)
                  e.documentDelete,
                    (n = e.documentDelete).document,
                    (r = Hu(t, n.document)),
                    (i = n.readTime ? qu(n.readTime) : hi.min()),
                    (u = new eo(r, i)),
                    (o = n.removedTargetIds || []),
                    (s = new Eu([], o, u.key, u));
                else if ("documentRemove" in e)
                  e.documentRemove,
                    (n = e.documentRemove).document,
                    (r = Hu(t, n.document)),
                    (i = n.removedTargetIds || []),
                    (s = new Eu([], i, r, null));
                else {
                  if (!("filter" in e)) return Cr();
                  e.filter;
                  e = e.filter;
                  e.targetId,
                    (n = e.count || 0),
                    (r = new zs(n)),
                    (i = e.targetId),
                    (s = new Iu(i, r));
                }
                return s;
              })(this.Qt, t),
              t = (function (t) {
                if (!("targetChange" in t)) return hi.min();
                t = t.targetChange;
                return (!t.targetIds || !t.targetIds.length) && t.readTime
                  ? qu(t.readTime)
                  : hi.min();
              })(t);
            return this.listener.ah(e, t);
          }),
          (il.prototype.uh = function (t) {
            var e,
              n,
              r,
              i = {};
            (i.database = Ku(this.Qt)),
              (i.addTarget =
                ((e = this.Qt),
                ((r = ho((r = (n = t).target))
                  ? { documents: ta(e, r) }
                  : { query: ea(e, r) }).targetId = n.targetId),
                0 < n.resumeToken.l()
                  ? (r.resumeToken = Fu(e, n.resumeToken))
                  : 0 < n.Ot._(hi.min()) && (r.readTime = ju(e, n.Ot.j())),
                r));
            var o,
              t =
                (this.Qt,
                (o = t),
                null ==
                (t = (function () {
                  switch (o.Ft) {
                    case 0:
                      return null;
                    case 1:
                      return "existence-filter-mismatch";
                    case 2:
                      return "limbo-document";
                    default:
                      return Cr();
                  }
                })())
                  ? null
                  : { "goog-listen-tags": t });
            t && (i.labels = t), this.th(i);
          }),
          (il.prototype.hh = function (t) {
            var e = {};
            (e.database = Ku(this.Qt)), (e.removeTarget = t), this.th(e);
          }),
          il),
        Zf =
          (h(rl, (Kf = Ie)),
          Object.defineProperty(rl.prototype, "_h", {
            get: function () {
              return this.lh;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (rl.prototype.start = function () {
            (this.lh = !1),
              (this.lastStreamToken = void 0),
              Kf.prototype.start.call(this);
          }),
          (rl.prototype.nh = function () {
            this.lh && this.fh([]);
          }),
          (rl.prototype.oh = function (t) {
            return this.Qu.Cu("Write", t);
          }),
          (rl.prototype.onMessage = function (t) {
            if (
              (Lr(!!t.streamToken),
              (this.lastStreamToken = t.streamToken),
              this.lh)
            ) {
              this.Gu.reset();
              var e =
                  ((n = t.writeResults),
                  (r = t.commitTime),
                  n && 0 < n.length
                    ? (Lr(void 0 !== r),
                      n.map(function (t) {
                        return (
                          (n = r),
                          (t = (e = t).updateTime
                            ? qu(e.updateTime)
                            : qu(n)).isEqual(hi.min()) && (t = qu(n)),
                          new As(t, e.transformResults || [])
                        );
                        var e, n;
                      }))
                    : []),
                n = qu(t.commitTime);
              return this.listener.dh(n, e);
            }
            var n, r;
            return (
              Lr(!t.writeResults || 0 === t.writeResults.length),
              (this.lh = !0),
              this.listener.wh()
            );
          }),
          (rl.prototype.Eh = function () {
            var t = {};
            (t.database = Ku(this.Qt)), this.th(t);
          }),
          (rl.prototype.fh = function (t) {
            var e = this,
              t = {
                streamToken: this.lastStreamToken,
                writes: t.map(function (t) {
                  return Zu(e.Qt, t);
                }),
              };
            this.th(t);
          }),
          rl),
        $f =
          (h(nl, (Yf = function () {})),
          (nl.prototype.Ih = function () {
            if (this.Th)
              throw new zr(
                Gr.FAILED_PRECONDITION,
                "The client has already been terminated."
              );
          }),
          (nl.prototype.pu = function (e, n, r) {
            var i = this;
            return (
              this.Ih(),
              this.credentials
                .getToken()
                .then(function (t) {
                  return i.Qu.pu(e, n, r, t);
                })
                .catch(function (t) {
                  throw (t.code === Gr.UNAUTHENTICATED && i.credentials.p(), t);
                })
            );
          }),
          (nl.prototype.Du = function (e, n, r) {
            var i = this;
            return (
              this.Ih(),
              this.credentials
                .getToken()
                .then(function (t) {
                  return i.Qu.Du(e, n, r, t);
                })
                .catch(function (t) {
                  throw (t.code === Gr.UNAUTHENTICATED && i.credentials.p(), t);
                })
            );
          }),
          (nl.prototype.terminate = function () {
            this.Th = !1;
          }),
          nl),
        tl =
          ((el.prototype.Ph = function () {
            var t = this;
            0 === this.mh &&
              (this.yh("Unknown"),
              (this.Ah = this._s.Tr("online_state_timeout", 1e4, function () {
                return (
                  (t.Ah = null),
                  t.gh("Backend didn't respond within 10 seconds."),
                  t.yh("Offline"),
                  Promise.resolve()
                );
              })));
          }),
          (el.prototype.Vh = function (t) {
            "Online" === this.state
              ? this.yh("Unknown")
              : (this.mh++,
                1 <= this.mh &&
                  (this.ph(),
                  this.gh(
                    "Connection failed 1 times. Most recent error: " +
                      t.toString()
                  ),
                  this.yh("Offline")));
          }),
          (el.prototype.set = function (t) {
            this.ph(),
              (this.mh = 0),
              "Online" === t && (this.Rh = !1),
              this.yh(t);
          }),
          (el.prototype.yh = function (t) {
            t !== this.state && ((this.state = t), this.fa(t));
          }),
          (el.prototype.gh = function (t) {
            t =
              "Could not reach Cloud Firestore backend. " +
              t +
              "\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.";
            this.Rh ? (Or(t), (this.Rh = !1)) : Dr("OnlineStateTracker", t);
          }),
          (el.prototype.ph = function () {
            null !== this.Ah && (this.Ah.cancel(), (this.Ah = null));
          }),
          el);
      function el(t, e) {
        (this._s = t),
          (this.fa = e),
          (this.state = "Unknown"),
          (this.mh = 0),
          (this.Ah = null),
          (this.Rh = !0);
      }
      function nl(t, e, n) {
        var r = this;
        return (
          ((r = Yf.call(this) || this).credentials = t),
          (r.Qu = e),
          (r.Qt = n),
          (r.Th = !1),
          r
        );
      }
      function rl(t, e, n, r, i) {
        var o = this;
        return (
          ((o =
            Kf.call(
              this,
              t,
              "write_stream_connection_backoff",
              "write_stream_idle",
              e,
              n,
              i
            ) || this).Qt = r),
          (o.lh = !1),
          o
        );
      }
      function il(t, e, n, r, i) {
        var o = this;
        return (
          ((o =
            Xf.call(
              this,
              t,
              "listen_stream_connection_backoff",
              "listen_stream_idle",
              e,
              n,
              i
            ) || this).Qt = r),
          o
        );
      }
      function ol(t, e, n, r, i, o) {
        (this.Zr = t),
          (this.Uu = n),
          (this.Qu = r),
          (this.Ku = i),
          (this.listener = o),
          (this.state = 0),
          (this.Wu = 0),
          (this.ju = null),
          (this.stream = null),
          (this.Gu = new Wf(t, e));
      }
      function sl(t, e, n, r, i) {
        void 0 === n && (n = 1e3),
          void 0 === r && (r = 1.5),
          void 0 === i && (i = 6e4),
          (this.Zr = t),
          (this.fs = e),
          (this.xu = n),
          (this.Nu = r),
          (this.$u = i),
          (this.Fu = 0),
          (this.Ou = null),
          (this.ku = Date.now()),
          this.reset();
      }
      function ul(r) {
        return y(this, void 0, void 0, function () {
          var e, n;
          return v(this, function (t) {
            switch (t.label) {
              case 0:
                if (!yl(r)) return [3, 4];
                (e = 0), (n = r.$h), (t.label = 1);
              case 1:
                return e < n.length ? [4, (0, n[e])(!0)] : [3, 4];
              case 2:
                t.sent(), (t.label = 3);
              case 3:
                return e++, [3, 1];
              case 4:
                return [2];
            }
          });
        });
      }
      function al(r) {
        return y(this, void 0, void 0, function () {
          var e, n;
          return v(this, function (t) {
            switch (t.label) {
              case 0:
                (e = 0), (n = r.$h), (t.label = 1);
              case 1:
                return e < n.length ? [4, (0, n[e])(!1)] : [3, 4];
              case 2:
                t.sent(), (t.label = 3);
              case 3:
                return e++, [3, 1];
              case 4:
                return [2];
            }
          });
        });
      }
      function cl(t, e) {
        t.xh.has(e.targetId) ||
          (t.xh.set(e.targetId, e), dl(t) ? pl(t) : Tl(t).Hu() && fl(t, e));
      }
      function hl(t, e) {
        var n = t,
          t = Tl(n);
        n.xh.delete(e),
          t.Hu() && ll(n, e),
          0 === n.xh.size && (t.Hu() ? t.Xu() : yl(n) && n.Oh.set("Unknown"));
      }
      function fl(t, e) {
        t.kh.on(e.targetId), Tl(t).uh(e);
      }
      function ll(t, e) {
        t.kh.on(e), Tl(t).hh(e);
      }
      function pl(e) {
        (e.kh = new Au({
          vn: function (t) {
            return e.Dh.vn(t);
          },
          Sn: function (t) {
            return e.xh.get(t) || null;
          },
        })),
          Tl(e).start(),
          e.Oh.Ph();
      }
      function dl(t) {
        return yl(t) && !Tl(t).zu() && 0 < t.xh.size;
      }
      function yl(t) {
        return 0 === t.Nh.size;
      }
      function vl(t) {
        t.kh = void 0;
      }
      function gl(s, u, a) {
        return y(this, void 0, void 0, function () {
          var n, o;
          return v(this, function (t) {
            switch (t.label) {
              case 0:
                if (
                  (s.Oh.set("Online"),
                  !(u instanceof Tu && 2 === u.state && u.cause))
                )
                  return [3, 6];
                t.label = 1;
              case 1:
                return (
                  t.trys.push([1, 3, , 5]),
                  [
                    4,
                    (function (o, s) {
                      return y(this, void 0, void 0, function () {
                        var e, n, r, i;
                        return v(this, function (t) {
                          switch (t.label) {
                            case 0:
                              (e = s.cause),
                                (n = 0),
                                (r = s.targetIds),
                                (t.label = 1);
                            case 1:
                              return n < r.length
                                ? ((i = r[n]),
                                  o.xh.has(i) ? [4, o.Dh.Mh(i, e)] : [3, 3])
                                : [3, 5];
                            case 2:
                              t.sent(),
                                o.xh.delete(i),
                                o.kh.removeTarget(i),
                                (t.label = 3);
                            case 3:
                              t.label = 4;
                            case 4:
                              return n++, [3, 1];
                            case 5:
                              return [2];
                          }
                        });
                      });
                    })(s, u),
                  ]
                );
              case 2:
                return t.sent(), [3, 5];
              case 3:
                return (
                  (n = t.sent()),
                  Dr(
                    "RemoteStore",
                    "Failed to remove targets %s: %s ",
                    u.targetIds.join(","),
                    n
                  ),
                  [4, ml(s, n)]
                );
              case 4:
                return t.sent(), [3, 5];
              case 5:
                return [3, 13];
              case 6:
                if (
                  (u instanceof Eu
                    ? s.kh.dn(u)
                    : u instanceof Iu
                    ? s.kh.Pn(u)
                    : s.kh.Tn(u),
                  a.isEqual(hi.min()))
                )
                  return [3, 13];
                t.label = 7;
              case 7:
                return t.trys.push([7, 11, , 13]), [4, Mh(s.bh)];
              case 8:
                return (
                  (o = t.sent()),
                  0 <= a._(o)
                    ? [
                        4,
                        ((i = a),
                        (e = (r = s).kh.Vn(i)).$e.forEach(function (t, e) {
                          var n;
                          0 < t.resumeToken.l() &&
                            (n = r.xh.get(e)) &&
                            r.xh.set(e, n.Mt(t.resumeToken, i));
                        }),
                        e.Fe.forEach(function (t) {
                          var e = r.xh.get(t);
                          e &&
                            (r.xh.set(t, e.Mt(Fr.T, e.Ot)),
                            ll(r, t),
                            (e = new is(e.target, t, 1, e.sequenceNumber)),
                            fl(r, e));
                        }),
                        r.Dh.Lh(e)),
                      ]
                    : [3, 10]
                );
              case 9:
                t.sent(), (t.label = 10);
              case 10:
                return [3, 13];
              case 11:
                return (
                  Dr(
                    "RemoteStore",
                    "Failed to raise snapshot:",
                    (o = t.sent())
                  ),
                  [4, ml(s, o)]
                );
              case 12:
                return t.sent(), [3, 13];
              case 13:
                return [2];
            }
            var r, i, e;
          });
        });
      }
      function ml(n, r, i) {
        return y(this, void 0, void 0, function () {
          var e = this;
          return v(this, function (t) {
            switch (t.label) {
              case 0:
                if (!Ea(r)) throw r;
                return n.Nh.add(1), [4, al(n)];
              case 1:
                return (
                  t.sent(),
                  n.Oh.set("Offline"),
                  (i =
                    i ||
                    function () {
                      return Mh(n.bh);
                    }),
                  n._s.po(function () {
                    return y(e, void 0, void 0, function () {
                      return v(this, function (t) {
                        switch (t.label) {
                          case 0:
                            return (
                              Dr("RemoteStore", "Retrying IndexedDB access"),
                              [4, i()]
                            );
                          case 1:
                            return t.sent(), n.Nh.delete(1), [4, ul(n)];
                          case 2:
                            return t.sent(), [2];
                        }
                      });
                    });
                  }),
                  [2]
                );
            }
          });
        });
      }
      function bl(e, n) {
        return n().catch(function (t) {
          return ml(e, t, n);
        });
      }
      function wl(a) {
        return y(this, void 0, void 0, function () {
          var i, o, s, u;
          return v(this, function (t) {
            switch (t.label) {
              case 0:
                (o = Nl((i = a))),
                  (s = 0 < i.Ch.length ? i.Ch[i.Ch.length - 1].batchId : -1),
                  (t.label = 1);
              case 1:
                if (!(yl(i) && i.Ch.length < 10)) return [3, 7];
                t.label = 2;
              case 2:
                return (
                  t.trys.push([2, 4, , 6]),
                  [
                    4,
                    ((e = i.bh),
                    (n = s),
                    (r = e).persistence.runTransaction(
                      "Get next mutation batch",
                      "readonly",
                      function (t) {
                        return void 0 === n && (n = -1), r.zo.gi(t, n);
                      }
                    )),
                  ]
                );
              case 3:
                return null === (u = t.sent())
                  ? (0 === i.Ch.length && o.Xu(), [3, 7])
                  : ((s = u.batchId),
                    (function (t, e) {
                      t.Ch.push(e);
                      t = Nl(t);
                      t.Hu() && t._h && t.fh(e.mutations);
                    })(i, u),
                    [3, 6]);
              case 4:
                return (u = t.sent()), [4, ml(i, u)];
              case 5:
                return t.sent(), [3, 6];
              case 6:
                return [3, 1];
              case 7:
                return _l(i) && El(i), [2];
            }
            var e, n, r;
          });
        });
      }
      function _l(t) {
        return yl(t) && !Nl(t).zu() && 0 < t.Ch.length;
      }
      function El(t) {
        Nl(t).start();
      }
      function Il(n, r) {
        return y(this, void 0, void 0, function () {
          var e;
          return v(this, function (t) {
            switch (t.label) {
              case 0:
                return (e = n), r ? (e.Nh.delete(2), [4, ul(e)]) : [3, 2];
              case 1:
                return t.sent(), [3, 5];
              case 2:
                return r ? [3, 4] : (e.Nh.add(2), [4, al(e)]);
              case 3:
                t.sent(), e.Oh.set("Unknown"), (t.label = 4);
              case 4:
                t.label = 5;
              case 5:
                return [2];
            }
          });
        });
      }
      function Tl(n) {
        var t,
          e,
          r,
          i = this;
        return (
          n.Uh ||
            ((n.Uh =
              ((t = n.Sh),
              (e = n._s),
              (r = {
                wu: function (n) {
                  return y(this, void 0, void 0, function () {
                    return v(this, function (t) {
                      return (
                        n.xh.forEach(function (t, e) {
                          fl(n, t);
                        }),
                        [2]
                      );
                    });
                  });
                }.bind(null, n),
                Tu: function (e, n) {
                  return y(this, void 0, void 0, function () {
                    return v(this, function (t) {
                      return (
                        vl(e),
                        dl(e) ? (e.Oh.Vh(n), pl(e)) : e.Oh.set("Unknown"),
                        [2]
                      );
                    });
                  });
                }.bind(null, n),
                ah: gl.bind(null, n),
              }),
              t.Ih(),
              new Jf(e, t.Qu, t.credentials, t.Qt, r))),
            n.$h.push(function (e) {
              return y(i, void 0, void 0, function () {
                return v(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return e
                        ? (n.Uh.Yu(),
                          dl(n) ? pl(n) : n.Oh.set("Unknown"),
                          [3, 3])
                        : [3, 1];
                    case 1:
                      return [4, n.Uh.stop()];
                    case 2:
                      t.sent(), vl(n), (t.label = 3);
                    case 3:
                      return [2];
                  }
                });
              });
            })),
          n.Uh
        );
      }
      function Nl(n) {
        var t,
          e,
          r,
          i = this;
        return (
          n.Qh ||
            ((n.Qh =
              ((t = n.Sh),
              (e = n._s),
              (r = {
                wu: function (e) {
                  return y(this, void 0, void 0, function () {
                    return v(this, function (t) {
                      return Nl(e).Eh(), [2];
                    });
                  });
                }.bind(null, n),
                Tu: function (e, n) {
                  return y(this, void 0, void 0, function () {
                    return v(this, function (t) {
                      switch (t.label) {
                        case 0:
                          return n && Nl(e)._h
                            ? [
                                4,
                                (function (r, i) {
                                  return y(this, void 0, void 0, function () {
                                    var e, n;
                                    return v(this, function (t) {
                                      switch (t.label) {
                                        case 0:
                                          return Zs((n = i.code)) &&
                                            n !== Gr.ABORTED
                                            ? ((e = r.Ch.shift()),
                                              Nl(r).Yu(),
                                              [
                                                4,
                                                bl(r, function () {
                                                  return r.Dh.qh(e.batchId, i);
                                                }),
                                              ])
                                            : [3, 3];
                                        case 1:
                                          return t.sent(), [4, wl(r)];
                                        case 2:
                                          t.sent(), (t.label = 3);
                                        case 3:
                                          return [2];
                                      }
                                    });
                                  });
                                })(e, n),
                              ]
                            : [3, 2];
                        case 1:
                          t.sent(), (t.label = 2);
                        case 2:
                          return _l(e) && El(e), [2];
                      }
                    });
                  });
                }.bind(null, n),
                wh: function (o) {
                  return y(this, void 0, void 0, function () {
                    var e, n, r, i;
                    return v(this, function (t) {
                      for (e = Nl(o), n = 0, r = o.Ch; n < r.length; n++)
                        (i = r[n]), e.fh(i.mutations);
                      return [2];
                    });
                  });
                }.bind(null, n),
                dh: function (r, i, o) {
                  return y(this, void 0, void 0, function () {
                    var e, n;
                    return v(this, function (t) {
                      switch (t.label) {
                        case 0:
                          return (
                            (e = r.Ch.shift()),
                            (n = oc.from(e, i, o)),
                            [
                              4,
                              bl(r, function () {
                                return r.Dh.Bh(n);
                              }),
                            ]
                          );
                        case 1:
                          return t.sent(), [4, wl(r)];
                        case 2:
                          return t.sent(), [2];
                      }
                    });
                  });
                }.bind(null, n),
              }),
              t.Ih(),
              new Zf(e, t.Qu, t.credentials, t.Qt, r))),
            n.$h.push(function (e) {
              return y(i, void 0, void 0, function () {
                return v(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return e ? (n.Qh.Yu(), [4, wl(n)]) : [3, 2];
                    case 1:
                      return t.sent(), [3, 4];
                    case 2:
                      return [4, n.Qh.stop()];
                    case 3:
                      t.sent(),
                        0 < n.Ch.length &&
                          (Dr(
                            "RemoteStore",
                            "Stopping write stream with " +
                              n.Ch.length +
                              " pending writes"
                          ),
                          (n.Ch = [])),
                        (t.label = 4);
                    case 4:
                      return [2];
                  }
                });
              });
            })),
          n.Qh
        );
      }
      function Al() {
        (this.queries = new Lc(ts, $o)),
          (this.onlineState = "Unknown"),
          (this.Wh = new Set());
      }
      var Sl = function () {
        (this.Kh = void 0), (this.listeners = []);
      };
      function xl(s, u) {
        return y(this, void 0, void 0, function () {
          var e, n, r, i, o;
          return v(this, function (t) {
            switch (t.label) {
              case 0:
                if (
                  ((e = s),
                  (n = u.query),
                  (r = !1),
                  (i = e.queries.get(n)) || ((r = !0), (i = new Sl())),
                  !r)
                )
                  return [3, 4];
                t.label = 1;
              case 1:
                return t.trys.push([1, 3, , 4]), (o = i), [4, e.jh(n)];
              case 2:
                return (o.Kh = t.sent()), [3, 4];
              case 3:
                return (
                  (o = t.sent()),
                  (o = Oa(
                    o,
                    "Initialization of query '" + es(u.query) + "' failed"
                  )),
                  [2, void u.onError(o)]
                );
              case 4:
                return (
                  e.queries.set(n, i),
                  i.listeners.push(u),
                  u.Gh(e.onlineState),
                  i.Kh && u.zh(i.Kh) && Ol(e),
                  [2]
                );
            }
          });
        });
      }
      function Dl(s, u) {
        return y(this, void 0, void 0, function () {
          var e, n, r, i, o;
          return v(this, function (t) {
            return (
              (e = s),
              (n = u.query),
              (r = !1),
              (i = e.queries.get(n)) &&
                0 <= (o = i.listeners.indexOf(u)) &&
                (i.listeners.splice(o, 1), (r = 0 === i.listeners.length)),
              r ? [2, (e.queries.delete(n), e.Hh(n))] : [2]
            );
          });
        });
      }
      function Ol(t) {
        t.Wh.forEach(function (t) {
          t.next();
        });
      }
      var kl =
          ((Ul.prototype.zh = function (t) {
            if (!this.options.includeMetadataChanges) {
              for (var e = [], n = 0, r = t.docChanges; n < r.length; n++) {
                var i = r[n];
                3 !== i.type && e.push(i);
              }
              t = new bu(t.query, t.docs, t.Se, e, t.De, t.fromCache, t.Ce, !0);
            }
            var o = !1;
            return (
              this.Yh
                ? this.Zh(t) && (this.Jh.next(t), (o = !0))
                : this.tl(t, this.onlineState) && (this.el(t), (o = !0)),
              (this.Xh = t),
              o
            );
          }),
          (Ul.prototype.onError = function (t) {
            this.Jh.error(t);
          }),
          (Ul.prototype.Gh = function (t) {
            this.onlineState = t;
            var e = !1;
            return (
              this.Xh &&
                !this.Yh &&
                this.tl(this.Xh, t) &&
                (this.el(this.Xh), (e = !0)),
              e
            );
          }),
          (Ul.prototype.tl = function (t, e) {
            if (!t.fromCache) return !0;
            var n = "Offline" !== e;
            return !(
              (this.options.nl && n) ||
              (t.docs.et() && "Offline" !== e)
            );
          }),
          (Ul.prototype.Zh = function (t) {
            if (0 < t.docChanges.length) return !0;
            var e = this.Xh && this.Xh.hasPendingWrites !== t.hasPendingWrites;
            return !(!t.Ce && !e) && !0 === this.options.includeMetadataChanges;
          }),
          (Ul.prototype.el = function (t) {
            (t = bu.Ne(t.query, t.docs, t.De, t.fromCache)),
              (this.Yh = !0),
              this.Jh.next(t);
          }),
          Ul),
        Pl =
          ((Ml.prototype.sl = function () {
            return "metadata" in this.payload;
          }),
          Ml),
        Cl =
          ((Vl.prototype.Pc = function (t) {
            return Hu(this.Qt, t);
          }),
          (Vl.prototype.yc = function (t) {
            return t.metadata.exists
              ? Ju(this.Qt, t.document, !1)
              : new eo(this.Pc(t.metadata.name), this.gc(t.metadata.readTime));
          }),
          (Vl.prototype.gc = qu),
          Vl),
        Ll =
          ((Rl.prototype.rl = function (t) {
            this.progress.bytesLoaded += t.byteLength;
            var e = this.progress.documentsLoaded;
            return (
              t.payload.namedQuery
                ? this.queries.push(t.payload.namedQuery)
                : t.payload.documentMetadata
                ? (this.documents.push({
                    metadata: t.payload.documentMetadata,
                  }),
                  t.payload.documentMetadata.exists || ++e)
                : t.payload.document &&
                  ((this.documents[this.documents.length - 1].document =
                    t.payload.document),
                  ++e),
              e !== this.progress.documentsLoaded
                ? ((this.progress.documentsLoaded = e),
                  Object.assign({}, this.progress))
                : null
            );
          }),
          (Rl.prototype.ol = function (t) {
            for (
              var e = new Map(), n = new Cl(this.Qt), r = 0, i = t;
              r < i.length;
              r++
            ) {
              var o = i[r];
              if (o.metadata.queries)
                for (
                  var s = n.Pc(o.metadata.name), u = 0, a = o.metadata.queries;
                  u < a.length;
                  u++
                ) {
                  var c = a[u],
                    h = (e.get(c) || yu()).add(s);
                  e.set(c, h);
                }
            }
            return e;
          }),
          (Rl.prototype.complete = function () {
            return y(this, void 0, void 0, function () {
              var e, n, r, i;
              return v(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [
                      4,
                      (function (f, l, p, d) {
                        return y(this, void 0, void 0, function () {
                          var n, r, i, o, e, s, u, a, c, h;
                          return v(this, function (t) {
                            switch (t.label) {
                              case 0:
                                for (
                                  n = f, r = yu(), i = cu, o = pu, e = 0, s = p;
                                  e < s.length;
                                  e++
                                )
                                  (u = s[e]),
                                    (a = l.Pc(u.metadata.name)),
                                    u.document && (r = r.add(a)),
                                    (i = i.zt(a, l.yc(u))),
                                    (o = o.zt(a, l.gc(u.metadata.readTime)));
                                return (
                                  (c = n.Ec.Nr({ Wr: !0 })),
                                  [
                                    4,
                                    Fh(
                                      n,
                                      Jo(zo(fi.ot("__bundle__/docs/" + d)))
                                    ),
                                  ]
                                );
                              case 1:
                                return (
                                  (h = t.sent()),
                                  [
                                    2,
                                    n.persistence.runTransaction(
                                      "Apply bundle documents",
                                      "readwrite",
                                      function (e) {
                                        return jh(e, c, i, hi.min(), o)
                                          .next(function (t) {
                                            return c.apply(e), t;
                                          })
                                          .next(function (t) {
                                            return n._o
                                              .Yi(e, h.targetId)
                                              .next(function () {
                                                return n._o.er(
                                                  e,
                                                  r,
                                                  h.targetId
                                                );
                                              })
                                              .next(function () {
                                                return n.Tc.Zo(e, t);
                                              });
                                          });
                                      }
                                    ),
                                  ]
                                );
                            }
                          });
                        });
                      })(this.bh, new Cl(this.Qt), this.documents, this.il.id),
                    ];
                  case 1:
                    (e = t.sent()),
                      (n = this.ol(this.documents)),
                      (r = 0),
                      (i = this.queries),
                      (t.label = 2);
                  case 2:
                    return r < i.length
                      ? ((i = i[r]),
                        [
                          4,
                          (function (e, i, o) {
                            return (
                              void 0 === o && (o = yu()),
                              y(this, void 0, void 0, function () {
                                var n, r;
                                return v(this, function (t) {
                                  switch (t.label) {
                                    case 0:
                                      return [4, Fh(e, Jo(mc(i.bundledQuery)))];
                                    case 1:
                                      return (
                                        (n = t.sent()),
                                        [
                                          2,
                                          (r = e).persistence.runTransaction(
                                            "Save named query",
                                            "readwrite",
                                            function (t) {
                                              var e = qu(i.readTime);
                                              if (0 <= n.Ot._(e))
                                                return r.wo.Ls(t, i);
                                              e = n.Mt(Fr.T, e);
                                              return (
                                                (r.fc = r.fc.zt(e.targetId, e)),
                                                r._o
                                                  .Hi(t, e)
                                                  .next(function () {
                                                    return r._o.Yi(
                                                      t,
                                                      n.targetId
                                                    );
                                                  })
                                                  .next(function () {
                                                    return r._o.er(
                                                      t,
                                                      o,
                                                      n.targetId
                                                    );
                                                  })
                                                  .next(function () {
                                                    return r.wo.Ls(t, i);
                                                  })
                                              );
                                            }
                                          ),
                                        ]
                                      );
                                  }
                                });
                              })
                            );
                          })(this.bh, i, n.get(i.name)),
                        ])
                      : [3, 5];
                  case 3:
                    t.sent(), (t.label = 4);
                  case 4:
                    return r++, [3, 2];
                  case 5:
                    return [
                      2,
                      ((this.progress.taskState = "Success"),
                      new Nh(Object.assign({}, this.progress), e)),
                    ];
                }
              });
            });
          }),
          Rl);
      function Rl(t, e, n) {
        (this.il = t),
          (this.bh = e),
          (this.Qt = n),
          (this.queries = []),
          (this.documents = []),
          (this.progress = jl(t));
      }
      function Vl(t) {
        this.Qt = t;
      }
      function Ml(t, e) {
        (this.payload = t), (this.byteLength = e);
      }
      function Ul(t, e, n) {
        (this.query = t),
          (this.Jh = e),
          (this.Yh = !1),
          (this.Xh = null),
          (this.onlineState = "Unknown"),
          (this.options = n || {});
      }
      function jl(t) {
        return {
          taskState: "Running",
          documentsLoaded: 0,
          bytesLoaded: 0,
          totalDocuments: t.totalDocuments,
          totalBytes: t.totalBytes,
        };
      }
      var Fl = function (t) {
          this.key = t;
        },
        ql = function (t) {
          this.key = t;
        },
        Bl =
          (Object.defineProperty(Yl.prototype, "_l", {
            get: function () {
              return this.cl;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (Yl.prototype.fl = function (t, e) {
            var s = this,
              u = e ? e.dl : new mu(),
              a = (e || this).ll,
              c = (e || this).De,
              h = a,
              f = !1,
              l =
                Ho(this.query) && a.size === this.query.limit ? a.last() : null,
              p =
                Qo(this.query) && a.size === this.query.limit
                  ? a.first()
                  : null;
            if (
              (t.Xt(function (t, e) {
                var n = a.get(t),
                  r =
                    (r = e instanceof to ? e : null) &&
                    (ns(s.query, r) ? r : null),
                  i = !!n && s.De.has(n.key),
                  o =
                    !!r &&
                    (r.Vt || (s.De.has(r.key) && r.hasCommittedMutations)),
                  e = !1;
                n && r
                  ? n.data().isEqual(r.data())
                    ? i !== o && (u.track({ type: 3, doc: r }), (e = !0))
                    : s.wl(n, r) ||
                      (u.track({ type: 2, doc: r }),
                      (e = !0),
                      ((l && 0 < s.hl(r, l)) || (p && s.hl(r, p) < 0)) &&
                        (f = !0))
                  : !n && r
                  ? (u.track({ type: 0, doc: r }), (e = !0))
                  : n &&
                    !r &&
                    (u.track({ type: 1, doc: n }),
                    (e = !0),
                    (l || p) && (f = !0)),
                  e &&
                    (c = r
                      ? ((h = h.add(r)), o ? c.add(t) : c.delete(t))
                      : ((h = h.delete(t)), c.delete(t)));
              }),
              Ho(this.query) || Qo(this.query))
            )
              for (; h.size > this.query.limit; ) {
                var n = Ho(this.query) ? h.last() : h.first(),
                  h = h.delete(n.key),
                  c = c.delete(n.key);
                u.track({ type: 1, doc: n });
              }
            return { ll: h, dl: u, lc: f, De: c };
          }),
          (Yl.prototype.wl = function (t, e) {
            return t.Vt && e.hasCommittedMutations && !e.Vt;
          }),
          (Yl.prototype.wi = function (t, e, n) {
            var o = this,
              r = this.ll;
            (this.ll = t.ll), (this.De = t.De);
            var i = t.dl.ve();
            i.sort(function (t, e) {
              return (
                (r = t.type), (i = e.type), n(r) - n(i) || o.hl(t.doc, e.doc)
              );
              function n(t) {
                switch (t) {
                  case 0:
                    return 1;
                  case 2:
                  case 3:
                    return 2;
                  case 1:
                    return 0;
                  default:
                    return Cr();
                }
              }
              var r, i;
            }),
              this.El(n);
            var s = e ? this.Tl() : [],
              n = 0 === this.ul.size && this.Be ? 1 : 0,
              e = n !== this.al;
            return (
              (this.al = n),
              0 !== i.length || e
                ? {
                    snapshot: new bu(
                      this.query,
                      t.ll,
                      r,
                      i,
                      t.De,
                      0 == n,
                      e,
                      !1
                    ),
                    Il: s,
                  }
                : { Il: s }
            );
          }),
          (Yl.prototype.Gh = function (t) {
            return this.Be && "Offline" === t
              ? ((this.Be = !1),
                this.wi({ ll: this.ll, dl: new mu(), De: this.De, lc: !1 }, !1))
              : { Il: [] };
          }),
          (Yl.prototype.ml = function (t) {
            return !this.cl.has(t) && !!this.ll.has(t) && !this.ll.get(t).Vt;
          }),
          (Yl.prototype.El = function (t) {
            var e = this;
            t &&
              (t.qe.forEach(function (t) {
                return (e.cl = e.cl.add(t));
              }),
              t.Ue.forEach(function (t) {}),
              t.Qe.forEach(function (t) {
                return (e.cl = e.cl.delete(t));
              }),
              (this.Be = t.Be));
          }),
          (Yl.prototype.Tl = function () {
            var e = this;
            if (!this.Be) return [];
            var n = this.ul;
            (this.ul = yu()),
              this.ll.forEach(function (t) {
                e.ml(t.key) && (e.ul = e.ul.add(t.key));
              });
            var r = [];
            return (
              n.forEach(function (t) {
                e.ul.has(t) || r.push(new ql(t));
              }),
              this.ul.forEach(function (t) {
                n.has(t) || r.push(new Fl(t));
              }),
              r
            );
          }),
          (Yl.prototype.Al = function (t) {
            (this.cl = t.Rc), (this.ul = yu());
            t = this.fl(t.documents);
            return this.wi(t, !0);
          }),
          (Yl.prototype.Rl = function () {
            return bu.Ne(this.query, this.ll, this.De, 0 === this.al);
          }),
          Yl),
        Gl = function (t, e, n) {
          (this.query = t), (this.targetId = e), (this.view = n);
        },
        zl = function (t) {
          (this.key = t), (this.Pl = !1);
        },
        Hl =
          (Object.defineProperty(Ql.prototype, "Ml", {
            get: function () {
              return !0 === this.kl;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Ql);
      function Ql(t, e, n, r, i, o) {
        (this.bh = t),
          (this.yl = e),
          (this.gl = n),
          (this.Vl = r),
          (this.currentUser = i),
          (this.pl = o),
          (this.bl = {}),
          (this.vl = new Lc(ts, $o)),
          (this.Sl = new Map()),
          (this.Dl = new Set()),
          (this.Cl = new tu(di.H)),
          (this.xl = new Map()),
          (this.Nl = new Xh()),
          (this.$l = {}),
          (this.Fl = new Map()),
          (this.Ol = Hc.Li()),
          (this.onlineState = "Unknown"),
          (this.kl = void 0);
      }
      function Yl(t, e) {
        (this.query = t),
          (this.cl = e),
          (this.al = null),
          (this.Be = !1),
          (this.ul = yu()),
          (this.De = yu()),
          (this.hl = rs(t)),
          (this.ll = new gu(this.hl));
      }
      function Kl(i, o, s, u) {
        return y(this, void 0, void 0, function () {
          var e, n, r;
          return v(this, function (t) {
            switch (t.label) {
              case 0:
                return (
                  (i.Ll = function (t, e, n) {
                    return (function (r, i, o, s) {
                      return y(this, void 0, void 0, function () {
                        var e, n;
                        return v(this, function (t) {
                          switch (t.label) {
                            case 0:
                              return (e = i.view.fl(o)).lc
                                ? [
                                    4,
                                    Bh(r.bh, i.query, !1).then(function (t) {
                                      t = t.documents;
                                      return i.view.fl(t, e);
                                    }),
                                  ]
                                : [3, 2];
                            case 1:
                              (e = t.sent()), (t.label = 2);
                            case 2:
                              return (
                                (n = s && s.$e.get(i.targetId)),
                                (n = i.view.wi(e, r.Ml, n)),
                                [2, (ip(r, i.targetId, n.Il), n.snapshot)]
                              );
                          }
                        });
                      });
                    })(i, t, e, n);
                  }),
                  [4, Bh(i.bh, o, !0)]
                );
              case 1:
                return (
                  (n = t.sent()),
                  (r = new Bl(o, n.Rc)),
                  (e = r.fl(n.documents)),
                  (n = _u.Le(s, u && "Offline" !== i.onlineState)),
                  (n = r.wi(e, i.Ml, n)),
                  ip(i, s, n.Il),
                  (r = new Gl(o, s, r)),
                  [
                    2,
                    (i.vl.set(o, r),
                    i.Sl.has(s) ? i.Sl.get(s).push(o) : i.Sl.set(s, [o]),
                    n.snapshot),
                  ]
                );
            }
          });
        });
      }
      function Xl(l, p, d) {
        return y(this, void 0, void 0, function () {
          var s, u;
          return v(this, function (t) {
            switch (t.label) {
              case 0:
                (u = pp(l)), (t.label = 1);
              case 1:
                return (
                  t.trys.push([1, 5, , 6]),
                  [
                    4,
                    ((i = u.bh),
                    (a = p),
                    (h = i),
                    (f = ci.now()),
                    (o = a.reduce(function (t, e) {
                      return t.add(e.key);
                    }, yu())),
                    h.persistence
                      .runTransaction(
                        "Locally write mutations",
                        "readwrite",
                        function (u) {
                          return h.Tc.Xo(u, o).next(function (t) {
                            c = t;
                            for (
                              var e, n = [], r = 0, i = a;
                              r < i.length;
                              r++
                            ) {
                              var o = i[r],
                                s =
                                  ((e = o),
                                  (s = c.get(o.key)),
                                  (function (t, e) {
                                    for (
                                      var n = null, r = 0, i = t;
                                      r < i.length;
                                      r++
                                    ) {
                                      var o = i[r],
                                        s =
                                          e instanceof to
                                            ? e.field(o.field)
                                            : void 0,
                                        s = cs(o.transform, s || null);
                                      null != s &&
                                        (n = (null == n ? new Ki() : n).set(
                                          o.field,
                                          s
                                        ));
                                    }
                                    return n ? n.Pt() : null;
                                  })(e.fieldTransforms, s));
                              null != s &&
                                n.push(
                                  new Ms(
                                    o.key,
                                    s,
                                    (function s(t) {
                                      var u = [];
                                      return (
                                        Ei(t.fields || {}, function (t, e) {
                                          var n = new pi([t]);
                                          if (Qi(e))
                                            if (
                                              0 ===
                                              (e = s(e.mapValue).fields).length
                                            )
                                              u.push(n);
                                            else
                                              for (
                                                var r = 0, i = e;
                                                r < i.length;
                                                r++
                                              ) {
                                                var o = i[r];
                                                u.push(n.child(o));
                                              }
                                          else u.push(n);
                                        }),
                                        new Ti(u)
                                      );
                                    })(s.proto.mapValue),
                                    xs.exists(!0)
                                  )
                                );
                            }
                            return h.zo.Ri(u, f, n, a);
                          });
                        }
                      )
                      .then(function (t) {
                        var e = t.xs(c);
                        return { batchId: t.batchId, ri: e };
                      })),
                  ]
                );
              case 2:
                return (
                  (s = t.sent()),
                  u.Vl.Ca(s.batchId),
                  (e = u),
                  (n = s.batchId),
                  (r = d),
                  (i = (i = (i = e.$l[e.currentUser.A()]) || new tu(Mr)).zt(
                    n,
                    r
                  )),
                  (e.$l[e.currentUser.A()] = i),
                  [4, sp(u, s.ri)]
                );
              case 3:
                return t.sent(), [4, wl(u.yl)];
              case 4:
                return t.sent(), [3, 6];
              case 5:
                return (
                  (u = t.sent()),
                  (u = Oa(u, "Failed to persist write")),
                  d.reject(u),
                  [3, 6]
                );
              case 6:
                return [2];
            }
            var e, n, r, i, a, c, h, f, o;
          });
        });
      }
      function Wl(r, i) {
        return y(this, void 0, void 0, function () {
          var n, e;
          return v(this, function (t) {
            switch (t.label) {
              case 0:
                (n = r), (t.label = 1);
              case 1:
                return t.trys.push([1, 4, , 6]), [4, Uh(n.bh, i)];
              case 2:
                return (
                  (e = t.sent()),
                  i.$e.forEach(function (t, e) {
                    e = n.xl.get(e);
                    e &&
                      (Lr(t.qe.size + t.Ue.size + t.Qe.size <= 1),
                      0 < t.qe.size
                        ? (e.Pl = !0)
                        : 0 < t.Ue.size
                        ? Lr(e.Pl)
                        : 0 < t.Qe.size && (Lr(e.Pl), (e.Pl = !1)));
                  }),
                  [4, sp(n, e, i)]
                );
              case 3:
                return t.sent(), [3, 6];
              case 4:
                return [4, Cc(t.sent())];
              case 5:
                return t.sent(), [3, 6];
              case 6:
                return [2];
            }
          });
        });
      }
      function Jl(t, n, e) {
        var r,
          t = t;
        ((t.Ml && 0 === e) || (!t.Ml && 1 === e)) &&
          ((r = []),
          t.vl.forEach(function (t, e) {
            e = e.view.Gh(n);
            e.snapshot && r.push(e.snapshot);
          }),
          (function (t, i) {
            t.onlineState = i;
            var o = !1;
            t.queries.forEach(function (t, e) {
              for (var n = 0, r = e.listeners; n < r.length; n++)
                r[n].Gh(i) && (o = !0);
            }),
              o && Ol(t);
          })(t.gl, n),
          r.length && t.bl.ah(r),
          (t.onlineState = n),
          t.Ml && t.Vl.Qa(n));
      }
      function Zl(s, u, a) {
        return y(this, void 0, void 0, function () {
          var n, o;
          return v(this, function (t) {
            switch (t.label) {
              case 0:
                (n = s), (t.label = 1);
              case 1:
                return (
                  t.trys.push([1, 4, , 6]),
                  [
                    4,
                    ((e = n.bh),
                    (r = u),
                    (i = e).persistence.runTransaction(
                      "Reject batch",
                      "readwrite-primary",
                      function (e) {
                        var n;
                        return i.zo
                          .Pi(e, r)
                          .next(function (t) {
                            return (
                              Lr(null !== t), (n = t.keys()), i.zo.Ci(e, t)
                            );
                          })
                          .next(function () {
                            return i.zo.$i(e);
                          })
                          .next(function () {
                            return i.Tc.Xo(e, n);
                          });
                      }
                    )),
                  ]
                );
              case 2:
                return (
                  (o = t.sent()),
                  ep(n, u, a),
                  tp(n, u),
                  n.Vl.Na(u, "rejected", a),
                  [4, sp(n, o)]
                );
              case 3:
                return t.sent(), [3, 6];
              case 4:
                return [4, Cc(t.sent())];
              case 5:
                return t.sent(), [3, 6];
              case 6:
                return [2];
            }
            var e, r, i;
          });
        });
      }
      function $l(o, s) {
        return y(this, void 0, void 0, function () {
          var n, r, i;
          return v(this, function (t) {
            switch (t.label) {
              case 0:
                yl((n = o).yl) ||
                  Dr(
                    "SyncEngine",
                    "The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled."
                  ),
                  (t.label = 1);
              case 1:
                return (
                  t.trys.push([1, 3, , 4]),
                  [
                    4,
                    (e = n.bh).persistence.runTransaction(
                      "Get highest unacknowledged batch id",
                      "readonly",
                      function (t) {
                        return e.zo.Vi(t);
                      }
                    ),
                  ]
                );
              case 2:
                return -1 === (r = t.sent())
                  ? [2, void s.resolve()]
                  : ((i = n.Fl.get(r) || []).push(s), n.Fl.set(r, i), [3, 4]);
              case 3:
                return (
                  (i = t.sent()),
                  (i = Oa(
                    i,
                    "Initialization of waitForPendingWrites() operation failed"
                  )),
                  s.reject(i),
                  [3, 4]
                );
              case 4:
                return [2];
            }
            var e;
          });
        });
      }
      function tp(t, e) {
        (t.Fl.get(e) || []).forEach(function (t) {
          t.resolve();
        }),
          t.Fl.delete(e);
      }
      function ep(t, e, n) {
        var r = t,
          i = r.$l[r.currentUser.A()];
        i &&
          ((t = i.get(e)) && (n ? t.reject(n) : t.resolve(), (i = i.remove(e))),
          (r.$l[r.currentUser.A()] = i));
      }
      function np(e, t, n) {
        void 0 === n && (n = null), e.Vl.ka(t);
        for (var r = 0, i = e.Sl.get(t); r < i.length; r++) {
          var o = i[r];
          e.vl.delete(o), n && e.bl.Bl(o, n);
        }
        e.Sl.delete(t),
          e.Ml &&
            e.Nl.Fc(t).forEach(function (t) {
              e.Nl.Fi(t) || rp(e, t);
            });
      }
      function rp(t, e) {
        t.Dl.delete(e.path.rt());
        var n = t.Cl.get(e);
        null !== n &&
          (hl(t.yl, n), (t.Cl = t.Cl.remove(e)), t.xl.delete(n), op(t));
      }
      function ip(t, e, n) {
        for (var r, i, o, s = 0, u = n; s < u.length; s++) {
          var a = u[s];
          a instanceof Fl
            ? (t.Nl.nr(a.key, e),
              (r = t),
              (o = void 0),
              (i = (o = (i = a).key).path.rt()),
              r.Cl.get(o) ||
                r.Dl.has(i) ||
                (Dr("SyncEngine", "New document in limbo: " + o),
                r.Dl.add(i),
                op(r)))
            : a instanceof ql
            ? (Dr("SyncEngine", "Document no longer in limbo: " + a.key),
              t.Nl.ir(a.key, e),
              t.Nl.Fi(a.key) || rp(t, a.key))
            : Cr();
        }
      }
      function op(t) {
        for (; 0 < t.Dl.size && t.Cl.size < t.pl; ) {
          var e = t.Dl.values().next().value;
          t.Dl.delete(e);
          var n = new di(fi.ot(e)),
            e = t.Ol.next();
          t.xl.set(e, new zl(n)),
            (t.Cl = t.Cl.zt(n, e)),
            cl(t.yl, new is(Jo(zo(n.path)), e, 2, ei.q));
        }
      }
      function sp(e, s, u) {
        return y(this, void 0, void 0, function () {
          var n, r, i, o;
          return v(this, function (t) {
            switch (t.label) {
              case 0:
                return (
                  (r = []),
                  (i = []),
                  (o = []),
                  (n = e).vl.et()
                    ? [3, 3]
                    : (n.vl.forEach(function (t, e) {
                        o.push(
                          n.Ll(e, s, u).then(function (t) {
                            t &&
                              (n.Ml &&
                                n.Vl.Ba(
                                  e.targetId,
                                  t.fromCache ? "not-current" : "current"
                                ),
                              r.push(t),
                              (t = Sh.oc(e.targetId, t)),
                              i.push(t));
                          })
                        );
                      }),
                      [4, Promise.all(o)])
                );
              case 1:
                return (
                  t.sent(),
                  n.bl.ah(r),
                  [
                    4,
                    (function (a, c) {
                      return y(this, void 0, void 0, function () {
                        var r, e, n, i, o, s, u;
                        return v(this, function (t) {
                          switch (t.label) {
                            case 0:
                              (r = a), (t.label = 1);
                            case 1:
                              return (
                                t.trys.push([1, 3, , 4]),
                                [
                                  4,
                                  r.persistence.runTransaction(
                                    "notifyLocalViewChanges",
                                    "readwrite",
                                    function (n) {
                                      return la.forEach(c, function (e) {
                                        return la
                                          .forEach(e.ic, function (t) {
                                            return r.persistence.Ti.nr(
                                              n,
                                              e.targetId,
                                              t
                                            );
                                          })
                                          .next(function () {
                                            return la.forEach(
                                              e.rc,
                                              function (t) {
                                                return r.persistence.Ti.ir(
                                                  n,
                                                  e.targetId,
                                                  t
                                                );
                                              }
                                            );
                                          });
                                      });
                                    }
                                  ),
                                ]
                              );
                            case 2:
                              return t.sent(), [3, 4];
                            case 3:
                              if (!Ea((e = t.sent()))) throw e;
                              return (
                                Dr(
                                  "LocalStore",
                                  "Failed to update sequence numbers: " + e
                                ),
                                [3, 4]
                              );
                            case 4:
                              for (n = 0, i = c; n < i.length; n++)
                                (u = i[n]),
                                  (o = u.targetId),
                                  u.fromCache ||
                                    ((s = r.fc.get(o)),
                                    (u = s.Ot),
                                    (u = s.Lt(u)),
                                    (r.fc = r.fc.zt(o, u)));
                              return [2];
                          }
                        });
                      });
                    })(n.bh, i),
                  ]
                );
              case 2:
                t.sent(), (t.label = 3);
              case 3:
                return [2];
            }
          });
        });
      }
      function up(i, o) {
        return y(this, void 0, void 0, function () {
          var n, r;
          return v(this, function (t) {
            switch (t.label) {
              case 0:
                return (n = i).currentUser.isEqual(o)
                  ? [3, 3]
                  : (Dr("SyncEngine", "User change. New user:", o.A()),
                    [4, Rh(n.bh, o)]);
              case 1:
                return (
                  (r = t.sent()),
                  (n.currentUser = o),
                  (e = n).Fl.forEach(function (t) {
                    t.forEach(function (t) {
                      t.reject(
                        new zr(
                          Gr.CANCELLED,
                          "'waitForPendingWrites' promise is rejected due to a user change."
                        )
                      );
                    });
                  }),
                  e.Fl.clear(),
                  n.Vl.Ua(o, r.mc, r.Ac),
                  [4, sp(n, r.Ic)]
                );
              case 2:
                t.sent(), (t.label = 3);
              case 3:
                return [2];
            }
            var e;
          });
        });
      }
      function ap(u, a, c, h) {
        return y(this, void 0, void 0, function () {
          var o, s;
          return v(this, function (t) {
            switch (t.label) {
              case 0:
                return [
                  4,
                  ((e = (o = u).bh),
                  (n = a),
                  (i = (r = e).zo),
                  r.persistence.runTransaction(
                    "Lookup mutation documents",
                    "readonly",
                    function (e) {
                      return i.yi(e, n).next(function (t) {
                        return t ? r.Tc.Xo(e, t) : la.resolve(null);
                      });
                    }
                  )),
                ];
              case 1:
                return null === (s = t.sent())
                  ? [3, 6]
                  : "pending" !== c
                  ? [3, 3]
                  : [4, wl(o.yl)];
              case 2:
                return t.sent(), [3, 4];
              case 3:
                "acknowledged" === c || "rejected" === c
                  ? (ep(o, a, h || null), tp(o, a), o.bh.zo.xi(a))
                  : Cr(),
                  (t.label = 4);
              case 4:
                return [4, sp(o, s)];
              case 5:
                return t.sent(), [3, 7];
              case 6:
                Dr("SyncEngine", "Cannot apply mutation batch with id: " + a),
                  (t.label = 7);
              case 7:
                return [2];
            }
            var e, n, r, i;
          });
        });
      }
      function cp(h, f) {
        return y(this, void 0, void 0, function () {
          var r, e, i, o, s, u, a, c;
          return v(this, function (t) {
            switch (t.label) {
              case 0:
                return (
                  lp((r = h)),
                  pp(r),
                  !0 !== f || !0 === r.kl
                    ? [3, 3]
                    : ((e = r.Vl.va()), [4, hp(r, e.it())])
                );
              case 1:
                return (i = t.sent()), (r.kl = !0), [4, Il(r.yl, !0)];
              case 2:
                for (t.sent(), o = 0, s = i; o < s.length; o++)
                  (u = s[o]), cl(r.yl, u);
                return [3, 7];
              case 3:
                return !1 !== f || !1 === r.kl
                  ? [3, 7]
                  : ((a = []),
                    (c = Promise.resolve()),
                    r.Sl.forEach(function (t, e) {
                      r.Vl.Ma(e)
                        ? a.push(e)
                        : (c = c.then(function () {
                            return np(r, e), qh(r.bh, e, !0);
                          })),
                        hl(r.yl, e);
                    }),
                    [4, c]);
              case 4:
                return t.sent(), [4, hp(r, a)];
              case 5:
                return (
                  t.sent(),
                  (n = r).xl.forEach(function (t, e) {
                    hl(n.yl, e);
                  }),
                  n.Nl.Oc(),
                  (n.xl = new Map()),
                  (n.Cl = new tu(di.H)),
                  (r.kl = !1),
                  [4, Il(r.yl, !1)]
                );
              case 6:
                t.sent(), (t.label = 7);
              case 7:
                return [2];
            }
            var n;
          });
        });
      }
      function hp(p, d) {
        return y(this, void 0, void 0, function () {
          var e, n, r, i, o, s, u, a, c, h, f, l;
          return v(this, function (t) {
            switch (t.label) {
              case 0:
                (e = p), (n = []), (r = []), (i = 0), (o = d), (t.label = 1);
              case 1:
                return i < o.length
                  ? ((s = o[i]),
                    (u = void 0),
                    (a = e.Sl.get(s)) && 0 !== a.length
                      ? [4, Fh(e.bh, Jo(a[0]))]
                      : [3, 7])
                  : [3, 13];
              case 2:
                (u = t.sent()), (c = 0), (h = a), (t.label = 3);
              case 3:
                return c < h.length
                  ? ((f = h[c]),
                    (f = e.vl.get(f)),
                    [
                      4,
                      (function (r, i) {
                        return y(this, void 0, void 0, function () {
                          var e, n;
                          return v(this, function (t) {
                            switch (t.label) {
                              case 0:
                                return [4, Bh((e = r).bh, i.query, !0)];
                              case 1:
                                return (
                                  (n = t.sent()),
                                  (n = i.view.Al(n)),
                                  [2, (e.Ml && ip(e, i.targetId, n.Il), n)]
                                );
                            }
                          });
                        });
                      })(e, f),
                    ])
                  : [3, 6];
              case 4:
                (f = t.sent()).snapshot && r.push(f.snapshot), (t.label = 5);
              case 5:
                return c++, [3, 3];
              case 6:
                return [3, 11];
              case 7:
                return [4, Gh(e.bh, s)];
              case 8:
                return (l = t.sent()), [4, Fh(e.bh, l)];
              case 9:
                return (u = t.sent()), [4, Kl(e, fp(l), s, !1)];
              case 10:
                t.sent(), (t.label = 11);
              case 11:
                n.push(u), (t.label = 12);
              case 12:
                return i++, [3, 1];
              case 13:
                return [2, (e.bl.ah(r), n)];
            }
          });
        });
      }
      function fp(t) {
        return Go(
          t.path,
          t.collectionGroup,
          t.orderBy,
          t.filters,
          t.limit,
          "F",
          t.startAt,
          t.endAt
        );
      }
      function lp(t) {
        return (
          (t.yl.Dh.Lh = Wl.bind(null, t)),
          (t.yl.Dh.vn = function (t, e) {
            var n = t;
            if ((t = n.xl.get(e)) && t.Pl) return yu().add(t.key);
            var r = yu();
            if (!(e = n.Sl.get(e))) return r;
            for (var i = 0, o = e; i < o.length; i++)
              var s = o[i], s = n.vl.get(s), r = r.Pe(s.view._l);
            return r;
          }.bind(null, t)),
          (t.yl.Dh.Mh = function (o, s, u) {
            return y(this, void 0, void 0, function () {
              var e, n, r, i;
              return v(this, function (t) {
                switch (t.label) {
                  case 0:
                    return (
                      (e = o).Vl.Ba(s, "rejected", u),
                      (i = e.xl.get(s)),
                      (n = i && i.key)
                        ? ((r = (r = new tu(di.H)).zt(n, new eo(n, hi.min()))),
                          (i = yu().add(n)),
                          (i = new wu(hi.min(), new Map(), new uu(Mr), r, i)),
                          [4, Wl(e, i)])
                        : [3, 2]
                    );
                  case 1:
                    return (
                      t.sent(),
                      (e.Cl = e.Cl.remove(n)),
                      e.xl.delete(s),
                      op(e),
                      [3, 4]
                    );
                  case 2:
                    return [
                      4,
                      qh(e.bh, s, !1)
                        .then(function () {
                          return np(e, s, u);
                        })
                        .catch(Cc),
                    ];
                  case 3:
                    t.sent(), (t.label = 4);
                  case 4:
                    return [2];
                }
              });
            });
          }.bind(null, t)),
          (t.bl.ah = function (t, e) {
            for (var n = t, r = !1, i = 0, o = e; i < o.length; i++) {
              var s = o[i],
                u = s.query,
                u = n.queries.get(u);
              if (u) {
                for (var a = 0, c = u.listeners; a < c.length; a++)
                  c[a].zh(s) && (r = !0);
                u.Kh = s;
              }
            }
            r && Ol(n);
          }.bind(null, t.gl)),
          (t.bl.Bl = function (t, e, n) {
            var r = t;
            if ((t = r.queries.get(e)))
              for (var i = 0, o = t.listeners; i < o.length; i++)
                o[i].onError(n);
            r.queries.delete(e);
          }.bind(null, t.gl)),
          t
        );
      }
      function pp(t) {
        return (
          (t.yl.Dh.Bh = function (i, o) {
            return y(this, void 0, void 0, function () {
              var e, n, r;
              return v(this, function (t) {
                switch (t.label) {
                  case 0:
                    (e = i), (n = o.batch.batchId), (t.label = 1);
                  case 1:
                    return t.trys.push([1, 4, , 6]), [4, Vh(e.bh, o)];
                  case 2:
                    return (
                      (r = t.sent()),
                      ep(e, n, null),
                      tp(e, n),
                      e.Vl.Na(n, "acknowledged"),
                      [4, sp(e, r)]
                    );
                  case 3:
                    return t.sent(), [3, 6];
                  case 4:
                    return [4, Cc(t.sent())];
                  case 5:
                    return t.sent(), [3, 6];
                  case 6:
                    return [2];
                }
              });
            });
          }.bind(null, t)),
          (t.yl.Dh.qh = Zl.bind(null, t)),
          t
        );
      }
      function dp(t, e, n) {
        var r = t;
        (function (l, p, d) {
          return y(this, void 0, void 0, function () {
            var u, a, c, h, f;
            return v(this, function (t) {
              switch (t.label) {
                case 0:
                  return t.trys.push([0, 14, , 15]), [4, p.getMetadata()];
                case 1:
                  return (
                    (u = t.sent()),
                    [
                      4,
                      ((r = l.bh),
                      (o = r),
                      (s = qu((i = u).createTime)),
                      o.persistence
                        .runTransaction(
                          "hasNewerBundle",
                          "readonly",
                          function (t) {
                            return o.wo.Os(t, i.id);
                          }
                        )
                        .then(function (t) {
                          return !!t && 0 <= t.createTime._(s);
                        })),
                    ]
                  );
                case 2:
                  return t.sent() ? [4, p.close()] : [3, 4];
                case 3:
                  return [
                    2,
                    (t.sent(),
                    void d.ql({
                      taskState: "Success",
                      documentsLoaded: u.totalDocuments,
                      bytesLoaded: u.totalBytes,
                      totalDocuments: u.totalDocuments,
                      totalBytes: u.totalBytes,
                    })),
                  ];
                case 4:
                  return d.Ul(jl(u)), (a = new Ll(u, l.bh, p.Qt)), [4, p.Ql()];
                case 5:
                  (c = t.sent()), (t.label = 6);
                case 6:
                  return c ? [4, a.rl(c)] : [3, 10];
                case 7:
                  return (h = t.sent()) && d.Ul(h), [4, p.Ql()];
                case 8:
                  (c = t.sent()), (t.label = 9);
                case 9:
                  return [3, 6];
                case 10:
                  return [4, a.complete()];
                case 11:
                  return (f = t.sent()), [4, sp(l, f.Go, void 0)];
                case 12:
                  return (
                    t.sent(),
                    [
                      4,
                      ((r = l.bh),
                      (e = u),
                      (n = r).persistence.runTransaction(
                        "Save bundle",
                        "readwrite",
                        function (t) {
                          return n.wo.ks(t, e);
                        }
                      )),
                    ]
                  );
                case 13:
                  return t.sent(), d.ql(f.progress), [3, 15];
                case 14:
                  return (
                    kr(
                      "SyncEngine",
                      "Loading bundle failed with " + (f = t.sent())
                    ),
                    d.Kl(f),
                    [3, 15]
                  );
                case 15:
                  return [2];
              }
              var e, n, r, i, o, s;
            });
          });
        })(r, e, n).then(function () {
          r.Vl.Wa();
        });
      }
      var yp,
        vp,
        gp =
          ((Tp.prototype.initialize = function (e) {
            return y(this, void 0, void 0, function () {
              return v(this, function (t) {
                switch (t.label) {
                  case 0:
                    return (
                      (this.Qt = Hf(e.yu.t)),
                      (this.Vl = this.Wl(e)),
                      (this.persistence = this.jl(e)),
                      [4, this.persistence.start()]
                    );
                  case 1:
                    return (
                      t.sent(),
                      (this.Gl = this.zl(e)),
                      (this.bh = this.Hl(e)),
                      [2]
                    );
                }
              });
            });
          }),
          (Tp.prototype.zl = function (t) {
            return null;
          }),
          (Tp.prototype.Hl = function (t) {
            return Lh(this.persistence, new xh(), t.Jl, this.Qt);
          }),
          (Tp.prototype.jl = function (t) {
            return new ef(rf.ia, this.Qt);
          }),
          (Tp.prototype.Wl = function (t) {
            return new Nf();
          }),
          (Tp.prototype.terminate = function () {
            return y(this, void 0, void 0, function () {
              return v(this, function (t) {
                switch (t.label) {
                  case 0:
                    return this.Gl && this.Gl.stop(), [4, this.Vl.ko()];
                  case 1:
                    return t.sent(), [4, this.persistence.ko()];
                  case 2:
                    return t.sent(), [2];
                }
              });
            });
          }),
          Tp),
        mp =
          (h(Ip, (vp = gp)),
          (Ip.prototype.initialize = function (e) {
            return y(this, void 0, void 0, function () {
              return v(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, vp.prototype.initialize.call(this, e)];
                  case 1:
                    return t.sent(), [4, Hh(this.bh)];
                  case 2:
                    return t.sent(), [4, this.Yl.initialize(this, e)];
                  case 3:
                    return t.sent(), [4, pp(this.Yl._a)];
                  case 4:
                    return t.sent(), [4, wl(this.Yl.yl)];
                  case 5:
                    return t.sent(), [2];
                }
              });
            });
          }),
          (Ip.prototype.Hl = function (t) {
            return Lh(this.persistence, new xh(), t.Jl, this.Qt);
          }),
          (Ip.prototype.zl = function (t) {
            var e = this.persistence.Ti.lr;
            return new th(e, t._s);
          }),
          (Ip.prototype.jl = function (t) {
            var e = Th(t.yu.t, t.yu.persistenceKey),
              n =
                void 0 !== this.cacheSizeBytes
                  ? kc.Ys(this.cacheSizeBytes)
                  : kc.ti;
            return new wh(
              this.synchronizeTabs,
              e,
              t.clientId,
              n,
              t._s,
              Gf(),
              zf(),
              this.Qt,
              this.Vl,
              !!this.forceOwnership
            );
          }),
          (Ip.prototype.Wl = function (t) {
            return new Nf();
          }),
          Ip),
        bp =
          (h(Ep, (yp = mp)),
          (Ep.prototype.initialize = function (r) {
            return y(this, void 0, void 0, function () {
              var e,
                n = this;
              return v(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, yp.prototype.initialize.call(this, r)];
                  case 1:
                    return (
                      t.sent(),
                      (e = this.Yl._a),
                      this.Vl instanceof Tf
                        ? ((this.Vl._a = {
                            eu: ap.bind(null, e),
                            nu: function (i, o, s, u) {
                              return y(this, void 0, void 0, function () {
                                var e, n, r;
                                return v(this, function (t) {
                                  switch (t.label) {
                                    case 0:
                                      return (e = i).kl
                                        ? (Dr(
                                            "SyncEngine",
                                            "Ignoring unexpected query state notification."
                                          ),
                                          [3, 8])
                                        : [3, 1];
                                    case 1:
                                      if (!e.Sl.has(o)) return [3, 8];
                                      switch (s) {
                                        case "current":
                                        case "not-current":
                                          return [3, 2];
                                        case "rejected":
                                          return [3, 5];
                                      }
                                      return [3, 7];
                                    case 2:
                                      return [4, zh(e.bh)];
                                    case 3:
                                      return (
                                        (n = t.sent()),
                                        (r = wu.Me(o, "current" === s)),
                                        [4, sp(e, n, r)]
                                      );
                                    case 4:
                                      return t.sent(), [3, 8];
                                    case 5:
                                      return [4, qh(e.bh, o, !0)];
                                    case 6:
                                      return t.sent(), np(e, o, u), [3, 8];
                                    case 7:
                                      Cr(), (t.label = 8);
                                    case 8:
                                      return [2];
                                  }
                                });
                              });
                            }.bind(null, e),
                            su: function (c, h, f) {
                              return y(this, void 0, void 0, function () {
                                var n, e, r, i, o, s, u, a;
                                return v(this, function (t) {
                                  switch (t.label) {
                                    case 0:
                                      if (!(n = lp(c)).kl) return [3, 10];
                                      (e = 0), (r = h), (t.label = 1);
                                    case 1:
                                      return e < r.length
                                        ? ((r = r[e]),
                                          n.Sl.has(r)
                                            ? (Dr(
                                                "SyncEngine",
                                                "Adding an already active target " +
                                                  r
                                              ),
                                              [3, 5])
                                            : [4, Gh(n.bh, r)])
                                        : [3, 6];
                                    case 2:
                                      return (i = t.sent()), [4, Fh(n.bh, i)];
                                    case 3:
                                      return (
                                        (o = t.sent()),
                                        [4, Kl(n, fp(i), o.targetId, !1)]
                                      );
                                    case 4:
                                      t.sent(), cl(n.yl, o), (t.label = 5);
                                    case 5:
                                      return e++, [3, 1];
                                    case 6:
                                      (s = function (e) {
                                        return v(this, function (t) {
                                          switch (t.label) {
                                            case 0:
                                              return n.Sl.has(e)
                                                ? [
                                                    4,
                                                    qh(n.bh, e, !1)
                                                      .then(function () {
                                                        hl(n.yl, e), np(n, e);
                                                      })
                                                      .catch(Cc),
                                                  ]
                                                : [3, 2];
                                            case 1:
                                              t.sent(), (t.label = 2);
                                            case 2:
                                              return [2];
                                          }
                                        });
                                      }),
                                        (u = 0),
                                        (a = f),
                                        (t.label = 7);
                                    case 7:
                                      return u < a.length
                                        ? ((a = a[u]), [5, s(a)])
                                        : [3, 10];
                                    case 8:
                                      t.sent(), (t.label = 9);
                                    case 9:
                                      return u++, [3, 7];
                                    case 10:
                                      return [2];
                                  }
                                });
                              });
                            }.bind(null, e),
                            Uo: function (t) {
                              return t.bh.persistence.Uo();
                            }.bind(null, e),
                            tu: function (n) {
                              return y(this, void 0, void 0, function () {
                                var e;
                                return v(this, function (t) {
                                  return [
                                    2,
                                    zh((e = n).bh).then(function (t) {
                                      return sp(e, t);
                                    }),
                                  ];
                                });
                              });
                            }.bind(null, e),
                          }),
                          [4, this.Vl.start()])
                        : [3, 3]
                    );
                  case 2:
                    t.sent(), (t.label = 3);
                  case 3:
                    return [
                      4,
                      this.persistence.Ro(function (e) {
                        return y(n, void 0, void 0, function () {
                          return v(this, function (t) {
                            switch (t.label) {
                              case 0:
                                return [4, cp(this.Yl._a, e)];
                              case 1:
                                return (
                                  t.sent(),
                                  this.Gl &&
                                    (e && !this.Gl.Er
                                      ? this.Gl.start(this.bh)
                                      : e || this.Gl.stop()),
                                  [2]
                                );
                            }
                          });
                        });
                      }),
                    ];
                  case 4:
                    return t.sent(), [2];
                }
              });
            });
          }),
          (Ep.prototype.Wl = function (t) {
            var e = Gf();
            if (!Tf.Kn(e))
              throw new zr(
                Gr.UNIMPLEMENTED,
                "IndexedDB persistence is only available on platforms that support LocalStorage."
              );
            var n = Th(t.yu.t, t.yu.persistenceKey);
            return new Tf(e, t._s, n, t.clientId, t.Jl);
          }),
          Ep),
        wp =
          ((_p.prototype.initialize = function (n, r) {
            return y(this, void 0, void 0, function () {
              var e = this;
              return v(this, function (t) {
                switch (t.label) {
                  case 0:
                    return this.bh
                      ? [3, 2]
                      : ((this.bh = n.bh),
                        (this.Vl = n.Vl),
                        (this.Sh = this.Xl(r)),
                        (this.yl = this.Zl(r)),
                        (this.gl = this.t_(r)),
                        (this._a = this.e_(r, !n.synchronizeTabs)),
                        (this.Vl.fa = function (t) {
                          return Jl(e._a, t, 1);
                        }),
                        (this.yl.Dh.n_ = up.bind(null, this._a)),
                        [4, Il(this.yl, this._a.Ml)]);
                  case 1:
                    t.sent(), (t.label = 2);
                  case 2:
                    return [2];
                }
              });
            });
          }),
          (_p.prototype.t_ = function (t) {
            return new Al();
          }),
          (_p.prototype.Xl = function (t) {
            var e = Hf(t.yu.t),
              n = ((n = t.yu), new Of(n));
            return (t = t.credentials), new $f(t, n, e);
          }),
          (_p.prototype.Zl = function (t) {
            var e = this,
              n = this.bh,
              r = this.Sh,
              i = t._s,
              o = function (t) {
                return Jl(e._a, t, 0);
              },
              t = new (Sf.Kn() ? Sf : Af)();
            return new Qf(n, r, i, o, t);
          }),
          (_p.prototype.e_ = function (t, e) {
            return (function (t, e, n, r, i, o, s) {
              o = new Hl(t, e, n, r, i, o);
              return s && (o.kl = !0), o;
            })(this.bh, this.yl, this.gl, this.Vl, t.Jl, t.pl, e);
          }),
          (_p.prototype.terminate = function () {
            return (function (n) {
              return y(this, void 0, void 0, function () {
                var e;
                return v(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (
                        (e = n),
                        Dr("RemoteStore", "RemoteStore shutting down."),
                        e.Nh.add(5),
                        [4, al(e)]
                      );
                    case 1:
                      return t.sent(), e.Fh.ko(), e.Oh.set("Unknown"), [2];
                  }
                });
              });
            })(this.yl);
          }),
          _p);
      function _p() {}
      function Ep(t, e) {
        var n = this;
        return (
          ((n = yp.call(this, t, e, !1) || this).Yl = t),
          (n.cacheSizeBytes = e),
          (n.synchronizeTabs = !0),
          n
        );
      }
      function Ip(t, e, n) {
        var r = this;
        return (
          ((r = vp.call(this) || this).Yl = t),
          (r.cacheSizeBytes = e),
          (r.forceOwnership = n),
          (r.synchronizeTabs = !1),
          r
        );
      }
      function Tp() {
        this.synchronizeTabs = !1;
      }
      function Np(n, r) {
        void 0 === r && (r = 10240);
        var i = 0;
        return {
          read: function () {
            return y(this, void 0, void 0, function () {
              var e;
              return v(this, function (t) {
                return i < n.byteLength
                  ? ((e = { value: n.slice(i, i + r), done: !1 }),
                    [2, ((i += r), e)])
                  : [2, { done: !0 }];
              });
            });
          },
          cancel: function () {
            return y(this, void 0, void 0, function () {
              return v(this, function (t) {
                return [2];
              });
            });
          },
          releaseLock: function () {},
        };
      }
      var Ap =
          ((Cp.prototype.next = function (t) {
            this.observer.next && this.s_(this.observer.next, t);
          }),
          (Cp.prototype.error = function (t) {
            this.observer.error
              ? this.s_(this.observer.error, t)
              : console.error("Uncaught Error in snapshot listener:", t);
          }),
          (Cp.prototype.i_ = function () {
            this.muted = !0;
          }),
          (Cp.prototype.s_ = function (t, e) {
            var n = this;
            this.muted ||
              setTimeout(function () {
                n.muted || t(e);
              }, 0);
          }),
          Cp),
        Sp =
          ((Pp.prototype.close = function () {
            return this.r_.cancel();
          }),
          (Pp.prototype.getMetadata = function () {
            return y(this, void 0, void 0, function () {
              return v(this, function (t) {
                return [2, this.metadata.promise];
              });
            });
          }),
          (Pp.prototype.Ql = function () {
            return y(this, void 0, void 0, function () {
              return v(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, this.getMetadata()];
                  case 1:
                    return [2, (t.sent(), this.c_())];
                }
              });
            });
          }),
          (Pp.prototype.c_ = function () {
            return y(this, void 0, void 0, function () {
              var e, n, r;
              return v(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, this.a_()];
                  case 1:
                    return null === (e = t.sent())
                      ? [2, null]
                      : ((r = this.o_.decode(e)),
                        (n = Number(r)),
                        isNaN(n) &&
                          this.u_(
                            "length string (" + r + ") is not valid number"
                          ),
                        [4, this.h_(n)]);
                  case 2:
                    return (
                      (r = t.sent()), [2, new Pl(JSON.parse(r), e.length + n)]
                    );
                }
              });
            });
          }),
          (Pp.prototype.l_ = function () {
            return this.buffer.findIndex(function (t) {
              return t === "{".charCodeAt(0);
            });
          }),
          (Pp.prototype.a_ = function () {
            return y(this, void 0, void 0, function () {
              var e, n;
              return v(this, function (t) {
                switch (t.label) {
                  case 0:
                    return this.l_() < 0 ? [4, this.__()] : [3, 3];
                  case 1:
                    if (t.sent()) return [3, 3];
                    t.label = 2;
                  case 2:
                    return [3, 0];
                  case 3:
                    return 0 === this.buffer.length
                      ? [2, null]
                      : ((e = this.l_()) < 0 &&
                          this.u_(
                            "Reached the end of bundle when a length string is expected."
                          ),
                        (n = this.buffer.slice(0, e)),
                        [2, ((this.buffer = this.buffer.slice(e)), n)]);
                }
              });
            });
          }),
          (Pp.prototype.h_ = function (n) {
            return y(this, void 0, void 0, function () {
              var e;
              return v(this, function (t) {
                switch (t.label) {
                  case 0:
                    return this.buffer.length < n ? [4, this.__()] : [3, 3];
                  case 1:
                    t.sent() &&
                      this.u_(
                        "Reached the end of bundle when more is expected."
                      ),
                      (t.label = 2);
                  case 2:
                    return [3, 0];
                  case 3:
                    return (
                      (e = this.o_.decode(this.buffer.slice(0, n))),
                      [2, ((this.buffer = this.buffer.slice(n)), e)]
                    );
                }
              });
            });
          }),
          (Pp.prototype.u_ = function (t) {
            throw (this.r_.cancel(), new Error("Invalid bundle format: " + t));
          }),
          (Pp.prototype.__ = function () {
            return y(this, void 0, void 0, function () {
              var e, n;
              return v(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, this.r_.read()];
                  case 1:
                    return (
                      (e = t.sent()).done ||
                        ((n = new Uint8Array(
                          this.buffer.length + e.value.length
                        )).set(this.buffer),
                        n.set(e.value, this.buffer.length),
                        (this.buffer = n)),
                      [2, e.done]
                    );
                }
              });
            });
          }),
          Pp),
        xp =
          ((kp.prototype.isEqual = function (t) {
            return this.f_.isEqual(t.f_);
          }),
          kp),
        Dp = function (t) {
          this._methodName = t;
        },
        Op = function (t) {
          this.d_ = t;
        };
      function kp() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        for (var n = 0; n < t.length; ++n)
          if (0 === t[n].length)
            throw new zr(
              Gr.INVALID_ARGUMENT,
              "Invalid field name at argument $(i + 1). Field names must not be empty."
            );
        this.f_ = new pi(t);
      }
      function Pp(t, e) {
        var n = this;
        (this.r_ = t),
          (this.Qt = e),
          (this.metadata = new fa()),
          (this.buffer = new Uint8Array()),
          (this.o_ = new TextDecoder("utf-8")),
          this.c_().then(
            function (t) {
              t && t.sl()
                ? n.metadata.resolve(t.payload.metadata)
                : n.metadata.reject(
                    new Error(
                      "The first element of the bundle is not a metadata, it is\n             " +
                        JSON.stringify(null == t ? void 0 : t.payload)
                    )
                  );
            },
            function (t) {
              return n.metadata.reject(t);
            }
          );
      }
      function Cp(t) {
        (this.observer = t), (this.muted = !1);
      }
      function Lp(t, e, n) {
        if (!n)
          throw new zr(
            Gr.INVALID_ARGUMENT,
            "Function " + t + "() cannot be called with an empty " + e + "."
          );
      }
      function Rp(t, e) {
        if (void 0 === e) return { merge: !1 };
        if (void 0 !== e.mergeFields && void 0 !== e.merge)
          throw new zr(
            Gr.INVALID_ARGUMENT,
            "Invalid options passed to function " +
              t +
              '(): You cannot specify both "merge" and "mergeFields".'
          );
        return e;
      }
      function Vp(t, e, n, r) {
        if (!0 === e && !0 === r)
          throw new zr(
            Gr.INVALID_ARGUMENT,
            t + " and " + n + " cannot be used together."
          );
      }
      function Mp(t) {
        if (!di.wt(t))
          throw new zr(
            Gr.INVALID_ARGUMENT,
            "Invalid document reference. Document references must have an even number of segments, but " +
              t +
              " has " +
              t.length +
              "."
          );
      }
      function Up(t) {
        if (di.wt(t))
          throw new zr(
            Gr.INVALID_ARGUMENT,
            "Invalid collection reference. Collection references must have an odd number of segments, but " +
              t +
              " has " +
              t.length +
              "."
          );
      }
      function jp(e) {
        if (void 0 === e) return "undefined";
        if (null === e) return "null";
        if ("string" == typeof e)
          return (
            20 < e.length && (e = e.substring(0, 20) + "..."), JSON.stringify(e)
          );
        if ("number" == typeof e || "boolean" == typeof e) return "" + e;
        if ("object" != typeof e)
          return "function" == typeof e ? "a function" : Cr();
        if (e instanceof Array) return "an array";
        var t = (function () {
          if (e.constructor) {
            var t = /function\s+([^\s(]+)\s*\(/.exec(e.constructor.toString());
            if (t && 1 < t.length) return t[1];
          }
          return null;
        })();
        return t ? "a custom " + t + " object" : "an object";
      }
      function Fp(t, e) {
        if ((t = "_delegate" in t ? t.d_ : t) instanceof e) return t;
        if (e.name === t.constructor.name)
          throw new zr(
            Gr.INVALID_ARGUMENT,
            "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?"
          );
        t = jp(t);
        throw new zr(
          Gr.INVALID_ARGUMENT,
          "Expected type '" + e.name + "', but it was: " + t
        );
      }
      function qp(t, e) {
        if (e <= 0)
          throw new zr(
            Gr.INVALID_ARGUMENT,
            "Function " +
              t +
              "() requires a positive number, but it was: " +
              e +
              "."
          );
      }
      var Bp,
        Gp =
          (($p.prototype.isEqual = function (t) {
            return (
              this.host === t.host &&
              this.ssl === t.ssl &&
              this.credentials === t.credentials &&
              this.cacheSizeBytes === t.cacheSizeBytes &&
              this.experimentalForceLongPolling ===
                t.experimentalForceLongPolling &&
              this.experimentalAutoDetectLongPolling ===
                t.experimentalAutoDetectLongPolling &&
              this.ignoreUndefinedProperties === t.ignoreUndefinedProperties
            );
          }),
          $p),
        zp = new Map(),
        Hp =
          (Object.defineProperty(Zp.prototype, "app", {
            get: function () {
              if (!this.A_)
                throw new zr(
                  Gr.FAILED_PRECONDITION,
                  "Firestore was not initialized using the Firebase SDK. 'app' is not available"
                );
              return this.A_;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(Zp.prototype, "R_", {
            get: function () {
              return this.T_;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(Zp.prototype, "P_", {
            get: function () {
              return void 0 !== this.y_;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (Zp.prototype.g_ = function (t) {
            if (this.T_)
              throw new zr(
                Gr.FAILED_PRECONDITION,
                "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object."
              );
            (this.E_ = new Gp(t)),
              void 0 !== t.credentials &&
                (this.m_ = (function (t) {
                  if (!t) return new Jr();
                  switch (t.type) {
                    case "gapi":
                      var e = t.client;
                      return (
                        Lr(
                          !(
                            "object" != typeof e ||
                            null === e ||
                            !e.auth ||
                            !e.auth.getAuthHeaderValueForFirstParty
                          )
                        ),
                        new ti(e, t.sessionIndex || "0")
                      );
                    case "provider":
                      return t.client;
                    default:
                      throw new zr(
                        Gr.INVALID_ARGUMENT,
                        "makeCredentialsProvider failed due to invalid credential type"
                      );
                  }
                })(t.credentials));
          }),
          (Zp.prototype.V_ = function () {
            return this.E_;
          }),
          (Zp.prototype.p_ = function () {
            return (this.T_ = !0), this.E_;
          }),
          (Zp.prototype._delete = function () {
            return this.y_ || (this.y_ = this.b_()), this.y_;
          }),
          (Zp.prototype.toJSON = function () {
            return { app: this.A_, t: this.I_, settings: this.E_ };
          }),
          (Zp.prototype.b_ = function () {
            return (
              (t = zp.get(this)) &&
                (Dr("ComponentProvider", "Removing Datastore"),
                zp.delete(this),
                t.terminate()),
              Promise.resolve()
            );
            var t;
          }),
          Zp),
        Qp =
          (Object.defineProperty(Jp.prototype, "D_", {
            get: function () {
              return this.S_.path;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(Jp.prototype, "id", {
            get: function () {
              return this.S_.path.tt();
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(Jp.prototype, "path", {
            get: function () {
              return this.S_.path.rt();
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(Jp.prototype, "parent", {
            get: function () {
              return new Kp(this.firestore, this.v_, this.S_.path.X());
            },
            enumerable: !1,
            configurable: !0,
          }),
          (Jp.prototype.withConverter = function (t) {
            return new Jp(this.firestore, t, this.S_);
          }),
          Jp),
        Yp =
          ((Wp.prototype.withConverter = function (t) {
            return new Wp(this.firestore, t, this.C_);
          }),
          Wp),
        Kp =
          (h(Xp, (Bp = Yp)),
          Object.defineProperty(Xp.prototype, "id", {
            get: function () {
              return this.C_.path.tt();
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(Xp.prototype, "path", {
            get: function () {
              return this.C_.path.rt();
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(Xp.prototype, "parent", {
            get: function () {
              var t = this.D_.X();
              return t.et() ? null : new Qp(this.firestore, null, new di(t));
            },
            enumerable: !1,
            configurable: !0,
          }),
          (Xp.prototype.withConverter = function (t) {
            return new Xp(this.firestore, t, this.D_);
          }),
          Xp);
      function Xp(t, e, n) {
        var r = this;
        return (
          ((r = Bp.call(this, t, e, zo(n)) || this).firestore = t),
          (r.D_ = n),
          (r.type = "collection"),
          r
        );
      }
      function Wp(t, e, n) {
        (this.v_ = e),
          (this.C_ = n),
          (this.type = "query"),
          (this.firestore = t);
      }
      function Jp(t, e, n) {
        (this.v_ = e),
          (this.S_ = n),
          (this.type = "document"),
          (this.firestore = t);
      }
      function Zp(t, e) {
        (this.w_ = "(lite)"),
          (this.E_ = new Gp({})),
          (this.T_ = !1),
          t instanceof Nr
            ? ((this.I_ = t), (this.m_ = new Jr()))
            : ((this.A_ = t),
              (this.I_ = (function (t) {
                if (
                  !Object.prototype.hasOwnProperty.apply(t.options, [
                    "projectId",
                  ])
                )
                  throw new zr(
                    Gr.INVALID_ARGUMENT,
                    '"projectId" not provided in firebase.initializeApp.'
                  );
                return new Nr(t.options.projectId);
              })(t)),
              (this.m_ = new Zr(e)));
      }
      function $p(t) {
        var e;
        if (void 0 === t.host) {
          if (void 0 !== t.ssl)
            throw new zr(
              Gr.INVALID_ARGUMENT,
              "Can't provide ssl option if host option is not set"
            );
          (this.host = "firestore.googleapis.com"), (this.ssl = !0);
        } else
          (this.host = t.host),
            (this.ssl = null === (e = t.ssl) || void 0 === e || e);
        if (
          ((this.credentials = t.credentials),
          (this.ignoreUndefinedProperties = !!t.ignoreUndefinedProperties),
          void 0 === t.cacheSizeBytes)
        )
          this.cacheSizeBytes = 41943040;
        else {
          if (-1 !== t.cacheSizeBytes && t.cacheSizeBytes < 1048576)
            throw new zr(
              Gr.INVALID_ARGUMENT,
              "cacheSizeBytes must be at least 1048576"
            );
          this.cacheSizeBytes = t.cacheSizeBytes;
        }
        (this.experimentalForceLongPolling = !!t.experimentalForceLongPolling),
          (this.experimentalAutoDetectLongPolling = !!t.experimentalAutoDetectLongPolling),
          Vp(
            "experimentalForceLongPolling",
            t.experimentalForceLongPolling,
            "experimentalAutoDetectLongPolling",
            t.experimentalAutoDetectLongPolling
          );
      }
      function td(t, e) {
        for (var n, r = [], i = 2; i < arguments.length; i++)
          r[i - 2] = arguments[i];
        if (
          (t instanceof Op && (t = t.d_),
          Lp("collection", "path", e),
          t instanceof Hp)
        )
          return Up((n = fi.ot.apply(fi, f([e], r)))), new Kp(t, null, n);
        if (!(t instanceof Qp || t instanceof Kp))
          throw new zr(
            Gr.INVALID_ARGUMENT,
            "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore"
          );
        return (
          Up((n = fi.ot.apply(fi, f([t.path], r)).child(fi.ot(e)))),
          new Kp(t.firestore, null, n)
        );
      }
      function ed(t, e) {
        for (var n, r = [], i = 2; i < arguments.length; i++)
          r[i - 2] = arguments[i];
        if (
          (t instanceof Op && (t = t.d_),
          Lp("doc", "path", (e = 1 === arguments.length ? Rr.u() : e)),
          t instanceof Hp)
        )
          return (
            Mp((n = fi.ot.apply(fi, f([e], r)))), new Qp(t, null, new di(n))
          );
        if (!(t instanceof Qp || t instanceof Kp))
          throw new zr(
            Gr.INVALID_ARGUMENT,
            "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore"
          );
        return (
          Mp((n = t.D_.child(fi.ot.apply(fi, f([e], r))))),
          new Qp(t.firestore, t instanceof Kp ? t.v_ : null, new di(n))
        );
      }
      function nd(t, e) {
        return (
          t instanceof Op && (t = t.d_),
          e instanceof Op && (e = e.d_),
          (t instanceof Qp || t instanceof Kp) &&
            (e instanceof Qp || e instanceof Kp) &&
            t.firestore === e.firestore &&
            t.path === e.path &&
            t.v_ === e.v_
        );
      }
      function rd(t, e) {
        return (
          t instanceof Op && (t = t.d_),
          e instanceof Op && (e = e.d_),
          t instanceof Yp &&
            e instanceof Yp &&
            t.firestore === e.firestore &&
            $o(t.C_, e.C_) &&
            t.v_ === e.v_
        );
      }
      var id =
          (Object.defineProperty(hd.prototype, "latitude", {
            get: function () {
              return this.x_;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(hd.prototype, "longitude", {
            get: function () {
              return this.N_;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (hd.prototype.isEqual = function (t) {
            return this.x_ === t.x_ && this.N_ === t.N_;
          }),
          (hd.prototype.toJSON = function () {
            return { latitude: this.x_, longitude: this.N_ };
          }),
          (hd.prototype.U = function (t) {
            return Mr(this.x_, t.x_) || Mr(this.N_, t.N_);
          }),
          hd),
        od = /^__.*__$/,
        sd =
          ((cd.prototype.F_ = function (t, e) {
            return null !== this.Gt
              ? new Ms(t, this.data, this.Gt, e, this.fieldTransforms)
              : new Vs(t, this.data, e, this.fieldTransforms);
          }),
          cd),
        ud =
          ((ad.prototype.F_ = function (t, e) {
            return new Ms(t, this.data, this.Gt, e, this.fieldTransforms);
          }),
          ad);
      function ad(t, e, n) {
        (this.data = t), (this.Gt = e), (this.fieldTransforms = n);
      }
      function cd(t, e, n) {
        (this.data = t), (this.Gt = e), (this.fieldTransforms = n);
      }
      function hd(t, e) {
        if (!isFinite(t) || t < -90 || 90 < t)
          throw new zr(
            Gr.INVALID_ARGUMENT,
            "Latitude must be a number between -90 and 90, but was: " + t
          );
        if (!isFinite(e) || e < -180 || 180 < e)
          throw new zr(
            Gr.INVALID_ARGUMENT,
            "Longitude must be a number between -180 and 180, but was: " + e
          );
        (this.x_ = t), (this.N_ = e);
      }
      function fd(t) {
        switch (t) {
          case 0:
          case 2:
          case 1:
            return 1;
          case 3:
          case 4:
            return;
          default:
            throw Cr();
        }
      }
      var ld =
          (Object.defineProperty(yd.prototype, "path", {
            get: function () {
              return this.settings.path;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(yd.prototype, "k_", {
            get: function () {
              return this.settings.k_;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (yd.prototype.M_ = function (t) {
            return new yd(
              Object.assign(Object.assign({}, this.settings), t),
              this.t,
              this.Qt,
              this.ignoreUndefinedProperties,
              this.fieldTransforms,
              this.Gt
            );
          }),
          (yd.prototype.L_ = function (t) {
            var e =
                null === (e = this.path) || void 0 === e ? void 0 : e.child(t),
              e = this.M_({ path: e, B_: !1 });
            return e.q_(t), e;
          }),
          (yd.prototype.U_ = function (t) {
            var e,
              t =
                null === (e = this.path) || void 0 === e ? void 0 : e.child(t),
              t = this.M_({ path: t, B_: !1 });
            return t.O_(), t;
          }),
          (yd.prototype.Q_ = function (t) {
            return this.M_({ path: void 0, B_: !0 });
          }),
          (yd.prototype.K_ = function (t) {
            return zd(
              t,
              this.settings.methodName,
              this.settings.W_ || !1,
              this.path,
              this.settings.j_
            );
          }),
          (yd.prototype.contains = function (e) {
            return (
              void 0 !==
                this.Gt.find(function (t) {
                  return e.nt(t);
                }) ||
              void 0 !==
                this.fieldTransforms.find(function (t) {
                  return e.nt(t.field);
                })
            );
          }),
          (yd.prototype.O_ = function () {
            if (this.path)
              for (var t = 0; t < this.path.length; t++)
                this.q_(this.path.get(t));
          }),
          (yd.prototype.q_ = function (t) {
            if (0 === t.length)
              throw this.K_("Document fields must not be empty");
            if (fd(this.k_) && od.test(t))
              throw this.K_('Document fields cannot begin and end with "__"');
          }),
          yd),
        pd =
          ((dd.prototype.G_ = function (t, e, n, r) {
            return (
              void 0 === r && (r = !1),
              new ld(
                { k_: t, methodName: e, j_: n, path: pi.ct(), B_: !1, W_: r },
                this.t,
                this.Qt,
                this.ignoreUndefinedProperties
              )
            );
          }),
          dd);
      function dd(t, e, n) {
        (this.t = t),
          (this.ignoreUndefinedProperties = e),
          (this.Qt = n || Hf(t));
      }
      function yd(t, e, n, r, i, o) {
        (this.settings = t),
          (this.t = e),
          (this.Qt = n),
          (this.ignoreUndefinedProperties = r),
          void 0 === i && this.O_(),
          (this.fieldTransforms = i || []),
          (this.Gt = o || []);
      }
      function vd(t) {
        var e = t.p_(),
          n = Hf(t.I_);
        return new pd(t.I_, !!e.ignoreUndefinedProperties, n);
      }
      function gd(t, e, n, r, i, o) {
        void 0 === o && (o = {});
        var s = t.G_(o.merge || o.mergeFields ? 2 : 0, e, n, i);
        Fd("Data must be an object, but it was:", s, r);
        var u,
          a,
          r = Ud(r, s);
        if (o.merge) (u = new Ti(s.Gt)), (a = s.fieldTransforms);
        else if (o.mergeFields) {
          for (var c = [], h = 0, f = o.mergeFields; h < f.length; h++) {
            var l = qd(e, f[h], n);
            if (!s.contains(l))
              throw new zr(
                Gr.INVALID_ARGUMENT,
                "Field '" +
                  l +
                  "' is specified in your field mask but missing from your input data."
              );
            Hd(c, l) || c.push(l);
          }
          (u = new Ti(c)),
            (a = s.fieldTransforms.filter(function (t) {
              return u.Tt(t.field);
            }));
        } else (u = null), (a = s.fieldTransforms);
        return new sd(new Yi(r), u, a);
      }
      var md,
        bd =
          (h(wd, (md = Dp)),
          (wd.prototype.z_ = function (t) {
            if (2 !== t.k_)
              throw 1 === t.k_
                ? t.K_(
                    this._methodName +
                      "() can only appear at the top level of your update data"
                  )
                : t.K_(
                    this._methodName +
                      "() cannot be used with set() unless you pass {merge:true}"
                  );
            return t.Gt.push(t.path), null;
          }),
          (wd.prototype.isEqual = function (t) {
            return t instanceof wd;
          }),
          wd);
      function wd() {
        return (null !== md && md.apply(this, arguments)) || this;
      }
      function _d(t, e, n) {
        return new ld(
          { k_: 3, j_: e.settings.j_, methodName: t._methodName, B_: n },
          e.t,
          e.Qt,
          e.ignoreUndefinedProperties
        );
      }
      var Ed,
        Id,
        Td,
        Nd,
        Ad =
          (h(Cd, (Nd = Dp)),
          (Cd.prototype.z_ = function (t) {
            return new Ss(t.path, new ls());
          }),
          (Cd.prototype.isEqual = function (t) {
            return t instanceof Cd;
          }),
          Cd),
        Sd =
          (h(Pd, (Td = Dp)),
          (Pd.prototype.z_ = function (t) {
            var e = _d(this, t, !0),
              n = this.H_.map(function (t) {
                return Md(t, e);
              }),
              n = new ps(n);
            return new Ss(t.path, n);
          }),
          (Pd.prototype.isEqual = function (t) {
            return this === t;
          }),
          Pd),
        xd =
          (h(kd, (Id = Dp)),
          (kd.prototype.z_ = function (t) {
            var e = _d(this, t, !0),
              n = this.H_.map(function (t) {
                return Md(t, e);
              }),
              n = new ms(n);
            return new Ss(t.path, n);
          }),
          (kd.prototype.isEqual = function (t) {
            return this === t;
          }),
          kd),
        Dd =
          (h(Od, (Ed = Dp)),
          (Od.prototype.z_ = function (t) {
            var e = new Es(t.Qt, as(t.Qt, this.J_));
            return new Ss(t.path, e);
          }),
          (Od.prototype.isEqual = function (t) {
            return this === t;
          }),
          Od);
      function Od(t, e) {
        var n = this;
        return ((n = Ed.call(this, t) || this).J_ = e), n;
      }
      function kd(t, e) {
        var n = this;
        return ((n = Id.call(this, t) || this).H_ = e), n;
      }
      function Pd(t, e) {
        var n = this;
        return ((n = Td.call(this, t) || this).H_ = e), n;
      }
      function Cd() {
        return (null !== Nd && Nd.apply(this, arguments)) || this;
      }
      function Ld(t, r, i, e) {
        var o = t.G_(1, r, i);
        Fd("Data must be an object, but it was:", o, e);
        var s = [],
          u = new Ki();
        Ei(e, function (t, e) {
          var n = Gd(r, t, i);
          e instanceof Op && (e = e.d_);
          t = o.U_(n);
          e instanceof bd
            ? s.push(n)
            : null != (t = Md(e, t)) && (s.push(n), u.set(n, t));
        });
        e = new Ti(s);
        return new ud(u.Pt(), e, o.fieldTransforms);
      }
      function Rd(t, e, n, r, i, o) {
        var s = t.G_(1, e, n),
          u = [qd(e, r, n)],
          a = [i];
        if (o.length % 2 != 0)
          throw new zr(
            Gr.INVALID_ARGUMENT,
            "Function " +
              e +
              "() needs to be called with an even number of arguments that alternate between field names and values."
          );
        for (var c = 0; c < o.length; c += 2)
          u.push(qd(e, o[c])), a.push(o[c + 1]);
        for (var h, f, l, p = [], d = new Ki(), y = u.length - 1; 0 <= y; --y)
          Hd(p, u[y]) ||
            ((h = u[y]),
            (f = a[y]) instanceof Op && (f = f.d_),
            (l = s.U_(h)),
            f instanceof bd
              ? p.push(h)
              : null != (l = Md(f, l)) && (p.push(h), d.set(h, l)));
        i = new Ti(p);
        return new ud(d.Pt(), i, s.fieldTransforms);
      }
      function Vd(t, e, n, r) {
        return void 0 === r && (r = !1), Md(n, t.G_(r ? 4 : 3, e));
      }
      function Md(s, t) {
        if (jd((s = s instanceof Op ? s.d_ : s)))
          return Fd("Unsupported field value:", t, s), Ud(s, t);
        if (s instanceof Dp)
          return (
            (function (t, e) {
              if (!fd(e.k_))
                throw e.K_(
                  t._methodName + "() can only be used with update() and set()"
                );
              if (!e.path)
                throw e.K_(
                  t._methodName + "() is not currently supported inside arrays"
                );
              t = t.z_(e);
              t && e.fieldTransforms.push(t);
            })(s, t),
            null
          );
        if (void 0 === s && t.ignoreUndefinedProperties) return null;
        if ((t.path && t.Gt.push(t.path), s instanceof Array)) {
          if (t.settings.B_ && 4 !== t.k_)
            throw t.K_("Nested arrays are not supported");
          return (function (t) {
            for (var e = [], n = 0, r = 0, i = s; r < i.length; r++) {
              var o = Md(i[r], t.Q_(n));
              null == o && (o = { nullValue: "NULL_VALUE" }), e.push(o), n++;
            }
            return { arrayValue: { values: e } };
          })(t);
        }
        return (function (t, e) {
          if (null === (t = t instanceof Op ? t.d_ : t))
            return { nullValue: "NULL_VALUE" };
          if ("number" == typeof t) return as(e.Qt, t);
          if ("boolean" == typeof t) return { booleanValue: t };
          if ("string" == typeof t) return { stringValue: t };
          if (t instanceof Date) {
            var n = ci.fromDate(t);
            return { timestampValue: ju(e.Qt, n) };
          }
          if (t instanceof ci)
            return (
              (n = new ci(t.seconds, 1e3 * Math.floor(t.nanoseconds / 1e3))),
              { timestampValue: ju(e.Qt, n) }
            );
          if (t instanceof id)
            return {
              geoPointValue: { latitude: t.latitude, longitude: t.longitude },
            };
          if (t instanceof Hr) return { bytesValue: Fu(e.Qt, t.I) };
          if (t instanceof Qp) {
            n = e.t;
            var r = t.firestore.I_;
            if (!r.isEqual(n))
              throw e.K_(
                "Document reference is for database " +
                  r.projectId +
                  "/" +
                  r.database +
                  " but should be for database " +
                  n.projectId +
                  "/" +
                  n.database
              );
            return { referenceValue: Bu(t.firestore.I_ || e.t, t.S_.path) };
          }
          throw e.K_("Unsupported field value: " + jp(t));
        })(s, t);
      }
      function Ud(t, n) {
        var r = {};
        return (
          Ii(t)
            ? n.path && 0 < n.path.length && n.Gt.push(n.path)
            : Ei(t, function (t, e) {
                e = Md(e, n.L_(t));
                null != e && (r[t] = e);
              }),
          { mapValue: { fields: r } }
        );
      }
      function jd(t) {
        return !(
          "object" != typeof t ||
          null === t ||
          t instanceof Array ||
          t instanceof Date ||
          t instanceof ci ||
          t instanceof id ||
          t instanceof Hr ||
          t instanceof Qp ||
          t instanceof Dp
        );
      }
      function Fd(t, e, n) {
        if (
          !jd(n) ||
          "object" != typeof (r = n) ||
          null === r ||
          (Object.getPrototypeOf(r) !== Object.prototype &&
            null !== Object.getPrototypeOf(r))
        ) {
          n = jp(n);
          throw "an object" === n
            ? e.K_(t + " a custom object")
            : e.K_(t + " " + n);
        }
        var r;
      }
      function qd(t, e, n) {
        if ((e = e instanceof Op ? e.d_ : e) instanceof xp) return e.f_;
        if ("string" == typeof e) return Gd(t, e);
        throw zd(
          "Field path arguments must be of type string or FieldPath.",
          t,
          !1,
          void 0,
          n
        );
      }
      var Bd = new RegExp("[~\\*/\\[\\]]");
      function Gd(e, n, r) {
        if (0 <= n.search(Bd))
          throw zd(
            "Invalid field path (" +
              n +
              "). Paths must not contain '~', '*', '/', '[', or ']'",
            e,
            !1,
            void 0,
            r
          );
        try {
          return new (xp.bind.apply(xp, f([void 0], n.split("."))))().f_;
        } catch (t) {
          throw zd(
            "Invalid field path (" +
              n +
              "). Paths must not be empty, begin with '.', end with '.', or contain '..'",
            e,
            !1,
            void 0,
            r
          );
        }
      }
      function zd(t, e, n, r, i) {
        var o = r && !r.et(),
          s = void 0 !== i,
          e = "Function " + e + "() called with invalid data";
        n && (e += " (via `toFirestore()`)");
        n = "";
        return (
          (o || s) &&
            ((n += " (found"),
            o && (n += " in field " + r),
            s && (n += " in document " + i),
            (n += ")")),
          new zr(Gr.INVALID_ARGUMENT, (e += ". ") + t + n)
        );
      }
      function Hd(t, e) {
        return t.some(function (t) {
          return t.isEqual(e);
        });
      }
      var Qd =
          ((Jd.prototype.ef = function (r) {
            return y(this, void 0, void 0, function () {
              var e,
                n = this;
              return v(this, function (t) {
                switch (t.label) {
                  case 0:
                    if ((this.nf(), 0 < this.mutations.length))
                      throw new zr(
                        Gr.INVALID_ARGUMENT,
                        "Firestore transactions require all reads to be executed before all writes."
                      );
                    return [
                      4,
                      (function (s, u) {
                        return y(this, void 0, void 0, function () {
                          var n, e, r, i, o;
                          return v(this, function (t) {
                            switch (t.label) {
                              case 0:
                                return (
                                  (e = Ku((n = s).Qt) + "/documents"),
                                  (r = {
                                    documents: u.map(function (t) {
                                      return zu(n.Qt, t);
                                    }),
                                  }),
                                  [4, n.Du("BatchGetDocuments", e, r)]
                                );
                              case 1:
                                return (
                                  (r = t.sent()),
                                  (i = new Map()),
                                  r.forEach(function (t) {
                                    var e,
                                      t =
                                        ((e = n.Qt),
                                        "found" in (t = t)
                                          ? (function (t, e) {
                                              Lr(!!e.found),
                                                e.found.name,
                                                e.found.updateTime;
                                              var n = Hu(t, e.found.name),
                                                t = qu(e.found.updateTime),
                                                e = new Yi({
                                                  mapValue: {
                                                    fields: e.found.fields,
                                                  },
                                                });
                                              return new to(n, t, e, {});
                                            })(e, t)
                                          : "missing" in t
                                          ? (function (t, e) {
                                              Lr(!!e.missing), Lr(!!e.readTime);
                                              (t = Hu(t, e.missing)),
                                                (e = qu(e.readTime));
                                              return new eo(t, e);
                                            })(e, t)
                                          : Cr());
                                    i.set(t.key.toString(), t);
                                  }),
                                  (o = []),
                                  [
                                    2,
                                    (u.forEach(function (t) {
                                      t = i.get(t.toString());
                                      Lr(!!t), o.push(t);
                                    }),
                                    o),
                                  ]
                                );
                            }
                          });
                        });
                      })(this.Sh, r),
                    ];
                  case 1:
                    return [
                      2,
                      ((e = t.sent()).forEach(function (t) {
                        t instanceof eo || t instanceof to ? n.sf(t) : Cr();
                      }),
                      e),
                    ];
                }
              });
            });
          }),
          (Jd.prototype.set = function (t, e) {
            this.write(e.F_(t, this.jt(t))), this.tf.add(t.toString());
          }),
          (Jd.prototype.update = function (t, e) {
            try {
              this.write(e.F_(t, this.rf(t)));
            } catch (t) {
              this.Z_ = t;
            }
            this.tf.add(t.toString());
          }),
          (Jd.prototype.delete = function (t) {
            this.write(new Ks(t, this.jt(t))), this.tf.add(t.toString());
          }),
          (Jd.prototype.commit = function () {
            return y(this, void 0, void 0, function () {
              var e,
                n = this;
              return v(this, function (t) {
                switch (t.label) {
                  case 0:
                    if ((this.nf(), this.Z_)) throw this.Z_;
                    return (
                      (e = this.Y_),
                      this.mutations.forEach(function (t) {
                        e.delete(t.key.toString());
                      }),
                      e.forEach(function (t, e) {
                        e = di._t(e);
                        n.mutations.push(new Xs(e, n.jt(e)));
                      }),
                      [
                        4,
                        (function (i, o) {
                          return y(this, void 0, void 0, function () {
                            var e, n, r;
                            return v(this, function (t) {
                              switch (t.label) {
                                case 0:
                                  return (
                                    (n = Ku((e = i).Qt) + "/documents"),
                                    (r = {
                                      writes: o.map(function (t) {
                                        return Zu(e.Qt, t);
                                      }),
                                    }),
                                    [4, e.pu("Commit", n, r)]
                                  );
                                case 1:
                                  return t.sent(), [2];
                              }
                            });
                          });
                        })(this.Sh, this.mutations),
                      ]
                    );
                  case 1:
                    return t.sent(), (this.X_ = !0), [2];
                }
              });
            });
          }),
          (Jd.prototype.sf = function (t) {
            var e;
            if (t instanceof to) e = t.version;
            else {
              if (!(t instanceof eo)) throw Cr();
              e = hi.min();
            }
            var n = this.Y_.get(t.key.toString());
            if (n) {
              if (!e.isEqual(n))
                throw new zr(
                  Gr.ABORTED,
                  "Document version changed between two reads."
                );
            } else this.Y_.set(t.key.toString(), e);
          }),
          (Jd.prototype.jt = function (t) {
            var e = this.Y_.get(t.toString());
            return !this.tf.has(t.toString()) && e ? xs.updateTime(e) : xs.Kt();
          }),
          (Jd.prototype.rf = function (t) {
            var e = this.Y_.get(t.toString());
            if (this.tf.has(t.toString()) || !e) return xs.exists(!0);
            if (e.isEqual(hi.min()))
              throw new zr(
                Gr.INVALID_ARGUMENT,
                "Can't update a document that doesn't exist."
              );
            return xs.updateTime(e);
          }),
          (Jd.prototype.write = function (t) {
            this.nf(), this.mutations.push(t);
          }),
          (Jd.prototype.nf = function () {}),
          Jd),
        Yd =
          ((Wd.prototype.run = function () {
            this.af();
          }),
          (Wd.prototype.af = function () {
            var t = this;
            this.Gu.Lu(function () {
              return y(t, void 0, void 0, function () {
                var e,
                  n,
                  r = this;
                return v(this, function (t) {
                  return (
                    (e = new Qd(this.Sh)),
                    (n = this.uf(e)) &&
                      n
                        .then(function (t) {
                          r._s.Ps(function () {
                            return e
                              .commit()
                              .then(function () {
                                r.Es.resolve(t);
                              })
                              .catch(function (t) {
                                r.hf(t);
                              });
                          });
                        })
                        .catch(function (t) {
                          r.hf(t);
                        }),
                    [2]
                  );
                });
              });
            });
          }),
          (Wd.prototype.uf = function (t) {
            try {
              var e = this.updateFunction(t);
              return !Pi(e) && e.catch && e.then
                ? e
                : (this.Es.reject(
                    Error("Transaction callback must return a Promise")
                  ),
                  null);
            } catch (t) {
              return this.Es.reject(t), null;
            }
          }),
          (Wd.prototype.hf = function (t) {
            var e = this;
            0 < this.cf && this.lf(t)
              ? (--this.cf,
                this._s.Ps(function () {
                  return e.af(), Promise.resolve();
                }))
              : this.Es.reject(t);
          }),
          (Wd.prototype.lf = function (t) {
            if ("FirebaseError" !== t.name) return !1;
            t = t.code;
            return "aborted" === t || "failed-precondition" === t || !Zs(t);
          }),
          Wd),
        Kd =
          ((Xd.prototype.getConfiguration = function () {
            return y(this, void 0, void 0, function () {
              return v(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, this.C.promise];
                  case 1:
                    return [
                      2,
                      (t.sent(),
                      {
                        _s: this._s,
                        yu: this.yu,
                        clientId: this.clientId,
                        credentials: this.credentials,
                        Jl: this.user,
                        pl: 100,
                      }),
                    ];
                }
              });
            });
          }),
          (Xd.prototype.ff = function (t) {
            var e = this;
            (this._f = t),
              this.C.promise.then(function () {
                return e._f(e.user);
              });
          }),
          (Xd.prototype.df = function () {
            if (this._s.wf)
              throw new zr(
                Gr.FAILED_PRECONDITION,
                "The client has already been terminated."
              );
          }),
          (Xd.prototype.terminate = function () {
            var t = this;
            this._s.Ef();
            var n = new fa();
            return (
              this._s.Tf(function () {
                return y(t, void 0, void 0, function () {
                  var e;
                  return v(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return (
                          t.trys.push([0, 5, , 6]),
                          this.If ? [4, this.If.terminate()] : [3, 2]
                        );
                      case 1:
                        t.sent(), (t.label = 2);
                      case 2:
                        return this.mf ? [4, this.mf.terminate()] : [3, 4];
                      case 3:
                        t.sent(), (t.label = 4);
                      case 4:
                        return this.credentials.S(), n.resolve(), [3, 6];
                      case 5:
                        return (
                          (e = t.sent()),
                          (e = Oa(e, "Failed to shutdown persistence")),
                          n.reject(e),
                          [3, 6]
                        );
                      case 6:
                        return [2];
                    }
                  });
                });
              }),
              n.promise
            );
          }),
          Xd);
      function Xd(t, e, n) {
        var r = this;
        (this.credentials = t),
          (this._s = e),
          (this.yu = n),
          (this.user = Qr.UNAUTHENTICATED),
          (this.clientId = Rr.u()),
          (this._f = function () {}),
          (this.C = new fa()),
          this.credentials.v(function (t) {
            Dr("FirestoreClient", "Received user=", t.uid),
              (r.user = t),
              r._f(t),
              r.C.resolve();
          });
      }
      function Wd(t, e, n, r) {
        (this._s = t),
          (this.Sh = e),
          (this.updateFunction = n),
          (this.Es = r),
          (this.cf = 5),
          (this.Gu = new Wf(this._s, "transaction_retry"));
      }
      function Jd(t) {
        (this.Sh = t),
          (this.Y_ = new Map()),
          (this.mutations = []),
          (this.X_ = !1),
          (this.Z_ = null),
          (this.tf = new Set());
      }
      function Zd(i, o) {
        return y(this, void 0, void 0, function () {
          var e,
            n,
            r = this;
          return v(this, function (t) {
            switch (t.label) {
              case 0:
                return (
                  i._s.Af(),
                  Dr(
                    "FirestoreClient",
                    "Initializing OfflineComponentProvider"
                  ),
                  [4, i.getConfiguration()]
                );
              case 1:
                return (e = t.sent()), [4, o.initialize(e)];
              case 2:
                return (
                  t.sent(),
                  (n = e.Jl),
                  i.ff(function (e) {
                    n.isEqual(e) ||
                      ((n = e),
                      i._s.po(function () {
                        return y(r, void 0, void 0, function () {
                          return v(this, function (t) {
                            switch (t.label) {
                              case 0:
                                return [4, Rh(o.bh, e)];
                              case 1:
                                return t.sent(), [2];
                            }
                          });
                        });
                      }));
                  }),
                  o.persistence.Po(function () {
                    return i.terminate();
                  }),
                  (i.mf = o),
                  [2]
                );
            }
          });
        });
      }
      function $d(r, i) {
        return y(this, void 0, void 0, function () {
          var e, n;
          return v(this, function (t) {
            switch (t.label) {
              case 0:
                return r._s.Af(), [4, ty(r)];
              case 1:
                return (
                  (e = t.sent()),
                  Dr("FirestoreClient", "Initializing OnlineComponentProvider"),
                  [4, r.getConfiguration()]
                );
              case 2:
                return (n = t.sent()), [4, i.initialize(e, n)];
              case 3:
                return (
                  t.sent(),
                  r.ff(function (t) {
                    return r._s.po(function () {
                      return (function (r, i) {
                        return y(this, void 0, void 0, function () {
                          var e, n;
                          return v(this, function (t) {
                            switch (t.label) {
                              case 0:
                                return (
                                  (e = r)._s.Af(),
                                  Dr(
                                    "RemoteStore",
                                    "RemoteStore received new credentials"
                                  ),
                                  (n = yl(e)),
                                  e.Nh.add(3),
                                  [4, al(e)]
                                );
                              case 1:
                                return (
                                  t.sent(),
                                  n && e.Oh.set("Unknown"),
                                  [4, e.Dh.n_(i)]
                                );
                              case 2:
                                return t.sent(), e.Nh.delete(3), [4, ul(e)];
                              case 3:
                                return t.sent(), [2];
                            }
                          });
                        });
                      })(i.yl, t);
                    });
                  }),
                  (r.If = i),
                  [2]
                );
            }
          });
        });
      }
      function ty(e) {
        return y(this, void 0, void 0, function () {
          return v(this, function (t) {
            switch (t.label) {
              case 0:
                return e.mf
                  ? [3, 2]
                  : (Dr(
                      "FirestoreClient",
                      "Using default OfflineComponentProvider"
                    ),
                    [4, Zd(e, new gp())]);
              case 1:
                t.sent(), (t.label = 2);
              case 2:
                return [2, e.mf];
            }
          });
        });
      }
      function ey(e) {
        return y(this, void 0, void 0, function () {
          return v(this, function (t) {
            switch (t.label) {
              case 0:
                return e.If
                  ? [3, 2]
                  : (Dr(
                      "FirestoreClient",
                      "Using default OnlineComponentProvider"
                    ),
                    [4, $d(e, new wp())]);
              case 1:
                t.sent(), (t.label = 2);
              case 2:
                return [2, e.If];
            }
          });
        });
      }
      function ny(t) {
        return ty(t).then(function (t) {
          return t.persistence;
        });
      }
      function ry(t) {
        return ty(t).then(function (t) {
          return t.bh;
        });
      }
      function iy(t) {
        return ey(t).then(function (t) {
          return t.yl;
        });
      }
      function oy(t) {
        return ey(t).then(function (t) {
          return t._a;
        });
      }
      function sy(r) {
        return y(this, void 0, void 0, function () {
          var e, n;
          return v(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, ey(r)];
              case 1:
                return (
                  (e = t.sent()),
                  [
                    2,
                    (((n = e.gl).jh = function (s, u) {
                      return y(this, void 0, void 0, function () {
                        var e, n, r, i, o;
                        return v(this, function (t) {
                          switch (t.label) {
                            case 0:
                              return (
                                (e = lp(s)),
                                (o = e.vl.get(u))
                                  ? ((n = o.targetId),
                                    e.Vl.Fa(n),
                                    (r = o.view.Rl()),
                                    [3, 4])
                                  : [3, 1]
                              );
                            case 1:
                              return [4, Fh(e.bh, Jo(u))];
                            case 2:
                              return (
                                (i = t.sent()),
                                (o = e.Vl.Fa(i.targetId)),
                                (n = i.targetId),
                                [4, Kl(e, u, n, "current" === o)]
                              );
                            case 3:
                              (r = t.sent()),
                                e.Ml && cl(e.yl, i),
                                (t.label = 4);
                            case 4:
                              return [2, r];
                          }
                        });
                      });
                    }.bind(null, e._a)),
                    (n.Hh = function (i, o) {
                      return y(this, void 0, void 0, function () {
                        var e, n, r;
                        return v(this, function (t) {
                          switch (t.label) {
                            case 0:
                              return (
                                (n = (e = i).vl.get(o)),
                                1 < (r = e.Sl.get(n.targetId)).length
                                  ? [
                                      2,
                                      (e.Sl.set(
                                        n.targetId,
                                        r.filter(function (t) {
                                          return !$o(t, o);
                                        })
                                      ),
                                      void e.vl.delete(o)),
                                    ]
                                  : e.Ml
                                  ? (e.Vl.ka(n.targetId),
                                    e.Vl.Da(n.targetId)
                                      ? [3, 2]
                                      : [
                                          4,
                                          qh(e.bh, n.targetId, !1)
                                            .then(function () {
                                              e.Vl.La(n.targetId),
                                                hl(e.yl, n.targetId),
                                                np(e, n.targetId);
                                            })
                                            .catch(Cc),
                                        ])
                                  : [3, 3]
                              );
                            case 1:
                              t.sent(), (t.label = 2);
                            case 2:
                              return [3, 5];
                            case 3:
                              return (
                                np(e, n.targetId), [4, qh(e.bh, n.targetId, !0)]
                              );
                            case 4:
                              t.sent(), (t.label = 5);
                            case 5:
                              return [2];
                          }
                        });
                      });
                    }.bind(null, e._a)),
                    n),
                  ]
                );
            }
          });
        });
      }
      function uy(n, r, i) {
        var t = this;
        void 0 === i && (i = {});
        var o = new fa();
        return (
          n._s.Ps(function () {
            return y(t, void 0, void 0, function () {
              var e;
              return v(this, function (t) {
                switch (t.label) {
                  case 0:
                    return (
                      (e = function (n, r, i, o, s) {
                        var t = new Ap({
                            next: function (t) {
                              r.Ps(function () {
                                return Dl(n, u);
                              });
                              var e = t.docs.has(i);
                              !e && t.fromCache
                                ? s.reject(
                                    new zr(
                                      Gr.UNAVAILABLE,
                                      "Failed to get document because the client is offline."
                                    )
                                  )
                                : e && t.fromCache && o && "server" === o.source
                                ? s.reject(
                                    new zr(
                                      Gr.UNAVAILABLE,
                                      'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)'
                                    )
                                  )
                                : s.resolve(t);
                            },
                            error: function (t) {
                              return s.reject(t);
                            },
                          }),
                          u = new kl(zo(i.path), t, {
                            includeMetadataChanges: !0,
                            nl: !0,
                          });
                        return xl(n, u);
                      }),
                      [4, sy(n)]
                    );
                  case 1:
                    return [2, e.apply(void 0, [t.sent(), n._s, r, i, o])];
                }
              });
            });
          }),
          o.promise
        );
      }
      function ay(n, r, i) {
        var t = this;
        void 0 === i && (i = {});
        var o = new fa();
        return (
          n._s.Ps(function () {
            return y(t, void 0, void 0, function () {
              var e;
              return v(this, function (t) {
                switch (t.label) {
                  case 0:
                    return (
                      (e = function (e, n, t, r, i) {
                        var o = new Ap({
                            next: function (t) {
                              n.Ps(function () {
                                return Dl(e, s);
                              }),
                                t.fromCache && "server" === r.source
                                  ? i.reject(
                                      new zr(
                                        Gr.UNAVAILABLE,
                                        'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)'
                                      )
                                    )
                                  : i.resolve(t);
                            },
                            error: function (t) {
                              return i.reject(t);
                            },
                          }),
                          s = new kl(t, o, {
                            includeMetadataChanges: !0,
                            nl: !0,
                          });
                        return xl(e, s);
                      }),
                      [4, sy(n)]
                    );
                  case 1:
                    return [2, e.apply(void 0, [t.sent(), n._s, r, i, o])];
                }
              });
            });
          }),
          o.promise
        );
      }
      var cy =
        (Object.defineProperty(hy.prototype, "wf", {
          get: function () {
            return this.yf;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (hy.prototype.Ps = function (t) {
          this.enqueue(t);
        }),
        (hy.prototype.Tf = function (t) {
          this.Sf(), this.Df(t);
        }),
        (hy.prototype.Ef = function () {
          var t;
          this.yf ||
            ((this.yf = !0),
            (t = zf()) &&
              "function" == typeof t.removeEventListener &&
              t.removeEventListener("visibilitychange", this.vf));
        }),
        (hy.prototype.enqueue = function (t) {
          return this.Sf(), this.yf ? new Promise(function (t) {}) : this.Df(t);
        }),
        (hy.prototype.po = function (t) {
          var e = this;
          this.Ps(function () {
            return e.Pf.push(t), e.Cf();
          });
        }),
        (hy.prototype.Cf = function () {
          return y(this, void 0, void 0, function () {
            var e,
              n = this;
            return v(this, function (t) {
              switch (t.label) {
                case 0:
                  if (0 === this.Pf.length) return [3, 5];
                  t.label = 1;
                case 1:
                  return t.trys.push([1, 3, , 4]), [4, this.Pf[0]()];
                case 2:
                  return t.sent(), this.Pf.shift(), this.Gu.reset(), [3, 4];
                case 3:
                  if (!Ea((e = t.sent()))) throw e;
                  return (
                    Dr(
                      "AsyncQueue",
                      "Operation failed with retryable error: " + e
                    ),
                    [3, 4]
                  );
                case 4:
                  0 < this.Pf.length &&
                    this.Gu.Lu(function () {
                      return n.Cf();
                    }),
                    (t.label = 5);
                case 5:
                  return [2];
              }
            });
          });
        }),
        (hy.prototype.Df = function (t) {
          var r = this,
            e = this.Rf.then(function () {
              return (
                (r.pf = !0),
                t()
                  .catch(function (t) {
                    throw (
                      ((r.Vf = t),
                      (r.pf = !1),
                      Or(
                        "INTERNAL UNHANDLED ERROR: ",
                        ((n = (e = t).message || ""),
                        (n = e.stack
                          ? e.stack.includes(e.message)
                            ? e.stack
                            : e.message + "\n" + e.stack
                          : n))
                      ),
                      t)
                    );
                    var e, n;
                  })
                  .then(function (t) {
                    return (r.pf = !1), t;
                  })
              );
            });
          return (this.Rf = e);
        }),
        (hy.prototype.Tr = function (t, e, n) {
          var r = this;
          this.Sf(), -1 < this.bf.indexOf(t) && (e = 0);
          n = xa.Ts(this, t, e, n, function (t) {
            return r.xf(t);
          });
          return this.gf.push(n), n;
        }),
        (hy.prototype.Sf = function () {
          this.Vf && Cr();
        }),
        (hy.prototype.Af = function () {}),
        (hy.prototype.Nf = function () {
          return y(this, void 0, void 0, function () {
            var e;
            return v(this, function (t) {
              switch (t.label) {
                case 0:
                  return [4, (e = this.Rf)];
                case 1:
                  t.sent(), (t.label = 2);
                case 2:
                  if (e !== this.Rf) return [3, 0];
                  t.label = 3;
                case 3:
                  return [2];
              }
            });
          });
        }),
        (hy.prototype.$f = function (t) {
          for (var e = 0, n = this.gf; e < n.length; e++)
            if (n[e].fs === t) return !0;
          return !1;
        }),
        (hy.prototype.Ff = function (r) {
          var i = this;
          return this.Nf().then(function () {
            i.gf.sort(function (t, e) {
              return t.ds - e.ds;
            });
            for (var t = 0, e = i.gf; t < e.length; t++) {
              var n = e[t];
              if ((n.Rs(), "all" !== r && n.fs === r)) break;
            }
            return i.Nf();
          });
        }),
        (hy.prototype.Of = function (t) {
          this.bf.push(t);
        }),
        (hy.prototype.xf = function (t) {
          t = this.gf.indexOf(t);
          this.gf.splice(t, 1);
        }),
        hy);
      function hy() {
        var e = this;
        (this.Rf = Promise.resolve()),
          (this.Pf = []),
          (this.yf = !1),
          (this.gf = []),
          (this.Vf = null),
          (this.pf = !1),
          (this.bf = []),
          (this.Gu = new Wf(this, "async_queue_retry")),
          (this.vf = function () {
            var t = zf();
            t &&
              Dr(
                "AsyncQueue",
                "Visibility state changed to " + t.visibilityState
              ),
              e.Gu.qu();
          });
        var t = zf();
        t &&
          "function" == typeof t.addEventListener &&
          t.addEventListener("visibilitychange", this.vf);
      }
      function fy(i) {
        return (function () {
          if ("object" == typeof i && null !== i)
            for (
              var t = i, e = 0, n = ["next", "error", "complete"];
              e < n.length;
              e++
            ) {
              var r = n[e];
              if (r in t && "function" == typeof t[r]) return 1;
            }
        })();
      }
      var ly,
        py =
          ((vy.prototype.onProgress = function (t, e, n) {
            this.kf = { next: t, error: e, complete: n };
          }),
          (vy.prototype.catch = function (t) {
            return this.Mf.promise.catch(t);
          }),
          (vy.prototype.then = function (t, e) {
            return this.Mf.promise.then(t, e);
          }),
          (vy.prototype.ql = function (t) {
            this.Ul(t),
              this.kf.complete && this.kf.complete(),
              this.Mf.resolve(t);
          }),
          (vy.prototype.Kl = function (t) {
            (this.Lf.taskState = "Error"),
              this.kf.next && this.kf.next(this.Lf),
              this.kf.error && this.kf.error(t),
              this.Mf.reject(t);
          }),
          (vy.prototype.Ul = function (t) {
            (this.Lf = t), this.kf.next && this.kf.next(t);
          }),
          vy),
        dy =
          (h(yy, (ly = Hp)),
          (yy.prototype.b_ = function () {
            return this.qf || my(this), this.qf.terminate();
          }),
          yy);
      function yy(t, e) {
        var n = this;
        return (
          ((n = ly.call(this, t, e) || this).Bf = new cy()),
          (n.w_ = "name" in t ? t.name : "[DEFAULT]"),
          n
        );
      }
      function vy() {
        (this.kf = {}),
          (this.Mf = new fa()),
          (this.Lf = {
            taskState: "Running",
            totalBytes: 0,
            totalDocuments: 0,
            bytesLoaded: 0,
            documentsLoaded: 0,
          });
      }
      function gy(t) {
        return t.qf || my(t), t.qf.df(), t.qf;
      }
      function my(t) {
        var e,
          n,
          r = t.p_(),
          r =
            ((e = t.I_),
            (n = t.w_),
            new Tr(
              e,
              n,
              r.host,
              r.ssl,
              r.experimentalForceLongPolling,
              r.experimentalAutoDetectLongPolling
            ));
        t.qf = new Kd(t.m_, t.Bf, r);
      }
      function by(r, i, o) {
        var t = this,
          s = new fa();
        return r._s
          .enqueue(function () {
            return y(t, void 0, void 0, function () {
              var n;
              return v(this, function (t) {
                switch (t.label) {
                  case 0:
                    return t.trys.push([0, 3, , 4]), [4, Zd(r, o)];
                  case 1:
                    return t.sent(), [4, $d(r, i)];
                  case 2:
                    return t.sent(), s.resolve(), [3, 4];
                  case 3:
                    if (
                      !("FirebaseError" === (e = n = t.sent()).name
                        ? e.code === Gr.FAILED_PRECONDITION ||
                          e.code === Gr.UNIMPLEMENTED
                        : !(
                            "undefined" != typeof DOMException &&
                            e instanceof DOMException
                          ) ||
                          22 === e.code ||
                          20 === e.code ||
                          11 === e.code)
                    )
                      throw n;
                    return (
                      console.warn(
                        "Error enabling offline persistence. Falling back to persistence disabled: " +
                          n
                      ),
                      s.reject(n),
                      [3, 4]
                    );
                  case 4:
                    return [2];
                }
                var e;
              });
            });
          })
          .then(function () {
            return s.promise;
          });
      }
      function wy(t) {
        if (t.R_ || t.P_)
          throw new zr(
            Gr.FAILED_PRECONDITION,
            "Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object."
          );
      }
      var _y,
        o =
          ((Ay.prototype.Uf = function (t, e) {
            switch ((void 0 === e && (e = "none"), Ri(t))) {
              case 0:
                return null;
              case 1:
                return t.booleanValue;
              case 2:
                return xi(t.integerValue || t.doubleValue);
              case 3:
                return this.Qf(t.timestampValue);
              case 4:
                return this.Kf(t, e);
              case 5:
                return t.stringValue;
              case 6:
                return this.Wf(Di(t.bytesValue));
              case 7:
                return this.jf(t.referenceValue);
              case 8:
                return this.Gf(t.geoPointValue);
              case 9:
                return this.zf(t.arrayValue, e);
              case 10:
                return this.Hf(t.mapValue, e);
              default:
                throw Cr();
            }
          }),
          (Ay.prototype.Hf = function (t, n) {
            var r = this,
              i = {};
            return (
              Ei(t.fields || {}, function (t, e) {
                i[t] = r.Uf(e, n);
              }),
              i
            );
          }),
          (Ay.prototype.Gf = function (t) {
            return new id(xi(t.latitude), xi(t.longitude));
          }),
          (Ay.prototype.zf = function (t, e) {
            var n = this;
            return (t.values || []).map(function (t) {
              return n.Uf(t, e);
            });
          }),
          (Ay.prototype.Kf = function (t, e) {
            switch (e) {
              case "previous":
                var n = (function t(e) {
                  e = e.mapValue.fields.__previous_value__;
                  return Oi(e) ? t(e) : e;
                })(t);
                return null == n ? null : this.Uf(n, e);
              case "estimate":
                return this.Qf(ki(t));
              default:
                return null;
            }
          }),
          (Ay.prototype.Qf = function (t) {
            t = Si(t);
            return new ci(t.seconds, t.nanos);
          }),
          (Ay.prototype.Jf = function (t, e) {
            var n = fi.ot(t);
            Lr(ca(n));
            (t = new Nr(n.get(1), n.get(3))), (n = new di(n.Y(5)));
            return (
              t.isEqual(e) ||
                Or(
                  "Document " +
                    n +
                    " contains a document reference within a different database (" +
                    t.projectId +
                    "/" +
                    t.database +
                    ") which is not supported. It will be treated as a reference in the current database (" +
                    e.projectId +
                    "/" +
                    e.database +
                    ") instead."
                ),
              n
            );
          }),
          Ay),
        Ey =
          (Object.defineProperty(Ny.prototype, "id", {
            get: function () {
              return this.S_.path.tt();
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(Ny.prototype, "ref", {
            get: function () {
              return new Qp(this.Yf, this.v_, this.S_);
            },
            enumerable: !1,
            configurable: !0,
          }),
          (Ny.prototype.exists = function () {
            return null !== this.Zf;
          }),
          (Ny.prototype.data = function () {
            if (this.Zf) {
              if (this.v_) {
                var t = new Iy(this.Yf, this.Xf, this.S_, this.Zf, null);
                return this.v_.fromFirestore(t);
              }
              return this.Xf.Uf(this.Zf.bt());
            }
          }),
          (Ny.prototype.get = function (t) {
            if (this.Zf) {
              t = this.Zf.data().field(Sy("DocumentSnapshot.get", t));
              if (null !== t) return this.Xf.Uf(t);
            }
          }),
          Ny),
        Iy =
          (h(Ty, (_y = Ey)),
          (Ty.prototype.data = function () {
            return _y.prototype.data.call(this);
          }),
          Ty);
      function Ty() {
        return (null !== _y && _y.apply(this, arguments)) || this;
      }
      function Ny(t, e, n, r, i) {
        (this.Yf = t),
          (this.Xf = e),
          (this.S_ = n),
          (this.Zf = r),
          (this.v_ = i);
      }
      function Ay() {}
      function Sy(t, e) {
        return "string" == typeof e
          ? Gd(t, e)
          : (e instanceof Op ? e.d_ : e).f_;
      }
      function xy(t) {
        if (Qo(t) && 0 === t.xt.length)
          throw new zr(
            Gr.UNIMPLEMENTED,
            "limitToLast() queries require specifying at least one orderBy() clause"
          );
      }
      Ie = function () {};
      function Dy(t) {
        for (var e = [], n = 1; n < arguments.length; n++)
          e[n - 1] = arguments[n];
        for (var r = 0, i = e; r < i.length; r++) t = i[r].td(t);
        return t;
      }
      var Oy,
        ky,
        Py,
        Cy,
        Ly,
        Ry =
          (h(zy, (Ly = Ie)),
          (zy.prototype.td = function (t) {
            var e = vd(t.firestore),
              e = (function (t, e, n, r, i, o) {
                if (r.ut()) {
                  if ("array-contains" === i || "array-contains-any" === i)
                    throw new zr(
                      Gr.INVALID_ARGUMENT,
                      "Invalid Query. You can't perform '" +
                        i +
                        "' queries on FieldPath.documentId()."
                    );
                  if ("in" === i || "not-in" === i) {
                    Yy(o, i);
                    for (var s = [], u = 0, a = o; u < a.length; u++) {
                      var c = a[u];
                      s.push(Qy(n, t, c));
                    }
                    h = { arrayValue: { values: s } };
                  } else h = Qy(n, t, o);
                } else
                  ("in" !== i &&
                    "not-in" !== i &&
                    "array-contains-any" !== i) ||
                    Yy(o, i),
                    (h = Vd(e, "where", o, "in" === i || "not-in" === i));
                var h = lo.create(r, i, h);
                return (
                  (function (t, e) {
                    if (e.Ct()) {
                      var n = Ko(t);
                      if (null !== n && !n.isEqual(e.field))
                        throw new zr(
                          Gr.INVALID_ARGUMENT,
                          "Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '" +
                            n.toString() +
                            "' and '" +
                            e.field.toString() +
                            "'"
                        );
                      n = Yo(t);
                      null !== n && Ky(0, e.field, n);
                    }
                    t = (function (t, e) {
                      for (var n = 0, r = t.filters; n < r.length; n++) {
                        var i = r[n];
                        if (0 <= e.indexOf(i.op)) return i.op;
                      }
                      return null;
                    })(
                      t,
                      (function () {
                        switch (e.op) {
                          case "!=":
                            return ["!=", "not-in"];
                          case "array-contains":
                            return [
                              "array-contains",
                              "array-contains-any",
                              "not-in",
                            ];
                          case "in":
                            return ["array-contains-any", "in", "not-in"];
                          case "array-contains-any":
                            return [
                              "array-contains",
                              "array-contains-any",
                              "in",
                              "not-in",
                            ];
                          case "not-in":
                            return [
                              "array-contains",
                              "array-contains-any",
                              "in",
                              "not-in",
                              "!=",
                            ];
                          default:
                            return [];
                        }
                      })()
                    );
                    if (null !== t)
                      throw t === e.op
                        ? new zr(
                            Gr.INVALID_ARGUMENT,
                            "Invalid query. You cannot use more than one '" +
                              e.op.toString() +
                              "' filter."
                          )
                        : new zr(
                            Gr.INVALID_ARGUMENT,
                            "Invalid query. You cannot use '" +
                              e.op.toString() +
                              "' filters with '" +
                              t.toString() +
                              "' filters."
                          );
                  })(t, h),
                  h
                );
              })(t.C_, e, t.firestore.I_, this.ed, this.nd, this.sd);
            return new Yp(
              t.firestore,
              t.v_,
              ((t = t.C_),
              (e = t.filters.concat([e])),
              new Bo(
                t.path,
                t.collectionGroup,
                t.xt.slice(),
                e,
                t.limit,
                t.limitType,
                t.startAt,
                t.endAt
              ))
            );
          }),
          zy),
        Vy =
          (h(Gy, (Cy = Ie)),
          (Gy.prototype.td = function (t) {
            var e = (function (t, e, n) {
              if (null !== t.startAt)
                throw new zr(
                  Gr.INVALID_ARGUMENT,
                  "Invalid query. You must not call startAt() or startAfter() before calling orderBy()."
                );
              if (null !== t.endAt)
                throw new zr(
                  Gr.INVALID_ARGUMENT,
                  "Invalid query. You must not call endAt() or endBefore() before calling orderBy()."
                );
              var r = new jo(e, n);
              return (
                (e = r),
                null !== Yo((n = t)) ||
                  (null !== (t = Ko(n)) && Ky(0, t, e.field)),
                r
              );
            })(t.C_, this.ed, this.rd);
            return new Yp(
              t.firestore,
              t.v_,
              ((t = t.C_),
              (e = t.xt.concat([e])),
              new Bo(
                t.path,
                t.collectionGroup,
                e,
                t.filters.slice(),
                t.limit,
                t.limitType,
                t.startAt,
                t.endAt
              ))
            );
          }),
          Gy),
        My =
          (h(By, (Py = Ie)),
          (By.prototype.td = function (t) {
            return new Yp(t.firestore, t.v_, Zo(t.C_, this.od, this.ad));
          }),
          By),
        Uy =
          (h(qy, (ky = Ie)),
          (qy.prototype.td = function (t) {
            var e = Hy(t, this.type, this.ud, this.hd);
            return new Yp(
              t.firestore,
              t.v_,
              ((t = t.C_),
              (e = e),
              new Bo(
                t.path,
                t.collectionGroup,
                t.xt.slice(),
                t.filters.slice(),
                t.limit,
                t.limitType,
                e,
                t.endAt
              ))
            );
          }),
          qy),
        jy =
          (h(Fy, (Oy = Ie)),
          (Fy.prototype.td = function (t) {
            var e = Hy(t, this.type, this.ud, this.hd);
            return new Yp(
              t.firestore,
              t.v_,
              ((t = t.C_),
              (e = e),
              new Bo(
                t.path,
                t.collectionGroup,
                t.xt.slice(),
                t.filters.slice(),
                t.limit,
                t.limitType,
                t.startAt,
                e
              ))
            );
          }),
          Fy);
      function Fy(t, e, n) {
        var r = this;
        return (
          ((r = Oy.call(this) || this).type = t), (r.ud = e), (r.hd = n), r
        );
      }
      function qy(t, e, n) {
        var r = this;
        return (
          ((r = ky.call(this) || this).type = t), (r.ud = e), (r.hd = n), r
        );
      }
      function By(t, e, n) {
        var r = this;
        return (
          ((r = Py.call(this) || this).type = t), (r.od = e), (r.ad = n), r
        );
      }
      function Gy(t, e) {
        var n = this;
        return (
          ((n = Cy.call(this) || this).ed = t),
          (n.rd = e),
          (n.type = "orderBy"),
          n
        );
      }
      function zy(t, e, n) {
        var r = this;
        return (
          ((r = Ly.call(this) || this).ed = t),
          (r.nd = e),
          (r.sd = n),
          (r.type = "where"),
          r
        );
      }
      function Hy(t, c, e, n) {
        if ((e[0] instanceof Op && (e[0] = e[0].d_), e[0] instanceof Ey))
          return (function (t, e, n, r) {
            if (!n)
              throw new zr(
                Gr.NOT_FOUND,
                "Can't use a DocumentSnapshot that doesn't exist for " +
                  c +
                  "()."
              );
            for (var i = [], o = 0, s = Wo(t); o < s.length; o++) {
              var u = s[o];
              if (u.field.ut()) i.push(qi(e, n.key));
              else {
                var a = n.field(u.field);
                if (Oi(a))
                  throw new zr(
                    Gr.INVALID_ARGUMENT,
                    'Invalid query. You are trying to start or end a query using a document for which the field "' +
                      u.field +
                      '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)'
                  );
                if (null === a) {
                  u = u.field.rt();
                  throw new zr(
                    Gr.INVALID_ARGUMENT,
                    "Invalid query. You are trying to start or end a query using a document for which the field '" +
                      u +
                      "' (used as the orderBy) does not exist."
                  );
                }
                i.push(a);
              }
            }
            return new Co(i, r);
          })(t.C_, t.firestore.I_, e[0].Zf, n);
        var r = vd(t.firestore);
        return (function (t, e, n, r, i, o) {
          var s = t.xt;
          if (i.length > s.length)
            throw new zr(
              Gr.INVALID_ARGUMENT,
              "Too many arguments provided to " +
                r +
                "(). The number of arguments must be less than or equal to the number of orderBy() clauses"
            );
          for (var u = [], a = 0; a < i.length; a++) {
            var c = i[a];
            if (s[a].field.ut()) {
              if ("string" != typeof c)
                throw new zr(
                  Gr.INVALID_ARGUMENT,
                  "Invalid query. Expected a string for document ID in " +
                    r +
                    "(), but got a " +
                    typeof c
                );
              if (!Xo(t) && -1 !== c.indexOf("/"))
                throw new zr(
                  Gr.INVALID_ARGUMENT,
                  "Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to " +
                    r +
                    "() must be a plain document ID, but '" +
                    c +
                    "' contains a slash."
                );
              var h = t.path.child(fi.ot(c));
              if (!di.wt(h))
                throw new zr(
                  Gr.INVALID_ARGUMENT,
                  "Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to " +
                    r +
                    "() must result in a valid document path, but '" +
                    h +
                    "' is not because it contains an odd number of segments."
                );
              h = new di(h);
              u.push(qi(e, h));
            } else {
              c = Vd(n, r, c);
              u.push(c);
            }
          }
          return new Co(u, o);
        })(t.C_, t.firestore.I_, r, c, e, n);
      }
      function Qy(t, e, n) {
        if ("string" == typeof (n = n instanceof Op ? n.d_ : n)) {
          if ("" === n)
            throw new zr(
              Gr.INVALID_ARGUMENT,
              "Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string."
            );
          if (!Xo(e) && -1 !== n.indexOf("/"))
            throw new zr(
              Gr.INVALID_ARGUMENT,
              "Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '" +
                n +
                "' contains a '/' character."
            );
          e = e.path.child(fi.ot(n));
          if (!di.wt(e))
            throw new zr(
              Gr.INVALID_ARGUMENT,
              "Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '" +
                e +
                "' is not because it has an odd number of segments (" +
                e.length +
                ")."
            );
          return qi(t, new di(e));
        }
        if (n instanceof Qp) return qi(t, n.S_);
        throw new zr(
          Gr.INVALID_ARGUMENT,
          "Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: " +
            jp(n) +
            "."
        );
      }
      function Yy(t, e) {
        if (!Array.isArray(t) || 0 === t.length)
          throw new zr(
            Gr.INVALID_ARGUMENT,
            "Invalid Query. A non-empty array is required for '" +
              e.toString() +
              "' filters."
          );
        if (10 < t.length)
          throw new zr(
            Gr.INVALID_ARGUMENT,
            "Invalid Query. '" +
              e.toString() +
              "' filters support a maximum of 10 elements in the value array."
          );
      }
      function Ky(t, e, n) {
        if (!n.isEqual(e))
          throw new zr(
            Gr.INVALID_ARGUMENT,
            "Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '" +
              e.toString() +
              "' and so you must also use '" +
              e.toString() +
              "' as your first argument to orderBy(), but your first orderBy() is on field '" +
              n.toString() +
              "' instead."
          );
      }
      function Xy(t, e, n) {
        return t
          ? n && (n.merge || n.mergeFields)
            ? t.toFirestore(e, n)
            : t.toFirestore(e)
          : e;
      }
      var Wy,
        Jy,
        Zy,
        $y =
          (h(av, (Zy = o)),
          (av.prototype.Wf = function (t) {
            return new Hr(t);
          }),
          (av.prototype.jf = function (t) {
            t = this.Jf(t, this.firestore.I_);
            return new Qp(this.firestore, null, t);
          }),
          av),
        tv =
          ((uv.prototype.isEqual = function (t) {
            return (
              this.hasPendingWrites === t.hasPendingWrites &&
              this.fromCache === t.fromCache
            );
          }),
          uv),
        ev =
          (h(sv, (Jy = Ey)),
          (sv.prototype.exists = function () {
            return Jy.prototype.exists.call(this);
          }),
          (sv.prototype.data = function (t) {
            if ((void 0 === t && (t = {}), this.Zf)) {
              if (this.v_) {
                var e = new nv(
                  this.Yf,
                  this.Xf,
                  this.S_,
                  this.Zf,
                  this.metadata,
                  null
                );
                return this.v_.fromFirestore(e, t);
              }
              return this.Xf.Uf(this.Zf.bt(), t.serverTimestamps);
            }
          }),
          (sv.prototype.get = function (t, e) {
            if ((void 0 === e && (e = {}), this.Zf)) {
              t = this.Zf.data().field(Sy("DocumentSnapshot.get", t));
              if (null !== t) return this.Xf.Uf(t, e.serverTimestamps);
            }
          }),
          sv),
        nv =
          (h(ov, (Wy = ev)),
          (ov.prototype.data = function (t) {
            return void 0 === t && (t = {}), Wy.prototype.data.call(this, t);
          }),
          ov),
        rv =
          (Object.defineProperty(iv.prototype, "docs", {
            get: function () {
              var e = [];
              return (
                this.forEach(function (t) {
                  return e.push(t);
                }),
                e
              );
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(iv.prototype, "size", {
            get: function () {
              return this._d.docs.size;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(iv.prototype, "empty", {
            get: function () {
              return 0 === this.size;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (iv.prototype.forEach = function (e, n) {
            var r = this;
            this._d.docs.forEach(function (t) {
              e.call(
                n,
                new nv(
                  r.Yf,
                  r.Xf,
                  t.key,
                  t,
                  new tv(r._d.De.has(t.key), r._d.fromCache),
                  r.query.v_
                )
              );
            });
          }),
          (iv.prototype.docChanges = function (t) {
            t = !!(t = void 0 === t ? {} : t).includeMetadataChanges;
            if (t && this._d.xe)
              throw new zr(
                Gr.INVALID_ARGUMENT,
                "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot()."
              );
            return (
              (this.fd && this.dd === t) ||
                ((this.fd = (function (i, e) {
                  if (i._d.Se.et()) {
                    var n = 0;
                    return i._d.docChanges.map(function (t) {
                      var e = new nv(
                        i.Yf,
                        i.Xf,
                        t.doc.key,
                        t.doc,
                        new tv(i._d.De.has(t.doc.key), i._d.fromCache),
                        i.query.v_
                      );
                      return (
                        t.doc,
                        { type: "added", doc: e, oldIndex: -1, newIndex: n++ }
                      );
                    });
                  }
                  var o = i._d.Se;
                  return i._d.docChanges
                    .filter(function (t) {
                      return e || 3 !== t.type;
                    })
                    .map(function (t) {
                      var e = new nv(
                          i.Yf,
                          i.Xf,
                          t.doc.key,
                          t.doc,
                          new tv(i._d.De.has(t.doc.key), i._d.fromCache),
                          i.query.v_
                        ),
                        n = -1,
                        r = -1;
                      return (
                        0 !== t.type &&
                          ((n = o.indexOf(t.doc.key)),
                          (o = o.delete(t.doc.key))),
                        1 !== t.type &&
                          (r = (o = o.add(t.doc)).indexOf(t.doc.key)),
                        {
                          type: (function (t) {
                            switch (t) {
                              case 0:
                                return "added";
                              case 2:
                              case 3:
                                return "modified";
                              case 1:
                                return "removed";
                              default:
                                return Cr();
                            }
                          })(t.type),
                          doc: e,
                          oldIndex: n,
                          newIndex: r,
                        }
                      );
                    });
                })(this, t)),
                (this.dd = t)),
              this.fd
            );
          }),
          iv);
      function iv(t, e, n, r) {
        (this.Yf = t),
          (this.Xf = e),
          (this._d = r),
          (this.metadata = new tv(r.hasPendingWrites, r.fromCache)),
          (this.query = n);
      }
      function ov() {
        return (null !== Wy && Wy.apply(this, arguments)) || this;
      }
      function sv(t, e, n, r, i, o) {
        var s = this;
        return (
          ((s = Jy.call(this, t, e, n, r, o) || this).Yf = t),
          (s.ld = t),
          (s.metadata = i),
          s
        );
      }
      function uv(t, e) {
        (this.hasPendingWrites = t), (this.fromCache = e);
      }
      function av(t) {
        var e = this;
        return ((e = Zy.call(this) || this).firestore = t), e;
      }
      function cv(t, e) {
        return t instanceof ev && e instanceof ev
          ? t.Yf === e.Yf &&
              t.S_.isEqual(e.S_) &&
              (null === t.Zf ? null === e.Zf : t.Zf.isEqual(e.Zf)) &&
              t.v_ === e.v_
          : t instanceof rv &&
              e instanceof rv &&
              t.Yf === e.Yf &&
              rd(t.query, e.query) &&
              t.metadata.isEqual(e.metadata) &&
              t._d.isEqual(e._d);
      }
      var hv,
        fv =
          (h(lv, (hv = o)),
          (lv.prototype.Wf = function (t) {
            return new Hr(t);
          }),
          (lv.prototype.jf = function (t) {
            t = this.Jf(t, this.firestore.I_);
            return new Qp(this.firestore, null, t);
          }),
          lv);
      function lv(t) {
        var e = this;
        return ((e = hv.call(this) || this).firestore = t), e;
      }
      function pv(t, e, n) {
        for (var r = [], i = 3; i < arguments.length; i++)
          r[i - 3] = arguments[i];
        t = Fp(t, Qp);
        var o = Fp(t.firestore, dy),
          s = vd(o);
        return yv(o, [
          ("string" == typeof (e = e instanceof Op ? e.d_ : e) ||
          e instanceof xp
            ? Rd(s, "updateDoc", t.S_, e, n, r)
            : Ld(s, "updateDoc", t.S_, e)
          ).F_(t.S_, xs.exists(!0)),
        ]);
      }
      function dv(e) {
        for (var n = [], t = 1; t < arguments.length; t++)
          n[t - 1] = arguments[t];
        e instanceof Op && (e = e.d_);
        var r = { includeMetadataChanges: !1 },
          i = 0;
        "object" != typeof n[i] || fy(n[i]) || ((r = n[i]), i++);
        var o,
          s,
          u,
          a,
          c,
          h,
          f = { includeMetadataChanges: r.includeMetadataChanges };
        return (
          fy(n[i]) &&
            ((o = n[i]),
            (n[i] = null === (r = o.next) || void 0 === r ? void 0 : r.bind(o)),
            (n[i + 1] =
              null === (r = o.error) || void 0 === r ? void 0 : r.bind(o)),
            (n[i + 2] =
              null === (r = o.complete) || void 0 === r ? void 0 : r.bind(o))),
          e instanceof Qp
            ? ((u = Fp(e.firestore, dy)),
              (a = zo(e.S_.path)),
              (h = {
                next: function (t) {
                  n[i] && n[i](vv(u, e, t));
                },
                error: n[i + 1],
                complete: n[i + 2],
              }))
            : ((s = Fp(e, Yp)),
              (u = Fp(s.firestore, dy)),
              (a = s.C_),
              (c = new fv(u)),
              (h = {
                next: function (t) {
                  n[i] && n[i](new rv(u, c, s, t));
                },
                error: n[i + 1],
                complete: n[i + 2],
              }),
              xy(e.C_)),
          (function (n, t, e) {
            var r = this,
              i = new Ap(h),
              o = new kl(t, i, e);
            return (
              n._s.Ps(function () {
                return y(r, void 0, void 0, function () {
                  var e;
                  return v(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return (e = xl), [4, sy(n)];
                      case 1:
                        return [2, e.apply(void 0, [t.sent(), o])];
                    }
                  });
                });
              }),
              function () {
                i.i_(),
                  n._s.Ps(function () {
                    return y(r, void 0, void 0, function () {
                      var e;
                      return v(this, function (t) {
                        switch (t.label) {
                          case 0:
                            return (e = Dl), [4, sy(n)];
                          case 1:
                            return [2, e.apply(void 0, [t.sent(), o])];
                        }
                      });
                    });
                  });
              }
            );
          })(gy(u), a, f)
        );
      }
      function yv(t, e) {
        return (function (n, r) {
          var t = this,
            i = new fa();
          return (
            n._s.Ps(function () {
              return y(t, void 0, void 0, function () {
                var e;
                return v(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (e = Xl), [4, oy(n)];
                    case 1:
                      return [2, e.apply(void 0, [t.sent(), r, i])];
                  }
                });
              });
            }),
            i.promise
          );
        })(gy(t), e);
      }
      function vv(t, e, n) {
        var r = n.docs.get(e.S_),
          i = new fv(t);
        return new ev(
          t,
          i,
          e.S_,
          r,
          new tv(n.hasPendingWrites, n.fromCache),
          e.v_
        );
      }
      var gv =
        ((mv.prototype.set = function (t, e, n) {
          this.md();
          (t = bv(t, this.Yf)),
            (e = Xy(t.v_, e, n)),
            (n = gd(this.Id, "WriteBatch.set", t.S_, e, null !== t.v_, n));
          return this.Ed.push(n.F_(t.S_, xs.Kt())), this;
        }),
        (mv.prototype.update = function (t, e, n) {
          for (var r = [], i = 3; i < arguments.length; i++)
            r[i - 3] = arguments[i];
          this.md();
          (t = bv(t, this.Yf)),
            (e =
              "string" == typeof (e = e instanceof Op ? e.d_ : e) ||
              e instanceof xp
                ? Rd(this.Id, "WriteBatch.update", t.S_, e, n, r)
                : Ld(this.Id, "WriteBatch.update", t.S_, e));
          return this.Ed.push(e.F_(t.S_, xs.exists(!0))), this;
        }),
        (mv.prototype.delete = function (t) {
          this.md();
          t = bv(t, this.Yf);
          return (this.Ed = this.Ed.concat(new Ks(t.S_, xs.Kt()))), this;
        }),
        (mv.prototype.commit = function () {
          return (
            this.md(),
            (this.Td = !0),
            0 < this.Ed.length ? this.wd(this.Ed) : Promise.resolve()
          );
        }),
        (mv.prototype.md = function () {
          if (this.Td)
            throw new zr(
              Gr.FAILED_PRECONDITION,
              "A write batch can no longer be used after commit() has been called."
            );
        }),
        mv);
      function mv(t, e) {
        (this.Yf = t),
          (this.wd = e),
          (this.Ed = []),
          (this.Td = !1),
          (this.Id = vd(t));
      }
      function bv(t, e) {
        if ((t = t instanceof Op ? t.d_ : t).firestore !== e)
          throw new zr(
            Gr.INVALID_ARGUMENT,
            "Provided document reference is from a different Firestore instance."
          );
        return t;
      }
      var wv,
        _v =
          ((Iv.prototype.get = function (t) {
            var e = this,
              n = bv(t, this.Yf),
              r = new $y(this.Yf);
            return this.Ad.ef([n.S_]).then(function (t) {
              if (!t || 1 !== t.length) return Cr();
              t = t[0];
              if (t instanceof eo) return new Ey(e.Yf, r, n.S_, null, n.v_);
              if (t instanceof to) return new Ey(e.Yf, r, t.key, t, n.v_);
              throw Cr();
            });
          }),
          (Iv.prototype.set = function (t, e, n) {
            (t = bv(t, this.Yf)),
              (e = Xy(t.v_, e, n)),
              (n = gd(this.Id, "Transaction.set", t.S_, e, null !== t.v_, n));
            return this.Ad.set(t.S_, n), this;
          }),
          (Iv.prototype.update = function (t, e, n) {
            for (var r = [], i = 3; i < arguments.length; i++)
              r[i - 3] = arguments[i];
            (t = bv(t, this.Yf)),
              (e =
                "string" == typeof (e = e instanceof Op ? e.d_ : e) ||
                e instanceof xp
                  ? Rd(this.Id, "Transaction.update", t.S_, e, n, r)
                  : Ld(this.Id, "Transaction.update", t.S_, e));
            return this.Ad.update(t.S_, e), this;
          }),
          (Iv.prototype.delete = function (t) {
            t = bv(t, this.Yf);
            return this.Ad.delete(t.S_), this;
          }),
          h(Ev, (wv = Iv)),
          (Ev.prototype.get = function (t) {
            var e = this,
              n = bv(t, this.Yf),
              r = new fv(this.Yf);
            return wv.prototype.get.call(this, t).then(function (t) {
              return new ev(e.Yf, r, n.S_, t.Zf, new tv(!1, !1), n.v_);
            });
          }),
          Ev);
      function Ev(t, e) {
        var n = this;
        return ((n = wv.call(this, t, e) || this).Yf = t), n;
      }
      function Iv(t, e) {
        (this.Yf = t), (this.Ad = e), (this.Id = vd(t));
      }
      function Tv() {
        if ("undefined" == typeof Uint8Array)
          throw new zr(
            Gr.UNIMPLEMENTED,
            "Uint8Arrays are not available in this environment."
          );
      }
      function Nv() {
        if ("undefined" == typeof atob)
          throw new zr(
            Gr.UNIMPLEMENTED,
            "Blobs are unavailable in Firestore in this environment."
          );
      }
      var Av,
        Sv,
        xv,
        Dv =
          (h(Vv, (xv = Op)),
          (Vv.fromBase64String = function (t) {
            return Nv(), new Vv(Hr.fromBase64String(t));
          }),
          (Vv.fromUint8Array = function (t) {
            return Tv(), new Vv(Hr.fromUint8Array(t));
          }),
          (Vv.prototype.toBase64 = function () {
            return Nv(), this.d_.toBase64();
          }),
          (Vv.prototype.toUint8Array = function () {
            return Tv(), this.d_.toUint8Array();
          }),
          (Vv.prototype.isEqual = function (t) {
            return this.d_.isEqual(t.d_);
          }),
          (Vv.prototype.toString = function () {
            return "Blob(base64: " + this.toBase64() + ")";
          }),
          Vv),
        Ov =
          ((Rv.prototype.enableIndexedDbPersistence = function (t, e) {
            return (function (t, e) {
              wy((t = Fp(t, dy)));
              var n = gy(t),
                r = t.p_(),
                t = new wp();
              return by(
                n,
                t,
                new mp(
                  t,
                  r.cacheSizeBytes,
                  null == e ? void 0 : e.forceOwnership
                )
              );
            })(t.d_, { forceOwnership: e });
          }),
          (Rv.prototype.enableMultiTabIndexedDbPersistence = function (t) {
            return (function (t) {
              wy((t = Fp(t, dy)));
              var e = gy(t),
                n = t.p_(),
                t = new wp();
              return by(e, t, new bp(t, n.cacheSizeBytes));
            })(t.d_);
          }),
          (Rv.prototype.clearIndexedDbPersistence = function (t) {
            return (function (n) {
              var t = this;
              if (n.R_ && !n.P_)
                throw new zr(
                  Gr.FAILED_PRECONDITION,
                  "Persistence can only be cleared before a Firestore instance is initialized or after it is terminated."
                );
              var r = new fa();
              return (
                n.Bf.Tf(function () {
                  return y(t, void 0, void 0, function () {
                    var e;
                    return v(this, function (t) {
                      switch (t.label) {
                        case 0:
                          return (
                            t.trys.push([0, 2, , 3]),
                            [
                              4,
                              (function (n) {
                                return y(this, void 0, void 0, function () {
                                  var e;
                                  return v(this, function (t) {
                                    switch (t.label) {
                                      case 0:
                                        return da.Kn()
                                          ? ((e = n + "main"),
                                            [4, da.delete(e)])
                                          : [2, Promise.resolve()];
                                      case 1:
                                        return t.sent(), [2];
                                    }
                                  });
                                });
                              })(Th(n.I_, n.w_)),
                            ]
                          );
                        case 1:
                          return t.sent(), r.resolve(), [3, 3];
                        case 2:
                          return (e = t.sent()), r.reject(e), [3, 3];
                        case 3:
                          return [2];
                      }
                    });
                  });
                }),
                r.promise
              );
            })(t.d_);
          }),
          Rv),
        kv =
          (h(Lv, (Sv = Op)),
          Object.defineProperty(Lv.prototype, "I_", {
            get: function () {
              return this.d_.I_;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (Lv.prototype.settings = function (t) {
            t.merge &&
              delete (t = Object.assign(Object.assign({}, this.d_.V_()), t))
                .merge,
              this.d_.g_(t);
          }),
          (Lv.prototype.useEmulator = function (t, e) {
            var n, r;
            (n = this.d_),
              (r = t),
              (t = e),
              "firestore.googleapis.com" !== (e = (n = Fp(n, Hp)).V_()).host &&
                e.host !== r &&
                kr(
                  "Host has been set in both settings() and useEmulator(), emulator host will be used"
                ),
              n.g_(
                Object.assign(Object.assign({}, e), {
                  host: r + ":" + t,
                  ssl: !1,
                })
              );
          }),
          (Lv.prototype.enableNetwork = function () {
            return (function (i) {
              var t = this;
              return i._s.enqueue(function () {
                return y(t, void 0, void 0, function () {
                  var n, r;
                  return v(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return [4, ny(i)];
                      case 1:
                        return (n = t.sent()), [4, iy(i)];
                      case 2:
                        return (
                          (r = t.sent()),
                          [2, (n.yo(!0), (e = r).Nh.delete(0), ul(e))]
                        );
                    }
                    var e;
                  });
                });
              });
            })(gy(Fp(this.d_, dy)));
          }),
          (Lv.prototype.disableNetwork = function () {
            return (function (r) {
              var t = this;
              return r._s.enqueue(function () {
                return y(t, void 0, void 0, function () {
                  var e, n;
                  return v(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return [4, ny(r)];
                      case 1:
                        return (e = t.sent()), [4, iy(r)];
                      case 2:
                        return (
                          (n = t.sent()),
                          [
                            2,
                            (e.yo(!1),
                            (function (n) {
                              return y(this, void 0, void 0, function () {
                                var e;
                                return v(this, function (t) {
                                  switch (t.label) {
                                    case 0:
                                      return (e = n).Nh.add(0), [4, al(e)];
                                    case 1:
                                      return t.sent(), e.Oh.set("Offline"), [2];
                                  }
                                });
                              });
                            })(n)),
                          ]
                        );
                    }
                  });
                });
              });
            })(gy(Fp(this.d_, dy)));
          }),
          (Lv.prototype.enablePersistence = function (t) {
            var e = !1,
              n = !1;
            return (
              t &&
                Vp(
                  "synchronizeTabs",
                  (e = !!t.synchronizeTabs),
                  "experimentalForceOwningTab",
                  (n = !!t.experimentalForceOwningTab)
                ),
              e
                ? this.Rd.enableMultiTabIndexedDbPersistence(this)
                : this.Rd.enableIndexedDbPersistence(this, n)
            );
          }),
          (Lv.prototype.clearPersistence = function () {
            return this.Rd.clearIndexedDbPersistence(this);
          }),
          (Lv.prototype.terminate = function () {
            return (
              this.Pd &&
                (this.Pd._removeServiceInstance("firestore"),
                this.Pd._removeServiceInstance("firestore-exp")),
              this.d_._delete()
            );
          }),
          (Lv.prototype.waitForPendingWrites = function () {
            return (function (n) {
              var t = this,
                r = new fa();
              return (
                n._s.Ps(function () {
                  return y(t, void 0, void 0, function () {
                    var e;
                    return v(this, function (t) {
                      switch (t.label) {
                        case 0:
                          return (e = $l), [4, oy(n)];
                        case 1:
                          return [2, e.apply(void 0, [t.sent(), r])];
                      }
                    });
                  });
                }),
                r.promise
              );
            })(gy(Fp(this.d_, dy)));
          }),
          (Lv.prototype.onSnapshotsInSync = function (t) {
            return (
              (e = this.d_),
              (t = t),
              (function (n, t) {
                var e = this,
                  r = new Ap(t);
                return (
                  n._s.Ps(function () {
                    return y(e, void 0, void 0, function () {
                      var e;
                      return v(this, function (t) {
                        switch (t.label) {
                          case 0:
                            return (
                              (e = function (t, e) {
                                t.Wh.add(e), e.next();
                              }),
                              [4, sy(n)]
                            );
                          case 1:
                            return [2, e.apply(void 0, [t.sent(), r])];
                        }
                      });
                    });
                  }),
                  function () {
                    r.i_(),
                      n._s.Ps(function () {
                        return y(e, void 0, void 0, function () {
                          var e;
                          return v(this, function (t) {
                            switch (t.label) {
                              case 0:
                                return (
                                  (e = function (t, e) {
                                    t.Wh.delete(e);
                                  }),
                                  [4, sy(n)]
                                );
                              case 1:
                                return [2, e.apply(void 0, [t.sent(), r])];
                            }
                          });
                        });
                      });
                  }
                );
              })(gy(Fp(e, dy)), fy(t) ? t : { next: t })
            );
            var e;
          }),
          Object.defineProperty(Lv.prototype, "app", {
            get: function () {
              if (!this.Pd)
                throw new zr(
                  Gr.FAILED_PRECONDITION,
                  "Firestore was not initialized using the Firebase SDK. 'app' is not available"
                );
              return this.Pd;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (Lv.prototype.collection = function (t) {
            try {
              return new cg(this, td(this.d_, t));
            } catch (t) {
              throw Xv(t, "collection()", "Firestore.collection()");
            }
          }),
          (Lv.prototype.doc = function (t) {
            try {
              return new Yv(this, ed(this.d_, t));
            } catch (t) {
              throw Xv(t, "doc()", "Firestore.doc()");
            }
          }),
          (Lv.prototype.collectionGroup = function (t) {
            try {
              return new sg(
                this,
                (function (t, e) {
                  if (
                    ((t = Fp(t, Hp)),
                    Lp("collectionGroup", "collection id", e),
                    0 <= e.indexOf("/"))
                  )
                    throw new zr(
                      Gr.INVALID_ARGUMENT,
                      "Invalid collection ID '" +
                        e +
                        "' passed to function collectionGroup(). Collection IDs must not contain '/'."
                    );
                  return new Yp(t, null, ((e = e), new Bo(fi.ct(), e)));
                })(this.d_, t)
              );
            } catch (t) {
              throw Xv(t, "collectionGroup()", "Firestore.collectionGroup()");
            }
          }),
          (Lv.prototype.runTransaction = function (e) {
            var n,
              r = this;
            return (function (n, r) {
              var t = this,
                i = new fa();
              return (
                n._s.Ps(function () {
                  return y(t, void 0, void 0, function () {
                    var e;
                    return v(this, function (t) {
                      switch (t.label) {
                        case 0:
                          return [
                            4,
                            ey(n).then(function (t) {
                              return t.Sh;
                            }),
                          ];
                        case 1:
                          return (
                            (e = t.sent()), new Yd(n._s, e, r, i).run(), [2]
                          );
                      }
                    });
                  });
                }),
                i.promise
              );
            })(gy((n = this.d_)), function (t) {
              return (t = new _v(n, t)), e(new Fv(r, t));
            });
          }),
          (Lv.prototype.batch = function () {
            var e = this;
            return (
              gy(this.d_),
              new qv(
                new gv(this.d_, function (t) {
                  return yv(e.d_, t);
                })
              )
            );
          }),
          (Lv.prototype.loadBundle = function (t) {
            throw new zr(
              Gr.FAILED_PRECONDITION,
              '"loadBundle()" does not exist, have you imported "firebase/firestore/bundle"?'
            );
          }),
          (Lv.prototype.namedQuery = function (t) {
            throw new zr(
              Gr.FAILED_PRECONDITION,
              '"namedQuery()" does not exist, have you imported "firebase/firestore/bundle"?'
            );
          }),
          Lv),
        Pv =
          (h(Cv, (Av = o)),
          (Cv.prototype.Wf = function (t) {
            return new Dv(new Hr(t));
          }),
          (Cv.prototype.jf = function (t) {
            t = this.Jf(t, this.firestore.I_);
            return Yv.yd(t, this.firestore, null);
          }),
          Cv);
      function Cv(t) {
        var e = this;
        return ((e = Av.call(this) || this).firestore = t), e;
      }
      function Lv(t, e, n) {
        var r = this;
        return (
          ((r = Sv.call(this, e) || this).Rd = n),
          (r.INTERNAL = {
            delete: function () {
              return r.terminate();
            },
          }),
          t instanceof Nr || (r.Pd = t),
          r
        );
      }
      function Rv() {}
      function Vv() {
        return (null !== xv && xv.apply(this, arguments)) || this;
      }
      var Mv,
        Uv,
        jv,
        Fv =
          (h(Hv, (jv = Op)),
          (Hv.prototype.get = function (t) {
            var e = this,
              n = vg(t);
            return this.d_.get(n).then(function (t) {
              return new ig(
                e.Yf,
                new ev(e.Yf.d_, e.Xf, t.S_, t.Zf, t.metadata, n.v_)
              );
            });
          }),
          (Hv.prototype.set = function (t, e, n) {
            t = vg(t);
            return (
              n
                ? (Rp("Transaction.set", n), this.d_.set(t, e, n))
                : this.d_.set(t, e),
              this
            );
          }),
          (Hv.prototype.update = function (t, e, n) {
            for (var r = [], i = 3; i < arguments.length; i++)
              r[i - 3] = arguments[i];
            var o = vg(t);
            return (
              2 === arguments.length
                ? this.d_.update(o, e)
                : (t = this.d_).update.apply(t, f([o, e, n], r)),
              this
            );
          }),
          (Hv.prototype.delete = function (t) {
            t = vg(t);
            return this.d_.delete(t), this;
          }),
          Hv),
        qv =
          (h(zv, (Uv = Op)),
          (zv.prototype.set = function (t, e, n) {
            t = vg(t);
            return (
              n
                ? (Rp("WriteBatch.set", n), this.d_.set(t, e, n))
                : this.d_.set(t, e),
              this
            );
          }),
          (zv.prototype.update = function (t, e, n) {
            for (var r = [], i = 3; i < arguments.length; i++)
              r[i - 3] = arguments[i];
            var o = vg(t);
            return (
              2 === arguments.length
                ? this.d_.update(o, e)
                : (t = this.d_).update.apply(t, f([o, e, n], r)),
              this
            );
          }),
          (zv.prototype.delete = function (t) {
            t = vg(t);
            return this.d_.delete(t), this;
          }),
          (zv.prototype.commit = function () {
            return this.d_.commit();
          }),
          zv),
        Bv =
          (h(Gv, (Mv = Op)),
          (Gv.prototype.fromFirestore = function (t, e) {
            t = new nv(this.Yf.d_, this.Xf, t.S_, t.Zf, t.metadata, null);
            return this.d_.fromFirestore(
              new og(this.Yf, t),
              null != e ? e : {}
            );
          }),
          (Gv.prototype.toFirestore = function (t, e) {
            return e ? this.d_.toFirestore(t, e) : this.d_.toFirestore(t);
          }),
          (Gv.gd = function (t, e) {
            var n = Gv.Vd,
              r = n.get(t);
            r || ((r = new WeakMap()), n.set(t, r));
            n = r.get(e);
            return n || ((n = new Gv(t, new Pv(t), e)), r.set(e, n)), n;
          }),
          Gv);
      function Gv(t, e, n) {
        var r = this;
        return ((r = Mv.call(this, n) || this).Yf = t), (r.Xf = e), r;
      }
      function zv() {
        return (null !== Uv && Uv.apply(this, arguments)) || this;
      }
      function Hv(t, e) {
        var n = this;
        return ((n = jv.call(this, e) || this).Yf = t), (n.Xf = new Pv(t)), n;
      }
      Bv.Vd = new WeakMap();
      var Qv,
        Yv =
          (h(Kv, (Qv = Op)),
          (Kv.pd = function (t, e, n) {
            if (t.length % 2 != 0)
              throw new zr(
                Gr.INVALID_ARGUMENT,
                "Invalid document reference. Document references must have an even number of segments, but " +
                  t.rt() +
                  " has " +
                  t.length
              );
            return new Kv(e, new Qp(e.d_, n, new di(t)));
          }),
          (Kv.yd = function (t, e, n) {
            return new Kv(e, new Qp(e.d_, n, t));
          }),
          Object.defineProperty(Kv.prototype, "id", {
            get: function () {
              return this.d_.id;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(Kv.prototype, "parent", {
            get: function () {
              return new cg(this.firestore, this.d_.parent);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(Kv.prototype, "path", {
            get: function () {
              return this.d_.path;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (Kv.prototype.collection = function (t) {
            try {
              return new cg(this.firestore, td(this.d_, t));
            } catch (t) {
              throw Xv(t, "collection()", "DocumentReference.collection()");
            }
          }),
          (Kv.prototype.isEqual = function (t) {
            return (
              (t = t instanceof Op ? t.d_ : t) instanceof Qp && nd(this.d_, t)
            );
          }),
          (Kv.prototype.set = function (t, e) {
            e = Rp("DocumentReference.set", e);
            try {
              return (function (t, e, n) {
                t = Fp(t, Qp);
                var r = Fp(t.firestore, dy),
                  e = Xy(t.v_, e, n);
                return yv(r, [
                  gd(vd(r), "setDoc", t.S_, e, null !== t.v_, n).F_(
                    t.S_,
                    xs.Kt()
                  ),
                ]);
              })(this.d_, t, e);
            } catch (t) {
              throw Xv(t, "setDoc()", "DocumentReference.set()");
            }
          }),
          (Kv.prototype.update = function (t, e) {
            for (var n = [], r = 2; r < arguments.length; r++)
              n[r - 2] = arguments[r];
            try {
              return 1 === arguments.length
                ? pv(this.d_, t)
                : pv.apply(void 0, f([this.d_, t, e], n));
            } catch (t) {
              throw Xv(t, "updateDoc()", "DocumentReference.update()");
            }
          }),
          (Kv.prototype.delete = function () {
            return yv(Fp((t = this.d_).firestore, dy), [new Ks(t.S_, xs.Kt())]);
            var t;
          }),
          (Kv.prototype.onSnapshot = function () {
            for (var e = this, t = [], n = 0; n < arguments.length; n++)
              t[n] = arguments[n];
            var r = Wv(t),
              i = Jv(t, function (t) {
                return new ig(
                  e.firestore,
                  new ev(e.firestore.d_, e.Xf, t.S_, t.Zf, t.metadata, e.d_.v_)
                );
              });
            return dv(this.d_, r, i);
          }),
          (Kv.prototype.get = function (t) {
            var e = this;
            return ("cache" === (null == t ? void 0 : t.source)
              ? function (e) {
                  e = Fp(e, Qp);
                  var n = Fp(e.firestore, dy),
                    t = gy(n),
                    r = new fv(n);
                  return (function (n, r) {
                    var t = this,
                      i = new fa();
                    return (
                      n._s.Ps(function () {
                        return y(t, void 0, void 0, function () {
                          var e;
                          return v(this, function (t) {
                            switch (t.label) {
                              case 0:
                                return (
                                  (e = function (o, s, u) {
                                    return y(this, void 0, void 0, function () {
                                      var r, i;
                                      return v(this, function (t) {
                                        switch (t.label) {
                                          case 0:
                                            return (
                                              t.trys.push([0, 2, , 3]),
                                              [
                                                4,
                                                ((e = s),
                                                (n = o).persistence.runTransaction(
                                                  "read document",
                                                  "readonly",
                                                  function (t) {
                                                    return n.Tc.Ho(t, e);
                                                  }
                                                )),
                                              ]
                                            );
                                          case 1:
                                            return (
                                              (i = t.sent()) instanceof to
                                                ? u.resolve(i)
                                                : i instanceof eo
                                                ? u.resolve(null)
                                                : u.reject(
                                                    new zr(
                                                      Gr.UNAVAILABLE,
                                                      "Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"
                                                    )
                                                  ),
                                              [3, 3]
                                            );
                                          case 2:
                                            return (
                                              (r = t.sent()),
                                              (i = Oa(
                                                r,
                                                "Failed to get document '" +
                                                  s +
                                                  " from cache"
                                              )),
                                              u.reject(i),
                                              [3, 3]
                                            );
                                          case 3:
                                            return [2];
                                        }
                                        var e, n;
                                      });
                                    });
                                  }),
                                  [4, ry(n)]
                                );
                              case 1:
                                return [2, e.apply(void 0, [t.sent(), r, i])];
                            }
                          });
                        });
                      }),
                      i.promise
                    );
                  })(t, e.S_).then(function (t) {
                    return new ev(
                      n,
                      r,
                      e.S_,
                      t,
                      new tv(t instanceof to && t.Vt, !0),
                      e.v_
                    );
                  });
                }
              : "server" === (null == t ? void 0 : t.source)
              ? function (e) {
                  e = Fp(e, Qp);
                  var n = Fp(e.firestore, dy);
                  return uy(gy(n), e.S_, { source: "server" }).then(function (
                    t
                  ) {
                    return vv(n, e, t);
                  });
                }
              : function (e) {
                  e = Fp(e, Qp);
                  var n = Fp(e.firestore, dy);
                  return uy(gy(n), e.S_).then(function (t) {
                    return vv(n, e, t);
                  });
                })(this.d_).then(function (t) {
              return new ig(
                e.firestore,
                new ev(e.firestore.d_, e.Xf, t.S_, t.Zf, t.metadata, e.d_.v_)
              );
            });
          }),
          (Kv.prototype.withConverter = function (t) {
            return new Kv(
              this.firestore,
              this.d_.withConverter(Bv.gd(this.firestore, t))
            );
          }),
          Kv);
      function Kv(t, e) {
        var n = this;
        return (
          ((n = Qv.call(this, e) || this).firestore = t), (n.Xf = new Pv(t)), n
        );
      }
      function Xv(t, e, n) {
        return (t.message = t.message.replace(e, n)), t;
      }
      function Wv(t) {
        for (var e = 0, n = t; e < n.length; e++) {
          var r = n[e];
          if ("object" == typeof r && !fy(r)) return r;
        }
        return {};
      }
      function Jv(t, e) {
        var n;
        return {
          next: function (t) {
            n.next && n.next(e(t));
          },
          error:
            null ===
              (t = (n = fy(t[0])
                ? t[0]
                : fy(t[1])
                ? t[1]
                : "function" == typeof t[0]
                ? { next: t[0], error: t[1], complete: t[2] }
                : { next: t[1], error: t[2], complete: t[3] }).error) ||
            void 0 === t
              ? void 0
              : t.bind(n),
          complete:
            null === (t = n.complete) || void 0 === t ? void 0 : t.bind(n),
        };
      }
      var Zv,
        $v,
        tg,
        eg,
        ng,
        rg,
        ig =
          (h(yg, (rg = Op)),
          Object.defineProperty(yg.prototype, "ref", {
            get: function () {
              return new Yv(this.Yf, this.d_.ref);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(yg.prototype, "id", {
            get: function () {
              return this.d_.id;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(yg.prototype, "metadata", {
            get: function () {
              return this.d_.metadata;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(yg.prototype, "exists", {
            get: function () {
              return this.d_.exists();
            },
            enumerable: !1,
            configurable: !0,
          }),
          (yg.prototype.data = function (t) {
            return this.d_.data(t);
          }),
          (yg.prototype.get = function (t, e) {
            return this.d_.get(t, e);
          }),
          (yg.prototype.isEqual = function (t) {
            return cv(this.d_, t.d_);
          }),
          yg),
        og =
          (h(dg, (ng = ig)),
          (dg.prototype.data = function (t) {
            return this.d_.data(t);
          }),
          dg),
        sg =
          (h(pg, (eg = Op)),
          (pg.prototype.where = function (t, e, n) {
            try {
              return new pg(
                this.firestore,
                Dy(
                  this.d_,
                  ((r = n), (i = e), (o = Sy("where", t)), new Ry(o, i, r))
                )
              );
            } catch (t) {
              throw Xv(t, /(orderBy|where)\(\)/, "Query.$1()");
            }
            var r, i, o;
          }),
          (pg.prototype.orderBy = function (t, e) {
            try {
              return new pg(
                this.firestore,
                Dy(
                  this.d_,
                  ((n = void 0 === e ? "asc" : e),
                  (r = Sy("orderBy", t)),
                  new Vy(r, n))
                )
              );
            } catch (t) {
              throw Xv(t, /(orderBy|where)\(\)/, "Query.$1()");
            }
            var n, r;
          }),
          (pg.prototype.limit = function (t) {
            try {
              return new pg(
                this.firestore,
                Dy(this.d_, (qp("limit", (e = t)), new My("limit", e, "F")))
              );
            } catch (t) {
              throw Xv(t, "limit()", "Query.limit()");
            }
            var e;
          }),
          (pg.prototype.limitToLast = function (t) {
            try {
              return new pg(
                this.firestore,
                Dy(
                  this.d_,
                  (qp("limitToLast", (e = t)), new My("limitToLast", e, "L"))
                )
              );
            } catch (t) {
              throw Xv(t, "limitToLast()", "Query.limitToLast()");
            }
            var e;
          }),
          (pg.prototype.startAt = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            try {
              return new pg(
                this.firestore,
                Dy(
                  this.d_,
                  function () {
                    for (var t = [], e = 0; e < arguments.length; e++)
                      t[e] = arguments[e];
                    return new Uy("startAt", t, !0);
                  }.apply(void 0, t)
                )
              );
            } catch (t) {
              throw Xv(t, "startAt()", "Query.startAt()");
            }
          }),
          (pg.prototype.startAfter = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            try {
              return new pg(
                this.firestore,
                Dy(
                  this.d_,
                  function () {
                    for (var t = [], e = 0; e < arguments.length; e++)
                      t[e] = arguments[e];
                    return new Uy("startAfter", t, !1);
                  }.apply(void 0, t)
                )
              );
            } catch (t) {
              throw Xv(t, "startAfter()", "Query.startAfter()");
            }
          }),
          (pg.prototype.endBefore = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            try {
              return new pg(
                this.firestore,
                Dy(
                  this.d_,
                  function () {
                    for (var t = [], e = 0; e < arguments.length; e++)
                      t[e] = arguments[e];
                    return new jy("endBefore", t, !0);
                  }.apply(void 0, t)
                )
              );
            } catch (t) {
              throw Xv(t, "endBefore()", "Query.endBefore()");
            }
          }),
          (pg.prototype.endAt = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            try {
              return new pg(
                this.firestore,
                Dy(
                  this.d_,
                  function () {
                    for (var t = [], e = 0; e < arguments.length; e++)
                      t[e] = arguments[e];
                    return new jy("endAt", t, !1);
                  }.apply(void 0, t)
                )
              );
            } catch (t) {
              throw Xv(t, "endAt()", "Query.endAt()");
            }
          }),
          (pg.prototype.isEqual = function (t) {
            return rd(this.d_, t.d_);
          }),
          (pg.prototype.get = function (t) {
            var e = this;
            return ("cache" === (null == t ? void 0 : t.source)
              ? function (e) {
                  e = Fp(e, Yp);
                  var n = Fp(e.firestore, dy),
                    t = gy(n),
                    r = new fv(n);
                  return (function (n, r) {
                    var t = this,
                      i = new fa();
                    return (
                      n._s.Ps(function () {
                        return y(t, void 0, void 0, function () {
                          var e;
                          return v(this, function (t) {
                            switch (t.label) {
                              case 0:
                                return (
                                  (e = function (i, o, s) {
                                    return y(this, void 0, void 0, function () {
                                      var e, n, r;
                                      return v(this, function (t) {
                                        switch (t.label) {
                                          case 0:
                                            return (
                                              t.trys.push([0, 2, , 3]),
                                              [4, Bh(i, o, !0)]
                                            );
                                          case 1:
                                            return (
                                              (r = t.sent()),
                                              (e = new Bl(o, r.Rc)),
                                              (n = e.fl(r.documents)),
                                              (n = e.wi(n, !1)),
                                              s.resolve(n.snapshot),
                                              [3, 3]
                                            );
                                          case 2:
                                            return (
                                              (n = t.sent()),
                                              (r = Oa(
                                                n,
                                                "Failed to execute query '" +
                                                  o +
                                                  " against cache"
                                              )),
                                              s.reject(r),
                                              [3, 3]
                                            );
                                          case 3:
                                            return [2];
                                        }
                                      });
                                    });
                                  }),
                                  [4, ry(n)]
                                );
                              case 1:
                                return [2, e.apply(void 0, [t.sent(), r, i])];
                            }
                          });
                        });
                      }),
                      i.promise
                    );
                  })(t, e.C_).then(function (t) {
                    return new rv(n, r, e, t);
                  });
                }
              : "server" === (null == t ? void 0 : t.source)
              ? function (e) {
                  e = Fp(e, Yp);
                  var n = Fp(e.firestore, dy),
                    t = gy(n),
                    r = new fv(n);
                  return ay(t, e.C_, { source: "server" }).then(function (t) {
                    return new rv(n, r, e, t);
                  });
                }
              : function (e) {
                  e = Fp(e, Yp);
                  var n = Fp(e.firestore, dy),
                    t = gy(n),
                    r = new fv(n);
                  return (
                    xy(e.C_),
                    ay(t, e.C_).then(function (t) {
                      return new rv(n, r, e, t);
                    })
                  );
                })(this.d_).then(function (t) {
              return new ag(
                e.firestore,
                new rv(e.firestore.d_, e.Xf, e.d_, t._d)
              );
            });
          }),
          (pg.prototype.onSnapshot = function () {
            for (var e = this, t = [], n = 0; n < arguments.length; n++)
              t[n] = arguments[n];
            var r = Wv(t),
              i = Jv(t, function (t) {
                return new ag(
                  e.firestore,
                  new rv(e.firestore.d_, e.Xf, e.d_, t._d)
                );
              });
            return dv(this.d_, r, i);
          }),
          (pg.prototype.withConverter = function (t) {
            return new pg(
              this.firestore,
              this.d_.withConverter(Bv.gd(this.firestore, t))
            );
          }),
          pg),
        ug =
          (h(lg, (tg = Op)),
          Object.defineProperty(lg.prototype, "type", {
            get: function () {
              return this.d_.type;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(lg.prototype, "doc", {
            get: function () {
              return new og(this.Yf, this.d_.doc);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(lg.prototype, "oldIndex", {
            get: function () {
              return this.d_.oldIndex;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(lg.prototype, "newIndex", {
            get: function () {
              return this.d_.newIndex;
            },
            enumerable: !1,
            configurable: !0,
          }),
          lg),
        ag =
          (h(fg, ($v = Op)),
          Object.defineProperty(fg.prototype, "query", {
            get: function () {
              return new sg(this.Yf, this.d_.query);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(fg.prototype, "metadata", {
            get: function () {
              return this.d_.metadata;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(fg.prototype, "size", {
            get: function () {
              return this.d_.size;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(fg.prototype, "empty", {
            get: function () {
              return this.d_.empty;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(fg.prototype, "docs", {
            get: function () {
              var e = this;
              return this.d_.docs.map(function (t) {
                return new og(e.Yf, t);
              });
            },
            enumerable: !1,
            configurable: !0,
          }),
          (fg.prototype.docChanges = function (t) {
            var e = this;
            return this.d_.docChanges(t).map(function (t) {
              return new ug(e.Yf, t);
            });
          }),
          (fg.prototype.forEach = function (e, n) {
            var r = this;
            this.d_.forEach(function (t) {
              e.call(n, new og(r.Yf, t));
            });
          }),
          (fg.prototype.isEqual = function (t) {
            return cv(this.d_, t.d_);
          }),
          fg),
        cg =
          (h(hg, (Zv = sg)),
          Object.defineProperty(hg.prototype, "id", {
            get: function () {
              return this.d_.id;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(hg.prototype, "path", {
            get: function () {
              return this.d_.path;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(hg.prototype, "parent", {
            get: function () {
              var t = this.d_.parent;
              return t ? new Yv(this.firestore, t) : null;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (hg.prototype.doc = function (t) {
            try {
              return new Yv(
                this.firestore,
                void 0 === t ? ed(this.d_) : ed(this.d_, t)
              );
            } catch (t) {
              throw Xv(t, "doc()", "CollectionReference.doc()");
            }
          }),
          (hg.prototype.add = function (t) {
            var e,
              n,
              r,
              i = this;
            return (
              (e = this.d_),
              (n = t),
              (t = Fp(e.firestore, dy)),
              (r = ed(e)),
              (n = Xy(e.v_, n)),
              yv(t, [
                gd(vd(e.firestore), "addDoc", r.S_, n, null !== e.v_, {}).F_(
                  r.S_,
                  xs.exists(!1)
                ),
              ])
                .then(function () {
                  return r;
                })
                .then(function (t) {
                  return new Yv(i.firestore, t);
                })
            );
          }),
          (hg.prototype.isEqual = function (t) {
            return nd(this.d_, t.d_);
          }),
          (hg.prototype.withConverter = function (t) {
            return new hg(
              this.firestore,
              this.d_.withConverter(Bv.gd(this.firestore, t))
            );
          }),
          hg);
      function hg(t, e) {
        var n = this;
        return ((n = Zv.call(this, t, e) || this).firestore = t), (n.d_ = e), n;
      }
      function fg(t, e) {
        var n = this;
        return ((n = $v.call(this, e) || this).Yf = t), n;
      }
      function lg(t, e) {
        var n = this;
        return ((n = tg.call(this, e) || this).Yf = t), n;
      }
      function pg(t, e) {
        var n = this;
        return (
          ((n = eg.call(this, e) || this).firestore = t), (n.Xf = new Pv(t)), n
        );
      }
      function dg() {
        return (null !== ng && ng.apply(this, arguments)) || this;
      }
      function yg(t, e) {
        var n = this;
        return ((n = rg.call(this, e) || this).Yf = t), n;
      }
      function vg(t) {
        return Fp((t = t instanceof Op ? t.d_ : t), Qp);
      }
      var gg,
        mg,
        Ie =
          (h(wg, (mg = Op)),
          (wg.documentId = function () {
            return new wg(pi.ht().rt());
          }),
          (wg.prototype.isEqual = function (t) {
            return (
              (t = t instanceof Op ? t.d_ : t) instanceof xp &&
              this.d_.f_.isEqual(t.f_)
            );
          }),
          wg),
        o =
          (h(bg, (gg = Op)),
          (bg.serverTimestamp = function () {
            var t = new Ad("serverTimestamp");
            return (t._methodName = "FieldValue.serverTimestamp"), new bg(t);
          }),
          (bg.delete = function () {
            var t = new bd("deleteField");
            return (t._methodName = "FieldValue.delete"), new bg(t);
          }),
          (bg.arrayUnion = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            var n = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              return new Sd("arrayUnion", t);
            }.apply(void 0, t);
            return (n._methodName = "FieldValue.arrayUnion"), new bg(n);
          }),
          (bg.arrayRemove = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            var n = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              return new xd("arrayRemove", t);
            }.apply(void 0, t);
            return (n._methodName = "FieldValue.arrayRemove"), new bg(n);
          }),
          (bg.increment = function (t) {
            t = new Dd("increment", t);
            return (t._methodName = "FieldValue.increment"), new bg(t);
          }),
          (bg.prototype.isEqual = function (t) {
            return this.d_.isEqual(t.d_);
          }),
          bg);
      function bg() {
        return (null !== gg && gg.apply(this, arguments)) || this;
      }
      function wg() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return mg.call(this, new (xp.bind.apply(xp, f([void 0], t)))()) || this;
      }
      function _g(t) {
        return (
          (e = this.d_),
          (s = t),
          (n = gy((e = Fp(e, dy)))),
          (t = new py()),
          (function (n, t, r) {
            var e,
              i = this,
              o =
                ((e = s),
                (t = Hf(t)),
                (e = (function (t) {
                  if (t instanceof Uint8Array) return Np(t, void 0);
                  if (t instanceof ArrayBuffer)
                    return Np(new Uint8Array(t), void 0);
                  if (t instanceof ReadableStream) return t.getReader();
                  throw new Error(
                    "Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream"
                  );
                })("string" == typeof e ? new TextEncoder().encode(e) : e)),
                new Sp(e, t));
            n._s.Ps(function () {
              return y(i, void 0, void 0, function () {
                var e;
                return v(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (e = dp), [4, oy(n)];
                    case 1:
                      return e.apply(void 0, [t.sent(), o, r]), [2];
                  }
                });
              });
            });
          })(n, e.I_, t),
          t
        );
        var e, s, n;
      }
      function Eg(t) {
        var e = this,
          n = this.d_,
          t = t;
        return (function (n, r) {
          var t = this;
          return n._s.enqueue(function () {
            return y(t, void 0, void 0, function () {
              var e;
              return v(this, function (t) {
                switch (t.label) {
                  case 0:
                    return (
                      (e = function (t, e) {
                        var n = t;
                        return n.persistence.runTransaction(
                          "Get named query",
                          "readonly",
                          function (t) {
                            return n.wo.Ms(t, e);
                          }
                        );
                      }),
                      [4, ry(n)]
                    );
                  case 1:
                    return [2, e.apply(void 0, [t.sent(), r])];
                }
              });
            });
          });
        })(gy((n = Fp(n, dy))), t)
          .then(function (t) {
            return t ? new Yp(n, null, t.query) : null;
          })
          .then(function (t) {
            return t ? new sg(e, t) : null;
          });
      }
      var Ig =
        ((Tg.prototype.setInstantiationMode = function (t) {
          return (this.instantiationMode = t), this;
        }),
        (Tg.prototype.setMultipleInstances = function (t) {
          return (this.multipleInstances = t), this;
        }),
        (Tg.prototype.setServiceProps = function (t) {
          return (this.serviceProps = t), this;
        }),
        Tg);
      function Tg(t, e, n) {
        (this.name = t),
          (this.instanceFactory = e),
          (this.type = n),
          (this.multipleInstances = !1),
          (this.serviceProps = {}),
          (this.instantiationMode = "LAZY");
      }
      var Ng,
        Ag,
        Sg = {
          Firestore: kv,
          GeoPoint: id,
          Timestamp: ci,
          Blob: Dv,
          Transaction: Fv,
          WriteBatch: qv,
          DocumentReference: Yv,
          DocumentSnapshot: ig,
          Query: sg,
          QueryDocumentSnapshot: og,
          QuerySnapshot: ag,
          CollectionReference: cg,
          FieldPath: Ie,
          FieldValue: o,
          setLogLevel: function (t) {
            Ar.setLogLevel(t);
          },
          CACHE_SIZE_UNLIMITED: -1,
        };
      (Ng = e.default).INTERNAL.registerComponent(
        new Ig(
          "firestore",
          function (t) {
            var e = t.getProvider("app").getImmediate();
            return (
              (e = e),
              (t = t.getProvider("auth-internal")),
              new kv(e, new dy(e, t), new Ov())
            );
          },
          "PUBLIC"
        ).setServiceProps(Object.assign({}, Sg))
      ),
        Ng.registerVersion("@firebase/firestore", "2.1.7"),
        ((Ag = kv).prototype.loadBundle = _g),
        (Ag.prototype.namedQuery = Eg);
    }.apply(this, arguments));
  } catch (t) {
    throw (
      (console.error(t),
      new Error(
        "Cannot instantiate firebase-firestore.js - be sure to load firebase-app.js first."
      ))
    );
  }
});
//# sourceMappingURL=firebase-firestore.js.map

firebase.initializeApp({
  apiKey: "AIzaSyBMRrXzMzuXoUmGHOwtkwqHKZ0RphIOSC4",
  authDomain: "scribliiowords.firebaseapp.com",
  projectId: "scribliiowords",
});
const firestore = firebase.firestore();

console.log(firestore);

let button;
let buttonSet = false;
setInterval(() => {
  if (!buttonSet) {
    let box = document.querySelector("div.checkbox");
    let button = document.createElement("button");
    button.innerText = "Add Custom Words";
    box.appendChild(button);
    buttonSet = true;

    button.addEventListener("click", (e) => {
      console.log("button clicked");

      let customWordsCheckbox = document.getElementById(
        "lobbyCustomWordsExclusive"
      );

      const collection = firestore.collection("WordsCollection");
      const wordDocument = collection.doc("WordDocument");

      wordDocument.get().then((doc) => {
        const words = doc.get("Words");

        let customWordArea = document.getElementById("lobbySetCustomWords");
        customWordArea.value = words.join(",");
        customWordArea.style.display = "none";
      });
    });
  }
}, 2000);
