/* eslint-disable */
export default {
  base: {
    render(h) {
      return <div>this is test2
          <div>{this.$slots.default}</div>
      </div>; // no need to register Todo via components option
    }
  }
};
