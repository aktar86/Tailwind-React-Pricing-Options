import React from 'react';

const Link = ({route}) => {
    return (
        <li className='px-5 py-2 hover:bg-white md:hover:text-black '><a key={route.id} href={route.pathUrl}>{route.pathName}</a></li>
    );
};

export default Link;