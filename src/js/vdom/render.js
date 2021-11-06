import { isEventAttr } from "./utils";

const setAttrs = (target, attrs) => {
  for (const attr in attrs) {
    if (isEventAttr(attr)) {
      target.addEventListener(attr.slice(2), attrs[attr]);
    } else {
      target.setAttribute(attr, attrs[attr]);
    }
  }
};

function renderElement({ tagName, attrs, children }) {
  const $el = document.createElement(tagName);

  setAttrs($el, attrs);
  // for (const [k, v] of Object.entries(attrs)) {
  //   $el.setAttribute(k, v);
  // }

  for (const child of children) {
    $el.appendChild(render(child));
  }

  return $el;
}

export function render(vNode) {
  if (typeof vNode === "string") {
    return document.createTextNode(vNode);
  }
  return renderElement(vNode);
}
