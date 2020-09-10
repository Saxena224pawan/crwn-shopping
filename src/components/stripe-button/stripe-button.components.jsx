import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
const onToken =token =>{
    console.log(token);
    alert("Payment Successful");
}
const StripeCheckoutButton = ({price})=> {
    const priceForStripe = price *100;
    const publishableKey ="pk_test_51HPMTECfeUEuRd9m8N6KUAkL6TbbSAAIylM4kznM0ivtb7Bgjfslwfa5nbRxnXsy6Ba6i8slQfpJfCrDW3nUfFLH00eiNJCYTu";
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