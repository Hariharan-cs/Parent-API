module.exports = (app) => {
  app.put("/assessment/data", (req, res) => {
    /* Payload:
        {
            data:{
                filter:{
                    tags: ["vin", "dob"],
                    breachRisk: ["high", "Very High"],
                    privacyRisk: ["high", "Very High"],
                    accessPrivilege: ["good", "broad"],
                }
                searchTerm:"sadsadsadas",
                sortBy:"asc" | dsc,
                sortColumn:"dataasset | personalData | totalRows | breachRisk | financialImpactInDollars | usersWithAccess | accessPrivilege | usersWithPersonalDataAccess | privacyRisk | dataByUsage | lastUsedBy| last90DaysActivityCount | last90DaysActiveUsersCount,
                pageName:'breach-risk' , 'excess-access', 'data-by-usage', 'privacy-data',
                pageSize: 10,
                pageNumber: 5,
            }
        }
    */
    let param = req.body.data;
    let data = {
      disableColumDetails: false,
      values: [
        {
          //Breach
          // dataasset: ["TEST_DATABRICKS", "hive_metastore", "auto_testing_db3", "auto_testing_table_1111"],
          dataasset: ["TEST_DATABRICKS", "auto_testing_table"],
          dataassetId: 213213,
          financialImpactInDollars: null,
          totalRows: null,
          riskScore: 100.1,
          breachRisk: null,
          tags: ["gpe"],
          personalData: null,
          accessPrivilege: null,
          breachRecommendedAction: [
            "reduce data",
            "dateeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
          ],
          usersWithAccess: 0,
          activeUsers: 10,
          usersWithPersonalDataAccess: 0,
          dataOwner: "dataowner@onedpo.com",
          //Privacy
          privacyExposure: 1000,
          privacyRisk: "violation",
          privacyRecommendedAction: [
            "reduce data"
          ],
          sourcePurpose: "Implicit Consent",
          dataassetDelimiter: '/'
        },
        {
          //Breach
          dataasset: ["Cluster12", "Database1", "Schema", "Table1"],
          totalRows: 10006,
          riskScore: 100.1,
          breachRisk: "severe",
          tags: [
            "personassssssssssssssssssssssssssddddddddddddddddddddddddddddddd"
          ],
          personalData: "pii",
          accessPrivilege: "broad",
          breachRecommendedAction: [
            "reduce dataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
          ],
          usersWithAccess: 1000,
          activeUsers: 10,
          usersWithPersonalDataAccess: 100,
          dataOwner: "dataowner@onedpo.com",
          //Privacy
          privacyExposure: 1000,
          privacyRisk: "very high",
          privacyRecommendedAction: [
            "reduce data",
            "anonymize",
            "reduce data",
            "anonymize",
            "reduce data",
            "anonymize",
          ],
          sourcePurpose: "Implicit Consent",
          dataassetDelimiter: '/'
        },
        {
          //Breach
          dataasset: ["Cluster3", "Database", "Schema", "Table2"],
          financialImpactInDollars: "200k",
          totalRows: 90000000,
          riskScore: 100.1,
          breachRisk: "high",
          tags: [
            "email_address",
            "ip_address",
            "person",
          ],
          personalData: "pii",
          accessPrivilege: "good",
          breachRecommendedAction: ["reduce data"],
          usersWithAccess: 1000,
          activeUsers: 10,
          usersWithPersonalDataAccess: 100,
          dataOwner: "dataowner@onedpo.com",
          //Privacy
          privacyExposure: 1000,
          privacyRisk: "high",
          privacyRecommendedAction: ["reduce data", "anonymize"],
          sourcePurpose: "Implicit Consent",
          dataassetDelimiter: '/'
        },
        {
          //Breach
          dataasset: ["Cluster4", "Database", "Schema", "Table3"],
          financialImpactInDollars: "1k",
          totalRows: 1000,
          riskScore: 100.1,
          breachRisk: "medium",
          tags: [
            "gpe",
            "org",
            "email_address",
            "ip_address",
            "person",
            "Date",
            "gpe",
            "org",
            "email_address",
            "ip_address",
            "person",
            "Date",
            "gpe",
            "org",
            "email_address",
            "ip_address",
            "person",
            "Date",
            "gpe",
            "org",
            "email_address",
            "ip_address",
            "person",
            "Date"
          ],
          personalData: "pi",
          accessPrivilege: "broad",
          breachRecommendedAction: ["reduce data", "anonymize"],
          usersWithAccess: 1000,
          activeUsers: 110,
          usersWithPersonalDataAccess: 100,
          dataOwner: "dataowner@onedpo.com",
          //Privacy
          privacyExposure: 1000,
          privacyRisk: "low",
          privacyRecommendedAction: ["reduce data", "anonymize"],
          sourcePurpose: "Implicit Consent",
          dataassetDelimiter: '/'
        },
        {
          //Breach
          dataasset: ["Cluster12", "Database1", "Schema", "Table1"],
          financialImpactInDollars: "100k",
          totalRows: 5000,
          riskScore: 100.1,
          breachRisk: "severe",
          personalData: "pii",
          tags: [
            "gpe",
            "org",
            "email_address",
            "ip_address",
            "person",
            "Date",
          ],
          accessPrivilege: "broad",
          breachRecommendedAction: [
            "reduce data",
            "anonymize",
            "reduce data",
            "anonymize",
            "reduce data",
            "anonymize",
          ],
          usersWithAccess: 1000,
          activeUsers: 0,
          usersWithPersonalDataAccess: 100,
          dataOwner: "dataowner@onedpo.com",
          //Privacy
          privacyExposure: 1000,
          privacyRisk: "very high",
          privacyRecommendedAction: [
            "reduce data",
            "anonymize",
            "reduce data",
            "anonymize",
            "reduce data",
            "anonymize",
          ],
          sourcePurpose: "Implicit Consent",
          dataassetDelimiter: '/'
        },
        {
          //Breach
          dataasset: ["Cluster3", "Database", "Schema", "Table2"],          
          financialImpactInDollars: "200M",
          totalRows: 500000,
          riskScore: 100.1,
          breachRisk: "high",
          tags: [
            "gpe",
            "org",
            "email_address",
            "ip_address",
            "person",
            "Date",
          ],
          personalData: "pii",
          accessPrivilege: "good",
          breachRecommendedAction: ["reduce data"],
          usersWithAccess: 1000,
          activeUsers: 0,
          usersWithPersonalDataAccess: 100,
          dataOwner: "dataowner@onedpo.com",
          //Privacy
          privacyExposure: 1000,
          privacyRisk: "low",
          privacyRecommendedAction: ["reduce data", "anonymize"],
          sourcePurpose: "Implicit Consent",
          dataassetDelimiter: '/'
        },
        {
          //Breach
          dataasset: ["Cluster4", "Database", "Schema", "Table3"],          
          financialImpactInDollars: "1k",
          totalRows: 7000000,
          riskScore: 100.1,
          breachRisk: "medium",
          tags: [
            "gpe",
            "org",
            "email_address",
            "ip_address",
            "person",
            "Date",
          ],
          personalData: "pi",
          accessPrivilege: "broad",
          breachRecommendedAction: ["reduce data", "anonymize"],
          usersWithAccess: 1000,
          activeUsers: 0,
          usersWithPersonalDataAccess: 100,
          dataOwner: "dataowner@onedpo.com",
          //Privacy
          privacyExposure: 1000,
          privacyRisk: "low",
          privacyRecommendedAction: ["reduce data", "anonymize"],
          sourcePurpose: "Implicit Consent",
          dataassetDelimiter: '/'
        },
        {
          //Breach
          dataasset: ["Cluster", "Database", "Schema", "Table4"],          
          financialImpactInDollars: "9k",
          riskScore: 100.1,
          totalRows: 7000,
          breachRisk: "low",
          tags: [
            "gpe",
            "org",
            "email_address",
            "ip_address",
            "person",
            "Date",
          ],
          personalData: "pii",
          accessPrivilege: "excess",
          breachRecommendedAction: ["reduce data", "anonymize", "anonymize1"],
          usersWithAccess: 1000,
          activeUsers: 0,
          usersWithPersonalDataAccess: 100,
          dataOwner: "dataowner@onedpo.com",
          //Privacy
          privacyExposure: 1000,
          privacyRisk: "medium",
          privacyRecommendedAction: ["reduce data", "anonymize"],
          sourcePurpose: "Implicit Consent",
          dataassetDelimiter: '/'
        },
        {
          //Breach
          dataasset: ["Cluster", "Database", "Schema", "Table4"],          
          financialImpactInDollars: "9k",
          totalRows: 10,
          riskScore: 100.1,
          breachRisk: "low",
          tags: [
            "gpe",
            "org",
            "email_address",
            "ip_address",
            "person",
            "Date",
          ],
          personalData: "pii",
          accessPrivilege: "excess",
          breachRecommendedAction: ["reduce data", "anonymize", "anonymize1"],
          usersWithAccess: 1000,
          activeUsers: 0,
          usersWithPersonalDataAccess: 100,
          dataOwner: "dataowner@onedpo.com",
          //Privacy
          privacyExposure: 1000,
          privacyRisk: "very high",
          privacyRecommendedAction: ["reduce data", "anonymize"],
          sourcePurpose: "Implicit Consent",
          dataassetDelimiter: '/'
        },
        {
          //Breach
          dataasset: ["Cluster", "Database", "Schema", "Table5"],          
          financialImpactInDollars: "1k",
          totalRows: 0,
          riskScore: 100.1,
          breachRisk: "severe",
          tags: [
            "gpe",
            "org",
            "email_address",
            "ip_address",
            "person",
            "Date",
          ],
          personalData: "pi",
          accessPrivilege: "excess",
          breachRecommendedAction: ["reduce data", "anonymize"],
          usersWithAccess: 1000,
          activeUsers: 0,
          usersWithPersonalDataAccess: 100,
          dataOwner: "dataowner@onedpo.com",
          //Privacy
          privacyExposure: 1000,
          privacyRisk: "medium",
          privacyRecommendedAction: ["reduce data", "anonymize"],
          sourcePurpose: "Implicit Consent",
          dataassetDelimiter: '/'
        },
        {
          //Breach
          dataasset: ["Cluster1", "Database1", "Schema", "Table1"],          
          financialImpactInDollars: "100k",
          riskScore: 100.1,
          totalRows: 1,
          breachRisk: "severe",
          tags: [
            "gpe",
            "org",
            "email_address",
            "ip_address",
            "person",
            "Date",
          ],
          personalData: "pii",
          accessPrivilege: "broad",
          breachRecommendedAction: [
            "reduce data",
            "anonymize",
            "reduce data",
            "anonymize",
            "reduce data",
            "anonymize",
          ],
          usersWithAccess: 1000,
          activeUsers: 0,
          usersWithPersonalDataAccess: 100,
          dataOwner: "dataowner@onedpo.com",
          //Privacy
          privacyExposure: 1000,
          privacyRisk: "very high",
          privacyRecommendedAction: [
            "reduce data",
            "anonymize",
            "reduce data",
            "anonymize",
            "reduce data",
            "anonymize",
          ],
          sourcePurpose: "Implicit Consent",
          dataassetDelimiter: '/'
        },
        {
          //Breach
          dataasset: ["Cluster", "Database", "Schema", "Table2"],          
          financialImpactInDollars: "200k",
          totalRows: 100,
          riskScore: 100.1,
          breachRisk: "high",
          tags: [
            "gpe",
            "org",
            "email_address",
            "ip_address",
            "person",
            "Date",
          ],
          personalData: "pii",
          accessPrivilege: "good",
          breachRecommendedAction: ["reduce data"],
          usersWithAccess: 1000,
          activeUsers: 0,
          usersWithPersonalDataAccess: 100,
          dataOwner: "dataowner@onedpo.com",
          //Privacy
          privacyExposure: 1000,
          privacyRisk: "violation",
          privacyRecommendedAction: ["reduce data", "anonymize"],
          sourcePurpose: "Implicit Consent",
          dataassetDelimiter: '/'
        },
        {
          //Breach
          dataasset: ["Cluster", "Database", "Schema", "Table3"],         
          financialImpactInDollars: "1k",
          totalRows: 10,
          riskScore: 100.1,
          breachRisk: "medium",
          tags: [
            "gpe",
            "org",
            "email_address",
            "ip_address",
            "person",
            "Date",
          ],
          personalData: "pi",
          accessPrivilege: "broad",
          breachRecommendedAction: ["reduce data", "anonymize"],
          usersWithAccess: 1000,
          activeUsers: 0,
          usersWithPersonalDataAccess: 100,
          dataOwner: "dataowner@onedpo.com",
          //Privacy
          privacyExposure: 10,
          privacyRisk: "low",
          privacyRecommendedAction: ["reduce data", "anonymize"],
          sourcePurpose: "Implicit Consent",
          dataassetDelimiter: '/'
        },
        {
          //Breach
          dataasset: ["Cluster", "Database", "Schema", "Table4"],          
          financialImpactInDollars: "9k",
          totalRows: 3000,
          riskScore: 100.1,
          breachRisk: "low",
          tags: [
            "gpe",
            "org",
            "email_address",
            "ip_address",
            "person",
            "Date",
          ],
          personalData: "pii",
          accessPrivilege: "excess",
          breachRecommendedAction: ["reduce data", "anonymize", "anonymize1"],
          usersWithAccess: 1000,
          activeUsers: 0,
          usersWithPersonalDataAccess: 100,
          dataOwner: "dataowner@onedpo.com",
          //Privacy
          privacyExposure: 1000,
          privacyRisk: "very high",
          privacyRecommendedAction: ["reduce data", "anonymize"],
          sourcePurpose: "Implicit Consent",
          dataassetDelimiter: '/'
        },
        {
          //Breach
          dataasset: ["Cluster", "Database", "Schema", "Table5"],          
          financialImpactInDollars: "1k",
          totalRows: 5634235,
          riskScore: 100.1,
          breachRisk: "severe",
          tags: [
            "gpe",
            "org",
            "email_address",
            "ip_address",
            "person",
            "Date",
          ],
          personalData: "pi",
          accessPrivilege: "excess",
          breachRecommendedAction: ["reduce data", "anonymize"],
          usersWithAccess: 1000,
          activeUsers: 0,
          usersWithPersonalDataAccess: 100,
          dataOwner: "dataowner@onedpo.com",
          //Privacy
          privacyExposure: 1000,
          privacyRisk: "very high",
          privacyRecommendedAction: ["reduce data", "anonymize"],
          sourcePurpose: "Implicit Consent",
          dataassetDelimiter: '/'
        },
        {
          //Breach
          dataasset: ["Cluster1", "Database1", "Schema", "Table1"],          
          financialImpactInDollars: "101M",
          totalRows: 76543,
          riskScore: 100.1,
          breachRisk: "severe",
          tags: [
            "gpe",
            "org",
            "email_address",
            "ip_address",
            "person",
            "Date",
          ],
          personalData: "pii",
          accessPrivilege: "broad",
          breachRecommendedAction: [
            "reduce data",
            "anonymize",
            "reduce data",
            "anonymize",
            "reduce data",
            "anonymize",
          ],
          usersWithAccess: 1000,
          activeUsers: 0,
          usersWithPersonalDataAccess: 100,
          dataOwner: "dataowner@onedpo.com",
          //Privacy
          privacyExposure: 1000,
          privacyRisk: "very high",
          privacyRecommendedAction: [
            "reduce data",
            "anonymize",
            "reduce data",
            "anonymize",
            "reduce data",
            "anonymize",
          ],
          sourcePurpose: "Implicit Consent",
          dataassetDelimiter: '/'
        },
        {
          //Breach
          dataasset: ["Cluster324", "Database", "Schema", "Table2"],          
          financialImpactInDollars: "200M",
          totalRows: 96854,
          riskScore: 100.1,
          breachRisk: "high",
          tags: [
            "gpe",
            "org",
            "email_address",
            "ip_address",
            "person",
            "Date",
          ],
          personalData: "pii",
          accessPrivilege: "good",
          breachRecommendedAction: ["reduce data"],
          usersWithAccess: 1000,
          activeUsers: 0,
          usersWithPersonalDataAccess: 100,
          dataOwner: "dataowner@onedpo.com",
          //Privacy
          privacyExposure: 1000,
          privacyRisk: "very high",
          privacyRecommendedAction: ["reduce data", "anonymize"],
          sourcePurpose: "Implicit Consent",
          dataassetDelimiter: '/'
        },
        {
          //Breach
          dataasset: ["Cluster34", "Database", "Schema", "Table3"],          
          financialImpactInDollars: "1k",
          totalRows: 98247,
          riskScore: 100.1,
          breachRisk: "medium",
          tags: [
            "email_address",
            "ip_address",
            "gpe",
            "org",
            "person",
            "Date",
          ],
          personalData: "pi",
          accessPrivilege: "broad",
          breachRecommendedAction: ["reduce data", "anonymize"],
          usersWithAccess: 1000,
          activeUsers: 0,
          usersWithPersonalDataAccess: 100,
          dataOwner: "dataowner@onedpo.com",
          //Privacy
          privacyExposure: 1000,
          privacyRisk: "very high",
          privacyRecommendedAction: ["reduce data", "anonymize"],
          sourcePurpose: "Implicit Consent",
          dataassetDelimiter: '/'
        },
        {
          //Breach
          dataasset: ["Cluster324", "Database", "Schema", "Table4"],
          financialImpactInDollars: "9k",
          totalRows: 928434,
          riskScore: 100.1,
          breachRisk: "low",
          tags: [
            "gpe",
            "org",
            "email_address",
            "ip_address",
            "person",
            "Date",
          ],
          personalData: "pii",
          accessPrivilege: "excess",
          breachRecommendedAction: ["reduce data", "anonymize", "anonymize1"],
          usersWithAccess: 1000,
          activeUsers: 0,
          usersWithPersonalDataAccess: 100,
          dataOwner: "dataowner@onedpo.com",
          //Privacy
          privacyExposure: 1000,
          privacyRisk: "very high",
          privacyRecommendedAction: ["reduce data", "anonymize"],
          sourcePurpose: "Implicit Consent",
          dataassetDelimiter: '/'
        },
        {
          //Breach
          dataasset: ["Cluster", "Database", "Schema", "Table5"],          
          financialImpactInDollars: "1k",
          totalRows: 12994,
          riskScore: 100.1,
          breachRisk: "severe",
          tags: [
            "gpe",
            "org",
            "email_address",
            "ip_address",
            "person",
            "Date",
          ],
          personalData: "pi",
          accessPrivilege: "excess",
          breachRecommendedAction: ["reduce data", "anonymize"],
          usersWithAccess: 1000,
          activeUsers: 0,
          usersWithPersonalDataAccess: 100,
          dataOwner: "dataowner@onedpo.com",
          //Privacy
          privacyExposure: 1000,
          privacyRisk: "very high",
          privacyRecommendedAction: ["reduce data", "anonymize"],
          sourcePurpose: "Implicit Consent",
          dataassetDelimiter: '/'
        },
        {
          //Breach
          dataasset: ["Cluster", "Database", "Schema", "Table5"],          
          financialImpactInDollars: "1k",
          totalRows: 12923923,
          riskScore: 100.1,
          breachRisk: "severe",
          tags: [
            "gpe",
            "org",
            "email_address",
            "ip_address",
            "person",
            "Date",
          ],
          personalData: "pi",
          accessPrivilege: "excess",
          breachRecommendedAction: ["reduce data", "anonymize"],
          usersWithAccess: 1000,
          activeUsers: 0,
          usersWithPersonalDataAccess: 100,
          dataOwner: "dataowner@onedpo.com",
          //Privacy
          privacyExposure: 1000,
          privacyRisk: "very high",
          privacyRecommendedAction: ["reduce data", "anonymize"],
          sourcePurpose: "Implicit Consent",
          dataassetDelimiter: '/'
        },
      ],
    };

    if (param.page === "excess-access") {
      data.values = data.values.filter((d) => d.accessPrivilege === "excess");
    }
    // console.log("Total Available", data.values.length);
    // console.log("Params", param);
    if (param.pageSize) {
      data.values = data.values.slice(
        param.pageSize * (param.pageNumber - 1),
        param.pageSize * (param.pageNumber - 1) + param.pageSize
      );
    }
    // console.log(data.values.length);
    // Response
    res.send({
      data: data,

      success: true,
      error: {
        message: "",
      },
    });
  });
  
  app.put("/assessment/data-by-usage", (req, res) => {
    /* Payload:
        {
            data:{
                filter:{
                    breachRisk: ["high", "Very High"],
                    dataByUsage:["Stale","Active","Infrequent","NA"]
                }
                searchTerm:"sadsadsadas",
                sortBy:"asc" | dsc,
                sortColumn:"dataasset | personalData | totalRows | breachRisk | dataByUsage | daysSinceLastActivity | lastUsedBy | last90DaysActivityCount | last90DaysActiveUsersCount | dataOwner,
                pageName: 'data-by-usage'
                pageSize: 10,
                pageNumber: 5,
            }
        }
    */
    let param = req.body.data;
    let data = {
      disableColumDetails: false,
      values: [
        {
          
          // dataasset: ["TEST_DATABRICKS", "hive_metastore", "auto_testing_db3", "auto_testing_table_1111"],
          dataasset: ["TEST_DATABRICKS", "auto_testing_table_22222"],
          dataByUsage:"Active", // Stale || Active || Infrequent  || NA 
          daysSinceLastActivity:"300",
          lastUsedBy:["John","Adam","ben","jen","james","kevin","paul","mary"],
          last90DaysActivityCount:"300",
          last90DaysActiveUsersCount:"4",
          totalRows: 10006,
          dataassetId: 213213,
          breachRisk: null,
          personalData: null,
          dataOwner: "dataowner@onedpo.com",
          dataassetDelimiter: '/'
        },
        {
          
          dataasset: ["Cluster12", "Database1", "Schema", "Table1"],
          dataByUsage:"Infrequent", // Stale || Active || Infrequent  || NA
          daysSinceLastActivity:"300",
          lastUsedBy:["John@protecto.ai","jen"],
          last90DaysActivityCount:"300",
          last90DaysActiveUsersCount:"4",
          totalRows: 10006,
          breachRisk: "severe",
          personalData: "pii",
          dataOwner: "dataowner@onedpo.com",
          dataassetDelimiter: '/'
        },
        {
          
          dataasset: ["Cluster3", "Database", "Schema", "Table2"],
          dataByUsage:"Stale", // Stale || Active || Infrequent  || NA
          daysSinceLastActivity:"300",
          lastUsedBy:["John","james"],
          last90DaysActivityCount:"300",
          last90DaysActiveUsersCount:"4",
          totalRows: 90000000,
          breachRisk: "high",
          personalData: "pii",
          dataOwner: "dataowner@onedpo.com",
          dataassetDelimiter: '/'
        },
        {
          
          dataasset: ["Cluster4", "Database", "Schema", "Table3"],
          dataByUsage:"NA", // Stale || Active || Infrequent  || NA
          daysSinceLastActivity:"300",
          lastUsedBy:["John"],
          last90DaysActivityCount:"300",
          last90DaysActiveUsersCount:"4",
          totalRows: 1000,
          breachRisk: "medium",
          personalData: "pi",
          dataOwner: "dataowner@onedpo.com",
          dataassetDelimiter: '/'
        },
        {
          
          dataasset: ["Cluster12", "Database1", "Schema", "Table1"],
          dataByUsage:"Stale", // Stale || Active || Infrequent  || NA
          daysSinceLastActivity:"300",
          lastUsedBy:["John"],
          last90DaysActivityCount:"300",
          last90DaysActiveUsersCount:"4",
          totalRows: 5000,
          breachRisk: "severe",
          personalData: "pii",
          dataOwner: "dataowner@onedpo.com",
          dataassetDelimiter: '/'
        },
        {
          
          dataasset: ["Cluster3", "Database", "Schema", "Table2"],
          dataByUsage:"Stale", // Stale || Active || Infrequent  || NA
          daysSinceLastActivity:"300",
          lastUsedBy:["John"],
          last90DaysActivityCount:"300",
          last90DaysActiveUsersCount:"4",
          totalRows: 500000,
          breachRisk: "high",
          personalData: "pii",
          dataOwner: "dataowner@onedpo.com",
          dataassetDelimiter: '/'
        },
        {
          
          dataasset: ["Cluster4", "Database", "Schema", "Table3"],
          dataByUsage:"Stale", // Stale || Active || Infrequent  || NA
          daysSinceLastActivity:"300",
          lastUsedBy:["John"],
          last90DaysActivityCount:"300",
          last90DaysActiveUsersCount:"4",
          totalRows: 7000000,
          breachRisk: "medium",
          personalData: "pi",
          dataOwner: "dataowner@onedpo.com",
          dataassetDelimiter: '/'
        },
        {
          
          dataasset: ["Cluster", "Database", "Schema", "Table4"],
          dataByUsage:"Stale", // Stale || Active || Infrequent  || NA
          daysSinceLastActivity:"300",
          lastUsedBy:["John"],
          last90DaysActivityCount:"300",
          last90DaysActiveUsersCount:"4",
          totalRows: 7000,
          breachRisk: "low",
          personalData: "pii",
          dataOwner: "dataowner@onedpo.com",
          dataassetDelimiter: '/'
        },
        {
          
          dataasset: ["Cluster", "Database", "Schema", "Table4"],
          dataByUsage:"Stale", // Stale || Active || Infrequent  || NA
          daysSinceLastActivity:"300",
          lastUsedBy:["John"],
          last90DaysActivityCount:"300",
          last90DaysActiveUsersCount:"4",
          totalRows: 10,
          breachRisk: "low",
          personalData: "pii",
          dataOwner: "dataowner@onedpo.com",
          dataassetDelimiter: '/'
        },
        {
          
          dataasset: ["Cluster", "Database", "Schema", "Table5"],
          dataByUsage:"Stale", // Stale || Active || Infrequent  || NA
          daysSinceLastActivity:"300",
          lastUsedBy:["John"],
          last90DaysActivityCount:"300",
          last90DaysActiveUsersCount:"4",
          totalRows: 0,
          breachRisk: "severe",
          personalData: "pi",
          dataOwner: "dataowner@onedpo.com",
          dataassetDelimiter: '/'
        },
        {
          
          dataasset: ["Cluster1", "Database1", "Schema", "Table1"],
          dataByUsage:"Stale", // Stale || Active || Infrequent  || NA
          daysSinceLastActivity:"300",
          lastUsedBy:["John"],
          last90DaysActivityCount:"300",
          last90DaysActiveUsersCount:"4",
          totalRows: 1,
          breachRisk: "severe",
          personalData: "pii",
          dataOwner: "dataowner@onedpo.com",
          dataassetDelimiter: '/'
        },
        {
          
          dataasset: ["Cluster", "Database", "Schema", "Table2"],
          dataByUsage:"Stale", // Stale || Active || Infrequent  || NA
          daysSinceLastActivity:"300",
          lastUsedBy:["John"],
          last90DaysActivityCount:"300",
          last90DaysActiveUsersCount:"4",
          totalRows: 100,
          breachRisk: "high",
          personalData: "pii",
          dataOwner: "dataowner@onedpo.com",
          dataassetDelimiter: '/'
        },
        {
          
          dataasset: ["Cluster", "Database", "Schema", "Table3"],
          dataByUsage:"Stale", // Stale || Active || Infrequent  || NA
          daysSinceLastActivity:"300",
          lastUsedBy:["John"],
          last90DaysActivityCount:"300",
          last90DaysActiveUsersCount:"4",
          totalRows: 10,
          riskScore: 100.1,
          breachRisk: "medium",
          personalData: "pi",
          dataOwner: "dataowner@onedpo.com",
          dataassetDelimiter: '/'
        },
        {
          
          dataasset: ["Cluster", "Database", "Schema", "Table4"],
          dataByUsage:"Stale", // Stale || Active || Infrequent  || NA
          daysSinceLastActivity:"300",
          lastUsedBy:["John"],
          last90DaysActivityCount:"300",
          last90DaysActiveUsersCount:"4",
          totalRows: 3000,
          breachRisk: "low",
          personalData: "pii",
          dataOwner: "dataowner@onedpo.com",
          dataassetDelimiter: '/'
        },
        {
          
          dataasset: ["Cluster", "Database", "Schema", "Table5"],
          dataByUsage:"Stale", // Stale || Active || Infrequent  || NA
          daysSinceLastActivity:"300",
          lastUsedBy:["John"],
          last90DaysActivityCount:"300",
          last90DaysActiveUsersCount:"4",
          totalRows: 5634235,
          breachRisk: "severe",
          personalData: "pi",
          dataOwner: "dataowner@onedpo.com",
          dataassetDelimiter: '/'
        },
        {
          
          dataasset: ["Cluster1", "Database1", "Schema", "Table1"],
          dataByUsage:"Stale", // Stale || Active || Infrequent  || NA
          daysSinceLastActivity:"300",
          lastUsedBy:["John"],
          last90DaysActivityCount:"300",
          last90DaysActiveUsersCount:"4",
          totalRows: 76543,
          breachRisk: "severe",
          personalData: "pii",
          dataOwner: "dataowner@onedpo.com",
          dataassetDelimiter: '/'
        },
        {
          
          dataasset: ["Cluster324", "Database", "Schema", "Table2"],
          dataByUsage:"Stale", // Stale || Active || Infrequent  || NA
          daysSinceLastActivity:"300",
          lastUsedBy:["John"],
          last90DaysActivityCount:"300",
          last90DaysActiveUsersCount:"4",
          totalRows: 96854,
          breachRisk: "high",
          personalData: "pii",
          dataOwner: "dataowner@onedpo.com",
          dataassetDelimiter: '/'
        },
        {
          
          dataasset: ["Cluster34", "Database", "Schema", "Table3"],
          dataByUsage:"Stale", // Stale || Active || Infrequent  || NA
          daysSinceLastActivity:"300",
          lastUsedBy:["John"],
          last90DaysActivityCount:"300",
          last90DaysActiveUsersCount:"4",
          totalRows: 98247,
          breachRisk: "medium",
          personalData: "pi",
          dataOwner: "dataowner@onedpo.com",
          dataassetDelimiter: '/'
        },
        {
          
          dataasset: ["Cluster324", "Database", "Schema", "Table4"],
          dataByUsage:"Stale", // Stale || Active || Infrequent  || NA
          daysSinceLastActivity:"300",
          lastUsedBy:["John"],
          last90DaysActivityCount:"300",
          last90DaysActiveUsersCount:"4",
          totalRows: 928434,
          breachRisk: "low",
          personalData: "pii",
          dataOwner: "dataowner@onedpo.com",
          dataassetDelimiter: '/'
        },
        {
          
          dataasset: ["Cluster", "Database", "Schema", "Table5"],
          dataByUsage:"Stale", // Stale || Active || Infrequent  || NA
          daysSinceLastActivity:"300",
          lastUsedBy:["John"],
          last90DaysActivityCount:"300",
          last90DaysActiveUsersCount:"4",
          totalRows: 12994,
          breachRisk: "severe",
          personalData: "pi",
          dataOwner: "dataowner@onedpo.com",
          dataassetDelimiter: '/'
        },
        {
          
          dataasset: ["Cluster", "Database", "Schema", "Table5"],
          dataByUsage:"Stale", // Stale || Active || Infrequent  || NA
          daysSinceLastActivity:"300",
          lastUsedBy:["John"],
          last90DaysActivityCount:"300",
          last90DaysActiveUsersCount:"4",
          totalRows: 12923923,
          breachRisk: "severe",
          personalData: "pi",
          dataOwner: "dataowner@onedpo.com",
          dataassetDelimiter: '/'
        },
      ],
    };

    if (param.page === "excess-access") {
      data.values = data.values.filter((d) => d.accessPrivilege === "excess");
    }
    // console.log("Total Available", data.values.length);
    // console.log("Params", param);
    if (param.pageSize) {
      data.values = data.values.slice(
        param.pageSize * (param.pageNumber - 1),
        param.pageSize * (param.pageNumber - 1) + param.pageSize
      );
    }
    // console.log(data.values.length);
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