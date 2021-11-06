// import h from "./vdom/createElement";
// import { render } from "./vdom/render";
const view = h("p", {
    attrs: {
    },
    childlen: [
        "仮想DOMの学習スタート"
    ]
});
const $app = render(view);
const el = document.getElementById("app");
el.appendChild($app);

//# sourceMappingURL=index.f1c72d30.js.map
