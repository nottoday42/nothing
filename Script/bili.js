console.log("\uD83D\uDCFA BiliBili: ⚙️ Enhanced"),
  console.log("response.bundle.js"),
  console.log("Version: 0.5.10"),
  console.log("Date: 2024/12/10 15:12:52"),
  (() => {
    "use strict";
    let e, t, i, a, n;
    var o = {},
      s = {};
    function r(e) {
      var t = s[e];
      if (void 0 !== t) return t.exports;
      var i = (s[e] = { exports: {} });
      return o[e](i, i.exports, r), i.exports;
    }
    (r.rv = function () {
      return "1.1.6";
    }),
      (r.ruid = "bundler=rspack@1.1.6");
    let d = (() => {
      let e = Object.keys(globalThis);
      switch (!0) {
        case e.includes("$task"):
          return "Quantumult X";
        case e.includes("$loon"):
          return "Loon";
        case e.includes("$rocket"):
          return "Shadowrocket";
        case "undefined" != typeof module:
          return "Node.js";
        case e.includes("Egern"):
          return "Egern";
        case e.includes("$environment"):
          if ($environment["surge-version"]) return "Surge";
          if ($environment["stash-version"]) return "Stash";
          return;
        default:
          return;
      }
    })();
    class l {
      static #e = new Map([]);
      static #t = [];
      static #i = new Map([]);
      static clear = () => {};
      static count = (e = "default") => {
        switch (l.#e.has(e)) {
          case !0:
            l.#e.set(e, l.#e.get(e) + 1);
            break;
          case !1:
            l.#e.set(e, 0);
        }
        l.log(`${e}: ${l.#e.get(e)}`);
      };
      static countReset = (e = "default") => {
        switch (l.#e.has(e)) {
          case !0:
            l.#e.set(e, 0), l.log(`${e}: ${l.#e.get(e)}`);
            break;
          case !1:
            l.warn(`Counter "${e}" doesn’t exist`);
        }
      };
      static debug = (...e) => {
        !(l.#a < 4) && ((e = e.map((e) => `🅱️ ${e}`)), l.log(...e));
      };
      static error(...e) {
        if (!(l.#a < 1)) {
          switch (d) {
            case "Surge":
            case "Loon":
            case "Stash":
            case "Egern":
            case "Shadowrocket":
            case "Quantumult X":
            default:
              e = e.map((e) => `❌ ${e}`);
              break;
            case "Node.js":
              e = e.map((e) => `❌ ${e.stack}`);
          }
          l.log(...e);
        }
      }
      static exception = (...e) => l.error(...e);
      static group = (e) => l.#t.unshift(e);
      static groupEnd = () => l.#t.shift();
      static info(...e) {
        !(l.#a < 3) && ((e = e.map((e) => `ℹ️ ${e}`)), l.log(...e));
      }
      static #a = 3;
      static get logLevel() {
        switch (l.#a) {
          case 0:
            return "OFF";
          case 1:
            return "ERROR";
          case 2:
            return "WARN";
          case 3:
          default:
            return "INFO";
          case 4:
            return "DEBUG";
          case 5:
            return "ALL";
        }
      }
      static set logLevel(e) {
        switch (typeof e) {
          case "string":
            e = e.toLowerCase();
            break;
          case "number":
            break;
          default:
            e = "warn";
        }
        switch (e) {
          case 0:
          case "off":
            l.#a = 0;
            break;
          case 1:
          case "error":
            l.#a = 1;
            break;
          case 2:
          case "warn":
          case "warning":
          default:
            l.#a = 2;
            break;
          case 3:
          case "info":
            l.#a = 3;
            break;
          case 4:
          case "debug":
            l.#a = 4;
            break;
          case 5:
          case "all":
            l.#a = 5;
        }
      }
      static log = (...e) => {
        0 !== l.#a &&
          ((e = e.map((e) => {
            switch (typeof e) {
              case "object":
                e = JSON.stringify(e);
                break;
              case "bigint":
              case "number":
              case "boolean":
              case "string":
                e = e.toString();
            }
            return e;
          })),
          l.#t.forEach((t) => {
            (e = e.map((e) => `  ${e}`)).unshift(`▼ ${t}:`);
          }),
          console.log((e = ["", ...e]).join("\n")));
      };
      static time = (e = "default") => l.#i.set(e, Date.now());
      static timeEnd = (e = "default") => l.#i.delete(e);
      static timeLog = (e = "default") => {
        let t = l.#i.get(e);
        t
          ? l.log(`${e}: ${Date.now() - t}ms`)
          : l.warn(`Timer "${e}" doesn’t exist`);
      };
      static warn(...e) {
        !(l.#a < 2) && ((e = e.map((e) => `⚠️ ${e}`)), l.log(...e));
      }
    }
    class c {
      static get(e = {}, t = "", i) {
        !Array.isArray(t) && (t = c.toPath(t));
        let a = t.reduce((e, t) => Object(e)[t], e);
        return void 0 === a ? i : a;
      }
      static set(e, t, i) {
        return (
          !Array.isArray(t) && (t = c.toPath(t)),
          (t
            .slice(0, -1)
            .reduce(
              (e, i, a) =>
                Object(e[i]) === e[i]
                  ? e[i]
                  : (e[i] = /^\d+$/.test(t[a + 1]) ? [] : {}),
              e
            )[t[t.length - 1]] = i),
          e
        );
      }
      static unset(e = {}, t = "") {
        return (
          !Array.isArray(t) && (t = c.toPath(t)),
          t.reduce(
            (e, i, a) =>
              a === t.length - 1 ? (delete e[i], !0) : Object(e)[i],
            e
          )
        );
      }
      static toPath(e) {
        return e
          .replace(/\[(\d+)\]/g, ".$1")
          .split(".")
          .filter(Boolean);
      }
      static escape(e) {
        let t = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        };
        return e.replace(/[&<>"']/g, (e) => t[e]);
      }
      static unescape(e) {
        let t = {
          "&amp;": "&",
          "&lt;": "<",
          "&gt;": ">",
          "&quot;": '"',
          "&#39;": "'",
        };
        return e.replace(/&amp;|&lt;|&gt;|&quot;|&#39;/g, (e) => t[e]);
      }
    }
    let h = {
        100: "HTTP/1.1 100 Continue",
        101: "HTTP/1.1 101 Switching Protocols",
        102: "HTTP/1.1 102 Processing",
        103: "HTTP/1.1 103 Early Hints",
        200: "HTTP/1.1 200 OK",
        201: "HTTP/1.1 201 Created",
        202: "HTTP/1.1 202 Accepted",
        203: "HTTP/1.1 203 Non-Authoritative Information",
        204: "HTTP/1.1 204 No Content",
        205: "HTTP/1.1 205 Reset Content",
        206: "HTTP/1.1 206 Partial Content",
        207: "HTTP/1.1 207 Multi-Status",
        208: "HTTP/1.1 208 Already Reported",
        226: "HTTP/1.1 226 IM Used",
        300: "HTTP/1.1 300 Multiple Choices",
        301: "HTTP/1.1 301 Moved Permanently",
        302: "HTTP/1.1 302 Found",
        304: "HTTP/1.1 304 Not Modified",
        307: "HTTP/1.1 307 Temporary Redirect",
        308: "HTTP/1.1 308 Permanent Redirect",
        400: "HTTP/1.1 400 Bad Request",
        401: "HTTP/1.1 401 Unauthorized",
        402: "HTTP/1.1 402 Payment Required",
        403: "HTTP/1.1 403 Forbidden",
        404: "HTTP/1.1 404 Not Found",
        405: "HTTP/1.1 405 Method Not Allowed",
        406: "HTTP/1.1 406 Not Acceptable",
        407: "HTTP/1.1 407 Proxy Authentication Required",
        408: "HTTP/1.1 408 Request Timeout",
        409: "HTTP/1.1 409 Conflict",
        410: "HTTP/1.1 410 Gone",
        411: "HTTP/1.1 411 Length Required",
        412: "HTTP/1.1 412 Precondition Failed",
        413: "HTTP/1.1 413 Content Too Large",
        414: "HTTP/1.1 414 URI Too Long",
        415: "HTTP/1.1 415 Unsupported Media Type",
        416: "HTTP/1.1 416 Range Not Satisfiable",
        417: "HTTP/1.1 417 Expectation Failed",
        418: "HTTP/1.1 418 I'm a teapot",
        421: "HTTP/1.1 421 Misdirected Request",
        422: "HTTP/1.1 422 Unprocessable Entity",
        423: "HTTP/1.1 423 Locked",
        424: "HTTP/1.1 424 Failed Dependency",
        425: "HTTP/1.1 425 Too Early",
        426: "HTTP/1.1 426 Upgrade Required",
        428: "HTTP/1.1 428 Precondition Required",
        429: "HTTP/1.1 429 Too Many Requests",
        431: "HTTP/1.1 431 Request Header Fields Too Large",
        451: "HTTP/1.1 451 Unavailable For Legal Reasons",
        500: "HTTP/1.1 500 Internal Server Error",
        501: "HTTP/1.1 501 Not Implemented",
        502: "HTTP/1.1 502 Bad Gateway",
        503: "HTTP/1.1 503 Service Unavailable",
        504: "HTTP/1.1 504 Gateway Timeout",
        505: "HTTP/1.1 505 HTTP Version Not Supported",
        506: "HTTP/1.1 506 Variant Also Negotiates",
        507: "HTTP/1.1 507 Insufficient Storage",
        508: "HTTP/1.1 508 Loop Detected",
        510: "HTTP/1.1 510 Not Extended",
        511: "HTTP/1.1 511 Network Authentication Required",
      },
      m = (e) => {
        let t = {};
        switch (typeof e) {
          case void 0:
            break;
          case "string":
          case "number":
          case "boolean":
            switch ($app) {
              case "Surge":
              case "Stash":
              case "Egern":
              default:
                t.url = e;
                break;
              case "Loon":
              case "Shadowrocket":
                t.openUrl = e;
                break;
              case "Quantumult X":
                t["open-url"] = e;
              case "Node.js":
            }
            break;
          case "object": {
            let i = e.open || e["open-url"] || e.url || e.openUrl,
              a = e.copy || e["update-pasteboard"] || e.updatePasteboard,
              n = e.media || e["media-url"] || e.mediaUrl;
            switch ($app) {
              case "Surge":
              case "Stash":
              case "Egern":
              case "Shadowrocket":
              default:
                if (
                  (i && ((t.action = "open-url"), (t.url = i)),
                  a && ((t.action = "clipboard"), (t.text = a)),
                  n)
                )
                  switch (!0) {
                    case n.startsWith("http"):
                      t["media-url"] = n;
                      break;
                    case n.startsWith("data:"): {
                      let { MIME: i, Base64: a } = n.match(
                        /^data:(?<MIME>\w+\/\w+);base64,(?<Base64>.+)/
                      ).groups;
                      (t["media-base64"] = a),
                        (t["media-base64-mime"] = e.mime || i);
                      break;
                    }
                    default:
                      switch (((t["media-base64"] = n), !0)) {
                        case n.startsWith("CiVQREYt"):
                        case n.startsWith("JVBERi0"):
                          t["media-base64-mime"] = "application/pdf";
                          break;
                        case n.startsWith("R0lGODdh"):
                        case n.startsWith("R0lGODlh"):
                          t["media-base64-mime"] = "image/gif";
                          break;
                        case n.startsWith("iVBORw0KGgo"):
                          t["media-base64-mime"] = "image/png";
                          break;
                        case n.startsWith("/9j/"):
                          t["media-base64-mime"] = "image/jpg";
                          break;
                        case n.startsWith("Qk02U"):
                          t["media-base64-mime"] = "image/bmp";
                      }
                  }
                e["auto-dismiss"] && (t["auto-dismiss"] = e["auto-dismiss"]),
                  e.sound && (t.sound = e.sound);
                break;
              case "Loon":
                i && (t.openUrl = i), n?.startsWith("http") && (t.mediaUrl = n);
                break;
              case "Quantumult X":
                i && (t["open-url"] = i),
                  n?.startsWith("http") && (t["media-url"] = n),
                  a && (t["update-pasteboard"] = a);
              case "Node.js":
            }
            break;
          }
          default:
            Console.error(`不支持的通知参数类型: ${typeof e}`, "");
        }
        return t;
      };
    class p {
      static data = null;
      static dataFile = "box.dat";
      static #n = /^@(?<key>[^.]+)(?:\.(?<path>.*))?$/;
      static getItem(e, t = null) {
        let i = t;
        if (!0 === e.startsWith("@")) {
          let { key: t, path: a } = e.match(p.#n)?.groups;
          e = t;
          let n = p.getItem(e, {});
          "object" != typeof n && (n = {}), (i = c.get(n, a));
          try {
            i = JSON.parse(i);
          } catch (e) {}
        } else {
          switch (d) {
            case "Surge":
            case "Loon":
            case "Stash":
            case "Egern":
            case "Shadowrocket":
              i = $persistentStore.read(e);
              break;
            case "Quantumult X":
              i = $prefs.valueForKey(e);
              break;
            case "Node.js":
              (p.data = p.#o(p.dataFile)), (i = p.data?.[e]);
              break;
            default:
              i = p.data?.[e] || null;
          }
          try {
            i = JSON.parse(i);
          } catch (e) {}
        }
        return i ?? t;
      }
      static setItem(e = new String(), t = new String()) {
        let i = !1;
        if ("object" == typeof t) t = JSON.stringify(t);
        else t = String(t);
        if (!0 === e.startsWith("@")) {
          let { key: a, path: n } = e.match(p.#n)?.groups;
          e = a;
          let o = p.getItem(e, {});
          "object" != typeof o && (o = {}),
            c.set(o, n, t),
            (i = p.setItem(e, o));
        } else
          switch (d) {
            case "Surge":
            case "Loon":
            case "Stash":
            case "Egern":
            case "Shadowrocket":
              i = $persistentStore.write(t, e);
              break;
            case "Quantumult X":
              i = $prefs.setValueForKey(t, e);
              break;
            case "Node.js":
              (p.data = p.#o(p.dataFile)),
                (p.data[e] = t),
                p.#s(p.dataFile),
                (i = !0);
              break;
            default:
              i = p.data?.[e] || null;
          }
        return i;
      }
      static removeItem(e) {
        let t = !1;
        if (!0 === e.startsWith("@")) {
          let { key: i, path: a } = e.match(p.#n)?.groups;
          e = i;
          let n = p.getItem(e);
          "object" != typeof n && (n = {}),
            (keyValue = c.unset(n, a)),
            (t = p.setItem(e, n));
        } else
          switch (d) {
            case "Surge":
            case "Loon":
            case "Stash":
            case "Egern":
            case "Shadowrocket":
            case "Node.js":
              t = !1;
              break;
            case "Quantumult X":
              t = $prefs.removeValueForKey(e);
              break;
            default:
              t = !1;
          }
        return t;
      }
      static clear() {
        let e = !1;
        switch (d) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Egern":
          case "Shadowrocket":
          case "Node.js":
            e = !1;
            break;
          case "Quantumult X":
            e = $prefs.removeAllValues();
            break;
          default:
            e = !1;
        }
        return e;
      }
      static #o = (e) => {
        if ("Node.js" !== d) return {};
        {
          (this.fs = this.fs ? this.fs : require("node:fs")),
            (this.path = this.path ? this.path : require("node:path"));
          let t = this.path.resolve(e),
            i = this.path.resolve(process.cwd(), e),
            a = this.fs.existsSync(t),
            n = !a && this.fs.existsSync(i);
          if (!a && !n) return {};
          try {
            return JSON.parse(this.fs.readFileSync(a ? t : i));
          } catch (e) {
            return {};
          }
        }
      };
      static #s = (e = this.dataFile) => {
        if ("Node.js" === d) {
          (this.fs = this.fs ? this.fs : require("node:fs")),
            (this.path = this.path ? this.path : require("node:path"));
          let t = this.path.resolve(e),
            i = this.path.resolve(process.cwd(), e),
            a = this.fs.existsSync(t),
            n = !a && this.fs.existsSync(i),
            o = JSON.stringify(this.data);
          a
            ? this.fs.writeFileSync(t, o)
            : n
            ? this.fs.writeFileSync(i, o)
            : this.fs.writeFileSync(t, o);
        }
      };
    }
    function b(e) {
      let t = e.length;
      for (; --t >= 0; ) e[t] = 0;
    }
    let g = 286,
      f = 2 * g + 1,
      _ = new Uint8Array([
        0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4,
        5, 5, 5, 5, 0,
      ]),
      u = new Uint8Array([
        0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10,
        10, 11, 11, 12, 12, 13, 13,
      ]),
      y = new Uint8Array([
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7,
      ]),
      w = new Uint8Array([
        16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
      ]),
      v = Array((g + 2) * 2);
    b(v);
    let k = Array(60);
    b(k);
    let x = Array(512);
    b(x);
    let T = Array(256);
    b(T);
    let S = Array(29);
    b(S);
    let A = Array(30);
    function z(e, t, i, a, n) {
      (this.static_tree = e),
        (this.extra_bits = t),
        (this.extra_base = i),
        (this.elems = a),
        (this.max_length = n),
        (this.has_stree = e && e.length);
    }
    function R(e, t) {
      (this.dyn_tree = e), (this.max_code = 0), (this.stat_desc = t);
    }
    b(A);
    let E = (e) => (e < 256 ? x[e] : x[256 + (e >>> 7)]),
      U = (e, t) => {
        (e.pending_buf[e.pending++] = 255 & t),
          (e.pending_buf[e.pending++] = (t >>> 8) & 255);
      },
      P = (e, t, i) => {
        e.bi_valid > 16 - i
          ? ((e.bi_buf |= (t << e.bi_valid) & 65535),
            U(e, e.bi_buf),
            (e.bi_buf = t >> (16 - e.bi_valid)),
            (e.bi_valid += i - 16))
          : ((e.bi_buf |= (t << e.bi_valid) & 65535), (e.bi_valid += i));
      },
      H = (e, t, i) => {
        P(e, i[2 * t], i[2 * t + 1]);
      },
      C = (e, t) => {
        let i = 0;
        do (i |= 1 & e), (e >>>= 1), (i <<= 1);
        while (--t > 0);
        return i >>> 1;
      },
      I = (e) => {
        16 === e.bi_valid
          ? (U(e, e.bi_buf), (e.bi_buf = 0), (e.bi_valid = 0))
          : e.bi_valid >= 8 &&
            ((e.pending_buf[e.pending++] = 255 & e.bi_buf),
            (e.bi_buf >>= 8),
            (e.bi_valid -= 8));
      },
      M = (e, t) => {
        let i, a, n, o, s, r;
        let d = t.dyn_tree,
          l = t.max_code,
          c = t.stat_desc.static_tree,
          h = t.stat_desc.has_stree,
          m = t.stat_desc.extra_bits,
          p = t.stat_desc.extra_base,
          b = t.stat_desc.max_length,
          g = 0;
        for (o = 0; o <= 15; o++) e.bl_count[o] = 0;
        for (
          d[2 * e.heap[e.heap_max] + 1] = 0, i = e.heap_max + 1;
          i < f;
          i++
        ) {
          if (
            ((o = d[2 * d[2 * (a = e.heap[i]) + 1] + 1] + 1) > b &&
              ((o = b), g++),
            (d[2 * a + 1] = o),
            !(a > l))
          )
            e.bl_count[o]++,
              (s = 0),
              a >= p && (s = m[a - p]),
              (r = d[2 * a]),
              (e.opt_len += r * (o + s)),
              h && (e.static_len += r * (c[2 * a + 1] + s));
        }
        if (0 !== g) {
          do {
            for (o = b - 1; 0 === e.bl_count[o]; ) o--;
            e.bl_count[o]--,
              (e.bl_count[o + 1] += 2),
              e.bl_count[b]--,
              (g -= 2);
          } while (g > 0);
          for (o = b; 0 !== o; o--)
            for (a = e.bl_count[o]; 0 !== a; ) {
              if (!((n = e.heap[--i]) > l))
                d[2 * n + 1] !== o &&
                  ((e.opt_len += (o - d[2 * n + 1]) * d[2 * n]),
                  (d[2 * n + 1] = o)),
                  a--;
            }
        }
      },
      $ = (e, t, i) => {
        let a, n;
        let o = Array(16),
          s = 0;
        for (a = 1; a <= 15; a++) (s = (s + i[a - 1]) << 1), (o[a] = s);
        for (n = 0; n <= t; n++) {
          let t = e[2 * n + 1];
          if (0 !== t) e[2 * n] = C(o[t]++, t);
        }
      },
      N = () => {
        let a, n, o, s, r;
        let d = Array(16);
        for (s = 0, o = 0; s < 28; s++)
          for (a = 0, S[s] = o; a < 1 << _[s]; a++) T[o++] = s;
        for (T[o - 1] = s, r = 0, s = 0; s < 16; s++)
          for (a = 0, A[s] = r; a < 1 << u[s]; a++) x[r++] = s;
        for (r >>= 7; s < 30; s++)
          for (a = 0, A[s] = r << 7; a < 1 << (u[s] - 7); a++) x[256 + r++] = s;
        for (n = 0; n <= 15; n++) d[n] = 0;
        for (a = 0; a <= 143; ) (v[2 * a + 1] = 8), a++, d[8]++;
        for (; a <= 255; ) (v[2 * a + 1] = 9), a++, d[9]++;
        for (; a <= 279; ) (v[2 * a + 1] = 7), a++, d[7]++;
        for (; a <= 287; ) (v[2 * a + 1] = 8), a++, d[8]++;
        for ($(v, g + 1, d), a = 0; a < 30; a++)
          (k[2 * a + 1] = 5), (k[2 * a] = C(a, 5));
        (e = new z(v, _, 257, g, 15)),
          (t = new z(k, u, 0, 30, 15)),
          (i = new z([], y, 0, 19, 7));
      },
      B = (e) => {
        let t;
        for (t = 0; t < g; t++) e.dyn_ltree[2 * t] = 0;
        for (t = 0; t < 30; t++) e.dyn_dtree[2 * t] = 0;
        for (t = 0; t < 19; t++) e.bl_tree[2 * t] = 0;
        (e.dyn_ltree[512] = 1),
          (e.opt_len = e.static_len = 0),
          (e.sym_next = e.matches = 0);
      },
      O = (e) => {
        e.bi_valid > 8
          ? U(e, e.bi_buf)
          : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf),
          (e.bi_buf = 0),
          (e.bi_valid = 0);
      },
      D = (e, t, i, a) => {
        let n = 2 * t,
          o = 2 * i;
        return e[n] < e[o] || (e[n] === e[o] && a[t] <= a[i]);
      },
      L = (e, t, i) => {
        let a = e.heap[i],
          n = i << 1;
        for (
          ;
          n <= e.heap_len &&
          (n < e.heap_len && D(t, e.heap[n + 1], e.heap[n], e.depth) && n++,
          !D(t, a, e.heap[n], e.depth));

        ) {
          (e.heap[i] = e.heap[n]), (i = n), (n <<= 1);
        }
        e.heap[i] = a;
      },
      F = (e, t, i) => {
        let a, n, o, s;
        let r = 0;
        if (0 !== e.sym_next)
          do
            (a =
              (255 & e.pending_buf[e.sym_buf + r++]) +
              ((255 & e.pending_buf[e.sym_buf + r++]) << 8)),
              (n = e.pending_buf[e.sym_buf + r++]),
              0 === a
                ? H(e, n, t)
                : (H(e, (o = T[n]) + 256 + 1, t),
                  0 !== (s = _[o]) && P(e, (n -= S[o]), s),
                  H(e, (o = E(--a)), i),
                  0 !== (s = u[o]) && P(e, (a -= A[o]), s));
          while (r < e.sym_next);
        H(e, 256, t);
      },
      j = (e, t) => {
        let i, a, n;
        let o = t.dyn_tree,
          s = t.stat_desc.static_tree,
          r = t.stat_desc.has_stree,
          d = t.stat_desc.elems,
          l = -1;
        for (i = 0, e.heap_len = 0, e.heap_max = f; i < d; i++)
          0 !== o[2 * i]
            ? ((e.heap[++e.heap_len] = l = i), (e.depth[i] = 0))
            : (o[2 * i + 1] = 0);
        for (; e.heap_len < 2; )
          (o[2 * (n = e.heap[++e.heap_len] = l < 2 ? ++l : 0)] = 1),
            (e.depth[n] = 0),
            e.opt_len--,
            r && (e.static_len -= s[2 * n + 1]);
        for (t.max_code = l, i = e.heap_len >> 1; i >= 1; i--) L(e, o, i);
        n = d;
        do
          (i = e.heap[1]),
            (e.heap[1] = e.heap[e.heap_len--]),
            L(e, o, 1),
            (a = e.heap[1]),
            (e.heap[--e.heap_max] = i),
            (e.heap[--e.heap_max] = a),
            (o[2 * n] = o[2 * i] + o[2 * a]),
            (e.depth[n] =
              (e.depth[i] >= e.depth[a] ? e.depth[i] : e.depth[a]) + 1),
            (o[2 * i + 1] = o[2 * a + 1] = n),
            (e.heap[1] = n++),
            L(e, o, 1);
        while (e.heap_len >= 2);
        (e.heap[--e.heap_max] = e.heap[1]), M(e, t), $(o, l, e.bl_count);
      },
      Z = (e, t, i) => {
        let a, n;
        let o = -1,
          s = t[1],
          r = 0,
          d = 7,
          l = 4;
        for (
          0 === s && ((d = 138), (l = 3)), t[(i + 1) * 2 + 1] = 65535, a = 0;
          a <= i;
          a++
        ) {
          if (((n = s), (s = t[(a + 1) * 2 + 1]), !(++r < d) || n !== s)) {
            r < l
              ? (e.bl_tree[2 * n] += r)
              : 0 !== n
              ? (n !== o && e.bl_tree[2 * n]++, e.bl_tree[32]++)
              : r <= 10
              ? e.bl_tree[34]++
              : e.bl_tree[36]++;
            (r = 0),
              (o = n),
              0 === s
                ? ((d = 138), (l = 3))
                : n === s
                ? ((d = 6), (l = 3))
                : ((d = 7), (l = 4));
          }
        }
      },
      W = (e, t, i) => {
        let a, n;
        let o = -1,
          s = t[1],
          r = 0,
          d = 7,
          l = 4;
        for (0 === s && ((d = 138), (l = 3)), a = 0; a <= i; a++) {
          if (((n = s), (s = t[(a + 1) * 2 + 1]), !(++r < d) || n !== s)) {
            if (r < l)
              do H(e, n, e.bl_tree);
              while (0 != --r);
            else
              0 !== n
                ? (n !== o && (H(e, n, e.bl_tree), r--),
                  H(e, 16, e.bl_tree),
                  P(e, r - 3, 2))
                : r <= 10
                ? (H(e, 17, e.bl_tree), P(e, r - 3, 3))
                : (H(e, 18, e.bl_tree), P(e, r - 11, 7));
            (r = 0),
              (o = n),
              0 === s
                ? ((d = 138), (l = 3))
                : n === s
                ? ((d = 6), (l = 3))
                : ((d = 7), (l = 4));
          }
        }
      },
      q = (e) => {
        let t;
        for (
          Z(e, e.dyn_ltree, e.l_desc.max_code),
            Z(e, e.dyn_dtree, e.d_desc.max_code),
            j(e, e.bl_desc),
            t = 18;
          t >= 3 && 0 === e.bl_tree[2 * w[t] + 1];
          t--
        );
        return (e.opt_len += 3 * (t + 1) + 5 + 5 + 4), t;
      },
      V = (e, t, i, a) => {
        let n;
        for (
          P(e, t - 257, 5), P(e, i - 1, 5), P(e, a - 4, 4), n = 0;
          n < a;
          n++
        )
          P(e, e.bl_tree[2 * w[n] + 1], 3);
        W(e, e.dyn_ltree, t - 1), W(e, e.dyn_dtree, i - 1);
      },
      J = (e) => {
        let t,
          i = 0xf3ffc07f;
        for (t = 0; t <= 31; t++, i >>>= 1)
          if (1 & i && 0 !== e.dyn_ltree[2 * t]) return 0;
        if (
          0 !== e.dyn_ltree[18] ||
          0 !== e.dyn_ltree[20] ||
          0 !== e.dyn_ltree[26]
        )
          return 1;
        for (t = 32; t < 256; t++) if (0 !== e.dyn_ltree[2 * t]) return 1;
        return 0;
      },
      X = !1,
      G = (e, t, i, a) => {
        P(e, 0 + (a ? 1 : 0), 3),
          O(e),
          U(e, i),
          U(e, ~i),
          i && e.pending_buf.set(e.window.subarray(t, t + i), e.pending),
          (e.pending += i);
      };
    var K = {
        _tr_init: (a) => {
          !X && (N(), (X = !0)),
            (a.l_desc = new R(a.dyn_ltree, e)),
            (a.d_desc = new R(a.dyn_dtree, t)),
            (a.bl_desc = new R(a.bl_tree, i)),
            (a.bi_buf = 0),
            (a.bi_valid = 0),
            B(a);
        },
        _tr_stored_block: G,
        _tr_flush_block: (e, t, i, a) => {
          let n, o;
          let s = 0;
          e.level > 0
            ? (2 === e.strm.data_type && (e.strm.data_type = J(e)),
              j(e, e.l_desc),
              j(e, e.d_desc),
              (s = q(e)),
              (n = (e.opt_len + 3 + 7) >>> 3),
              (o = (e.static_len + 3 + 7) >>> 3) <= n && (n = o))
            : (n = o = i + 5),
            i + 4 <= n && -1 !== t
              ? G(e, t, i, a)
              : 4 === e.strategy || o === n
              ? (P(e, 2 + (a ? 1 : 0), 3), F(e, v, k))
              : (P(e, 4 + (a ? 1 : 0), 3),
                V(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, s + 1),
                F(e, e.dyn_ltree, e.dyn_dtree)),
            B(e),
            a && O(e);
        },
        _tr_tally: (e, t, i) => (
          (e.pending_buf[e.sym_buf + e.sym_next++] = t),
          (e.pending_buf[e.sym_buf + e.sym_next++] = t >> 8),
          (e.pending_buf[e.sym_buf + e.sym_next++] = i),
          0 === t
            ? e.dyn_ltree[2 * i]++
            : (e.matches++,
              t--,
              e.dyn_ltree[(T[i] + 256 + 1) * 2]++,
              e.dyn_dtree[2 * E(t)]++),
          e.sym_next === e.sym_end
        ),
        _tr_align: (e) => {
          P(e, 2, 3), H(e, 256, v), I(e);
        },
      },
      Q = (e, t, i, a) => {
        let n = (65535 & e) | 0,
          o = ((e >>> 16) & 65535) | 0,
          s = 0;
        for (; 0 !== i; ) {
          (s = i > 2e3 ? 2e3 : i), (i -= s);
          do o = (o + (n = (n + t[a++]) | 0)) | 0;
          while (--s);
          (n %= 65521), (o %= 65521);
        }
        return n | (o << 16) | 0;
      };
    let Y = new Uint32Array(
      (() => {
        let e,
          t = [];
        for (var i = 0; i < 256; i++) {
          e = i;
          for (var a = 0; a < 8; a++)
            e = 1 & e ? 0xedb88320 ^ (e >>> 1) : e >>> 1;
          t[i] = e;
        }
        return t;
      })()
    );
    var ee = (e, t, i, a) => {
        let n = a + i;
        e ^= -1;
        for (let i = a; i < n; i++) e = (e >>> 8) ^ Y[(e ^ t[i]) & 255];
        return -1 ^ e;
      },
      et = {
        2: "need dictionary",
        1: "stream end",
        0: "",
        "-1": "file error",
        "-2": "stream error",
        "-3": "data error",
        "-4": "insufficient memory",
        "-5": "buffer error",
        "-6": "incompatible version",
      },
      ei = {
        Z_NO_FLUSH: 0,
        Z_PARTIAL_FLUSH: 1,
        Z_SYNC_FLUSH: 2,
        Z_FULL_FLUSH: 3,
        Z_FINISH: 4,
        Z_BLOCK: 5,
        Z_TREES: 6,
        Z_OK: 0,
        Z_STREAM_END: 1,
        Z_NEED_DICT: 2,
        Z_ERRNO: -1,
        Z_STREAM_ERROR: -2,
        Z_DATA_ERROR: -3,
        Z_MEM_ERROR: -4,
        Z_BUF_ERROR: -5,
        Z_NO_COMPRESSION: 0,
        Z_BEST_SPEED: 1,
        Z_BEST_COMPRESSION: 9,
        Z_DEFAULT_COMPRESSION: -1,
        Z_FILTERED: 1,
        Z_HUFFMAN_ONLY: 2,
        Z_RLE: 3,
        Z_FIXED: 4,
        Z_DEFAULT_STRATEGY: 0,
        Z_BINARY: 0,
        Z_TEXT: 1,
        Z_UNKNOWN: 2,
        Z_DEFLATED: 8,
      };
    let {
        _tr_init: ea,
        _tr_stored_block: en,
        _tr_flush_block: eo,
        _tr_tally: es,
        _tr_align: er,
      } = K,
      {
        Z_NO_FLUSH: ed,
        Z_PARTIAL_FLUSH: el,
        Z_FULL_FLUSH: ec,
        Z_FINISH: eh,
        Z_BLOCK: em,
        Z_OK: ep,
        Z_STREAM_END: eb,
        Z_STREAM_ERROR: eg,
        Z_DATA_ERROR: ef,
        Z_BUF_ERROR: e_,
        Z_DEFAULT_COMPRESSION: eu,
        Z_FILTERED: ey,
        Z_HUFFMAN_ONLY: ew,
        Z_RLE: ev,
        Z_FIXED: ek,
        Z_DEFAULT_STRATEGY: ex,
        Z_UNKNOWN: eT,
        Z_DEFLATED: eS,
      } = ei,
      eA = 286,
      ez = 2 * eA + 1,
      eR = 262,
      eE = (e, t) => ((e.msg = et[t]), t),
      eU = (e) => 2 * e - (e > 4 ? 9 : 0),
      eP = (e) => {
        let t = e.length;
        for (; --t >= 0; ) e[t] = 0;
      },
      eH = (e) => {
        let t, i, a;
        let n = e.w_size;
        a = t = e.hash_size;
        do (i = e.head[--a]), (e.head[a] = i >= n ? i - n : 0);
        while (--t);
        a = t = n;
        do (i = e.prev[--a]), (e.prev[a] = i >= n ? i - n : 0);
        while (--t);
      },
      eC = (e, t, i) => ((t << e.hash_shift) ^ i) & e.hash_mask,
      eI = (e) => {
        let t = e.state,
          i = t.pending;
        if ((i > e.avail_out && (i = e.avail_out), 0 !== i))
          e.output.set(
            t.pending_buf.subarray(t.pending_out, t.pending_out + i),
            e.next_out
          ),
            (e.next_out += i),
            (t.pending_out += i),
            (e.total_out += i),
            (e.avail_out -= i),
            (t.pending -= i),
            0 === t.pending && (t.pending_out = 0);
      },
      eM = (e, t) => {
        eo(
          e,
          e.block_start >= 0 ? e.block_start : -1,
          e.strstart - e.block_start,
          t
        ),
          (e.block_start = e.strstart),
          eI(e.strm);
      },
      e$ = (e, t) => {
        e.pending_buf[e.pending++] = t;
      },
      eN = (e, t) => {
        (e.pending_buf[e.pending++] = (t >>> 8) & 255),
          (e.pending_buf[e.pending++] = 255 & t);
      },
      eB = (e, t, i, a) => {
        let n = e.avail_in;
        return (n > a && (n = a), 0 === n)
          ? 0
          : ((e.avail_in -= n),
            t.set(e.input.subarray(e.next_in, e.next_in + n), i),
            1 === e.state.wrap
              ? (e.adler = Q(e.adler, t, n, i))
              : 2 === e.state.wrap && (e.adler = ee(e.adler, t, n, i)),
            (e.next_in += n),
            (e.total_in += n),
            n);
      },
      eO = (e, t) => {
        let i,
          a,
          n = e.max_chain_length,
          o = e.strstart,
          s = e.prev_length,
          r = e.nice_match,
          d = e.strstart > e.w_size - eR ? e.strstart - (e.w_size - eR) : 0,
          l = e.window,
          c = e.w_mask,
          h = e.prev,
          m = e.strstart + 258,
          p = l[o + s - 1],
          b = l[o + s];
        e.prev_length >= e.good_match && (n >>= 2),
          r > e.lookahead && (r = e.lookahead);
        do {
          if (
            l[(i = t) + s] !== b ||
            l[i + s - 1] !== p ||
            l[i] !== l[o] ||
            l[++i] !== l[o + 1]
          )
            continue;
          (o += 2), i++;
          do;
          while (
            l[++o] === l[++i] &&
            l[++o] === l[++i] &&
            l[++o] === l[++i] &&
            l[++o] === l[++i] &&
            l[++o] === l[++i] &&
            l[++o] === l[++i] &&
            l[++o] === l[++i] &&
            l[++o] === l[++i] &&
            o < m
          );
          if (((a = 258 - (m - o)), (o = m - 258), a > s)) {
            if (((e.match_start = t), (s = a), a >= r)) break;
            (p = l[o + s - 1]), (b = l[o + s]);
          }
        } while ((t = h[t & c]) > d && 0 != --n);
        return s <= e.lookahead ? s : e.lookahead;
      },
      eD = (e) => {
        let t, i, a;
        let n = e.w_size;
        do {
          if (
            ((i = e.window_size - e.lookahead - e.strstart),
            e.strstart >= n + (n - eR) &&
              (e.window.set(e.window.subarray(n, n + n - i), 0),
              (e.match_start -= n),
              (e.strstart -= n),
              (e.block_start -= n),
              e.insert > e.strstart && (e.insert = e.strstart),
              eH(e),
              (i += n)),
            0 === e.strm.avail_in)
          )
            break;
          if (
            ((t = eB(e.strm, e.window, e.strstart + e.lookahead, i)),
            (e.lookahead += t),
            e.lookahead + e.insert >= 3)
          )
            for (
              a = e.strstart - e.insert,
                e.ins_h = e.window[a],
                e.ins_h = eC(e, e.ins_h, e.window[a + 1]);
              e.insert &&
              ((e.ins_h = eC(e, e.ins_h, e.window[a + 3 - 1])),
              (e.prev[a & e.w_mask] = e.head[e.ins_h]),
              (e.head[e.ins_h] = a),
              a++,
              e.insert--,
              !(e.lookahead + e.insert < 3));

            );
        } while (e.lookahead < eR && 0 !== e.strm.avail_in);
      },
      eL = (e, t) => {
        let i =
            e.pending_buf_size - 5 > e.w_size
              ? e.w_size
              : e.pending_buf_size - 5,
          a,
          n,
          o,
          s = 0,
          r = e.strm.avail_in;
        do {
          if (((a = 65535), (o = (e.bi_valid + 42) >> 3), e.strm.avail_out < o))
            break;
          if (
            ((o = e.strm.avail_out - o),
            a > (n = e.strstart - e.block_start) + e.strm.avail_in &&
              (a = n + e.strm.avail_in),
            a > o && (a = o),
            a < i &&
              ((0 === a && t !== eh) || t === ed || a !== n + e.strm.avail_in))
          )
            break;
          (s = t === eh && a === n + e.strm.avail_in ? 1 : 0),
            en(e, 0, 0, s),
            (e.pending_buf[e.pending - 4] = a),
            (e.pending_buf[e.pending - 3] = a >> 8),
            (e.pending_buf[e.pending - 2] = ~a),
            (e.pending_buf[e.pending - 1] = ~a >> 8),
            eI(e.strm),
            n &&
              (n > a && (n = a),
              e.strm.output.set(
                e.window.subarray(e.block_start, e.block_start + n),
                e.strm.next_out
              ),
              (e.strm.next_out += n),
              (e.strm.avail_out -= n),
              (e.strm.total_out += n),
              (e.block_start += n),
              (a -= n)),
            a &&
              (eB(e.strm, e.strm.output, e.strm.next_out, a),
              (e.strm.next_out += a),
              (e.strm.avail_out -= a),
              (e.strm.total_out += a));
        } while (0 === s);
        return ((r -= e.strm.avail_in) &&
          (r >= e.w_size
            ? ((e.matches = 2),
              e.window.set(
                e.strm.input.subarray(
                  e.strm.next_in - e.w_size,
                  e.strm.next_in
                ),
                0
              ),
              (e.strstart = e.w_size),
              (e.insert = e.strstart))
            : (e.window_size - e.strstart <= r &&
                ((e.strstart -= e.w_size),
                e.window.set(
                  e.window.subarray(e.w_size, e.w_size + e.strstart),
                  0
                ),
                e.matches < 2 && e.matches++,
                e.insert > e.strstart && (e.insert = e.strstart)),
              e.window.set(
                e.strm.input.subarray(e.strm.next_in - r, e.strm.next_in),
                e.strstart
              ),
              (e.strstart += r),
              (e.insert += r > e.w_size - e.insert ? e.w_size - e.insert : r)),
          (e.block_start = e.strstart)),
        e.high_water < e.strstart && (e.high_water = e.strstart),
        s)
          ? 4
          : t !== ed &&
            t !== eh &&
            0 === e.strm.avail_in &&
            e.strstart === e.block_start
          ? 2
          : ((o = e.window_size - e.strstart),
            e.strm.avail_in > o &&
              e.block_start >= e.w_size &&
              ((e.block_start -= e.w_size),
              (e.strstart -= e.w_size),
              e.window.set(
                e.window.subarray(e.w_size, e.w_size + e.strstart),
                0
              ),
              e.matches < 2 && e.matches++,
              (o += e.w_size),
              e.insert > e.strstart && (e.insert = e.strstart)),
            o > e.strm.avail_in && (o = e.strm.avail_in),
            o &&
              (eB(e.strm, e.window, e.strstart, o),
              (e.strstart += o),
              (e.insert += o > e.w_size - e.insert ? e.w_size - e.insert : o)),
            e.high_water < e.strstart && (e.high_water = e.strstart),
            (o = (e.bi_valid + 42) >> 3),
            (i =
              (o =
                e.pending_buf_size - o > 65535
                  ? 65535
                  : e.pending_buf_size - o) > e.w_size
                ? e.w_size
                : o),
            ((n = e.strstart - e.block_start) >= i ||
              ((n || t === eh) &&
                t !== ed &&
                0 === e.strm.avail_in &&
                n <= o)) &&
              ((a = n > o ? o : n),
              (s = t === eh && 0 === e.strm.avail_in && a === n ? 1 : 0),
              en(e, e.block_start, a, s),
              (e.block_start += a),
              eI(e.strm)),
            s ? 3 : 1);
      },
      eF = (e, t) => {
        let i, a;
        for (;;) {
          if (e.lookahead < eR) {
            if ((eD(e), e.lookahead < eR && t === ed)) return 1;
            if (0 === e.lookahead) break;
          }
          if (
            ((i = 0),
            e.lookahead >= 3 &&
              ((e.ins_h = eC(e, e.ins_h, e.window[e.strstart + 3 - 1])),
              (i = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
              (e.head[e.ins_h] = e.strstart)),
            0 !== i &&
              e.strstart - i <= e.w_size - eR &&
              (e.match_length = eO(e, i)),
            e.match_length >= 3)
          ) {
            if (
              ((a = es(e, e.strstart - e.match_start, e.match_length - 3)),
              (e.lookahead -= e.match_length),
              e.match_length <= e.max_lazy_match && e.lookahead >= 3)
            ) {
              e.match_length--;
              do
                e.strstart++,
                  (e.ins_h = eC(e, e.ins_h, e.window[e.strstart + 3 - 1])),
                  (i = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
                  (e.head[e.ins_h] = e.strstart);
              while (0 != --e.match_length);
              e.strstart++;
            } else
              (e.strstart += e.match_length),
                (e.match_length = 0),
                (e.ins_h = e.window[e.strstart]),
                (e.ins_h = eC(e, e.ins_h, e.window[e.strstart + 1]));
          } else
            (a = es(e, 0, e.window[e.strstart])), e.lookahead--, e.strstart++;
          if (a && (eM(e, !1), 0 === e.strm.avail_out)) return 1;
        }
        if (((e.insert = e.strstart < 2 ? e.strstart : 2), t === eh))
          return (eM(e, !0), 0 === e.strm.avail_out) ? 3 : 4;
        return e.sym_next && (eM(e, !1), 0 === e.strm.avail_out) ? 1 : 2;
      },
      ej = (e, t) => {
        let i, a, n;
        for (;;) {
          if (e.lookahead < eR) {
            if ((eD(e), e.lookahead < eR && t === ed)) return 1;
            if (0 === e.lookahead) break;
          }
          if (
            ((i = 0),
            e.lookahead >= 3 &&
              ((e.ins_h = eC(e, e.ins_h, e.window[e.strstart + 3 - 1])),
              (i = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
              (e.head[e.ins_h] = e.strstart)),
            (e.prev_length = e.match_length),
            (e.prev_match = e.match_start),
            (e.match_length = 2),
            0 !== i &&
              e.prev_length < e.max_lazy_match &&
              e.strstart - i <= e.w_size - eR &&
              ((e.match_length = eO(e, i)),
              e.match_length <= 5 &&
                (e.strategy === ey ||
                  (3 === e.match_length &&
                    e.strstart - e.match_start > 4096)) &&
                (e.match_length = 2)),
            e.prev_length >= 3 && e.match_length <= e.prev_length)
          ) {
            (n = e.strstart + e.lookahead - 3),
              (a = es(e, e.strstart - 1 - e.prev_match, e.prev_length - 3)),
              (e.lookahead -= e.prev_length - 1),
              (e.prev_length -= 2);
            do
              ++e.strstart <= n &&
                ((e.ins_h = eC(e, e.ins_h, e.window[e.strstart + 3 - 1])),
                (i = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
                (e.head[e.ins_h] = e.strstart));
            while (0 != --e.prev_length);
            if (
              ((e.match_available = 0),
              (e.match_length = 2),
              e.strstart++,
              a && (eM(e, !1), 0 === e.strm.avail_out))
            )
              return 1;
          } else if (e.match_available) {
            if (
              ((a = es(e, 0, e.window[e.strstart - 1])) && eM(e, !1),
              e.strstart++,
              e.lookahead--,
              0 === e.strm.avail_out)
            )
              return 1;
          } else (e.match_available = 1), e.strstart++, e.lookahead--;
        }
        if (
          (e.match_available &&
            ((a = es(e, 0, e.window[e.strstart - 1])), (e.match_available = 0)),
          (e.insert = e.strstart < 2 ? e.strstart : 2),
          t === eh)
        )
          return (eM(e, !0), 0 === e.strm.avail_out) ? 3 : 4;
        return e.sym_next && (eM(e, !1), 0 === e.strm.avail_out) ? 1 : 2;
      },
      eZ = (e, t) => {
        let i, a, n, o;
        let s = e.window;
        for (;;) {
          if (e.lookahead <= 258) {
            if ((eD(e), e.lookahead <= 258 && t === ed)) return 1;
            if (0 === e.lookahead) break;
          }
          if (
            ((e.match_length = 0),
            e.lookahead >= 3 &&
              e.strstart > 0 &&
              (a = s[(n = e.strstart - 1)]) === s[++n] &&
              a === s[++n] &&
              a === s[++n])
          ) {
            o = e.strstart + 258;
            do;
            while (
              a === s[++n] &&
              a === s[++n] &&
              a === s[++n] &&
              a === s[++n] &&
              a === s[++n] &&
              a === s[++n] &&
              a === s[++n] &&
              a === s[++n] &&
              n < o
            );
            (e.match_length = 258 - (o - n)),
              e.match_length > e.lookahead && (e.match_length = e.lookahead);
          }
          if (
            (e.match_length >= 3
              ? ((i = es(e, 1, e.match_length - 3)),
                (e.lookahead -= e.match_length),
                (e.strstart += e.match_length),
                (e.match_length = 0))
              : ((i = es(e, 0, e.window[e.strstart])),
                e.lookahead--,
                e.strstart++),
            i && (eM(e, !1), 0 === e.strm.avail_out))
          )
            return 1;
        }
        if (((e.insert = 0), t === eh))
          return (eM(e, !0), 0 === e.strm.avail_out) ? 3 : 4;
        return e.sym_next && (eM(e, !1), 0 === e.strm.avail_out) ? 1 : 2;
      },
      eW = (e, t) => {
        let i;
        for (;;) {
          if (0 === e.lookahead && (eD(e), 0 === e.lookahead)) {
            if (t === ed) return 1;
            break;
          }
          if (
            ((e.match_length = 0),
            (i = es(e, 0, e.window[e.strstart])),
            e.lookahead--,
            e.strstart++,
            i && (eM(e, !1), 0 === e.strm.avail_out))
          )
            return 1;
        }
        if (((e.insert = 0), t === eh))
          return (eM(e, !0), 0 === e.strm.avail_out) ? 3 : 4;
        return e.sym_next && (eM(e, !1), 0 === e.strm.avail_out) ? 1 : 2;
      };
    function eq(e, t, i, a, n) {
      (this.good_length = e),
        (this.max_lazy = t),
        (this.nice_length = i),
        (this.max_chain = a),
        (this.func = n);
    }
    let eV = [
        new eq(0, 0, 0, 0, eL),
        new eq(4, 4, 8, 4, eF),
        new eq(4, 5, 16, 8, eF),
        new eq(4, 6, 32, 32, eF),
        new eq(4, 4, 16, 16, ej),
        new eq(8, 16, 32, 32, ej),
        new eq(8, 16, 128, 128, ej),
        new eq(8, 32, 128, 256, ej),
        new eq(32, 128, 258, 1024, ej),
        new eq(32, 258, 258, 4096, ej),
      ],
      eJ = (e) => {
        (e.window_size = 2 * e.w_size),
          eP(e.head),
          (e.max_lazy_match = eV[e.level].max_lazy),
          (e.good_match = eV[e.level].good_length),
          (e.nice_match = eV[e.level].nice_length),
          (e.max_chain_length = eV[e.level].max_chain),
          (e.strstart = 0),
          (e.block_start = 0),
          (e.lookahead = 0),
          (e.insert = 0),
          (e.match_length = e.prev_length = 2),
          (e.match_available = 0),
          (e.ins_h = 0);
      };
    function eX() {
      (this.strm = null),
        (this.status = 0),
        (this.pending_buf = null),
        (this.pending_buf_size = 0),
        (this.pending_out = 0),
        (this.pending = 0),
        (this.wrap = 0),
        (this.gzhead = null),
        (this.gzindex = 0),
        (this.method = eS),
        (this.last_flush = -1),
        (this.w_size = 0),
        (this.w_bits = 0),
        (this.w_mask = 0),
        (this.window = null),
        (this.window_size = 0),
        (this.prev = null),
        (this.head = null),
        (this.ins_h = 0),
        (this.hash_size = 0),
        (this.hash_bits = 0),
        (this.hash_mask = 0),
        (this.hash_shift = 0),
        (this.block_start = 0),
        (this.match_length = 0),
        (this.prev_match = 0),
        (this.match_available = 0),
        (this.strstart = 0),
        (this.match_start = 0),
        (this.lookahead = 0),
        (this.prev_length = 0),
        (this.max_chain_length = 0),
        (this.max_lazy_match = 0),
        (this.level = 0),
        (this.strategy = 0),
        (this.good_match = 0),
        (this.nice_match = 0),
        (this.dyn_ltree = new Uint16Array(2 * ez)),
        (this.dyn_dtree = new Uint16Array(122)),
        (this.bl_tree = new Uint16Array(78)),
        eP(this.dyn_ltree),
        eP(this.dyn_dtree),
        eP(this.bl_tree),
        (this.l_desc = null),
        (this.d_desc = null),
        (this.bl_desc = null),
        (this.bl_count = new Uint16Array(16)),
        (this.heap = new Uint16Array(2 * eA + 1)),
        eP(this.heap),
        (this.heap_len = 0),
        (this.heap_max = 0),
        (this.depth = new Uint16Array(2 * eA + 1)),
        eP(this.depth),
        (this.sym_buf = 0),
        (this.lit_bufsize = 0),
        (this.sym_next = 0),
        (this.sym_end = 0),
        (this.opt_len = 0),
        (this.static_len = 0),
        (this.matches = 0),
        (this.insert = 0),
        (this.bi_buf = 0),
        (this.bi_valid = 0);
    }
    let eG = (e) => {
        if (!e) return 1;
        let t = e.state;
        return t &&
          t.strm === e &&
          (42 === t.status ||
            57 === t.status ||
            69 === t.status ||
            73 === t.status ||
            91 === t.status ||
            103 === t.status ||
            113 === t.status ||
            666 === t.status)
          ? 0
          : 1;
      },
      eK = (e) => {
        if (eG(e)) return eE(e, eg);
        (e.total_in = e.total_out = 0), (e.data_type = eT);
        let t = e.state;
        return (
          (t.pending = 0),
          (t.pending_out = 0),
          t.wrap < 0 && (t.wrap = -t.wrap),
          (t.status = 2 === t.wrap ? 57 : t.wrap ? 42 : 113),
          (e.adler = 2 === t.wrap ? 0 : 1),
          (t.last_flush = -2),
          ea(t),
          ep
        );
      },
      eQ = (e) => {
        let t = eK(e);
        return t === ep && eJ(e.state), t;
      },
      eY = (e, t, i, a, n, o) => {
        if (!e) return eg;
        let s = 1;
        if (
          (t === eu && (t = 6),
          a < 0 ? ((s = 0), (a = -a)) : a > 15 && ((s = 2), (a -= 16)),
          n < 1 ||
            n > 9 ||
            i !== eS ||
            a < 8 ||
            a > 15 ||
            t < 0 ||
            t > 9 ||
            o < 0 ||
            o > ek ||
            (8 === a && 1 !== s))
        )
          return eE(e, eg);
        8 === a && (a = 9);
        let r = new eX();
        return (
          (e.state = r),
          (r.strm = e),
          (r.status = 42),
          (r.wrap = s),
          (r.gzhead = null),
          (r.w_bits = a),
          (r.w_size = 1 << r.w_bits),
          (r.w_mask = r.w_size - 1),
          (r.hash_bits = n + 7),
          (r.hash_size = 1 << r.hash_bits),
          (r.hash_mask = r.hash_size - 1),
          (r.hash_shift = ~~((r.hash_bits + 3 - 1) / 3)),
          (r.window = new Uint8Array(2 * r.w_size)),
          (r.head = new Uint16Array(r.hash_size)),
          (r.prev = new Uint16Array(r.w_size)),
          (r.lit_bufsize = 1 << (n + 6)),
          (r.pending_buf_size = 4 * r.lit_bufsize),
          (r.pending_buf = new Uint8Array(r.pending_buf_size)),
          (r.sym_buf = r.lit_bufsize),
          (r.sym_end = (r.lit_bufsize - 1) * 3),
          (r.level = t),
          (r.strategy = o),
          (r.method = i),
          eQ(e)
        );
      };
    var e0 = {
      deflateInit2: eY,
      deflateSetHeader: (e, t) =>
        eG(e) || 2 !== e.state.wrap ? eg : ((e.state.gzhead = t), ep),
      deflate: (e, t) => {
        if (eG(e) || t > em || t < 0) return e ? eE(e, eg) : eg;
        let i = e.state;
        if (
          !e.output ||
          (0 !== e.avail_in && !e.input) ||
          (666 === i.status && t !== eh)
        )
          return eE(e, 0 === e.avail_out ? e_ : eg);
        let a = i.last_flush;
        if (((i.last_flush = t), 0 !== i.pending)) {
          if ((eI(e), 0 === e.avail_out)) return (i.last_flush = -1), ep;
        } else if (0 === e.avail_in && eU(t) <= eU(a) && t !== eh)
          return eE(e, e_);
        if (666 === i.status && 0 !== e.avail_in) return eE(e, e_);
        if (
          (42 === i.status && 0 === i.wrap && (i.status = 113), 42 === i.status)
        ) {
          let t = (eS + ((i.w_bits - 8) << 4)) << 8,
            a = -1;
          if (
            ((t |=
              (a =
                i.strategy >= ew || i.level < 2
                  ? 0
                  : i.level < 6
                  ? 1
                  : 6 === i.level
                  ? 2
                  : 3) << 6),
            0 !== i.strstart && (t |= 32),
            eN(i, (t += 31 - (t % 31))),
            0 !== i.strstart && (eN(i, e.adler >>> 16), eN(i, 65535 & e.adler)),
            (e.adler = 1),
            (i.status = 113),
            eI(e),
            0 !== i.pending)
          )
            return (i.last_flush = -1), ep;
        }
        if (57 === i.status) {
          if (((e.adler = 0), e$(i, 31), e$(i, 139), e$(i, 8), i.gzhead))
            e$(
              i,
              (i.gzhead.text ? 1 : 0) +
                (i.gzhead.hcrc ? 2 : 0) +
                (i.gzhead.extra ? 4 : 0) +
                (i.gzhead.name ? 8 : 0) +
                (i.gzhead.comment ? 16 : 0)
            ),
              e$(i, 255 & i.gzhead.time),
              e$(i, (i.gzhead.time >> 8) & 255),
              e$(i, (i.gzhead.time >> 16) & 255),
              e$(i, (i.gzhead.time >> 24) & 255),
              e$(
                i,
                9 === i.level ? 2 : i.strategy >= ew || i.level < 2 ? 4 : 0
              ),
              e$(i, 255 & i.gzhead.os),
              i.gzhead.extra &&
                i.gzhead.extra.length &&
                (e$(i, 255 & i.gzhead.extra.length),
                e$(i, (i.gzhead.extra.length >> 8) & 255)),
              i.gzhead.hcrc &&
                (e.adler = ee(e.adler, i.pending_buf, i.pending, 0)),
              (i.gzindex = 0),
              (i.status = 69);
          else if (
            (e$(i, 0),
            e$(i, 0),
            e$(i, 0),
            e$(i, 0),
            e$(i, 0),
            e$(i, 9 === i.level ? 2 : i.strategy >= ew || i.level < 2 ? 4 : 0),
            e$(i, 3),
            (i.status = 113),
            eI(e),
            0 !== i.pending)
          )
            return (i.last_flush = -1), ep;
        }
        if (69 === i.status) {
          if (i.gzhead.extra) {
            let t = i.pending,
              a = (65535 & i.gzhead.extra.length) - i.gzindex;
            for (; i.pending + a > i.pending_buf_size; ) {
              let n = i.pending_buf_size - i.pending;
              if (
                (i.pending_buf.set(
                  i.gzhead.extra.subarray(i.gzindex, i.gzindex + n),
                  i.pending
                ),
                (i.pending = i.pending_buf_size),
                i.gzhead.hcrc &&
                  i.pending > t &&
                  (e.adler = ee(e.adler, i.pending_buf, i.pending - t, t)),
                (i.gzindex += n),
                eI(e),
                0 !== i.pending)
              )
                return (i.last_flush = -1), ep;
              (t = 0), (a -= n);
            }
            let n = new Uint8Array(i.gzhead.extra);
            i.pending_buf.set(n.subarray(i.gzindex, i.gzindex + a), i.pending),
              (i.pending += a),
              i.gzhead.hcrc &&
                i.pending > t &&
                (e.adler = ee(e.adler, i.pending_buf, i.pending - t, t)),
              (i.gzindex = 0);
          }
          i.status = 73;
        }
        if (73 === i.status) {
          if (i.gzhead.name) {
            let t,
              a = i.pending;
            do {
              if (i.pending === i.pending_buf_size) {
                if (
                  (i.gzhead.hcrc &&
                    i.pending > a &&
                    (e.adler = ee(e.adler, i.pending_buf, i.pending - a, a)),
                  eI(e),
                  0 !== i.pending)
                )
                  return (i.last_flush = -1), ep;
                a = 0;
              }
              (t =
                i.gzindex < i.gzhead.name.length
                  ? 255 & i.gzhead.name.charCodeAt(i.gzindex++)
                  : 0),
                e$(i, t);
            } while (0 !== t);
            i.gzhead.hcrc &&
              i.pending > a &&
              (e.adler = ee(e.adler, i.pending_buf, i.pending - a, a)),
              (i.gzindex = 0);
          }
          i.status = 91;
        }
        if (91 === i.status) {
          if (i.gzhead.comment) {
            let t,
              a = i.pending;
            do {
              if (i.pending === i.pending_buf_size) {
                if (
                  (i.gzhead.hcrc &&
                    i.pending > a &&
                    (e.adler = ee(e.adler, i.pending_buf, i.pending - a, a)),
                  eI(e),
                  0 !== i.pending)
                )
                  return (i.last_flush = -1), ep;
                a = 0;
              }
              (t =
                i.gzindex < i.gzhead.comment.length
                  ? 255 & i.gzhead.comment.charCodeAt(i.gzindex++)
                  : 0),
                e$(i, t);
            } while (0 !== t);
            i.gzhead.hcrc &&
              i.pending > a &&
              (e.adler = ee(e.adler, i.pending_buf, i.pending - a, a));
          }
          i.status = 103;
        }
        if (103 === i.status) {
          if (i.gzhead.hcrc) {
            if (i.pending + 2 > i.pending_buf_size && (eI(e), 0 !== i.pending))
              return (i.last_flush = -1), ep;
            e$(i, 255 & e.adler), e$(i, (e.adler >> 8) & 255), (e.adler = 0);
          }
          if (((i.status = 113), eI(e), 0 !== i.pending))
            return (i.last_flush = -1), ep;
        }
        if (
          0 !== e.avail_in ||
          0 !== i.lookahead ||
          (t !== ed && 666 !== i.status)
        ) {
          let a =
            0 === i.level
              ? eL(i, t)
              : i.strategy === ew
              ? eW(i, t)
              : i.strategy === ev
              ? eZ(i, t)
              : eV[i.level].func(i, t);
          if (((3 === a || 4 === a) && (i.status = 666), 1 === a || 3 === a))
            return 0 === e.avail_out && (i.last_flush = -1), ep;
          if (
            2 === a &&
            (t === el
              ? er(i)
              : t !== em &&
                (en(i, 0, 0, !1),
                t === ec &&
                  (eP(i.head),
                  0 === i.lookahead &&
                    ((i.strstart = 0), (i.block_start = 0), (i.insert = 0)))),
            eI(e),
            0 === e.avail_out)
          )
            return (i.last_flush = -1), ep;
        }
        return t !== eh
          ? ep
          : i.wrap <= 0
          ? eb
          : (2 === i.wrap
              ? (e$(i, 255 & e.adler),
                e$(i, (e.adler >> 8) & 255),
                e$(i, (e.adler >> 16) & 255),
                e$(i, (e.adler >> 24) & 255),
                e$(i, 255 & e.total_in),
                e$(i, (e.total_in >> 8) & 255),
                e$(i, (e.total_in >> 16) & 255),
                e$(i, (e.total_in >> 24) & 255))
              : (eN(i, e.adler >>> 16), eN(i, 65535 & e.adler)),
            eI(e),
            i.wrap > 0 && (i.wrap = -i.wrap),
            0 !== i.pending ? ep : eb);
      },
      deflateEnd: (e) => {
        if (eG(e)) return eg;
        let t = e.state.status;
        return (e.state = null), 113 === t ? eE(e, ef) : ep;
      },
      deflateSetDictionary: (e, t) => {
        let i = t.length;
        if (eG(e)) return eg;
        let a = e.state,
          n = a.wrap;
        if (2 === n || (1 === n && 42 !== a.status) || a.lookahead) return eg;
        if (
          (1 === n && (e.adler = Q(e.adler, t, i, 0)),
          (a.wrap = 0),
          i >= a.w_size)
        ) {
          0 === n &&
            (eP(a.head), (a.strstart = 0), (a.block_start = 0), (a.insert = 0));
          let e = new Uint8Array(a.w_size);
          e.set(t.subarray(i - a.w_size, i), 0), (t = e), (i = a.w_size);
        }
        let o = e.avail_in,
          s = e.next_in,
          r = e.input;
        for (
          e.avail_in = i, e.next_in = 0, e.input = t, eD(a);
          a.lookahead >= 3;

        ) {
          let e = a.strstart,
            t = a.lookahead - 2;
          do
            (a.ins_h = eC(a, a.ins_h, a.window[e + 3 - 1])),
              (a.prev[e & a.w_mask] = a.head[a.ins_h]),
              (a.head[a.ins_h] = e),
              e++;
          while (--t);
          (a.strstart = e), (a.lookahead = 2), eD(a);
        }
        return (
          (a.strstart += a.lookahead),
          (a.block_start = a.strstart),
          (a.insert = a.lookahead),
          (a.lookahead = 0),
          (a.match_length = a.prev_length = 2),
          (a.match_available = 0),
          (e.next_in = s),
          (e.input = r),
          (e.avail_in = o),
          (a.wrap = n),
          ep
        );
      },
    };
    let e1 = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
    var e2 = {
      assign: function (e) {
        let t = Array.prototype.slice.call(arguments, 1);
        for (; t.length; ) {
          let i = t.shift();
          if (!!i) {
            if ("object" != typeof i) throw TypeError(i + "must be non-object");
            for (let t in i) e1(i, t) && (e[t] = i[t]);
          }
        }
        return e;
      },
      flattenChunks: (e) => {
        let t = 0;
        for (let i = 0, a = e.length; i < a; i++) t += e[i].length;
        let i = new Uint8Array(t);
        for (let t = 0, a = 0, n = e.length; t < n; t++) {
          let n = e[t];
          i.set(n, a), (a += n.length);
        }
        return i;
      },
    };
    let e5 = !0;
    try {
      String.fromCharCode.apply(null, new Uint8Array(1));
    } catch (e) {
      e5 = !1;
    }
    let e6 = new Uint8Array(256);
    for (let e = 0; e < 256; e++)
      e6[e] =
        e >= 252
          ? 6
          : e >= 248
          ? 5
          : e >= 240
          ? 4
          : e >= 224
          ? 3
          : e >= 192
          ? 2
          : 1;
    e6[254] = e6[254] = 1;
    let e3 = (e, t) => {
      if (t < 65534 && e.subarray && e5)
        return String.fromCharCode.apply(
          null,
          e.length === t ? e : e.subarray(0, t)
        );
      let i = "";
      for (let a = 0; a < t; a++) i += String.fromCharCode(e[a]);
      return i;
    };
    var e4 = {
        string2buf: (e) => {
          if ("function" == typeof TextEncoder && TextEncoder.prototype.encode)
            return new TextEncoder().encode(e);
          let t,
            i,
            a,
            n,
            o,
            s = e.length,
            r = 0;
          for (n = 0; n < s; n++)
            (64512 & (i = e.charCodeAt(n))) == 55296 &&
              n + 1 < s &&
              (64512 & (a = e.charCodeAt(n + 1))) == 56320 &&
              ((i = 65536 + ((i - 55296) << 10) + (a - 56320)), n++),
              (r += i < 128 ? 1 : i < 2048 ? 2 : i < 65536 ? 3 : 4);
          for (o = 0, t = new Uint8Array(r), n = 0; o < r; n++)
            (64512 & (i = e.charCodeAt(n))) == 55296 &&
              n + 1 < s &&
              (64512 & (a = e.charCodeAt(n + 1))) == 56320 &&
              ((i = 65536 + ((i - 55296) << 10) + (a - 56320)), n++),
              i < 128
                ? (t[o++] = i)
                : (i < 2048
                    ? (t[o++] = 192 | (i >>> 6))
                    : (i < 65536
                        ? (t[o++] = 224 | (i >>> 12))
                        : ((t[o++] = 240 | (i >>> 18)),
                          (t[o++] = 128 | ((i >>> 12) & 63))),
                      (t[o++] = 128 | ((i >>> 6) & 63))),
                  (t[o++] = 128 | (63 & i)));
          return t;
        },
        buf2string: (e, t) => {
          let i, a;
          let n = t || e.length;
          if ("function" == typeof TextDecoder && TextDecoder.prototype.decode)
            return new TextDecoder().decode(e.subarray(0, t));
          let o = Array(2 * n);
          for (a = 0, i = 0; i < n; ) {
            let t = e[i++];
            if (t < 128) {
              o[a++] = t;
              continue;
            }
            let s = e6[t];
            if (s > 4) {
              (o[a++] = 65533), (i += s - 1);
              continue;
            }
            for (t &= 2 === s ? 31 : 3 === s ? 15 : 7; s > 1 && i < n; )
              (t = (t << 6) | (63 & e[i++])), s--;
            if (s > 1) {
              o[a++] = 65533;
              continue;
            }
            t < 65536
              ? (o[a++] = t)
              : ((t -= 65536),
                (o[a++] = 55296 | ((t >> 10) & 1023)),
                (o[a++] = 56320 | (1023 & t)));
          }
          return e3(o, a);
        },
        utf8border: (e, t) => {
          (t = t || e.length) > e.length && (t = e.length);
          let i = t - 1;
          for (; i >= 0 && (192 & e[i]) == 128; ) i--;
          return i < 0 || 0 === i ? t : i + e6[e[i]] > t ? i : t;
        },
      },
      e8 = function () {
        (this.input = null),
          (this.next_in = 0),
          (this.avail_in = 0),
          (this.total_in = 0),
          (this.output = null),
          (this.next_out = 0),
          (this.avail_out = 0),
          (this.total_out = 0),
          (this.msg = ""),
          (this.state = null),
          (this.data_type = 2),
          (this.adler = 0);
      };
    let e9 = Object.prototype.toString,
      {
        Z_NO_FLUSH: e7,
        Z_SYNC_FLUSH: te,
        Z_FULL_FLUSH: tt,
        Z_FINISH: ti,
        Z_OK: ta,
        Z_STREAM_END: tn,
        Z_DEFAULT_COMPRESSION: to,
        Z_DEFAULT_STRATEGY: ts,
        Z_DEFLATED: tr,
      } = ei;
    function td(e) {
      this.options = e2.assign(
        {
          level: to,
          method: tr,
          chunkSize: 16384,
          windowBits: 15,
          memLevel: 8,
          strategy: ts,
        },
        e || {}
      );
      let t = this.options;
      t.raw && t.windowBits > 0
        ? (t.windowBits = -t.windowBits)
        : t.gzip &&
          t.windowBits > 0 &&
          t.windowBits < 16 &&
          (t.windowBits += 16),
        (this.err = 0),
        (this.msg = ""),
        (this.ended = !1),
        (this.chunks = []),
        (this.strm = new e8()),
        (this.strm.avail_out = 0);
      let i = e0.deflateInit2(
        this.strm,
        t.level,
        t.method,
        t.windowBits,
        t.memLevel,
        t.strategy
      );
      if (i !== ta) throw Error(et[i]);
      if (
        (t.header && e0.deflateSetHeader(this.strm, t.header), t.dictionary)
      ) {
        let e;
        if (
          ((e =
            "string" == typeof t.dictionary
              ? e4.string2buf(t.dictionary)
              : "[object ArrayBuffer]" === e9.call(t.dictionary)
              ? new Uint8Array(t.dictionary)
              : t.dictionary),
          (i = e0.deflateSetDictionary(this.strm, e)) !== ta)
        )
          throw Error(et[i]);
        this._dict_set = !0;
      }
    }
    function tl(e, t) {
      let i = new td(t);
      if ((i.push(e, !0), i.err)) throw i.msg || et[i.err];
      return i.result;
    }
    (td.prototype.push = function (e, t) {
      let i, a;
      let n = this.strm,
        o = this.options.chunkSize;
      if (this.ended) return !1;
      for (
        a = t === ~~t ? t : !0 === t ? ti : e7,
          "string" == typeof e
            ? (n.input = e4.string2buf(e))
            : "[object ArrayBuffer]" === e9.call(e)
            ? (n.input = new Uint8Array(e))
            : (n.input = e),
          n.next_in = 0,
          n.avail_in = n.input.length;
        ;

      ) {
        if (
          (0 === n.avail_out &&
            ((n.output = new Uint8Array(o)),
            (n.next_out = 0),
            (n.avail_out = o)),
          (a === te || a === tt) && n.avail_out <= 6)
        ) {
          this.onData(n.output.subarray(0, n.next_out)), (n.avail_out = 0);
          continue;
        }
        if ((i = e0.deflate(n, a)) === tn)
          return (
            n.next_out > 0 && this.onData(n.output.subarray(0, n.next_out)),
            (i = e0.deflateEnd(this.strm)),
            this.onEnd(i),
            (this.ended = !0),
            i === ta
          );
        if (0 === n.avail_out) {
          this.onData(n.output);
          continue;
        }
        if (a > 0 && n.next_out > 0) {
          this.onData(n.output.subarray(0, n.next_out)), (n.avail_out = 0);
          continue;
        }
        if (0 === n.avail_in) break;
      }
      return !0;
    }),
      (td.prototype.onData = function (e) {
        this.chunks.push(e);
      }),
      (td.prototype.onEnd = function (e) {
        e === ta && (this.result = e2.flattenChunks(this.chunks)),
          (this.chunks = []),
          (this.err = e),
          (this.msg = this.strm.msg);
      });
    var tc = function (e, t) {
      let i,
        a,
        n,
        o,
        s,
        r,
        d,
        l,
        c,
        h,
        m,
        p,
        b,
        g,
        f,
        _,
        u,
        y,
        w,
        v,
        k,
        x,
        T,
        S;
      let A = e.state;
      (i = e.next_in),
        (T = e.input),
        (a = i + (e.avail_in - 5)),
        (n = e.next_out),
        (S = e.output),
        (o = n - (t - e.avail_out)),
        (s = n + (e.avail_out - 257)),
        (r = A.dmax),
        (d = A.wsize),
        (l = A.whave),
        (c = A.wnext),
        (h = A.window),
        (m = A.hold),
        (p = A.bits),
        (b = A.lencode),
        (g = A.distcode),
        (f = (1 << A.lenbits) - 1),
        (_ = (1 << A.distbits) - 1);
      e: do
        for (
          p < 15 &&
            ((m += T[i++] << p), (p += 8), (m += T[i++] << p), (p += 8)),
            u = b[m & f];
          ;

        ) {
          if (((m >>>= y = u >>> 24), (p -= y), 0 == (y = (u >>> 16) & 255)))
            S[n++] = 65535 & u;
          else if (16 & y)
            for (
              w = 65535 & u,
                (y &= 15) &&
                  (p < y && ((m += T[i++] << p), (p += 8)),
                  (w += m & ((1 << y) - 1)),
                  (m >>>= y),
                  (p -= y)),
                p < 15 &&
                  ((m += T[i++] << p), (p += 8), (m += T[i++] << p), (p += 8)),
                u = g[m & _];
              ;

            ) {
              if (
                ((m >>>= y = u >>> 24), (p -= y), 16 & (y = (u >>> 16) & 255))
              ) {
                if (
                  ((v = 65535 & u),
                  p < (y &= 15) &&
                    ((m += T[i++] << p),
                    (p += 8) < y && ((m += T[i++] << p), (p += 8))),
                  (v += m & ((1 << y) - 1)) > r)
                ) {
                  (e.msg = "invalid distance too far back"), (A.mode = 16209);
                  break e;
                }
                if (((m >>>= y), (p -= y), v > (y = n - o))) {
                  if ((y = v - y) > l && A.sane) {
                    (e.msg = "invalid distance too far back"), (A.mode = 16209);
                    break e;
                  }
                  if (((k = 0), (x = h), 0 === c)) {
                    if (((k += d - y), y < w)) {
                      w -= y;
                      do S[n++] = h[k++];
                      while (--y);
                      (k = n - v), (x = S);
                    }
                  } else if (c < y) {
                    if (((k += d + c - y), (y -= c) < w)) {
                      w -= y;
                      do S[n++] = h[k++];
                      while (--y);
                      if (((k = 0), c < w)) {
                        w -= y = c;
                        do S[n++] = h[k++];
                        while (--y);
                        (k = n - v), (x = S);
                      }
                    }
                  } else if (((k += c - y), y < w)) {
                    w -= y;
                    do S[n++] = h[k++];
                    while (--y);
                    (k = n - v), (x = S);
                  }
                  for (; w > 2; )
                    (S[n++] = x[k++]),
                      (S[n++] = x[k++]),
                      (S[n++] = x[k++]),
                      (w -= 3);
                  w && ((S[n++] = x[k++]), w > 1 && (S[n++] = x[k++]));
                } else {
                  k = n - v;
                  do
                    (S[n++] = S[k++]),
                      (S[n++] = S[k++]),
                      (S[n++] = S[k++]),
                      (w -= 3);
                  while (w > 2);
                  w && ((S[n++] = S[k++]), w > 1 && (S[n++] = S[k++]));
                }
              } else if ((64 & y) == 0) {
                u = g[(65535 & u) + (m & ((1 << y) - 1))];
                continue;
              } else {
                (e.msg = "invalid distance code"), (A.mode = 16209);
                break e;
              }
              break;
            }
          else if ((64 & y) == 0) {
            u = b[(65535 & u) + (m & ((1 << y) - 1))];
            continue;
          } else if (32 & y) {
            A.mode = 16191;
            break e;
          } else {
            (e.msg = "invalid literal/length code"), (A.mode = 16209);
            break e;
          }
          break;
        }
      while (i < a && n < s);
      (i -= w = p >> 3),
        (p -= w << 3),
        (m &= (1 << p) - 1),
        (e.next_in = i),
        (e.next_out = n),
        (e.avail_in = i < a ? 5 + (a - i) : 5 - (i - a)),
        (e.avail_out = n < s ? 257 + (s - n) : 257 - (n - s)),
        (A.hold = m),
        (A.bits = p);
    };
    let th = new Uint16Array([
        3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59,
        67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0,
      ]),
      tm = new Uint8Array([
        16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19,
        19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78,
      ]),
      tp = new Uint16Array([
        1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385,
        513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577,
        0, 0,
      ]),
      tb = new Uint8Array([
        16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23,
        24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64,
      ]);
    var tg = (e, t, i, a, n, o, s, r) => {
      let d, l, c, h, m, p, b, g, f;
      let _ = r.bits,
        u = 0,
        y = 0,
        w = 0,
        v = 0,
        k = 0,
        x = 0,
        T = 0,
        S = 0,
        A = 0,
        z = 0,
        R = null,
        E = new Uint16Array(16),
        U = new Uint16Array(16),
        P = null;
      for (u = 0; u <= 15; u++) E[u] = 0;
      for (y = 0; y < a; y++) E[t[i + y]]++;
      for (v = 15, k = _; v >= 1 && 0 === E[v]; v--);
      if ((k > v && (k = v), 0 === v))
        return (n[o++] = 0x1400000), (n[o++] = 0x1400000), (r.bits = 1), 0;
      for (w = 1; w < v && 0 === E[w]; w++);
      for (k < w && (k = w), S = 1, u = 1; u <= 15; u++)
        if (((S <<= 1), (S -= E[u]) < 0)) return -1;
      if (S > 0 && (0 === e || 1 !== v)) return -1;
      for (u = 1, U[1] = 0; u < 15; u++) U[u + 1] = U[u] + E[u];
      for (y = 0; y < a; y++) 0 !== t[i + y] && (s[U[t[i + y]]++] = y);
      if (
        (0 === e
          ? ((R = P = s), (p = 20))
          : 1 === e
          ? ((R = th), (P = tm), (p = 257))
          : ((R = tp), (P = tb), (p = 0)),
        (z = 0),
        (y = 0),
        (u = w),
        (m = o),
        (x = k),
        (T = 0),
        (c = -1),
        (h = (A = 1 << k) - 1),
        (1 === e && A > 852) || (2 === e && A > 592))
      )
        return 1;
      for (;;) {
        (b = u - T),
          s[y] + 1 < p
            ? ((g = 0), (f = s[y]))
            : s[y] >= p
            ? ((g = P[s[y] - p]), (f = R[s[y] - p]))
            : ((g = 96), (f = 0)),
          (d = 1 << (u - T)),
          (w = l = 1 << x);
        do n[m + (z >> T) + (l -= d)] = (b << 24) | (g << 16) | f | 0;
        while (0 !== l);
        for (d = 1 << (u - 1); z & d; ) d >>= 1;
        if ((0 !== d ? ((z &= d - 1), (z += d)) : (z = 0), y++, 0 == --E[u])) {
          if (u === v) break;
          u = t[i + s[y]];
        }
        if (u > k && (z & h) !== c) {
          for (
            0 === T && (T = k), m += w, S = 1 << (x = u - T);
            x + T < v && !((S -= E[x + T]) <= 0);

          ) {
            x++, (S <<= 1);
          }
          if (((A += 1 << x), (1 === e && A > 852) || (2 === e && A > 592)))
            return 1;
          n[(c = z & h)] = (k << 24) | (x << 16) | (m - o) | 0;
        }
      }
      return 0 !== z && (n[m + z] = ((u - T) << 24) | 4194304), (r.bits = k), 0;
    };
    let {
        Z_FINISH: tf,
        Z_BLOCK: t_,
        Z_TREES: tu,
        Z_OK: ty,
        Z_STREAM_END: tw,
        Z_NEED_DICT: tv,
        Z_STREAM_ERROR: tk,
        Z_DATA_ERROR: tx,
        Z_MEM_ERROR: tT,
        Z_BUF_ERROR: tS,
        Z_DEFLATED: tA,
      } = ei,
      tz = (e) =>
        ((e >>> 24) & 255) +
        ((e >>> 8) & 65280) +
        ((65280 & e) << 8) +
        ((255 & e) << 24);
    function tR() {
      (this.strm = null),
        (this.mode = 0),
        (this.last = !1),
        (this.wrap = 0),
        (this.havedict = !1),
        (this.flags = 0),
        (this.dmax = 0),
        (this.check = 0),
        (this.total = 0),
        (this.head = null),
        (this.wbits = 0),
        (this.wsize = 0),
        (this.whave = 0),
        (this.wnext = 0),
        (this.window = null),
        (this.hold = 0),
        (this.bits = 0),
        (this.length = 0),
        (this.offset = 0),
        (this.extra = 0),
        (this.lencode = null),
        (this.distcode = null),
        (this.lenbits = 0),
        (this.distbits = 0),
        (this.ncode = 0),
        (this.nlen = 0),
        (this.ndist = 0),
        (this.have = 0),
        (this.next = null),
        (this.lens = new Uint16Array(320)),
        (this.work = new Uint16Array(288)),
        (this.lendyn = null),
        (this.distdyn = null),
        (this.sane = 0),
        (this.back = 0),
        (this.was = 0);
    }
    let tE = (e) => {
        if (!e) return 1;
        let t = e.state;
        return !t || t.strm !== e || t.mode < 16180 || t.mode > 16211 ? 1 : 0;
      },
      tU = (e) => {
        if (tE(e)) return tk;
        let t = e.state;
        return (
          (e.total_in = e.total_out = t.total = 0),
          (e.msg = ""),
          t.wrap && (e.adler = 1 & t.wrap),
          (t.mode = 16180),
          (t.last = 0),
          (t.havedict = 0),
          (t.flags = -1),
          (t.dmax = 32768),
          (t.head = null),
          (t.hold = 0),
          (t.bits = 0),
          (t.lencode = t.lendyn = new Int32Array(852)),
          (t.distcode = t.distdyn = new Int32Array(592)),
          (t.sane = 1),
          (t.back = -1),
          ty
        );
      },
      tP = (e) => {
        if (tE(e)) return tk;
        let t = e.state;
        return (t.wsize = 0), (t.whave = 0), (t.wnext = 0), tU(e);
      },
      tH = (e, t) => {
        let i;
        if (tE(e)) return tk;
        let a = e.state;
        return (t < 0
          ? ((i = 0), (t = -t))
          : ((i = (t >> 4) + 5), t < 48 && (t &= 15)),
        t && (t < 8 || t > 15))
          ? tk
          : (null !== a.window && a.wbits !== t && (a.window = null),
            (a.wrap = i),
            (a.wbits = t),
            tP(e));
      },
      tC = (e, t) => {
        if (!e) return tk;
        let i = new tR();
        (e.state = i), (i.strm = e), (i.window = null), (i.mode = 16180);
        let a = tH(e, t);
        return a !== ty && (e.state = null), a;
      },
      tI = !0,
      tM = (e) => {
        if (tI) {
          (a = new Int32Array(512)), (n = new Int32Array(32));
          let t = 0;
          for (; t < 144; ) e.lens[t++] = 8;
          for (; t < 256; ) e.lens[t++] = 9;
          for (; t < 280; ) e.lens[t++] = 7;
          for (; t < 288; ) e.lens[t++] = 8;
          for (
            tg(1, e.lens, 0, 288, a, 0, e.work, { bits: 9 }), t = 0;
            t < 32;

          )
            e.lens[t++] = 5;
          tg(2, e.lens, 0, 32, n, 0, e.work, { bits: 5 }), (tI = !1);
        }
        (e.lencode = a), (e.lenbits = 9), (e.distcode = n), (e.distbits = 5);
      },
      t$ = (e, t, i, a) => {
        let n;
        let o = e.state;
        return (
          null === o.window &&
            ((o.wsize = 1 << o.wbits),
            (o.wnext = 0),
            (o.whave = 0),
            (o.window = new Uint8Array(o.wsize))),
          a >= o.wsize
            ? (o.window.set(t.subarray(i - o.wsize, i), 0),
              (o.wnext = 0),
              (o.whave = o.wsize))
            : ((n = o.wsize - o.wnext) > a && (n = a),
              o.window.set(t.subarray(i - a, i - a + n), o.wnext),
              (a -= n)
                ? (o.window.set(t.subarray(i - a, i), 0),
                  (o.wnext = a),
                  (o.whave = o.wsize))
                : ((o.wnext += n),
                  o.wnext === o.wsize && (o.wnext = 0),
                  o.whave < o.wsize && (o.whave += n))),
          0
        );
      };
    var tN = {
        inflateReset: tP,
        inflateInit2: tC,
        inflate: (e, t) => {
          let i,
            a,
            n,
            o,
            s,
            r,
            d,
            l,
            c,
            h,
            m,
            p,
            b,
            g,
            f,
            _,
            u,
            y,
            w,
            v,
            k,
            x,
            T,
            S;
          let A = 0,
            z = new Uint8Array(4),
            R = new Uint8Array([
              16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
            ]);
          if (tE(e) || !e.output || (!e.input && 0 !== e.avail_in)) return tk;
          16191 === (i = e.state).mode && (i.mode = 16192),
            (s = e.next_out),
            (n = e.output),
            (d = e.avail_out),
            (o = e.next_in),
            (a = e.input),
            (r = e.avail_in),
            (l = i.hold),
            (c = i.bits),
            (h = r),
            (m = d),
            (x = ty);
          t: for (;;)
            switch (i.mode) {
              case 16180:
                if (0 === i.wrap) {
                  i.mode = 16192;
                  break;
                }
                for (; c < 16; ) {
                  if (0 === r) break t;
                  r--, (l += a[o++] << c), (c += 8);
                }
                if (2 & i.wrap && 35615 === l) {
                  0 === i.wbits && (i.wbits = 15),
                    (i.check = 0),
                    (z[0] = 255 & l),
                    (z[1] = (l >>> 8) & 255),
                    (i.check = ee(i.check, z, 2, 0)),
                    (l = 0),
                    (c = 0),
                    (i.mode = 16181);
                  break;
                }
                if (
                  (i.head && (i.head.done = !1),
                  !(1 & i.wrap) || (((255 & l) << 8) + (l >> 8)) % 31)
                ) {
                  (e.msg = "incorrect header check"), (i.mode = 16209);
                  break;
                }
                if ((15 & l) !== tA) {
                  (e.msg = "unknown compression method"), (i.mode = 16209);
                  break;
                }
                if (
                  ((l >>>= 4),
                  (c -= 4),
                  (k = (15 & l) + 8),
                  0 === i.wbits && (i.wbits = k),
                  k > 15 || k > i.wbits)
                ) {
                  (e.msg = "invalid window size"), (i.mode = 16209);
                  break;
                }
                (i.dmax = 1 << i.wbits),
                  (i.flags = 0),
                  (e.adler = i.check = 1),
                  (i.mode = 512 & l ? 16189 : 16191),
                  (l = 0),
                  (c = 0);
                break;
              case 16181:
                for (; c < 16; ) {
                  if (0 === r) break t;
                  r--, (l += a[o++] << c), (c += 8);
                }
                if (((i.flags = l), (255 & i.flags) !== tA)) {
                  (e.msg = "unknown compression method"), (i.mode = 16209);
                  break;
                }
                if (57344 & i.flags) {
                  (e.msg = "unknown header flags set"), (i.mode = 16209);
                  break;
                }
                i.head && (i.head.text = (l >> 8) & 1),
                  512 & i.flags &&
                    4 & i.wrap &&
                    ((z[0] = 255 & l),
                    (z[1] = (l >>> 8) & 255),
                    (i.check = ee(i.check, z, 2, 0))),
                  (l = 0),
                  (c = 0),
                  (i.mode = 16182);
              case 16182:
                for (; c < 32; ) {
                  if (0 === r) break t;
                  r--, (l += a[o++] << c), (c += 8);
                }
                i.head && (i.head.time = l),
                  512 & i.flags &&
                    4 & i.wrap &&
                    ((z[0] = 255 & l),
                    (z[1] = (l >>> 8) & 255),
                    (z[2] = (l >>> 16) & 255),
                    (z[3] = (l >>> 24) & 255),
                    (i.check = ee(i.check, z, 4, 0))),
                  (l = 0),
                  (c = 0),
                  (i.mode = 16183);
              case 16183:
                for (; c < 16; ) {
                  if (0 === r) break t;
                  r--, (l += a[o++] << c), (c += 8);
                }
                i.head && ((i.head.xflags = 255 & l), (i.head.os = l >> 8)),
                  512 & i.flags &&
                    4 & i.wrap &&
                    ((z[0] = 255 & l),
                    (z[1] = (l >>> 8) & 255),
                    (i.check = ee(i.check, z, 2, 0))),
                  (l = 0),
                  (c = 0),
                  (i.mode = 16184);
              case 16184:
                if (1024 & i.flags) {
                  for (; c < 16; ) {
                    if (0 === r) break t;
                    r--, (l += a[o++] << c), (c += 8);
                  }
                  (i.length = l),
                    i.head && (i.head.extra_len = l),
                    512 & i.flags &&
                      4 & i.wrap &&
                      ((z[0] = 255 & l),
                      (z[1] = (l >>> 8) & 255),
                      (i.check = ee(i.check, z, 2, 0))),
                    (l = 0),
                    (c = 0);
                } else i.head && (i.head.extra = null);
                i.mode = 16185;
              case 16185:
                if (
                  1024 & i.flags &&
                  ((p = i.length) > r && (p = r),
                  p &&
                    (i.head &&
                      ((k = i.head.extra_len - i.length),
                      !i.head.extra &&
                        (i.head.extra = new Uint8Array(i.head.extra_len)),
                      i.head.extra.set(a.subarray(o, o + p), k)),
                    512 & i.flags &&
                      4 & i.wrap &&
                      (i.check = ee(i.check, a, p, o)),
                    (r -= p),
                    (o += p),
                    (i.length -= p)),
                  i.length)
                )
                  break t;
                (i.length = 0), (i.mode = 16186);
              case 16186:
                if (2048 & i.flags) {
                  if (0 === r) break t;
                  p = 0;
                  do
                    (k = a[o + p++]),
                      i.head &&
                        k &&
                        i.length < 65536 &&
                        (i.head.name += String.fromCharCode(k));
                  while (k && p < r);
                  if (
                    (512 & i.flags &&
                      4 & i.wrap &&
                      (i.check = ee(i.check, a, p, o)),
                    (r -= p),
                    (o += p),
                    k)
                  )
                    break t;
                } else i.head && (i.head.name = null);
                (i.length = 0), (i.mode = 16187);
              case 16187:
                if (4096 & i.flags) {
                  if (0 === r) break t;
                  p = 0;
                  do
                    (k = a[o + p++]),
                      i.head &&
                        k &&
                        i.length < 65536 &&
                        (i.head.comment += String.fromCharCode(k));
                  while (k && p < r);
                  if (
                    (512 & i.flags &&
                      4 & i.wrap &&
                      (i.check = ee(i.check, a, p, o)),
                    (r -= p),
                    (o += p),
                    k)
                  )
                    break t;
                } else i.head && (i.head.comment = null);
                i.mode = 16188;
              case 16188:
                if (512 & i.flags) {
                  for (; c < 16; ) {
                    if (0 === r) break t;
                    r--, (l += a[o++] << c), (c += 8);
                  }
                  if (4 & i.wrap && l !== (65535 & i.check)) {
                    (e.msg = "header crc mismatch"), (i.mode = 16209);
                    break;
                  }
                  (l = 0), (c = 0);
                }
                i.head &&
                  ((i.head.hcrc = (i.flags >> 9) & 1), (i.head.done = !0)),
                  (e.adler = i.check = 0),
                  (i.mode = 16191);
                break;
              case 16189:
                for (; c < 32; ) {
                  if (0 === r) break t;
                  r--, (l += a[o++] << c), (c += 8);
                }
                (e.adler = i.check = tz(l)), (l = 0), (c = 0), (i.mode = 16190);
              case 16190:
                if (0 === i.havedict)
                  return (
                    (e.next_out = s),
                    (e.avail_out = d),
                    (e.next_in = o),
                    (e.avail_in = r),
                    (i.hold = l),
                    (i.bits = c),
                    tv
                  );
                (e.adler = i.check = 1), (i.mode = 16191);
              case 16191:
                if (t === t_ || t === tu) break t;
              case 16192:
                if (i.last) {
                  (l >>>= 7 & c), (c -= 7 & c), (i.mode = 16206);
                  break;
                }
                for (; c < 3; ) {
                  if (0 === r) break t;
                  r--, (l += a[o++] << c), (c += 8);
                }
                switch (((i.last = 1 & l), (c -= 1), 3 & (l >>>= 1))) {
                  case 0:
                    i.mode = 16193;
                    break;
                  case 1:
                    if ((tM(i), (i.mode = 16199), t === tu)) {
                      (l >>>= 2), (c -= 2);
                      break t;
                    }
                    break;
                  case 2:
                    i.mode = 16196;
                    break;
                  case 3:
                    (e.msg = "invalid block type"), (i.mode = 16209);
                }
                (l >>>= 2), (c -= 2);
                break;
              case 16193:
                for (l >>>= 7 & c, c -= 7 & c; c < 32; ) {
                  if (0 === r) break t;
                  r--, (l += a[o++] << c), (c += 8);
                }
                if ((65535 & l) != ((l >>> 16) ^ 65535)) {
                  (e.msg = "invalid stored block lengths"), (i.mode = 16209);
                  break;
                }
                if (
                  ((i.length = 65535 & l),
                  (l = 0),
                  (c = 0),
                  (i.mode = 16194),
                  t === tu)
                )
                  break t;
              case 16194:
                i.mode = 16195;
              case 16195:
                if ((p = i.length)) {
                  if ((p > r && (p = r), p > d && (p = d), 0 === p)) break t;
                  n.set(a.subarray(o, o + p), s),
                    (r -= p),
                    (o += p),
                    (d -= p),
                    (s += p),
                    (i.length -= p);
                  break;
                }
                i.mode = 16191;
                break;
              case 16196:
                for (; c < 14; ) {
                  if (0 === r) break t;
                  r--, (l += a[o++] << c), (c += 8);
                }
                if (
                  ((i.nlen = (31 & l) + 257),
                  (l >>>= 5),
                  (c -= 5),
                  (i.ndist = (31 & l) + 1),
                  (l >>>= 5),
                  (c -= 5),
                  (i.ncode = (15 & l) + 4),
                  (l >>>= 4),
                  (c -= 4),
                  i.nlen > 286 || i.ndist > 30)
                ) {
                  (e.msg = "too many length or distance symbols"),
                    (i.mode = 16209);
                  break;
                }
                (i.have = 0), (i.mode = 16197);
              case 16197:
                for (; i.have < i.ncode; ) {
                  for (; c < 3; ) {
                    if (0 === r) break t;
                    r--, (l += a[o++] << c), (c += 8);
                  }
                  (i.lens[R[i.have++]] = 7 & l), (l >>>= 3), (c -= 3);
                }
                for (; i.have < 19; ) i.lens[R[i.have++]] = 0;
                if (
                  ((i.lencode = i.lendyn),
                  (i.lenbits = 7),
                  (T = { bits: i.lenbits }),
                  (x = tg(0, i.lens, 0, 19, i.lencode, 0, i.work, T)),
                  (i.lenbits = T.bits),
                  x)
                ) {
                  (e.msg = "invalid code lengths set"), (i.mode = 16209);
                  break;
                }
                (i.have = 0), (i.mode = 16198);
              case 16198:
                for (; i.have < i.nlen + i.ndist; ) {
                  for (
                    ;
                    (f = (A = i.lencode[l & ((1 << i.lenbits) - 1)]) >>> 24),
                      (_ = (A >>> 16) & 255),
                      (u = 65535 & A),
                      !(f <= c);

                  ) {
                    if (0 === r) break t;
                    r--, (l += a[o++] << c), (c += 8);
                  }
                  if (u < 16) (l >>>= f), (c -= f), (i.lens[i.have++] = u);
                  else {
                    if (16 === u) {
                      for (S = f + 2; c < S; ) {
                        if (0 === r) break t;
                        r--, (l += a[o++] << c), (c += 8);
                      }
                      if (((l >>>= f), (c -= f), 0 === i.have)) {
                        (e.msg = "invalid bit length repeat"), (i.mode = 16209);
                        break;
                      }
                      (k = i.lens[i.have - 1]),
                        (p = 3 + (3 & l)),
                        (l >>>= 2),
                        (c -= 2);
                    } else if (17 === u) {
                      for (S = f + 3; c < S; ) {
                        if (0 === r) break t;
                        r--, (l += a[o++] << c), (c += 8);
                      }
                      (l >>>= f),
                        (c -= f),
                        (k = 0),
                        (p = 3 + (7 & l)),
                        (l >>>= 3),
                        (c -= 3);
                    } else {
                      for (S = f + 7; c < S; ) {
                        if (0 === r) break t;
                        r--, (l += a[o++] << c), (c += 8);
                      }
                      (l >>>= f),
                        (c -= f),
                        (k = 0),
                        (p = 11 + (127 & l)),
                        (l >>>= 7),
                        (c -= 7);
                    }
                    if (i.have + p > i.nlen + i.ndist) {
                      (e.msg = "invalid bit length repeat"), (i.mode = 16209);
                      break;
                    }
                    for (; p--; ) i.lens[i.have++] = k;
                  }
                }
                if (16209 === i.mode) break;
                if (0 === i.lens[256]) {
                  (e.msg = "invalid code -- missing end-of-block"),
                    (i.mode = 16209);
                  break;
                }
                if (
                  ((i.lenbits = 9),
                  (T = { bits: i.lenbits }),
                  (x = tg(1, i.lens, 0, i.nlen, i.lencode, 0, i.work, T)),
                  (i.lenbits = T.bits),
                  x)
                ) {
                  (e.msg = "invalid literal/lengths set"), (i.mode = 16209);
                  break;
                }
                if (
                  ((i.distbits = 6),
                  (i.distcode = i.distdyn),
                  (T = { bits: i.distbits }),
                  (x = tg(
                    2,
                    i.lens,
                    i.nlen,
                    i.ndist,
                    i.distcode,
                    0,
                    i.work,
                    T
                  )),
                  (i.distbits = T.bits),
                  x)
                ) {
                  (e.msg = "invalid distances set"), (i.mode = 16209);
                  break;
                }
                if (((i.mode = 16199), t === tu)) break t;
              case 16199:
                i.mode = 16200;
              case 16200:
                if (r >= 6 && d >= 258) {
                  (e.next_out = s),
                    (e.avail_out = d),
                    (e.next_in = o),
                    (e.avail_in = r),
                    (i.hold = l),
                    (i.bits = c),
                    tc(e, m),
                    (s = e.next_out),
                    (n = e.output),
                    (d = e.avail_out),
                    (o = e.next_in),
                    (a = e.input),
                    (r = e.avail_in),
                    (l = i.hold),
                    (c = i.bits),
                    16191 === i.mode && (i.back = -1);
                  break;
                }
                for (
                  i.back = 0;
                  (f = (A = i.lencode[l & ((1 << i.lenbits) - 1)]) >>> 24),
                    (_ = (A >>> 16) & 255),
                    (u = 65535 & A),
                    !(f <= c);

                ) {
                  if (0 === r) break t;
                  r--, (l += a[o++] << c), (c += 8);
                }
                if (_ && (240 & _) == 0) {
                  for (
                    y = f, w = _, v = u;
                    (f =
                      (A = i.lencode[v + ((l & ((1 << (y + w)) - 1)) >> y)]) >>>
                      24),
                      (_ = (A >>> 16) & 255),
                      (u = 65535 & A),
                      !(y + f <= c);

                  ) {
                    if (0 === r) break t;
                    r--, (l += a[o++] << c), (c += 8);
                  }
                  (l >>>= y), (c -= y), (i.back += y);
                }
                if (
                  ((l >>>= f), (c -= f), (i.back += f), (i.length = u), 0 === _)
                ) {
                  i.mode = 16205;
                  break;
                }
                if (32 & _) {
                  (i.back = -1), (i.mode = 16191);
                  break;
                }
                if (64 & _) {
                  (e.msg = "invalid literal/length code"), (i.mode = 16209);
                  break;
                }
                (i.extra = 15 & _), (i.mode = 16201);
              case 16201:
                if (i.extra) {
                  for (S = i.extra; c < S; ) {
                    if (0 === r) break t;
                    r--, (l += a[o++] << c), (c += 8);
                  }
                  (i.length += l & ((1 << i.extra) - 1)),
                    (l >>>= i.extra),
                    (c -= i.extra),
                    (i.back += i.extra);
                }
                (i.was = i.length), (i.mode = 16202);
              case 16202:
                for (
                  ;
                  (f = (A = i.distcode[l & ((1 << i.distbits) - 1)]) >>> 24),
                    (_ = (A >>> 16) & 255),
                    (u = 65535 & A),
                    !(f <= c);

                ) {
                  if (0 === r) break t;
                  r--, (l += a[o++] << c), (c += 8);
                }
                if ((240 & _) == 0) {
                  for (
                    y = f, w = _, v = u;
                    (f =
                      (A =
                        i.distcode[v + ((l & ((1 << (y + w)) - 1)) >> y)]) >>>
                      24),
                      (_ = (A >>> 16) & 255),
                      (u = 65535 & A),
                      !(y + f <= c);

                  ) {
                    if (0 === r) break t;
                    r--, (l += a[o++] << c), (c += 8);
                  }
                  (l >>>= y), (c -= y), (i.back += y);
                }
                if (((l >>>= f), (c -= f), (i.back += f), 64 & _)) {
                  (e.msg = "invalid distance code"), (i.mode = 16209);
                  break;
                }
                (i.offset = u), (i.extra = 15 & _), (i.mode = 16203);
              case 16203:
                if (i.extra) {
                  for (S = i.extra; c < S; ) {
                    if (0 === r) break t;
                    r--, (l += a[o++] << c), (c += 8);
                  }
                  (i.offset += l & ((1 << i.extra) - 1)),
                    (l >>>= i.extra),
                    (c -= i.extra),
                    (i.back += i.extra);
                }
                if (i.offset > i.dmax) {
                  (e.msg = "invalid distance too far back"), (i.mode = 16209);
                  break;
                }
                i.mode = 16204;
              case 16204:
                if (0 === d) break t;
                if (((p = m - d), i.offset > p)) {
                  if ((p = i.offset - p) > i.whave && i.sane) {
                    (e.msg = "invalid distance too far back"), (i.mode = 16209);
                    break;
                  }
                  p > i.wnext
                    ? ((p -= i.wnext), (b = i.wsize - p))
                    : (b = i.wnext - p),
                    p > i.length && (p = i.length),
                    (g = i.window);
                } else (g = n), (b = s - i.offset), (p = i.length);
                p > d && (p = d), (d -= p), (i.length -= p);
                do n[s++] = g[b++];
                while (--p);
                0 === i.length && (i.mode = 16200);
                break;
              case 16205:
                if (0 === d) break t;
                (n[s++] = i.length), d--, (i.mode = 16200);
                break;
              case 16206:
                if (i.wrap) {
                  for (; c < 32; ) {
                    if (0 === r) break t;
                    r--, (l |= a[o++] << c), (c += 8);
                  }
                  if (
                    ((m -= d),
                    (e.total_out += m),
                    (i.total += m),
                    4 & i.wrap &&
                      m &&
                      (e.adler = i.check =
                        i.flags
                          ? ee(i.check, n, m, s - m)
                          : Q(i.check, n, m, s - m)),
                    (m = d),
                    4 & i.wrap && (i.flags ? l : tz(l)) !== i.check)
                  ) {
                    (e.msg = "incorrect data check"), (i.mode = 16209);
                    break;
                  }
                  (l = 0), (c = 0);
                }
                i.mode = 16207;
              case 16207:
                if (i.wrap && i.flags) {
                  for (; c < 32; ) {
                    if (0 === r) break t;
                    r--, (l += a[o++] << c), (c += 8);
                  }
                  if (4 & i.wrap && l !== (0xffffffff & i.total)) {
                    (e.msg = "incorrect length check"), (i.mode = 16209);
                    break;
                  }
                  (l = 0), (c = 0);
                }
                i.mode = 16208;
              case 16208:
                x = tw;
                break t;
              case 16209:
                x = tx;
                break t;
              case 16210:
                return tT;
              default:
                return tk;
            }
          return (
            (e.next_out = s),
            (e.avail_out = d),
            (e.next_in = o),
            (e.avail_in = r),
            (i.hold = l),
            (i.bits = c),
            (i.wsize ||
              (m !== e.avail_out &&
                i.mode < 16209 &&
                (i.mode < 16206 || t !== tf))) &&
              t$(e, e.output, e.next_out, m - e.avail_out),
            (h -= e.avail_in),
            (m -= e.avail_out),
            (e.total_in += h),
            (e.total_out += m),
            (i.total += m),
            4 & i.wrap &&
              m &&
              (e.adler = i.check =
                i.flags
                  ? ee(i.check, n, m, e.next_out - m)
                  : Q(i.check, n, m, e.next_out - m)),
            (e.data_type =
              i.bits +
              (i.last ? 64 : 0) +
              (16191 === i.mode ? 128 : 0) +
              (16199 === i.mode || 16194 === i.mode ? 256 : 0)),
            ((0 === h && 0 === m) || t === tf) && x === ty && (x = tS),
            x
          );
        },
        inflateEnd: (e) => {
          if (tE(e)) return tk;
          let t = e.state;
          return t.window && (t.window = null), (e.state = null), ty;
        },
        inflateGetHeader: (e, t) => {
          if (tE(e)) return tk;
          let i = e.state;
          return (2 & i.wrap) == 0 ? tk : ((i.head = t), (t.done = !1), ty);
        },
        inflateSetDictionary: (e, t) => {
          let i, a;
          let n = t.length;
          return tE(e) || (0 !== (i = e.state).wrap && 16190 !== i.mode)
            ? tk
            : 16190 === i.mode && (a = Q((a = 1), t, n, 0)) !== i.check
            ? tx
            : t$(e, t, n, n)
            ? ((i.mode = 16210), tT)
            : ((i.havedict = 1), ty);
        },
      },
      tB = function () {
        (this.text = 0),
          (this.time = 0),
          (this.xflags = 0),
          (this.os = 0),
          (this.extra = null),
          (this.extra_len = 0),
          (this.name = ""),
          (this.comment = ""),
          (this.hcrc = 0),
          (this.done = !1);
      };
    let tO = Object.prototype.toString,
      {
        Z_NO_FLUSH: tD,
        Z_FINISH: tL,
        Z_OK: tF,
        Z_STREAM_END: tj,
        Z_NEED_DICT: tZ,
        Z_STREAM_ERROR: tW,
        Z_DATA_ERROR: tq,
        Z_MEM_ERROR: tV,
      } = ei;
    function tJ(e) {
      this.options = e2.assign(
        { chunkSize: 65536, windowBits: 15, to: "" },
        e || {}
      );
      let t = this.options;
      t.raw &&
        t.windowBits >= 0 &&
        t.windowBits < 16 &&
        ((t.windowBits = -t.windowBits),
        0 === t.windowBits && (t.windowBits = -15)),
        t.windowBits >= 0 &&
          t.windowBits < 16 &&
          !(e && e.windowBits) &&
          (t.windowBits += 32),
        t.windowBits > 15 &&
          t.windowBits < 48 &&
          (15 & t.windowBits) == 0 &&
          (t.windowBits |= 15),
        (this.err = 0),
        (this.msg = ""),
        (this.ended = !1),
        (this.chunks = []),
        (this.strm = new e8()),
        (this.strm.avail_out = 0);
      let i = tN.inflateInit2(this.strm, t.windowBits);
      if (i !== tF) throw Error(et[i]);
      if (
        ((this.header = new tB()),
        tN.inflateGetHeader(this.strm, this.header),
        t.dictionary &&
          ("string" == typeof t.dictionary
            ? (t.dictionary = e4.string2buf(t.dictionary))
            : "[object ArrayBuffer]" === tO.call(t.dictionary) &&
              (t.dictionary = new Uint8Array(t.dictionary)),
          t.raw &&
            (i = tN.inflateSetDictionary(this.strm, t.dictionary)) !== tF))
      )
        throw Error(et[i]);
    }
    function tX(e, t) {
      let i = new tJ(t);
      if ((i.push(e), i.err)) throw i.msg || et[i.err];
      return i.result;
    }
    (tJ.prototype.push = function (e, t) {
      let i, a, n;
      let o = this.strm,
        s = this.options.chunkSize,
        r = this.options.dictionary;
      if (this.ended) return !1;
      for (
        a = t === ~~t ? t : !0 === t ? tL : tD,
          "[object ArrayBuffer]" === tO.call(e)
            ? (o.input = new Uint8Array(e))
            : (o.input = e),
          o.next_in = 0,
          o.avail_in = o.input.length;
        ;

      ) {
        for (
          0 === o.avail_out &&
            ((o.output = new Uint8Array(s)),
            (o.next_out = 0),
            (o.avail_out = s)),
            (i = tN.inflate(o, a)) === tZ &&
              r &&
              ((i = tN.inflateSetDictionary(o, r)) === tF
                ? (i = tN.inflate(o, a))
                : i === tq && (i = tZ));
          o.avail_in > 0 && i === tj && o.state.wrap > 0 && 0 !== e[o.next_in];

        )
          tN.inflateReset(o), (i = tN.inflate(o, a));
        switch (i) {
          case tW:
          case tq:
          case tZ:
          case tV:
            return this.onEnd(i), (this.ended = !0), !1;
        }
        if (
          ((n = o.avail_out), o.next_out && (0 === o.avail_out || i === tj))
        ) {
          if ("string" === this.options.to) {
            let e = e4.utf8border(o.output, o.next_out),
              t = o.next_out - e,
              i = e4.buf2string(o.output, e);
            (o.next_out = t),
              (o.avail_out = s - t),
              t && o.output.set(o.output.subarray(e, e + t), 0),
              this.onData(i);
          } else
            this.onData(
              o.output.length === o.next_out
                ? o.output
                : o.output.subarray(0, o.next_out)
            );
        }
        if (i !== tF || 0 !== n) {
          if (i === tj)
            return (
              (i = tN.inflateEnd(this.strm)),
              this.onEnd(i),
              (this.ended = !0),
              !0
            );
          if (0 === o.avail_in) break;
        }
      }
      return !0;
    }),
      (tJ.prototype.onData = function (e) {
        this.chunks.push(e);
      }),
      (tJ.prototype.onEnd = function (e) {
        e === tF &&
          ("string" === this.options.to
            ? (this.result = this.chunks.join(""))
            : (this.result = e2.flattenChunks(this.chunks))),
          (this.chunks = []),
          (this.err = e),
          (this.msg = this.strm.msg);
      });
    let {
        Deflate: tG,
        deflate: tK,
        deflateRaw: tQ,
        gzip: tY,
      } = {
        Deflate: td,
        deflate: tl,
        deflateRaw: function (e, t) {
          return ((t = t || {}).raw = !0), tl(e, t);
        },
        gzip: function (e, t) {
          return ((t = t || {}).gzip = !0), tl(e, t);
        },
        constants: ei,
      },
      {
        Inflate: t0,
        inflate: t1,
        inflateRaw: t2,
        ungzip: t5,
      } = {
        Inflate: tJ,
        inflate: tX,
        inflateRaw: function (e, t) {
          return ((t = t || {}).raw = !0), tX(e, t);
        },
        ungzip: tX,
        constants: ei,
      };
    function t6(e) {
      return /^\d+$/.test(e) && (e = Number.parseInt(e, 10)), e;
    }
    class t3 {
      constructor(e) {
        switch (typeof e) {
          case "string":
            if (0 === e.length) break;
            e.startsWith("?") && (e = e.slice(1)),
              e
                .split("&")
                .map((e) => e.split("="))
                .forEach(([e, t]) => {
                  this.#r.push(e ? decodeURIComponent(e) : e),
                    this.#d.push(t ? decodeURIComponent(t) : t);
                });
            break;
          case "object":
            if (Array.isArray(e))
              Object.entries(e).forEach(([e, t]) => {
                this.#r.push(e ? decodeURIComponent(e) : e),
                  this.#d.push(t ? decodeURIComponent(t) : t);
              });
            else if (Symbol.iterator in Object(e))
              for (let [t, i] of e)
                this.#r.push(t ? decodeURIComponent(t) : t),
                  this.#d.push(i ? decodeURIComponent(i) : i);
        }
        this.#l(this.#r, this.#d);
      }
      #c = "";
      #r = [];
      #d = [];
      #l(e, t) {
        0 === e.length
          ? (this.#c = "")
          : (this.#c = e
              .map((e, i) => {
                switch (typeof t[i]) {
                  case "object":
                    return `${encodeURIComponent(e)}=${encodeURIComponent(
                      JSON.stringify(t[i])
                    )}`;
                  case "boolean":
                  case "number":
                  case "string":
                    return `${encodeURIComponent(e)}=${encodeURIComponent(
                      t[i]
                    )}`;
                  default:
                    return encodeURIComponent(e);
                }
              })
              .join("&"));
      }
      append(e, t) {
        (e = decodeURIComponent(e)),
          t && (t = decodeURIComponent(t)),
          this.#r.push(e),
          this.#d.push(t),
          this.#l(this.#r, this.#d);
      }
      delete(e, t) {
        for (
          e = decodeURIComponent(e), t && (t = decodeURIComponent(t));
          this.#r.indexOf(e) > -1;

        )
          this.#d.splice(this.#r.indexOf(e), 1),
            this.#r.splice(this.#r.indexOf(e), 1);
        this.#l(this.#r, this.#d);
      }
      entries() {
        return this.#r.map((e, t) => [e, this.#d[t]]);
      }
      get(e) {
        return (e = decodeURIComponent(e)), this.#d[this.#r.indexOf(e)];
      }
      getAll(e) {
        return (
          (e = decodeURIComponent(e)),
          this.#d.filter((t, i) => this.#r[i] === e)
        );
      }
      has(e, t) {
        return (
          (e = decodeURIComponent(e)),
          t && (t = decodeURIComponent(t)),
          this.#r.indexOf(e) > -1
        );
      }
      keys() {
        return this.#r;
      }
      set(e, t) {
        if (
          ((e = decodeURIComponent(e)),
          t && (t = decodeURIComponent(t)),
          -1 === this.#r.indexOf(e))
        )
          this.append(e, t);
        else {
          let i = !0,
            a = [];
          (this.#r = this.#r.filter((n, o) =>
            n !== e
              ? (a.push(this.#d[o]), !0)
              : !!i && ((i = !1), a.push(t), !0)
          )),
            (this.#d = a),
            this.#l(this.#r, this.#d);
        }
      }
      sort() {
        let e = this.entries().sort();
        (this.#r = []),
          (this.#d = []),
          e.forEach((e) => {
            this.#r.push(e[0]), this.#d.push(e[1]);
          }),
          this.#l(this.#r, this.#d);
      }
      toString = () => this.#c;
      values = () => this.#d.values();
    }
    class t4 {
      constructor(e, t) {
        switch (typeof e) {
          case "string": {
            let i = /^(blob:|file:)?[a-zA-z]+:\/\/.*/.test(e),
              a = !!t && /^(blob:|file:)?[a-zA-z]+:\/\/.*/.test(t);
            if (i) this.href = e;
            else if (a) this.href = t + e;
            else
              throw TypeError(
                'URL string is not valid. If using a relative url, a second argument needs to be passed representing the base URL. Example: new URL("relative/path", "http://www.example.com");'
              );
            break;
          }
          case "object":
            break;
          default:
            throw TypeError("Invalid argument type.");
        }
      }
      #h = {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        password: "",
        pathname: "",
        port: Number.NaN,
        protocol: "",
        search: "",
        searchParams: new t3(""),
        username: "",
      };
      static #m =
        /^(?<scheme>([^:\/?#]+):)?(?:\/\/(?<authority>[^\/?#]*))?(?<path>[^?#]*)(?<query>\?([^#]*))?(?<hash>#(.*))?$/;
      static #p =
        /^(?<authentication>(?<username>[^:]*)(:(?<password>[^@]*))?@)?(?<hostname>[^:]+)(:(?<port>\d+))?$/;
      get hash() {
        return this.#h.hash;
      }
      set hash(e) {
        0 !== e.length &&
          (e.startsWith("#") && (e = e.slice(1)),
          (this.#h.hash = `#${encodeURIComponent(e)}`));
      }
      get host() {
        return this.port.length > 0
          ? `${this.hostname}:${this.port}`
          : this.hostname;
      }
      set host(e) {
        [this.hostname, this.port] = e.split(":", 2);
      }
      get hostname() {
        return encodeURIComponent(this.#h.hostname);
      }
      set hostname(e) {
        this.#h.hostname = e ?? "";
      }
      get href() {
        let e = "";
        return (
          this.username.length > 0 &&
            ((e += this.username),
            this.password.length > 0 && (e += `:${this.password}`),
            (e += "@")),
          `${this.protocol}//${e}${this.host}${this.pathname}${this.search}${this.hash}`
        );
      }
      set href(e) {
        (e.startsWith("blob:") || e.startsWith("file:")) && (e = e.slice(5));
        let t = e.match(t4.#m);
        if (!t) throw TypeError("Invalid URL format.");
        this.protocol = t.groups.scheme ?? "";
        let i = t.groups.authority.match(t4.#p);
        (this.username = i.groups.username ?? ""),
          (this.password = i.groups.password ?? ""),
          (this.hostname = i.groups.hostname ?? ""),
          (this.port = i.groups.port ?? ""),
          (this.pathname = t.groups.path ?? ""),
          (this.search = t.groups.query ?? ""),
          (this.hash = t.groups.hash ?? "");
      }
      get origin() {
        return `${this.protocol}//${this.host}`;
      }
      get password() {
        return encodeURIComponent(this.#h.password);
      }
      set password(e) {
        this.username.length > 0 && (this.#h.password = e ?? "");
      }
      get pathname() {
        return `/${this.#h.pathname}`;
      }
      set pathname(e) {
        (e = `${e}`).startsWith("/") && (e = e.slice(1)),
          (this.#h.pathname = e);
      }
      get port() {
        if (Number.isNaN(this.#h.port)) return "";
        let e = this.#h.port.toString();
        return ("ftp:" === this.protocol && "21" === e) ||
          ("http:" === this.protocol && "80" === e) ||
          ("https:" === this.protocol && "443" === e)
          ? ""
          : e;
      }
      set port(e) {
        if ("" === e) this.#h.port = Number.NaN;
        else {
          let t = Number.parseInt(e, 10);
          t >= 0 && t < 65535 && (this.#h.port = t);
        }
      }
      get protocol() {
        return `${this.#h.protocol}:`;
      }
      set protocol(e) {
        e.endsWith(":") && (e = e.slice(0, -1)), (this.#h.protocol = e);
      }
      get search() {
        return ((this.#h.search = this.searchParams.toString()),
        this.#h.search.length > 0)
          ? `?${this.#h.search}`
          : "";
      }
      set search(e) {
        (e = `${e}`).startsWith("?") && (e = e.slice(1)),
          (this.#h.search = e),
          (this.#h.searchParams = new t3(this.#h.search));
      }
      get searchParams() {
        return this.#h.searchParams;
      }
      get username() {
        return encodeURIComponent(this.#h.username);
      }
      set username(e) {
        this.#h.username = e ?? "";
      }
      static parse = (e, t) => new t4(e, t);
      toString = () => this.href;
      toJSON = () =>
        JSON.stringify({
          hash: this.hash,
          host: this.host,
          hostname: this.hostname,
          href: this.href,
          origin: this.origin,
          password: this.password,
          pathname: this.pathname,
          port: this.port,
          protocol: this.protocol,
          search: this.search,
          searchParams: this.searchParams,
          username: this.username,
        });
    }
    let t8 = {
        Enhanced: {
          Settings: {
            Home: {
              Switch: "true",
              Top_left: "mine",
              Top: ["消息Top"],
              Top_more: [],
              Tab: [
                "直播tab",
                "推荐tab",
                "hottopic",
                "bangumi",
                "anime",
                "film",
                "koreavtw",
              ],
              Tab_default: "bangumi",
            },
            Bottom: ["home", "dynamic", "ogv", "会员购Bottom", "我的Bottom"],
            Mine: {
              Switch: "true",
              CreatorCenter: [],
              Recommend: ["400", "402", "404", "403"],
              More: ["407", "410", "1028"],
              iPad: {
                Switch: "true",
                Upper: [],
                Recommend: ["789", "790", "791", "793", "794", "2542"],
                More: ["797", "798"],
              },
            },
            Region: {
              Switch: "true",
              Index: [
                "1",
                "3",
                "4",
                "5",
                "11",
                "13",
                "23",
                "36",
                "119",
                "129",
                "155",
                "160",
                "167",
                "177",
                "181",
                "188",
                "202",
                "211",
                "217",
                "223",
                "234",
                "6544",
                "65537",
                "65539",
                "65541",
                "65545",
                "65549",
                "65550",
                "65551",
                "65552",
                "65553",
                "65555",
                "65556",
                "65557",
                "65559",
                "65560",
                "65561",
                "65563",
                "95636",
                "168312",
              ],
            },
          },
          Configs: {
            Tab: {
              tab: [
                {
                  id: 2036,
                  name: "直播",
                  uri: "bilibili://live/home",
                  tab_id: "直播tab",
                },
                {
                  id: 2037,
                  name: "推荐",
                  uri: "bilibili://pegasus/promo",
                  tab_id: "推荐tab",
                },
                {
                  id: 780,
                  name: "热门",
                  uri: "bilibili://pegasus/hottopic",
                  tab_id: "hottopic",
                },
                {
                  id: 545,
                  name: "追番",
                  uri: "bilibili://pgc/home",
                  tab_id: "bangumi",
                },
                {
                  id: 774,
                  name: "动画（港澳台）",
                  uri: "bilibili://following/home_activity_tab/6544",
                  tab_id: "anime",
                },
                {
                  id: 151,
                  name: "影视",
                  uri: "bilibili://pgc/cinema-tab",
                  tab_id: "film",
                },
                {
                  id: 801,
                  name: "韩综（港澳台）",
                  uri: "bilibili://following/home_activity_tab/95636",
                  tab_id: "koreavtw",
                },
                {
                  id: 861,
                  name: "游戏",
                  uri: "bilibili://pegasus/vertical/802",
                  tab_id: "game",
                },
                {
                  id: 843,
                  name: "minecraft",
                  uri: "bilibili://pegasus/vertical/2485003",
                  tab_id: "mctab",
                },
                {
                  id: 1229,
                  name: "动画同人",
                  uri: "bilibili://pegasus/vertical/27555107",
                  tab_id: "dhtr",
                },
                {
                  id: 1405,
                  name: "搞笑",
                  uri: "bilibili://pegasus/vertical/1833",
                  tab_id: "gaoxiao",
                },
                {
                  id: 2280,
                  name: "校园",
                  uri: "bilibili://campus/home_tab",
                  tab_id: "school",
                },
                {
                  id: 1716,
                  name: "数码",
                  uri: "bilibili://pegasus/vertical/13807",
                  tab_id: "kj",
                },
                {
                  id: 136117,
                  name: "新征程",
                  uri: "bilibili://following/home_activity_tab/136117",
                  tab_id: "165",
                  color: "#DD1225",
                },
              ],
              top: [
                {
                  id: 222,
                  icon: "http://i0.hdslb.com/bfs/archive/734a3b610a953df398bbe6d787944514dcd94a46.png",
                  name: "游戏中心",
                  uri: "bilibili://game_center/home",
                  tab_id: "游戏中心Top",
                },
                {
                  id: 108,
                  icon: "http://i0.hdslb.com/bfs/archive/9d1c0985b9d0e2da2c2f919cc2ee0e36ea41fd90.png",
                  name: "会员购",
                  uri: "bilibili://mall/home/",
                  tab_id: "会员购Top",
                },
                {
                  id: 176,
                  icon: "http://i0.hdslb.com/bfs/archive/d43047538e72c9ed8fd8e4e34415fbe3a4f632cb.png",
                  name: "消息",
                  uri: "bilibili://link/im_home",
                  tab_id: "消息Top",
                },
              ],
              bottom: [
                {
                  id: 177,
                  icon: "http://i0.hdslb.com/bfs/archive/63d7ee88d471786c1af45af86e8cb7f607edf91b.png",
                  icon_selected:
                    "http://i0.hdslb.com/bfs/archive/e5106aa688dc729e7f0eafcbb80317feb54a43bd.png",
                  name: "首页",
                  uri: "bilibili://main/home/",
                  tab_id: "home",
                },
                {
                  id: 103,
                  icon: "http://i0.hdslb.com/bfs/archive/b4f621f268c1f9eda501805135f132aa9498b0ba.png",
                  icon_selected:
                    "http://i0.hdslb.com/bfs/archive/94539249e59621214f7dc1226cf38a2b8fe4c64f.png",
                  name: "频道",
                  uri: "bilibili://pegasus/channel/",
                  tab_id: "频道Bottom",
                },
                {
                  id: 179,
                  icon: "http://i0.hdslb.com/bfs/archive/86dfbe5fa32f11a8588b9ae0fccb77d3c27cedf6.png",
                  icon_selected:
                    "http://i0.hdslb.com/bfs/archive/25b658e1f6b6da57eecba328556101dbdcb4b53f.png",
                  name: "动态",
                  uri: "bilibili://following/home/",
                  tab_id: "dynamic",
                },
                {
                  id: 670,
                  icon: "http://i0.hdslb.com/bfs/feed-admin/c25cabacb40e9df2ccf54c327350e1afc4ae2f8c.png",
                  name: "发布",
                  uri: "bilibili://uper/center_plus?relation_from=center_plus&tab_index=2",
                  tab_id: "publish",
                  dialog_items: [
                    {
                      id: 617,
                      name: "开直播",
                      icon: "http://i0.hdslb.com/bfs/feed-admin/01f9b3f8ed61a4e59af693da9fcd38fc342ee7e5.png",
                      uri: "activity://liveStreaming/home?source_event=14",
                    },
                    {
                      id: 618,
                      name: "拍摄",
                      icon: "http://i0.hdslb.com/bfs/feed-admin/30636aa60e594550ec47422e3875b4345e7d6017.png",
                      uri: "bilibili://uper/user_center/add_archive/?from=1&is_new_ui=1&relation_from=center_plus",
                    },
                    {
                      id: 619,
                      name: "上传",
                      icon: "http://i0.hdslb.com/bfs/feed-admin/55c3c112f4885adc6cce0b4b94149409fd1c147b.png",
                      uri: "bilibili://uper/user_center/add_archive/?from=0&is_new_ui=1&relation_from=center_plus",
                    },
                    {
                      id: 620,
                      name: "模板创作",
                      icon: "http://i0.hdslb.com/bfs/feed-admin/4e5188d8390754655dee0fdfd90c1088da3cdf90.png",
                      uri: "bilibili://uper/user_center/add_archive/?from=2&is_new_ui=1&relation_from=center_plus",
                    },
                  ],
                  type: 3,
                },
                {
                  id: 884,
                  icon: "http://i0.hdslb.com/bfs/feed-admin/68b1625cef3a8315d6fe3fbfd2a8b06c905f323a.png",
                  icon_selected:
                    "http://i0.hdslb.com/bfs/feed-admin/1903c6f1dc881ed4c459ab337767fd8436cda159.png",
                  name: "节目",
                  uri: "bilibili://following/home_bottom_tab_activity_tab/168312",
                  tab_id: "ogv",
                  type: 4,
                },
                {
                  id: 242,
                  icon: "http://i0.hdslb.com/bfs/archive/6090d5fa7ece2a94de839e7cce4f1e774dae7779.png",
                  icon_selected:
                    "http://i0.hdslb.com/bfs/archive/eeaf83fb7157000776dd93f61702a049f56801d3.png",
                  name: "会员购",
                  uri: "bilibili://mall/home",
                  tab_id: "会员购Bottom",
                },
                {
                  id: 105,
                  icon: "http://i0.hdslb.com/bfs/archive/93dae0f0fb2c9887effb2840800d5b639be69351.png",
                  icon_selected:
                    "http://i0.hdslb.com/bfs/archive/f96bfd9ffea2e51443aed44dba6d76b7b34891c8.png",
                  name: "消息",
                  uri: "bilibili://link/im_home",
                  tab_id: "消息Bottom",
                },
                {
                  id: 181,
                  icon: "http://i0.hdslb.com/bfs/archive/4b0b2c49ffeb4f0c2e6a4cceebeef0aab1c53fe1.png",
                  icon_selected:
                    "http://i0.hdslb.com/bfs/archive/a54a8009116cb896e64ef14dcf50e5cade401e00.png",
                  name: "我的",
                  uri: "bilibili://user_center/",
                  tab_id: "我的Bottom",
                },
              ],
              top_more: [
                {
                  id: 621,
                  icon: "http://i0.hdslb.com/bfs/feed-admin/f95dfa31c793c857af6e7b65b5387a05f30d31ba.png",
                  name: "更多分区",
                  uri: "bilibili://main/top_category",
                },
                {
                  id: 922,
                  icon: "http://i0.hdslb.com/bfs/feed-admin/38beac42189ad4d838d20259a5b2cdfd302fef40.png",
                  name: "搜索",
                  uri: "bilibili://search",
                },
              ],
              top_left: {
                mine: {
                  exp: 0,
                  head_tag: "",
                  url: "bilibili://user_center/",
                  goto: 1,
                  story_background_image: "",
                  story_foreground_image: "",
                  listen_background_image: "",
                  listen_foreground_image: "",
                },
                videoshortcut: {
                  exp: 1,
                  head_tag:
                    "https://i0.hdslb.com/bfs/app/92e7b36c3bd10c850e8a2ba85d19566937751540.png",
                  url: "bilibili://videoshortcut?user_reg_state=0",
                  goto: 2,
                  story_background_image:
                    "http://i0.hdslb.com/bfs/app/7391267ec11cfe99823a8cfd80532a7bc6eca390.png",
                  story_foreground_image:
                    "http://i0.hdslb.com/bfs/app/98098cfd9349b7500c233216169d768cd536d305.png",
                  listen_background_image:
                    "http://i0.hdslb.com/bfs/app/365848675f453e32b42567ba9e249a347a5df061.png",
                  listen_foreground_image:
                    "http://i0.hdslb.com/bfs/app/986ee5e963237d511802c4084c83c2f228e97369.png",
                },
              },
            },
            Mine: {
              sections_v2: [
                {
                  items: [
                    {
                      id: 396,
                      title: "离线缓存",
                      icon: "http://i0.hdslb.com/bfs/archive/5fc84565ab73e716d20cd2f65e0e1de9495d56f8.png",
                      common_op_item: {},
                      uri: "bilibili://user_center/download",
                    },
                    {
                      id: 397,
                      title: "历史记录",
                      icon: "http://i0.hdslb.com/bfs/archive/8385323c6acde52e9cd52514ae13c8b9481c1a16.png",
                      common_op_item: {},
                      uri: "bilibili://user_center/history",
                    },
                    {
                      id: 398,
                      title: "我的收藏",
                      icon: "http://i0.hdslb.com/bfs/archive/d79b19d983067a1b91614e830a7100c05204a821.png",
                      common_op_item: {},
                      uri: "bilibili://user_center/favourite",
                    },
                    {
                      id: 399,
                      title: "稍后再看",
                      icon: "http://i0.hdslb.com/bfs/archive/63bb768caa02a68cb566a838f6f2415f0d1d02d6.png",
                      need_login: 1,
                      uri: "bilibili://user_center/watch_later",
                      common_op_item: {},
                    },
                  ],
                  style: 1,
                  button: {},
                },
                {
                  up_title: "创作中心",
                  title: "创作中心",
                  items: [
                    {
                      need_login: 1,
                      display: 1,
                      id: 171,
                      title: "创作中心",
                      global_red_dot: 1,
                      uri: "bilibili://uper/homevc",
                      icon: "http://i0.hdslb.com/bfs/archive/d3aad2d07538d2d43805f1fa14a412d7a45cc861.png",
                    },
                    {
                      need_login: 1,
                      display: 1,
                      id: 172,
                      title: "稿件管理",
                      global_red_dot: 1,
                      uri: "bilibili://uper/user_center/archive_list",
                      icon: "http://i0.hdslb.com/bfs/archive/97acb2d8dec09b296a38f7f7093d651947d13b91.png",
                    },
                    {
                      need_login: 1,
                      display: 1,
                      id: 174,
                      title: "有奖活动",
                      red_dot: 1,
                      global_red_dot: 1,
                      uri: "https://member.bilibili.com/york/hot-activity",
                      icon: "http://i0.hdslb.com/bfs/archive/7f4fa86d99bf3814bf10f8ee5d6c8c9db6e931c8.png",
                    },
                    {
                      need_login: 1,
                      display: 1,
                      id: 533,
                      title: "任务中心",
                      global_red_dot: 1,
                      uri: "https://member.bilibili.com/york/mission-center?navhide=1",
                      icon: "http://i0.hdslb.com/bfs/archive/ae18624fd2a7bdda6d95ca606d5e4cf2647bfa4d.png",
                    },
                    {
                      id: 707,
                      title: "主播中心",
                      icon: "http://i0.hdslb.com/bfs/feed-admin/48e17ccd0ce0cfc9c7826422d5e47ce98f064c2a.png",
                      need_login: 1,
                      uri: "https://live.bilibili.com/p/html/live-app-anchor-center/index.html?is_live_webview=1#/",
                      display: 1,
                    },
                    {
                      id: 708,
                      title: "主播活动",
                      icon: "http://i0.hdslb.com/bfs/feed-admin/5bc5a1aa8dd4bc5d6f5222d29ebaca9ef9ce37de.png",
                      need_login: 1,
                      uri: "https://live.bilibili.com/activity/live-activity-full/activity_center/mobile.html?is_live_webview=1",
                      display: 1,
                    },
                    {
                      id: 709,
                      title: "开播福利",
                      icon: "https://i0.hdslb.com/bfs/legacy/97a52b64cbd8c099d6520c6be57006c954ec0f5c.png",
                      need_login: 1,
                      uri: "https://live.bilibili.com/p/html/live-anchor-galaxy/task_center/?source_event=16&week_live_btn=1&is_live_full_webview=1#/",
                      display: 1,
                    },
                    {
                      id: 710,
                      title: "我的直播",
                      icon: "http://i0.hdslb.com/bfs/feed-admin/a9be4fa50ea4772142c1fc7992cde28294d63021.png",
                      need_login: 1,
                      uri: "https://live.bilibili.com/p/html/live-app-center/index.html?is_live_webview=1&foreground=pink&background=white",
                      display: 1,
                    },
                  ],
                  style: 1,
                  button: {
                    icon: "http://i0.hdslb.com/bfs/archive/205f47675eaaca7912111e0e9b1ac94cb985901f.png",
                    style: 1,
                    url: "bilibili://uper/user_center/archive_selection",
                    text: "发布",
                  },
                  type: 1,
                },
                {
                  title: "推荐服务",
                  items: [
                    {
                      id: 400,
                      title: "我的课程",
                      icon: "http://i0.hdslb.com/bfs/archive/aa3a13c287e4d54a62b75917dd9970a3cde472e1.png",
                      common_op_item: {},
                      uri: "https://m.bilibili.com/cheese/mine?navhide=1&native.theme=1&night=0&spm_id_from=main.my-information.0.0.pv&csource=Me_myclass",
                    },
                    {
                      id: 401,
                      title: "看视频免流量",
                      icon: "http://i0.hdslb.com/bfs/archive/393dd15a4f0a149e016cd81b55bd8bd6fe40882c.png",
                      common_op_item: {},
                      uri: "bilibili://user_center/free_traffic",
                    },
                    {
                      id: 402,
                      title: "个性装扮",
                      icon: "http://i0.hdslb.com/bfs/archive/0bcad10661b50f583969b5a188c12e5f0731628c.png",
                      common_op_item: {},
                      uri: "https://www.bilibili.com/h5/mall/home?navhide=1&f_source=shop",
                    },
                    {
                      id: 403,
                      title: "游戏中心",
                      icon: "http://i0.hdslb.com/bfs/archive/873e3c16783fe660b111c02ebc4c50279cb5db57.png",
                      common_op_item: {},
                      uri: "bilibili://game_center/user?sourceFrom=100003",
                    },
                    {
                      id: 404,
                      title: "我的钱包",
                      icon: "http://i0.hdslb.com/bfs/archive/f416634e361824e74a855332b6ff14e2e7c2e082.png",
                      need_login: 1,
                      common_op_item: {},
                      uri: "bilibili://bilipay/mine_wallet",
                    },
                    {
                      id: 406,
                      title: "直播中心",
                      icon: "http://i0.hdslb.com/bfs/archive/1db5791746a0112890b77a0236baf263d71ecb27.png",
                      common_op_item: {},
                      uri: "bilibili://user_center/live_center",
                    },
                    {
                      id: 423,
                      title: "邀好友赚红包",
                      icon: "http://i0.hdslb.com/bfs/archive/de39fc8899204a4e5abaab68fa4bd604068ce124.png",
                      common_op_item: {},
                      uri: "https://www.bilibili.com/blackboard/redpack/activity-8SX5lYqUj.html?from=wode",
                      red_dot_for_new: !0,
                    },
                    {
                      id: 514,
                      title: "社区中心",
                      icon: "http://i0.hdslb.com/bfs/archive/551a39b7539e64d3b15775295c4b2e13e5513b43.png",
                      need_login: 1,
                      uri: "https://www.bilibili.com/blackboard/dynamic/169422",
                      common_op_item: {},
                    },
                    {
                      id: 544,
                      title: "创作中心",
                      icon: "http://i0.hdslb.com/bfs/archive/a879489af0406067c39940316396ae63aeefe088.png",
                      need_login: 1,
                      uri: "bilibili://upper/homevc",
                      common_op_item: {},
                    },
                    {
                      id: 622,
                      title: "会员购中心",
                      icon: "http://i0.hdslb.com/bfs/archive/19c794f01def1a267b894be84427d6a8f67081a9.png",
                      common_op_item: {},
                      uri: "bilibili://mall/mine?msource=mine",
                    },
                    {
                      id: 924,
                      title: "哔哩哔哩公益",
                      icon: "http://i0.hdslb.com/bfs/feed-admin/a943016e8bef03222998b4760818894ba2bd5c80.png",
                      common_op_item: {},
                      uri: "https://love.bilibili.com/h5/?navhide=1&c=1",
                    },
                    {
                      id: 990,
                      title: "能量加油站",
                      icon: "http://i0.hdslb.com/bfs/feed-admin/6acb0cb1f719703c62eb443ba6cf3abfc51164ab.png",
                      common_op_item: {},
                      uri: "https://www.bilibili.com/blackboard/dynamic/306424",
                    },
                  ],
                  style: 1,
                  button: {},
                },
                {
                  title: "更多服务",
                  items: [
                    {
                      id: 407,
                      title: "联系客服",
                      icon: "http://i0.hdslb.com/bfs/archive/7ca840cf1d887a45ee1ef441ab57845bf26ef5fa.png",
                      common_op_item: {},
                      uri: "bilibili://user_center/feedback",
                    },
                    {
                      id: 410,
                      title: "设置",
                      icon: "http://i0.hdslb.com/bfs/archive/e932404f2ee62e075a772920019e9fbdb4b5656a.png",
                      common_op_item: {},
                      uri: "bilibili://user_center/setting",
                    },
                    {
                      id: 741,
                      title: "我的钱包",
                      icon: "http://i0.hdslb.com/bfs/archive/f416634e361824e74a855332b6ff14e2e7c2e082.png",
                      need_login: 1,
                      uri: "bilibili://bilipay/mine_wallet",
                      common_op_item: {},
                    },
                    {
                      id: 742,
                      title: "稿件管理",
                      icon: "http://i0.hdslb.com/bfs/archive/97acb2d8dec09b296a38f7f7093d651947d13b91.png",
                      need_login: 1,
                      uri: "bilibili://uper//user_center/manuscript-list/",
                      common_op_item: {},
                    },
                    {
                      id: 812,
                      title: "听视频",
                      icon: "http://i0.hdslb.com/bfs/feed-admin/97276c5df099e516946682edf4ef10dc6b18c7dc.png",
                      common_op_item: {},
                      uri: "bilibili://podcast",
                      red_dot_for_new: !0,
                    },
                    {
                      id: 950,
                      title: "青少年模式",
                      icon: "http://i0.hdslb.com/bfs/archive/68acfd37a735411ad56b59b3253acc33f94f7046.png",
                      common_op_item: {},
                      uri: "bilibili://user_center/teenagersmode",
                    },
                    {
                      id: 964,
                      title: "青少年守护",
                      icon: "http://i0.hdslb.com/bfs/feed-admin/90f5920ac351da19c6451757ad71704fcea8192b.png",
                      common_op_item: {},
                      uri: "https://www.bilibili.com/h5/teenagers/home?navhide=1",
                    },
                    {
                      id: 1028,
                      title: "我的NFT",
                      icon: "http://i0.hdslb.com/bfs/feed-admin/569a9178aa707f2f2494e34bb6eb1d9d14bd9a7b.png",
                      need_login: 1,
                      uri: "https://www.bilibili.com/h5/pangu/gat?navhide=1",
                      common_op_item: {},
                    },
                  ],
                  style: 2,
                  button: {},
                },
              ],
              ipad_upper_sections: [
                {
                  id: 785,
                  title: "投稿",
                  uri: "/uper/user_center/add_archive",
                  icon: "http://i0.hdslb.com/bfs/feed-admin/d0ad3c04df2253bfe0261cadd7adca1f1433eb50.png",
                  mng_resource: { icon_id: 0, icon: "" },
                },
                {
                  id: 786,
                  title: "创作首页",
                  uri: "/uper/homevc",
                  icon: "http://i0.hdslb.com/bfs/feed-admin/d20dfed3b403c895506b1c92ecd5874abb700c01.png",
                  mng_resource: { icon_id: 0, icon: "" },
                },
                {
                  id: 787,
                  title: "稿件管理",
                  uri: "/uper/user_center/archive_list",
                  icon: "http://i0.hdslb.com/bfs/feed-admin/325609d2b6059f278683d773636bf48681da9d6c.png",
                  mng_resource: { icon_id: 0, icon: "" },
                },
                {
                  id: 788,
                  title: "有奖活动",
                  uri: "https://www.bilibili.com/blackboard/x/activity-tougao-h5/all",
                  icon: "http://i0.hdslb.com/bfs/feed-admin/3ad73f45adfdeb999bb11a306dc8c8e169b426d9.png",
                  mng_resource: { icon_id: 0, icon: "" },
                },
              ],
              ipad_recommend_sections: [
                {
                  id: 789,
                  title: "我的关注",
                  uri: "bilibili://user_center/myfollows",
                  icon: "http://i0.hdslb.com/bfs/feed-admin/fdd7f676030c6996d36763a078442a210fc5a8c0.png",
                  mng_resource: { icon_id: 0, icon: "" },
                },
                {
                  id: 790,
                  title: "我的消息",
                  uri: "bilibili://link/im_home",
                  icon: "http://i0.hdslb.com/bfs/feed-admin/e1471740130a08a48b02a4ab29ed9d5f2281e3bf.png",
                  mng_resource: { icon_id: 0, icon: "" },
                },
                {
                  id: 791,
                  title: "我的钱包",
                  uri: "bilibili://bilipay/mine_wallet",
                  icon: "http://i0.hdslb.com/bfs/feed-admin/180f089fd2debb522919b22e08546cf5bc279026.png",
                  mng_resource: { icon_id: 0, icon: "" },
                },
                {
                  id: 792,
                  title: "直播中心",
                  uri: "bilibili://user_center/live_center",
                  icon: "http://i0.hdslb.com/bfs/feed-admin/d7255968066cef435370b18e87bdf3ac62d2bc14.png",
                  mng_resource: { icon_id: 0, icon: "" },
                },
                {
                  id: 793,
                  title: "大会员",
                  uri: "bilibili://user_center/vip",
                  icon: "http://i0.hdslb.com/bfs/feed-admin/a7d52c532beaedbec7c40883788b5d9c8adf96be.png",
                  mng_resource: { icon_id: 0, icon: "" },
                },
                {
                  id: 794,
                  title: "我的课程",
                  uri: "bilibili://user_center/course",
                  icon: "http://i0.hdslb.com/bfs/feed-admin/a2139eb7b1ac17c12fa26aff70efe5852195c53d.png",
                  mng_resource: { icon_id: 0, icon: "" },
                },
                {
                  id: 2542,
                  title: "我的游戏",
                  uri: "bilibili://hd/game/my_game",
                  icon: "https://i0.hdslb.com/bfs/legacy/59bf32e258af044a47badb39f3093286d92eb6d3.png",
                  mng_resource: { icon_id: 0, icon: "" },
                },
              ],
              ipad_more_sections: [
                {
                  id: 797,
                  title: "我的客服",
                  uri: "bilibili://user_center/feedback",
                  icon: "http://i0.hdslb.com/bfs/feed-admin/7801a6180fb67cf5f8ee05a66a4668e49fb38788.png",
                  mng_resource: { icon_id: 0, icon: "" },
                },
                {
                  id: 798,
                  title: "设置",
                  uri: "bilibili://user_center/setting",
                  icon: "http://i0.hdslb.com/bfs/feed-admin/34e8faea00b3dd78977266b58d77398b0ac9410b.png",
                  mng_resource: { icon_id: 0, icon: "" },
                },
                {
                  id: 1070,
                  title: "青少年守护",
                  uri: "https://www.bilibili.com/h5/teenagers/home?navhide=1",
                  icon: "https://i0.hdslb.com/bfs/feed-admin/90f5920ac351da19c6451757ad71704fcea8192b.png",
                  mng_resource: { icon_id: 0, icon: "" },
                },
              ],
            },
            Region: {
              index: [
                {
                  tid: 1,
                  reid: 0,
                  name: "动画",
                  logo: "http://i0.hdslb.com/bfs/archive/9b3bb8cfc8d87809ffa409bc65def8d8c3eaf72b.png",
                  goto: "0",
                  param: "",
                  uri: "bilibili://region/1",
                  type: 0,
                  children: [
                    {
                      tid: 24,
                      reid: 1,
                      name: "MAD\xb7AMV",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 25,
                      reid: 1,
                      name: "MMD\xb73D",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 27,
                      reid: 1,
                      name: "综合",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 47,
                      reid: 1,
                      name: "短片\xb7手书\xb7配音",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 210,
                      reid: 1,
                      name: "手办\xb7模玩",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 86,
                      reid: 1,
                      name: "特摄",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 253,
                      reid: 1,
                      name: "动漫杂谈",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                  ],
                  config: [
                    { scenes_name: "region", scenes_type: "bottom" },
                    { scenes_name: "rank" },
                    { scenes_name: "search" },
                    { scenes_name: "tag" },
                  ],
                },
                {
                  tid: 3,
                  reid: 0,
                  name: "音乐",
                  logo: "http://i0.hdslb.com/bfs/archive/3a99c51d00038ced3989686b6f3c49d01aa34207.png",
                  goto: "0",
                  param: "",
                  uri: "bilibili://region/3",
                  type: 0,
                  children: [
                    {
                      tid: 28,
                      reid: 3,
                      name: "原创音乐",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 29,
                      reid: 3,
                      name: "音乐现场",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 30,
                      reid: 3,
                      name: "VOCALOID\xb7UTAU",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 31,
                      reid: 3,
                      name: "翻唱",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 59,
                      reid: 3,
                      name: "演奏",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 193,
                      reid: 3,
                      name: "MV",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 243,
                      reid: 3,
                      name: "乐评盘点",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 244,
                      reid: 3,
                      name: "音乐教学",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 130,
                      reid: 3,
                      name: "音乐综合",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                  ],
                  config: [
                    { scenes_name: "region", scenes_type: "bottom" },
                    { scenes_name: "rank" },
                    { scenes_name: "search" },
                    { scenes_name: "tag" },
                  ],
                },
                {
                  tid: 4,
                  reid: 0,
                  name: "游戏",
                  logo: "http://i0.hdslb.com/bfs/archive/9c88ce1adaecf31e27121bdbb5a29824d655d0a6.png",
                  goto: "0",
                  param: "",
                  uri: "bilibili://region/4",
                  type: 0,
                  children: [
                    {
                      tid: 17,
                      reid: 4,
                      name: "单机游戏",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 171,
                      reid: 4,
                      name: "电子竞技",
                      logo: "http://i0.hdslb.com/bfs/archive/0511bbb27a1f175a91bf34cfd46a8a8303e607bd.png",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 172,
                      reid: 4,
                      name: "手机游戏",
                      logo: "http://i0.hdslb.com/bfs/archive/572945562c8f04437564ba37083f1c2c5ca9432b.png",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 65,
                      reid: 4,
                      name: "网络游戏",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 173,
                      reid: 4,
                      name: "桌游棋牌",
                      logo: "http://i0.hdslb.com/bfs/archive/95acf71eacc1cf1fa542d0dcbf3480bafaa6005c.png",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 121,
                      reid: 4,
                      name: "GMV",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 136,
                      reid: 4,
                      name: "音游",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 19,
                      reid: 4,
                      name: "Mugen",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                  ],
                  config: [
                    { scenes_name: "region", scenes_type: "bottom" },
                    { scenes_name: "rank" },
                    { scenes_name: "search" },
                    { scenes_name: "tag" },
                  ],
                },
                {
                  tid: 5,
                  reid: 0,
                  name: "娱乐",
                  logo: "http://i0.hdslb.com/bfs/archive/a9bcb4cb7e216c2ea28ba3dc10acd2d210f739bd.png",
                  goto: "0",
                  param: "",
                  uri: "bilibili://region/5",
                  type: 0,
                  children: [
                    {
                      tid: 71,
                      reid: 5,
                      name: "综艺",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 241,
                      reid: 5,
                      name: "娱乐杂谈",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 242,
                      reid: 5,
                      name: "粉丝创作",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 137,
                      reid: 5,
                      name: "明星综合",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                  ],
                  config: [
                    { scenes_name: "region", scenes_type: "bottom" },
                    { scenes_name: "rank" },
                    { scenes_name: "search" },
                    { scenes_name: "tag" },
                  ],
                },
                {
                  tid: 11,
                  reid: 0,
                  name: "电视剧",
                  logo: "http://i0.hdslb.com/bfs/archive/30779a6904875754762e666b7076014528ef4834.png",
                  goto: "0",
                  param: "",
                  uri: "bilibili://pgc/cinema/tv",
                  type: 0,
                  is_bangumi: 1,
                  children: [
                    {
                      tid: 185,
                      reid: 11,
                      name: "国产剧",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 187,
                      reid: 11,
                      name: "海外剧",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                  ],
                  config: [
                    { scenes_name: "region", scenes_type: "bottom" },
                    { scenes_name: "rank" },
                    { scenes_name: "search" },
                    { scenes_name: "tag" },
                  ],
                },
                {
                  tid: 11,
                  reid: 0,
                  name: "电视剧",
                  logo: "http://i0.hdslb.com/bfs/archive/30779a6904875754762e666b7076014528ef4834.png",
                  goto: "0",
                  param: "",
                  uri: "bilibili://pgc/partition_page?page_name=tv-operation&title=%E7%94%B5%E8%A7%86%E5%89%A7&select_id=1",
                  type: 0,
                  is_bangumi: 1,
                  children: [
                    {
                      tid: 185,
                      reid: 11,
                      name: "国产剧",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 187,
                      reid: 11,
                      name: "海外剧",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                  ],
                  config: [
                    { scenes_name: "region", scenes_type: "bottom" },
                    { scenes_name: "rank" },
                    { scenes_name: "search" },
                    { scenes_name: "tag" },
                  ],
                },
                {
                  tid: 13,
                  reid: 0,
                  name: "番剧",
                  logo: "http://i0.hdslb.com/bfs/archive/6f629bd0dcd71d7b9911803f8e4f94fd0e5b4bfd.png",
                  goto: "0",
                  param: "",
                  uri: "bilibili://pgc/partition_page?page_name=bangumi-operation&title=%E7%95%AA%E5%89%A7&select_id=1",
                  type: 1,
                  is_bangumi: 1,
                  children: [
                    {
                      tid: 33,
                      reid: 13,
                      name: "连载动画",
                      logo: "http://i0.hdslb.com/bfs/archive/02c1ddbe698c4cba3c6db941047957d17b7910d7.png",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 32,
                      reid: 13,
                      name: "完结动画",
                      logo: "http://i0.hdslb.com/bfs/archive/efb691127ea5b547b64431a59b27b278d6803172.png",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 51,
                      reid: 13,
                      name: "资讯",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 152,
                      reid: 13,
                      name: "官方延伸",
                      logo: "http://i0.hdslb.com/bfs/archive/8eb0bf53223544526bf99ec6f636758e2afed503.png",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                  ],
                  config: [
                    { scenes_name: "region", scenes_type: "top" },
                    { scenes_name: "rank" },
                    { scenes_name: "search" },
                    { scenes_name: "tag" },
                  ],
                },
                {
                  tid: 13,
                  reid: 0,
                  name: "番剧",
                  logo: "http://i0.hdslb.com/bfs/archive/6f629bd0dcd71d7b9911803f8e4f94fd0e5b4bfd.png",
                  goto: "0",
                  param: "",
                  uri: "bilibili://pgc/bangumi",
                  type: 0,
                  is_bangumi: 1,
                  children: [
                    {
                      tid: 33,
                      reid: 13,
                      name: "连载动画",
                      logo: "http://i0.hdslb.com/bfs/archive/02c1ddbe698c4cba3c6db941047957d17b7910d7.png",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 32,
                      reid: 13,
                      name: "完结动画",
                      logo: "http://i0.hdslb.com/bfs/archive/efb691127ea5b547b64431a59b27b278d6803172.png",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 51,
                      reid: 13,
                      name: "资讯",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 152,
                      reid: 13,
                      name: "官方延伸",
                      logo: "http://i0.hdslb.com/bfs/archive/8eb0bf53223544526bf99ec6f636758e2afed503.png",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                  ],
                  config: [
                    { scenes_name: "region", scenes_type: "top" },
                    { scenes_name: "rank" },
                    { scenes_name: "search" },
                    { scenes_name: "tag" },
                  ],
                },
                {
                  tid: 13,
                  reid: 0,
                  name: "番劇",
                  logo: "http://i0.hdslb.com/bfs/archive/6f629bd0dcd71d7b9911803f8e4f94fd0e5b4bfd.png",
                  goto: "0",
                  param: "",
                  uri: "bilibili://pgc/bangumi",
                  type: 1,
                  is_bangumi: 1,
                  config: [
                    { scenes_name: "region", scenes_type: "top" },
                    { scenes_name: "rank" },
                    { scenes_name: "search" },
                    { scenes_name: "tag" },
                  ],
                },
                {
                  tid: 23,
                  reid: 0,
                  name: "电影",
                  logo: "http://i0.hdslb.com/bfs/archive/137edde9deb7dfcdf610ed2d1ec63bae6ef3ba0a.png",
                  goto: "0",
                  param: "",
                  uri: "bilibili://pgc/cinema/movie",
                  type: 0,
                  is_bangumi: 1,
                  children: [
                    {
                      tid: 147,
                      reid: 23,
                      name: "华语电影",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 145,
                      reid: 23,
                      name: "欧美电影",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 146,
                      reid: 23,
                      name: "日本电影",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 83,
                      reid: 23,
                      name: "其他国家",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                  ],
                  config: [
                    { scenes_name: "region", scenes_type: "bottom" },
                    { scenes_name: "rank" },
                    { scenes_name: "search" },
                    { scenes_name: "tag" },
                  ],
                },
                {
                  tid: 36,
                  reid: 0,
                  name: "知识",
                  logo: "http://i0.hdslb.com/bfs/archive/d5bb279936dbe661f958683231566214056987b2.png",
                  goto: "0",
                  param: "",
                  uri: "bilibili://region/36",
                  type: 0,
                  children: [
                    {
                      tid: 39,
                      reid: 36,
                      name: "演講\xb7公開課",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 95,
                      reid: 36,
                      name: "數碼",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 98,
                      reid: 36,
                      name: "機械",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 122,
                      reid: 36,
                      name: "野生技能协会",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 124,
                      reid: 36,
                      name: "社科\xb7法律\xb7心理",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 201,
                      reid: 36,
                      name: "科学科普",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 207,
                      reid: 36,
                      name: "财经商业",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 208,
                      reid: 36,
                      name: "校园学习",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 209,
                      reid: 36,
                      name: "职业职场",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 228,
                      reid: 36,
                      name: "人文历史",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 229,
                      reid: 36,
                      name: "设计\xb7创意",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                  ],
                  config: [
                    { scenes_name: "region", scenes_type: "bottom" },
                    { scenes_name: "rank" },
                    { scenes_name: "search" },
                    { scenes_name: "tag" },
                  ],
                },
                {
                  tid: 119,
                  reid: 0,
                  name: "鬼畜",
                  logo: "http://i0.hdslb.com/bfs/archive/de50290b11c65108eb70766fa887032b948d2e4b.png",
                  goto: "0",
                  param: "",
                  uri: "bilibili://region/119",
                  type: 0,
                  children: [
                    {
                      tid: 22,
                      reid: 119,
                      name: "鬼畜调教",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 26,
                      reid: 119,
                      name: "音MAD",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 126,
                      reid: 119,
                      name: "人力VOCALOID",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 127,
                      reid: 119,
                      name: "教程演示",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 216,
                      reid: 119,
                      name: "鬼畜剧场",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                  ],
                  config: [
                    { scenes_name: "region", scenes_type: "bottom" },
                    { scenes_name: "rank" },
                    { scenes_name: "search" },
                    { scenes_name: "tag" },
                  ],
                },
                {
                  tid: 129,
                  reid: 0,
                  name: "舞蹈",
                  logo: "http://i0.hdslb.com/bfs/archive/4769a6faa9ccfde4a029eca36b979bac486afd14.png",
                  goto: "0",
                  param: "",
                  uri: "bilibili://region/129",
                  type: 0,
                  children: [
                    {
                      tid: 20,
                      reid: 129,
                      name: "宅舞",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 154,
                      reid: 129,
                      name: "舞蹈综合",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 156,
                      reid: 129,
                      name: "舞蹈教程",
                      logo: "http://i0.hdslb.com/bfs/archive/c4a42b0d7df5e4eed9fa0980445f45fff6903c5c.png",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 198,
                      reid: 129,
                      name: "街舞",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 199,
                      reid: 129,
                      name: "明星舞蹈",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 200,
                      reid: 129,
                      name: "国风舞蹈",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 255,
                      reid: 129,
                      name: "手势\xb7网红舞",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                  ],
                  config: [
                    { scenes_name: "region", scenes_type: "bottom" },
                    { scenes_name: "rank" },
                    { scenes_name: "search" },
                    { scenes_name: "tag" },
                  ],
                },
                {
                  tid: 155,
                  reid: 0,
                  name: "时尚",
                  logo: "http://i0.hdslb.com/bfs/archive/1842562be5ded346d79312b24fafedbc1d78c8e2.png",
                  goto: "0",
                  param: "",
                  uri: "bilibili://region/155",
                  type: 0,
                  children: [
                    {
                      tid: 157,
                      reid: 155,
                      name: "美妆护肤",
                      logo: "http://i0.hdslb.com/bfs/archive/3f6d8cc081e5dd413eda83527b5ca91fa51f5891.png",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 158,
                      reid: 155,
                      name: "穿搭",
                      logo: "http://i0.hdslb.com/bfs/archive/5df77c1b13f20af22ec9f595f6a83f8b65d469a0.png",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 159,
                      reid: 155,
                      name: "时尚潮流",
                      logo: "http://i0.hdslb.com/bfs/archive/5d5767ed736a2808e7bf9e74a58f1eb5eea963cd.png",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 164,
                      reid: 155,
                      name: "健身",
                      logo: "http://i0.hdslb.com/bfs/archive/c5da2d170056227118594ab2c70d40ad9d0eed5c.png",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 252,
                      reid: 155,
                      name: "仿妆cos",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                  ],
                  config: [
                    { scenes_name: "region", scenes_type: "bottom" },
                    { scenes_name: "rank" },
                    { scenes_name: "search" },
                    { scenes_name: "tag" },
                  ],
                },
                {
                  tid: 160,
                  reid: 0,
                  name: "生活",
                  logo: "http://i0.hdslb.com/bfs/archive/50731fc4b9ec487ef2e3861a97e0eb4671b7bcef.png",
                  goto: "0",
                  param: "",
                  uri: "bilibili://region/160",
                  type: 0,
                  children: [
                    {
                      tid: 21,
                      reid: 160,
                      name: "日常",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 75,
                      reid: 160,
                      name: "動物圈",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 76,
                      reid: 160,
                      name: "美食圈",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 138,
                      reid: 160,
                      name: "搞笑",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 161,
                      reid: 160,
                      name: "手工",
                      logo: "http://i0.hdslb.com/bfs/archive/f87bb34913e8f7eeef216aba813961c47117e783.png",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 162,
                      reid: 160,
                      name: "绘画",
                      logo: "http://i0.hdslb.com/bfs/archive/e6b66a76eb07f2acffd00b8f8c1cc0ff57e75e53.png",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 163,
                      reid: 160,
                      name: "運動",
                      logo: "http://i0.hdslb.com/bfs/archive/e6b66a76eb07f2acffd00b8f8c1cc0ff57e75e53.png",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 250,
                      reid: 160,
                      name: "出行",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 251,
                      reid: 160,
                      name: "三农",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 239,
                      reid: 160,
                      name: "家居房产",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 254,
                      reid: 160,
                      name: "亲子",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                  ],
                  config: [
                    { scenes_name: "region", scenes_type: "bottom" },
                    { scenes_name: "rank" },
                    { scenes_name: "search" },
                    { scenes_name: "tag" },
                  ],
                },
                {
                  tid: 167,
                  reid: 0,
                  name: "国创",
                  logo: "http://i0.hdslb.com/bfs/archive/1586ec926eac1ea876cb74d32df51394d8e72341.png",
                  goto: "0",
                  param: "",
                  uri: "bilibili://pgc/partition_page?page_name=gc-operation&title=%E5%9B%BD%E5%88%9B&select_id=1",
                  type: 1,
                  is_bangumi: 1,
                  children: [
                    {
                      tid: 153,
                      reid: 167,
                      name: "国产动画",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 168,
                      reid: 167,
                      name: "国产原创相关",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 169,
                      reid: 167,
                      name: "布袋戏",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 195,
                      reid: 167,
                      name: "动态漫\xb7广播剧",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 170,
                      reid: 167,
                      name: "资讯",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                  ],
                  config: [
                    { scenes_name: "region", scenes_type: "top" },
                    { scenes_name: "rank" },
                    { scenes_name: "search" },
                    { scenes_name: "tag" },
                  ],
                },
                {
                  tid: 167,
                  reid: 0,
                  name: "国创",
                  logo: "http://i0.hdslb.com/bfs/archive/1586ec926eac1ea876cb74d32df51394d8e72341.png",
                  goto: "0",
                  param: "",
                  uri: "bilibili://pgc/domestic",
                  type: 0,
                  is_bangumi: 1,
                  children: [
                    {
                      tid: 153,
                      reid: 167,
                      name: "国产动画",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 168,
                      reid: 167,
                      name: "国产原创相关",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 169,
                      reid: 167,
                      name: "布袋戏",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 195,
                      reid: 167,
                      name: "动态漫\xb7广播剧",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 170,
                      reid: 167,
                      name: "资讯",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                  ],
                  config: [
                    { scenes_name: "region", scenes_type: "top" },
                    { scenes_name: "rank" },
                    { scenes_name: "search" },
                    { scenes_name: "tag" },
                  ],
                },
                {
                  tid: 167,
                  reid: 0,
                  name: "國創",
                  logo: "http://i0.hdslb.com/bfs/archive/1586ec926eac1ea876cb74d32df51394d8e72341.png",
                  goto: "0",
                  param: "",
                  uri: "bilibili://pgc/domestic",
                  type: 1,
                  is_bangumi: 1,
                  config: [
                    { scenes_name: "region", scenes_type: "top" },
                    { scenes_name: "rank" },
                    { scenes_name: "search" },
                    { scenes_name: "tag" },
                  ],
                },
                {
                  tid: 177,
                  reid: 0,
                  name: "纪录片",
                  logo: "http://i0.hdslb.com/bfs/archive/884a644c6bb4b8bb16f9746ef35fbaba396e0b8c.png",
                  goto: "0",
                  param: "",
                  uri: "bilibili://pgc/partition_page?page_name=documentary-operation&title=%E7%BA%AA%E5%BD%95%E7%89%87&select_id=1",
                  type: 1,
                  children: [
                    {
                      tid: 37,
                      reid: 177,
                      name: "人文\xb7历史",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 178,
                      reid: 177,
                      name: "科学\xb7探索\xb7自然",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 179,
                      reid: 177,
                      name: "军事",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 180,
                      reid: 177,
                      name: "社会\xb7美食\xb7旅行",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                  ],
                  config: [
                    { scenes_name: "region", scenes_type: "top" },
                    { scenes_name: "rank" },
                    { scenes_name: "search" },
                    { scenes_name: "tag" },
                  ],
                },
                {
                  tid: 177,
                  reid: 0,
                  name: "纪录片",
                  logo: "http://i0.hdslb.com/bfs/archive/884a644c6bb4b8bb16f9746ef35fbaba396e0b8c.png",
                  goto: "0",
                  param: "",
                  uri: "bilibili://pgc/cinema/doc",
                  type: 0,
                  children: [
                    {
                      tid: 37,
                      reid: 177,
                      name: "人文\xb7历史",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 178,
                      reid: 177,
                      name: "科学\xb7探索\xb7自然",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 179,
                      reid: 177,
                      name: "军事",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 180,
                      reid: 177,
                      name: "社会\xb7美食\xb7旅行",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                  ],
                  config: [
                    { scenes_name: "rank" },
                    { scenes_name: "search" },
                    { scenes_name: "tag" },
                    { scenes_name: "region", scenes_type: "top" },
                  ],
                },
                {
                  tid: 181,
                  reid: 0,
                  name: "影视",
                  logo: "http://i0.hdslb.com/bfs/archive/f90bb1ef59630ad9765486c6088a4944b96e88a3.png",
                  goto: "0",
                  param: "",
                  uri: "bilibili://region/181",
                  type: 0,
                  children: [
                    {
                      tid: 182,
                      reid: 181,
                      name: "影视杂谈",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 183,
                      reid: 181,
                      name: "影视剪辑",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 85,
                      reid: 181,
                      name: "小剧场",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 184,
                      reid: 181,
                      name: "预告\xb7资讯",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                  ],
                  config: [
                    { scenes_name: "region", scenes_type: "bottom" },
                    { scenes_name: "rank" },
                    { scenes_name: "search" },
                    { scenes_name: "tag" },
                  ],
                },
                {
                  tid: 188,
                  reid: 0,
                  name: "科技",
                  logo: "http://i0.hdslb.com/bfs/feed-admin/4a687a86b49feea68d423fd1bf2c461acfe59b70.png",
                  goto: "0",
                  param: "",
                  uri: "bilibili://region/188",
                  type: 0,
                  children: [
                    {
                      tid: 95,
                      reid: 188,
                      name: "数码",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 230,
                      reid: 188,
                      name: "软件应用",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 231,
                      reid: 188,
                      name: "计算机技术",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 232,
                      reid: 188,
                      name: "科工机械",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 233,
                      reid: 188,
                      name: "极客DIY",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                  ],
                  config: [
                    { scenes_name: "region", scenes_type: "bottom" },
                    { scenes_name: "rank" },
                    { scenes_name: "search" },
                    { scenes_name: "tag" },
                    { scenes_name: "attention" },
                  ],
                },
                {
                  tid: 202,
                  reid: 0,
                  name: "资讯",
                  logo: "https://i0.hdslb.com/bfs/legacy/d71e70e1bfcb7b27ffe88e6cb82868c68b084464.png",
                  goto: "0",
                  param: "",
                  uri: "bilibili://region/202",
                  type: 0,
                  children: [
                    {
                      tid: 203,
                      reid: 202,
                      name: "热点",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 204,
                      reid: 202,
                      name: "环球",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 205,
                      reid: 202,
                      name: "社会",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 206,
                      reid: 202,
                      name: "综合",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                  ],
                  config: [
                    { scenes_name: "region", scenes_type: "bottom" },
                    { scenes_name: "search" },
                    { scenes_name: "tag" },
                    { scenes_name: "attention" },
                  ],
                },
                {
                  tid: 211,
                  reid: 0,
                  name: "美食",
                  logo: "http://i0.hdslb.com/bfs/feed-admin/0f5e21f08616f9c02d706433ba1c00bd5b889c7b.png",
                  goto: "0",
                  param: "",
                  uri: "bilibili://region/211",
                  type: 0,
                  children: [
                    {
                      tid: 76,
                      reid: 211,
                      name: "美食制作",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 212,
                      reid: 211,
                      name: "美食侦探",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 213,
                      reid: 211,
                      name: "美食测评",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 214,
                      reid: 211,
                      name: "田园美食",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 215,
                      reid: 211,
                      name: "美食记录",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                  ],
                  config: [
                    { scenes_name: "region", scenes_type: "bottom" },
                    { scenes_name: "rank" },
                    { scenes_name: "search" },
                    { scenes_name: "tag" },
                  ],
                },
                {
                  tid: 217,
                  reid: 0,
                  name: "动物圈",
                  logo: "http://i0.hdslb.com/bfs/feed-admin/9f3303b20e12ac874c379da09bca9ce4d0b2f88c.png",
                  goto: "0",
                  param: "",
                  uri: "bilibili://region/217",
                  type: 0,
                  children: [
                    {
                      tid: 218,
                      reid: 217,
                      name: "喵星人",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 219,
                      reid: 217,
                      name: "汪星人",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 222,
                      reid: 217,
                      name: "小宠异宠",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 221,
                      reid: 217,
                      name: "野生动物",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 220,
                      reid: 217,
                      name: "动物二创",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 75,
                      reid: 217,
                      name: "动物综合",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                  ],
                  config: [
                    { scenes_name: "region", scenes_type: "bottom" },
                    { scenes_name: "search" },
                    { scenes_name: "rank" },
                    { scenes_name: "tag" },
                  ],
                },
                {
                  tid: 223,
                  reid: 0,
                  name: "汽车",
                  logo: "http://i0.hdslb.com/bfs/feed-admin/1515d944550494abf81b552a84484dce80287242.png",
                  goto: "0",
                  param: "",
                  uri: "bilibili://region/223",
                  type: 0,
                  children: [
                    {
                      tid: 245,
                      reid: 223,
                      name: "赛车",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 246,
                      reid: 223,
                      name: "改装玩车",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 247,
                      reid: 223,
                      name: "新能源车",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 248,
                      reid: 223,
                      name: "房车",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 240,
                      reid: 223,
                      name: "摩托车",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 227,
                      reid: 223,
                      name: "购车攻略",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 176,
                      reid: 223,
                      name: "汽车生活",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                  ],
                  config: [
                    { scenes_name: "region", scenes_type: "bottom" },
                    { scenes_name: "rank" },
                    { scenes_name: "search" },
                    { scenes_name: "tag" },
                  ],
                },
                {
                  tid: 234,
                  reid: 0,
                  name: "运动",
                  logo: "http://i0.hdslb.com/bfs/feed-admin/56a67fa38d8d7378ab4154307d26cffce2d1ae3f.png",
                  goto: "0",
                  param: "",
                  uri: "bilibili://region/234",
                  type: 0,
                  children: [
                    {
                      tid: 235,
                      reid: 234,
                      name: "篮球",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 249,
                      reid: 234,
                      name: "足球",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 164,
                      reid: 234,
                      name: "健身",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 236,
                      reid: 234,
                      name: "竞技体育",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 237,
                      reid: 234,
                      name: "运动文化",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                    {
                      tid: 238,
                      reid: 234,
                      name: "运动综合",
                      logo: "",
                      goto: "0",
                      param: "",
                      type: 0,
                    },
                  ],
                  config: [
                    { scenes_name: "region", scenes_type: "bottom" },
                    { scenes_name: "rank" },
                    { scenes_name: "search" },
                    { scenes_name: "tag" },
                  ],
                },
                {
                  tid: 65537,
                  reid: 0,
                  name: "直播",
                  logo: "http://i0.hdslb.com/bfs/archive/1b0ac7eafd51b03a0dc5b2390eec2fbffb25adf7.png",
                  goto: "0",
                  param: "",
                  uri: "bilibili://home/?tab=直播",
                  type: 0,
                  config: [{ scenes_name: "region", scenes_type: "bottom" }],
                },
                {
                  tid: 65539,
                  reid: 0,
                  name: "游戏中心",
                  logo: "http://i0.hdslb.com/bfs/archive/656df3124c81dd0e19bdc0a3e017091268b3db73.jpg",
                  goto: "0",
                  param: "",
                  uri: "bilibili://game_center",
                  type: 1,
                  config: [{ scenes_name: "region", scenes_type: "bottom" }],
                },
                {
                  tid: 65541,
                  reid: 0,
                  name: "专栏",
                  logo: "http://i0.hdslb.com/bfs/archive/a0c0e133644c47d6263cf24cf8364e2106c102c3.png",
                  goto: "0",
                  param: "",
                  uri: "bilibili://article/category/",
                  type: 1,
                  config: [
                    { scenes_name: "region", scenes_type: "bottom" },
                    { scenes_name: "search" },
                  ],
                },
                {
                  tid: 65541,
                  reid: 0,
                  name: "专栏",
                  logo: "http://i0.hdslb.com/bfs/archive/a0c0e133644c47d6263cf24cf8364e2106c102c3.png",
                  goto: "0",
                  param: "",
                  uri: "bilibili://article/category/",
                  type: 0,
                  config: [{ scenes_name: "region", scenes_type: "top" }],
                },
                {
                  tid: 65545,
                  reid: 0,
                  name: "放映厅",
                  logo: "http://i0.hdslb.com/bfs/archive/3dfba664353bb2349917eaf81b60db34b2d4c61a.png",
                  goto: "0",
                  param: "",
                  uri: "bilibili://pgc/cinema",
                  type: 1,
                  config: [{ scenes_name: "region", scenes_type: "top" }],
                },
                {
                  tid: 65549,
                  reid: 0,
                  name: "工房集市",
                  logo: "http://i0.hdslb.com/bfs/feed-admin/d89a76f987820ffa3c7d5c62789ebd784c68ac07.png",
                  goto: "0",
                  param: "",
                  uri: "https://mall.bilibili.com/neul-next/index.html?page=mall-up_market&noTitleBar=1&msource=js_subarea",
                  type: 0,
                  config: [{ scenes_name: "region", scenes_type: "bottom" }],
                },
                {
                  tid: 65550,
                  reid: 0,
                  name: "游戏赛事",
                  logo: "http://i0.hdslb.com/bfs/archive/a93687a7f29da88ee375109389b0634412847bd1.png",
                  goto: "0",
                  param: "",
                  uri: "https://www.bilibili.com/h5/match/data/home?navhide=1",
                  type: 0,
                  config: [{ scenes_name: "region", scenes_type: "bottom" }],
                },
                {
                  tid: 65550,
                  reid: 0,
                  name: "遊戲賽事",
                  logo: "http://i0.hdslb.com/bfs/archive/a93687a7f29da88ee375109389b0634412847bd1.png",
                  goto: "0",
                  param: "",
                  uri: "https://www.bilibili.com/h5/game/home?navhide=1",
                  type: 0,
                  config: [{ scenes_name: "region", scenes_type: "bottom" }],
                },
                {
                  tid: 65551,
                  reid: 0,
                  name: "小黑屋",
                  logo: "http://i0.hdslb.com/bfs/archive/ed4f676e8c1f1029b8e37e2f567875b682e632ce.png",
                  goto: "0",
                  param: "",
                  uri: "https://www.bilibili.com/blackroom",
                  type: 0,
                  config: [{ scenes_name: "region", scenes_type: "bottom" }],
                },
                {
                  tid: 65552,
                  reid: 0,
                  name: "全区排行榜",
                  logo: "http://i0.hdslb.com/bfs/archive/34f46c749054b1c3c157b0c1c09a5ef2b3539204.png",
                  goto: "0",
                  param: "",
                  uri: "bilibili://rank/",
                  type: 0,
                  config: [{ scenes_name: "region", scenes_type: "bottom" }],
                },
                {
                  tid: 65553,
                  reid: 0,
                  name: "活动中心",
                  logo: "http://i0.hdslb.com/bfs/archive/3e2e6d338aa8156dc6f63c5dc8c75ed298c5cc9a.png",
                  goto: "0",
                  param: "",
                  uri: "bilibili://activity_center/",
                  type: 0,
                  config: [{ scenes_name: "region", scenes_type: "bottom" }],
                },
                {
                  tid: 65555,
                  reid: 0,
                  name: "漫画",
                  logo: "http://i0.hdslb.com/bfs/archive/d260e72fb98251dabe4f64858f65cc697a71587e.png",
                  goto: "0",
                  param: "",
                  uri: "bilibili://comic/home?from=manga_channel",
                  type: 0,
                  config: [{ scenes_name: "region", scenes_type: "bottom" }],
                },
                {
                  tid: 65555,
                  reid: 0,
                  name: "漫画",
                  logo: "http://i0.hdslb.com/bfs/archive/d260e72fb98251dabe4f64858f65cc697a71587e.png",
                  goto: "0",
                  param: "",
                  uri: "bilibili://comic/home?from=ipadmanga_channel",
                  type: 0,
                  config: [{ scenes_name: "region", scenes_type: "bottom" }],
                },
                {
                  tid: 65556,
                  reid: 0,
                  name: "原創排行榜",
                  logo: "http://i0.hdslb.com/bfs/archive/5f232dbcb590e81dbd3dab6d2c906cff70547841.png",
                  goto: "0",
                  param: "",
                  uri: "bilibili://rank?type=original",
                  type: 0,
                  config: [{ scenes_name: "region", scenes_type: "bottom" }],
                },
                {
                  tid: 65557,
                  reid: 0,
                  name: "公开课",
                  logo: "http://i0.hdslb.com/bfs/feed-admin/99366a6ea47d7790f57699112bc1d0c6d5f0d302.png",
                  goto: "0",
                  param: "",
                  uri: "https://www.bilibili.com/h5/mooc?navhide=1",
                  type: 0,
                  config: [{ scenes_name: "region", scenes_type: "bottom" }],
                },
                {
                  tid: 65559,
                  reid: 0,
                  name: "VLOG",
                  logo: "http://i0.hdslb.com/bfs/archive/c794e8220a8cbe3d83b83e76e753c57df67b036a.png",
                  goto: "0",
                  param: "",
                  uri: "https://www.bilibili.com/h5/vlog?from=2",
                  type: 0,
                  config: [{ scenes_name: "region", scenes_type: "bottom" }],
                },
                {
                  tid: 65560,
                  reid: 0,
                  name: "课堂",
                  logo: "http://i0.hdslb.com/bfs/archive/7400e63e28ab9933a3fa8adb3bd63e3a20911641.png",
                  goto: "0",
                  param: "",
                  uri: "https://m.bilibili.com/cheese/home?navhide=1",
                  type: 0,
                  config: [{ scenes_name: "region", scenes_type: "bottom" }],
                },
                {
                  tid: 65561,
                  reid: 0,
                  name: "专题中心",
                  logo: "http://i0.hdslb.com/bfs/archive/5c15009ace7f8bbb22c5b46cee3995525bbd9ed0.png",
                  goto: "0",
                  param: "",
                  uri: "bilibili://topic/",
                  type: 0,
                  config: [{ scenes_name: "region", scenes_type: "bottom" }],
                },
                {
                  tid: 65563,
                  reid: 0,
                  name: "新歌热榜",
                  logo: "http://i0.hdslb.com/bfs/archive/518ba4a46b8ca94c0f29397e09acb345020fb867.png",
                  goto: "0",
                  param: "",
                  uri: "https://www.bilibili.com/h5/musicplus?navhide=1",
                  type: 0,
                  config: [{ scenes_name: "region", scenes_type: "bottom" }],
                },
              ],
              modify: [
                {
                  tid: 6544,
                  reid: 0,
                  name: "番劇(港澳台)",
                  logo: "http://i0.hdslb.com/bfs/archive/6f629bd0dcd71d7b9911803f8e4f94fd0e5b4bfd.png",
                  goto: "0",
                  param: "",
                  uri: "bilibili://following/home_bottom_tab_activity_tab/6544",
                  type: 0,
                  is_bangumi: 1,
                  config: [{ scenes_name: "region", scenes_type: "bottom" }],
                },
                {
                  tid: 95636,
                  reid: 0,
                  name: "韩综(港澳台)",
                  logo: "http://i0.hdslb.com/bfs/archive/a9bcb4cb7e216c2ea28ba3dc10acd2d210f739bd.png",
                  goto: "0",
                  param: "",
                  uri: "bilibili://following/home_bottom_tab_activity_tab/95636",
                  type: 0,
                  is_bangumi: 1,
                  config: [{ scenes_name: "region", scenes_type: "bottom" }],
                },
                {
                  tid: 168312,
                  reid: 0,
                  name: "節目(港澳台)",
                  logo: "http://i0.hdslb.com/bfs/archive/f90bb1ef59630ad9765486c6088a4944b96e88a3.png",
                  goto: "0",
                  param: "",
                  uri: "bilibili://following/home_bottom_tab_activity_tab/168312",
                  type: 0,
                  config: [{ scenes_name: "region", scenes_type: "bottom" }],
                },
              ],
            },
          },
        },
        Default: { Settings: { LogLevel: "WARN" } },
      },
      t9 = new t4($request.url);
    l.info(`url: ${t9.toJSON()}`);
    let t7 = t9.pathname.split("/").filter(Boolean);
    l.info(`PATHs: ${t7}`);
    let ie = (
      $response.headers?.["Content-Type"] ?? $response.headers?.["content-type"]
    )?.split(";")?.[0];
    l.info(`FORMAT: ${ie}`),
      (async () => {
        let {
          Settings: e,
          Caches: t,
          Configs: i,
        } = (function (e, t, i) {
          l.log("☑️ Set Environment Variables");
          let {
            Settings: a,
            Caches: n,
            Configs: o,
          } = (function (e, t, i) {
            t = [t].flat(Number.POSITIVE_INFINITY);
            let a = {
              Settings: i?.Default?.Settings || {},
              Configs: i?.Default?.Configs || {},
              Caches: {},
            };
            switch (
              (t.forEach((e) => {
                (a.Settings = { ...a.Settings, ...i?.[e]?.Settings }),
                  (a.Configs = { ...a.Configs, ...i?.[e]?.Configs });
              }),
              typeof $argument)
            ) {
              case "string":
                $argument = Object.fromEntries(
                  $argument
                    .split("&")
                    .map((e) =>
                      e.split("=", 2).map((e) => e.replace(/\"/g, ""))
                    )
                );
              case "object": {
                let e = {};
                Object.keys($argument).forEach((t) =>
                  c.set(e, t, $argument[t])
                ),
                  (a.Settings = { ...a.Settings, ...e });
              }
            }
            let n = p.getItem(e);
            return (
              n &&
                t.forEach((e) => {
                  switch (typeof n?.[e]?.Settings) {
                    case "string":
                      n[e].Settings = JSON.parse(n[e].Settings || "{}");
                    case "object":
                      a.Settings = { ...a.Settings, ...n[e].Settings };
                  }
                  switch (typeof n?.[e]?.Caches) {
                    case "string":
                      n[e].Caches = JSON.parse(n[e].Caches || "{}");
                    case "object":
                      a.Caches = { ...a.Caches, ...n[e].Caches };
                  }
                }),
              (function e(t, i) {
                for (let a in t) {
                  let n = t[a];
                  t[a] = "object" == typeof n && null !== n ? e(n, i) : i(a, n);
                }
                return t;
              })(
                a.Settings,
                (e, t) => (
                  "true" === t || "false" === t
                    ? (t = JSON.parse(t))
                    : "string" == typeof t &&
                      (t = t.includes(",")
                        ? t.split(",").map((e) => t6(e))
                        : t6(t)),
                  t
                )
              ),
              a
            );
          })(e, t, i);
          return (
            !Array.isArray(a?.Home?.Top) &&
              c.set(a, "Home.Top", a?.Home?.Top ? [a.Home.Top] : []),
            !Array.isArray(a?.Home?.Top_more) &&
              c.set(
                a,
                "Home.Top_more",
                a?.Home?.Top_more ? [a.Home.Top_more] : []
              ),
            !Array.isArray(a?.Home?.Tab) &&
              c.set(a, "Home.Tab", a?.Home?.Tab ? [a.Home.Tab] : []),
            !Array.isArray(a?.Following?.Tab) &&
              c.set(
                a,
                "Following.Tab",
                a?.Following?.Tab ? [a.Following.Tab] : []
              ),
            !Array.isArray(a?.Bottom) &&
              c.set(a, "Bottom", a?.Bottom ? [a.Bottom] : []),
            !Array.isArray(a?.Mine?.CreatorCenter) &&
              c.set(
                a,
                "Mine.CreatorCenter",
                a?.Mine?.CreatorCenter ? [a.Mine.CreatorCenter] : []
              ),
            !Array.isArray(a?.Mine?.Recommend) &&
              c.set(
                a,
                "Mine.Recommend",
                a?.Mine?.Recommend ? [a.Mine.Recommend] : []
              ),
            !Array.isArray(a?.Mine?.More) &&
              c.set(a, "Mine.More", a?.Mine?.More ? [a.Mine.More] : []),
            !Array.isArray(a?.Mine?.iPad?.Upper) &&
              c.set(
                a,
                "Mine.iPad.Upper",
                a?.Mine?.iPad?.Upper ? [a.Mine.iPad.Upper] : []
              ),
            !Array.isArray(a?.Mine?.iPad?.Recommend) &&
              c.set(
                a,
                "Mine.iPad.Recommend",
                a?.Mine?.iPad?.Recommend ? [a.Mine.iPad.Recommend] : []
              ),
            !Array.isArray(a?.Mine?.iPad?.More) &&
              c.set(
                a,
                "Mine.iPad.More",
                a?.Mine?.iPad?.More ? [a.Mine.iPad.More] : []
              ),
            !Array.isArray(a?.Region?.Index) &&
              c.set(
                a,
                "Region.Index",
                a?.Region?.Index ? [a.Region.Index] : []
              ),
            l.info(
              `typeof Settings: ${typeof a}`,
              `Settings: ${JSON.stringify(a)}`
            ),
            l.log("✅ Set Environment Variables"),
            { Settings: a, Caches: n, Configs: o }
          );
        })("BiliBili", "Enhanced", t8);
        l.logLevel = e.LogLevel;
        let a = { code: 0, message: "0", data: {} };
        switch (ie) {
          case void 0:
          case "application/x-www-form-urlencoded":
          case "text/plain":
          default:
          case "application/x-mpegURL":
          case "application/x-mpegurl":
          case "application/vnd.apple.mpegurl":
          case "audio/mpegurl":
          case "text/xml":
          case "text/html":
          case "text/plist":
          case "application/xml":
          case "application/plist":
          case "application/x-plist":
          case "text/vtt":
          case "application/vtt":
            break;
          case "text/json":
          case "application/json":
            switch (((a = JSON.parse($response.body ?? "{}")), t9.hostname)) {
              case "www.bilibili.com":
                break;
              case "app.bilibili.com":
              case "app.biliapi.net":
                switch (t9.pathname) {
                  case "/x/resource/show/tab/v2":
                    (a.data.top_left = i.Tab.top_left[e.Home.Top_left]),
                      (a.data.top = i.Tab.top
                        .map((t) => {
                          if (e.Home.Top.includes(t.tab_id)) return t;
                        })
                        .filter(Boolean)
                        .map((e, t) => ((e.pos = t + 1), e))),
                      (a.data.tab = i.Tab.tab
                        .map((t) => {
                          if (e.Home.Tab.includes(t.tab_id)) return t;
                        })
                        .filter(Boolean)
                        .map(
                          (t, i) => (
                            e.Home.Tab_default === t.tab_id &&
                              (t.default_selected = 1),
                            (t.pos = i + 1),
                            t
                          )
                        )),
                      (a.data.bottom = i.Tab.bottom
                        .map((t) => {
                          if (e.Bottom.includes(t.tab_id)) return t;
                        })
                        .filter(Boolean)
                        .map((e, t) => ((e.pos = t + 1), e)));
                    break;
                  case "/x/resource/show/tab/bubble":
                    break;
                  case "/x/v2/account/mine":
                    a.data.sections_v2 = i.Mine.sections_v2.map((t) => {
                      switch (t.title) {
                        case "创作中心":
                          t.items = t.items
                            .map((t) => {
                              if (e.Mine.CreatorCenter.includes(t.id)) return t;
                            })
                            .filter(Boolean);
                          break;
                        case "推荐服务":
                          t.items = t.items
                            .map((t) => {
                              if (e.Mine.Recommend.includes(t.id)) return t;
                            })
                            .filter(Boolean);
                          break;
                        case "更多服务":
                          t.items = t.items
                            .map((t) => {
                              if (e.Mine.More.includes(t.id)) return t;
                            })
                            .filter(Boolean);
                      }
                      return !t.items.some(() => !0) && (t = {}), t;
                    });
                    break;
                  case "/x/v2/account/mine/ipad":
                    (a.data.ipad_upper_sections = i.Mine.ipad_upper_sections
                      .map((t) => {
                        if (e.Mine.iPad.Upper.includes(t.id)) return t;
                      })
                      .filter(Boolean)),
                      (a.data.ipad_recommend_sections =
                        i.Mine.ipad_recommend_sections
                          .map((t) => {
                            if (e.Mine.iPad.Recommend.includes(t.id)) return t;
                          })
                          .filter(Boolean)),
                      (a.data.ipad_more_sections = i.Mine.ipad_more_sections
                        .map((t) => {
                          if (e.Mine.iPad.More.includes(t.id)) return t;
                        })
                        .filter(Boolean));
                    break;
                  case "/x/v2/region/index":
                  case "/x/v2/channel/region/list":
                    switch (
                      (a.data.push(...i.Region.index, ...i.Region.modify),
                      (a.data = (function (e, t) {
                        let i = new Map();
                        return e.filter((e) => !i.has(e[t]) && i.set(e[t], 1));
                      })(a.data, "tid")),
                      (a.data = a.data.sort(
                        (function (e) {
                          return (t, i) => {
                            let a = t[e];
                            return a - i[e];
                          };
                        })("tid")
                      )),
                      (a.data = a.data
                        .map((t) => {
                          if (e.Region.Index.includes(t.tid)) return t;
                        })
                        .filter(Boolean)),
                      t9.pathname)
                    ) {
                      case "/x/v2/region/index":
                        break;
                      case "/x/v2/channel/region/list":
                        a.data = a.data.map(
                          (e) => (
                            "0" === e.goto && (e.goto = ""),
                            (e.children = void 0),
                            (e.config = void 0),
                            e
                          )
                        );
                    }
                }
            }
            $response.body = JSON.stringify(a);
            break;
          case "application/protobuf":
          case "application/x-protobuf":
          case "application/vnd.google.protobuf":
          case "application/grpc":
          case "application/grpc+proto":
          case "application/octet-stream": {
            let e =
              "Quantumult X" === d
                ? new Uint8Array($response.bodyBytes ?? [])
                : $response.body ?? new Uint8Array();
            $response.body = e;
          }
        }
      })()
        .catch((e) => l.error(e))
        .finally(() =>
          (function (e = {}) {
            switch (d) {
              case "Surge":
                e.policy && c.set(e, "headers.X-Surge-Policy", e.policy),
                  l.log(
                    "\uD83D\uDEA9 执行结束!",
                    `🕛 ${new Date().getTime() / 1e3 - $script.startTime} 秒`
                  ),
                  $done(e);
                break;
              case "Loon":
                e.policy && (e.node = e.policy),
                  l.log(
                    "\uD83D\uDEA9 执行结束!",
                    `🕛 ${(new Date() - $script.startTime) / 1e3} 秒`
                  ),
                  $done(e);
                break;
              case "Stash":
                e.policy &&
                  c.set(
                    e,
                    "headers.X-Stash-Selected-Proxy",
                    encodeURI(e.policy)
                  ),
                  l.log(
                    "\uD83D\uDEA9 执行结束!",
                    `🕛 ${(new Date() - $script.startTime) / 1e3} 秒`
                  ),
                  $done(e);
                break;
              case "Egern":
              case "Shadowrocket":
              default:
                l.log("\uD83D\uDEA9 执行结束!"), $done(e);
                break;
              case "Quantumult X":
                switch (
                  (e.policy && c.set(e, "opts.policy", e.policy),
                  (e["auto-redirect"] = void 0),
                  (e["auto-cookie"] = void 0),
                  (e["binary-mode"] = void 0),
                  (e.charset = void 0),
                  (e.host = void 0),
                  (e.insecure = void 0),
                  (e.method = void 0),
                  (e.ok = void 0),
                  (e.opt = void 0),
                  (e.path = void 0),
                  (e.policy = void 0),
                  (e["policy-descriptor"] = void 0),
                  (e.scheme = void 0),
                  (e.sessionIndex = void 0),
                  (e.statusCode = void 0),
                  (e.timeout = void 0),
                  typeof e.status)
                ) {
                  case "number":
                    e.status = h[e.status];
                    break;
                  case "string":
                  case "undefined":
                    break;
                  default:
                    e.status = void 0;
                }
                e.body instanceof ArrayBuffer
                  ? ((e.bodyBytes = e.body), (e.body = void 0))
                  : ArrayBuffer.isView(e.body)
                  ? ((e.bodyBytes = e.body.buffer.slice(
                      e.body.byteOffset,
                      e.body.byteLength + e.body.byteOffset
                    )),
                    (e.body = void 0))
                  : e.body && (e.bodyBytes = void 0),
                  l.log("\uD83D\uDEA9 执行结束!"),
                  $done(e);
                break;
              case "Node.js":
                l.log("\uD83D\uDEA9 执行结束!"), process.exit(1);
            }
          })($response)
        );
  })();
