import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price *100;
    const publishableKey ="pk_test_51HWorRAYjgz9bSV0RAZ47xSxk3GWTjLplnPsfwD4BTRMzD7ZSIYYODBxSQgwlnvcY0fj6JgrTfrlVI13QgolVFZz00tOYdbg1L"

   const onToken = token =>{
        console.log(token)
        alert("payment successful")
    }
    
    return(
        <StripeCheckout 
        label="Pay now"
        name="Pizza"
        billingAddress
        shippingAddress
        image="https://www.flaticon.com/svg/static/icons/svg/1404/1404945.svg"
        description={`Your total is $${price}`}
        amount ={priceForStripe}
        panelLabel="Pay now"
        token={onToken}
        stripeKey = {publishableKey}
        >

        </StripeCheckout>
    )


}

export default StripeCheckoutButton;