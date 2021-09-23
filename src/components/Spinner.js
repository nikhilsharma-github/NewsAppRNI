import React, { Component } from 'react'

import spinner from './spinner.gif';

export default class Spinner extends Component {
    render() {
        return (
            <div className="text-center bg-secondary">
                  <img src={spinner} alt="Loading_Please Wait" />
            </div>
        )
    }
}
