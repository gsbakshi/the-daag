import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import stripePublishableKey from './stripe.publishable-key';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;

    // Add you stripe publishable key from the stripe dashboard
    const publishableKey = stripePublishableKey;

    const onToken = token => {
        console.log(token);
        alert('Payment Successful!');
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='The Daag Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={ `Your total is $${price}` }
            amount={ priceForStripe }
            panelLabel='Pay Now'
            token={ onToken }
            stripeKey={ publishableKey }
        />
    );
};

export default StripeCheckoutButton;