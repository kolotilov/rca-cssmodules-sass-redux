import React, { PureComponent } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as exampleActions from './redux/modules/example'

class App extends PureComponent {

  render() {
    return (
      <div>React Create App + CSS Modules + Sass + Redux + thunk </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
      ...exampleActions
  }, dispatch)
})

const mapStateToProps = state => ({
    ...state
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
