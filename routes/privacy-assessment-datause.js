module.exports = (app) => {
  app.put("/assessment/data-use", (req, res) => {
    /* Payload:
        {
            data:{
                searchTerm:"sadsadsadas",
                sortBy:"asc" | dsc,
                sortColumn:"user | date",
                pageSize: 10,
                pageNumber: 5,
            }
        }
    */
    let param = req.body.data;
    let data = {
      disableColumDetails:false,
      showExecutedUser:true,
      values: [
        {
          //Breach
          // dataasset: ["TEST_DATABRICKS", "hive_metastore", "auto_testing_db3", "auto_testing_table_1111"],
          dataasset: ["TEST_DATABRICKS", "auto_testing_table"], 
          date: "12/01/2022", //MM-DD-YYYY
          user: "jeff@onedpo.com",
          executedUser: "adam@protecto.ai",
          privacyRisk: "low",
          privacyRecommendedAction: [
            "reduce data",
            "anonymize",
            "reduce data",
            "anonymize",
            "reduce data",
            "anonymize",
          ],
          dataassetDelimiter: '/'
        },
        {
          //Breach
          dataasset: ["Cluster1", "Database1", "Schema", "Table1"],
          date: "12/01/2022", //MM-DD-YYYY
          user: "jeff@onedpo.com",
          executedUser: "adam@protecto.ai",
          privacyRisk: "low",
          privacyRecommendedAction: [
            "reduce data",
            "anonymize",
            "reduce data",
            "anonymize",
            "reduce data",
            "anonymize",
          ],
          dataassetDelimiter: '/'
        },
        {
          //Breach
          dataasset: ["Cluster2", "Database1", "Schema", "Table2"],
          date: "11/01/2022", //MM-DD-YYYY
          user: "vijay@onedpo.com",
          executedUser: "ben@protecto.ai",
          privacyRisk: "medium",
          privacyRecommendedAction: ["reduce data"],
          dataassetDelimiter: '/'
        },
        {
          //Breach
          dataasset: ["Cluster3", "Database1", "Schema", "Table3"],
          date: "01/01/2022", //MM-DD-YYYY
          user: "amar@onedpo.com",
          executedUser: "ben@protecto.ai",
          privacyRisk: "high",
          privacyRecommendedAction: [],
          dataassetDelimiter: '/'
        },
        {
          //Breach
          dataasset: ["Cluster3", "Database1", "Schema", "Table12"],
          date: "12/20/2022", //MM-DD-YYYY
          user: "jeff@onedpo.com",
          executedUser: "ben@protecto.ai",
          privacyRisk: "very high",
          privacyRecommendedAction: ["reduce data", "anonymize", "reduce data"],
          dataassetDelimiter: '/'
        },
        {
          //Breach
          dataasset: ["Cluster3", "Database1", "Schema", "Table12"],
          date: "12/20/2022", //MM-DD-YYYY
          user: "jeff@onedpo.com",
          executedUser: "ben@protecto.ai",
          privacyRisk: "violation",
          privacyRecommendedAction: ["reduce data", "anonymize", "reduce data"],
          dataassetDelimiter: '/'
        },
        {
          //Breach
          dataasset: ["Cluster12", "Database1", "Schema", "Table1"],
          date: "12/01/2022", //MM-DD-YYYY
          user: "jeff@onedpo.com",
          executedUser: "ben@protecto.ai",
          privacyRisk: "low",
          privacyRecommendedAction: [
            "reduce data",
            "anonymize",
            "reduce data",
            "anonymize",
            "reduce data",
            "anonymize",
          ],
          dataassetDelimiter: '/'
        },
        {
          //Breach
          dataasset: ["Cluster12", "Database1", "Schema", "Table2"],
          date: "11/01/2022", //MM-DD-YYYY
          user: "vijay@onedpo.com",
          executedUser: "ben@protecto.ai",
          privacyRisk: "medium",
          privacyRecommendedAction: ["reduce data"],
          dataassetDelimiter: '/'
        },
        {
          //Breach
          dataasset: ["Cluster2", "Database1", "Schema", "Table3"],
          date: "01/01/2022", //MM-DD-YYYY
          user: "amar@onedpo.com",
          privacyRisk: "high",
          privacyRecommendedAction: [],
          dataassetDelimiter: '/'
        },
        {
          //Breach
          dataasset: ["Cluster3", "Database1", "Schema", "Table12"],
          date: "12/20/2022", //MM-DD-YYYY
          user: "jeff@onedpo.com",
          executedUser: "ben@protecto.ai",
          privacyRisk: "very high",
          privacyRecommendedAction: ["reduce data", "anonymize", "reduce data"],
          dataassetDelimiter: '/'
        },
        {
          //Breach
          dataasset: ["Cluster3", "Database1", "Schema", "Table12"],
          date: "12/20/2022", //MM-DD-YYYY
          user: "jeff@onedpo.com",
          executedUser: "ben@protecto.ai",
          privacyRisk: "violation",
          privacyRecommendedAction: ["reduce data", "anonymize", "reduce data"],
          dataassetDelimiter: '/'
        },
        {
          //Breach
          dataasset: ["Cluster12", "Database1", "Schema", "Table1"],
          date: "12/01/2022", //MM-DD-YYYY
          user: "jeff@onedpo.com",
          executedUser: "ben@protecto.ai",
          privacyRisk: "low",
          privacyRecommendedAction: [
            "reduce data",
            "anonymize",
            "reduce data",
            "anonymize",
            "reduce data",
            "anonymize",
          ],
          dataassetDelimiter: '/'
        },
        {
          //Breach
          dataasset: ["Cluster12", "Database1", "Schema", "Table2"],
          date: "11/01/2022", //MM-DD-YYYY
          user: "vijay@onedpo.com",
          executedUser: "ben@protecto.ai",
          privacyRisk: "medium",
          privacyRecommendedAction: ["reduce data"],
          dataassetDelimiter: '/'
        },
        {
          //Breach
          dataasset: ["Cluster2", "Database1", "Schema", "Table3"],
          date: "01/01/2022", //MM-DD-YYYY
          user: "amar@onedpo.com",
          executedUser: "ben@protecto.ai",
          privacyRisk: "high",
          privacyRecommendedAction: [],
          dataassetDelimiter: '/'
        },
        {
          //Breach
          dataasset: ["Cluster3", "Database1", "Schema", "Table12"],
          date: "12/20/2022", //MM-DD-YYYY
          user: "jeff@onedpo.com",
          executedUser: "ben@protecto.ai",
          privacyRisk: "very high",
          privacyRecommendedAction: ["reduce data", "anonymize", "reduce data"],
          dataassetDelimiter: '/'
        },
        {
          //Breach
          dataasset: ["Cluster3", "Database1", "Schema", "Table12"],
          date: "12/20/2022", //MM-DD-YYYY
          user: "jeff@onedpo.com",
          executedUser: "ben@protecto.ai",
          privacyRisk: "violation",
          privacyRecommendedAction: ["reduce data", "anonymize", "reduce data"],
          dataassetDelimiter: '/'
        },
      ],
    };
    data.totalRecords = data.values.length;

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

  app.get("/assessment/send-nofitication", (req, res) => {
    /* Payload:
        {
            data:{
                dataasset: ["Cluster", "Database", "Schema", "Table"],
                date: "2022/01/01",
                user: "vijay@onedpo.com"
            }
        }
    */

    // Response
    res.send({
      data: {
        message: "Notification Successful",
      },
      success: true,
      error: {
        message: "",
      },
    });
  });
};
