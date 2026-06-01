import { defineComponent, h } from 'vue';

export const ArrowDown = defineComponent({
  name: 'ArrowDown',
  props: {
    class: {
      type: String,
      default: ''
    }
  },
  setup(props, { attrs }) {
    return () => h(
      'svg',
      {
        viewBox: '0 0 20 20',
        
        class: `icon ${props.class}`,
        ...attrs
      },
      [
        h('path', {"d": "M512 896L128 128h768zm0-214.656L740.672 224H283.328z", "fillRule": "evenodd"})
      ]
    );
  }
});
