import React from 'react';
import { useParams } from 'react-router';

const Subredit = () => {

    const {subredit} = useParams();

    return (
        <div>
            <h2>You are visiting { subredit } Subredit</h2>
        </div>
    )
}

export default Subredit
