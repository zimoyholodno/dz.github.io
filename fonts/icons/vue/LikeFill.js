import { defineComponent, h } from 'vue';

export const LikeFill = defineComponent({
  name: 'LikeFill',
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
        h('path', {"d": "M512 921.984c-4.736 0-9.387-.94-13.78-2.73-4.353-1.793-8.32-4.48-11.65-7.81L142.977 567.852c-105.26-105.258-105.26-276.522 0-381.738C244.01 84.95 406.06 80.896 512 174.122c105.9-93.14 267.904-89.215 369.067 11.99 105.216 105.216 105.216 276.523 0 381.74L537.472 911.444c-3.37 3.328-7.34 6.016-11.69 7.808-4.353 1.792-9.046 2.73-13.782 2.73z", "fillRule": "evenodd"})
      ]
    );
  }
});
