module.exports = (app) => {
  app.get("/metadata/columns", (req, res) => {
    /* Query Params: {
            data: { pageName: "token" or "auto-detect"  or "format" }
        }
      */
    let pageName = JSON.parse(JSON.stringify(req.query.pageName));

    let tokenMetadata = [{
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
        dependency: {
          range: {
            min: "1",
            max: "maximumNoOfBytes"
          }
        },
      },
      {
        key: "maximumNoOfBytes",
        value: "Max. bytes",
        required: true,
        type: "number",
        width: "150px",
        dependency: {
          range: {
            min: "minimumNoOfBytes",
            max: "99999"
          }
        },
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

    let tagMetadata = [{
        key: "tagName",
        value: "Tag Name",
        required: true,
        type: "text",
        width: "200px",
        dependency: {},
        // isPrimary: true,
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
            value: [{
              key: "Auto Detect",
              label: "Auto Detect"
            }],
          }]
        }
      },
      {
        key: "prefix",
        value: "Token Prefix",
        required: true,
        type: "text",
        width: "150px",
        dependency: {
          key: "suffix"
        },
      },
      {
        key: "suffix",
        value: "Token Suffix",
        required: true,
        type: "text",
        width: "150px",
        dependency: {
          key: "prefix"
        },
      },
      {
        key: "example",
        value: "Example",
        required: true,
        type: "text",
        width: "150px",
        dependency: {},
      },
    ];

    let formatData = [{
        key: "formatName",
        value: "Format",
        required: true,
        type: "text",
        width: "150px",
        dependency: {},
      },
      {
        key: "example",
        value: "Example",
        required: true,
        type: "text",
        width: "150px",
        dependency: {},
      },
      {
        key: "mask",
        value: "Mask",
        required: true,
        type: "text",
        width: "150px",
        dependency: {},
      },
    ];

    // Response
    res.send({
      data: pageName === "token" ? tokenMetadata : pageName === "format" ? formatData : tagMetadata,
      success: true,
      error: {
        message: "",
      },
    });
  });

  app.get("/metadata/data", (req, res) => {
    /* Query Params: {
            data: { pageName: "token" or "auto-detect" or "format" }
        }
      */

    let pageName = JSON.parse(JSON.stringify(req.query.pageName));

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
          maximumNoOfBytes: 99999,
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
          maximumNoOfBytes: 20000,
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
      editable: [{
          type: "custom",
          column: ['tokenName', 'prefix', 'suffix'],
        },
        {
          type: "default",
          column: ['tokenName', 'prefix', 'suffix']
        }
      ],
      values: [{
          tagName: "Person",
          tokenName: "Default",
          prefix: "",
          suffix: "",
          example: "mfP1icZ0PN-HwGjwR",
          type: "default",
        },
        {
          tagName: "Phone",
          tokenName: "NumericToken",
          prefix: "",
          suffix: "",
          example: "KrVOH-R22lH-TQM6L",
          type: "default",
        },
        {
          tagName: "Email",
          tokenName: "TextToken",
          prefix: "",
          suffix: "",
          example: "kUc2iuc@0VxLPAG1Dvm",
          type: "default",
        },
        {
          tagName: "Credit Card",
          tokenName: "SpecialToken",
          prefix: "",
          suffix: "",
          example: " 4D67A-FZLFh-3OBk0-3cNo0",
          type: "custom",
        },
        {
          tagName: "Ip Address",
          tokenName: "NewToken",
          prefix: "",
          suffix: "",
          example: "n02G5.D3RH1.R22lH.cVTPM",
          type: "custom",
        },
        {
          tagName: "US SSN",
          tokenName: "AlphaNumericToken",
          prefix: "",
          suffix: "",
          example: "CWa96-0LNQd-umB6i",
          type: "custom",
        },
      ]
    }

    let formatData = {
      values: [
        // {
        //   formatName: "Default",
        //   example: ["Default"],
        // },
        {
          formatName: "Person",
          example: ["Ella-Rose Amelia Brown, Jr"],
          mask: ["uGqK-2RC7 dO2Fo gIJ1j, NuASiExQmY"]
        },
        {
          formatName: "Email",
          example: ["johndoe@example.com"],
          mask: ["kUc2iuc@0VxLPAG1Dvm"]
        },
        {
          formatName: "Phone Number",
          example: ["+1 (555) 123-4567 ext. 123"],
          mask: ["+ovuVn (KrVOH) R22lH-TQM6L ext. R22lH"]
        },
        {
          formatName: "CreditCard",
          example: ["5000-2368-7954-3214, 5000 2368 7954 3214"],
          mask: ["4D67A-FZLFh-3OBk0-3cNo0, 4D67A FZLFh 3OBk0 3cNo0"]
        },
        {
          formatName: "IP Address",
          example: ["192.168.123.132"],
          mask: ["n02G5.D3RH1.R22lH.cVTPM"]
        },
        {
          formatName: "US SSN",
          example: ["856-45-6789", "856 45 6789"],
          mask: ["CWa96-0LNQd-umB6i", "CWa96 0LNQd umB6i"]
        },

      ],
    };
    // Response
    res.send({
      data: pageName === "token" ? tokenMetadata : pageName === "format" ? formatData : tagMetadata,
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
      noOfBytes: [{
        key: "random"
      }, {
        key: "same as input"
      }],
      tokenCharacters: [{
        key: "numeric"
      }, {
        key: "alpha-numeric"
      }],
      caseSensitive: [{
          key: true,
          value: "yes"
        },
        {
          key: false,
          value: "no"
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

  app.put("/metadata/update-auto-detect", (req, res) => {
    /* Payload: {
        data: [{
    "tagName": "Person",
    "tokenName": "Default",
    "prefix": "person_start",
    "suffix": "person_endf",
    "example": "oocQDG2IbFl3rBsoot2",
    "type": "default"}],
        }
      */
    let data = JSON.parse(JSON.stringify(req.body.data));
    // Response
    res.send({
      // data: [
      //   {
      //     "tagName": "Person",
      //     "tokenName": "Default",
      //     "prefix": "person_start",
      //     "suffix": "person_endf",
      //     "example": "oocQDG2IbFl3rBsoot2",
      //     "type": "default"
      // },
      // ],
      data: [
        ...data,
        // ...[{
        //     "tagName": "Person",
        //     "tokenName": "Default",
        //     "prefix": "person_start",
        //     "suffix": "person_endf",
        //     "example": "oocQDG2IbFl3rBsoot2",
        //     "type": "default"
        // }],
      ],
      success: true,
      error: {
        message: "",
      },
    });
  });
};