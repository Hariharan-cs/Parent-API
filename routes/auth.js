module.exports = (app) => {
  app.get("/adconfiguration", (req, res) => {
    // Payload: None

    // Response
    res.send({
      data: {
        adminGroupName: "pgadmin",
        userGroupName: "pguser",
        authProvider: 
        {        
      clientId: "d41faa47-7827-4ec1-bfd6-e16c4fa49004",
       tenantId: "58145988-1772-4dbe-bd54-9387d2a6eee5",
       name:"microsoft"
      },
        notificationEmail: "support@onedpo.com",
      },
      
      // For trial version keycloak
      // data: {
      //   authProvider:
      //   {
      //     name: "keycloak",
      //     clientId: "admin-cli",
      //     realm: "master",
      //     userName: "admin",
      //     password: "admin"
      //   },
      //   notificationEmail: "support@onedpo.com",
      // },
        // data: {
        //   authProvider: 
        //   {
        //     domain:"protecto.us.auth0.com",
        //     clientId: "FI5ffTevUweJlk49StjEhttZ1HWYWTIr",
        //     audience:"http://localhost:3001/api/v2/",
        //     name:"auth0"
        //   },
        //   notificationEmail: "support@onedpo.com",
        // },
      success: true,
      error: {
        message: "",
      },
    });
  });
  app.put("/adconfiguration", (req, res) => {
    /* Payload:
        {
            data:{
            "adminGroupName":"pgadmin",
            "userGroupName":"pguser",
            "authProvider": {        
              "clientId": "2bebb30e-3b0f-4418-80d7-bc806c77ea3e",
              "tenantId": "02e52d33-152f-4254-bf86-952abaff89fc",
              "name":"microsoft"
            },
        }
    */

    // Response
    res.send({
      data: {
        adminGroupName: "pgadmin",
        userGroupName: "pguser",
        authProvider: {
          clientId: "2bebb30e-3b0f-4418-80d7-bc806c77ea3e",
          tenantId: "02e52d33-152f-4254-bf86-952abaff89fc",
          name:"microsoft"
        },
      },
      success: true,
      error: {
        message: "",
      },
    });
  });
  app.get("/auth-formlist", (req, res) => {
    // Payload: None
    // Response
    res.send({
      data: [{
        authProvider:{
        value:"Microsoft",
        label:"Authentication Provider",
        },
        formFields:[{
            key:"clientId",
            label:"Client Id",
            dataType:"text",
        },
        {
          key:"tenantId",
          label:"Tenant Id",
          dataType:"text",
        }
      ]
    },
    {
      authProvider:{
        value:"Auth0",
        label:"Authentication Provider"
        },
        formFields:[{
            key:"clientId",
            label:"Client Id",
            dataType:"text",
        },
        {
          key:"audience",
          label:"Audience",
          dataType:"text",
        },
        {
          key:"domain",
          label:"Domain",
          dataType:"text",
        }
      ]
    }],
      success: true,
      error: {
        message: "",
      },
    });
  });
  app.get("/auth0/user-roles",(req,res)=>{
    // Payload: None
    // Response
    res.send({
      data:{
        roles:["admin"]
      },
      success: true,
      error: {
        message: "",
      },
    })
  })



  app.put("/validate-token", (req, res) => {
    // Response
    console.log('validate data', req.body)
    res.send({
      data:req.body,
      success: true,
      error: {
        message: "",
      },
    })
  });

  app.put("/acquire-token", (req, res) => {
    console.log("acquire data", req.body);

    let toUTCString = new Date().toUTCString()
    // Response
    res.send({
      data: {
        accessToken: "1access2Token" + toUTCString,
        refreshToken: "1refresh2Token" + toUTCString,
        idToken: "1id2Token" + toUTCString,
      },
      success: true,
      error: {
        message: "",
      },
    });
  });

};
