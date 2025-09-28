import React, { use } from 'react';
import PricingCard from './PricingCard';

const Pricing = ({pricingDataPromise}) => {
    const pricingData = use(pricingDataPromise);
    // console.log(pricingData);
    return (
        <div className='mx-100 mt-20'>
            <h2 className='text-center text-4xl mb-10 font-bold'>Get Our Membership</h2>
            <div className='grid grid-cols-3 gap-5'>
                {
                    pricingData.map(pricing => <PricingCard key={pricing.id} pricing={pricing}></PricingCard>)
                }
            </div>
        </div>
    );
};

export default Pricing;