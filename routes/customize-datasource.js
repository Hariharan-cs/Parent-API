module.exports = (app) => {
  // Get datasources
  app.get("/customize/datasource", (req, res) => {
    // Payload: None

    // Response
    res.send(
      // {
      //   data: [
      //     {
      //       username: "onedpo",
      //       password: "Onedpo@123",
      //       accountName: "nq71637.west-us-2.azure",
      //       warehouse: "COMPUTE_WH",
      //       datasourceType: "snowflake",
      //       role: "ACCOUNTADMIN",
      //       datasourceName: "snowflakeCluster",
      //       userMapping: 10,
      //     },
      //   ],
      //   success: true,
      //   error: {
      //     message: "",
      //   },
      // }
      {
        "data": {
          "disableAddDatasource": true, // if group name is present in header and exceeded limit of no.of.datasource allowed send disableAddDataSource:true else send disableAddDataSource:false
          "helpUrl": "https://help.protecto.ai/getting-started/",
          "values": [
            {
              "datasourceName": "AZURE_SQL_TEST_DB",
              "server": "protecto-poc.database.windows.net",
              "databaseName": "protecto",
              "username": "protecto_user",
              "password": "Prot2e0c2t2o@",
              "datasourceType": "azuresql using database user credentials",
              "userMapping": 100,
              "dataSourceId": 16
            },
            {
              "datasourceName": "TEST_REDSHIFT_DB",
              "username": "test_user1",
              "password": "MyPassword2022",
              "port": "5439",
              "host": "redshift-cluster-1.ciy9ildljime.us-east-1.redshift.amazonaws.com",
              "databaseName": "ordersordersordersordersordersordersordersordersordersorders",
              "datasourceType": "redshift",
              "userMapping": 0,
              "dataSourceId": 15
            },
            {
              "datasourceName": "TEST_DATABRICKS",
              "host": "adb-3642239806678336.16.azuredatabricks.net",
              "port": "443",
              "clientId": "7b151696-750a-4f45-bd24-c1b3f897f52d",
              "clientSecret": "Pyv8Q~pQWleSMBEC1JxdsL5FDzCT6gfiq~KKocSq",
              "tenantId": "58145988-1772-4dbe-bd54-9387d2a6eee5",
              "httpPath": "/sql/1.0/endpoints/2ca5a4f6edd9be75",
              "catalog": "hive_metastore",
              "datasourceType": "databricks",
              "userMapping": 1000,
              "username": "protecto_user",
              "dataSourceId": 18
            },
            {
              "datasourceName": "TEST_REDSHIFT_DB",
              "username": "test_user1",
              "password": "MyPassword2022",
              "port": "5439",
              "host": "redshift-cluster-1.ciy9ildljime.us-east-1.redshift.amazonaws.com",
              "databaseName": "ordersordersordersorders",
              "datasourceType": "redshift",
              "userMapping": 10000,
              "dataSourceId": 15
            },
            {
              "datasourceName": "TEST_REDSHIFT_DB",
              "username": "test_user1",
              "password": "MyPassword2022",
              "port": "5439",
              "host": "redshift-cluster-1.ciy9ildljime.us-east-1.redshift.amazonaws.com",
              "databaseName": "ordersordersordersordersordersordersordersordersordersorders",
              "datasourceType": "redshift",
              "userMapping": 100000,
              "dataSourceId": 15
            },
          ]
        },
        "success": true,
        "error": {
          "message": ""
        }
      }
    );
  });

  app.get("/customize/datasource-formlist", (req, res) => {
    // Payload: None
    
    // Response
    /* 
      snowflake - https://help.protecto.ai/getting-started/add-a-data-source/snowflake-setup
      azuresql - https://help.protecto.ai/getting-started/add-a-data-source/azure-sql 
      salesforce - https://help.protecto.ai/getting-started/add-a-data-source/salesforce-setup 
    */
    res.send({
      data: [{
        datasourceType: {
          value: "snowflake",
          label: "Datasource Type",
          helpUrl: "https://help.protecto.ai/getting-started/add-a-data-source/snowflake-setup"
        },
        formFields: [{
          key: "datasourceName",
          label: "Datasource Name",
          dataType: "text",
        },
        {
          key: "warehouse",
          label: "Warehouse Name",
          dataType: "text",
        },
        {
          key: "accountName",
          label: "Account Name",
          dataType: "text",
        },
        {
          key: "role",
          label: "Role",
          dataType: "text",
        },
        {
          key: "username",
          label: "Username",
          dataType: "text",
        },
        {
          key: "password",
          label: "Password",
          dataType: "text",
        },
        ]
      },
      {
        datasourceType: {
          value: "azuresql",
          label: "Datasource Type",
          helpUrl: "https://help.protecto.ai/getting-started/add-a-data-source/azure-sql"
        },
        formFields: [{
          key: "datasourceName",
          label: "Datasource Name",
          dataType: "text",
        },
        {
          key: "username",
          label: "Username",
          dataType: "text",
        },
        {
          key: "password",
          label: "Password",
          dataType: "text",
        },
        {
          key: "port",
          label: "Port",
          dataType: "number",
        },
        {
          key: "host",
          label: "Host",
          dataType: "text",
        },
        {
          key: "databaseName",
          label: "Database Name",
          dataType: "text",
        }
        ]
      }],
      success: true,
      error: {
        message: "",
      },
    });
  });

  // Create datasource
  app.put("/customize/datasource", (req, res) => {
    /* Payload:
    {
        data:{
        "username":"onedpo",
        "password":"Onedpo@123",
        "accountName":"nq71637.west-us-2.azure",
        "warehouse":"COMPUTE_WH",
        "datasourceType":"snowflake",
        "role":"ACCOUNTADMIN",
        "datasourceName":"snowflakeCluster"
        }
    */
    console.log(req.body);

    // Response
    res.send({
      data: {
        datasourceName: 'admin',
        warehouse: 'admin',
        accountName: 'admin',
        role: 'admin',
        username: 'admin',
        password: 'admin',
        datasourceType: 'snowflake',
        userMapping: 0,
        disableAddDatasource: true,
      },
      success: true,
      error: {
        message: "",
      },
    });
  });

  // Delete datasource
  app.delete("/customize/datasource", (req, res) => {
    /* Payload:
    {
        data:{
        datasourceName: string;
        datasourceType: string;
      }
    */

    console.log(req.body);

    // Response
    res.send({
      data: req.body.data,
      success: true,
      error: {
        message: "",
      },
    });
  });

  app.put("/customize/user-mapping", (req, res) => {
    /* Payload:
    payload is sent as formData type in the keyName: 'file'
    */

    // Response
    res.send({
      data: {
        username: "onedpo",
        password: "Onedpo@123",
        accountName: "nq71637.west-us-2.azure",
        warehouse: "COMPUTE_WH",
        datasourceType: "snowflake",
        role: "ACCOUNTADMIN",
        datasourceName: "snowflakeCluster",
        userMapping: 10,
      },
      success: true,
      error: {
        message: "",
      },
    });
  });
};
