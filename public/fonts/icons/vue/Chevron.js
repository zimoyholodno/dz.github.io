import { defineComponent, h } from 'vue';

export const Chevron = defineComponent({
  name: 'Chevron',
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
        h('path', {"d": "M368 244.288L420.352 192l285.184 285.056c4.544 4.608 8.192 9.984 10.688 16 2.496 5.952 3.776 12.416 3.776 18.88 0 6.464-1.28 12.864-3.776 18.88-2.496 5.952-6.144 11.392-10.688 16L420.352 832l-52.288-52.288L635.712 512 368 244.288z", "fillRule": "evenodd"})
      ]
    );
  }
});
