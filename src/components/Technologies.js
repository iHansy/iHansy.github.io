import React, { useState } from 'react';

function Technologies(props) {

    // Using hooks we're creating local state
    const [state, setState] = useState('Starter state');

    return (
       <div>
           <h1>Technologies go here</h1>
       </div>
    );
};

export default Technologies;