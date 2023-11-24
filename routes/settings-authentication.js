module.exports = (app) => {
  app.delete("/adconfiguration", (req, res) => {
    /* Payload: None */

    // Response
    res.send({
      data: {
        message: "Deleted Successfully",
      },
      success: true,
      error: {
        message: "",
      },
    });
  });

  // To add license key 
  app.get("/add-license", (req, res) => {
    // Query Params
    // licenseKey:"1Y2P0IJ32E8E7"
    // Failure Response
    res.send({
      data: {
      },
      success: false,
      error: {
        message: "Invalid license key",
      },
    });

    // Success Response
    // res.send({
    //   data: {
    //     message: "Your license will be valid for 14 days",
    //   },
    //   success: true,
    //   error: {
    //     message: "",
    //   },
    // });

  })

  // get added license key information
  app.get("/subscriptions", (req, res) => {
    // header:accessToken
    // default value to show warning message - 14 days
    // response before expiry if noOfSubscriptionDaysLeft is less than or equal 14
    res.send({
      data: {
        startDate: "28-12-2022",
        endDate: "14-02-2023",
        licenseKey: "5144 xxxx xxxx 44444",
        noOfSubscriptionDaysLeft: 14,
        subscriptionType: "full version", // trial (or) full version
        message: "Your Protecto trial license will expire in 7 days. To extend your subscription, please contact help@protecto.ai.",
      },
      success: true,
      error: {
        message: "",
      },
    });

    //response before expiry if noOfSubscriptionDaysLeft is greater than 14
    // res.send({
    //   data: {
    //     startDate: "28-12-2022",
    //     endDate: "14-02-2023",
    //     licenseKey: "5144 xxxx xxxx 44444",
    //     noOfSubscriptionDaysLeft: 20,
    //     subscriptionType: "full version", // trial (or) full version
    //     message: ""
    //   },
    //   success: true,
    //   error: {
    //     message: "",
    //   },
    // });

    // //response if license key is expired
    // res.send({
    //   data: {
    //     startDate: "28-12-2022",
    //     endDate: "14-02-2023",
    //     licenseKey: "5144 xxxx xxxx 44444",
    //     noOfSubscriptionDaysLeft: 0,
    //     subscriptionType:"trial",
    //     message: "Protecto's license has been expired, please renew your license"
    //   },
    //   success: true,
    //   error: {
    //     message: "",
    //   },
    // });

    // //response initially, if license key is not added
    // res.send({
    //   data: {
    //     startDate: "",
    //     endDate: "",
    //     licenseKey: "",
    //     noOfSubscriptionDaysLeft: 0,
    //     subscriptionType:"trial",
    //     message: `You need a valid subscription to use Protecto. {{navigate_to_license_page}} to add license. To purchase a license, contact help@protecto.ai.`
    //   },
    //   success: true,
    //   error: {
    //     message: "",
    //   },
    // });
  })
};