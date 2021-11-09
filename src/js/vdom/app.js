import { render } from "./render";
import { patch } from "./patch";


export const app = ({ root, initialState, view, actions }) => {
  const $el = document.querySelector(root);
  // let newNode = view(initialState);
  let newNode;
  let oldNode;
  let state = initialState;

  const dispatcher = function (actions) {
    const dispathedActions = {};

    for (const key in actions) {
      const action = actions[key];

      dispathedActions[key] = (option) => {
        setState(action(state, option));
        renderDOM();
      };
    }
    return dispathedActions;
  };

  const setState = function (newState) {
    if (state !== newState) {
      state = newState;
    }
  };

  const updateNode = function () {
    newNode = view(state, dispatcher(actions));
  };

  const renderDOM = function () {
    updateNode();
    // $el.appendChild(render(newNode));
    patch($el, newNode, oldNode);
    oldNode = newNode;
  };

  renderDOM();
};
