import React from 'react';
import { CircleCheckBig } from 'lucide-react';

const PricingFeatures = ({featur}) => {
    return (
        <p className='flex'> <CircleCheckBig className='mr-2'></CircleCheckBig> {featur}</p>
    );
};

export default PricingFeatures;