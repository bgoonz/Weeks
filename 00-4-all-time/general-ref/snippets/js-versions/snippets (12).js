{
  Import react: {
    prefix: "imr",
    body: ["import React from 'react';"],
    description: "Import react"
  },
  Import react as object: {
    prefix: "imro",
    body: ["import * as React from 'react';"],
    description: "Import react as object"
  },
  Import react component: {
    prefix: "imrc",
    body: ["import React, { Component } from 'react';"],
    description: "Import react component"
  },
  Import react pure component: {
    prefix: "imrpc",
    body: ["import React, { PureComponent } from 'react';"],
    description: "Import react PureComponent"
  },
  Import React-Native Element: {
    prefix: "imrn",
    body: "import { $1 } from 'react-native';",
    description: "Import React-Native Element"
  },
  Import PropTypes: {
    prefix: "impt",
    body: ["import PropTypes from 'prop-types';"],
    description: "Import PropTypes"
  },
  Import Styled-Components: {
    prefix: "ims",
    body: "import styled from 'styled-components';",
    description: "Import Styled-Components"
  },
  Import Styled-Components Native: {
    prefix: "imsn",
    body: "import styled from 'styled-components/native';",
    description: "Import Styled-Components"
  },
  Redux constant: {
    prefix: "rct",
    body: "export const $1 = '$1';"
  },
  Print to console: {
    prefix: "cl",
    body: ["console.log($1)"],
    description: "Log output to console"
  },
  Export default: {
    prefix: "ed",
    body: ["export default $1;"],
    description: "Export default"
  },
  EslintDisableLine: {
    prefix: "edl",
    body: "// eslint-disable-line",
    description: "Eslint Disable Line"
  },
  EslintDisableNextLine: {
    prefix: "ednl",
    body: "// eslint-disable-next-line",
    description: "Eslint Disable Next Line"
  },
  Comment Block: {
    prefix: "cm",
    body: ["/**", " * ${1}", " */"]
  },
  Stateless Component: {
    prefix: "sl",
    body: [
      "const ${TM_FILENAME_BASE} = () => (",
      "\t$1",
      ");",
      "",
      "export default ${TM_FILENAME_BASE};"
    ]
  },
  Stateless Component Return: {
    prefix: "slr",
    body: [
      "const ${TM_FILENAME_BASE} = () => {",
      "\treturn (",
      "\t\t$1",
      "\t);",
      "}",
      "",
      "export default ${TM_FILENAME_BASE};"
    ]
  },
  Redux Reducer: {
    prefix: "rrd",
    body: [
      "export default (state = $1, action) => {",
      "\tswitch (action.type) {",
      "\t\tcase $2:",
      "\t\t\t$3",
      "\t\tdefault:",
      "\t\t\treturn state;",
      "\t}",
      "};"
    ]
  },
  Redux Pure Function: {
    prefix: "rpf",
    body: [
      "export const $1 = '$1';",
      "",
      "export function $2($3) {",
      "\treturn {",
      "\t\ttype: $1,",
      "\t\t$3",
      "\t}",
      "}"
    ]
  },
  Redux Pure Function Const: {
    prefix: "rpc",
    body: [
      "export const $1 = '$1';",
      "",
      "export const $2 = $3 => ({",
      "\ttype: $1,",
      "\t$3",
      "});"
    ]
  },
  Comment Big Block: {
    prefix: "cmmb",
    body: [
      "/**",
      "|--------------------------------------------------",
      "| $1",
      "|--------------------------------------------------",
      "*/"
    ]
  },
  ComponentWillMount: {
    prefix: "cwm",
    body: ["componentWillMount() {", "\t$1", "}"]
  },
  ComponentWillUpdate: {
    prefix: "cwu",
    body: ["componentWillUpdate() {", "\t$1", "}"]
  },
  ComponentDidUpdate: {
    prefix: "cdu",
    body: ["componentDidUpdate(prevProps, prevState) {", "\t$1", "}"]
  },
  ShouldComponentUpdate: {
    prefix: "scu",
    body: [
      "shouldComponentUpdate(nextProps, nextState, nextContext) {",
      "\t $1",
      "}"
    ]
  },
  ComponentWillReceiveProps: {
    prefix: "cwrp",
    body: ["componentWillReceiveProps(nextProps) {", "\t$1", "}"]
  },
  Comment big line: {
    prefix: "cbl",
    body: "// ============================================================"
  },
  Component Class: {
    prefix: "ccs",
    body: [
      "class ${TM_FILENAME_BASE} extends Component {",
      "\tstate = { $1 }",
      "\trender() {",
      "\t\treturn (",
      "\t\t\t$2",
      "\t\t);",
      "\t}",
      "}",
      "",
      "export default ${TM_FILENAME_BASE};"
    ]
  },
  Component Class With Constructor: {
    prefix: "cccs",
    body: [
      "class ${TM_FILENAME_BASE} extends Component {",
      "\tconstructor(props) {",
      "\t\tsuper(props);",
      "\t\tthis.state = { $1 };",
      "\t}",
      "\trender() {",
      "\t\treturn (",
      "\t\t\t$2",
      "\t\t);",
      "\t}",
      "}",
      "",
      "export default ${TM_FILENAME_BASE};"
    ]
  },
  Component Class FlowType: {
    prefix: "ccsf",
    body: [
      "type P = {",
      "\t$1",
      "};",
      "",
      "type S = {",
      "\t$2",
      "};",
      "",
      "class ${TM_FILENAME_BASE} extends Component<P, S> {",
      "\tstate = { $3 }",
      "\trender() {",
      "\t\treturn (",
      "\t\t\t$4",
      "\t\t);",
      "\t}",
      "}",
      "",
      "export default ${TM_FILENAME_BASE};"
    ]
  },
  PureComponent Class: {
    prefix: "pcs",
    body: [
      "class ${TM_FILENAME_BASE} extends PureComponent {",
      "\tstate = { $1 }",
      "\trender() {",
      "\t\treturn (",
      "\t\t\t$3",
      "\t\t);",
      "\t}",
      "}",
      "",
      "export default ${TM_FILENAME_BASE};"
    ]
  },
  PureComponent Class With Constructor: {
    prefix: "pccs",
    body: [
      "class ${TM_FILENAME_BASE} extends PureComponent {",
      "\tconstructor(props) {",
      "\t\tsuper(props);",
      "\t\tthis.state = { $1 };",
      "\t}",
      "\trender() {",
      "\t\treturn (",
      "\t\t\t$2",
      "\t\t);",
      "\t}",
      "}",
      "",
      "export default ${TM_FILENAME_BASE};"
    ]
  },
  PureComponent Class FlowType: {
    prefix: "pcsf",
    body: [
      "type P = {",
      "\t$1",
      "};",
      "",
      "type S = {",
      "\t$2",
      "};",
      "",
      "class ${TM_FILENAME_BASE} extends PureComponent<P, S> {",
      "\tstate = { $3 }",
      "\trender() {",
      "\t\treturn (",
      "\t\t\t$5",
      "\t\t);",
      "\t}",
      "}",
      "",
      "export default ${TM_FILENAME_BASE};"
    ]
  },
  Component Class With Redux: {
    prefix: "ccsr",
    body: [
      "class ${TM_FILENAME_BASE} extends Component {",
      "\tstate = { $1 }",
      "\trender() {",
      "\t\treturn (",
      "\t\t\t$2",
      "\t\t);",
      "\t}",
      "}",
      "",
      "export default connect($4, $5)(${TM_FILENAME_BASE});"
    ]
  },
  Export default Component Class: {
    prefix: "edccs",
    body: [
      "export default class ${TM_FILENAME_BASE} extends Component {",
      "\tstate = { $1 }",
      "\trender() {",
      "\t\treturn (",
      "\t\t\t$3",
      "\t\t);",
      "\t}",
      "}"
    ]
  },
  Connect Redux: {
    prefix: "crr",
    body: "import { connect } from 'react-redux';"
  },
  ComponentDidMount: {
    prefix: "cdm",
    body: ["componentDidMount() {", "\t$1", "}"]
  },

  Create Context: {
    prefix: "cct",
    body: [
      "const $1Context = createContext($2);",
      "",
      "class $1Provider extends Component {",
      "\tstate = {",
      "\t\t$3",
      "\t}",
      "",
      "\trender() {",
      "\t\treturn (",
      "\t\t\t<$1Context.Provider value={{ state: { $3 }, actions: {} }}>",
      "\t\t\t\t{this.props.children}",
      "\t\t\t</$1Context.Provider>",
      "\t\t);",
      "\t}",
      "}",
      "",
      "export default $1Provider;"
    ]
  },

  getDerivedStateFromProps: {
    prefix: "gds",
    body: [
      "static getDerivedStateFromProps(nextProps, prevState) {",
      "\t$1",
      "}"
    ]
  },

  StyleSheet Style: {
    prefix: "rnss",
    body: ["const styles = StyleSheet.create({", "\t$1", "})"]
  },
  EStyleSheet Style: {
    prefix: "ess",
    body: [
      "import EStyleSheet from 'react-native-extended-stylesheet';",
      "",
      "const styles = EStyleSheet.create({",
      "\t$1",
      "});",
      "",
      "export default styles;"
    ]
  },
  Stateless Component Function: {
    prefix: "slc",
    body: ["function $1($2) {", "\t$3", "}", "", "export default $1;"]
  },
  Styled Component: {
    prefix: "styc",
    body: ["const $1 = styled.$2`", "\t$3", "`"]
  },
  Export Styled Component: {
    prefix: "estyc",
    body: ["export const $1 = styled.$2`", "\t$3", "`"]
  },
  Export default Styled Component: {
    prefix: "edstyc",
    body: ["export default styled.$1`", "\t$2", "`"]
  },
  ComponentWillUnmount: {
    prefix: "cwum",
    body: ["componentWillUnmount() {", "\t$1", "}"]
  },
  ComponentDidCatch: {
    prefix: "cdc",
    body: ["componentDidCatch(error, info) {", "\t$1", "}"]
  },
  Console Log: {
    prefix: "log",
    body: [
      "console.log('====================================');",
      "console.log($1);",
      "console.log('====================================');"
    ]
  },
  Test: {
    prefix: "tt",
    body: ["test('$1', () => {", "\t$2", "});"]
  },
  Test Describe: {
    prefix: "tdesc",
    body: ["describe('$1', () => {", "\t$2", "});"]
  },
  Test it: {
    prefix: "tit",
    body: ["it('should $1', $2($3) => {", "\t$4", "});"]
  },
  FlowFixMe: {
    prefix: "ffm",
    body: "// \\$FlowFixMe"
  },
  React-Native Story: {
    prefix: "rnstory",
    body: [
      "import React from 'react';",
      "import { storiesOf } from '@storybook/react-native';",
      "",
      "storiesOf('$1', module)",
      "\t.add('default', () => $2);"
    ]
  },
  React Story: {
    prefix: "rstory",
    body: [
      "import React from 'react';",
      "import { storiesOf } from '@storybook/react';",
      "",
      "storiesOf('$1', module)",
      "\t.add('default', () => $2);"
    ]
  },
  React useEffect: {
    prefix: "rue",
    body: [
      "React.useEffect(() => {",
      "\t$1",
      "}, []);"
    ]
  },
  React Stateless Function: {
    prefix: "rsf",
    body: [
      "import React from 'react';",
      "",
      "function ${TM_FILENAME_BASE}(props) {",
      "\treturn (",
      "\t\t<div>",
      "\t\t\t",
      "\t\t</div>",
      "\t);",
      "}",
      "",
      "export default ${TM_FILENAME_BASE};"
    ],
    description: "Creates a stateless React component as a named function without PropTypes (Reactjs code snippet)"
  }
}
