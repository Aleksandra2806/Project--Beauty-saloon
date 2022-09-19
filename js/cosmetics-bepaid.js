this.payment = function () {
  const { value: firstName } = this.firstName;
  const { value: lastName } = this.lastName;
  console.log(firstName + lastName);
  if (firstName && lastName) {
    const amount = 8000;
    const params = {
      checkout_url: "https://checkout.bepaid.by",
      checkout: {
        iframe: true,
        test: true,
        transaction_type: "payment",
        public_key:
          "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEApiZB6mK42qsonAeWFQbE6YrqI2TroP6Xuuz/4H/P25uNgmsnDmRRv3NGVmOsAGPJWxd6sL4BVKruxOJTtVNA5i3k9MiH9mYiVk0sFKs+COCwmyJWRhNe/fSiFtEEcCsj79qn2V7QnUrxFJa5ueP78mh3YDrzsATd2SMekjaVT/QKbrK3OJLHSbQppmv9wD10DdyVwW87ra0+MMA8XiCyzK6x2jcPkaOzw5I3CUQHUqGAzrbTLqjYThouRb913v6GV2HAK8PVdvimtI7a0NppImCgCEEL+8tuNIpvQISjI5xAedexbguPEi9sA+zcgDQKLN7G4+NQUmhBQV13xkjxxQIDAQAB",
        order: {
          amount: amount,
          currency: "BYN",
          description: "Пример оплаты с bepaid",
          tracking_id: "asdasd37533638216810052022asdasd",
        },
        settings: {
          language: "ru",
          customer_fields: {
            visible: ["first_name", "last_name"],
          },
        },
        customer: {
          first_name: firstName,
          last_name: lastName,
        },
      },
    };
    new BeGateway(params).createWidget();
  } else {
    alert("Вы не ввели полные данные плательщика");
  }
};