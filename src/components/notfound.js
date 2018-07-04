import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <section>
            <div>
                <h4>Requested page not found. Return <Link to="/">Home</Link> </h4>
            </div>
        </section>
    )
}

export default NotFound;