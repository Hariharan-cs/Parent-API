module.exports = (app) => {
  app.get("/synthetic-data/count", (req, res) => {
    /* Query Params: {} */

    // let data = JSON.parse(JSON.stringify(req.body.data));

    // Response
    res.send({
      data: {
        totalTable: 10000,
        processSummary: {
          failed: 90000,
          inprogress: 1125,
          pending: 10000,
          completed: 578,
        },
        fileStatusPercentage: 100,
      },
      // data: req.body.data,
      success: true,
      error: {
        message: "",
      },
    });
  });

  app.get("/synthetic-data/periodical/status", (req, res) => {
    /* Query Params: {
            data: { period: "daily" or "weekly" or "monthly" }
        }
    */

    // let data = JSON.parse(JSON.stringify(req.body.data));

    // Response
    res.send({
      data: {
        activity: [
          {
            name: "Total table",
            series: [
              {
                value: 5353,
                date: "2021-03-05",
              },
              {
                value: 6546,
                date: "2021-07-06",
              },
              {
                value: 3487,
                date: "2021-08-21",
              },
              {
                value: 3116,
                date: "2021-12-18",
              },
              {
                value: 5611,
                date: "2022-01-01",
              },
            ],
          },
          {
            name: "No of rows",
            series: [
              {
                value: 5353,
                date: "2021-03-05",
              },
              {
                value: 6546,
                date: "2021-07-06",
              },
              {
                value: 3487,
                date: "2021-08-21",
              },
              {
                value: 3116,
                date: "2021-12-18",
              },
              {
                value: 5611,
                date: "2022-01-01",
              },
            ],
          },
          {
            name: "No of PII",
            series: [
              {
                value: 5353,
                date: "2021-03-05",
              },
              {
                value: 6546,
                date: "2021-07-06",
              },
              {
                value: 3487,
                date: "2021-08-21",
              },
              {
                value: 3116,
                date: "2021-12-18",
              },
              {
                value: 5611,
                date: "2022-01-01",
              },
            ],
          },
        ],
      },
      // data: req.body.data,
      success: true,
      error: {
        message: "",
      },
    });
  });

  app.get("/synthetic-data/columns", (req, res) => {
    /* Query Params:
       {
             pageName:"data-generation-history" or "column-details"
        }
     */
    // Response
    let dataGenerationHistory = [
      {
        key: "metadataId",
        value: "Metadata ID",
        width: "200px",
      },
      {
        key: "database",
        value: "DB",
        width: "200px",
      },
      {
        key: "schema",
        value: "Schema",
        width: "200px",
      },
      {
        key: "table",
        value: "Table",
        width: "200px",
      },
      {
        key: "numOfRows",
        value: "No of rows",
        width: "200px",
      },
      {
        key: "status",
        value: "Status",
        width: "200px",
      },
      {
        key: "csvFileGenerated",
        value: "CSV File Generated",
        width: "200px",
      },
      {
        key: "updatedDate",
        value: "Date",
        width: "200px",
      },
      {
        key: "action",
        value: "Action",
        width: "200px",
      },
    ];

    let columnDetails = [
      {
        key: "columnName",
        value: "Column Name",
        width: "200px",
      },
      {
        key: "columnType",
        value: "Column Type",
        width: "200px",
      },
      {
        key: "privacyType",
        value: "Privacy Type",
        width: "200px",
      },
      {
        key: "piTag",
        value: "PI Tag",
        width: "200px",
      },
    ];

    let data = [];
    let request = JSON.parse(req.query.data);

    if (request.pageName == "data-generation-history") {
      data = dataGenerationHistory;
    } else if (request.pageName == "column-details") {
      data = columnDetails;
    }
    res.send({
      data: data,
      success: true,
      error: {
        message: "",
      },
    });
  });

  app.put("/synthetic-data/history", (req, res) => {
    /* Payload:
        {
            data:{
                filter:{
                    status: ["inprogress", "pending", "completed", "failed"],
                }
                searchTerm: "sadsadsadas",
                sortBy: "asc" | dsc,
                sortColumn:"metadataId | database | schema | table | numOfRows | status | csvFileGenerated | updatedDate",
                pageSize: 10,
                pageNumber: 5,
            }
        }
    */
    let param = req.body.data;
    // metadataId database schema table numOfRows status csvFileGenerated updatedDate action
    let data = {
      values: [
        {
          metadataId: "42423873",
          database: "DB1",
          schema: "Schema1",
          table: "Person1",
          numOfRows: "100000",
          status: "In-Progress",
          csvFileGenerated: false,
          updatedDate: "June 10th 18:24",
          action: {
            kill: true,
            restart: true,
            downloadFile: false,
            deleteTable: true,
          },
        },
        {
          metadataId: "42423874",
          database: "DB2",
          schema: "Schema2",
          table: "Person2",
          numOfRows: "100000",
          status: "Pending",
          csvFileGenerated: false,
          updatedDate: "June 10th 18:24",
          action: {
            kill: true,
            restart: false,
            downloadFile: false,
            deleteTable: true,
          },
        },
        {
          metadataId: "42423875",
          database: "DB3",
          schema: "Schema3",
          table: "Person3",
          numOfRows: "100000",
          status: "Done",
          csvFileGenerated: true,
          updatedDate: "June 10th 18:24",
          action: {
            restart: true,
            downloadFile: true,
            deleteTable: true,
          },
        },
        {
          metadataId: "42423876",
          database: "DB4",
          schema: "Schema4",
          table: "Person4",
          numOfRows: "100000",
          status: "Failed",
          csvFileGenerated: false,
          updatedDate: "June 10th 18:24",
          action: {
            restart: false,
            downloadFile: true,
            deleteTable: true,
          },
        },
        ,
        {
          metadataId: "42423877",
          database: "DB5",
          schema: "Schema5",
          table: "Person5",
          numOfRows: "100000",
          status: "-",
          csvFileGenerated: false,
          updatedDate: "June 10th 18:24",
          action: {
            restart: false,
            downloadFile: true,
            deleteTable: true,
          },
        },
      ],
    };

    if (param.pageSize) {
      data.values = data.values.slice(
        param.pageSize * (param.pageNumber - 1),
        param.pageSize * (param.pageNumber - 1) + param.pageSize
      );
    }

    // Response
    res.send({
      data: data,
      success: true,
      error: {
        message: "",
      },
    });
  });

  app.put("/synthetic-data/table/columns", (req, res) => {
    /* Payload:
        {
            data:{
                filter:{
                    privacyType: ["PI", "NON_PII"]
                    piTag : ["person", "us_phone_number", "email_address"]
                }
                searchTerm: "sadsadsadas",
                sortBy: "asc" | dsc,
                sortColumn: "columnName | columnType | privacyType | piTag,
                pageSize: 10,
                pageNumber: 5,
            }
        }
    */
    let param = req.body.data;

    let data = {
      values: [
        {
          columnName: "Column 1",
          columnType: "String",
          privacyType: "PI",
          piTag: "Person",
        },
        {
          columnName: "Column 2",
          columnType: "Number",
          privacyType: "NON_PI",
          piTag: "-",
        },
        {
          columnName: "Column 3",
          columnType: "String",
          privacyType: "NON_PI",
          piTag: "User ID",
        },
      ],
    };

    if (param.pageSize) {
      data.values = data.values.slice(
        param.pageSize * (param.pageNumber - 1),
        param.pageSize * (param.pageNumber - 1) + param.pageSize
      );
    }

    // Response
    res.send({
      data: data,
      success: true,
      error: {
        message: "",
      },
    });
  });

  app.get("/synthetic-data/filters", (req, res) => {
    /* Query Params: NONE
     */

    let allFilters = {
      status: [
        {
          key: "In Progress",
        },
        {
          key: "Pending",
        },
        {
          key: "Completed",
        },
        {
          key: "Failed",
        },
      ],

      privacyType: [
        {
          key: "PI",
        },
        {
          key: "NON_PII",
        },
      ],
      piTag: [
        {
          key: "Location",
        },
        {
          key: "credit card",
        },
        {
          key: "email address",
        },
        {
          key: "phone number",
        },
        {
          key: "city name",
        },
        {
          key: "country name",
        },
        {
          key: "person name",
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

  app.put("/synthetic-data/records", (req, res) => {
    /* Payload:
       {
            data:{
                filter:{
                    privacyType: ["PI", "NON_PII"],
                    piTag : ["person", "us_phone_number", "email_address"],
                    status: ["inprogress", "pending", "completed", "failed"]

                }
                searchTerm: "sadsadsadas",
                pageName: "data-generation-history" or "table-columns",
                metadataId: "42423873"
            }
        }
     */
    // Response
    res.send({
      data: {
        totalRecords: 21,
      },
      success: true,
      error: {
        message: "",
      },
    });
  });

  app.put("/synthetic-data/actions", (req, res) => {
    /* Payload:
     {
          data:{
            metadataId: "42423873",
            action: {
              kill: true || restart: true || deleteTable: true
            }
          }
      }
   */
    // Response
    res.send({
      data: {
        message: "trigged successfully",
      },
      success: true,
      error: {
        message: "",
      },
    });
  });

  app.put("/synthetic-data/download", (req, res) => {
    /* Payload:
     {
          data:{
            metadataId: "42423873", or "ALL" All means download all files
          }
      }
   */
    // Response
    res.send({
      data: {
        downloadFileUrl: "https://protecto.ai/file/table_record.pdf",
      },
      success: true,
      error: {
        message: "",
      },
    });
  });

  app.put("/synthetic-data/upload-sql", (req, res) => {
    /* Payload:
    stream data or base64
     {
          data:{
            file: "fdas;fhsdpaofbpwqoeugfbwa;fndsajadsljvbadsvkj"
          }
      }
   */
    // Response
    res.send({
      data: {
        message: "Uploaded successfully",
      },
      success: true,
      error: {
        message: "",
      },
    });
  });

  app.get("/synthetic-data/table-info", (req, res) => {
    /* Query Params: {
          metadataId: "42423873",
    } */

    // let data = JSON.parse(JSON.stringify(req.body.data));

    // Response
    res.send({
      data: {
        metadataId: "42423873",
        database: "DB1",
        schema: "Schema1",
        table: "Person1",
        updatedDate: "June 10th 18:24",
      },
      // data: req.body.data,
      success: true,
      error: {
        message: "",
      },
    });
  });

  // ADD OR UPDATE
  app.put("/synthetic-data/table-info", (req, res) => {
    /* Payload: 
     {
          data:{
            metadataId: "42423873",
            database: "DB1",
            schema: "Schema1",
            table: "Person1",
            columns: [
              {
                columnName: "Column 1",
                columnType: "String",
                privacyType: "PI",
                piTag: "Person",
              },
              {
                columnName: "Column 2",
                columnType: "Number",
                privacyType: "NON_PI",
                piTag: "-",
              }
            ]
          }
      }
   */
    // Response
    res.send({
      data: {
        metadataId: "42423873",
        database: "DB1",
        schema: "Schema1",
        table: "Person1",
        columns: [
          {
            columnName: "Column 1",
            columnType: "String",
            privacyType: "PI",
            piTag: "Person",
          },
          {
            columnName: "Column 2",
            columnType: "Number",
            privacyType: "NON_PI",
            piTag: "-",
          },
        ],
      },
      // data: req.body.data,
      success: true,
      error: {
        message: "",
      },
    });
  });

  app.get("/synthetic-data/metadata/suggestion", (req, res) => {
    /* Query Params:
       {
            filter: "schema" ||  "table" || "database",
            searchTerm: "sadsadsadas",
        }
     */
    // Response
    res.send({
      data: data,
      success: true,
      error: {
        message: "",
      },
    });
  });
};
