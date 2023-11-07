import { createTemplate, createReactivity, createLifecycle } from '@my-monorepo/ui-library';
import { init } from 'snabbdom/build/init';
import { h } from 'snabbdom/build/h';

const patch = init([]);

const [state, updateState] = createReactivity();
const mount = createLifecycle(() => console.log('Component mounted'));

// interface State {
//   count: number;
// }

const template = createTemplate(((state =  { count: 0 }) => {
  return h('div', [
    h('h1', state.count),
    h('button', { on: { click : () => updateState({ count : state.count + 1 }) } }, 'Add'),
  ]);
}));




let oldVNode: any = null; // Initialize with null
let appElement = document.getElementById('app');

// Mounting point
if (!appElement) {
  appElement = document.createElement('div');
  appElement.id = 'app';
  document.body.appendChild(appElement);
}

// const [reactiveState, updateState] = createReactivity();


const render = () => {
  const newVNode = template(state, {});
  // const newVNode = template(updateState);

  if (!oldVNode) {
    if (appElement) {
      oldVNode = patch(appElement, newVNode);
    } else {
      // Handle the case where appElement is null
      console.error('appElement is null');
    }
    // oldVNode = patch(appElement, newVNode);
  } else {
    patch(oldVNode, newVNode);
  }

  // patch(oldVNode, newVNode);
  // oldVNode = newVNode;
};

// let oldVNode = template(state, {});
// mount();
render();


