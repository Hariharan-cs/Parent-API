module.exports = (app) => {
  app.put("/pii-identification", (req, res) => {
    /* Payload:
    {
        data:{
          text:"John is in America"
      }
    */
    console.log(req.body.data);

    // Response
    res.send({
      data: {
        identifiedTags: [
          {
            tag: "person",
            matched: ["John"],
          },
          {
            tag: "GPE",
            matched: ["America"],
          },
        ],
      },
      success: true,
      error: {
        message: "",
      },
    });
  });
};
