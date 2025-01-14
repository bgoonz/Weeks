{
  import: {
    prefix: "imp",
    body: "import ${2:name} from '${1:module}';$0"
  },
  importDestructing: {
    prefix: "imd",
    body: "import { $2 } from '${1:module}';$0"
  },
  Import react: {
    prefix: "imr",
    body: [
      "import React from 'react';",
      ""
    ]
  },
  Import PropTypes: {
    prefix: "ipt",
    body: [
      "import PropTypes from 'prop-types';"
    ]
  },
  Comment Block: {
    prefix: "com",
    body: [
      "/**",
      " * ${1}",
      " */"
    ]
  },
  consoleLog: {
    prefix: "clg",
    body: "console.log($1)$0"
  },
  reactClassComponent: {
    prefix: "rcc",
    body: [
      "import React, { Component } from 'react';",
      "",
      "class $TM_FILENAME_BASE extends Component {",
      "\trender() {",
      "\t\treturn (",
      "\t\t\t<div>",
      "\t\t\t\t$1",
      "\t\t\t</div>",
      "\t\t);",
      "\t}",
      "}",
      "",
      "export default $TM_FILENAME_BASE;",
      ""
    ]
  },
  reactClassComponentPropTypes: {
    prefix: "rccp",
    body: [
      "import React, { Component } from 'react';",
      "import PropTypes from 'prop-types';",
      "",
      "",
      "class $TM_FILENAME_BASE extends Component {",
      "\trender() {",
      "\t\treturn (",
      "\t\t\t<div>",
      "\t\t\t\t$1",
      "\t\t\t</div>",
      "\t\t);",
      "\t}",
      "}",
      "",
      "",
      "$TM_FILENAME_BASE.propTypes = {",
      "$0",
      "};",
      "",
      "",
      "export default $TM_FILENAME_BASE;",
      ""
    ]
  },
  reactFunction: {
    prefix: "rfc",
    body: [
      "import React from 'react';",
      "",
      "const $TM_FILENAME_BASE = () => {",
      "\treturn (",
      "\t\t<div>",
      "\t\t\t$1",
      "\t\t</div>",
      "\t);",
      "}",
      "",
      "export default $TM_FILENAME_BASE;",
      ""
    ]
  },
  reactFunctionProps: {
    prefix: "rfcp",
    body: [
      "import React from 'react';",
      "import PropTypes from 'prop-types';",
      "",
      "",
      "const $TM_FILENAME_BASE = () => {",
      "\treturn (",
      "\t\t<div>",
      "\t\t\t$1",
      "\t\t</div>",
      "\t);",
      "};",
      "",
      "",
      "$TM_FILENAME_BASE.propTypes = {",
      "$0",
      "};",
      "",
      "",
      "export default $TM_FILENAME_BASE;",
      ""
    ]
  },
  classConstructor: {
    prefix: "con",
    body: [
      "constructor(props) {",
      "\tsuper(props);",
      "\t$1",
      "}",
      ""
    ]
  },
  emptyState: {
    prefix: "est",
    body: [
      "this.state = {",
      "\t$1",
      "};"
    ],
    description: "Creates empty state object. To be used in a constructor."
  },
  componentDidMount: {
    prefix: "cdm",
    body: [
      "componentDidMount() {",
      "\t$1",
      "}",
      ""
    ],
    description: "Invoked once, only on the client (not on the server), immediately after the initial rendering occurs."
  },
  shouldComponentUpdate: {
    prefix: "scu",
    body: [
      "shouldComponentUpdate(nextProps, nextState) {",
      "\t$1",
      "}",
      ""
    ],
    description: "Invoked before rendering when new props or state are being received. "
  },
  componentDidUpdate: {
    prefix: "cdup",
    body: [
      "componentDidUpdate(prevProps, prevState) {",
      "\t$1",
      "}",
      ""
    ],
    description: "Invoked immediately after the component's updates are flushed to the DOM."
  },
  componentWillUnmount: {
    prefix: "cwun",
    body: [
      "componentWillUnmount() {",
      "\t$1",
      "}",
      ""
    ],
    description: "Invoked immediately before a component is unmounted from the DOM."
  },
  getSnapshotBeforeUpdate: {
    prefix: "gsbu",
    body: [
      "getSnapshotBeforeUpdate(prevProps, prevState) {",
      "\t$0",
      "}",
      ""
    ],
    description: "Invoked right before the most recently rendered output is committed to e.g. the DOM. It enables your component to capture current values"
  },
  getDerivedStateFromProps: {
    prefix: "gdsfp",
    body: [
      "static getDerivedStateFromProps(nextProps, prevState) {",
      "\t$0",
      "}",
      ""
    ],
    description: "Invoked after a component is instantiated as well as when it receives new props."
  },
  componentDidCatch: {
    prefix: "cdc",
    body: [
      "componentDidCatch(error, info) {",
      "\t$0",
      "}",
      ""
    ],
    description: "Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them."
  },
  componentSetStateObject: {
    prefix: "sst",
    body: "this.setState($1)",
    description: "Performs a shallow merge of nextState into current state"
  },
  componentSetStateFunc: {
    prefix: "ssf",
    body: [
      "this.setState((state, props) => { return { $1 }});",
      ""
    ],
    description: "Performs a shallow merge of nextState into current state"
  },
  componentProps: {
    prefix: "props",
    body: "this.props.$1",
    description: "Access component's props"
  },
  componentState: {
    prefix: "state",
    body: "this.state.$1",
    description: "Access component's state"
  },
  bindThis: {
    prefix: "bnd",
    body: "this.$1 = this.$1.bind(this);",
    description: "Binds the this of a method. To be used inside a constructor"
  },
  propTypeArray: {
    prefix: "pta",
    body: "PropTypes.array,",
    description: "Array prop type"
  },
  propTypeArrayRequired: {
    prefix: "ptar",
    body: "PropTypes.array.isRequired,",
    description: "Array prop type required"
  },
  propTypeObject: {
    prefix: "pto",
    body: "PropTypes.object,",
    description: "Object prop type"
  },
  propTypeObjectRequired: {
    prefix: "ptor",
    body: "PropTypes.object.isRequired,",
    description: "Object prop type required"
  },
  propTypeBool: {
    prefix: "ptb",
    body: "PropTypes.bool,",
    description: "Bool prop type"
  },
  propTypeBoolRequired: {
    prefix: "ptbr",
    body: "PropTypes.bool.isRequired,",
    description: "Bool prop type required"
  },
  propTypeFunc: {
    prefix: "ptf",
    body: "PropTypes.func,",
    description: "Func prop type"
  },
  propTypeFuncRequired: {
    prefix: "ptfr",
    body: "PropTypes.func.isRequired,",
    description: "Func prop type required"
  },
  propTypeNumber: {
    prefix: "ptn",
    body: "PropTypes.number,",
    description: "Number prop type"
  },
  propTypeNumberRequired: {
    prefix: "ptnr",
    body: "PropTypes.number.isRequired,",
    description: "Number prop type required"
  },
  propTypeString: {
    prefix: "pts",
    body: "PropTypes.string,",
    description: "String prop type"
  },
  propTypeStringRequired: {
    prefix: "ptsr",
    body: "PropTypes.string.isRequired,",
    description: "String prop type required"
  },
  propTypeNode: {
    prefix: "ptnd",
    body: "PropTypes.node,",
    description: "Anything that can be rendered: numbers, strings, elements or an array"
  },
  propTypeNodeRequired: {
    prefix: "ptndr",
    body: "PropTypes.node.isRequired,",
    description: "Anything that can be rendered: numbers, strings, elements or an array required"
  },
  propTypeElement: {
    prefix: "ptel",
    body: "PropTypes.element,",
    description: "React element prop type"
  },
  propTypeElementRequired: {
    prefix: "ptelr",
    body: "PropTypes.element.isRequired,",
    description: "React element prop type required"
  },
  propTypeInstanceOf: {
    prefix: "pti",
    body: "PropTypes.instanceOf($1),",
    description: "Is an instance of a class prop type"
  },
  propTypeInstanceOfRequired: {
    prefix: "ptir",
    body: "PropTypes.instanceOf($1).isRequired,",
    description: "Is an instance of a class prop type required"
  },
  propTypeEnum: {
    prefix: "pte",
    body: "PropTypes.oneOf(['$1']),",
    description: "Prop type limited to specific values by treating it as an enum"
  },
  propTypeEnumRequired: {
    prefix: "pter",
    body: "PropTypes.oneOf(['$1']).isRequired,",
    description: "Prop type limited to specific values by treating it as an enum required"
  },
  propTypeOneOfType: {
    prefix: "ptet",
    body: [
      "PropTypes.oneOfType([",
      "\t$1",
      "]),"
    ],
    description: "An object that could be one of many types"
  },
  propTypeOneOfTypeRequired: {
    prefix: "ptetr",
    body: [
      "PropTypes.oneOfType([",
      "\t$1",
      "]).isRequired,"
    ],
    description: "An object that could be one of many types required"
  },
  propTypeArrayOf: {
    prefix: "ptao",
    body: "PropTypes.arrayOf($1),",
    description: "An array of a certain type"
  },
  propTypeArrayOfRequired: {
    prefix: "ptaor",
    body: "PropTypes.arrayOf($1).isRequired,",
    description: "An array of a certain type required"
  },
  propTypeObjectOf: {
    prefix: "ptoo",
    body: "PropTypes.objectOf($1),",
    description: "An object with property values of a certain type"
  },
  propTypeObjectOfRequired: {
    prefix: "ptoor",
    body: "PropTypes.objectOf($1).isRequired,",
    description: "An object with property values of a certain type required"
  },
  propTypeShape: {
    prefix: "ptsh",
    body: [
      "PropTypes.shape({",
      "\t$1",
      "}),"
    ],
    description: "An object taking on a particular shape"
  },
  propTypeShapeRequired: {
    prefix: "ptshr",
    body: [
      "PropTypes.shape({",
      "\t$1",
      "}).isRequired,"
    ],
    description: "An object taking on a particular shape required"
  },
  describeBlock: {
    prefix: "describe",
    body: [
      "describe('$1', () => {",
      "\t$0",
      "});",
      ""
    ],
    description: "Testing `describe` block"
  },
  testBlock: {
    prefix: "test",
    body: [
      "test('$1', () => {",
      "\t$2",
      "});",
      "$0"
    ],
    description: "Testing `test` block"
  },
  itBlock: {
    prefix: "it",
    body: [
      "it('$1', () => {",
      "\t$2",
      "});",
      "$0"
    ],
    description: "Testing `it` block"
  },
  useState: {
    prefix: "useState",
    body: [
      "const [${1:state}, set${1/(.*)/${1:/capitalize}/}] = useState(${2:initialState});"
    ]
  },
  useEffect: {
    prefix: "useEffect",
    body: [
      "useEffect(() => {",
      "\t${1:effect}",
      "\treturn () => {",
      "\t\t${2:cleanup}",
      "\t};",
      "}, [${3:input}]);"
    ]
  },
  useContext: {
    prefix: "useContext",
    body: [
      "const ${1:context} = useContext(${2:contextValue});"
    ]
  }
}
