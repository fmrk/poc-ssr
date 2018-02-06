import React from 'react'

import { increment, loadData, startClock } from '../actions'
import { withReduxSaga } from '../store'
import Comics from '../components/comics'

class App extends React.PureComponent {
  render () {
    return <Comics />
  }
}

export default withReduxSaga(App)
