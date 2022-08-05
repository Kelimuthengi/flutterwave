document.getElementById("paynow").onclick = () => {
  FlutterwaveCheckout({
    public_key: "your api key from fluttersandbox account!",
    tx_ref: "RX1",
    amount: 20000,
    currency: "KES",
    country: "KENYA",
    payment_options: " ",
    meta: {
      consumer_id: 23,
      consumer_mac: "92a3-912ba-1192a",
    },
    customer: {
      email: "cornelius@gmail.com",
      phone_number: "08102909304",
      name: "Flutterwave Developers",
    },
    callback: function (data) {
      console.log(data);

      
    },
    onclose: function () {
      // close modal
    },
    customizations: {
      title: "My store",
      description: "Payment for items in cart",
      logo: "https://assets.piedpiper.com/logo.png",
    },
  });
};
