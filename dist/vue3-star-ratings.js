import { createElementBlock as i, openBlock as o, createElementVNode as m, defineComponent as V, computed as v, ref as z, watchEffect as B, onMounted as E, onBeforeUnmount as x, normalizeStyle as I, Fragment as _, renderList as g, createBlock as S, resolveDynamicComponent as C } from "vue";
const k = (s, a) => {
  const t = s.__vccOpts || s;
  for (const [d, l] of a)
    t[d] = l;
  return t;
}, M = {}, $ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512.002 512.002"
};
function L(s, a) {
  return o(), i("svg", $, a[0] || (a[0] = [
    m("path", { d: "M511.267 197.258a14.995 14.995 0 00-12.107-10.209l-158.723-23.065-70.985-143.827a14.998 14.998 0 00-26.901 0l-70.988 143.827-158.72 23.065a14.998 14.998 0 00-8.312 25.585l114.848 111.954-27.108 158.083a14.999 14.999 0 0021.763 15.812l141.967-74.638 141.961 74.637a15 15 0 0021.766-15.813l-27.117-158.081 114.861-111.955a14.994 14.994 0 003.795-15.375z" }, null, -1)
  ]));
}
const b = /* @__PURE__ */ k(M, [["render", L]]), j = { class: "vue3-star-ratings__outer" }, D = { class: "vue3-star-ratings__inner" }, W = /* @__PURE__ */ V({
  __name: "Vue3StarRatings",
  props: {
    modelValue: { default: 0 },
    numberOfStars: { default: 5 },
    starColor: { default: "#ff9800" },
    inactiveColor: { default: "#333333" },
    starSize: { default: 24 },
    disableClick: { type: Boolean },
    customSvg: { default: b }
  },
  emits: ["update:modelValue"],
  setup(s, { emit: a }) {
    const t = s, d = a, l = v(() => t.customSvg || b), y = {
      rounded(e, n) {
        const r = Math.pow(10, n);
        return Math.round(e * r) / r;
      }
    }, u = z(), c = v({
      get() {
        return t.modelValue;
      },
      set(e) {
        const n = y.rounded(e, 1);
        d("update:modelValue", n);
      }
    });
    function p(e) {
      if (t.disableClick) return;
      const n = this.getBoundingClientRect(), { pageX: r } = e, f = r - n.left, O = n.width, R = t.numberOfStars, w = f / O * R;
      c.value = w;
    }
    const h = v(() => (c.value < 0 ? 0 : c.value > t.numberOfStars ? t.numberOfStars : c.value) / t.numberOfStars * 100);
    return B(() => {
      var n;
      const e = {
        "--vue3StarRatingsInnerColor": t.inactiveColor,
        "--vue3StarRatingsOuterColor": t.starColor,
        "--vue3StarRatingOuterWidth": `${h.value}%`,
        "--vue3StarRatingIconSize": `${t.starSize}px`
      };
      for (const [r, f] of Object.entries(e))
        (n = u.value) == null || n.style.setProperty(r, f);
    }), E(() => {
      var e;
      (e = u.value) == null || e.addEventListener("click", p);
    }), x(() => {
      var e;
      (e = u.value) == null || e.removeEventListener("click", p);
    }), (e, n) => (o(), i("div", {
      class: "vue3-star-ratings",
      ref_key: "starsContainer",
      ref: u,
      style: I({
        pointerEvents: e.disableClick ? "none" : "auto"
      })
    }, [
      m("div", j, [
        (o(!0), i(_, null, g(e.numberOfStars, (r) => (o(), S(C(l.value), {
          key: r,
          class: "vue3-star-ratings__icon"
        }))), 128))
      ]),
      m("div", D, [
        (o(!0), i(_, null, g(e.numberOfStars, (r) => (o(), S(C(l.value), {
          key: r,
          class: "vue3-star-ratings__icon"
        }))), 128))
      ])
    ], 4));
  }
}), F = /* @__PURE__ */ k(W, [["__scopeId", "data-v-7fab3f62"]]);
export {
  F as default
};
