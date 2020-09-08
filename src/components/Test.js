/* eslint-disable */
import Test2 from "./Test2.js";
let classMap = {
    Test2: Test2.base
}
export default {
  methods: {
    getCircleRender(h) {
      return [
        h("h1", ["this is h1", h("div", "this is a div"), h(Test2.base, {})]),
        h("h3", "this is h3"),
      ];
    },
    recurRender(h, data) {
        if(typeof(data) === 'string') {
            return data;
        }
        if(Array.isArray(data)) {
           return data.map((item) => {
            return this.recurRender(h, item);
           }); 
        }
        let childrenArg = [];
        if(data.children) {
            for(let i = 0; i < data.children.length; i++) {
                let res = this.recurRender(h, data.children[i]);
                childrenArg.push(res);
            }
        }
        let type = data.type;
        if(type === 'native') {
            return h(data.tagName, childrenArg);
        } else {
            return h(classMap[data.tagName], childrenArg);
        }
    },
    createComp(h) {
        let data = this.getTestJson();
        return this.recurRender(h, data);
    },
    getTestJson() {
        return [{
            tagName: "h1",
            type: 'native',
            props: {},
            children: [
                'sdsdsdsdsd',
                {
                    tagName: 'Test2',
                    type: 'custom',
                    props: {},
                    children: [
                        'this is a test2 child'
                    ]
                },
                {
                    tagName: 'Test2',
                    type: 'custom',
                    props: {},
                    children: [
                        'this is a test2 child'
                    ]
                },
                'dflksdvlkdnvdofv'
            ]
        }, 'this is array 2']
    }
  },
  render(h) {
    return (
      <div>
        sdsdsdsdsd
        {/* <Test2.base />
        {[1, 2, 3, 4, 5].map((el, index) => {
          return <span>{index}</span>;
        })}
        {this.getCircleRender(h).map((item) => {
          return item;
        })}
         */}
         {
             this.createComp(h)
         }
      </div>
    ); // no need to register Todo via components option
  },
};
