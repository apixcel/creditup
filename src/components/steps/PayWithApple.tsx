import {
  ApplePayButton,
  ButtonType,
  Edges,
  Environment,
  Locale,
  Scope,
  SupportedNetworks,
  ThemeMode,
} from "@tap-payments/apple-pay-button";

const PayWithApple = () => {
  return (
    <ApplePayButton
      // The public Key provided by Tap
      publicKey={"pk_test_xxxxxxxxxxxxxxxzh"}
      //The environment of the SDK and it can be one of these environments
      environment={Environment.Development}
      //to enable the debug mode
      debug
      merchant={{
        //  The merchant domain name
        domain: "example.com",
        //  The merchant identifier provided by Tap
        id: "1xxxxx8",
      }}
      transaction={{
        // The amount to be charged
        amount: "12",
        // The currency of the amount
        currency: "KWD",
      }}
      // The scope of the SDK and it can be one of these scopes:
      // [TapToken,AppleToken], by default it is TapToken)
      scope={Scope.TapToken}
      acceptance={{
        // The supported networks for the Apple Pay button and it
        // can be one of these networks: [Mada,Visa,MasterCard], by default
        // we bring all the supported networks from tap merchant configuration
        supportedBrands: [
          SupportedNetworks.Mada,
          SupportedNetworks.Visa,
          SupportedNetworks.MasterCard,
        ],
        supportedCardsWithAuthentications: ["3DS"],
      }}
      // The billing contact information
      customer={{
        id: "cus_xxx",
        name: [
          {
            //"en or ar",
            lang: Locale.EN,
            // "First name of the customer.",
            first: "test",
            //"Last name of the customer.",
            last: "tester",
            // "Middle name of the customer.",
            middle: "test",
          },
        ],
        // Defines the contact details for the customer & to be used in creating the billing contact info in Apple pay request
        contact: {
          //"The customer's email",
          email: "test@gmail.com",
          //"The customer's phone number"
          phone: {
            //"The customer's country code",
            countryCode: "+20",
            //"The customer's phone number
            number: "10XXXXXX56",
          },
        },
      }}
      //for styling button
      interface={{
        //The locale of the Apple Pay button and it can be one of these locales:[EN,AR]
        locale: Locale.EN,
        // The theme of the Apple Pay button and it can be one of
        // these values : [light,Dark], by default it is detected from user device
        theme: ThemeMode.DARK,
        // The type of the Apple Pay
        type: ButtonType.BUY,
        // The border of the Apple Pay button and it can be one of these values:[curved,straight]
        edges: Edges.CURVED,
      }}
      // optional (A callback function that will be called when you cancel
      // the payment process)
      onCancel={() => console.log("cancelled")}
      // optional (A callback function that will be called when you have an error)
      onError={(err) => console.error(err)}
      // optional (A async function that will be called after creating the token
      // successfully)
      onSuccess={async (token) => {
        // do your stuff here...
        console.log(token);
      }}
      // optional (A callback function that will be called when you button is clickable)
      onReady={() => {
        console.log("Ready");
      }}
      // optional (A callback function that will be called when the button clicked)
      onClick={() => {
        console.log("Clicked");
      }}
    />
  );
};
export default PayWithApple;
