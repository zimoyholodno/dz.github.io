import { defineComponent, h } from 'vue';

export const Cross = defineComponent({
  name: 'Cross',
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
        h('path', {"d": "M724.693 238.976c15.83-15.83 41.515-15.83 57.344 0l2.987 2.987c15.83 15.83 15.83 41.514 0 57.344L299.307 785.024c-15.83 15.83-41.515 15.83-57.344 0l-2.987-2.987c-15.83-15.83-15.83-41.514 0-57.344zm60.33 485.717c15.83 15.83 15.83 41.515 0 57.344l-2.986 2.987c-15.83 15.83-41.514 15.83-57.344 0L238.976 299.307c-15.83-15.83-15.83-41.515 0-57.344l2.987-2.987c15.83-15.83 41.514-15.83 57.344 0z", "fillRule": "evenodd"})
      ]
    );
  }
});
