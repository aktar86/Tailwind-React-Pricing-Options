import React from 'react';

const Link = ({route}) => {
    return (
        <li className='mr-10'><a href={route.pathUrl}>{route.pathName}</a></li>
    );
};

export default Link;