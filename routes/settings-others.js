module.exports = (app) => {
  app.put("/customize/email", (req, res) => {
    /* Payload:
    {
        data:{
        "notificationEmail":"onedpo",
        "password":"Onedpo@123",
        }
    */
    console.log(req.body);

    // Response
    res.send({
      data: {
        notificationEmail: "onedpo",
        password: "Onedpo@123",
      },
      success: true,
      error: {
        message: "",
      },
    });
  });

  // Delete email
  app.delete("/customize/email", (req, res) => {
    /* Payload:
    {
        data:{
            "notificationEmail":"onedpo"
        }
    }
    */

    console.log(req.body);

    // Response
    res.send({
      data: {
        notificationEmail: "onedpo",
      },
      success: true,
      error: {
        message: "",
      },
    });
  });
};
