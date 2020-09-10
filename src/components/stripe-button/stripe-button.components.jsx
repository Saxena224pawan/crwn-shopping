import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
const onToken =token =>{
    console.log(token);
    alert("Payment Successful");
}
const StripeCheckoutButton = ({price})=> {
    const priceForStripe = price *100;
    const publishableKey =process.env.STRIPE_KEY;
    return(
    <StripeCheckout
    label='Pay Now'
    name="CRWN Shopping"
    billingAddress
    shippingAddress
    image='https://svgshare.com/i/CUz.svg'
    amount = {priceForStripe}
    panelLabel="Pay Now"
    token ={onToken}
    stripeKey={publishableKey}

    />
    );};

    export default StripeCheckoutButton;