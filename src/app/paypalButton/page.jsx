import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import toast from "react-hot-toast";

const page = ({ userId, convertAEDtoUSD, productDetails }) => {
  return (
    <>
      <PayPalScriptProvider
        options={{
          "client-id":
            "AWhQsuXmmp4ZqIBy2asnmpX10n03Y1yo22Z_wjZWnPOQ7Gdj_wOYoh1t7HKvKohATBnJyfdwOgMOfhUZ",
          currency: "USD", // Using USD as PayPal doesn't support AED
        }}
      >
        <PayPalButtons
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: convertAEDtoUSD(productDetails.price), // Convert AED to USD
                  },
                },
              ],
            });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then(async (details) => {
              const userEmail = details.payer.email_address;
              try {
                const response = await axios.post("/api/checkout", {
                  userEmail,
                  itemDetails: productDetails.details,
                  price: productDetails.price,
                  userId,
                });
                toast.success("Transaction completed successfully.");
              } catch (error) {
                toast.error(
                  error.response?.data?.error || "An error occurred."
                );
              }
            });
          }}
        />
      </PayPalScriptProvider>
    </>
  );
};

export default page;
