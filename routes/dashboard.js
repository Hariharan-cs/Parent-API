module.exports = (app) => {
  app.get("/dashboard/count", (req, res) => {
    // Payload : None
    // Response
    res.send({
      data: {
        total: {
          totalDataasset: 100,
          totalRows: 100000,
          data: [80, 125, 1125, 100],
        },
        breach: {
          risk: "severe",
          totalDataasset: 60,
          totalRows: 10000,
          data: [80, 125, 1125, 100],
        },
        privacy: {
          risk: "very high",
          totalDataasset: 40,
          totalRows: 90000,
          data: [80, 125, 1125, 100],
        },
      },
      success: true,
      error: {
        message: "",
      },
    });
  });

  app.get("/dashboard/breach/data", (req, res) => {
    // Payload : None
    // Response
    res.send({
      data: [
      {key:'Severe',value:11,color:'red'},
      {key:'High',value: 31,color:'orange'},
      {key:'Medium',value: 21,color:'yellow'},
      {key:'Low',value: 41,color:'green'}
      ],
      success: true,
      error: {
        message: "",
      },
    });
  });

  app.get("/dashboard/access/data", (req, res) => {
    // Payload : None
    // Response
    res.send({
      data: [
      {key:'Good',value:22,color:'green'},
      {key:'Broad',value: 33,color:'orange'},
      {key:'Excess',value: 42,color:'red'},
      {key:'NA',value:0,color:'grey'}],
      success: true,
      error: {
        message: "",
      },
    });
  });

  app.get("/dashboard/activity/data", (req, res) => {
    // Payload : None
    // Response
    res.send({
      data: [
        {key:'Active',value:[{ key:'Low',value: 10,color:'green'},{ key:'Medium',value: 20,color:'yellow'},{ key:'High',value: 30,color:'orange'},{ key:'Severe',value: 40,color:'red'}],total: 100 ,color:'green'},
      {key:'Infrequent',value:[{ key:'Low',value: 10,color:'green'},{ key:'Medium',value: 20,color:'yellow'},{ key:'High',value: 30,color:'orange'},{ key:'Severe',value: 40,color:'red'}],total: 100,color:'orange'},
      {key:'Stale',value:[{ key:'Low',value: 10,color:'green'},{ key:'Medium',value: 20,color:'yellow'},{ key:'High',value: 30,color:'orange'},{ key:'Severe',value: 40,color:'red'}],total: 100,color:'red'},
      {key:'NA',value:[{ key:'Low',value: 0,color:'green'},{ key:'Medium',value: 0,color:'yellow'},{ key:'High',value: 0,color:'orange'},{ key:'Severe',value: 0,color:'red'}],total:0,color:'grey'},
      ],
      success: true,
      error: {
        message: "",
      },
    });
  });

  app.get("/dashboard/privacy/data", (req, res) => {
    // Payload : None
    // Response
    res.send({
      data: [
        {key:'Very High',value:11,color:'red'},
        {key:'High',value: 31,color:'orange'},
        {key:'Medium',value: 21,color:'yellow'},
        {key:'Low',value: 41,color:'green'},
        {key:'Violation',value:9,color:'violet'}
      ],
      success: true,
      error: {
        message: "",
      },
    });
  });

  app.get("/dashboard/privacy/data-use", (req, res) => {
    // Payload : None
    // Response
    res.send({
      data: {
        activity: [
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
      success: true,
      error: {
        message: "",
      },
    });
  });

  app.get("/help-assistance", (req, res) => {
    // QueryParams : None
    // Response
    res.send({
      data: {
        media: {
          gettingStartedUrl: "https://www.youtube-nocookie.com/embed/xSQS0xMnFpQ?autoplay=1&mute=0"
        }
      },
      success: true,
      error: {
        message: "",
      },
    });
  });

  app.get("/first-login-status", (req, res) => {
    /* 
      authorization: accessToken
    */
  
    // Response
    res.send({
      data: {
        isDashboardVisited:true
      },
      success: true,
      error: {
        message: "",
      },
    });
  });
  
  app.get("/user-details", (req, res) => {
    /* 
      authorization: accessToken
      authprovider: keycloak
      Query Params:None
    */
    
    // Response
    res.send({
      data: {
        email:"saran@protecto.ai"
      },
      success: true,
      error: {
        message: "",
      },
    });
  });
  
  app.get("/token-details", (req, res) => {
    /* 
      header: refreshToken:<refreshtoken>
      authprovider:'keycloak' or 'google' or 'microsoft
      Query Params:None
    */
  
    let data;
  
    // Response 
    res.send({
      data: {
        access_token:"eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI1TGtvZXQ2eG0xeUstS3JUaFR4UHIwTkxybkJnakJmVjB0QlNHMXp1Ui1VIn0.eyJleHAiOjE2ODQ4NjU4NDMsImlhdCI6MTY4NDg2MjI0MywianRpIjoiMDM3ZDRkZGQtNTQwNS00YmQ1LWE5OGYtZDRlZDVjYzg3YjkyIiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay10ZXN0LnByb3RlY3RvLmFpL2F1dGgvcmVhbG1zL21hc3RlciIsInN1YiI6ImRmZTJiNWM5LTIyZmEtNDBlNi04ZmU4LTMzZGJhMmY2ZjNmMSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImFkbWluLWNsaSIsInNlc3Npb25fc3RhdGUiOiIwZjhkNTczYS00OTA0LTQxMWMtOWJhMS02Mzk5YzU3NWU0M2EiLCJhY3IiOiIxIiwic2NvcGUiOiJvcGVuaWQgZW1haWwgcHJvZmlsZSIsInNpZCI6IjBmOGQ1NzNhLTQ5MDQtNDExYy05YmExLTYzOTljNTc1ZTQzYSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJncm91cGlkcyI6WyJwcm90ZWN0by1wcm90ZWN0by11a2lhYmVteiJdLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJzYXJhbkBwcm90ZWN0by5haSJ9.O9QM2shBdAJ3wd5YngbuD03el7neSDq1Nf3aiIBud8h6kvveJckeMRytwquGKjdGhCtWViIH8_QAvMW1G3dqltYSHRUsMQGPz9fR0JYIxxGRus7CyKWwyDSSTtIsarhdtH4iWfAqNLGAAmb7iBfAzEnDTLM6GknFKL8yKrzCQMpOngXsPpNmeJDe8luULHDDjyO64ThCaeTmv3nPHLdGb2-KT1faX9HqgYlW_aXhPyuRMk-OzCP_VX7eDxeo6noPsAkrUodhHIVT-RsQv8G5bhe-YDFs_3b_d4TMboeCFICxzpih312ju2CReM9X05ljnYK7UcF7wzATkPi02xjdwg",
        refresh_token:"eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI1YmExYTUxMy0wNjYyLTQ5MGMtOGJiYy0xNTg5MjBjOWExYTUifQ.eyJleHAiOjE2ODQ4ODAyNDMsImlhdCI6MTY4NDg2MjI0MywianRpIjoiOTc3YjRmYTgtYmQ5OS00ODk3LTk3MjYtZmYzNjBmZmZiMDNjIiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay10ZXN0LnByb3RlY3RvLmFpL2F1dGgvcmVhbG1zL21hc3RlciIsImF1ZCI6Imh0dHBzOi8va2V5Y2xvYWstdGVzdC5wcm90ZWN0by5haS9hdXRoL3JlYWxtcy9tYXN0ZXIiLCJzdWIiOiJkZmUyYjVjOS0yMmZhLTQwZTYtOGZlOC0zM2RiYTJmNmYzZjEiLCJ0eXAiOiJSZWZyZXNoIiwiYXpwIjoiYWRtaW4tY2xpIiwic2Vzc2lvbl9zdGF0ZSI6IjBmOGQ1NzNhLTQ5MDQtNDExYy05YmExLTYzOTljNTc1ZTQzYSIsInNjb3BlIjoib3BlbmlkIGVtYWlsIHByb2ZpbGUiLCJzaWQiOiIwZjhkNTczYS00OTA0LTQxMWMtOWJhMS02Mzk5YzU3NWU0M2EifQ.HHFr5JVd0X-swFoxaPlE59LQ7kiO4p2NZF_-qQ4hRmU"
      },
      success: true,
      error: {
        message: "",
      },
    });
  });
  
};
