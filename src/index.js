import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

export default class SimpleLoader extends Component {
  static propTypes = {
    color: PropTypes.string
  }

  render() {
    const {
      color
    } = this.props

    return (
      <div className={styles.dribble}>
        <span className={styles.point} style={{backgroundColor: color}} />
        <div className={styles.points} >
          <span style={{backgroundColor: color}} />
          <span style={{backgroundColor: color}} />
          <span style={{backgroundColor: color}} />
        </div>
      </div>
    )
  }
}
