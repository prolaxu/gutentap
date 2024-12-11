import { openBlock as V, createElementBlock as ne, normalizeClass as jt, renderSlot as Zl, createCommentVNode as it, defineComponent as Kr, ref as ll, onMounted as nd, onBeforeUnmount as al, h as er, markRaw as rd, getCurrentInstance as Vf, watchEffect as Ff, nextTick as $f, unref as jf, reactive as Wf, render as ea, customRef as _f, Fragment as Ct, renderList as St, withModifiers as Me, createElementVNode as je, createTextVNode as Kf, toDisplayString as qf, resolveComponent as ar, createBlock as Qe, withCtx as Se, createVNode as Fe, createSlots as Uf, withKeys as Jf } from "vue";
const qr = (n, e) => {
  const t = n.__vccOpts || n;
  for (const [r, i] of e)
    t[r] = i;
  return t;
}, Gf = {
  props: {
    clickHandler: {
      type: String,
      required: !1
    },
    content: {
      type: String,
      required: !1
    },
    label: {
      type: String,
      required: !1
    },
    activeClass: {
      type: String,
      required: !1,
      default: "!tw-bg-slate-600 hover:!tw-bg-slate-700 !tw-text-white"
    },
    active: {
      type: Boolean
    }
  }
}, Yf = ["aria-label", "data-tooltip", "title", "innerHTML"];
function Xf(n, e, t, r, i, o) {
  return V(), ne("button", {
    class: jt(["w-full tw-flex tw-p-1 tw-flex-row tw-items-center tw-text-slate-600 tw-rounded tw-gap-2 hover:tw-bg-slate-100", t.active ? t.activeClass : ""]),
    "aria-label": t.label,
    "data-tooltip": t.label,
    title: t.label,
    innerHTML: t.content
  }, null, 10, Yf);
}
const Qf = /* @__PURE__ */ qr(Gf, [["render", Xf]]), Zf = {
  computed: {
    hasDropdown() {
      return !!this.$slots.dropdown;
    }
  },
  props: {
    align: {
      type: String,
      default: "left"
    },
    iconName: {
      type: String,
      required: !1
    },
    iconSvg: {
      type: String,
      required: !1
    },
    label: {
      type: String,
      required: !1
    },
    activeClass: {
      type: String,
      required: !1,
      default: "!bg-slate-600 hover:!tw-bg-slate-700 !tw-text-white tw-rounded"
    },
    active: {
      type: Boolean
    }
  }
}, eh = { class: "tw-group tw-text-sm tw-relative" };
function th(n, e, t, r, i, o) {
  return V(), ne("div", eh, [
    Zl(n.$slots, "default"),
    o.hasDropdown ? (V(), ne("div", {
      key: 0,
      class: jt(["tw-z-10 tw-bg-white tw-shadow tw-py-2 tw-group-focus-within:block hidden tw-overflow-hidden tw-whitespace-nowrap tw-absolute tw-bottom-full sm:tw-bottom-auto sm:tw-top-full tw-mt-4 tw-rounded tw-border tw-border-slate-400", t.align == "left" ? "tw-left-0" : "tw-right-0"])
    }, [
      Zl(n.$slots, "dropdown")
    ], 2)) : it("", !0)
  ]);
}
const nh = /* @__PURE__ */ qr(Zf, [["render", th]]), rh = {
  props: {
    content: {
      type: String,
      required: !1
    },
    clickHandler: {
      type: String,
      required: !1
    },
    label: {
      type: String,
      required: !1
    },
    activeClass: {
      type: String,
      required: !1,
      default: "!tw-bg-slate-600 hover:!tw-bg-slate-700 !tw-text-white"
    },
    active: {
      type: Boolean
    }
  }
}, ih = ["aria-label", "title", "innerHTML"];
function oh(n, e, t, r, i, o) {
  return V(), ne("button", {
    class: jt(["tw-w-full tw-flex tw-py-1 tw-pl-2 tw-pr-6 tw-flex-row tw-items-center tw-text-slate-600 tw-gap-2 hover:tw-bg-slate-100", t.active ? t.activeClass : ""]),
    "aria-label": t.label,
    title: t.label,
    innerHTML: t.content
  }, null, 10, ih);
}
const sh = /* @__PURE__ */ qr(rh, [["render", oh]]);
function pe(n) {
  this.content = n;
}
pe.prototype = {
  constructor: pe,
  find: function(n) {
    for (var e = 0; e < this.content.length; e += 2)
      if (this.content[e] === n)
        return e;
    return -1;
  },
  // :: (string) → ?any
  // Retrieve the value stored under `key`, or return undefined when
  // no such key exists.
  get: function(n) {
    var e = this.find(n);
    return e == -1 ? void 0 : this.content[e + 1];
  },
  // :: (string, any, ?string) → OrderedMap
  // Create a new map by replacing the value of `key` with a new
  // value, or adding a binding to the end of the map. If `newKey` is
  // given, the key of the binding will be replaced with that key.
  update: function(n, e, t) {
    var r = t && t != n ? this.remove(t) : this, i = r.find(n), o = r.content.slice();
    return i == -1 ? o.push(t || n, e) : (o[i + 1] = e, t && (o[i] = t)), new pe(o);
  },
  // :: (string) → OrderedMap
  // Return a map with the given key removed, if it existed.
  remove: function(n) {
    var e = this.find(n);
    if (e == -1)
      return this;
    var t = this.content.slice();
    return t.splice(e, 2), new pe(t);
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the start of the map.
  addToStart: function(n, e) {
    return new pe([n, e].concat(this.remove(n).content));
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the end of the map.
  addToEnd: function(n, e) {
    var t = this.remove(n).content.slice();
    return t.push(n, e), new pe(t);
  },
  // :: (string, string, any) → OrderedMap
  // Add a key after the given key. If `place` is not found, the new
  // key is added to the end.
  addBefore: function(n, e, t) {
    var r = this.remove(e), i = r.content.slice(), o = r.find(n);
    return i.splice(o == -1 ? i.length : o, 0, e, t), new pe(i);
  },
  // :: ((key: string, value: any))
  // Call the given function for each key/value pair in the map, in
  // order.
  forEach: function(n) {
    for (var e = 0; e < this.content.length; e += 2)
      n(this.content[e], this.content[e + 1]);
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by prepending the keys in this map that don't
  // appear in `map` before the keys in `map`.
  prepend: function(n) {
    return n = pe.from(n), n.size ? new pe(n.content.concat(this.subtract(n).content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by appending the keys in this map that don't
  // appear in `map` after the keys in `map`.
  append: function(n) {
    return n = pe.from(n), n.size ? new pe(this.subtract(n).content.concat(n.content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a map containing all the keys in this map that don't
  // appear in `map`.
  subtract: function(n) {
    var e = this;
    n = pe.from(n);
    for (var t = 0; t < n.content.length; t += 2)
      e = e.remove(n.content[t]);
    return e;
  },
  // :: () → Object
  // Turn ordered map into a plain object.
  toObject: function() {
    var n = {};
    return this.forEach(function(e, t) {
      n[e] = t;
    }), n;
  },
  // :: number
  // The amount of keys in this map.
  get size() {
    return this.content.length >> 1;
  }
};
pe.from = function(n) {
  if (n instanceof pe)
    return n;
  var e = [];
  if (n)
    for (var t in n)
      e.push(t, n[t]);
  return new pe(e);
};
function id(n, e, t) {
  for (let r = 0; ; r++) {
    if (r == n.childCount || r == e.childCount)
      return n.childCount == e.childCount ? null : t;
    let i = n.child(r), o = e.child(r);
    if (i == o) {
      t += i.nodeSize;
      continue;
    }
    if (!i.sameMarkup(o))
      return t;
    if (i.isText && i.text != o.text) {
      for (let s = 0; i.text[s] == o.text[s]; s++)
        t++;
      return t;
    }
    if (i.content.size || o.content.size) {
      let s = id(i.content, o.content, t + 1);
      if (s != null)
        return s;
    }
    t += i.nodeSize;
  }
}
function od(n, e, t, r) {
  for (let i = n.childCount, o = e.childCount; ; ) {
    if (i == 0 || o == 0)
      return i == o ? null : { a: t, b: r };
    let s = n.child(--i), l = e.child(--o), a = s.nodeSize;
    if (s == l) {
      t -= a, r -= a;
      continue;
    }
    if (!s.sameMarkup(l))
      return { a: t, b: r };
    if (s.isText && s.text != l.text) {
      let c = 0, d = Math.min(s.text.length, l.text.length);
      for (; c < d && s.text[s.text.length - c - 1] == l.text[l.text.length - c - 1]; )
        c++, t--, r--;
      return { a: t, b: r };
    }
    if (s.content.size || l.content.size) {
      let c = od(s.content, l.content, t - 1, r - 1);
      if (c)
        return c;
    }
    t -= a, r -= a;
  }
}
class x {
  /**
  @internal
  */
  constructor(e, t) {
    if (this.content = e, this.size = t || 0, t == null)
      for (let r = 0; r < e.length; r++)
        this.size += e[r].nodeSize;
  }
  /**
  Invoke a callback for all descendant nodes between the given two
  positions (relative to start of this fragment). Doesn't descend
  into a node when the callback returns `false`.
  */
  nodesBetween(e, t, r, i = 0, o) {
    for (let s = 0, l = 0; l < t; s++) {
      let a = this.content[s], c = l + a.nodeSize;
      if (c > e && r(a, i + l, o || null, s) !== !1 && a.content.size) {
        let d = l + 1;
        a.nodesBetween(Math.max(0, e - d), Math.min(a.content.size, t - d), r, i + d);
      }
      l = c;
    }
  }
  /**
  Call the given callback for every descendant node. `pos` will be
  relative to the start of the fragment. The callback may return
  `false` to prevent traversal of a given node's children.
  */
  descendants(e) {
    this.nodesBetween(0, this.size, e);
  }
  /**
  Extract the text between `from` and `to`. See the same method on
  [`Node`](https://prosemirror.net/docs/ref/#model.Node.textBetween).
  */
  textBetween(e, t, r, i) {
    let o = "", s = !0;
    return this.nodesBetween(e, t, (l, a) => {
      let c = l.isText ? l.text.slice(Math.max(e, a) - a, t - a) : l.isLeaf ? i ? typeof i == "function" ? i(l) : i : l.type.spec.leafText ? l.type.spec.leafText(l) : "" : "";
      l.isBlock && (l.isLeaf && c || l.isTextblock) && r && (s ? s = !1 : o += r), o += c;
    }, 0), o;
  }
  /**
  Create a new fragment containing the combined content of this
  fragment and the other.
  */
  append(e) {
    if (!e.size)
      return this;
    if (!this.size)
      return e;
    let t = this.lastChild, r = e.firstChild, i = this.content.slice(), o = 0;
    for (t.isText && t.sameMarkup(r) && (i[i.length - 1] = t.withText(t.text + r.text), o = 1); o < e.content.length; o++)
      i.push(e.content[o]);
    return new x(i, this.size + e.size);
  }
  /**
  Cut out the sub-fragment between the two given positions.
  */
  cut(e, t = this.size) {
    if (e == 0 && t == this.size)
      return this;
    let r = [], i = 0;
    if (t > e)
      for (let o = 0, s = 0; s < t; o++) {
        let l = this.content[o], a = s + l.nodeSize;
        a > e && ((s < e || a > t) && (l.isText ? l = l.cut(Math.max(0, e - s), Math.min(l.text.length, t - s)) : l = l.cut(Math.max(0, e - s - 1), Math.min(l.content.size, t - s - 1))), r.push(l), i += l.nodeSize), s = a;
      }
    return new x(r, i);
  }
  /**
  @internal
  */
  cutByIndex(e, t) {
    return e == t ? x.empty : e == 0 && t == this.content.length ? this : new x(this.content.slice(e, t));
  }
  /**
  Create a new fragment in which the node at the given index is
  replaced by the given node.
  */
  replaceChild(e, t) {
    let r = this.content[e];
    if (r == t)
      return this;
    let i = this.content.slice(), o = this.size + t.nodeSize - r.nodeSize;
    return i[e] = t, new x(i, o);
  }
  /**
  Create a new fragment by prepending the given node to this
  fragment.
  */
  addToStart(e) {
    return new x([e].concat(this.content), this.size + e.nodeSize);
  }
  /**
  Create a new fragment by appending the given node to this
  fragment.
  */
  addToEnd(e) {
    return new x(this.content.concat(e), this.size + e.nodeSize);
  }
  /**
  Compare this fragment to another one.
  */
  eq(e) {
    if (this.content.length != e.content.length)
      return !1;
    for (let t = 0; t < this.content.length; t++)
      if (!this.content[t].eq(e.content[t]))
        return !1;
    return !0;
  }
  /**
  The first child of the fragment, or `null` if it is empty.
  */
  get firstChild() {
    return this.content.length ? this.content[0] : null;
  }
  /**
  The last child of the fragment, or `null` if it is empty.
  */
  get lastChild() {
    return this.content.length ? this.content[this.content.length - 1] : null;
  }
  /**
  The number of child nodes in this fragment.
  */
  get childCount() {
    return this.content.length;
  }
  /**
  Get the child node at the given index. Raise an error when the
  index is out of range.
  */
  child(e) {
    let t = this.content[e];
    if (!t)
      throw new RangeError("Index " + e + " out of range for " + this);
    return t;
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(e) {
    return this.content[e] || null;
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(e) {
    for (let t = 0, r = 0; t < this.content.length; t++) {
      let i = this.content[t];
      e(i, r, t), r += i.nodeSize;
    }
  }
  /**
  Find the first position at which this fragment and another
  fragment differ, or `null` if they are the same.
  */
  findDiffStart(e, t = 0) {
    return id(this, e, t);
  }
  /**
  Find the first position, searching from the end, at which this
  fragment and the given fragment differ, or `null` if they are
  the same. Since this position will not be the same in both
  nodes, an object with two separate positions is returned.
  */
  findDiffEnd(e, t = this.size, r = e.size) {
    return od(this, e, t, r);
  }
  /**
  Find the index and inner offset corresponding to a given relative
  position in this fragment. The result object will be reused
  (overwritten) the next time the function is called. @internal
  */
  findIndex(e, t = -1) {
    if (e == 0)
      return ci(0, e);
    if (e == this.size)
      return ci(this.content.length, e);
    if (e > this.size || e < 0)
      throw new RangeError(`Position ${e} outside of fragment (${this})`);
    for (let r = 0, i = 0; ; r++) {
      let o = this.child(r), s = i + o.nodeSize;
      if (s >= e)
        return s == e || t > 0 ? ci(r + 1, s) : ci(r, i);
      i = s;
    }
  }
  /**
  Return a debugging string that describes this fragment.
  */
  toString() {
    return "<" + this.toStringInner() + ">";
  }
  /**
  @internal
  */
  toStringInner() {
    return this.content.join(", ");
  }
  /**
  Create a JSON-serializeable representation of this fragment.
  */
  toJSON() {
    return this.content.length ? this.content.map((e) => e.toJSON()) : null;
  }
  /**
  Deserialize a fragment from its JSON representation.
  */
  static fromJSON(e, t) {
    if (!t)
      return x.empty;
    if (!Array.isArray(t))
      throw new RangeError("Invalid input for Fragment.fromJSON");
    return new x(t.map(e.nodeFromJSON));
  }
  /**
  Build a fragment from an array of nodes. Ensures that adjacent
  text nodes with the same marks are joined together.
  */
  static fromArray(e) {
    if (!e.length)
      return x.empty;
    let t, r = 0;
    for (let i = 0; i < e.length; i++) {
      let o = e[i];
      r += o.nodeSize, i && o.isText && e[i - 1].sameMarkup(o) ? (t || (t = e.slice(0, i)), t[t.length - 1] = o.withText(t[t.length - 1].text + o.text)) : t && t.push(o);
    }
    return new x(t || e, r);
  }
  /**
  Create a fragment from something that can be interpreted as a
  set of nodes. For `null`, it returns the empty fragment. For a
  fragment, the fragment itself. For a node or array of nodes, a
  fragment containing those nodes.
  */
  static from(e) {
    if (!e)
      return x.empty;
    if (e instanceof x)
      return e;
    if (Array.isArray(e))
      return this.fromArray(e);
    if (e.attrs)
      return new x([e], e.nodeSize);
    throw new RangeError("Can not convert " + e + " to a Fragment" + (e.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""));
  }
}
x.empty = new x([], 0);
const Wo = { index: 0, offset: 0 };
function ci(n, e) {
  return Wo.index = n, Wo.offset = e, Wo;
}
function Ii(n, e) {
  if (n === e)
    return !0;
  if (!(n && typeof n == "object") || !(e && typeof e == "object"))
    return !1;
  let t = Array.isArray(n);
  if (Array.isArray(e) != t)
    return !1;
  if (t) {
    if (n.length != e.length)
      return !1;
    for (let r = 0; r < n.length; r++)
      if (!Ii(n[r], e[r]))
        return !1;
  } else {
    for (let r in n)
      if (!(r in e) || !Ii(n[r], e[r]))
        return !1;
    for (let r in e)
      if (!(r in n))
        return !1;
  }
  return !0;
}
let q = class xs {
  /**
  @internal
  */
  constructor(e, t) {
    this.type = e, this.attrs = t;
  }
  /**
  Given a set of marks, create a new set which contains this one as
  well, in the right position. If this mark is already in the set,
  the set itself is returned. If any marks that are set to be
  [exclusive](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) with this mark are present,
  those are replaced by this one.
  */
  addToSet(e) {
    let t, r = !1;
    for (let i = 0; i < e.length; i++) {
      let o = e[i];
      if (this.eq(o))
        return e;
      if (this.type.excludes(o.type))
        t || (t = e.slice(0, i));
      else {
        if (o.type.excludes(this.type))
          return e;
        !r && o.type.rank > this.type.rank && (t || (t = e.slice(0, i)), t.push(this), r = !0), t && t.push(o);
      }
    }
    return t || (t = e.slice()), r || t.push(this), t;
  }
  /**
  Remove this mark from the given set, returning a new set. If this
  mark is not in the set, the set itself is returned.
  */
  removeFromSet(e) {
    for (let t = 0; t < e.length; t++)
      if (this.eq(e[t]))
        return e.slice(0, t).concat(e.slice(t + 1));
    return e;
  }
  /**
  Test whether this mark is in the given set of marks.
  */
  isInSet(e) {
    for (let t = 0; t < e.length; t++)
      if (this.eq(e[t]))
        return !0;
    return !1;
  }
  /**
  Test whether this mark has the same type and attributes as
  another mark.
  */
  eq(e) {
    return this == e || this.type == e.type && Ii(this.attrs, e.attrs);
  }
  /**
  Convert this mark to a JSON-serializeable representation.
  */
  toJSON() {
    let e = { type: this.type.name };
    for (let t in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    return e;
  }
  /**
  Deserialize a mark from JSON.
  */
  static fromJSON(e, t) {
    if (!t)
      throw new RangeError("Invalid input for Mark.fromJSON");
    let r = e.marks[t.type];
    if (!r)
      throw new RangeError(`There is no mark type ${t.type} in this schema`);
    let i = r.create(t.attrs);
    return r.checkAttrs(i.attrs), i;
  }
  /**
  Test whether two sets of marks are identical.
  */
  static sameSet(e, t) {
    if (e == t)
      return !0;
    if (e.length != t.length)
      return !1;
    for (let r = 0; r < e.length; r++)
      if (!e[r].eq(t[r]))
        return !1;
    return !0;
  }
  /**
  Create a properly sorted mark set from null, a single mark, or an
  unsorted array of marks.
  */
  static setFrom(e) {
    if (!e || Array.isArray(e) && e.length == 0)
      return xs.none;
    if (e instanceof xs)
      return [e];
    let t = e.slice();
    return t.sort((r, i) => r.type.rank - i.type.rank), t;
  }
};
q.none = [];
class Li extends Error {
}
class T {
  /**
  Create a slice. When specifying a non-zero open depth, you must
  make sure that there are nodes of at least that depth at the
  appropriate side of the fragment—i.e. if the fragment is an
  empty paragraph node, `openStart` and `openEnd` can't be greater
  than 1.

  It is not necessary for the content of open nodes to conform to
  the schema's content constraints, though it should be a valid
  start/end/middle for such a node, depending on which sides are
  open.
  */
  constructor(e, t, r) {
    this.content = e, this.openStart = t, this.openEnd = r;
  }
  /**
  The size this slice would add when inserted into a document.
  */
  get size() {
    return this.content.size - this.openStart - this.openEnd;
  }
  /**
  @internal
  */
  insertAt(e, t) {
    let r = ld(this.content, e + this.openStart, t);
    return r && new T(r, this.openStart, this.openEnd);
  }
  /**
  @internal
  */
  removeBetween(e, t) {
    return new T(sd(this.content, e + this.openStart, t + this.openStart), this.openStart, this.openEnd);
  }
  /**
  Tests whether this slice is equal to another slice.
  */
  eq(e) {
    return this.content.eq(e.content) && this.openStart == e.openStart && this.openEnd == e.openEnd;
  }
  /**
  @internal
  */
  toString() {
    return this.content + "(" + this.openStart + "," + this.openEnd + ")";
  }
  /**
  Convert a slice to a JSON-serializable representation.
  */
  toJSON() {
    if (!this.content.size)
      return null;
    let e = { content: this.content.toJSON() };
    return this.openStart > 0 && (e.openStart = this.openStart), this.openEnd > 0 && (e.openEnd = this.openEnd), e;
  }
  /**
  Deserialize a slice from its JSON representation.
  */
  static fromJSON(e, t) {
    if (!t)
      return T.empty;
    let r = t.openStart || 0, i = t.openEnd || 0;
    if (typeof r != "number" || typeof i != "number")
      throw new RangeError("Invalid input for Slice.fromJSON");
    return new T(x.fromJSON(e, t.content), r, i);
  }
  /**
  Create a slice from a fragment by taking the maximum possible
  open value on both side of the fragment.
  */
  static maxOpen(e, t = !0) {
    let r = 0, i = 0;
    for (let o = e.firstChild; o && !o.isLeaf && (t || !o.type.spec.isolating); o = o.firstChild)
      r++;
    for (let o = e.lastChild; o && !o.isLeaf && (t || !o.type.spec.isolating); o = o.lastChild)
      i++;
    return new T(e, r, i);
  }
}
T.empty = new T(x.empty, 0, 0);
function sd(n, e, t) {
  let { index: r, offset: i } = n.findIndex(e), o = n.maybeChild(r), { index: s, offset: l } = n.findIndex(t);
  if (i == e || o.isText) {
    if (l != t && !n.child(s).isText)
      throw new RangeError("Removing non-flat range");
    return n.cut(0, e).append(n.cut(t));
  }
  if (r != s)
    throw new RangeError("Removing non-flat range");
  return n.replaceChild(r, o.copy(sd(o.content, e - i - 1, t - i - 1)));
}
function ld(n, e, t, r) {
  let { index: i, offset: o } = n.findIndex(e), s = n.maybeChild(i);
  if (o == e || s.isText)
    return r && !r.canReplace(i, i, t) ? null : n.cut(0, e).append(t).append(n.cut(e));
  let l = ld(s.content, e - o - 1, t);
  return l && n.replaceChild(i, s.copy(l));
}
function lh(n, e, t) {
  if (t.openStart > n.depth)
    throw new Li("Inserted content deeper than insertion position");
  if (n.depth - t.openStart != e.depth - t.openEnd)
    throw new Li("Inconsistent open depths");
  return ad(n, e, t, 0);
}
function ad(n, e, t, r) {
  let i = n.index(r), o = n.node(r);
  if (i == e.index(r) && r < n.depth - t.openStart) {
    let s = ad(n, e, t, r + 1);
    return o.copy(o.content.replaceChild(i, s));
  } else if (t.content.size)
    if (!t.openStart && !t.openEnd && n.depth == r && e.depth == r) {
      let s = n.parent, l = s.content;
      return pn(s, l.cut(0, n.parentOffset).append(t.content).append(l.cut(e.parentOffset)));
    } else {
      let { start: s, end: l } = ah(t, n);
      return pn(o, dd(n, s, l, e, r));
    }
  else
    return pn(o, Pi(n, e, r));
}
function cd(n, e) {
  if (!e.type.compatibleContent(n.type))
    throw new Li("Cannot join " + e.type.name + " onto " + n.type.name);
}
function Cs(n, e, t) {
  let r = n.node(t);
  return cd(r, e.node(t)), r;
}
function hn(n, e) {
  let t = e.length - 1;
  t >= 0 && n.isText && n.sameMarkup(e[t]) ? e[t] = n.withText(e[t].text + n.text) : e.push(n);
}
function yr(n, e, t, r) {
  let i = (e || n).node(t), o = 0, s = e ? e.index(t) : i.childCount;
  n && (o = n.index(t), n.depth > t ? o++ : n.textOffset && (hn(n.nodeAfter, r), o++));
  for (let l = o; l < s; l++)
    hn(i.child(l), r);
  e && e.depth == t && e.textOffset && hn(e.nodeBefore, r);
}
function pn(n, e) {
  return n.type.checkContent(e), n.copy(e);
}
function dd(n, e, t, r, i) {
  let o = n.depth > i && Cs(n, e, i + 1), s = r.depth > i && Cs(t, r, i + 1), l = [];
  return yr(null, n, i, l), o && s && e.index(i) == t.index(i) ? (cd(o, s), hn(pn(o, dd(n, e, t, r, i + 1)), l)) : (o && hn(pn(o, Pi(n, e, i + 1)), l), yr(e, t, i, l), s && hn(pn(s, Pi(t, r, i + 1)), l)), yr(r, null, i, l), new x(l);
}
function Pi(n, e, t) {
  let r = [];
  if (yr(null, n, t, r), n.depth > t) {
    let i = Cs(n, e, t + 1);
    hn(pn(i, Pi(n, e, t + 1)), r);
  }
  return yr(e, null, t, r), new x(r);
}
function ah(n, e) {
  let t = e.depth - n.openStart, i = e.node(t).copy(n.content);
  for (let o = t - 1; o >= 0; o--)
    i = e.node(o).copy(x.from(i));
  return {
    start: i.resolveNoCache(n.openStart + t),
    end: i.resolveNoCache(i.content.size - n.openEnd - t)
  };
}
class Nr {
  /**
  @internal
  */
  constructor(e, t, r) {
    this.pos = e, this.path = t, this.parentOffset = r, this.depth = t.length / 3 - 1;
  }
  /**
  @internal
  */
  resolveDepth(e) {
    return e == null ? this.depth : e < 0 ? this.depth + e : e;
  }
  /**
  The parent node that the position points into. Note that even if
  a position points into a text node, that node is not considered
  the parent—text nodes are ‘flat’ in this model, and have no content.
  */
  get parent() {
    return this.node(this.depth);
  }
  /**
  The root node in which the position was resolved.
  */
  get doc() {
    return this.node(0);
  }
  /**
  The ancestor node at the given level. `p.node(p.depth)` is the
  same as `p.parent`.
  */
  node(e) {
    return this.path[this.resolveDepth(e) * 3];
  }
  /**
  The index into the ancestor at the given level. If this points
  at the 3rd node in the 2nd paragraph on the top level, for
  example, `p.index(0)` is 1 and `p.index(1)` is 2.
  */
  index(e) {
    return this.path[this.resolveDepth(e) * 3 + 1];
  }
  /**
  The index pointing after this position into the ancestor at the
  given level.
  */
  indexAfter(e) {
    return e = this.resolveDepth(e), this.index(e) + (e == this.depth && !this.textOffset ? 0 : 1);
  }
  /**
  The (absolute) position at the start of the node at the given
  level.
  */
  start(e) {
    return e = this.resolveDepth(e), e == 0 ? 0 : this.path[e * 3 - 1] + 1;
  }
  /**
  The (absolute) position at the end of the node at the given
  level.
  */
  end(e) {
    return e = this.resolveDepth(e), this.start(e) + this.node(e).content.size;
  }
  /**
  The (absolute) position directly before the wrapping node at the
  given level, or, when `depth` is `this.depth + 1`, the original
  position.
  */
  before(e) {
    if (e = this.resolveDepth(e), !e)
      throw new RangeError("There is no position before the top-level node");
    return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1];
  }
  /**
  The (absolute) position directly after the wrapping node at the
  given level, or the original position when `depth` is `this.depth + 1`.
  */
  after(e) {
    if (e = this.resolveDepth(e), !e)
      throw new RangeError("There is no position after the top-level node");
    return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1] + this.path[e * 3].nodeSize;
  }
  /**
  When this position points into a text node, this returns the
  distance between the position and the start of the text node.
  Will be zero for positions that point between nodes.
  */
  get textOffset() {
    return this.pos - this.path[this.path.length - 1];
  }
  /**
  Get the node directly after the position, if any. If the position
  points into a text node, only the part of that node after the
  position is returned.
  */
  get nodeAfter() {
    let e = this.parent, t = this.index(this.depth);
    if (t == e.childCount)
      return null;
    let r = this.pos - this.path[this.path.length - 1], i = e.child(t);
    return r ? e.child(t).cut(r) : i;
  }
  /**
  Get the node directly before the position, if any. If the
  position points into a text node, only the part of that node
  before the position is returned.
  */
  get nodeBefore() {
    let e = this.index(this.depth), t = this.pos - this.path[this.path.length - 1];
    return t ? this.parent.child(e).cut(0, t) : e == 0 ? null : this.parent.child(e - 1);
  }
  /**
  Get the position at the given index in the parent node at the
  given depth (which defaults to `this.depth`).
  */
  posAtIndex(e, t) {
    t = this.resolveDepth(t);
    let r = this.path[t * 3], i = t == 0 ? 0 : this.path[t * 3 - 1] + 1;
    for (let o = 0; o < e; o++)
      i += r.child(o).nodeSize;
    return i;
  }
  /**
  Get the marks at this position, factoring in the surrounding
  marks' [`inclusive`](https://prosemirror.net/docs/ref/#model.MarkSpec.inclusive) property. If the
  position is at the start of a non-empty node, the marks of the
  node after it (if any) are returned.
  */
  marks() {
    let e = this.parent, t = this.index();
    if (e.content.size == 0)
      return q.none;
    if (this.textOffset)
      return e.child(t).marks;
    let r = e.maybeChild(t - 1), i = e.maybeChild(t);
    if (!r) {
      let l = r;
      r = i, i = l;
    }
    let o = r.marks;
    for (var s = 0; s < o.length; s++)
      o[s].type.spec.inclusive === !1 && (!i || !o[s].isInSet(i.marks)) && (o = o[s--].removeFromSet(o));
    return o;
  }
  /**
  Get the marks after the current position, if any, except those
  that are non-inclusive and not present at position `$end`. This
  is mostly useful for getting the set of marks to preserve after a
  deletion. Will return `null` if this position is at the end of
  its parent node or its parent node isn't a textblock (in which
  case no marks should be preserved).
  */
  marksAcross(e) {
    let t = this.parent.maybeChild(this.index());
    if (!t || !t.isInline)
      return null;
    let r = t.marks, i = e.parent.maybeChild(e.index());
    for (var o = 0; o < r.length; o++)
      r[o].type.spec.inclusive === !1 && (!i || !r[o].isInSet(i.marks)) && (r = r[o--].removeFromSet(r));
    return r;
  }
  /**
  The depth up to which this position and the given (non-resolved)
  position share the same parent nodes.
  */
  sharedDepth(e) {
    for (let t = this.depth; t > 0; t--)
      if (this.start(t) <= e && this.end(t) >= e)
        return t;
    return 0;
  }
  /**
  Returns a range based on the place where this position and the
  given position diverge around block content. If both point into
  the same textblock, for example, a range around that textblock
  will be returned. If they point into different blocks, the range
  around those blocks in their shared ancestor is returned. You can
  pass in an optional predicate that will be called with a parent
  node to see if a range into that parent is acceptable.
  */
  blockRange(e = this, t) {
    if (e.pos < this.pos)
      return e.blockRange(this);
    for (let r = this.depth - (this.parent.inlineContent || this.pos == e.pos ? 1 : 0); r >= 0; r--)
      if (e.pos <= this.end(r) && (!t || t(this.node(r))))
        return new Bi(this, e, r);
    return null;
  }
  /**
  Query whether the given position shares the same parent node.
  */
  sameParent(e) {
    return this.pos - this.parentOffset == e.pos - e.parentOffset;
  }
  /**
  Return the greater of this and the given position.
  */
  max(e) {
    return e.pos > this.pos ? e : this;
  }
  /**
  Return the smaller of this and the given position.
  */
  min(e) {
    return e.pos < this.pos ? e : this;
  }
  /**
  @internal
  */
  toString() {
    let e = "";
    for (let t = 1; t <= this.depth; t++)
      e += (e ? "/" : "") + this.node(t).type.name + "_" + this.index(t - 1);
    return e + ":" + this.parentOffset;
  }
  /**
  @internal
  */
  static resolve(e, t) {
    if (!(t >= 0 && t <= e.content.size))
      throw new RangeError("Position " + t + " out of range");
    let r = [], i = 0, o = t;
    for (let s = e; ; ) {
      let { index: l, offset: a } = s.content.findIndex(o), c = o - a;
      if (r.push(s, l, i + a), !c || (s = s.child(l), s.isText))
        break;
      o = c - 1, i += a + 1;
    }
    return new Nr(t, r, o);
  }
  /**
  @internal
  */
  static resolveCached(e, t) {
    let r = ta.get(e);
    if (r)
      for (let o = 0; o < r.elts.length; o++) {
        let s = r.elts[o];
        if (s.pos == t)
          return s;
      }
    else
      ta.set(e, r = new ch());
    let i = r.elts[r.i] = Nr.resolve(e, t);
    return r.i = (r.i + 1) % dh, i;
  }
}
class ch {
  constructor() {
    this.elts = [], this.i = 0;
  }
}
const dh = 12, ta = /* @__PURE__ */ new WeakMap();
class Bi {
  /**
  Construct a node range. `$from` and `$to` should point into the
  same node until at least the given `depth`, since a node range
  denotes an adjacent set of nodes in a single parent node.
  */
  constructor(e, t, r) {
    this.$from = e, this.$to = t, this.depth = r;
  }
  /**
  The position at the start of the range.
  */
  get start() {
    return this.$from.before(this.depth + 1);
  }
  /**
  The position at the end of the range.
  */
  get end() {
    return this.$to.after(this.depth + 1);
  }
  /**
  The parent node that the range points into.
  */
  get parent() {
    return this.$from.node(this.depth);
  }
  /**
  The start index of the range in the parent node.
  */
  get startIndex() {
    return this.$from.index(this.depth);
  }
  /**
  The end index of the range in the parent node.
  */
  get endIndex() {
    return this.$to.indexAfter(this.depth);
  }
}
const uh = /* @__PURE__ */ Object.create(null);
let qt = class Ss {
  /**
  @internal
  */
  constructor(e, t, r, i = q.none) {
    this.type = e, this.attrs = t, this.marks = i, this.content = r || x.empty;
  }
  /**
  The array of this node's child nodes.
  */
  get children() {
    return this.content.content;
  }
  /**
  The size of this node, as defined by the integer-based [indexing
  scheme](/docs/guide/#doc.indexing). For text nodes, this is the
  amount of characters. For other leaf nodes, it is one. For
  non-leaf nodes, it is the size of the content plus two (the
  start and end token).
  */
  get nodeSize() {
    return this.isLeaf ? 1 : 2 + this.content.size;
  }
  /**
  The number of children that the node has.
  */
  get childCount() {
    return this.content.childCount;
  }
  /**
  Get the child node at the given index. Raises an error when the
  index is out of range.
  */
  child(e) {
    return this.content.child(e);
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(e) {
    return this.content.maybeChild(e);
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(e) {
    this.content.forEach(e);
  }
  /**
  Invoke a callback for all descendant nodes recursively between
  the given two positions that are relative to start of this
  node's content. The callback is invoked with the node, its
  position relative to the original node (method receiver),
  its parent node, and its child index. When the callback returns
  false for a given node, that node's children will not be
  recursed over. The last parameter can be used to specify a
  starting position to count from.
  */
  nodesBetween(e, t, r, i = 0) {
    this.content.nodesBetween(e, t, r, i, this);
  }
  /**
  Call the given callback for every descendant node. Doesn't
  descend into a node when the callback returns `false`.
  */
  descendants(e) {
    this.nodesBetween(0, this.content.size, e);
  }
  /**
  Concatenates all the text nodes found in this fragment and its
  children.
  */
  get textContent() {
    return this.isLeaf && this.type.spec.leafText ? this.type.spec.leafText(this) : this.textBetween(0, this.content.size, "");
  }
  /**
  Get all text between positions `from` and `to`. When
  `blockSeparator` is given, it will be inserted to separate text
  from different block nodes. If `leafText` is given, it'll be
  inserted for every non-text leaf node encountered, otherwise
  [`leafText`](https://prosemirror.net/docs/ref/#model.NodeSpec^leafText) will be used.
  */
  textBetween(e, t, r, i) {
    return this.content.textBetween(e, t, r, i);
  }
  /**
  Returns this node's first child, or `null` if there are no
  children.
  */
  get firstChild() {
    return this.content.firstChild;
  }
  /**
  Returns this node's last child, or `null` if there are no
  children.
  */
  get lastChild() {
    return this.content.lastChild;
  }
  /**
  Test whether two nodes represent the same piece of document.
  */
  eq(e) {
    return this == e || this.sameMarkup(e) && this.content.eq(e.content);
  }
  /**
  Compare the markup (type, attributes, and marks) of this node to
  those of another. Returns `true` if both have the same markup.
  */
  sameMarkup(e) {
    return this.hasMarkup(e.type, e.attrs, e.marks);
  }
  /**
  Check whether this node's markup correspond to the given type,
  attributes, and marks.
  */
  hasMarkup(e, t, r) {
    return this.type == e && Ii(this.attrs, t || e.defaultAttrs || uh) && q.sameSet(this.marks, r || q.none);
  }
  /**
  Create a new node with the same markup as this node, containing
  the given content (or empty, if no content is given).
  */
  copy(e = null) {
    return e == this.content ? this : new Ss(this.type, this.attrs, e, this.marks);
  }
  /**
  Create a copy of this node, with the given set of marks instead
  of the node's own marks.
  */
  mark(e) {
    return e == this.marks ? this : new Ss(this.type, this.attrs, this.content, e);
  }
  /**
  Create a copy of this node with only the content between the
  given positions. If `to` is not given, it defaults to the end of
  the node.
  */
  cut(e, t = this.content.size) {
    return e == 0 && t == this.content.size ? this : this.copy(this.content.cut(e, t));
  }
  /**
  Cut out the part of the document between the given positions, and
  return it as a `Slice` object.
  */
  slice(e, t = this.content.size, r = !1) {
    if (e == t)
      return T.empty;
    let i = this.resolve(e), o = this.resolve(t), s = r ? 0 : i.sharedDepth(t), l = i.start(s), c = i.node(s).content.cut(i.pos - l, o.pos - l);
    return new T(c, i.depth - s, o.depth - s);
  }
  /**
  Replace the part of the document between the given positions with
  the given slice. The slice must 'fit', meaning its open sides
  must be able to connect to the surrounding content, and its
  content nodes must be valid children for the node they are placed
  into. If any of this is violated, an error of type
  [`ReplaceError`](https://prosemirror.net/docs/ref/#model.ReplaceError) is thrown.
  */
  replace(e, t, r) {
    return lh(this.resolve(e), this.resolve(t), r);
  }
  /**
  Find the node directly after the given position.
  */
  nodeAt(e) {
    for (let t = this; ; ) {
      let { index: r, offset: i } = t.content.findIndex(e);
      if (t = t.maybeChild(r), !t)
        return null;
      if (i == e || t.isText)
        return t;
      e -= i + 1;
    }
  }
  /**
  Find the (direct) child node after the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childAfter(e) {
    let { index: t, offset: r } = this.content.findIndex(e);
    return { node: this.content.maybeChild(t), index: t, offset: r };
  }
  /**
  Find the (direct) child node before the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childBefore(e) {
    if (e == 0)
      return { node: null, index: 0, offset: 0 };
    let { index: t, offset: r } = this.content.findIndex(e);
    if (r < e)
      return { node: this.content.child(t), index: t, offset: r };
    let i = this.content.child(t - 1);
    return { node: i, index: t - 1, offset: r - i.nodeSize };
  }
  /**
  Resolve the given position in the document, returning an
  [object](https://prosemirror.net/docs/ref/#model.ResolvedPos) with information about its context.
  */
  resolve(e) {
    return Nr.resolveCached(this, e);
  }
  /**
  @internal
  */
  resolveNoCache(e) {
    return Nr.resolve(this, e);
  }
  /**
  Test whether a given mark or mark type occurs in this document
  between the two given positions.
  */
  rangeHasMark(e, t, r) {
    let i = !1;
    return t > e && this.nodesBetween(e, t, (o) => (r.isInSet(o.marks) && (i = !0), !i)), i;
  }
  /**
  True when this is a block (non-inline node)
  */
  get isBlock() {
    return this.type.isBlock;
  }
  /**
  True when this is a textblock node, a block node with inline
  content.
  */
  get isTextblock() {
    return this.type.isTextblock;
  }
  /**
  True when this node allows inline content.
  */
  get inlineContent() {
    return this.type.inlineContent;
  }
  /**
  True when this is an inline node (a text node or a node that can
  appear among text).
  */
  get isInline() {
    return this.type.isInline;
  }
  /**
  True when this is a text node.
  */
  get isText() {
    return this.type.isText;
  }
  /**
  True when this is a leaf node.
  */
  get isLeaf() {
    return this.type.isLeaf;
  }
  /**
  True when this is an atom, i.e. when it does not have directly
  editable content. This is usually the same as `isLeaf`, but can
  be configured with the [`atom` property](https://prosemirror.net/docs/ref/#model.NodeSpec.atom)
  on a node's spec (typically used when the node is displayed as
  an uneditable [node view](https://prosemirror.net/docs/ref/#view.NodeView)).
  */
  get isAtom() {
    return this.type.isAtom;
  }
  /**
  Return a string representation of this node for debugging
  purposes.
  */
  toString() {
    if (this.type.spec.toDebugString)
      return this.type.spec.toDebugString(this);
    let e = this.type.name;
    return this.content.size && (e += "(" + this.content.toStringInner() + ")"), ud(this.marks, e);
  }
  /**
  Get the content match in this node at the given index.
  */
  contentMatchAt(e) {
    let t = this.type.contentMatch.matchFragment(this.content, 0, e);
    if (!t)
      throw new Error("Called contentMatchAt on a node with invalid content");
    return t;
  }
  /**
  Test whether replacing the range between `from` and `to` (by
  child index) with the given replacement fragment (which defaults
  to the empty fragment) would leave the node's content valid. You
  can optionally pass `start` and `end` indices into the
  replacement fragment.
  */
  canReplace(e, t, r = x.empty, i = 0, o = r.childCount) {
    let s = this.contentMatchAt(e).matchFragment(r, i, o), l = s && s.matchFragment(this.content, t);
    if (!l || !l.validEnd)
      return !1;
    for (let a = i; a < o; a++)
      if (!this.type.allowsMarks(r.child(a).marks))
        return !1;
    return !0;
  }
  /**
  Test whether replacing the range `from` to `to` (by index) with
  a node of the given type would leave the node's content valid.
  */
  canReplaceWith(e, t, r, i) {
    if (i && !this.type.allowsMarks(i))
      return !1;
    let o = this.contentMatchAt(e).matchType(r), s = o && o.matchFragment(this.content, t);
    return s ? s.validEnd : !1;
  }
  /**
  Test whether the given node's content could be appended to this
  node. If that node is empty, this will only return true if there
  is at least one node type that can appear in both nodes (to avoid
  merging completely incompatible nodes).
  */
  canAppend(e) {
    return e.content.size ? this.canReplace(this.childCount, this.childCount, e.content) : this.type.compatibleContent(e.type);
  }
  /**
  Check whether this node and its descendants conform to the
  schema, and raise an exception when they do not.
  */
  check() {
    this.type.checkContent(this.content), this.type.checkAttrs(this.attrs);
    let e = q.none;
    for (let t = 0; t < this.marks.length; t++) {
      let r = this.marks[t];
      r.type.checkAttrs(r.attrs), e = r.addToSet(e);
    }
    if (!q.sameSet(e, this.marks))
      throw new RangeError(`Invalid collection of marks for node ${this.type.name}: ${this.marks.map((t) => t.type.name)}`);
    this.content.forEach((t) => t.check());
  }
  /**
  Return a JSON-serializeable representation of this node.
  */
  toJSON() {
    let e = { type: this.type.name };
    for (let t in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    return this.content.size && (e.content = this.content.toJSON()), this.marks.length && (e.marks = this.marks.map((t) => t.toJSON())), e;
  }
  /**
  Deserialize a node from its JSON representation.
  */
  static fromJSON(e, t) {
    if (!t)
      throw new RangeError("Invalid input for Node.fromJSON");
    let r;
    if (t.marks) {
      if (!Array.isArray(t.marks))
        throw new RangeError("Invalid mark data for Node.fromJSON");
      r = t.marks.map(e.markFromJSON);
    }
    if (t.type == "text") {
      if (typeof t.text != "string")
        throw new RangeError("Invalid text node in JSON");
      return e.text(t.text, r);
    }
    let i = x.fromJSON(e, t.content), o = e.nodeType(t.type).create(t.attrs, i, r);
    return o.type.checkAttrs(o.attrs), o;
  }
};
qt.prototype.text = void 0;
class Hi extends qt {
  /**
  @internal
  */
  constructor(e, t, r, i) {
    if (super(e, t, null, i), !r)
      throw new RangeError("Empty text nodes are not allowed");
    this.text = r;
  }
  toString() {
    return this.type.spec.toDebugString ? this.type.spec.toDebugString(this) : ud(this.marks, JSON.stringify(this.text));
  }
  get textContent() {
    return this.text;
  }
  textBetween(e, t) {
    return this.text.slice(e, t);
  }
  get nodeSize() {
    return this.text.length;
  }
  mark(e) {
    return e == this.marks ? this : new Hi(this.type, this.attrs, this.text, e);
  }
  withText(e) {
    return e == this.text ? this : new Hi(this.type, this.attrs, e, this.marks);
  }
  cut(e = 0, t = this.text.length) {
    return e == 0 && t == this.text.length ? this : this.withText(this.text.slice(e, t));
  }
  eq(e) {
    return this.sameMarkup(e) && this.text == e.text;
  }
  toJSON() {
    let e = super.toJSON();
    return e.text = this.text, e;
  }
}
function ud(n, e) {
  for (let t = n.length - 1; t >= 0; t--)
    e = n[t].type.name + "(" + e + ")";
  return e;
}
class vn {
  /**
  @internal
  */
  constructor(e) {
    this.validEnd = e, this.next = [], this.wrapCache = [];
  }
  /**
  @internal
  */
  static parse(e, t) {
    let r = new fh(e, t);
    if (r.next == null)
      return vn.empty;
    let i = fd(r);
    r.next && r.err("Unexpected trailing text");
    let o = vh(wh(i));
    return bh(o, r), o;
  }
  /**
  Match a node type, returning a match after that node if
  successful.
  */
  matchType(e) {
    for (let t = 0; t < this.next.length; t++)
      if (this.next[t].type == e)
        return this.next[t].next;
    return null;
  }
  /**
  Try to match a fragment. Returns the resulting match when
  successful.
  */
  matchFragment(e, t = 0, r = e.childCount) {
    let i = this;
    for (let o = t; i && o < r; o++)
      i = i.matchType(e.child(o).type);
    return i;
  }
  /**
  @internal
  */
  get inlineContent() {
    return this.next.length != 0 && this.next[0].type.isInline;
  }
  /**
  Get the first matching node type at this match position that can
  be generated.
  */
  get defaultType() {
    for (let e = 0; e < this.next.length; e++) {
      let { type: t } = this.next[e];
      if (!(t.isText || t.hasRequiredAttrs()))
        return t;
    }
    return null;
  }
  /**
  @internal
  */
  compatible(e) {
    for (let t = 0; t < this.next.length; t++)
      for (let r = 0; r < e.next.length; r++)
        if (this.next[t].type == e.next[r].type)
          return !0;
    return !1;
  }
  /**
  Try to match the given fragment, and if that fails, see if it can
  be made to match by inserting nodes in front of it. When
  successful, return a fragment of inserted nodes (which may be
  empty if nothing had to be inserted). When `toEnd` is true, only
  return a fragment if the resulting match goes to the end of the
  content expression.
  */
  fillBefore(e, t = !1, r = 0) {
    let i = [this];
    function o(s, l) {
      let a = s.matchFragment(e, r);
      if (a && (!t || a.validEnd))
        return x.from(l.map((c) => c.createAndFill()));
      for (let c = 0; c < s.next.length; c++) {
        let { type: d, next: u } = s.next[c];
        if (!(d.isText || d.hasRequiredAttrs()) && i.indexOf(u) == -1) {
          i.push(u);
          let f = o(u, l.concat(d));
          if (f)
            return f;
        }
      }
      return null;
    }
    return o(this, []);
  }
  /**
  Find a set of wrapping node types that would allow a node of the
  given type to appear at this position. The result may be empty
  (when it fits directly) and will be null when no such wrapping
  exists.
  */
  findWrapping(e) {
    for (let r = 0; r < this.wrapCache.length; r += 2)
      if (this.wrapCache[r] == e)
        return this.wrapCache[r + 1];
    let t = this.computeWrapping(e);
    return this.wrapCache.push(e, t), t;
  }
  /**
  @internal
  */
  computeWrapping(e) {
    let t = /* @__PURE__ */ Object.create(null), r = [{ match: this, type: null, via: null }];
    for (; r.length; ) {
      let i = r.shift(), o = i.match;
      if (o.matchType(e)) {
        let s = [];
        for (let l = i; l.type; l = l.via)
          s.push(l.type);
        return s.reverse();
      }
      for (let s = 0; s < o.next.length; s++) {
        let { type: l, next: a } = o.next[s];
        !l.isLeaf && !l.hasRequiredAttrs() && !(l.name in t) && (!i.type || a.validEnd) && (r.push({ match: l.contentMatch, type: l, via: i }), t[l.name] = !0);
      }
    }
    return null;
  }
  /**
  The number of outgoing edges this node has in the finite
  automaton that describes the content expression.
  */
  get edgeCount() {
    return this.next.length;
  }
  /**
  Get the _n_​th outgoing edge from this node in the finite
  automaton that describes the content expression.
  */
  edge(e) {
    if (e >= this.next.length)
      throw new RangeError(`There's no ${e}th edge in this content match`);
    return this.next[e];
  }
  /**
  @internal
  */
  toString() {
    let e = [];
    function t(r) {
      e.push(r);
      for (let i = 0; i < r.next.length; i++)
        e.indexOf(r.next[i].next) == -1 && t(r.next[i].next);
    }
    return t(this), e.map((r, i) => {
      let o = i + (r.validEnd ? "*" : " ") + " ";
      for (let s = 0; s < r.next.length; s++)
        o += (s ? ", " : "") + r.next[s].type.name + "->" + e.indexOf(r.next[s].next);
      return o;
    }).join(`
`);
  }
}
vn.empty = new vn(!0);
class fh {
  constructor(e, t) {
    this.string = e, this.nodeTypes = t, this.inline = null, this.pos = 0, this.tokens = e.split(/\s*(?=\b|\W|$)/), this.tokens[this.tokens.length - 1] == "" && this.tokens.pop(), this.tokens[0] == "" && this.tokens.shift();
  }
  get next() {
    return this.tokens[this.pos];
  }
  eat(e) {
    return this.next == e && (this.pos++ || !0);
  }
  err(e) {
    throw new SyntaxError(e + " (in content expression '" + this.string + "')");
  }
}
function fd(n) {
  let e = [];
  do
    e.push(hh(n));
  while (n.eat("|"));
  return e.length == 1 ? e[0] : { type: "choice", exprs: e };
}
function hh(n) {
  let e = [];
  do
    e.push(ph(n));
  while (n.next && n.next != ")" && n.next != "|");
  return e.length == 1 ? e[0] : { type: "seq", exprs: e };
}
function ph(n) {
  let e = yh(n);
  for (; ; )
    if (n.eat("+"))
      e = { type: "plus", expr: e };
    else if (n.eat("*"))
      e = { type: "star", expr: e };
    else if (n.eat("?"))
      e = { type: "opt", expr: e };
    else if (n.eat("{"))
      e = mh(n, e);
    else
      break;
  return e;
}
function na(n) {
  /\D/.test(n.next) && n.err("Expected number, got '" + n.next + "'");
  let e = Number(n.next);
  return n.pos++, e;
}
function mh(n, e) {
  let t = na(n), r = t;
  return n.eat(",") && (n.next != "}" ? r = na(n) : r = -1), n.eat("}") || n.err("Unclosed braced range"), { type: "range", min: t, max: r, expr: e };
}
function gh(n, e) {
  let t = n.nodeTypes, r = t[e];
  if (r)
    return [r];
  let i = [];
  for (let o in t) {
    let s = t[o];
    s.isInGroup(e) && i.push(s);
  }
  return i.length == 0 && n.err("No node type or group '" + e + "' found"), i;
}
function yh(n) {
  if (n.eat("(")) {
    let e = fd(n);
    return n.eat(")") || n.err("Missing closing paren"), e;
  } else if (/\W/.test(n.next))
    n.err("Unexpected token '" + n.next + "'");
  else {
    let e = gh(n, n.next).map((t) => (n.inline == null ? n.inline = t.isInline : n.inline != t.isInline && n.err("Mixing inline and block content"), { type: "name", value: t }));
    return n.pos++, e.length == 1 ? e[0] : { type: "choice", exprs: e };
  }
}
function wh(n) {
  let e = [[]];
  return i(o(n, 0), t()), e;
  function t() {
    return e.push([]) - 1;
  }
  function r(s, l, a) {
    let c = { term: a, to: l };
    return e[s].push(c), c;
  }
  function i(s, l) {
    s.forEach((a) => a.to = l);
  }
  function o(s, l) {
    if (s.type == "choice")
      return s.exprs.reduce((a, c) => a.concat(o(c, l)), []);
    if (s.type == "seq")
      for (let a = 0; ; a++) {
        let c = o(s.exprs[a], l);
        if (a == s.exprs.length - 1)
          return c;
        i(c, l = t());
      }
    else if (s.type == "star") {
      let a = t();
      return r(l, a), i(o(s.expr, a), a), [r(a)];
    } else if (s.type == "plus") {
      let a = t();
      return i(o(s.expr, l), a), i(o(s.expr, a), a), [r(a)];
    } else {
      if (s.type == "opt")
        return [r(l)].concat(o(s.expr, l));
      if (s.type == "range") {
        let a = l;
        for (let c = 0; c < s.min; c++) {
          let d = t();
          i(o(s.expr, a), d), a = d;
        }
        if (s.max == -1)
          i(o(s.expr, a), a);
        else
          for (let c = s.min; c < s.max; c++) {
            let d = t();
            r(a, d), i(o(s.expr, a), d), a = d;
          }
        return [r(a)];
      } else {
        if (s.type == "name")
          return [r(l, void 0, s.value)];
        throw new Error("Unknown expr type");
      }
    }
  }
}
function hd(n, e) {
  return e - n;
}
function ra(n, e) {
  let t = [];
  return r(e), t.sort(hd);
  function r(i) {
    let o = n[i];
    if (o.length == 1 && !o[0].term)
      return r(o[0].to);
    t.push(i);
    for (let s = 0; s < o.length; s++) {
      let { term: l, to: a } = o[s];
      !l && t.indexOf(a) == -1 && r(a);
    }
  }
}
function vh(n) {
  let e = /* @__PURE__ */ Object.create(null);
  return t(ra(n, 0));
  function t(r) {
    let i = [];
    r.forEach((s) => {
      n[s].forEach(({ term: l, to: a }) => {
        if (!l)
          return;
        let c;
        for (let d = 0; d < i.length; d++)
          i[d][0] == l && (c = i[d][1]);
        ra(n, a).forEach((d) => {
          c || i.push([l, c = []]), c.indexOf(d) == -1 && c.push(d);
        });
      });
    });
    let o = e[r.join(",")] = new vn(r.indexOf(n.length - 1) > -1);
    for (let s = 0; s < i.length; s++) {
      let l = i[s][1].sort(hd);
      o.next.push({ type: i[s][0], next: e[l.join(",")] || t(l) });
    }
    return o;
  }
}
function bh(n, e) {
  for (let t = 0, r = [n]; t < r.length; t++) {
    let i = r[t], o = !i.validEnd, s = [];
    for (let l = 0; l < i.next.length; l++) {
      let { type: a, next: c } = i.next[l];
      s.push(a.name), o && !(a.isText || a.hasRequiredAttrs()) && (o = !1), r.indexOf(c) == -1 && r.push(c);
    }
    o && e.err("Only non-generatable nodes (" + s.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
  }
}
function pd(n) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t in n) {
    let r = n[t];
    if (!r.hasDefault)
      return null;
    e[t] = r.default;
  }
  return e;
}
function md(n, e) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let r in n) {
    let i = e && e[r];
    if (i === void 0) {
      let o = n[r];
      if (o.hasDefault)
        i = o.default;
      else
        throw new RangeError("No value supplied for attribute " + r);
    }
    t[r] = i;
  }
  return t;
}
function gd(n, e, t, r) {
  for (let i in e)
    if (!(i in n))
      throw new RangeError(`Unsupported attribute ${i} for ${t} of type ${i}`);
  for (let i in n) {
    let o = n[i];
    o.validate && o.validate(e[i]);
  }
}
function yd(n, e) {
  let t = /* @__PURE__ */ Object.create(null);
  if (e)
    for (let r in e)
      t[r] = new xh(n, r, e[r]);
  return t;
}
let ia = class wd {
  /**
  @internal
  */
  constructor(e, t, r) {
    this.name = e, this.schema = t, this.spec = r, this.markSet = null, this.groups = r.group ? r.group.split(" ") : [], this.attrs = yd(e, r.attrs), this.defaultAttrs = pd(this.attrs), this.contentMatch = null, this.inlineContent = null, this.isBlock = !(r.inline || e == "text"), this.isText = e == "text";
  }
  /**
  True if this is an inline type.
  */
  get isInline() {
    return !this.isBlock;
  }
  /**
  True if this is a textblock type, a block that contains inline
  content.
  */
  get isTextblock() {
    return this.isBlock && this.inlineContent;
  }
  /**
  True for node types that allow no content.
  */
  get isLeaf() {
    return this.contentMatch == vn.empty;
  }
  /**
  True when this node is an atom, i.e. when it does not have
  directly editable content.
  */
  get isAtom() {
    return this.isLeaf || !!this.spec.atom;
  }
  /**
  Return true when this node type is part of the given
  [group](https://prosemirror.net/docs/ref/#model.NodeSpec.group).
  */
  isInGroup(e) {
    return this.groups.indexOf(e) > -1;
  }
  /**
  The node type's [whitespace](https://prosemirror.net/docs/ref/#model.NodeSpec.whitespace) option.
  */
  get whitespace() {
    return this.spec.whitespace || (this.spec.code ? "pre" : "normal");
  }
  /**
  Tells you whether this node type has any required attributes.
  */
  hasRequiredAttrs() {
    for (let e in this.attrs)
      if (this.attrs[e].isRequired)
        return !0;
    return !1;
  }
  /**
  Indicates whether this node allows some of the same content as
  the given node type.
  */
  compatibleContent(e) {
    return this == e || this.contentMatch.compatible(e.contentMatch);
  }
  /**
  @internal
  */
  computeAttrs(e) {
    return !e && this.defaultAttrs ? this.defaultAttrs : md(this.attrs, e);
  }
  /**
  Create a `Node` of this type. The given attributes are
  checked and defaulted (you can pass `null` to use the type's
  defaults entirely, if no required attributes exist). `content`
  may be a `Fragment`, a node, an array of nodes, or
  `null`. Similarly `marks` may be `null` to default to the empty
  set of marks.
  */
  create(e = null, t, r) {
    if (this.isText)
      throw new Error("NodeType.create can't construct text nodes");
    return new qt(this, this.computeAttrs(e), x.from(t), q.setFrom(r));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but check the given content
  against the node type's content restrictions, and throw an error
  if it doesn't match.
  */
  createChecked(e = null, t, r) {
    return t = x.from(t), this.checkContent(t), new qt(this, this.computeAttrs(e), t, q.setFrom(r));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but see if it is
  necessary to add nodes to the start or end of the given fragment
  to make it fit the node. If no fitting wrapping can be found,
  return null. Note that, due to the fact that required nodes can
  always be created, this will always succeed if you pass null or
  `Fragment.empty` as content.
  */
  createAndFill(e = null, t, r) {
    if (e = this.computeAttrs(e), t = x.from(t), t.size) {
      let s = this.contentMatch.fillBefore(t);
      if (!s)
        return null;
      t = s.append(t);
    }
    let i = this.contentMatch.matchFragment(t), o = i && i.fillBefore(x.empty, !0);
    return o ? new qt(this, e, t.append(o), q.setFrom(r)) : null;
  }
  /**
  Returns true if the given fragment is valid content for this node
  type.
  */
  validContent(e) {
    let t = this.contentMatch.matchFragment(e);
    if (!t || !t.validEnd)
      return !1;
    for (let r = 0; r < e.childCount; r++)
      if (!this.allowsMarks(e.child(r).marks))
        return !1;
    return !0;
  }
  /**
  Throws a RangeError if the given fragment is not valid content for this
  node type.
  @internal
  */
  checkContent(e) {
    if (!this.validContent(e))
      throw new RangeError(`Invalid content for node ${this.name}: ${e.toString().slice(0, 50)}`);
  }
  /**
  @internal
  */
  checkAttrs(e) {
    gd(this.attrs, e, "node", this.name);
  }
  /**
  Check whether the given mark type is allowed in this node.
  */
  allowsMarkType(e) {
    return this.markSet == null || this.markSet.indexOf(e) > -1;
  }
  /**
  Test whether the given set of marks are allowed in this node.
  */
  allowsMarks(e) {
    if (this.markSet == null)
      return !0;
    for (let t = 0; t < e.length; t++)
      if (!this.allowsMarkType(e[t].type))
        return !1;
    return !0;
  }
  /**
  Removes the marks that are not allowed in this node from the given set.
  */
  allowedMarks(e) {
    if (this.markSet == null)
      return e;
    let t;
    for (let r = 0; r < e.length; r++)
      this.allowsMarkType(e[r].type) ? t && t.push(e[r]) : t || (t = e.slice(0, r));
    return t ? t.length ? t : q.none : e;
  }
  /**
  @internal
  */
  static compile(e, t) {
    let r = /* @__PURE__ */ Object.create(null);
    e.forEach((o, s) => r[o] = new wd(o, t, s));
    let i = t.spec.topNode || "doc";
    if (!r[i])
      throw new RangeError("Schema is missing its top node type ('" + i + "')");
    if (!r.text)
      throw new RangeError("Every schema needs a 'text' type");
    for (let o in r.text.attrs)
      throw new RangeError("The text node type should not have attributes");
    return r;
  }
};
function kh(n, e, t) {
  let r = t.split("|");
  return (i) => {
    let o = i === null ? "null" : typeof i;
    if (r.indexOf(o) < 0)
      throw new RangeError(`Expected value of type ${r} for attribute ${e} on type ${n}, got ${o}`);
  };
}
class xh {
  constructor(e, t, r) {
    this.hasDefault = Object.prototype.hasOwnProperty.call(r, "default"), this.default = r.default, this.validate = typeof r.validate == "string" ? kh(e, t, r.validate) : r.validate;
  }
  get isRequired() {
    return !this.hasDefault;
  }
}
class So {
  /**
  @internal
  */
  constructor(e, t, r, i) {
    this.name = e, this.rank = t, this.schema = r, this.spec = i, this.attrs = yd(e, i.attrs), this.excluded = null;
    let o = pd(this.attrs);
    this.instance = o ? new q(this, o) : null;
  }
  /**
  Create a mark of this type. `attrs` may be `null` or an object
  containing only some of the mark's attributes. The others, if
  they have defaults, will be added.
  */
  create(e = null) {
    return !e && this.instance ? this.instance : new q(this, md(this.attrs, e));
  }
  /**
  @internal
  */
  static compile(e, t) {
    let r = /* @__PURE__ */ Object.create(null), i = 0;
    return e.forEach((o, s) => r[o] = new So(o, i++, t, s)), r;
  }
  /**
  When there is a mark of this type in the given set, a new set
  without it is returned. Otherwise, the input set is returned.
  */
  removeFromSet(e) {
    for (var t = 0; t < e.length; t++)
      e[t].type == this && (e = e.slice(0, t).concat(e.slice(t + 1)), t--);
    return e;
  }
  /**
  Tests whether there is a mark of this type in the given set.
  */
  isInSet(e) {
    for (let t = 0; t < e.length; t++)
      if (e[t].type == this)
        return e[t];
  }
  /**
  @internal
  */
  checkAttrs(e) {
    gd(this.attrs, e, "mark", this.name);
  }
  /**
  Queries whether a given mark type is
  [excluded](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) by this one.
  */
  excludes(e) {
    return this.excluded.indexOf(e) > -1;
  }
}
class vd {
  /**
  Construct a schema from a schema [specification](https://prosemirror.net/docs/ref/#model.SchemaSpec).
  */
  constructor(e) {
    this.linebreakReplacement = null, this.cached = /* @__PURE__ */ Object.create(null);
    let t = this.spec = {};
    for (let i in e)
      t[i] = e[i];
    t.nodes = pe.from(e.nodes), t.marks = pe.from(e.marks || {}), this.nodes = ia.compile(this.spec.nodes, this), this.marks = So.compile(this.spec.marks, this);
    let r = /* @__PURE__ */ Object.create(null);
    for (let i in this.nodes) {
      if (i in this.marks)
        throw new RangeError(i + " can not be both a node and a mark");
      let o = this.nodes[i], s = o.spec.content || "", l = o.spec.marks;
      if (o.contentMatch = r[s] || (r[s] = vn.parse(s, this.nodes)), o.inlineContent = o.contentMatch.inlineContent, o.spec.linebreakReplacement) {
        if (this.linebreakReplacement)
          throw new RangeError("Multiple linebreak nodes defined");
        if (!o.isInline || !o.isLeaf)
          throw new RangeError("Linebreak replacement nodes must be inline leaf nodes");
        this.linebreakReplacement = o;
      }
      o.markSet = l == "_" ? null : l ? oa(this, l.split(" ")) : l == "" || !o.inlineContent ? [] : null;
    }
    for (let i in this.marks) {
      let o = this.marks[i], s = o.spec.excludes;
      o.excluded = s == null ? [o] : s == "" ? [] : oa(this, s.split(" "));
    }
    this.nodeFromJSON = this.nodeFromJSON.bind(this), this.markFromJSON = this.markFromJSON.bind(this), this.topNodeType = this.nodes[this.spec.topNode || "doc"], this.cached.wrappings = /* @__PURE__ */ Object.create(null);
  }
  /**
  Create a node in this schema. The `type` may be a string or a
  `NodeType` instance. Attributes will be extended with defaults,
  `content` may be a `Fragment`, `null`, a `Node`, or an array of
  nodes.
  */
  node(e, t = null, r, i) {
    if (typeof e == "string")
      e = this.nodeType(e);
    else if (e instanceof ia) {
      if (e.schema != this)
        throw new RangeError("Node type from different schema used (" + e.name + ")");
    } else
      throw new RangeError("Invalid node type: " + e);
    return e.createChecked(t, r, i);
  }
  /**
  Create a text node in the schema. Empty text nodes are not
  allowed.
  */
  text(e, t) {
    let r = this.nodes.text;
    return new Hi(r, r.defaultAttrs, e, q.setFrom(t));
  }
  /**
  Create a mark with the given type and attributes.
  */
  mark(e, t) {
    return typeof e == "string" && (e = this.marks[e]), e.create(t);
  }
  /**
  Deserialize a node from its JSON representation. This method is
  bound.
  */
  nodeFromJSON(e) {
    return qt.fromJSON(this, e);
  }
  /**
  Deserialize a mark from its JSON representation. This method is
  bound.
  */
  markFromJSON(e) {
    return q.fromJSON(this, e);
  }
  /**
  @internal
  */
  nodeType(e) {
    let t = this.nodes[e];
    if (!t)
      throw new RangeError("Unknown node type: " + e);
    return t;
  }
}
function oa(n, e) {
  let t = [];
  for (let r = 0; r < e.length; r++) {
    let i = e[r], o = n.marks[i], s = o;
    if (o)
      t.push(o);
    else
      for (let l in n.marks) {
        let a = n.marks[l];
        (i == "_" || a.spec.group && a.spec.group.split(" ").indexOf(i) > -1) && t.push(s = a);
      }
    if (!s)
      throw new SyntaxError("Unknown mark type: '" + e[r] + "'");
  }
  return t;
}
function Ch(n) {
  return n.tag != null;
}
function Sh(n) {
  return n.style != null;
}
class Ut {
  /**
  Create a parser that targets the given schema, using the given
  parsing rules.
  */
  constructor(e, t) {
    this.schema = e, this.rules = t, this.tags = [], this.styles = [];
    let r = this.matchedStyles = [];
    t.forEach((i) => {
      if (Ch(i))
        this.tags.push(i);
      else if (Sh(i)) {
        let o = /[^=]*/.exec(i.style)[0];
        r.indexOf(o) < 0 && r.push(o), this.styles.push(i);
      }
    }), this.normalizeLists = !this.tags.some((i) => {
      if (!/^(ul|ol)\b/.test(i.tag) || !i.node)
        return !1;
      let o = e.nodes[i.node];
      return o.contentMatch.matchType(o);
    });
  }
  /**
  Parse a document from the content of a DOM node.
  */
  parse(e, t = {}) {
    let r = new la(this, t, !1);
    return r.addAll(e, q.none, t.from, t.to), r.finish();
  }
  /**
  Parses the content of the given DOM node, like
  [`parse`](https://prosemirror.net/docs/ref/#model.DOMParser.parse), and takes the same set of
  options. But unlike that method, which produces a whole node,
  this one returns a slice that is open at the sides, meaning that
  the schema constraints aren't applied to the start of nodes to
  the left of the input and the end of nodes at the end.
  */
  parseSlice(e, t = {}) {
    let r = new la(this, t, !0);
    return r.addAll(e, q.none, t.from, t.to), T.maxOpen(r.finish());
  }
  /**
  @internal
  */
  matchTag(e, t, r) {
    for (let i = r ? this.tags.indexOf(r) + 1 : 0; i < this.tags.length; i++) {
      let o = this.tags[i];
      if (Ah(e, o.tag) && (o.namespace === void 0 || e.namespaceURI == o.namespace) && (!o.context || t.matchesContext(o.context))) {
        if (o.getAttrs) {
          let s = o.getAttrs(e);
          if (s === !1)
            continue;
          o.attrs = s || void 0;
        }
        return o;
      }
    }
  }
  /**
  @internal
  */
  matchStyle(e, t, r, i) {
    for (let o = i ? this.styles.indexOf(i) + 1 : 0; o < this.styles.length; o++) {
      let s = this.styles[o], l = s.style;
      if (!(l.indexOf(e) != 0 || s.context && !r.matchesContext(s.context) || // Test that the style string either precisely matches the prop,
      // or has an '=' sign after the prop, followed by the given
      // value.
      l.length > e.length && (l.charCodeAt(e.length) != 61 || l.slice(e.length + 1) != t))) {
        if (s.getAttrs) {
          let a = s.getAttrs(t);
          if (a === !1)
            continue;
          s.attrs = a || void 0;
        }
        return s;
      }
    }
  }
  /**
  @internal
  */
  static schemaRules(e) {
    let t = [];
    function r(i) {
      let o = i.priority == null ? 50 : i.priority, s = 0;
      for (; s < t.length; s++) {
        let l = t[s];
        if ((l.priority == null ? 50 : l.priority) < o)
          break;
      }
      t.splice(s, 0, i);
    }
    for (let i in e.marks) {
      let o = e.marks[i].spec.parseDOM;
      o && o.forEach((s) => {
        r(s = aa(s)), s.mark || s.ignore || s.clearMark || (s.mark = i);
      });
    }
    for (let i in e.nodes) {
      let o = e.nodes[i].spec.parseDOM;
      o && o.forEach((s) => {
        r(s = aa(s)), s.node || s.ignore || s.mark || (s.node = i);
      });
    }
    return t;
  }
  /**
  Construct a DOM parser using the parsing rules listed in a
  schema's [node specs](https://prosemirror.net/docs/ref/#model.NodeSpec.parseDOM), reordered by
  [priority](https://prosemirror.net/docs/ref/#model.ParseRule.priority).
  */
  static fromSchema(e) {
    return e.cached.domParser || (e.cached.domParser = new Ut(e, Ut.schemaRules(e)));
  }
}
const bd = {
  address: !0,
  article: !0,
  aside: !0,
  blockquote: !0,
  canvas: !0,
  dd: !0,
  div: !0,
  dl: !0,
  fieldset: !0,
  figcaption: !0,
  figure: !0,
  footer: !0,
  form: !0,
  h1: !0,
  h2: !0,
  h3: !0,
  h4: !0,
  h5: !0,
  h6: !0,
  header: !0,
  hgroup: !0,
  hr: !0,
  li: !0,
  noscript: !0,
  ol: !0,
  output: !0,
  p: !0,
  pre: !0,
  section: !0,
  table: !0,
  tfoot: !0,
  ul: !0
}, Mh = {
  head: !0,
  noscript: !0,
  object: !0,
  script: !0,
  style: !0,
  title: !0
}, kd = { ol: !0, ul: !0 }, zi = 1, Vi = 2, wr = 4;
function sa(n, e, t) {
  return e != null ? (e ? zi : 0) | (e === "full" ? Vi : 0) : n && n.whitespace == "pre" ? zi | Vi : t & ~wr;
}
class di {
  constructor(e, t, r, i, o, s) {
    this.type = e, this.attrs = t, this.marks = r, this.solid = i, this.options = s, this.content = [], this.activeMarks = q.none, this.match = o || (s & wr ? null : e.contentMatch);
  }
  findWrapping(e) {
    if (!this.match) {
      if (!this.type)
        return [];
      let t = this.type.contentMatch.fillBefore(x.from(e));
      if (t)
        this.match = this.type.contentMatch.matchFragment(t);
      else {
        let r = this.type.contentMatch, i;
        return (i = r.findWrapping(e.type)) ? (this.match = r, i) : null;
      }
    }
    return this.match.findWrapping(e.type);
  }
  finish(e) {
    if (!(this.options & zi)) {
      let r = this.content[this.content.length - 1], i;
      if (r && r.isText && (i = /[ \t\r\n\u000c]+$/.exec(r.text))) {
        let o = r;
        r.text.length == i[0].length ? this.content.pop() : this.content[this.content.length - 1] = o.withText(o.text.slice(0, o.text.length - i[0].length));
      }
    }
    let t = x.from(this.content);
    return !e && this.match && (t = t.append(this.match.fillBefore(x.empty, !0))), this.type ? this.type.create(this.attrs, t, this.marks) : t;
  }
  inlineContext(e) {
    return this.type ? this.type.inlineContent : this.content.length ? this.content[0].isInline : e.parentNode && !bd.hasOwnProperty(e.parentNode.nodeName.toLowerCase());
  }
}
class la {
  constructor(e, t, r) {
    this.parser = e, this.options = t, this.isOpen = r, this.open = 0;
    let i = t.topNode, o, s = sa(null, t.preserveWhitespace, 0) | (r ? wr : 0);
    i ? o = new di(i.type, i.attrs, q.none, !0, t.topMatch || i.type.contentMatch, s) : r ? o = new di(null, null, q.none, !0, null, s) : o = new di(e.schema.topNodeType, null, q.none, !0, null, s), this.nodes = [o], this.find = t.findPositions, this.needsBlock = !1;
  }
  get top() {
    return this.nodes[this.open];
  }
  // Add a DOM node to the content. Text is inserted as text node,
  // otherwise, the node is passed to `addElement` or, if it has a
  // `style` attribute, `addElementWithStyles`.
  addDOM(e, t) {
    e.nodeType == 3 ? this.addTextNode(e, t) : e.nodeType == 1 && this.addElement(e, t);
  }
  addTextNode(e, t) {
    let r = e.nodeValue, i = this.top;
    if (i.options & Vi || i.inlineContext(e) || /[^ \t\r\n\u000c]/.test(r)) {
      if (i.options & zi)
        i.options & Vi ? r = r.replace(/\r\n?/g, `
`) : r = r.replace(/\r?\n|\r/g, " ");
      else if (r = r.replace(/[ \t\r\n\u000c]+/g, " "), /^[ \t\r\n\u000c]/.test(r) && this.open == this.nodes.length - 1) {
        let o = i.content[i.content.length - 1], s = e.previousSibling;
        (!o || s && s.nodeName == "BR" || o.isText && /[ \t\r\n\u000c]$/.test(o.text)) && (r = r.slice(1));
      }
      r && this.insertNode(this.parser.schema.text(r), t), this.findInText(e);
    } else
      this.findInside(e);
  }
  // Try to find a handler for the given tag and use that to parse. If
  // none is found, the element's content nodes are added directly.
  addElement(e, t, r) {
    let i = e.nodeName.toLowerCase(), o;
    kd.hasOwnProperty(i) && this.parser.normalizeLists && Th(e);
    let s = this.options.ruleFromNode && this.options.ruleFromNode(e) || (o = this.parser.matchTag(e, this, r));
    if (s ? s.ignore : Mh.hasOwnProperty(i))
      this.findInside(e), this.ignoreFallback(e, t);
    else if (!s || s.skip || s.closeParent) {
      s && s.closeParent ? this.open = Math.max(0, this.open - 1) : s && s.skip.nodeType && (e = s.skip);
      let l, a = this.top, c = this.needsBlock;
      if (bd.hasOwnProperty(i))
        a.content.length && a.content[0].isInline && this.open && (this.open--, a = this.top), l = !0, a.type || (this.needsBlock = !0);
      else if (!e.firstChild) {
        this.leafFallback(e, t);
        return;
      }
      let d = s && s.skip ? t : this.readStyles(e, t);
      d && this.addAll(e, d), l && this.sync(a), this.needsBlock = c;
    } else {
      let l = this.readStyles(e, t);
      l && this.addElementByRule(e, s, l, s.consuming === !1 ? o : void 0);
    }
  }
  // Called for leaf DOM nodes that would otherwise be ignored
  leafFallback(e, t) {
    e.nodeName == "BR" && this.top.type && this.top.type.inlineContent && this.addTextNode(e.ownerDocument.createTextNode(`
`), t);
  }
  // Called for ignored nodes
  ignoreFallback(e, t) {
    e.nodeName == "BR" && (!this.top.type || !this.top.type.inlineContent) && this.findPlace(this.parser.schema.text("-"), t);
  }
  // Run any style parser associated with the node's styles. Either
  // return an updated array of marks, or null to indicate some of the
  // styles had a rule with `ignore` set.
  readStyles(e, t) {
    let r = e.style;
    if (r && r.length)
      for (let i = 0; i < this.parser.matchedStyles.length; i++) {
        let o = this.parser.matchedStyles[i], s = r.getPropertyValue(o);
        if (s)
          for (let l = void 0; ; ) {
            let a = this.parser.matchStyle(o, s, this, l);
            if (!a)
              break;
            if (a.ignore)
              return null;
            if (a.clearMark ? t = t.filter((c) => !a.clearMark(c)) : t = t.concat(this.parser.schema.marks[a.mark].create(a.attrs)), a.consuming === !1)
              l = a;
            else
              break;
          }
      }
    return t;
  }
  // Look up a handler for the given node. If none are found, return
  // false. Otherwise, apply it, use its return value to drive the way
  // the node's content is wrapped, and return true.
  addElementByRule(e, t, r, i) {
    let o, s;
    if (t.node)
      if (s = this.parser.schema.nodes[t.node], s.isLeaf)
        this.insertNode(s.create(t.attrs), r) || this.leafFallback(e, r);
      else {
        let a = this.enter(s, t.attrs || null, r, t.preserveWhitespace);
        a && (o = !0, r = a);
      }
    else {
      let a = this.parser.schema.marks[t.mark];
      r = r.concat(a.create(t.attrs));
    }
    let l = this.top;
    if (s && s.isLeaf)
      this.findInside(e);
    else if (i)
      this.addElement(e, r, i);
    else if (t.getContent)
      this.findInside(e), t.getContent(e, this.parser.schema).forEach((a) => this.insertNode(a, r));
    else {
      let a = e;
      typeof t.contentElement == "string" ? a = e.querySelector(t.contentElement) : typeof t.contentElement == "function" ? a = t.contentElement(e) : t.contentElement && (a = t.contentElement), this.findAround(e, a, !0), this.addAll(a, r), this.findAround(e, a, !1);
    }
    o && this.sync(l) && this.open--;
  }
  // Add all child nodes between `startIndex` and `endIndex` (or the
  // whole node, if not given). If `sync` is passed, use it to
  // synchronize after every block element.
  addAll(e, t, r, i) {
    let o = r || 0;
    for (let s = r ? e.childNodes[r] : e.firstChild, l = i == null ? null : e.childNodes[i]; s != l; s = s.nextSibling, ++o)
      this.findAtPoint(e, o), this.addDOM(s, t);
    this.findAtPoint(e, o);
  }
  // Try to find a way to fit the given node type into the current
  // context. May add intermediate wrappers and/or leave non-solid
  // nodes that we're in.
  findPlace(e, t) {
    let r, i;
    for (let o = this.open; o >= 0; o--) {
      let s = this.nodes[o], l = s.findWrapping(e);
      if (l && (!r || r.length > l.length) && (r = l, i = s, !l.length) || s.solid)
        break;
    }
    if (!r)
      return null;
    this.sync(i);
    for (let o = 0; o < r.length; o++)
      t = this.enterInner(r[o], null, t, !1);
    return t;
  }
  // Try to insert the given node, adjusting the context when needed.
  insertNode(e, t) {
    if (e.isInline && this.needsBlock && !this.top.type) {
      let i = this.textblockFromContext();
      i && (t = this.enterInner(i, null, t));
    }
    let r = this.findPlace(e, t);
    if (r) {
      this.closeExtra();
      let i = this.top;
      i.match && (i.match = i.match.matchType(e.type));
      let o = q.none;
      for (let s of r.concat(e.marks))
        (i.type ? i.type.allowsMarkType(s.type) : ca(s.type, e.type)) && (o = s.addToSet(o));
      return i.content.push(e.mark(o)), !0;
    }
    return !1;
  }
  // Try to start a node of the given type, adjusting the context when
  // necessary.
  enter(e, t, r, i) {
    let o = this.findPlace(e.create(t), r);
    return o && (o = this.enterInner(e, t, r, !0, i)), o;
  }
  // Open a node of the given type
  enterInner(e, t, r, i = !1, o) {
    this.closeExtra();
    let s = this.top;
    s.match = s.match && s.match.matchType(e);
    let l = sa(e, o, s.options);
    s.options & wr && s.content.length == 0 && (l |= wr);
    let a = q.none;
    return r = r.filter((c) => (s.type ? s.type.allowsMarkType(c.type) : ca(c.type, e)) ? (a = c.addToSet(a), !1) : !0), this.nodes.push(new di(e, t, a, i, null, l)), this.open++, r;
  }
  // Make sure all nodes above this.open are finished and added to
  // their parents
  closeExtra(e = !1) {
    let t = this.nodes.length - 1;
    if (t > this.open) {
      for (; t > this.open; t--)
        this.nodes[t - 1].content.push(this.nodes[t].finish(e));
      this.nodes.length = this.open + 1;
    }
  }
  finish() {
    return this.open = 0, this.closeExtra(this.isOpen), this.nodes[0].finish(this.isOpen || this.options.topOpen);
  }
  sync(e) {
    for (let t = this.open; t >= 0; t--)
      if (this.nodes[t] == e)
        return this.open = t, !0;
    return !1;
  }
  get currentPos() {
    this.closeExtra();
    let e = 0;
    for (let t = this.open; t >= 0; t--) {
      let r = this.nodes[t].content;
      for (let i = r.length - 1; i >= 0; i--)
        e += r[i].nodeSize;
      t && e++;
    }
    return e;
  }
  findAtPoint(e, t) {
    if (this.find)
      for (let r = 0; r < this.find.length; r++)
        this.find[r].node == e && this.find[r].offset == t && (this.find[r].pos = this.currentPos);
  }
  findInside(e) {
    if (this.find)
      for (let t = 0; t < this.find.length; t++)
        this.find[t].pos == null && e.nodeType == 1 && e.contains(this.find[t].node) && (this.find[t].pos = this.currentPos);
  }
  findAround(e, t, r) {
    if (e != t && this.find)
      for (let i = 0; i < this.find.length; i++)
        this.find[i].pos == null && e.nodeType == 1 && e.contains(this.find[i].node) && t.compareDocumentPosition(this.find[i].node) & (r ? 2 : 4) && (this.find[i].pos = this.currentPos);
  }
  findInText(e) {
    if (this.find)
      for (let t = 0; t < this.find.length; t++)
        this.find[t].node == e && (this.find[t].pos = this.currentPos - (e.nodeValue.length - this.find[t].offset));
  }
  // Determines whether the given context string matches this context.
  matchesContext(e) {
    if (e.indexOf("|") > -1)
      return e.split(/\s*\|\s*/).some(this.matchesContext, this);
    let t = e.split("/"), r = this.options.context, i = !this.isOpen && (!r || r.parent.type == this.nodes[0].type), o = -(r ? r.depth + 1 : 0) + (i ? 0 : 1), s = (l, a) => {
      for (; l >= 0; l--) {
        let c = t[l];
        if (c == "") {
          if (l == t.length - 1 || l == 0)
            continue;
          for (; a >= o; a--)
            if (s(l - 1, a))
              return !0;
          return !1;
        } else {
          let d = a > 0 || a == 0 && i ? this.nodes[a].type : r && a >= o ? r.node(a - o).type : null;
          if (!d || d.name != c && !d.isInGroup(c))
            return !1;
          a--;
        }
      }
      return !0;
    };
    return s(t.length - 1, this.open);
  }
  textblockFromContext() {
    let e = this.options.context;
    if (e)
      for (let t = e.depth; t >= 0; t--) {
        let r = e.node(t).contentMatchAt(e.indexAfter(t)).defaultType;
        if (r && r.isTextblock && r.defaultAttrs)
          return r;
      }
    for (let t in this.parser.schema.nodes) {
      let r = this.parser.schema.nodes[t];
      if (r.isTextblock && r.defaultAttrs)
        return r;
    }
  }
}
function Th(n) {
  for (let e = n.firstChild, t = null; e; e = e.nextSibling) {
    let r = e.nodeType == 1 ? e.nodeName.toLowerCase() : null;
    r && kd.hasOwnProperty(r) && t ? (t.appendChild(e), e = t) : r == "li" ? t = e : r && (t = null);
  }
}
function Ah(n, e) {
  return (n.matches || n.msMatchesSelector || n.webkitMatchesSelector || n.mozMatchesSelector).call(n, e);
}
function aa(n) {
  let e = {};
  for (let t in n)
    e[t] = n[t];
  return e;
}
function ca(n, e) {
  let t = e.schema.nodes;
  for (let r in t) {
    let i = t[r];
    if (!i.allowsMarkType(n))
      continue;
    let o = [], s = (l) => {
      o.push(l);
      for (let a = 0; a < l.edgeCount; a++) {
        let { type: c, next: d } = l.edge(a);
        if (c == e || o.indexOf(d) < 0 && s(d))
          return !0;
      }
    };
    if (s(i.contentMatch))
      return !0;
  }
}
class Mn {
  /**
  Create a serializer. `nodes` should map node names to functions
  that take a node and return a description of the corresponding
  DOM. `marks` does the same for mark names, but also gets an
  argument that tells it whether the mark's content is block or
  inline content (for typical use, it'll always be inline). A mark
  serializer may be `null` to indicate that marks of that type
  should not be serialized.
  */
  constructor(e, t) {
    this.nodes = e, this.marks = t;
  }
  /**
  Serialize the content of this fragment to a DOM fragment. When
  not in the browser, the `document` option, containing a DOM
  document, should be passed so that the serializer can create
  nodes.
  */
  serializeFragment(e, t = {}, r) {
    r || (r = _o(t).createDocumentFragment());
    let i = r, o = [];
    return e.forEach((s) => {
      if (o.length || s.marks.length) {
        let l = 0, a = 0;
        for (; l < o.length && a < s.marks.length; ) {
          let c = s.marks[a];
          if (!this.marks[c.type.name]) {
            a++;
            continue;
          }
          if (!c.eq(o[l][0]) || c.type.spec.spanning === !1)
            break;
          l++, a++;
        }
        for (; l < o.length; )
          i = o.pop()[1];
        for (; a < s.marks.length; ) {
          let c = s.marks[a++], d = this.serializeMark(c, s.isInline, t);
          d && (o.push([c, i]), i.appendChild(d.dom), i = d.contentDOM || d.dom);
        }
      }
      i.appendChild(this.serializeNodeInner(s, t));
    }), r;
  }
  /**
  @internal
  */
  serializeNodeInner(e, t) {
    let { dom: r, contentDOM: i } = Mi(_o(t), this.nodes[e.type.name](e), null, e.attrs);
    if (i) {
      if (e.isLeaf)
        throw new RangeError("Content hole not allowed in a leaf node spec");
      this.serializeFragment(e.content, t, i);
    }
    return r;
  }
  /**
  Serialize this node to a DOM node. This can be useful when you
  need to serialize a part of a document, as opposed to the whole
  document. To serialize a whole document, use
  [`serializeFragment`](https://prosemirror.net/docs/ref/#model.DOMSerializer.serializeFragment) on
  its [content](https://prosemirror.net/docs/ref/#model.Node.content).
  */
  serializeNode(e, t = {}) {
    let r = this.serializeNodeInner(e, t);
    for (let i = e.marks.length - 1; i >= 0; i--) {
      let o = this.serializeMark(e.marks[i], e.isInline, t);
      o && ((o.contentDOM || o.dom).appendChild(r), r = o.dom);
    }
    return r;
  }
  /**
  @internal
  */
  serializeMark(e, t, r = {}) {
    let i = this.marks[e.type.name];
    return i && Mi(_o(r), i(e, t), null, e.attrs);
  }
  static renderSpec(e, t, r = null, i) {
    return Mi(e, t, r, i);
  }
  /**
  Build a serializer using the [`toDOM`](https://prosemirror.net/docs/ref/#model.NodeSpec.toDOM)
  properties in a schema's node and mark specs.
  */
  static fromSchema(e) {
    return e.cached.domSerializer || (e.cached.domSerializer = new Mn(this.nodesFromSchema(e), this.marksFromSchema(e)));
  }
  /**
  Gather the serializers in a schema's node specs into an object.
  This can be useful as a base to build a custom serializer from.
  */
  static nodesFromSchema(e) {
    let t = da(e.nodes);
    return t.text || (t.text = (r) => r.text), t;
  }
  /**
  Gather the serializers in a schema's mark specs into an object.
  */
  static marksFromSchema(e) {
    return da(e.marks);
  }
}
function da(n) {
  let e = {};
  for (let t in n) {
    let r = n[t].spec.toDOM;
    r && (e[t] = r);
  }
  return e;
}
function _o(n) {
  return n.document || window.document;
}
const ua = /* @__PURE__ */ new WeakMap();
function Eh(n) {
  let e = ua.get(n);
  return e === void 0 && ua.set(n, e = Oh(n)), e;
}
function Oh(n) {
  let e = null;
  function t(r) {
    if (r && typeof r == "object")
      if (Array.isArray(r))
        if (typeof r[0] == "string")
          e || (e = []), e.push(r);
        else
          for (let i = 0; i < r.length; i++)
            t(r[i]);
      else
        for (let i in r)
          t(r[i]);
  }
  return t(n), e;
}
function Mi(n, e, t, r) {
  if (typeof e == "string")
    return { dom: n.createTextNode(e) };
  if (e.nodeType != null)
    return { dom: e };
  if (e.dom && e.dom.nodeType != null)
    return e;
  let i = e[0], o;
  if (typeof i != "string")
    throw new RangeError("Invalid array passed to renderSpec");
  if (r && (o = Eh(r)) && o.indexOf(e) > -1)
    throw new RangeError("Using an array from an attribute object as a DOM spec. This may be an attempted cross site scripting attack.");
  let s = i.indexOf(" ");
  s > 0 && (t = i.slice(0, s), i = i.slice(s + 1));
  let l, a = t ? n.createElementNS(t, i) : n.createElement(i), c = e[1], d = 1;
  if (c && typeof c == "object" && c.nodeType == null && !Array.isArray(c)) {
    d = 2;
    for (let u in c)
      if (c[u] != null) {
        let f = u.indexOf(" ");
        f > 0 ? a.setAttributeNS(u.slice(0, f), u.slice(f + 1), c[u]) : a.setAttribute(u, c[u]);
      }
  }
  for (let u = d; u < e.length; u++) {
    let f = e[u];
    if (f === 0) {
      if (u < e.length - 1 || u > d)
        throw new RangeError("Content hole must be the only child of its parent node");
      return { dom: a, contentDOM: a };
    } else {
      let { dom: h, contentDOM: p } = Mi(n, f, t, r);
      if (a.appendChild(h), p) {
        if (l)
          throw new RangeError("Multiple content holes");
        l = p;
      }
    }
  }
  return { dom: a, contentDOM: l };
}
const xd = 65535, Cd = Math.pow(2, 16);
function Nh(n, e) {
  return n + e * Cd;
}
function fa(n) {
  return n & xd;
}
function Dh(n) {
  return (n - (n & xd)) / Cd;
}
const Sd = 1, Md = 2, Ti = 4, Td = 8;
class Ms {
  /**
  @internal
  */
  constructor(e, t, r) {
    this.pos = e, this.delInfo = t, this.recover = r;
  }
  /**
  Tells you whether the position was deleted, that is, whether the
  step removed the token on the side queried (via the `assoc`)
  argument from the document.
  */
  get deleted() {
    return (this.delInfo & Td) > 0;
  }
  /**
  Tells you whether the token before the mapped position was deleted.
  */
  get deletedBefore() {
    return (this.delInfo & (Sd | Ti)) > 0;
  }
  /**
  True when the token after the mapped position was deleted.
  */
  get deletedAfter() {
    return (this.delInfo & (Md | Ti)) > 0;
  }
  /**
  Tells whether any of the steps mapped through deletes across the
  position (including both the token before and after the
  position).
  */
  get deletedAcross() {
    return (this.delInfo & Ti) > 0;
  }
}
class Pe {
  /**
  Create a position map. The modifications to the document are
  represented as an array of numbers, in which each group of three
  represents a modified chunk as `[start, oldSize, newSize]`.
  */
  constructor(e, t = !1) {
    if (this.ranges = e, this.inverted = t, !e.length && Pe.empty)
      return Pe.empty;
  }
  /**
  @internal
  */
  recover(e) {
    let t = 0, r = fa(e);
    if (!this.inverted)
      for (let i = 0; i < r; i++)
        t += this.ranges[i * 3 + 2] - this.ranges[i * 3 + 1];
    return this.ranges[r * 3] + t + Dh(e);
  }
  mapResult(e, t = 1) {
    return this._map(e, t, !1);
  }
  map(e, t = 1) {
    return this._map(e, t, !0);
  }
  /**
  @internal
  */
  _map(e, t, r) {
    let i = 0, o = this.inverted ? 2 : 1, s = this.inverted ? 1 : 2;
    for (let l = 0; l < this.ranges.length; l += 3) {
      let a = this.ranges[l] - (this.inverted ? i : 0);
      if (a > e)
        break;
      let c = this.ranges[l + o], d = this.ranges[l + s], u = a + c;
      if (e <= u) {
        let f = c ? e == a ? -1 : e == u ? 1 : t : t, h = a + i + (f < 0 ? 0 : d);
        if (r)
          return h;
        let p = e == (t < 0 ? a : u) ? null : Nh(l / 3, e - a), g = e == a ? Md : e == u ? Sd : Ti;
        return (t < 0 ? e != a : e != u) && (g |= Td), new Ms(h, g, p);
      }
      i += d - c;
    }
    return r ? e + i : new Ms(e + i, 0, null);
  }
  /**
  @internal
  */
  touches(e, t) {
    let r = 0, i = fa(t), o = this.inverted ? 2 : 1, s = this.inverted ? 1 : 2;
    for (let l = 0; l < this.ranges.length; l += 3) {
      let a = this.ranges[l] - (this.inverted ? r : 0);
      if (a > e)
        break;
      let c = this.ranges[l + o], d = a + c;
      if (e <= d && l == i * 3)
        return !0;
      r += this.ranges[l + s] - c;
    }
    return !1;
  }
  /**
  Calls the given function on each of the changed ranges included in
  this map.
  */
  forEach(e) {
    let t = this.inverted ? 2 : 1, r = this.inverted ? 1 : 2;
    for (let i = 0, o = 0; i < this.ranges.length; i += 3) {
      let s = this.ranges[i], l = s - (this.inverted ? o : 0), a = s + (this.inverted ? 0 : o), c = this.ranges[i + t], d = this.ranges[i + r];
      e(l, l + c, a, a + d), o += d - c;
    }
  }
  /**
  Create an inverted version of this map. The result can be used to
  map positions in the post-step document to the pre-step document.
  */
  invert() {
    return new Pe(this.ranges, !this.inverted);
  }
  /**
  @internal
  */
  toString() {
    return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
  }
  /**
  Create a map that moves all positions by offset `n` (which may be
  negative). This can be useful when applying steps meant for a
  sub-document to a larger document, or vice-versa.
  */
  static offset(e) {
    return e == 0 ? Pe.empty : new Pe(e < 0 ? [0, -e, 0] : [0, 0, e]);
  }
}
Pe.empty = new Pe([]);
class $n {
  /**
  Create a new mapping with the given position maps.
  */
  constructor(e = [], t, r = 0, i = e.length) {
    this.maps = e, this.mirror = t, this.from = r, this.to = i;
  }
  /**
  Create a mapping that maps only through a part of this one.
  */
  slice(e = 0, t = this.maps.length) {
    return new $n(this.maps, this.mirror, e, t);
  }
  /**
  @internal
  */
  copy() {
    return new $n(this.maps.slice(), this.mirror && this.mirror.slice(), this.from, this.to);
  }
  /**
  Add a step map to the end of this mapping. If `mirrors` is
  given, it should be the index of the step map that is the mirror
  image of this one.
  */
  appendMap(e, t) {
    this.to = this.maps.push(e), t != null && this.setMirror(this.maps.length - 1, t);
  }
  /**
  Add all the step maps in a given mapping to this one (preserving
  mirroring information).
  */
  appendMapping(e) {
    for (let t = 0, r = this.maps.length; t < e.maps.length; t++) {
      let i = e.getMirror(t);
      this.appendMap(e.maps[t], i != null && i < t ? r + i : void 0);
    }
  }
  /**
  Finds the offset of the step map that mirrors the map at the
  given offset, in this mapping (as per the second argument to
  `appendMap`).
  */
  getMirror(e) {
    if (this.mirror) {
      for (let t = 0; t < this.mirror.length; t++)
        if (this.mirror[t] == e)
          return this.mirror[t + (t % 2 ? -1 : 1)];
    }
  }
  /**
  @internal
  */
  setMirror(e, t) {
    this.mirror || (this.mirror = []), this.mirror.push(e, t);
  }
  /**
  Append the inverse of the given mapping to this one.
  */
  appendMappingInverted(e) {
    for (let t = e.maps.length - 1, r = this.maps.length + e.maps.length; t >= 0; t--) {
      let i = e.getMirror(t);
      this.appendMap(e.maps[t].invert(), i != null && i > t ? r - i - 1 : void 0);
    }
  }
  /**
  Create an inverted version of this mapping.
  */
  invert() {
    let e = new $n();
    return e.appendMappingInverted(this), e;
  }
  /**
  Map a position through this mapping.
  */
  map(e, t = 1) {
    if (this.mirror)
      return this._map(e, t, !0);
    for (let r = this.from; r < this.to; r++)
      e = this.maps[r].map(e, t);
    return e;
  }
  /**
  Map a position through this mapping, returning a mapping
  result.
  */
  mapResult(e, t = 1) {
    return this._map(e, t, !1);
  }
  /**
  @internal
  */
  _map(e, t, r) {
    let i = 0;
    for (let o = this.from; o < this.to; o++) {
      let s = this.maps[o], l = s.mapResult(e, t);
      if (l.recover != null) {
        let a = this.getMirror(o);
        if (a != null && a > o && a < this.to) {
          o = a, e = this.maps[a].recover(l.recover);
          continue;
        }
      }
      i |= l.delInfo, e = l.pos;
    }
    return r ? e : new Ms(e, i, null);
  }
}
const Ko = /* @__PURE__ */ Object.create(null);
class xe {
  /**
  Get the step map that represents the changes made by this step,
  and which can be used to transform between positions in the old
  and the new document.
  */
  getMap() {
    return Pe.empty;
  }
  /**
  Try to merge this step with another one, to be applied directly
  after it. Returns the merged step when possible, null if the
  steps can't be merged.
  */
  merge(e) {
    return null;
  }
  /**
  Deserialize a step from its JSON representation. Will call
  through to the step class' own implementation of this method.
  */
  static fromJSON(e, t) {
    if (!t || !t.stepType)
      throw new RangeError("Invalid input for Step.fromJSON");
    let r = Ko[t.stepType];
    if (!r)
      throw new RangeError(`No step type ${t.stepType} defined`);
    return r.fromJSON(e, t);
  }
  /**
  To be able to serialize steps to JSON, each step needs a string
  ID to attach to its JSON representation. Use this method to
  register an ID for your step classes. Try to pick something
  that's unlikely to clash with steps from other modules.
  */
  static jsonID(e, t) {
    if (e in Ko)
      throw new RangeError("Duplicate use of step JSON ID " + e);
    return Ko[e] = t, t.prototype.jsonID = e, t;
  }
}
class ce {
  /**
  @internal
  */
  constructor(e, t) {
    this.doc = e, this.failed = t;
  }
  /**
  Create a successful step result.
  */
  static ok(e) {
    return new ce(e, null);
  }
  /**
  Create a failed step result.
  */
  static fail(e) {
    return new ce(null, e);
  }
  /**
  Call [`Node.replace`](https://prosemirror.net/docs/ref/#model.Node.replace) with the given
  arguments. Create a successful result if it succeeds, and a
  failed one if it throws a `ReplaceError`.
  */
  static fromReplace(e, t, r, i) {
    try {
      return ce.ok(e.replace(t, r, i));
    } catch (o) {
      if (o instanceof Li)
        return ce.fail(o.message);
      throw o;
    }
  }
}
function cl(n, e, t) {
  let r = [];
  for (let i = 0; i < n.childCount; i++) {
    let o = n.child(i);
    o.content.size && (o = o.copy(cl(o.content, e, o))), o.isInline && (o = e(o, t, i)), r.push(o);
  }
  return x.fromArray(r);
}
class Wt extends xe {
  /**
  Create a mark step.
  */
  constructor(e, t, r) {
    super(), this.from = e, this.to = t, this.mark = r;
  }
  apply(e) {
    let t = e.slice(this.from, this.to), r = e.resolve(this.from), i = r.node(r.sharedDepth(this.to)), o = new T(cl(t.content, (s, l) => !s.isAtom || !l.type.allowsMarkType(this.mark.type) ? s : s.mark(this.mark.addToSet(s.marks)), i), t.openStart, t.openEnd);
    return ce.fromReplace(e, this.from, this.to, o);
  }
  invert() {
    return new ct(this.from, this.to, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return t.deleted && r.deleted || t.pos >= r.pos ? null : new Wt(t.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof Wt && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new Wt(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
  }
  toJSON() {
    return {
      stepType: "addMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number")
      throw new RangeError("Invalid input for AddMarkStep.fromJSON");
    return new Wt(t.from, t.to, e.markFromJSON(t.mark));
  }
}
xe.jsonID("addMark", Wt);
class ct extends xe {
  /**
  Create a mark-removing step.
  */
  constructor(e, t, r) {
    super(), this.from = e, this.to = t, this.mark = r;
  }
  apply(e) {
    let t = e.slice(this.from, this.to), r = new T(cl(t.content, (i) => i.mark(this.mark.removeFromSet(i.marks)), e), t.openStart, t.openEnd);
    return ce.fromReplace(e, this.from, this.to, r);
  }
  invert() {
    return new Wt(this.from, this.to, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return t.deleted && r.deleted || t.pos >= r.pos ? null : new ct(t.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof ct && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new ct(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
  }
  toJSON() {
    return {
      stepType: "removeMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number")
      throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
    return new ct(t.from, t.to, e.markFromJSON(t.mark));
  }
}
xe.jsonID("removeMark", ct);
class _t extends xe {
  /**
  Create a node mark step.
  */
  constructor(e, t) {
    super(), this.pos = e, this.mark = t;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return ce.fail("No node at mark step's position");
    let r = t.type.create(t.attrs, null, this.mark.addToSet(t.marks));
    return ce.fromReplace(e, this.pos, this.pos + 1, new T(x.from(r), 0, t.isLeaf ? 0 : 1));
  }
  invert(e) {
    let t = e.nodeAt(this.pos);
    if (t) {
      let r = this.mark.addToSet(t.marks);
      if (r.length == t.marks.length) {
        for (let i = 0; i < t.marks.length; i++)
          if (!t.marks[i].isInSet(r))
            return new _t(this.pos, t.marks[i]);
        return new _t(this.pos, this.mark);
      }
    }
    return new Kn(this.pos, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new _t(t.pos, this.mark);
  }
  toJSON() {
    return { stepType: "addNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.pos != "number")
      throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
    return new _t(t.pos, e.markFromJSON(t.mark));
  }
}
xe.jsonID("addNodeMark", _t);
class Kn extends xe {
  /**
  Create a mark-removing step.
  */
  constructor(e, t) {
    super(), this.pos = e, this.mark = t;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return ce.fail("No node at mark step's position");
    let r = t.type.create(t.attrs, null, this.mark.removeFromSet(t.marks));
    return ce.fromReplace(e, this.pos, this.pos + 1, new T(x.from(r), 0, t.isLeaf ? 0 : 1));
  }
  invert(e) {
    let t = e.nodeAt(this.pos);
    return !t || !this.mark.isInSet(t.marks) ? this : new _t(this.pos, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new Kn(t.pos, this.mark);
  }
  toJSON() {
    return { stepType: "removeNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.pos != "number")
      throw new RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");
    return new Kn(t.pos, e.markFromJSON(t.mark));
  }
}
xe.jsonID("removeNodeMark", Kn);
class ae extends xe {
  /**
  The given `slice` should fit the 'gap' between `from` and
  `to`—the depths must line up, and the surrounding nodes must be
  able to be joined with the open sides of the slice. When
  `structure` is true, the step will fail if the content between
  from and to is not just a sequence of closing and then opening
  tokens (this is to guard against rebased replace steps
  overwriting something they weren't supposed to).
  */
  constructor(e, t, r, i = !1) {
    super(), this.from = e, this.to = t, this.slice = r, this.structure = i;
  }
  apply(e) {
    return this.structure && Ts(e, this.from, this.to) ? ce.fail("Structure replace would overwrite content") : ce.fromReplace(e, this.from, this.to, this.slice);
  }
  getMap() {
    return new Pe([this.from, this.to - this.from, this.slice.size]);
  }
  invert(e) {
    return new ae(this.from, this.from + this.slice.size, e.slice(this.from, this.to));
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return t.deletedAcross && r.deletedAcross ? null : new ae(t.pos, Math.max(t.pos, r.pos), this.slice);
  }
  merge(e) {
    if (!(e instanceof ae) || e.structure || this.structure)
      return null;
    if (this.from + this.slice.size == e.from && !this.slice.openEnd && !e.slice.openStart) {
      let t = this.slice.size + e.slice.size == 0 ? T.empty : new T(this.slice.content.append(e.slice.content), this.slice.openStart, e.slice.openEnd);
      return new ae(this.from, this.to + (e.to - e.from), t, this.structure);
    } else if (e.to == this.from && !this.slice.openStart && !e.slice.openEnd) {
      let t = this.slice.size + e.slice.size == 0 ? T.empty : new T(e.slice.content.append(this.slice.content), e.slice.openStart, this.slice.openEnd);
      return new ae(e.from, this.to, t, this.structure);
    } else
      return null;
  }
  toJSON() {
    let e = { stepType: "replace", from: this.from, to: this.to };
    return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number")
      throw new RangeError("Invalid input for ReplaceStep.fromJSON");
    return new ae(t.from, t.to, T.fromJSON(e, t.slice), !!t.structure);
  }
}
xe.jsonID("replace", ae);
class ue extends xe {
  /**
  Create a replace-around step with the given range and gap.
  `insert` should be the point in the slice into which the content
  of the gap should be moved. `structure` has the same meaning as
  it has in the [`ReplaceStep`](https://prosemirror.net/docs/ref/#transform.ReplaceStep) class.
  */
  constructor(e, t, r, i, o, s, l = !1) {
    super(), this.from = e, this.to = t, this.gapFrom = r, this.gapTo = i, this.slice = o, this.insert = s, this.structure = l;
  }
  apply(e) {
    if (this.structure && (Ts(e, this.from, this.gapFrom) || Ts(e, this.gapTo, this.to)))
      return ce.fail("Structure gap-replace would overwrite content");
    let t = e.slice(this.gapFrom, this.gapTo);
    if (t.openStart || t.openEnd)
      return ce.fail("Gap is not a flat range");
    let r = this.slice.insertAt(this.insert, t.content);
    return r ? ce.fromReplace(e, this.from, this.to, r) : ce.fail("Content does not fit in gap");
  }
  getMap() {
    return new Pe([
      this.from,
      this.gapFrom - this.from,
      this.insert,
      this.gapTo,
      this.to - this.gapTo,
      this.slice.size - this.insert
    ]);
  }
  invert(e) {
    let t = this.gapTo - this.gapFrom;
    return new ue(this.from, this.from + this.slice.size + t, this.from + this.insert, this.from + this.insert + t, e.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1), i = this.from == this.gapFrom ? t.pos : e.map(this.gapFrom, -1), o = this.to == this.gapTo ? r.pos : e.map(this.gapTo, 1);
    return t.deletedAcross && r.deletedAcross || i < t.pos || o > r.pos ? null : new ue(t.pos, r.pos, i, o, this.slice, this.insert, this.structure);
  }
  toJSON() {
    let e = {
      stepType: "replaceAround",
      from: this.from,
      to: this.to,
      gapFrom: this.gapFrom,
      gapTo: this.gapTo,
      insert: this.insert
    };
    return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number" || typeof t.gapFrom != "number" || typeof t.gapTo != "number" || typeof t.insert != "number")
      throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");
    return new ue(t.from, t.to, t.gapFrom, t.gapTo, T.fromJSON(e, t.slice), t.insert, !!t.structure);
  }
}
xe.jsonID("replaceAround", ue);
function Ts(n, e, t) {
  let r = n.resolve(e), i = t - e, o = r.depth;
  for (; i > 0 && o > 0 && r.indexAfter(o) == r.node(o).childCount; )
    o--, i--;
  if (i > 0) {
    let s = r.node(o).maybeChild(r.indexAfter(o));
    for (; i > 0; ) {
      if (!s || s.isLeaf)
        return !0;
      s = s.firstChild, i--;
    }
  }
  return !1;
}
function Rh(n, e, t, r) {
  let i = [], o = [], s, l;
  n.doc.nodesBetween(e, t, (a, c, d) => {
    if (!a.isInline)
      return;
    let u = a.marks;
    if (!r.isInSet(u) && d.type.allowsMarkType(r.type)) {
      let f = Math.max(c, e), h = Math.min(c + a.nodeSize, t), p = r.addToSet(u);
      for (let g = 0; g < u.length; g++)
        u[g].isInSet(p) || (s && s.to == f && s.mark.eq(u[g]) ? s.to = h : i.push(s = new ct(f, h, u[g])));
      l && l.to == f ? l.to = h : o.push(l = new Wt(f, h, r));
    }
  }), i.forEach((a) => n.step(a)), o.forEach((a) => n.step(a));
}
function Ih(n, e, t, r) {
  let i = [], o = 0;
  n.doc.nodesBetween(e, t, (s, l) => {
    if (!s.isInline)
      return;
    o++;
    let a = null;
    if (r instanceof So) {
      let c = s.marks, d;
      for (; d = r.isInSet(c); )
        (a || (a = [])).push(d), c = d.removeFromSet(c);
    } else
      r ? r.isInSet(s.marks) && (a = [r]) : a = s.marks;
    if (a && a.length) {
      let c = Math.min(l + s.nodeSize, t);
      for (let d = 0; d < a.length; d++) {
        let u = a[d], f;
        for (let h = 0; h < i.length; h++) {
          let p = i[h];
          p.step == o - 1 && u.eq(i[h].style) && (f = p);
        }
        f ? (f.to = c, f.step = o) : i.push({ style: u, from: Math.max(l, e), to: c, step: o });
      }
    }
  }), i.forEach((s) => n.step(new ct(s.from, s.to, s.style)));
}
function dl(n, e, t, r = t.contentMatch, i = !0) {
  let o = n.doc.nodeAt(e), s = [], l = e + 1;
  for (let a = 0; a < o.childCount; a++) {
    let c = o.child(a), d = l + c.nodeSize, u = r.matchType(c.type);
    if (!u)
      s.push(new ae(l, d, T.empty));
    else {
      r = u;
      for (let f = 0; f < c.marks.length; f++)
        t.allowsMarkType(c.marks[f].type) || n.step(new ct(l, d, c.marks[f]));
      if (i && c.isText && t.whitespace != "pre") {
        let f, h = /\r?\n|\r/g, p;
        for (; f = h.exec(c.text); )
          p || (p = new T(x.from(t.schema.text(" ", t.allowedMarks(c.marks))), 0, 0)), s.push(new ae(l + f.index, l + f.index + f[0].length, p));
      }
    }
    l = d;
  }
  if (!r.validEnd) {
    let a = r.fillBefore(x.empty, !0);
    n.replace(l, l, new T(a, 0, 0));
  }
  for (let a = s.length - 1; a >= 0; a--)
    n.step(s[a]);
}
function Lh(n, e, t) {
  return (e == 0 || n.canReplace(e, n.childCount)) && (t == n.childCount || n.canReplace(0, t));
}
function tr(n) {
  let t = n.parent.content.cutByIndex(n.startIndex, n.endIndex);
  for (let r = n.depth; ; --r) {
    let i = n.$from.node(r), o = n.$from.index(r), s = n.$to.indexAfter(r);
    if (r < n.depth && i.canReplace(o, s, t))
      return r;
    if (r == 0 || i.type.spec.isolating || !Lh(i, o, s))
      break;
  }
  return null;
}
function Ph(n, e, t) {
  let { $from: r, $to: i, depth: o } = e, s = r.before(o + 1), l = i.after(o + 1), a = s, c = l, d = x.empty, u = 0;
  for (let p = o, g = !1; p > t; p--)
    g || r.index(p) > 0 ? (g = !0, d = x.from(r.node(p).copy(d)), u++) : a--;
  let f = x.empty, h = 0;
  for (let p = o, g = !1; p > t; p--)
    g || i.after(p + 1) < i.end(p) ? (g = !0, f = x.from(i.node(p).copy(f)), h++) : c++;
  n.step(new ue(a, c, s, l, new T(d.append(f), u, h), d.size - u, !0));
}
function ul(n, e, t = null, r = n) {
  let i = Bh(n, e), o = i && Hh(r, e);
  return o ? i.map(ha).concat({ type: e, attrs: t }).concat(o.map(ha)) : null;
}
function ha(n) {
  return { type: n, attrs: null };
}
function Bh(n, e) {
  let { parent: t, startIndex: r, endIndex: i } = n, o = t.contentMatchAt(r).findWrapping(e);
  if (!o)
    return null;
  let s = o.length ? o[0] : e;
  return t.canReplaceWith(r, i, s) ? o : null;
}
function Hh(n, e) {
  let { parent: t, startIndex: r, endIndex: i } = n, o = t.child(r), s = e.contentMatch.findWrapping(o.type);
  if (!s)
    return null;
  let a = (s.length ? s[s.length - 1] : e).contentMatch;
  for (let c = r; a && c < i; c++)
    a = a.matchType(t.child(c).type);
  return !a || !a.validEnd ? null : s;
}
function zh(n, e, t) {
  let r = x.empty;
  for (let s = t.length - 1; s >= 0; s--) {
    if (r.size) {
      let l = t[s].type.contentMatch.matchFragment(r);
      if (!l || !l.validEnd)
        throw new RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper");
    }
    r = x.from(t[s].type.create(t[s].attrs, r));
  }
  let i = e.start, o = e.end;
  n.step(new ue(i, o, i, o, new T(r, 0, 0), t.length, !0));
}
function Vh(n, e, t, r, i) {
  if (!r.isTextblock)
    throw new RangeError("Type given to setBlockType should be a textblock");
  let o = n.steps.length;
  n.doc.nodesBetween(e, t, (s, l) => {
    let a = typeof i == "function" ? i(s) : i;
    if (s.isTextblock && !s.hasMarkup(r, a) && Fh(n.doc, n.mapping.slice(o).map(l), r)) {
      let c = null;
      if (r.schema.linebreakReplacement) {
        let h = r.whitespace == "pre", p = !!r.contentMatch.matchType(r.schema.linebreakReplacement);
        h && !p ? c = !1 : !h && p && (c = !0);
      }
      c === !1 && Ed(n, s, l, o), dl(n, n.mapping.slice(o).map(l, 1), r, void 0, c === null);
      let d = n.mapping.slice(o), u = d.map(l, 1), f = d.map(l + s.nodeSize, 1);
      return n.step(new ue(u, f, u + 1, f - 1, new T(x.from(r.create(a, null, s.marks)), 0, 0), 1, !0)), c === !0 && Ad(n, s, l, o), !1;
    }
  });
}
function Ad(n, e, t, r) {
  e.forEach((i, o) => {
    if (i.isText) {
      let s, l = /\r?\n|\r/g;
      for (; s = l.exec(i.text); ) {
        let a = n.mapping.slice(r).map(t + 1 + o + s.index);
        n.replaceWith(a, a + 1, e.type.schema.linebreakReplacement.create());
      }
    }
  });
}
function Ed(n, e, t, r) {
  e.forEach((i, o) => {
    if (i.type == i.type.schema.linebreakReplacement) {
      let s = n.mapping.slice(r).map(t + 1 + o);
      n.replaceWith(s, s + 1, e.type.schema.text(`
`));
    }
  });
}
function Fh(n, e, t) {
  let r = n.resolve(e), i = r.index();
  return r.parent.canReplaceWith(i, i + 1, t);
}
function $h(n, e, t, r, i) {
  let o = n.doc.nodeAt(e);
  if (!o)
    throw new RangeError("No node at given position");
  t || (t = o.type);
  let s = t.create(r, null, i || o.marks);
  if (o.isLeaf)
    return n.replaceWith(e, e + o.nodeSize, s);
  if (!t.validContent(o.content))
    throw new RangeError("Invalid content for node type " + t.name);
  n.step(new ue(e, e + o.nodeSize, e + 1, e + o.nodeSize - 1, new T(x.from(s), 0, 0), 1, !0));
}
function jn(n, e, t = 1, r) {
  let i = n.resolve(e), o = i.depth - t, s = r && r[r.length - 1] || i.parent;
  if (o < 0 || i.parent.type.spec.isolating || !i.parent.canReplace(i.index(), i.parent.childCount) || !s.type.validContent(i.parent.content.cutByIndex(i.index(), i.parent.childCount)))
    return !1;
  for (let c = i.depth - 1, d = t - 2; c > o; c--, d--) {
    let u = i.node(c), f = i.index(c);
    if (u.type.spec.isolating)
      return !1;
    let h = u.content.cutByIndex(f, u.childCount), p = r && r[d + 1];
    p && (h = h.replaceChild(0, p.type.create(p.attrs)));
    let g = r && r[d] || u;
    if (!u.canReplace(f + 1, u.childCount) || !g.type.validContent(h))
      return !1;
  }
  let l = i.indexAfter(o), a = r && r[0];
  return i.node(o).canReplaceWith(l, l, a ? a.type : i.node(o + 1).type);
}
function jh(n, e, t = 1, r) {
  let i = n.doc.resolve(e), o = x.empty, s = x.empty;
  for (let l = i.depth, a = i.depth - t, c = t - 1; l > a; l--, c--) {
    o = x.from(i.node(l).copy(o));
    let d = r && r[c];
    s = x.from(d ? d.type.create(d.attrs, s) : i.node(l).copy(s));
  }
  n.step(new ae(e, e, new T(o.append(s), t, t), !0));
}
function Zt(n, e) {
  let t = n.resolve(e), r = t.index();
  return Od(t.nodeBefore, t.nodeAfter) && t.parent.canReplace(r, r + 1);
}
function Wh(n, e) {
  e.content.size || n.type.compatibleContent(e.type);
  let t = n.contentMatchAt(n.childCount), { linebreakReplacement: r } = n.type.schema;
  for (let i = 0; i < e.childCount; i++) {
    let o = e.child(i), s = o.type == r ? n.type.schema.nodes.text : o.type;
    if (t = t.matchType(s), !t || !n.type.allowsMarks(o.marks))
      return !1;
  }
  return t.validEnd;
}
function Od(n, e) {
  return !!(n && e && !n.isLeaf && Wh(n, e));
}
function Mo(n, e, t = -1) {
  let r = n.resolve(e);
  for (let i = r.depth; ; i--) {
    let o, s, l = r.index(i);
    if (i == r.depth ? (o = r.nodeBefore, s = r.nodeAfter) : t > 0 ? (o = r.node(i + 1), l++, s = r.node(i).maybeChild(l)) : (o = r.node(i).maybeChild(l - 1), s = r.node(i + 1)), o && !o.isTextblock && Od(o, s) && r.node(i).canReplace(l, l + 1))
      return e;
    if (i == 0)
      break;
    e = t < 0 ? r.before(i) : r.after(i);
  }
}
function _h(n, e, t) {
  let r = null, { linebreakReplacement: i } = n.doc.type.schema, o = n.doc.resolve(e - t), s = o.node().type;
  if (i && s.inlineContent) {
    let d = s.whitespace == "pre", u = !!s.contentMatch.matchType(i);
    d && !u ? r = !1 : !d && u && (r = !0);
  }
  let l = n.steps.length;
  if (r === !1) {
    let d = n.doc.resolve(e + t);
    Ed(n, d.node(), d.before(), l);
  }
  s.inlineContent && dl(n, e + t - 1, s, o.node().contentMatchAt(o.index()), r == null);
  let a = n.mapping.slice(l), c = a.map(e - t);
  if (n.step(new ae(c, a.map(e + t, -1), T.empty, !0)), r === !0) {
    let d = n.doc.resolve(c);
    Ad(n, d.node(), d.before(), n.steps.length);
  }
  return n;
}
function Kh(n, e, t) {
  let r = n.resolve(e);
  if (r.parent.canReplaceWith(r.index(), r.index(), t))
    return e;
  if (r.parentOffset == 0)
    for (let i = r.depth - 1; i >= 0; i--) {
      let o = r.index(i);
      if (r.node(i).canReplaceWith(o, o, t))
        return r.before(i + 1);
      if (o > 0)
        return null;
    }
  if (r.parentOffset == r.parent.content.size)
    for (let i = r.depth - 1; i >= 0; i--) {
      let o = r.indexAfter(i);
      if (r.node(i).canReplaceWith(o, o, t))
        return r.after(i + 1);
      if (o < r.node(i).childCount)
        return null;
    }
  return null;
}
function Nd(n, e, t) {
  let r = n.resolve(e);
  if (!t.content.size)
    return e;
  let i = t.content;
  for (let o = 0; o < t.openStart; o++)
    i = i.firstChild.content;
  for (let o = 1; o <= (t.openStart == 0 && t.size ? 2 : 1); o++)
    for (let s = r.depth; s >= 0; s--) {
      let l = s == r.depth ? 0 : r.pos <= (r.start(s + 1) + r.end(s + 1)) / 2 ? -1 : 1, a = r.index(s) + (l > 0 ? 1 : 0), c = r.node(s), d = !1;
      if (o == 1)
        d = c.canReplace(a, a, i);
      else {
        let u = c.contentMatchAt(a).findWrapping(i.firstChild.type);
        d = u && c.canReplaceWith(a, a, u[0]);
      }
      if (d)
        return l == 0 ? r.pos : l < 0 ? r.before(s + 1) : r.after(s + 1);
    }
  return null;
}
function To(n, e, t = e, r = T.empty) {
  if (e == t && !r.size)
    return null;
  let i = n.resolve(e), o = n.resolve(t);
  return Dd(i, o, r) ? new ae(e, t, r) : new qh(i, o, r).fit();
}
function Dd(n, e, t) {
  return !t.openStart && !t.openEnd && n.start() == e.start() && n.parent.canReplace(n.index(), e.index(), t.content);
}
class qh {
  constructor(e, t, r) {
    this.$from = e, this.$to = t, this.unplaced = r, this.frontier = [], this.placed = x.empty;
    for (let i = 0; i <= e.depth; i++) {
      let o = e.node(i);
      this.frontier.push({
        type: o.type,
        match: o.contentMatchAt(e.indexAfter(i))
      });
    }
    for (let i = e.depth; i > 0; i--)
      this.placed = x.from(e.node(i).copy(this.placed));
  }
  get depth() {
    return this.frontier.length - 1;
  }
  fit() {
    for (; this.unplaced.size; ) {
      let c = this.findFittable();
      c ? this.placeNodes(c) : this.openMore() || this.dropNode();
    }
    let e = this.mustMoveInline(), t = this.placed.size - this.depth - this.$from.depth, r = this.$from, i = this.close(e < 0 ? this.$to : r.doc.resolve(e));
    if (!i)
      return null;
    let o = this.placed, s = r.depth, l = i.depth;
    for (; s && l && o.childCount == 1; )
      o = o.firstChild.content, s--, l--;
    let a = new T(o, s, l);
    return e > -1 ? new ue(r.pos, e, this.$to.pos, this.$to.end(), a, t) : a.size || r.pos != this.$to.pos ? new ae(r.pos, i.pos, a) : null;
  }
  // Find a position on the start spine of `this.unplaced` that has
  // content that can be moved somewhere on the frontier. Returns two
  // depths, one for the slice and one for the frontier.
  findFittable() {
    let e = this.unplaced.openStart;
    for (let t = this.unplaced.content, r = 0, i = this.unplaced.openEnd; r < e; r++) {
      let o = t.firstChild;
      if (t.childCount > 1 && (i = 0), o.type.spec.isolating && i <= r) {
        e = r;
        break;
      }
      t = o.content;
    }
    for (let t = 1; t <= 2; t++)
      for (let r = t == 1 ? e : this.unplaced.openStart; r >= 0; r--) {
        let i, o = null;
        r ? (o = qo(this.unplaced.content, r - 1).firstChild, i = o.content) : i = this.unplaced.content;
        let s = i.firstChild;
        for (let l = this.depth; l >= 0; l--) {
          let { type: a, match: c } = this.frontier[l], d, u = null;
          if (t == 1 && (s ? c.matchType(s.type) || (u = c.fillBefore(x.from(s), !1)) : o && a.compatibleContent(o.type)))
            return { sliceDepth: r, frontierDepth: l, parent: o, inject: u };
          if (t == 2 && s && (d = c.findWrapping(s.type)))
            return { sliceDepth: r, frontierDepth: l, parent: o, wrap: d };
          if (o && c.matchType(o.type))
            break;
        }
      }
  }
  openMore() {
    let { content: e, openStart: t, openEnd: r } = this.unplaced, i = qo(e, t);
    return !i.childCount || i.firstChild.isLeaf ? !1 : (this.unplaced = new T(e, t + 1, Math.max(r, i.size + t >= e.size - r ? t + 1 : 0)), !0);
  }
  dropNode() {
    let { content: e, openStart: t, openEnd: r } = this.unplaced, i = qo(e, t);
    if (i.childCount <= 1 && t > 0) {
      let o = e.size - t <= t + i.size;
      this.unplaced = new T(hr(e, t - 1, 1), t - 1, o ? t - 1 : r);
    } else
      this.unplaced = new T(hr(e, t, 1), t, r);
  }
  // Move content from the unplaced slice at `sliceDepth` to the
  // frontier node at `frontierDepth`. Close that frontier node when
  // applicable.
  placeNodes({ sliceDepth: e, frontierDepth: t, parent: r, inject: i, wrap: o }) {
    for (; this.depth > t; )
      this.closeFrontierNode();
    if (o)
      for (let g = 0; g < o.length; g++)
        this.openFrontierNode(o[g]);
    let s = this.unplaced, l = r ? r.content : s.content, a = s.openStart - e, c = 0, d = [], { match: u, type: f } = this.frontier[t];
    if (i) {
      for (let g = 0; g < i.childCount; g++)
        d.push(i.child(g));
      u = u.matchFragment(i);
    }
    let h = l.size + e - (s.content.size - s.openEnd);
    for (; c < l.childCount; ) {
      let g = l.child(c), m = u.matchType(g.type);
      if (!m)
        break;
      c++, (c > 1 || a == 0 || g.content.size) && (u = m, d.push(Rd(g.mark(f.allowedMarks(g.marks)), c == 1 ? a : 0, c == l.childCount ? h : -1)));
    }
    let p = c == l.childCount;
    p || (h = -1), this.placed = pr(this.placed, t, x.from(d)), this.frontier[t].match = u, p && h < 0 && r && r.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode();
    for (let g = 0, m = l; g < h; g++) {
      let y = m.lastChild;
      this.frontier.push({ type: y.type, match: y.contentMatchAt(y.childCount) }), m = y.content;
    }
    this.unplaced = p ? e == 0 ? T.empty : new T(hr(s.content, e - 1, 1), e - 1, h < 0 ? s.openEnd : e - 1) : new T(hr(s.content, e, c), s.openStart, s.openEnd);
  }
  mustMoveInline() {
    if (!this.$to.parent.isTextblock)
      return -1;
    let e = this.frontier[this.depth], t;
    if (!e.type.isTextblock || !Uo(this.$to, this.$to.depth, e.type, e.match, !1) || this.$to.depth == this.depth && (t = this.findCloseLevel(this.$to)) && t.depth == this.depth)
      return -1;
    let { depth: r } = this.$to, i = this.$to.after(r);
    for (; r > 1 && i == this.$to.end(--r); )
      ++i;
    return i;
  }
  findCloseLevel(e) {
    e:
      for (let t = Math.min(this.depth, e.depth); t >= 0; t--) {
        let { match: r, type: i } = this.frontier[t], o = t < e.depth && e.end(t + 1) == e.pos + (e.depth - (t + 1)), s = Uo(e, t, i, r, o);
        if (s) {
          for (let l = t - 1; l >= 0; l--) {
            let { match: a, type: c } = this.frontier[l], d = Uo(e, l, c, a, !0);
            if (!d || d.childCount)
              continue e;
          }
          return { depth: t, fit: s, move: o ? e.doc.resolve(e.after(t + 1)) : e };
        }
      }
  }
  close(e) {
    let t = this.findCloseLevel(e);
    if (!t)
      return null;
    for (; this.depth > t.depth; )
      this.closeFrontierNode();
    t.fit.childCount && (this.placed = pr(this.placed, t.depth, t.fit)), e = t.move;
    for (let r = t.depth + 1; r <= e.depth; r++) {
      let i = e.node(r), o = i.type.contentMatch.fillBefore(i.content, !0, e.index(r));
      this.openFrontierNode(i.type, i.attrs, o);
    }
    return e;
  }
  openFrontierNode(e, t = null, r) {
    let i = this.frontier[this.depth];
    i.match = i.match.matchType(e), this.placed = pr(this.placed, this.depth, x.from(e.create(t, r))), this.frontier.push({ type: e, match: e.contentMatch });
  }
  closeFrontierNode() {
    let t = this.frontier.pop().match.fillBefore(x.empty, !0);
    t.childCount && (this.placed = pr(this.placed, this.frontier.length, t));
  }
}
function hr(n, e, t) {
  return e == 0 ? n.cutByIndex(t, n.childCount) : n.replaceChild(0, n.firstChild.copy(hr(n.firstChild.content, e - 1, t)));
}
function pr(n, e, t) {
  return e == 0 ? n.append(t) : n.replaceChild(n.childCount - 1, n.lastChild.copy(pr(n.lastChild.content, e - 1, t)));
}
function qo(n, e) {
  for (let t = 0; t < e; t++)
    n = n.firstChild.content;
  return n;
}
function Rd(n, e, t) {
  if (e <= 0)
    return n;
  let r = n.content;
  return e > 1 && (r = r.replaceChild(0, Rd(r.firstChild, e - 1, r.childCount == 1 ? t - 1 : 0))), e > 0 && (r = n.type.contentMatch.fillBefore(r).append(r), t <= 0 && (r = r.append(n.type.contentMatch.matchFragment(r).fillBefore(x.empty, !0)))), n.copy(r);
}
function Uo(n, e, t, r, i) {
  let o = n.node(e), s = i ? n.indexAfter(e) : n.index(e);
  if (s == o.childCount && !t.compatibleContent(o.type))
    return null;
  let l = r.fillBefore(o.content, !0, s);
  return l && !Uh(t, o.content, s) ? l : null;
}
function Uh(n, e, t) {
  for (let r = t; r < e.childCount; r++)
    if (!n.allowsMarks(e.child(r).marks))
      return !0;
  return !1;
}
function Jh(n) {
  return n.spec.defining || n.spec.definingForContent;
}
function Gh(n, e, t, r) {
  if (!r.size)
    return n.deleteRange(e, t);
  let i = n.doc.resolve(e), o = n.doc.resolve(t);
  if (Dd(i, o, r))
    return n.step(new ae(e, t, r));
  let s = Ld(i, n.doc.resolve(t));
  s[s.length - 1] == 0 && s.pop();
  let l = -(i.depth + 1);
  s.unshift(l);
  for (let f = i.depth, h = i.pos - 1; f > 0; f--, h--) {
    let p = i.node(f).type.spec;
    if (p.defining || p.definingAsContext || p.isolating)
      break;
    s.indexOf(f) > -1 ? l = f : i.before(f) == h && s.splice(1, 0, -f);
  }
  let a = s.indexOf(l), c = [], d = r.openStart;
  for (let f = r.content, h = 0; ; h++) {
    let p = f.firstChild;
    if (c.push(p), h == r.openStart)
      break;
    f = p.content;
  }
  for (let f = d - 1; f >= 0; f--) {
    let h = c[f], p = Jh(h.type);
    if (p && !h.sameMarkup(i.node(Math.abs(l) - 1)))
      d = f;
    else if (p || !h.type.isTextblock)
      break;
  }
  for (let f = r.openStart; f >= 0; f--) {
    let h = (f + d + 1) % (r.openStart + 1), p = c[h];
    if (p)
      for (let g = 0; g < s.length; g++) {
        let m = s[(g + a) % s.length], y = !0;
        m < 0 && (y = !1, m = -m);
        let v = i.node(m - 1), S = i.index(m - 1);
        if (v.canReplaceWith(S, S, p.type, p.marks))
          return n.replace(i.before(m), y ? o.after(m) : t, new T(Id(r.content, 0, r.openStart, h), h, r.openEnd));
      }
  }
  let u = n.steps.length;
  for (let f = s.length - 1; f >= 0 && (n.replace(e, t, r), !(n.steps.length > u)); f--) {
    let h = s[f];
    h < 0 || (e = i.before(h), t = o.after(h));
  }
}
function Id(n, e, t, r, i) {
  if (e < t) {
    let o = n.firstChild;
    n = n.replaceChild(0, o.copy(Id(o.content, e + 1, t, r, o)));
  }
  if (e > r) {
    let o = i.contentMatchAt(0), s = o.fillBefore(n).append(n);
    n = s.append(o.matchFragment(s).fillBefore(x.empty, !0));
  }
  return n;
}
function Yh(n, e, t, r) {
  if (!r.isInline && e == t && n.doc.resolve(e).parent.content.size) {
    let i = Kh(n.doc, e, r.type);
    i != null && (e = t = i);
  }
  n.replaceRange(e, t, new T(x.from(r), 0, 0));
}
function Xh(n, e, t) {
  let r = n.doc.resolve(e), i = n.doc.resolve(t), o = Ld(r, i);
  for (let s = 0; s < o.length; s++) {
    let l = o[s], a = s == o.length - 1;
    if (a && l == 0 || r.node(l).type.contentMatch.validEnd)
      return n.delete(r.start(l), i.end(l));
    if (l > 0 && (a || r.node(l - 1).canReplace(r.index(l - 1), i.indexAfter(l - 1))))
      return n.delete(r.before(l), i.after(l));
  }
  for (let s = 1; s <= r.depth && s <= i.depth; s++)
    if (e - r.start(s) == r.depth - s && t > r.end(s) && i.end(s) - t != i.depth - s && r.start(s - 1) == i.start(s - 1) && r.node(s - 1).canReplace(r.index(s - 1), i.index(s - 1)))
      return n.delete(r.before(s), t);
  n.delete(e, t);
}
function Ld(n, e) {
  let t = [], r = Math.min(n.depth, e.depth);
  for (let i = r; i >= 0; i--) {
    let o = n.start(i);
    if (o < n.pos - (n.depth - i) || e.end(i) > e.pos + (e.depth - i) || n.node(i).type.spec.isolating || e.node(i).type.spec.isolating)
      break;
    (o == e.start(i) || i == n.depth && i == e.depth && n.parent.inlineContent && e.parent.inlineContent && i && e.start(i - 1) == o - 1) && t.push(i);
  }
  return t;
}
class Wn extends xe {
  /**
  Construct an attribute step.
  */
  constructor(e, t, r) {
    super(), this.pos = e, this.attr = t, this.value = r;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return ce.fail("No node at attribute step's position");
    let r = /* @__PURE__ */ Object.create(null);
    for (let o in t.attrs)
      r[o] = t.attrs[o];
    r[this.attr] = this.value;
    let i = t.type.create(r, null, t.marks);
    return ce.fromReplace(e, this.pos, this.pos + 1, new T(x.from(i), 0, t.isLeaf ? 0 : 1));
  }
  getMap() {
    return Pe.empty;
  }
  invert(e) {
    return new Wn(this.pos, this.attr, e.nodeAt(this.pos).attrs[this.attr]);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new Wn(t.pos, this.attr, this.value);
  }
  toJSON() {
    return { stepType: "attr", pos: this.pos, attr: this.attr, value: this.value };
  }
  static fromJSON(e, t) {
    if (typeof t.pos != "number" || typeof t.attr != "string")
      throw new RangeError("Invalid input for AttrStep.fromJSON");
    return new Wn(t.pos, t.attr, t.value);
  }
}
xe.jsonID("attr", Wn);
class Dr extends xe {
  /**
  Construct an attribute step.
  */
  constructor(e, t) {
    super(), this.attr = e, this.value = t;
  }
  apply(e) {
    let t = /* @__PURE__ */ Object.create(null);
    for (let i in e.attrs)
      t[i] = e.attrs[i];
    t[this.attr] = this.value;
    let r = e.type.create(t, e.content, e.marks);
    return ce.ok(r);
  }
  getMap() {
    return Pe.empty;
  }
  invert(e) {
    return new Dr(this.attr, e.attrs[this.attr]);
  }
  map(e) {
    return this;
  }
  toJSON() {
    return { stepType: "docAttr", attr: this.attr, value: this.value };
  }
  static fromJSON(e, t) {
    if (typeof t.attr != "string")
      throw new RangeError("Invalid input for DocAttrStep.fromJSON");
    return new Dr(t.attr, t.value);
  }
}
xe.jsonID("docAttr", Dr);
let qn = class extends Error {
};
qn = function n(e) {
  let t = Error.call(this, e);
  return t.__proto__ = n.prototype, t;
};
qn.prototype = Object.create(Error.prototype);
qn.prototype.constructor = qn;
qn.prototype.name = "TransformError";
class fl {
  /**
  Create a transform that starts with the given document.
  */
  constructor(e) {
    this.doc = e, this.steps = [], this.docs = [], this.mapping = new $n();
  }
  /**
  The starting document.
  */
  get before() {
    return this.docs.length ? this.docs[0] : this.doc;
  }
  /**
  Apply a new step in this transform, saving the result. Throws an
  error when the step fails.
  */
  step(e) {
    let t = this.maybeStep(e);
    if (t.failed)
      throw new qn(t.failed);
    return this;
  }
  /**
  Try to apply a step in this transformation, ignoring it if it
  fails. Returns the step result.
  */
  maybeStep(e) {
    let t = e.apply(this.doc);
    return t.failed || this.addStep(e, t.doc), t;
  }
  /**
  True when the document has been changed (when there are any
  steps).
  */
  get docChanged() {
    return this.steps.length > 0;
  }
  /**
  @internal
  */
  addStep(e, t) {
    this.docs.push(this.doc), this.steps.push(e), this.mapping.appendMap(e.getMap()), this.doc = t;
  }
  /**
  Replace the part of the document between `from` and `to` with the
  given `slice`.
  */
  replace(e, t = e, r = T.empty) {
    let i = To(this.doc, e, t, r);
    return i && this.step(i), this;
  }
  /**
  Replace the given range with the given content, which may be a
  fragment, node, or array of nodes.
  */
  replaceWith(e, t, r) {
    return this.replace(e, t, new T(x.from(r), 0, 0));
  }
  /**
  Delete the content between the given positions.
  */
  delete(e, t) {
    return this.replace(e, t, T.empty);
  }
  /**
  Insert the given content at the given position.
  */
  insert(e, t) {
    return this.replaceWith(e, e, t);
  }
  /**
  Replace a range of the document with a given slice, using
  `from`, `to`, and the slice's
  [`openStart`](https://prosemirror.net/docs/ref/#model.Slice.openStart) property as hints, rather
  than fixed start and end points. This method may grow the
  replaced area or close open nodes in the slice in order to get a
  fit that is more in line with WYSIWYG expectations, by dropping
  fully covered parent nodes of the replaced region when they are
  marked [non-defining as
  context](https://prosemirror.net/docs/ref/#model.NodeSpec.definingAsContext), or including an
  open parent node from the slice that _is_ marked as [defining
  its content](https://prosemirror.net/docs/ref/#model.NodeSpec.definingForContent).

  This is the method, for example, to handle paste. The similar
  [`replace`](https://prosemirror.net/docs/ref/#transform.Transform.replace) method is a more
  primitive tool which will _not_ move the start and end of its given
  range, and is useful in situations where you need more precise
  control over what happens.
  */
  replaceRange(e, t, r) {
    return Gh(this, e, t, r), this;
  }
  /**
  Replace the given range with a node, but use `from` and `to` as
  hints, rather than precise positions. When from and to are the same
  and are at the start or end of a parent node in which the given
  node doesn't fit, this method may _move_ them out towards a parent
  that does allow the given node to be placed. When the given range
  completely covers a parent node, this method may completely replace
  that parent node.
  */
  replaceRangeWith(e, t, r) {
    return Yh(this, e, t, r), this;
  }
  /**
  Delete the given range, expanding it to cover fully covered
  parent nodes until a valid replace is found.
  */
  deleteRange(e, t) {
    return Xh(this, e, t), this;
  }
  /**
  Split the content in the given range off from its parent, if there
  is sibling content before or after it, and move it up the tree to
  the depth specified by `target`. You'll probably want to use
  [`liftTarget`](https://prosemirror.net/docs/ref/#transform.liftTarget) to compute `target`, to make
  sure the lift is valid.
  */
  lift(e, t) {
    return Ph(this, e, t), this;
  }
  /**
  Join the blocks around the given position. If depth is 2, their
  last and first siblings are also joined, and so on.
  */
  join(e, t = 1) {
    return _h(this, e, t), this;
  }
  /**
  Wrap the given [range](https://prosemirror.net/docs/ref/#model.NodeRange) in the given set of wrappers.
  The wrappers are assumed to be valid in this position, and should
  probably be computed with [`findWrapping`](https://prosemirror.net/docs/ref/#transform.findWrapping).
  */
  wrap(e, t) {
    return zh(this, e, t), this;
  }
  /**
  Set the type of all textblocks (partly) between `from` and `to` to
  the given node type with the given attributes.
  */
  setBlockType(e, t = e, r, i = null) {
    return Vh(this, e, t, r, i), this;
  }
  /**
  Change the type, attributes, and/or marks of the node at `pos`.
  When `type` isn't given, the existing node type is preserved,
  */
  setNodeMarkup(e, t, r = null, i) {
    return $h(this, e, t, r, i), this;
  }
  /**
  Set a single attribute on a given node to a new value.
  The `pos` addresses the document content. Use `setDocAttribute`
  to set attributes on the document itself.
  */
  setNodeAttribute(e, t, r) {
    return this.step(new Wn(e, t, r)), this;
  }
  /**
  Set a single attribute on the document to a new value.
  */
  setDocAttribute(e, t) {
    return this.step(new Dr(e, t)), this;
  }
  /**
  Add a mark to the node at position `pos`.
  */
  addNodeMark(e, t) {
    return this.step(new _t(e, t)), this;
  }
  /**
  Remove a mark (or a mark of the given type) from the node at
  position `pos`.
  */
  removeNodeMark(e, t) {
    if (!(t instanceof q)) {
      let r = this.doc.nodeAt(e);
      if (!r)
        throw new RangeError("No node at position " + e);
      if (t = t.isInSet(r.marks), !t)
        return this;
    }
    return this.step(new Kn(e, t)), this;
  }
  /**
  Split the node at the given position, and optionally, if `depth` is
  greater than one, any number of nodes above that. By default, the
  parts split off will inherit the node type of the original node.
  This can be changed by passing an array of types and attributes to
  use after the split.
  */
  split(e, t = 1, r) {
    return jh(this, e, t, r), this;
  }
  /**
  Add the given mark to the inline content between `from` and `to`.
  */
  addMark(e, t, r) {
    return Rh(this, e, t, r), this;
  }
  /**
  Remove marks from inline nodes between `from` and `to`. When
  `mark` is a single mark, remove precisely that mark. When it is
  a mark type, remove all marks of that type. When it is null,
  remove all marks of any type.
  */
  removeMark(e, t, r) {
    return Ih(this, e, t, r), this;
  }
  /**
  Removes all marks and nodes from the content of the node at
  `pos` that don't match the given new parent node type. Accepts
  an optional starting [content match](https://prosemirror.net/docs/ref/#model.ContentMatch) as
  third argument.
  */
  clearIncompatible(e, t, r) {
    return dl(this, e, t, r), this;
  }
}
const Jo = /* @__PURE__ */ Object.create(null);
class I {
  /**
  Initialize a selection with the head and anchor and ranges. If no
  ranges are given, constructs a single range across `$anchor` and
  `$head`.
  */
  constructor(e, t, r) {
    this.$anchor = e, this.$head = t, this.ranges = r || [new Pd(e.min(t), e.max(t))];
  }
  /**
  The selection's anchor, as an unresolved position.
  */
  get anchor() {
    return this.$anchor.pos;
  }
  /**
  The selection's head.
  */
  get head() {
    return this.$head.pos;
  }
  /**
  The lower bound of the selection's main range.
  */
  get from() {
    return this.$from.pos;
  }
  /**
  The upper bound of the selection's main range.
  */
  get to() {
    return this.$to.pos;
  }
  /**
  The resolved lower  bound of the selection's main range.
  */
  get $from() {
    return this.ranges[0].$from;
  }
  /**
  The resolved upper bound of the selection's main range.
  */
  get $to() {
    return this.ranges[0].$to;
  }
  /**
  Indicates whether the selection contains any content.
  */
  get empty() {
    let e = this.ranges;
    for (let t = 0; t < e.length; t++)
      if (e[t].$from.pos != e[t].$to.pos)
        return !1;
    return !0;
  }
  /**
  Get the content of this selection as a slice.
  */
  content() {
    return this.$from.doc.slice(this.from, this.to, !0);
  }
  /**
  Replace the selection with a slice or, if no slice is given,
  delete the selection. Will append to the given transaction.
  */
  replace(e, t = T.empty) {
    let r = t.content.lastChild, i = null;
    for (let l = 0; l < t.openEnd; l++)
      i = r, r = r.lastChild;
    let o = e.steps.length, s = this.ranges;
    for (let l = 0; l < s.length; l++) {
      let { $from: a, $to: c } = s[l], d = e.mapping.slice(o);
      e.replaceRange(d.map(a.pos), d.map(c.pos), l ? T.empty : t), l == 0 && ga(e, o, (r ? r.isInline : i && i.isTextblock) ? -1 : 1);
    }
  }
  /**
  Replace the selection with the given node, appending the changes
  to the given transaction.
  */
  replaceWith(e, t) {
    let r = e.steps.length, i = this.ranges;
    for (let o = 0; o < i.length; o++) {
      let { $from: s, $to: l } = i[o], a = e.mapping.slice(r), c = a.map(s.pos), d = a.map(l.pos);
      o ? e.deleteRange(c, d) : (e.replaceRangeWith(c, d, t), ga(e, r, t.isInline ? -1 : 1));
    }
  }
  /**
  Find a valid cursor or leaf node selection starting at the given
  position and searching back if `dir` is negative, and forward if
  positive. When `textOnly` is true, only consider cursor
  selections. Will return null when no valid selection position is
  found.
  */
  static findFrom(e, t, r = !1) {
    let i = e.parent.inlineContent ? new D(e) : Pn(e.node(0), e.parent, e.pos, e.index(), t, r);
    if (i)
      return i;
    for (let o = e.depth - 1; o >= 0; o--) {
      let s = t < 0 ? Pn(e.node(0), e.node(o), e.before(o + 1), e.index(o), t, r) : Pn(e.node(0), e.node(o), e.after(o + 1), e.index(o) + 1, t, r);
      if (s)
        return s;
    }
    return null;
  }
  /**
  Find a valid cursor or leaf node selection near the given
  position. Searches forward first by default, but if `bias` is
  negative, it will search backwards first.
  */
  static near(e, t = 1) {
    return this.findFrom(e, t) || this.findFrom(e, -t) || new tt(e.node(0));
  }
  /**
  Find the cursor or leaf node selection closest to the start of
  the given document. Will return an
  [`AllSelection`](https://prosemirror.net/docs/ref/#state.AllSelection) if no valid position
  exists.
  */
  static atStart(e) {
    return Pn(e, e, 0, 0, 1) || new tt(e);
  }
  /**
  Find the cursor or leaf node selection closest to the end of the
  given document.
  */
  static atEnd(e) {
    return Pn(e, e, e.content.size, e.childCount, -1) || new tt(e);
  }
  /**
  Deserialize the JSON representation of a selection. Must be
  implemented for custom classes (as a static class method).
  */
  static fromJSON(e, t) {
    if (!t || !t.type)
      throw new RangeError("Invalid input for Selection.fromJSON");
    let r = Jo[t.type];
    if (!r)
      throw new RangeError(`No selection type ${t.type} defined`);
    return r.fromJSON(e, t);
  }
  /**
  To be able to deserialize selections from JSON, custom selection
  classes must register themselves with an ID string, so that they
  can be disambiguated. Try to pick something that's unlikely to
  clash with classes from other modules.
  */
  static jsonID(e, t) {
    if (e in Jo)
      throw new RangeError("Duplicate use of selection JSON ID " + e);
    return Jo[e] = t, t.prototype.jsonID = e, t;
  }
  /**
  Get a [bookmark](https://prosemirror.net/docs/ref/#state.SelectionBookmark) for this selection,
  which is a value that can be mapped without having access to a
  current document, and later resolved to a real selection for a
  given document again. (This is used mostly by the history to
  track and restore old selections.) The default implementation of
  this method just converts the selection to a text selection and
  returns the bookmark for that.
  */
  getBookmark() {
    return D.between(this.$anchor, this.$head).getBookmark();
  }
}
I.prototype.visible = !0;
class Pd {
  /**
  Create a range.
  */
  constructor(e, t) {
    this.$from = e, this.$to = t;
  }
}
let pa = !1;
function ma(n) {
  !pa && !n.parent.inlineContent && (pa = !0, console.warn("TextSelection endpoint not pointing into a node with inline content (" + n.parent.type.name + ")"));
}
class D extends I {
  /**
  Construct a text selection between the given points.
  */
  constructor(e, t = e) {
    ma(e), ma(t), super(e, t);
  }
  /**
  Returns a resolved position if this is a cursor selection (an
  empty text selection), and null otherwise.
  */
  get $cursor() {
    return this.$anchor.pos == this.$head.pos ? this.$head : null;
  }
  map(e, t) {
    let r = e.resolve(t.map(this.head));
    if (!r.parent.inlineContent)
      return I.near(r);
    let i = e.resolve(t.map(this.anchor));
    return new D(i.parent.inlineContent ? i : r, r);
  }
  replace(e, t = T.empty) {
    if (super.replace(e, t), t == T.empty) {
      let r = this.$from.marksAcross(this.$to);
      r && e.ensureMarks(r);
    }
  }
  eq(e) {
    return e instanceof D && e.anchor == this.anchor && e.head == this.head;
  }
  getBookmark() {
    return new Ao(this.anchor, this.head);
  }
  toJSON() {
    return { type: "text", anchor: this.anchor, head: this.head };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.anchor != "number" || typeof t.head != "number")
      throw new RangeError("Invalid input for TextSelection.fromJSON");
    return new D(e.resolve(t.anchor), e.resolve(t.head));
  }
  /**
  Create a text selection from non-resolved positions.
  */
  static create(e, t, r = t) {
    let i = e.resolve(t);
    return new this(i, r == t ? i : e.resolve(r));
  }
  /**
  Return a text selection that spans the given positions or, if
  they aren't text positions, find a text selection near them.
  `bias` determines whether the method searches forward (default)
  or backwards (negative number) first. Will fall back to calling
  [`Selection.near`](https://prosemirror.net/docs/ref/#state.Selection^near) when the document
  doesn't contain a valid text position.
  */
  static between(e, t, r) {
    let i = e.pos - t.pos;
    if ((!r || i) && (r = i >= 0 ? 1 : -1), !t.parent.inlineContent) {
      let o = I.findFrom(t, r, !0) || I.findFrom(t, -r, !0);
      if (o)
        t = o.$head;
      else
        return I.near(t, r);
    }
    return e.parent.inlineContent || (i == 0 ? e = t : (e = (I.findFrom(e, -r, !0) || I.findFrom(e, r, !0)).$anchor, e.pos < t.pos != i < 0 && (e = t))), new D(e, t);
  }
}
I.jsonID("text", D);
class Ao {
  constructor(e, t) {
    this.anchor = e, this.head = t;
  }
  map(e) {
    return new Ao(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    return D.between(e.resolve(this.anchor), e.resolve(this.head));
  }
}
class R extends I {
  /**
  Create a node selection. Does not verify the validity of its
  argument.
  */
  constructor(e) {
    let t = e.nodeAfter, r = e.node(0).resolve(e.pos + t.nodeSize);
    super(e, r), this.node = t;
  }
  map(e, t) {
    let { deleted: r, pos: i } = t.mapResult(this.anchor), o = e.resolve(i);
    return r ? I.near(o) : new R(o);
  }
  content() {
    return new T(x.from(this.node), 0, 0);
  }
  eq(e) {
    return e instanceof R && e.anchor == this.anchor;
  }
  toJSON() {
    return { type: "node", anchor: this.anchor };
  }
  getBookmark() {
    return new hl(this.anchor);
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.anchor != "number")
      throw new RangeError("Invalid input for NodeSelection.fromJSON");
    return new R(e.resolve(t.anchor));
  }
  /**
  Create a node selection from non-resolved positions.
  */
  static create(e, t) {
    return new R(e.resolve(t));
  }
  /**
  Determines whether the given node may be selected as a node
  selection.
  */
  static isSelectable(e) {
    return !e.isText && e.type.spec.selectable !== !1;
  }
}
R.prototype.visible = !1;
I.jsonID("node", R);
class hl {
  constructor(e) {
    this.anchor = e;
  }
  map(e) {
    let { deleted: t, pos: r } = e.mapResult(this.anchor);
    return t ? new Ao(r, r) : new hl(r);
  }
  resolve(e) {
    let t = e.resolve(this.anchor), r = t.nodeAfter;
    return r && R.isSelectable(r) ? new R(t) : I.near(t);
  }
}
class tt extends I {
  /**
  Create an all-selection over the given document.
  */
  constructor(e) {
    super(e.resolve(0), e.resolve(e.content.size));
  }
  replace(e, t = T.empty) {
    if (t == T.empty) {
      e.delete(0, e.doc.content.size);
      let r = I.atStart(e.doc);
      r.eq(e.selection) || e.setSelection(r);
    } else
      super.replace(e, t);
  }
  toJSON() {
    return { type: "all" };
  }
  /**
  @internal
  */
  static fromJSON(e) {
    return new tt(e);
  }
  map(e) {
    return new tt(e);
  }
  eq(e) {
    return e instanceof tt;
  }
  getBookmark() {
    return Qh;
  }
}
I.jsonID("all", tt);
const Qh = {
  map() {
    return this;
  },
  resolve(n) {
    return new tt(n);
  }
};
function Pn(n, e, t, r, i, o = !1) {
  if (e.inlineContent)
    return D.create(n, t);
  for (let s = r - (i > 0 ? 0 : 1); i > 0 ? s < e.childCount : s >= 0; s += i) {
    let l = e.child(s);
    if (l.isAtom) {
      if (!o && R.isSelectable(l))
        return R.create(n, t - (i < 0 ? l.nodeSize : 0));
    } else {
      let a = Pn(n, l, t + i, i < 0 ? l.childCount : 0, i, o);
      if (a)
        return a;
    }
    t += l.nodeSize * i;
  }
  return null;
}
function ga(n, e, t) {
  let r = n.steps.length - 1;
  if (r < e)
    return;
  let i = n.steps[r];
  if (!(i instanceof ae || i instanceof ue))
    return;
  let o = n.mapping.maps[r], s;
  o.forEach((l, a, c, d) => {
    s == null && (s = d);
  }), n.setSelection(I.near(n.doc.resolve(s), t));
}
const ya = 1, ui = 2, wa = 4;
class Zh extends fl {
  /**
  @internal
  */
  constructor(e) {
    super(e.doc), this.curSelectionFor = 0, this.updated = 0, this.meta = /* @__PURE__ */ Object.create(null), this.time = Date.now(), this.curSelection = e.selection, this.storedMarks = e.storedMarks;
  }
  /**
  The transaction's current selection. This defaults to the editor
  selection [mapped](https://prosemirror.net/docs/ref/#state.Selection.map) through the steps in the
  transaction, but can be overwritten with
  [`setSelection`](https://prosemirror.net/docs/ref/#state.Transaction.setSelection).
  */
  get selection() {
    return this.curSelectionFor < this.steps.length && (this.curSelection = this.curSelection.map(this.doc, this.mapping.slice(this.curSelectionFor)), this.curSelectionFor = this.steps.length), this.curSelection;
  }
  /**
  Update the transaction's current selection. Will determine the
  selection that the editor gets when the transaction is applied.
  */
  setSelection(e) {
    if (e.$from.doc != this.doc)
      throw new RangeError("Selection passed to setSelection must point at the current document");
    return this.curSelection = e, this.curSelectionFor = this.steps.length, this.updated = (this.updated | ya) & ~ui, this.storedMarks = null, this;
  }
  /**
  Whether the selection was explicitly updated by this transaction.
  */
  get selectionSet() {
    return (this.updated & ya) > 0;
  }
  /**
  Set the current stored marks.
  */
  setStoredMarks(e) {
    return this.storedMarks = e, this.updated |= ui, this;
  }
  /**
  Make sure the current stored marks or, if that is null, the marks
  at the selection, match the given set of marks. Does nothing if
  this is already the case.
  */
  ensureMarks(e) {
    return q.sameSet(this.storedMarks || this.selection.$from.marks(), e) || this.setStoredMarks(e), this;
  }
  /**
  Add a mark to the set of stored marks.
  */
  addStoredMark(e) {
    return this.ensureMarks(e.addToSet(this.storedMarks || this.selection.$head.marks()));
  }
  /**
  Remove a mark or mark type from the set of stored marks.
  */
  removeStoredMark(e) {
    return this.ensureMarks(e.removeFromSet(this.storedMarks || this.selection.$head.marks()));
  }
  /**
  Whether the stored marks were explicitly set for this transaction.
  */
  get storedMarksSet() {
    return (this.updated & ui) > 0;
  }
  /**
  @internal
  */
  addStep(e, t) {
    super.addStep(e, t), this.updated = this.updated & ~ui, this.storedMarks = null;
  }
  /**
  Update the timestamp for the transaction.
  */
  setTime(e) {
    return this.time = e, this;
  }
  /**
  Replace the current selection with the given slice.
  */
  replaceSelection(e) {
    return this.selection.replace(this, e), this;
  }
  /**
  Replace the selection with the given node. When `inheritMarks` is
  true and the content is inline, it inherits the marks from the
  place where it is inserted.
  */
  replaceSelectionWith(e, t = !0) {
    let r = this.selection;
    return t && (e = e.mark(this.storedMarks || (r.empty ? r.$from.marks() : r.$from.marksAcross(r.$to) || q.none))), r.replaceWith(this, e), this;
  }
  /**
  Delete the selection.
  */
  deleteSelection() {
    return this.selection.replace(this), this;
  }
  /**
  Replace the given range, or the selection if no range is given,
  with a text node containing the given string.
  */
  insertText(e, t, r) {
    let i = this.doc.type.schema;
    if (t == null)
      return e ? this.replaceSelectionWith(i.text(e), !0) : this.deleteSelection();
    {
      if (r == null && (r = t), r = r ?? t, !e)
        return this.deleteRange(t, r);
      let o = this.storedMarks;
      if (!o) {
        let s = this.doc.resolve(t);
        o = r == t ? s.marks() : s.marksAcross(this.doc.resolve(r));
      }
      return this.replaceRangeWith(t, r, i.text(e, o)), this.selection.empty || this.setSelection(I.near(this.selection.$to)), this;
    }
  }
  /**
  Store a metadata property in this transaction, keyed either by
  name or by plugin.
  */
  setMeta(e, t) {
    return this.meta[typeof e == "string" ? e : e.key] = t, this;
  }
  /**
  Retrieve a metadata property for a given name or plugin.
  */
  getMeta(e) {
    return this.meta[typeof e == "string" ? e : e.key];
  }
  /**
  Returns true if this transaction doesn't contain any metadata,
  and can thus safely be extended.
  */
  get isGeneric() {
    for (let e in this.meta)
      return !1;
    return !0;
  }
  /**
  Indicate that the editor should scroll the selection into view
  when updated to the state produced by this transaction.
  */
  scrollIntoView() {
    return this.updated |= wa, this;
  }
  /**
  True when this transaction has had `scrollIntoView` called on it.
  */
  get scrolledIntoView() {
    return (this.updated & wa) > 0;
  }
}
function va(n, e) {
  return !e || !n ? n : n.bind(e);
}
class mr {
  constructor(e, t, r) {
    this.name = e, this.init = va(t.init, r), this.apply = va(t.apply, r);
  }
}
const ep = [
  new mr("doc", {
    init(n) {
      return n.doc || n.schema.topNodeType.createAndFill();
    },
    apply(n) {
      return n.doc;
    }
  }),
  new mr("selection", {
    init(n, e) {
      return n.selection || I.atStart(e.doc);
    },
    apply(n) {
      return n.selection;
    }
  }),
  new mr("storedMarks", {
    init(n) {
      return n.storedMarks || null;
    },
    apply(n, e, t, r) {
      return r.selection.$cursor ? n.storedMarks : null;
    }
  }),
  new mr("scrollToSelection", {
    init() {
      return 0;
    },
    apply(n, e) {
      return n.scrolledIntoView ? e + 1 : e;
    }
  })
];
class Go {
  constructor(e, t) {
    this.schema = e, this.plugins = [], this.pluginsByKey = /* @__PURE__ */ Object.create(null), this.fields = ep.slice(), t && t.forEach((r) => {
      if (this.pluginsByKey[r.key])
        throw new RangeError("Adding different instances of a keyed plugin (" + r.key + ")");
      this.plugins.push(r), this.pluginsByKey[r.key] = r, r.spec.state && this.fields.push(new mr(r.key, r.spec.state, r));
    });
  }
}
class Vn {
  /**
  @internal
  */
  constructor(e) {
    this.config = e;
  }
  /**
  The schema of the state's document.
  */
  get schema() {
    return this.config.schema;
  }
  /**
  The plugins that are active in this state.
  */
  get plugins() {
    return this.config.plugins;
  }
  /**
  Apply the given transaction to produce a new state.
  */
  apply(e) {
    return this.applyTransaction(e).state;
  }
  /**
  @internal
  */
  filterTransaction(e, t = -1) {
    for (let r = 0; r < this.config.plugins.length; r++)
      if (r != t) {
        let i = this.config.plugins[r];
        if (i.spec.filterTransaction && !i.spec.filterTransaction.call(i, e, this))
          return !1;
      }
    return !0;
  }
  /**
  Verbose variant of [`apply`](https://prosemirror.net/docs/ref/#state.EditorState.apply) that
  returns the precise transactions that were applied (which might
  be influenced by the [transaction
  hooks](https://prosemirror.net/docs/ref/#state.PluginSpec.filterTransaction) of
  plugins) along with the new state.
  */
  applyTransaction(e) {
    if (!this.filterTransaction(e))
      return { state: this, transactions: [] };
    let t = [e], r = this.applyInner(e), i = null;
    for (; ; ) {
      let o = !1;
      for (let s = 0; s < this.config.plugins.length; s++) {
        let l = this.config.plugins[s];
        if (l.spec.appendTransaction) {
          let a = i ? i[s].n : 0, c = i ? i[s].state : this, d = a < t.length && l.spec.appendTransaction.call(l, a ? t.slice(a) : t, c, r);
          if (d && r.filterTransaction(d, s)) {
            if (d.setMeta("appendedTransaction", e), !i) {
              i = [];
              for (let u = 0; u < this.config.plugins.length; u++)
                i.push(u < s ? { state: r, n: t.length } : { state: this, n: 0 });
            }
            t.push(d), r = r.applyInner(d), o = !0;
          }
          i && (i[s] = { state: r, n: t.length });
        }
      }
      if (!o)
        return { state: r, transactions: t };
    }
  }
  /**
  @internal
  */
  applyInner(e) {
    if (!e.before.eq(this.doc))
      throw new RangeError("Applying a mismatched transaction");
    let t = new Vn(this.config), r = this.config.fields;
    for (let i = 0; i < r.length; i++) {
      let o = r[i];
      t[o.name] = o.apply(e, this[o.name], this, t);
    }
    return t;
  }
  /**
  Start a [transaction](https://prosemirror.net/docs/ref/#state.Transaction) from this state.
  */
  get tr() {
    return new Zh(this);
  }
  /**
  Create a new state.
  */
  static create(e) {
    let t = new Go(e.doc ? e.doc.type.schema : e.schema, e.plugins), r = new Vn(t);
    for (let i = 0; i < t.fields.length; i++)
      r[t.fields[i].name] = t.fields[i].init(e, r);
    return r;
  }
  /**
  Create a new state based on this one, but with an adjusted set
  of active plugins. State fields that exist in both sets of
  plugins are kept unchanged. Those that no longer exist are
  dropped, and those that are new are initialized using their
  [`init`](https://prosemirror.net/docs/ref/#state.StateField.init) method, passing in the new
  configuration object..
  */
  reconfigure(e) {
    let t = new Go(this.schema, e.plugins), r = t.fields, i = new Vn(t);
    for (let o = 0; o < r.length; o++) {
      let s = r[o].name;
      i[s] = this.hasOwnProperty(s) ? this[s] : r[o].init(e, i);
    }
    return i;
  }
  /**
  Serialize this state to JSON. If you want to serialize the state
  of plugins, pass an object mapping property names to use in the
  resulting JSON object to plugin objects. The argument may also be
  a string or number, in which case it is ignored, to support the
  way `JSON.stringify` calls `toString` methods.
  */
  toJSON(e) {
    let t = { doc: this.doc.toJSON(), selection: this.selection.toJSON() };
    if (this.storedMarks && (t.storedMarks = this.storedMarks.map((r) => r.toJSON())), e && typeof e == "object")
      for (let r in e) {
        if (r == "doc" || r == "selection")
          throw new RangeError("The JSON fields `doc` and `selection` are reserved");
        let i = e[r], o = i.spec.state;
        o && o.toJSON && (t[r] = o.toJSON.call(i, this[i.key]));
      }
    return t;
  }
  /**
  Deserialize a JSON representation of a state. `config` should
  have at least a `schema` field, and should contain array of
  plugins to initialize the state with. `pluginFields` can be used
  to deserialize the state of plugins, by associating plugin
  instances with the property names they use in the JSON object.
  */
  static fromJSON(e, t, r) {
    if (!t)
      throw new RangeError("Invalid input for EditorState.fromJSON");
    if (!e.schema)
      throw new RangeError("Required config field 'schema' missing");
    let i = new Go(e.schema, e.plugins), o = new Vn(i);
    return i.fields.forEach((s) => {
      if (s.name == "doc")
        o.doc = qt.fromJSON(e.schema, t.doc);
      else if (s.name == "selection")
        o.selection = I.fromJSON(o.doc, t.selection);
      else if (s.name == "storedMarks")
        t.storedMarks && (o.storedMarks = t.storedMarks.map(e.schema.markFromJSON));
      else {
        if (r)
          for (let l in r) {
            let a = r[l], c = a.spec.state;
            if (a.key == s.name && c && c.fromJSON && Object.prototype.hasOwnProperty.call(t, l)) {
              o[s.name] = c.fromJSON.call(a, e, t[l], o);
              return;
            }
          }
        o[s.name] = s.init(e, o);
      }
    }), o;
  }
}
function Bd(n, e, t) {
  for (let r in n) {
    let i = n[r];
    i instanceof Function ? i = i.bind(e) : r == "handleDOMEvents" && (i = Bd(i, e, {})), t[r] = i;
  }
  return t;
}
class X {
  /**
  Create a plugin.
  */
  constructor(e) {
    this.spec = e, this.props = {}, e.props && Bd(e.props, this, this.props), this.key = e.key ? e.key.key : Hd("plugin");
  }
  /**
  Extract the plugin's state field from an editor state.
  */
  getState(e) {
    return e[this.key];
  }
}
const Yo = /* @__PURE__ */ Object.create(null);
function Hd(n) {
  return n in Yo ? n + "$" + ++Yo[n] : (Yo[n] = 0, n + "$");
}
class se {
  /**
  Create a plugin key.
  */
  constructor(e = "key") {
    this.key = Hd(e);
  }
  /**
  Get the active plugin with this key, if any, from an editor
  state.
  */
  get(e) {
    return e.config.pluginsByKey[this.key];
  }
  /**
  Get the plugin's state from an editor state.
  */
  getState(e) {
    return e[this.key];
  }
}
const me = function(n) {
  for (var e = 0; ; e++)
    if (n = n.previousSibling, !n)
      return e;
}, Rr = function(n) {
  let e = n.assignedSlot || n.parentNode;
  return e && e.nodeType == 11 ? e.host : e;
};
let As = null;
const At = function(n, e, t) {
  let r = As || (As = document.createRange());
  return r.setEnd(n, t ?? n.nodeValue.length), r.setStart(n, e || 0), r;
}, tp = function() {
  As = null;
}, bn = function(n, e, t, r) {
  return t && (ba(n, e, t, r, -1) || ba(n, e, t, r, 1));
}, np = /^(img|br|input|textarea|hr)$/i;
function ba(n, e, t, r, i) {
  for (; ; ) {
    if (n == t && e == r)
      return !0;
    if (e == (i < 0 ? 0 : Ke(n))) {
      let o = n.parentNode;
      if (!o || o.nodeType != 1 || Ur(n) || np.test(n.nodeName) || n.contentEditable == "false")
        return !1;
      e = me(n) + (i < 0 ? 0 : 1), n = o;
    } else if (n.nodeType == 1) {
      if (n = n.childNodes[e + (i < 0 ? -1 : 0)], n.contentEditable == "false")
        return !1;
      e = i < 0 ? Ke(n) : 0;
    } else
      return !1;
  }
}
function Ke(n) {
  return n.nodeType == 3 ? n.nodeValue.length : n.childNodes.length;
}
function rp(n, e) {
  for (; ; ) {
    if (n.nodeType == 3 && e)
      return n;
    if (n.nodeType == 1 && e > 0) {
      if (n.contentEditable == "false")
        return null;
      n = n.childNodes[e - 1], e = Ke(n);
    } else if (n.parentNode && !Ur(n))
      e = me(n), n = n.parentNode;
    else
      return null;
  }
}
function ip(n, e) {
  for (; ; ) {
    if (n.nodeType == 3 && e < n.nodeValue.length)
      return n;
    if (n.nodeType == 1 && e < n.childNodes.length) {
      if (n.contentEditable == "false")
        return null;
      n = n.childNodes[e], e = 0;
    } else if (n.parentNode && !Ur(n))
      e = me(n) + 1, n = n.parentNode;
    else
      return null;
  }
}
function op(n, e, t) {
  for (let r = e == 0, i = e == Ke(n); r || i; ) {
    if (n == t)
      return !0;
    let o = me(n);
    if (n = n.parentNode, !n)
      return !1;
    r = r && o == 0, i = i && o == Ke(n);
  }
}
function Ur(n) {
  let e;
  for (let t = n; t && !(e = t.pmViewDesc); t = t.parentNode)
    ;
  return e && e.node && e.node.isBlock && (e.dom == n || e.contentDOM == n);
}
const Eo = function(n) {
  return n.focusNode && bn(n.focusNode, n.focusOffset, n.anchorNode, n.anchorOffset);
};
function an(n, e) {
  let t = document.createEvent("Event");
  return t.initEvent("keydown", !0, !0), t.keyCode = n, t.key = t.code = e, t;
}
function sp(n) {
  let e = n.activeElement;
  for (; e && e.shadowRoot; )
    e = e.shadowRoot.activeElement;
  return e;
}
function lp(n, e, t) {
  if (n.caretPositionFromPoint)
    try {
      let r = n.caretPositionFromPoint(e, t);
      if (r)
        return { node: r.offsetNode, offset: Math.min(Ke(r.offsetNode), r.offset) };
    } catch {
    }
  if (n.caretRangeFromPoint) {
    let r = n.caretRangeFromPoint(e, t);
    if (r)
      return { node: r.startContainer, offset: Math.min(Ke(r.startContainer), r.startOffset) };
  }
}
const ut = typeof navigator < "u" ? navigator : null, ka = typeof document < "u" ? document : null, en = ut && ut.userAgent || "", Es = /Edge\/(\d+)/.exec(en), zd = /MSIE \d/.exec(en), Os = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(en), De = !!(zd || Os || Es), Jt = zd ? document.documentMode : Os ? +Os[1] : Es ? +Es[1] : 0, nt = !De && /gecko\/(\d+)/i.test(en);
nt && +(/Firefox\/(\d+)/.exec(en) || [0, 0])[1];
const Ns = !De && /Chrome\/(\d+)/.exec(en), be = !!Ns, Vd = Ns ? +Ns[1] : 0, Te = !De && !!ut && /Apple Computer/.test(ut.vendor), Un = Te && (/Mobile\/\w+/.test(en) || !!ut && ut.maxTouchPoints > 2), _e = Un || (ut ? /Mac/.test(ut.platform) : !1), ap = ut ? /Win/.test(ut.platform) : !1, Ze = /Android \d/.test(en), Jr = !!ka && "webkitFontSmoothing" in ka.documentElement.style, cp = Jr ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;
function dp(n) {
  let e = n.defaultView && n.defaultView.visualViewport;
  return e ? {
    left: 0,
    right: e.width,
    top: 0,
    bottom: e.height
  } : {
    left: 0,
    right: n.documentElement.clientWidth,
    top: 0,
    bottom: n.documentElement.clientHeight
  };
}
function bt(n, e) {
  return typeof n == "number" ? n : n[e];
}
function up(n) {
  let e = n.getBoundingClientRect(), t = e.width / n.offsetWidth || 1, r = e.height / n.offsetHeight || 1;
  return {
    left: e.left,
    right: e.left + n.clientWidth * t,
    top: e.top,
    bottom: e.top + n.clientHeight * r
  };
}
function xa(n, e, t) {
  let r = n.someProp("scrollThreshold") || 0, i = n.someProp("scrollMargin") || 5, o = n.dom.ownerDocument;
  for (let s = t || n.dom; s; s = Rr(s)) {
    if (s.nodeType != 1)
      continue;
    let l = s, a = l == o.body, c = a ? dp(o) : up(l), d = 0, u = 0;
    if (e.top < c.top + bt(r, "top") ? u = -(c.top - e.top + bt(i, "top")) : e.bottom > c.bottom - bt(r, "bottom") && (u = e.bottom - e.top > c.bottom - c.top ? e.top + bt(i, "top") - c.top : e.bottom - c.bottom + bt(i, "bottom")), e.left < c.left + bt(r, "left") ? d = -(c.left - e.left + bt(i, "left")) : e.right > c.right - bt(r, "right") && (d = e.right - c.right + bt(i, "right")), d || u)
      if (a)
        o.defaultView.scrollBy(d, u);
      else {
        let f = l.scrollLeft, h = l.scrollTop;
        u && (l.scrollTop += u), d && (l.scrollLeft += d);
        let p = l.scrollLeft - f, g = l.scrollTop - h;
        e = { left: e.left - p, top: e.top - g, right: e.right - p, bottom: e.bottom - g };
      }
    if (a || /^(fixed|sticky)$/.test(getComputedStyle(s).position))
      break;
  }
}
function fp(n) {
  let e = n.dom.getBoundingClientRect(), t = Math.max(0, e.top), r, i;
  for (let o = (e.left + e.right) / 2, s = t + 1; s < Math.min(innerHeight, e.bottom); s += 5) {
    let l = n.root.elementFromPoint(o, s);
    if (!l || l == n.dom || !n.dom.contains(l))
      continue;
    let a = l.getBoundingClientRect();
    if (a.top >= t - 20) {
      r = l, i = a.top;
      break;
    }
  }
  return { refDOM: r, refTop: i, stack: Fd(n.dom) };
}
function Fd(n) {
  let e = [], t = n.ownerDocument;
  for (let r = n; r && (e.push({ dom: r, top: r.scrollTop, left: r.scrollLeft }), n != t); r = Rr(r))
    ;
  return e;
}
function hp({ refDOM: n, refTop: e, stack: t }) {
  let r = n ? n.getBoundingClientRect().top : 0;
  $d(t, r == 0 ? 0 : r - e);
}
function $d(n, e) {
  for (let t = 0; t < n.length; t++) {
    let { dom: r, top: i, left: o } = n[t];
    r.scrollTop != i + e && (r.scrollTop = i + e), r.scrollLeft != o && (r.scrollLeft = o);
  }
}
let Rn = null;
function pp(n) {
  if (n.setActive)
    return n.setActive();
  if (Rn)
    return n.focus(Rn);
  let e = Fd(n);
  n.focus(Rn == null ? {
    get preventScroll() {
      return Rn = { preventScroll: !0 }, !0;
    }
  } : void 0), Rn || (Rn = !1, $d(e, 0));
}
function jd(n, e) {
  let t, r = 2e8, i, o = 0, s = e.top, l = e.top, a, c;
  for (let d = n.firstChild, u = 0; d; d = d.nextSibling, u++) {
    let f;
    if (d.nodeType == 1)
      f = d.getClientRects();
    else if (d.nodeType == 3)
      f = At(d).getClientRects();
    else
      continue;
    for (let h = 0; h < f.length; h++) {
      let p = f[h];
      if (p.top <= s && p.bottom >= l) {
        s = Math.max(p.bottom, s), l = Math.min(p.top, l);
        let g = p.left > e.left ? p.left - e.left : p.right < e.left ? e.left - p.right : 0;
        if (g < r) {
          t = d, r = g, i = g && t.nodeType == 3 ? {
            left: p.right < e.left ? p.right : p.left,
            top: e.top
          } : e, d.nodeType == 1 && g && (o = u + (e.left >= (p.left + p.right) / 2 ? 1 : 0));
          continue;
        }
      } else
        p.top > e.top && !a && p.left <= e.left && p.right >= e.left && (a = d, c = { left: Math.max(p.left, Math.min(p.right, e.left)), top: p.top });
      !t && (e.left >= p.right && e.top >= p.top || e.left >= p.left && e.top >= p.bottom) && (o = u + 1);
    }
  }
  return !t && a && (t = a, i = c, r = 0), t && t.nodeType == 3 ? mp(t, i) : !t || r && t.nodeType == 1 ? { node: n, offset: o } : jd(t, i);
}
function mp(n, e) {
  let t = n.nodeValue.length, r = document.createRange();
  for (let i = 0; i < t; i++) {
    r.setEnd(n, i + 1), r.setStart(n, i);
    let o = Pt(r, 1);
    if (o.top != o.bottom && pl(e, o))
      return { node: n, offset: i + (e.left >= (o.left + o.right) / 2 ? 1 : 0) };
  }
  return { node: n, offset: 0 };
}
function pl(n, e) {
  return n.left >= e.left - 1 && n.left <= e.right + 1 && n.top >= e.top - 1 && n.top <= e.bottom + 1;
}
function gp(n, e) {
  let t = n.parentNode;
  return t && /^li$/i.test(t.nodeName) && e.left < n.getBoundingClientRect().left ? t : n;
}
function yp(n, e, t) {
  let { node: r, offset: i } = jd(e, t), o = -1;
  if (r.nodeType == 1 && !r.firstChild) {
    let s = r.getBoundingClientRect();
    o = s.left != s.right && t.left > (s.left + s.right) / 2 ? 1 : -1;
  }
  return n.docView.posFromDOM(r, i, o);
}
function wp(n, e, t, r) {
  let i = -1;
  for (let o = e, s = !1; o != n.dom; ) {
    let l = n.docView.nearestDesc(o, !0);
    if (!l)
      return null;
    if (l.dom.nodeType == 1 && (l.node.isBlock && l.parent || !l.contentDOM)) {
      let a = l.dom.getBoundingClientRect();
      if (l.node.isBlock && l.parent && (!s && a.left > r.left || a.top > r.top ? i = l.posBefore : (!s && a.right < r.left || a.bottom < r.top) && (i = l.posAfter), s = !0), !l.contentDOM && i < 0 && !l.node.isText)
        return (l.node.isBlock ? r.top < (a.top + a.bottom) / 2 : r.left < (a.left + a.right) / 2) ? l.posBefore : l.posAfter;
    }
    o = l.dom.parentNode;
  }
  return i > -1 ? i : n.docView.posFromDOM(e, t, -1);
}
function Wd(n, e, t) {
  let r = n.childNodes.length;
  if (r && t.top < t.bottom)
    for (let i = Math.max(0, Math.min(r - 1, Math.floor(r * (e.top - t.top) / (t.bottom - t.top)) - 2)), o = i; ; ) {
      let s = n.childNodes[o];
      if (s.nodeType == 1) {
        let l = s.getClientRects();
        for (let a = 0; a < l.length; a++) {
          let c = l[a];
          if (pl(e, c))
            return Wd(s, e, c);
        }
      }
      if ((o = (o + 1) % r) == i)
        break;
    }
  return n;
}
function vp(n, e) {
  let t = n.dom.ownerDocument, r, i = 0, o = lp(t, e.left, e.top);
  o && ({ node: r, offset: i } = o);
  let s = (n.root.elementFromPoint ? n.root : t).elementFromPoint(e.left, e.top), l;
  if (!s || !n.dom.contains(s.nodeType != 1 ? s.parentNode : s)) {
    let c = n.dom.getBoundingClientRect();
    if (!pl(e, c) || (s = Wd(n.dom, e, c), !s))
      return null;
  }
  if (Te)
    for (let c = s; r && c; c = Rr(c))
      c.draggable && (r = void 0);
  if (s = gp(s, e), r) {
    if (nt && r.nodeType == 1 && (i = Math.min(i, r.childNodes.length), i < r.childNodes.length)) {
      let d = r.childNodes[i], u;
      d.nodeName == "IMG" && (u = d.getBoundingClientRect()).right <= e.left && u.bottom > e.top && i++;
    }
    let c;
    Jr && i && r.nodeType == 1 && (c = r.childNodes[i - 1]).nodeType == 1 && c.contentEditable == "false" && c.getBoundingClientRect().top >= e.top && i--, r == n.dom && i == r.childNodes.length - 1 && r.lastChild.nodeType == 1 && e.top > r.lastChild.getBoundingClientRect().bottom ? l = n.state.doc.content.size : (i == 0 || r.nodeType != 1 || r.childNodes[i - 1].nodeName != "BR") && (l = wp(n, r, i, e));
  }
  l == null && (l = yp(n, s, e));
  let a = n.docView.nearestDesc(s, !0);
  return { pos: l, inside: a ? a.posAtStart - a.border : -1 };
}
function Ca(n) {
  return n.top < n.bottom || n.left < n.right;
}
function Pt(n, e) {
  let t = n.getClientRects();
  if (t.length) {
    let r = t[e < 0 ? 0 : t.length - 1];
    if (Ca(r))
      return r;
  }
  return Array.prototype.find.call(t, Ca) || n.getBoundingClientRect();
}
const bp = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
function _d(n, e, t) {
  let { node: r, offset: i, atom: o } = n.docView.domFromPos(e, t < 0 ? -1 : 1), s = Jr || nt;
  if (r.nodeType == 3)
    if (s && (bp.test(r.nodeValue) || (t < 0 ? !i : i == r.nodeValue.length))) {
      let a = Pt(At(r, i, i), t);
      if (nt && i && /\s/.test(r.nodeValue[i - 1]) && i < r.nodeValue.length) {
        let c = Pt(At(r, i - 1, i - 1), -1);
        if (c.top == a.top) {
          let d = Pt(At(r, i, i + 1), -1);
          if (d.top != a.top)
            return cr(d, d.left < c.left);
        }
      }
      return a;
    } else {
      let a = i, c = i, d = t < 0 ? 1 : -1;
      return t < 0 && !i ? (c++, d = -1) : t >= 0 && i == r.nodeValue.length ? (a--, d = 1) : t < 0 ? a-- : c++, cr(Pt(At(r, a, c), d), d < 0);
    }
  if (!n.state.doc.resolve(e - (o || 0)).parent.inlineContent) {
    if (o == null && i && (t < 0 || i == Ke(r))) {
      let a = r.childNodes[i - 1];
      if (a.nodeType == 1)
        return Xo(a.getBoundingClientRect(), !1);
    }
    if (o == null && i < Ke(r)) {
      let a = r.childNodes[i];
      if (a.nodeType == 1)
        return Xo(a.getBoundingClientRect(), !0);
    }
    return Xo(r.getBoundingClientRect(), t >= 0);
  }
  if (o == null && i && (t < 0 || i == Ke(r))) {
    let a = r.childNodes[i - 1], c = a.nodeType == 3 ? At(a, Ke(a) - (s ? 0 : 1)) : a.nodeType == 1 && (a.nodeName != "BR" || !a.nextSibling) ? a : null;
    if (c)
      return cr(Pt(c, 1), !1);
  }
  if (o == null && i < Ke(r)) {
    let a = r.childNodes[i];
    for (; a.pmViewDesc && a.pmViewDesc.ignoreForCoords; )
      a = a.nextSibling;
    let c = a ? a.nodeType == 3 ? At(a, 0, s ? 0 : 1) : a.nodeType == 1 ? a : null : null;
    if (c)
      return cr(Pt(c, -1), !0);
  }
  return cr(Pt(r.nodeType == 3 ? At(r) : r, -t), t >= 0);
}
function cr(n, e) {
  if (n.width == 0)
    return n;
  let t = e ? n.left : n.right;
  return { top: n.top, bottom: n.bottom, left: t, right: t };
}
function Xo(n, e) {
  if (n.height == 0)
    return n;
  let t = e ? n.top : n.bottom;
  return { top: t, bottom: t, left: n.left, right: n.right };
}
function Kd(n, e, t) {
  let r = n.state, i = n.root.activeElement;
  r != e && n.updateState(e), i != n.dom && n.focus();
  try {
    return t();
  } finally {
    r != e && n.updateState(r), i != n.dom && i && i.focus();
  }
}
function kp(n, e, t) {
  let r = e.selection, i = t == "up" ? r.$from : r.$to;
  return Kd(n, e, () => {
    let { node: o } = n.docView.domFromPos(i.pos, t == "up" ? -1 : 1);
    for (; ; ) {
      let l = n.docView.nearestDesc(o, !0);
      if (!l)
        break;
      if (l.node.isBlock) {
        o = l.contentDOM || l.dom;
        break;
      }
      o = l.dom.parentNode;
    }
    let s = _d(n, i.pos, 1);
    for (let l = o.firstChild; l; l = l.nextSibling) {
      let a;
      if (l.nodeType == 1)
        a = l.getClientRects();
      else if (l.nodeType == 3)
        a = At(l, 0, l.nodeValue.length).getClientRects();
      else
        continue;
      for (let c = 0; c < a.length; c++) {
        let d = a[c];
        if (d.bottom > d.top + 1 && (t == "up" ? s.top - d.top > (d.bottom - s.top) * 2 : d.bottom - s.bottom > (s.bottom - d.top) * 2))
          return !1;
      }
    }
    return !0;
  });
}
const xp = /[\u0590-\u08ac]/;
function Cp(n, e, t) {
  let { $head: r } = e.selection;
  if (!r.parent.isTextblock)
    return !1;
  let i = r.parentOffset, o = !i, s = i == r.parent.content.size, l = n.domSelection();
  return l ? !xp.test(r.parent.textContent) || !l.modify ? t == "left" || t == "backward" ? o : s : Kd(n, e, () => {
    let { focusNode: a, focusOffset: c, anchorNode: d, anchorOffset: u } = n.domSelectionRange(), f = l.caretBidiLevel;
    l.modify("move", t, "character");
    let h = r.depth ? n.docView.domAfterPos(r.before()) : n.dom, { focusNode: p, focusOffset: g } = n.domSelectionRange(), m = p && !h.contains(p.nodeType == 1 ? p : p.parentNode) || a == p && c == g;
    try {
      l.collapse(d, u), a && (a != d || c != u) && l.extend && l.extend(a, c);
    } catch {
    }
    return f != null && (l.caretBidiLevel = f), m;
  }) : r.pos == r.start() || r.pos == r.end();
}
let Sa = null, Ma = null, Ta = !1;
function Sp(n, e, t) {
  return Sa == e && Ma == t ? Ta : (Sa = e, Ma = t, Ta = t == "up" || t == "down" ? kp(n, e, t) : Cp(n, e, t));
}
const qe = 0, Aa = 1, dn = 2, ft = 3;
class Gr {
  constructor(e, t, r, i) {
    this.parent = e, this.children = t, this.dom = r, this.contentDOM = i, this.dirty = qe, r.pmViewDesc = this;
  }
  // Used to check whether a given description corresponds to a
  // widget/mark/node.
  matchesWidget(e) {
    return !1;
  }
  matchesMark(e) {
    return !1;
  }
  matchesNode(e, t, r) {
    return !1;
  }
  matchesHack(e) {
    return !1;
  }
  // When parsing in-editor content (in domchange.js), we allow
  // descriptions to determine the parse rules that should be used to
  // parse them.
  parseRule() {
    return null;
  }
  // Used by the editor's event handler to ignore events that come
  // from certain descs.
  stopEvent(e) {
    return !1;
  }
  // The size of the content represented by this desc.
  get size() {
    let e = 0;
    for (let t = 0; t < this.children.length; t++)
      e += this.children[t].size;
    return e;
  }
  // For block nodes, this represents the space taken up by their
  // start/end tokens.
  get border() {
    return 0;
  }
  destroy() {
    this.parent = void 0, this.dom.pmViewDesc == this && (this.dom.pmViewDesc = void 0);
    for (let e = 0; e < this.children.length; e++)
      this.children[e].destroy();
  }
  posBeforeChild(e) {
    for (let t = 0, r = this.posAtStart; ; t++) {
      let i = this.children[t];
      if (i == e)
        return r;
      r += i.size;
    }
  }
  get posBefore() {
    return this.parent.posBeforeChild(this);
  }
  get posAtStart() {
    return this.parent ? this.parent.posBeforeChild(this) + this.border : 0;
  }
  get posAfter() {
    return this.posBefore + this.size;
  }
  get posAtEnd() {
    return this.posAtStart + this.size - 2 * this.border;
  }
  localPosFromDOM(e, t, r) {
    if (this.contentDOM && this.contentDOM.contains(e.nodeType == 1 ? e : e.parentNode))
      if (r < 0) {
        let o, s;
        if (e == this.contentDOM)
          o = e.childNodes[t - 1];
        else {
          for (; e.parentNode != this.contentDOM; )
            e = e.parentNode;
          o = e.previousSibling;
        }
        for (; o && !((s = o.pmViewDesc) && s.parent == this); )
          o = o.previousSibling;
        return o ? this.posBeforeChild(s) + s.size : this.posAtStart;
      } else {
        let o, s;
        if (e == this.contentDOM)
          o = e.childNodes[t];
        else {
          for (; e.parentNode != this.contentDOM; )
            e = e.parentNode;
          o = e.nextSibling;
        }
        for (; o && !((s = o.pmViewDesc) && s.parent == this); )
          o = o.nextSibling;
        return o ? this.posBeforeChild(s) : this.posAtEnd;
      }
    let i;
    if (e == this.dom && this.contentDOM)
      i = t > me(this.contentDOM);
    else if (this.contentDOM && this.contentDOM != this.dom && this.dom.contains(this.contentDOM))
      i = e.compareDocumentPosition(this.contentDOM) & 2;
    else if (this.dom.firstChild) {
      if (t == 0)
        for (let o = e; ; o = o.parentNode) {
          if (o == this.dom) {
            i = !1;
            break;
          }
          if (o.previousSibling)
            break;
        }
      if (i == null && t == e.childNodes.length)
        for (let o = e; ; o = o.parentNode) {
          if (o == this.dom) {
            i = !0;
            break;
          }
          if (o.nextSibling)
            break;
        }
    }
    return i ?? r > 0 ? this.posAtEnd : this.posAtStart;
  }
  nearestDesc(e, t = !1) {
    for (let r = !0, i = e; i; i = i.parentNode) {
      let o = this.getDesc(i), s;
      if (o && (!t || o.node))
        if (r && (s = o.nodeDOM) && !(s.nodeType == 1 ? s.contains(e.nodeType == 1 ? e : e.parentNode) : s == e))
          r = !1;
        else
          return o;
    }
  }
  getDesc(e) {
    let t = e.pmViewDesc;
    for (let r = t; r; r = r.parent)
      if (r == this)
        return t;
  }
  posFromDOM(e, t, r) {
    for (let i = e; i; i = i.parentNode) {
      let o = this.getDesc(i);
      if (o)
        return o.localPosFromDOM(e, t, r);
    }
    return -1;
  }
  // Find the desc for the node after the given pos, if any. (When a
  // parent node overrode rendering, there might not be one.)
  descAt(e) {
    for (let t = 0, r = 0; t < this.children.length; t++) {
      let i = this.children[t], o = r + i.size;
      if (r == e && o != r) {
        for (; !i.border && i.children.length; )
          i = i.children[0];
        return i;
      }
      if (e < o)
        return i.descAt(e - r - i.border);
      r = o;
    }
  }
  domFromPos(e, t) {
    if (!this.contentDOM)
      return { node: this.dom, offset: 0, atom: e + 1 };
    let r = 0, i = 0;
    for (let o = 0; r < this.children.length; r++) {
      let s = this.children[r], l = o + s.size;
      if (l > e || s instanceof Ud) {
        i = e - o;
        break;
      }
      o = l;
    }
    if (i)
      return this.children[r].domFromPos(i - this.children[r].border, t);
    for (let o; r && !(o = this.children[r - 1]).size && o instanceof qd && o.side >= 0; r--)
      ;
    if (t <= 0) {
      let o, s = !0;
      for (; o = r ? this.children[r - 1] : null, !(!o || o.dom.parentNode == this.contentDOM); r--, s = !1)
        ;
      return o && t && s && !o.border && !o.domAtom ? o.domFromPos(o.size, t) : { node: this.contentDOM, offset: o ? me(o.dom) + 1 : 0 };
    } else {
      let o, s = !0;
      for (; o = r < this.children.length ? this.children[r] : null, !(!o || o.dom.parentNode == this.contentDOM); r++, s = !1)
        ;
      return o && s && !o.border && !o.domAtom ? o.domFromPos(0, t) : { node: this.contentDOM, offset: o ? me(o.dom) : this.contentDOM.childNodes.length };
    }
  }
  // Used to find a DOM range in a single parent for a given changed
  // range.
  parseRange(e, t, r = 0) {
    if (this.children.length == 0)
      return { node: this.contentDOM, from: e, to: t, fromOffset: 0, toOffset: this.contentDOM.childNodes.length };
    let i = -1, o = -1;
    for (let s = r, l = 0; ; l++) {
      let a = this.children[l], c = s + a.size;
      if (i == -1 && e <= c) {
        let d = s + a.border;
        if (e >= d && t <= c - a.border && a.node && a.contentDOM && this.contentDOM.contains(a.contentDOM))
          return a.parseRange(e, t, d);
        e = s;
        for (let u = l; u > 0; u--) {
          let f = this.children[u - 1];
          if (f.size && f.dom.parentNode == this.contentDOM && !f.emptyChildAt(1)) {
            i = me(f.dom) + 1;
            break;
          }
          e -= f.size;
        }
        i == -1 && (i = 0);
      }
      if (i > -1 && (c > t || l == this.children.length - 1)) {
        t = c;
        for (let d = l + 1; d < this.children.length; d++) {
          let u = this.children[d];
          if (u.size && u.dom.parentNode == this.contentDOM && !u.emptyChildAt(-1)) {
            o = me(u.dom);
            break;
          }
          t += u.size;
        }
        o == -1 && (o = this.contentDOM.childNodes.length);
        break;
      }
      s = c;
    }
    return { node: this.contentDOM, from: e, to: t, fromOffset: i, toOffset: o };
  }
  emptyChildAt(e) {
    if (this.border || !this.contentDOM || !this.children.length)
      return !1;
    let t = this.children[e < 0 ? 0 : this.children.length - 1];
    return t.size == 0 || t.emptyChildAt(e);
  }
  domAfterPos(e) {
    let { node: t, offset: r } = this.domFromPos(e, 0);
    if (t.nodeType != 1 || r == t.childNodes.length)
      throw new RangeError("No node after pos " + e);
    return t.childNodes[r];
  }
  // View descs are responsible for setting any selection that falls
  // entirely inside of them, so that custom implementations can do
  // custom things with the selection. Note that this falls apart when
  // a selection starts in such a node and ends in another, in which
  // case we just use whatever domFromPos produces as a best effort.
  setSelection(e, t, r, i = !1) {
    let o = Math.min(e, t), s = Math.max(e, t);
    for (let h = 0, p = 0; h < this.children.length; h++) {
      let g = this.children[h], m = p + g.size;
      if (o > p && s < m)
        return g.setSelection(e - p - g.border, t - p - g.border, r, i);
      p = m;
    }
    let l = this.domFromPos(e, e ? -1 : 1), a = t == e ? l : this.domFromPos(t, t ? -1 : 1), c = r.root.getSelection(), d = r.domSelectionRange(), u = !1;
    if ((nt || Te) && e == t) {
      let { node: h, offset: p } = l;
      if (h.nodeType == 3) {
        if (u = !!(p && h.nodeValue[p - 1] == `
`), u && p == h.nodeValue.length)
          for (let g = h, m; g; g = g.parentNode) {
            if (m = g.nextSibling) {
              m.nodeName == "BR" && (l = a = { node: m.parentNode, offset: me(m) + 1 });
              break;
            }
            let y = g.pmViewDesc;
            if (y && y.node && y.node.isBlock)
              break;
          }
      } else {
        let g = h.childNodes[p - 1];
        u = g && (g.nodeName == "BR" || g.contentEditable == "false");
      }
    }
    if (nt && d.focusNode && d.focusNode != a.node && d.focusNode.nodeType == 1) {
      let h = d.focusNode.childNodes[d.focusOffset];
      h && h.contentEditable == "false" && (i = !0);
    }
    if (!(i || u && Te) && bn(l.node, l.offset, d.anchorNode, d.anchorOffset) && bn(a.node, a.offset, d.focusNode, d.focusOffset))
      return;
    let f = !1;
    if ((c.extend || e == t) && !u) {
      c.collapse(l.node, l.offset);
      try {
        e != t && c.extend(a.node, a.offset), f = !0;
      } catch {
      }
    }
    if (!f) {
      if (e > t) {
        let p = l;
        l = a, a = p;
      }
      let h = document.createRange();
      h.setEnd(a.node, a.offset), h.setStart(l.node, l.offset), c.removeAllRanges(), c.addRange(h);
    }
  }
  ignoreMutation(e) {
    return !this.contentDOM && e.type != "selection";
  }
  get contentLost() {
    return this.contentDOM && this.contentDOM != this.dom && !this.dom.contains(this.contentDOM);
  }
  // Remove a subtree of the element tree that has been touched
  // by a DOM change, so that the next update will redraw it.
  markDirty(e, t) {
    for (let r = 0, i = 0; i < this.children.length; i++) {
      let o = this.children[i], s = r + o.size;
      if (r == s ? e <= s && t >= r : e < s && t > r) {
        let l = r + o.border, a = s - o.border;
        if (e >= l && t <= a) {
          this.dirty = e == r || t == s ? dn : Aa, e == l && t == a && (o.contentLost || o.dom.parentNode != this.contentDOM) ? o.dirty = ft : o.markDirty(e - l, t - l);
          return;
        } else
          o.dirty = o.dom == o.contentDOM && o.dom.parentNode == this.contentDOM && !o.children.length ? dn : ft;
      }
      r = s;
    }
    this.dirty = dn;
  }
  markParentsDirty() {
    let e = 1;
    for (let t = this.parent; t; t = t.parent, e++) {
      let r = e == 1 ? dn : Aa;
      t.dirty < r && (t.dirty = r);
    }
  }
  get domAtom() {
    return !1;
  }
  get ignoreForCoords() {
    return !1;
  }
  isText(e) {
    return !1;
  }
}
class qd extends Gr {
  constructor(e, t, r, i) {
    let o, s = t.type.toDOM;
    if (typeof s == "function" && (s = s(r, () => {
      if (!o)
        return i;
      if (o.parent)
        return o.parent.posBeforeChild(o);
    })), !t.type.spec.raw) {
      if (s.nodeType != 1) {
        let l = document.createElement("span");
        l.appendChild(s), s = l;
      }
      s.contentEditable = "false", s.classList.add("ProseMirror-widget");
    }
    super(e, [], s, null), this.widget = t, this.widget = t, o = this;
  }
  matchesWidget(e) {
    return this.dirty == qe && e.type.eq(this.widget.type);
  }
  parseRule() {
    return { ignore: !0 };
  }
  stopEvent(e) {
    let t = this.widget.spec.stopEvent;
    return t ? t(e) : !1;
  }
  ignoreMutation(e) {
    return e.type != "selection" || this.widget.spec.ignoreSelection;
  }
  destroy() {
    this.widget.type.destroy(this.dom), super.destroy();
  }
  get domAtom() {
    return !0;
  }
  get side() {
    return this.widget.type.side;
  }
}
class Mp extends Gr {
  constructor(e, t, r, i) {
    super(e, [], t, null), this.textDOM = r, this.text = i;
  }
  get size() {
    return this.text.length;
  }
  localPosFromDOM(e, t) {
    return e != this.textDOM ? this.posAtStart + (t ? this.size : 0) : this.posAtStart + t;
  }
  domFromPos(e) {
    return { node: this.textDOM, offset: e };
  }
  ignoreMutation(e) {
    return e.type === "characterData" && e.target.nodeValue == e.oldValue;
  }
}
class kn extends Gr {
  constructor(e, t, r, i, o) {
    super(e, [], r, i), this.mark = t, this.spec = o;
  }
  static create(e, t, r, i) {
    let o = i.nodeViews[t.type.name], s = o && o(t, i, r);
    return (!s || !s.dom) && (s = Mn.renderSpec(document, t.type.spec.toDOM(t, r), null, t.attrs)), new kn(e, t, s.dom, s.contentDOM || s.dom, s);
  }
  parseRule() {
    return this.dirty & ft || this.mark.type.spec.reparseInView ? null : { mark: this.mark.type.name, attrs: this.mark.attrs, contentElement: this.contentDOM };
  }
  matchesMark(e) {
    return this.dirty != ft && this.mark.eq(e);
  }
  markDirty(e, t) {
    if (super.markDirty(e, t), this.dirty != qe) {
      let r = this.parent;
      for (; !r.node; )
        r = r.parent;
      r.dirty < this.dirty && (r.dirty = this.dirty), this.dirty = qe;
    }
  }
  slice(e, t, r) {
    let i = kn.create(this.parent, this.mark, !0, r), o = this.children, s = this.size;
    t < s && (o = Rs(o, t, s, r)), e > 0 && (o = Rs(o, 0, e, r));
    for (let l = 0; l < o.length; l++)
      o[l].parent = i;
    return i.children = o, i;
  }
  ignoreMutation(e) {
    return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : super.ignoreMutation(e);
  }
  destroy() {
    this.spec.destroy && this.spec.destroy(), super.destroy();
  }
}
class Gt extends Gr {
  constructor(e, t, r, i, o, s, l, a, c) {
    super(e, [], o, s), this.node = t, this.outerDeco = r, this.innerDeco = i, this.nodeDOM = l;
  }
  // By default, a node is rendered using the `toDOM` method from the
  // node type spec. But client code can use the `nodeViews` spec to
  // supply a custom node view, which can influence various aspects of
  // the way the node works.
  //
  // (Using subclassing for this was intentionally decided against,
  // since it'd require exposing a whole slew of finicky
  // implementation details to the user code that they probably will
  // never need.)
  static create(e, t, r, i, o, s) {
    let l = o.nodeViews[t.type.name], a, c = l && l(t, o, () => {
      if (!a)
        return s;
      if (a.parent)
        return a.parent.posBeforeChild(a);
    }, r, i), d = c && c.dom, u = c && c.contentDOM;
    if (t.isText) {
      if (!d)
        d = document.createTextNode(t.text);
      else if (d.nodeType != 3)
        throw new RangeError("Text must be rendered as a DOM text node");
    } else
      d || ({ dom: d, contentDOM: u } = Mn.renderSpec(document, t.type.spec.toDOM(t), null, t.attrs));
    !u && !t.isText && d.nodeName != "BR" && (d.hasAttribute("contenteditable") || (d.contentEditable = "false"), t.type.spec.draggable && (d.draggable = !0));
    let f = d;
    return d = Yd(d, r, t), c ? a = new Tp(e, t, r, i, d, u || null, f, c, o, s + 1) : t.isText ? new Oo(e, t, r, i, d, f, o) : new Gt(e, t, r, i, d, u || null, f, o, s + 1);
  }
  parseRule() {
    if (this.node.type.spec.reparseInView)
      return null;
    let e = { node: this.node.type.name, attrs: this.node.attrs };
    if (this.node.type.whitespace == "pre" && (e.preserveWhitespace = "full"), !this.contentDOM)
      e.getContent = () => this.node.content;
    else if (!this.contentLost)
      e.contentElement = this.contentDOM;
    else {
      for (let t = this.children.length - 1; t >= 0; t--) {
        let r = this.children[t];
        if (this.dom.contains(r.dom.parentNode)) {
          e.contentElement = r.dom.parentNode;
          break;
        }
      }
      e.contentElement || (e.getContent = () => x.empty);
    }
    return e;
  }
  matchesNode(e, t, r) {
    return this.dirty == qe && e.eq(this.node) && Fi(t, this.outerDeco) && r.eq(this.innerDeco);
  }
  get size() {
    return this.node.nodeSize;
  }
  get border() {
    return this.node.isLeaf ? 0 : 1;
  }
  // Syncs `this.children` to match `this.node.content` and the local
  // decorations, possibly introducing nesting for marks. Then, in a
  // separate step, syncs the DOM inside `this.contentDOM` to
  // `this.children`.
  updateChildren(e, t) {
    let r = this.node.inlineContent, i = t, o = e.composing ? this.localCompositionInfo(e, t) : null, s = o && o.pos > -1 ? o : null, l = o && o.pos < 0, a = new Ep(this, s && s.node, e);
    Dp(this.node, this.innerDeco, (c, d, u) => {
      c.spec.marks ? a.syncToMarks(c.spec.marks, r, e) : c.type.side >= 0 && !u && a.syncToMarks(d == this.node.childCount ? q.none : this.node.child(d).marks, r, e), a.placeWidget(c, e, i);
    }, (c, d, u, f) => {
      a.syncToMarks(c.marks, r, e);
      let h;
      a.findNodeMatch(c, d, u, f) || l && e.state.selection.from > i && e.state.selection.to < i + c.nodeSize && (h = a.findIndexWithChild(o.node)) > -1 && a.updateNodeAt(c, d, u, h, e) || a.updateNextNode(c, d, u, e, f, i) || a.addNode(c, d, u, e, i), i += c.nodeSize;
    }), a.syncToMarks([], r, e), this.node.isTextblock && a.addTextblockHacks(), a.destroyRest(), (a.changed || this.dirty == dn) && (s && this.protectLocalComposition(e, s), Jd(this.contentDOM, this.children, e), Un && Rp(this.dom));
  }
  localCompositionInfo(e, t) {
    let { from: r, to: i } = e.state.selection;
    if (!(e.state.selection instanceof D) || r < t || i > t + this.node.content.size)
      return null;
    let o = e.input.compositionNode;
    if (!o || !this.dom.contains(o.parentNode))
      return null;
    if (this.node.inlineContent) {
      let s = o.nodeValue, l = Ip(this.node.content, s, r - t, i - t);
      return l < 0 ? null : { node: o, pos: l, text: s };
    } else
      return { node: o, pos: -1, text: "" };
  }
  protectLocalComposition(e, { node: t, pos: r, text: i }) {
    if (this.getDesc(t))
      return;
    let o = t;
    for (; o.parentNode != this.contentDOM; o = o.parentNode) {
      for (; o.previousSibling; )
        o.parentNode.removeChild(o.previousSibling);
      for (; o.nextSibling; )
        o.parentNode.removeChild(o.nextSibling);
      o.pmViewDesc && (o.pmViewDesc = void 0);
    }
    let s = new Mp(this, o, t, i);
    e.input.compositionNodes.push(s), this.children = Rs(this.children, r, r + i.length, e, s);
  }
  // If this desc must be updated to match the given node decoration,
  // do so and return true.
  update(e, t, r, i) {
    return this.dirty == ft || !e.sameMarkup(this.node) ? !1 : (this.updateInner(e, t, r, i), !0);
  }
  updateInner(e, t, r, i) {
    this.updateOuterDeco(t), this.node = e, this.innerDeco = r, this.contentDOM && this.updateChildren(i, this.posAtStart), this.dirty = qe;
  }
  updateOuterDeco(e) {
    if (Fi(e, this.outerDeco))
      return;
    let t = this.nodeDOM.nodeType != 1, r = this.dom;
    this.dom = Gd(this.dom, this.nodeDOM, Ds(this.outerDeco, this.node, t), Ds(e, this.node, t)), this.dom != r && (r.pmViewDesc = void 0, this.dom.pmViewDesc = this), this.outerDeco = e;
  }
  // Mark this node as being the selected node.
  selectNode() {
    this.nodeDOM.nodeType == 1 && this.nodeDOM.classList.add("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && (this.dom.draggable = !0);
  }
  // Remove selected node marking from this node.
  deselectNode() {
    this.nodeDOM.nodeType == 1 && (this.nodeDOM.classList.remove("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && this.dom.removeAttribute("draggable"));
  }
  get domAtom() {
    return this.node.isAtom;
  }
}
function Ea(n, e, t, r, i) {
  Yd(r, e, n);
  let o = new Gt(void 0, n, e, t, r, r, r, i, 0);
  return o.contentDOM && o.updateChildren(i, 0), o;
}
class Oo extends Gt {
  constructor(e, t, r, i, o, s, l) {
    super(e, t, r, i, o, null, s, l, 0);
  }
  parseRule() {
    let e = this.nodeDOM.parentNode;
    for (; e && e != this.dom && !e.pmIsDeco; )
      e = e.parentNode;
    return { skip: e || !0 };
  }
  update(e, t, r, i) {
    return this.dirty == ft || this.dirty != qe && !this.inParent() || !e.sameMarkup(this.node) ? !1 : (this.updateOuterDeco(t), (this.dirty != qe || e.text != this.node.text) && e.text != this.nodeDOM.nodeValue && (this.nodeDOM.nodeValue = e.text, i.trackWrites == this.nodeDOM && (i.trackWrites = null)), this.node = e, this.dirty = qe, !0);
  }
  inParent() {
    let e = this.parent.contentDOM;
    for (let t = this.nodeDOM; t; t = t.parentNode)
      if (t == e)
        return !0;
    return !1;
  }
  domFromPos(e) {
    return { node: this.nodeDOM, offset: e };
  }
  localPosFromDOM(e, t, r) {
    return e == this.nodeDOM ? this.posAtStart + Math.min(t, this.node.text.length) : super.localPosFromDOM(e, t, r);
  }
  ignoreMutation(e) {
    return e.type != "characterData" && e.type != "selection";
  }
  slice(e, t, r) {
    let i = this.node.cut(e, t), o = document.createTextNode(i.text);
    return new Oo(this.parent, i, this.outerDeco, this.innerDeco, o, o, r);
  }
  markDirty(e, t) {
    super.markDirty(e, t), this.dom != this.nodeDOM && (e == 0 || t == this.nodeDOM.nodeValue.length) && (this.dirty = ft);
  }
  get domAtom() {
    return !1;
  }
  isText(e) {
    return this.node.text == e;
  }
}
class Ud extends Gr {
  parseRule() {
    return { ignore: !0 };
  }
  matchesHack(e) {
    return this.dirty == qe && this.dom.nodeName == e;
  }
  get domAtom() {
    return !0;
  }
  get ignoreForCoords() {
    return this.dom.nodeName == "IMG";
  }
}
class Tp extends Gt {
  constructor(e, t, r, i, o, s, l, a, c, d) {
    super(e, t, r, i, o, s, l, c, d), this.spec = a;
  }
  // A custom `update` method gets to decide whether the update goes
  // through. If it does, and there's a `contentDOM` node, our logic
  // updates the children.
  update(e, t, r, i) {
    if (this.dirty == ft)
      return !1;
    if (this.spec.update && (this.node.type == e.type || this.spec.multiType)) {
      let o = this.spec.update(e, t, r);
      return o && this.updateInner(e, t, r, i), o;
    } else
      return !this.contentDOM && !e.isLeaf ? !1 : super.update(e, t, r, i);
  }
  selectNode() {
    this.spec.selectNode ? this.spec.selectNode() : super.selectNode();
  }
  deselectNode() {
    this.spec.deselectNode ? this.spec.deselectNode() : super.deselectNode();
  }
  setSelection(e, t, r, i) {
    this.spec.setSelection ? this.spec.setSelection(e, t, r.root) : super.setSelection(e, t, r, i);
  }
  destroy() {
    this.spec.destroy && this.spec.destroy(), super.destroy();
  }
  stopEvent(e) {
    return this.spec.stopEvent ? this.spec.stopEvent(e) : !1;
  }
  ignoreMutation(e) {
    return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : super.ignoreMutation(e);
  }
}
function Jd(n, e, t) {
  let r = n.firstChild, i = !1;
  for (let o = 0; o < e.length; o++) {
    let s = e[o], l = s.dom;
    if (l.parentNode == n) {
      for (; l != r; )
        r = Oa(r), i = !0;
      r = r.nextSibling;
    } else
      i = !0, n.insertBefore(l, r);
    if (s instanceof kn) {
      let a = r ? r.previousSibling : n.lastChild;
      Jd(s.contentDOM, s.children, t), r = a ? a.nextSibling : n.firstChild;
    }
  }
  for (; r; )
    r = Oa(r), i = !0;
  i && t.trackWrites == n && (t.trackWrites = null);
}
const vr = function(n) {
  n && (this.nodeName = n);
};
vr.prototype = /* @__PURE__ */ Object.create(null);
const un = [new vr()];
function Ds(n, e, t) {
  if (n.length == 0)
    return un;
  let r = t ? un[0] : new vr(), i = [r];
  for (let o = 0; o < n.length; o++) {
    let s = n[o].type.attrs;
    if (s) {
      s.nodeName && i.push(r = new vr(s.nodeName));
      for (let l in s) {
        let a = s[l];
        a != null && (t && i.length == 1 && i.push(r = new vr(e.isInline ? "span" : "div")), l == "class" ? r.class = (r.class ? r.class + " " : "") + a : l == "style" ? r.style = (r.style ? r.style + ";" : "") + a : l != "nodeName" && (r[l] = a));
      }
    }
  }
  return i;
}
function Gd(n, e, t, r) {
  if (t == un && r == un)
    return e;
  let i = e;
  for (let o = 0; o < r.length; o++) {
    let s = r[o], l = t[o];
    if (o) {
      let a;
      l && l.nodeName == s.nodeName && i != n && (a = i.parentNode) && a.nodeName.toLowerCase() == s.nodeName || (a = document.createElement(s.nodeName), a.pmIsDeco = !0, a.appendChild(i), l = un[0]), i = a;
    }
    Ap(i, l || un[0], s);
  }
  return i;
}
function Ap(n, e, t) {
  for (let r in e)
    r != "class" && r != "style" && r != "nodeName" && !(r in t) && n.removeAttribute(r);
  for (let r in t)
    r != "class" && r != "style" && r != "nodeName" && t[r] != e[r] && n.setAttribute(r, t[r]);
  if (e.class != t.class) {
    let r = e.class ? e.class.split(" ").filter(Boolean) : [], i = t.class ? t.class.split(" ").filter(Boolean) : [];
    for (let o = 0; o < r.length; o++)
      i.indexOf(r[o]) == -1 && n.classList.remove(r[o]);
    for (let o = 0; o < i.length; o++)
      r.indexOf(i[o]) == -1 && n.classList.add(i[o]);
    n.classList.length == 0 && n.removeAttribute("class");
  }
  if (e.style != t.style) {
    if (e.style) {
      let r = /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g, i;
      for (; i = r.exec(e.style); )
        n.style.removeProperty(i[1]);
    }
    t.style && (n.style.cssText += t.style);
  }
}
function Yd(n, e, t) {
  return Gd(n, n, un, Ds(e, t, n.nodeType != 1));
}
function Fi(n, e) {
  if (n.length != e.length)
    return !1;
  for (let t = 0; t < n.length; t++)
    if (!n[t].type.eq(e[t].type))
      return !1;
  return !0;
}
function Oa(n) {
  let e = n.nextSibling;
  return n.parentNode.removeChild(n), e;
}
class Ep {
  constructor(e, t, r) {
    this.lock = t, this.view = r, this.index = 0, this.stack = [], this.changed = !1, this.top = e, this.preMatch = Op(e.node.content, e);
  }
  // Destroy and remove the children between the given indices in
  // `this.top`.
  destroyBetween(e, t) {
    if (e != t) {
      for (let r = e; r < t; r++)
        this.top.children[r].destroy();
      this.top.children.splice(e, t - e), this.changed = !0;
    }
  }
  // Destroy all remaining children in `this.top`.
  destroyRest() {
    this.destroyBetween(this.index, this.top.children.length);
  }
  // Sync the current stack of mark descs with the given array of
  // marks, reusing existing mark descs when possible.
  syncToMarks(e, t, r) {
    let i = 0, o = this.stack.length >> 1, s = Math.min(o, e.length);
    for (; i < s && (i == o - 1 ? this.top : this.stack[i + 1 << 1]).matchesMark(e[i]) && e[i].type.spec.spanning !== !1; )
      i++;
    for (; i < o; )
      this.destroyRest(), this.top.dirty = qe, this.index = this.stack.pop(), this.top = this.stack.pop(), o--;
    for (; o < e.length; ) {
      this.stack.push(this.top, this.index + 1);
      let l = -1;
      for (let a = this.index; a < Math.min(this.index + 3, this.top.children.length); a++) {
        let c = this.top.children[a];
        if (c.matchesMark(e[o]) && !this.isLocked(c.dom)) {
          l = a;
          break;
        }
      }
      if (l > -1)
        l > this.index && (this.changed = !0, this.destroyBetween(this.index, l)), this.top = this.top.children[this.index];
      else {
        let a = kn.create(this.top, e[o], t, r);
        this.top.children.splice(this.index, 0, a), this.top = a, this.changed = !0;
      }
      this.index = 0, o++;
    }
  }
  // Try to find a node desc matching the given data. Skip over it and
  // return true when successful.
  findNodeMatch(e, t, r, i) {
    let o = -1, s;
    if (i >= this.preMatch.index && (s = this.preMatch.matches[i - this.preMatch.index]).parent == this.top && s.matchesNode(e, t, r))
      o = this.top.children.indexOf(s, this.index);
    else
      for (let l = this.index, a = Math.min(this.top.children.length, l + 5); l < a; l++) {
        let c = this.top.children[l];
        if (c.matchesNode(e, t, r) && !this.preMatch.matched.has(c)) {
          o = l;
          break;
        }
      }
    return o < 0 ? !1 : (this.destroyBetween(this.index, o), this.index++, !0);
  }
  updateNodeAt(e, t, r, i, o) {
    let s = this.top.children[i];
    return s.dirty == ft && s.dom == s.contentDOM && (s.dirty = dn), s.update(e, t, r, o) ? (this.destroyBetween(this.index, i), this.index++, !0) : !1;
  }
  findIndexWithChild(e) {
    for (; ; ) {
      let t = e.parentNode;
      if (!t)
        return -1;
      if (t == this.top.contentDOM) {
        let r = e.pmViewDesc;
        if (r) {
          for (let i = this.index; i < this.top.children.length; i++)
            if (this.top.children[i] == r)
              return i;
        }
        return -1;
      }
      e = t;
    }
  }
  // Try to update the next node, if any, to the given data. Checks
  // pre-matches to avoid overwriting nodes that could still be used.
  updateNextNode(e, t, r, i, o, s) {
    for (let l = this.index; l < this.top.children.length; l++) {
      let a = this.top.children[l];
      if (a instanceof Gt) {
        let c = this.preMatch.matched.get(a);
        if (c != null && c != o)
          return !1;
        let d = a.dom, u, f = this.isLocked(d) && !(e.isText && a.node && a.node.isText && a.nodeDOM.nodeValue == e.text && a.dirty != ft && Fi(t, a.outerDeco));
        if (!f && a.update(e, t, r, i))
          return this.destroyBetween(this.index, l), a.dom != d && (this.changed = !0), this.index++, !0;
        if (!f && (u = this.recreateWrapper(a, e, t, r, i, s)))
          return this.destroyBetween(this.index, l), this.top.children[this.index] = u, u.contentDOM && (u.dirty = dn, u.updateChildren(i, s + 1), u.dirty = qe), this.changed = !0, this.index++, !0;
        break;
      }
    }
    return !1;
  }
  // When a node with content is replaced by a different node with
  // identical content, move over its children.
  recreateWrapper(e, t, r, i, o, s) {
    if (e.dirty || t.isAtom || !e.children.length || !e.node.content.eq(t.content) || !Fi(r, e.outerDeco) || !i.eq(e.innerDeco))
      return null;
    let l = Gt.create(this.top, t, r, i, o, s);
    if (l.contentDOM) {
      l.children = e.children, e.children = [];
      for (let a of l.children)
        a.parent = l;
    }
    return e.destroy(), l;
  }
  // Insert the node as a newly created node desc.
  addNode(e, t, r, i, o) {
    let s = Gt.create(this.top, e, t, r, i, o);
    s.contentDOM && s.updateChildren(i, o + 1), this.top.children.splice(this.index++, 0, s), this.changed = !0;
  }
  placeWidget(e, t, r) {
    let i = this.index < this.top.children.length ? this.top.children[this.index] : null;
    if (i && i.matchesWidget(e) && (e == i.widget || !i.widget.type.toDOM.parentNode))
      this.index++;
    else {
      let o = new qd(this.top, e, t, r);
      this.top.children.splice(this.index++, 0, o), this.changed = !0;
    }
  }
  // Make sure a textblock looks and behaves correctly in
  // contentEditable.
  addTextblockHacks() {
    let e = this.top.children[this.index - 1], t = this.top;
    for (; e instanceof kn; )
      t = e, e = t.children[t.children.length - 1];
    (!e || // Empty textblock
    !(e instanceof Oo) || /\n$/.test(e.node.text) || this.view.requiresGeckoHackNode && /\s$/.test(e.node.text)) && ((Te || be) && e && e.dom.contentEditable == "false" && this.addHackNode("IMG", t), this.addHackNode("BR", this.top));
  }
  addHackNode(e, t) {
    if (t == this.top && this.index < t.children.length && t.children[this.index].matchesHack(e))
      this.index++;
    else {
      let r = document.createElement(e);
      e == "IMG" && (r.className = "ProseMirror-separator", r.alt = ""), e == "BR" && (r.className = "ProseMirror-trailingBreak");
      let i = new Ud(this.top, [], r, null);
      t != this.top ? t.children.push(i) : t.children.splice(this.index++, 0, i), this.changed = !0;
    }
  }
  isLocked(e) {
    return this.lock && (e == this.lock || e.nodeType == 1 && e.contains(this.lock.parentNode));
  }
}
function Op(n, e) {
  let t = e, r = t.children.length, i = n.childCount, o = /* @__PURE__ */ new Map(), s = [];
  e:
    for (; i > 0; ) {
      let l;
      for (; ; )
        if (r) {
          let c = t.children[r - 1];
          if (c instanceof kn)
            t = c, r = c.children.length;
          else {
            l = c, r--;
            break;
          }
        } else {
          if (t == e)
            break e;
          r = t.parent.children.indexOf(t), t = t.parent;
        }
      let a = l.node;
      if (a) {
        if (a != n.child(i - 1))
          break;
        --i, o.set(l, i), s.push(l);
      }
    }
  return { index: i, matched: o, matches: s.reverse() };
}
function Np(n, e) {
  return n.type.side - e.type.side;
}
function Dp(n, e, t, r) {
  let i = e.locals(n), o = 0;
  if (i.length == 0) {
    for (let c = 0; c < n.childCount; c++) {
      let d = n.child(c);
      r(d, i, e.forChild(o, d), c), o += d.nodeSize;
    }
    return;
  }
  let s = 0, l = [], a = null;
  for (let c = 0; ; ) {
    let d, u;
    for (; s < i.length && i[s].to == o; ) {
      let m = i[s++];
      m.widget && (d ? (u || (u = [d])).push(m) : d = m);
    }
    if (d)
      if (u) {
        u.sort(Np);
        for (let m = 0; m < u.length; m++)
          t(u[m], c, !!a);
      } else
        t(d, c, !!a);
    let f, h;
    if (a)
      h = -1, f = a, a = null;
    else if (c < n.childCount)
      h = c, f = n.child(c++);
    else
      break;
    for (let m = 0; m < l.length; m++)
      l[m].to <= o && l.splice(m--, 1);
    for (; s < i.length && i[s].from <= o && i[s].to > o; )
      l.push(i[s++]);
    let p = o + f.nodeSize;
    if (f.isText) {
      let m = p;
      s < i.length && i[s].from < m && (m = i[s].from);
      for (let y = 0; y < l.length; y++)
        l[y].to < m && (m = l[y].to);
      m < p && (a = f.cut(m - o), f = f.cut(0, m - o), p = m, h = -1);
    } else
      for (; s < i.length && i[s].to < p; )
        s++;
    let g = f.isInline && !f.isLeaf ? l.filter((m) => !m.inline) : l.slice();
    r(f, g, e.forChild(o, f), h), o = p;
  }
}
function Rp(n) {
  if (n.nodeName == "UL" || n.nodeName == "OL") {
    let e = n.style.cssText;
    n.style.cssText = e + "; list-style: square !important", window.getComputedStyle(n).listStyle, n.style.cssText = e;
  }
}
function Ip(n, e, t, r) {
  for (let i = 0, o = 0; i < n.childCount && o <= r; ) {
    let s = n.child(i++), l = o;
    if (o += s.nodeSize, !s.isText)
      continue;
    let a = s.text;
    for (; i < n.childCount; ) {
      let c = n.child(i++);
      if (o += c.nodeSize, !c.isText)
        break;
      a += c.text;
    }
    if (o >= t) {
      if (o >= r && a.slice(r - e.length - l, r - l) == e)
        return r - e.length;
      let c = l < r ? a.lastIndexOf(e, r - l - 1) : -1;
      if (c >= 0 && c + e.length + l >= t)
        return l + c;
      if (t == r && a.length >= r + e.length - l && a.slice(r - l, r - l + e.length) == e)
        return r;
    }
  }
  return -1;
}
function Rs(n, e, t, r, i) {
  let o = [];
  for (let s = 0, l = 0; s < n.length; s++) {
    let a = n[s], c = l, d = l += a.size;
    c >= t || d <= e ? o.push(a) : (c < e && o.push(a.slice(0, e - c, r)), i && (o.push(i), i = void 0), d > t && o.push(a.slice(t - c, a.size, r)));
  }
  return o;
}
function ml(n, e = null) {
  let t = n.domSelectionRange(), r = n.state.doc;
  if (!t.focusNode)
    return null;
  let i = n.docView.nearestDesc(t.focusNode), o = i && i.size == 0, s = n.docView.posFromDOM(t.focusNode, t.focusOffset, 1);
  if (s < 0)
    return null;
  let l = r.resolve(s), a, c;
  if (Eo(t)) {
    for (a = s; i && !i.node; )
      i = i.parent;
    let u = i.node;
    if (i && u.isAtom && R.isSelectable(u) && i.parent && !(u.isInline && op(t.focusNode, t.focusOffset, i.dom))) {
      let f = i.posBefore;
      c = new R(s == f ? l : r.resolve(f));
    }
  } else {
    if (t instanceof n.dom.ownerDocument.defaultView.Selection && t.rangeCount > 1) {
      let u = s, f = s;
      for (let h = 0; h < t.rangeCount; h++) {
        let p = t.getRangeAt(h);
        u = Math.min(u, n.docView.posFromDOM(p.startContainer, p.startOffset, 1)), f = Math.max(f, n.docView.posFromDOM(p.endContainer, p.endOffset, -1));
      }
      if (u < 0)
        return null;
      [a, s] = f == n.state.selection.anchor ? [f, u] : [u, f], l = r.resolve(s);
    } else
      a = n.docView.posFromDOM(t.anchorNode, t.anchorOffset, 1);
    if (a < 0)
      return null;
  }
  let d = r.resolve(a);
  if (!c) {
    let u = e == "pointer" || n.state.selection.head < l.pos && !o ? 1 : -1;
    c = gl(n, d, l, u);
  }
  return c;
}
function Xd(n) {
  return n.editable ? n.hasFocus() : Zd(n) && document.activeElement && document.activeElement.contains(n.dom);
}
function Nt(n, e = !1) {
  let t = n.state.selection;
  if (Qd(n, t), !!Xd(n)) {
    if (!e && n.input.mouseDown && n.input.mouseDown.allowDefault && be) {
      let r = n.domSelectionRange(), i = n.domObserver.currentSelection;
      if (r.anchorNode && i.anchorNode && bn(r.anchorNode, r.anchorOffset, i.anchorNode, i.anchorOffset)) {
        n.input.mouseDown.delayedSelectionSync = !0, n.domObserver.setCurSelection();
        return;
      }
    }
    if (n.domObserver.disconnectSelection(), n.cursorWrapper)
      Pp(n);
    else {
      let { anchor: r, head: i } = t, o, s;
      Na && !(t instanceof D) && (t.$from.parent.inlineContent || (o = Da(n, t.from)), !t.empty && !t.$from.parent.inlineContent && (s = Da(n, t.to))), n.docView.setSelection(r, i, n, e), Na && (o && Ra(o), s && Ra(s)), t.visible ? n.dom.classList.remove("ProseMirror-hideselection") : (n.dom.classList.add("ProseMirror-hideselection"), "onselectionchange" in document && Lp(n));
    }
    n.domObserver.setCurSelection(), n.domObserver.connectSelection();
  }
}
const Na = Te || be && Vd < 63;
function Da(n, e) {
  let { node: t, offset: r } = n.docView.domFromPos(e, 0), i = r < t.childNodes.length ? t.childNodes[r] : null, o = r ? t.childNodes[r - 1] : null;
  if (Te && i && i.contentEditable == "false")
    return Qo(i);
  if ((!i || i.contentEditable == "false") && (!o || o.contentEditable == "false")) {
    if (i)
      return Qo(i);
    if (o)
      return Qo(o);
  }
}
function Qo(n) {
  return n.contentEditable = "true", Te && n.draggable && (n.draggable = !1, n.wasDraggable = !0), n;
}
function Ra(n) {
  n.contentEditable = "false", n.wasDraggable && (n.draggable = !0, n.wasDraggable = null);
}
function Lp(n) {
  let e = n.dom.ownerDocument;
  e.removeEventListener("selectionchange", n.input.hideSelectionGuard);
  let t = n.domSelectionRange(), r = t.anchorNode, i = t.anchorOffset;
  e.addEventListener("selectionchange", n.input.hideSelectionGuard = () => {
    (t.anchorNode != r || t.anchorOffset != i) && (e.removeEventListener("selectionchange", n.input.hideSelectionGuard), setTimeout(() => {
      (!Xd(n) || n.state.selection.visible) && n.dom.classList.remove("ProseMirror-hideselection");
    }, 20));
  });
}
function Pp(n) {
  let e = n.domSelection(), t = document.createRange();
  if (!e)
    return;
  let r = n.cursorWrapper.dom, i = r.nodeName == "IMG";
  i ? t.setStart(r.parentNode, me(r) + 1) : t.setStart(r, 0), t.collapse(!0), e.removeAllRanges(), e.addRange(t), !i && !n.state.selection.visible && De && Jt <= 11 && (r.disabled = !0, r.disabled = !1);
}
function Qd(n, e) {
  if (e instanceof R) {
    let t = n.docView.descAt(e.from);
    t != n.lastSelectedViewDesc && (Ia(n), t && t.selectNode(), n.lastSelectedViewDesc = t);
  } else
    Ia(n);
}
function Ia(n) {
  n.lastSelectedViewDesc && (n.lastSelectedViewDesc.parent && n.lastSelectedViewDesc.deselectNode(), n.lastSelectedViewDesc = void 0);
}
function gl(n, e, t, r) {
  return n.someProp("createSelectionBetween", (i) => i(n, e, t)) || D.between(e, t, r);
}
function La(n) {
  return n.editable && !n.hasFocus() ? !1 : Zd(n);
}
function Zd(n) {
  let e = n.domSelectionRange();
  if (!e.anchorNode)
    return !1;
  try {
    return n.dom.contains(e.anchorNode.nodeType == 3 ? e.anchorNode.parentNode : e.anchorNode) && (n.editable || n.dom.contains(e.focusNode.nodeType == 3 ? e.focusNode.parentNode : e.focusNode));
  } catch {
    return !1;
  }
}
function Bp(n) {
  let e = n.docView.domFromPos(n.state.selection.anchor, 0), t = n.domSelectionRange();
  return bn(e.node, e.offset, t.anchorNode, t.anchorOffset);
}
function Is(n, e) {
  let { $anchor: t, $head: r } = n.selection, i = e > 0 ? t.max(r) : t.min(r), o = i.parent.inlineContent ? i.depth ? n.doc.resolve(e > 0 ? i.after() : i.before()) : null : i;
  return o && I.findFrom(o, e);
}
function Bt(n, e) {
  return n.dispatch(n.state.tr.setSelection(e).scrollIntoView()), !0;
}
function Pa(n, e, t) {
  let r = n.state.selection;
  if (r instanceof D)
    if (t.indexOf("s") > -1) {
      let { $head: i } = r, o = i.textOffset ? null : e < 0 ? i.nodeBefore : i.nodeAfter;
      if (!o || o.isText || !o.isLeaf)
        return !1;
      let s = n.state.doc.resolve(i.pos + o.nodeSize * (e < 0 ? -1 : 1));
      return Bt(n, new D(r.$anchor, s));
    } else if (r.empty) {
      if (n.endOfTextblock(e > 0 ? "forward" : "backward")) {
        let i = Is(n.state, e);
        return i && i instanceof R ? Bt(n, i) : !1;
      } else if (!(_e && t.indexOf("m") > -1)) {
        let i = r.$head, o = i.textOffset ? null : e < 0 ? i.nodeBefore : i.nodeAfter, s;
        if (!o || o.isText)
          return !1;
        let l = e < 0 ? i.pos - o.nodeSize : i.pos;
        return o.isAtom || (s = n.docView.descAt(l)) && !s.contentDOM ? R.isSelectable(o) ? Bt(n, new R(e < 0 ? n.state.doc.resolve(i.pos - o.nodeSize) : i)) : Jr ? Bt(n, new D(n.state.doc.resolve(e < 0 ? l : l + o.nodeSize))) : !1 : !1;
      }
    } else
      return !1;
  else {
    if (r instanceof R && r.node.isInline)
      return Bt(n, new D(e > 0 ? r.$to : r.$from));
    {
      let i = Is(n.state, e);
      return i ? Bt(n, i) : !1;
    }
  }
}
function $i(n) {
  return n.nodeType == 3 ? n.nodeValue.length : n.childNodes.length;
}
function br(n, e) {
  let t = n.pmViewDesc;
  return t && t.size == 0 && (e < 0 || n.nextSibling || n.nodeName != "BR");
}
function In(n, e) {
  return e < 0 ? Hp(n) : zp(n);
}
function Hp(n) {
  let e = n.domSelectionRange(), t = e.focusNode, r = e.focusOffset;
  if (!t)
    return;
  let i, o, s = !1;
  for (nt && t.nodeType == 1 && r < $i(t) && br(t.childNodes[r], -1) && (s = !0); ; )
    if (r > 0) {
      if (t.nodeType != 1)
        break;
      {
        let l = t.childNodes[r - 1];
        if (br(l, -1))
          i = t, o = --r;
        else if (l.nodeType == 3)
          t = l, r = t.nodeValue.length;
        else
          break;
      }
    } else {
      if (eu(t))
        break;
      {
        let l = t.previousSibling;
        for (; l && br(l, -1); )
          i = t.parentNode, o = me(l), l = l.previousSibling;
        if (l)
          t = l, r = $i(t);
        else {
          if (t = t.parentNode, t == n.dom)
            break;
          r = 0;
        }
      }
    }
  s ? Ls(n, t, r) : i && Ls(n, i, o);
}
function zp(n) {
  let e = n.domSelectionRange(), t = e.focusNode, r = e.focusOffset;
  if (!t)
    return;
  let i = $i(t), o, s;
  for (; ; )
    if (r < i) {
      if (t.nodeType != 1)
        break;
      let l = t.childNodes[r];
      if (br(l, 1))
        o = t, s = ++r;
      else
        break;
    } else {
      if (eu(t))
        break;
      {
        let l = t.nextSibling;
        for (; l && br(l, 1); )
          o = l.parentNode, s = me(l) + 1, l = l.nextSibling;
        if (l)
          t = l, r = 0, i = $i(t);
        else {
          if (t = t.parentNode, t == n.dom)
            break;
          r = i = 0;
        }
      }
    }
  o && Ls(n, o, s);
}
function eu(n) {
  let e = n.pmViewDesc;
  return e && e.node && e.node.isBlock;
}
function Vp(n, e) {
  for (; n && e == n.childNodes.length && !Ur(n); )
    e = me(n) + 1, n = n.parentNode;
  for (; n && e < n.childNodes.length; ) {
    let t = n.childNodes[e];
    if (t.nodeType == 3)
      return t;
    if (t.nodeType == 1 && t.contentEditable == "false")
      break;
    n = t, e = 0;
  }
}
function Fp(n, e) {
  for (; n && !e && !Ur(n); )
    e = me(n), n = n.parentNode;
  for (; n && e; ) {
    let t = n.childNodes[e - 1];
    if (t.nodeType == 3)
      return t;
    if (t.nodeType == 1 && t.contentEditable == "false")
      break;
    n = t, e = n.childNodes.length;
  }
}
function Ls(n, e, t) {
  if (e.nodeType != 3) {
    let o, s;
    (s = Vp(e, t)) ? (e = s, t = 0) : (o = Fp(e, t)) && (e = o, t = o.nodeValue.length);
  }
  let r = n.domSelection();
  if (!r)
    return;
  if (Eo(r)) {
    let o = document.createRange();
    o.setEnd(e, t), o.setStart(e, t), r.removeAllRanges(), r.addRange(o);
  } else
    r.extend && r.extend(e, t);
  n.domObserver.setCurSelection();
  let { state: i } = n;
  setTimeout(() => {
    n.state == i && Nt(n);
  }, 50);
}
function Ba(n, e) {
  let t = n.state.doc.resolve(e);
  if (!(be || ap) && t.parent.inlineContent) {
    let i = n.coordsAtPos(e);
    if (e > t.start()) {
      let o = n.coordsAtPos(e - 1), s = (o.top + o.bottom) / 2;
      if (s > i.top && s < i.bottom && Math.abs(o.left - i.left) > 1)
        return o.left < i.left ? "ltr" : "rtl";
    }
    if (e < t.end()) {
      let o = n.coordsAtPos(e + 1), s = (o.top + o.bottom) / 2;
      if (s > i.top && s < i.bottom && Math.abs(o.left - i.left) > 1)
        return o.left > i.left ? "ltr" : "rtl";
    }
  }
  return getComputedStyle(n.dom).direction == "rtl" ? "rtl" : "ltr";
}
function Ha(n, e, t) {
  let r = n.state.selection;
  if (r instanceof D && !r.empty || t.indexOf("s") > -1 || _e && t.indexOf("m") > -1)
    return !1;
  let { $from: i, $to: o } = r;
  if (!i.parent.inlineContent || n.endOfTextblock(e < 0 ? "up" : "down")) {
    let s = Is(n.state, e);
    if (s && s instanceof R)
      return Bt(n, s);
  }
  if (!i.parent.inlineContent) {
    let s = e < 0 ? i : o, l = r instanceof tt ? I.near(s, e) : I.findFrom(s, e);
    return l ? Bt(n, l) : !1;
  }
  return !1;
}
function za(n, e) {
  if (!(n.state.selection instanceof D))
    return !0;
  let { $head: t, $anchor: r, empty: i } = n.state.selection;
  if (!t.sameParent(r))
    return !0;
  if (!i)
    return !1;
  if (n.endOfTextblock(e > 0 ? "forward" : "backward"))
    return !0;
  let o = !t.textOffset && (e < 0 ? t.nodeBefore : t.nodeAfter);
  if (o && !o.isText) {
    let s = n.state.tr;
    return e < 0 ? s.delete(t.pos - o.nodeSize, t.pos) : s.delete(t.pos, t.pos + o.nodeSize), n.dispatch(s), !0;
  }
  return !1;
}
function Va(n, e, t) {
  n.domObserver.stop(), e.contentEditable = t, n.domObserver.start();
}
function $p(n) {
  if (!Te || n.state.selection.$head.parentOffset > 0)
    return !1;
  let { focusNode: e, focusOffset: t } = n.domSelectionRange();
  if (e && e.nodeType == 1 && t == 0 && e.firstChild && e.firstChild.contentEditable == "false") {
    let r = e.firstChild;
    Va(n, r, "true"), setTimeout(() => Va(n, r, "false"), 20);
  }
  return !1;
}
function jp(n) {
  let e = "";
  return n.ctrlKey && (e += "c"), n.metaKey && (e += "m"), n.altKey && (e += "a"), n.shiftKey && (e += "s"), e;
}
function Wp(n, e) {
  let t = e.keyCode, r = jp(e);
  if (t == 8 || _e && t == 72 && r == "c")
    return za(n, -1) || In(n, -1);
  if (t == 46 && !e.shiftKey || _e && t == 68 && r == "c")
    return za(n, 1) || In(n, 1);
  if (t == 13 || t == 27)
    return !0;
  if (t == 37 || _e && t == 66 && r == "c") {
    let i = t == 37 ? Ba(n, n.state.selection.from) == "ltr" ? -1 : 1 : -1;
    return Pa(n, i, r) || In(n, i);
  } else if (t == 39 || _e && t == 70 && r == "c") {
    let i = t == 39 ? Ba(n, n.state.selection.from) == "ltr" ? 1 : -1 : 1;
    return Pa(n, i, r) || In(n, i);
  } else {
    if (t == 38 || _e && t == 80 && r == "c")
      return Ha(n, -1, r) || In(n, -1);
    if (t == 40 || _e && t == 78 && r == "c")
      return $p(n) || Ha(n, 1, r) || In(n, 1);
    if (r == (_e ? "m" : "c") && (t == 66 || t == 73 || t == 89 || t == 90))
      return !0;
  }
  return !1;
}
function tu(n, e) {
  n.someProp("transformCopied", (h) => {
    e = h(e, n);
  });
  let t = [], { content: r, openStart: i, openEnd: o } = e;
  for (; i > 1 && o > 1 && r.childCount == 1 && r.firstChild.childCount == 1; ) {
    i--, o--;
    let h = r.firstChild;
    t.push(h.type.name, h.attrs != h.type.defaultAttrs ? h.attrs : null), r = h.content;
  }
  let s = n.someProp("clipboardSerializer") || Mn.fromSchema(n.state.schema), l = lu(), a = l.createElement("div");
  a.appendChild(s.serializeFragment(r, { document: l }));
  let c = a.firstChild, d, u = 0;
  for (; c && c.nodeType == 1 && (d = su[c.nodeName.toLowerCase()]); ) {
    for (let h = d.length - 1; h >= 0; h--) {
      let p = l.createElement(d[h]);
      for (; a.firstChild; )
        p.appendChild(a.firstChild);
      a.appendChild(p), u++;
    }
    c = a.firstChild;
  }
  c && c.nodeType == 1 && c.setAttribute("data-pm-slice", `${i} ${o}${u ? ` -${u}` : ""} ${JSON.stringify(t)}`);
  let f = n.someProp("clipboardTextSerializer", (h) => h(e, n)) || e.content.textBetween(0, e.content.size, `

`);
  return { dom: a, text: f, slice: e };
}
function nu(n, e, t, r, i) {
  let o = i.parent.type.spec.code, s, l;
  if (!t && !e)
    return null;
  let a = e && (r || o || !t);
  if (a) {
    if (n.someProp("transformPastedText", (f) => {
      e = f(e, o || r, n);
    }), o)
      return e ? new T(x.from(n.state.schema.text(e.replace(/\r\n?/g, `
`))), 0, 0) : T.empty;
    let u = n.someProp("clipboardTextParser", (f) => f(e, i, r, n));
    if (u)
      l = u;
    else {
      let f = i.marks(), { schema: h } = n.state, p = Mn.fromSchema(h);
      s = document.createElement("div"), e.split(/(?:\r\n?|\n)+/).forEach((g) => {
        let m = s.appendChild(document.createElement("p"));
        g && m.appendChild(p.serializeNode(h.text(g, f)));
      });
    }
  } else
    n.someProp("transformPastedHTML", (u) => {
      t = u(t, n);
    }), s = Up(t), Jr && Jp(s);
  let c = s && s.querySelector("[data-pm-slice]"), d = c && /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(c.getAttribute("data-pm-slice") || "");
  if (d && d[3])
    for (let u = +d[3]; u > 0; u--) {
      let f = s.firstChild;
      for (; f && f.nodeType != 1; )
        f = f.nextSibling;
      if (!f)
        break;
      s = f;
    }
  if (l || (l = (n.someProp("clipboardParser") || n.someProp("domParser") || Ut.fromSchema(n.state.schema)).parseSlice(s, {
    preserveWhitespace: !!(a || d),
    context: i,
    ruleFromNode(f) {
      return f.nodeName == "BR" && !f.nextSibling && f.parentNode && !_p.test(f.parentNode.nodeName) ? { ignore: !0 } : null;
    }
  })), d)
    l = Gp(Fa(l, +d[1], +d[2]), d[4]);
  else if (l = T.maxOpen(Kp(l.content, i), !0), l.openStart || l.openEnd) {
    let u = 0, f = 0;
    for (let h = l.content.firstChild; u < l.openStart && !h.type.spec.isolating; u++, h = h.firstChild)
      ;
    for (let h = l.content.lastChild; f < l.openEnd && !h.type.spec.isolating; f++, h = h.lastChild)
      ;
    l = Fa(l, u, f);
  }
  return n.someProp("transformPasted", (u) => {
    l = u(l, n);
  }), l;
}
const _p = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
function Kp(n, e) {
  if (n.childCount < 2)
    return n;
  for (let t = e.depth; t >= 0; t--) {
    let i = e.node(t).contentMatchAt(e.index(t)), o, s = [];
    if (n.forEach((l) => {
      if (!s)
        return;
      let a = i.findWrapping(l.type), c;
      if (!a)
        return s = null;
      if (c = s.length && o.length && iu(a, o, l, s[s.length - 1], 0))
        s[s.length - 1] = c;
      else {
        s.length && (s[s.length - 1] = ou(s[s.length - 1], o.length));
        let d = ru(l, a);
        s.push(d), i = i.matchType(d.type), o = a;
      }
    }), s)
      return x.from(s);
  }
  return n;
}
function ru(n, e, t = 0) {
  for (let r = e.length - 1; r >= t; r--)
    n = e[r].create(null, x.from(n));
  return n;
}
function iu(n, e, t, r, i) {
  if (i < n.length && i < e.length && n[i] == e[i]) {
    let o = iu(n, e, t, r.lastChild, i + 1);
    if (o)
      return r.copy(r.content.replaceChild(r.childCount - 1, o));
    if (r.contentMatchAt(r.childCount).matchType(i == n.length - 1 ? t.type : n[i + 1]))
      return r.copy(r.content.append(x.from(ru(t, n, i + 1))));
  }
}
function ou(n, e) {
  if (e == 0)
    return n;
  let t = n.content.replaceChild(n.childCount - 1, ou(n.lastChild, e - 1)), r = n.contentMatchAt(n.childCount).fillBefore(x.empty, !0);
  return n.copy(t.append(r));
}
function Ps(n, e, t, r, i, o) {
  let s = e < 0 ? n.firstChild : n.lastChild, l = s.content;
  return n.childCount > 1 && (o = 0), i < r - 1 && (l = Ps(l, e, t, r, i + 1, o)), i >= t && (l = e < 0 ? s.contentMatchAt(0).fillBefore(l, o <= i).append(l) : l.append(s.contentMatchAt(s.childCount).fillBefore(x.empty, !0))), n.replaceChild(e < 0 ? 0 : n.childCount - 1, s.copy(l));
}
function Fa(n, e, t) {
  return e < n.openStart && (n = new T(Ps(n.content, -1, e, n.openStart, 0, n.openEnd), e, n.openEnd)), t < n.openEnd && (n = new T(Ps(n.content, 1, t, n.openEnd, 0, 0), n.openStart, t)), n;
}
const su = {
  thead: ["table"],
  tbody: ["table"],
  tfoot: ["table"],
  caption: ["table"],
  colgroup: ["table"],
  col: ["table", "colgroup"],
  tr: ["table", "tbody"],
  td: ["table", "tbody", "tr"],
  th: ["table", "tbody", "tr"]
};
let $a = null;
function lu() {
  return $a || ($a = document.implementation.createHTMLDocument("title"));
}
let Zo = null;
function qp(n) {
  let e = window.trustedTypes;
  return e ? (Zo || (Zo = e.createPolicy("ProseMirrorClipboard", { createHTML: (t) => t })), Zo.createHTML(n)) : n;
}
function Up(n) {
  let e = /^(\s*<meta [^>]*>)*/.exec(n);
  e && (n = n.slice(e[0].length));
  let t = lu().createElement("div"), r = /<([a-z][^>\s]+)/i.exec(n), i;
  if ((i = r && su[r[1].toLowerCase()]) && (n = i.map((o) => "<" + o + ">").join("") + n + i.map((o) => "</" + o + ">").reverse().join("")), t.innerHTML = qp(n), i)
    for (let o = 0; o < i.length; o++)
      t = t.querySelector(i[o]) || t;
  return t;
}
function Jp(n) {
  let e = n.querySelectorAll(be ? "span:not([class]):not([style])" : "span.Apple-converted-space");
  for (let t = 0; t < e.length; t++) {
    let r = e[t];
    r.childNodes.length == 1 && r.textContent == " " && r.parentNode && r.parentNode.replaceChild(n.ownerDocument.createTextNode(" "), r);
  }
}
function Gp(n, e) {
  if (!n.size)
    return n;
  let t = n.content.firstChild.type.schema, r;
  try {
    r = JSON.parse(e);
  } catch {
    return n;
  }
  let { content: i, openStart: o, openEnd: s } = n;
  for (let l = r.length - 2; l >= 0; l -= 2) {
    let a = t.nodes[r[l]];
    if (!a || a.hasRequiredAttrs())
      break;
    i = x.from(a.create(r[l + 1], i)), o++, s++;
  }
  return new T(i, o, s);
}
const Ae = {}, Ee = {}, Yp = { touchstart: !0, touchmove: !0 };
class Xp {
  constructor() {
    this.shiftKey = !1, this.mouseDown = null, this.lastKeyCode = null, this.lastKeyCodeTime = 0, this.lastClick = { time: 0, x: 0, y: 0, type: "" }, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastIOSEnter = 0, this.lastIOSEnterFallbackTimeout = -1, this.lastFocus = 0, this.lastTouch = 0, this.lastAndroidDelete = 0, this.composing = !1, this.compositionNode = null, this.composingTimeout = -1, this.compositionNodes = [], this.compositionEndedAt = -2e8, this.compositionID = 1, this.compositionPendingChanges = 0, this.domChangeCount = 0, this.eventHandlers = /* @__PURE__ */ Object.create(null), this.hideSelectionGuard = null;
  }
}
function Qp(n) {
  for (let e in Ae) {
    let t = Ae[e];
    n.dom.addEventListener(e, n.input.eventHandlers[e] = (r) => {
      em(n, r) && !yl(n, r) && (n.editable || !(r.type in Ee)) && t(n, r);
    }, Yp[e] ? { passive: !0 } : void 0);
  }
  Te && n.dom.addEventListener("input", () => null), Bs(n);
}
function Kt(n, e) {
  n.input.lastSelectionOrigin = e, n.input.lastSelectionTime = Date.now();
}
function Zp(n) {
  n.domObserver.stop();
  for (let e in n.input.eventHandlers)
    n.dom.removeEventListener(e, n.input.eventHandlers[e]);
  clearTimeout(n.input.composingTimeout), clearTimeout(n.input.lastIOSEnterFallbackTimeout);
}
function Bs(n) {
  n.someProp("handleDOMEvents", (e) => {
    for (let t in e)
      n.input.eventHandlers[t] || n.dom.addEventListener(t, n.input.eventHandlers[t] = (r) => yl(n, r));
  });
}
function yl(n, e) {
  return n.someProp("handleDOMEvents", (t) => {
    let r = t[e.type];
    return r ? r(n, e) || e.defaultPrevented : !1;
  });
}
function em(n, e) {
  if (!e.bubbles)
    return !0;
  if (e.defaultPrevented)
    return !1;
  for (let t = e.target; t != n.dom; t = t.parentNode)
    if (!t || t.nodeType == 11 || t.pmViewDesc && t.pmViewDesc.stopEvent(e))
      return !1;
  return !0;
}
function tm(n, e) {
  !yl(n, e) && Ae[e.type] && (n.editable || !(e.type in Ee)) && Ae[e.type](n, e);
}
Ee.keydown = (n, e) => {
  let t = e;
  if (n.input.shiftKey = t.keyCode == 16 || t.shiftKey, !cu(n, t) && (n.input.lastKeyCode = t.keyCode, n.input.lastKeyCodeTime = Date.now(), !(Ze && be && t.keyCode == 13)))
    if (t.keyCode != 229 && n.domObserver.forceFlush(), Un && t.keyCode == 13 && !t.ctrlKey && !t.altKey && !t.metaKey) {
      let r = Date.now();
      n.input.lastIOSEnter = r, n.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
        n.input.lastIOSEnter == r && (n.someProp("handleKeyDown", (i) => i(n, an(13, "Enter"))), n.input.lastIOSEnter = 0);
      }, 200);
    } else
      n.someProp("handleKeyDown", (r) => r(n, t)) || Wp(n, t) ? t.preventDefault() : Kt(n, "key");
};
Ee.keyup = (n, e) => {
  e.keyCode == 16 && (n.input.shiftKey = !1);
};
Ee.keypress = (n, e) => {
  let t = e;
  if (cu(n, t) || !t.charCode || t.ctrlKey && !t.altKey || _e && t.metaKey)
    return;
  if (n.someProp("handleKeyPress", (i) => i(n, t))) {
    t.preventDefault();
    return;
  }
  let r = n.state.selection;
  if (!(r instanceof D) || !r.$from.sameParent(r.$to)) {
    let i = String.fromCharCode(t.charCode);
    !/[\r\n]/.test(i) && !n.someProp("handleTextInput", (o) => o(n, r.$from.pos, r.$to.pos, i)) && n.dispatch(n.state.tr.insertText(i).scrollIntoView()), t.preventDefault();
  }
};
function No(n) {
  return { left: n.clientX, top: n.clientY };
}
function nm(n, e) {
  let t = e.x - n.clientX, r = e.y - n.clientY;
  return t * t + r * r < 100;
}
function wl(n, e, t, r, i) {
  if (r == -1)
    return !1;
  let o = n.state.doc.resolve(r);
  for (let s = o.depth + 1; s > 0; s--)
    if (n.someProp(e, (l) => s > o.depth ? l(n, t, o.nodeAfter, o.before(s), i, !0) : l(n, t, o.node(s), o.before(s), i, !1)))
      return !0;
  return !1;
}
function _n(n, e, t) {
  if (n.focused || n.focus(), n.state.selection.eq(e))
    return;
  let r = n.state.tr.setSelection(e);
  t == "pointer" && r.setMeta("pointer", !0), n.dispatch(r);
}
function rm(n, e) {
  if (e == -1)
    return !1;
  let t = n.state.doc.resolve(e), r = t.nodeAfter;
  return r && r.isAtom && R.isSelectable(r) ? (_n(n, new R(t), "pointer"), !0) : !1;
}
function im(n, e) {
  if (e == -1)
    return !1;
  let t = n.state.selection, r, i;
  t instanceof R && (r = t.node);
  let o = n.state.doc.resolve(e);
  for (let s = o.depth + 1; s > 0; s--) {
    let l = s > o.depth ? o.nodeAfter : o.node(s);
    if (R.isSelectable(l)) {
      r && t.$from.depth > 0 && s >= t.$from.depth && o.before(t.$from.depth + 1) == t.$from.pos ? i = o.before(t.$from.depth) : i = o.before(s);
      break;
    }
  }
  return i != null ? (_n(n, R.create(n.state.doc, i), "pointer"), !0) : !1;
}
function om(n, e, t, r, i) {
  return wl(n, "handleClickOn", e, t, r) || n.someProp("handleClick", (o) => o(n, e, r)) || (i ? im(n, t) : rm(n, t));
}
function sm(n, e, t, r) {
  return wl(n, "handleDoubleClickOn", e, t, r) || n.someProp("handleDoubleClick", (i) => i(n, e, r));
}
function lm(n, e, t, r) {
  return wl(n, "handleTripleClickOn", e, t, r) || n.someProp("handleTripleClick", (i) => i(n, e, r)) || am(n, t, r);
}
function am(n, e, t) {
  if (t.button != 0)
    return !1;
  let r = n.state.doc;
  if (e == -1)
    return r.inlineContent ? (_n(n, D.create(r, 0, r.content.size), "pointer"), !0) : !1;
  let i = r.resolve(e);
  for (let o = i.depth + 1; o > 0; o--) {
    let s = o > i.depth ? i.nodeAfter : i.node(o), l = i.before(o);
    if (s.inlineContent)
      _n(n, D.create(r, l + 1, l + 1 + s.content.size), "pointer");
    else if (R.isSelectable(s))
      _n(n, R.create(r, l), "pointer");
    else
      continue;
    return !0;
  }
}
function vl(n) {
  return ji(n);
}
const au = _e ? "metaKey" : "ctrlKey";
Ae.mousedown = (n, e) => {
  let t = e;
  n.input.shiftKey = t.shiftKey;
  let r = vl(n), i = Date.now(), o = "singleClick";
  i - n.input.lastClick.time < 500 && nm(t, n.input.lastClick) && !t[au] && (n.input.lastClick.type == "singleClick" ? o = "doubleClick" : n.input.lastClick.type == "doubleClick" && (o = "tripleClick")), n.input.lastClick = { time: i, x: t.clientX, y: t.clientY, type: o };
  let s = n.posAtCoords(No(t));
  s && (o == "singleClick" ? (n.input.mouseDown && n.input.mouseDown.done(), n.input.mouseDown = new cm(n, s, t, !!r)) : (o == "doubleClick" ? sm : lm)(n, s.pos, s.inside, t) ? t.preventDefault() : Kt(n, "pointer"));
};
class cm {
  constructor(e, t, r, i) {
    this.view = e, this.pos = t, this.event = r, this.flushed = i, this.delayedSelectionSync = !1, this.mightDrag = null, this.startDoc = e.state.doc, this.selectNode = !!r[au], this.allowDefault = r.shiftKey;
    let o, s;
    if (t.inside > -1)
      o = e.state.doc.nodeAt(t.inside), s = t.inside;
    else {
      let d = e.state.doc.resolve(t.pos);
      o = d.parent, s = d.depth ? d.before() : 0;
    }
    const l = i ? null : r.target, a = l ? e.docView.nearestDesc(l, !0) : null;
    this.target = a && a.dom.nodeType == 1 ? a.dom : null;
    let { selection: c } = e.state;
    (r.button == 0 && o.type.spec.draggable && o.type.spec.selectable !== !1 || c instanceof R && c.from <= s && c.to > s) && (this.mightDrag = {
      node: o,
      pos: s,
      addAttr: !!(this.target && !this.target.draggable),
      setUneditable: !!(this.target && nt && !this.target.hasAttribute("contentEditable"))
    }), this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable) && (this.view.domObserver.stop(), this.mightDrag.addAttr && (this.target.draggable = !0), this.mightDrag.setUneditable && setTimeout(() => {
      this.view.input.mouseDown == this && this.target.setAttribute("contentEditable", "false");
    }, 20), this.view.domObserver.start()), e.root.addEventListener("mouseup", this.up = this.up.bind(this)), e.root.addEventListener("mousemove", this.move = this.move.bind(this)), Kt(e, "pointer");
  }
  done() {
    this.view.root.removeEventListener("mouseup", this.up), this.view.root.removeEventListener("mousemove", this.move), this.mightDrag && this.target && (this.view.domObserver.stop(), this.mightDrag.addAttr && this.target.removeAttribute("draggable"), this.mightDrag.setUneditable && this.target.removeAttribute("contentEditable"), this.view.domObserver.start()), this.delayedSelectionSync && setTimeout(() => Nt(this.view)), this.view.input.mouseDown = null;
  }
  up(e) {
    if (this.done(), !this.view.dom.contains(e.target))
      return;
    let t = this.pos;
    this.view.state.doc != this.startDoc && (t = this.view.posAtCoords(No(e))), this.updateAllowDefault(e), this.allowDefault || !t ? Kt(this.view, "pointer") : om(this.view, t.pos, t.inside, e, this.selectNode) ? e.preventDefault() : e.button == 0 && (this.flushed || // Safari ignores clicks on draggable elements
    Te && this.mightDrag && !this.mightDrag.node.isAtom || // Chrome will sometimes treat a node selection as a
    // cursor, but still report that the node is selected
    // when asked through getSelection. You'll then get a
    // situation where clicking at the point where that
    // (hidden) cursor is doesn't change the selection, and
    // thus doesn't get a reaction from ProseMirror. This
    // works around that.
    be && !this.view.state.selection.visible && Math.min(Math.abs(t.pos - this.view.state.selection.from), Math.abs(t.pos - this.view.state.selection.to)) <= 2) ? (_n(this.view, I.near(this.view.state.doc.resolve(t.pos)), "pointer"), e.preventDefault()) : Kt(this.view, "pointer");
  }
  move(e) {
    this.updateAllowDefault(e), Kt(this.view, "pointer"), e.buttons == 0 && this.done();
  }
  updateAllowDefault(e) {
    !this.allowDefault && (Math.abs(this.event.x - e.clientX) > 4 || Math.abs(this.event.y - e.clientY) > 4) && (this.allowDefault = !0);
  }
}
Ae.touchstart = (n) => {
  n.input.lastTouch = Date.now(), vl(n), Kt(n, "pointer");
};
Ae.touchmove = (n) => {
  n.input.lastTouch = Date.now(), Kt(n, "pointer");
};
Ae.contextmenu = (n) => vl(n);
function cu(n, e) {
  return n.composing ? !0 : Te && Math.abs(e.timeStamp - n.input.compositionEndedAt) < 500 ? (n.input.compositionEndedAt = -2e8, !0) : !1;
}
const dm = Ze ? 5e3 : -1;
Ee.compositionstart = Ee.compositionupdate = (n) => {
  if (!n.composing) {
    n.domObserver.flush();
    let { state: e } = n, t = e.selection.$to;
    if (e.selection instanceof D && (e.storedMarks || !t.textOffset && t.parentOffset && t.nodeBefore.marks.some((r) => r.type.spec.inclusive === !1)))
      n.markCursor = n.state.storedMarks || t.marks(), ji(n, !0), n.markCursor = null;
    else if (ji(n, !e.selection.empty), nt && e.selection.empty && t.parentOffset && !t.textOffset && t.nodeBefore.marks.length) {
      let r = n.domSelectionRange();
      for (let i = r.focusNode, o = r.focusOffset; i && i.nodeType == 1 && o != 0; ) {
        let s = o < 0 ? i.lastChild : i.childNodes[o - 1];
        if (!s)
          break;
        if (s.nodeType == 3) {
          let l = n.domSelection();
          l && l.collapse(s, s.nodeValue.length);
          break;
        } else
          i = s, o = -1;
      }
    }
    n.input.composing = !0;
  }
  du(n, dm);
};
Ee.compositionend = (n, e) => {
  n.composing && (n.input.composing = !1, n.input.compositionEndedAt = e.timeStamp, n.input.compositionPendingChanges = n.domObserver.pendingRecords().length ? n.input.compositionID : 0, n.input.compositionNode = null, n.input.compositionPendingChanges && Promise.resolve().then(() => n.domObserver.flush()), n.input.compositionID++, du(n, 20));
};
function du(n, e) {
  clearTimeout(n.input.composingTimeout), e > -1 && (n.input.composingTimeout = setTimeout(() => ji(n), e));
}
function uu(n) {
  for (n.composing && (n.input.composing = !1, n.input.compositionEndedAt = fm()); n.input.compositionNodes.length > 0; )
    n.input.compositionNodes.pop().markParentsDirty();
}
function um(n) {
  let e = n.domSelectionRange();
  if (!e.focusNode)
    return null;
  let t = rp(e.focusNode, e.focusOffset), r = ip(e.focusNode, e.focusOffset);
  if (t && r && t != r) {
    let i = r.pmViewDesc, o = n.domObserver.lastChangedTextNode;
    if (t == o || r == o)
      return o;
    if (!i || !i.isText(r.nodeValue))
      return r;
    if (n.input.compositionNode == r) {
      let s = t.pmViewDesc;
      if (!(!s || !s.isText(t.nodeValue)))
        return r;
    }
  }
  return t || r;
}
function fm() {
  let n = document.createEvent("Event");
  return n.initEvent("event", !0, !0), n.timeStamp;
}
function ji(n, e = !1) {
  if (!(Ze && n.domObserver.flushingSoon >= 0)) {
    if (n.domObserver.forceFlush(), uu(n), e || n.docView && n.docView.dirty) {
      let t = ml(n);
      return t && !t.eq(n.state.selection) ? n.dispatch(n.state.tr.setSelection(t)) : (n.markCursor || e) && !n.state.selection.empty ? n.dispatch(n.state.tr.deleteSelection()) : n.updateState(n.state), !0;
    }
    return !1;
  }
}
function hm(n, e) {
  if (!n.dom.parentNode)
    return;
  let t = n.dom.parentNode.appendChild(document.createElement("div"));
  t.appendChild(e), t.style.cssText = "position: fixed; left: -10000px; top: 10px";
  let r = getSelection(), i = document.createRange();
  i.selectNodeContents(e), n.dom.blur(), r.removeAllRanges(), r.addRange(i), setTimeout(() => {
    t.parentNode && t.parentNode.removeChild(t), n.focus();
  }, 50);
}
const Ir = De && Jt < 15 || Un && cp < 604;
Ae.copy = Ee.cut = (n, e) => {
  let t = e, r = n.state.selection, i = t.type == "cut";
  if (r.empty)
    return;
  let o = Ir ? null : t.clipboardData, s = r.content(), { dom: l, text: a } = tu(n, s);
  o ? (t.preventDefault(), o.clearData(), o.setData("text/html", l.innerHTML), o.setData("text/plain", a)) : hm(n, l), i && n.dispatch(n.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"));
};
function pm(n) {
  return n.openStart == 0 && n.openEnd == 0 && n.content.childCount == 1 ? n.content.firstChild : null;
}
function mm(n, e) {
  if (!n.dom.parentNode)
    return;
  let t = n.input.shiftKey || n.state.selection.$from.parent.type.spec.code, r = n.dom.parentNode.appendChild(document.createElement(t ? "textarea" : "div"));
  t || (r.contentEditable = "true"), r.style.cssText = "position: fixed; left: -10000px; top: 10px", r.focus();
  let i = n.input.shiftKey && n.input.lastKeyCode != 45;
  setTimeout(() => {
    n.focus(), r.parentNode && r.parentNode.removeChild(r), t ? Lr(n, r.value, null, i, e) : Lr(n, r.textContent, r.innerHTML, i, e);
  }, 50);
}
function Lr(n, e, t, r, i) {
  let o = nu(n, e, t, r, n.state.selection.$from);
  if (n.someProp("handlePaste", (a) => a(n, i, o || T.empty)))
    return !0;
  if (!o)
    return !1;
  let s = pm(o), l = s ? n.state.tr.replaceSelectionWith(s, r) : n.state.tr.replaceSelection(o);
  return n.dispatch(l.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste")), !0;
}
function fu(n) {
  let e = n.getData("text/plain") || n.getData("Text");
  if (e)
    return e;
  let t = n.getData("text/uri-list");
  return t ? t.replace(/\r?\n/g, " ") : "";
}
Ee.paste = (n, e) => {
  let t = e;
  if (n.composing && !Ze)
    return;
  let r = Ir ? null : t.clipboardData, i = n.input.shiftKey && n.input.lastKeyCode != 45;
  r && Lr(n, fu(r), r.getData("text/html"), i, t) ? t.preventDefault() : mm(n, t);
};
class hu {
  constructor(e, t, r) {
    this.slice = e, this.move = t, this.node = r;
  }
}
const pu = _e ? "altKey" : "ctrlKey";
Ae.dragstart = (n, e) => {
  let t = e, r = n.input.mouseDown;
  if (r && r.done(), !t.dataTransfer)
    return;
  let i = n.state.selection, o = i.empty ? null : n.posAtCoords(No(t)), s;
  if (!(o && o.pos >= i.from && o.pos <= (i instanceof R ? i.to - 1 : i.to))) {
    if (r && r.mightDrag)
      s = R.create(n.state.doc, r.mightDrag.pos);
    else if (t.target && t.target.nodeType == 1) {
      let u = n.docView.nearestDesc(t.target, !0);
      u && u.node.type.spec.draggable && u != n.docView && (s = R.create(n.state.doc, u.posBefore));
    }
  }
  let l = (s || n.state.selection).content(), { dom: a, text: c, slice: d } = tu(n, l);
  (!t.dataTransfer.files.length || !be || Vd > 120) && t.dataTransfer.clearData(), t.dataTransfer.setData(Ir ? "Text" : "text/html", a.innerHTML), t.dataTransfer.effectAllowed = "copyMove", Ir || t.dataTransfer.setData("text/plain", c), n.dragging = new hu(d, !t[pu], s);
};
Ae.dragend = (n) => {
  let e = n.dragging;
  window.setTimeout(() => {
    n.dragging == e && (n.dragging = null);
  }, 50);
};
Ee.dragover = Ee.dragenter = (n, e) => e.preventDefault();
Ee.drop = (n, e) => {
  let t = e, r = n.dragging;
  if (n.dragging = null, !t.dataTransfer)
    return;
  let i = n.posAtCoords(No(t));
  if (!i)
    return;
  let o = n.state.doc.resolve(i.pos), s = r && r.slice;
  s ? n.someProp("transformPasted", (p) => {
    s = p(s, n);
  }) : s = nu(n, fu(t.dataTransfer), Ir ? null : t.dataTransfer.getData("text/html"), !1, o);
  let l = !!(r && !t[pu]);
  if (n.someProp("handleDrop", (p) => p(n, t, s || T.empty, l))) {
    t.preventDefault();
    return;
  }
  if (!s)
    return;
  t.preventDefault();
  let a = s ? Nd(n.state.doc, o.pos, s) : o.pos;
  a == null && (a = o.pos);
  let c = n.state.tr;
  if (l) {
    let { node: p } = r;
    p ? p.replace(c) : c.deleteSelection();
  }
  let d = c.mapping.map(a), u = s.openStart == 0 && s.openEnd == 0 && s.content.childCount == 1, f = c.doc;
  if (u ? c.replaceRangeWith(d, d, s.content.firstChild) : c.replaceRange(d, d, s), c.doc.eq(f))
    return;
  let h = c.doc.resolve(d);
  if (u && R.isSelectable(s.content.firstChild) && h.nodeAfter && h.nodeAfter.sameMarkup(s.content.firstChild))
    c.setSelection(new R(h));
  else {
    let p = c.mapping.map(a);
    c.mapping.maps[c.mapping.maps.length - 1].forEach((g, m, y, v) => p = v), c.setSelection(gl(n, h, c.doc.resolve(p)));
  }
  n.focus(), n.dispatch(c.setMeta("uiEvent", "drop"));
};
Ae.focus = (n) => {
  n.input.lastFocus = Date.now(), n.focused || (n.domObserver.stop(), n.dom.classList.add("ProseMirror-focused"), n.domObserver.start(), n.focused = !0, setTimeout(() => {
    n.docView && n.hasFocus() && !n.domObserver.currentSelection.eq(n.domSelectionRange()) && Nt(n);
  }, 20));
};
Ae.blur = (n, e) => {
  let t = e;
  n.focused && (n.domObserver.stop(), n.dom.classList.remove("ProseMirror-focused"), n.domObserver.start(), t.relatedTarget && n.dom.contains(t.relatedTarget) && n.domObserver.currentSelection.clear(), n.focused = !1);
};
Ae.beforeinput = (n, e) => {
  if (be && Ze && e.inputType == "deleteContentBackward") {
    n.domObserver.flushSoon();
    let { domChangeCount: r } = n.input;
    setTimeout(() => {
      if (n.input.domChangeCount != r || (n.dom.blur(), n.focus(), n.someProp("handleKeyDown", (o) => o(n, an(8, "Backspace")))))
        return;
      let { $cursor: i } = n.state.selection;
      i && i.pos > 0 && n.dispatch(n.state.tr.delete(i.pos - 1, i.pos).scrollIntoView());
    }, 50);
  }
};
for (let n in Ee)
  Ae[n] = Ee[n];
function Pr(n, e) {
  if (n == e)
    return !0;
  for (let t in n)
    if (n[t] !== e[t])
      return !1;
  for (let t in e)
    if (!(t in n))
      return !1;
  return !0;
}
class Wi {
  constructor(e, t) {
    this.toDOM = e, this.spec = t || mn, this.side = this.spec.side || 0;
  }
  map(e, t, r, i) {
    let { pos: o, deleted: s } = e.mapResult(t.from + i, this.side < 0 ? -1 : 1);
    return s ? null : new ye(o - r, o - r, this);
  }
  valid() {
    return !0;
  }
  eq(e) {
    return this == e || e instanceof Wi && (this.spec.key && this.spec.key == e.spec.key || this.toDOM == e.toDOM && Pr(this.spec, e.spec));
  }
  destroy(e) {
    this.spec.destroy && this.spec.destroy(e);
  }
}
class Yt {
  constructor(e, t) {
    this.attrs = e, this.spec = t || mn;
  }
  map(e, t, r, i) {
    let o = e.map(t.from + i, this.spec.inclusiveStart ? -1 : 1) - r, s = e.map(t.to + i, this.spec.inclusiveEnd ? 1 : -1) - r;
    return o >= s ? null : new ye(o, s, this);
  }
  valid(e, t) {
    return t.from < t.to;
  }
  eq(e) {
    return this == e || e instanceof Yt && Pr(this.attrs, e.attrs) && Pr(this.spec, e.spec);
  }
  static is(e) {
    return e.type instanceof Yt;
  }
  destroy() {
  }
}
class bl {
  constructor(e, t) {
    this.attrs = e, this.spec = t || mn;
  }
  map(e, t, r, i) {
    let o = e.mapResult(t.from + i, 1);
    if (o.deleted)
      return null;
    let s = e.mapResult(t.to + i, -1);
    return s.deleted || s.pos <= o.pos ? null : new ye(o.pos - r, s.pos - r, this);
  }
  valid(e, t) {
    let { index: r, offset: i } = e.content.findIndex(t.from), o;
    return i == t.from && !(o = e.child(r)).isText && i + o.nodeSize == t.to;
  }
  eq(e) {
    return this == e || e instanceof bl && Pr(this.attrs, e.attrs) && Pr(this.spec, e.spec);
  }
  destroy() {
  }
}
class ye {
  /**
  @internal
  */
  constructor(e, t, r) {
    this.from = e, this.to = t, this.type = r;
  }
  /**
  @internal
  */
  copy(e, t) {
    return new ye(e, t, this.type);
  }
  /**
  @internal
  */
  eq(e, t = 0) {
    return this.type.eq(e.type) && this.from + t == e.from && this.to + t == e.to;
  }
  /**
  @internal
  */
  map(e, t, r) {
    return this.type.map(e, this, t, r);
  }
  /**
  Creates a widget decoration, which is a DOM node that's shown in
  the document at the given position. It is recommended that you
  delay rendering the widget by passing a function that will be
  called when the widget is actually drawn in a view, but you can
  also directly pass a DOM node. `getPos` can be used to find the
  widget's current document position.
  */
  static widget(e, t, r) {
    return new ye(e, e, new Wi(t, r));
  }
  /**
  Creates an inline decoration, which adds the given attributes to
  each inline node between `from` and `to`.
  */
  static inline(e, t, r, i) {
    return new ye(e, t, new Yt(r, i));
  }
  /**
  Creates a node decoration. `from` and `to` should point precisely
  before and after a node in the document. That node, and only that
  node, will receive the given attributes.
  */
  static node(e, t, r, i) {
    return new ye(e, t, new bl(r, i));
  }
  /**
  The spec provided when creating this decoration. Can be useful
  if you've stored extra information in that object.
  */
  get spec() {
    return this.type.spec;
  }
  /**
  @internal
  */
  get inline() {
    return this.type instanceof Yt;
  }
  /**
  @internal
  */
  get widget() {
    return this.type instanceof Wi;
  }
}
const Bn = [], mn = {};
class ee {
  /**
  @internal
  */
  constructor(e, t) {
    this.local = e.length ? e : Bn, this.children = t.length ? t : Bn;
  }
  /**
  Create a set of decorations, using the structure of the given
  document. This will consume (modify) the `decorations` array, so
  you must make a copy if you want need to preserve that.
  */
  static create(e, t) {
    return t.length ? _i(t, e, 0, mn) : ve;
  }
  /**
  Find all decorations in this set which touch the given range
  (including decorations that start or end directly at the
  boundaries) and match the given predicate on their spec. When
  `start` and `end` are omitted, all decorations in the set are
  considered. When `predicate` isn't given, all decorations are
  assumed to match.
  */
  find(e, t, r) {
    let i = [];
    return this.findInner(e ?? 0, t ?? 1e9, i, 0, r), i;
  }
  findInner(e, t, r, i, o) {
    for (let s = 0; s < this.local.length; s++) {
      let l = this.local[s];
      l.from <= t && l.to >= e && (!o || o(l.spec)) && r.push(l.copy(l.from + i, l.to + i));
    }
    for (let s = 0; s < this.children.length; s += 3)
      if (this.children[s] < t && this.children[s + 1] > e) {
        let l = this.children[s] + 1;
        this.children[s + 2].findInner(e - l, t - l, r, i + l, o);
      }
  }
  /**
  Map the set of decorations in response to a change in the
  document.
  */
  map(e, t, r) {
    return this == ve || e.maps.length == 0 ? this : this.mapInner(e, t, 0, 0, r || mn);
  }
  /**
  @internal
  */
  mapInner(e, t, r, i, o) {
    let s;
    for (let l = 0; l < this.local.length; l++) {
      let a = this.local[l].map(e, r, i);
      a && a.type.valid(t, a) ? (s || (s = [])).push(a) : o.onRemove && o.onRemove(this.local[l].spec);
    }
    return this.children.length ? gm(this.children, s || [], e, t, r, i, o) : s ? new ee(s.sort(gn), Bn) : ve;
  }
  /**
  Add the given array of decorations to the ones in the set,
  producing a new set. Consumes the `decorations` array. Needs
  access to the current document to create the appropriate tree
  structure.
  */
  add(e, t) {
    return t.length ? this == ve ? ee.create(e, t) : this.addInner(e, t, 0) : this;
  }
  addInner(e, t, r) {
    let i, o = 0;
    e.forEach((l, a) => {
      let c = a + r, d;
      if (d = gu(t, l, c)) {
        for (i || (i = this.children.slice()); o < i.length && i[o] < a; )
          o += 3;
        i[o] == a ? i[o + 2] = i[o + 2].addInner(l, d, c + 1) : i.splice(o, 0, a, a + l.nodeSize, _i(d, l, c + 1, mn)), o += 3;
      }
    });
    let s = mu(o ? yu(t) : t, -r);
    for (let l = 0; l < s.length; l++)
      s[l].type.valid(e, s[l]) || s.splice(l--, 1);
    return new ee(s.length ? this.local.concat(s).sort(gn) : this.local, i || this.children);
  }
  /**
  Create a new set that contains the decorations in this set, minus
  the ones in the given array.
  */
  remove(e) {
    return e.length == 0 || this == ve ? this : this.removeInner(e, 0);
  }
  removeInner(e, t) {
    let r = this.children, i = this.local;
    for (let o = 0; o < r.length; o += 3) {
      let s, l = r[o] + t, a = r[o + 1] + t;
      for (let d = 0, u; d < e.length; d++)
        (u = e[d]) && u.from > l && u.to < a && (e[d] = null, (s || (s = [])).push(u));
      if (!s)
        continue;
      r == this.children && (r = this.children.slice());
      let c = r[o + 2].removeInner(s, l + 1);
      c != ve ? r[o + 2] = c : (r.splice(o, 3), o -= 3);
    }
    if (i.length) {
      for (let o = 0, s; o < e.length; o++)
        if (s = e[o])
          for (let l = 0; l < i.length; l++)
            i[l].eq(s, t) && (i == this.local && (i = this.local.slice()), i.splice(l--, 1));
    }
    return r == this.children && i == this.local ? this : i.length || r.length ? new ee(i, r) : ve;
  }
  forChild(e, t) {
    if (this == ve)
      return this;
    if (t.isLeaf)
      return ee.empty;
    let r, i;
    for (let l = 0; l < this.children.length; l += 3)
      if (this.children[l] >= e) {
        this.children[l] == e && (r = this.children[l + 2]);
        break;
      }
    let o = e + 1, s = o + t.content.size;
    for (let l = 0; l < this.local.length; l++) {
      let a = this.local[l];
      if (a.from < s && a.to > o && a.type instanceof Yt) {
        let c = Math.max(o, a.from) - o, d = Math.min(s, a.to) - o;
        c < d && (i || (i = [])).push(a.copy(c, d));
      }
    }
    if (i) {
      let l = new ee(i.sort(gn), Bn);
      return r ? new Vt([l, r]) : l;
    }
    return r || ve;
  }
  /**
  @internal
  */
  eq(e) {
    if (this == e)
      return !0;
    if (!(e instanceof ee) || this.local.length != e.local.length || this.children.length != e.children.length)
      return !1;
    for (let t = 0; t < this.local.length; t++)
      if (!this.local[t].eq(e.local[t]))
        return !1;
    for (let t = 0; t < this.children.length; t += 3)
      if (this.children[t] != e.children[t] || this.children[t + 1] != e.children[t + 1] || !this.children[t + 2].eq(e.children[t + 2]))
        return !1;
    return !0;
  }
  /**
  @internal
  */
  locals(e) {
    return kl(this.localsInner(e));
  }
  /**
  @internal
  */
  localsInner(e) {
    if (this == ve)
      return Bn;
    if (e.inlineContent || !this.local.some(Yt.is))
      return this.local;
    let t = [];
    for (let r = 0; r < this.local.length; r++)
      this.local[r].type instanceof Yt || t.push(this.local[r]);
    return t;
  }
  forEachSet(e) {
    e(this);
  }
}
ee.empty = new ee([], []);
ee.removeOverlap = kl;
const ve = ee.empty;
class Vt {
  constructor(e) {
    this.members = e;
  }
  map(e, t) {
    const r = this.members.map((i) => i.map(e, t, mn));
    return Vt.from(r);
  }
  forChild(e, t) {
    if (t.isLeaf)
      return ee.empty;
    let r = [];
    for (let i = 0; i < this.members.length; i++) {
      let o = this.members[i].forChild(e, t);
      o != ve && (o instanceof Vt ? r = r.concat(o.members) : r.push(o));
    }
    return Vt.from(r);
  }
  eq(e) {
    if (!(e instanceof Vt) || e.members.length != this.members.length)
      return !1;
    for (let t = 0; t < this.members.length; t++)
      if (!this.members[t].eq(e.members[t]))
        return !1;
    return !0;
  }
  locals(e) {
    let t, r = !0;
    for (let i = 0; i < this.members.length; i++) {
      let o = this.members[i].localsInner(e);
      if (o.length)
        if (!t)
          t = o;
        else {
          r && (t = t.slice(), r = !1);
          for (let s = 0; s < o.length; s++)
            t.push(o[s]);
        }
    }
    return t ? kl(r ? t : t.sort(gn)) : Bn;
  }
  // Create a group for the given array of decoration sets, or return
  // a single set when possible.
  static from(e) {
    switch (e.length) {
      case 0:
        return ve;
      case 1:
        return e[0];
      default:
        return new Vt(e.every((t) => t instanceof ee) ? e : e.reduce((t, r) => t.concat(r instanceof ee ? r : r.members), []));
    }
  }
  forEachSet(e) {
    for (let t = 0; t < this.members.length; t++)
      this.members[t].forEachSet(e);
  }
}
function gm(n, e, t, r, i, o, s) {
  let l = n.slice();
  for (let c = 0, d = o; c < t.maps.length; c++) {
    let u = 0;
    t.maps[c].forEach((f, h, p, g) => {
      let m = g - p - (h - f);
      for (let y = 0; y < l.length; y += 3) {
        let v = l[y + 1];
        if (v < 0 || f > v + d - u)
          continue;
        let S = l[y] + d - u;
        h >= S ? l[y + 1] = f <= S ? -2 : -1 : f >= d && m && (l[y] += m, l[y + 1] += m);
      }
      u += m;
    }), d = t.maps[c].map(d, -1);
  }
  let a = !1;
  for (let c = 0; c < l.length; c += 3)
    if (l[c + 1] < 0) {
      if (l[c + 1] == -2) {
        a = !0, l[c + 1] = -1;
        continue;
      }
      let d = t.map(n[c] + o), u = d - i;
      if (u < 0 || u >= r.content.size) {
        a = !0;
        continue;
      }
      let f = t.map(n[c + 1] + o, -1), h = f - i, { index: p, offset: g } = r.content.findIndex(u), m = r.maybeChild(p);
      if (m && g == u && g + m.nodeSize == h) {
        let y = l[c + 2].mapInner(t, m, d + 1, n[c] + o + 1, s);
        y != ve ? (l[c] = u, l[c + 1] = h, l[c + 2] = y) : (l[c + 1] = -2, a = !0);
      } else
        a = !0;
    }
  if (a) {
    let c = ym(l, n, e, t, i, o, s), d = _i(c, r, 0, s);
    e = d.local;
    for (let u = 0; u < l.length; u += 3)
      l[u + 1] < 0 && (l.splice(u, 3), u -= 3);
    for (let u = 0, f = 0; u < d.children.length; u += 3) {
      let h = d.children[u];
      for (; f < l.length && l[f] < h; )
        f += 3;
      l.splice(f, 0, d.children[u], d.children[u + 1], d.children[u + 2]);
    }
  }
  return new ee(e.sort(gn), l);
}
function mu(n, e) {
  if (!e || !n.length)
    return n;
  let t = [];
  for (let r = 0; r < n.length; r++) {
    let i = n[r];
    t.push(new ye(i.from + e, i.to + e, i.type));
  }
  return t;
}
function ym(n, e, t, r, i, o, s) {
  function l(a, c) {
    for (let d = 0; d < a.local.length; d++) {
      let u = a.local[d].map(r, i, c);
      u ? t.push(u) : s.onRemove && s.onRemove(a.local[d].spec);
    }
    for (let d = 0; d < a.children.length; d += 3)
      l(a.children[d + 2], a.children[d] + c + 1);
  }
  for (let a = 0; a < n.length; a += 3)
    n[a + 1] == -1 && l(n[a + 2], e[a] + o + 1);
  return t;
}
function gu(n, e, t) {
  if (e.isLeaf)
    return null;
  let r = t + e.nodeSize, i = null;
  for (let o = 0, s; o < n.length; o++)
    (s = n[o]) && s.from > t && s.to < r && ((i || (i = [])).push(s), n[o] = null);
  return i;
}
function yu(n) {
  let e = [];
  for (let t = 0; t < n.length; t++)
    n[t] != null && e.push(n[t]);
  return e;
}
function _i(n, e, t, r) {
  let i = [], o = !1;
  e.forEach((l, a) => {
    let c = gu(n, l, a + t);
    if (c) {
      o = !0;
      let d = _i(c, l, t + a + 1, r);
      d != ve && i.push(a, a + l.nodeSize, d);
    }
  });
  let s = mu(o ? yu(n) : n, -t).sort(gn);
  for (let l = 0; l < s.length; l++)
    s[l].type.valid(e, s[l]) || (r.onRemove && r.onRemove(s[l].spec), s.splice(l--, 1));
  return s.length || i.length ? new ee(s, i) : ve;
}
function gn(n, e) {
  return n.from - e.from || n.to - e.to;
}
function kl(n) {
  let e = n;
  for (let t = 0; t < e.length - 1; t++) {
    let r = e[t];
    if (r.from != r.to)
      for (let i = t + 1; i < e.length; i++) {
        let o = e[i];
        if (o.from == r.from) {
          o.to != r.to && (e == n && (e = n.slice()), e[i] = o.copy(o.from, r.to), ja(e, i + 1, o.copy(r.to, o.to)));
          continue;
        } else {
          o.from < r.to && (e == n && (e = n.slice()), e[t] = r.copy(r.from, o.from), ja(e, i, r.copy(o.from, r.to)));
          break;
        }
      }
  }
  return e;
}
function ja(n, e, t) {
  for (; e < n.length && gn(t, n[e]) > 0; )
    e++;
  n.splice(e, 0, t);
}
function es(n) {
  let e = [];
  return n.someProp("decorations", (t) => {
    let r = t(n.state);
    r && r != ve && e.push(r);
  }), n.cursorWrapper && e.push(ee.create(n.state.doc, [n.cursorWrapper.deco])), Vt.from(e);
}
const wm = {
  childList: !0,
  characterData: !0,
  characterDataOldValue: !0,
  attributes: !0,
  attributeOldValue: !0,
  subtree: !0
}, vm = De && Jt <= 11;
class bm {
  constructor() {
    this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
  }
  set(e) {
    this.anchorNode = e.anchorNode, this.anchorOffset = e.anchorOffset, this.focusNode = e.focusNode, this.focusOffset = e.focusOffset;
  }
  clear() {
    this.anchorNode = this.focusNode = null;
  }
  eq(e) {
    return e.anchorNode == this.anchorNode && e.anchorOffset == this.anchorOffset && e.focusNode == this.focusNode && e.focusOffset == this.focusOffset;
  }
}
class km {
  constructor(e, t) {
    this.view = e, this.handleDOMChange = t, this.queue = [], this.flushingSoon = -1, this.observer = null, this.currentSelection = new bm(), this.onCharData = null, this.suppressingSelectionUpdates = !1, this.lastChangedTextNode = null, this.observer = window.MutationObserver && new window.MutationObserver((r) => {
      for (let i = 0; i < r.length; i++)
        this.queue.push(r[i]);
      De && Jt <= 11 && r.some((i) => i.type == "childList" && i.removedNodes.length || i.type == "characterData" && i.oldValue.length > i.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), vm && (this.onCharData = (r) => {
      this.queue.push({ target: r.target, type: "characterData", oldValue: r.prevValue }), this.flushSoon();
    }), this.onSelectionChange = this.onSelectionChange.bind(this);
  }
  flushSoon() {
    this.flushingSoon < 0 && (this.flushingSoon = window.setTimeout(() => {
      this.flushingSoon = -1, this.flush();
    }, 20));
  }
  forceFlush() {
    this.flushingSoon > -1 && (window.clearTimeout(this.flushingSoon), this.flushingSoon = -1, this.flush());
  }
  start() {
    this.observer && (this.observer.takeRecords(), this.observer.observe(this.view.dom, wm)), this.onCharData && this.view.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.connectSelection();
  }
  stop() {
    if (this.observer) {
      let e = this.observer.takeRecords();
      if (e.length) {
        for (let t = 0; t < e.length; t++)
          this.queue.push(e[t]);
        window.setTimeout(() => this.flush(), 20);
      }
      this.observer.disconnect();
    }
    this.onCharData && this.view.dom.removeEventListener("DOMCharacterDataModified", this.onCharData), this.disconnectSelection();
  }
  connectSelection() {
    this.view.dom.ownerDocument.addEventListener("selectionchange", this.onSelectionChange);
  }
  disconnectSelection() {
    this.view.dom.ownerDocument.removeEventListener("selectionchange", this.onSelectionChange);
  }
  suppressSelectionUpdates() {
    this.suppressingSelectionUpdates = !0, setTimeout(() => this.suppressingSelectionUpdates = !1, 50);
  }
  onSelectionChange() {
    if (La(this.view)) {
      if (this.suppressingSelectionUpdates)
        return Nt(this.view);
      if (De && Jt <= 11 && !this.view.state.selection.empty) {
        let e = this.view.domSelectionRange();
        if (e.focusNode && bn(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset))
          return this.flushSoon();
      }
      this.flush();
    }
  }
  setCurSelection() {
    this.currentSelection.set(this.view.domSelectionRange());
  }
  ignoreSelectionChange(e) {
    if (!e.focusNode)
      return !0;
    let t = /* @__PURE__ */ new Set(), r;
    for (let o = e.focusNode; o; o = Rr(o))
      t.add(o);
    for (let o = e.anchorNode; o; o = Rr(o))
      if (t.has(o)) {
        r = o;
        break;
      }
    let i = r && this.view.docView.nearestDesc(r);
    if (i && i.ignoreMutation({
      type: "selection",
      target: r.nodeType == 3 ? r.parentNode : r
    }))
      return this.setCurSelection(), !0;
  }
  pendingRecords() {
    if (this.observer)
      for (let e of this.observer.takeRecords())
        this.queue.push(e);
    return this.queue;
  }
  flush() {
    let { view: e } = this;
    if (!e.docView || this.flushingSoon > -1)
      return;
    let t = this.pendingRecords();
    t.length && (this.queue = []);
    let r = e.domSelectionRange(), i = !this.suppressingSelectionUpdates && !this.currentSelection.eq(r) && La(e) && !this.ignoreSelectionChange(r), o = -1, s = -1, l = !1, a = [];
    if (e.editable)
      for (let d = 0; d < t.length; d++) {
        let u = this.registerMutation(t[d], a);
        u && (o = o < 0 ? u.from : Math.min(u.from, o), s = s < 0 ? u.to : Math.max(u.to, s), u.typeOver && (l = !0));
      }
    if (nt && a.length) {
      let d = a.filter((u) => u.nodeName == "BR");
      if (d.length == 2) {
        let [u, f] = d;
        u.parentNode && u.parentNode.parentNode == f.parentNode ? f.remove() : u.remove();
      } else {
        let { focusNode: u } = this.currentSelection;
        for (let f of d) {
          let h = f.parentNode;
          h && h.nodeName == "LI" && (!u || Sm(e, u) != h) && f.remove();
        }
      }
    }
    let c = null;
    o < 0 && i && e.input.lastFocus > Date.now() - 200 && Math.max(e.input.lastTouch, e.input.lastClick.time) < Date.now() - 300 && Eo(r) && (c = ml(e)) && c.eq(I.near(e.state.doc.resolve(0), 1)) ? (e.input.lastFocus = 0, Nt(e), this.currentSelection.set(r), e.scrollToSelection()) : (o > -1 || i) && (o > -1 && (e.docView.markDirty(o, s), xm(e)), this.handleDOMChange(o, s, l, a), e.docView && e.docView.dirty ? e.updateState(e.state) : this.currentSelection.eq(r) || Nt(e), this.currentSelection.set(r));
  }
  registerMutation(e, t) {
    if (t.indexOf(e.target) > -1)
      return null;
    let r = this.view.docView.nearestDesc(e.target);
    if (e.type == "attributes" && (r == this.view.docView || e.attributeName == "contenteditable" || // Firefox sometimes fires spurious events for null/empty styles
    e.attributeName == "style" && !e.oldValue && !e.target.getAttribute("style")) || !r || r.ignoreMutation(e))
      return null;
    if (e.type == "childList") {
      for (let d = 0; d < e.addedNodes.length; d++) {
        let u = e.addedNodes[d];
        t.push(u), u.nodeType == 3 && (this.lastChangedTextNode = u);
      }
      if (r.contentDOM && r.contentDOM != r.dom && !r.contentDOM.contains(e.target))
        return { from: r.posBefore, to: r.posAfter };
      let i = e.previousSibling, o = e.nextSibling;
      if (De && Jt <= 11 && e.addedNodes.length)
        for (let d = 0; d < e.addedNodes.length; d++) {
          let { previousSibling: u, nextSibling: f } = e.addedNodes[d];
          (!u || Array.prototype.indexOf.call(e.addedNodes, u) < 0) && (i = u), (!f || Array.prototype.indexOf.call(e.addedNodes, f) < 0) && (o = f);
        }
      let s = i && i.parentNode == e.target ? me(i) + 1 : 0, l = r.localPosFromDOM(e.target, s, -1), a = o && o.parentNode == e.target ? me(o) : e.target.childNodes.length, c = r.localPosFromDOM(e.target, a, 1);
      return { from: l, to: c };
    } else
      return e.type == "attributes" ? { from: r.posAtStart - r.border, to: r.posAtEnd + r.border } : (this.lastChangedTextNode = e.target, {
        from: r.posAtStart,
        to: r.posAtEnd,
        // An event was generated for a text change that didn't change
        // any text. Mark the dom change to fall back to assuming the
        // selection was typed over with an identical value if it can't
        // find another change.
        typeOver: e.target.nodeValue == e.oldValue
      });
  }
}
let Wa = /* @__PURE__ */ new WeakMap(), _a = !1;
function xm(n) {
  if (!Wa.has(n) && (Wa.set(n, null), ["normal", "nowrap", "pre-line"].indexOf(getComputedStyle(n.dom).whiteSpace) !== -1)) {
    if (n.requiresGeckoHackNode = nt, _a)
      return;
    console.warn("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package."), _a = !0;
  }
}
function Ka(n, e) {
  let t = e.startContainer, r = e.startOffset, i = e.endContainer, o = e.endOffset, s = n.domAtPos(n.state.selection.anchor);
  return bn(s.node, s.offset, i, o) && ([t, r, i, o] = [i, o, t, r]), { anchorNode: t, anchorOffset: r, focusNode: i, focusOffset: o };
}
function Cm(n, e) {
  if (e.getComposedRanges) {
    let i = e.getComposedRanges(n.root)[0];
    if (i)
      return Ka(n, i);
  }
  let t;
  function r(i) {
    i.preventDefault(), i.stopImmediatePropagation(), t = i.getTargetRanges()[0];
  }
  return n.dom.addEventListener("beforeinput", r, !0), document.execCommand("indent"), n.dom.removeEventListener("beforeinput", r, !0), t ? Ka(n, t) : null;
}
function Sm(n, e) {
  for (let t = e.parentNode; t && t != n.dom; t = t.parentNode) {
    let r = n.docView.nearestDesc(t, !0);
    if (r && r.node.isBlock)
      return t;
  }
  return null;
}
function Mm(n, e, t) {
  let { node: r, fromOffset: i, toOffset: o, from: s, to: l } = n.docView.parseRange(e, t), a = n.domSelectionRange(), c, d = a.anchorNode;
  if (d && n.dom.contains(d.nodeType == 1 ? d : d.parentNode) && (c = [{ node: d, offset: a.anchorOffset }], Eo(a) || c.push({ node: a.focusNode, offset: a.focusOffset })), be && n.input.lastKeyCode === 8)
    for (let m = o; m > i; m--) {
      let y = r.childNodes[m - 1], v = y.pmViewDesc;
      if (y.nodeName == "BR" && !v) {
        o = m;
        break;
      }
      if (!v || v.size)
        break;
    }
  let u = n.state.doc, f = n.someProp("domParser") || Ut.fromSchema(n.state.schema), h = u.resolve(s), p = null, g = f.parse(r, {
    topNode: h.parent,
    topMatch: h.parent.contentMatchAt(h.index()),
    topOpen: !0,
    from: i,
    to: o,
    preserveWhitespace: h.parent.type.whitespace == "pre" ? "full" : !0,
    findPositions: c,
    ruleFromNode: Tm,
    context: h
  });
  if (c && c[0].pos != null) {
    let m = c[0].pos, y = c[1] && c[1].pos;
    y == null && (y = m), p = { anchor: m + s, head: y + s };
  }
  return { doc: g, sel: p, from: s, to: l };
}
function Tm(n) {
  let e = n.pmViewDesc;
  if (e)
    return e.parseRule();
  if (n.nodeName == "BR" && n.parentNode) {
    if (Te && /^(ul|ol)$/i.test(n.parentNode.nodeName)) {
      let t = document.createElement("div");
      return t.appendChild(document.createElement("li")), { skip: t };
    } else if (n.parentNode.lastChild == n || Te && /^(tr|table)$/i.test(n.parentNode.nodeName))
      return { ignore: !0 };
  } else if (n.nodeName == "IMG" && n.getAttribute("mark-placeholder"))
    return { ignore: !0 };
  return null;
}
const Am = /^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;
function Em(n, e, t, r, i) {
  let o = n.input.compositionPendingChanges || (n.composing ? n.input.compositionID : 0);
  if (n.input.compositionPendingChanges = 0, e < 0) {
    let A = n.input.lastSelectionTime > Date.now() - 50 ? n.input.lastSelectionOrigin : null, P = ml(n, A);
    if (P && !n.state.selection.eq(P)) {
      if (be && Ze && n.input.lastKeyCode === 13 && Date.now() - 100 < n.input.lastKeyCodeTime && n.someProp("handleKeyDown", (j) => j(n, an(13, "Enter"))))
        return;
      let F = n.state.tr.setSelection(P);
      A == "pointer" ? F.setMeta("pointer", !0) : A == "key" && F.scrollIntoView(), o && F.setMeta("composition", o), n.dispatch(F);
    }
    return;
  }
  let s = n.state.doc.resolve(e), l = s.sharedDepth(t);
  e = s.before(l + 1), t = n.state.doc.resolve(t).after(l + 1);
  let a = n.state.selection, c = Mm(n, e, t), d = n.state.doc, u = d.slice(c.from, c.to), f, h;
  n.input.lastKeyCode === 8 && Date.now() - 100 < n.input.lastKeyCodeTime ? (f = n.state.selection.to, h = "end") : (f = n.state.selection.from, h = "start"), n.input.lastKeyCode = null;
  let p = Dm(u.content, c.doc.content, c.from, f, h);
  if (p && n.input.domChangeCount++, (Un && n.input.lastIOSEnter > Date.now() - 225 || Ze) && i.some((A) => A.nodeType == 1 && !Am.test(A.nodeName)) && (!p || p.endA >= p.endB) && n.someProp("handleKeyDown", (A) => A(n, an(13, "Enter")))) {
    n.input.lastIOSEnter = 0;
    return;
  }
  if (!p)
    if (r && a instanceof D && !a.empty && a.$head.sameParent(a.$anchor) && !n.composing && !(c.sel && c.sel.anchor != c.sel.head))
      p = { start: a.from, endA: a.to, endB: a.to };
    else {
      if (c.sel) {
        let A = qa(n, n.state.doc, c.sel);
        if (A && !A.eq(n.state.selection)) {
          let P = n.state.tr.setSelection(A);
          o && P.setMeta("composition", o), n.dispatch(P);
        }
      }
      return;
    }
  n.state.selection.from < n.state.selection.to && p.start == p.endB && n.state.selection instanceof D && (p.start > n.state.selection.from && p.start <= n.state.selection.from + 2 && n.state.selection.from >= c.from ? p.start = n.state.selection.from : p.endA < n.state.selection.to && p.endA >= n.state.selection.to - 2 && n.state.selection.to <= c.to && (p.endB += n.state.selection.to - p.endA, p.endA = n.state.selection.to)), De && Jt <= 11 && p.endB == p.start + 1 && p.endA == p.start && p.start > c.from && c.doc.textBetween(p.start - c.from - 1, p.start - c.from + 1) == "  " && (p.start--, p.endA--, p.endB--);
  let g = c.doc.resolveNoCache(p.start - c.from), m = c.doc.resolveNoCache(p.endB - c.from), y = d.resolve(p.start), v = g.sameParent(m) && g.parent.inlineContent && y.end() >= p.endA, S;
  if ((Un && n.input.lastIOSEnter > Date.now() - 225 && (!v || i.some((A) => A.nodeName == "DIV" || A.nodeName == "P")) || !v && g.pos < c.doc.content.size && !g.sameParent(m) && (S = I.findFrom(c.doc.resolve(g.pos + 1), 1, !0)) && S.head == m.pos) && n.someProp("handleKeyDown", (A) => A(n, an(13, "Enter")))) {
    n.input.lastIOSEnter = 0;
    return;
  }
  if (n.state.selection.anchor > p.start && Nm(d, p.start, p.endA, g, m) && n.someProp("handleKeyDown", (A) => A(n, an(8, "Backspace")))) {
    Ze && be && n.domObserver.suppressSelectionUpdates();
    return;
  }
  be && Ze && p.endB == p.start && (n.input.lastAndroidDelete = Date.now()), Ze && !v && g.start() != m.start() && m.parentOffset == 0 && g.depth == m.depth && c.sel && c.sel.anchor == c.sel.head && c.sel.head == p.endA && (p.endB -= 2, m = c.doc.resolveNoCache(p.endB - c.from), setTimeout(() => {
    n.someProp("handleKeyDown", function(A) {
      return A(n, an(13, "Enter"));
    });
  }, 20));
  let w = p.start, C = p.endA, b, O, L;
  if (v) {
    if (g.pos == m.pos)
      De && Jt <= 11 && g.parentOffset == 0 && (n.domObserver.suppressSelectionUpdates(), setTimeout(() => Nt(n), 20)), b = n.state.tr.delete(w, C), O = d.resolve(p.start).marksAcross(d.resolve(p.endA));
    else if (
      // Adding or removing a mark
      p.endA == p.endB && (L = Om(g.parent.content.cut(g.parentOffset, m.parentOffset), y.parent.content.cut(y.parentOffset, p.endA - y.start())))
    )
      b = n.state.tr, L.type == "add" ? b.addMark(w, C, L.mark) : b.removeMark(w, C, L.mark);
    else if (g.parent.child(g.index()).isText && g.index() == m.index() - (m.textOffset ? 0 : 1)) {
      let A = g.parent.textBetween(g.parentOffset, m.parentOffset);
      if (n.someProp("handleTextInput", (P) => P(n, w, C, A)))
        return;
      b = n.state.tr.insertText(A, w, C);
    }
  }
  if (b || (b = n.state.tr.replace(w, C, c.doc.slice(p.start - c.from, p.endB - c.from))), c.sel) {
    let A = qa(n, b.doc, c.sel);
    A && !(be && Ze && n.composing && A.empty && (p.start != p.endB || n.input.lastAndroidDelete < Date.now() - 100) && (A.head == w || A.head == b.mapping.map(C) - 1) || De && A.empty && A.head == w) && b.setSelection(A);
  }
  O && b.ensureMarks(O), o && b.setMeta("composition", o), n.dispatch(b.scrollIntoView());
}
function qa(n, e, t) {
  return Math.max(t.anchor, t.head) > e.content.size ? null : gl(n, e.resolve(t.anchor), e.resolve(t.head));
}
function Om(n, e) {
  let t = n.firstChild.marks, r = e.firstChild.marks, i = t, o = r, s, l, a;
  for (let d = 0; d < r.length; d++)
    i = r[d].removeFromSet(i);
  for (let d = 0; d < t.length; d++)
    o = t[d].removeFromSet(o);
  if (i.length == 1 && o.length == 0)
    l = i[0], s = "add", a = (d) => d.mark(l.addToSet(d.marks));
  else if (i.length == 0 && o.length == 1)
    l = o[0], s = "remove", a = (d) => d.mark(l.removeFromSet(d.marks));
  else
    return null;
  let c = [];
  for (let d = 0; d < e.childCount; d++)
    c.push(a(e.child(d)));
  if (x.from(c).eq(n))
    return { mark: l, type: s };
}
function Nm(n, e, t, r, i) {
  if (
    // The content must have shrunk
    t - e <= i.pos - r.pos || // newEnd must point directly at or after the end of the block that newStart points into
    ts(r, !0, !1) < i.pos
  )
    return !1;
  let o = n.resolve(e);
  if (!r.parent.isTextblock) {
    let l = o.nodeAfter;
    return l != null && t == e + l.nodeSize;
  }
  if (o.parentOffset < o.parent.content.size || !o.parent.isTextblock)
    return !1;
  let s = n.resolve(ts(o, !0, !0));
  return !s.parent.isTextblock || s.pos > t || ts(s, !0, !1) < t ? !1 : r.parent.content.cut(r.parentOffset).eq(s.parent.content);
}
function ts(n, e, t) {
  let r = n.depth, i = e ? n.end() : n.pos;
  for (; r > 0 && (e || n.indexAfter(r) == n.node(r).childCount); )
    r--, i++, e = !1;
  if (t) {
    let o = n.node(r).maybeChild(n.indexAfter(r));
    for (; o && !o.isLeaf; )
      o = o.firstChild, i++;
  }
  return i;
}
function Dm(n, e, t, r, i) {
  let o = n.findDiffStart(e, t);
  if (o == null)
    return null;
  let { a: s, b: l } = n.findDiffEnd(e, t + n.size, t + e.size);
  if (i == "end") {
    let a = Math.max(0, o - Math.min(s, l));
    r -= s + a - o;
  }
  if (s < o && n.size < e.size) {
    let a = r <= o && r >= s ? o - r : 0;
    o -= a, o && o < e.size && Ua(e.textBetween(o - 1, o + 1)) && (o += a ? 1 : -1), l = o + (l - s), s = o;
  } else if (l < o) {
    let a = r <= o && r >= l ? o - r : 0;
    o -= a, o && o < n.size && Ua(n.textBetween(o - 1, o + 1)) && (o += a ? 1 : -1), s = o + (s - l), l = o;
  }
  return { start: o, endA: s, endB: l };
}
function Ua(n) {
  if (n.length != 2)
    return !1;
  let e = n.charCodeAt(0), t = n.charCodeAt(1);
  return e >= 56320 && e <= 57343 && t >= 55296 && t <= 56319;
}
class Rm {
  /**
  Create a view. `place` may be a DOM node that the editor should
  be appended to, a function that will place it into the document,
  or an object whose `mount` property holds the node to use as the
  document container. If it is `null`, the editor will not be
  added to the document.
  */
  constructor(e, t) {
    this._root = null, this.focused = !1, this.trackWrites = null, this.mounted = !1, this.markCursor = null, this.cursorWrapper = null, this.lastSelectedViewDesc = void 0, this.input = new Xp(), this.prevDirectPlugins = [], this.pluginViews = [], this.requiresGeckoHackNode = !1, this.dragging = null, this._props = t, this.state = t.state, this.directPlugins = t.plugins || [], this.directPlugins.forEach(Qa), this.dispatch = this.dispatch.bind(this), this.dom = e && e.mount || document.createElement("div"), e && (e.appendChild ? e.appendChild(this.dom) : typeof e == "function" ? e(this.dom) : e.mount && (this.mounted = !0)), this.editable = Ya(this), Ga(this), this.nodeViews = Xa(this), this.docView = Ea(this.state.doc, Ja(this), es(this), this.dom, this), this.domObserver = new km(this, (r, i, o, s) => Em(this, r, i, o, s)), this.domObserver.start(), Qp(this), this.updatePluginViews();
  }
  /**
  Holds `true` when a
  [composition](https://w3c.github.io/uievents/#events-compositionevents)
  is active.
  */
  get composing() {
    return this.input.composing;
  }
  /**
  The view's current [props](https://prosemirror.net/docs/ref/#view.EditorProps).
  */
  get props() {
    if (this._props.state != this.state) {
      let e = this._props;
      this._props = {};
      for (let t in e)
        this._props[t] = e[t];
      this._props.state = this.state;
    }
    return this._props;
  }
  /**
  Update the view's props. Will immediately cause an update to
  the DOM.
  */
  update(e) {
    e.handleDOMEvents != this._props.handleDOMEvents && Bs(this);
    let t = this._props;
    this._props = e, e.plugins && (e.plugins.forEach(Qa), this.directPlugins = e.plugins), this.updateStateInner(e.state, t);
  }
  /**
  Update the view by updating existing props object with the object
  given as argument. Equivalent to `view.update(Object.assign({},
  view.props, props))`.
  */
  setProps(e) {
    let t = {};
    for (let r in this._props)
      t[r] = this._props[r];
    t.state = this.state;
    for (let r in e)
      t[r] = e[r];
    this.update(t);
  }
  /**
  Update the editor's `state` prop, without touching any of the
  other props.
  */
  updateState(e) {
    this.updateStateInner(e, this._props);
  }
  updateStateInner(e, t) {
    var r;
    let i = this.state, o = !1, s = !1;
    e.storedMarks && this.composing && (uu(this), s = !0), this.state = e;
    let l = i.plugins != e.plugins || this._props.plugins != t.plugins;
    if (l || this._props.plugins != t.plugins || this._props.nodeViews != t.nodeViews) {
      let h = Xa(this);
      Lm(h, this.nodeViews) && (this.nodeViews = h, o = !0);
    }
    (l || t.handleDOMEvents != this._props.handleDOMEvents) && Bs(this), this.editable = Ya(this), Ga(this);
    let a = es(this), c = Ja(this), d = i.plugins != e.plugins && !i.doc.eq(e.doc) ? "reset" : e.scrollToSelection > i.scrollToSelection ? "to selection" : "preserve", u = o || !this.docView.matchesNode(e.doc, c, a);
    (u || !e.selection.eq(i.selection)) && (s = !0);
    let f = d == "preserve" && s && this.dom.style.overflowAnchor == null && fp(this);
    if (s) {
      this.domObserver.stop();
      let h = u && (De || be) && !this.composing && !i.selection.empty && !e.selection.empty && Im(i.selection, e.selection);
      if (u) {
        let p = be ? this.trackWrites = this.domSelectionRange().focusNode : null;
        this.composing && (this.input.compositionNode = um(this)), (o || !this.docView.update(e.doc, c, a, this)) && (this.docView.updateOuterDeco(c), this.docView.destroy(), this.docView = Ea(e.doc, c, a, this.dom, this)), p && !this.trackWrites && (h = !0);
      }
      h || !(this.input.mouseDown && this.domObserver.currentSelection.eq(this.domSelectionRange()) && Bp(this)) ? Nt(this, h) : (Qd(this, e.selection), this.domObserver.setCurSelection()), this.domObserver.start();
    }
    this.updatePluginViews(i), !((r = this.dragging) === null || r === void 0) && r.node && !i.doc.eq(e.doc) && this.updateDraggedNode(this.dragging, i), d == "reset" ? this.dom.scrollTop = 0 : d == "to selection" ? this.scrollToSelection() : f && hp(f);
  }
  /**
  @internal
  */
  scrollToSelection() {
    let e = this.domSelectionRange().focusNode;
    if (!this.someProp("handleScrollToSelection", (t) => t(this)))
      if (this.state.selection instanceof R) {
        let t = this.docView.domAfterPos(this.state.selection.from);
        t.nodeType == 1 && xa(this, t.getBoundingClientRect(), e);
      } else
        xa(this, this.coordsAtPos(this.state.selection.head, 1), e);
  }
  destroyPluginViews() {
    let e;
    for (; e = this.pluginViews.pop(); )
      e.destroy && e.destroy();
  }
  updatePluginViews(e) {
    if (!e || e.plugins != this.state.plugins || this.directPlugins != this.prevDirectPlugins) {
      this.prevDirectPlugins = this.directPlugins, this.destroyPluginViews();
      for (let t = 0; t < this.directPlugins.length; t++) {
        let r = this.directPlugins[t];
        r.spec.view && this.pluginViews.push(r.spec.view(this));
      }
      for (let t = 0; t < this.state.plugins.length; t++) {
        let r = this.state.plugins[t];
        r.spec.view && this.pluginViews.push(r.spec.view(this));
      }
    } else
      for (let t = 0; t < this.pluginViews.length; t++) {
        let r = this.pluginViews[t];
        r.update && r.update(this, e);
      }
  }
  updateDraggedNode(e, t) {
    let r = e.node, i = -1;
    if (this.state.doc.nodeAt(r.from) == r.node)
      i = r.from;
    else {
      let o = r.from + (this.state.doc.content.size - t.doc.content.size);
      (o > 0 && this.state.doc.nodeAt(o)) == r.node && (i = o);
    }
    this.dragging = new hu(e.slice, e.move, i < 0 ? void 0 : R.create(this.state.doc, i));
  }
  someProp(e, t) {
    let r = this._props && this._props[e], i;
    if (r != null && (i = t ? t(r) : r))
      return i;
    for (let s = 0; s < this.directPlugins.length; s++) {
      let l = this.directPlugins[s].props[e];
      if (l != null && (i = t ? t(l) : l))
        return i;
    }
    let o = this.state.plugins;
    if (o)
      for (let s = 0; s < o.length; s++) {
        let l = o[s].props[e];
        if (l != null && (i = t ? t(l) : l))
          return i;
      }
  }
  /**
  Query whether the view has focus.
  */
  hasFocus() {
    if (De) {
      let e = this.root.activeElement;
      if (e == this.dom)
        return !0;
      if (!e || !this.dom.contains(e))
        return !1;
      for (; e && this.dom != e && this.dom.contains(e); ) {
        if (e.contentEditable == "false")
          return !1;
        e = e.parentElement;
      }
      return !0;
    }
    return this.root.activeElement == this.dom;
  }
  /**
  Focus the editor.
  */
  focus() {
    this.domObserver.stop(), this.editable && pp(this.dom), Nt(this), this.domObserver.start();
  }
  /**
  Get the document root in which the editor exists. This will
  usually be the top-level `document`, but might be a [shadow
  DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Shadow_DOM)
  root if the editor is inside one.
  */
  get root() {
    let e = this._root;
    if (e == null) {
      for (let t = this.dom.parentNode; t; t = t.parentNode)
        if (t.nodeType == 9 || t.nodeType == 11 && t.host)
          return t.getSelection || (Object.getPrototypeOf(t).getSelection = () => t.ownerDocument.getSelection()), this._root = t;
    }
    return e || document;
  }
  /**
  When an existing editor view is moved to a new document or
  shadow tree, call this to make it recompute its root.
  */
  updateRoot() {
    this._root = null;
  }
  /**
  Given a pair of viewport coordinates, return the document
  position that corresponds to them. May return null if the given
  coordinates aren't inside of the editor. When an object is
  returned, its `pos` property is the position nearest to the
  coordinates, and its `inside` property holds the position of the
  inner node that the position falls inside of, or -1 if it is at
  the top level, not in any node.
  */
  posAtCoords(e) {
    return vp(this, e);
  }
  /**
  Returns the viewport rectangle at a given document position.
  `left` and `right` will be the same number, as this returns a
  flat cursor-ish rectangle. If the position is between two things
  that aren't directly adjacent, `side` determines which element
  is used. When < 0, the element before the position is used,
  otherwise the element after.
  */
  coordsAtPos(e, t = 1) {
    return _d(this, e, t);
  }
  /**
  Find the DOM position that corresponds to the given document
  position. When `side` is negative, find the position as close as
  possible to the content before the position. When positive,
  prefer positions close to the content after the position. When
  zero, prefer as shallow a position as possible.

  Note that you should **not** mutate the editor's internal DOM,
  only inspect it (and even that is usually not necessary).
  */
  domAtPos(e, t = 0) {
    return this.docView.domFromPos(e, t);
  }
  /**
  Find the DOM node that represents the document node after the
  given position. May return `null` when the position doesn't point
  in front of a node or if the node is inside an opaque node view.

  This is intended to be able to call things like
  `getBoundingClientRect` on that DOM node. Do **not** mutate the
  editor DOM directly, or add styling this way, since that will be
  immediately overriden by the editor as it redraws the node.
  */
  nodeDOM(e) {
    let t = this.docView.descAt(e);
    return t ? t.nodeDOM : null;
  }
  /**
  Find the document position that corresponds to a given DOM
  position. (Whenever possible, it is preferable to inspect the
  document structure directly, rather than poking around in the
  DOM, but sometimes—for example when interpreting an event
  target—you don't have a choice.)

  The `bias` parameter can be used to influence which side of a DOM
  node to use when the position is inside a leaf node.
  */
  posAtDOM(e, t, r = -1) {
    let i = this.docView.posFromDOM(e, t, r);
    if (i == null)
      throw new RangeError("DOM position not inside the editor");
    return i;
  }
  /**
  Find out whether the selection is at the end of a textblock when
  moving in a given direction. When, for example, given `"left"`,
  it will return true if moving left from the current cursor
  position would leave that position's parent textblock. Will apply
  to the view's current state by default, but it is possible to
  pass a different state.
  */
  endOfTextblock(e, t) {
    return Sp(this, t || this.state, e);
  }
  /**
  Run the editor's paste logic with the given HTML string. The
  `event`, if given, will be passed to the
  [`handlePaste`](https://prosemirror.net/docs/ref/#view.EditorProps.handlePaste) hook.
  */
  pasteHTML(e, t) {
    return Lr(this, "", e, !1, t || new ClipboardEvent("paste"));
  }
  /**
  Run the editor's paste logic with the given plain-text input.
  */
  pasteText(e, t) {
    return Lr(this, e, null, !0, t || new ClipboardEvent("paste"));
  }
  /**
  Removes the editor from the DOM and destroys all [node
  views](https://prosemirror.net/docs/ref/#view.NodeView).
  */
  destroy() {
    this.docView && (Zp(this), this.destroyPluginViews(), this.mounted ? (this.docView.update(this.state.doc, [], es(this), this), this.dom.textContent = "") : this.dom.parentNode && this.dom.parentNode.removeChild(this.dom), this.docView.destroy(), this.docView = null, tp());
  }
  /**
  This is true when the view has been
  [destroyed](https://prosemirror.net/docs/ref/#view.EditorView.destroy) (and thus should not be
  used anymore).
  */
  get isDestroyed() {
    return this.docView == null;
  }
  /**
  Used for testing.
  */
  dispatchEvent(e) {
    return tm(this, e);
  }
  /**
  Dispatch a transaction. Will call
  [`dispatchTransaction`](https://prosemirror.net/docs/ref/#view.DirectEditorProps.dispatchTransaction)
  when given, and otherwise defaults to applying the transaction to
  the current state and calling
  [`updateState`](https://prosemirror.net/docs/ref/#view.EditorView.updateState) with the result.
  This method is bound to the view instance, so that it can be
  easily passed around.
  */
  dispatch(e) {
    let t = this._props.dispatchTransaction;
    t ? t.call(this, e) : this.updateState(this.state.apply(e));
  }
  /**
  @internal
  */
  domSelectionRange() {
    let e = this.domSelection();
    return e ? Te && this.root.nodeType === 11 && sp(this.dom.ownerDocument) == this.dom && Cm(this, e) || e : { focusNode: null, focusOffset: 0, anchorNode: null, anchorOffset: 0 };
  }
  /**
  @internal
  */
  domSelection() {
    return this.root.getSelection();
  }
}
function Ja(n) {
  let e = /* @__PURE__ */ Object.create(null);
  return e.class = "ProseMirror", e.contenteditable = String(n.editable), n.someProp("attributes", (t) => {
    if (typeof t == "function" && (t = t(n.state)), t)
      for (let r in t)
        r == "class" ? e.class += " " + t[r] : r == "style" ? e.style = (e.style ? e.style + ";" : "") + t[r] : !e[r] && r != "contenteditable" && r != "nodeName" && (e[r] = String(t[r]));
  }), e.translate || (e.translate = "no"), [ye.node(0, n.state.doc.content.size, e)];
}
function Ga(n) {
  if (n.markCursor) {
    let e = document.createElement("img");
    e.className = "ProseMirror-separator", e.setAttribute("mark-placeholder", "true"), e.setAttribute("alt", ""), n.cursorWrapper = { dom: e, deco: ye.widget(n.state.selection.from, e, { raw: !0, marks: n.markCursor }) };
  } else
    n.cursorWrapper = null;
}
function Ya(n) {
  return !n.someProp("editable", (e) => e(n.state) === !1);
}
function Im(n, e) {
  let t = Math.min(n.$anchor.sharedDepth(n.head), e.$anchor.sharedDepth(e.head));
  return n.$anchor.start(t) != e.$anchor.start(t);
}
function Xa(n) {
  let e = /* @__PURE__ */ Object.create(null);
  function t(r) {
    for (let i in r)
      Object.prototype.hasOwnProperty.call(e, i) || (e[i] = r[i]);
  }
  return n.someProp("nodeViews", t), n.someProp("markViews", t), e;
}
function Lm(n, e) {
  let t = 0, r = 0;
  for (let i in n) {
    if (n[i] != e[i])
      return !0;
    t++;
  }
  for (let i in e)
    r++;
  return t != r;
}
function Qa(n) {
  if (n.spec.state || n.spec.filterTransaction || n.spec.appendTransaction)
    throw new RangeError("Plugins passed directly to the view must not have a state component");
}
var Xt = {
  8: "Backspace",
  9: "Tab",
  10: "Enter",
  12: "NumLock",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  44: "PrintScreen",
  45: "Insert",
  46: "Delete",
  59: ";",
  61: "=",
  91: "Meta",
  92: "Meta",
  106: "*",
  107: "+",
  108: ",",
  109: "-",
  110: ".",
  111: "/",
  144: "NumLock",
  145: "ScrollLock",
  160: "Shift",
  161: "Shift",
  162: "Control",
  163: "Control",
  164: "Alt",
  165: "Alt",
  173: "-",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  219: "[",
  220: "\\",
  221: "]",
  222: "'"
}, Ki = {
  48: ")",
  49: "!",
  50: "@",
  51: "#",
  52: "$",
  53: "%",
  54: "^",
  55: "&",
  56: "*",
  57: "(",
  59: ":",
  61: "+",
  173: "_",
  186: ":",
  187: "+",
  188: "<",
  189: "_",
  190: ">",
  191: "?",
  192: "~",
  219: "{",
  220: "|",
  221: "}",
  222: '"'
}, Pm = typeof navigator < "u" && /Mac/.test(navigator.platform), Bm = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var ge = 0; ge < 10; ge++)
  Xt[48 + ge] = Xt[96 + ge] = String(ge);
for (var ge = 1; ge <= 24; ge++)
  Xt[ge + 111] = "F" + ge;
for (var ge = 65; ge <= 90; ge++)
  Xt[ge] = String.fromCharCode(ge + 32), Ki[ge] = String.fromCharCode(ge);
for (var ns in Xt)
  Ki.hasOwnProperty(ns) || (Ki[ns] = Xt[ns]);
function Hm(n) {
  var e = Pm && n.metaKey && n.shiftKey && !n.ctrlKey && !n.altKey || Bm && n.shiftKey && n.key && n.key.length == 1 || n.key == "Unidentified", t = !e && n.key || (n.shiftKey ? Ki : Xt)[n.keyCode] || n.key || "Unidentified";
  return t == "Esc" && (t = "Escape"), t == "Del" && (t = "Delete"), t == "Left" && (t = "ArrowLeft"), t == "Up" && (t = "ArrowUp"), t == "Right" && (t = "ArrowRight"), t == "Down" && (t = "ArrowDown"), t;
}
const zm = typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : !1;
function Vm(n) {
  let e = n.split(/-(?!$)/), t = e[e.length - 1];
  t == "Space" && (t = " ");
  let r, i, o, s;
  for (let l = 0; l < e.length - 1; l++) {
    let a = e[l];
    if (/^(cmd|meta|m)$/i.test(a))
      s = !0;
    else if (/^a(lt)?$/i.test(a))
      r = !0;
    else if (/^(c|ctrl|control)$/i.test(a))
      i = !0;
    else if (/^s(hift)?$/i.test(a))
      o = !0;
    else if (/^mod$/i.test(a))
      zm ? s = !0 : i = !0;
    else
      throw new Error("Unrecognized modifier name: " + a);
  }
  return r && (t = "Alt-" + t), i && (t = "Ctrl-" + t), s && (t = "Meta-" + t), o && (t = "Shift-" + t), t;
}
function Fm(n) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t in n)
    e[Vm(t)] = n[t];
  return e;
}
function rs(n, e, t = !0) {
  return e.altKey && (n = "Alt-" + n), e.ctrlKey && (n = "Ctrl-" + n), e.metaKey && (n = "Meta-" + n), t && e.shiftKey && (n = "Shift-" + n), n;
}
function $m(n) {
  return new X({ props: { handleKeyDown: xl(n) } });
}
function xl(n) {
  let e = Fm(n);
  return function(t, r) {
    let i = Hm(r), o, s = e[rs(i, r)];
    if (s && s(t.state, t.dispatch, t))
      return !0;
    if (i.length == 1 && i != " ") {
      if (r.shiftKey) {
        let l = e[rs(i, r, !1)];
        if (l && l(t.state, t.dispatch, t))
          return !0;
      }
      if ((r.shiftKey || r.altKey || r.metaKey || i.charCodeAt(0) > 127) && (o = Xt[r.keyCode]) && o != i) {
        let l = e[rs(o, r)];
        if (l && l(t.state, t.dispatch, t))
          return !0;
      }
    }
    return !1;
  };
}
const jm = (n, e) => n.selection.empty ? !1 : (e && e(n.tr.deleteSelection().scrollIntoView()), !0);
function wu(n, e) {
  let { $cursor: t } = n.selection;
  return !t || (e ? !e.endOfTextblock("backward", n) : t.parentOffset > 0) ? null : t;
}
const Wm = (n, e, t) => {
  let r = wu(n, t);
  if (!r)
    return !1;
  let i = Cl(r);
  if (!i) {
    let s = r.blockRange(), l = s && tr(s);
    return l == null ? !1 : (e && e(n.tr.lift(s, l).scrollIntoView()), !0);
  }
  let o = i.nodeBefore;
  if (xu(n, i, e, -1))
    return !0;
  if (r.parent.content.size == 0 && (Jn(o, "end") || R.isSelectable(o)))
    for (let s = r.depth; ; s--) {
      let l = To(n.doc, r.before(s), r.after(s), T.empty);
      if (l && l.slice.size < l.to - l.from) {
        if (e) {
          let a = n.tr.step(l);
          a.setSelection(Jn(o, "end") ? I.findFrom(a.doc.resolve(a.mapping.map(i.pos, -1)), -1) : R.create(a.doc, i.pos - o.nodeSize)), e(a.scrollIntoView());
        }
        return !0;
      }
      if (s == 1 || r.node(s - 1).childCount > 1)
        break;
    }
  return o.isAtom && i.depth == r.depth - 1 ? (e && e(n.tr.delete(i.pos - o.nodeSize, i.pos).scrollIntoView()), !0) : !1;
}, _m = (n, e, t) => {
  let r = wu(n, t);
  if (!r)
    return !1;
  let i = Cl(r);
  return i ? vu(n, i, e) : !1;
}, Km = (n, e, t) => {
  let r = bu(n, t);
  if (!r)
    return !1;
  let i = Sl(r);
  return i ? vu(n, i, e) : !1;
};
function vu(n, e, t) {
  let r = e.nodeBefore, i = r, o = e.pos - 1;
  for (; !i.isTextblock; o--) {
    if (i.type.spec.isolating)
      return !1;
    let d = i.lastChild;
    if (!d)
      return !1;
    i = d;
  }
  let s = e.nodeAfter, l = s, a = e.pos + 1;
  for (; !l.isTextblock; a++) {
    if (l.type.spec.isolating)
      return !1;
    let d = l.firstChild;
    if (!d)
      return !1;
    l = d;
  }
  let c = To(n.doc, o, a, T.empty);
  if (!c || c.from != o || c instanceof ae && c.slice.size >= a - o)
    return !1;
  if (t) {
    let d = n.tr.step(c);
    d.setSelection(D.create(d.doc, o)), t(d.scrollIntoView());
  }
  return !0;
}
function Jn(n, e, t = !1) {
  for (let r = n; r; r = e == "start" ? r.firstChild : r.lastChild) {
    if (r.isTextblock)
      return !0;
    if (t && r.childCount != 1)
      return !1;
  }
  return !1;
}
const qm = (n, e, t) => {
  let { $head: r, empty: i } = n.selection, o = r;
  if (!i)
    return !1;
  if (r.parent.isTextblock) {
    if (t ? !t.endOfTextblock("backward", n) : r.parentOffset > 0)
      return !1;
    o = Cl(r);
  }
  let s = o && o.nodeBefore;
  return !s || !R.isSelectable(s) ? !1 : (e && e(n.tr.setSelection(R.create(n.doc, o.pos - s.nodeSize)).scrollIntoView()), !0);
};
function Cl(n) {
  if (!n.parent.type.spec.isolating)
    for (let e = n.depth - 1; e >= 0; e--) {
      if (n.index(e) > 0)
        return n.doc.resolve(n.before(e + 1));
      if (n.node(e).type.spec.isolating)
        break;
    }
  return null;
}
function bu(n, e) {
  let { $cursor: t } = n.selection;
  return !t || (e ? !e.endOfTextblock("forward", n) : t.parentOffset < t.parent.content.size) ? null : t;
}
const Um = (n, e, t) => {
  let r = bu(n, t);
  if (!r)
    return !1;
  let i = Sl(r);
  if (!i)
    return !1;
  let o = i.nodeAfter;
  if (xu(n, i, e, 1))
    return !0;
  if (r.parent.content.size == 0 && (Jn(o, "start") || R.isSelectable(o))) {
    let s = To(n.doc, r.before(), r.after(), T.empty);
    if (s && s.slice.size < s.to - s.from) {
      if (e) {
        let l = n.tr.step(s);
        l.setSelection(Jn(o, "start") ? I.findFrom(l.doc.resolve(l.mapping.map(i.pos)), 1) : R.create(l.doc, l.mapping.map(i.pos))), e(l.scrollIntoView());
      }
      return !0;
    }
  }
  return o.isAtom && i.depth == r.depth - 1 ? (e && e(n.tr.delete(i.pos, i.pos + o.nodeSize).scrollIntoView()), !0) : !1;
}, Jm = (n, e, t) => {
  let { $head: r, empty: i } = n.selection, o = r;
  if (!i)
    return !1;
  if (r.parent.isTextblock) {
    if (t ? !t.endOfTextblock("forward", n) : r.parentOffset < r.parent.content.size)
      return !1;
    o = Sl(r);
  }
  let s = o && o.nodeAfter;
  return !s || !R.isSelectable(s) ? !1 : (e && e(n.tr.setSelection(R.create(n.doc, o.pos)).scrollIntoView()), !0);
};
function Sl(n) {
  if (!n.parent.type.spec.isolating)
    for (let e = n.depth - 1; e >= 0; e--) {
      let t = n.node(e);
      if (n.index(e) + 1 < t.childCount)
        return n.doc.resolve(n.after(e + 1));
      if (t.type.spec.isolating)
        break;
    }
  return null;
}
const Gm = (n, e) => {
  let t = n.selection, r = t instanceof R, i;
  if (r) {
    if (t.node.isTextblock || !Zt(n.doc, t.from))
      return !1;
    i = t.from;
  } else if (i = Mo(n.doc, t.from, -1), i == null)
    return !1;
  if (e) {
    let o = n.tr.join(i);
    r && o.setSelection(R.create(o.doc, i - n.doc.resolve(i).nodeBefore.nodeSize)), e(o.scrollIntoView());
  }
  return !0;
}, Ym = (n, e) => {
  let t = n.selection, r;
  if (t instanceof R) {
    if (t.node.isTextblock || !Zt(n.doc, t.to))
      return !1;
    r = t.to;
  } else if (r = Mo(n.doc, t.to, 1), r == null)
    return !1;
  return e && e(n.tr.join(r).scrollIntoView()), !0;
}, Xm = (n, e) => {
  let { $from: t, $to: r } = n.selection, i = t.blockRange(r), o = i && tr(i);
  return o == null ? !1 : (e && e(n.tr.lift(i, o).scrollIntoView()), !0);
}, Qm = (n, e) => {
  let { $head: t, $anchor: r } = n.selection;
  return !t.parent.type.spec.code || !t.sameParent(r) ? !1 : (e && e(n.tr.insertText(`
`).scrollIntoView()), !0);
};
function ku(n) {
  for (let e = 0; e < n.edgeCount; e++) {
    let { type: t } = n.edge(e);
    if (t.isTextblock && !t.hasRequiredAttrs())
      return t;
  }
  return null;
}
const Zm = (n, e) => {
  let { $head: t, $anchor: r } = n.selection;
  if (!t.parent.type.spec.code || !t.sameParent(r))
    return !1;
  let i = t.node(-1), o = t.indexAfter(-1), s = ku(i.contentMatchAt(o));
  if (!s || !i.canReplaceWith(o, o, s))
    return !1;
  if (e) {
    let l = t.after(), a = n.tr.replaceWith(l, l, s.createAndFill());
    a.setSelection(I.near(a.doc.resolve(l), 1)), e(a.scrollIntoView());
  }
  return !0;
}, eg = (n, e) => {
  let t = n.selection, { $from: r, $to: i } = t;
  if (t instanceof tt || r.parent.inlineContent || i.parent.inlineContent)
    return !1;
  let o = ku(i.parent.contentMatchAt(i.indexAfter()));
  if (!o || !o.isTextblock)
    return !1;
  if (e) {
    let s = (!r.parentOffset && i.index() < i.parent.childCount ? r : i).pos, l = n.tr.insert(s, o.createAndFill());
    l.setSelection(D.create(l.doc, s + 1)), e(l.scrollIntoView());
  }
  return !0;
}, tg = (n, e) => {
  let { $cursor: t } = n.selection;
  if (!t || t.parent.content.size)
    return !1;
  if (t.depth > 1 && t.after() != t.end(-1)) {
    let o = t.before();
    if (jn(n.doc, o))
      return e && e(n.tr.split(o).scrollIntoView()), !0;
  }
  let r = t.blockRange(), i = r && tr(r);
  return i == null ? !1 : (e && e(n.tr.lift(r, i).scrollIntoView()), !0);
}, ng = (n, e) => {
  let { $from: t, to: r } = n.selection, i, o = t.sharedDepth(r);
  return o == 0 ? !1 : (i = t.before(o), e && e(n.tr.setSelection(R.create(n.doc, i))), !0);
};
function rg(n, e, t) {
  let r = e.nodeBefore, i = e.nodeAfter, o = e.index();
  return !r || !i || !r.type.compatibleContent(i.type) ? !1 : !r.content.size && e.parent.canReplace(o - 1, o) ? (t && t(n.tr.delete(e.pos - r.nodeSize, e.pos).scrollIntoView()), !0) : !e.parent.canReplace(o, o + 1) || !(i.isTextblock || Zt(n.doc, e.pos)) ? !1 : (t && t(n.tr.join(e.pos).scrollIntoView()), !0);
}
function xu(n, e, t, r) {
  let i = e.nodeBefore, o = e.nodeAfter, s, l, a = i.type.spec.isolating || o.type.spec.isolating;
  if (!a && rg(n, e, t))
    return !0;
  let c = !a && e.parent.canReplace(e.index(), e.index() + 1);
  if (c && (s = (l = i.contentMatchAt(i.childCount)).findWrapping(o.type)) && l.matchType(s[0] || o.type).validEnd) {
    if (t) {
      let h = e.pos + o.nodeSize, p = x.empty;
      for (let y = s.length - 1; y >= 0; y--)
        p = x.from(s[y].create(null, p));
      p = x.from(i.copy(p));
      let g = n.tr.step(new ue(e.pos - 1, h, e.pos, h, new T(p, 1, 0), s.length, !0)), m = g.doc.resolve(h + 2 * s.length);
      m.nodeAfter && m.nodeAfter.type == i.type && Zt(g.doc, m.pos) && g.join(m.pos), t(g.scrollIntoView());
    }
    return !0;
  }
  let d = o.type.spec.isolating || r > 0 && a ? null : I.findFrom(e, 1), u = d && d.$from.blockRange(d.$to), f = u && tr(u);
  if (f != null && f >= e.depth)
    return t && t(n.tr.lift(u, f).scrollIntoView()), !0;
  if (c && Jn(o, "start", !0) && Jn(i, "end")) {
    let h = i, p = [];
    for (; p.push(h), !h.isTextblock; )
      h = h.lastChild;
    let g = o, m = 1;
    for (; !g.isTextblock; g = g.firstChild)
      m++;
    if (h.canReplace(h.childCount, h.childCount, g.content)) {
      if (t) {
        let y = x.empty;
        for (let S = p.length - 1; S >= 0; S--)
          y = x.from(p[S].copy(y));
        let v = n.tr.step(new ue(e.pos - p.length, e.pos + o.nodeSize, e.pos + m, e.pos + o.nodeSize - m, new T(y, p.length, 0), 0, !0));
        t(v.scrollIntoView());
      }
      return !0;
    }
  }
  return !1;
}
function Cu(n) {
  return function(e, t) {
    let r = e.selection, i = n < 0 ? r.$from : r.$to, o = i.depth;
    for (; i.node(o).isInline; ) {
      if (!o)
        return !1;
      o--;
    }
    return i.node(o).isTextblock ? (t && t(e.tr.setSelection(D.create(e.doc, n < 0 ? i.start(o) : i.end(o)))), !0) : !1;
  };
}
const ig = Cu(-1), og = Cu(1);
function sg(n, e = null) {
  return function(t, r) {
    let { $from: i, $to: o } = t.selection, s = i.blockRange(o), l = s && ul(s, n, e);
    return l ? (r && r(t.tr.wrap(s, l).scrollIntoView()), !0) : !1;
  };
}
function Za(n, e = null) {
  return function(t, r) {
    let i = !1;
    for (let o = 0; o < t.selection.ranges.length && !i; o++) {
      let { $from: { pos: s }, $to: { pos: l } } = t.selection.ranges[o];
      t.doc.nodesBetween(s, l, (a, c) => {
        if (i)
          return !1;
        if (!(!a.isTextblock || a.hasMarkup(n, e)))
          if (a.type == n)
            i = !0;
          else {
            let d = t.doc.resolve(c), u = d.index();
            i = d.parent.canReplaceWith(u, u + 1, n);
          }
      });
    }
    if (!i)
      return !1;
    if (r) {
      let o = t.tr;
      for (let s = 0; s < t.selection.ranges.length; s++) {
        let { $from: { pos: l }, $to: { pos: a } } = t.selection.ranges[s];
        o.setBlockType(l, a, n, e);
      }
      r(o.scrollIntoView());
    }
    return !0;
  };
}
typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : typeof os < "u" && os.platform && os.platform() == "darwin";
function lg(n, e = null) {
  return function(t, r) {
    let { $from: i, $to: o } = t.selection, s = i.blockRange(o);
    if (!s)
      return !1;
    let l = r ? t.tr : null;
    return ag(l, s, n, e) ? (r && r(l.scrollIntoView()), !0) : !1;
  };
}
function ag(n, e, t, r = null) {
  let i = !1, o = e, s = e.$from.doc;
  if (e.depth >= 2 && e.$from.node(e.depth - 1).type.compatibleContent(t) && e.startIndex == 0) {
    if (e.$from.index(e.depth - 1) == 0)
      return !1;
    let a = s.resolve(e.start - 2);
    o = new Bi(a, a, e.depth), e.endIndex < e.parent.childCount && (e = new Bi(e.$from, s.resolve(e.$to.end(e.depth)), e.depth)), i = !0;
  }
  let l = ul(o, t, r, e);
  return l ? (n && cg(n, e, l, i, t), !0) : !1;
}
function cg(n, e, t, r, i) {
  let o = x.empty;
  for (let d = t.length - 1; d >= 0; d--)
    o = x.from(t[d].type.create(t[d].attrs, o));
  n.step(new ue(e.start - (r ? 2 : 0), e.end, e.start, e.end, new T(o, 0, 0), t.length, !0));
  let s = 0;
  for (let d = 0; d < t.length; d++)
    t[d].type == i && (s = d + 1);
  let l = t.length - s, a = e.start + t.length - (r ? 2 : 0), c = e.parent;
  for (let d = e.startIndex, u = e.endIndex, f = !0; d < u; d++, f = !1)
    !f && jn(n.doc, a, l) && (n.split(a, l), a += 2 * l), a += c.child(d).nodeSize;
  return n;
}
function dg(n) {
  return function(e, t) {
    let { $from: r, $to: i } = e.selection, o = r.blockRange(i, (s) => s.childCount > 0 && s.firstChild.type == n);
    return o ? t ? r.node(o.depth - 1).type == n ? ug(e, t, n, o) : fg(e, t, o) : !0 : !1;
  };
}
function ug(n, e, t, r) {
  let i = n.tr, o = r.end, s = r.$to.end(r.depth);
  o < s && (i.step(new ue(o - 1, s, o, s, new T(x.from(t.create(null, r.parent.copy())), 1, 0), 1, !0)), r = new Bi(i.doc.resolve(r.$from.pos), i.doc.resolve(s), r.depth));
  const l = tr(r);
  if (l == null)
    return !1;
  i.lift(r, l);
  let a = i.mapping.map(o, -1) - 1;
  return Zt(i.doc, a) && i.join(a), e(i.scrollIntoView()), !0;
}
function fg(n, e, t) {
  let r = n.tr, i = t.parent;
  for (let h = t.end, p = t.endIndex - 1, g = t.startIndex; p > g; p--)
    h -= i.child(p).nodeSize, r.delete(h - 1, h + 1);
  let o = r.doc.resolve(t.start), s = o.nodeAfter;
  if (r.mapping.map(t.end) != t.start + o.nodeAfter.nodeSize)
    return !1;
  let l = t.startIndex == 0, a = t.endIndex == i.childCount, c = o.node(-1), d = o.index(-1);
  if (!c.canReplace(d + (l ? 0 : 1), d + 1, s.content.append(a ? x.empty : x.from(i))))
    return !1;
  let u = o.pos, f = u + s.nodeSize;
  return r.step(new ue(u - (l ? 1 : 0), f + (a ? 1 : 0), u + 1, f - 1, new T((l ? x.empty : x.from(i.copy(x.empty))).append(a ? x.empty : x.from(i.copy(x.empty))), l ? 0 : 1, a ? 0 : 1), l ? 0 : 1)), e(r.scrollIntoView()), !0;
}
function hg(n) {
  return function(e, t) {
    let { $from: r, $to: i } = e.selection, o = r.blockRange(i, (c) => c.childCount > 0 && c.firstChild.type == n);
    if (!o)
      return !1;
    let s = o.startIndex;
    if (s == 0)
      return !1;
    let l = o.parent, a = l.child(s - 1);
    if (a.type != n)
      return !1;
    if (t) {
      let c = a.lastChild && a.lastChild.type == l.type, d = x.from(c ? n.create() : null), u = new T(x.from(n.create(null, x.from(l.type.create(null, d)))), c ? 3 : 1, 0), f = o.start, h = o.end;
      t(e.tr.step(new ue(f - (c ? 3 : 1), h, f, h, u, 1, !0)).scrollIntoView());
    }
    return !0;
  };
}
function Do(n) {
  const { state: e, transaction: t } = n;
  let { selection: r } = t, { doc: i } = t, { storedMarks: o } = t;
  return {
    ...e,
    apply: e.apply.bind(e),
    applyTransaction: e.applyTransaction.bind(e),
    plugins: e.plugins,
    schema: e.schema,
    reconfigure: e.reconfigure.bind(e),
    toJSON: e.toJSON.bind(e),
    get storedMarks() {
      return o;
    },
    get selection() {
      return r;
    },
    get doc() {
      return i;
    },
    get tr() {
      return r = t.selection, i = t.doc, o = t.storedMarks, t;
    }
  };
}
class Ro {
  constructor(e) {
    this.editor = e.editor, this.rawCommands = this.editor.extensionManager.commands, this.customState = e.state;
  }
  get hasCustomState() {
    return !!this.customState;
  }
  get state() {
    return this.customState || this.editor.state;
  }
  get commands() {
    const { rawCommands: e, editor: t, state: r } = this, { view: i } = t, { tr: o } = r, s = this.buildProps(o);
    return Object.fromEntries(Object.entries(e).map(([l, a]) => [l, (...d) => {
      const u = a(...d)(s);
      return !o.getMeta("preventDispatch") && !this.hasCustomState && i.dispatch(o), u;
    }]));
  }
  get chain() {
    return () => this.createChain();
  }
  get can() {
    return () => this.createCan();
  }
  createChain(e, t = !0) {
    const { rawCommands: r, editor: i, state: o } = this, { view: s } = i, l = [], a = !!e, c = e || o.tr, d = () => (!a && t && !c.getMeta("preventDispatch") && !this.hasCustomState && s.dispatch(c), l.every((f) => f === !0)), u = {
      ...Object.fromEntries(Object.entries(r).map(([f, h]) => [f, (...g) => {
        const m = this.buildProps(c, t), y = h(...g)(m);
        return l.push(y), u;
      }])),
      run: d
    };
    return u;
  }
  createCan(e) {
    const { rawCommands: t, state: r } = this, i = !1, o = e || r.tr, s = this.buildProps(o, i);
    return {
      ...Object.fromEntries(Object.entries(t).map(([a, c]) => [a, (...d) => c(...d)({ ...s, dispatch: void 0 })])),
      chain: () => this.createChain(o, i)
    };
  }
  buildProps(e, t = !0) {
    const { rawCommands: r, editor: i, state: o } = this, { view: s } = i, l = {
      tr: e,
      editor: i,
      view: s,
      state: Do({
        state: o,
        transaction: e
      }),
      dispatch: t ? () => {
      } : void 0,
      chain: () => this.createChain(e, t),
      can: () => this.createCan(e),
      get commands() {
        return Object.fromEntries(Object.entries(r).map(([a, c]) => [a, (...d) => c(...d)(l)]));
      }
    };
    return l;
  }
}
class pg {
  constructor() {
    this.callbacks = {};
  }
  on(e, t) {
    return this.callbacks[e] || (this.callbacks[e] = []), this.callbacks[e].push(t), this;
  }
  emit(e, ...t) {
    const r = this.callbacks[e];
    return r && r.forEach((i) => i.apply(this, t)), this;
  }
  off(e, t) {
    const r = this.callbacks[e];
    return r && (t ? this.callbacks[e] = r.filter((i) => i !== t) : delete this.callbacks[e]), this;
  }
  once(e, t) {
    const r = (...i) => {
      this.off(e, r), t.apply(this, i);
    };
    return this.on(e, r);
  }
  removeAllListeners() {
    this.callbacks = {};
  }
}
function E(n, e, t) {
  return n.config[e] === void 0 && n.parent ? E(n.parent, e, t) : typeof n.config[e] == "function" ? n.config[e].bind({
    ...t,
    parent: n.parent ? E(n.parent, e, t) : null
  }) : n.config[e];
}
function Io(n) {
  const e = n.filter((i) => i.type === "extension"), t = n.filter((i) => i.type === "node"), r = n.filter((i) => i.type === "mark");
  return {
    baseExtensions: e,
    nodeExtensions: t,
    markExtensions: r
  };
}
function Su(n) {
  const e = [], { nodeExtensions: t, markExtensions: r } = Io(n), i = [...t, ...r], o = {
    default: null,
    rendered: !0,
    renderHTML: null,
    parseHTML: null,
    keepOnSplit: !0,
    isRequired: !1
  };
  return n.forEach((s) => {
    const l = {
      name: s.name,
      options: s.options,
      storage: s.storage,
      extensions: i
    }, a = E(s, "addGlobalAttributes", l);
    if (!a)
      return;
    a().forEach((d) => {
      d.types.forEach((u) => {
        Object.entries(d.attributes).forEach(([f, h]) => {
          e.push({
            type: u,
            name: f,
            attribute: {
              ...o,
              ...h
            }
          });
        });
      });
    });
  }), i.forEach((s) => {
    const l = {
      name: s.name,
      options: s.options,
      storage: s.storage
    }, a = E(s, "addAttributes", l);
    if (!a)
      return;
    const c = a();
    Object.entries(c).forEach(([d, u]) => {
      const f = {
        ...o,
        ...u
      };
      typeof (f == null ? void 0 : f.default) == "function" && (f.default = f.default()), f != null && f.isRequired && (f == null ? void 0 : f.default) === void 0 && delete f.default, e.push({
        type: s.name,
        name: d,
        attribute: f
      });
    });
  }), e;
}
function he(n, e) {
  if (typeof n == "string") {
    if (!e.nodes[n])
      throw Error(`There is no node type named '${n}'. Maybe you forgot to add the extension?`);
    return e.nodes[n];
  }
  return n;
}
function Y(...n) {
  return n.filter((e) => !!e).reduce((e, t) => {
    const r = { ...e };
    return Object.entries(t).forEach(([i, o]) => {
      if (!r[i]) {
        r[i] = o;
        return;
      }
      if (i === "class") {
        const l = o ? o.split(" ") : [], a = r[i] ? r[i].split(" ") : [], c = l.filter((d) => !a.includes(d));
        r[i] = [...a, ...c].join(" ");
      } else if (i === "style") {
        const l = o ? o.split(";").map((d) => d.trim()).filter(Boolean) : [], a = r[i] ? r[i].split(";").map((d) => d.trim()).filter(Boolean) : [], c = /* @__PURE__ */ new Map();
        a.forEach((d) => {
          const [u, f] = d.split(":").map((h) => h.trim());
          c.set(u, f);
        }), l.forEach((d) => {
          const [u, f] = d.split(":").map((h) => h.trim());
          c.set(u, f);
        }), r[i] = Array.from(c.entries()).map(([d, u]) => `${d}: ${u}`).join("; ");
      } else
        r[i] = o;
    }), r;
  }, {});
}
function Hs(n, e) {
  return e.filter((t) => t.type === n.type.name).filter((t) => t.attribute.rendered).map((t) => t.attribute.renderHTML ? t.attribute.renderHTML(n.attrs) || {} : {
    [t.name]: n.attrs[t.name]
  }).reduce((t, r) => Y(t, r), {});
}
function Mu(n) {
  return typeof n == "function";
}
function H(n, e = void 0, ...t) {
  return Mu(n) ? e ? n.bind(e)(...t) : n(...t) : n;
}
function mg(n = {}) {
  return Object.keys(n).length === 0 && n.constructor === Object;
}
function gg(n) {
  return typeof n != "string" ? n : n.match(/^[+-]?(?:\d*\.)?\d+$/) ? Number(n) : n === "true" ? !0 : n === "false" ? !1 : n;
}
function ec(n, e) {
  return "style" in n ? n : {
    ...n,
    getAttrs: (t) => {
      const r = n.getAttrs ? n.getAttrs(t) : n.attrs;
      if (r === !1)
        return !1;
      const i = e.reduce((o, s) => {
        const l = s.attribute.parseHTML ? s.attribute.parseHTML(t) : gg(t.getAttribute(s.name));
        return l == null ? o : {
          ...o,
          [s.name]: l
        };
      }, {});
      return { ...r, ...i };
    }
  };
}
function tc(n) {
  return Object.fromEntries(
    // @ts-ignore
    Object.entries(n).filter(([e, t]) => e === "attrs" && mg(t) ? !1 : t != null)
  );
}
function yg(n, e) {
  var t;
  const r = Su(n), { nodeExtensions: i, markExtensions: o } = Io(n), s = (t = i.find((c) => E(c, "topNode"))) === null || t === void 0 ? void 0 : t.name, l = Object.fromEntries(i.map((c) => {
    const d = r.filter((y) => y.type === c.name), u = {
      name: c.name,
      options: c.options,
      storage: c.storage,
      editor: e
    }, f = n.reduce((y, v) => {
      const S = E(v, "extendNodeSchema", u);
      return {
        ...y,
        ...S ? S(c) : {}
      };
    }, {}), h = tc({
      ...f,
      content: H(E(c, "content", u)),
      marks: H(E(c, "marks", u)),
      group: H(E(c, "group", u)),
      inline: H(E(c, "inline", u)),
      atom: H(E(c, "atom", u)),
      selectable: H(E(c, "selectable", u)),
      draggable: H(E(c, "draggable", u)),
      code: H(E(c, "code", u)),
      whitespace: H(E(c, "whitespace", u)),
      linebreakReplacement: H(E(c, "linebreakReplacement", u)),
      defining: H(E(c, "defining", u)),
      isolating: H(E(c, "isolating", u)),
      attrs: Object.fromEntries(d.map((y) => {
        var v;
        return [y.name, { default: (v = y == null ? void 0 : y.attribute) === null || v === void 0 ? void 0 : v.default }];
      }))
    }), p = H(E(c, "parseHTML", u));
    p && (h.parseDOM = p.map((y) => ec(y, d)));
    const g = E(c, "renderHTML", u);
    g && (h.toDOM = (y) => g({
      node: y,
      HTMLAttributes: Hs(y, d)
    }));
    const m = E(c, "renderText", u);
    return m && (h.toText = m), [c.name, h];
  })), a = Object.fromEntries(o.map((c) => {
    const d = r.filter((m) => m.type === c.name), u = {
      name: c.name,
      options: c.options,
      storage: c.storage,
      editor: e
    }, f = n.reduce((m, y) => {
      const v = E(y, "extendMarkSchema", u);
      return {
        ...m,
        ...v ? v(c) : {}
      };
    }, {}), h = tc({
      ...f,
      inclusive: H(E(c, "inclusive", u)),
      excludes: H(E(c, "excludes", u)),
      group: H(E(c, "group", u)),
      spanning: H(E(c, "spanning", u)),
      code: H(E(c, "code", u)),
      attrs: Object.fromEntries(d.map((m) => {
        var y;
        return [m.name, { default: (y = m == null ? void 0 : m.attribute) === null || y === void 0 ? void 0 : y.default }];
      }))
    }), p = H(E(c, "parseHTML", u));
    p && (h.parseDOM = p.map((m) => ec(m, d)));
    const g = E(c, "renderHTML", u);
    return g && (h.toDOM = (m) => g({
      mark: m,
      HTMLAttributes: Hs(m, d)
    })), [c.name, h];
  }));
  return new vd({
    topNode: s,
    nodes: l,
    marks: a
  });
}
function is(n, e) {
  return e.nodes[n] || e.marks[n] || null;
}
function nc(n, e) {
  return Array.isArray(e) ? e.some((t) => (typeof t == "string" ? t : t.name) === n.name) : e;
}
function Ml(n, e) {
  const t = Mn.fromSchema(e).serializeFragment(n), i = document.implementation.createHTMLDocument().createElement("div");
  return i.appendChild(t), i.innerHTML;
}
const wg = (n, e = 500) => {
  let t = "";
  const r = n.parentOffset;
  return n.parent.nodesBetween(Math.max(0, r - e), r, (i, o, s, l) => {
    var a, c;
    const d = ((c = (a = i.type.spec).toText) === null || c === void 0 ? void 0 : c.call(a, {
      node: i,
      pos: o,
      parent: s,
      index: l
    })) || i.textContent || "%leaf%";
    t += i.isAtom && !i.isText ? d : d.slice(0, Math.max(0, r - o));
  }), t;
};
function Tl(n) {
  return Object.prototype.toString.call(n) === "[object RegExp]";
}
class Lo {
  constructor(e) {
    this.find = e.find, this.handler = e.handler;
  }
}
const vg = (n, e) => {
  if (Tl(e))
    return e.exec(n);
  const t = e(n);
  if (!t)
    return null;
  const r = [t.text];
  return r.index = t.index, r.input = n, r.data = t.data, t.replaceWith && (t.text.includes(t.replaceWith) || console.warn('[tiptap warn]: "inputRuleMatch.replaceWith" must be part of "inputRuleMatch.text".'), r.push(t.replaceWith)), r;
};
function fi(n) {
  var e;
  const { editor: t, from: r, to: i, text: o, rules: s, plugin: l } = n, { view: a } = t;
  if (a.composing)
    return !1;
  const c = a.state.doc.resolve(r);
  if (
    // check for code node
    c.parent.type.spec.code || !((e = c.nodeBefore || c.nodeAfter) === null || e === void 0) && e.marks.find((f) => f.type.spec.code)
  )
    return !1;
  let d = !1;
  const u = wg(c) + o;
  return s.forEach((f) => {
    if (d)
      return;
    const h = vg(u, f.find);
    if (!h)
      return;
    const p = a.state.tr, g = Do({
      state: a.state,
      transaction: p
    }), m = {
      from: r - (h[0].length - o.length),
      to: i
    }, { commands: y, chain: v, can: S } = new Ro({
      editor: t,
      state: g
    });
    f.handler({
      state: g,
      range: m,
      match: h,
      commands: y,
      chain: v,
      can: S
    }) === null || !p.steps.length || (p.setMeta(l, {
      transform: p,
      from: r,
      to: i,
      text: o
    }), a.dispatch(p), d = !0);
  }), d;
}
function bg(n) {
  const { editor: e, rules: t } = n, r = new X({
    state: {
      init() {
        return null;
      },
      apply(i, o, s) {
        const l = i.getMeta(r);
        if (l)
          return l;
        const a = i.getMeta("applyInputRules");
        return !!a && setTimeout(() => {
          let { text: d } = a;
          typeof d == "string" ? d = d : d = Ml(x.from(d), s.schema);
          const { from: u } = a, f = u + d.length;
          fi({
            editor: e,
            from: u,
            to: f,
            text: d,
            rules: t,
            plugin: r
          });
        }), i.selectionSet || i.docChanged ? null : o;
      }
    },
    props: {
      handleTextInput(i, o, s, l) {
        return fi({
          editor: e,
          from: o,
          to: s,
          text: l,
          rules: t,
          plugin: r
        });
      },
      handleDOMEvents: {
        compositionend: (i) => (setTimeout(() => {
          const { $cursor: o } = i.state.selection;
          o && fi({
            editor: e,
            from: o.pos,
            to: o.pos,
            text: "",
            rules: t,
            plugin: r
          });
        }), !1)
      },
      // add support for input rules to trigger on enter
      // this is useful for example for code blocks
      handleKeyDown(i, o) {
        if (o.key !== "Enter")
          return !1;
        const { $cursor: s } = i.state.selection;
        return s ? fi({
          editor: e,
          from: s.pos,
          to: s.pos,
          text: `
`,
          rules: t,
          plugin: r
        }) : !1;
      }
    },
    // @ts-ignore
    isInputRules: !0
  });
  return r;
}
function kg(n) {
  return Object.prototype.toString.call(n).slice(8, -1);
}
function hi(n) {
  return kg(n) !== "Object" ? !1 : n.constructor === Object && Object.getPrototypeOf(n) === Object.prototype;
}
function Po(n, e) {
  const t = { ...n };
  return hi(n) && hi(e) && Object.keys(e).forEach((r) => {
    hi(e[r]) && hi(n[r]) ? t[r] = Po(n[r], e[r]) : t[r] = e[r];
  }), t;
}
class Je {
  constructor(e = {}) {
    this.type = "mark", this.name = "mark", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = H(E(this, "addOptions", {
      name: this.name
    }))), this.storage = H(E(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new Je(e);
  }
  configure(e = {}) {
    const t = this.extend({
      ...this.config,
      addOptions: () => Po(this.options, e)
    });
    return t.name = this.name, t.parent = this.parent, t;
  }
  extend(e = {}) {
    const t = new Je(e);
    return t.parent = this, this.child = t, t.name = e.name ? e.name : t.parent.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`), t.options = H(E(t, "addOptions", {
      name: t.name
    })), t.storage = H(E(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
  static handleExit({ editor: e, mark: t }) {
    const { tr: r } = e.state, i = e.state.selection.$from;
    if (i.pos === i.end()) {
      const s = i.marks();
      if (!!!s.find((c) => (c == null ? void 0 : c.type.name) === t.name))
        return !1;
      const a = s.find((c) => (c == null ? void 0 : c.type.name) === t.name);
      return a && r.removeStoredMark(a), r.insertText(" ", i.pos), e.view.dispatch(r), !0;
    }
    return !1;
  }
}
function xg(n) {
  return typeof n == "number";
}
class Tu {
  constructor(e) {
    this.find = e.find, this.handler = e.handler;
  }
}
const Cg = (n, e, t) => {
  if (Tl(e))
    return [...n.matchAll(e)];
  const r = e(n, t);
  return r ? r.map((i) => {
    const o = [i.text];
    return o.index = i.index, o.input = n, o.data = i.data, i.replaceWith && (i.text.includes(i.replaceWith) || console.warn('[tiptap warn]: "pasteRuleMatch.replaceWith" must be part of "pasteRuleMatch.text".'), o.push(i.replaceWith)), o;
  }) : [];
};
function Sg(n) {
  const { editor: e, state: t, from: r, to: i, rule: o, pasteEvent: s, dropEvent: l } = n, { commands: a, chain: c, can: d } = new Ro({
    editor: e,
    state: t
  }), u = [];
  return t.doc.nodesBetween(r, i, (h, p) => {
    if (!h.isTextblock || h.type.spec.code)
      return;
    const g = Math.max(r, p), m = Math.min(i, p + h.content.size), y = h.textBetween(g - p, m - p, void 0, "￼");
    Cg(y, o.find, s).forEach((S) => {
      if (S.index === void 0)
        return;
      const w = g + S.index + 1, C = w + S[0].length, b = {
        from: t.tr.mapping.map(w),
        to: t.tr.mapping.map(C)
      }, O = o.handler({
        state: t,
        range: b,
        match: S,
        commands: a,
        chain: c,
        can: d,
        pasteEvent: s,
        dropEvent: l
      });
      u.push(O);
    });
  }), u.every((h) => h !== null);
}
const Mg = (n) => {
  var e;
  const t = new ClipboardEvent("paste", {
    clipboardData: new DataTransfer()
  });
  return (e = t.clipboardData) === null || e === void 0 || e.setData("text/html", n), t;
};
function Tg(n) {
  const { editor: e, rules: t } = n;
  let r = null, i = !1, o = !1, s = typeof ClipboardEvent < "u" ? new ClipboardEvent("paste") : null, l;
  try {
    l = typeof DragEvent < "u" ? new DragEvent("drop") : null;
  } catch {
    l = null;
  }
  const a = ({ state: d, from: u, to: f, rule: h, pasteEvt: p }) => {
    const g = d.tr, m = Do({
      state: d,
      transaction: g
    });
    if (!(!Sg({
      editor: e,
      state: m,
      from: Math.max(u - 1, 0),
      to: f.b - 1,
      rule: h,
      pasteEvent: p,
      dropEvent: l
    }) || !g.steps.length)) {
      try {
        l = typeof DragEvent < "u" ? new DragEvent("drop") : null;
      } catch {
        l = null;
      }
      return s = typeof ClipboardEvent < "u" ? new ClipboardEvent("paste") : null, g;
    }
  };
  return t.map((d) => new X({
    // we register a global drag handler to track the current drag source element
    view(u) {
      const f = (h) => {
        var p;
        r = !((p = u.dom.parentElement) === null || p === void 0) && p.contains(h.target) ? u.dom.parentElement : null;
      };
      return window.addEventListener("dragstart", f), {
        destroy() {
          window.removeEventListener("dragstart", f);
        }
      };
    },
    props: {
      handleDOMEvents: {
        drop: (u, f) => (o = r === u.dom.parentElement, l = f, !1),
        paste: (u, f) => {
          var h;
          const p = (h = f.clipboardData) === null || h === void 0 ? void 0 : h.getData("text/html");
          return s = f, i = !!(p != null && p.includes("data-pm-slice")), !1;
        }
      }
    },
    appendTransaction: (u, f, h) => {
      const p = u[0], g = p.getMeta("uiEvent") === "paste" && !i, m = p.getMeta("uiEvent") === "drop" && !o, y = p.getMeta("applyPasteRules"), v = !!y;
      if (!g && !m && !v)
        return;
      if (v) {
        let { text: C } = y;
        typeof C == "string" ? C = C : C = Ml(x.from(C), h.schema);
        const { from: b } = y, O = b + C.length, L = Mg(C);
        return a({
          rule: d,
          state: h,
          from: b,
          to: { b: O },
          pasteEvt: L
        });
      }
      const S = f.doc.content.findDiffStart(h.doc.content), w = f.doc.content.findDiffEnd(h.doc.content);
      if (!(!xg(S) || !w || S === w.b))
        return a({
          rule: d,
          state: h,
          from: S,
          to: w,
          pasteEvt: s
        });
    }
  }));
}
function Ag(n) {
  const e = n.filter((t, r) => n.indexOf(t) !== r);
  return Array.from(new Set(e));
}
class Fn {
  constructor(e, t) {
    this.splittableMarks = [], this.editor = t, this.extensions = Fn.resolve(e), this.schema = yg(this.extensions, t), this.setupExtensions();
  }
  /**
   * Returns a flattened and sorted extension list while
   * also checking for duplicated extensions and warns the user.
   * @param extensions An array of Tiptap extensions
   * @returns An flattened and sorted array of Tiptap extensions
   */
  static resolve(e) {
    const t = Fn.sort(Fn.flatten(e)), r = Ag(t.map((i) => i.name));
    return r.length && console.warn(`[tiptap warn]: Duplicate extension names found: [${r.map((i) => `'${i}'`).join(", ")}]. This can lead to issues.`), t;
  }
  /**
   * Create a flattened array of extensions by traversing the `addExtensions` field.
   * @param extensions An array of Tiptap extensions
   * @returns A flattened array of Tiptap extensions
   */
  static flatten(e) {
    return e.map((t) => {
      const r = {
        name: t.name,
        options: t.options,
        storage: t.storage
      }, i = E(t, "addExtensions", r);
      return i ? [t, ...this.flatten(i())] : t;
    }).flat(10);
  }
  /**
   * Sort extensions by priority.
   * @param extensions An array of Tiptap extensions
   * @returns A sorted array of Tiptap extensions by priority
   */
  static sort(e) {
    return e.sort((r, i) => {
      const o = E(r, "priority") || 100, s = E(i, "priority") || 100;
      return o > s ? -1 : o < s ? 1 : 0;
    });
  }
  /**
   * Get all commands from the extensions.
   * @returns An object with all commands where the key is the command name and the value is the command function
   */
  get commands() {
    return this.extensions.reduce((e, t) => {
      const r = {
        name: t.name,
        options: t.options,
        storage: t.storage,
        editor: this.editor,
        type: is(t.name, this.schema)
      }, i = E(t, "addCommands", r);
      return i ? {
        ...e,
        ...i()
      } : e;
    }, {});
  }
  /**
   * Get all registered Prosemirror plugins from the extensions.
   * @returns An array of Prosemirror plugins
   */
  get plugins() {
    const { editor: e } = this, t = Fn.sort([...this.extensions].reverse()), r = [], i = [], o = t.map((s) => {
      const l = {
        name: s.name,
        options: s.options,
        storage: s.storage,
        editor: e,
        type: is(s.name, this.schema)
      }, a = [], c = E(s, "addKeyboardShortcuts", l);
      let d = {};
      if (s.type === "mark" && E(s, "exitable", l) && (d.ArrowRight = () => Je.handleExit({ editor: e, mark: s })), c) {
        const g = Object.fromEntries(Object.entries(c()).map(([m, y]) => [m, () => y({ editor: e })]));
        d = { ...d, ...g };
      }
      const u = $m(d);
      a.push(u);
      const f = E(s, "addInputRules", l);
      nc(s, e.options.enableInputRules) && f && r.push(...f());
      const h = E(s, "addPasteRules", l);
      nc(s, e.options.enablePasteRules) && h && i.push(...h());
      const p = E(s, "addProseMirrorPlugins", l);
      if (p) {
        const g = p();
        a.push(...g);
      }
      return a;
    }).flat();
    return [
      bg({
        editor: e,
        rules: r
      }),
      ...Tg({
        editor: e,
        rules: i
      }),
      ...o
    ];
  }
  /**
   * Get all attributes from the extensions.
   * @returns An array of attributes
   */
  get attributes() {
    return Su(this.extensions);
  }
  /**
   * Get all node views from the extensions.
   * @returns An object with all node views where the key is the node name and the value is the node view function
   */
  get nodeViews() {
    const { editor: e } = this, { nodeExtensions: t } = Io(this.extensions);
    return Object.fromEntries(t.filter((r) => !!E(r, "addNodeView")).map((r) => {
      const i = this.attributes.filter((a) => a.type === r.name), o = {
        name: r.name,
        options: r.options,
        storage: r.storage,
        editor: e,
        type: he(r.name, this.schema)
      }, s = E(r, "addNodeView", o);
      if (!s)
        return [];
      const l = (a, c, d, u, f) => {
        const h = Hs(a, i);
        return s()({
          // pass-through
          node: a,
          view: c,
          getPos: d,
          decorations: u,
          innerDecorations: f,
          // tiptap-specific
          editor: e,
          extension: r,
          HTMLAttributes: h
        });
      };
      return [r.name, l];
    }));
  }
  /**
   * Go through all extensions, create extension storages & setup marks
   * & bind editor event listener.
   */
  setupExtensions() {
    this.extensions.forEach((e) => {
      var t;
      this.editor.extensionStorage[e.name] = e.storage;
      const r = {
        name: e.name,
        options: e.options,
        storage: e.storage,
        editor: this.editor,
        type: is(e.name, this.schema)
      };
      e.type === "mark" && (!((t = H(E(e, "keepOnSplit", r))) !== null && t !== void 0) || t) && this.splittableMarks.push(e.name);
      const i = E(e, "onBeforeCreate", r), o = E(e, "onCreate", r), s = E(e, "onUpdate", r), l = E(e, "onSelectionUpdate", r), a = E(e, "onTransaction", r), c = E(e, "onFocus", r), d = E(e, "onBlur", r), u = E(e, "onDestroy", r);
      i && this.editor.on("beforeCreate", i), o && this.editor.on("create", o), s && this.editor.on("update", s), l && this.editor.on("selectionUpdate", l), a && this.editor.on("transaction", a), c && this.editor.on("focus", c), d && this.editor.on("blur", d), u && this.editor.on("destroy", u);
    });
  }
}
class te {
  constructor(e = {}) {
    this.type = "extension", this.name = "extension", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = H(E(this, "addOptions", {
      name: this.name
    }))), this.storage = H(E(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new te(e);
  }
  configure(e = {}) {
    const t = this.extend({
      ...this.config,
      addOptions: () => Po(this.options, e)
    });
    return t.name = this.name, t.parent = this.parent, t;
  }
  extend(e = {}) {
    const t = new te({ ...this.config, ...e });
    return t.parent = this, this.child = t, t.name = e.name ? e.name : t.parent.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`), t.options = H(E(t, "addOptions", {
      name: t.name
    })), t.storage = H(E(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
}
function Au(n, e, t) {
  const { from: r, to: i } = e, { blockSeparator: o = `

`, textSerializers: s = {} } = t || {};
  let l = "";
  return n.nodesBetween(r, i, (a, c, d, u) => {
    var f;
    a.isBlock && c > r && (l += o);
    const h = s == null ? void 0 : s[a.type.name];
    if (h)
      return d && (l += h({
        node: a,
        pos: c,
        parent: d,
        index: u,
        range: e
      })), !1;
    a.isText && (l += (f = a == null ? void 0 : a.text) === null || f === void 0 ? void 0 : f.slice(Math.max(r, c) - c, i - c));
  }), l;
}
function Eu(n) {
  return Object.fromEntries(Object.entries(n.nodes).filter(([, e]) => e.spec.toText).map(([e, t]) => [e, t.spec.toText]));
}
const Eg = te.create({
  name: "clipboardTextSerializer",
  addOptions() {
    return {
      blockSeparator: void 0
    };
  },
  addProseMirrorPlugins() {
    return [
      new X({
        key: new se("clipboardTextSerializer"),
        props: {
          clipboardTextSerializer: () => {
            const { editor: n } = this, { state: e, schema: t } = n, { doc: r, selection: i } = e, { ranges: o } = i, s = Math.min(...o.map((d) => d.$from.pos)), l = Math.max(...o.map((d) => d.$to.pos)), a = Eu(t);
            return Au(r, { from: s, to: l }, {
              ...this.options.blockSeparator !== void 0 ? { blockSeparator: this.options.blockSeparator } : {},
              textSerializers: a
            });
          }
        }
      })
    ];
  }
}), Og = () => ({ editor: n, view: e }) => (requestAnimationFrame(() => {
  var t;
  n.isDestroyed || (e.dom.blur(), (t = window == null ? void 0 : window.getSelection()) === null || t === void 0 || t.removeAllRanges());
}), !0), Ng = (n = !1) => ({ commands: e }) => e.setContent("", n), Dg = () => ({ state: n, tr: e, dispatch: t }) => {
  const { selection: r } = e, { ranges: i } = r;
  return t && i.forEach(({ $from: o, $to: s }) => {
    n.doc.nodesBetween(o.pos, s.pos, (l, a) => {
      if (l.type.isText)
        return;
      const { doc: c, mapping: d } = e, u = c.resolve(d.map(a)), f = c.resolve(d.map(a + l.nodeSize)), h = u.blockRange(f);
      if (!h)
        return;
      const p = tr(h);
      if (l.type.isTextblock) {
        const { defaultType: g } = u.parent.contentMatchAt(u.index());
        e.setNodeMarkup(h.start, g);
      }
      (p || p === 0) && e.lift(h, p);
    });
  }), !0;
}, Rg = (n) => (e) => n(e), Ig = () => ({ state: n, dispatch: e }) => eg(n, e), Lg = (n, e) => ({ editor: t, tr: r }) => {
  const { state: i } = t, o = i.doc.slice(n.from, n.to);
  r.deleteRange(n.from, n.to);
  const s = r.mapping.map(e);
  return r.insert(s, o.content), r.setSelection(new D(r.doc.resolve(s - 1))), !0;
}, Pg = () => ({ tr: n, dispatch: e }) => {
  const { selection: t } = n, r = t.$anchor.node();
  if (r.content.size > 0)
    return !1;
  const i = n.selection.$anchor;
  for (let o = i.depth; o > 0; o -= 1)
    if (i.node(o).type === r.type) {
      if (e) {
        const l = i.before(o), a = i.after(o);
        n.delete(l, a).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, Bg = (n) => ({ tr: e, state: t, dispatch: r }) => {
  const i = he(n, t.schema), o = e.selection.$anchor;
  for (let s = o.depth; s > 0; s -= 1)
    if (o.node(s).type === i) {
      if (r) {
        const a = o.before(s), c = o.after(s);
        e.delete(a, c).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, Hg = (n) => ({ tr: e, dispatch: t }) => {
  const { from: r, to: i } = n;
  return t && e.delete(r, i), !0;
}, zg = () => ({ state: n, dispatch: e }) => jm(n, e), Vg = () => ({ commands: n }) => n.keyboardShortcut("Enter"), Fg = () => ({ state: n, dispatch: e }) => Zm(n, e);
function qi(n, e, t = { strict: !0 }) {
  const r = Object.keys(e);
  return r.length ? r.every((i) => t.strict ? e[i] === n[i] : Tl(e[i]) ? e[i].test(n[i]) : e[i] === n[i]) : !0;
}
function Ou(n, e, t = {}) {
  return n.find((r) => r.type === e && qi(
    // Only check equality for the attributes that are provided
    Object.fromEntries(Object.keys(t).map((i) => [i, r.attrs[i]])),
    t
  ));
}
function rc(n, e, t = {}) {
  return !!Ou(n, e, t);
}
function Al(n, e, t) {
  var r;
  if (!n || !e)
    return;
  let i = n.parent.childAfter(n.parentOffset);
  if ((!i.node || !i.node.marks.some((d) => d.type === e)) && (i = n.parent.childBefore(n.parentOffset)), !i.node || !i.node.marks.some((d) => d.type === e) || (t = t || ((r = i.node.marks[0]) === null || r === void 0 ? void 0 : r.attrs), !Ou([...i.node.marks], e, t)))
    return;
  let s = i.index, l = n.start() + i.offset, a = s + 1, c = l + i.node.nodeSize;
  for (; s > 0 && rc([...n.parent.child(s - 1).marks], e, t); )
    s -= 1, l -= n.parent.child(s).nodeSize;
  for (; a < n.parent.childCount && rc([...n.parent.child(a).marks], e, t); )
    c += n.parent.child(a).nodeSize, a += 1;
  return {
    from: l,
    to: c
  };
}
function tn(n, e) {
  if (typeof n == "string") {
    if (!e.marks[n])
      throw Error(`There is no mark type named '${n}'. Maybe you forgot to add the extension?`);
    return e.marks[n];
  }
  return n;
}
const $g = (n, e = {}) => ({ tr: t, state: r, dispatch: i }) => {
  const o = tn(n, r.schema), { doc: s, selection: l } = t, { $from: a, from: c, to: d } = l;
  if (i) {
    const u = Al(a, o, e);
    if (u && u.from <= c && u.to >= d) {
      const f = D.create(s, u.from, u.to);
      t.setSelection(f);
    }
  }
  return !0;
}, jg = (n) => (e) => {
  const t = typeof n == "function" ? n(e) : n;
  for (let r = 0; r < t.length; r += 1)
    if (t[r](e))
      return !0;
  return !1;
};
function El(n) {
  return n instanceof D;
}
function Ot(n = 0, e = 0, t = 0) {
  return Math.min(Math.max(n, e), t);
}
function Nu(n, e = null) {
  if (!e)
    return null;
  const t = I.atStart(n), r = I.atEnd(n);
  if (e === "start" || e === !0)
    return t;
  if (e === "end")
    return r;
  const i = t.from, o = r.to;
  return e === "all" ? D.create(n, Ot(0, i, o), Ot(n.content.size, i, o)) : D.create(n, Ot(e, i, o), Ot(e, i, o));
}
function Ol() {
  return [
    "iPad Simulator",
    "iPhone Simulator",
    "iPod Simulator",
    "iPad",
    "iPhone",
    "iPod"
  ].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
const Wg = (n = null, e = {}) => ({ editor: t, view: r, tr: i, dispatch: o }) => {
  e = {
    scrollIntoView: !0,
    ...e
  };
  const s = () => {
    Ol() && r.dom.focus(), requestAnimationFrame(() => {
      t.isDestroyed || (r.focus(), e != null && e.scrollIntoView && t.commands.scrollIntoView());
    });
  };
  if (r.hasFocus() && n === null || n === !1)
    return !0;
  if (o && n === null && !El(t.state.selection))
    return s(), !0;
  const l = Nu(i.doc, n) || t.state.selection, a = t.state.selection.eq(l);
  return o && (a || i.setSelection(l), a && i.storedMarks && i.setStoredMarks(i.storedMarks), s()), !0;
}, _g = (n, e) => (t) => n.every((r, i) => e(r, { ...t, index: i })), Kg = (n, e) => ({ tr: t, commands: r }) => r.insertContentAt({ from: t.selection.from, to: t.selection.to }, n, e), Du = (n) => {
  const e = n.childNodes;
  for (let t = e.length - 1; t >= 0; t -= 1) {
    const r = e[t];
    r.nodeType === 3 && r.nodeValue && /^(\n\s\s|\n)$/.test(r.nodeValue) ? n.removeChild(r) : r.nodeType === 1 && Du(r);
  }
  return n;
};
function pi(n) {
  const e = `<body>${n}</body>`, t = new window.DOMParser().parseFromString(e, "text/html").body;
  return Du(t);
}
function Ui(n, e, t) {
  if (n instanceof qt || n instanceof x)
    return n;
  t = {
    slice: !0,
    parseOptions: {},
    ...t
  };
  const r = typeof n == "object" && n !== null, i = typeof n == "string";
  if (r)
    try {
      if (Array.isArray(n) && n.length > 0)
        return x.fromArray(n.map((l) => e.nodeFromJSON(l)));
      const s = e.nodeFromJSON(n);
      return t.errorOnInvalidContent && s.check(), s;
    } catch (o) {
      if (t.errorOnInvalidContent)
        throw new Error("[tiptap error]: Invalid JSON content", { cause: o });
      return console.warn("[tiptap warn]: Invalid content.", "Passed value:", n, "Error:", o), Ui("", e, t);
    }
  if (i) {
    if (t.errorOnInvalidContent) {
      let s = !1, l = "";
      const a = new vd({
        topNode: e.spec.topNode,
        marks: e.spec.marks,
        // Prosemirror's schemas are executed such that: the last to execute, matches last
        // This means that we can add a catch-all node at the end of the schema to catch any content that we don't know how to handle
        nodes: e.spec.nodes.append({
          __tiptap__private__unknown__catch__all__node: {
            content: "inline*",
            group: "block",
            parseDOM: [
              {
                tag: "*",
                getAttrs: (c) => (s = !0, l = typeof c == "string" ? c : c.outerHTML, null)
              }
            ]
          }
        })
      });
      if (t.slice ? Ut.fromSchema(a).parseSlice(pi(n), t.parseOptions) : Ut.fromSchema(a).parse(pi(n), t.parseOptions), t.errorOnInvalidContent && s)
        throw new Error("[tiptap error]: Invalid HTML content", { cause: new Error(`Invalid element found: ${l}`) });
    }
    const o = Ut.fromSchema(e);
    return t.slice ? o.parseSlice(pi(n), t.parseOptions).content : o.parse(pi(n), t.parseOptions);
  }
  return Ui("", e, t);
}
function qg(n, e, t) {
  const r = n.steps.length - 1;
  if (r < e)
    return;
  const i = n.steps[r];
  if (!(i instanceof ae || i instanceof ue))
    return;
  const o = n.mapping.maps[r];
  let s = 0;
  o.forEach((l, a, c, d) => {
    s === 0 && (s = d);
  }), n.setSelection(I.near(n.doc.resolve(s), t));
}
const Ug = (n) => !("type" in n), Jg = (n, e, t) => ({ tr: r, dispatch: i, editor: o }) => {
  var s;
  if (i) {
    t = {
      parseOptions: o.options.parseOptions,
      updateSelection: !0,
      applyInputRules: !1,
      applyPasteRules: !1,
      ...t
    };
    let l;
    try {
      l = Ui(e, o.schema, {
        parseOptions: {
          preserveWhitespace: "full",
          ...t.parseOptions
        },
        errorOnInvalidContent: (s = t.errorOnInvalidContent) !== null && s !== void 0 ? s : o.options.enableContentCheck
      });
    } catch (p) {
      return o.emit("contentError", {
        editor: o,
        error: p,
        disableCollaboration: () => {
          o.storage.collaboration && (o.storage.collaboration.isDisabled = !0);
        }
      }), !1;
    }
    let { from: a, to: c } = typeof n == "number" ? { from: n, to: n } : { from: n.from, to: n.to }, d = !0, u = !0;
    if ((Ug(l) ? l : [l]).forEach((p) => {
      p.check(), d = d ? p.isText && p.marks.length === 0 : !1, u = u ? p.isBlock : !1;
    }), a === c && u) {
      const { parent: p } = r.doc.resolve(a);
      p.isTextblock && !p.type.spec.code && !p.childCount && (a -= 1, c += 1);
    }
    let h;
    if (d) {
      if (Array.isArray(e))
        h = e.map((p) => p.text || "").join("");
      else if (e instanceof x) {
        let p = "";
        e.forEach((g) => {
          g.text && (p += g.text);
        }), h = p;
      } else
        typeof e == "object" && e && e.text ? h = e.text : h = e;
      r.insertText(h, a, c);
    } else
      h = l, r.replaceWith(a, c, h);
    t.updateSelection && qg(r, r.steps.length - 1, -1), t.applyInputRules && r.setMeta("applyInputRules", { from: a, text: h }), t.applyPasteRules && r.setMeta("applyPasteRules", { from: a, text: h });
  }
  return !0;
}, Gg = () => ({ state: n, dispatch: e }) => Gm(n, e), Yg = () => ({ state: n, dispatch: e }) => Ym(n, e), Xg = () => ({ state: n, dispatch: e }) => Wm(n, e), Qg = () => ({ state: n, dispatch: e }) => Um(n, e), Zg = () => ({ state: n, dispatch: e, tr: t }) => {
  try {
    const r = Mo(n.doc, n.selection.$from.pos, -1);
    return r == null ? !1 : (t.join(r, 2), e && e(t), !0);
  } catch {
    return !1;
  }
}, e1 = () => ({ state: n, dispatch: e, tr: t }) => {
  try {
    const r = Mo(n.doc, n.selection.$from.pos, 1);
    return r == null ? !1 : (t.join(r, 2), e && e(t), !0);
  } catch {
    return !1;
  }
}, t1 = () => ({ state: n, dispatch: e }) => _m(n, e), n1 = () => ({ state: n, dispatch: e }) => Km(n, e);
function Ru() {
  return typeof navigator < "u" ? /Mac/.test(navigator.platform) : !1;
}
function r1(n) {
  const e = n.split(/-(?!$)/);
  let t = e[e.length - 1];
  t === "Space" && (t = " ");
  let r, i, o, s;
  for (let l = 0; l < e.length - 1; l += 1) {
    const a = e[l];
    if (/^(cmd|meta|m)$/i.test(a))
      s = !0;
    else if (/^a(lt)?$/i.test(a))
      r = !0;
    else if (/^(c|ctrl|control)$/i.test(a))
      i = !0;
    else if (/^s(hift)?$/i.test(a))
      o = !0;
    else if (/^mod$/i.test(a))
      Ol() || Ru() ? s = !0 : i = !0;
    else
      throw new Error(`Unrecognized modifier name: ${a}`);
  }
  return r && (t = `Alt-${t}`), i && (t = `Ctrl-${t}`), s && (t = `Meta-${t}`), o && (t = `Shift-${t}`), t;
}
const i1 = (n) => ({ editor: e, view: t, tr: r, dispatch: i }) => {
  const o = r1(n).split(/-(?!$)/), s = o.find((c) => !["Alt", "Ctrl", "Meta", "Shift"].includes(c)), l = new KeyboardEvent("keydown", {
    key: s === "Space" ? " " : s,
    altKey: o.includes("Alt"),
    ctrlKey: o.includes("Ctrl"),
    metaKey: o.includes("Meta"),
    shiftKey: o.includes("Shift"),
    bubbles: !0,
    cancelable: !0
  }), a = e.captureTransaction(() => {
    t.someProp("handleKeyDown", (c) => c(t, l));
  });
  return a == null || a.steps.forEach((c) => {
    const d = c.map(r.mapping);
    d && i && r.maybeStep(d);
  }), !0;
};
function Br(n, e, t = {}) {
  const { from: r, to: i, empty: o } = n.selection, s = e ? he(e, n.schema) : null, l = [];
  n.doc.nodesBetween(r, i, (u, f) => {
    if (u.isText)
      return;
    const h = Math.max(r, f), p = Math.min(i, f + u.nodeSize);
    l.push({
      node: u,
      from: h,
      to: p
    });
  });
  const a = i - r, c = l.filter((u) => s ? s.name === u.node.type.name : !0).filter((u) => qi(u.node.attrs, t, { strict: !1 }));
  return o ? !!c.length : c.reduce((u, f) => u + f.to - f.from, 0) >= a;
}
const o1 = (n, e = {}) => ({ state: t, dispatch: r }) => {
  const i = he(n, t.schema);
  return Br(t, i, e) ? Xm(t, r) : !1;
}, s1 = () => ({ state: n, dispatch: e }) => tg(n, e), l1 = (n) => ({ state: e, dispatch: t }) => {
  const r = he(n, e.schema);
  return dg(r)(e, t);
}, a1 = () => ({ state: n, dispatch: e }) => Qm(n, e);
function Bo(n, e) {
  return e.nodes[n] ? "node" : e.marks[n] ? "mark" : null;
}
function ic(n, e) {
  const t = typeof e == "string" ? [e] : e;
  return Object.keys(n).reduce((r, i) => (t.includes(i) || (r[i] = n[i]), r), {});
}
const c1 = (n, e) => ({ tr: t, state: r, dispatch: i }) => {
  let o = null, s = null;
  const l = Bo(typeof n == "string" ? n : n.name, r.schema);
  return l ? (l === "node" && (o = he(n, r.schema)), l === "mark" && (s = tn(n, r.schema)), i && t.selection.ranges.forEach((a) => {
    r.doc.nodesBetween(a.$from.pos, a.$to.pos, (c, d) => {
      o && o === c.type && t.setNodeMarkup(d, void 0, ic(c.attrs, e)), s && c.marks.length && c.marks.forEach((u) => {
        s === u.type && t.addMark(d, d + c.nodeSize, s.create(ic(u.attrs, e)));
      });
    });
  }), !0) : !1;
}, d1 = () => ({ tr: n, dispatch: e }) => (e && n.scrollIntoView(), !0), u1 = () => ({ tr: n, commands: e }) => e.setTextSelection({
  from: 0,
  to: n.doc.content.size
}), f1 = () => ({ state: n, dispatch: e }) => qm(n, e), h1 = () => ({ state: n, dispatch: e }) => Jm(n, e), p1 = () => ({ state: n, dispatch: e }) => ng(n, e), m1 = () => ({ state: n, dispatch: e }) => og(n, e), g1 = () => ({ state: n, dispatch: e }) => ig(n, e);
function zs(n, e, t = {}, r = {}) {
  return Ui(n, e, {
    slice: !1,
    parseOptions: t,
    errorOnInvalidContent: r.errorOnInvalidContent
  });
}
const y1 = (n, e = !1, t = {}, r = {}) => ({ editor: i, tr: o, dispatch: s, commands: l }) => {
  var a, c;
  const { doc: d } = o;
  if (t.preserveWhitespace !== "full") {
    const u = zs(n, i.schema, t, {
      errorOnInvalidContent: (a = r.errorOnInvalidContent) !== null && a !== void 0 ? a : i.options.enableContentCheck
    });
    return s && o.replaceWith(0, d.content.size, u).setMeta("preventUpdate", !e), !0;
  }
  return s && o.setMeta("preventUpdate", !e), l.insertContentAt({ from: 0, to: d.content.size }, n, {
    parseOptions: t,
    errorOnInvalidContent: (c = r.errorOnInvalidContent) !== null && c !== void 0 ? c : i.options.enableContentCheck
  });
};
function Iu(n, e) {
  const t = tn(e, n.schema), { from: r, to: i, empty: o } = n.selection, s = [];
  o ? (n.storedMarks && s.push(...n.storedMarks), s.push(...n.selection.$head.marks())) : n.doc.nodesBetween(r, i, (a) => {
    s.push(...a.marks);
  });
  const l = s.find((a) => a.type.name === t.name);
  return l ? { ...l.attrs } : {};
}
function w1(n, e) {
  const t = new fl(n);
  return e.forEach((r) => {
    r.steps.forEach((i) => {
      t.step(i);
    });
  }), t;
}
function v1(n) {
  for (let e = 0; e < n.edgeCount; e += 1) {
    const { type: t } = n.edge(e);
    if (t.isTextblock && !t.hasRequiredAttrs())
      return t;
  }
  return null;
}
function b1(n, e, t) {
  const r = [];
  return n.nodesBetween(e.from, e.to, (i, o) => {
    t(i) && r.push({
      node: i,
      pos: o
    });
  }), r;
}
function Lu(n, e) {
  for (let t = n.depth; t > 0; t -= 1) {
    const r = n.node(t);
    if (e(r))
      return {
        pos: t > 0 ? n.before(t) : 0,
        start: n.start(t),
        depth: t,
        node: r
      };
  }
}
function Nl(n) {
  return (e) => Lu(e.$from, n);
}
function k1(n, e) {
  const t = {
    from: 0,
    to: n.content.size
  };
  return Au(n, t, e);
}
function x1(n, e) {
  const t = he(e, n.schema), { from: r, to: i } = n.selection, o = [];
  n.doc.nodesBetween(r, i, (l) => {
    o.push(l);
  });
  const s = o.reverse().find((l) => l.type.name === t.name);
  return s ? { ...s.attrs } : {};
}
function Pu(n, e) {
  const t = Bo(typeof e == "string" ? e : e.name, n.schema);
  return t === "node" ? x1(n, e) : t === "mark" ? Iu(n, e) : {};
}
function C1(n, e = JSON.stringify) {
  const t = {};
  return n.filter((r) => {
    const i = e(r);
    return Object.prototype.hasOwnProperty.call(t, i) ? !1 : t[i] = !0;
  });
}
function S1(n) {
  const e = C1(n);
  return e.length === 1 ? e : e.filter((t, r) => !e.filter((o, s) => s !== r).some((o) => t.oldRange.from >= o.oldRange.from && t.oldRange.to <= o.oldRange.to && t.newRange.from >= o.newRange.from && t.newRange.to <= o.newRange.to));
}
function M1(n) {
  const { mapping: e, steps: t } = n, r = [];
  return e.maps.forEach((i, o) => {
    const s = [];
    if (i.ranges.length)
      i.forEach((l, a) => {
        s.push({ from: l, to: a });
      });
    else {
      const { from: l, to: a } = t[o];
      if (l === void 0 || a === void 0)
        return;
      s.push({ from: l, to: a });
    }
    s.forEach(({ from: l, to: a }) => {
      const c = e.slice(o).map(l, -1), d = e.slice(o).map(a), u = e.invert().map(c, -1), f = e.invert().map(d);
      r.push({
        oldRange: {
          from: u,
          to: f
        },
        newRange: {
          from: c,
          to: d
        }
      });
    });
  }), S1(r);
}
function Dl(n, e, t) {
  const r = [];
  return n === e ? t.resolve(n).marks().forEach((i) => {
    const o = t.resolve(n), s = Al(o, i.type);
    s && r.push({
      mark: i,
      ...s
    });
  }) : t.nodesBetween(n, e, (i, o) => {
    !i || (i == null ? void 0 : i.nodeSize) === void 0 || r.push(...i.marks.map((s) => ({
      from: o,
      to: o + i.nodeSize,
      mark: s
    })));
  }), r;
}
function Ai(n, e, t) {
  return Object.fromEntries(Object.entries(t).filter(([r]) => {
    const i = n.find((o) => o.type === e && o.name === r);
    return i ? i.attribute.keepOnSplit : !1;
  }));
}
function Vs(n, e, t = {}) {
  const { empty: r, ranges: i } = n.selection, o = e ? tn(e, n.schema) : null;
  if (r)
    return !!(n.storedMarks || n.selection.$from.marks()).filter((u) => o ? o.name === u.type.name : !0).find((u) => qi(u.attrs, t, { strict: !1 }));
  let s = 0;
  const l = [];
  if (i.forEach(({ $from: u, $to: f }) => {
    const h = u.pos, p = f.pos;
    n.doc.nodesBetween(h, p, (g, m) => {
      if (!g.isText && !g.marks.length)
        return;
      const y = Math.max(h, m), v = Math.min(p, m + g.nodeSize), S = v - y;
      s += S, l.push(...g.marks.map((w) => ({
        mark: w,
        from: y,
        to: v
      })));
    });
  }), s === 0)
    return !1;
  const a = l.filter((u) => o ? o.name === u.mark.type.name : !0).filter((u) => qi(u.mark.attrs, t, { strict: !1 })).reduce((u, f) => u + f.to - f.from, 0), c = l.filter((u) => o ? u.mark.type !== o && u.mark.type.excludes(o) : !0).reduce((u, f) => u + f.to - f.from, 0);
  return (a > 0 ? a + c : a) >= s;
}
function T1(n, e, t = {}) {
  if (!e)
    return Br(n, null, t) || Vs(n, null, t);
  const r = Bo(e, n.schema);
  return r === "node" ? Br(n, e, t) : r === "mark" ? Vs(n, e, t) : !1;
}
function oc(n, e) {
  const { nodeExtensions: t } = Io(e), r = t.find((s) => s.name === n);
  if (!r)
    return !1;
  const i = {
    name: r.name,
    options: r.options,
    storage: r.storage
  }, o = H(E(r, "group", i));
  return typeof o != "string" ? !1 : o.split(" ").includes("list");
}
function Ho(n, { checkChildren: e = !0, ignoreWhitespace: t = !1 } = {}) {
  var r;
  if (t) {
    if (n.type.name === "hardBreak")
      return !0;
    if (n.isText)
      return /^\s*$/m.test((r = n.text) !== null && r !== void 0 ? r : "");
  }
  if (n.isText)
    return !n.text;
  if (n.isAtom || n.isLeaf)
    return !1;
  if (n.content.childCount === 0)
    return !0;
  if (e) {
    let i = !0;
    return n.content.forEach((o) => {
      i !== !1 && (Ho(o, { ignoreWhitespace: t, checkChildren: e }) || (i = !1));
    }), i;
  }
  return !1;
}
function Bu(n) {
  return n instanceof R;
}
function Hu(n, e, t) {
  const i = n.state.doc.content.size, o = Ot(e, 0, i), s = Ot(t, 0, i), l = n.coordsAtPos(o), a = n.coordsAtPos(s, -1), c = Math.min(l.top, a.top), d = Math.max(l.bottom, a.bottom), u = Math.min(l.left, a.left), f = Math.max(l.right, a.right), h = f - u, p = d - c, y = {
    top: c,
    bottom: d,
    left: u,
    right: f,
    width: h,
    height: p,
    x: u,
    y: c
  };
  return {
    ...y,
    toJSON: () => y
  };
}
function A1(n, e, t) {
  var r;
  const { selection: i } = e;
  let o = null;
  if (El(i) && (o = i.$cursor), o) {
    const l = (r = n.storedMarks) !== null && r !== void 0 ? r : o.marks();
    return !!t.isInSet(l) || !l.some((a) => a.type.excludes(t));
  }
  const { ranges: s } = i;
  return s.some(({ $from: l, $to: a }) => {
    let c = l.depth === 0 ? n.doc.inlineContent && n.doc.type.allowsMarkType(t) : !1;
    return n.doc.nodesBetween(l.pos, a.pos, (d, u, f) => {
      if (c)
        return !1;
      if (d.isInline) {
        const h = !f || f.type.allowsMarkType(t), p = !!t.isInSet(d.marks) || !d.marks.some((g) => g.type.excludes(t));
        c = h && p;
      }
      return !c;
    }), c;
  });
}
const E1 = (n, e = {}) => ({ tr: t, state: r, dispatch: i }) => {
  const { selection: o } = t, { empty: s, ranges: l } = o, a = tn(n, r.schema);
  if (i)
    if (s) {
      const c = Iu(r, a);
      t.addStoredMark(a.create({
        ...c,
        ...e
      }));
    } else
      l.forEach((c) => {
        const d = c.$from.pos, u = c.$to.pos;
        r.doc.nodesBetween(d, u, (f, h) => {
          const p = Math.max(h, d), g = Math.min(h + f.nodeSize, u);
          f.marks.find((y) => y.type === a) ? f.marks.forEach((y) => {
            a === y.type && t.addMark(p, g, a.create({
              ...y.attrs,
              ...e
            }));
          }) : t.addMark(p, g, a.create(e));
        });
      });
  return A1(r, t, a);
}, O1 = (n, e) => ({ tr: t }) => (t.setMeta(n, e), !0), N1 = (n, e = {}) => ({ state: t, dispatch: r, chain: i }) => {
  const o = he(n, t.schema);
  let s;
  return t.selection.$anchor.sameParent(t.selection.$head) && (s = t.selection.$anchor.parent.attrs), o.isTextblock ? i().command(({ commands: l }) => Za(o, { ...s, ...e })(t) ? !0 : l.clearNodes()).command(({ state: l }) => Za(o, { ...s, ...e })(l, r)).run() : (console.warn('[tiptap warn]: Currently "setNode()" only supports text block nodes.'), !1);
}, D1 = (n) => ({ tr: e, dispatch: t }) => {
  if (t) {
    const { doc: r } = e, i = Ot(n, 0, r.content.size), o = R.create(r, i);
    e.setSelection(o);
  }
  return !0;
}, R1 = (n) => ({ tr: e, dispatch: t }) => {
  if (t) {
    const { doc: r } = e, { from: i, to: o } = typeof n == "number" ? { from: n, to: n } : n, s = D.atStart(r).from, l = D.atEnd(r).to, a = Ot(i, s, l), c = Ot(o, s, l), d = D.create(r, a, c);
    e.setSelection(d);
  }
  return !0;
}, I1 = (n) => ({ state: e, dispatch: t }) => {
  const r = he(n, e.schema);
  return hg(r)(e, t);
};
function sc(n, e) {
  const t = n.storedMarks || n.selection.$to.parentOffset && n.selection.$from.marks();
  if (t) {
    const r = t.filter((i) => e == null ? void 0 : e.includes(i.type.name));
    n.tr.ensureMarks(r);
  }
}
const L1 = ({ keepMarks: n = !0 } = {}) => ({ tr: e, state: t, dispatch: r, editor: i }) => {
  const { selection: o, doc: s } = e, { $from: l, $to: a } = o, c = i.extensionManager.attributes, d = Ai(c, l.node().type.name, l.node().attrs);
  if (o instanceof R && o.node.isBlock)
    return !l.parentOffset || !jn(s, l.pos) ? !1 : (r && (n && sc(t, i.extensionManager.splittableMarks), e.split(l.pos).scrollIntoView()), !0);
  if (!l.parent.isBlock)
    return !1;
  const u = a.parentOffset === a.parent.content.size, f = l.depth === 0 ? void 0 : v1(l.node(-1).contentMatchAt(l.indexAfter(-1)));
  let h = u && f ? [
    {
      type: f,
      attrs: d
    }
  ] : void 0, p = jn(e.doc, e.mapping.map(l.pos), 1, h);
  if (!h && !p && jn(e.doc, e.mapping.map(l.pos), 1, f ? [{ type: f }] : void 0) && (p = !0, h = f ? [
    {
      type: f,
      attrs: d
    }
  ] : void 0), r) {
    if (p && (o instanceof D && e.deleteSelection(), e.split(e.mapping.map(l.pos), 1, h), f && !u && !l.parentOffset && l.parent.type !== f)) {
      const g = e.mapping.map(l.before()), m = e.doc.resolve(g);
      l.node(-1).canReplaceWith(m.index(), m.index() + 1, f) && e.setNodeMarkup(e.mapping.map(l.before()), f);
    }
    n && sc(t, i.extensionManager.splittableMarks), e.scrollIntoView();
  }
  return p;
}, P1 = (n, e = {}) => ({ tr: t, state: r, dispatch: i, editor: o }) => {
  var s;
  const l = he(n, r.schema), { $from: a, $to: c } = r.selection, d = r.selection.node;
  if (d && d.isBlock || a.depth < 2 || !a.sameParent(c))
    return !1;
  const u = a.node(-1);
  if (u.type !== l)
    return !1;
  const f = o.extensionManager.attributes;
  if (a.parent.content.size === 0 && a.node(-1).childCount === a.indexAfter(-1)) {
    if (a.depth === 2 || a.node(-3).type !== l || a.index(-2) !== a.node(-2).childCount - 1)
      return !1;
    if (i) {
      let y = x.empty;
      const v = a.index(-1) ? 1 : a.index(-2) ? 2 : 3;
      for (let L = a.depth - v; L >= a.depth - 3; L -= 1)
        y = x.from(a.node(L).copy(y));
      const S = a.indexAfter(-1) < a.node(-2).childCount ? 1 : a.indexAfter(-2) < a.node(-3).childCount ? 2 : 3, w = {
        ...Ai(f, a.node().type.name, a.node().attrs),
        ...e
      }, C = ((s = l.contentMatch.defaultType) === null || s === void 0 ? void 0 : s.createAndFill(w)) || void 0;
      y = y.append(x.from(l.createAndFill(null, C) || void 0));
      const b = a.before(a.depth - (v - 1));
      t.replace(b, a.after(-S), new T(y, 4 - v, 0));
      let O = -1;
      t.doc.nodesBetween(b, t.doc.content.size, (L, A) => {
        if (O > -1)
          return !1;
        L.isTextblock && L.content.size === 0 && (O = A + 1);
      }), O > -1 && t.setSelection(D.near(t.doc.resolve(O))), t.scrollIntoView();
    }
    return !0;
  }
  const h = c.pos === a.end() ? u.contentMatchAt(0).defaultType : null, p = {
    ...Ai(f, u.type.name, u.attrs),
    ...e
  }, g = {
    ...Ai(f, a.node().type.name, a.node().attrs),
    ...e
  };
  t.delete(a.pos, c.pos);
  const m = h ? [
    { type: l, attrs: p },
    { type: h, attrs: g }
  ] : [{ type: l, attrs: p }];
  if (!jn(t.doc, a.pos, 2))
    return !1;
  if (i) {
    const { selection: y, storedMarks: v } = r, { splittableMarks: S } = o.extensionManager, w = v || y.$to.parentOffset && y.$from.marks();
    if (t.split(a.pos, 2, m).scrollIntoView(), !w || !i)
      return !0;
    const C = w.filter((b) => S.includes(b.type.name));
    t.ensureMarks(C);
  }
  return !0;
}, ss = (n, e) => {
  const t = Nl((s) => s.type === e)(n.selection);
  if (!t)
    return !0;
  const r = n.doc.resolve(Math.max(0, t.pos - 1)).before(t.depth);
  if (r === void 0)
    return !0;
  const i = n.doc.nodeAt(r);
  return t.node.type === (i == null ? void 0 : i.type) && Zt(n.doc, t.pos) && n.join(t.pos), !0;
}, ls = (n, e) => {
  const t = Nl((s) => s.type === e)(n.selection);
  if (!t)
    return !0;
  const r = n.doc.resolve(t.start).after(t.depth);
  if (r === void 0)
    return !0;
  const i = n.doc.nodeAt(r);
  return t.node.type === (i == null ? void 0 : i.type) && Zt(n.doc, r) && n.join(r), !0;
}, B1 = (n, e, t, r = {}) => ({ editor: i, tr: o, state: s, dispatch: l, chain: a, commands: c, can: d }) => {
  const { extensions: u, splittableMarks: f } = i.extensionManager, h = he(n, s.schema), p = he(e, s.schema), { selection: g, storedMarks: m } = s, { $from: y, $to: v } = g, S = y.blockRange(v), w = m || g.$to.parentOffset && g.$from.marks();
  if (!S)
    return !1;
  const C = Nl((b) => oc(b.type.name, u))(g);
  if (S.depth >= 1 && C && S.depth - C.depth <= 1) {
    if (C.node.type === h)
      return c.liftListItem(p);
    if (oc(C.node.type.name, u) && h.validContent(C.node.content) && l)
      return a().command(() => (o.setNodeMarkup(C.pos, h), !0)).command(() => ss(o, h)).command(() => ls(o, h)).run();
  }
  return !t || !w || !l ? a().command(() => d().wrapInList(h, r) ? !0 : c.clearNodes()).wrapInList(h, r).command(() => ss(o, h)).command(() => ls(o, h)).run() : a().command(() => {
    const b = d().wrapInList(h, r), O = w.filter((L) => f.includes(L.type.name));
    return o.ensureMarks(O), b ? !0 : c.clearNodes();
  }).wrapInList(h, r).command(() => ss(o, h)).command(() => ls(o, h)).run();
}, H1 = (n, e = {}, t = {}) => ({ state: r, commands: i }) => {
  const { extendEmptyMarkRange: o = !1 } = t, s = tn(n, r.schema);
  return Vs(r, s, e) ? i.unsetMark(s, { extendEmptyMarkRange: o }) : i.setMark(s, e);
}, z1 = (n, e, t = {}) => ({ state: r, commands: i }) => {
  const o = he(n, r.schema), s = he(e, r.schema), l = Br(r, o, t);
  let a;
  return r.selection.$anchor.sameParent(r.selection.$head) && (a = r.selection.$anchor.parent.attrs), l ? i.setNode(s, a) : i.setNode(o, { ...a, ...t });
}, V1 = (n, e = {}) => ({ state: t, commands: r }) => {
  const i = he(n, t.schema);
  return Br(t, i, e) ? r.lift(i) : r.wrapIn(i, e);
}, F1 = () => ({ state: n, dispatch: e }) => {
  const t = n.plugins;
  for (let r = 0; r < t.length; r += 1) {
    const i = t[r];
    let o;
    if (i.spec.isInputRules && (o = i.getState(n))) {
      if (e) {
        const s = n.tr, l = o.transform;
        for (let a = l.steps.length - 1; a >= 0; a -= 1)
          s.step(l.steps[a].invert(l.docs[a]));
        if (o.text) {
          const a = s.doc.resolve(o.from).marks();
          s.replaceWith(o.from, o.to, n.schema.text(o.text, a));
        } else
          s.delete(o.from, o.to);
      }
      return !0;
    }
  }
  return !1;
}, $1 = () => ({ tr: n, dispatch: e }) => {
  const { selection: t } = n, { empty: r, ranges: i } = t;
  return r || e && i.forEach((o) => {
    n.removeMark(o.$from.pos, o.$to.pos);
  }), !0;
}, j1 = (n, e = {}) => ({ tr: t, state: r, dispatch: i }) => {
  var o;
  const { extendEmptyMarkRange: s = !1 } = e, { selection: l } = t, a = tn(n, r.schema), { $from: c, empty: d, ranges: u } = l;
  if (!i)
    return !0;
  if (d && s) {
    let { from: f, to: h } = l;
    const p = (o = c.marks().find((m) => m.type === a)) === null || o === void 0 ? void 0 : o.attrs, g = Al(c, a, p);
    g && (f = g.from, h = g.to), t.removeMark(f, h, a);
  } else
    u.forEach((f) => {
      t.removeMark(f.$from.pos, f.$to.pos, a);
    });
  return t.removeStoredMark(a), !0;
}, W1 = (n, e = {}) => ({ tr: t, state: r, dispatch: i }) => {
  let o = null, s = null;
  const l = Bo(typeof n == "string" ? n : n.name, r.schema);
  return l ? (l === "node" && (o = he(n, r.schema)), l === "mark" && (s = tn(n, r.schema)), i && t.selection.ranges.forEach((a) => {
    const c = a.$from.pos, d = a.$to.pos;
    let u, f, h, p;
    t.selection.empty ? r.doc.nodesBetween(c, d, (g, m) => {
      o && o === g.type && (h = Math.max(m, c), p = Math.min(m + g.nodeSize, d), u = m, f = g);
    }) : r.doc.nodesBetween(c, d, (g, m) => {
      m < c && o && o === g.type && (h = Math.max(m, c), p = Math.min(m + g.nodeSize, d), u = m, f = g), m >= c && m <= d && (o && o === g.type && t.setNodeMarkup(m, void 0, {
        ...g.attrs,
        ...e
      }), s && g.marks.length && g.marks.forEach((y) => {
        if (s === y.type) {
          const v = Math.max(m, c), S = Math.min(m + g.nodeSize, d);
          t.addMark(v, S, s.create({
            ...y.attrs,
            ...e
          }));
        }
      }));
    }), f && (u !== void 0 && t.setNodeMarkup(u, void 0, {
      ...f.attrs,
      ...e
    }), s && f.marks.length && f.marks.forEach((g) => {
      s === g.type && t.addMark(h, p, s.create({
        ...g.attrs,
        ...e
      }));
    }));
  }), !0) : !1;
}, _1 = (n, e = {}) => ({ state: t, dispatch: r }) => {
  const i = he(n, t.schema);
  return sg(i, e)(t, r);
}, K1 = (n, e = {}) => ({ state: t, dispatch: r }) => {
  const i = he(n, t.schema);
  return lg(i, e)(t, r);
};
var q1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  blur: Og,
  clearContent: Ng,
  clearNodes: Dg,
  command: Rg,
  createParagraphNear: Ig,
  cut: Lg,
  deleteCurrentNode: Pg,
  deleteNode: Bg,
  deleteRange: Hg,
  deleteSelection: zg,
  enter: Vg,
  exitCode: Fg,
  extendMarkRange: $g,
  first: jg,
  focus: Wg,
  forEach: _g,
  insertContent: Kg,
  insertContentAt: Jg,
  joinBackward: Xg,
  joinDown: Yg,
  joinForward: Qg,
  joinItemBackward: Zg,
  joinItemForward: e1,
  joinTextblockBackward: t1,
  joinTextblockForward: n1,
  joinUp: Gg,
  keyboardShortcut: i1,
  lift: o1,
  liftEmptyBlock: s1,
  liftListItem: l1,
  newlineInCode: a1,
  resetAttributes: c1,
  scrollIntoView: d1,
  selectAll: u1,
  selectNodeBackward: f1,
  selectNodeForward: h1,
  selectParentNode: p1,
  selectTextblockEnd: m1,
  selectTextblockStart: g1,
  setContent: y1,
  setMark: E1,
  setMeta: O1,
  setNode: N1,
  setNodeSelection: D1,
  setTextSelection: R1,
  sinkListItem: I1,
  splitBlock: L1,
  splitListItem: P1,
  toggleList: B1,
  toggleMark: H1,
  toggleNode: z1,
  toggleWrap: V1,
  undoInputRule: F1,
  unsetAllMarks: $1,
  unsetMark: j1,
  updateAttributes: W1,
  wrapIn: _1,
  wrapInList: K1
});
const U1 = te.create({
  name: "commands",
  addCommands() {
    return {
      ...q1
    };
  }
}), J1 = te.create({
  name: "drop",
  addProseMirrorPlugins() {
    return [
      new X({
        key: new se("tiptapDrop"),
        props: {
          handleDrop: (n, e, t, r) => {
            this.editor.emit("drop", {
              editor: this.editor,
              event: e,
              slice: t,
              moved: r
            });
          }
        }
      })
    ];
  }
}), G1 = te.create({
  name: "editable",
  addProseMirrorPlugins() {
    return [
      new X({
        key: new se("editable"),
        props: {
          editable: () => this.editor.options.editable
        }
      })
    ];
  }
}), Y1 = te.create({
  name: "focusEvents",
  addProseMirrorPlugins() {
    const { editor: n } = this;
    return [
      new X({
        key: new se("focusEvents"),
        props: {
          handleDOMEvents: {
            focus: (e, t) => {
              n.isFocused = !0;
              const r = n.state.tr.setMeta("focus", { event: t }).setMeta("addToHistory", !1);
              return e.dispatch(r), !1;
            },
            blur: (e, t) => {
              n.isFocused = !1;
              const r = n.state.tr.setMeta("blur", { event: t }).setMeta("addToHistory", !1);
              return e.dispatch(r), !1;
            }
          }
        }
      })
    ];
  }
}), X1 = te.create({
  name: "keymap",
  addKeyboardShortcuts() {
    const n = () => this.editor.commands.first(({ commands: s }) => [
      () => s.undoInputRule(),
      // maybe convert first text block node to default node
      () => s.command(({ tr: l }) => {
        const { selection: a, doc: c } = l, { empty: d, $anchor: u } = a, { pos: f, parent: h } = u, p = u.parent.isTextblock && f > 0 ? l.doc.resolve(f - 1) : u, g = p.parent.type.spec.isolating, m = u.pos - u.parentOffset, y = g && p.parent.childCount === 1 ? m === u.pos : I.atStart(c).from === f;
        return !d || !h.type.isTextblock || h.textContent.length || !y || y && u.parent.type.name === "paragraph" ? !1 : s.clearNodes();
      }),
      () => s.deleteSelection(),
      () => s.joinBackward(),
      () => s.selectNodeBackward()
    ]), e = () => this.editor.commands.first(({ commands: s }) => [
      () => s.deleteSelection(),
      () => s.deleteCurrentNode(),
      () => s.joinForward(),
      () => s.selectNodeForward()
    ]), r = {
      Enter: () => this.editor.commands.first(({ commands: s }) => [
        () => s.newlineInCode(),
        () => s.createParagraphNear(),
        () => s.liftEmptyBlock(),
        () => s.splitBlock()
      ]),
      "Mod-Enter": () => this.editor.commands.exitCode(),
      Backspace: n,
      "Mod-Backspace": n,
      "Shift-Backspace": n,
      Delete: e,
      "Mod-Delete": e,
      "Mod-a": () => this.editor.commands.selectAll()
    }, i = {
      ...r
    }, o = {
      ...r,
      "Ctrl-h": n,
      "Alt-Backspace": n,
      "Ctrl-d": e,
      "Ctrl-Alt-Backspace": e,
      "Alt-Delete": e,
      "Alt-d": e,
      "Ctrl-a": () => this.editor.commands.selectTextblockStart(),
      "Ctrl-e": () => this.editor.commands.selectTextblockEnd()
    };
    return Ol() || Ru() ? o : i;
  },
  addProseMirrorPlugins() {
    return [
      // With this plugin we check if the whole document was selected and deleted.
      // In this case we will additionally call `clearNodes()` to convert e.g. a heading
      // to a paragraph if necessary.
      // This is an alternative to ProseMirror's `AllSelection`, which doesn’t work well
      // with many other commands.
      new X({
        key: new se("clearDocument"),
        appendTransaction: (n, e, t) => {
          const r = n.some((g) => g.docChanged) && !e.doc.eq(t.doc), i = n.some((g) => g.getMeta("preventClearDocument"));
          if (!r || i)
            return;
          const { empty: o, from: s, to: l } = e.selection, a = I.atStart(e.doc).from, c = I.atEnd(e.doc).to;
          if (o || !(s === a && l === c) || !Ho(t.doc))
            return;
          const f = t.tr, h = Do({
            state: t,
            transaction: f
          }), { commands: p } = new Ro({
            editor: this.editor,
            state: h
          });
          if (p.clearNodes(), !!f.steps.length)
            return f;
        }
      })
    ];
  }
}), Q1 = te.create({
  name: "paste",
  addProseMirrorPlugins() {
    return [
      new X({
        key: new se("tiptapPaste"),
        props: {
          handlePaste: (n, e, t) => {
            this.editor.emit("paste", {
              editor: this.editor,
              event: e,
              slice: t
            });
          }
        }
      })
    ];
  }
}), Z1 = te.create({
  name: "tabindex",
  addProseMirrorPlugins() {
    return [
      new X({
        key: new se("tabindex"),
        props: {
          attributes: () => this.editor.isEditable ? { tabindex: "0" } : {}
        }
      })
    ];
  }
});
class cn {
  get name() {
    return this.node.type.name;
  }
  constructor(e, t, r = !1, i = null) {
    this.currentNode = null, this.actualDepth = null, this.isBlock = r, this.resolvedPos = e, this.editor = t, this.currentNode = i;
  }
  get node() {
    return this.currentNode || this.resolvedPos.node();
  }
  get element() {
    return this.editor.view.domAtPos(this.pos).node;
  }
  get depth() {
    var e;
    return (e = this.actualDepth) !== null && e !== void 0 ? e : this.resolvedPos.depth;
  }
  get pos() {
    return this.resolvedPos.pos;
  }
  get content() {
    return this.node.content;
  }
  set content(e) {
    let t = this.from, r = this.to;
    if (this.isBlock) {
      if (this.content.size === 0) {
        console.error(`You can’t set content on a block node. Tried to set content on ${this.name} at ${this.pos}`);
        return;
      }
      t = this.from + 1, r = this.to - 1;
    }
    this.editor.commands.insertContentAt({ from: t, to: r }, e);
  }
  get attributes() {
    return this.node.attrs;
  }
  get textContent() {
    return this.node.textContent;
  }
  get size() {
    return this.node.nodeSize;
  }
  get from() {
    return this.isBlock ? this.pos : this.resolvedPos.start(this.resolvedPos.depth);
  }
  get range() {
    return {
      from: this.from,
      to: this.to
    };
  }
  get to() {
    return this.isBlock ? this.pos + this.size : this.resolvedPos.end(this.resolvedPos.depth) + (this.node.isText ? 0 : 1);
  }
  get parent() {
    if (this.depth === 0)
      return null;
    const e = this.resolvedPos.start(this.resolvedPos.depth - 1), t = this.resolvedPos.doc.resolve(e);
    return new cn(t, this.editor);
  }
  get before() {
    let e = this.resolvedPos.doc.resolve(this.from - (this.isBlock ? 1 : 2));
    return e.depth !== this.depth && (e = this.resolvedPos.doc.resolve(this.from - 3)), new cn(e, this.editor);
  }
  get after() {
    let e = this.resolvedPos.doc.resolve(this.to + (this.isBlock ? 2 : 1));
    return e.depth !== this.depth && (e = this.resolvedPos.doc.resolve(this.to + 3)), new cn(e, this.editor);
  }
  get children() {
    const e = [];
    return this.node.content.forEach((t, r) => {
      const i = t.isBlock && !t.isTextblock, o = t.isAtom && !t.isText, s = this.pos + r + (o ? 0 : 1), l = this.resolvedPos.doc.resolve(s);
      if (!i && l.depth <= this.depth)
        return;
      const a = new cn(l, this.editor, i, i ? t : null);
      i && (a.actualDepth = this.depth + 1), e.push(new cn(l, this.editor, i, i ? t : null));
    }), e;
  }
  get firstChild() {
    return this.children[0] || null;
  }
  get lastChild() {
    const e = this.children;
    return e[e.length - 1] || null;
  }
  closest(e, t = {}) {
    let r = null, i = this.parent;
    for (; i && !r; ) {
      if (i.node.type.name === e)
        if (Object.keys(t).length > 0) {
          const o = i.node.attrs, s = Object.keys(t);
          for (let l = 0; l < s.length; l += 1) {
            const a = s[l];
            if (o[a] !== t[a])
              break;
          }
        } else
          r = i;
      i = i.parent;
    }
    return r;
  }
  querySelector(e, t = {}) {
    return this.querySelectorAll(e, t, !0)[0] || null;
  }
  querySelectorAll(e, t = {}, r = !1) {
    let i = [];
    if (!this.children || this.children.length === 0)
      return i;
    const o = Object.keys(t);
    return this.children.forEach((s) => {
      r && i.length > 0 || (s.node.type.name === e && o.every((a) => t[a] === s.node.attrs[a]) && i.push(s), !(r && i.length > 0) && (i = i.concat(s.querySelectorAll(e, t, r))));
    }), i;
  }
  setAttribute(e) {
    const { tr: t } = this.editor.state;
    t.setNodeMarkup(this.from, void 0, {
      ...this.node.attrs,
      ...e
    }), this.editor.view.dispatch(t);
  }
}
const e0 = `.ProseMirror {
  position: relative;
}

.ProseMirror {
  word-wrap: break-word;
  white-space: pre-wrap;
  white-space: break-spaces;
  -webkit-font-variant-ligatures: none;
  font-variant-ligatures: none;
  font-feature-settings: "liga" 0; /* the above doesn't seem to work in Edge */
}

.ProseMirror [contenteditable="false"] {
  white-space: normal;
}

.ProseMirror [contenteditable="false"] [contenteditable="true"] {
  white-space: pre-wrap;
}

.ProseMirror pre {
  white-space: pre-wrap;
}

img.ProseMirror-separator {
  display: inline !important;
  border: none !important;
  margin: 0 !important;
  width: 0 !important;
  height: 0 !important;
}

.ProseMirror-gapcursor {
  display: none;
  pointer-events: none;
  position: absolute;
  margin: 0;
}

.ProseMirror-gapcursor:after {
  content: "";
  display: block;
  position: absolute;
  top: -2px;
  width: 20px;
  border-top: 1px solid black;
  animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;
}

@keyframes ProseMirror-cursor-blink {
  to {
    visibility: hidden;
  }
}

.ProseMirror-hideselection *::selection {
  background: transparent;
}

.ProseMirror-hideselection *::-moz-selection {
  background: transparent;
}

.ProseMirror-hideselection * {
  caret-color: transparent;
}

.ProseMirror-focused .ProseMirror-gapcursor {
  display: block;
}

.tippy-box[data-animation=fade][data-state=hidden] {
  opacity: 0
}`;
function t0(n, e, t) {
  const r = document.querySelector(`style[data-tiptap-style${t ? `-${t}` : ""}]`);
  if (r !== null)
    return r;
  const i = document.createElement("style");
  return e && i.setAttribute("nonce", e), i.setAttribute(`data-tiptap-style${t ? `-${t}` : ""}`, ""), i.innerHTML = n, document.getElementsByTagName("head")[0].appendChild(i), i;
}
let n0 = class extends pg {
  constructor(e = {}) {
    super(), this.isFocused = !1, this.isInitialized = !1, this.extensionStorage = {}, this.options = {
      element: document.createElement("div"),
      content: "",
      injectCSS: !0,
      injectNonce: void 0,
      extensions: [],
      autofocus: !1,
      editable: !0,
      editorProps: {},
      parseOptions: {},
      coreExtensionOptions: {},
      enableInputRules: !0,
      enablePasteRules: !0,
      enableCoreExtensions: !0,
      enableContentCheck: !1,
      onBeforeCreate: () => null,
      onCreate: () => null,
      onUpdate: () => null,
      onSelectionUpdate: () => null,
      onTransaction: () => null,
      onFocus: () => null,
      onBlur: () => null,
      onDestroy: () => null,
      onContentError: ({ error: t }) => {
        throw t;
      },
      onPaste: () => null,
      onDrop: () => null
    }, this.isCapturingTransaction = !1, this.capturedTransaction = null, this.setOptions(e), this.createExtensionManager(), this.createCommandManager(), this.createSchema(), this.on("beforeCreate", this.options.onBeforeCreate), this.emit("beforeCreate", { editor: this }), this.on("contentError", this.options.onContentError), this.createView(), this.injectCSS(), this.on("create", this.options.onCreate), this.on("update", this.options.onUpdate), this.on("selectionUpdate", this.options.onSelectionUpdate), this.on("transaction", this.options.onTransaction), this.on("focus", this.options.onFocus), this.on("blur", this.options.onBlur), this.on("destroy", this.options.onDestroy), this.on("drop", ({ event: t, slice: r, moved: i }) => this.options.onDrop(t, r, i)), this.on("paste", ({ event: t, slice: r }) => this.options.onPaste(t, r)), window.setTimeout(() => {
      this.isDestroyed || (this.commands.focus(this.options.autofocus), this.emit("create", { editor: this }), this.isInitialized = !0);
    }, 0);
  }
  /**
   * Returns the editor storage.
   */
  get storage() {
    return this.extensionStorage;
  }
  /**
   * An object of all registered commands.
   */
  get commands() {
    return this.commandManager.commands;
  }
  /**
   * Create a command chain to call multiple commands at once.
   */
  chain() {
    return this.commandManager.chain();
  }
  /**
   * Check if a command or a command chain can be executed. Without executing it.
   */
  can() {
    return this.commandManager.can();
  }
  /**
   * Inject CSS styles.
   */
  injectCSS() {
    this.options.injectCSS && document && (this.css = t0(e0, this.options.injectNonce));
  }
  /**
   * Update editor options.
   *
   * @param options A list of options
   */
  setOptions(e = {}) {
    this.options = {
      ...this.options,
      ...e
    }, !(!this.view || !this.state || this.isDestroyed) && (this.options.editorProps && this.view.setProps(this.options.editorProps), this.view.updateState(this.state));
  }
  /**
   * Update editable state of the editor.
   */
  setEditable(e, t = !0) {
    this.setOptions({ editable: e }), t && this.emit("update", { editor: this, transaction: this.state.tr });
  }
  /**
   * Returns whether the editor is editable.
   */
  get isEditable() {
    return this.options.editable && this.view && this.view.editable;
  }
  /**
   * Returns the editor state.
   */
  get state() {
    return this.view.state;
  }
  /**
   * Register a ProseMirror plugin.
   *
   * @param plugin A ProseMirror plugin
   * @param handlePlugins Control how to merge the plugin into the existing plugins.
   * @returns The new editor state
   */
  registerPlugin(e, t) {
    const r = Mu(t) ? t(e, [...this.state.plugins]) : [...this.state.plugins, e], i = this.state.reconfigure({ plugins: r });
    return this.view.updateState(i), i;
  }
  /**
   * Unregister a ProseMirror plugin.
   *
   * @param nameOrPluginKeyToRemove The plugins name
   * @returns The new editor state or undefined if the editor is destroyed
   */
  unregisterPlugin(e) {
    if (this.isDestroyed)
      return;
    const t = this.state.plugins;
    let r = t;
    if ([].concat(e).forEach((o) => {
      const s = typeof o == "string" ? `${o}$` : o.key;
      r = t.filter((l) => !l.key.startsWith(s));
    }), t.length === r.length)
      return;
    const i = this.state.reconfigure({
      plugins: r
    });
    return this.view.updateState(i), i;
  }
  /**
   * Creates an extension manager.
   */
  createExtensionManager() {
    var e, t;
    const i = [...this.options.enableCoreExtensions ? [
      G1,
      Eg.configure({
        blockSeparator: (t = (e = this.options.coreExtensionOptions) === null || e === void 0 ? void 0 : e.clipboardTextSerializer) === null || t === void 0 ? void 0 : t.blockSeparator
      }),
      U1,
      Y1,
      X1,
      Z1,
      J1,
      Q1
    ].filter((o) => typeof this.options.enableCoreExtensions == "object" ? this.options.enableCoreExtensions[o.name] !== !1 : !0) : [], ...this.options.extensions].filter((o) => ["extension", "node", "mark"].includes(o == null ? void 0 : o.type));
    this.extensionManager = new Fn(i, this);
  }
  /**
   * Creates an command manager.
   */
  createCommandManager() {
    this.commandManager = new Ro({
      editor: this
    });
  }
  /**
   * Creates a ProseMirror schema.
   */
  createSchema() {
    this.schema = this.extensionManager.schema;
  }
  /**
   * Creates a ProseMirror view.
   */
  createView() {
    var e;
    let t;
    try {
      t = zs(this.options.content, this.schema, this.options.parseOptions, { errorOnInvalidContent: this.options.enableContentCheck });
    } catch (s) {
      if (!(s instanceof Error) || !["[tiptap error]: Invalid JSON content", "[tiptap error]: Invalid HTML content"].includes(s.message))
        throw s;
      this.emit("contentError", {
        editor: this,
        error: s,
        disableCollaboration: () => {
          this.storage.collaboration && (this.storage.collaboration.isDisabled = !0), this.options.extensions = this.options.extensions.filter((l) => l.name !== "collaboration"), this.createExtensionManager();
        }
      }), t = zs(this.options.content, this.schema, this.options.parseOptions, { errorOnInvalidContent: !1 });
    }
    const r = Nu(t, this.options.autofocus);
    this.view = new Rm(this.options.element, {
      ...this.options.editorProps,
      attributes: {
        // add `role="textbox"` to the editor element
        role: "textbox",
        ...(e = this.options.editorProps) === null || e === void 0 ? void 0 : e.attributes
      },
      dispatchTransaction: this.dispatchTransaction.bind(this),
      state: Vn.create({
        doc: t,
        selection: r || void 0
      })
    });
    const i = this.state.reconfigure({
      plugins: this.extensionManager.plugins
    });
    this.view.updateState(i), this.createNodeViews(), this.prependClass();
    const o = this.view.dom;
    o.editor = this;
  }
  /**
   * Creates all node views.
   */
  createNodeViews() {
    this.view.isDestroyed || this.view.setProps({
      nodeViews: this.extensionManager.nodeViews
    });
  }
  /**
   * Prepend class name to element.
   */
  prependClass() {
    this.view.dom.className = `tiptap ${this.view.dom.className}`;
  }
  captureTransaction(e) {
    this.isCapturingTransaction = !0, e(), this.isCapturingTransaction = !1;
    const t = this.capturedTransaction;
    return this.capturedTransaction = null, t;
  }
  /**
   * The callback over which to send transactions (state updates) produced by the view.
   *
   * @param transaction An editor state transaction
   */
  dispatchTransaction(e) {
    if (this.view.isDestroyed)
      return;
    if (this.isCapturingTransaction) {
      if (!this.capturedTransaction) {
        this.capturedTransaction = e;
        return;
      }
      e.steps.forEach((s) => {
        var l;
        return (l = this.capturedTransaction) === null || l === void 0 ? void 0 : l.step(s);
      });
      return;
    }
    const t = this.state.apply(e), r = !this.state.selection.eq(t.selection);
    this.emit("beforeTransaction", {
      editor: this,
      transaction: e,
      nextState: t
    }), this.view.updateState(t), this.emit("transaction", {
      editor: this,
      transaction: e
    }), r && this.emit("selectionUpdate", {
      editor: this,
      transaction: e
    });
    const i = e.getMeta("focus"), o = e.getMeta("blur");
    i && this.emit("focus", {
      editor: this,
      event: i.event,
      transaction: e
    }), o && this.emit("blur", {
      editor: this,
      event: o.event,
      transaction: e
    }), !(!e.docChanged || e.getMeta("preventUpdate")) && this.emit("update", {
      editor: this,
      transaction: e
    });
  }
  /**
   * Get attributes of the currently selected node or mark.
   */
  getAttributes(e) {
    return Pu(this.state, e);
  }
  isActive(e, t) {
    const r = typeof e == "string" ? e : null, i = typeof e == "string" ? t : e;
    return T1(this.state, r, i);
  }
  /**
   * Get the document as JSON.
   */
  getJSON() {
    return this.state.doc.toJSON();
  }
  /**
   * Get the document as HTML.
   */
  getHTML() {
    return Ml(this.state.doc.content, this.schema);
  }
  /**
   * Get the document as text.
   */
  getText(e) {
    const { blockSeparator: t = `

`, textSerializers: r = {} } = e || {};
    return k1(this.state.doc, {
      blockSeparator: t,
      textSerializers: {
        ...Eu(this.schema),
        ...r
      }
    });
  }
  /**
   * Check if there is no content.
   */
  get isEmpty() {
    return Ho(this.state.doc);
  }
  /**
   * Get the number of characters for the current document.
   *
   * @deprecated
   */
  getCharacterCount() {
    return console.warn('[tiptap warn]: "editor.getCharacterCount()" is deprecated. Please use "editor.storage.characterCount.characters()" instead.'), this.state.doc.content.size - 2;
  }
  /**
   * Destroy the editor.
   */
  destroy() {
    if (this.emit("destroy"), this.view) {
      const e = this.view.dom;
      e && e.editor && delete e.editor, this.view.destroy();
    }
    this.removeAllListeners();
  }
  /**
   * Check if the editor is already destroyed.
   */
  get isDestroyed() {
    var e;
    return !(!((e = this.view) === null || e === void 0) && e.docView);
  }
  $node(e, t) {
    var r;
    return ((r = this.$doc) === null || r === void 0 ? void 0 : r.querySelector(e, t)) || null;
  }
  $nodes(e, t) {
    var r;
    return ((r = this.$doc) === null || r === void 0 ? void 0 : r.querySelectorAll(e, t)) || null;
  }
  $pos(e) {
    const t = this.state.doc.resolve(e);
    return new cn(t, this);
  }
  get $doc() {
    return this.$pos(0);
  }
};
function xn(n) {
  return new Lo({
    find: n.find,
    handler: ({ state: e, range: t, match: r }) => {
      const i = H(n.getAttributes, void 0, r);
      if (i === !1 || i === null)
        return null;
      const { tr: o } = e, s = r[r.length - 1], l = r[0];
      if (s) {
        const a = l.search(/\S/), c = t.from + l.indexOf(s), d = c + s.length;
        if (Dl(t.from, t.to, e.doc).filter((h) => h.mark.type.excluded.find((g) => g === n.type && g !== h.mark.type)).filter((h) => h.to > c).length)
          return null;
        d < t.to && o.delete(d, t.to), c > t.from && o.delete(t.from + a, c);
        const f = t.from + a + s.length;
        o.addMark(t.from + a, f, n.type.create(i || {})), o.removeStoredMark(n.type);
      }
    }
  });
}
function r0(n) {
  return new Lo({
    find: n.find,
    handler: ({ state: e, range: t, match: r }) => {
      const i = H(n.getAttributes, void 0, r) || {}, { tr: o } = e, s = t.from;
      let l = t.to;
      const a = n.type.create(i);
      if (r[1]) {
        const c = r[0].lastIndexOf(r[1]);
        let d = s + c;
        d > l ? d = l : l = d + r[1].length;
        const u = r[0][r[0].length - 1];
        o.insertText(u, s + r[0].length - 1), o.replaceWith(d, l, a);
      } else if (r[0]) {
        const c = n.type.isInline ? s : s - 1;
        o.insert(c, n.type.create(i)).delete(o.mapping.map(s), o.mapping.map(l));
      }
      o.scrollIntoView();
    }
  });
}
function Fs(n) {
  return new Lo({
    find: n.find,
    handler: ({ state: e, range: t, match: r }) => {
      const i = e.doc.resolve(t.from), o = H(n.getAttributes, void 0, r) || {};
      if (!i.node(-1).canReplaceWith(i.index(-1), i.indexAfter(-1), n.type))
        return null;
      e.tr.delete(t.from, t.to).setBlockType(t.from, t.from, n.type, o);
    }
  });
}
function Hr(n) {
  return new Lo({
    find: n.find,
    handler: ({ state: e, range: t, match: r, chain: i }) => {
      const o = H(n.getAttributes, void 0, r) || {}, s = e.tr.delete(t.from, t.to), a = s.doc.resolve(t.from).blockRange(), c = a && ul(a, n.type, o);
      if (!c)
        return null;
      if (s.wrap(a, c), n.keepMarks && n.editor) {
        const { selection: u, storedMarks: f } = e, { splittableMarks: h } = n.editor.extensionManager, p = f || u.$to.parentOffset && u.$from.marks();
        if (p) {
          const g = p.filter((m) => h.includes(m.type.name));
          s.ensureMarks(g);
        }
      }
      if (n.keepAttributes) {
        const u = n.type.name === "bulletList" || n.type.name === "orderedList" ? "listItem" : "taskList";
        i().updateAttributes(u, o).run();
      }
      const d = s.doc.resolve(t.from - 1).nodeBefore;
      d && d.type === n.type && Zt(s.doc, t.from - 1) && (!n.joinPredicate || n.joinPredicate(r, d)) && s.join(t.from - 1);
    }
  });
}
class de {
  constructor(e = {}) {
    this.type = "node", this.name = "node", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = H(E(this, "addOptions", {
      name: this.name
    }))), this.storage = H(E(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new de(e);
  }
  configure(e = {}) {
    const t = this.extend({
      ...this.config,
      addOptions: () => Po(this.options, e)
    });
    return t.name = this.name, t.parent = this.parent, t;
  }
  extend(e = {}) {
    const t = new de(e);
    return t.parent = this, this.child = t, t.name = e.name ? e.name : t.parent.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`), t.options = H(E(t, "addOptions", {
      name: t.name
    })), t.storage = H(E(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
}
function Qt(n) {
  return new Tu({
    find: n.find,
    handler: ({ state: e, range: t, match: r, pasteEvent: i }) => {
      const o = H(n.getAttributes, void 0, r, i);
      if (o === !1 || o === null)
        return null;
      const { tr: s } = e, l = r[r.length - 1], a = r[0];
      let c = t.to;
      if (l) {
        const d = a.search(/\S/), u = t.from + a.indexOf(l), f = u + l.length;
        if (Dl(t.from, t.to, e.doc).filter((p) => p.mark.type.excluded.find((m) => m === n.type && m !== p.mark.type)).filter((p) => p.to > u).length)
          return null;
        f < t.to && s.delete(f, t.to), u > t.from && s.delete(t.from + d, u), c = t.from + d + l.length, s.addMark(t.from + d, c, n.type.create(o || {})), s.removeStoredMark(n.type);
      }
    }
  });
}
function i0(n) {
  return n.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function o0(n) {
  return new Tu({
    find: n.find,
    handler({ match: e, chain: t, range: r, pasteEvent: i }) {
      const o = H(n.getAttributes, void 0, e, i), s = H(n.getContent, void 0, o);
      if (o === !1 || o === null)
        return null;
      const l = { type: n.type.name, attrs: o };
      s && (l.content = s), e.input && t().deleteRange(r).insertContentAt(r.from, l);
    }
  });
}
var Re = "top", Ge = "bottom", Ye = "right", Ie = "left", Rl = "auto", Yr = [Re, Ge, Ye, Ie], Gn = "start", zr = "end", s0 = "clippingParents", zu = "viewport", dr = "popper", l0 = "reference", lc = /* @__PURE__ */ Yr.reduce(function(n, e) {
  return n.concat([e + "-" + Gn, e + "-" + zr]);
}, []), Vu = /* @__PURE__ */ [].concat(Yr, [Rl]).reduce(function(n, e) {
  return n.concat([e, e + "-" + Gn, e + "-" + zr]);
}, []), a0 = "beforeRead", c0 = "read", d0 = "afterRead", u0 = "beforeMain", f0 = "main", h0 = "afterMain", p0 = "beforeWrite", m0 = "write", g0 = "afterWrite", y0 = [a0, c0, d0, u0, f0, h0, p0, m0, g0];
function ht(n) {
  return n ? (n.nodeName || "").toLowerCase() : null;
}
function ze(n) {
  if (n == null)
    return window;
  if (n.toString() !== "[object Window]") {
    var e = n.ownerDocument;
    return e && e.defaultView || window;
  }
  return n;
}
function Cn(n) {
  var e = ze(n).Element;
  return n instanceof e || n instanceof Element;
}
function Ue(n) {
  var e = ze(n).HTMLElement;
  return n instanceof e || n instanceof HTMLElement;
}
function Il(n) {
  if (typeof ShadowRoot > "u")
    return !1;
  var e = ze(n).ShadowRoot;
  return n instanceof e || n instanceof ShadowRoot;
}
function w0(n) {
  var e = n.state;
  Object.keys(e.elements).forEach(function(t) {
    var r = e.styles[t] || {}, i = e.attributes[t] || {}, o = e.elements[t];
    !Ue(o) || !ht(o) || (Object.assign(o.style, r), Object.keys(i).forEach(function(s) {
      var l = i[s];
      l === !1 ? o.removeAttribute(s) : o.setAttribute(s, l === !0 ? "" : l);
    }));
  });
}
function v0(n) {
  var e = n.state, t = {
    popper: {
      position: e.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(e.elements.popper.style, t.popper), e.styles = t, e.elements.arrow && Object.assign(e.elements.arrow.style, t.arrow), function() {
    Object.keys(e.elements).forEach(function(r) {
      var i = e.elements[r], o = e.attributes[r] || {}, s = Object.keys(e.styles.hasOwnProperty(r) ? e.styles[r] : t[r]), l = s.reduce(function(a, c) {
        return a[c] = "", a;
      }, {});
      !Ue(i) || !ht(i) || (Object.assign(i.style, l), Object.keys(o).forEach(function(a) {
        i.removeAttribute(a);
      }));
    });
  };
}
const Fu = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: w0,
  effect: v0,
  requires: ["computeStyles"]
};
function dt(n) {
  return n.split("-")[0];
}
var yn = Math.max, Ji = Math.min, Yn = Math.round;
function $s() {
  var n = navigator.userAgentData;
  return n != null && n.brands && Array.isArray(n.brands) ? n.brands.map(function(e) {
    return e.brand + "/" + e.version;
  }).join(" ") : navigator.userAgent;
}
function $u() {
  return !/^((?!chrome|android).)*safari/i.test($s());
}
function Xn(n, e, t) {
  e === void 0 && (e = !1), t === void 0 && (t = !1);
  var r = n.getBoundingClientRect(), i = 1, o = 1;
  e && Ue(n) && (i = n.offsetWidth > 0 && Yn(r.width) / n.offsetWidth || 1, o = n.offsetHeight > 0 && Yn(r.height) / n.offsetHeight || 1);
  var s = Cn(n) ? ze(n) : window, l = s.visualViewport, a = !$u() && t, c = (r.left + (a && l ? l.offsetLeft : 0)) / i, d = (r.top + (a && l ? l.offsetTop : 0)) / o, u = r.width / i, f = r.height / o;
  return {
    width: u,
    height: f,
    top: d,
    right: c + u,
    bottom: d + f,
    left: c,
    x: c,
    y: d
  };
}
function Ll(n) {
  var e = Xn(n), t = n.offsetWidth, r = n.offsetHeight;
  return Math.abs(e.width - t) <= 1 && (t = e.width), Math.abs(e.height - r) <= 1 && (r = e.height), {
    x: n.offsetLeft,
    y: n.offsetTop,
    width: t,
    height: r
  };
}
function ju(n, e) {
  var t = e.getRootNode && e.getRootNode();
  if (n.contains(e))
    return !0;
  if (t && Il(t)) {
    var r = e;
    do {
      if (r && n.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Dt(n) {
  return ze(n).getComputedStyle(n);
}
function b0(n) {
  return ["table", "td", "th"].indexOf(ht(n)) >= 0;
}
function nn(n) {
  return ((Cn(n) ? n.ownerDocument : (
    // $FlowFixMe[prop-missing]
    n.document
  )) || window.document).documentElement;
}
function zo(n) {
  return ht(n) === "html" ? n : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    n.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    n.parentNode || // DOM Element detected
    (Il(n) ? n.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    nn(n)
  );
}
function ac(n) {
  return !Ue(n) || // https://github.com/popperjs/popper-core/issues/837
  Dt(n).position === "fixed" ? null : n.offsetParent;
}
function k0(n) {
  var e = /firefox/i.test($s()), t = /Trident/i.test($s());
  if (t && Ue(n)) {
    var r = Dt(n);
    if (r.position === "fixed")
      return null;
  }
  var i = zo(n);
  for (Il(i) && (i = i.host); Ue(i) && ["html", "body"].indexOf(ht(i)) < 0; ) {
    var o = Dt(i);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || e && o.willChange === "filter" || e && o.filter && o.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function Xr(n) {
  for (var e = ze(n), t = ac(n); t && b0(t) && Dt(t).position === "static"; )
    t = ac(t);
  return t && (ht(t) === "html" || ht(t) === "body" && Dt(t).position === "static") ? e : t || k0(n) || e;
}
function Pl(n) {
  return ["top", "bottom"].indexOf(n) >= 0 ? "x" : "y";
}
function kr(n, e, t) {
  return yn(n, Ji(e, t));
}
function x0(n, e, t) {
  var r = kr(n, e, t);
  return r > t ? t : r;
}
function Wu() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function _u(n) {
  return Object.assign({}, Wu(), n);
}
function Ku(n, e) {
  return e.reduce(function(t, r) {
    return t[r] = n, t;
  }, {});
}
var C0 = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, {
    placement: t.placement
  })) : e, _u(typeof e != "number" ? e : Ku(e, Yr));
};
function S0(n) {
  var e, t = n.state, r = n.name, i = n.options, o = t.elements.arrow, s = t.modifiersData.popperOffsets, l = dt(t.placement), a = Pl(l), c = [Ie, Ye].indexOf(l) >= 0, d = c ? "height" : "width";
  if (!(!o || !s)) {
    var u = C0(i.padding, t), f = Ll(o), h = a === "y" ? Re : Ie, p = a === "y" ? Ge : Ye, g = t.rects.reference[d] + t.rects.reference[a] - s[a] - t.rects.popper[d], m = s[a] - t.rects.reference[a], y = Xr(o), v = y ? a === "y" ? y.clientHeight || 0 : y.clientWidth || 0 : 0, S = g / 2 - m / 2, w = u[h], C = v - f[d] - u[p], b = v / 2 - f[d] / 2 + S, O = kr(w, b, C), L = a;
    t.modifiersData[r] = (e = {}, e[L] = O, e.centerOffset = O - b, e);
  }
}
function M0(n) {
  var e = n.state, t = n.options, r = t.element, i = r === void 0 ? "[data-popper-arrow]" : r;
  i != null && (typeof i == "string" && (i = e.elements.popper.querySelector(i), !i) || ju(e.elements.popper, i) && (e.elements.arrow = i));
}
const T0 = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: S0,
  effect: M0,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Qn(n) {
  return n.split("-")[1];
}
var A0 = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function E0(n, e) {
  var t = n.x, r = n.y, i = e.devicePixelRatio || 1;
  return {
    x: Yn(t * i) / i || 0,
    y: Yn(r * i) / i || 0
  };
}
function cc(n) {
  var e, t = n.popper, r = n.popperRect, i = n.placement, o = n.variation, s = n.offsets, l = n.position, a = n.gpuAcceleration, c = n.adaptive, d = n.roundOffsets, u = n.isFixed, f = s.x, h = f === void 0 ? 0 : f, p = s.y, g = p === void 0 ? 0 : p, m = typeof d == "function" ? d({
    x: h,
    y: g
  }) : {
    x: h,
    y: g
  };
  h = m.x, g = m.y;
  var y = s.hasOwnProperty("x"), v = s.hasOwnProperty("y"), S = Ie, w = Re, C = window;
  if (c) {
    var b = Xr(t), O = "clientHeight", L = "clientWidth";
    if (b === ze(t) && (b = nn(t), Dt(b).position !== "static" && l === "absolute" && (O = "scrollHeight", L = "scrollWidth")), b = b, i === Re || (i === Ie || i === Ye) && o === zr) {
      w = Ge;
      var A = u && b === C && C.visualViewport ? C.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        b[O]
      );
      g -= A - r.height, g *= a ? 1 : -1;
    }
    if (i === Ie || (i === Re || i === Ge) && o === zr) {
      S = Ye;
      var P = u && b === C && C.visualViewport ? C.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        b[L]
      );
      h -= P - r.width, h *= a ? 1 : -1;
    }
  }
  var F = Object.assign({
    position: l
  }, c && A0), j = d === !0 ? E0({
    x: h,
    y: g
  }, ze(t)) : {
    x: h,
    y: g
  };
  if (h = j.x, g = j.y, a) {
    var W;
    return Object.assign({}, F, (W = {}, W[w] = v ? "0" : "", W[S] = y ? "0" : "", W.transform = (C.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + g + "px)" : "translate3d(" + h + "px, " + g + "px, 0)", W));
  }
  return Object.assign({}, F, (e = {}, e[w] = v ? g + "px" : "", e[S] = y ? h + "px" : "", e.transform = "", e));
}
function O0(n) {
  var e = n.state, t = n.options, r = t.gpuAcceleration, i = r === void 0 ? !0 : r, o = t.adaptive, s = o === void 0 ? !0 : o, l = t.roundOffsets, a = l === void 0 ? !0 : l, c = {
    placement: dt(e.placement),
    variation: Qn(e.placement),
    popper: e.elements.popper,
    popperRect: e.rects.popper,
    gpuAcceleration: i,
    isFixed: e.options.strategy === "fixed"
  };
  e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, cc(Object.assign({}, c, {
    offsets: e.modifiersData.popperOffsets,
    position: e.options.strategy,
    adaptive: s,
    roundOffsets: a
  })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, cc(Object.assign({}, c, {
    offsets: e.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: a
  })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-placement": e.placement
  });
}
const N0 = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: O0,
  data: {}
};
var mi = {
  passive: !0
};
function D0(n) {
  var e = n.state, t = n.instance, r = n.options, i = r.scroll, o = i === void 0 ? !0 : i, s = r.resize, l = s === void 0 ? !0 : s, a = ze(e.elements.popper), c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return o && c.forEach(function(d) {
    d.addEventListener("scroll", t.update, mi);
  }), l && a.addEventListener("resize", t.update, mi), function() {
    o && c.forEach(function(d) {
      d.removeEventListener("scroll", t.update, mi);
    }), l && a.removeEventListener("resize", t.update, mi);
  };
}
const R0 = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: D0,
  data: {}
};
var I0 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ei(n) {
  return n.replace(/left|right|bottom|top/g, function(e) {
    return I0[e];
  });
}
var L0 = {
  start: "end",
  end: "start"
};
function dc(n) {
  return n.replace(/start|end/g, function(e) {
    return L0[e];
  });
}
function Bl(n) {
  var e = ze(n), t = e.pageXOffset, r = e.pageYOffset;
  return {
    scrollLeft: t,
    scrollTop: r
  };
}
function Hl(n) {
  return Xn(nn(n)).left + Bl(n).scrollLeft;
}
function P0(n, e) {
  var t = ze(n), r = nn(n), i = t.visualViewport, o = r.clientWidth, s = r.clientHeight, l = 0, a = 0;
  if (i) {
    o = i.width, s = i.height;
    var c = $u();
    (c || !c && e === "fixed") && (l = i.offsetLeft, a = i.offsetTop);
  }
  return {
    width: o,
    height: s,
    x: l + Hl(n),
    y: a
  };
}
function B0(n) {
  var e, t = nn(n), r = Bl(n), i = (e = n.ownerDocument) == null ? void 0 : e.body, o = yn(t.scrollWidth, t.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), s = yn(t.scrollHeight, t.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), l = -r.scrollLeft + Hl(n), a = -r.scrollTop;
  return Dt(i || t).direction === "rtl" && (l += yn(t.clientWidth, i ? i.clientWidth : 0) - o), {
    width: o,
    height: s,
    x: l,
    y: a
  };
}
function zl(n) {
  var e = Dt(n), t = e.overflow, r = e.overflowX, i = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(t + i + r);
}
function qu(n) {
  return ["html", "body", "#document"].indexOf(ht(n)) >= 0 ? n.ownerDocument.body : Ue(n) && zl(n) ? n : qu(zo(n));
}
function xr(n, e) {
  var t;
  e === void 0 && (e = []);
  var r = qu(n), i = r === ((t = n.ownerDocument) == null ? void 0 : t.body), o = ze(r), s = i ? [o].concat(o.visualViewport || [], zl(r) ? r : []) : r, l = e.concat(s);
  return i ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(xr(zo(s)))
  );
}
function js(n) {
  return Object.assign({}, n, {
    left: n.x,
    top: n.y,
    right: n.x + n.width,
    bottom: n.y + n.height
  });
}
function H0(n, e) {
  var t = Xn(n, !1, e === "fixed");
  return t.top = t.top + n.clientTop, t.left = t.left + n.clientLeft, t.bottom = t.top + n.clientHeight, t.right = t.left + n.clientWidth, t.width = n.clientWidth, t.height = n.clientHeight, t.x = t.left, t.y = t.top, t;
}
function uc(n, e, t) {
  return e === zu ? js(P0(n, t)) : Cn(e) ? H0(e, t) : js(B0(nn(n)));
}
function z0(n) {
  var e = xr(zo(n)), t = ["absolute", "fixed"].indexOf(Dt(n).position) >= 0, r = t && Ue(n) ? Xr(n) : n;
  return Cn(r) ? e.filter(function(i) {
    return Cn(i) && ju(i, r) && ht(i) !== "body";
  }) : [];
}
function V0(n, e, t, r) {
  var i = e === "clippingParents" ? z0(n) : [].concat(e), o = [].concat(i, [t]), s = o[0], l = o.reduce(function(a, c) {
    var d = uc(n, c, r);
    return a.top = yn(d.top, a.top), a.right = Ji(d.right, a.right), a.bottom = Ji(d.bottom, a.bottom), a.left = yn(d.left, a.left), a;
  }, uc(n, s, r));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function Uu(n) {
  var e = n.reference, t = n.element, r = n.placement, i = r ? dt(r) : null, o = r ? Qn(r) : null, s = e.x + e.width / 2 - t.width / 2, l = e.y + e.height / 2 - t.height / 2, a;
  switch (i) {
    case Re:
      a = {
        x: s,
        y: e.y - t.height
      };
      break;
    case Ge:
      a = {
        x: s,
        y: e.y + e.height
      };
      break;
    case Ye:
      a = {
        x: e.x + e.width,
        y: l
      };
      break;
    case Ie:
      a = {
        x: e.x - t.width,
        y: l
      };
      break;
    default:
      a = {
        x: e.x,
        y: e.y
      };
  }
  var c = i ? Pl(i) : null;
  if (c != null) {
    var d = c === "y" ? "height" : "width";
    switch (o) {
      case Gn:
        a[c] = a[c] - (e[d] / 2 - t[d] / 2);
        break;
      case zr:
        a[c] = a[c] + (e[d] / 2 - t[d] / 2);
        break;
    }
  }
  return a;
}
function Vr(n, e) {
  e === void 0 && (e = {});
  var t = e, r = t.placement, i = r === void 0 ? n.placement : r, o = t.strategy, s = o === void 0 ? n.strategy : o, l = t.boundary, a = l === void 0 ? s0 : l, c = t.rootBoundary, d = c === void 0 ? zu : c, u = t.elementContext, f = u === void 0 ? dr : u, h = t.altBoundary, p = h === void 0 ? !1 : h, g = t.padding, m = g === void 0 ? 0 : g, y = _u(typeof m != "number" ? m : Ku(m, Yr)), v = f === dr ? l0 : dr, S = n.rects.popper, w = n.elements[p ? v : f], C = V0(Cn(w) ? w : w.contextElement || nn(n.elements.popper), a, d, s), b = Xn(n.elements.reference), O = Uu({
    reference: b,
    element: S,
    strategy: "absolute",
    placement: i
  }), L = js(Object.assign({}, S, O)), A = f === dr ? L : b, P = {
    top: C.top - A.top + y.top,
    bottom: A.bottom - C.bottom + y.bottom,
    left: C.left - A.left + y.left,
    right: A.right - C.right + y.right
  }, F = n.modifiersData.offset;
  if (f === dr && F) {
    var j = F[i];
    Object.keys(P).forEach(function(W) {
      var le = [Ye, Ge].indexOf(W) >= 0 ? 1 : -1, Q = [Re, Ge].indexOf(W) >= 0 ? "y" : "x";
      P[W] += j[Q] * le;
    });
  }
  return P;
}
function F0(n, e) {
  e === void 0 && (e = {});
  var t = e, r = t.placement, i = t.boundary, o = t.rootBoundary, s = t.padding, l = t.flipVariations, a = t.allowedAutoPlacements, c = a === void 0 ? Vu : a, d = Qn(r), u = d ? l ? lc : lc.filter(function(p) {
    return Qn(p) === d;
  }) : Yr, f = u.filter(function(p) {
    return c.indexOf(p) >= 0;
  });
  f.length === 0 && (f = u);
  var h = f.reduce(function(p, g) {
    return p[g] = Vr(n, {
      placement: g,
      boundary: i,
      rootBoundary: o,
      padding: s
    })[dt(g)], p;
  }, {});
  return Object.keys(h).sort(function(p, g) {
    return h[p] - h[g];
  });
}
function $0(n) {
  if (dt(n) === Rl)
    return [];
  var e = Ei(n);
  return [dc(n), e, dc(e)];
}
function j0(n) {
  var e = n.state, t = n.options, r = n.name;
  if (!e.modifiersData[r]._skip) {
    for (var i = t.mainAxis, o = i === void 0 ? !0 : i, s = t.altAxis, l = s === void 0 ? !0 : s, a = t.fallbackPlacements, c = t.padding, d = t.boundary, u = t.rootBoundary, f = t.altBoundary, h = t.flipVariations, p = h === void 0 ? !0 : h, g = t.allowedAutoPlacements, m = e.options.placement, y = dt(m), v = y === m, S = a || (v || !p ? [Ei(m)] : $0(m)), w = [m].concat(S).reduce(function(gt, Xe) {
      return gt.concat(dt(Xe) === Rl ? F0(e, {
        placement: Xe,
        boundary: d,
        rootBoundary: u,
        padding: c,
        flipVariations: p,
        allowedAutoPlacements: g
      }) : Xe);
    }, []), C = e.rects.reference, b = e.rects.popper, O = /* @__PURE__ */ new Map(), L = !0, A = w[0], P = 0; P < w.length; P++) {
      var F = w[P], j = dt(F), W = Qn(F) === Gn, le = [Re, Ge].indexOf(j) >= 0, Q = le ? "width" : "height", K = Vr(e, {
        placement: F,
        boundary: d,
        rootBoundary: u,
        altBoundary: f,
        padding: c
      }), U = le ? W ? Ye : Ie : W ? Ge : Re;
      C[Q] > b[Q] && (U = Ei(U));
      var Z = Ei(U), Le = [];
      if (o && Le.push(K[j] <= 0), l && Le.push(K[U] <= 0, K[Z] <= 0), Le.every(function(gt) {
        return gt;
      })) {
        A = F, L = !1;
        break;
      }
      O.set(F, Le);
    }
    if (L)
      for (var we = p ? 3 : 1, mt = function(Xe) {
        var yt = w.find(function(An) {
          var wt = O.get(An);
          if (wt)
            return wt.slice(0, Xe).every(function(En) {
              return En;
            });
        });
        if (yt)
          return A = yt, "break";
      }, Oe = we; Oe > 0; Oe--) {
        var rn = mt(Oe);
        if (rn === "break")
          break;
      }
    e.placement !== A && (e.modifiersData[r]._skip = !0, e.placement = A, e.reset = !0);
  }
}
const W0 = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: j0,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function fc(n, e, t) {
  return t === void 0 && (t = {
    x: 0,
    y: 0
  }), {
    top: n.top - e.height - t.y,
    right: n.right - e.width + t.x,
    bottom: n.bottom - e.height + t.y,
    left: n.left - e.width - t.x
  };
}
function hc(n) {
  return [Re, Ye, Ge, Ie].some(function(e) {
    return n[e] >= 0;
  });
}
function _0(n) {
  var e = n.state, t = n.name, r = e.rects.reference, i = e.rects.popper, o = e.modifiersData.preventOverflow, s = Vr(e, {
    elementContext: "reference"
  }), l = Vr(e, {
    altBoundary: !0
  }), a = fc(s, r), c = fc(l, i, o), d = hc(a), u = hc(c);
  e.modifiersData[t] = {
    referenceClippingOffsets: a,
    popperEscapeOffsets: c,
    isReferenceHidden: d,
    hasPopperEscaped: u
  }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-reference-hidden": d,
    "data-popper-escaped": u
  });
}
const K0 = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: _0
};
function q0(n, e, t) {
  var r = dt(n), i = [Ie, Re].indexOf(r) >= 0 ? -1 : 1, o = typeof t == "function" ? t(Object.assign({}, e, {
    placement: n
  })) : t, s = o[0], l = o[1];
  return s = s || 0, l = (l || 0) * i, [Ie, Ye].indexOf(r) >= 0 ? {
    x: l,
    y: s
  } : {
    x: s,
    y: l
  };
}
function U0(n) {
  var e = n.state, t = n.options, r = n.name, i = t.offset, o = i === void 0 ? [0, 0] : i, s = Vu.reduce(function(d, u) {
    return d[u] = q0(u, e.rects, o), d;
  }, {}), l = s[e.placement], a = l.x, c = l.y;
  e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += a, e.modifiersData.popperOffsets.y += c), e.modifiersData[r] = s;
}
const J0 = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: U0
};
function G0(n) {
  var e = n.state, t = n.name;
  e.modifiersData[t] = Uu({
    reference: e.rects.reference,
    element: e.rects.popper,
    strategy: "absolute",
    placement: e.placement
  });
}
const Y0 = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: G0,
  data: {}
};
function X0(n) {
  return n === "x" ? "y" : "x";
}
function Q0(n) {
  var e = n.state, t = n.options, r = n.name, i = t.mainAxis, o = i === void 0 ? !0 : i, s = t.altAxis, l = s === void 0 ? !1 : s, a = t.boundary, c = t.rootBoundary, d = t.altBoundary, u = t.padding, f = t.tether, h = f === void 0 ? !0 : f, p = t.tetherOffset, g = p === void 0 ? 0 : p, m = Vr(e, {
    boundary: a,
    rootBoundary: c,
    padding: u,
    altBoundary: d
  }), y = dt(e.placement), v = Qn(e.placement), S = !v, w = Pl(y), C = X0(w), b = e.modifiersData.popperOffsets, O = e.rects.reference, L = e.rects.popper, A = typeof g == "function" ? g(Object.assign({}, e.rects, {
    placement: e.placement
  })) : g, P = typeof A == "number" ? {
    mainAxis: A,
    altAxis: A
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, A), F = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, j = {
    x: 0,
    y: 0
  };
  if (b) {
    if (o) {
      var W, le = w === "y" ? Re : Ie, Q = w === "y" ? Ge : Ye, K = w === "y" ? "height" : "width", U = b[w], Z = U + m[le], Le = U - m[Q], we = h ? -L[K] / 2 : 0, mt = v === Gn ? O[K] : L[K], Oe = v === Gn ? -L[K] : -O[K], rn = e.elements.arrow, gt = h && rn ? Ll(rn) : {
        width: 0,
        height: 0
      }, Xe = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : Wu(), yt = Xe[le], An = Xe[Q], wt = kr(0, O[K], gt[K]), En = S ? O[K] / 2 - we - wt - yt - P.mainAxis : mt - wt - yt - P.mainAxis, Rt = S ? -O[K] / 2 + we + wt + An + P.mainAxis : Oe + wt + An + P.mainAxis, On = e.elements.arrow && Xr(e.elements.arrow), Qr = On ? w === "y" ? On.clientTop || 0 : On.clientLeft || 0 : 0, rr = (W = F == null ? void 0 : F[w]) != null ? W : 0, Zr = U + En - rr - Qr, ei = U + Rt - rr, ir = kr(h ? Ji(Z, Zr) : Z, U, h ? yn(Le, ei) : Le);
      b[w] = ir, j[w] = ir - U;
    }
    if (l) {
      var or, ti = w === "x" ? Re : Ie, ni = w === "x" ? Ge : Ye, vt = b[C], It = C === "y" ? "height" : "width", sr = vt + m[ti], on = vt - m[ni], lr = [Re, Ie].indexOf(y) !== -1, ri = (or = F == null ? void 0 : F[C]) != null ? or : 0, ii = lr ? sr : vt - O[It] - L[It] - ri + P.altAxis, oi = lr ? vt + O[It] + L[It] - ri - P.altAxis : on, si = h && lr ? x0(ii, vt, oi) : kr(h ? ii : sr, vt, h ? oi : on);
      b[C] = si, j[C] = si - vt;
    }
    e.modifiersData[r] = j;
  }
}
const Z0 = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Q0,
  requiresIfExists: ["offset"]
};
function ey(n) {
  return {
    scrollLeft: n.scrollLeft,
    scrollTop: n.scrollTop
  };
}
function ty(n) {
  return n === ze(n) || !Ue(n) ? Bl(n) : ey(n);
}
function ny(n) {
  var e = n.getBoundingClientRect(), t = Yn(e.width) / n.offsetWidth || 1, r = Yn(e.height) / n.offsetHeight || 1;
  return t !== 1 || r !== 1;
}
function ry(n, e, t) {
  t === void 0 && (t = !1);
  var r = Ue(e), i = Ue(e) && ny(e), o = nn(e), s = Xn(n, i, t), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = {
    x: 0,
    y: 0
  };
  return (r || !r && !t) && ((ht(e) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  zl(o)) && (l = ty(e)), Ue(e) ? (a = Xn(e, !0), a.x += e.clientLeft, a.y += e.clientTop) : o && (a.x = Hl(o))), {
    x: s.left + l.scrollLeft - a.x,
    y: s.top + l.scrollTop - a.y,
    width: s.width,
    height: s.height
  };
}
function iy(n) {
  var e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Set(), r = [];
  n.forEach(function(o) {
    e.set(o.name, o);
  });
  function i(o) {
    t.add(o.name);
    var s = [].concat(o.requires || [], o.requiresIfExists || []);
    s.forEach(function(l) {
      if (!t.has(l)) {
        var a = e.get(l);
        a && i(a);
      }
    }), r.push(o);
  }
  return n.forEach(function(o) {
    t.has(o.name) || i(o);
  }), r;
}
function oy(n) {
  var e = iy(n);
  return y0.reduce(function(t, r) {
    return t.concat(e.filter(function(i) {
      return i.phase === r;
    }));
  }, []);
}
function sy(n) {
  var e;
  return function() {
    return e || (e = new Promise(function(t) {
      Promise.resolve().then(function() {
        e = void 0, t(n());
      });
    })), e;
  };
}
function ly(n) {
  var e = n.reduce(function(t, r) {
    var i = t[r.name];
    return t[r.name] = i ? Object.assign({}, i, r, {
      options: Object.assign({}, i.options, r.options),
      data: Object.assign({}, i.data, r.data)
    }) : r, t;
  }, {});
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}
var pc = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function mc() {
  for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++)
    e[t] = arguments[t];
  return !e.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function ay(n) {
  n === void 0 && (n = {});
  var e = n, t = e.defaultModifiers, r = t === void 0 ? [] : t, i = e.defaultOptions, o = i === void 0 ? pc : i;
  return function(l, a, c) {
    c === void 0 && (c = o);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, pc, o),
      modifiersData: {},
      elements: {
        reference: l,
        popper: a
      },
      attributes: {},
      styles: {}
    }, u = [], f = !1, h = {
      state: d,
      setOptions: function(y) {
        var v = typeof y == "function" ? y(d.options) : y;
        g(), d.options = Object.assign({}, o, d.options, v), d.scrollParents = {
          reference: Cn(l) ? xr(l) : l.contextElement ? xr(l.contextElement) : [],
          popper: xr(a)
        };
        var S = oy(ly([].concat(r, d.options.modifiers)));
        return d.orderedModifiers = S.filter(function(w) {
          return w.enabled;
        }), p(), h.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var y = d.elements, v = y.reference, S = y.popper;
          if (mc(v, S)) {
            d.rects = {
              reference: ry(v, Xr(S), d.options.strategy === "fixed"),
              popper: Ll(S)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(P) {
              return d.modifiersData[P.name] = Object.assign({}, P.data);
            });
            for (var w = 0; w < d.orderedModifiers.length; w++) {
              if (d.reset === !0) {
                d.reset = !1, w = -1;
                continue;
              }
              var C = d.orderedModifiers[w], b = C.fn, O = C.options, L = O === void 0 ? {} : O, A = C.name;
              typeof b == "function" && (d = b({
                state: d,
                options: L,
                name: A,
                instance: h
              }) || d);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: sy(function() {
        return new Promise(function(m) {
          h.forceUpdate(), m(d);
        });
      }),
      destroy: function() {
        g(), f = !0;
      }
    };
    if (!mc(l, a))
      return h;
    h.setOptions(c).then(function(m) {
      !f && c.onFirstUpdate && c.onFirstUpdate(m);
    });
    function p() {
      d.orderedModifiers.forEach(function(m) {
        var y = m.name, v = m.options, S = v === void 0 ? {} : v, w = m.effect;
        if (typeof w == "function") {
          var C = w({
            state: d,
            name: y,
            instance: h,
            options: S
          }), b = function() {
          };
          u.push(C || b);
        }
      });
    }
    function g() {
      u.forEach(function(m) {
        return m();
      }), u = [];
    }
    return h;
  };
}
var cy = [R0, Y0, N0, Fu, J0, W0, Z0, T0, K0], dy = /* @__PURE__ */ ay({
  defaultModifiers: cy
}), uy = "tippy-box", Ju = "tippy-content", fy = "tippy-backdrop", Gu = "tippy-arrow", Yu = "tippy-svg-arrow", ln = {
  passive: !0,
  capture: !0
}, Xu = function() {
  return document.body;
};
function hy(n, e) {
  return {}.hasOwnProperty.call(n, e);
}
function as(n, e, t) {
  if (Array.isArray(n)) {
    var r = n[e];
    return r ?? (Array.isArray(t) ? t[e] : t);
  }
  return n;
}
function Vl(n, e) {
  var t = {}.toString.call(n);
  return t.indexOf("[object") === 0 && t.indexOf(e + "]") > -1;
}
function Qu(n, e) {
  return typeof n == "function" ? n.apply(void 0, e) : n;
}
function gc(n, e) {
  if (e === 0)
    return n;
  var t;
  return function(r) {
    clearTimeout(t), t = setTimeout(function() {
      n(r);
    }, e);
  };
}
function py(n, e) {
  var t = Object.assign({}, n);
  return e.forEach(function(r) {
    delete t[r];
  }), t;
}
function my(n) {
  return n.split(/\s+/).filter(Boolean);
}
function Hn(n) {
  return [].concat(n);
}
function yc(n, e) {
  n.indexOf(e) === -1 && n.push(e);
}
function gy(n) {
  return n.filter(function(e, t) {
    return n.indexOf(e) === t;
  });
}
function yy(n) {
  return n.split("-")[0];
}
function Gi(n) {
  return [].slice.call(n);
}
function wc(n) {
  return Object.keys(n).reduce(function(e, t) {
    return n[t] !== void 0 && (e[t] = n[t]), e;
  }, {});
}
function Cr() {
  return document.createElement("div");
}
function Fr(n) {
  return ["Element", "Fragment"].some(function(e) {
    return Vl(n, e);
  });
}
function wy(n) {
  return Vl(n, "NodeList");
}
function vy(n) {
  return Vl(n, "MouseEvent");
}
function by(n) {
  return !!(n && n._tippy && n._tippy.reference === n);
}
function ky(n) {
  return Fr(n) ? [n] : wy(n) ? Gi(n) : Array.isArray(n) ? n : Gi(document.querySelectorAll(n));
}
function cs(n, e) {
  n.forEach(function(t) {
    t && (t.style.transitionDuration = e + "ms");
  });
}
function vc(n, e) {
  n.forEach(function(t) {
    t && t.setAttribute("data-state", e);
  });
}
function xy(n) {
  var e, t = Hn(n), r = t[0];
  return r != null && (e = r.ownerDocument) != null && e.body ? r.ownerDocument : document;
}
function Cy(n, e) {
  var t = e.clientX, r = e.clientY;
  return n.every(function(i) {
    var o = i.popperRect, s = i.popperState, l = i.props, a = l.interactiveBorder, c = yy(s.placement), d = s.modifiersData.offset;
    if (!d)
      return !0;
    var u = c === "bottom" ? d.top.y : 0, f = c === "top" ? d.bottom.y : 0, h = c === "right" ? d.left.x : 0, p = c === "left" ? d.right.x : 0, g = o.top - r + u > a, m = r - o.bottom - f > a, y = o.left - t + h > a, v = t - o.right - p > a;
    return g || m || y || v;
  });
}
function ds(n, e, t) {
  var r = e + "EventListener";
  ["transitionend", "webkitTransitionEnd"].forEach(function(i) {
    n[r](i, t);
  });
}
function bc(n, e) {
  for (var t = e; t; ) {
    var r;
    if (n.contains(t))
      return !0;
    t = t.getRootNode == null || (r = t.getRootNode()) == null ? void 0 : r.host;
  }
  return !1;
}
var at = {
  isTouch: !1
}, kc = 0;
function Sy() {
  at.isTouch || (at.isTouch = !0, window.performance && document.addEventListener("mousemove", Zu));
}
function Zu() {
  var n = performance.now();
  n - kc < 20 && (at.isTouch = !1, document.removeEventListener("mousemove", Zu)), kc = n;
}
function My() {
  var n = document.activeElement;
  if (by(n)) {
    var e = n._tippy;
    n.blur && !e.state.isVisible && n.blur();
  }
}
function Ty() {
  document.addEventListener("touchstart", Sy, ln), window.addEventListener("blur", My);
}
var Ay = typeof window < "u" && typeof document < "u", Ey = Ay ? (
  // @ts-ignore
  !!window.msCrypto
) : !1;
function Ln(n) {
  var e = n === "destroy" ? "n already-" : " ";
  return [n + "() was called on a" + e + "destroyed instance. This is a no-op but", "indicates a potential memory leak."].join(" ");
}
function xc(n) {
  var e = /[ \t]{2,}/g, t = /^[ \t]*/gm;
  return n.replace(e, " ").replace(t, "").trim();
}
function Oy(n) {
  return xc(`
  %ctippy.js

  %c` + xc(n) + `

  %c👷‍ This is a development-only message. It will be removed in production.
  `);
}
function ef(n) {
  return [
    Oy(n),
    // title
    "color: #00C584; font-size: 1.3em; font-weight: bold;",
    // message
    "line-height: 1.5",
    // footer
    "color: #a6a095;"
  ];
}
var $r;
process.env.NODE_ENV !== "production" && Ny();
function Ny() {
  $r = /* @__PURE__ */ new Set();
}
function Et(n, e) {
  if (n && !$r.has(e)) {
    var t;
    $r.add(e), (t = console).warn.apply(t, ef(e));
  }
}
function Ws(n, e) {
  if (n && !$r.has(e)) {
    var t;
    $r.add(e), (t = console).error.apply(t, ef(e));
  }
}
function Dy(n) {
  var e = !n, t = Object.prototype.toString.call(n) === "[object Object]" && !n.addEventListener;
  Ws(e, ["tippy() was passed", "`" + String(n) + "`", "as its targets (first) argument. Valid types are: String, Element,", "Element[], or NodeList."].join(" ")), Ws(t, ["tippy() was passed a plain object which is not supported as an argument", "for virtual positioning. Use props.getReferenceClientRect instead."].join(" "));
}
var tf = {
  animateFill: !1,
  followCursor: !1,
  inlinePositioning: !1,
  sticky: !1
}, Ry = {
  allowHTML: !1,
  animation: "fade",
  arrow: !0,
  content: "",
  inertia: !1,
  maxWidth: 350,
  role: "tooltip",
  theme: "",
  zIndex: 9999
}, Be = Object.assign({
  appendTo: Xu,
  aria: {
    content: "auto",
    expanded: "auto"
  },
  delay: 0,
  duration: [300, 250],
  getReferenceClientRect: null,
  hideOnClick: !0,
  ignoreAttributes: !1,
  interactive: !1,
  interactiveBorder: 2,
  interactiveDebounce: 0,
  moveTransition: "",
  offset: [0, 10],
  onAfterUpdate: function() {
  },
  onBeforeUpdate: function() {
  },
  onCreate: function() {
  },
  onDestroy: function() {
  },
  onHidden: function() {
  },
  onHide: function() {
  },
  onMount: function() {
  },
  onShow: function() {
  },
  onShown: function() {
  },
  onTrigger: function() {
  },
  onUntrigger: function() {
  },
  onClickOutside: function() {
  },
  placement: "top",
  plugins: [],
  popperOptions: {},
  render: null,
  showOnCreate: !1,
  touch: !0,
  trigger: "mouseenter focus",
  triggerTarget: null
}, tf, Ry), Iy = Object.keys(Be), Ly = function(e) {
  process.env.NODE_ENV !== "production" && rf(e, []);
  var t = Object.keys(e);
  t.forEach(function(r) {
    Be[r] = e[r];
  });
};
function nf(n) {
  var e = n.plugins || [], t = e.reduce(function(r, i) {
    var o = i.name, s = i.defaultValue;
    if (o) {
      var l;
      r[o] = n[o] !== void 0 ? n[o] : (l = Be[o]) != null ? l : s;
    }
    return r;
  }, {});
  return Object.assign({}, n, t);
}
function Py(n, e) {
  var t = e ? Object.keys(nf(Object.assign({}, Be, {
    plugins: e
  }))) : Iy, r = t.reduce(function(i, o) {
    var s = (n.getAttribute("data-tippy-" + o) || "").trim();
    if (!s)
      return i;
    if (o === "content")
      i[o] = s;
    else
      try {
        i[o] = JSON.parse(s);
      } catch {
        i[o] = s;
      }
    return i;
  }, {});
  return r;
}
function Cc(n, e) {
  var t = Object.assign({}, e, {
    content: Qu(e.content, [n])
  }, e.ignoreAttributes ? {} : Py(n, e.plugins));
  return t.aria = Object.assign({}, Be.aria, t.aria), t.aria = {
    expanded: t.aria.expanded === "auto" ? e.interactive : t.aria.expanded,
    content: t.aria.content === "auto" ? e.interactive ? null : "describedby" : t.aria.content
  }, t;
}
function rf(n, e) {
  n === void 0 && (n = {}), e === void 0 && (e = []);
  var t = Object.keys(n);
  t.forEach(function(r) {
    var i = py(Be, Object.keys(tf)), o = !hy(i, r);
    o && (o = e.filter(function(s) {
      return s.name === r;
    }).length === 0), Et(o, ["`" + r + "`", "is not a valid prop. You may have spelled it incorrectly, or if it's", "a plugin, forgot to pass it in an array as props.plugins.", `

`, `All props: https://atomiks.github.io/tippyjs/v6/all-props/
`, "Plugins: https://atomiks.github.io/tippyjs/v6/plugins/"].join(" "));
  });
}
var By = function() {
  return "innerHTML";
};
function _s(n, e) {
  n[By()] = e;
}
function Sc(n) {
  var e = Cr();
  return n === !0 ? e.className = Gu : (e.className = Yu, Fr(n) ? e.appendChild(n) : _s(e, n)), e;
}
function Mc(n, e) {
  Fr(e.content) ? (_s(n, ""), n.appendChild(e.content)) : typeof e.content != "function" && (e.allowHTML ? _s(n, e.content) : n.textContent = e.content);
}
function Ks(n) {
  var e = n.firstElementChild, t = Gi(e.children);
  return {
    box: e,
    content: t.find(function(r) {
      return r.classList.contains(Ju);
    }),
    arrow: t.find(function(r) {
      return r.classList.contains(Gu) || r.classList.contains(Yu);
    }),
    backdrop: t.find(function(r) {
      return r.classList.contains(fy);
    })
  };
}
function of(n) {
  var e = Cr(), t = Cr();
  t.className = uy, t.setAttribute("data-state", "hidden"), t.setAttribute("tabindex", "-1");
  var r = Cr();
  r.className = Ju, r.setAttribute("data-state", "hidden"), Mc(r, n.props), e.appendChild(t), t.appendChild(r), i(n.props, n.props);
  function i(o, s) {
    var l = Ks(e), a = l.box, c = l.content, d = l.arrow;
    s.theme ? a.setAttribute("data-theme", s.theme) : a.removeAttribute("data-theme"), typeof s.animation == "string" ? a.setAttribute("data-animation", s.animation) : a.removeAttribute("data-animation"), s.inertia ? a.setAttribute("data-inertia", "") : a.removeAttribute("data-inertia"), a.style.maxWidth = typeof s.maxWidth == "number" ? s.maxWidth + "px" : s.maxWidth, s.role ? a.setAttribute("role", s.role) : a.removeAttribute("role"), (o.content !== s.content || o.allowHTML !== s.allowHTML) && Mc(c, n.props), s.arrow ? d ? o.arrow !== s.arrow && (a.removeChild(d), a.appendChild(Sc(s.arrow))) : a.appendChild(Sc(s.arrow)) : d && a.removeChild(d);
  }
  return {
    popper: e,
    onUpdate: i
  };
}
of.$$tippy = !0;
var Hy = 1, gi = [], us = [];
function zy(n, e) {
  var t = Cc(n, Object.assign({}, Be, nf(wc(e)))), r, i, o, s = !1, l = !1, a = !1, c = !1, d, u, f, h = [], p = gc(Zr, t.interactiveDebounce), g, m = Hy++, y = null, v = gy(t.plugins), S = {
    // Is the instance currently enabled?
    isEnabled: !0,
    // Is the tippy currently showing and not transitioning out?
    isVisible: !1,
    // Has the instance been destroyed?
    isDestroyed: !1,
    // Is the tippy currently mounted to the DOM?
    isMounted: !1,
    // Has the tippy finished transitioning in?
    isShown: !1
  }, w = {
    // properties
    id: m,
    reference: n,
    popper: Cr(),
    popperInstance: y,
    props: t,
    state: S,
    plugins: v,
    // methods
    clearDelayTimeouts: ii,
    setProps: oi,
    setContent: si,
    show: If,
    hide: Lf,
    hideWithInteractivity: Pf,
    enable: lr,
    disable: ri,
    unmount: Bf,
    destroy: Hf
  };
  if (!t.render)
    return process.env.NODE_ENV !== "production" && Ws(!0, "render() function has not been supplied."), w;
  var C = t.render(w), b = C.popper, O = C.onUpdate;
  b.setAttribute("data-tippy-root", ""), b.id = "tippy-" + w.id, w.popper = b, n._tippy = w, b._tippy = w;
  var L = v.map(function(k) {
    return k.fn(w);
  }), A = n.hasAttribute("aria-expanded");
  return On(), we(), U(), Z("onCreate", [w]), t.showOnCreate && sr(), b.addEventListener("mouseenter", function() {
    w.props.interactive && w.state.isVisible && w.clearDelayTimeouts();
  }), b.addEventListener("mouseleave", function() {
    w.props.interactive && w.props.trigger.indexOf("mouseenter") >= 0 && le().addEventListener("mousemove", p);
  }), w;
  function P() {
    var k = w.props.touch;
    return Array.isArray(k) ? k : [k, 0];
  }
  function F() {
    return P()[0] === "hold";
  }
  function j() {
    var k;
    return !!((k = w.props.render) != null && k.$$tippy);
  }
  function W() {
    return g || n;
  }
  function le() {
    var k = W().parentNode;
    return k ? xy(k) : document;
  }
  function Q() {
    return Ks(b);
  }
  function K(k) {
    return w.state.isMounted && !w.state.isVisible || at.isTouch || d && d.type === "focus" ? 0 : as(w.props.delay, k ? 0 : 1, Be.delay);
  }
  function U(k) {
    k === void 0 && (k = !1), b.style.pointerEvents = w.props.interactive && !k ? "" : "none", b.style.zIndex = "" + w.props.zIndex;
  }
  function Z(k, N, B) {
    if (B === void 0 && (B = !0), L.forEach(function($) {
      $[k] && $[k].apply($, N);
    }), B) {
      var _;
      (_ = w.props)[k].apply(_, N);
    }
  }
  function Le() {
    var k = w.props.aria;
    if (k.content) {
      var N = "aria-" + k.content, B = b.id, _ = Hn(w.props.triggerTarget || n);
      _.forEach(function($) {
        var Ce = $.getAttribute(N);
        if (w.state.isVisible)
          $.setAttribute(N, Ce ? Ce + " " + B : B);
        else {
          var Ve = Ce && Ce.replace(B, "").trim();
          Ve ? $.setAttribute(N, Ve) : $.removeAttribute(N);
        }
      });
    }
  }
  function we() {
    if (!(A || !w.props.aria.expanded)) {
      var k = Hn(w.props.triggerTarget || n);
      k.forEach(function(N) {
        w.props.interactive ? N.setAttribute("aria-expanded", w.state.isVisible && N === W() ? "true" : "false") : N.removeAttribute("aria-expanded");
      });
    }
  }
  function mt() {
    le().removeEventListener("mousemove", p), gi = gi.filter(function(k) {
      return k !== p;
    });
  }
  function Oe(k) {
    if (!(at.isTouch && (a || k.type === "mousedown"))) {
      var N = k.composedPath && k.composedPath()[0] || k.target;
      if (!(w.props.interactive && bc(b, N))) {
        if (Hn(w.props.triggerTarget || n).some(function(B) {
          return bc(B, N);
        })) {
          if (at.isTouch || w.state.isVisible && w.props.trigger.indexOf("click") >= 0)
            return;
        } else
          Z("onClickOutside", [w, k]);
        w.props.hideOnClick === !0 && (w.clearDelayTimeouts(), w.hide(), l = !0, setTimeout(function() {
          l = !1;
        }), w.state.isMounted || yt());
      }
    }
  }
  function rn() {
    a = !0;
  }
  function gt() {
    a = !1;
  }
  function Xe() {
    var k = le();
    k.addEventListener("mousedown", Oe, !0), k.addEventListener("touchend", Oe, ln), k.addEventListener("touchstart", gt, ln), k.addEventListener("touchmove", rn, ln);
  }
  function yt() {
    var k = le();
    k.removeEventListener("mousedown", Oe, !0), k.removeEventListener("touchend", Oe, ln), k.removeEventListener("touchstart", gt, ln), k.removeEventListener("touchmove", rn, ln);
  }
  function An(k, N) {
    En(k, function() {
      !w.state.isVisible && b.parentNode && b.parentNode.contains(b) && N();
    });
  }
  function wt(k, N) {
    En(k, N);
  }
  function En(k, N) {
    var B = Q().box;
    function _($) {
      $.target === B && (ds(B, "remove", _), N());
    }
    if (k === 0)
      return N();
    ds(B, "remove", u), ds(B, "add", _), u = _;
  }
  function Rt(k, N, B) {
    B === void 0 && (B = !1);
    var _ = Hn(w.props.triggerTarget || n);
    _.forEach(function($) {
      $.addEventListener(k, N, B), h.push({
        node: $,
        eventType: k,
        handler: N,
        options: B
      });
    });
  }
  function On() {
    F() && (Rt("touchstart", rr, {
      passive: !0
    }), Rt("touchend", ei, {
      passive: !0
    })), my(w.props.trigger).forEach(function(k) {
      if (k !== "manual")
        switch (Rt(k, rr), k) {
          case "mouseenter":
            Rt("mouseleave", ei);
            break;
          case "focus":
            Rt(Ey ? "focusout" : "blur", ir);
            break;
          case "focusin":
            Rt("focusout", ir);
            break;
        }
    });
  }
  function Qr() {
    h.forEach(function(k) {
      var N = k.node, B = k.eventType, _ = k.handler, $ = k.options;
      N.removeEventListener(B, _, $);
    }), h = [];
  }
  function rr(k) {
    var N, B = !1;
    if (!(!w.state.isEnabled || or(k) || l)) {
      var _ = ((N = d) == null ? void 0 : N.type) === "focus";
      d = k, g = k.currentTarget, we(), !w.state.isVisible && vy(k) && gi.forEach(function($) {
        return $(k);
      }), k.type === "click" && (w.props.trigger.indexOf("mouseenter") < 0 || s) && w.props.hideOnClick !== !1 && w.state.isVisible ? B = !0 : sr(k), k.type === "click" && (s = !B), B && !_ && on(k);
    }
  }
  function Zr(k) {
    var N = k.target, B = W().contains(N) || b.contains(N);
    if (!(k.type === "mousemove" && B)) {
      var _ = It().concat(b).map(function($) {
        var Ce, Ve = $._tippy, Nn = (Ce = Ve.popperInstance) == null ? void 0 : Ce.state;
        return Nn ? {
          popperRect: $.getBoundingClientRect(),
          popperState: Nn,
          props: t
        } : null;
      }).filter(Boolean);
      Cy(_, k) && (mt(), on(k));
    }
  }
  function ei(k) {
    var N = or(k) || w.props.trigger.indexOf("click") >= 0 && s;
    if (!N) {
      if (w.props.interactive) {
        w.hideWithInteractivity(k);
        return;
      }
      on(k);
    }
  }
  function ir(k) {
    w.props.trigger.indexOf("focusin") < 0 && k.target !== W() || w.props.interactive && k.relatedTarget && b.contains(k.relatedTarget) || on(k);
  }
  function or(k) {
    return at.isTouch ? F() !== k.type.indexOf("touch") >= 0 : !1;
  }
  function ti() {
    ni();
    var k = w.props, N = k.popperOptions, B = k.placement, _ = k.offset, $ = k.getReferenceClientRect, Ce = k.moveTransition, Ve = j() ? Ks(b).arrow : null, Nn = $ ? {
      getBoundingClientRect: $,
      contextElement: $.contextElement || W()
    } : n, Ql = {
      name: "$$tippy",
      enabled: !0,
      phase: "beforeWrite",
      requires: ["computeStyles"],
      fn: function(li) {
        var Dn = li.state;
        if (j()) {
          var zf = Q(), jo = zf.box;
          ["placement", "reference-hidden", "escaped"].forEach(function(ai) {
            ai === "placement" ? jo.setAttribute("data-placement", Dn.placement) : Dn.attributes.popper["data-popper-" + ai] ? jo.setAttribute("data-" + ai, "") : jo.removeAttribute("data-" + ai);
          }), Dn.attributes.popper = {};
        }
      }
    }, sn = [{
      name: "offset",
      options: {
        offset: _
      }
    }, {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    }, {
      name: "flip",
      options: {
        padding: 5
      }
    }, {
      name: "computeStyles",
      options: {
        adaptive: !Ce
      }
    }, Ql];
    j() && Ve && sn.push({
      name: "arrow",
      options: {
        element: Ve,
        padding: 3
      }
    }), sn.push.apply(sn, (N == null ? void 0 : N.modifiers) || []), w.popperInstance = dy(Nn, b, Object.assign({}, N, {
      placement: B,
      onFirstUpdate: f,
      modifiers: sn
    }));
  }
  function ni() {
    w.popperInstance && (w.popperInstance.destroy(), w.popperInstance = null);
  }
  function vt() {
    var k = w.props.appendTo, N, B = W();
    w.props.interactive && k === Xu || k === "parent" ? N = B.parentNode : N = Qu(k, [B]), N.contains(b) || N.appendChild(b), w.state.isMounted = !0, ti(), process.env.NODE_ENV !== "production" && Et(w.props.interactive && k === Be.appendTo && B.nextElementSibling !== b, ["Interactive tippy element may not be accessible via keyboard", "navigation because it is not directly after the reference element", "in the DOM source order.", `

`, "Using a wrapper <div> or <span> tag around the reference element", "solves this by creating a new parentNode context.", `

`, "Specifying `appendTo: document.body` silences this warning, but it", "assumes you are using a focus management solution to handle", "keyboard navigation.", `

`, "See: https://atomiks.github.io/tippyjs/v6/accessibility/#interactivity"].join(" "));
  }
  function It() {
    return Gi(b.querySelectorAll("[data-tippy-root]"));
  }
  function sr(k) {
    w.clearDelayTimeouts(), k && Z("onTrigger", [w, k]), Xe();
    var N = K(!0), B = P(), _ = B[0], $ = B[1];
    at.isTouch && _ === "hold" && $ && (N = $), N ? r = setTimeout(function() {
      w.show();
    }, N) : w.show();
  }
  function on(k) {
    if (w.clearDelayTimeouts(), Z("onUntrigger", [w, k]), !w.state.isVisible) {
      yt();
      return;
    }
    if (!(w.props.trigger.indexOf("mouseenter") >= 0 && w.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(k.type) >= 0 && s)) {
      var N = K(!1);
      N ? i = setTimeout(function() {
        w.state.isVisible && w.hide();
      }, N) : o = requestAnimationFrame(function() {
        w.hide();
      });
    }
  }
  function lr() {
    w.state.isEnabled = !0;
  }
  function ri() {
    w.hide(), w.state.isEnabled = !1;
  }
  function ii() {
    clearTimeout(r), clearTimeout(i), cancelAnimationFrame(o);
  }
  function oi(k) {
    if (process.env.NODE_ENV !== "production" && Et(w.state.isDestroyed, Ln("setProps")), !w.state.isDestroyed) {
      Z("onBeforeUpdate", [w, k]), Qr();
      var N = w.props, B = Cc(n, Object.assign({}, N, wc(k), {
        ignoreAttributes: !0
      }));
      w.props = B, On(), N.interactiveDebounce !== B.interactiveDebounce && (mt(), p = gc(Zr, B.interactiveDebounce)), N.triggerTarget && !B.triggerTarget ? Hn(N.triggerTarget).forEach(function(_) {
        _.removeAttribute("aria-expanded");
      }) : B.triggerTarget && n.removeAttribute("aria-expanded"), we(), U(), O && O(N, B), w.popperInstance && (ti(), It().forEach(function(_) {
        requestAnimationFrame(_._tippy.popperInstance.forceUpdate);
      })), Z("onAfterUpdate", [w, k]);
    }
  }
  function si(k) {
    w.setProps({
      content: k
    });
  }
  function If() {
    process.env.NODE_ENV !== "production" && Et(w.state.isDestroyed, Ln("show"));
    var k = w.state.isVisible, N = w.state.isDestroyed, B = !w.state.isEnabled, _ = at.isTouch && !w.props.touch, $ = as(w.props.duration, 0, Be.duration);
    if (!(k || N || B || _) && !W().hasAttribute("disabled") && (Z("onShow", [w], !1), w.props.onShow(w) !== !1)) {
      if (w.state.isVisible = !0, j() && (b.style.visibility = "visible"), U(), Xe(), w.state.isMounted || (b.style.transition = "none"), j()) {
        var Ce = Q(), Ve = Ce.box, Nn = Ce.content;
        cs([Ve, Nn], 0);
      }
      f = function() {
        var sn;
        if (!(!w.state.isVisible || c)) {
          if (c = !0, b.offsetHeight, b.style.transition = w.props.moveTransition, j() && w.props.animation) {
            var $o = Q(), li = $o.box, Dn = $o.content;
            cs([li, Dn], $), vc([li, Dn], "visible");
          }
          Le(), we(), yc(us, w), (sn = w.popperInstance) == null || sn.forceUpdate(), Z("onMount", [w]), w.props.animation && j() && wt($, function() {
            w.state.isShown = !0, Z("onShown", [w]);
          });
        }
      }, vt();
    }
  }
  function Lf() {
    process.env.NODE_ENV !== "production" && Et(w.state.isDestroyed, Ln("hide"));
    var k = !w.state.isVisible, N = w.state.isDestroyed, B = !w.state.isEnabled, _ = as(w.props.duration, 1, Be.duration);
    if (!(k || N || B) && (Z("onHide", [w], !1), w.props.onHide(w) !== !1)) {
      if (w.state.isVisible = !1, w.state.isShown = !1, c = !1, s = !1, j() && (b.style.visibility = "hidden"), mt(), yt(), U(!0), j()) {
        var $ = Q(), Ce = $.box, Ve = $.content;
        w.props.animation && (cs([Ce, Ve], _), vc([Ce, Ve], "hidden"));
      }
      Le(), we(), w.props.animation ? j() && An(_, w.unmount) : w.unmount();
    }
  }
  function Pf(k) {
    process.env.NODE_ENV !== "production" && Et(w.state.isDestroyed, Ln("hideWithInteractivity")), le().addEventListener("mousemove", p), yc(gi, p), p(k);
  }
  function Bf() {
    process.env.NODE_ENV !== "production" && Et(w.state.isDestroyed, Ln("unmount")), w.state.isVisible && w.hide(), w.state.isMounted && (ni(), It().forEach(function(k) {
      k._tippy.unmount();
    }), b.parentNode && b.parentNode.removeChild(b), us = us.filter(function(k) {
      return k !== w;
    }), w.state.isMounted = !1, Z("onHidden", [w]));
  }
  function Hf() {
    process.env.NODE_ENV !== "production" && Et(w.state.isDestroyed, Ln("destroy")), !w.state.isDestroyed && (w.clearDelayTimeouts(), w.unmount(), Qr(), delete n._tippy, w.state.isDestroyed = !0, Z("onDestroy", [w]));
  }
}
function Tn(n, e) {
  e === void 0 && (e = {});
  var t = Be.plugins.concat(e.plugins || []);
  process.env.NODE_ENV !== "production" && (Dy(n), rf(e, t)), Ty();
  var r = Object.assign({}, e, {
    plugins: t
  }), i = ky(n);
  if (process.env.NODE_ENV !== "production") {
    var o = Fr(r.content), s = i.length > 1;
    Et(o && s, ["tippy() was passed an Element as the `content` prop, but more than", "one tippy instance was created by this invocation. This means the", "content element will only be appended to the last tippy instance.", `

`, "Instead, pass the .innerHTML of the element, or use a function that", "returns a cloned version of the element instead.", `

`, `1) content: element.innerHTML
`, "2) content: () => element.cloneNode(true)"].join(" "));
  }
  var l = i.reduce(function(a, c) {
    var d = c && zy(c, r);
    return d && a.push(d), a;
  }, []);
  return Fr(n) ? l[0] : l;
}
Tn.defaultProps = Be;
Tn.setDefaultProps = Ly;
Tn.currentInput = at;
Object.assign({}, Fu, {
  effect: function(e) {
    var t = e.state, r = {
      popper: {
        position: t.options.strategy,
        left: "0",
        top: "0",
        margin: "0"
      },
      arrow: {
        position: "absolute"
      },
      reference: {}
    };
    Object.assign(t.elements.popper.style, r.popper), t.styles = r, t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow);
  }
});
Tn.setDefaultProps({
  render: of
});
class Vy {
  constructor({ editor: e, element: t, view: r, tippyOptions: i = {}, updateDelay: o = 250, shouldShow: s }) {
    this.preventHide = !1, this.shouldShow = ({ view: l, state: a, from: c, to: d }) => {
      const { doc: u, selection: f } = a, { empty: h } = f, p = !u.textBetween(c, d).length && El(a.selection), g = this.element.contains(document.activeElement);
      return !(!(l.hasFocus() || g) || h || p || !this.editor.isEditable);
    }, this.mousedownHandler = () => {
      this.preventHide = !0;
    }, this.dragstartHandler = () => {
      this.hide();
    }, this.focusHandler = () => {
      setTimeout(() => this.update(this.editor.view));
    }, this.blurHandler = ({ event: l }) => {
      var a;
      if (this.preventHide) {
        this.preventHide = !1;
        return;
      }
      l != null && l.relatedTarget && (!((a = this.element.parentNode) === null || a === void 0) && a.contains(l.relatedTarget)) || (l == null ? void 0 : l.relatedTarget) !== this.editor.view.dom && this.hide();
    }, this.tippyBlurHandler = (l) => {
      this.blurHandler({ event: l });
    }, this.handleDebouncedUpdate = (l, a) => {
      const c = !(a != null && a.selection.eq(l.state.selection)), d = !(a != null && a.doc.eq(l.state.doc));
      !c && !d || (this.updateDebounceTimer && clearTimeout(this.updateDebounceTimer), this.updateDebounceTimer = window.setTimeout(() => {
        this.updateHandler(l, c, d, a);
      }, this.updateDelay));
    }, this.updateHandler = (l, a, c, d) => {
      var u, f, h;
      const { state: p, composing: g } = l, { selection: m } = p;
      if (g || !a && !c)
        return;
      this.createTooltip();
      const { ranges: v } = m, S = Math.min(...v.map((b) => b.$from.pos)), w = Math.max(...v.map((b) => b.$to.pos));
      if (!((u = this.shouldShow) === null || u === void 0 ? void 0 : u.call(this, {
        editor: this.editor,
        element: this.element,
        view: l,
        state: p,
        oldState: d,
        from: S,
        to: w
      }))) {
        this.hide();
        return;
      }
      (f = this.tippy) === null || f === void 0 || f.setProps({
        getReferenceClientRect: ((h = this.tippyOptions) === null || h === void 0 ? void 0 : h.getReferenceClientRect) || (() => {
          if (Bu(p.selection)) {
            let b = l.nodeDOM(S);
            if (b) {
              const O = b.dataset.nodeViewWrapper ? b : b.querySelector("[data-node-view-wrapper]");
              if (O && (b = O.firstChild), b)
                return b.getBoundingClientRect();
            }
          }
          return Hu(l, S, w);
        })
      }), this.show();
    }, this.editor = e, this.element = t, this.view = r, this.updateDelay = o, s && (this.shouldShow = s), this.element.addEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.view.dom.addEventListener("dragstart", this.dragstartHandler), this.editor.on("focus", this.focusHandler), this.editor.on("blur", this.blurHandler), this.tippyOptions = i, this.element.remove(), this.element.style.visibility = "visible";
  }
  createTooltip() {
    const { element: e } = this.editor.options, t = !!e.parentElement;
    this.tippy || !t || (this.tippy = Tn(e, {
      duration: 0,
      getReferenceClientRect: null,
      content: this.element,
      interactive: !0,
      trigger: "manual",
      placement: "top",
      hideOnClick: "toggle",
      ...this.tippyOptions
    }), this.tippy.popper.firstChild && this.tippy.popper.firstChild.addEventListener("blur", this.tippyBlurHandler));
  }
  update(e, t) {
    const { state: r } = e, i = r.selection.from !== r.selection.to;
    if (this.updateDelay > 0 && i) {
      this.handleDebouncedUpdate(e, t);
      return;
    }
    const o = !(t != null && t.selection.eq(e.state.selection)), s = !(t != null && t.doc.eq(e.state.doc));
    this.updateHandler(e, o, s, t);
  }
  show() {
    var e;
    (e = this.tippy) === null || e === void 0 || e.show();
  }
  hide() {
    var e;
    (e = this.tippy) === null || e === void 0 || e.hide();
  }
  destroy() {
    var e, t;
    !((e = this.tippy) === null || e === void 0) && e.popper.firstChild && this.tippy.popper.firstChild.removeEventListener("blur", this.tippyBlurHandler), (t = this.tippy) === null || t === void 0 || t.destroy(), this.element.removeEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.view.dom.removeEventListener("dragstart", this.dragstartHandler), this.editor.off("focus", this.focusHandler), this.editor.off("blur", this.blurHandler);
  }
}
const sf = (n) => new X({
  key: typeof n.pluginKey == "string" ? new se(n.pluginKey) : n.pluginKey,
  view: (e) => new Vy({ view: e, ...n })
});
te.create({
  name: "bubbleMenu",
  addOptions() {
    return {
      element: null,
      tippyOptions: {},
      pluginKey: "bubbleMenu",
      updateDelay: void 0,
      shouldShow: null
    };
  },
  addProseMirrorPlugins() {
    return this.options.element ? [
      sf({
        pluginKey: this.options.pluginKey,
        editor: this.editor,
        element: this.options.element,
        tippyOptions: this.options.tippyOptions,
        updateDelay: this.options.updateDelay,
        shouldShow: this.options.shouldShow
      })
    ] : [];
  }
});
class Fy {
  constructor({ editor: e, element: t, view: r, tippyOptions: i = {}, shouldShow: o }) {
    this.preventHide = !1, this.shouldShow = ({ view: s, state: l }) => {
      const { selection: a } = l, { $anchor: c, empty: d } = a, u = c.depth === 1, f = c.parent.isTextblock && !c.parent.type.spec.code && !c.parent.textContent;
      return !(!s.hasFocus() || !d || !u || !f || !this.editor.isEditable);
    }, this.mousedownHandler = () => {
      this.preventHide = !0;
    }, this.focusHandler = () => {
      setTimeout(() => this.update(this.editor.view));
    }, this.blurHandler = ({ event: s }) => {
      var l;
      if (this.preventHide) {
        this.preventHide = !1;
        return;
      }
      s != null && s.relatedTarget && (!((l = this.element.parentNode) === null || l === void 0) && l.contains(s.relatedTarget)) || (s == null ? void 0 : s.relatedTarget) !== this.editor.view.dom && this.hide();
    }, this.tippyBlurHandler = (s) => {
      this.blurHandler({ event: s });
    }, this.editor = e, this.element = t, this.view = r, o && (this.shouldShow = o), this.element.addEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.editor.on("focus", this.focusHandler), this.editor.on("blur", this.blurHandler), this.tippyOptions = i, this.element.remove(), this.element.style.visibility = "visible";
  }
  createTooltip() {
    const { element: e } = this.editor.options, t = !!e.parentElement;
    this.tippy || !t || (this.tippy = Tn(e, {
      duration: 0,
      getReferenceClientRect: null,
      content: this.element,
      interactive: !0,
      trigger: "manual",
      placement: "right",
      hideOnClick: "toggle",
      ...this.tippyOptions
    }), this.tippy.popper.firstChild && this.tippy.popper.firstChild.addEventListener("blur", this.tippyBlurHandler));
  }
  update(e, t) {
    var r, i, o;
    const { state: s } = e, { doc: l, selection: a } = s, { from: c, to: d } = a;
    if (t && t.doc.eq(l) && t.selection.eq(a))
      return;
    if (this.createTooltip(), !((r = this.shouldShow) === null || r === void 0 ? void 0 : r.call(this, {
      editor: this.editor,
      view: e,
      state: s,
      oldState: t
    }))) {
      this.hide();
      return;
    }
    (i = this.tippy) === null || i === void 0 || i.setProps({
      getReferenceClientRect: ((o = this.tippyOptions) === null || o === void 0 ? void 0 : o.getReferenceClientRect) || (() => Hu(e, c, d))
    }), this.show();
  }
  show() {
    var e;
    (e = this.tippy) === null || e === void 0 || e.show();
  }
  hide() {
    var e;
    (e = this.tippy) === null || e === void 0 || e.hide();
  }
  destroy() {
    var e, t;
    !((e = this.tippy) === null || e === void 0) && e.popper.firstChild && this.tippy.popper.firstChild.removeEventListener("blur", this.tippyBlurHandler), (t = this.tippy) === null || t === void 0 || t.destroy(), this.element.removeEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.editor.off("focus", this.focusHandler), this.editor.off("blur", this.blurHandler);
  }
}
const lf = (n) => new X({
  key: typeof n.pluginKey == "string" ? new se(n.pluginKey) : n.pluginKey,
  view: (e) => new Fy({ view: e, ...n })
});
te.create({
  name: "floatingMenu",
  addOptions() {
    return {
      element: null,
      tippyOptions: {},
      pluginKey: "floatingMenu",
      shouldShow: null
    };
  },
  addProseMirrorPlugins() {
    return this.options.element ? [
      lf({
        pluginKey: this.options.pluginKey,
        editor: this.editor,
        element: this.options.element,
        tippyOptions: this.options.tippyOptions,
        shouldShow: this.options.shouldShow
      })
    ] : [];
  }
});
const $y = Kr({
  name: "BubbleMenu",
  props: {
    pluginKey: {
      type: [String, Object],
      default: "bubbleMenu"
    },
    editor: {
      type: Object,
      required: !0
    },
    updateDelay: {
      type: Number,
      default: void 0
    },
    tippyOptions: {
      type: Object,
      default: () => ({})
    },
    shouldShow: {
      type: Function,
      default: null
    }
  },
  setup(n, { slots: e }) {
    const t = ll(null);
    return nd(() => {
      const { updateDelay: r, editor: i, pluginKey: o, shouldShow: s, tippyOptions: l } = n;
      i.registerPlugin(sf({
        updateDelay: r,
        editor: i,
        element: t.value,
        pluginKey: o,
        shouldShow: s,
        tippyOptions: l
      }));
    }), al(() => {
      const { pluginKey: r, editor: i } = n;
      i.unregisterPlugin(r);
    }), () => {
      var r;
      return er("div", { ref: t }, (r = e.default) === null || r === void 0 ? void 0 : r.call(e));
    };
  }
});
function Tc(n) {
  return _f((e, t) => ({
    get() {
      return e(), n;
    },
    set(r) {
      n = r, requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          t();
        });
      });
    }
  }));
}
class jy extends n0 {
  constructor(e = {}) {
    return super(e), this.contentComponent = null, this.appContext = null, this.reactiveState = Tc(this.view.state), this.reactiveExtensionStorage = Tc(this.extensionStorage), this.on("beforeTransaction", ({ nextState: t }) => {
      this.reactiveState.value = t, this.reactiveExtensionStorage.value = this.extensionStorage;
    }), rd(this);
  }
  get state() {
    return this.reactiveState ? this.reactiveState.value : this.view.state;
  }
  get storage() {
    return this.reactiveExtensionStorage ? this.reactiveExtensionStorage.value : super.storage;
  }
  /**
   * Register a ProseMirror plugin.
   */
  registerPlugin(e, t) {
    const r = super.registerPlugin(e, t);
    return this.reactiveState && (this.reactiveState.value = r), r;
  }
  /**
   * Unregister a ProseMirror plugin.
   */
  unregisterPlugin(e) {
    const t = super.unregisterPlugin(e);
    return this.reactiveState && t && (this.reactiveState.value = t), t;
  }
}
const Wy = Kr({
  name: "EditorContent",
  props: {
    editor: {
      default: null,
      type: Object
    }
  },
  setup(n) {
    const e = ll(), t = Vf();
    return Ff(() => {
      const r = n.editor;
      r && r.options.element && e.value && $f(() => {
        if (!e.value || !r.options.element.firstChild)
          return;
        const i = jf(e.value);
        e.value.append(...r.options.element.childNodes), r.contentComponent = t.ctx._, t && (r.appContext = {
          ...t.appContext,
          // Vue internally uses prototype chain to forward/shadow injects across the entire component chain
          // so don't use object spread operator or 'Object.assign' and just set `provides` as is on editor's appContext
          // @ts-expect-error forward instance's 'provides' into appContext
          provides: t.provides
        }), r.setOptions({
          element: i
        }), r.createNodeViews();
      });
    }), al(() => {
      const r = n.editor;
      r && (r.contentComponent = null, r.appContext = null);
    }), { rootEl: e };
  },
  render() {
    return er("div", {
      ref: (n) => {
        this.rootEl = n;
      }
    });
  }
});
Kr({
  name: "FloatingMenu",
  props: {
    pluginKey: {
      // TODO: TypeScript breaks :(
      // type: [String, Object as PropType<Exclude<FloatingMenuPluginProps['pluginKey'], string>>],
      type: null,
      default: "floatingMenu"
    },
    editor: {
      type: Object,
      required: !0
    },
    tippyOptions: {
      type: Object,
      default: () => ({})
    },
    shouldShow: {
      type: Function,
      default: null
    }
  },
  setup(n, { slots: e }) {
    const t = ll(null);
    return nd(() => {
      const { pluginKey: r, editor: i, tippyOptions: o, shouldShow: s } = n;
      i.registerPlugin(lf({
        pluginKey: r,
        editor: i,
        element: t.value,
        tippyOptions: o,
        shouldShow: s
      }));
    }), al(() => {
      const { pluginKey: r, editor: i } = n;
      i.unregisterPlugin(r);
    }), () => {
      var r;
      return er("div", { ref: t }, (r = e.default) === null || r === void 0 ? void 0 : r.call(e));
    };
  }
});
Kr({
  name: "NodeViewContent",
  props: {
    as: {
      type: String,
      default: "div"
    }
  },
  render() {
    return er(this.as, {
      style: {
        whiteSpace: "pre-wrap"
      },
      "data-node-view-content": ""
    });
  }
});
Kr({
  name: "NodeViewWrapper",
  props: {
    as: {
      type: String,
      default: "div"
    }
  },
  inject: ["onDragStart", "decorationClasses"],
  render() {
    var n, e;
    return er(this.as, {
      // @ts-ignore
      class: this.decorationClasses,
      style: {
        whiteSpace: "normal"
      },
      "data-node-view-wrapper": "",
      // @ts-ignore (https://github.com/vuejs/vue-next/issues/3031)
      onDragstart: this.onDragStart
    }, (e = (n = this.$slots).default) === null || e === void 0 ? void 0 : e.call(n));
  }
});
class _y {
  constructor(e, { props: t = {}, editor: r }) {
    this.editor = r, this.component = rd(e), this.el = document.createElement("div"), this.props = Wf(t), this.renderedComponent = this.renderComponent();
  }
  get element() {
    return this.renderedComponent.el;
  }
  get ref() {
    var e, t, r, i;
    return !((t = (e = this.renderedComponent.vNode) === null || e === void 0 ? void 0 : e.component) === null || t === void 0) && t.exposed ? this.renderedComponent.vNode.component.exposed : (i = (r = this.renderedComponent.vNode) === null || r === void 0 ? void 0 : r.component) === null || i === void 0 ? void 0 : i.proxy;
  }
  renderComponent() {
    let e = er(this.component, this.props);
    return this.editor.appContext && (e.appContext = this.editor.appContext), typeof document < "u" && this.el && ea(e, this.el), { vNode: e, destroy: () => {
      this.el && ea(null, this.el), this.el = null, e = null;
    }, el: this.el ? this.el.firstElementChild : null };
  }
  updateProps(e = {}) {
    Object.entries(e).forEach(([t, r]) => {
      this.props[t] = r;
    }), this.renderComponent();
  }
  destroy() {
    this.renderedComponent.destroy();
  }
}
const Ky = /^\s*>\s$/, af = de.create({
  name: "blockquote",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "block+",
  group: "block",
  defining: !0,
  parseHTML() {
    return [
      { tag: "blockquote" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["blockquote", Y(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setBlockquote: () => ({ commands: n }) => n.wrapIn(this.name),
      toggleBlockquote: () => ({ commands: n }) => n.toggleWrap(this.name),
      unsetBlockquote: () => ({ commands: n }) => n.lift(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-b": () => this.editor.commands.toggleBlockquote()
    };
  },
  addInputRules() {
    return [
      Hr({
        find: Ky,
        type: this.type
      })
    ];
  }
}), qy = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))$/, Uy = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))/g, Jy = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))$/, Gy = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))/g, Yy = Je.create({
  name: "bold",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "strong"
      },
      {
        tag: "b",
        getAttrs: (n) => n.style.fontWeight !== "normal" && null
      },
      {
        style: "font-weight=400",
        clearMark: (n) => n.type.name === this.name
      },
      {
        style: "font-weight",
        getAttrs: (n) => /^(bold(er)?|[5-9]\d{2,})$/.test(n) && null
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["strong", Y(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setBold: () => ({ commands: n }) => n.setMark(this.name),
      toggleBold: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetBold: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-b": () => this.editor.commands.toggleBold(),
      "Mod-B": () => this.editor.commands.toggleBold()
    };
  },
  addInputRules() {
    return [
      xn({
        find: qy,
        type: this.type
      }),
      xn({
        find: Jy,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      Qt({
        find: Uy,
        type: this.type
      }),
      Qt({
        find: Gy,
        type: this.type
      })
    ];
  }
}), Xy = "listItem", Ac = "textStyle", Ec = /^\s*([-+*])\s$/, Qy = de.create({
  name: "bulletList",
  addOptions() {
    return {
      itemTypeName: "listItem",
      HTMLAttributes: {},
      keepMarks: !1,
      keepAttributes: !1
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  parseHTML() {
    return [
      { tag: "ul" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["ul", Y(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      toggleBulletList: () => ({ commands: n, chain: e }) => this.options.keepAttributes ? e().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(Xy, this.editor.getAttributes(Ac)).run() : n.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-8": () => this.editor.commands.toggleBulletList()
    };
  },
  addInputRules() {
    let n = Hr({
      find: Ec,
      type: this.type
    });
    return (this.options.keepMarks || this.options.keepAttributes) && (n = Hr({
      find: Ec,
      type: this.type,
      keepMarks: this.options.keepMarks,
      keepAttributes: this.options.keepAttributes,
      getAttributes: () => this.editor.getAttributes(Ac),
      editor: this.editor
    })), [
      n
    ];
  }
}), Zy = new RegExp("(?<!`)`([^`]+)`(?!`)"), ew = new RegExp("(?<!`)`([^`]+)`(?!`)", "g"), tw = Je.create({
  name: "code",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  excludes: "_",
  code: !0,
  exitable: !0,
  parseHTML() {
    return [
      { tag: "code" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["code", Y(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setCode: () => ({ commands: n }) => n.setMark(this.name),
      toggleCode: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetCode: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-e": () => this.editor.commands.toggleCode()
    };
  },
  addInputRules() {
    return [
      xn({
        find: Zy,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      Qt({
        find: ew,
        type: this.type
      })
    ];
  }
}), nw = /^```([a-z]+)?[\s\n]$/, rw = /^~~~([a-z]+)?[\s\n]$/, iw = de.create({
  name: "codeBlock",
  addOptions() {
    return {
      languageClassPrefix: "language-",
      exitOnTripleEnter: !0,
      exitOnArrowDown: !0,
      defaultLanguage: null,
      HTMLAttributes: {}
    };
  },
  content: "text*",
  marks: "",
  group: "block",
  code: !0,
  defining: !0,
  addAttributes() {
    return {
      language: {
        default: this.options.defaultLanguage,
        parseHTML: (n) => {
          var e;
          const { languageClassPrefix: t } = this.options, o = [...((e = n.firstElementChild) === null || e === void 0 ? void 0 : e.classList) || []].filter((s) => s.startsWith(t)).map((s) => s.replace(t, ""))[0];
          return o || null;
        },
        rendered: !1
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "pre",
        preserveWhitespace: "full"
      }
    ];
  },
  renderHTML({ node: n, HTMLAttributes: e }) {
    return [
      "pre",
      Y(this.options.HTMLAttributes, e),
      [
        "code",
        {
          class: n.attrs.language ? this.options.languageClassPrefix + n.attrs.language : null
        },
        0
      ]
    ];
  },
  addCommands() {
    return {
      setCodeBlock: (n) => ({ commands: e }) => e.setNode(this.name, n),
      toggleCodeBlock: (n) => ({ commands: e }) => e.toggleNode(this.name, "paragraph", n)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-c": () => this.editor.commands.toggleCodeBlock(),
      // remove code block when at start of document or code block is empty
      Backspace: () => {
        const { empty: n, $anchor: e } = this.editor.state.selection, t = e.pos === 1;
        return !n || e.parent.type.name !== this.name ? !1 : t || !e.parent.textContent.length ? this.editor.commands.clearNodes() : !1;
      },
      // exit node on triple enter
      Enter: ({ editor: n }) => {
        if (!this.options.exitOnTripleEnter)
          return !1;
        const { state: e } = n, { selection: t } = e, { $from: r, empty: i } = t;
        if (!i || r.parent.type !== this.type)
          return !1;
        const o = r.parentOffset === r.parent.nodeSize - 2, s = r.parent.textContent.endsWith(`

`);
        return !o || !s ? !1 : n.chain().command(({ tr: l }) => (l.delete(r.pos - 2, r.pos), !0)).exitCode().run();
      },
      // exit node on arrow down
      ArrowDown: ({ editor: n }) => {
        if (!this.options.exitOnArrowDown)
          return !1;
        const { state: e } = n, { selection: t, doc: r } = e, { $from: i, empty: o } = t;
        if (!o || i.parent.type !== this.type || !(i.parentOffset === i.parent.nodeSize - 2))
          return !1;
        const l = i.after();
        return l === void 0 ? !1 : r.nodeAt(l) ? n.commands.command(({ tr: c }) => (c.setSelection(I.near(r.resolve(l))), !0)) : n.commands.exitCode();
      }
    };
  },
  addInputRules() {
    return [
      Fs({
        find: nw,
        type: this.type,
        getAttributes: (n) => ({
          language: n[1]
        })
      }),
      Fs({
        find: rw,
        type: this.type,
        getAttributes: (n) => ({
          language: n[1]
        })
      })
    ];
  },
  addProseMirrorPlugins() {
    return [
      // this plugin creates a code block for pasted content from VS Code
      // we can also detect the copied code language
      new X({
        key: new se("codeBlockVSCodeHandler"),
        props: {
          handlePaste: (n, e) => {
            if (!e.clipboardData || this.editor.isActive(this.type.name))
              return !1;
            const t = e.clipboardData.getData("text/plain"), r = e.clipboardData.getData("vscode-editor-data"), i = r ? JSON.parse(r) : void 0, o = i == null ? void 0 : i.mode;
            if (!t || !o)
              return !1;
            const { tr: s, schema: l } = n.state, a = l.text(t.replace(/\r\n?/g, `
`));
            return s.replaceSelectionWith(this.type.create({ language: o }, a)), s.selection.$from.parent.type !== this.type && s.setSelection(D.near(s.doc.resolve(Math.max(0, s.selection.from - 2)))), s.setMeta("paste", !0), n.dispatch(s), !0;
          }
        }
      })
    ];
  }
}), ow = de.create({
  name: "doc",
  topNode: !0,
  content: "block+"
});
function sw(n = {}) {
  return new X({
    view(e) {
      return new lw(e, n);
    }
  });
}
class lw {
  constructor(e, t) {
    var r;
    this.editorView = e, this.cursorPos = null, this.element = null, this.timeout = -1, this.width = (r = t.width) !== null && r !== void 0 ? r : 1, this.color = t.color === !1 ? void 0 : t.color || "black", this.class = t.class, this.handlers = ["dragover", "dragend", "drop", "dragleave"].map((i) => {
      let o = (s) => {
        this[i](s);
      };
      return e.dom.addEventListener(i, o), { name: i, handler: o };
    });
  }
  destroy() {
    this.handlers.forEach(({ name: e, handler: t }) => this.editorView.dom.removeEventListener(e, t));
  }
  update(e, t) {
    this.cursorPos != null && t.doc != e.state.doc && (this.cursorPos > e.state.doc.content.size ? this.setCursor(null) : this.updateOverlay());
  }
  setCursor(e) {
    e != this.cursorPos && (this.cursorPos = e, e == null ? (this.element.parentNode.removeChild(this.element), this.element = null) : this.updateOverlay());
  }
  updateOverlay() {
    let e = this.editorView.state.doc.resolve(this.cursorPos), t = !e.parent.inlineContent, r;
    if (t) {
      let l = e.nodeBefore, a = e.nodeAfter;
      if (l || a) {
        let c = this.editorView.nodeDOM(this.cursorPos - (l ? l.nodeSize : 0));
        if (c) {
          let d = c.getBoundingClientRect(), u = l ? d.bottom : d.top;
          l && a && (u = (u + this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect().top) / 2), r = { left: d.left, right: d.right, top: u - this.width / 2, bottom: u + this.width / 2 };
        }
      }
    }
    if (!r) {
      let l = this.editorView.coordsAtPos(this.cursorPos);
      r = { left: l.left - this.width / 2, right: l.left + this.width / 2, top: l.top, bottom: l.bottom };
    }
    let i = this.editorView.dom.offsetParent;
    this.element || (this.element = i.appendChild(document.createElement("div")), this.class && (this.element.className = this.class), this.element.style.cssText = "position: absolute; z-index: 50; pointer-events: none;", this.color && (this.element.style.backgroundColor = this.color)), this.element.classList.toggle("prosemirror-dropcursor-block", t), this.element.classList.toggle("prosemirror-dropcursor-inline", !t);
    let o, s;
    if (!i || i == document.body && getComputedStyle(i).position == "static")
      o = -pageXOffset, s = -pageYOffset;
    else {
      let l = i.getBoundingClientRect();
      o = l.left - i.scrollLeft, s = l.top - i.scrollTop;
    }
    this.element.style.left = r.left - o + "px", this.element.style.top = r.top - s + "px", this.element.style.width = r.right - r.left + "px", this.element.style.height = r.bottom - r.top + "px";
  }
  scheduleRemoval(e) {
    clearTimeout(this.timeout), this.timeout = setTimeout(() => this.setCursor(null), e);
  }
  dragover(e) {
    if (!this.editorView.editable)
      return;
    let t = this.editorView.posAtCoords({ left: e.clientX, top: e.clientY }), r = t && t.inside >= 0 && this.editorView.state.doc.nodeAt(t.inside), i = r && r.type.spec.disableDropCursor, o = typeof i == "function" ? i(this.editorView, t, e) : i;
    if (t && !o) {
      let s = t.pos;
      if (this.editorView.dragging && this.editorView.dragging.slice) {
        let l = Nd(this.editorView.state.doc, s, this.editorView.dragging.slice);
        l != null && (s = l);
      }
      this.setCursor(s), this.scheduleRemoval(5e3);
    }
  }
  dragend() {
    this.scheduleRemoval(20);
  }
  drop() {
    this.scheduleRemoval(20);
  }
  dragleave(e) {
    (e.target == this.editorView.dom || !this.editorView.dom.contains(e.relatedTarget)) && this.setCursor(null);
  }
}
const aw = te.create({
  name: "dropCursor",
  addOptions() {
    return {
      color: "currentColor",
      width: 1,
      class: void 0
    };
  },
  addProseMirrorPlugins() {
    return [
      sw(this.options)
    ];
  }
});
class ie extends I {
  /**
  Create a gap cursor.
  */
  constructor(e) {
    super(e, e);
  }
  map(e, t) {
    let r = e.resolve(t.map(this.head));
    return ie.valid(r) ? new ie(r) : I.near(r);
  }
  content() {
    return T.empty;
  }
  eq(e) {
    return e instanceof ie && e.head == this.head;
  }
  toJSON() {
    return { type: "gapcursor", pos: this.head };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.pos != "number")
      throw new RangeError("Invalid input for GapCursor.fromJSON");
    return new ie(e.resolve(t.pos));
  }
  /**
  @internal
  */
  getBookmark() {
    return new Fl(this.anchor);
  }
  /**
  @internal
  */
  static valid(e) {
    let t = e.parent;
    if (t.isTextblock || !cw(e) || !dw(e))
      return !1;
    let r = t.type.spec.allowGapCursor;
    if (r != null)
      return r;
    let i = t.contentMatchAt(e.index()).defaultType;
    return i && i.isTextblock;
  }
  /**
  @internal
  */
  static findGapCursorFrom(e, t, r = !1) {
    e:
      for (; ; ) {
        if (!r && ie.valid(e))
          return e;
        let i = e.pos, o = null;
        for (let s = e.depth; ; s--) {
          let l = e.node(s);
          if (t > 0 ? e.indexAfter(s) < l.childCount : e.index(s) > 0) {
            o = l.child(t > 0 ? e.indexAfter(s) : e.index(s) - 1);
            break;
          } else if (s == 0)
            return null;
          i += t;
          let a = e.doc.resolve(i);
          if (ie.valid(a))
            return a;
        }
        for (; ; ) {
          let s = t > 0 ? o.firstChild : o.lastChild;
          if (!s) {
            if (o.isAtom && !o.isText && !R.isSelectable(o)) {
              e = e.doc.resolve(i + o.nodeSize * t), r = !1;
              continue e;
            }
            break;
          }
          o = s, i += t;
          let l = e.doc.resolve(i);
          if (ie.valid(l))
            return l;
        }
        return null;
      }
  }
}
ie.prototype.visible = !1;
ie.findFrom = ie.findGapCursorFrom;
I.jsonID("gapcursor", ie);
class Fl {
  constructor(e) {
    this.pos = e;
  }
  map(e) {
    return new Fl(e.map(this.pos));
  }
  resolve(e) {
    let t = e.resolve(this.pos);
    return ie.valid(t) ? new ie(t) : I.near(t);
  }
}
function cw(n) {
  for (let e = n.depth; e >= 0; e--) {
    let t = n.index(e), r = n.node(e);
    if (t == 0) {
      if (r.type.spec.isolating)
        return !0;
      continue;
    }
    for (let i = r.child(t - 1); ; i = i.lastChild) {
      if (i.childCount == 0 && !i.inlineContent || i.isAtom || i.type.spec.isolating)
        return !0;
      if (i.inlineContent)
        return !1;
    }
  }
  return !0;
}
function dw(n) {
  for (let e = n.depth; e >= 0; e--) {
    let t = n.indexAfter(e), r = n.node(e);
    if (t == r.childCount) {
      if (r.type.spec.isolating)
        return !0;
      continue;
    }
    for (let i = r.child(t); ; i = i.firstChild) {
      if (i.childCount == 0 && !i.inlineContent || i.isAtom || i.type.spec.isolating)
        return !0;
      if (i.inlineContent)
        return !1;
    }
  }
  return !0;
}
function uw() {
  return new X({
    props: {
      decorations: mw,
      createSelectionBetween(n, e, t) {
        return e.pos == t.pos && ie.valid(t) ? new ie(t) : null;
      },
      handleClick: hw,
      handleKeyDown: fw,
      handleDOMEvents: { beforeinput: pw }
    }
  });
}
const fw = xl({
  ArrowLeft: yi("horiz", -1),
  ArrowRight: yi("horiz", 1),
  ArrowUp: yi("vert", -1),
  ArrowDown: yi("vert", 1)
});
function yi(n, e) {
  const t = n == "vert" ? e > 0 ? "down" : "up" : e > 0 ? "right" : "left";
  return function(r, i, o) {
    let s = r.selection, l = e > 0 ? s.$to : s.$from, a = s.empty;
    if (s instanceof D) {
      if (!o.endOfTextblock(t) || l.depth == 0)
        return !1;
      a = !1, l = r.doc.resolve(e > 0 ? l.after() : l.before());
    }
    let c = ie.findGapCursorFrom(l, e, a);
    return c ? (i && i(r.tr.setSelection(new ie(c))), !0) : !1;
  };
}
function hw(n, e, t) {
  if (!n || !n.editable)
    return !1;
  let r = n.state.doc.resolve(e);
  if (!ie.valid(r))
    return !1;
  let i = n.posAtCoords({ left: t.clientX, top: t.clientY });
  return i && i.inside > -1 && R.isSelectable(n.state.doc.nodeAt(i.inside)) ? !1 : (n.dispatch(n.state.tr.setSelection(new ie(r))), !0);
}
function pw(n, e) {
  if (e.inputType != "insertCompositionText" || !(n.state.selection instanceof ie))
    return !1;
  let { $from: t } = n.state.selection, r = t.parent.contentMatchAt(t.index()).findWrapping(n.state.schema.nodes.text);
  if (!r)
    return !1;
  let i = x.empty;
  for (let s = r.length - 1; s >= 0; s--)
    i = x.from(r[s].createAndFill(null, i));
  let o = n.state.tr.replace(t.pos, t.pos, new T(i, 0, 0));
  return o.setSelection(D.near(o.doc.resolve(t.pos + 1))), n.dispatch(o), !1;
}
function mw(n) {
  if (!(n.selection instanceof ie))
    return null;
  let e = document.createElement("div");
  return e.className = "ProseMirror-gapcursor", ee.create(n.doc, [ye.widget(n.selection.head, e, { key: "gapcursor" })]);
}
const gw = te.create({
  name: "gapCursor",
  addProseMirrorPlugins() {
    return [
      uw()
    ];
  },
  extendNodeSchema(n) {
    var e;
    const t = {
      name: n.name,
      options: n.options,
      storage: n.storage
    };
    return {
      allowGapCursor: (e = H(E(n, "allowGapCursor", t))) !== null && e !== void 0 ? e : null
    };
  }
}), yw = de.create({
  name: "hardBreak",
  addOptions() {
    return {
      keepMarks: !0,
      HTMLAttributes: {}
    };
  },
  inline: !0,
  group: "inline",
  selectable: !1,
  linebreakReplacement: !0,
  parseHTML() {
    return [
      { tag: "br" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["br", Y(this.options.HTMLAttributes, n)];
  },
  renderText() {
    return `
`;
  },
  addCommands() {
    return {
      setHardBreak: () => ({ commands: n, chain: e, state: t, editor: r }) => n.first([
        () => n.exitCode(),
        () => n.command(() => {
          const { selection: i, storedMarks: o } = t;
          if (i.$from.parent.type.spec.isolating)
            return !1;
          const { keepMarks: s } = this.options, { splittableMarks: l } = r.extensionManager, a = o || i.$to.parentOffset && i.$from.marks();
          return e().insertContent({ type: this.name }).command(({ tr: c, dispatch: d }) => {
            if (d && a && s) {
              const u = a.filter((f) => l.includes(f.type.name));
              c.ensureMarks(u);
            }
            return !0;
          }).run();
        })
      ])
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Enter": () => this.editor.commands.setHardBreak(),
      "Shift-Enter": () => this.editor.commands.setHardBreak()
    };
  }
}), ww = de.create({
  name: "heading",
  addOptions() {
    return {
      levels: [1, 2, 3, 4, 5, 6],
      HTMLAttributes: {}
    };
  },
  content: "inline*",
  group: "block",
  defining: !0,
  addAttributes() {
    return {
      level: {
        default: 1,
        rendered: !1
      }
    };
  },
  parseHTML() {
    return this.options.levels.map((n) => ({
      tag: `h${n}`,
      attrs: { level: n }
    }));
  },
  renderHTML({ node: n, HTMLAttributes: e }) {
    return [`h${this.options.levels.includes(n.attrs.level) ? n.attrs.level : this.options.levels[0]}`, Y(this.options.HTMLAttributes, e), 0];
  },
  addCommands() {
    return {
      setHeading: (n) => ({ commands: e }) => this.options.levels.includes(n.level) ? e.setNode(this.name, n) : !1,
      toggleHeading: (n) => ({ commands: e }) => this.options.levels.includes(n.level) ? e.toggleNode(this.name, "paragraph", n) : !1
    };
  },
  addKeyboardShortcuts() {
    return this.options.levels.reduce((n, e) => ({
      ...n,
      [`Mod-Alt-${e}`]: () => this.editor.commands.toggleHeading({ level: e })
    }), {});
  },
  addInputRules() {
    return this.options.levels.map((n) => Fs({
      find: new RegExp(`^(#{1,${n}})\\s$`),
      type: this.type,
      getAttributes: {
        level: n
      }
    }));
  }
});
var Yi = 200, fe = function() {
};
fe.prototype.append = function(e) {
  return e.length ? (e = fe.from(e), !this.length && e || e.length < Yi && this.leafAppend(e) || this.length < Yi && e.leafPrepend(this) || this.appendInner(e)) : this;
};
fe.prototype.prepend = function(e) {
  return e.length ? fe.from(e).append(this) : this;
};
fe.prototype.appendInner = function(e) {
  return new vw(this, e);
};
fe.prototype.slice = function(e, t) {
  return e === void 0 && (e = 0), t === void 0 && (t = this.length), e >= t ? fe.empty : this.sliceInner(Math.max(0, e), Math.min(this.length, t));
};
fe.prototype.get = function(e) {
  if (!(e < 0 || e >= this.length))
    return this.getInner(e);
};
fe.prototype.forEach = function(e, t, r) {
  t === void 0 && (t = 0), r === void 0 && (r = this.length), t <= r ? this.forEachInner(e, t, r, 0) : this.forEachInvertedInner(e, t, r, 0);
};
fe.prototype.map = function(e, t, r) {
  t === void 0 && (t = 0), r === void 0 && (r = this.length);
  var i = [];
  return this.forEach(function(o, s) {
    return i.push(e(o, s));
  }, t, r), i;
};
fe.from = function(e) {
  return e instanceof fe ? e : e && e.length ? new cf(e) : fe.empty;
};
var cf = /* @__PURE__ */ function(n) {
  function e(r) {
    n.call(this), this.values = r;
  }
  n && (e.__proto__ = n), e.prototype = Object.create(n && n.prototype), e.prototype.constructor = e;
  var t = { length: { configurable: !0 }, depth: { configurable: !0 } };
  return e.prototype.flatten = function() {
    return this.values;
  }, e.prototype.sliceInner = function(i, o) {
    return i == 0 && o == this.length ? this : new e(this.values.slice(i, o));
  }, e.prototype.getInner = function(i) {
    return this.values[i];
  }, e.prototype.forEachInner = function(i, o, s, l) {
    for (var a = o; a < s; a++)
      if (i(this.values[a], l + a) === !1)
        return !1;
  }, e.prototype.forEachInvertedInner = function(i, o, s, l) {
    for (var a = o - 1; a >= s; a--)
      if (i(this.values[a], l + a) === !1)
        return !1;
  }, e.prototype.leafAppend = function(i) {
    if (this.length + i.length <= Yi)
      return new e(this.values.concat(i.flatten()));
  }, e.prototype.leafPrepend = function(i) {
    if (this.length + i.length <= Yi)
      return new e(i.flatten().concat(this.values));
  }, t.length.get = function() {
    return this.values.length;
  }, t.depth.get = function() {
    return 0;
  }, Object.defineProperties(e.prototype, t), e;
}(fe);
fe.empty = new cf([]);
var vw = /* @__PURE__ */ function(n) {
  function e(t, r) {
    n.call(this), this.left = t, this.right = r, this.length = t.length + r.length, this.depth = Math.max(t.depth, r.depth) + 1;
  }
  return n && (e.__proto__ = n), e.prototype = Object.create(n && n.prototype), e.prototype.constructor = e, e.prototype.flatten = function() {
    return this.left.flatten().concat(this.right.flatten());
  }, e.prototype.getInner = function(r) {
    return r < this.left.length ? this.left.get(r) : this.right.get(r - this.left.length);
  }, e.prototype.forEachInner = function(r, i, o, s) {
    var l = this.left.length;
    if (i < l && this.left.forEachInner(r, i, Math.min(o, l), s) === !1 || o > l && this.right.forEachInner(r, Math.max(i - l, 0), Math.min(this.length, o) - l, s + l) === !1)
      return !1;
  }, e.prototype.forEachInvertedInner = function(r, i, o, s) {
    var l = this.left.length;
    if (i > l && this.right.forEachInvertedInner(r, i - l, Math.max(o, l) - l, s + l) === !1 || o < l && this.left.forEachInvertedInner(r, Math.min(i, l), o, s) === !1)
      return !1;
  }, e.prototype.sliceInner = function(r, i) {
    if (r == 0 && i == this.length)
      return this;
    var o = this.left.length;
    return i <= o ? this.left.slice(r, i) : r >= o ? this.right.slice(r - o, i - o) : this.left.slice(r, o).append(this.right.slice(0, i - o));
  }, e.prototype.leafAppend = function(r) {
    var i = this.right.leafAppend(r);
    if (i)
      return new e(this.left, i);
  }, e.prototype.leafPrepend = function(r) {
    var i = this.left.leafPrepend(r);
    if (i)
      return new e(i, this.right);
  }, e.prototype.appendInner = function(r) {
    return this.left.depth >= Math.max(this.right.depth, r.depth) + 1 ? new e(this.left, new e(this.right, r)) : new e(this, r);
  }, e;
}(fe);
const bw = 500;
class et {
  constructor(e, t) {
    this.items = e, this.eventCount = t;
  }
  // Pop the latest event off the branch's history and apply it
  // to a document transform.
  popEvent(e, t) {
    if (this.eventCount == 0)
      return null;
    let r = this.items.length;
    for (; ; r--)
      if (this.items.get(r - 1).selection) {
        --r;
        break;
      }
    let i, o;
    t && (i = this.remapping(r, this.items.length), o = i.maps.length);
    let s = e.tr, l, a, c = [], d = [];
    return this.items.forEach((u, f) => {
      if (!u.step) {
        i || (i = this.remapping(r, f + 1), o = i.maps.length), o--, d.push(u);
        return;
      }
      if (i) {
        d.push(new ot(u.map));
        let h = u.step.map(i.slice(o)), p;
        h && s.maybeStep(h).doc && (p = s.mapping.maps[s.mapping.maps.length - 1], c.push(new ot(p, void 0, void 0, c.length + d.length))), o--, p && i.appendMap(p, o);
      } else
        s.maybeStep(u.step);
      if (u.selection)
        return l = i ? u.selection.map(i.slice(o)) : u.selection, a = new et(this.items.slice(0, r).append(d.reverse().concat(c)), this.eventCount - 1), !1;
    }, this.items.length, 0), { remaining: a, transform: s, selection: l };
  }
  // Create a new branch with the given transform added.
  addTransform(e, t, r, i) {
    let o = [], s = this.eventCount, l = this.items, a = !i && l.length ? l.get(l.length - 1) : null;
    for (let d = 0; d < e.steps.length; d++) {
      let u = e.steps[d].invert(e.docs[d]), f = new ot(e.mapping.maps[d], u, t), h;
      (h = a && a.merge(f)) && (f = h, d ? o.pop() : l = l.slice(0, l.length - 1)), o.push(f), t && (s++, t = void 0), i || (a = f);
    }
    let c = s - r.depth;
    return c > xw && (l = kw(l, c), s -= c), new et(l.append(o), s);
  }
  remapping(e, t) {
    let r = new $n();
    return this.items.forEach((i, o) => {
      let s = i.mirrorOffset != null && o - i.mirrorOffset >= e ? r.maps.length - i.mirrorOffset : void 0;
      r.appendMap(i.map, s);
    }, e, t), r;
  }
  addMaps(e) {
    return this.eventCount == 0 ? this : new et(this.items.append(e.map((t) => new ot(t))), this.eventCount);
  }
  // When the collab module receives remote changes, the history has
  // to know about those, so that it can adjust the steps that were
  // rebased on top of the remote changes, and include the position
  // maps for the remote changes in its array of items.
  rebased(e, t) {
    if (!this.eventCount)
      return this;
    let r = [], i = Math.max(0, this.items.length - t), o = e.mapping, s = e.steps.length, l = this.eventCount;
    this.items.forEach((f) => {
      f.selection && l--;
    }, i);
    let a = t;
    this.items.forEach((f) => {
      let h = o.getMirror(--a);
      if (h == null)
        return;
      s = Math.min(s, h);
      let p = o.maps[h];
      if (f.step) {
        let g = e.steps[h].invert(e.docs[h]), m = f.selection && f.selection.map(o.slice(a + 1, h));
        m && l++, r.push(new ot(p, g, m));
      } else
        r.push(new ot(p));
    }, i);
    let c = [];
    for (let f = t; f < s; f++)
      c.push(new ot(o.maps[f]));
    let d = this.items.slice(0, i).append(c).append(r), u = new et(d, l);
    return u.emptyItemCount() > bw && (u = u.compress(this.items.length - r.length)), u;
  }
  emptyItemCount() {
    let e = 0;
    return this.items.forEach((t) => {
      t.step || e++;
    }), e;
  }
  // Compressing a branch means rewriting it to push the air (map-only
  // items) out. During collaboration, these naturally accumulate
  // because each remote change adds one. The `upto` argument is used
  // to ensure that only the items below a given level are compressed,
  // because `rebased` relies on a clean, untouched set of items in
  // order to associate old items with rebased steps.
  compress(e = this.items.length) {
    let t = this.remapping(0, e), r = t.maps.length, i = [], o = 0;
    return this.items.forEach((s, l) => {
      if (l >= e)
        i.push(s), s.selection && o++;
      else if (s.step) {
        let a = s.step.map(t.slice(r)), c = a && a.getMap();
        if (r--, c && t.appendMap(c, r), a) {
          let d = s.selection && s.selection.map(t.slice(r));
          d && o++;
          let u = new ot(c.invert(), a, d), f, h = i.length - 1;
          (f = i.length && i[h].merge(u)) ? i[h] = f : i.push(u);
        }
      } else
        s.map && r--;
    }, this.items.length, 0), new et(fe.from(i.reverse()), o);
  }
}
et.empty = new et(fe.empty, 0);
function kw(n, e) {
  let t;
  return n.forEach((r, i) => {
    if (r.selection && e-- == 0)
      return t = i, !1;
  }), n.slice(t);
}
class ot {
  constructor(e, t, r, i) {
    this.map = e, this.step = t, this.selection = r, this.mirrorOffset = i;
  }
  merge(e) {
    if (this.step && e.step && !e.selection) {
      let t = e.step.merge(this.step);
      if (t)
        return new ot(t.getMap().invert(), t, this.selection);
    }
  }
}
class Ht {
  constructor(e, t, r, i, o) {
    this.done = e, this.undone = t, this.prevRanges = r, this.prevTime = i, this.prevComposition = o;
  }
}
const xw = 20;
function Cw(n, e, t, r) {
  let i = t.getMeta(wn), o;
  if (i)
    return i.historyState;
  t.getMeta(Tw) && (n = new Ht(n.done, n.undone, null, 0, -1));
  let s = t.getMeta("appendedTransaction");
  if (t.steps.length == 0)
    return n;
  if (s && s.getMeta(wn))
    return s.getMeta(wn).redo ? new Ht(n.done.addTransform(t, void 0, r, Oi(e)), n.undone, Oc(t.mapping.maps), n.prevTime, n.prevComposition) : new Ht(n.done, n.undone.addTransform(t, void 0, r, Oi(e)), null, n.prevTime, n.prevComposition);
  if (t.getMeta("addToHistory") !== !1 && !(s && s.getMeta("addToHistory") === !1)) {
    let l = t.getMeta("composition"), a = n.prevTime == 0 || !s && n.prevComposition != l && (n.prevTime < (t.time || 0) - r.newGroupDelay || !Sw(t, n.prevRanges)), c = s ? fs(n.prevRanges, t.mapping) : Oc(t.mapping.maps);
    return new Ht(n.done.addTransform(t, a ? e.selection.getBookmark() : void 0, r, Oi(e)), et.empty, c, t.time, l ?? n.prevComposition);
  } else
    return (o = t.getMeta("rebased")) ? new Ht(n.done.rebased(t, o), n.undone.rebased(t, o), fs(n.prevRanges, t.mapping), n.prevTime, n.prevComposition) : new Ht(n.done.addMaps(t.mapping.maps), n.undone.addMaps(t.mapping.maps), fs(n.prevRanges, t.mapping), n.prevTime, n.prevComposition);
}
function Sw(n, e) {
  if (!e)
    return !1;
  if (!n.docChanged)
    return !0;
  let t = !1;
  return n.mapping.maps[0].forEach((r, i) => {
    for (let o = 0; o < e.length; o += 2)
      r <= e[o + 1] && i >= e[o] && (t = !0);
  }), t;
}
function Oc(n) {
  let e = [];
  for (let t = n.length - 1; t >= 0 && e.length == 0; t--)
    n[t].forEach((r, i, o, s) => e.push(o, s));
  return e;
}
function fs(n, e) {
  if (!n)
    return null;
  let t = [];
  for (let r = 0; r < n.length; r += 2) {
    let i = e.map(n[r], 1), o = e.map(n[r + 1], -1);
    i <= o && t.push(i, o);
  }
  return t;
}
function Mw(n, e, t) {
  let r = Oi(e), i = wn.get(e).spec.config, o = (t ? n.undone : n.done).popEvent(e, r);
  if (!o)
    return null;
  let s = o.selection.resolve(o.transform.doc), l = (t ? n.done : n.undone).addTransform(o.transform, e.selection.getBookmark(), i, r), a = new Ht(t ? l : o.remaining, t ? o.remaining : l, null, 0, -1);
  return o.transform.setSelection(s).setMeta(wn, { redo: t, historyState: a });
}
let hs = !1, Nc = null;
function Oi(n) {
  let e = n.plugins;
  if (Nc != e) {
    hs = !1, Nc = e;
    for (let t = 0; t < e.length; t++)
      if (e[t].spec.historyPreserveItems) {
        hs = !0;
        break;
      }
  }
  return hs;
}
const wn = new se("history"), Tw = new se("closeHistory");
function Aw(n = {}) {
  return n = {
    depth: n.depth || 100,
    newGroupDelay: n.newGroupDelay || 500
  }, new X({
    key: wn,
    state: {
      init() {
        return new Ht(et.empty, et.empty, null, 0, -1);
      },
      apply(e, t, r) {
        return Cw(t, r, e, n);
      }
    },
    config: n,
    props: {
      handleDOMEvents: {
        beforeinput(e, t) {
          let r = t.inputType, i = r == "historyUndo" ? uf : r == "historyRedo" ? ff : null;
          return i ? (t.preventDefault(), i(e.state, e.dispatch)) : !1;
        }
      }
    }
  });
}
function df(n, e) {
  return (t, r) => {
    let i = wn.getState(t);
    if (!i || (n ? i.undone : i.done).eventCount == 0)
      return !1;
    if (r) {
      let o = Mw(i, t, n);
      o && r(e ? o.scrollIntoView() : o);
    }
    return !0;
  };
}
const uf = df(!1, !0), ff = df(!0, !0), Ew = te.create({
  name: "history",
  addOptions() {
    return {
      depth: 100,
      newGroupDelay: 500
    };
  },
  addCommands() {
    return {
      undo: () => ({ state: n, dispatch: e }) => uf(n, e),
      redo: () => ({ state: n, dispatch: e }) => ff(n, e)
    };
  },
  addProseMirrorPlugins() {
    return [
      Aw(this.options)
    ];
  },
  addKeyboardShortcuts() {
    return {
      "Mod-z": () => this.editor.commands.undo(),
      "Shift-Mod-z": () => this.editor.commands.redo(),
      "Mod-y": () => this.editor.commands.redo(),
      // Russian keyboard layouts
      "Mod-я": () => this.editor.commands.undo(),
      "Shift-Mod-я": () => this.editor.commands.redo()
    };
  }
}), Ow = de.create({
  name: "horizontalRule",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  group: "block",
  parseHTML() {
    return [{ tag: "hr" }];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["hr", Y(this.options.HTMLAttributes, n)];
  },
  addCommands() {
    return {
      setHorizontalRule: () => ({ chain: n, state: e }) => {
        const { selection: t } = e, { $from: r, $to: i } = t, o = n();
        return r.parentOffset === 0 ? o.insertContentAt({
          from: Math.max(r.pos - 1, 0),
          to: i.pos
        }, {
          type: this.name
        }) : Bu(t) ? o.insertContentAt(i.pos, {
          type: this.name
        }) : o.insertContent({ type: this.name }), o.command(({ tr: s, dispatch: l }) => {
          var a;
          if (l) {
            const { $to: c } = s.selection, d = c.end();
            if (c.nodeAfter)
              c.nodeAfter.isTextblock ? s.setSelection(D.create(s.doc, c.pos + 1)) : c.nodeAfter.isBlock ? s.setSelection(R.create(s.doc, c.pos)) : s.setSelection(D.create(s.doc, c.pos));
            else {
              const u = (a = c.parent.type.contentMatch.defaultType) === null || a === void 0 ? void 0 : a.create();
              u && (s.insert(d, u), s.setSelection(D.create(s.doc, d + 1)));
            }
            s.scrollIntoView();
          }
          return !0;
        }).run();
      }
    };
  },
  addInputRules() {
    return [
      r0({
        find: /^(?:---|—-|___\s|\*\*\*\s)$/,
        type: this.type
      })
    ];
  }
}), Nw = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))$/, Dw = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))/g, Rw = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))$/, Iw = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))/g, Lw = Je.create({
  name: "italic",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "em"
      },
      {
        tag: "i",
        getAttrs: (n) => n.style.fontStyle !== "normal" && null
      },
      {
        style: "font-style=normal",
        clearMark: (n) => n.type.name === this.name
      },
      {
        style: "font-style=italic"
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["em", Y(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setItalic: () => ({ commands: n }) => n.setMark(this.name),
      toggleItalic: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetItalic: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-i": () => this.editor.commands.toggleItalic(),
      "Mod-I": () => this.editor.commands.toggleItalic()
    };
  },
  addInputRules() {
    return [
      xn({
        find: Nw,
        type: this.type
      }),
      xn({
        find: Rw,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      Qt({
        find: Dw,
        type: this.type
      }),
      Qt({
        find: Iw,
        type: this.type
      })
    ];
  }
}), Pw = de.create({
  name: "listItem",
  addOptions() {
    return {
      HTMLAttributes: {},
      bulletListTypeName: "bulletList",
      orderedListTypeName: "orderedList"
    };
  },
  content: "paragraph block*",
  defining: !0,
  parseHTML() {
    return [
      {
        tag: "li"
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["li", Y(this.options.HTMLAttributes, n), 0];
  },
  addKeyboardShortcuts() {
    return {
      Enter: () => this.editor.commands.splitListItem(this.name),
      Tab: () => this.editor.commands.sinkListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
    };
  }
}), Bw = "listItem", Dc = "textStyle", Rc = /^(\d+)\.\s$/, Hw = de.create({
  name: "orderedList",
  addOptions() {
    return {
      itemTypeName: "listItem",
      HTMLAttributes: {},
      keepMarks: !1,
      keepAttributes: !1
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  addAttributes() {
    return {
      start: {
        default: 1,
        parseHTML: (n) => n.hasAttribute("start") ? parseInt(n.getAttribute("start") || "", 10) : 1
      },
      type: {
        default: void 0,
        parseHTML: (n) => n.getAttribute("type")
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "ol"
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    const { start: e, ...t } = n;
    return e === 1 ? ["ol", Y(this.options.HTMLAttributes, t), 0] : ["ol", Y(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      toggleOrderedList: () => ({ commands: n, chain: e }) => this.options.keepAttributes ? e().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(Bw, this.editor.getAttributes(Dc)).run() : n.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-7": () => this.editor.commands.toggleOrderedList()
    };
  },
  addInputRules() {
    let n = Hr({
      find: Rc,
      type: this.type,
      getAttributes: (e) => ({ start: +e[1] }),
      joinPredicate: (e, t) => t.childCount + t.attrs.start === +e[1]
    });
    return (this.options.keepMarks || this.options.keepAttributes) && (n = Hr({
      find: Rc,
      type: this.type,
      keepMarks: this.options.keepMarks,
      keepAttributes: this.options.keepAttributes,
      getAttributes: (e) => ({ start: +e[1], ...this.editor.getAttributes(Dc) }),
      joinPredicate: (e, t) => t.childCount + t.attrs.start === +e[1],
      editor: this.editor
    })), [
      n
    ];
  }
}), zw = de.create({
  name: "paragraph",
  priority: 1e3,
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  group: "block",
  content: "inline*",
  parseHTML() {
    return [
      { tag: "p" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["p", Y(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setParagraph: () => ({ commands: n }) => n.setNode(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-0": () => this.editor.commands.setParagraph()
    };
  }
}), Vw = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))$/, Fw = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))/g, $w = Je.create({
  name: "strike",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "s"
      },
      {
        tag: "del"
      },
      {
        tag: "strike"
      },
      {
        style: "text-decoration",
        consuming: !1,
        getAttrs: (n) => n.includes("line-through") ? {} : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["s", Y(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setStrike: () => ({ commands: n }) => n.setMark(this.name),
      toggleStrike: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetStrike: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-s": () => this.editor.commands.toggleStrike()
    };
  },
  addInputRules() {
    return [
      xn({
        find: Vw,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      Qt({
        find: Fw,
        type: this.type
      })
    ];
  }
}), jw = de.create({
  name: "text",
  group: "inline"
}), Ww = te.create({
  name: "starterKit",
  addExtensions() {
    var n, e, t, r, i, o, s, l, a, c, d, u, f, h, p, g, m, y;
    const v = [];
    return this.options.bold !== !1 && v.push(Yy.configure((n = this.options) === null || n === void 0 ? void 0 : n.bold)), this.options.blockquote !== !1 && v.push(af.configure((e = this.options) === null || e === void 0 ? void 0 : e.blockquote)), this.options.bulletList !== !1 && v.push(Qy.configure((t = this.options) === null || t === void 0 ? void 0 : t.bulletList)), this.options.code !== !1 && v.push(tw.configure((r = this.options) === null || r === void 0 ? void 0 : r.code)), this.options.codeBlock !== !1 && v.push(iw.configure((i = this.options) === null || i === void 0 ? void 0 : i.codeBlock)), this.options.document !== !1 && v.push(ow.configure((o = this.options) === null || o === void 0 ? void 0 : o.document)), this.options.dropcursor !== !1 && v.push(aw.configure((s = this.options) === null || s === void 0 ? void 0 : s.dropcursor)), this.options.gapcursor !== !1 && v.push(gw.configure((l = this.options) === null || l === void 0 ? void 0 : l.gapcursor)), this.options.hardBreak !== !1 && v.push(yw.configure((a = this.options) === null || a === void 0 ? void 0 : a.hardBreak)), this.options.heading !== !1 && v.push(ww.configure((c = this.options) === null || c === void 0 ? void 0 : c.heading)), this.options.history !== !1 && v.push(Ew.configure((d = this.options) === null || d === void 0 ? void 0 : d.history)), this.options.horizontalRule !== !1 && v.push(Ow.configure((u = this.options) === null || u === void 0 ? void 0 : u.horizontalRule)), this.options.italic !== !1 && v.push(Lw.configure((f = this.options) === null || f === void 0 ? void 0 : f.italic)), this.options.listItem !== !1 && v.push(Pw.configure((h = this.options) === null || h === void 0 ? void 0 : h.listItem)), this.options.orderedList !== !1 && v.push(Hw.configure((p = this.options) === null || p === void 0 ? void 0 : p.orderedList)), this.options.paragraph !== !1 && v.push(zw.configure((g = this.options) === null || g === void 0 ? void 0 : g.paragraph)), this.options.strike !== !1 && v.push($w.configure((m = this.options) === null || m === void 0 ? void 0 : m.strike)), this.options.text !== !1 && v.push(jw.configure((y = this.options) === null || y === void 0 ? void 0 : y.text)), v;
  }
}), _w = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2ntley5rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3nlop4pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2o0dyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6logistics9properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3ncaster6d0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2psy3ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rckmsd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0america6xi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0stone5umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2olterskluwer11odside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", Kw = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", Zn = (n, e) => {
  for (const t in e)
    n[t] = e[t];
  return n;
}, qs = "numeric", Us = "ascii", Js = "alpha", Sr = "asciinumeric", gr = "alphanumeric", Gs = "domain", hf = "emoji", qw = "scheme", Uw = "slashscheme", ps = "whitespace";
function Jw(n, e) {
  return n in e || (e[n] = []), e[n];
}
function fn(n, e, t) {
  e[qs] && (e[Sr] = !0, e[gr] = !0), e[Us] && (e[Sr] = !0, e[Js] = !0), e[Sr] && (e[gr] = !0), e[Js] && (e[gr] = !0), e[gr] && (e[Gs] = !0), e[hf] && (e[Gs] = !0);
  for (const r in e) {
    const i = Jw(r, t);
    i.indexOf(n) < 0 && i.push(n);
  }
}
function Gw(n, e) {
  const t = {};
  for (const r in e)
    e[r].indexOf(n) >= 0 && (t[r] = !0);
  return t;
}
function Ne(n = null) {
  this.j = {}, this.jr = [], this.jd = null, this.t = n;
}
Ne.groups = {};
Ne.prototype = {
  accepts() {
    return !!this.t;
  },
  /**
   * Follow an existing transition from the given input to the next state.
   * Does not mutate.
   * @param {string} input character or token type to transition on
   * @returns {?State<T>} the next state, if any
   */
  go(n) {
    const e = this, t = e.j[n];
    if (t)
      return t;
    for (let r = 0; r < e.jr.length; r++) {
      const i = e.jr[r][0], o = e.jr[r][1];
      if (o && i.test(n))
        return o;
    }
    return e.jd;
  },
  /**
   * Whether the state has a transition for the given input. Set the second
   * argument to true to only look for an exact match (and not a default or
   * regular-expression-based transition)
   * @param {string} input
   * @param {boolean} exactOnly
   */
  has(n, e = !1) {
    return e ? n in this.j : !!this.go(n);
  },
  /**
   * Short for "transition all"; create a transition from the array of items
   * in the given list to the same final resulting state.
   * @param {string | string[]} inputs Group of inputs to transition on
   * @param {Transition<T> | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   */
  ta(n, e, t, r) {
    for (let i = 0; i < n.length; i++)
      this.tt(n[i], e, t, r);
  },
  /**
   * Short for "take regexp transition"; defines a transition for this state
   * when it encounters a token which matches the given regular expression
   * @param {RegExp} regexp Regular expression transition (populate first)
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   * @returns {State<T>} taken after the given input
   */
  tr(n, e, t, r) {
    r = r || Ne.groups;
    let i;
    return e && e.j ? i = e : (i = new Ne(e), t && r && fn(e, t, r)), this.jr.push([n, i]), i;
  },
  /**
   * Short for "take transitions", will take as many sequential transitions as
   * the length of the given input and returns the
   * resulting final state.
   * @param {string | string[]} input
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   * @returns {State<T>} taken after the given input
   */
  ts(n, e, t, r) {
    let i = this;
    const o = n.length;
    if (!o)
      return i;
    for (let s = 0; s < o - 1; s++)
      i = i.tt(n[s]);
    return i.tt(n[o - 1], e, t, r);
  },
  /**
   * Short for "take transition", this is a method for building/working with
   * state machines.
   *
   * If a state already exists for the given input, returns it.
   *
   * If a token is specified, that state will emit that token when reached by
   * the linkify engine.
   *
   * If no state exists, it will be initialized with some default transitions
   * that resemble existing default transitions.
   *
   * If a state is given for the second argument, that state will be
   * transitioned to on the given input regardless of what that input
   * previously did.
   *
   * Specify a token group flags to define groups that this token belongs to.
   * The token will be added to corresponding entires in the given groups
   * object.
   *
   * @param {string} input character, token type to transition on
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of groups
   * @returns {State<T>} taken after the given input
   */
  tt(n, e, t, r) {
    r = r || Ne.groups;
    const i = this;
    if (e && e.j)
      return i.j[n] = e, e;
    const o = e;
    let s, l = i.go(n);
    if (l ? (s = new Ne(), Zn(s.j, l.j), s.jr.push.apply(s.jr, l.jr), s.jd = l.jd, s.t = l.t) : s = new Ne(), o) {
      if (r)
        if (s.t && typeof s.t == "string") {
          const a = Zn(Gw(s.t, r), t);
          fn(o, a, r);
        } else
          t && fn(o, t, r);
      s.t = o;
    }
    return i.j[n] = s, s;
  }
};
const z = (n, e, t, r, i) => n.ta(e, t, r, i), re = (n, e, t, r, i) => n.tr(e, t, r, i), Ic = (n, e, t, r, i) => n.ts(e, t, r, i), M = (n, e, t, r, i) => n.tt(e, t, r, i), Mt = "WORD", Ys = "UWORD", pf = "ASCIINUMERICAL", mf = "ALPHANUMERICAL", jr = "LOCALHOST", Xs = "TLD", Qs = "UTLD", Ni = "SCHEME", zn = "SLASH_SCHEME", $l = "NUM", Zs = "WS", jl = "NL", Mr = "OPENBRACE", Tr = "CLOSEBRACE", Xi = "OPENBRACKET", Qi = "CLOSEBRACKET", Zi = "OPENPAREN", eo = "CLOSEPAREN", to = "OPENANGLEBRACKET", no = "CLOSEANGLEBRACKET", ro = "FULLWIDTHLEFTPAREN", io = "FULLWIDTHRIGHTPAREN", oo = "LEFTCORNERBRACKET", so = "RIGHTCORNERBRACKET", lo = "LEFTWHITECORNERBRACKET", ao = "RIGHTWHITECORNERBRACKET", co = "FULLWIDTHLESSTHAN", uo = "FULLWIDTHGREATERTHAN", fo = "AMPERSAND", Wl = "APOSTROPHE", ho = "ASTERISK", zt = "AT", po = "BACKSLASH", mo = "BACKTICK", go = "CARET", Ft = "COLON", _l = "COMMA", yo = "DOLLAR", st = "DOT", wo = "EQUALS", Kl = "EXCLAMATION", We = "HYPHEN", Ar = "PERCENT", vo = "PIPE", bo = "PLUS", ko = "POUND", Er = "QUERY", ql = "QUOTE", gf = "FULLWIDTHMIDDLEDOT", Ul = "SEMI", lt = "SLASH", Or = "TILDE", xo = "UNDERSCORE", yf = "EMOJI", Co = "SYM";
var wf = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  WORD: Mt,
  UWORD: Ys,
  ASCIINUMERICAL: pf,
  ALPHANUMERICAL: mf,
  LOCALHOST: jr,
  TLD: Xs,
  UTLD: Qs,
  SCHEME: Ni,
  SLASH_SCHEME: zn,
  NUM: $l,
  WS: Zs,
  NL: jl,
  OPENBRACE: Mr,
  CLOSEBRACE: Tr,
  OPENBRACKET: Xi,
  CLOSEBRACKET: Qi,
  OPENPAREN: Zi,
  CLOSEPAREN: eo,
  OPENANGLEBRACKET: to,
  CLOSEANGLEBRACKET: no,
  FULLWIDTHLEFTPAREN: ro,
  FULLWIDTHRIGHTPAREN: io,
  LEFTCORNERBRACKET: oo,
  RIGHTCORNERBRACKET: so,
  LEFTWHITECORNERBRACKET: lo,
  RIGHTWHITECORNERBRACKET: ao,
  FULLWIDTHLESSTHAN: co,
  FULLWIDTHGREATERTHAN: uo,
  AMPERSAND: fo,
  APOSTROPHE: Wl,
  ASTERISK: ho,
  AT: zt,
  BACKSLASH: po,
  BACKTICK: mo,
  CARET: go,
  COLON: Ft,
  COMMA: _l,
  DOLLAR: yo,
  DOT: st,
  EQUALS: wo,
  EXCLAMATION: Kl,
  HYPHEN: We,
  PERCENT: Ar,
  PIPE: vo,
  PLUS: bo,
  POUND: ko,
  QUERY: Er,
  QUOTE: ql,
  FULLWIDTHMIDDLEDOT: gf,
  SEMI: Ul,
  SLASH: lt,
  TILDE: Or,
  UNDERSCORE: xo,
  EMOJI: yf,
  SYM: Co
});
const kt = /[a-z]/, ur = /\p{L}/u, ms = /\p{Emoji}/u, xt = /\d/, gs = /\s/, Lc = "\r", ys = `
`, Yw = "️", Xw = "‍", ws = "￼";
let wi = null, vi = null;
function Qw(n = []) {
  const e = {};
  Ne.groups = e;
  const t = new Ne();
  wi == null && (wi = Pc(_w)), vi == null && (vi = Pc(Kw)), M(t, "'", Wl), M(t, "{", Mr), M(t, "}", Tr), M(t, "[", Xi), M(t, "]", Qi), M(t, "(", Zi), M(t, ")", eo), M(t, "<", to), M(t, ">", no), M(t, "（", ro), M(t, "）", io), M(t, "「", oo), M(t, "」", so), M(t, "『", lo), M(t, "』", ao), M(t, "＜", co), M(t, "＞", uo), M(t, "&", fo), M(t, "*", ho), M(t, "@", zt), M(t, "`", mo), M(t, "^", go), M(t, ":", Ft), M(t, ",", _l), M(t, "$", yo), M(t, ".", st), M(t, "=", wo), M(t, "!", Kl), M(t, "-", We), M(t, "%", Ar), M(t, "|", vo), M(t, "+", bo), M(t, "#", ko), M(t, "?", Er), M(t, '"', ql), M(t, "/", lt), M(t, ";", Ul), M(t, "~", Or), M(t, "_", xo), M(t, "\\", po), M(t, "・", gf);
  const r = re(t, xt, $l, {
    [qs]: !0
  });
  re(r, xt, r);
  const i = re(r, kt, pf, {
    [Sr]: !0
  }), o = re(r, ur, mf, {
    [gr]: !0
  }), s = re(t, kt, Mt, {
    [Us]: !0
  });
  re(s, xt, i), re(s, kt, s), re(i, xt, i), re(i, kt, i);
  const l = re(t, ur, Ys, {
    [Js]: !0
  });
  re(l, kt), re(l, xt, o), re(l, ur, l), re(o, xt, o), re(o, kt), re(o, ur, o);
  const a = M(t, ys, jl, {
    [ps]: !0
  }), c = M(t, Lc, Zs, {
    [ps]: !0
  }), d = re(t, gs, Zs, {
    [ps]: !0
  });
  M(t, ws, d), M(c, ys, a), M(c, ws, d), re(c, gs, d), M(d, Lc), M(d, ys), re(d, gs, d), M(d, ws, d);
  const u = re(t, ms, yf, {
    [hf]: !0
  });
  M(u, "#"), re(u, ms, u), M(u, Yw, u);
  const f = M(u, Xw);
  M(f, "#"), re(f, ms, u);
  const h = [[kt, s], [xt, i]], p = [[kt, null], [ur, l], [xt, o]];
  for (let g = 0; g < wi.length; g++)
    Lt(t, wi[g], Xs, Mt, h);
  for (let g = 0; g < vi.length; g++)
    Lt(t, vi[g], Qs, Ys, p);
  fn(Xs, {
    tld: !0,
    ascii: !0
  }, e), fn(Qs, {
    utld: !0,
    alpha: !0
  }, e), Lt(t, "file", Ni, Mt, h), Lt(t, "mailto", Ni, Mt, h), Lt(t, "http", zn, Mt, h), Lt(t, "https", zn, Mt, h), Lt(t, "ftp", zn, Mt, h), Lt(t, "ftps", zn, Mt, h), fn(Ni, {
    scheme: !0,
    ascii: !0
  }, e), fn(zn, {
    slashscheme: !0,
    ascii: !0
  }, e), n = n.sort((g, m) => g[0] > m[0] ? 1 : -1);
  for (let g = 0; g < n.length; g++) {
    const m = n[g][0], v = n[g][1] ? {
      [qw]: !0
    } : {
      [Uw]: !0
    };
    m.indexOf("-") >= 0 ? v[Gs] = !0 : kt.test(m) ? xt.test(m) ? v[Sr] = !0 : v[Us] = !0 : v[qs] = !0, Ic(t, m, m, v);
  }
  return Ic(t, "localhost", jr, {
    ascii: !0
  }), t.jd = new Ne(Co), {
    start: t,
    tokens: Zn({
      groups: e
    }, wf)
  };
}
function vf(n, e) {
  const t = Zw(e.replace(/[A-Z]/g, (l) => l.toLowerCase())), r = t.length, i = [];
  let o = 0, s = 0;
  for (; s < r; ) {
    let l = n, a = null, c = 0, d = null, u = -1, f = -1;
    for (; s < r && (a = l.go(t[s])); )
      l = a, l.accepts() ? (u = 0, f = 0, d = l) : u >= 0 && (u += t[s].length, f++), c += t[s].length, o += t[s].length, s++;
    o -= u, s -= f, c -= u, i.push({
      t: d.t,
      // token type/name
      v: e.slice(o - c, o),
      // string value
      s: o - c,
      // start index
      e: o
      // end index (excluding)
    });
  }
  return i;
}
function Zw(n) {
  const e = [], t = n.length;
  let r = 0;
  for (; r < t; ) {
    let i = n.charCodeAt(r), o, s = i < 55296 || i > 56319 || r + 1 === t || (o = n.charCodeAt(r + 1)) < 56320 || o > 57343 ? n[r] : n.slice(r, r + 2);
    e.push(s), r += s.length;
  }
  return e;
}
function Lt(n, e, t, r, i) {
  let o;
  const s = e.length;
  for (let l = 0; l < s - 1; l++) {
    const a = e[l];
    n.j[a] ? o = n.j[a] : (o = new Ne(r), o.jr = i.slice(), n.j[a] = o), n = o;
  }
  return o = new Ne(t), o.jr = i.slice(), n.j[e[s - 1]] = o, o;
}
function Pc(n) {
  const e = [], t = [];
  let r = 0, i = "0123456789";
  for (; r < n.length; ) {
    let o = 0;
    for (; i.indexOf(n[r + o]) >= 0; )
      o++;
    if (o > 0) {
      e.push(t.join(""));
      for (let s = parseInt(n.substring(r, r + o), 10); s > 0; s--)
        t.pop();
      r += o;
    } else
      t.push(n[r]), r++;
  }
  return e;
}
const Wr = {
  defaultProtocol: "http",
  events: null,
  format: Bc,
  formatHref: Bc,
  nl2br: !1,
  tagName: "a",
  target: null,
  rel: null,
  validate: !0,
  truncate: 1 / 0,
  className: null,
  attributes: null,
  ignoreTags: [],
  render: null
};
function Jl(n, e = null) {
  let t = Zn({}, Wr);
  n && (t = Zn(t, n instanceof Jl ? n.o : n));
  const r = t.ignoreTags, i = [];
  for (let o = 0; o < r.length; o++)
    i.push(r[o].toUpperCase());
  this.o = t, e && (this.defaultRender = e), this.ignoreTags = i;
}
Jl.prototype = {
  o: Wr,
  /**
   * @type string[]
   */
  ignoreTags: [],
  /**
   * @param {IntermediateRepresentation} ir
   * @returns {any}
   */
  defaultRender(n) {
    return n;
  },
  /**
   * Returns true or false based on whether a token should be displayed as a
   * link based on the user options.
   * @param {MultiToken} token
   * @returns {boolean}
   */
  check(n) {
    return this.get("validate", n.toString(), n);
  },
  // Private methods
  /**
   * Resolve an option's value based on the value of the option and the given
   * params. If operator and token are specified and the target option is
   * callable, automatically calls the function with the given argument.
   * @template {keyof Opts} K
   * @param {K} key Name of option to use
   * @param {string} [operator] will be passed to the target option if it's a
   * function. If not specified, RAW function value gets returned
   * @param {MultiToken} [token] The token from linkify.tokenize
   * @returns {Opts[K] | any}
   */
  get(n, e, t) {
    const r = e != null;
    let i = this.o[n];
    return i && (typeof i == "object" ? (i = t.t in i ? i[t.t] : Wr[n], typeof i == "function" && r && (i = i(e, t))) : typeof i == "function" && r && (i = i(e, t.t, t)), i);
  },
  /**
   * @template {keyof Opts} L
   * @param {L} key Name of options object to use
   * @param {string} [operator]
   * @param {MultiToken} [token]
   * @returns {Opts[L] | any}
   */
  getObj(n, e, t) {
    let r = this.o[n];
    return typeof r == "function" && e != null && (r = r(e, t.t, t)), r;
  },
  /**
   * Convert the given token to a rendered element that may be added to the
   * calling-interface's DOM
   * @param {MultiToken} token Token to render to an HTML element
   * @returns {any} Render result; e.g., HTML string, DOM element, React
   *   Component, etc.
   */
  render(n) {
    const e = n.render(this);
    return (this.get("render", null, n) || this.defaultRender)(e, n.t, n);
  }
};
function Bc(n) {
  return n;
}
function bf(n, e) {
  this.t = "token", this.v = n, this.tk = e;
}
bf.prototype = {
  isLink: !1,
  /**
   * Return the string this token represents.
   * @return {string}
   */
  toString() {
    return this.v;
  },
  /**
   * What should the value for this token be in the `href` HTML attribute?
   * Returns the `.toString` value by default.
   * @param {string} [scheme]
   * @return {string}
   */
  toHref(n) {
    return this.toString();
  },
  /**
   * @param {Options} options Formatting options
   * @returns {string}
   */
  toFormattedString(n) {
    const e = this.toString(), t = n.get("truncate", e, this), r = n.get("format", e, this);
    return t && r.length > t ? r.substring(0, t) + "…" : r;
  },
  /**
   *
   * @param {Options} options
   * @returns {string}
   */
  toFormattedHref(n) {
    return n.get("formatHref", this.toHref(n.get("defaultProtocol")), this);
  },
  /**
   * The start index of this token in the original input string
   * @returns {number}
   */
  startIndex() {
    return this.tk[0].s;
  },
  /**
   * The end index of this token in the original input string (up to this
   * index but not including it)
   * @returns {number}
   */
  endIndex() {
    return this.tk[this.tk.length - 1].e;
  },
  /**
  	Returns an object  of relevant values for this token, which includes keys
  	* type - Kind of token ('url', 'email', etc.)
  	* value - Original text
  	* href - The value that should be added to the anchor tag's href
  		attribute
  		@method toObject
  	@param {string} [protocol] `'http'` by default
  */
  toObject(n = Wr.defaultProtocol) {
    return {
      type: this.t,
      value: this.toString(),
      isLink: this.isLink,
      href: this.toHref(n),
      start: this.startIndex(),
      end: this.endIndex()
    };
  },
  /**
   *
   * @param {Options} options Formatting option
   */
  toFormattedObject(n) {
    return {
      type: this.t,
      value: this.toFormattedString(n),
      isLink: this.isLink,
      href: this.toFormattedHref(n),
      start: this.startIndex(),
      end: this.endIndex()
    };
  },
  /**
   * Whether this token should be rendered as a link according to the given options
   * @param {Options} options
   * @returns {boolean}
   */
  validate(n) {
    return n.get("validate", this.toString(), this);
  },
  /**
   * Return an object that represents how this link should be rendered.
   * @param {Options} options Formattinng options
   */
  render(n) {
    const e = this, t = this.toHref(n.get("defaultProtocol")), r = n.get("formatHref", t, this), i = n.get("tagName", t, e), o = this.toFormattedString(n), s = {}, l = n.get("className", t, e), a = n.get("target", t, e), c = n.get("rel", t, e), d = n.getObj("attributes", t, e), u = n.getObj("events", t, e);
    return s.href = r, l && (s.class = l), a && (s.target = a), c && (s.rel = c), d && Zn(s, d), {
      tagName: i,
      attributes: s,
      content: o,
      eventListeners: u
    };
  }
};
function Vo(n, e) {
  class t extends bf {
    constructor(i, o) {
      super(i, o), this.t = n;
    }
  }
  for (const r in e)
    t.prototype[r] = e[r];
  return t.t = n, t;
}
const Hc = Vo("email", {
  isLink: !0,
  toHref() {
    return "mailto:" + this.toString();
  }
}), zc = Vo("text"), ev = Vo("nl"), bi = Vo("url", {
  isLink: !0,
  /**
  	Lowercases relevant parts of the domain and adds the protocol if
  	required. Note that this will not escape unsafe HTML characters in the
  	URL.
  		@param {string} [scheme] default scheme (e.g., 'https')
  	@return {string} the full href
  */
  toHref(n = Wr.defaultProtocol) {
    return this.hasProtocol() ? this.v : `${n}://${this.v}`;
  },
  /**
   * Check whether this URL token has a protocol
   * @return {boolean}
   */
  hasProtocol() {
    const n = this.tk;
    return n.length >= 2 && n[0].t !== jr && n[1].t === Ft;
  }
}), $e = (n) => new Ne(n);
function tv({
  groups: n
}) {
  const e = n.domain.concat([fo, ho, zt, po, mo, go, yo, wo, We, $l, Ar, vo, bo, ko, lt, Co, Or, xo]), t = [Ft, _l, st, Kl, Ar, Er, ql, Ul, to, no, Mr, Tr, Qi, Xi, Zi, eo, ro, io, oo, so, lo, ao, co, uo], r = [fo, Wl, ho, po, mo, go, yo, wo, We, Mr, Tr, Ar, vo, bo, ko, Er, lt, Co, Or, xo], i = $e(), o = M(i, Or);
  z(o, r, o), z(o, n.domain, o);
  const s = $e(), l = $e(), a = $e();
  z(i, n.domain, s), z(i, n.scheme, l), z(i, n.slashscheme, a), z(s, r, o), z(s, n.domain, s);
  const c = M(s, zt);
  M(o, zt, c), M(l, zt, c), M(a, zt, c);
  const d = M(o, st);
  z(d, r, o), z(d, n.domain, o);
  const u = $e();
  z(c, n.domain, u), z(u, n.domain, u);
  const f = M(u, st);
  z(f, n.domain, u);
  const h = $e(Hc);
  z(f, n.tld, h), z(f, n.utld, h), M(c, jr, h);
  const p = M(u, We);
  M(p, We, p), z(p, n.domain, u), z(h, n.domain, u), M(h, st, f), M(h, We, p);
  const g = M(h, Ft);
  z(g, n.numeric, Hc);
  const m = M(s, We), y = M(s, st);
  M(m, We, m), z(m, n.domain, s), z(y, r, o), z(y, n.domain, s);
  const v = $e(bi);
  z(y, n.tld, v), z(y, n.utld, v), z(v, n.domain, s), z(v, r, o), M(v, st, y), M(v, We, m), M(v, zt, c);
  const S = M(v, Ft), w = $e(bi);
  z(S, n.numeric, w);
  const C = $e(bi), b = $e();
  z(C, e, C), z(C, t, b), z(b, e, C), z(b, t, b), M(v, lt, C), M(w, lt, C);
  const O = M(l, Ft), L = M(a, Ft), A = M(L, lt), P = M(A, lt);
  z(l, n.domain, s), M(l, st, y), M(l, We, m), z(a, n.domain, s), M(a, st, y), M(a, We, m), z(O, n.domain, C), M(O, lt, C), M(O, Er, C), z(P, n.domain, C), z(P, e, C), M(P, lt, C);
  const F = [
    [Mr, Tr],
    // {}
    [Xi, Qi],
    // []
    [Zi, eo],
    // ()
    [to, no],
    // <>
    [ro, io],
    // （）
    [oo, so],
    // 「」
    [lo, ao],
    // 『』
    [co, uo]
    // ＜＞
  ];
  for (let j = 0; j < F.length; j++) {
    const [W, le] = F[j], Q = M(C, W);
    M(b, W, Q), M(Q, le, C);
    const K = $e(bi);
    z(Q, e, K);
    const U = $e();
    z(Q, t), z(K, e, K), z(K, t, U), z(U, e, K), z(U, t, U), M(K, le, C), M(U, le, C);
  }
  return M(i, jr, v), M(i, jl, ev), {
    start: i,
    tokens: wf
  };
}
function nv(n, e, t) {
  let r = t.length, i = 0, o = [], s = [];
  for (; i < r; ) {
    let l = n, a = null, c = null, d = 0, u = null, f = -1;
    for (; i < r && !(a = l.go(t[i].t)); )
      s.push(t[i++]);
    for (; i < r && (c = a || l.go(t[i].t)); )
      a = null, l = c, l.accepts() ? (f = 0, u = l) : f >= 0 && f++, i++, d++;
    if (f < 0)
      i -= d, i < r && (s.push(t[i]), i++);
    else {
      s.length > 0 && (o.push(vs(zc, e, s)), s = []), i -= f, d -= f;
      const h = u.t, p = t.slice(i - d, i);
      o.push(vs(h, e, p));
    }
  }
  return s.length > 0 && o.push(vs(zc, e, s)), o;
}
function vs(n, e, t) {
  const r = t[0].s, i = t[t.length - 1].e, o = e.slice(r, i);
  return new n(o, t);
}
const rv = typeof console < "u" && console && console.warn || (() => {
}), iv = "until manual call of linkify.init(). Register all schemes and plugins before invoking linkify the first time.", G = {
  scanner: null,
  parser: null,
  tokenQueue: [],
  pluginQueue: [],
  customSchemes: [],
  initialized: !1
};
function ov() {
  return Ne.groups = {}, G.scanner = null, G.parser = null, G.tokenQueue = [], G.pluginQueue = [], G.customSchemes = [], G.initialized = !1, G;
}
function Vc(n, e = !1) {
  if (G.initialized && rv(`linkifyjs: already initialized - will not register custom scheme "${n}" ${iv}`), !/^[0-9a-z]+(-[0-9a-z]+)*$/.test(n))
    throw new Error(`linkifyjs: incorrect scheme format.
1. Must only contain digits, lowercase ASCII letters or "-"
2. Cannot start or end with "-"
3. "-" cannot repeat`);
  G.customSchemes.push([n, e]);
}
function sv() {
  G.scanner = Qw(G.customSchemes);
  for (let n = 0; n < G.tokenQueue.length; n++)
    G.tokenQueue[n][1]({
      scanner: G.scanner
    });
  G.parser = tv(G.scanner.tokens);
  for (let n = 0; n < G.pluginQueue.length; n++)
    G.pluginQueue[n][1]({
      scanner: G.scanner,
      parser: G.parser
    });
  return G.initialized = !0, G;
}
function Gl(n) {
  return G.initialized || sv(), nv(G.parser.start, n, vf(G.scanner.start, n));
}
Gl.scan = vf;
function kf(n, e = null, t = null) {
  if (e && typeof e == "object") {
    if (t)
      throw Error(`linkifyjs: Invalid link type ${e}; must be a string`);
    t = e, e = null;
  }
  const r = new Jl(t), i = Gl(n), o = [];
  for (let s = 0; s < i.length; s++) {
    const l = i[s];
    l.isLink && (!e || l.t === e) && r.check(l) && o.push(l.toFormattedObject(r));
  }
  return o;
}
function lv(n) {
  return n.length === 1 ? n[0].isLink : n.length === 3 && n[1].isLink ? ["()", "[]"].includes(n[0].value + n[2].value) : !1;
}
function av(n) {
  return new X({
    key: new se("autolink"),
    appendTransaction: (e, t, r) => {
      const i = e.some((c) => c.docChanged) && !t.doc.eq(r.doc), o = e.some((c) => c.getMeta("preventAutolink"));
      if (!i || o)
        return;
      const { tr: s } = r, l = w1(t.doc, [...e]);
      if (M1(l).forEach(({ newRange: c }) => {
        const d = b1(r.doc, c, (h) => h.isTextblock);
        let u, f;
        if (d.length > 1 ? (u = d[0], f = r.doc.textBetween(u.pos, u.pos + u.node.nodeSize, void 0, " ")) : d.length && r.doc.textBetween(c.from, c.to, " ", " ").endsWith(" ") && (u = d[0], f = r.doc.textBetween(u.pos, c.to, void 0, " ")), u && f) {
          const h = f.split(" ").filter((y) => y !== "");
          if (h.length <= 0)
            return !1;
          const p = h[h.length - 1], g = u.pos + f.lastIndexOf(p);
          if (!p)
            return !1;
          const m = Gl(p).map((y) => y.toObject(n.defaultProtocol));
          if (!lv(m))
            return !1;
          m.filter((y) => y.isLink).map((y) => ({
            ...y,
            from: g + y.start + 1,
            to: g + y.end + 1
          })).filter((y) => r.schema.marks.code ? !r.doc.rangeHasMark(y.from, y.to, r.schema.marks.code) : !0).filter((y) => n.validate(y.value)).filter((y) => n.shouldAutoLink(y.value)).forEach((y) => {
            Dl(y.from, y.to, r.doc).some((v) => v.mark.type === n.type) || s.addMark(y.from, y.to, n.type.create({
              href: y.href
            }));
          });
        }
      }), !!s.steps.length)
        return s;
    }
  });
}
function cv(n) {
  return new X({
    key: new se("handleClickLink"),
    props: {
      handleClick: (e, t, r) => {
        var i, o;
        if (r.button !== 0 || !e.editable)
          return !1;
        let s = r.target;
        const l = [];
        for (; s.nodeName !== "DIV"; )
          l.push(s), s = s.parentNode;
        if (!l.find((f) => f.nodeName === "A"))
          return !1;
        const a = Pu(e.state, n.type.name), c = r.target, d = (i = c == null ? void 0 : c.href) !== null && i !== void 0 ? i : a.href, u = (o = c == null ? void 0 : c.target) !== null && o !== void 0 ? o : a.target;
        return c && d ? (window.open(d, u), !0) : !1;
      }
    }
  });
}
function dv(n) {
  return new X({
    key: new se("handlePasteLink"),
    props: {
      handlePaste: (e, t, r) => {
        const { state: i } = e, { selection: o } = i, { empty: s } = o;
        if (s)
          return !1;
        let l = "";
        r.content.forEach((c) => {
          l += c.textContent;
        });
        const a = kf(l, { defaultProtocol: n.defaultProtocol }).find((c) => c.isLink && c.value === l);
        return !l || !a ? !1 : (n.editor.commands.setMark(n.type, {
          href: a.href
        }), !0);
      }
    }
  });
}
const uv = /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g;
function fr(n, e) {
  const t = [
    "http",
    "https",
    "ftp",
    "ftps",
    "mailto",
    "tel",
    "callto",
    "sms",
    "cid",
    "xmpp"
  ];
  return e && e.forEach((r) => {
    const i = typeof r == "string" ? r : r.scheme;
    i && t.push(i);
  }), !n || n.replace(uv, "").match(new RegExp(
    // eslint-disable-next-line no-useless-escape
    `^(?:(?:${t.join("|")}):|[^a-z]|[a-z+.-]+(?:[^a-z+.-:]|$))`,
    "i"
  ));
}
const fv = Je.create({
  name: "link",
  priority: 1e3,
  keepOnSplit: !1,
  exitable: !0,
  onCreate() {
    this.options.validate && !this.options.shouldAutoLink && (this.options.shouldAutoLink = this.options.validate, console.warn("The `validate` option is deprecated. Rename to the `shouldAutoLink` option instead.")), this.options.protocols.forEach((n) => {
      if (typeof n == "string") {
        Vc(n);
        return;
      }
      Vc(n.scheme, n.optionalSlashes);
    });
  },
  onDestroy() {
    ov();
  },
  inclusive() {
    return this.options.autolink;
  },
  addOptions() {
    return {
      openOnClick: !0,
      linkOnPaste: !0,
      autolink: !0,
      protocols: [],
      defaultProtocol: "http",
      HTMLAttributes: {
        target: "_blank",
        rel: "noopener noreferrer nofollow",
        class: null
      },
      isAllowedUri: (n, e) => !!fr(n, e.protocols),
      validate: (n) => !!n,
      shouldAutoLink: (n) => !!n
    };
  },
  addAttributes() {
    return {
      href: {
        default: null,
        parseHTML(n) {
          return n.getAttribute("href");
        }
      },
      target: {
        default: this.options.HTMLAttributes.target
      },
      rel: {
        default: this.options.HTMLAttributes.rel
      },
      class: {
        default: this.options.HTMLAttributes.class
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "a[href]",
        getAttrs: (n) => {
          const e = n.getAttribute("href");
          return !e || !this.options.isAllowedUri(e, {
            defaultValidate: (t) => !!fr(t, this.options.protocols),
            protocols: this.options.protocols,
            defaultProtocol: this.options.defaultProtocol
          }) ? !1 : null;
        }
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return this.options.isAllowedUri(n.href, {
      defaultValidate: (e) => !!fr(e, this.options.protocols),
      protocols: this.options.protocols,
      defaultProtocol: this.options.defaultProtocol
    }) ? ["a", Y(this.options.HTMLAttributes, n), 0] : [
      "a",
      Y(this.options.HTMLAttributes, { ...n, href: "" }),
      0
    ];
  },
  addCommands() {
    return {
      setLink: (n) => ({ chain: e }) => e().setMark(this.name, n).setMeta("preventAutolink", !0).run(),
      toggleLink: (n) => ({ chain: e }) => e().toggleMark(this.name, n, { extendEmptyMarkRange: !0 }).setMeta("preventAutolink", !0).run(),
      unsetLink: () => ({ chain: n }) => n().unsetMark(this.name, { extendEmptyMarkRange: !0 }).setMeta("preventAutolink", !0).run()
    };
  },
  addPasteRules() {
    return [
      Qt({
        find: (n) => {
          const e = [];
          if (n) {
            const { protocols: t, defaultProtocol: r } = this.options, i = kf(n).filter((o) => o.isLink && this.options.isAllowedUri(o.value, {
              defaultValidate: (s) => !!fr(s, t),
              protocols: t,
              defaultProtocol: r
            }));
            i.length && i.forEach((o) => e.push({
              text: o.value,
              data: {
                href: o.href
              },
              index: o.start
            }));
          }
          return e;
        },
        type: this.type,
        getAttributes: (n) => {
          var e;
          return {
            href: (e = n.data) === null || e === void 0 ? void 0 : e.href
          };
        }
      })
    ];
  },
  addProseMirrorPlugins() {
    const n = [], { protocols: e, defaultProtocol: t } = this.options;
    return this.options.autolink && n.push(av({
      type: this.type,
      defaultProtocol: this.options.defaultProtocol,
      validate: (r) => this.options.isAllowedUri(r, {
        defaultValidate: (i) => !!fr(i, e),
        protocols: e,
        defaultProtocol: t
      }),
      shouldAutoLink: this.options.shouldAutoLink
    })), this.options.openOnClick === !0 && n.push(cv({
      type: this.type
    })), this.options.linkOnPaste && n.push(dv({
      editor: this.editor,
      defaultProtocol: this.options.defaultProtocol,
      type: this.type
    })), n;
  }
}), hv = te.create({
  name: "placeholder",
  addOptions() {
    return {
      emptyEditorClass: "is-editor-empty",
      emptyNodeClass: "is-empty",
      placeholder: "Write something …",
      showOnlyWhenEditable: !0,
      showOnlyCurrent: !0,
      includeChildren: !1
    };
  },
  addProseMirrorPlugins() {
    return [
      new X({
        key: new se("placeholder"),
        props: {
          decorations: ({ doc: n, selection: e }) => {
            const t = this.editor.isEditable || !this.options.showOnlyWhenEditable, { anchor: r } = e, i = [];
            if (!t)
              return null;
            const o = this.editor.isEmpty;
            return n.descendants((s, l) => {
              const a = r >= l && r <= l + s.nodeSize, c = !s.isLeaf && Ho(s);
              if ((a || !this.options.showOnlyCurrent) && c) {
                const d = [this.options.emptyNodeClass];
                o && d.push(this.options.emptyEditorClass);
                const u = ye.node(l, l + s.nodeSize, {
                  class: d.join(" "),
                  "data-placeholder": typeof this.options.placeholder == "function" ? this.options.placeholder({
                    editor: this.editor,
                    node: s,
                    pos: l,
                    hasAnchor: a
                  }) : this.options.placeholder
                });
                i.push(u);
              }
              return this.options.includeChildren;
            }), ee.create(n, i);
          }
        }
      })
    ];
  }
});
var el, tl;
if (typeof WeakMap < "u") {
  let n = /* @__PURE__ */ new WeakMap();
  el = (e) => n.get(e), tl = (e, t) => (n.set(e, t), t);
} else {
  const n = [];
  let t = 0;
  el = (r) => {
    for (let i = 0; i < n.length; i += 2)
      if (n[i] == r)
        return n[i + 1];
  }, tl = (r, i) => (t == 10 && (t = 0), n[t++] = r, n[t++] = i);
}
var oe = class {
  constructor(n, e, t, r) {
    this.width = n, this.height = e, this.map = t, this.problems = r;
  }
  // Find the dimensions of the cell at the given position.
  findCell(n) {
    for (let e = 0; e < this.map.length; e++) {
      const t = this.map[e];
      if (t != n)
        continue;
      const r = e % this.width, i = e / this.width | 0;
      let o = r + 1, s = i + 1;
      for (let l = 1; o < this.width && this.map[e + l] == t; l++)
        o++;
      for (let l = 1; s < this.height && this.map[e + this.width * l] == t; l++)
        s++;
      return { left: r, top: i, right: o, bottom: s };
    }
    throw new RangeError(`No cell with offset ${n} found`);
  }
  // Find the left side of the cell at the given position.
  colCount(n) {
    for (let e = 0; e < this.map.length; e++)
      if (this.map[e] == n)
        return e % this.width;
    throw new RangeError(`No cell with offset ${n} found`);
  }
  // Find the next cell in the given direction, starting from the cell
  // at `pos`, if any.
  nextCell(n, e, t) {
    const { left: r, right: i, top: o, bottom: s } = this.findCell(n);
    return e == "horiz" ? (t < 0 ? r == 0 : i == this.width) ? null : this.map[o * this.width + (t < 0 ? r - 1 : i)] : (t < 0 ? o == 0 : s == this.height) ? null : this.map[r + this.width * (t < 0 ? o - 1 : s)];
  }
  // Get the rectangle spanning the two given cells.
  rectBetween(n, e) {
    const {
      left: t,
      right: r,
      top: i,
      bottom: o
    } = this.findCell(n), {
      left: s,
      right: l,
      top: a,
      bottom: c
    } = this.findCell(e);
    return {
      left: Math.min(t, s),
      top: Math.min(i, a),
      right: Math.max(r, l),
      bottom: Math.max(o, c)
    };
  }
  // Return the position of all cells that have the top left corner in
  // the given rectangle.
  cellsInRect(n) {
    const e = [], t = {};
    for (let r = n.top; r < n.bottom; r++)
      for (let i = n.left; i < n.right; i++) {
        const o = r * this.width + i, s = this.map[o];
        t[s] || (t[s] = !0, !(i == n.left && i && this.map[o - 1] == s || r == n.top && r && this.map[o - this.width] == s) && e.push(s));
      }
    return e;
  }
  // Return the position at which the cell at the given row and column
  // starts, or would start, if a cell started there.
  positionAt(n, e, t) {
    for (let r = 0, i = 0; ; r++) {
      const o = i + t.child(r).nodeSize;
      if (r == n) {
        let s = e + n * this.width;
        const l = (n + 1) * this.width;
        for (; s < l && this.map[s] < i; )
          s++;
        return s == l ? o - 1 : this.map[s];
      }
      i = o;
    }
  }
  // Find the table map for the given table node.
  static get(n) {
    return el(n) || tl(n, pv(n));
  }
};
function pv(n) {
  if (n.type.spec.tableRole != "table")
    throw new RangeError("Not a table node: " + n.type.name);
  const e = mv(n), t = n.childCount, r = [];
  let i = 0, o = null;
  const s = [];
  for (let c = 0, d = e * t; c < d; c++)
    r[c] = 0;
  for (let c = 0, d = 0; c < t; c++) {
    const u = n.child(c);
    d++;
    for (let p = 0; ; p++) {
      for (; i < r.length && r[i] != 0; )
        i++;
      if (p == u.childCount)
        break;
      const g = u.child(p), { colspan: m, rowspan: y, colwidth: v } = g.attrs;
      for (let S = 0; S < y; S++) {
        if (S + c >= t) {
          (o || (o = [])).push({
            type: "overlong_rowspan",
            pos: d,
            n: y - S
          });
          break;
        }
        const w = i + S * e;
        for (let C = 0; C < m; C++) {
          r[w + C] == 0 ? r[w + C] = d : (o || (o = [])).push({
            type: "collision",
            row: c,
            pos: d,
            n: m - C
          });
          const b = v && v[C];
          if (b) {
            const O = (w + C) % e * 2, L = s[O];
            L == null || L != b && s[O + 1] == 1 ? (s[O] = b, s[O + 1] = 1) : L == b && s[O + 1]++;
          }
        }
      }
      i += m, d += g.nodeSize;
    }
    const f = (c + 1) * e;
    let h = 0;
    for (; i < f; )
      r[i++] == 0 && h++;
    h && (o || (o = [])).push({ type: "missing", row: c, n: h }), d++;
  }
  const l = new oe(e, t, r, o);
  let a = !1;
  for (let c = 0; !a && c < s.length; c += 2)
    s[c] != null && s[c + 1] < t && (a = !0);
  return a && gv(l, s, n), l;
}
function mv(n) {
  let e = -1, t = !1;
  for (let r = 0; r < n.childCount; r++) {
    const i = n.child(r);
    let o = 0;
    if (t)
      for (let s = 0; s < r; s++) {
        const l = n.child(s);
        for (let a = 0; a < l.childCount; a++) {
          const c = l.child(a);
          s + c.attrs.rowspan > r && (o += c.attrs.colspan);
        }
      }
    for (let s = 0; s < i.childCount; s++) {
      const l = i.child(s);
      o += l.attrs.colspan, l.attrs.rowspan > 1 && (t = !0);
    }
    e == -1 ? e = o : e != o && (e = Math.max(e, o));
  }
  return e;
}
function gv(n, e, t) {
  n.problems || (n.problems = []);
  const r = {};
  for (let i = 0; i < n.map.length; i++) {
    const o = n.map[i];
    if (r[o])
      continue;
    r[o] = !0;
    const s = t.nodeAt(o);
    if (!s)
      throw new RangeError(`No cell with offset ${o} found`);
    let l = null;
    const a = s.attrs;
    for (let c = 0; c < a.colspan; c++) {
      const d = (i + c) % n.width, u = e[d * 2];
      u != null && (!a.colwidth || a.colwidth[c] != u) && ((l || (l = yv(a)))[c] = u);
    }
    l && n.problems.unshift({
      type: "colwidth mismatch",
      pos: o,
      colwidth: l
    });
  }
}
function yv(n) {
  if (n.colwidth)
    return n.colwidth.slice();
  const e = [];
  for (let t = 0; t < n.colspan; t++)
    e.push(0);
  return e;
}
function ke(n) {
  let e = n.cached.tableNodeTypes;
  if (!e) {
    e = n.cached.tableNodeTypes = {};
    for (const t in n.nodes) {
      const r = n.nodes[t], i = r.spec.tableRole;
      i && (e[i] = r);
    }
  }
  return e;
}
var $t = new se("selectingCells");
function nr(n) {
  for (let e = n.depth - 1; e > 0; e--)
    if (n.node(e).type.spec.tableRole == "row")
      return n.node(0).resolve(n.before(e + 1));
  return null;
}
function wv(n) {
  for (let e = n.depth; e > 0; e--) {
    const t = n.node(e).type.spec.tableRole;
    if (t === "cell" || t === "header_cell")
      return n.node(e);
  }
  return null;
}
function rt(n) {
  const e = n.selection.$head;
  for (let t = e.depth; t > 0; t--)
    if (e.node(t).type.spec.tableRole == "row")
      return !0;
  return !1;
}
function Fo(n) {
  const e = n.selection;
  if ("$anchorCell" in e && e.$anchorCell)
    return e.$anchorCell.pos > e.$headCell.pos ? e.$anchorCell : e.$headCell;
  if ("node" in e && e.node && e.node.type.spec.tableRole == "cell")
    return e.$anchor;
  const t = nr(e.$head) || vv(e.$head);
  if (t)
    return t;
  throw new RangeError(`No cell found around position ${e.head}`);
}
function vv(n) {
  for (let e = n.nodeAfter, t = n.pos; e; e = e.firstChild, t++) {
    const r = e.type.spec.tableRole;
    if (r == "cell" || r == "header_cell")
      return n.doc.resolve(t);
  }
  for (let e = n.nodeBefore, t = n.pos; e; e = e.lastChild, t--) {
    const r = e.type.spec.tableRole;
    if (r == "cell" || r == "header_cell")
      return n.doc.resolve(t - e.nodeSize);
  }
}
function nl(n) {
  return n.parent.type.spec.tableRole == "row" && !!n.nodeAfter;
}
function bv(n) {
  return n.node(0).resolve(n.pos + n.nodeAfter.nodeSize);
}
function Yl(n, e) {
  return n.depth == e.depth && n.pos >= e.start(-1) && n.pos <= e.end(-1);
}
function xf(n, e, t) {
  const r = n.node(-1), i = oe.get(r), o = n.start(-1), s = i.nextCell(n.pos - o, e, t);
  return s == null ? null : n.node(0).resolve(o + s);
}
function Sn(n, e, t = 1) {
  const r = { ...n, colspan: n.colspan - t };
  return r.colwidth && (r.colwidth = r.colwidth.slice(), r.colwidth.splice(e, t), r.colwidth.some((i) => i > 0) || (r.colwidth = null)), r;
}
function Cf(n, e, t = 1) {
  const r = { ...n, colspan: n.colspan + t };
  if (r.colwidth) {
    r.colwidth = r.colwidth.slice();
    for (let i = 0; i < t; i++)
      r.colwidth.splice(e, 0, 0);
  }
  return r;
}
function kv(n, e, t) {
  const r = ke(e.type.schema).header_cell;
  for (let i = 0; i < n.height; i++)
    if (e.nodeAt(n.map[t + i * n.width]).type != r)
      return !1;
  return !0;
}
var J = class Tt extends I {
  // A table selection is identified by its anchor and head cells. The
  // positions given to this constructor should point _before_ two
  // cells in the same table. They may be the same, to select a single
  // cell.
  constructor(e, t = e) {
    const r = e.node(-1), i = oe.get(r), o = e.start(-1), s = i.rectBetween(
      e.pos - o,
      t.pos - o
    ), l = e.node(0), a = i.cellsInRect(s).filter((d) => d != t.pos - o);
    a.unshift(t.pos - o);
    const c = a.map((d) => {
      const u = r.nodeAt(d);
      if (!u)
        throw RangeError(`No cell with offset ${d} found`);
      const f = o + d + 1;
      return new Pd(
        l.resolve(f),
        l.resolve(f + u.content.size)
      );
    });
    super(c[0].$from, c[0].$to, c), this.$anchorCell = e, this.$headCell = t;
  }
  map(e, t) {
    const r = e.resolve(t.map(this.$anchorCell.pos)), i = e.resolve(t.map(this.$headCell.pos));
    if (nl(r) && nl(i) && Yl(r, i)) {
      const o = this.$anchorCell.node(-1) != r.node(-1);
      return o && this.isRowSelection() ? Tt.rowSelection(r, i) : o && this.isColSelection() ? Tt.colSelection(r, i) : new Tt(r, i);
    }
    return D.between(r, i);
  }
  // Returns a rectangular slice of table rows containing the selected
  // cells.
  content() {
    const e = this.$anchorCell.node(-1), t = oe.get(e), r = this.$anchorCell.start(-1), i = t.rectBetween(
      this.$anchorCell.pos - r,
      this.$headCell.pos - r
    ), o = {}, s = [];
    for (let a = i.top; a < i.bottom; a++) {
      const c = [];
      for (let d = a * t.width + i.left, u = i.left; u < i.right; u++, d++) {
        const f = t.map[d];
        if (o[f])
          continue;
        o[f] = !0;
        const h = t.findCell(f);
        let p = e.nodeAt(f);
        if (!p)
          throw RangeError(`No cell with offset ${f} found`);
        const g = i.left - h.left, m = h.right - i.right;
        if (g > 0 || m > 0) {
          let y = p.attrs;
          if (g > 0 && (y = Sn(y, 0, g)), m > 0 && (y = Sn(
            y,
            y.colspan - m,
            m
          )), h.left < i.left) {
            if (p = p.type.createAndFill(y), !p)
              throw RangeError(
                `Could not create cell with attrs ${JSON.stringify(y)}`
              );
          } else
            p = p.type.create(y, p.content);
        }
        if (h.top < i.top || h.bottom > i.bottom) {
          const y = {
            ...p.attrs,
            rowspan: Math.min(h.bottom, i.bottom) - Math.max(h.top, i.top)
          };
          h.top < i.top ? p = p.type.createAndFill(y) : p = p.type.create(y, p.content);
        }
        c.push(p);
      }
      s.push(e.child(a).copy(x.from(c)));
    }
    const l = this.isColSelection() && this.isRowSelection() ? e : s;
    return new T(x.from(l), 1, 1);
  }
  replace(e, t = T.empty) {
    const r = e.steps.length, i = this.ranges;
    for (let s = 0; s < i.length; s++) {
      const { $from: l, $to: a } = i[s], c = e.mapping.slice(r);
      e.replace(
        c.map(l.pos),
        c.map(a.pos),
        s ? T.empty : t
      );
    }
    const o = I.findFrom(
      e.doc.resolve(e.mapping.slice(r).map(this.to)),
      -1
    );
    o && e.setSelection(o);
  }
  replaceWith(e, t) {
    this.replace(e, new T(x.from(t), 0, 0));
  }
  forEachCell(e) {
    const t = this.$anchorCell.node(-1), r = oe.get(t), i = this.$anchorCell.start(-1), o = r.cellsInRect(
      r.rectBetween(
        this.$anchorCell.pos - i,
        this.$headCell.pos - i
      )
    );
    for (let s = 0; s < o.length; s++)
      e(t.nodeAt(o[s]), i + o[s]);
  }
  // True if this selection goes all the way from the top to the
  // bottom of the table.
  isColSelection() {
    const e = this.$anchorCell.index(-1), t = this.$headCell.index(-1);
    if (Math.min(e, t) > 0)
      return !1;
    const r = e + this.$anchorCell.nodeAfter.attrs.rowspan, i = t + this.$headCell.nodeAfter.attrs.rowspan;
    return Math.max(r, i) == this.$headCell.node(-1).childCount;
  }
  // Returns the smallest column selection that covers the given anchor
  // and head cell.
  static colSelection(e, t = e) {
    const r = e.node(-1), i = oe.get(r), o = e.start(-1), s = i.findCell(e.pos - o), l = i.findCell(t.pos - o), a = e.node(0);
    return s.top <= l.top ? (s.top > 0 && (e = a.resolve(o + i.map[s.left])), l.bottom < i.height && (t = a.resolve(
      o + i.map[i.width * (i.height - 1) + l.right - 1]
    ))) : (l.top > 0 && (t = a.resolve(o + i.map[l.left])), s.bottom < i.height && (e = a.resolve(
      o + i.map[i.width * (i.height - 1) + s.right - 1]
    ))), new Tt(e, t);
  }
  // True if this selection goes all the way from the left to the
  // right of the table.
  isRowSelection() {
    const e = this.$anchorCell.node(-1), t = oe.get(e), r = this.$anchorCell.start(-1), i = t.colCount(this.$anchorCell.pos - r), o = t.colCount(this.$headCell.pos - r);
    if (Math.min(i, o) > 0)
      return !1;
    const s = i + this.$anchorCell.nodeAfter.attrs.colspan, l = o + this.$headCell.nodeAfter.attrs.colspan;
    return Math.max(s, l) == t.width;
  }
  eq(e) {
    return e instanceof Tt && e.$anchorCell.pos == this.$anchorCell.pos && e.$headCell.pos == this.$headCell.pos;
  }
  // Returns the smallest row selection that covers the given anchor
  // and head cell.
  static rowSelection(e, t = e) {
    const r = e.node(-1), i = oe.get(r), o = e.start(-1), s = i.findCell(e.pos - o), l = i.findCell(t.pos - o), a = e.node(0);
    return s.left <= l.left ? (s.left > 0 && (e = a.resolve(
      o + i.map[s.top * i.width]
    )), l.right < i.width && (t = a.resolve(
      o + i.map[i.width * (l.top + 1) - 1]
    ))) : (l.left > 0 && (t = a.resolve(o + i.map[l.top * i.width])), s.right < i.width && (e = a.resolve(
      o + i.map[i.width * (s.top + 1) - 1]
    ))), new Tt(e, t);
  }
  toJSON() {
    return {
      type: "cell",
      anchor: this.$anchorCell.pos,
      head: this.$headCell.pos
    };
  }
  static fromJSON(e, t) {
    return new Tt(e.resolve(t.anchor), e.resolve(t.head));
  }
  static create(e, t, r = t) {
    return new Tt(e.resolve(t), e.resolve(r));
  }
  getBookmark() {
    return new xv(this.$anchorCell.pos, this.$headCell.pos);
  }
};
J.prototype.visible = !1;
I.jsonID("cell", J);
var xv = class Sf {
  constructor(e, t) {
    this.anchor = e, this.head = t;
  }
  map(e) {
    return new Sf(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    const t = e.resolve(this.anchor), r = e.resolve(this.head);
    return t.parent.type.spec.tableRole == "row" && r.parent.type.spec.tableRole == "row" && t.index() < t.parent.childCount && r.index() < r.parent.childCount && Yl(t, r) ? new J(t, r) : I.near(r, 1);
  }
};
function Cv(n) {
  if (!(n.selection instanceof J))
    return null;
  const e = [];
  return n.selection.forEachCell((t, r) => {
    e.push(
      ye.node(r, r + t.nodeSize, { class: "selectedCell" })
    );
  }), ee.create(n.doc, e);
}
function Sv({ $from: n, $to: e }) {
  if (n.pos == e.pos || n.pos < e.pos - 6)
    return !1;
  let t = n.pos, r = e.pos, i = n.depth;
  for (; i >= 0 && !(n.after(i + 1) < n.end(i)); i--, t++)
    ;
  for (let o = e.depth; o >= 0 && !(e.before(o + 1) > e.start(o)); o--, r--)
    ;
  return t == r && /row|table/.test(n.node(i).type.spec.tableRole);
}
function Mv({ $from: n, $to: e }) {
  let t, r;
  for (let i = n.depth; i > 0; i--) {
    const o = n.node(i);
    if (o.type.spec.tableRole === "cell" || o.type.spec.tableRole === "header_cell") {
      t = o;
      break;
    }
  }
  for (let i = e.depth; i > 0; i--) {
    const o = e.node(i);
    if (o.type.spec.tableRole === "cell" || o.type.spec.tableRole === "header_cell") {
      r = o;
      break;
    }
  }
  return t !== r && e.parentOffset === 0;
}
function Tv(n, e, t) {
  const r = (e || n).selection, i = (e || n).doc;
  let o, s;
  if (r instanceof R && (s = r.node.type.spec.tableRole)) {
    if (s == "cell" || s == "header_cell")
      o = J.create(i, r.from);
    else if (s == "row") {
      const l = i.resolve(r.from + 1);
      o = J.rowSelection(l, l);
    } else if (!t) {
      const l = oe.get(r.node), a = r.from + 1, c = a + l.map[l.width * l.height - 1];
      o = J.create(i, a + 1, c);
    }
  } else
    r instanceof D && Sv(r) ? o = D.create(i, r.from) : r instanceof D && Mv(r) && (o = D.create(i, r.$from.start(), r.$from.end()));
  return o && (e || (e = n.tr)).setSelection(o), e;
}
var Av = new se("fix-tables");
function Mf(n, e, t, r) {
  const i = n.childCount, o = e.childCount;
  e:
    for (let s = 0, l = 0; s < o; s++) {
      const a = e.child(s);
      for (let c = l, d = Math.min(i, s + 3); c < d; c++)
        if (n.child(c) == a) {
          l = c + 1, t += a.nodeSize;
          continue e;
        }
      r(a, t), l < i && n.child(l).sameMarkup(a) ? Mf(n.child(l), a, t + 1, r) : a.nodesBetween(0, a.content.size, r, t + 1), t += a.nodeSize;
    }
}
function Tf(n, e) {
  let t;
  const r = (i, o) => {
    i.type.spec.tableRole == "table" && (t = Ev(n, i, o, t));
  };
  return e ? e.doc != n.doc && Mf(e.doc, n.doc, 0, r) : n.doc.descendants(r), t;
}
function Ev(n, e, t, r) {
  const i = oe.get(e);
  if (!i.problems)
    return r;
  r || (r = n.tr);
  const o = [];
  for (let a = 0; a < i.height; a++)
    o.push(0);
  for (let a = 0; a < i.problems.length; a++) {
    const c = i.problems[a];
    if (c.type == "collision") {
      const d = e.nodeAt(c.pos);
      if (!d)
        continue;
      const u = d.attrs;
      for (let f = 0; f < u.rowspan; f++)
        o[c.row + f] += c.n;
      r.setNodeMarkup(
        r.mapping.map(t + 1 + c.pos),
        null,
        Sn(u, u.colspan - c.n, c.n)
      );
    } else if (c.type == "missing")
      o[c.row] += c.n;
    else if (c.type == "overlong_rowspan") {
      const d = e.nodeAt(c.pos);
      if (!d)
        continue;
      r.setNodeMarkup(r.mapping.map(t + 1 + c.pos), null, {
        ...d.attrs,
        rowspan: d.attrs.rowspan - c.n
      });
    } else if (c.type == "colwidth mismatch") {
      const d = e.nodeAt(c.pos);
      if (!d)
        continue;
      r.setNodeMarkup(r.mapping.map(t + 1 + c.pos), null, {
        ...d.attrs,
        colwidth: c.colwidth
      });
    }
  }
  let s, l;
  for (let a = 0; a < o.length; a++)
    o[a] && (s == null && (s = a), l = a);
  for (let a = 0, c = t + 1; a < i.height; a++) {
    const d = e.child(a), u = c + d.nodeSize, f = o[a];
    if (f > 0) {
      let h = "cell";
      d.firstChild && (h = d.firstChild.type.spec.tableRole);
      const p = [];
      for (let m = 0; m < f; m++) {
        const y = ke(n.schema)[h].createAndFill();
        y && p.push(y);
      }
      const g = (a == 0 || s == a - 1) && l == a ? c + 1 : u - 1;
      r.insert(r.mapping.map(g), p);
    }
    c = u;
  }
  return r.setMeta(Av, { fixTables: !0 });
}
function pt(n) {
  const e = n.selection, t = Fo(n), r = t.node(-1), i = t.start(-1), o = oe.get(r);
  return { ...e instanceof J ? o.rectBetween(
    e.$anchorCell.pos - i,
    e.$headCell.pos - i
  ) : o.findCell(t.pos - i), tableStart: i, map: o, table: r };
}
function Af(n, { map: e, tableStart: t, table: r }, i) {
  let o = i > 0 ? -1 : 0;
  kv(e, r, i + o) && (o = i == 0 || i == e.width ? null : 0);
  for (let s = 0; s < e.height; s++) {
    const l = s * e.width + i;
    if (i > 0 && i < e.width && e.map[l - 1] == e.map[l]) {
      const a = e.map[l], c = r.nodeAt(a);
      n.setNodeMarkup(
        n.mapping.map(t + a),
        null,
        Cf(c.attrs, i - e.colCount(a))
      ), s += c.attrs.rowspan - 1;
    } else {
      const a = o == null ? ke(r.type.schema).cell : r.nodeAt(e.map[l + o]).type, c = e.positionAt(s, i, r);
      n.insert(n.mapping.map(t + c), a.createAndFill());
    }
  }
  return n;
}
function Ov(n, e) {
  if (!rt(n))
    return !1;
  if (e) {
    const t = pt(n);
    e(Af(n.tr, t, t.left));
  }
  return !0;
}
function Nv(n, e) {
  if (!rt(n))
    return !1;
  if (e) {
    const t = pt(n);
    e(Af(n.tr, t, t.right));
  }
  return !0;
}
function Dv(n, { map: e, table: t, tableStart: r }, i) {
  const o = n.mapping.maps.length;
  for (let s = 0; s < e.height; ) {
    const l = s * e.width + i, a = e.map[l], c = t.nodeAt(a), d = c.attrs;
    if (i > 0 && e.map[l - 1] == a || i < e.width - 1 && e.map[l + 1] == a)
      n.setNodeMarkup(
        n.mapping.slice(o).map(r + a),
        null,
        Sn(d, i - e.colCount(a))
      );
    else {
      const u = n.mapping.slice(o).map(r + a);
      n.delete(u, u + c.nodeSize);
    }
    s += d.rowspan;
  }
}
function Rv(n, e) {
  if (!rt(n))
    return !1;
  if (e) {
    const t = pt(n), r = n.tr;
    if (t.left == 0 && t.right == t.map.width)
      return !1;
    for (let i = t.right - 1; Dv(r, t, i), i != t.left; i--) {
      const o = t.tableStart ? r.doc.nodeAt(t.tableStart - 1) : r.doc;
      if (!o)
        throw RangeError("No table found");
      t.table = o, t.map = oe.get(o);
    }
    e(r);
  }
  return !0;
}
function Iv(n, e, t) {
  var r;
  const i = ke(e.type.schema).header_cell;
  for (let o = 0; o < n.width; o++)
    if (((r = e.nodeAt(n.map[o + t * n.width])) == null ? void 0 : r.type) != i)
      return !1;
  return !0;
}
function Ef(n, { map: e, tableStart: t, table: r }, i) {
  var o;
  let s = t;
  for (let c = 0; c < i; c++)
    s += r.child(c).nodeSize;
  const l = [];
  let a = i > 0 ? -1 : 0;
  Iv(e, r, i + a) && (a = i == 0 || i == e.height ? null : 0);
  for (let c = 0, d = e.width * i; c < e.width; c++, d++)
    if (i > 0 && i < e.height && e.map[d] == e.map[d - e.width]) {
      const u = e.map[d], f = r.nodeAt(u).attrs;
      n.setNodeMarkup(t + u, null, {
        ...f,
        rowspan: f.rowspan + 1
      }), c += f.colspan - 1;
    } else {
      const u = a == null ? ke(r.type.schema).cell : (o = r.nodeAt(e.map[d + a * e.width])) == null ? void 0 : o.type, f = u == null ? void 0 : u.createAndFill();
      f && l.push(f);
    }
  return n.insert(s, ke(r.type.schema).row.create(null, l)), n;
}
function Lv(n, e) {
  if (!rt(n))
    return !1;
  if (e) {
    const t = pt(n);
    e(Ef(n.tr, t, t.top));
  }
  return !0;
}
function Pv(n, e) {
  if (!rt(n))
    return !1;
  if (e) {
    const t = pt(n);
    e(Ef(n.tr, t, t.bottom));
  }
  return !0;
}
function Bv(n, { map: e, table: t, tableStart: r }, i) {
  let o = 0;
  for (let c = 0; c < i; c++)
    o += t.child(c).nodeSize;
  const s = o + t.child(i).nodeSize, l = n.mapping.maps.length;
  n.delete(o + r, s + r);
  const a = /* @__PURE__ */ new Set();
  for (let c = 0, d = i * e.width; c < e.width; c++, d++) {
    const u = e.map[d];
    if (!a.has(u)) {
      if (a.add(u), i > 0 && u == e.map[d - e.width]) {
        const f = t.nodeAt(u).attrs;
        n.setNodeMarkup(n.mapping.slice(l).map(u + r), null, {
          ...f,
          rowspan: f.rowspan - 1
        }), c += f.colspan - 1;
      } else if (i < e.height && u == e.map[d + e.width]) {
        const f = t.nodeAt(u), h = f.attrs, p = f.type.create(
          { ...h, rowspan: f.attrs.rowspan - 1 },
          f.content
        ), g = e.positionAt(i + 1, c, t);
        n.insert(n.mapping.slice(l).map(r + g), p), c += h.colspan - 1;
      }
    }
  }
}
function Hv(n, e) {
  if (!rt(n))
    return !1;
  if (e) {
    const t = pt(n), r = n.tr;
    if (t.top == 0 && t.bottom == t.map.height)
      return !1;
    for (let i = t.bottom - 1; Bv(r, t, i), i != t.top; i--) {
      const o = t.tableStart ? r.doc.nodeAt(t.tableStart - 1) : r.doc;
      if (!o)
        throw RangeError("No table found");
      t.table = o, t.map = oe.get(t.table);
    }
    e(r);
  }
  return !0;
}
function Fc(n) {
  const e = n.content;
  return e.childCount == 1 && e.child(0).isTextblock && e.child(0).childCount == 0;
}
function zv({ width: n, height: e, map: t }, r) {
  let i = r.top * n + r.left, o = i, s = (r.bottom - 1) * n + r.left, l = i + (r.right - r.left - 1);
  for (let a = r.top; a < r.bottom; a++) {
    if (r.left > 0 && t[o] == t[o - 1] || r.right < n && t[l] == t[l + 1])
      return !0;
    o += n, l += n;
  }
  for (let a = r.left; a < r.right; a++) {
    if (r.top > 0 && t[i] == t[i - n] || r.bottom < e && t[s] == t[s + n])
      return !0;
    i++, s++;
  }
  return !1;
}
function $c(n, e) {
  const t = n.selection;
  if (!(t instanceof J) || t.$anchorCell.pos == t.$headCell.pos)
    return !1;
  const r = pt(n), { map: i } = r;
  if (zv(i, r))
    return !1;
  if (e) {
    const o = n.tr, s = {};
    let l = x.empty, a, c;
    for (let d = r.top; d < r.bottom; d++)
      for (let u = r.left; u < r.right; u++) {
        const f = i.map[d * i.width + u], h = r.table.nodeAt(f);
        if (!(s[f] || !h))
          if (s[f] = !0, a == null)
            a = f, c = h;
          else {
            Fc(h) || (l = l.append(h.content));
            const p = o.mapping.map(f + r.tableStart);
            o.delete(p, p + h.nodeSize);
          }
      }
    if (a == null || c == null)
      return !0;
    if (o.setNodeMarkup(a + r.tableStart, null, {
      ...Cf(
        c.attrs,
        c.attrs.colspan,
        r.right - r.left - c.attrs.colspan
      ),
      rowspan: r.bottom - r.top
    }), l.size) {
      const d = a + 1 + c.content.size, u = Fc(c) ? a + 1 : d;
      o.replaceWith(u + r.tableStart, d + r.tableStart, l);
    }
    o.setSelection(
      new J(o.doc.resolve(a + r.tableStart))
    ), e(o);
  }
  return !0;
}
function jc(n, e) {
  const t = ke(n.schema);
  return Vv(({ node: r }) => t[r.type.spec.tableRole])(n, e);
}
function Vv(n) {
  return (e, t) => {
    var r;
    const i = e.selection;
    let o, s;
    if (i instanceof J) {
      if (i.$anchorCell.pos != i.$headCell.pos)
        return !1;
      o = i.$anchorCell.nodeAfter, s = i.$anchorCell.pos;
    } else {
      if (o = wv(i.$from), !o)
        return !1;
      s = (r = nr(i.$from)) == null ? void 0 : r.pos;
    }
    if (o == null || s == null || o.attrs.colspan == 1 && o.attrs.rowspan == 1)
      return !1;
    if (t) {
      let l = o.attrs;
      const a = [], c = l.colwidth;
      l.rowspan > 1 && (l = { ...l, rowspan: 1 }), l.colspan > 1 && (l = { ...l, colspan: 1 });
      const d = pt(e), u = e.tr;
      for (let h = 0; h < d.right - d.left; h++)
        a.push(
          c ? {
            ...l,
            colwidth: c && c[h] ? [c[h]] : null
          } : l
        );
      let f;
      for (let h = d.top; h < d.bottom; h++) {
        let p = d.map.positionAt(h, d.left, d.table);
        h == d.top && (p += o.nodeSize);
        for (let g = d.left, m = 0; g < d.right; g++, m++)
          g == d.left && h == d.top || u.insert(
            f = u.mapping.map(p + d.tableStart, 1),
            n({ node: o, row: h, col: g }).createAndFill(a[m])
          );
      }
      u.setNodeMarkup(
        s,
        n({ node: o, row: d.top, col: d.left }),
        a[0]
      ), i instanceof J && u.setSelection(
        new J(
          u.doc.resolve(i.$anchorCell.pos),
          f ? u.doc.resolve(f) : void 0
        )
      ), t(u);
    }
    return !0;
  };
}
function Fv(n, e) {
  return function(t, r) {
    if (!rt(t))
      return !1;
    const i = Fo(t);
    if (i.nodeAfter.attrs[n] === e)
      return !1;
    if (r) {
      const o = t.tr;
      t.selection instanceof J ? t.selection.forEachCell((s, l) => {
        s.attrs[n] !== e && o.setNodeMarkup(l, null, {
          ...s.attrs,
          [n]: e
        });
      }) : o.setNodeMarkup(i.pos, null, {
        ...i.nodeAfter.attrs,
        [n]: e
      }), r(o);
    }
    return !0;
  };
}
function $v(n) {
  return function(e, t) {
    if (!rt(e))
      return !1;
    if (t) {
      const r = ke(e.schema), i = pt(e), o = e.tr, s = i.map.cellsInRect(
        n == "column" ? {
          left: i.left,
          top: 0,
          right: i.right,
          bottom: i.map.height
        } : n == "row" ? {
          left: 0,
          top: i.top,
          right: i.map.width,
          bottom: i.bottom
        } : i
      ), l = s.map((a) => i.table.nodeAt(a));
      for (let a = 0; a < s.length; a++)
        l[a].type == r.header_cell && o.setNodeMarkup(
          i.tableStart + s[a],
          r.cell,
          l[a].attrs
        );
      if (o.steps.length == 0)
        for (let a = 0; a < s.length; a++)
          o.setNodeMarkup(
            i.tableStart + s[a],
            r.header_cell,
            l[a].attrs
          );
      t(o);
    }
    return !0;
  };
}
function Wc(n, e, t) {
  const r = e.map.cellsInRect({
    left: 0,
    top: 0,
    right: n == "row" ? e.map.width : 1,
    bottom: n == "column" ? e.map.height : 1
  });
  for (let i = 0; i < r.length; i++) {
    const o = e.table.nodeAt(r[i]);
    if (o && o.type !== t.header_cell)
      return !1;
  }
  return !0;
}
function _r(n, e) {
  return e = e || { useDeprecatedLogic: !1 }, e.useDeprecatedLogic ? $v(n) : function(t, r) {
    if (!rt(t))
      return !1;
    if (r) {
      const i = ke(t.schema), o = pt(t), s = t.tr, l = Wc("row", o, i), a = Wc(
        "column",
        o,
        i
      ), d = (n === "column" ? l : n === "row" ? a : !1) ? 1 : 0, u = n == "column" ? {
        left: 0,
        top: d,
        right: 1,
        bottom: o.map.height
      } : n == "row" ? {
        left: d,
        top: 0,
        right: o.map.width,
        bottom: 1
      } : o, f = n == "column" ? a ? i.cell : i.header_cell : n == "row" ? l ? i.cell : i.header_cell : i.cell;
      o.map.cellsInRect(u).forEach((h) => {
        const p = h + o.tableStart, g = s.doc.nodeAt(p);
        g && s.setNodeMarkup(p, f, g.attrs);
      }), r(s);
    }
    return !0;
  };
}
_r("row", {
  useDeprecatedLogic: !0
});
_r("column", {
  useDeprecatedLogic: !0
});
var jv = _r("cell", {
  useDeprecatedLogic: !0
});
function Wv(n, e) {
  if (e < 0) {
    const t = n.nodeBefore;
    if (t)
      return n.pos - t.nodeSize;
    for (let r = n.index(-1) - 1, i = n.before(); r >= 0; r--) {
      const o = n.node(-1).child(r), s = o.lastChild;
      if (s)
        return i - 1 - s.nodeSize;
      i -= o.nodeSize;
    }
  } else {
    if (n.index() < n.parent.childCount - 1)
      return n.pos + n.nodeAfter.nodeSize;
    const t = n.node(-1);
    for (let r = n.indexAfter(-1), i = n.after(); r < t.childCount; r++) {
      const o = t.child(r);
      if (o.childCount)
        return i + 1;
      i += o.nodeSize;
    }
  }
  return null;
}
function _c(n) {
  return function(e, t) {
    if (!rt(e))
      return !1;
    const r = Wv(Fo(e), n);
    if (r == null)
      return !1;
    if (t) {
      const i = e.doc.resolve(r);
      t(
        e.tr.setSelection(D.between(i, bv(i))).scrollIntoView()
      );
    }
    return !0;
  };
}
function _v(n, e) {
  const t = n.selection.$anchor;
  for (let r = t.depth; r > 0; r--)
    if (t.node(r).type.spec.tableRole == "table")
      return e && e(
        n.tr.delete(t.before(r), t.after(r)).scrollIntoView()
      ), !0;
  return !1;
}
function ki(n, e) {
  const t = n.selection;
  if (!(t instanceof J))
    return !1;
  if (e) {
    const r = n.tr, i = ke(n.schema).cell.createAndFill().content;
    t.forEachCell((o, s) => {
      o.content.eq(i) || r.replace(
        r.mapping.map(s + 1),
        r.mapping.map(s + o.nodeSize - 1),
        new T(i, 0, 0)
      );
    }), r.docChanged && e(r);
  }
  return !0;
}
function Kv(n) {
  if (!n.size)
    return null;
  let { content: e, openStart: t, openEnd: r } = n;
  for (; e.childCount == 1 && (t > 0 && r > 0 || e.child(0).type.spec.tableRole == "table"); )
    t--, r--, e = e.child(0).content;
  const i = e.child(0), o = i.type.spec.tableRole, s = i.type.schema, l = [];
  if (o == "row")
    for (let a = 0; a < e.childCount; a++) {
      let c = e.child(a).content;
      const d = a ? 0 : Math.max(0, t - 1), u = a < e.childCount - 1 ? 0 : Math.max(0, r - 1);
      (d || u) && (c = rl(
        ke(s).row,
        new T(c, d, u)
      ).content), l.push(c);
    }
  else if (o == "cell" || o == "header_cell")
    l.push(
      t || r ? rl(
        ke(s).row,
        new T(e, t, r)
      ).content : e
    );
  else
    return null;
  return qv(s, l);
}
function qv(n, e) {
  const t = [];
  for (let i = 0; i < e.length; i++) {
    const o = e[i];
    for (let s = o.childCount - 1; s >= 0; s--) {
      const { rowspan: l, colspan: a } = o.child(s).attrs;
      for (let c = i; c < i + l; c++)
        t[c] = (t[c] || 0) + a;
    }
  }
  let r = 0;
  for (let i = 0; i < t.length; i++)
    r = Math.max(r, t[i]);
  for (let i = 0; i < t.length; i++)
    if (i >= e.length && e.push(x.empty), t[i] < r) {
      const o = ke(n).cell.createAndFill(), s = [];
      for (let l = t[i]; l < r; l++)
        s.push(o);
      e[i] = e[i].append(x.from(s));
    }
  return { height: e.length, width: r, rows: e };
}
function rl(n, e) {
  const t = n.createAndFill();
  return new fl(t).replace(0, t.content.size, e).doc;
}
function Uv({ width: n, height: e, rows: t }, r, i) {
  if (n != r) {
    const o = [], s = [];
    for (let l = 0; l < t.length; l++) {
      const a = t[l], c = [];
      for (let d = o[l] || 0, u = 0; d < r; u++) {
        let f = a.child(u % a.childCount);
        d + f.attrs.colspan > r && (f = f.type.createChecked(
          Sn(
            f.attrs,
            f.attrs.colspan,
            d + f.attrs.colspan - r
          ),
          f.content
        )), c.push(f), d += f.attrs.colspan;
        for (let h = 1; h < f.attrs.rowspan; h++)
          o[l + h] = (o[l + h] || 0) + f.attrs.colspan;
      }
      s.push(x.from(c));
    }
    t = s, n = r;
  }
  if (e != i) {
    const o = [];
    for (let s = 0, l = 0; s < i; s++, l++) {
      const a = [], c = t[l % e];
      for (let d = 0; d < c.childCount; d++) {
        let u = c.child(d);
        s + u.attrs.rowspan > i && (u = u.type.create(
          {
            ...u.attrs,
            rowspan: Math.max(1, i - u.attrs.rowspan)
          },
          u.content
        )), a.push(u);
      }
      o.push(x.from(a));
    }
    t = o, e = i;
  }
  return { width: n, height: e, rows: t };
}
function Jv(n, e, t, r, i, o, s) {
  const l = n.doc.type.schema, a = ke(l);
  let c, d;
  if (i > e.width)
    for (let u = 0, f = 0; u < e.height; u++) {
      const h = t.child(u);
      f += h.nodeSize;
      const p = [];
      let g;
      h.lastChild == null || h.lastChild.type == a.cell ? g = c || (c = a.cell.createAndFill()) : g = d || (d = a.header_cell.createAndFill());
      for (let m = e.width; m < i; m++)
        p.push(g);
      n.insert(n.mapping.slice(s).map(f - 1 + r), p);
    }
  if (o > e.height) {
    const u = [];
    for (let p = 0, g = (e.height - 1) * e.width; p < Math.max(e.width, i); p++) {
      const m = p >= e.width ? !1 : t.nodeAt(e.map[g + p]).type == a.header_cell;
      u.push(
        m ? d || (d = a.header_cell.createAndFill()) : c || (c = a.cell.createAndFill())
      );
    }
    const f = a.row.create(null, x.from(u)), h = [];
    for (let p = e.height; p < o; p++)
      h.push(f);
    n.insert(n.mapping.slice(s).map(r + t.nodeSize - 2), h);
  }
  return !!(c || d);
}
function Kc(n, e, t, r, i, o, s, l) {
  if (s == 0 || s == e.height)
    return !1;
  let a = !1;
  for (let c = i; c < o; c++) {
    const d = s * e.width + c, u = e.map[d];
    if (e.map[d - e.width] == u) {
      a = !0;
      const f = t.nodeAt(u), { top: h, left: p } = e.findCell(u);
      n.setNodeMarkup(n.mapping.slice(l).map(u + r), null, {
        ...f.attrs,
        rowspan: s - h
      }), n.insert(
        n.mapping.slice(l).map(e.positionAt(s, p, t)),
        f.type.createAndFill({
          ...f.attrs,
          rowspan: h + f.attrs.rowspan - s
        })
      ), c += f.attrs.colspan - 1;
    }
  }
  return a;
}
function qc(n, e, t, r, i, o, s, l) {
  if (s == 0 || s == e.width)
    return !1;
  let a = !1;
  for (let c = i; c < o; c++) {
    const d = c * e.width + s, u = e.map[d];
    if (e.map[d - 1] == u) {
      a = !0;
      const f = t.nodeAt(u), h = e.colCount(u), p = n.mapping.slice(l).map(u + r);
      n.setNodeMarkup(
        p,
        null,
        Sn(
          f.attrs,
          s - h,
          f.attrs.colspan - (s - h)
        )
      ), n.insert(
        p + f.nodeSize,
        f.type.createAndFill(
          Sn(f.attrs, 0, s - h)
        )
      ), c += f.attrs.rowspan - 1;
    }
  }
  return a;
}
function Uc(n, e, t, r, i) {
  let o = t ? n.doc.nodeAt(t - 1) : n.doc;
  if (!o)
    throw new Error("No table found");
  let s = oe.get(o);
  const { top: l, left: a } = r, c = a + i.width, d = l + i.height, u = n.tr;
  let f = 0;
  function h() {
    if (o = t ? u.doc.nodeAt(t - 1) : u.doc, !o)
      throw new Error("No table found");
    s = oe.get(o), f = u.mapping.maps.length;
  }
  Jv(u, s, o, t, c, d, f) && h(), Kc(u, s, o, t, a, c, l, f) && h(), Kc(u, s, o, t, a, c, d, f) && h(), qc(u, s, o, t, l, d, a, f) && h(), qc(u, s, o, t, l, d, c, f) && h();
  for (let p = l; p < d; p++) {
    const g = s.positionAt(p, a, o), m = s.positionAt(p, c, o);
    u.replace(
      u.mapping.slice(f).map(g + t),
      u.mapping.slice(f).map(m + t),
      new T(i.rows[p - l], 0, 0)
    );
  }
  h(), u.setSelection(
    new J(
      u.doc.resolve(t + s.positionAt(l, a, o)),
      u.doc.resolve(t + s.positionAt(d - 1, c - 1, o))
    )
  ), e(u);
}
var Gv = xl({
  ArrowLeft: xi("horiz", -1),
  ArrowRight: xi("horiz", 1),
  ArrowUp: xi("vert", -1),
  ArrowDown: xi("vert", 1),
  "Shift-ArrowLeft": Ci("horiz", -1),
  "Shift-ArrowRight": Ci("horiz", 1),
  "Shift-ArrowUp": Ci("vert", -1),
  "Shift-ArrowDown": Ci("vert", 1),
  Backspace: ki,
  "Mod-Backspace": ki,
  Delete: ki,
  "Mod-Delete": ki
});
function Di(n, e, t) {
  return t.eq(n.selection) ? !1 : (e && e(n.tr.setSelection(t).scrollIntoView()), !0);
}
function xi(n, e) {
  return (t, r, i) => {
    if (!i)
      return !1;
    const o = t.selection;
    if (o instanceof J)
      return Di(
        t,
        r,
        I.near(o.$headCell, e)
      );
    if (n != "horiz" && !o.empty)
      return !1;
    const s = Of(i, n, e);
    if (s == null)
      return !1;
    if (n == "horiz")
      return Di(
        t,
        r,
        I.near(t.doc.resolve(o.head + e), e)
      );
    {
      const l = t.doc.resolve(s), a = xf(l, n, e);
      let c;
      return a ? c = I.near(a, 1) : e < 0 ? c = I.near(t.doc.resolve(l.before(-1)), -1) : c = I.near(t.doc.resolve(l.after(-1)), 1), Di(t, r, c);
    }
  };
}
function Ci(n, e) {
  return (t, r, i) => {
    if (!i)
      return !1;
    const o = t.selection;
    let s;
    if (o instanceof J)
      s = o;
    else {
      const a = Of(i, n, e);
      if (a == null)
        return !1;
      s = new J(t.doc.resolve(a));
    }
    const l = xf(s.$headCell, n, e);
    return l ? Di(
      t,
      r,
      new J(s.$anchorCell, l)
    ) : !1;
  };
}
function Yv(n, e) {
  const t = n.state.doc, r = nr(t.resolve(e));
  return r ? (n.dispatch(n.state.tr.setSelection(new J(r))), !0) : !1;
}
function Xv(n, e, t) {
  if (!rt(n.state))
    return !1;
  let r = Kv(t);
  const i = n.state.selection;
  if (i instanceof J) {
    r || (r = {
      width: 1,
      height: 1,
      rows: [
        x.from(
          rl(ke(n.state.schema).cell, t)
        )
      ]
    });
    const o = i.$anchorCell.node(-1), s = i.$anchorCell.start(-1), l = oe.get(o).rectBetween(
      i.$anchorCell.pos - s,
      i.$headCell.pos - s
    );
    return r = Uv(r, l.right - l.left, l.bottom - l.top), Uc(n.state, n.dispatch, s, l, r), !0;
  } else if (r) {
    const o = Fo(n.state), s = o.start(-1);
    return Uc(
      n.state,
      n.dispatch,
      s,
      oe.get(o.node(-1)).findCell(o.pos - s),
      r
    ), !0;
  } else
    return !1;
}
function Qv(n, e) {
  var t;
  if (e.ctrlKey || e.metaKey)
    return;
  const r = Jc(n, e.target);
  let i;
  if (e.shiftKey && n.state.selection instanceof J)
    o(n.state.selection.$anchorCell, e), e.preventDefault();
  else if (e.shiftKey && r && (i = nr(n.state.selection.$anchor)) != null && ((t = bs(n, e)) == null ? void 0 : t.pos) != i.pos)
    o(i, e), e.preventDefault();
  else if (!r)
    return;
  function o(a, c) {
    let d = bs(n, c);
    const u = $t.getState(n.state) == null;
    if (!d || !Yl(a, d))
      if (u)
        d = a;
      else
        return;
    const f = new J(a, d);
    if (u || !n.state.selection.eq(f)) {
      const h = n.state.tr.setSelection(f);
      u && h.setMeta($t, a.pos), n.dispatch(h);
    }
  }
  function s() {
    n.root.removeEventListener("mouseup", s), n.root.removeEventListener("dragstart", s), n.root.removeEventListener("mousemove", l), $t.getState(n.state) != null && n.dispatch(n.state.tr.setMeta($t, -1));
  }
  function l(a) {
    const c = a, d = $t.getState(n.state);
    let u;
    if (d != null)
      u = n.state.doc.resolve(d);
    else if (Jc(n, c.target) != r && (u = bs(n, e), !u))
      return s();
    u && o(u, c);
  }
  n.root.addEventListener("mouseup", s), n.root.addEventListener("dragstart", s), n.root.addEventListener("mousemove", l);
}
function Of(n, e, t) {
  if (!(n.state.selection instanceof D))
    return null;
  const { $head: r } = n.state.selection;
  for (let i = r.depth - 1; i >= 0; i--) {
    const o = r.node(i);
    if ((t < 0 ? r.index(i) : r.indexAfter(i)) != (t < 0 ? 0 : o.childCount))
      return null;
    if (o.type.spec.tableRole == "cell" || o.type.spec.tableRole == "header_cell") {
      const l = r.before(i), a = e == "vert" ? t > 0 ? "down" : "up" : t > 0 ? "right" : "left";
      return n.endOfTextblock(a) ? l : null;
    }
  }
  return null;
}
function Jc(n, e) {
  for (; e && e != n.dom; e = e.parentNode)
    if (e.nodeName == "TD" || e.nodeName == "TH")
      return e;
  return null;
}
function bs(n, e) {
  const t = n.posAtCoords({
    left: e.clientX,
    top: e.clientY
  });
  return t && t ? nr(n.state.doc.resolve(t.pos)) : null;
}
var Zv = class {
  constructor(e, t) {
    this.node = e, this.defaultCellMinWidth = t, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), this.table.style.setProperty(
      "--default-cell-min-width",
      `${t}px`
    ), this.colgroup = this.table.appendChild(document.createElement("colgroup")), il(e, this.colgroup, this.table, t), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
  }
  update(e) {
    return e.type != this.node.type ? !1 : (this.node = e, il(
      e,
      this.colgroup,
      this.table,
      this.defaultCellMinWidth
    ), !0);
  }
  ignoreMutation(e) {
    return e.type == "attributes" && (e.target == this.table || this.colgroup.contains(e.target));
  }
};
function il(n, e, t, r, i, o) {
  var s;
  let l = 0, a = !0, c = e.firstChild;
  const d = n.firstChild;
  if (d) {
    for (let u = 0, f = 0; u < d.childCount; u++) {
      const { colspan: h, colwidth: p } = d.child(u).attrs;
      for (let g = 0; g < h; g++, f++) {
        const m = i == f ? o : p && p[g], y = m ? m + "px" : "";
        if (l += m || r, m || (a = !1), c)
          c.style.width != y && (c.style.width = y), c = c.nextSibling;
        else {
          const v = document.createElement("col");
          v.style.width = y, e.appendChild(v);
        }
      }
    }
    for (; c; ) {
      const u = c.nextSibling;
      (s = c.parentNode) == null || s.removeChild(c), c = u;
    }
    a ? (t.style.width = l + "px", t.style.minWidth = "") : (t.style.width = "", t.style.minWidth = l + "px");
  }
}
var He = new se(
  "tableColumnResizing"
);
function eb({
  handleWidth: n = 5,
  cellMinWidth: e = 25,
  defaultCellMinWidth: t = 100,
  View: r = Zv,
  lastColumnResizable: i = !0
} = {}) {
  const o = new X({
    key: He,
    state: {
      init(s, l) {
        var a, c;
        const d = (c = (a = o.spec) == null ? void 0 : a.props) == null ? void 0 : c.nodeViews, u = ke(l.schema).table.name;
        return r && d && (d[u] = (f, h) => new r(f, t, h)), new tb(-1, !1);
      },
      apply(s, l) {
        return l.apply(s);
      }
    },
    props: {
      attributes: (s) => {
        const l = He.getState(s);
        return l && l.activeHandle > -1 ? { class: "resize-cursor" } : {};
      },
      handleDOMEvents: {
        mousemove: (s, l) => {
          nb(s, l, n, i);
        },
        mouseleave: (s) => {
          rb(s);
        },
        mousedown: (s, l) => {
          ib(s, l, e, t);
        }
      },
      decorations: (s) => {
        const l = He.getState(s);
        if (l && l.activeHandle > -1)
          return cb(s, l.activeHandle);
      },
      nodeViews: {}
    }
  });
  return o;
}
var tb = class Ri {
  constructor(e, t) {
    this.activeHandle = e, this.dragging = t;
  }
  apply(e) {
    const t = this, r = e.getMeta(He);
    if (r && r.setHandle != null)
      return new Ri(r.setHandle, !1);
    if (r && r.setDragging !== void 0)
      return new Ri(t.activeHandle, r.setDragging);
    if (t.activeHandle > -1 && e.docChanged) {
      let i = e.mapping.map(t.activeHandle, -1);
      return nl(e.doc.resolve(i)) || (i = -1), new Ri(i, t.dragging);
    }
    return t;
  }
};
function nb(n, e, t, r) {
  const i = He.getState(n.state);
  if (i && !i.dragging) {
    const o = sb(e.target);
    let s = -1;
    if (o) {
      const { left: l, right: a } = o.getBoundingClientRect();
      e.clientX - l <= t ? s = Gc(n, e, "left", t) : a - e.clientX <= t && (s = Gc(n, e, "right", t));
    }
    if (s != i.activeHandle) {
      if (!r && s !== -1) {
        const l = n.state.doc.resolve(s), a = l.node(-1), c = oe.get(a), d = l.start(-1);
        if (c.colCount(l.pos - d) + l.nodeAfter.attrs.colspan - 1 == c.width - 1)
          return;
      }
      Nf(n, s);
    }
  }
}
function rb(n) {
  const e = He.getState(n.state);
  e && e.activeHandle > -1 && !e.dragging && Nf(n, -1);
}
function ib(n, e, t, r) {
  var i;
  const o = (i = n.dom.ownerDocument.defaultView) != null ? i : window, s = He.getState(n.state);
  if (!s || s.activeHandle == -1 || s.dragging)
    return !1;
  const l = n.state.doc.nodeAt(s.activeHandle), a = ob(n, s.activeHandle, l.attrs);
  n.dispatch(
    n.state.tr.setMeta(He, {
      setDragging: { startX: e.clientX, startWidth: a }
    })
  );
  function c(u) {
    o.removeEventListener("mouseup", c), o.removeEventListener("mousemove", d);
    const f = He.getState(n.state);
    f != null && f.dragging && (lb(
      n,
      f.activeHandle,
      Yc(f.dragging, u, t)
    ), n.dispatch(
      n.state.tr.setMeta(He, { setDragging: null })
    ));
  }
  function d(u) {
    if (!u.which)
      return c(u);
    const f = He.getState(n.state);
    if (f && f.dragging) {
      const h = Yc(f.dragging, u, t);
      Xc(
        n,
        f.activeHandle,
        h,
        r
      );
    }
  }
  return Xc(
    n,
    s.activeHandle,
    a,
    r
  ), o.addEventListener("mouseup", c), o.addEventListener("mousemove", d), e.preventDefault(), !0;
}
function ob(n, e, { colspan: t, colwidth: r }) {
  const i = r && r[r.length - 1];
  if (i)
    return i;
  const o = n.domAtPos(e);
  let l = o.node.childNodes[o.offset].offsetWidth, a = t;
  if (r)
    for (let c = 0; c < t; c++)
      r[c] && (l -= r[c], a--);
  return l / a;
}
function sb(n) {
  for (; n && n.nodeName != "TD" && n.nodeName != "TH"; )
    n = n.classList && n.classList.contains("ProseMirror") ? null : n.parentNode;
  return n;
}
function Gc(n, e, t, r) {
  const i = t == "right" ? -r : r, o = n.posAtCoords({
    left: e.clientX + i,
    top: e.clientY
  });
  if (!o)
    return -1;
  const { pos: s } = o, l = nr(n.state.doc.resolve(s));
  if (!l)
    return -1;
  if (t == "right")
    return l.pos;
  const a = oe.get(l.node(-1)), c = l.start(-1), d = a.map.indexOf(l.pos - c);
  return d % a.width == 0 ? -1 : c + a.map[d - 1];
}
function Yc(n, e, t) {
  const r = e.clientX - n.startX;
  return Math.max(t, n.startWidth + r);
}
function Nf(n, e) {
  n.dispatch(
    n.state.tr.setMeta(He, { setHandle: e })
  );
}
function lb(n, e, t) {
  const r = n.state.doc.resolve(e), i = r.node(-1), o = oe.get(i), s = r.start(-1), l = o.colCount(r.pos - s) + r.nodeAfter.attrs.colspan - 1, a = n.state.tr;
  for (let c = 0; c < o.height; c++) {
    const d = c * o.width + l;
    if (c && o.map[d] == o.map[d - o.width])
      continue;
    const u = o.map[d], f = i.nodeAt(u).attrs, h = f.colspan == 1 ? 0 : l - o.colCount(u);
    if (f.colwidth && f.colwidth[h] == t)
      continue;
    const p = f.colwidth ? f.colwidth.slice() : ab(f.colspan);
    p[h] = t, a.setNodeMarkup(s + u, null, { ...f, colwidth: p });
  }
  a.docChanged && n.dispatch(a);
}
function Xc(n, e, t, r) {
  const i = n.state.doc.resolve(e), o = i.node(-1), s = i.start(-1), l = oe.get(o).colCount(i.pos - s) + i.nodeAfter.attrs.colspan - 1;
  let a = n.domAtPos(i.start(-1)).node;
  for (; a && a.nodeName != "TABLE"; )
    a = a.parentNode;
  a && il(
    o,
    a.firstChild,
    a,
    r,
    l,
    t
  );
}
function ab(n) {
  return Array(n).fill(0);
}
function cb(n, e) {
  var t;
  const r = [], i = n.doc.resolve(e), o = i.node(-1);
  if (!o)
    return ee.empty;
  const s = oe.get(o), l = i.start(-1), a = s.colCount(i.pos - l) + i.nodeAfter.attrs.colspan - 1;
  for (let c = 0; c < s.height; c++) {
    const d = a + c * s.width;
    if ((a == s.width - 1 || s.map[d] != s.map[d + 1]) && (c == 0 || s.map[d] != s.map[d - s.width])) {
      const u = s.map[d], f = l + u + o.nodeAt(u).nodeSize - 1, h = document.createElement("div");
      h.className = "column-resize-handle", (t = He.getState(n)) != null && t.dragging && r.push(
        ye.node(
          l + u,
          l + u + o.nodeAt(u).nodeSize,
          {
            class: "column-resize-dragging"
          }
        )
      ), r.push(ye.widget(f, h));
    }
  }
  return ee.create(n.doc, r);
}
function db({
  allowTableNodeSelection: n = !1
} = {}) {
  return new X({
    key: $t,
    // This piece of state is used to remember when a mouse-drag
    // cell-selection is happening, so that it can continue even as
    // transactions (which might move its anchor cell) come in.
    state: {
      init() {
        return null;
      },
      apply(e, t) {
        const r = e.getMeta($t);
        if (r != null)
          return r == -1 ? null : r;
        if (t == null || !e.docChanged)
          return t;
        const { deleted: i, pos: o } = e.mapping.mapResult(t);
        return i ? null : o;
      }
    },
    props: {
      decorations: Cv,
      handleDOMEvents: {
        mousedown: Qv
      },
      createSelectionBetween(e) {
        return $t.getState(e.state) != null ? e.state.selection : null;
      },
      handleTripleClick: Yv,
      handleKeyDown: Gv,
      handlePaste: Xv
    },
    appendTransaction(e, t, r) {
      return Tv(
        r,
        Tf(r, t),
        n
      );
    }
  });
}
function ol(n, e) {
  return e ? ["width", `${Math.max(e, n)}px`] : ["min-width", `${n}px`];
}
function Qc(n, e, t, r, i, o) {
  var s;
  let l = 0, a = !0, c = e.firstChild;
  const d = n.firstChild;
  if (d !== null)
    for (let u = 0, f = 0; u < d.childCount; u += 1) {
      const { colspan: h, colwidth: p } = d.child(u).attrs;
      for (let g = 0; g < h; g += 1, f += 1) {
        const m = i === f ? o : p && p[g], y = m ? `${m}px` : "";
        if (l += m || r, m || (a = !1), c) {
          if (c.style.width !== y) {
            const [v, S] = ol(r, m);
            c.style.setProperty(v, S);
          }
          c = c.nextSibling;
        } else {
          const v = document.createElement("col"), [S, w] = ol(r, m);
          v.style.setProperty(S, w), e.appendChild(v);
        }
      }
    }
  for (; c; ) {
    const u = c.nextSibling;
    (s = c.parentNode) === null || s === void 0 || s.removeChild(c), c = u;
  }
  a ? (t.style.width = `${l}px`, t.style.minWidth = "") : (t.style.width = "", t.style.minWidth = `${l}px`);
}
class ub {
  constructor(e, t) {
    this.node = e, this.cellMinWidth = t, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), this.colgroup = this.table.appendChild(document.createElement("colgroup")), Qc(e, this.colgroup, this.table, t), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
  }
  update(e) {
    return e.type !== this.node.type ? !1 : (this.node = e, Qc(e, this.colgroup, this.table, this.cellMinWidth), !0);
  }
  ignoreMutation(e) {
    return e.type === "attributes" && (e.target === this.table || this.colgroup.contains(e.target));
  }
}
function fb(n, e, t, r) {
  let i = 0, o = !0;
  const s = [], l = n.firstChild;
  if (!l)
    return {};
  for (let u = 0, f = 0; u < l.childCount; u += 1) {
    const { colspan: h, colwidth: p } = l.child(u).attrs;
    for (let g = 0; g < h; g += 1, f += 1) {
      const m = t === f ? r : p && p[g];
      i += m || e, m || (o = !1);
      const [y, v] = ol(e, m);
      s.push([
        "col",
        { style: `${y}: ${v}` }
      ]);
    }
  }
  const a = o ? `${i}px` : "", c = o ? "" : `${i}px`;
  return { colgroup: ["colgroup", {}, ...s], tableWidth: a, tableMinWidth: c };
}
function Zc(n, e) {
  return e ? n.createChecked(null, e) : n.createAndFill();
}
function hb(n) {
  if (n.cached.tableNodeTypes)
    return n.cached.tableNodeTypes;
  const e = {};
  return Object.keys(n.nodes).forEach((t) => {
    const r = n.nodes[t];
    r.spec.tableRole && (e[r.spec.tableRole] = r);
  }), n.cached.tableNodeTypes = e, e;
}
function pb(n, e, t, r, i) {
  const o = hb(n), s = [], l = [];
  for (let c = 0; c < t; c += 1) {
    const d = Zc(o.cell, i);
    if (d && l.push(d), r) {
      const u = Zc(o.header_cell, i);
      u && s.push(u);
    }
  }
  const a = [];
  for (let c = 0; c < e; c += 1)
    a.push(o.row.createChecked(null, r && c === 0 ? s : l));
  return o.table.createChecked(null, a);
}
function mb(n) {
  return n instanceof J;
}
const Si = ({ editor: n }) => {
  const { selection: e } = n.state;
  if (!mb(e))
    return !1;
  let t = 0;
  const r = Lu(e.ranges[0].$from, (o) => o.type.name === "table");
  return r == null || r.node.descendants((o) => {
    if (o.type.name === "table")
      return !1;
    ["tableCell", "tableHeader"].includes(o.type.name) && (t += 1);
  }), t === e.ranges.length ? (n.commands.deleteTable(), !0) : !1;
}, gb = de.create({
  name: "table",
  // @ts-ignore
  addOptions() {
    return {
      HTMLAttributes: {},
      resizable: !1,
      handleWidth: 5,
      cellMinWidth: 25,
      // TODO: fix
      View: ub,
      lastColumnResizable: !0,
      allowTableNodeSelection: !1
    };
  },
  content: "tableRow+",
  tableRole: "table",
  isolating: !0,
  group: "block",
  parseHTML() {
    return [{ tag: "table" }];
  },
  renderHTML({ node: n, HTMLAttributes: e }) {
    const { colgroup: t, tableWidth: r, tableMinWidth: i } = fb(n, this.options.cellMinWidth);
    return [
      "table",
      Y(this.options.HTMLAttributes, e, {
        style: r ? `width: ${r}` : `min-width: ${i}`
      }),
      t,
      ["tbody", 0]
    ];
  },
  addCommands() {
    return {
      insertTable: ({ rows: n = 3, cols: e = 3, withHeaderRow: t = !0 } = {}) => ({ tr: r, dispatch: i, editor: o }) => {
        const s = pb(o.schema, n, e, t);
        if (i) {
          const l = r.selection.from + 1;
          r.replaceSelectionWith(s).scrollIntoView().setSelection(D.near(r.doc.resolve(l)));
        }
        return !0;
      },
      addColumnBefore: () => ({ state: n, dispatch: e }) => Ov(n, e),
      addColumnAfter: () => ({ state: n, dispatch: e }) => Nv(n, e),
      deleteColumn: () => ({ state: n, dispatch: e }) => Rv(n, e),
      addRowBefore: () => ({ state: n, dispatch: e }) => Lv(n, e),
      addRowAfter: () => ({ state: n, dispatch: e }) => Pv(n, e),
      deleteRow: () => ({ state: n, dispatch: e }) => Hv(n, e),
      deleteTable: () => ({ state: n, dispatch: e }) => _v(n, e),
      mergeCells: () => ({ state: n, dispatch: e }) => $c(n, e),
      splitCell: () => ({ state: n, dispatch: e }) => jc(n, e),
      toggleHeaderColumn: () => ({ state: n, dispatch: e }) => _r("column")(n, e),
      toggleHeaderRow: () => ({ state: n, dispatch: e }) => _r("row")(n, e),
      toggleHeaderCell: () => ({ state: n, dispatch: e }) => jv(n, e),
      mergeOrSplit: () => ({ state: n, dispatch: e }) => $c(n, e) ? !0 : jc(n, e),
      setCellAttribute: (n, e) => ({ state: t, dispatch: r }) => Fv(n, e)(t, r),
      goToNextCell: () => ({ state: n, dispatch: e }) => _c(1)(n, e),
      goToPreviousCell: () => ({ state: n, dispatch: e }) => _c(-1)(n, e),
      fixTables: () => ({ state: n, dispatch: e }) => (e && Tf(n), !0),
      setCellSelection: (n) => ({ tr: e, dispatch: t }) => {
        if (t) {
          const r = J.create(e.doc, n.anchorCell, n.headCell);
          e.setSelection(r);
        }
        return !0;
      }
    };
  },
  addKeyboardShortcuts() {
    return {
      Tab: () => this.editor.commands.goToNextCell() ? !0 : this.editor.can().addRowAfter() ? this.editor.chain().addRowAfter().goToNextCell().run() : !1,
      "Shift-Tab": () => this.editor.commands.goToPreviousCell(),
      Backspace: Si,
      "Mod-Backspace": Si,
      Delete: Si,
      "Mod-Delete": Si
    };
  },
  addProseMirrorPlugins() {
    return [
      ...this.options.resizable && this.editor.isEditable ? [
        eb({
          handleWidth: this.options.handleWidth,
          cellMinWidth: this.options.cellMinWidth,
          defaultCellMinWidth: this.options.cellMinWidth,
          View: this.options.View,
          lastColumnResizable: this.options.lastColumnResizable
        })
      ] : [],
      db({
        allowTableNodeSelection: this.options.allowTableNodeSelection
      })
    ];
  },
  extendNodeSchema(n) {
    const e = {
      name: n.name,
      options: n.options,
      storage: n.storage
    };
    return {
      tableRole: H(E(n, "tableRole", e))
    };
  }
}), yb = de.create({
  name: "tableCell",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "block+",
  addAttributes() {
    return {
      colspan: {
        default: 1
      },
      rowspan: {
        default: 1
      },
      colwidth: {
        default: null,
        parseHTML: (n) => {
          const e = n.getAttribute("colwidth");
          return e ? e.split(",").map((r) => parseInt(r, 10)) : null;
        }
      }
    };
  },
  tableRole: "cell",
  isolating: !0,
  parseHTML() {
    return [
      { tag: "td" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["td", Y(this.options.HTMLAttributes, n), 0];
  }
}), wb = de.create({
  name: "tableHeader",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "block+",
  addAttributes() {
    return {
      colspan: {
        default: 1
      },
      rowspan: {
        default: 1
      },
      colwidth: {
        default: null,
        parseHTML: (n) => {
          const e = n.getAttribute("colwidth");
          return e ? e.split(",").map((r) => parseInt(r, 10)) : null;
        }
      }
    };
  },
  tableRole: "header_cell",
  isolating: !0,
  parseHTML() {
    return [
      { tag: "th" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["th", Y(this.options.HTMLAttributes, n), 0];
  }
}), vb = de.create({
  name: "tableRow",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "(tableCell | tableHeader)*",
  tableRole: "row",
  parseHTML() {
    return [
      { tag: "tr" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["tr", Y(this.options.HTMLAttributes, n), 0];
  }
}), bb = te.create({
  name: "textAlign",
  addOptions() {
    return {
      types: [],
      alignments: ["left", "center", "right", "justify"],
      defaultAlignment: "left"
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          textAlign: {
            default: this.options.defaultAlignment,
            parseHTML: (n) => {
              const e = n.style.textAlign || this.options.defaultAlignment;
              return this.options.alignments.includes(e) ? e : this.options.defaultAlignment;
            },
            renderHTML: (n) => n.textAlign === this.options.defaultAlignment ? {} : { style: `text-align: ${n.textAlign}` }
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setTextAlign: (n) => ({ commands: e }) => this.options.alignments.includes(n) ? this.options.types.map((t) => e.updateAttributes(t, { textAlign: n })).every((t) => t) : !1,
      unsetTextAlign: () => ({ commands: n }) => this.options.types.map((e) => n.resetAttributes(e, "textAlign")).every((e) => e)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-l": () => this.editor.commands.setTextAlign("left"),
      "Mod-Shift-e": () => this.editor.commands.setTextAlign("center"),
      "Mod-Shift-r": () => this.editor.commands.setTextAlign("right"),
      "Mod-Shift-j": () => this.editor.commands.setTextAlign("justify")
    };
  }
}), kb = Je.create({
  name: "subscript",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "sub"
      },
      {
        style: "vertical-align",
        getAttrs(n) {
          return n !== "sub" ? !1 : null;
        }
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["sub", Y(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setSubscript: () => ({ commands: n }) => n.setMark(this.name),
      toggleSubscript: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetSubscript: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-,": () => this.editor.commands.toggleSubscript()
    };
  }
}), xb = Je.create({
  name: "superscript",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "sup"
      },
      {
        style: "vertical-align",
        getAttrs(n) {
          return n !== "super" ? !1 : null;
        }
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["sup", Y(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setSuperscript: () => ({ commands: n }) => n.setMark(this.name),
      toggleSuperscript: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetSuperscript: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-.": () => this.editor.commands.toggleSuperscript()
    };
  }
}), Cb = /(?:^|\s)(==(?!\s+==)((?:[^=]+))==(?!\s+==))$/, Sb = /(?:^|\s)(==(?!\s+==)((?:[^=]+))==(?!\s+==))/g, Mb = Je.create({
  name: "highlight",
  addOptions() {
    return {
      multicolor: !1,
      HTMLAttributes: {}
    };
  },
  addAttributes() {
    return this.options.multicolor ? {
      color: {
        default: null,
        parseHTML: (n) => n.getAttribute("data-color") || n.style.backgroundColor,
        renderHTML: (n) => n.color ? {
          "data-color": n.color,
          style: `background-color: ${n.color}; color: inherit`
        } : {}
      }
    } : {};
  },
  parseHTML() {
    return [
      {
        tag: "mark"
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["mark", Y(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setHighlight: (n) => ({ commands: e }) => e.setMark(this.name, n),
      toggleHighlight: (n) => ({ commands: e }) => e.toggleMark(this.name, n),
      unsetHighlight: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-h": () => this.editor.commands.toggleHighlight()
    };
  },
  addInputRules() {
    return [
      xn({
        find: Cb,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      Qt({
        find: Sb,
        type: this.type
      })
    ];
  }
}), Tb = function(n) {
  let t = n.state.selection.$from.before(1), r = n.coordsAtPos(t);
  return new DOMRect(
    r.left,
    r.top,
    r.right - r.left,
    r.bottom - r.top
  );
}, Ab = function(n) {
  const e = n.state.selection.$from;
  let t = e.depth;
  for (; t > 1 && e.node(t).type.name != "tableRow"; )
    t--;
  let r = e.before(t), i = n.nodeDOM(r).getBoundingClientRect();
  return new DOMRect(i.x, i.y, i.width, i.height);
}, Eb = function(n) {
  const e = n.state.selection.$from;
  let t = e.depth, r = 0, i = 0;
  for (; t > 0; ) {
    if ((e.node(t).type.name == "tableCell" || e.node(t).type.name == "tableHeader") && (r = t), e.node(t).type.name == "table") {
      i = t;
      break;
    }
    t--;
  }
  if (!(i && r))
    return !1;
  let o = n.nodeDOM(e.before(r)).getBoundingClientRect(), s = n.nodeDOM(e.before(i)).getBoundingClientRect();
  return new DOMRect(o.x, s.y, o.width, s.height);
}, Xl = function(n) {
  const e = n.state.selection.$from;
  return e.node(1) == null && n.lastSelectedViewDesc ? n.lastSelectedViewDesc.node : e.node(1);
};
let Df = function(n, e) {
  const t = [];
  for (let r = 0; r < n.childCount; r++)
    t.push(
      e(n.child(r), r, n instanceof x ? n : n.content)
    );
  return t;
};
const Ob = function({
  view: n,
  state: e,
  draggedNodePosition: t,
  targetNodePosition: r
}) {
  let i = e.doc.resolve(r), o = e.doc.resolve(t).node(1), s = i.node(1) ?? i.nodeAfter;
  const l = i.node(0), a = i.start(0);
  let c = n.state.tr;
  const d = Df(l, (y) => y);
  let u = a, f = i.end(0), h = d.indexOf(o), p = d.indexOf(s);
  p > h && --p;
  let g = d[h];
  d.splice(h, 1), d.splice(p, 0, g);
  const m = new T(x.fromArray(d), 0, 0);
  c.step(new ae(u, f, m, !1)), c.setSelection(I.near(c.doc.resolve(r))), n.dispatch(c);
}, Nb = function({ view: n, dir: e, currentResolved: t }) {
  if (!t)
    return !1;
  let r = n.state.tr;
  const i = e === "DOWN", o = t.node(1) || t.nodeAfter, s = 0, l = t.node(s), a = t.start(s), c = Df(l, (m) => m);
  let d = c.indexOf(o);
  if (d == -1)
    return !1;
  let u = i ? d + 1 : d - 1;
  if (u >= c.length || u < 0)
    return !1;
  const f = c[u].nodeSize;
  [c[d], c[u]] = [c[u], c[d]];
  let h = a, p = t.end(s);
  const g = new T(x.fromArray(c), 0, 0);
  r.step(new ae(h, p, g, !1)), r.setSelection(
    I.near(
      r.doc.resolve(
        i ? t.pos + f : t.pos - f
      )
    )
  ), n.dispatch(r);
};
function ks(n) {
  return n && typeof n == "object" && !Array.isArray(n);
}
function Db(n) {
  return n && typeof n == "object" && Array.isArray(n);
}
function Rf(n, e) {
  if (ks(n) && ks(e))
    for (const t in e)
      ks(e[t]) ? (n[t] || Object.assign(n, { [t]: {} }), Rf(n[t], e[t])) : Db(e[t]) ? (n[t] || (n[t] = []), sl(n[t], e[t])) : Object.assign(n, { [t]: e[t] });
  return n;
}
const sl = function(n, e) {
  return e.forEach((t, r) => {
    !n || !n.find((i) => i.name == t.name) ? n.push(t) : Rf(
      n.find((i) => i.name == t.name),
      t
    );
  }), n;
}, Rb = te.create({
  name: "blockWidth",
  addOptions() {
    return {
      types: [],
      alignments: ["normal", "wide", "full", "sidebar"],
      defaultAlignment: "normal"
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          blockWidth: {
            default: this.options.defaultAlignment,
            parseHTML: (n) => n.dataset.blockWidth || this.options.defaultAlignment,
            renderHTML: (n) => n.blockWidth === this.options.defaultAlignment ? {} : { "data-block-width": n.blockWidth }
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setBlockWidth: (n) => ({ commands: e, view: t }) => this.options.alignments.includes(n) ? (e.updateAttributes(Xl(t).type.name, {
        blockWidth: n
      }), !0) : !1,
      unsetBlockWidth: () => ({ commands: n }) => this.options.types.every(
        (e) => n.resetAttributes(e, "blockWidth")
      )
    };
  },
  addKeyboardShortcuts() {
    return {
      // 'Mod-Shift-l': () => this.editor.commands.setTextAlign('left'),
      // 'Mod-Shift-e': () => this.editor.commands.setTextAlign('center'),
      // 'Mod-Shift-r': () => this.editor.commands.setTextAlign('right'),
      // 'Mod-Shift-j': () => this.editor.commands.setTextAlign('justify'),
    };
  }
}), Ib = /^(https?:\/\/)?(www\.|music\.)?(youtube\.com|youtu\.be)(?!.*\/channel\/)(?!\/@)(.+)?$/, Lb = /^(https?:\/\/)?(www\.|music\.)?(youtube\.com|youtu\.be)(?!.*\/channel\/)(?!\/@)(.+)?$/g, Pb = (n) => n.match(Ib), ed = (n) => n ? "https://www.youtube-nocookie.com/embed/" : "https://www.youtube.com/embed/", Bb = (n) => {
  const {
    url: e,
    allowFullscreen: t,
    autoplay: r,
    ccLanguage: i,
    ccLoadPolicy: o,
    controls: s,
    disableKBcontrols: l,
    enableIFrameApi: a,
    endTime: c,
    interfaceLanguage: d,
    ivLoadPolicy: u,
    loop: f,
    modestBranding: h,
    nocookie: p,
    origin: g,
    playlist: m,
    progressBarColor: y,
    startAt: v
  } = n;
  if (e.includes("/embed/"))
    return e;
  if (e.includes("youtu.be")) {
    const O = e.split("/").pop();
    return O ? `${ed(p)}${O}` : null;
  }
  const w = /v=([-\w]+)/gm.exec(e);
  if (!w || !w[1])
    return null;
  let C = `${ed(p)}${w[1]}`;
  const b = [];
  return t === !1 && b.push("fs=0"), r && b.push("autoplay=1"), i && b.push(`cc_lang_pref=${i}`), o && b.push("cc_load_policy=1"), s || b.push("controls=0"), l && b.push("disablekb=1"), a && b.push("enablejsapi=1"), c && b.push(`end=${c}`), d && b.push(`hl=${d}`), u && b.push(`iv_load_policy=${u}`), f && b.push("loop=1"), h && b.push("modestbranding=1"), g && b.push(`origin=${g}`), m && b.push(`playlist=${m}`), v && b.push(`start=${v}`), y && b.push(`color=${y}`), b.length && (C += `?${b.join("&")}`), C;
}, Hb = de.create({
  name: "youtube",
  addOptions() {
    return {
      addPasteHandler: !0,
      allowFullscreen: !0,
      autoplay: !1,
      ccLanguage: void 0,
      ccLoadPolicy: void 0,
      controls: !0,
      disableKBcontrols: !1,
      enableIFrameApi: !1,
      endTime: 0,
      height: 480,
      interfaceLanguage: void 0,
      ivLoadPolicy: 0,
      loop: !1,
      modestBranding: !1,
      HTMLAttributes: {},
      inline: !1,
      nocookie: !1,
      origin: "",
      playlist: "",
      progressBarColor: void 0,
      width: 640
    };
  },
  inline() {
    return this.options.inline;
  },
  group() {
    return this.options.inline ? "inline" : "block";
  },
  content: "inline*",
  draggable: !0,
  isolating: !0,
  addAttributes() {
    return {
      src: {
        default: null
      },
      start: {
        default: 0
      },
      width: {
        default: this.options.width
      },
      height: {
        default: this.options.height
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "figure[data-youtube-video]",
        contentElement: "figcaption"
      }
    ];
  },
  addCommands() {
    return {
      setYoutubeVideo: (n) => ({ commands: e }) => Pb(n.src) ? e.insertContent({
        type: this.name,
        attrs: n
      }) : !1
    };
  },
  addPasteRules() {
    return this.options.addPasteHandler ? [
      o0({
        find: Lb,
        type: this.type,
        getAttributes: (n) => ({ src: n.input })
      })
    ] : [];
  },
  renderHTML({ HTMLAttributes: n }) {
    const e = Bb({
      url: n.src,
      allowFullscreen: this.options.allowFullscreen,
      autoplay: this.options.autoplay,
      ccLanguage: this.options.ccLanguage,
      ccLoadPolicy: this.options.ccLoadPolicy,
      controls: this.options.controls,
      disableKBcontrols: this.options.disableKBcontrols,
      enableIFrameApi: this.options.enableIFrameApi,
      endTime: this.options.endTime,
      interfaceLanguage: this.options.interfaceLanguage,
      ivLoadPolicy: this.options.ivLoadPolicy,
      loop: this.options.loop,
      modestBranding: this.options.modestBranding,
      nocookie: this.options.nocookie,
      origin: this.options.origin,
      playlist: this.options.playlist,
      progressBarColor: this.options.progressBarColor,
      startAt: n.start || 0
    }), t = n["data-block-width"];
    return n["data-block-width"] = null, n.src = e, [
      "figure",
      {
        "data-youtube-video": "",
        "data-block-width": t,
        class: "tw-bg-slate-100 tw-pb-4 tw-text-center"
      },
      [
        "iframe",
        Y(
          this.options.HTMLAttributes,
          {
            contenteditable: !1,
            draggable: !1,
            width: this.options.width,
            height: this.options.height,
            allowfullscreen: this.options.allowFullscreen,
            autoplay: this.options.autoplay,
            ccLanguage: this.options.ccLanguage,
            ccLoadPolicy: this.options.ccLoadPolicy,
            disableKBcontrols: this.options.disableKBcontrols,
            enableIFrameApi: this.options.enableIFrameApi,
            endTime: this.options.endTime,
            interfaceLanguage: this.options.interfaceLanguage,
            ivLoadPolicy: this.options.ivLoadPolicy,
            loop: this.options.loop,
            modestBranding: this.options.modestBranding,
            origin: this.options.origin,
            playlist: this.options.playlist,
            progressBarColor: this.options.progressBarColor
          },
          n
        )
      ],
      ["figcaption", 0]
    ];
  }
});
function td({ types: n, node: e }) {
  return Array.isArray(n) && n.includes(e.type) || e.type === n;
}
const zb = te.create({
  name: "trailingNode",
  addOptions() {
    return {
      node: "paragraph",
      notAfter: ["paragraph"]
    };
  },
  addProseMirrorPlugins() {
    const n = new se(this.name), e = Object.entries(this.editor.schema.nodes).map(([, t]) => t).filter((t) => this.options.notAfter.includes(t.name));
    return [
      new X({
        key: n,
        appendTransaction: (t, r, i) => {
          const { doc: o, tr: s, schema: l } = i, a = n.getState(i), c = o.content.size, d = l.nodes[this.options.node];
          if (a)
            return s.insert(c, d.create());
        },
        state: {
          init: (t, r) => {
            const i = r.tr.doc.lastChild;
            return !td({ node: i, types: e });
          },
          apply: (t, r) => {
            if (!t.docChanged)
              return r;
            const i = t.doc.lastChild;
            return !td({ node: i, types: e });
          }
        }
      })
    ];
  }
}), Vb = te.create({
  name: "insertBetween",
  addOptions() {
    return {};
  },
  addProseMirrorPlugins() {
    var l;
    let n = !1, e = 0, t = this.editor, { view: r } = t;
    const i = document.createElement("button");
    i.classList.add("editor-node-tools"), i.ariaLabel = "Insert block here", i.style.display = "none", t.view.dom.addEventListener("click", () => {
      i.style.display = "none";
    }), i.addEventListener("click", (a) => {
      t.view.focus(), a.preventDefault();
      const c = s(
        r,
        a.clientX,
        a.clientY - 25,
        !0
      );
      console.log(c);
      const d = t.schema.nodes.paragraph;
      let u = t.state.tr.insert(c, d.create());
      u.setSelection(D.create(u.doc, c)), t.view.dispatch(u), i.style.display = "none";
    }), (l = t.view.dom.parentElement) == null || l.appendChild(i);
    const o = (a, c) => {
      let d = s(
        a,
        c.clientX,
        c.clientY - 25
      );
      return a.nodeDOM(d);
    }, s = (a, c, d, u = !1) => {
      let f = a.posAtCoords({
        left: c,
        top: d
      });
      if (!f)
        return null;
      let h = a.state.doc.resolve(f.pos);
      return u ? h.after(1) : h.before(1);
    };
    return [
      new X({
        key: new se(this.name),
        props: {
          handleDOMEvents: {
            mousemove: (a, c) => {
              let d = o(a, c);
              if (d) {
                let u = d.getBoundingClientRect(), f = u.bottom - a.dom.getBoundingClientRect().top + a.dom.offsetTop;
                c.clientY > u.bottom - 50 && (f !== e || !n) ? (n = !0, e = f, i.style.top = `${f}px`, i.style.right = `${u.right - u.width}px`, i.style.left = `${u.left}px`, i.style.display = "") : c.clientY <= u.bottom - 50 && n && (i.style.display = "none", n = !1, f = 0);
              }
            }
          }
        }
      })
    ];
  }
}), Fb = te.create({
  name: "Variants",
  addOptions() {
    return {
      types: [],
      defaultVariant: "default"
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          variant: {
            default: this.options.defaultVariant,
            parseHTML: (n) => n.dataset.variant,
            renderHTML: (n) => n.variant === this.options.defaultVariant ? {} : {
              "data-variant": n.variant
            }
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setVariant: (n) => ({ commands: e, view: t }) => (e.updateAttributes(Xl(t).type.name, {
        variant: n
      }), !0),
      unsetVariant: () => ({ commands: n }) => this.options.types.every(
        (e) => n.resetAttributes(e, "variant")
      )
    };
  }
});
function $b(n) {
  var e;
  const { char: t, allowSpaces: r, allowedPrefixes: i, startOfLine: o, $position: s } = n, l = i0(t), a = new RegExp(`\\s${l}$`), c = o ? "^" : "", d = r ? new RegExp(`${c}${l}.*?(?=\\s${l}|$)`, "gm") : new RegExp(`${c}(?:^)?${l}[^\\s${l}]*`, "gm"), u = ((e = s.nodeBefore) === null || e === void 0 ? void 0 : e.isText) && s.nodeBefore.text;
  if (!u)
    return null;
  const f = s.pos - u.length, h = Array.from(u.matchAll(d)).pop();
  if (!h || h.input === void 0 || h.index === void 0)
    return null;
  const p = h.input.slice(Math.max(0, h.index - 1), h.index), g = new RegExp(`^[${i == null ? void 0 : i.join("")}\0]?$`).test(p);
  if (i !== null && !g)
    return null;
  const m = f + h.index;
  let y = m + h[0].length;
  return r && a.test(u.slice(y - 1, y + 1)) && (h[0] += " ", y += 1), m < s.pos && y >= s.pos ? {
    range: {
      from: m,
      to: y
    },
    query: h[0].slice(t.length),
    text: h[0]
  } : null;
}
const jb = new se("suggestion");
function Wb({ pluginKey: n = jb, editor: e, char: t = "@", allowSpaces: r = !1, allowedPrefixes: i = [" "], startOfLine: o = !1, decorationTag: s = "span", decorationClass: l = "suggestion", command: a = () => null, items: c = () => [], render: d = () => ({}), allow: u = () => !0, findSuggestionMatch: f = $b }) {
  let h;
  const p = d == null ? void 0 : d(), g = new X({
    key: n,
    view() {
      return {
        update: async (m, y) => {
          var v, S, w, C, b, O, L;
          const A = (v = this.key) === null || v === void 0 ? void 0 : v.getState(y), P = (S = this.key) === null || S === void 0 ? void 0 : S.getState(m.state), F = A.active && P.active && A.range.from !== P.range.from, j = !A.active && P.active, W = A.active && !P.active, le = !j && !W && A.query !== P.query, Q = j || F && le, K = le || F, U = W || F && le;
          if (!Q && !K && !U)
            return;
          const Z = U && !Q ? A : P, Le = m.dom.querySelector(`[data-decoration-id="${Z.decorationId}"]`);
          h = {
            editor: e,
            range: Z.range,
            query: Z.query,
            text: Z.text,
            items: [],
            command: (we) => a({
              editor: e,
              range: Z.range,
              props: we
            }),
            decorationNode: Le,
            // virtual node for popper.js or tippy.js
            // this can be used for building popups without a DOM node
            clientRect: Le ? () => {
              var we;
              const { decorationId: mt } = (we = this.key) === null || we === void 0 ? void 0 : we.getState(e.state), Oe = m.dom.querySelector(`[data-decoration-id="${mt}"]`);
              return (Oe == null ? void 0 : Oe.getBoundingClientRect()) || null;
            } : null
          }, Q && ((w = p == null ? void 0 : p.onBeforeStart) === null || w === void 0 || w.call(p, h)), K && ((C = p == null ? void 0 : p.onBeforeUpdate) === null || C === void 0 || C.call(p, h)), (K || Q) && (h.items = await c({
            editor: e,
            query: Z.query
          })), U && ((b = p == null ? void 0 : p.onExit) === null || b === void 0 || b.call(p, h)), K && ((O = p == null ? void 0 : p.onUpdate) === null || O === void 0 || O.call(p, h)), Q && ((L = p == null ? void 0 : p.onStart) === null || L === void 0 || L.call(p, h));
        },
        destroy: () => {
          var m;
          h && ((m = p == null ? void 0 : p.onExit) === null || m === void 0 || m.call(p, h));
        }
      };
    },
    state: {
      // Initialize the plugin's internal state.
      init() {
        return {
          active: !1,
          range: {
            from: 0,
            to: 0
          },
          query: null,
          text: null,
          composing: !1
        };
      },
      // Apply changes to the plugin state from a view transaction.
      apply(m, y, v, S) {
        const { isEditable: w } = e, { composing: C } = e.view, { selection: b } = m, { empty: O, from: L } = b, A = { ...y };
        if (A.composing = C, w && (O || e.view.composing)) {
          (L < y.range.from || L > y.range.to) && !C && !y.composing && (A.active = !1);
          const P = f({
            char: t,
            allowSpaces: r,
            allowedPrefixes: i,
            startOfLine: o,
            $position: b.$from
          }), F = `id_${Math.floor(Math.random() * 4294967295)}`;
          P && u({
            editor: e,
            state: S,
            range: P.range,
            isActive: y.active
          }) ? (A.active = !0, A.decorationId = y.decorationId ? y.decorationId : F, A.range = P.range, A.query = P.query, A.text = P.text) : A.active = !1;
        } else
          A.active = !1;
        return A.active || (A.decorationId = null, A.range = { from: 0, to: 0 }, A.query = null, A.text = null), A;
      }
    },
    props: {
      // Call the keydown hook if suggestion is active.
      handleKeyDown(m, y) {
        var v;
        const { active: S, range: w } = g.getState(m.state);
        return S && ((v = p == null ? void 0 : p.onKeyDown) === null || v === void 0 ? void 0 : v.call(p, { view: m, event: y, range: w })) || !1;
      },
      // Setup decorator on the currently active suggestion.
      decorations(m) {
        const { active: y, range: v, decorationId: S } = g.getState(m);
        return y ? ee.create(m.doc, [
          ye.inline(v.from, v.to, {
            nodeName: s,
            class: l,
            "data-decoration-id": S
          })
        ]) : null;
      }
    }
  });
  return g;
}
const _b = te.create({
  name: "commands",
  addOptions() {
    return {
      suggestion: {
        char: "/",
        startOfLine: !0,
        command: ({ editor: n, range: e, props: t }) => {
          t.insertCommand({ editor: n, range: e });
        }
      }
    };
  },
  addProseMirrorPlugins() {
    return [
      Wb({
        editor: this.editor,
        ...this.options.suggestion
      })
    ];
  }
}), Kb = {
  props: {
    items: {
      type: Array,
      required: !0
    },
    command: {
      type: Function,
      required: !0
    }
  },
  data() {
    return {
      selectedIndex: 0
    };
  },
  watch: {
    items() {
      this.selectedIndex = 0;
    }
  },
  computed: {
    itemsWithInsertCommand() {
      return this.items.filter((n) => n.insertCommand);
    }
  },
  methods: {
    onKeyDown({ event: n }) {
      return n.key === "ArrowUp" ? (this.upHandler(), !0) : n.key === "ArrowDown" ? (this.downHandler(), !0) : n.key === "Enter" ? (this.enterHandler(), !0) : !1;
    },
    upHandler() {
      this.selectedIndex = (this.selectedIndex + this.items.length - 1) % this.items.length;
    },
    downHandler() {
      this.selectedIndex = (this.selectedIndex + 1) % this.items.length;
    },
    enterHandler() {
      this.selectItem(this.selectedIndex);
    },
    selectItem(n) {
      const e = this.itemsWithInsertCommand[n];
      e && this.command(e);
    }
  }
}, qb = { class: "tw-bg-white tw-border tw-border-slate-400 tw-rounded tw-overflow-hidden tw-shadow" }, Ub = ["onClick"], Jb = ["innerHTML"], Gb = {
  key: 1,
  class: "tw-p-2 tw-text-slate-600 tw-text-sm tw-w-full"
};
function Yb(n, e, t, r, i, o) {
  return V(), ne("div", qb, [
    t.items.length ? (V(!0), ne(Ct, { key: 0 }, St(o.itemsWithInsertCommand, (s, l) => (V(), ne("button", {
      class: jt(["tw-flex tw-flex-row tw-gap-2 tw-items-center tw-w-full tw-p-2 tw-pr-12 text-slate-600 hover:tw-bg-slate-50 tw-text-sm", { "tw-bg-slate-100": l === i.selectedIndex }]),
      key: l,
      onClick: Me((a) => o.selectItem(l), ["prevent"])
    }, [
      je("span", {
        innerHTML: s.icon
      }, null, 8, Jb),
      Kf(" " + qf(s.title), 1)
    ], 10, Ub))), 128)) : (V(), ne("div", Gb, "No result"))
  ]);
}
const Xb = /* @__PURE__ */ qr(Kb, [["render", Yb]]);
function Qb(n) {
  return {
    items: ({ query: e }) => n.filter(
      (t) => t.title.toLowerCase().startsWith(e.toLowerCase())
    ),
    render: () => {
      let e, t;
      return {
        onStart: (r) => {
          e = new _y(Xb, {
            // using vue 2:
            // parent: this,
            // propsData: props,
            props: r,
            editor: r.editor
          }), r.clientRect && (t = Tn("body", {
            getReferenceClientRect: r.clientRect,
            appendTo: () => e.editor.view.dom.parentNode.parentNode,
            content: e.element,
            showOnCreate: !0,
            interactive: !0,
            trigger: "manual",
            placement: "bottom-start"
          }));
        },
        onUpdate(r) {
          e.updateProps(r), r.clientRect && t[0].setProps({
            getReferenceClientRect: r.clientRect
          });
        },
        onKeyDown(r) {
          var i;
          return r.event.key === "Escape" ? (t[0].hide(), !0) : (i = e.ref) == null ? void 0 : i.onKeyDown(r);
        },
        onExit() {
          t[0].destroy(), e.destroy();
        }
      };
    }
  };
}
function Zb() {
  return [
    {
      name: "paragraph",
      title: "Paragraph",
      icon: '<svg class="tw-w-5 tw-h-5 md:tw-w-6 md:tw-h-6" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" focusable="false"><path d="M18.3 4H9.9v-.1l-.9.2c-2.3.4-4 2.4-4 4.8s1.7 4.4 4 4.8l.7.1V20h1.5V5.5h2.9V20h1.5V5.5h2.7V4z"></path></svg>',
      insertCommand: ({ editor: n, range: e }) => {
        n.chain().focus().deleteRange(e).setNode("paragraph").run();
      },
      convertCommand: (n) => {
        n.chain().focus().setParagraph().run();
      },
      canBeConverted: !0,
      hasInlineTools: !0,
      isActiveTest: (n) => n.isActive("paragraph")
    },
    {
      title: "Heading",
      name: "heading",
      icon: '<svg class="tw-w-5 tw-h-5 md:tw-w-6 md:tw-h-6" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" focusable="false"><path d="M6.2 5.2v13.4l5.8-4.8 5.8 4.8V5.2z"></path></svg>',
      insertCommand: ({ editor: n, range: e }) => {
        n.chain().focus().deleteRange(e).setNode("heading", { level: 2 }).run();
      },
      convertCommand: (n) => {
        n.chain().focus().toggleHeading({ level: 2 }).run();
      },
      canBeConverted: !0,
      hasInlineTools: !0,
      isActiveTest: (n) => n.isActive("heading"),
      tools: [
        {
          title: "Heading 1",
          name: "heading1",
          icon: '<svg class="tw-w-5 tw-h-5 md:tw-w-6 md:tw-h-6" width="24" height="24" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" focusable="false"><path d="M9 5h2v10H9v-4H5v4H3V5h2v4h4V5zm6.6 0c-.6.9-1.5 1.7-2.6 2v1h2v7h2V5h-1.4z"></path></svg>',
          command: (n) => {
            n.chain().focus().setHeading({ level: 1 }).run();
          },
          isActiveTest: (n) => n.isActive("heading", { level: 1 })
        },
        {
          title: "Heading 2",
          name: "heading2",
          icon: '<svg class="tw-w-5 tw-h-5 md:tw-w-6 md:tw-h-6" width="24" height="24" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"  fill="currentColor" aria-hidden="true" focusable="false"><path d="M7 5h2v10H7v-4H3v4H1V5h2v4h4V5zm8 8c.5-.4.6-.6 1.1-1.1.4-.4.8-.8 1.2-1.3.3-.4.6-.8.9-1.3.2-.4.3-.8.3-1.3 0-.4-.1-.9-.3-1.3-.2-.4-.4-.7-.8-1-.3-.3-.7-.5-1.2-.6-.5-.2-1-.2-1.5-.2-.4 0-.7 0-1.1.1-.3.1-.7.2-1 .3-.3.1-.6.3-.9.5-.3.2-.6.4-.8.7l1.2 1.2c.3-.3.6-.5 1-.7.4-.2.7-.3 1.2-.3s.9.1 1.3.4c.3.3.5.7.5 1.1 0 .4-.1.8-.4 1.1-.3.5-.6.9-1 1.2-.4.4-1 .9-1.6 1.4-.6.5-1.4 1.1-2.2 1.6V15h8v-2H15z"></path></svg>',
          command: (n) => {
            n.chain().focus().setHeading({ level: 2 }).run();
          },
          isActiveTest: (n) => n.isActive("heading", { level: 2 })
        },
        {
          title: "Heading 3",
          name: "heading3",
          icon: '<svg class="tw-w-5 tw-h-5 md:tw-w-6 md:tw-h-6" width="24" height="24" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" focusable="false"><path d="M12.1 12.2c.4.3.8.5 1.2.7.4.2.9.3 1.4.3.5 0 1-.1 1.4-.3.3-.1.5-.5.5-.8 0-.2 0-.4-.1-.6-.1-.2-.3-.3-.5-.4-.3-.1-.7-.2-1-.3-.5-.1-1-.1-1.5-.1V9.1c.7.1 1.5-.1 2.2-.4.4-.2.6-.5.6-.9 0-.3-.1-.6-.4-.8-.3-.2-.7-.3-1.1-.3-.4 0-.8.1-1.1.3-.4.2-.7.4-1.1.6l-1.2-1.4c.5-.4 1.1-.7 1.6-.9.5-.2 1.2-.3 1.8-.3.5 0 1 .1 1.6.2.4.1.8.3 1.2.5.3.2.6.5.8.8.2.3.3.7.3 1.1 0 .5-.2.9-.5 1.3-.4.4-.9.7-1.5.9v.1c.6.1 1.2.4 1.6.8.4.4.7.9.7 1.5 0 .4-.1.8-.3 1.2-.2.4-.5.7-.9.9-.4.3-.9.4-1.3.5-.5.1-1 .2-1.6.2-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1l1.1-1.4zM7 9H3V5H1v10h2v-4h4v4h2V5H7v4z"></path></svg>',
          command: (n) => {
            n.chain().focus().setHeading({ level: 3 }).run();
          },
          isActiveTest: (n) => n.isActive("heading", { level: 3 })
        }
      ]
    },
    {
      title: "List",
      name: "list",
      icon: '<svg class="tw-w-5 tw-h-5 md:tw-w-6 md:tw-h-6" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" stroke-width="0" stroke="currentColor" fill="currentColor"  focusable="false"><path d="M4 4v1.5h16V4H4zm8 8.5h8V11h-8v1.5zM4 20h16v-1.5H4V20zm4-8c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z"></path></svg>',
      insertCommand: ({ editor: n, range: e }) => {
        n.chain().focus().deleteRange(e).toggleBulletList().run();
      },
      convertCommand: (n) => {
        n.chain().focus().toggleBulletList().run();
      },
      hasInlineTools: !0,
      isActiveTest: (n) => n.isActive("bulletList") || n.isActive("orderedList"),
      tools: [
        {
          title: "Bullet list",
          name: "bulletList",
          icon: '<svg class="tw-w-5 tw-h-5 md:tw-w-6 md:tw-h-6" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" stroke-width="1"  fill="currentColor"  focusable="false"><path d="M4 4v1.5h16V4H4zm8 8.5h8V11h-8v1.5zM4 20h16v-1.5H4V20zm4-8c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z"></path></svg>',
          command: (n) => {
            n.chain().focus().toggleBulletList().run();
          },
          isActiveTest: (n) => n.isActive("bulletList")
        },
        {
          title: "Ordered list",
          name: "orderedList",
          icon: '<svg class="tw-w-5 tw-h-5 md:tw-w-6 md:tw-h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5"  stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M0 0h24v24H0z" stroke="none"/><path d="M11 6h9M11 12h9M12 18h8M4 16a2 2 0 114 0c0 .591-.5 1-1 1.5L4 20h4M6 10V4L4 6"/></svg>',
          command: (n) => {
            n.chain().focus().toggleOrderedList().run();
          },
          isActiveTest: (n) => n.isActive("orderedList")
        },
        {
          title: "Sink list item",
          name: "sinklistitem",
          icon: '<svg class="tw-w-5 tw-h-5 md:tw-w-6 md:tw-h-6" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" focusable="false"><path d="M4 7.2v1.5h16V7.2H4zm8 8.6h8v-1.5h-8v1.5zm-8-3.5l3 3-3 3 1 1 4-4-4-4-1 1z"></path></svg>',
          command: (n) => {
            n.chain().focus().sinkListItem("listItem").run();
          },
          isDisabledTest: (n) => !n.can().sinkListItem("listItem")
        },
        {
          title: "Lift list item",
          name: "liftlistitem",
          icon: '<svg class="tw-w-5 tw-h-5 md:tw-w-6 md:tw-h-6" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" focusable="false"><path d="M4 7.2v1.5h16V7.2H4zm8 8.6h8v-1.5h-8v1.5zm-4-4.6l-4 4 4 4 1-1-3-3 3-3-1-1z"></path></svg>',
          command: (n) => {
            n.chain().focus().liftListItem("listItem").run();
          },
          isDisabledTest: (n) => !n.can().liftListItem("listItem")
        }
      ]
    },
    {
      title: "Code block",
      name: "codeBlock",
      icon: '<svg class="tw-w-5 tw-h-5 md:tw-w-6 md:tw-h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" /></svg>',
      insertCommand: ({ editor: n, range: e }) => {
        n.chain().focus().deleteRange(e).toggleCodeBlock().run();
      },
      hasInlineTools: !1,
      convertCommand: (n) => {
        n.chain().focus().toggleCodeBlock().run();
      },
      isActiveTest: (n) => n.isActive("codeBlock")
    },
    {
      title: "Blockquote",
      name: "blockquote",
      icon: '<svg class="tw-w-5 tw-h-5 md:tw-w-6 md:tw-h-6" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" focusable="false"><path d="M13 6v6h5.2v4c0 .8-.2 1.4-.5 1.7-.6.6-1.6.6-2.5.5h-.3v1.5h.5c1 0 2.3-.1 3.3-1 .6-.6 1-1.6 1-2.8V6H13zm-9 6h5.2v4c0 .8-.2 1.4-.5 1.7-.6.6-1.6.6-2.5.5h-.3v1.5h.5c1 0 2.3-.1 3.3-1 .6-.6 1-1.6 1-2.8V6H4v6z"></path></svg>',
      insertCommand: ({ editor: n, range: e }) => {
        n.chain().focus().deleteRange(e).toggleBlockquote().run();
      },
      hasInlineTools: !0,
      canBeConverted: !0,
      convertCommand: (n) => {
        n.chain().focus().toggleBlockquote().run();
      },
      isActiveTest: (n) => n.isActive("blockquote")
    },
    {
      title: "Horizontal rule",
      name: "horizontalRule",
      icon: '<svg class="tw-w-5 tw-h-5 md:tw-w-6 md:tw-h-6" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M20.2 7v4H3.8V7H2.2v9h1.6v-3.5h16.4V16h1.6V7z"></path></svg>',
      insertCommand: ({ editor: n, range: e }) => {
        n.chain().focus().deleteRange(e).setHorizontalRule().run();
      },
      hasInlineTools: !1,
      isActiveTest: (n) => n.isActive("horizontalRule")
    },
    {
      title: "Table",
      name: "table",
      icon: '<svg class="w-5 h-5 md:tw-w-6 md:tw-h-6" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" focusable="false"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 4.5h14c.3 0 .5.2.5.5v3.5h-15V5c0-.3.2-.5.5-.5zm8 5.5h6.5v3.5H13V10zm-1.5 3.5h-7V10h7v3.5zm-7 5.5v-4h7v4.5H5c-.3 0-.5-.2-.5-.5zm14.5.5h-6V15h6.5v4c0 .3-.2.5-.5.5z"></path></svg>',
      insertCommand: ({ editor: n, range: e }) => {
        n.chain().focus().deleteRange(e).insertTable({ rows: 3, cols: 3, withHeaderRow: !0 }).run();
      },
      hasInlineTools: !0,
      isActiveTest: (n) => n.isActive("table"),
      tools: [
        {
          title: "Toggle header row",
          name: "toggleHeaderRow",
          icon: '<svg class="tw-w-5 tw-h-5 md:tw-w-6 mtw-d:tw-h-6" xmlns="http://www.w3.org/2000/svg" width="21" height="16.5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 21 16.5"><path stroke-linecap="round" stroke-linejoin="round" d="M1.875 15.75h17.25m-17.25 0A1.125 1.125 0 0 1 .75 14.625m1.125 1.125h3.381c.621 0 1.125-.504 1.125-1.125m-5.631 0V1.875m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V1.875m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75H7.506a1.125 1.125 0 0 1-1.125-1.125M20.25 1.875c0-.621-.504-1.125-1.125-1.125H1.875C1.254.75.75 1.254.75 1.875m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M.75 1.875v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h3.381c.748 0 1.125.504 1.125 1.125M1.875 4.5C1.254 4.5.75 5.004.75 5.625v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75H7.506c-.62 0-1.125.504-1.125 1.125M19.125 4.5c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h3.381m-3.381 0C1.254 8.25.75 8.754.75 9.375v1.5c0 .621.504 1.125 1.125 1.125m4.506-4.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125m1.125-1.125c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M7.506 8.25h11.619m-11.619 0c-.62 0-1.125.504-1.125 1.125M19.125 8.25c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h3.381m1.125-1.125v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125m1.125-1.125c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h11.619"/><path fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" d="M.737.877H20.212V4.182H.737z" /></svg>',
          command: (n) => {
            n.commands.toggleHeaderRow();
          }
        },
        {
          title: "Toggle header column",
          name: "toggleHeaderColumn",
          icon: '<svg class="tw-w-5 tw-h-5 md:tw-w-6 md:tw-h-6" xmlns="http://www.w3.org/2000/svg" width="21" height="16.5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 21 16.5"><path stroke-linecap="round" stroke-linejoin="round" d="M1.875 15.75h17.25m-17.25 0A1.125 1.125 0 0 1 .75 14.625m1.125 1.125h3.381c.621 0 1.125-.504 1.125-1.125m-5.631 0V1.875m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V1.875m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75H7.506a1.125 1.125 0 0 1-1.125-1.125M20.25 1.875c0-.621-.504-1.125-1.125-1.125H1.875C1.254.75.75 1.254.75 1.875m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M.75 1.875v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h3.381c.748 0 1.125.504 1.125 1.125M1.875 4.5C1.254 4.5.75 5.004.75 5.625v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75H7.506c-.62 0-1.125.504-1.125 1.125M19.125 4.5c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h3.381m-3.381 0C1.254 8.25.75 8.754.75 9.375v1.5c0 .621.504 1.125 1.125 1.125m4.506-4.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125m1.125-1.125c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M7.506 8.25h11.619m-11.619 0c-.62 0-1.125.504-1.125 1.125M19.125 8.25c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h3.381m1.125-1.125v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125m1.125-1.125c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h11.619"/><path fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" d="M.737.877H7.042V15.369000000000002H.737z" /></svg>',
          command: (n) => {
            n.commands.toggleHeaderColumn();
          }
        },
        {
          title: "Merge or split cells",
          name: "mergeOrSplit",
          icon: '<svg class="tw-w-5 tw-h-5 md:tw-w-6 md:tw-h-6" fill="none" height="21" width="21" viewBox="0 0 48 48" stroke="currentColor" width="48" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg"><g stroke-linecap="round" stroke-width="4"><path d="m20 14v-9c0-.55228-.4477-1-1-1h-14c-.55228 0-1 .44772-1 1v38c0 .5523.44772 1 1 1h14c.5523 0 1-.4477 1-1v-9"/><path d="m28 34v9c0 .5523.4477 1 1 1h14c.5523 0 1-.4477 1-1v-38c0-.55228-.4477-1-1-1h-14c-.5523 0-1 .44772-1 1v9"/><path d="m28 24h16"/><path d="m5 24h15"/><path d="m32.7485 28.8183-1.591-1.5909-3.1819-3.182 3.1819-3.182 1.591-1.591" stroke-linejoin="round"/><path d="m15.375 28.8183 1.591-1.5909 3.182-3.182-3.182-3.182-1.591-1.591" stroke-linejoin="round"/></g></svg>',
          command: (n) => {
            n.commands.mergeOrSplit();
          }
        }
      ]
    },
    {
      title: "YouTube",
      name: "youtube",
      icon: '<svg class="tw-w-5 tw-h-5 md:tw-w-6 md:tw-h-6" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="24" height="24" version="1.1" viewBox="0 0 461.001 461.001"><path fill="currentColor" d="M365.257 67.393H95.744C42.866 67.393 0 110.259 0 163.137v134.728c0 52.878 42.866 95.744 95.744 95.744h269.513c52.878 0 95.744-42.866 95.744-95.744V163.137c0-52.878-42.866-95.744-95.744-95.744zm-64.751 169.663-126.06 60.123c-3.359 1.602-7.239-.847-7.239-4.568V168.607c0-3.774 3.982-6.22 7.348-4.514l126.06 63.881c3.748 1.899 3.683 7.274-.109 9.082z"/></svg>',
      hasInlineTools: !1,
      canBeConverted: !1,
      isActiveTest: (n) => n.isActive("youtube")
    }
  ];
}
function e2() {
  return [
    {
      title: "Bold",
      icon: '<svg class="tw-w-5 tw-h-5 md:tw-w-6 md:tw-h-6" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor"><path d="M14.7 11.3c1-.6 1.5-1.6 1.5-3 0-2.3-1.3-3.4-4-3.4H7v14h5.8c1.4 0 2.5-.3 3.3-1 .8-.7 1.2-1.7 1.2-2.9.1-1.9-.8-3.1-2.6-3.7zm-5.1-4h2.3c.6 0 1.1.1 1.4.4.3.3.5.7.5 1.2s-.2 1-.5 1.2c-.3.3-.8.4-1.4.4H9.6V7.3zm4.6 9c-.4.3-1 .4-1.7.4H9.6v-3.9h2.9c.7 0 1.3.2 1.7.5.4.3.6.8.6 1.5s-.2 1.2-.6 1.5z"></path></svg>',
      command: (n) => {
        n.chain().focus().toggleBold().run();
      },
      isActiveTest: (n) => n.isActive("bold")
    },
    {
      title: "Italic",
      icon: '<svg class="tw-w-5 tw-h-5 md:tw-w-6 md:tw-h-6" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" focusable="false"><path d="M12.5 5L10 19h1.9l2.5-14z"></path></svg>',
      command: (n) => {
        n.chain().focus().toggleItalic().run();
      },
      isActiveTest: (n) => n.isActive("italic")
    },
    {
      title: "Link",
      icon: '<svg class="tw-w-5 tw-h-5 md:tw-w-6 md:tw-h-6" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" focusable="false"><path d="M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z"></path></svg>',
      command: (n) => {
        const e = n.getAttributes("link").href, t = window.prompt("URL", e);
        if (t !== null) {
          if (t === "") {
            n.chain().focus().extendMarkRange("link").unsetLink().run();
            return;
          }
          n.chain().focus().extendMarkRange("link").setLink({ href: t }).run();
        }
      },
      isActiveTest: (n) => n.isActive("link"),
      isActiveClass: "hidden"
    },
    {
      title: "Unlink",
      icon: '<svg class="tw-w-5 tw-h-5 md:tw-w-6 md:tw-h-6" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" focusable="false"><path d="M15.6 7.3h-.7l1.6-3.5-.9-.4-3.9 8.5H9v1.5h2l-1.3 2.8H8.4c-2 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7H10V7.3H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H9l-1.4 3.2.9.4 5.7-12.5h1.4c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.9 0 5.2-2.3 5.2-5.2 0-2.9-2.4-5.2-5.2-5.2z"></path></svg>',
      command: (n) => n.chain().focus().unsetLink().run(),
      isActiveTest: (n) => !n.isActive("link"),
      isActiveClass: "hidden"
    },
    {
      title: "More inline tool",
      icon: '<svg class="tw-w-5 tw-h-5 md:tw-w-6 md:tw-h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" fill="currentColor" focusable="false"><path d="M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"></path></svg>',
      isActiveTest: () => !1,
      command: () => null,
      tools: [
        {
          title: "Strikethrough",
          icon: '<svg class="tw-w-5 tw-h-5 md:tw-w-6 md:tw-h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M9.1 9v-.5c0-.6.2-1.1.7-1.4.5-.3 1.2-.5 2-.5.7 0 1.4.1 2.1.3.7.2 1.4.5 2.1.9l.2-1.9c-.6-.3-1.2-.5-1.9-.7-.8-.1-1.6-.2-2.4-.2-1.5 0-2.7.3-3.6 1-.8.7-1.2 1.5-1.2 2.6V9h2zM20 12H4v1h8.3c.3.1.6.2.8.3.5.2.9.5 1.1.8.3.3.4.7.4 1.2 0 .7-.2 1.1-.8 1.5-.5.3-1.2.5-2.1.5-.8 0-1.6-.1-2.4-.3-.8-.2-1.5-.5-2.2-.8L7 18.1c.5.2 1.2.4 2 .6.8.2 1.6.3 2.4.3 1.7 0 3-.3 3.9-1 .9-.7 1.3-1.6 1.3-2.8 0-.9-.2-1.7-.7-2.2H20v-1z"></path></svg>',
          command: (n) => n.commands.toggleStrike(),
          isActiveTest: (n) => n.isActive("strike")
        },
        {
          title: "Inline code",
          icon: '<svg class="tw-w-5 tw-h-5 md:tw-w-6 md:tw-h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" focusable="false"><path d="M20.8 10.7l-4.3-4.3-1.1 1.1 4.3 4.3c.1.1.1.3 0 .4l-4.3 4.3 1.1 1.1 4.3-4.3c.7-.8.7-1.9 0-2.6zM4.2 11.8l4.3-4.3-1-1-4.3 4.3c-.7.7-.7 1.8 0 2.5l4.3 4.3 1.1-1.1-4.3-4.3c-.2-.1-.2-.3-.1-.4z"></path></svg>',
          command: (n) => n.commands.toggleCode(),
          isActiveTest: (n) => n.isActive("code")
        },
        {
          title: "Highlight",
          icon: '<svg class="tw-w-5 tw-h-5 md:tw-w-6 md:tw-h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>',
          command: (n) => n.commands.toggleHighlight(),
          isActiveTest: (n) => n.isActive("highlight")
        },
        {
          title: "Subscript",
          icon: '<svg class="tw-w-5 tw-h-5 md:tw-w-6 md:tw-h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M16.9 18.3l.8-1.2c.4-.6.7-1.2.9-1.6.2-.4.3-.8.3-1.2 0-.3-.1-.7-.2-1-.1-.3-.4-.5-.6-.7-.3-.2-.6-.3-1-.3s-.8.1-1.1.2c-.3.1-.7.3-1 .6l.2 1.3c.3-.3.5-.5.8-.6s.6-.2.9-.2c.3 0 .5.1.7.2.2.2.2.4.2.7 0 .3-.1.5-.2.8-.1.3-.4.7-.8 1.3L15 19.4h4.3v-1.2h-2.4zM14.1 7.2h-2L9.5 11 6.9 7.2h-2l3.6 5.3L4.7 18h2l2.7-4 2.7 4h2l-3.8-5.5 3.8-5.3z"></path></svg>',
          command: (n) => n.commands.toggleSubscript(),
          isActiveTest: (n) => n.isActive("subscript")
        },
        {
          title: "Superscript",
          icon: '<svg class="tw-w-5 tw-h-5 md:tw-w-6 md:tw-h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M16.9 10.3l.8-1.3c.4-.6.7-1.2.9-1.6.2-.4.3-.8.3-1.2 0-.3-.1-.7-.2-1-.2-.2-.4-.4-.7-.6-.3-.2-.6-.3-1-.3s-.8.1-1.1.2c-.3.1-.7.3-1 .6l.1 1.3c.3-.3.5-.5.8-.6s.6-.2.9-.2c.3 0 .5.1.7.2.2.2.2.4.2.7 0 .3-.1.5-.2.8-.1.3-.4.7-.8 1.3l-1.8 2.8h4.3v-1.2h-2.2zm-2.8-3.1h-2L9.5 11 6.9 7.2h-2l3.6 5.3L4.7 18h2l2.7-4 2.7 4h2l-3.8-5.5 3.8-5.3z"></path></svg>',
          command: (n) => n.commands.toggleSuperscript(),
          isActiveTest: (n) => n.isActive("superscript")
        }
      ]
    }
  ];
}
function t2() {
  return [
    [
      {
        title: "Align text left",
        icon: '<svg class="tw-w-5 tw-h-5 md:tw-w-6 md:tw-h-6" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" focusable="false"><path d="M4 19.8h8.9v-1.5H4v1.5zm8.9-15.6H4v1.5h8.9V4.2zm-8.9 7v1.5h16v-1.5H4z"></path></svg>',
        command: (n) => {
          n.chain().focus().setTextAlign("left").run();
        },
        isActiveTest: (n) => n.isActive({ textAlign: "left" })
      },
      {
        title: "Align text centre",
        icon: '<svg class="tw-w-5 tw-h-5 md:tw-w-6 md:tw-h-6" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" focusable="false"><path d="M16.4 4.2H7.6v1.5h8.9V4.2zM4 11.2v1.5h16v-1.5H4zm3.6 8.6h8.9v-1.5H7.6v1.5z"></path></svg>',
        command: (n) => {
          n.chain().focus().setTextAlign("center").run();
        },
        isActiveTest: (n) => n.isActive({ textAlign: "center" })
      },
      {
        title: "Align text right",
        icon: '<svg class="tw-w-5 tw-h-5 md:tw-w-6 md:tw-h-6" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" focusable="false"><path d="M11.1 19.8H20v-1.5h-8.9v1.5zm0-15.6v1.5H20V4.2h-8.9zM4 12.8h16v-1.5H4v1.5z"></path></svg>',
        command: (n) => {
          n.chain().focus().setTextAlign("right").run();
        },
        isActiveTest: (n) => n.isActive({ textAlign: "right" })
      }
    ],
    [
      {
        title: "Normal width",
        icon: '<svg class="tw-w-5 tw-h-5 md:tw-w-6 md:tw-h-6" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M5 15h14V9H5v6zm0 4.8h14v-1.5H5v1.5zM5 4.2v1.5h14V4.2H5z"></path></svg>',
        command: (n) => {
          n.chain().focus().setBlockWidth("normal").run();
        },
        isActiveTest: (n, e) => n.isActive(e, { blockWidth: "normal" })
      },
      {
        title: "Wide width",
        icon: '<svg class="tw-w-5 tw-h-5 md:tw-w-6 md:tw-h-6" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M5 9v6h14V9H5zm11-4.8H8v1.5h8V4.2zM8 19.8h8v-1.5H8v1.5z"></path></svg>',
        command: (n) => {
          n.chain().focus().setBlockWidth("wide").run();
        },
        isActiveTest: (n, e) => n.isActive(e, { blockWidth: "wide" })
      },
      {
        title: "Full width",
        icon: '<svg class="tw-w-5 tw-h-5 md:tw-w-6 md:tw-h-6" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="currentColor" aria-hidden="true" focusable="false"><path d="M5 4v11h14V4H5zm3 15.8h8v-1.5H8v1.5z"></path></svg>',
        command: (n) => {
          n.chain().focus().setBlockWidth("full").run();
        },
        isActiveTest: (n, e) => n.isActive(e, { blockWidth: "full" })
      },
      {
        title: "Sidebar",
        icon: '<svg  class="tw-w-5 tw-h-5 md:tw-w-6 md:tw-h-6" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" x="0" y="0" enable-background="new 0 0 24 24" version="1.1" viewBox="0 0 24 24"><path  fill="currentColor" d="M14.7 9v6h5.9V9h-5.9zm2.6-2.9H5.1v1.5h12.3V6.1zM5.1 17.9h11.7v-1.5H5.1v1.5zm8-6.6h-8v1.5h8v-1.5z"/></svg>',
        command: (n) => {
          n.chain().focus().setBlockWidth("sidebar").run();
        },
        isActiveTest: (n, e) => n.isActive(e, {
          blockWidth: "sidebar"
        })
      }
    ]
  ];
}
function n2() {
  return [
    {
      title: "Add row before",
      name: "addRowBefore",
      icon: '<svg class="tw-w-5 tw-h-5 md:tw-w-6 md:tw-h-6" xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="24" height="24" aria-hidden="true" stroke-width="1"  fill="currentColor" focusable="false"><path d="M6.656 6.464h2.88v2.88h1.408v-2.88h2.88V5.12h-2.88V2.24H9.536v2.88h-2.88zM0 17.92V0h20.48v17.92H0zm7.68-2.56h5.12v-3.84H7.68v3.84zm-6.4 0H6.4v-3.84H1.28v3.84zM19.2 1.28H1.28v9.024H19.2V1.28zm0 10.24h-5.12v3.84h5.12v-3.84zM6.656 6.464h2.88v2.88h1.408v-2.88h2.88V5.12h-2.88V2.24H9.536v2.88h-2.88zM0 17.92V0h20.48v17.92H0zm7.68-2.56h5.12v-3.84H7.68v3.84zm-6.4 0H6.4v-3.84H1.28v3.84zM19.2 1.28H1.28v9.024H19.2V1.28zm0 10.24h-5.12v3.84h5.12v-3.84z"></path></svg>',
      command: (n) => {
        n.commands.addRowBefore();
      }
    },
    {
      title: "Add row after",
      name: "addRowAfter",
      icon: '<svg class="tw-w-5 tw-h-5 md:tw-w-6 md:tw-h-6" xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="24" height="24" aria-hidden="true" stroke-width="1"  fill="currentColor" focusable="false"><path d="M13.824 10.176h-2.88v-2.88H9.536v2.88h-2.88v1.344h2.88v2.88h1.408v-2.88h2.88zM0 17.92V0h20.48v17.92H0zM6.4 1.28H1.28v3.84H6.4V1.28zm6.4 0H7.68v3.84h5.12V1.28zm6.4 0h-5.12v3.84h5.12V1.28zm0 5.056H1.28v9.024H19.2V6.336z"></path></svg>',
      command: (n) => {
        n.commands.addRowAfter();
      }
    },
    {
      title: "Delete row",
      name: "deleteRow",
      icon: '<svg class="tw-w-5 tw-h-5 md:tw-w-6 md:tw-h-6" xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="24" height="24" aria-hidden="true" stroke-width="1"  fill="currentColor" focusable="false"><path d="M17.728 11.456L14.592 8.32l3.2-3.2-1.536-1.536-3.2 3.2L9.92 3.648 8.384 5.12l3.2 3.2-3.264 3.264 1.536 1.536 3.264-3.264 3.136 3.136 1.472-1.536zM0 17.92V0h20.48v17.92H0zm19.2-6.4h-.448l-1.28-1.28H19.2V6.4h-1.792l1.28-1.28h.512V1.28H1.28v3.84h6.208l1.28 1.28H1.28v3.84h7.424l-1.28 1.28H1.28v3.84H19.2v-3.84z"></path></svg>',
      command: (n) => {
        n.commands.deleteRow();
      }
    }
  ];
}
function r2() {
  return [
    {
      title: "Add column before",
      name: "addColumnBefore",
      icon: '<svg class="tw-w-5 tw-h-5 md:tw-w-6 md:tw-h-6" xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="24" height="24" aria-hidden="true" stroke-width="1"  fill="currentColor" focusable="false"><path d="M6.4 3.776v3.648H2.752v1.792H6.4v3.648h1.728V9.216h3.712V7.424H8.128V3.776zM0 17.92V0h20.48v17.92H0zM12.8 1.28H1.28v14.08H12.8V1.28zm6.4 0h-5.12v3.84h5.12V1.28zm0 5.12h-5.12v3.84h5.12V6.4zm0 5.12h-5.12v3.84h5.12v-3.84z"></path></svg>',
      command: (n) => {
        n.commands.addColumnBefore();
      }
    },
    {
      title: "Add column after",
      name: "addColumnAfter",
      icon: '<svg class="tw-w-5 tw-h-5 md:tw-w-6 md:tw-h-6" xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="24" height="24" aria-hidden="true" stroke-width="1"  fill="currentColor" focusable="false"><path d="M14.08 12.864V9.216h3.648V7.424H14.08V3.776h-1.728v3.648H8.64v1.792h3.712v3.648zM0 17.92V0h20.48v17.92H0zM6.4 1.28H1.28v3.84H6.4V1.28zm0 5.12H1.28v3.84H6.4V6.4zm0 5.12H1.28v3.84H6.4v-3.84zM19.2 1.28H7.68v14.08H19.2V1.28z"></path></svg>',
      command: (n) => {
        n.commands.addColumnAfter();
      }
    },
    {
      title: "Delete column",
      name: "deleteColumn",
      icon: '<svg class="tw-w-5 tw-h-5 md:tw-w-6 md:tw-h-6" xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="24" height="24" aria-hidden="true" stroke-width="1"  fill="currentColor" focusable="false"><path d="M6.4 9.98L7.68 8.7v-.256L6.4 7.164V9.98zm6.4-1.532l1.28-1.28V9.92L12.8 8.64v-.192zm7.68 9.472V0H0v17.92h20.48zm-1.28-2.56h-5.12v-1.024l-.256.256-1.024-1.024v1.792H7.68v-1.792l-1.024 1.024-.256-.256v1.024H1.28V1.28H6.4v2.368l.704-.704.576.576V1.216h5.12V3.52l.96-.96.32.32V1.216h5.12V15.36zm-5.76-2.112l-3.136-3.136-3.264 3.264-1.536-1.536 3.264-3.264L5.632 5.44l1.536-1.536 3.136 3.136 3.2-3.2 1.536 1.536-3.2 3.2 3.136 3.136-1.536 1.536z"></path></svg>',
      command: (n) => {
        n.commands.deleteColumn();
      }
    }
  ];
}
const i2 = {
  props: {
    modelValue: {},
    editable: {
      default: !0
    },
    placeholder: {
      type: String,
      default: "Type / to choose a block"
    },
    editorClass: {
      type: String
    },
    mode: {
      type: String,
      default: "html"
    },
    extensions: {
      type: Array,
      default: () => []
    },
    blockTools: {
      type: Array,
      default: () => []
    },
    inlineTools: {
      type: Array,
      default: () => []
    },
    alignmentTools: {
      type: Array,
      default: () => []
    },
    blockWidthTypes: {
      type: Array,
      default: () => ["horizontalRule", "blockquote", "youtube"]
    },
    variantsTypes: {
      type: Array,
      default: () => [
        "paragraph",
        "heading",
        "horizontalRule",
        "blockquote",
        "list",
        "youtube"
      ]
    }
  },
  components: {
    BubbleMenu: $y,
    EditorContent: Wy,
    MenuButton: Qf,
    MenuItem: nh,
    MenuDropdownButton: sh
  },
  data() {
    return {
      dragging: !1,
      draggedNodePosition: null,
      editor: null,
      allBlockTools: sl(Zb(), this.blockTools),
      allInlineTools: sl(e2(), this.inlineTools),
      allAlignmentTools: this.alignmentTools.length ? this.alignmentTools : t2(),
      tableRowTools: n2(),
      tableColumnTools: r2(),
      topLevelNodeType: null,
      currentBlockTool: null,
      isTyping: !1,
      showMainToolbar: !1,
      moreIcon: '<svg class="tw-w-5 tw-h-5 md:tw-w-6 md:tw-h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"/></svg>',
      deleteIcon: '<svg class="tw-w-5 tw-h-5 md:tw-w-6 md:tw-h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"/></svg>',
      moreIconRound: '<svg class="tw-w-5 tw-h-5 md:tw-w-6 md:tw-h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>'
    };
  },
  created: function() {
    window.addEventListener("mousemove", () => this.cancelTyping());
  },
  unmounted: function() {
    window.removeEventListener("mousemove", () => this.cancelTyping());
  },
  mounted() {
    this.editor = new jy({
      extensions: [
        Ww.configure({
          blockquote: !1
        }),
        af.extend({
          content: "paragraph"
        }),
        zb,
        Vb,
        kb,
        xb,
        Mb,
        _b.configure({
          suggestion: Qb(this.allBlockTools)
        }),
        fv.configure({
          openOnClick: !1
        }),
        hv.configure({
          placeholder: this.placeholder
        }),
        Rb.configure({
          types: this.blockWidthTypes
        }),
        Fb.configure({
          types: this.variantsTypes
        }),
        bb.configure({
          types: ["heading", "paragraph"]
        }),
        gb.configure({
          resizable: !0
        }),
        vb.extend({
          allowGapCursor: !1
        }),
        wb.extend({
          content: "(inline|hardBreak?)*",
          isolating: !1
        }),
        yb.extend({
          content: "(inline|hardBreak?)*",
          isolating: !1
        }),
        Hb.configure({
          inline: !1,
          HTMLAttributes: {
            class: "tw-aspect-video tw-h-auto tw-w-full"
          }
        }),
        ...this.extensions
      ],
      onUpdate: () => {
        this.updateToolbar(), this.$emit(
          "update:modelValue",
          this.mode == "json" ? this.editor.getJSON().content : this.editor.getHTML()
        );
      },
      onSelectionUpdate: () => {
        this.updateToolbar();
      }
    }), this.editor.commands.setContent(
      this.mode == "json" ? {
        type: "doc",
        content: this.modelValue
      } : this.modelValue
    ), this.editor.setEditable(this.editable);
  },
  beforeUnmount() {
    this.editor.destroy();
  },
  watch: {
    topLevelNodeType() {
      this.currentBlockTool = this.getCurrentBlockTool();
    },
    editable() {
      this.editor.setEditable(this.editable);
    }
  },
  computed: {
    activeAlignmentTools() {
      return this.topLevelNodeType ? this.allAlignmentTools.filter(
        (n) => n.find(
          (e) => e.isActiveTest(this.editor, this.topLevelNodeType)
        )
      ) : null;
    }
  },
  methods: {
    cancelTyping() {
      this.$nextTick(() => this.isTyping = !1);
    },
    shouldShowMainToolbar() {
      return this.editable && this.editor.isActive() && this.modelValue;
    },
    updateToolbar() {
      this.topLevelNodeType = this.getTopLevelNodeType();
    },
    getCurrentBlockTool() {
      return this.allBlockTools.find(
        (n) => {
          var e;
          return n.name == this.topLevelNodeType || ((e = n.tools) == null ? void 0 : e.find((t) => t.name == this.topLevelNodeType));
        }
      );
    },
    deleteNode(n) {
      this.editor.commands.deleteNode(n), this.$refs.deleteButton.$el.blur();
    },
    getMenuCoords() {
      return Tb(this.editor.view);
    },
    getTableRowMenuCoords() {
      return Ab(this.editor.view);
    },
    getTableColumnMenuCoords() {
      return Eb(this.editor.view);
    },
    startDragging(n) {
      let e = { left: n.clientX, top: n.clientY + 48 };
      this.draggedNodePosition = this.editor.view.posAtCoords(e).pos, this.dragging = !0;
    },
    endDragging(n) {
      let e = this.editor.view.posAtCoords({
        left: n.clientX,
        top: n.clientY + 20
      });
      e && Ob({
        view: this.editor.view,
        state: this.editor.state,
        draggedNodePosition: this.draggedNodePosition,
        targetNodePosition: e.pos
      }), this.dragging = !1, this.draggedNode = null;
    },
    tableIsActive() {
      return this.editable && this.getTopLevelNodeType() == "table";
    },
    moveNode(n = "UP") {
      Nb({
        view: this.editor.view,
        dir: n,
        currentResolved: this.editor.view.state.selection.$from
      });
    },
    getTopLevelNodeType() {
      var n;
      return (n = Xl(this.editor.view)) == null ? void 0 : n.type.name;
    },
    canMoveNodeDown() {
      const n = this.editor.view.state.selection.$from;
      return n.index(0) < n.node(0).childCount - 1;
    },
    canMoveNodeUp() {
      return this.editor.view.state.selection.$from.index(0) > 0;
    }
  }
}, o2 = { class: "gutentap" }, s2 = { class: "tw-flex tw-flex-row" }, l2 = {
  key: 0,
  class: "tw-py-1 md:tw-py-2 tw-group tw-relative"
}, a2 = {
  key: 1,
  class: "tw-pr-2 tw-flex tw-flex-col"
}, c2 = ["disabled"], d2 = ["disabled"], u2 = {
  key: 0,
  class: "tw-flex tw-gap-1 tw-items-center tw-hide-empty tw-flex-row tw-p-1 md:tw-p-2"
}, f2 = {
  key: 1,
  class: "tw-gap-1 tw-flex tw-flex-row tw-items-center tw-p-1 md:tw-p-2"
}, h2 = {
  key: 2,
  class: "tw-p-1 tw-gap-0.5 md:tw-p-2 md:tw-gap-1 tw-flex tw-relative tw-flex-row tw-items-center"
}, p2 = {
  key: 3,
  class: "tw-p-1 tw-gap-0.5 md:tw-p-2 md:tw-gap-1 tw-flex tw-tw-group tw-flex-row tw-items-center tw-relative"
};
function m2(n, e, t, r, i, o) {
  const s = ar("menu-button"), l = ar("menu-dropdown-button"), a = ar("menu-item"), c = ar("bubble-menu"), d = ar("editor-content");
  return V(), ne("div", o2, [
    i.editor && i.tableRowTools ? (V(), Qe(c, {
      key: 0,
      editor: i.editor,
      pluginKey: "tableRowMenu",
      "should-show": o.tableIsActive,
      "tippy-options": {
        placement: "left",
        getReferenceClientRect: o.getTableRowMenuCoords
      }
    }, {
      default: Se(() => [
        Fe(a, null, {
          dropdown: Se(() => [
            (V(!0), ne(Ct, null, St(i.tableRowTools, (u) => (V(), Qe(l, {
              innerHTML: u.icon + " " + u.title,
              key: u.title,
              label: u.title,
              onClick: Me((f) => u.command(i.editor), ["prevent"])
            }, null, 8, ["innerHTML", "label", "onClick"]))), 128))
          ]),
          default: Se(() => [
            Fe(s, {
              title: "Row tools",
              class: "tw-rounded-full tw-text-slate-400 hover:tw-text-slate-800",
              content: i.moreIconRound
            }, null, 8, ["content"])
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["editor", "should-show", "tippy-options"])) : it("", !0),
    i.editor && i.tableColumnTools ? (V(), Qe(c, {
      key: 1,
      editor: i.editor,
      pluginKey: "tableColumnMenu",
      "should-show": o.tableIsActive,
      "tippy-options": {
        placement: "bottom",
        getReferenceClientRect: o.getTableColumnMenuCoords
      }
    }, {
      default: Se(() => [
        Fe(a, null, {
          dropdown: Se(() => [
            (V(!0), ne(Ct, null, St(i.tableColumnTools, (u) => (V(), Qe(l, {
              content: u.icon + " " + u.title,
              key: u.title,
              label: u.title,
              onClick: Me((f) => u.command(i.editor), ["prevent"])
            }, null, 8, ["content", "label", "onClick"]))), 128))
          ]),
          default: Se(() => [
            Fe(s, {
              title: "Column tools",
              content: i.moreIconRound,
              class: "tw-rounded-full tw-text-slate-400 hover:tw-text-slate-800"
            }, null, 8, ["content"])
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["editor", "should-show", "tippy-options"])) : it("", !0),
    i.editor ? (V(), Qe(c, {
      key: 2,
      pluginKey: "mainMenu",
      onDragend: e[9] || (e[9] = (u) => o.endDragging(u)),
      draggable: i.dragging,
      "should-show": o.shouldShowMainToolbar,
      class: jt(["tw-text-sm tw-bg-white tw-max-w-screen tw-flex tw-divide-x tw-max-w-full tw-divide-slate-400 tw-flex-row tw-border-slate-400 md:tw-rounded tw-border-t md:tw-border", {
        "mouse:tw-pointer-events-none mouse:tw-opacity-0": i.isTyping
      }]),
      editor: i.editor,
      "tippy-options": {
        maxWidth: "none",
        placement: "top-start",
        getReferenceClientRect: o.getMenuCoords,
        onCreate: (u) => u.popper.classList.add(
          "max-md:!tw-sticky",
          "max-md:!tw-bottom-0",
          "max-md:!tw-top-auto",
          "max-md:!tw-transform-none"
        )
      }
    }, {
      default: Se(() => {
        var u, f, h, p, g;
        return [
          je("div", s2, [
            je("button", {
              onClick: e[0] || (e[0] = Me(() => {
              }, ["prevent"])),
              onMousedown: e[1] || (e[1] = (m) => o.startDragging(m)),
              onMouseup: e[2] || (e[2] = (m) => {
                i.draggedNodePosition = !1, i.dragging = !1;
              }),
              class: jt(["hidden md:tw-block tw-ml-1 tw-my-2 hover:tw-bg-slate-100 tw-rounded", {
                "tw-cursor-grab": !i.dragging,
                "tw-cursor-grabbing mr-1": i.dragging
              }]),
              "aria-label": "Drag",
              "data-tooltip": "Drag"
            }, e[12] || (e[12] = [
              je("svg", {
                width: "24",
                height: "24",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                "aria-hidden": "true",
                focusable: "false",
                class: "tw-w-5 tw-h-5 md:tw-w-6 md:tw-h-6"
              }, [
                je("path", { d: "M8 7h2V5H8v2zm0 6h2v-2H8v2zm0 6h2v-2H8v2zm6-14v2h2V5h-2zm0 8h2v-2h-2v2zm0 6h2v-2h-2v2z" })
              ], -1)
            ]), 34),
            !i.dragging && i.currentBlockTool ? (V(), ne("div", l2, [
              Fe(a, null, Uf({
                default: Se(() => {
                  var m, y, v;
                  return [
                    Fe(s, {
                      onClick: e[3] || (e[3] = Me(() => {
                      }, ["prevent"])),
                      title: (m = i.currentBlockTool) == null ? void 0 : m.name,
                      content: (y = i.currentBlockTool) == null ? void 0 : y.icon,
                      class: jt(
                        ((v = i.currentBlockTool) == null ? void 0 : v.canBeConverted) && "tw-group-focus-within:bg-slate-600 !tw-cursor-pointer tw-group-focus-within:text-white hover:tw-bg-slate-50"
                      )
                    }, null, 8, ["title", "content", "class"])
                  ];
                }),
                _: 2
              }, [
                (u = i.currentBlockTool) != null && u.canBeConverted ? {
                  name: "dropdown",
                  fn: Se(() => [
                    e[13] || (e[13] = je("div", { class: "tw-p-3 tw-uppercase tw-text-gray-600 tw-text-xs tw-pb-1 tw-tracking-wide" }, " Transform to ", -1)),
                    (V(!0), ne(Ct, null, St(i.allBlockTools.filter(
                      (m) => m.convertCommand
                    ), (m) => (V(), Qe(l, {
                      content: m.icon + " " + m.title,
                      key: m.title,
                      label: m.title,
                      onClick: Me((y) => m.convertCommand(i.editor), ["prevent"]),
                      activeClass: "hidden",
                      active: m.isActiveTest(i.editor)
                    }, null, 8, ["content", "label", "onClick", "active"]))), 128))
                  ]),
                  key: "0"
                } : void 0
              ]), 1024)
            ])) : it("", !0),
            i.dragging ? it("", !0) : (V(), ne("div", a2, [
              je("button", {
                onClick: e[4] || (e[4] = Me((m) => o.moveNode("UP"), ["prevent"])),
                disabled: !o.canMoveNodeUp(),
                "data-tooltip": "Move up",
                class: "tw-mt-1 tw-md:tw-mt-2"
              }, e[14] || (e[14] = [
                je("svg", {
                  width: "24",
                  height: "24",
                  class: "tw-pointer-events-none tw-w-5 tw-h-5 md:tw-w-6 md:tw-h-6",
                  viewBox: "0 0 24 24",
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "currentColor",
                  "aria-hidden": "true",
                  focusable: "false"
                }, [
                  je("path", { d: "M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z" })
                ], -1)
              ]), 8, c2),
              je("button", {
                onClick: e[5] || (e[5] = Me((m) => o.moveNode("DOWN"), ["prevent"])),
                disabled: !o.canMoveNodeDown(),
                "data-tooltip": "Move down",
                class: "-tw-mt-1.5"
              }, e[15] || (e[15] = [
                je("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "24",
                  height: "24",
                  fill: "currentColor",
                  "aria-hidden": "true",
                  viewBox: "0 0 24 24",
                  class: "tw-pointer-events-none -tw-mt-2 tw-w-5 tw-h-5 md:tw-w-6 md:tw-h-6"
                }, [
                  je("path", { d: "M17.5 11.6 12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z" })
                ], -1)
              ]), 8, d2)
            ]))
          ]),
          i.dragging ? it("", !0) : (V(), ne("div", u2, [
            (V(!0), ne(Ct, null, St(o.activeAlignmentTools, (m, y) => (V(), Qe(a, { key: y }, {
              dropdown: Se(() => [
                (V(!0), ne(Ct, null, St(m, (v) => (V(), Qe(l, {
                  key: v.title,
                  content: v.icon + " " + v.title,
                  label: v.title,
                  onClick: Me((S) => v.command(i.editor), ["prevent"]),
                  active: v.isActiveTest(i.editor, i.topLevelNodeType)
                }, null, 8, ["content", "label", "onClick", "active"]))), 128))
              ]),
              default: Se(() => {
                var v, S;
                return [
                  Fe(s, {
                    onClick: e[6] || (e[6] = Me(() => {
                    }, ["prevent"])),
                    title: (v = m.find(
                      (w) => w.isActiveTest(i.editor, i.topLevelNodeType)
                    )) == null ? void 0 : v.title,
                    content: (S = m.find(
                      (w) => w.isActiveTest(i.editor, i.topLevelNodeType)
                    )) == null ? void 0 : S.icon
                  }, null, 8, ["title", "content"])
                ];
              }),
              _: 2
            }, 1024))), 128))
          ])),
          !i.dragging && ((h = (f = i.currentBlockTool) == null ? void 0 : f.tools) != null && h.length) ? (V(), ne("div", f2, [
            (V(!0), ne(Ct, null, St((p = i.currentBlockTool) == null ? void 0 : p.tools, (m) => {
              var y, v;
              return V(), Qe(s, {
                key: m.name,
                content: m.icon,
                label: m.title,
                activeClass: m.isActiveClass,
                onClick: Me((S) => m.command.call(0, i.editor), ["prevent"]),
                disabled: (y = m.isDisabledTest) == null ? void 0 : y.call(0, i.editor),
                active: (v = m.isActiveTest) == null ? void 0 : v.call(0, i.editor)
              }, null, 8, ["content", "label", "activeClass", "onClick", "disabled", "active"]);
            }), 128))
          ])) : it("", !0),
          (g = i.currentBlockTool) != null && g.hasInlineTools && !i.dragging ? (V(), ne("div", h2, [
            (V(!0), ne(Ct, null, St(i.allInlineTools, (m) => (V(), Qe(a, {
              align: "right",
              key: m.title
            }, {
              dropdown: Se(() => [
                (V(!0), ne(Ct, null, St(m.tools, (y) => (V(), Qe(l, {
                  key: y.name,
                  content: y.icon + " " + y.title,
                  onClick: Me((v) => y.command(i.editor), ["prevent"]),
                  active: y.isActiveTest(i.editor)
                }, null, 8, ["content", "onClick", "active"]))), 128))
              ]),
              default: Se(() => [
                Fe(s, {
                  content: m.icon,
                  label: m.title,
                  activeClass: m.isActiveClass,
                  onClick: Me((y) => m.command(i.editor), ["prevent"]),
                  active: m.isActiveTest(i.editor)
                }, null, 8, ["content", "label", "activeClass", "onClick", "active"])
              ]),
              _: 2
            }, 1024))), 128))
          ])) : it("", !0),
          i.editor && i.editor.can().deleteNode(i.topLevelNodeType) && !i.dragging ? (V(), ne("div", p2, [
            Fe(a, { align: "right" }, {
              dropdown: Se(() => [
                Fe(l, {
                  ref: "deleteButton",
                  content: i.deleteIcon + " Delete",
                  label: "Delete block",
                  onClick: e[8] || (e[8] = Me((m) => o.deleteNode(i.topLevelNodeType), ["prevent"]))
                }, null, 8, ["content"])
              ]),
              default: Se(() => [
                Fe(s, {
                  onClick: e[7] || (e[7] = Me(() => {
                  }, ["prevent"])),
                  content: i.moreIcon,
                  label: "More options"
                }, null, 8, ["content"])
              ]),
              _: 1
            })
          ])) : it("", !0)
        ];
      }),
      _: 1
    }, 8, ["draggable", "should-show", "editor", "class", "tippy-options"])) : it("", !0),
    Fe(d, {
      class: jt(t.editorClass ?? "prose"),
      onKeydown: e[10] || (e[10] = (u) => i.isTyping = !0),
      onKeyup: e[11] || (e[11] = Jf((u) => i.isTyping = !1, ["esc"])),
      ref: "editor",
      editor: i.editor
    }, null, 8, ["class", "editor"])
  ]);
}
const g2 = /* @__PURE__ */ qr(i2, [["render", m2]]), b2 = g2;
export {
  b2 as GutenTap
};
