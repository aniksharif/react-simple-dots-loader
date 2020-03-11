import React, { Component } from 'react'

import SimpleLoader from 'react-simple-dots-loader'

export default class App extends Component {
  render () {
    return (
      <div>
        <SimpleLoader color='red' />
      </div>
    )
  }
}
