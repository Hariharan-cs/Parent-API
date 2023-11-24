module.exports = (app) => {

  app.get("/super-admin/datasource/info", (req, res) => {
    // Query Params: None

    // RETURN ALL DATASOURCES DETAILS

    // Response
    res.send({
      data: [
        {
          datasourceType: "redshift",
          datasourceName: "redshiftCluster",
          databaseName: "orders"
        },
        {
          datasourceType: "azuresql",
          datasourceName: "azuresqlCluster",
          databaseName: "azure_db"
        },
        {
          datasourceType: "snowflake",
          datasourceName: "snowflakeCluster",
          totalDatabases: 26
        }
      ],
      success: true,
      error: {
        message: "",
      },
    });
  });

  app.get("/super-admin/batch/server-time", (req, res) => {
    // Query Params: None

    // RETURN THE CURRENT SERVER TIME

    // Response
    res.send({
      data: {
        time: "11/5/2022 15:20 UTC"
      },
      success: true,
      error: {
        message: "",
      },
    })
  });

  app.get("/super-admin/batch/filters", (req, res) => {
    // Query Params: {
    //    filter: all, || status
    // }

    // RETURN ALL FILTER DETAILS

    // Response
    let allFilters = {
      status: [
        {
          key: "success",
          label: "Success",
          color: "green"
        },
        {
          key: "failed",
          label: "Failed",
          color: "red"
        },
        {
          key: "inprogress",
          label: "Inprogress",
          color: "orange"
        },    
        {
          key: "pending",
          label: "Pending",
          color: "violet"
        }
      ],
    }
    let data = {}
    if (req.query.filter == 'all') {
      data = allFilters
    }

    res.send(
      {
        data: data,
        success: true,
        error: {
          message: "",
        },
      });
  })

  app.get("/super-admin/batch/columns", (req, res) => {
    // Query Params: {
    //     pageName: "current-batch", (or) data-asset-details (or) activity-history 
    // }

    // RETURN ALL TABLE COLUMNS BASED ON THE PAGE NAME

    // Response
    let currentBatch = [
      { type: "string", key: "name", value: "Batch Name" },
      { type: "object", key: "time", nested: { key: "start", value: "Start Time" } },
      { type: "object", key: "time", nested: { key: "end", value: "End Time" } },
      { type: "object", key: "duration", nested: { key: "actual", value: "Actual Duration" } },
      { type: "object", key: "duration", nested: { key: "expected", value: "Expected Duration" } },
      { type: "object", key: "duration", nested: { key: "exceeded", value: "Exceeded Duration" } },
      { type: "string", key: "status", value: "Status" },
      { type: "string", key: "canRetry", value: "Action" },
    ]
    let dataAssetDetail = [
      { type: "string", key: "dataasset", value: "Data Asset" },
      { type: "string", key: "status", value: "Status" },
      { type: "object", key: "duration", nested: { key: "exceeded", value: "Exceeded Duration" } },
      { type: "string", key: "noOfRetry", value: "Retry #" },
      { type: "string", key: "canRetry", value: "Action" },
    ]
    let data = []
    console.log('req.query.pageName', req.query.pageName, ' = ' ,req.query.pageName.length)
    if (req.query.pageName === 'current-batch' || req.query.pageName === 'activity-history') {
      data = currentBatch
    }
    else if (req.query.pageName == 'data-asset-details') {
      data = dataAssetDetail
    }
    res.send({
      data: data,
      success: true,
      error: {
        message: "",
      },
    });
  })

  app.put("/super-admin/batch/records", (req, res) => {
    // Payload: {
    //     datasourceName: "azuresqlCluster",
    //     batchId: "500001",
    //     processName: "Sample data (or) Risk calculation (or) Tag extraction",
    //     historyId: "1",
    //     pageName: "current-batch", (or) data-asset-details (or) activity-history
    //     filter: {
    //        status: ["failed", "in-progress"]
    //        dataasset: ["Cluster.Database.Schema.Table"]
    //     }
    // }

    // RETURN THE TOTAL NUMBER OF RECORDS BASED ON PAGE NAME AND PAYLOAD

    // Response
    res.send({
      data: {
        totalRecords: 26
      },
      success: true,
      error: {
        message: "",
      },
    });
  })

  app.get("/super-admin/batch/current", (req, res) => {
    // Query Params: {
    //     datasourceName: "azuresqlCluster",
    //     sortBy: "dsc" | "asc"
    // } 

    // date format - month/date/year hour/minute timeZone

    // RETURN ALL CURRENT PROCESS DETAILS WITH STATUS BASED ON SORT ORDER DESENDING ORDER

    // Response
    res.send({
      data: {
        batchId: "500001",
        date: "05/11/2022",
        process: [
          {
            name: "Metadata",
            time: {
              start: "11/5/2022 15:20 UTC", // date format - month/date/year hour/minute timeZone
              end: "11/5/2022 16:20 UTC",
            },
            duration: {
              actual: "4 hours",
              expected: "2 hours",
              exceeded: "2 hours"
            },
            status: "success",
            canRetry: true,
            history: [
              {
                id: "1",
                time: {
                  start: "11/5/2022 15:20 UTC",
                  end: "11/5/2022 16:20 UTC",
                },
                status: "failed",
                log: {
                  url: "https://dummyurl.com",
                  error: ""
                }
              }
            ]
          },
          {
            name: "Access",
            time: {
              start: "11/5/2022 15:20 UTC",
              end: "11/5/2022 16:20 UTC",
            },
            duration: {
              actual: "2 hours",
              expected: "2 hours",
              exceeded: "3 hours"
            },
            status: "inprogress",
            canRetry: true,
            history: [
              {
                id:"1",
                time: {
                  start: "11/5/2022 15:20 UTC",
                  end: "11/5/2022 16:20 UTC",
                },
                status: "failed",
                log: {
                  url: "https://dummyurl.com",
                  error: ""
                }
              }
            ]
          },
          {
            name: "Logs",
            time: {
              start: "11/5/2022 15:20 UTC",
              end: "11/5/2022 16:20 UTC",
            },
            duration: {
              actual: "2 hours",
              expected: "2 hours",
              exceeded: "3 hours"
            },
            status: "inprogress",
            canRetry: true,
            history: [
              {
                id:"1",
                time: {
                  start: "11/5/2022 15:20 UTC",
                  end: "11/5/2022 16:20 UTC",
                },
                status: "failed",
                log: {
                  url: "https://dummyurl.com",
                  error: ""
                }
              }
            ]
          },
          {
            name: "Sample Data",
            time: {
              start: "11/5/2022 15:20 UTC",
              end: "11/5/2022 16:20 UTC",
            },
            duration: {
              actual: "2 hours",
              expected: "2 hours",
              exceeded: "2 hours"
            },
            status: {
              key: "inprogress"
            },
            canRetry: true,
            history: [
              {
                id:"1",
                time: {
                  start: "11/5/2022 15:20 UTC",
                  end: "11/5/2022 16:20 UTC",
                },
                status: "failed",
                log: {
                  url: "https://dummyurl.com",
                  error: ""
                },
                assetInformation: {
                  totalCount: 3000,
                  status: [{
                    key: "pending",
                    count: 300
                  },
                  {
                    key: "failed",
                    count: 200
                  },
                  {
                    key: "inprogress",
                    count: 500
                  },
                  {
                    key: "success",
                    count: 2000
                  }]
                }
              }
            ]
          },
          {
            name: "Tag Extraction",
            time: {
              start: "11/5/2022 15:20 UTC",
              end: "11/5/2022 16:20 UTC",
            },
            duration: {
              actual: "2 hours",
              expected: "2 hours",
              exceeded: "2 hours"
            },
            status: {
              key: "inprogress"
            },
            canRetry: true,
            history: [
              {
                id:"1",
                time: {
                  start: "11/5/2022 15:20 UTC",
                  end: "11/5/2022 16:20 UTC",
                },
                status: "failed",
                log: {
                  url: "https://dummyurl.com",
                  error: ""
                },
                assetInformation: {
                  totalCount: 3000,
                  status: [{
                    key: "pending",
                    count: 300
                  },
                  {
                    key: "failed",
                    count: 200
                  },
                  {
                    key: "inprogress",
                    count: 500
                  },
                  {
                    key: "success",
                    count: 2000
                  }]
                }
              }
            ]
          },
          {
            name: "Risk Calculation",
            time: {
              start: "11/5/2022 15:20 UTC",
              end: "11/5/2022 16:20 UTC",
            },
            duration: {
              actual: "2 hours",
              expected: "2 hours",
              exceeded: "2 hours"
            },
            status: {
              key: "inprogress"
            },
            canRetry: true,
            history: [
              {
                id:"1",
                time: {
                  start: "11/5/2022 15:20 UTC",
                  end: "11/5/2022 16:20 UTC",
                },
                status: "failed",
                log: {
                  url: "https://dummyurl.com",
                  error: ""
                },
                assetInformation: {
                  totalCount: 3000,
                  status: [{
                    key: "success",
                    count: 300
                  },
                  {
                    key: "failed",
                    count: 200
                  },
                  {
                    key: "inprogress",
                    count: 500
                  },
                  {
                    key: "pending",
                    count: 2000
                  }]
                }
              }
            ]
          },
          {
            name: "Summary",
            time: {
              start: "11/5/2022 15:20 UTC",
              end: "11/5/2022 16:20 UTC",
            },
            duration: {
              actual: "2 hours",
              expected: "2 hours",
              exceeded: "3 hours"
            },
            status: "inprogress",
            canRetry: true,
            history: [
              {
                id:"1",
                time: {
                  start: "11/5/2022 15:20 UTC",
                  end: "11/5/2022 16:20 UTC",
                },
                status: "failed",
                log: {
                  url: "https://dummyurl.com",
                  error: ""
                }
              }
            ]
          },
        ]
      },
      success: true,
      error: {
        message: "",
      },
    });

  });

  app.get("/super-admin/batch/retry", (req, res) => {
    // Query Params: {
    //     datasourceName: "azuresqlCluster",
    //     batchId: "500001",
    //     processName: "Sample data (or) Risk calculation (or) Tag extraction (or) Access (or) logs etc.,",
    //     selectAll: true,
    // } 

    // RETRY THE SPECIFIC PROCESS OR ALL PROCESS AND RETURN ALL CURRENT PROCESS DETAILS WITH STATUS 

    // Response
    res.send({
      data: {
        batchId: "500001",
        date: "05/11/2022",
        process: [
          {
            name: "Metadata",
            time: {
              start: "11/5/2022 15:20 UTC", // date format - month/date/year hour/minute timeZone
              end: "11/5/2022 16:20 UTC",
            },
            duration: {
              actual: "2 hours",
              expected: "2 hours",
              exceeded: "3 hours"
            },
            status: "inprogress",
            canRetry: true,
            history: [
              {
                id:"1",
                time: {
                  start: "11/5/2022 15:20 UTC",
                  end: "11/5/2022 16:20 UTC",
                },
                status: "failed",
                log: {
                  url: "https://dummyurl.com",
                  error: ""
                }
              }
            ]
          },
          {
            name: "Access",
            time: {
              start: "11/5/2022 15:20 UTC",
              end: "11/5/2022 16:20 UTC",
            },
            duration: {
              actual: "2 hours",
              expected: "2 hours",
              exceeded: "3 hours"
            },
            status: "inprogress",
            canRetry: true,
            history: [
              {
                id:"1",
                time: {
                  start: "11/5/2022 15:20 UTC",
                  end: "11/5/2022 16:20 UTC",
                },
                status: "failed",
                log: {
                  url: "https://dummyurl.com",
                  error: ""
                }
              }
            ]
          },
          {
            name: "Logs",
            time: {
              start: "11/5/2022 15:20 UTC",
              end: "11/5/2022 16:20 UTC",
            },
            duration: {
              actual: "2 hours",
              expected: "2 hours",
              exceeded: "3 hours"
            },
            status: "inprogress",
            canRetry: true,
            history: [
              {
                id:"1",
                time: {
                  start: "11/5/2022 15:20 UTC",
                  end: "11/5/2022 16:20 UTC",
                },
                status: "failed",
                log: {
                  url: "https://dummyurl.com",
                  error: ""
                }
              }
            ]
          },
          {
            name: "Sample Data",
            time: {
              start: "11/5/2022 15:20 UTC",
              end: "11/5/2022 16:20 UTC",
            },
            duration: {
              actual: "2 hours",
              expected: "2 hours",
              exceeded: "2 hours"
            },
            status: {
              key: "inprogress"
            },
            canRetry: true,
            history: [
              {
                id:"1",
                time: {
                  start: "11/5/2022 15:20 UTC",
                  end: "11/5/2022 16:20 UTC",
                },
                status: "failed",
                log: {
                  url: "https://dummyurl.com",
                  error: ""
                },
                assetInformation: {
                  totalCount: 3000,
                  status: [{
                    key: "pending",
                    count: 300
                  },
                  {
                    key: "failed",
                    count: 200
                  },
                  {
                    key: "inprogress",
                    count: 500
                  },
                  {
                    key: "success",
                    count: 2000
                  }]
                }
              }
            ]
          },
          {
            name: "Tag Extraction",
            time: {
              start: "11/5/2022 15:20 UTC",
              end: "11/5/2022 16:20 UTC",
            },
            duration: {
              actual: "2 hours",
              expected: "2 hours",
              exceeded: "2 hours"
            },
            status: {
              key: "inprogress"
            },
            canRetry: true,
            history: [
              {
                id:"1",
                time: {
                  start: "11/5/2022 15:20 UTC",
                  end: "11/5/2022 16:20 UTC",
                },
                status: "failed",
                log: {
                  url: "https://dummyurl.com",
                  error: ""
                },
                assetInformation: {
                  totalCount: 3000,
                  status: [{
                    key: "pending",
                    count: 300
                  },
                  {
                    key: "failed",
                    count: 200
                  },
                  {
                    key: "inprogress",
                    count: 500
                  },
                  {
                    key: "success",
                    count: 2000
                  }]
                }
              }
            ]
          },
          {
            name: "Risk Calculation",
            time: {
              start: "11/5/2022 15:20 UTC",
              end: "11/5/2022 16:20 UTC",
            },
            duration: {
              actual: "2 hours",
              expected: "2 hours",
              exceeded: "2 hours"
            },
            status: {
              key: "inprogress"
            },
            canRetry: true,
            history: [
              {
                id:"1",
                time: {
                  start: "11/5/2022 15:20 UTC",
                  end: "11/5/2022 16:20 UTC",
                },
                status: "failed",
                log: {
                  url: "https://dummyurl.com",
                  error: ""
                },
                assetInformation: {
                  totalCount: 3000,
                  status: [{
                    key: "pending",
                    count: 300
                  },
                  {
                    key: "failed",
                    count: 200
                  },
                  {
                    key: "inprogress",
                    count: 500
                  },
                  {
                    key: "success",
                    count: 2000
                  }]
                }
              }
            ]
          },
          {
            name: "Summary",
            time: {
              start: "11/5/2022 15:20 UTC",
              end: "11/5/2022 16:20 UTC",
            },
            duration: {
              actual: "2 hours",
              expected: "2 hours",
              exceeded: "3 hours"
            },
            status: "inprogress",
            canRetry: true,
            history: [
              {
                id:"1",
                time: {
                  start: "11/5/2022 15:20 UTC",
                  end: "11/5/2022 16:20 UTC",
                },
                status: "failed",
                log: {
                  url: "https://dummyurl.com",
                  error: ""
                }
              }
            ]
          },
        ]
      },
      success: true,
      error: {
        message: "Retried Successfully",
      },
    });

  });

  app.put("/super-admin/batch/assets/info", (req, res) => {
    // Payload: {
    //     datasourceName: "azuresqlCluster",
    //     batchId: "500001", 
    //     processName: "Sample data (or) Risk calculation (or) Tag extraction",
    //     historyId: "1",
    //     sortBy: "dsc",
    //     sortColumn:"column_name",
    //     page: {
    //         size: 10
    //         number: 5
    //     },
    //     filter: {
    //        status: ["failed", "in-progress"]
    //        dataasset: ["Cluster.Database.Schema.Table"] // free search text user can search cluster or database or schema or table or combination of all
    //     }
    // }

    // GET ALL DATA ASSET INFORMATION WITH RETRY FLAG ( WHEATHER THE DATA ASSET CAN BE RETRY OR NOT )
    let param = req.body;
    let data = {
      batchId: "500001",
      date: "05/11/2022",
      canRetry: true,
      dataassetDelimiter: '.',
      process: [
        {
          dataassetId: "1",
          // dataasset: ["cluster", "database", "schema", "table1"],
          dataasset: ["TEST_DATABRICKS", "hive_metastore", "auto_testing_db3", "auto_testing_table_1"],
          status: "success",
          duration: {
            exceeded: "3 hours"
          },
          noOfRetry: 2,
          canRetry: true,
          history: [
            {
              id: "1",
              time: {
                start: "11/5/2022 15:20 UTC", // date format - month/date/year hour/minute timeZone
                end: "11/5/2022 16:20 UTC",
              },
              status: "inprogress",
              log: {
                url: "https://dummyurl.com",
                error: "sample data error"
              }
            }
          ]
        },
        {
          dataassetId: "2",
          dataasset: ["cluster", "database", "schema", "table2"],
          status: "failed",
          duration: {
            exceeded: "3 hours"
          },
          noOfRetry: 2,
          canRetry: false,
          history: [
            {
              id: "1",
              time: {
                start: "11/5/2022 15:20 UTC",
                end: "11/5/2022 16:20 UTC",
              },
              status: "failed",
              log: {
                url: "https://dummyurl.com",
                error: ""
              }
            }
          ]
        },
        {
          dataassetId: "3",
          dataasset: ["cluster", "database", "schema", "table3"],
          status: "inprogress",
          duration: {
            exceeded: "3 hours"
          },
          noOfRetry: 2,
          canRetry: true,
          history: [
            {
              id:"1",
              time: {
                start: "11/5/2022 15:20 UTC",
                end: "11/5/2022 16:20 UTC",
              },
              status: "inprogress",
              log: {
                url: "https://dummyurl.com",
                error: "sample data error"
              }
            }
          ]
        },
        {
          dataassetId: "4",
          dataasset: ["cluster", "database", "schema", "table4"],
          status: "success",
          duration: {
            exceeded: "3 hours"
          },
          noOfRetry: 2,
          canRetry: true,
          history: [
            {
              id:"1",
              time: {
                start: "11/5/2022 15:20 UTC",
                end: "11/5/2022 16:20 UTC",
              },
              status: "failed",
              log: {
                url: "https://dummyurl.com",
                error: ""
              }
            }
          ]
        },
        {
          dataassetId:"5",
          dataasset: ["cluster", "database", "schema", "table5"],
          status: "failed",
          duration: {
            exceeded: "3 hours"
          },
          noOfRetry: 2,
          canRetry: true,
          history: [
            {
              id:"1",
              time: {
                start: "11/5/2022 15:20 UTC",
                end: "11/5/2022 16:20 UTC",
              },
              status: "inprogress",
              log: {
                url: "https://dummyurl.com",
                error: "sample data error"
              }
            }
          ]
        },
        {
          dataassetId:"6",
          dataasset: ["cluster", "database", "schema", "table6"],
          status: "inprogress",
          duration: {
            exceeded: "3 hours"
          },
          noOfRetry: 2,
          canRetry: true,
          history: [
            {
              id:"1",
              time: {
                start: "11/5/2022 15:20 UTC",
                end: "11/5/2022 16:20 UTC",
              },
              status: "failed",
              log: {
                url: "https://dummyurl.com",
                error: ""
              }
            }
          ]
        }, {
          dataassetId:"7",
          dataasset: ["cluster", "database", "schema", "table7"],
          status: "inprogress",
          duration: {
            exceeded: "3 hours"
          },
          noOfRetry: 2,
          canRetry: true,
          history: [
            {
              id:"1",
              time: {
                start: "11/5/2022 15:20 UTC",
                end: "11/5/2022 16:20 UTC",
              },
              status: "inprogress",
              log: {
                url: "https://dummyurl.com",
                error: "sample data error"
              }
            }
          ]
        },
        {
          dataassetId:"8",
          dataasset: ["cluster", "database", "schema", "table8"],
          status: "inprogress",
          duration: {
            exceeded: "3 hours"
          },
          noOfRetry: 2,
          canRetry: true,
          history: [
            {
              id:"1",
              time: {
                start: "11/5/2022 15:20 UTC",
                end: "11/5/2022 16:20 UTC",
              },
              status: "failed",
              log: {
                url: "https://dummyurl.com",
                error: ""
              }
            }
          ]
        }, {
          dataassetId:"9",
          dataasset: ["cluster", "database", "schema", "table9"],
          status: "inprogress",
          duration: {
            exceeded: "3 hours"
          },
          noOfRetry: 2,
          canRetry: true,
          history: [
            {
              id:"1",
              time: {
                start: "11/5/2022 15:20 UTC",
                end: "11/5/2022 16:20 UTC",
              },
              status: "inprogress",
              log: {
                url: "https://dummyurl.com",
                error: "sample data error"
              }
            }
          ]
        },
        {
          dataassetId:"10",
          dataasset: ["cluster", "database", "schema", "table10"],
          status: "inprogress",
          duration: {
            exceeded: "3 hours"
          },
          noOfRetry: 2,
          canRetry: true,
          history: [
            {
              id:"1",
              time: {
                start: "11/5/2022 15:20 UTC",
                end: "11/5/2022 16:20 UTC",
              },
              status: "failed",
              log: {
                url: "https://dummyurl.com",
                error: ""
              }
            }
          ]
        }, {
          dataassetId:"11",
          dataasset: ["cluster", "database", "schema", "table11"],
          status: "inprogress",
          duration: {
            exceeded: "3 hours"
          },
          noOfRetry: 2,
          canRetry: true,
          history: [
            {
              id:"1",
              time: {
                start: "11/5/2022 15:20 UTC",
                end: "11/5/2022 16:20 UTC",
              },
              status: "inprogress",
              log: {
                url: "https://dummyurl.com",
                error: "sample data error"
              }
            }
          ]
        },
        {
          dataassetId:"12",
          dataasset: ["cluster", "database", "schema", "table12"],
          status: "inprogress",
          duration: {
            exceeded: "3 hours"
          },
          noOfRetry: 2,
          canRetry: true,
          history: [
            {
              id:"1",
              time: {
                start: "11/5/2022 15:20 UTC",
                end: "11/5/2022 16:20 UTC",
              },
              status: "failed",
              log: {
                url: "https://dummyurl.com",
                error: ""
              }
            }
          ]
        },
        {
          dataassetId:"13",
          dataasset: ["cluster", "database", "schema", "table13"],
          status: "inprogress",
          duration: {
            exceeded: "3 hours"
          },
          noOfRetry: 2,
          canRetry: true,
          history: [
            {
              id:"1",
              time: {
                start: "11/5/2022 15:20 UTC",
                end: "11/5/2022 16:20 UTC",
              },
              status: "inprogress",
              log: {
                url: "https://dummyurl.com",
                error: "sample data error"
              }
            }
          ]
        },
        {
          dataassetId:"14",
          dataasset: ["cluster", "database", "schema", "table14"],
          status: "inprogress",
          duration: {
            exceeded: "3 hours"
          },
          noOfRetry: 2,
          canRetry: true,
          history: [
            {
              id:"1",
              time: {
                start: "11/5/2022 15:20 UTC",
                end: "11/5/2022 16:20 UTC",
              },
              status: "failed",
              log: {
                url: "https://dummyurl.com",
                error: ""
              }
            }
          ]
        }, {
          dataassetId:"15",
          dataasset: ["cluster", "database", "schema", "table15"],
          status: "inprogress",
          duration: {
            exceeded: "3 hours"
          },
          noOfRetry: 2,
          canRetry: true,
          history: [
            {
              id:"1",
              time: {
                start: "11/5/2022 15:20 UTC",
                end: "11/5/2022 16:20 UTC",
              },
              status: "inprogress",
              log: {
                url: "https://dummyurl.com",
                error: "sample data error"
              }
            }
          ]
        },
        {
          dataassetId:"16",
          dataasset: ["cluster", "database", "schema", "table16"],
          status: "inprogress",
          duration: {
            exceeded: "3 hours"
          },
          noOfRetry: 2,
          canRetry: true,
          history: [
            {
              id:"1",
              time: {
                start: "11/5/2022 15:20 UTC",
                end: "11/5/2022 16:20 UTC",
              },
              status: "failed",
              log: {
                url: "https://dummyurl.com",
                error: ""
              }
            }
          ]
        },
        {
          dataassetId:"17",
          dataasset: ["cluster", "database", "schema", "table17"],
          status: "inprogress",
          duration: {
            exceeded: "3 hours"
          },
          noOfRetry: 2,
          canRetry: true,
          history: [
            {
              id:"1",
              time: {
                start: "11/5/2022 15:20 UTC",
                end: "11/5/2022 16:20 UTC",
              },
              status: "failed",
              log: {
                url: "https://dummyurl.com",
                error: ""
              }
            }
          ]
        },
        {
          dataassetId:"18",
          dataasset: ["cluster", "database", "schema", "table18"],
          status: "inprogress",
          duration: {
            exceeded: "3 hours"
          },
          noOfRetry: 2,
          canRetry: true,
          history: [
            {
              id:"1",
              time: {
                start: "11/5/2022 15:20 UTC",
                end: "11/5/2022 16:20 UTC",
              },
              status: "inprogress",
              log: {
                url: "https://dummyurl.com",
                error: "sample data error"
              }
            }
          ]
        },
        {
          dataassetId:"19",
          dataasset: ["cluster", "database", "schema", "table19"],
          status: "inprogress",
          duration: {
            exceeded: "3 hours"
          },
          noOfRetry: 2,
          canRetry: true,
          history: [
            {
              id:"1",
              time: {
                start: "11/5/2022 15:20 UTC",
                end: "11/5/2022 16:20 UTC",
              },
              status: "failed",
              log: {
                url: "https://dummyurl.com",
                error: ""
              }
            }
          ]
        }, {
          dataassetId:"20",
          dataasset: ["cluster", "database", "schema", "table20"],
          status: "inprogress",
          duration: {
            exceeded: "3 hours"
          },
          noOfRetry: 2,
          canRetry: true,
          history: [
            {
              id:"1",
              time: {
                start: "11/5/2022 15:20 UTC",
                end: "11/5/2022 16:20 UTC",
              },
              status: "inprogress",
              log: {
                url: "https://dummyurl.com",
                error: "sample data error"
              }
            }
          ]
        },
        {
          dataassetId:"21",
          dataasset: ["cluster", "database", "schema", "table21"],
          status: "inprogress",
          duration: {
            exceeded: "3 hours"
          },
          noOfRetry: 2,
          canRetry: true,
          history: [
            {
              id:"1",
              time: {
                start: "11/5/2022 15:20 UTC",
                end: "11/5/2022 16:20 UTC",
              },
              status: "failed",
              log: {
                url: "https://dummyurl.com",
                error: ""
              }
            }
          ]
        },
        {
          dataassetId:"22",
          dataasset: ["cluster", "database", "schema", "table22"],
          status: "inprogress",
          duration: {
            exceeded: "3 hours"
          },
          noOfRetry: 2,
          canRetry: true,
          history: [
            {
              id:"1",
              time: {
                start: "11/5/2022 15:20 UTC",
                end: "11/5/2022 16:20 UTC",
              },
              status: "failed",
              log: {
                url: "https://dummyurl.com",
                error: ""
              }
            }
          ]
        },
        {
          dataassetId:"23",
          dataasset: ["cluster", "database", "schema", "table23"],
          status: "inprogress",
          duration: {
            exceeded: "3 hours"
          },
          noOfRetry: 2,
          canRetry: true,
          history: [
            {
              id:"1",
              time: {
                start: "11/5/2022 15:20 UTC",
                end: "11/5/2022 16:20 UTC",
              },
              status: "inprogress",
              log: {
                url: "https://dummyurl.com",
                error: "sample data error"
              }
            }
          ]
        },
        {
          dataassetId:"24",
          dataasset: ["cluster", "database", "schema", "table24"],
          status: "inprogress",
          duration: {
            exceeded: "3 hours"
          },
          noOfRetry: 2,
          canRetry: true,
          history: [
            {
              id:"1",
              time: {
                start: "11/5/2022 15:20 UTC",
                end: "11/5/2022 16:20 UTC",
              },
              status: "failed",
              log: {
                url: "https://dummyurl.com",
                error: ""
              }
            }
          ]
        }, {
          dataassetId:"25",
          dataasset: ["cluster", "database", "schema", "table25"],
          status: "inprogress",
          duration: {
            exceeded: "3 hours"
          },
          noOfRetry: 2,
          canRetry: true,
          history: [
            {
              id:"1",
              time: {
                start: "11/5/2022 15:20 UTC",
                end: "11/5/2022 16:20 UTC",
              },
              status: "inprogress",
              log: {
                url: "https://dummyurl.com",
                error: "sample data error"
              }
            }
          ]
        },
        {
          dataassetId:"26",
          dataasset: ["cluster", "database", "schema", "table26"],
          status: "inprogress",
          duration: {
            exceeded: "3 hours"
          },
          noOfRetry: 2,
          canRetry: true,
          history: [
            {
              id:"1",
              time: {
                start: "11/5/2022 15:20 UTC",
                end: "11/5/2022 16:20 UTC",
              },
              status: "failed",
              log: {
                url: "https://dummyurl.com",
                error: ""
              }
            }
          ]
        }

      ]
    }
    if (param.page.size) {
      data.process = data.process.slice(
        param.page.size * (param.page.number - 1),
        param.page.size * (param.page.number - 1) + param.page.size
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

  app.put("/super-admin/batch/assets/retry", (req, res) => {
    // Payload: {
    //     datasourceName: "azuresqlCluster",
    //     batchId: "500001",
    //     processName: "Sample data (or) Risk calculation (or) Tag extraction",
    //     historyId: "1",
    //     sortBy: "dsc",
    //     sortColumn:"column_name",
    //     page: {
    //         size: 10
    //         number: 5
    //     },
    //     filter: {
    //        status: ["failed", "in-progress"]
    //        dataasset: "Cluster.Database.Schema.Table" // free search text user can search cluster or database or schema or table or combination of all
    //     }
    //     assetId": ["1111233"],
    //     selectAll": true,
    // }

    // RETRY THE SELECTED OR ALL DATA ASSET FOR THE CURRENT BATCH

    // Response
    res.send({
      data: {
        batchId: "500001",
        date: "05/11/2022",
        dataassetDelimiter: '.',
        process: [
          {
            dataasset: ["cluster", "database", "schema", "table_two"],
            dataassetId: "222",
            status: "inprogress",
            duration: {
              exceeded: "3 hours"
            },
            noOfRetry: 2,
            canRetry: true,
            history: [
              {
                id:"1",
                time: {
                  start: "11/5/2022 15:20 UTC", // date format - month/date/year hour/minute timeZone
                  end: "11/5/2022 16:20 UTC",
                },
                status: "failed",
                log: {
                  url: "https://dummyurl.com",
                  error: ""
                },
                historyId: "1",
              }
            ]
          },
          {
            dataasset: ["cluster", "database", "schema", "table_one"],
            dataassetId:"21",
            status: "inprogress",
            duration: {
              exceeded: "3 hours"
            },
            noOfRetry: 2,
            canRetry: true,
            history: [
              {
                id: "1",
                time: {
                  start: "11/5/2022 15:20 UTC",
                  end: "11/5/2022 16:20 UTC",
                },
                status: "failed",
                log: {
                  url: "https://dummyurl.com",
                  error: ""
                }
              }
            ]
          }
        ]
      },
      success: true,
      error: {
        message: "Retried Successfully",
      },
    });

  });

  app.get("/super-admin/batch/dates", (req, res) => {
    // Query Params: { 
    //    datasourceName: "azuresqlCluster"
    // }

    // RETURN ALL BATCH DATE IN DESENDING ORDER 

    // Response
    res.send({
      data: [
        {
          date: "05/11/2022"
        },
        {
          date: "04/11/2022"
        },
        {
          date: "03/11/2022"
        }
      ],
      success: true,
      error: {
        message: "",
      },
    });
  });

  app.get("/super-admin/batch/activity-history", (req, res) => {
    // Query Params: { 
    //    datasourceName: "azuresqlCluster",
    //    date: "05/11/2022 (or) ALL",
    // }

    // RETURN ALL BATCH ACTIVITY HISTORY IN DESENDING ORDER 

    // Response
    let data = [
      {
        date: "05/11/2022",
        batch: [
          {
            id: "500001",
            process: [
              {
                name: "Metadata",
                time: {
                  start: "11/5/2022 15:20 UTC", // date format - month/date/year hour/minute timeZone
                  end: "11/5/2022 16:20 UTC",
                },
                duration: {
                  actual: "2 hours",
                  expected: "2 hours",
                  exceeded: "3 hours"
                },
                status: "inprogress",
                canRetry: true,
                history: [
                  {
                    id:"1",
                    time: {
                      start: "11/5/2022 15:20 UTC",
                      end: "11/5/2022 16:20 UTC",
                    },
                    status: "failed",
                    log: {
                      url: "https://dummyurl.com",
                      error: ""
                    }
                  }
                ]
              },
              {
                name: "Access",
                time: {
                  start: "11/5/2022 15:20 UTC",
                  end: "11/5/2022 16:20 UTC",
                },
                duration: {
                  actual: "2 hours",
                  expected: "2 hours",
                  exceeded: "3 hours"
                },
                status: "inprogress",
                canRetry: true,
                history: [
                  {
                    id:"1",
                    time: {
                      start: "11/5/2022 15:20 UTC",
                      end: "11/5/2022 16:20 UTC",
                    },
                    status: "failed",
                    log: {
                      url: "https://dummyurl.com",
                      error: ""
                    }
                  }
                ]
              },
              {
                name: "Logs",
                time: {
                  start: "11/5/2022 15:20 UTC",
                  end: "11/5/2022 16:20 UTC",
                },
                duration: {
                  actual: "2 hours",
                  expected: "2 hours",
                  exceeded: "3 hours"
                },
                status: "inprogress",
                canRetry: true,
                history: [
                  {
                    id:"1",
                    time: {
                      start: "11/5/2022 15:20 UTC",
                      end: "11/5/2022 16:20 UTC",
                    },
                    status: "failed",
                    log: {
                      url: "https://dummyurl.com",
                      error: ""
                    }
                  }
                ]
              },
              {
                name: "Sample Data",
                time: {
                  start: "11/5/2022 15:20 UTC",
                  end: "11/5/2022 16:20 UTC",
                },
                duration: {
                  actual: "2 hours",
                  expected: "2 hours",
                  exceeded: "2 hours"
                },
                status: {
                  key: "inprogress"
                },
                canRetry: true,
                history: [
                  {
                    id:"1",
                    time: {
                      start: "11/5/2022 15:20 UTC",
                      end: "11/5/2022 16:20 UTC",
                    },
                    status: "failed",
                    log: {
                      url: "https://dummyurl.com",
                      error: ""
                    },
                    assetInformation: {
                      totalCount: 3000,
                      status: [{
                        key: "pending",
                        count: 300
                      },
                      {
                        key: "failed",
                        count: 200
                      },
                      {
                        key: "inprogress",
                        count: 500
                      },
                      {
                        key: "success",
                        count: 2000
                      }]
                    }
                  }
                ]
              },
              {
                name: "Tag Extraction",
                time: {
                  start: "11/5/2022 15:20 UTC",
                  end: "11/5/2022 16:20 UTC",
                },
                duration: {
                  actual: "2 hours",
                  expected: "2 hours",
                  exceeded: "2 hours"
                },
                status: {
                  key: "inprogress"
                },
                canRetry: true,
                history: [
                  {
                    id:"1",
                    time: {
                      start: "11/5/2022 15:20 UTC",
                      end: "11/5/2022 16:20 UTC",
                    },
                    status: "failed",
                    log: {
                      url: "https://dummyurl.com",
                      error: ""
                    },
                    assetInformation: {
                      totalCount: 3000,
                      status: [{
                        key: "pending",
                        count: 300
                      },
                      {
                        key: "failed",
                        count: 200
                      },
                      {
                        key: "inprogress",
                        count: 500
                      },
                      {
                        key: "success",
                        count: 2000
                      }]
                    }
                  }
                ]
              },
              {
                name: "Risk Calculation",
                time: {
                  start: "11/5/2022 15:20 UTC",
                  end: "11/5/2022 16:20 UTC",
                },
                duration: {
                  actual: "2 hours",
                  expected: "2 hours",
                  exceeded: "2 hours"
                },
                status: {
                  key: "inprogress"
                },
                canRetry: true,
                history: [
                  {
                    id:"1",
                    time: {
                      start: "11/5/2022 15:20 UTC",
                      end: "11/5/2022 16:20 UTC",
                    },
                    status: "failed",
                    log: {
                      url: "https://dummyurl.com",
                      error: ""
                    },
                    assetInformation: {
                      totalCount: 3000,
                      status: [{
                        key: "pending",
                        count: 300
                      },
                      {
                        key: "failed",
                        count: 200
                      },
                      {
                        key: "inprogress",
                        count: 500
                      },
                      {
                        key: "success",
                        count: 2000
                      }]
                    }
                  }
                ]
              },
              {
                name: "Summary",
                time: {
                  start: "11/5/2022 15:20 UTC",
                  end: "11/5/2022 16:20 UTC",
                },
                duration: {
                  actual: "2 hours",
                  expected: "2 hours",
                  exceeded: "3 hours"
                },
                status: "inprogress",
                canRetry: true,
                history: [
                  {
                    id:"1",
                    time: {
                      start: "11/5/2022 15:20 UTC",
                      end: "11/5/2022 16:20 UTC",
                    },
                    status: "failed",
                    log: {
                      url: "https://dummyurl.com",
                      error: ""
                    }
                  }
                ]
              },
            ]
          },
          {
            id: "500002",
            process: [
              {
                name: "Metadata",
                time: {
                  start: "11/5/2022 15:20 UTC",
                  end: "11/5/2022 16:20 UTC",
                },
                duration: {
                  actual: "2 hours",
                  expected: "2 hours",
                  exceeded: "3 hours"
                },
                status: "inprogress",
                canRetry: true,
                history: [
                  {
                    id:"1",
                    time: {
                      start: "11/5/2022 15:20 UTC",
                      end: "11/5/2022 16:20 UTC",
                    },
                    status: "failed",
                    log: {
                      url: "https://dummyurl.com",
                      error: ""
                    }
                  }
                ]
              },
              {
                name: "Access",
                time: {
                  start: "11/5/2022 15:20 UTC",
                  end: "11/5/2022 16:20 UTC",
                },
                duration: {
                  actual: "2 hours",
                  expected: "2 hours",
                  exceeded: "3 hours"
                },
                status: "inprogress",
                canRetry: true,
                history: [
                  {
                    id:"1",
                    time: {
                      start: "11/5/2022 15:20 UTC",
                      end: "11/5/2022 16:20 UTC",
                    },
                    status: "failed",
                    log: {
                      url: "https://dummyurl.com",
                      error: ""
                    }
                  }
                ]
              },
              {
                name: "Logs",
                time: {
                  start: "11/5/2022 15:20 UTC",
                  end: "11/5/2022 16:20 UTC",
                },
                duration: {
                  actual: "2 hours",
                  expected: "2 hours",
                  exceeded: "3 hours"
                },
                status: "inprogress",
                canRetry: true,
                history: [
                  {
                    id:"1",
                    time: {
                      start: "11/5/2022 15:20 UTC",
                      end: "11/5/2022 16:20 UTC",
                    },
                    status: "failed",
                    log: {
                      url: "https://dummyurl.com",
                      error: ""
                    }
                  }
                ]
              },
              {
                name: "Sample Data",
                time: {
                  start: "11/5/2022 15:20 UTC",
                  end: "11/5/2022 16:20 UTC",
                },
                duration: {
                  actual: "2 hours",
                  expected: "2 hours",
                  exceeded: "2 hours"
                },
                status: {
                  key: "inprogress"
                },
                canRetry: true,
                history: [
                  {
                    id:"1",
                    time: {
                      start: "11/5/2022 15:20 UTC",
                      end: "11/5/2022 16:20 UTC",
                    },
                    status: "failed",
                    log: {
                      url: "https://dummyurl.com",
                      error: ""
                    },
                    assetInformation: {
                      totalCount: 3000,
                      status: [{
                        key: "pending",
                        count: 300
                      },
                      {
                        key: "failed",
                        count: 200
                      },
                      {
                        key: "inprogress",
                        count: 500
                      },
                      {
                        key: "success",
                        count: 2000
                      }]
                    }
                  }
                ]
              },
              {
                name: "Tag Extraction",
                time: {
                  start: "11/5/2022 15:20 UTC",
                  end: "11/5/2022 16:20 UTC",
                },
                duration: {
                  actual: "2 hours",
                  expected: "2 hours",
                  exceeded: "2 hours"
                },
                status: {
                  key: "inprogress"
                },
                canRetry: true,
                history: [
                  {
                    id:"1",
                    time: {
                      start: "11/5/2022 15:20 UTC",
                      end: "11/5/2022 16:20 UTC",
                    },
                    status: "failed",
                    log: {
                      url: "https://dummyurl.com",
                      error: ""
                    },
                    assetInformation: {
                      totalCount: 3000,
                      status: [{
                        key: "pending",
                        count: 300
                      },
                      {
                        key: "failed",
                        count: 200
                      },
                      {
                        key: "inprogress",
                        count: 500
                      },
                      {
                        key: "success",
                        count: 2000
                      }]
                    }
                  }
                ]
              },
              {
                name: "Risk Calculation",
                time: {
                  start: "11/5/2022 15:20 UTC",
                  end: "11/5/2022 16:20 UTC",
                },
                duration: {
                  actual: "2 hours",
                  expected: "2 hours",
                  exceeded: "2 hours"
                },
                status: {
                  key: "inprogress"
                },
                canRetry: true,
                history: [
                  {
                    id:"1",
                    time: {
                      start: "11/5/2022 15:20 UTC",
                      end: "11/5/2022 16:20 UTC",
                    },
                    status: "failed",
                    log: {
                      url: "https://dummyurl.com",
                      error: ""
                    },
                    assetInformation: {
                      totalCount: 3000,
                      status: [{
                        key: "pending",
                        count: 300
                      },
                      {
                        key: "failed",
                        count: 200
                      },
                      {
                        key: "inprogress",
                        count: 500
                      },
                      {
                        key: "success",
                        count: 2000
                      }]
                    }
                  }
                ]
              },
              {
                name: "Summary",
                time: {
                  start: "11/5/2022 15:20 UTC",
                  end: "11/5/2022 16:20 UTC",
                },
                duration: {
                  actual: "2 hours",
                  expected: "2 hours",
                  exceeded: "3 hours"
                },
                status: "inprogress",
                canRetry: true,
                history: [
                  {
                    id:"1",
                    time: {
                      start: "11/5/2022 15:20 UTC",
                      end: "11/5/2022 16:20 UTC",
                    },
                    status: "failed",
                    log: {
                      url: "https://dummyurl.com",
                      error: ""
                    }
                  }
                ]
              },
            ]
          }
        ]
      },
      {
        date: "04/11/2022",
        batch: []
      },
      {
        date: "03/11/2022",
        batch: []
      }
    ]
    res.send({
      data: data,
      success: true,
      error: {
        message: "",
      },
    });
  })

  app.get("/super-admin/settings/process/retry-limit", (req, res) => {
    // Query Params: None

    // RETURN RETRY LIMIT DETAIL

    // Response
    res.send({
      data: {
        maximumNoOfRetry: 20
      },
      success: true,
      error: {
        message: "",
      },
    })
  });

  app.put("/super-admin/settings/process/retry-limit", (req, res) => {
    // Payload: {
    //   maximumNoOfRetry: 20
    // }

    // ADD OR UPDATE THE CUSTOMIZED RETRY LIMIT AND RETURN THE SAME FORMAT AS LIKE THE PAYLOAD

    // Response
    res.send({
      data: {
        maximumNoOfRetry: 20
      },
      success: true,
      error: {
        message: "",
      },
    })
  });

  app.get("/super-admin/settings/process/expected-duration", (req, res) => {
    // Query Params: None

    // RETURN ALL EXPECTED DURATION DETAILS

    // Response
    res.send({
      data: [
        {
          name: "Metadata",
          level: "process",
          duration: {
            default: 30,
            custom: 50,
            type: "minutes"
          }
        },
        {
          name: "Access",
          level: "process",
          duration: {
            default: 30,
            custom: 50,
            type: "minutes"
          }
        },
        {
          name: "Logs",
          level: "process",
          duration: {
            default: 30,
            custom: 50,
            type: "minutes"
          }
        },
        {
          name: "Summary",
          level: "process",
          duration: {
            default: 30,
            custom: 50,
            type: "minutes"
          }
        },
        {
          name: "Tag Extraction",
          level: "asset",
          duration: {
            default: 30,
            custom: 50,
            type: "minutes"
          }
        },
        {
          name: "Sample Data",
          level: "asset",
          duration: {
            default: 30,
            custom: 50,
            type: "minutes"
          }
        },
        {
          name: "Risk Calculation",
          level: "asset",
          duration: {
            default: 30,
            custom: 50,
            type: "minutes"
          }
        }
      ],
      success: true,
      error: {
        message: "",
      },
    })
  });

  app.put("/super-admin/settings/process/expected-duration", (req, res) => {
    // Payload: {
    //   process: [
    //     {
    //       name: "Metadata",
    //       level: "process",
    //       duration: {
    //         default: 30,
    //         custom: 50,
    //         type: "minutes"
    //       }
    //     },
    //     {
    //       name: "Risk Calculation",
    //       level: "asset",
    //       duration: {
    //         default: 30,
    //         custom: 50,
    //         type: "minutes"
    //       }
    //     }
    //   ]
    // }

    // ADD OR UPDATE THE CUSTOMIZED EXPECTED DURATION AND RETURN THE SAME FORMAT AS LIKE THE PAYLOAD

    // Response
    res.send({
      data: [
        {
          name: "Metadata",
          level: "process",
          duration: {
            default: 30,
            custom: 40,
            type: "minutes"
          }
        },
        {
          name: "Risk Calculation",
          level: "asset",
          duration: {
            default: 30,
            custom: 40,
            type: "minutes"
          }
        }
      ],
      success: true,
      error: {
        message: "",
      },
    })
  });

  app.get("/super-admin/settings/scheduler/pause-process", (req, res) => {
    // Query Params: None

    // RETURN THE BATCH PAUSE STATUS

    // Response
    res.send({
      data: {
        processPaused: true
      },
      success: true,
      error: {
        message: "",
      },
    })
  });

  app.put("/super-admin/settings/scheduler/pause-process", (req, res) => {
    // Payload: {
    //   processPaused: true
    // }

    // UPDATE THE PAUSE STATUS OF THE BATCH AND RETURN THE UPDATED VALUE

    // Response
    res.send({
      data: {
        processPaused: true
      },
      success: true,
      error: {
        message: "",
      },
    })
  });

  app.get("/super-admin/settings/scheduler/recurrence", (req, res) => {
    // Query Params: None

    // RETURN SCHEDULED BATCH DETAILS

    // Response
    res.send({
      data: {
        time: "15:55",
        repeat: "daily (or) weekly (or) monthly",
        days: ['monday', 'tuesday', 'wednesday', 'thursday'],
        onDate: 28,
        onWeekDay: {
          range: 'fourth',
          day: 'monday'
        }
      },
      success: true,
      error: {
        message: "",
      },
    })
  });

  app.put("/super-admin/settings/scheduler/recurrence", (req, res) => {
    // Payload: {
    //   time: "15:55",
    //   repeat: "daily (or) weekly (or) monthly",
    //   days: ['monday', 'tuesday', 'wednesday', 'thursday'],
    //   onDate: 28,
    //   onWeekDay: {
    //     range: 'fourth',
    //     day: 'monday'
    //   }
    // }

    // ADD OR UPDATE THE CUSTOMIZED SCHEDULED BATCH AND RETURN THE UPDATED CUSTOMIZED SCHEDULED BATCH DETAILS

    // Response
    res.send({
      data: {
        time: "15:55",
        repeat: "daily (or) weekly (or) monthly",
        days: ['monday', 'tuesday', 'wednesday', 'thursday'],
        onDate: 28,
        onWeekDay: {
          range: 'fourth',
          day: 'monday'
        }
      },
      success: true,
      error: {
        message: "",
      },
    })
  });

  app.get("/super-admin/settings/notification/from-email", (req, res) => {
    // Query Params: None

    // RETURN FROM EMAIL DETAILS

    // Response
    res.send({
      data: {
        smtpProvider: "Microsoft",
        smtpServerUrl: "https://www.microsoft.com",
        port: 8000,
        emailId: "test@onedpo.com",
        // password: "test@123",
        sslEnabled: false
      },
      success: true,
      error: {
        message: "",
      },
    })
  });

  app.put("/super-admin/settings/notification/from-email", (req, res) => {
    // Payload: {
    //   smtpProvider: "Microsoft",
    //   smtpServerUrl: "https://www.microsoft.com",
    //   port: 8000,
    //   emailId: "test@onedpo.com",
    //   password: "test@123",
    //   sslEnabled: false
    // }

    // ADD OR UPDATE THE CUSTOMIZED FROM EMAIL AND RETURN THE SAME FORMAT AS LIKE THE PAYLOAD

    // Response
    res.send({
      data: {
        smtpProvider: "Microsoft",
        smtpServerUrl: "https://www.microsoft.com",
        port: 8000,
        emailId: "test@onedpo.com",
        // password: "test@123",
        sslEnabled: false
      },
      success: true,
      error: {
        message: "",
      },
    })
  });

  app.get("/super-admin/settings/notification/to-email", (req, res) => {
    // Query Params: None

    // RETURN ALL TO EMAIL DETAILS

    // Response
    res.send({
      data: {
        emails: ["test@onedpo.com", "support@onedpo.com"],
      },
      success: true,
      error: {
        message: "",
      },
    })
  });

  app.put("/super-admin/settings/notification/to-email", (req, res) => {
    // Payload: {
    //   emails: ["test@onedpo.com", "support@onedpo.com"]
    // }

    // ADD OR UPDATE THE CUSTOMIZED TO EMAIL AND RETURN THE SAME FORMAT AS LIKE THE PAYLOAD

    // Response
    res.send({
      data: {
        emails: ["test@onedpo.com", "support@onedpo.com"]
      },
      success: true,
      error: {
        message: "",
      },
    })
  });

};
