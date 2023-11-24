module.exports = (app) => {
  app.get("/metadata/columns", (req, res) => {
    /* Query Params: {
            data: { column: "token" or "format" or "auto-detect" }
        }
      */
    let column = JSON.parse(JSON.stringify(req.query.column));

    let tokenMetadata = [{
        key: "tokenName",
        value: "Token Name",
        required: true,
        type: "text",
        width: "200px",
        dependency: {},
      },
      {
        key: "noOfBytes",
        value: "No. of Bytes",
        required: true,
        type: "text",
        width: "150px",
        dependency: {},
      },
      {
        key: "minimumNoOfBytes",
        value: "Min Bytes",
        required: true,
        type: "number",
        width: "150px",
        dependency: { range: { min: "1", max: "maximumNoOfBytes" } },
      },
      {
        key: "maximumNoOfBytes",
        value: "Max Bytes",
        required: true,
        type: "number",
        width: "150px",
        dependency: { range: { min: "minimumNoOfBytes", max: "99999" } },
      },
      {
        key: "tokenCharacters",
        value: "Token Characters",
        required: true,
        type: "text",
        width: "150px",
        dependency: {},
      },
      {
        key: "caseSensitive",
        value: "Case Sensitive",
        required: true,
        type: "text",
        width: "150px",
        dependency: {},
      },
    ];

    let tagMetadata = [{
        key: "formatName",
        value: "Format",
        required: true,
        type: "text",
        width: "200px",
        dependency: {},
      },
      {
        key: "example",
        value: "Example",
        required: true,
        type: "text",
        width: "200px",
        dependency: {},
      },
    ];

    let autoDetectMetadata = [{
        key: "piiTag",
        value: "Tag",
        required: true,
        type: "text",
        width: "200px",
        dependency: {},
      },
      {
        key: "tokenName",
        value: "Token Name",
        required: true,
        type: "text",
        width: "200px",
        dependency: {},
      },
      {
        key: "prefix",
        value: "Prefix",
        required: true,
        type: "text",
        width: "200px",
        dependency: {},
      },
      {
        key: "suffix",
        value: "Suffix",
        required: true,
        type: "text",
        width: "200px",
        dependency: {},
      },
      {
        key: "example",
        value: "Example",
        required: true,
        type: "text",
        width: "200px",
        dependency: {},
      },
    ];

    res.send({
      data: column === "token" ?
        tokenMetadata : column === "format" ?
        tagMetadata : autoDetectMetadata,
      success: true,
      error: {
        message: "",
      },
    });
  });

  app.get("/metadata/tokens", (req, res) => {
    let tokenMetadata = {
      editable: [{
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
      values: [{
          tokenName: "Default",
          noOfBytes: "Random",
          minimumNoOfBytes: 13,
          maximumNoOfBytes: 20,
          tokenCharacters: "Alphabets & Numbers",
          caseSensitive: "No",
          type: "default",
        },
        {
          tokenName: "TextToken",
          noOfBytes: "Same as input",
          minimumNoOfBytes: 23,
          maximumNoOfBytes: 99999999,
          tokenCharacters: "Alphabets & Numbers",
          caseSensitive: "No",
          type: "default",
        },
        {
          tokenName: "NumericToken",
          noOfBytes: "Same as input",
          minimumNoOfBytes: 10,
          maximumNoOfBytes: 10,
          tokenCharacters: "Alphabets & Numbers",
          caseSensitive: "No",
          type: "default",
        },
        {
          tokenName: "SpecialToken",
          noOfBytes: "Same as input",
          minimumNoOfBytes: 10,
          maximumNoOfBytes: 20,
          tokenCharacters: "Numbers",
          caseSensitive: "No",
          type: "default",
        },
        {
          tokenName: "AlphaNumericToken",
          noOfBytes: "Same as input",
          minimumNoOfBytes: 1,
          maximumNoOfBytes: 20000000,
          tokenCharacters: "Alphabets & Numbers",
          caseSensitive: "Yes",
          type: "custom",
        },
        {
          tokenName: "NewToken",
          noOfBytes: "Random",
          minimumNoOfBytes: 14,
          maximumNoOfBytes: 221,
          tokenCharacters: "Alphabets & Numbers",
          caseSensitive: "No",
          type: "custom",
        },
        // {
        //   tokenName: "Default1",
        //   noOfBytes: "Random",
        //   tokenCharacters: "Alphabets & Numbers",
        //   caseSensitive: "No",
        //   type: "default",
        // },
        // {
        //   tokenName: "TextToken1",
        //   noOfBytes: "Same as input",
        //   tokenCharacters: "Alphabets & Numbers",
        //   caseSensitive: "No",
        //   type: "default",
        // },
        // {
        //   tokenName: "NumericToken1",
        //   noOfBytes: "Same as input",
        //   tokenCharacters: "Alphabets & Numbers",
        //   caseSensitive: "No",
        //   type: "default",
        // },
        // {
        //   tokenName: "SpecialToken1",
        //   noOfBytes: "Same as input",
        //   tokenCharacters: "Numbers",
        //   caseSensitive: "No",
        //   type: "default",
        // },
        // {
        //   tokenName: "AlphaNumericToken1",
        //   noOfBytes: "Same as input",
        //   tokenCharacters: "Alphabets & Numbers",
        //   caseSensitive: "Yes",
        //   type: "custom",
        // },
        // {
        //   tokenName: "NewToken1",
        //   noOfBytes: "Random",
        //   tokenCharacters: "Alphabets & Numbers",
        //   caseSensitive: "No",
        //   type: "custom",
        // },
        // {
        //   tokenName: "Default2",
        //   noOfBytes: "Random",
        //   tokenCharacters: "Alphabets & Numbers",
        //   caseSensitive: "No",
        //   type: "default",
        // },
        // {
        //   tokenName: "TextToken2",
        //   noOfBytes: "Same as input",
        //   tokenCharacters: "Alphabets & Numbers",
        //   caseSensitive: "No",
        //   type: "default",
        // },
        // {
        //   tokenName: "NumericToken2",
        //   noOfBytes: "Same as input",
        //   tokenCharacters: "Alphabets & Numbers",
        //   caseSensitive: "No",
        //   type: "default",
        // },
        // {
        //   tokenName: "SpecialToken2",
        //   noOfBytes: "Same as input",
        //   tokenCharacters: "Numbers",
        //   caseSensitive: "No",
        //   type: "default",
        // },
        // {
        //   tokenName: "AlphaNumericToken2",
        //   noOfBytes: "Same as input",
        //   tokenCharacters: "Alphabets & Numbers",
        //   caseSensitive: "Yes",
        //   type: "custom",
        // },
        // {
        //   tokenName: "NewToken2",
        //   noOfBytes: "Random",
        //   tokenCharacters: "Alphabets & Numbers",
        //   caseSensitive: "No",
        //   type: "custom",
        // },
      ],
    };
    // Response
    res.send({
      data: tokenMetadata,
      success: true,
      error: {
        message: "",
      },
    });
  });

  app.get("/metadata/formats", (req, res) => {
    let tagMetadata = {

      values: [{
          formatName: "Default",
          example: ["Default"],
        },
        {
          formatName: "Person",
          example: ["Alann"],
        },
        {
          formatName: "Email",
          example: ["santhiya@protecto.ai"]
        },
        {
          formatName: "Phone",
          example: ["(555) 555-1234"],
        },
        {
          formatName: "City",
          example: ["California"],
        },
        {
          formatName: "Country",
          example: ["America"],
        },
        {
          formatName: "Address",
          example: ["Headquarters Cupertino, CA, USA"],
        },
        {
          formatName: "CreditCard",
          example: ["378282246310005"],
        },
        {
          formatName: "Description",
          example: ["Obama lives in America"],
        },
        {
          formatName: "Organisation",
          example: ["Protecto"],
        },
        {
          formatName: "DOB",
          example: ["12-07-2023"],
        },
      ],
    };
    // Response
    res.send({
      data: tagMetadata,
      success: true,
      error: {
        message: "",
      },
    });
  });

  app.get("/metadata/auto-detect", (req, res) => {

    let autoDetectData = {
      editable: {
        column: ['tokenName', 'prefix', 'suffix', 'example'],

      },
      values: [{
          piiTag: "Person",
          tokenName: "Default",
          prefix: "person_start",
          suffix: "person_end",
          example: "oocQDG2IbFl3rBsoot2"   
        },
        {
          piiTag: "Phone",
          tokenName: "NumericToken",
          prefix: "phone_start",
          suffix: "phone_start",
          example: "3923692945"         
        },
        {
          piiTag: "Email",
          tokenName: "TextToken",
          prefix: "email_start",
          suffix: "email_end",
          example: "gXhny3svDlk7swz3g@2aIpGcyBnb2P8LbyJ"    
        },
        {
          piiTag: "Credit Card",
          tokenName: "SpecialToken",
          prefix: "credit_card_start",
          suffix: "credit_card_end",
          example: " ENKTzC4Vv4i2k4D"                  
        },
        {
          piiTag: "Ip Address",
          tokenName: "NewToken",
          prefix: "ip_address_start",
          suffix: "ip_address_end",
          example: "S2sxspK38Bmw5NVtND5"                     
        },
        {
          piiTag: "US SSN",
          tokenName: "AlphaNumericToken",
          prefix: "us_ssn_start",
          suffix: "us_ssn_end",
          example: "2J48kGulooe6R"       
        },
        // {
        //   piiTag: "Person1",
        //   tokenName: "Default",
        //   prefix: "person1",
        //   suffix: "person1",
        //   example: "person1 Alann person1"
        // },
        // {
        //   piiTag: "Phone1",
        //   tokenName: "TextToken",
        //   prefix: "phone1",
        //   suffix: "phone1",
        //   example: "phone1 (444) 444-1234 phone1" 
        // },
        // {
        //   piiTag: "Email1",
        //   tokenName: "NumericToken",
        //   prefix: "email1",
        //   suffix: "email1",
        //   example: "email1 alann@prextsi.et email1"
        // },
        // {
        //   piiTag: "Location1",
        //   tokenName: "SpecialToken",
        //   prefix: "location1",
        //   suffix: "location1",
        //   example: "location1 Bangalore location1"
        // },
        // {
        //   piiTag: "Age1",
        //   tokenName: "AlphaNumericToken",
        //   prefix: "age1",
        //   suffix: "age1",
        //   example: "age1 25 age1"
        // },
        // {
        //   piiTag: "Gender1",
        //   tokenName: "NewToken",
        //   prefix: "gender1",
        //   suffix: "gender1",
        //   example: "gender1 female gender1"
        // },
        // {
        //   piiTag: "Person2",
        //   tokenName: "Default",
        //   prefix: "person2",
        //   suffix: "person2",
        //   example: "person2 Alann person2"
        // },
        
        // {
        //   piiTag: "Email2",
        //   tokenName: "NumericToken",
        //   prefix: "email2",
        //   suffix: "email2",
        //   example: "email2 alann@prextsi.et email2"
        // },
        // {
        //   piiTag: "Location2",
        //   tokenName: "SpecialToken",
        //   prefix: "location2",
        //   suffix: "location2",
        //   example: "location2 Bangalore location2"
        // },
        // {
        //   piiTag: "Location3",
        //   tokenName: "SpecialToken",
        //   prefix: "location3",
        //   suffix: "location3",
        //   example: "location3 Bangalore location3"
        // },
      ]
    }
    res.send({
      data: autoDetectData,
      success: true,
      error: {
        message: "",
      },
    })
  });

  app.get("/metadata/filters", (req, res) => {

    let allFilters = {
      noOfBytes: [{
        key: "Random"
      }, {
        key: "Same as input"
      }],
      tokenCharacters: [{
        key: "Numbers"
      }, {
        key: "Alphabets & Numbers"
      }],
      caseSensitive: [{
          key: true,
          value: "Yes"
        },
        {
          key: false,
          value: "No"
        },
      ],
      retainOriginalFormat: [{
          key: true,
          value: "yes"
        },
        {
          key: false,
          value: "no"
        },
      ],
      tokenName: [{
          key: "Default"
        },
        {
          key: "TextToken"
        },
        {
          key: "NumericToken"
        },
        {
          key: "SpecialToken"
        },
        {
          key: "AlphaNumericToken"
        },
      ],
      tagType: [{
          key: "Default"
        },
        {
          key: "None"
        },
        {
          key: "Auto Detect"
        },
        {
          key: "Location"
        },
        {
          key: "credit card"
        },
        {
          key: "email address"
        },
        {
          key: "phone number"
        },
        {
          key: "city name"
        },
        {
          key: "country name"
        },
        {
          key: "person name"
        },
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
            noOfBytes: "Same as input",
            tokenCharacters: "Alphabets & Numbers",
            caseSensitive: false,
          },
        }]
      */
    // let data = JSON.parse(JSON.stringify(req.body.data));
    // Response
    res.send({
      // data: [
      //   {
      //     tokenName: "TextToken",
      //     noOfBytes: "Same as input",
      //     tokenCharacters: "Alphabets & Numbers",
      //     caseSensitive: false,
      //   },
      // ],
      data: req.body.data,
      success: true,
      error: {
        message: "",
      },
    });
  });

  app.put("/metadata/auto-detect", (req, res) => {
    /* Payload: {
        data: [{
          piiTag: "Email",
          tokenName: "Token3",
          prefix: "<email>",
          suffix: "<email>",
          example:"fdswtrt@prextsi.et"
          }],
        }
      */
    let data = JSON.parse(JSON.stringify(req.body.data));
    res.send({
      // data: [

      //   {
      // piiTag: "All",
      // tokenName: "",
      // prefix: "person",
      // suffix: "person",         If piiTag is All, then all tags prefix, suffix should be updated
      // example:""
      //   },

      //   {
      // piiTag: "Email",
      // tokenName: "Token3",
      // prefix: "<email>",
      // suffix: "<email>",
      // example:"fdswtrt@prextsi.et"
      //   },
      // ],
      data:  data[0].piiTag !== 'All' ?[
        ...data,
        // ...[{
        // piiTag: "Email",
        // tokenName: "Token3",
        // prefix: "<email>",
        // suffix: "<email>",
        // example:"fdswtrt@prextsi.et"
        //   },
        // }],
      ] : [{
          piiTag: "Person",
          tokenName: "Default",
          prefix:  data[0].prefix,
          suffix:  data[0].suffix,
          example: "oocQDG2IbFl3rBsoot2"   
        },
        {
          piiTag: "Phone",
          tokenName: "NumericToken",
          prefix:  data[0].prefix,
          suffix:  data[0].suffix,
          example: "3923692945"         
        },
        {
          piiTag: "Email",
          tokenName: "TextToken",
          prefix:  data[0].prefix,
          suffix:  data[0].suffix,
          example: "gXhny3svDlk7swz3g@2aIpGcyBnb2P8LbyJ"    
        },
        {
          piiTag: "Credit Card",
          tokenName: "SpecialToken",
          prefix:  data[0].prefix,
          suffix:  data[0].suffix,
          example: " ENKTzC4Vv4i2k4D"                  
        },
        {
          piiTag: "Ip Address",
          tokenName: "NewToken",
          prefix:  data[0].prefix,
          suffix:  data[0].suffix,
          example: "S2sxspK38Bmw5NVtND5"                     
        },
        {
          piiTag: "US SSN",
          tokenName: "AlphaNumericToken",
          prefix:  data[0].prefix,
          suffix:  data[0].suffix,
          example: "2J48kGulooe6R"       
        },
    ],
      success: true,
      error: {
        message: "",
      },
    });
  });

}