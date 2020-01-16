import React from 'react';


export default (props) =>
<div><img src={  `url(${props.bookcover})` } />
<p>{props.booktitle}</p>
</div>
;