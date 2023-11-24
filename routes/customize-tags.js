module.exports = (app) => {
  app.put("/dataasset/tags", (req, res) => {
    /* Payload: 
        {
          data:{
            datasourcePath: ["snowflakeCluster"],
            columnName: "last_name",
            tag: {  name: "loc", type: "custom", active: true, predefined: true }
          }
        } 
    */

    // Response
    res.send({
      // data:{
      //   datasourcePath: ["snowflakeCluster"],
      //   columnName: "first_name",
      //   tag: {  name: "loc", type: "custom", active: true, predefined: true }
      // },
      data: req.body.data,
      success: true,
      error: {
        message: "",
      },
    });
  });

  app.delete("/dataasset/tags", (req, res) => {
    /* Payload: 
        {
          data:{
            datasourcePath: ["snowflakeCluster"],
            columnName: "last_name",
            tag: {  name: "loc", type: "custom", active: true, predefined: true }
          },
      }
        } 
    */

    // Response
    res.send({
      // data:{
      //   datasourcePath: ["snowflakeCluster"],
      //   columnName: "first_name",
      //   tag: {  name: "loc", type: "custom", active: true, predefined: true }
      // },
      data: req.body.data,
      success: true,
      error: {
        message: "",
      },
    });
  });

  app.get("/customize/tags", (req, res) => {
    /* Payload: None*/
    console.log(req.body);

    // Response
    res.send({
      data: {
        tags: [
          {
            name: "email_address",
            type: "default",
            id: "09039043904-34343-434",
          },
          {
            name: "ip_address",
            type: "default",
            id: "09039043904-34343-434",
          },
          {
            name: "person",
            type: "default",
            id: "09039043904-34343-434",
          },
          {
            name: "us_ssn",
            type: "default",
            id: "09039043904-34343-434",
          },
          {
            name: "uk_phone_number",
            type: "default",
            id: "09039043904-34343-434",
          },
          {
            name: "us_phone_number",
            type: "default",
            id: "09039043904-34343-434",
          },
          {
            name: "gpe",
            type: "default",
            id: "09039043904-34343-434",
          },
          {
            name: "loc",
            type: "default",
            id: "09039043904-34343-434",
          },
          {
            name: "norp",
            type: "default",
            id: "09039043904-34343-434",
          },
          {
            name: "vin",
            type: "default",
            id: "09039043904-34343-434",
          },
          {
            name: "date",
            type: "default",
            id: "09039043904-34343-434",
          },
          {
            name: "event",
            type: "default",
            id: "09039043904-34343-434",
          },
          {
            name: "fac",
            type: "default",
            id: "09039043904-34343-434",
          },
          {
            name: "language",
            type: "default",
            id: "09039043904-34343-434",
          },
          {
            name: "law",
            type: "default",
            id: "09039043904-34343-434",
          },
          {
            name: "money",
            type: "default",
            id: "09039043904-34343-434",
          },
          {
            name: "ordinal",
            type: "default",
            id: "09039043904-34343-434",
          },
          {
            name: "org",
            type: "default",
            id: "09039043904-34343-434",
          },
          {
            name: "percent",
            type: "default",
            id: "09039043904-34343-434",
          },
          {
            name: "product",
            type: "default",
            id: "09039043904-34343-434",
          },
          {
            name: "quantity",
            type: "default",
            id: "09039043904-34343-434",
          },
          {
            name: "time",
            type: "default",
            id: "09039043904-34343-434",
          },
          {
            name: "age",
            type: "default",
            id: "09039043904-34343-434",
          },
          {
            name: "gender",
            type: "default",
            id: "09039043904-34343-434",
          },
          {
            name: "dob",
            type: "custom",
            id: "09039043904-34343-434",
          },
          {
            name: "address",
            type: "custom",
            id: "09039043904-34343-434",
          },
        ],
      },
      success: true,
      error: {
        message: "",
      },
    });
  });

  app.put("/customize/tags", (req, res) => {
    /* Payload:
    {
        data:{
      "tagName":"onedpo"
        }
    */
    console.log(req.body.data);

    // Response
    res.send({
      data: {
        tag: {
          name: req.body.data.tagName,
          type: "custom",
          id: "09039043904-34343-43412",
        },
      },
      success: true,
      error: {
        message: "",
      },
    });
  });

  app.get("/customize/classification", (req, res) => {
    /* Payload: None*/

    // Response
    res.send({
      data: {
        category: [
          {
            name: "pi",
            combination: [
              {
                id: "32234-234ss34-3343-434", // Primary key
                tags: [
                  {
                    name: "email_address",
                    type: "default",
                    id: "09039043904-34343-434",
                  },
                  {
                    name: "ip_address",
                    type: "default",
                    id: "09039043904-34343-434",
                  },
                ],
              },
            ],
          },
          {
            name: "pii",
            combination: [
              {
                id: "32234-234ss34-434", // Primary key
                tags: [
                  {
                    name: "person",
                    type: "default",
                    id: "09039043904-34343-434",
                  },
                ],
              },
            ],
          },
          {
            name: "sensitive",
            combination: [
              {
                id: "32234-23er3r43-343343-434", // Primary key
                tags: [
                  {
                    name: "org",
                    type: "default",
                    id: "09039043904-34343-434",
                  },
                ],
              },
            ],
          },
          {
            name: "none",
            combination: [
              {
                id: "32234-23er3r43-343343-434", // Primary key
                tags: [
                  {
                    name: "gpe",
                    type: "default",
                    id: "09039043904-34343-434",
                  },
                ],
              },
            ],
          },
        ],
      },
      success: true,
      error: {
        message: "",
      },
    });
  });

  app.put("/customize/classification", (req, res) => {
    /* Payload:
    {
        data:{
          category:
            {
              name: "pi",
              combination:
                {
                  id: " ", // Primary key
                  tags: [{
                      name: "GPE",
                      type: "default",
                      id: "09039043904-34343-434",
                    },],
                },
            }
        }
      }
    */
    console.log(req.body);

    // Response
    res.send({
      data: {
        category: {
          name: req.body.data.category.name,
          combination: {
            id: "32234-234ss34-3343-434123", // Primary key
            tags: req.body.data.category.combination.tags,
          },
        },
      },
      success: true,
      error: {
        message: "",
      },
    });
  });

  app.delete("/customize/classification", (req, res) => {
    /* Payload:
    {
        data:{
          category:
            {
              name: "pi",
              combination:
                {
                  id: "32234-234ss34-3343-434", // Primary key
                  tags: [{
                      name: "GPE",
                      type: "default",
                      id: "09039043904-34343-434",
                    },],
                },
            }
        }
      }
    */
    console.log(req.body);

    // Response
    res.send({
      data: {
        category: req.body.data.category,
      },
      success: true,
      error: {
        message: "",
      },
    });
  });
};
