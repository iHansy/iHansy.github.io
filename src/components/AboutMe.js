import React, { useState } from 'react';

function AboutMe(props) {

    // Using hooks we're creating local state
    const [state, setState] = useState('Starter state');

    return (
        <div className="aboutme-container">
            <div className="aboutme-img-container">
                <img className="aboutme-img" src="headshot-4.jpg" alt="Headshot of Hans Accola" width="350" height="350"></img>
            </div>
            <div className="aboutme-description">
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
            </div>
        </div>
    );
};

export default AboutMe;