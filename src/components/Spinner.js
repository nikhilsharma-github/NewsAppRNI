import React from 'react'

import spinner from './spinner.gif';

const Spinner=()=> {
    
        return (
            <div className="text-center spinnerStyling">
                  <img src={spinner} className="spinnerStyling" alt="Loading_Please Wait" />
            </div>
        )
    
}

export default Spinner;
