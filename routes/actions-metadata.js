module.exports = (app) => {
  app.get("/action/collect-metadata", (req, res) => {
    /* Payload:
        {
            data:{

                pageSize: 10,
                pageNumber: 50,
                filter:[
                    {
                        columnName:"completedPercentage",
                        value:"0"
                    }
                ],
                searchTerm:"sadsadsadas",
                screen:"action-metadata",
                sortBy:"column_name"

            }
        }
    */

    // Response
    res.send({
      data: [
        {
          dataasset: ["Cluster", "Database", "Schema", "Table"],
          dataOwner: "vijay@onedpo.com",
          risk: "severe",
          assignedDate: "2022/01/01",
          completedPercentage: "19",
          recommendedAction: ["reduce data", "anonymize"],
        },
      ],
      success: true,
      error: {
        message: "",
      },
    });
  });
};
