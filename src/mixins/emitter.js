// ref: https://github.com/ElemeFE/element/blob/dev/src/mixins/emitter.js
function broadcast(componentName, eventName, params) {
  this.$children.forEach((child) => {
    const name = child.$options.componentName;

    if (name === componentName) {
      // eslint-disable-next-line
      child.$emit.apply(child, [eventName].concat(params));
    } else {
      broadcast.apply(child, [componentName, eventName].concat([params]));
    }
  });
}

export default {
  methods: {
    dispatch(componentName, eventName, params) {
      let parent = this.$parent || this.$root;
      let name = parent.$options.componentName;

      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;

        if (parent) {
          name = parent.$options.componentName;
        }
      }
      if (parent) {
        // eslint-disable-next-line
        parent.$emit.apply(parent, [eventName].concat(params));
      }
    },
    broadcast(componentName, eventName, params) {
      broadcast.call(this, componentName, eventName, params);
    },
  },
};
