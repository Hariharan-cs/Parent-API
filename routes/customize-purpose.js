module.exports = (app) => {
  app.get("/customize/source-purpose", (req, res) => {
    // Payload: None
    // Response
    res.send({
      data:[{
          id: "61cc0e6649bb9a0019a3065a1",
          name: "Sourcepurposename1",
        },
        {
          id: "61cc0e6649bb9a0019a3065a2",
          name: "Sourcepurposename2",
        }],
      success: true,
      error: {
        message: "",
      },
    });
  });

  app.get("/customize/subject-type", (req, res) => {
    // Payload: None
    // Response
    res.send({
      data:[
        {
          id: "61cc0e6649bb9a0019a3065a1",
          name: "Implicit Consent1",
        },
        {
          id: "61cc0e6649bb9a0019a3065a2",
          name: "Implicit Consent2",
        },
      ],
      success: true,
      error: {
        message: "",
      },
    });
  });

  app.put("/customize/source-purpose", (req, res) => {
    /* Payload: 
        {
          data:{ name: "Sourcepurposename"}
        } 
    */

    // Response
    res.send({
      data: req.body.data,
      success: true,
      error: {
        message: "",
      },
    });
  });

  app.put("/customize/subject-type", (req, res) => {
    /* Payload: 
        {
          data:{
            subjectTypeId: "61cc0e6649bb9a0019a3065a1",
            name: "Implicit Consent1",
          }
        } 
    */

    // Response
    res.send({
      data: req.body.data,
      success: true,
      error: {
        message: "",
      },
    });
  });

  /* DELETE API's */
  app.delete("/customize/source-purpose", (req, res) => {
    /* Payload: 
        {
          data:{ "sourcePurposeId": 61cc0e6649bb9a0019a3065a , "name":"cluster" }
        } 
    */

    // Response
    res.send({
      data: req.body.data,
      success: true,
      error: {
        message: "",
      },
    });
  });

  app.delete("/customize/subject-type", (req, res) => {
    /* Payload: 
        {
          data:{ subjectTypeId: "61cc0e6649bb9a0019a3065a1",name: "Implicit Consent1" }
        }
    */

    // Response
    res.send({
      data: req.body.data,
      success: true,
      error: {
        message: "",
      },
    });
  });
};
