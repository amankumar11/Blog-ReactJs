import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
          <div className="not-found">
              <h2>Sorry</h2>
              <p>page cannot be found</p>
              <Link to="/">back to homepage...</Link>
            </div>  
        </div>
    )
}

export default NotFound;

