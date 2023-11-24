module.exports = (app) => {
  app.get("/datasources/info", (req, res) => {
    // Payload: None

    // RETURN ALL DATASOURCES

    // Response
    res.send({
      data: [
        {
          datasourceType: "redshift",
          datasourceName: "redshiftCluster",
          databaseName:"orders"
        },
        {
          datasourceType: "azuresql",
          datasourceName: "azuresqlCluster",
          databaseName:"azure_db"
        },
        {
          datasourceType: "snowflake",
          datasourceName: "snowflakeCluster",
          totalDatabases:26
        }
      ],
      success: true,
      error: {
        message: "",
      },
    });
  });
  app.get("/processes/batch-date", (req, res) => {
    // Payload: { 
    //   data: {
    //    datasourceName: "azuresqlCluster"
    //   }
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

  app.get("/dashboard/daywise-process", (req, res) => {
    // Payload: { 
    //   data: {
    //     datasourceName: "azuresqlCluster",
    //     date: "05/11/2022"
    //   }
    // }

    // RETURN DIFFERENT STATUS LABEL WITH ITS COLOR 
    // RETURN ONLY LATEST BATCH OF THE DAY 
    // RETURN LIST OF PROCESS WITH ITS STATUS, TIME AND DURATION
    // RETURN EXCEEDED THRESHOLD PROCESS DETAILS
    // RETURN FAILED LOGS URL AND IT'S SIZE

    // Response
    res.send({
      data: {
        label: [
          {
            key: "All",
            color: ""
          },
          {
            key: "Pending",
            color: "yellow"
          },
          {
            key: "Inprogress",
            color: "orange"
          },
          {
            key: "Success",
            color: "green"
          },
          {
            key: "Failed",
            color: "red"
          }
        ],
        process: [
          {
            name: "Metadata",
            status: "inprogress",
            time: {
              start: "5:11:2022 15:20",
              end: "5:11:2022 16:20"
            },
            retryCount: 2,
          },
          {
            name: "Access",
            status: "Success",
            time: {
              start: "5:11:2022 15:20",
              end: "5:11:2022 16:20"
            },
            retryCount: 2,
          },
          {
            name: "Logs",
            status: "Failed",
            time: {
              start: "5:11:2022 15:20",
              end: "5:11:2022 16:20"
            },
            retryCount: 2,
          },
          {
            name: "Summary",
            status: "pending",
            time: {
              start: "5:11:2022 15:20",
              end: "5:11:2022 16:20"
            },
            retryCount: 2,
          },
          {
            name: "Tag extraction",
            status: "Success",
            time: {
              start: "5:11:2022 15:20",
              end: "5:11:2022 16:20"
            },
            retryCount: 2,
          },
          {
            name: "Sample data extraction",
            status: "inprogress",
            time: {
              start: "5:11:2022 15:20",
              end: "5:11:2022 16:20"
            },
            retryCount: 2,
          },
          {
            name: "Risk calculation",
            status: "Failed",
            time: {
              start: "5:11:2022 15:20",
              end: "5:11:2022 16:20"
            },
            retryCount: 2,
          },
        ],
        thresholdExceeded: [
          { key: 'Risk calculation', value: 22, color: 'green' },
          { key: 'Summary', value: 33, color: 'orange' },
          { key: 'Metadata', value: 42, color: 'red' },
          { key: 'Logs', value: 0, color: 'grey' }
        ],
        logs: [
          {
            name: "Metadata",
            timestamp: "05-11-2022:00:12:00",
            file: {
              size: "100kb",
              url: "http://dummyfile.com"
            }
          },
          {
            name: "Access",
            timestamp: "05-11-2022:00:12:00",
            file: {
              size: "100kb",
              url: "http://dummyfile.com"
            }
          },
          {
            name: "Logs",
            timestamp: "05-11-2022:00:12:00",
            file: {
              size: "100kb",
              url: "http://dummyfile.com"
            }
          },
          {
            name: "Summary",
            timestamp: "05-11-2022:00:12:00",
            file: {
              size: "100kb",
              url: "http://dummyfile.com"
            }
          },
          {
            name: "Tag extraction",
            timestamp: "05-11-2022:00:12:00",
            file: {
              size: "100kb",
              url: "http://dummyfile.com"
            }
          },
          {
            name: "Sample data extraction",
            timestamp: "05-11-2022:00:12:00",
            file: {
              size: "100kb",
              url: "http://dummyfile.com"
            }
          },
          {
            name: "Risk calculation",
            timestamp: "05-11-2022:00:12:00",
            file: {
              size: "100kb",
              url: "http://dummyfile.com"
            }
          },
        ]
      },
      success: true,
      error: {
        message: "",
      },
    });
  });

  app.get("/dashboard/weekly-process", (req, res) => {
    // Payload: { 
    //   data: {
    //     datasourceName: "azuresqlCluster",
    //     date:{ start: "05/11/2022", end: "12/11/2022"} 
    //   }
    // }

    // RETURN 7 DAYS BATCH PROCESS TIME AND DURATION INFORMATION BASED ON DATE INTERVAL 
    // RETURN ONLY LATEST BATCH OF THE DAY

    // Response
    res.send({
      data: {
        process: [
          {
            name: "Metadata",
            days: [
              {
                date: "12/11/2020",
                time: {
                  start: "5:11:2022 15:20",
                  end: "5:11:2022 16:20"
                }
              },
              {
                date: "13/11/2020",
                time: {
                  start: "5:11:2022 15:20",
                  end: "5:11:2022 16:20"
                }
              },
              {
                date: "14/11/2020",
                time: {
                  start: "5:11:2022 15:20",
                  end: "5:11:2022 16:20"
                }
              },
              {
                date: "15/11/2020",
                time: {
                  start: "5:11:2022 15:20",
                  end: "5:11:2022 16:20"
                }
              },
              {
                date: "16/11/2020",
                time: {
                  start: "5:11:2022 15:20",
                  end: "5:11:2022 16:20"
                }
              },
              {
                date: "17/11/2020",
                time: {
                  start: "5:11:2022 15:20",
                  end: "5:11:2022 16:20"
                }
              },
              {
                date: "18/11/2020",
                time: {
                  start: "5:11:2022 15:20",
                  end: "5:11:2022 16:20"
                }
              }
            ]
          },
          {
            name: "Access",
            days: [
              {
                date: "12/11/2020",
                time: {
                  start: "5:11:2022 15:20",
                  end: "5:11:2022 16:20"
                }
              },
              {
                date: "13/11/2020",
                time: {
                  start: "5:11:2022 15:20",
                  end: "5:11:2022 16:20"
                }
              },
              {
                date: "14/11/2020",
                time: {
                  start: "5:11:2022 15:20",
                  end: "5:11:2022 16:20"
                }
              },
              {
                date: "15/11/2020",
                time: {
                  start: "5:11:2022 15:20",
                  end: "5:11:2022 16:20"
                }
              },
              {
                date: "16/11/2020",
                time: {
                  start: "5:11:2022 15:20",
                  end: "5:11:2022 16:20"
                }
              },
              {
                date: "17/11/2020",
                time: {
                  start: "5:11:2022 15:20",
                  end: "5:11:2022 16:20"
                }
              },
              {
                date: "18/11/2020",
                time: {
                  start: "5:11:2022 15:20",
                  end: "5:11:2022 16:20"
                }
              }
            ]
          },
          {
            name: "Logs",
            days: [
              {
                date: "12/11/2020",
                time: {
                  start: "5:11:2022 15:20",
                  end: "5:11:2022 16:20"
                }
              },
              {
                date: "13/11/2020",
                time: {
                  start: "5:11:2022 15:20",
                  end: "5:11:2022 16:20"
                }
              },
              {
                date: "14/11/2020",
                time: {
                  start: "5:11:2022 15:20",
                  end: "5:11:2022 16:20"
                }
              },
              {
                date: "15/11/2020",
                time: {
                  start: "5:11:2022 15:20",
                  end: "5:11:2022 16:20"
                }
              },
              {
                date: "16/11/2020",
                time: {
                  start: "5:11:2022 15:20",
                  end: "5:11:2022 16:20"
                }
              },
              {
                date: "17/11/2020",
                time: {
                  start: "5:11:2022 15:20",
                  end: "5:11:2022 16:20"
                }
              },
              {
                date: "18/11/2020",
                time: {
                  start: "5:11:2022 15:20",
                  end: "5:11:2022 16:20"
                }
              }
            ]
          },
          {
            name: "Summary",
            days: [
              {
                date: "12/11/2020",
                time: {
                  start: "5:11:2022 15:20",
                  end: "5:11:2022 16:20"
                }
              },
              {
                date: "13/11/2020",
                time: {
                  start: "5:11:2022 15:20",
                  end: "5:11:2022 16:20"
                }
              },
              {
                date: "14/11/2020",
                time: {
                  start: "5:11:2022 15:20",
                  end: "5:11:2022 16:20"
                }
              },
              {
                date: "15/11/2020",
                time: {
                  start: "5:11:2022 15:20",
                  end: "5:11:2022 16:20"
                }
              },
              {
                date: "16/11/2020",
                time: {
                  start: "5:11:2022 15:20",
                  end: "5:11:2022 16:20"
                }
              },
              {
                date: "17/11/2020",
                time: {
                  start: "5:11:2022 15:20",
                  end: "5:11:2022 16:20"
                }
              },
              {
                date: "18/11/2020",
                time: {
                  start: "5:11:2022 15:20",
                  end: "5:11:2022 16:20"
                }
              }
            ]
          },
          {
            name: "Tag extraction",
            days: [
              {
                date: "12/11/2020",
                time: {
                  start: "5:11:2022 15:20",
                  end: "5:11:2022 16:20"
                }
              },
              {
                date: "13/11/2020",
                time: {
                  start: "5:11:2022 15:20",
                  end: "5:11:2022 16:20"
                }
              },
              {
                date: "14/11/2020",
                time: {
                  start: "5:11:2022 15:20",
                  end: "5:11:2022 16:20"
                }
              },
              {
                date: "15/11/2020",
                time: {
                  start: "5:11:2022 15:20",
                  end: "5:11:2022 16:20"
                }
              },
              {
                date: "16/11/2020",
                time: {
                  start: "5:11:2022 15:20",
                  end: "5:11:2022 16:20"
                }
              },
              {
                date: "17/11/2020",
                time: {
                  start: "5:11:2022 15:20",
                  end: "5:11:2022 16:20"
                }
              },
              {
                date: "18/11/2020",
                time: {
                  start: "5:11:2022 15:20",
                  end: "5:11:2022 16:20"
                }
              }
            ]
          },
          {
            name: "Sample data extraction",
            days: [
              {
                date: "12/11/2020",
                time: {
                  start: "5:11:2022 15:20",
                  end: "5:11:2022 16:20"
                }
              },
              {
                date: "13/11/2020",
                time: {
                  start: "5:11:2022 15:20",
                  end: "5:11:2022 16:20"
                }
              },
              {
                date: "14/11/2020",
                time: {
                  start: "5:11:2022 15:20",
                  end: "5:11:2022 16:20"
                }
              },
              {
                date: "15/11/2020",
                time: {
                  start: "5:11:2022 15:20",
                  end: "5:11:2022 16:20"
                }
              },
              {
                date: "16/11/2020",
                time: {
                  start: "5:11:2022 15:20",
                  end: "5:11:2022 16:20"
                }
              },
              {
                date: "17/11/2020",
                time: {
                  start: "5:11:2022 15:20",
                  end: "5:11:2022 16:20"
                }
              },
              {
                date: "18/11/2020",
                time: {
                  start: "5:11:2022 15:20",
                  end: "5:11:2022 16:20"
                }
              }
            ]
          },
          {
            name: "Risk calculation",
            days: [
              {
                date: "12/11/2020",
                time: {
                  start: "5:11:2022 15:20",
                  end: "5:11:2022 16:20"
                }
              },
              {
                date: "13/11/2020",
                time: {
                  start: "5:11:2022 15:20",
                  end: "5:11:2022 16:20"
                }
              },
              {
                date: "14/11/2020",
                time: {
                  start: "5:11:2022 15:20",
                  end: "5:11:2022 16:20"
                }
              },
              {
                date: "15/11/2020",
                time: {
                  start: "5:11:2022 15:20",
                  end: "5:11:2022 16:20"
                }
              },
              {
                date: "16/11/2020",
                time: {
                  start: "5:11:2022 15:20",
                  end: "5:11:2022 16:20"
                }
              },
              {
                date: "17/11/2020",
                time: {
                  start: "5:11:2022 15:20",
                  end: "5:11:2022 16:20"
                }
              },
              {
                date: "18/11/2020",
                time: {
                  start: "5:11:2022 15:20",
                  end: "5:11:2022 16:20"
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


  app.get("/processes/list", (req, res) => {
    // Payload: {
    //   data:{
    //     datasourceName: "azuresqlCluster",
    //     date: "15/11/2022",
    //     sortBy: "dsc" | "asc"
    //   }
    // } 


    // RETURN ALL PROCESS DETAILS WITH STATUS BASED ON DATE AND SORT ORDER DESENDING ORDER

    // HEADS UP!
    // RETRY COUNT ONLY AVAILABLE FOR PROCESS LEVEL 
    // CHECK THIS KEY -> data -> process-> processList -> retryCount 

    // Response
    res.send({
      data: {
        process: [
          {
            batchId: "500001",
            time: {
              start: "15:03",
              end: "15:03"
            },
            processList: [
              {
                name: "Metadata",
                status: "inprogress",
                time: {
                  start: "5:11:2022 15:20",
                  end: "5:11:2022 16:20",
                  duration: "2 hours"
                },
                threshold: {
                  duration: "3 hours",
                },
                logs: {
                  url: "https://dummyurl.com",
                  size: "20kb"
                },
                retryCount: 2,
              },
              {
                name: "Access",
                status: "Success",
                time: {
                  start: "5:11:2022 15:20",
                  end: "5:11:2022 16:20",
                  duration: "2 hours"
                },
                threshold: {
                  duration: "3 hours",
                },
                logs: {
                  url: "https://dummyurl.com",
                  size: "20kb"
                },
                retryCount: 2,
              },
              {
                name: "Logs",
                status: "Failed",
                time: {
                  start: "5:11:2022 15:20",
                  end: "5:11:2022 16:20",
                  duration: "2 hours"
                },
                threshold: {
                  duration: "3 hours",
                },
                logs: {
                  url: "https://dummyurl.com",
                  size: "20kb"
                },
                retryCount: 2,
              },
              {
                name: "Summary",
                status: "pending",
                time: {
                  start: "5:11:2022 15:20",
                  end: "5:11:2022 16:20",
                  duration: "2 hours"
                },
                threshold: {
                  duration: "3 hours",
                },
                logs: {
                  url: "https://dummyurl.com",
                  size: "20kb"
                },
                retryCount: 2,
              },
              {
                name: "Tag extraction",
                status: "Success",
                time: {
                  start: "5:11:2022 15:20",
                  end: "5:11:2022 16:20",
                  duration: "2 hours"
                },
                threshold: {
                  duration: "3 hours",
                },
                logs: {
                  url: "https://dummyurl.com",
                  size: "20kb"
                },
              },
              {
                name: "Sample data extraction",
                status: "inprogress",
                time: {
                  start: "5:11:2022 15:20",
                  end: "5:11:2022 16:20",
                  duration: "2 hours"
                },
                threshold: {
                  duration: "3 hours",
                },
                logs: {
                  url: "https://dummyurl.com",
                  size: "20kb"
                },
              },
              {
                name: "Risk calculation",
                status: "Failed",
                time: {
                  start: "5:11:2022 15:20",
                  end: "5:11:2022 16:20",
                  duration: "2 hours"
                },
                threshold: {
                  duration: "3 hours",
                },
                logs: {
                  url: "https://dummyurl.com",
                  size: "20kb"
                },
              }
            ]
          }
        ]
      },
      success: true,
      error: {
        message: "",
      },
    });

  })

  app.get("/processes/retry-all", (req, res) => {
    // Payload: {
    //   data:{
    //     datasourceName: "azuresqlCluster",
    //   }
    // } 

    // RETRY ALL CURRENT PROCESSES
    // RETURN ALL PROCESS DETAILS WITH STATUS 

    // Response
    res.send({
      data: {
        batchId: "500001",
        time: {
          start: "5:11:2022 15:20",
          end: "5:11:2022 16:20"
        },
        processList: [
          {
            name: "Metadata",
            status: "inprogress",
            time: {
              start: "5:11:2022 15:20",
              end: "5:11:2022 16:20",
              duration: "2 hours"
            },
            threshold: {
              duration: "3 hours",
            },
            logs: {
              url: "https://dummyurl.com",
              size: "20kb"
            },
            retryCount: 2,
          },
          {
            name: "Access",
            status: "Success",
            time: {
              start: "5:11:2022 15:20",
              end: "5:11:2022 16:20",
              duration: "2 hours"
            },
            threshold: {
              duration: "3 hours",
            },
            logs: {
              url: "https://dummyurl.com",
              size: "20kb"
            },
            retryCount: 2,
          },
          {
            name: "Logs",
            status: "Failed",
            time: {
              start: "5:11:2022 15:20",
              end: "5:11:2022 16:20",
              duration: "2 hours"
            },
            threshold: {
              duration: "3 hours",
            },
            logs: {
              url: "https://dummyurl.com",
              size: "20kb"
            },
            retryCount: 2,
          },
          {
            name: "Summary",
            status: "pending",
            time: {
              start: "5:11:2022 15:20",
              end: "5:11:2022 16:20",
              duration: "2 hours"
            },
            threshold: {
              duration: "3 hours",
            },
            logs: {
              url: "https://dummyurl.com",
              size: "20kb"
            },
            retryCount: 2,
          },
          {
            name: "Tag extraction",
            status: "Success",
            time: {
              start: "5:11:2022 15:20",
              end: "5:11:2022 16:20",
              duration: "2 hours"
            },
            threshold: {
              duration: "3 hours",
            },
            logs: {
              url: "https://dummyurl.com",
              size: "20kb"
            },
          },
          {
            name: "Sample data extraction",
            status: "inprogress",
            time: {
              start: "5:11:2022 15:20",
              end: "5:11:2022 16:20",
              duration: "2 hours"
            },
            threshold: {
              duration: "3 hours",
            },
            logs: {
              url: "https://dummyurl.com",
              size: "20kb"
            },
          },
          {
            name: "Risk calculation",
            status: "Failed",
            time: {
              start: "5:11:2022 15:20",
              end: "5:11:2022 16:20",
              duration: "2 hours"
            },
            threshold: {
              duration: "3 hours",
            },
            logs: {
              url: "https://dummyurl.com",
              size: "20kb"
            },
          }
        ]
      },
      success: true,
      error: {
        message: "",
      },
    })
  });

  app.get("/processes/threshold", (req, res) => {
    // Payload: {
    //   data:{
    //     datasourceName: "azuresqlCluster",
    //   }
    // } 

    // RETURN ALL THRESHOLD DETAILS

    // Response
    res.send({
      data: [
          {
            name: "Metadata",
            level: "process",
            threshold: {
              duration: 3,
              type: "hours"
            },
          },
          {
            name: "Access",
            level: "process",
            threshold: {
              duration: 3,
              type: "hours"
            },
          },
          {
            name: "Logs",
            level: "process",
            threshold: {
              duration: 3,
              type: "hours"
            },
          },
          {
            name: "Summary",
            level: "process",
            threshold: {
              duration: 3,
              type: "hours"
            },
          },
          {
            name: "Tag extraction",
            level: "asset",
            threshold: {
              duration: 3,
              type: "hours"
            },
          },
          {
            name: "Sample data extraction",
            level: "asset",
            threshold: {
              duration: 3,
              type: "hours"
            },
          },
          {
            name: "Risk calculation",
            level: "asset",
            threshold: {
              duration: 3,
              type: "hours"
            },
          }
        ],
      success: true,
      error: {
        message: "",
      },
    })
  });

  app.put("/processes/threshold", (req, res) => {
    // Payload: {
    // data: {
    //   datasourceName: "azuresqlCluster",
    //   threshold: [
    //     {
    //       name: "Metadata",
    //       level: "asset",
    //       threshold: {
    //         duration: 3,
    //         type: "Hours"
    //       },
    //     }]
    // }

    // UPDATE THE THRESHOLD AND RETURN THE SAME FORMAT AS LIKE THE PAYLOAD

    // Response
    res.send({
      data:req.body.data,
      // data: [
      //     {
      //       name: "Metadata",
      //       level: "process",
      //       threshold: {
      //         duration: 3,
      //         type: "hours"
      //       },
      //     }
      //   ],
      success: true,
      error: {
        message: "",
      },
    })
  });

  app.get("/process/latest-batch", (req, res) => {
    /*
    Payload:{
      data:{
        datasourceName: "azuresqlCluster",
        "processName":"Access/Logs/Asset list/Summary/Sample Data/Risk Calculation/Tag Extraction"
      }
    }
    */

    // RETURN LATEST BATCH DETAIL BY ITS PROCESS NAME

    res.send({
      data: {
        "process": {
          "batchId": "5001",
          "name": "Access",
          "status": "inprogress",
          "time":
          {
            "start": "5:11:2022 6:30",
            "end": "5:11:2022 7:30",
            "duration": "5 Hours",
          },
          "threshold": { "duration": "5 Hours" },
          "logs": {
            "url": "https://access.com",
            "size": "10kb"
          },
          "retry": {
            "count": 2,
          }
        },
      }
    })
  });

  app.put("/process-level/info", (req, res) => {
    // Payload: {
    //   data: {
    //     datasourceName: "azuresqlCluster", 
    //     processName: "Access/Logs/Asset list/Summary",
    //     sortBy: "dsc",
    //     page: {
    //       pageSize: 10,
    //       pageNumber: 5,
    //       children: { batchId: '5001', pageSize: 10, pageNumber: 5, }
    //     },
    //     filter: [
    //       {
    //         name: "status",
    //         value: "failed"
    //       },
    //       {
    //         name: "date",
    //         value: "19/01/2020"
    //       }
    //     ]
    //   }
    // }

    // IF THE FILTER IS EMPTY BY DEFAULT THE API SHOULD RETURN FAILED PROCESS DETAILS 
    // RETURN STATUS FILTER WITH COLOR
    // RETURN DATE FILTER
    // RETURN PROCESS LEVEL DETAILS IN SORT ORDER DESENDING ORDER 
    // PROCESS LEVEL DETAILS SHOULD BE IN TWO LEVEL
    // FIRST -> BATCH LEVEL DETAILS WITH COUNT AND PAGINATION
    // SECOND -> BATCH LEVEL RETRY DETAILS WITH COUNT AND PAGINATION

    // Response
    res.send({
      data: {
        "processStatusFilter": [
          {
            "key": "All",
            "color": ""
          },
          {
            "key": "Pending",
            "color": "yellow"
          },
          {
            "key": "Inprogress",
            "color": "orange"
          },
          {
            "key": "Success",
            "color": "green"
          },
          {
            "key": "Failed",
            "color": "red"
          }
        ],
        "processDateFilter": [
          {
            "date": "05/11/2022"
          },
          {
            "date": "04/11/2022"
          },
          {
            "date": "03/11/2022"
          }
        ],
        "batchCount": 100,
        "process": [{
          "batchId": "5001",
          "status": "inprogress",
          "reprocess": true,
          "retry": {
            "count": 2,
            "process": [{
              "threshold": { "status": "ontrack" },
              "time":
              {
                "start": "5:11:2022 6:30",
                "end": "5:11:2022 7:30",
                "duration": "5 Hours",
              },
              "logs": {
                "url": "https://access.com",
                "size": "10kb"
              }
            }]
          },
        }],
      },
      success: true,
      error: {
        message: "",
      },
    });
  });

  app.put("/asset-level/info", (req, res) => {
    // Payload: {
    //   data: {
    //     datasourceName: "azuresqlCluster",
    //     processName: "Sample data/Risk calculation/Tag extraction",
    //     sortBy: "dsc",
    //     page: {
    //       pageSize: 10,
    //       pageNumber: 5,
    //       children: { batchId: '5001', pageSize: 10, pageNumber: 5,children:{ batchId: '5001',dataasset:"cluster.database.schema.table", pageSize: 10, pageNumber: 5}}
    //     },
    //     filter: [
    //       {
    //         name: "status",
    //         value: "failed"
    //       },
    //       {
    //         name: "date",
    //         value: "19/01/2020"
    //       }
    //     ]
    //   }
    // }

    // IF THE FILTER IS EMPTY BY DEFAULT THE API SHOULD RETURN FAILED ASSET DETAILS 
    // RETURN STATUS FILTER WITH COLOR
    // RETURN DATE FILTER
    // RETURN ASSET LEVEL DETAILS IN SORT ORDER DESENDING ORDER 
    // ASSET LEVEL DETAILS SHOULD BE IN THREE LEVEL
    // FIRST -> BATCH LEVEL DETAILS WITH COUNT AND PAGINATION
    // SECOND -> ASSET LEVEL DETAILS WITH COUNT AND PAGINATION
    // THIRD -> ASSET LEVEL RETRY DETAILS WITH COUNT AND PAGINATION

    // Response
    res.send({
      data: {
        "processStatusFilter": [
          {
            "key": "All",
            "color": ""
          },
          {
            "key": "Pending",
            "color": "yellow"
          },
          {
            "key": "Inprogress",
            "color": "orange"
          },
          {
            "key": "Success",
            "color": "green"
          },
          {
            "key": "Failed",
            "color": "red"
          }
        ],
        "processDateFilter": [
          {
            "date": "05/11/2022"
          },
          {
            "date": "04/11/2022"
          },
          {
            "date": "03/11/2022"
          }
        ],
        "batchCount": 100,
        "process": [{
          "batchId": "5001",
          "status": "inprogress",
          "assetCount": 10,
          "reprocess": true,
          "asset": [{
            "id": "6bdef01234",
            "name": "cluster.database.schema.table",
            "status": "failed",
            "retry": {
              "count": 2,
              "process": [{
                "threshold": { "status": "ontrack" },
                "time":
                {
                  "start": "5:11:2022 6:30",
                  "end": "5:11:2022 7:30",
                  "duration": "5 Hours",
                },
                "logs": {
                  "url": "https://access.com",
                  "size": "10kb"
                }
              }]
            },
          }],

        }],
      },
      success: true,
      error: {
        message: "",
      },
    });
  });

  app.put("/process-level/reprocess", (req, res) => {

    // Payload : {
    //   data: {
    //     datasourceName: "azuresqlCluster",  
    //     processName: "Access/Logs/Asset list/Summary",
    //     batchId: "5001",
    //     status: "Failed",
    //     sortBy: "dsc",
    //     page: {
    //       pageSize: 10,
    //       pageNumber: 1,
    //       children: { batchId: '5001', pageSize: 10, pageNumber: 5, }
    //     },
    //     filter: []
    //   }
    // }

    // REPROCESS CURRENT BATCH FOR PROCESS LEVEL
    // RETURN THE PROCESS LEVEL DETAILS WITH RETRY COUNT AND PAGINATION

    res.send({
      data: {
        "process": {
          "batchId": "5001",
          "status": "inprogress",
          "reprocess": true,
          "retry": {
            "count": 2,
            "process": [{
              "threshold": { "status": "ontrack" },
              "time":
              {
                "start": "5:11:2022 6:30",
                "end": "5:11:2022 7:30",
                "duration": "5 Hours",
              },
              "logs": {
                "url": "https://access.com",
                "size": "10kb"
              }
            }]
          },
        },
      },
      success: true,
      error: {
        message: "",
      },
    })
  })

  app.put("/asset-level/reprocess", (req, res) => {

    // Payload: {
    //   data: {
    //     "datasourceName": "azuresqlCluster",  
    //     "processName": "Access/Logs/Asset list",
    //     "batchId": "5001",
    //     "assetId": ["6bef345"],
    //     "selectAll": true,
    //     "status": "Failed",
    //     sortBy: "dsc",
    //     page: {
    //       pageSize: 10,
    //       pageNumber: 1,
    //       children: { batchId: '5001', pageSize: 10, pageNumber: 5,children:{ batchId: '5001',dataasset:"cluster.database.schema.table", pageSize: 10, pageNumber: 5}}
    //     },
    //     filter: []
    //   }
    // }


    // REPROCESS CURRENT BATCH FOR ASSET LEVEL
    // RETURN THE ASSET LEVEL DETAILS WITH RETRY COUNT AND PAGINATION

    res.send({
      data: {
        "process": {
          "batchId": "5001",
          "status": "inprogress",
          "assetCount": 10,
          "reprocess": true,
          "asset": [{
            "id": "6bdef01234",
            "name": "cluster.database.schema.table",
            "status": "failed",
            "retry": {
              "totalRecords": 2,
              "process": [{
                "threshold": { "status": "ontrack" },
                "time":
                {
                  "start": "5:11:2022 6:30",
                  "end": "5:11:2022 7:30",
                  "duration": "5 Hours",
                },
                "logs": {
                  "url": "https://access.com",
                  "size": "10kb"
                }
              }]
            }
          }]
        },
      },
      success: true,
      error: {
        message: "",
      },
    });
  })

};
