import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51J7lnKIZs4u8yeR3dV0usr6QpFCBykdTLvjzNjarQP6sdn5k2yGywPxJ8XeMUUmzaFbnJzt4up53BIkBL6lAOUHk00YBGjEu98";

  const onToken = (token) => {
    console.log(token);
    alert("payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Odin Store"
      billingAddress
      shippingAddress
      image="https://www.odin.com.br/wp-content/uploads/2018/08/cropped-Odin_shield_512px.png"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton
