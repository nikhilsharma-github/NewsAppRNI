import React, { Component } from 'react'

import spinner from './spinner.gif';

export default class Spinner extends Component {
    render() {
        return (
            <div className="text-center spinnerStyling">
                  <img src={spinner} className="spinnerStyling" alt="Loading_Please Wait" />
            </div>
        )
    }
}
