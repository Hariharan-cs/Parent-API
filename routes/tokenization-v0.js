module.exports = (app) => {
  app.get("/metadata/columns", (req, res) => {
    /* Query Params: {
            data: { pageName: "token" or "tag" }
        }
      */
    let pageName = JSON.parse(JSON.stringify(req.query.pageName));

    let tokenMetadata = [
      {
        key: "tokenName",
        value: "Token Name",
        required: true,
        type: "text",
        width: "200px",
        // isPrimary: true,
        dependency: {},
      },
      {
        key: "noOfBytes",
        value: "No. of bytes",
        required: true,
        type: "dropdown",
        width: "150px",
        dependency: {},
        // dependency: [
        //   {
        //     option: "same as input",
        //     key: "retainOriginalFormat",
        //     value: [{ key: false }],
        //   },
        // ],
      },
      {
        key: "minimumNoOfBytes",
        value: "Min. bytes",
        required: true,
        type: "number",
        width: "150px",
        dependency: { range: { min: "1", max: "maximumNoOfBytes" } },
      },
      {
        key: "maximumNoOfBytes",
        value: "Max. bytes",
        required: true,
        type: "number",
        width: "150px",
        dependency: { range: { min: "minimumNoOfBytes", max: "99999" } },
      },
      {
        key: "tokenCharacters",
        value: "Token Characters",
        required: true,
        type: "dropdown",
        width: "150px",
        dependency: {},
      },
      {
        key: "caseSensitive",
        value: "Case sensitive",
        required: true,
        type: "toggle",
        width: "150px",
        dependency: {},
      },
      // { 
      //   key: "retainOriginalFormat",
      //   value: "Retain original format",
      //   required: true,
      //   type: "toggle",
      //   width: "150px",
      //   dependency: {},
        // dependency: [
        //   {
        //     option: false,
        //     key: "noOfBytes",
        //     value: [{ key: "same as input" }],
        //   },
        // ],
      // },
    ];

    let tagMetadata = [
      {
        key: "tagName",
        value: "Tag Name",
        required: true,
        type: "text",
        width: "200px",
        dependency: {},
        // isPrimary: true,
      },
      {
        key: "tagType",
        value: "Tag Type",
        required: true,
        type: "dropdown",
        width: "150px",
        dependency: {
          interLinked: [{
            option: "Auto Detect",
            key: "tokenName",
            value: [{ key: "NA", label: "NA" }],
          }],
        },
      },
      {
        key: "tokenName",
        value: "Token Name",
        required: true,
        type: "dropdown",
        width: "150px",
        dependency: {
          interLinked: [{
            option: "NA",
            key: "tagType",
            value: [{ key: "Auto Detect", label: "Auto Detect" }],
          }]
        }
      },
      
    ];

    // Response
    res.send({
      data: pageName === "token" ? tokenMetadata : tagMetadata,
      success: true,
      error: {
        message: "",
      },
    });
  });

  app.get("/metadata/data", (req, res) => {
    /* Query Params: {
            data: { pageName: "token" or "tag" }
        }
      */

    let pageName = JSON.parse(JSON.stringify(req.query.pageName));

    let tokenMetadata = {
      editable: [
        {
          type: "custom",
          column: [
            "noOfBytes",
            "minimumNoOfBytes",
            "maximumNoOfBytes",
            "tokenCharacters",
            "caseSensitive",
          ],
        },
        {
          type: "default",
          column: [
            "noOfBytes",
            "minimumNoOfBytes",
            "maximumNoOfBytes",
            "tokenCharacters",
            "caseSensitive",
          ],
        },
      ],
      values: [
        {
          tokenName: "Default",
          noOfBytes: "random",
          minimumNoOfBytes: 13,
          maximumNoOfBytes: 20,
          tokenCharacters: "alpha-numeric",
          caseSensitive: false,
          // retainOriginalFormat: false,
          // isDefault: true,
          type: "default",
        },
        {
          tokenName: "TextToken",
          noOfBytes: "same as input",
          minimumNoOfBytes: 23,
          maximumNoOfBytes: 99999999,
          tokenCharacters: "alpha-numeric",
          caseSensitive: false,
          // retainOriginalFormat: false,
          type: "default",
        },
        {
          tokenName: "NumericToken",
          noOfBytes: "same as input",
          minimumNoOfBytes: 10,
          maximumNoOfBytes: 10,
          tokenCharacters: "alpha-numeric",
          caseSensitive: false,
          // retainOriginalFormat: false,
          type: "default",
        },
        {
          tokenName: "SpecialToken",
          noOfBytes: "same as input",
          minimumNoOfBytes: 10,
          maximumNoOfBytes: 20,
          tokenCharacters: "numeric",
          caseSensitive: false,
          // retainOriginalFormat: false,
          type: "default",
        },
        {
          tokenName: "AlphaNumericToken",
          noOfBytes: "same as input",
          minimumNoOfBytes: 1,
          maximumNoOfBytes: 20000000,
          tokenCharacters: "alpha-numeric",
          caseSensitive: true,
          // retainOriginalFormat: false,
          type: "custom",
        },
        {
          tokenName: "NewToken",
          noOfBytes: "random",
          minimumNoOfBytes: 14,
          maximumNoOfBytes: 221,
          tokenCharacters: "alpha-numeric",
          caseSensitive: false,
          // retainOriginalFormat: false,
          type: "custom",
        },
      ],
      valuesa: []
    };

    let tagMetadata = {
      editable: [
        {
          type: "custom",
          column: ['tokenName', 'tagType'],
        },
        {
          type: "default",
          column: ['tokenName']
        },
      ],
      values: [
        {
          tagName: "Default",
          tokenName: "Default",
          tagType: "Default",
          type: "default",
          // isDefault: true,
        },
        {
          tagName: "Person",
          tokenName: "TextToken",
          tagType: "person name",
          type: "default",
        },
        {
          tagName: "Email",
          tokenName: "TextToken",
          tagType: "email address",
          type: "default",
        },
        {
          tagName: "Phone",
          tokenName: "NumericToken",
          tagType: "phone number",
          type: "default",
        },
        {
          tagName: "City",
          tokenName: "TextToken",
          tagType: "city name",
          type: "custom",
        },
        {
          tagName: "Country",
          tokenName: "TextToken",
          tagType: "country name",
          type: "custom",
        },
        {
          tagName: "Address",
          tokenName: "TextToken",
          tagType: "Location",
          type: "custom",
        },
        {
          tagName: "CreditCard",
          tokenName: "SpecialToken",
          tagType: "credit card",
          type: "custom",
        },
        {
          tagName: "Description",
          tokenName: "TextToken",
          tagType: "Auto Detect",
          type: "custom",
        },
        {
          tagName: "Organisation",
          tokenName: "AlphaNumericToken",
          tagType: "Auto Detect",
          type: "custom",
        },
        {
          tagName: "DOB",
          tokenName: "SpecialToken",
          tagType: "Auto Detect",
          type: "custom",
        },
      ],
      valuesa: []
    };
    // Response
    res.send({
      data: pageName === "token" ? tokenMetadata : tagMetadata,
      success: true,
      error: {
        message: "",
      },
    });
  });

  app.get("/metadata/filters", (req, res) => {
    /* Query Params: NONE
     */

    let allFilters = {
      noOfBytes: [{ key: "random" }, { key: "same as input" }],
      tokenCharacters: [{ key: "numeric" }, { key: "alpha-numeric" }],
      caseSensitive: [
        { key: true, value: "yes" },
        { key: false, value: "no" },
      ],
      retainOriginalFormat: [
        { key: true, value: "yes" },
        { key: false, value: "no" },
      ],
      tokenName: [
        { key: "Default" },
        { key: "TextToken" },
        { key: "NumericToken" },
        { key: "SpecialToken" },
        { key: "AlphaNumericToken" },
      ],
      tagType: [
        { key: "Default" },
        { key: "None" },
        { key: "Auto Detect" },
        { key: "Location" },
        { key: "credit card" },
        { key: "email address" },
        { key: "phone number" },
        { key: "city name" },
        { key: "country name" },
        { key: "person name" },
      ],
    };

    // Response
    res.send({
      data: allFilters,
      success: true,
      error: {
        message: "",
      },
    });
  });

  app.put("/metadata/update-token", (req, res) => {
    /* Payload: {
        data: [{
            tokenName: "TextToken",
            noOfBytes: "same as input",
            minimumNoOfBytes: "10",
            maximumNoOfBytes: "99999999",
            tokenCharacters: "alpha-numeric",
            caseSensitive: false,
            // retainOriginalFormat: false,
          },
        }]
      */
    let data = JSON.parse(JSON.stringify(req.body.data));
    // Response
    res.send({
      // data: [
      //   {
      //     tokenName: "TextToken",
      //     noOfBytes: "same as input",
      //     minimumNoOfBytes: 10,
      //     maximumNoOfBytes: 99999999,
      //     tokenCharacters: "alpha-numeric",
      //     caseSensitive: false,
      //     retainOriginalFormat: false,
      //   },
      // ],
      data: [
        ...data,
        // ...[
        //   {
        //     tokenName: "TextTokenNewOne",
        //     noOfBytes: "same as input",
        //     minimumNoOfBytes: 10,
        //     maximumNoOfBytes: 99999999,
        //     tokenCharacters: "alpha-numeric",
        //     caseSensitive: false,
        //     retainOriginalFormat: false,
        //   },
        // ],
      ],
      success: true,
      error: {
        message: "",
      },
    });
  });

  app.put("/metadata/update-tag", (req, res) => {
    /* Payload: {
        data: [{
            tagName: "US_SSN",
            tokenName: "NumericToken",
            tagType: "number",
            type: "custom"
          }],
        }
      */
    let data = JSON.parse(JSON.stringify(req.body.data));
    // Response
    res.send({
      // data: [
      //   {
      //     tagName: "US_SSN",
      //     tokenName: "NumericToken",
      //     tagType: "number",
      //     type: "custom"
      //   },
      // ],
      data: [
        ...data,
        // ...[{
        //   tagName: "US_SSN",
        //   tokenName: "NumericToken",
        //   tagType: "number"
        // }],
      ],
      success: true,
      error: {
        message: "",
      },
    });
  });
};
