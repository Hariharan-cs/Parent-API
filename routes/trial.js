module.exports = (app) => {
  // FOR KEYCLOAK
  app.get("/login", (req, res) => {
    /* Query Params: None */

    /* header      
        authorization-basic: base64 encoded (email:password)
    */

    // Response
    res.send({
      data: {
        access_token:
          "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI1TGtvZXQ2eG0xeUstS3JUaFR4UHIwTkxybkJnakJmVjB0QlNHMXp1Ui1VIn0.eyJleHAiOjE2ODQ4NjU4NDMsImlhdCI6MTY4NDg2MjI0MywianRpIjoiMDM3ZDRkZGQtNTQwNS00YmQ1LWE5OGYtZDRlZDVjYzg3YjkyIiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay10ZXN0LnByb3RlY3RvLmFpL2F1dGgvcmVhbG1zL21hc3RlciIsInN1YiI6ImRmZTJiNWM5LTIyZmEtNDBlNi04ZmU4LTMzZGJhMmY2ZjNmMSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImFkbWluLWNsaSIsInNlc3Npb25fc3RhdGUiOiIwZjhkNTczYS00OTA0LTQxMWMtOWJhMS02Mzk5YzU3NWU0M2EiLCJhY3IiOiIxIiwic2NvcGUiOiJvcGVuaWQgZW1haWwgcHJvZmlsZSIsInNpZCI6IjBmOGQ1NzNhLTQ5MDQtNDExYy05YmExLTYzOTljNTc1ZTQzYSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJncm91cGlkcyI6WyJwcm90ZWN0by1wcm90ZWN0by11a2lhYmVteiJdLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJzYXJhbkBwcm90ZWN0by5haSJ9.O9QM2shBdAJ3wd5YngbuD03el7neSDq1Nf3aiIBud8h6kvveJckeMRytwquGKjdGhCtWViIH8_QAvMW1G3dqltYSHRUsMQGPz9fR0JYIxxGRus7CyKWwyDSSTtIsarhdtH4iWfAqNLGAAmb7iBfAzEnDTLM6GknFKL8yKrzCQMpOngXsPpNmeJDe8luULHDDjyO64ThCaeTmv3nPHLdGb2-KT1faX9HqgYlW_aXhPyuRMk-OzCP_VX7eDxeo6noPsAkrUodhHIVT-RsQv8G5bhe-YDFs_3b_d4TMboeCFICxzpih312ju2CReM9X05ljnYK7UcF7wzATkPi02xjdwg",
        expires_in: 3600,
        refresh_expires_in: 18000,
        refresh_token:
          "eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI1YmExYTUxMy0wNjYyLTQ5MGMtOGJiYy0xNTg5MjBjOWExYTUifQ.eyJleHAiOjE2ODQ4ODAyNDMsImlhdCI6MTY4NDg2MjI0MywianRpIjoiOTc3YjRmYTgtYmQ5OS00ODk3LTk3MjYtZmYzNjBmZmZiMDNjIiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay10ZXN0LnByb3RlY3RvLmFpL2F1dGgvcmVhbG1zL21hc3RlciIsImF1ZCI6Imh0dHBzOi8va2V5Y2xvYWstdGVzdC5wcm90ZWN0by5haS9hdXRoL3JlYWxtcy9tYXN0ZXIiLCJzdWIiOiJkZmUyYjVjOS0yMmZhLTQwZTYtOGZlOC0zM2RiYTJmNmYzZjEiLCJ0eXAiOiJSZWZyZXNoIiwiYXpwIjoiYWRtaW4tY2xpIiwic2Vzc2lvbl9zdGF0ZSI6IjBmOGQ1NzNhLTQ5MDQtNDExYy05YmExLTYzOTljNTc1ZTQzYSIsInNjb3BlIjoib3BlbmlkIGVtYWlsIHByb2ZpbGUiLCJzaWQiOiIwZjhkNTczYS00OTA0LTQxMWMtOWJhMS02Mzk5YzU3NWU0M2EifQ.HHFr5JVd0X-swFoxaPlE59LQ7kiO4p2NZF_-qQ4hRmU",
        token_type: "Bearer",
        id_token:
          "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI1TGtvZXQ2eG0xeUstS3JUaFR4UHIwTkxybkJnakJmVjB0QlNHMXp1Ui1VIn0.eyJleHAiOjE2ODQ4NjU4NDMsImlhdCI6MTY4NDg2MjI0MywiYXV0aF90aW1lIjowLCJqdGkiOiI2N2U5ZTc0MC04NTk0LTRjYTgtYWFmNC0zMzJhMzY4NDBhN2YiLCJpc3MiOiJodHRwczovL2tleWNsb2FrLXRlc3QucHJvdGVjdG8uYWkvYXV0aC9yZWFsbXMvbWFzdGVyIiwiYXVkIjoiYWRtaW4tY2xpIiwic3ViIjoiZGZlMmI1YzktMjJmYS00MGU2LThmZTgtMzNkYmEyZjZmM2YxIiwidHlwIjoiSUQiLCJhenAiOiJhZG1pbi1jbGkiLCJzZXNzaW9uX3N0YXRlIjoiMGY4ZDU3M2EtNDkwNC00MTFjLTliYTEtNjM5OWM1NzVlNDNhIiwiYXRfaGFzaCI6IkZDRzJ4SWZqLVVZTllERVRhOG1WcVEiLCJhY3IiOiIxIiwic2lkIjoiMGY4ZDU3M2EtNDkwNC00MTFjLTliYTEtNjM5OWM1NzVlNDNhIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImdyb3VwaWRzIjpbInByb3RlY3RvLXByb3RlY3RvLXVraWFiZW16Il0sInByZWZlcnJlZF91c2VybmFtZSI6InNhcmFuQHByb3RlY3RvLmFpIn0.U_8ps-J3Z3SoBi-hQ4Np-PSX7PVz3s1KArjLSHccogkhTXeW26yevEmy_SZoIJffSyoKF2VNb7vcJVvzYLnazBnP_4-BCavZcRVU2nLbKevaxswUeM1KtvQIhhQGznlLBm5ivT4EWyoRjGeS18lT6Z1tG-IzoEbEnKjC4jye8-wqkDSvngBwhubVmpURYcqAiZ3bETNIidUETXWlMlAQ5jx4temhc23EY_gUxgntOIlqX7_wr0NLso-4LlaHFEGUgU1iprDNMUW_6ZFJTlX0OXRTWu_X6RqombV5zQ_yRiFvmCkVO2YPmIX2dJs4ZG8yrkmRveLOuZDSdqbZneidHg",
        "not-before-policy": 0,
        session_state: "0f8d573a-4904-411c-9ba1-6399c575e43a",
        scope: "openid email profile",
        email_verified: true,
      },
      success: true,
      error: {
        message: "",
      },
    });
  });

  // FOR KEYCLOAK TO ACQUIRE NEW TOKEN EVERY HOUR USING REFRESH TOKEN
  app.get("/token", (req, res) => {
    // header: refreshToken : <refreshToken>

    /* Query Params: None */

    // Response
    res.send({
      data: {
        access_token:
          "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI1TGtvZXQ2eG0xeUstS3JUaFR4UHIwTkxybkJnakJmVjB0QlNHMXp1Ui1VIn0.eyJleHAiOjE2ODQ4NjU4NDMsImlhdCI6MTY4NDg2MjI0MywianRpIjoiMDM3ZDRkZGQtNTQwNS00YmQ1LWE5OGYtZDRlZDVjYzg3YjkyIiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay10ZXN0LnByb3RlY3RvLmFpL2F1dGgvcmVhbG1zL21hc3RlciIsInN1YiI6ImRmZTJiNWM5LTIyZmEtNDBlNi04ZmU4LTMzZGJhMmY2ZjNmMSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImFkbWluLWNsaSIsInNlc3Npb25fc3RhdGUiOiIwZjhkNTczYS00OTA0LTQxMWMtOWJhMS02Mzk5YzU3NWU0M2EiLCJhY3IiOiIxIiwic2NvcGUiOiJvcGVuaWQgZW1haWwgcHJvZmlsZSIsInNpZCI6IjBmOGQ1NzNhLTQ5MDQtNDExYy05YmExLTYzOTljNTc1ZTQzYSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJncm91cGlkcyI6WyJwcm90ZWN0by1wcm90ZWN0by11a2lhYmVteiJdLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJzYXJhbkBwcm90ZWN0by5haSJ9.O9QM2shBdAJ3wd5YngbuD03el7neSDq1Nf3aiIBud8h6kvveJckeMRytwquGKjdGhCtWViIH8_QAvMW1G3dqltYSHRUsMQGPz9fR0JYIxxGRus7CyKWwyDSSTtIsarhdtH4iWfAqNLGAAmb7iBfAzEnDTLM6GknFKL8yKrzCQMpOngXsPpNmeJDe8luULHDDjyO64ThCaeTmv3nPHLdGb2-KT1faX9HqgYlW_aXhPyuRMk-OzCP_VX7eDxeo6noPsAkrUodhHIVT-RsQv8G5bhe-YDFs_3b_d4TMboeCFICxzpih312ju2CReM9X05ljnYK7UcF7wzATkPi02xjdwg",
        expires_in: 3600,
        refresh_expires_in: 18000,
        refresh_token:
          "eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI1YmExYTUxMy0wNjYyLTQ5MGMtOGJiYy0xNTg5MjBjOWExYTUifQ.eyJleHAiOjE2ODQ4ODAyNDMsImlhdCI6MTY4NDg2MjI0MywianRpIjoiOTc3YjRmYTgtYmQ5OS00ODk3LTk3MjYtZmYzNjBmZmZiMDNjIiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay10ZXN0LnByb3RlY3RvLmFpL2F1dGgvcmVhbG1zL21hc3RlciIsImF1ZCI6Imh0dHBzOi8va2V5Y2xvYWstdGVzdC5wcm90ZWN0by5haS9hdXRoL3JlYWxtcy9tYXN0ZXIiLCJzdWIiOiJkZmUyYjVjOS0yMmZhLTQwZTYtOGZlOC0zM2RiYTJmNmYzZjEiLCJ0eXAiOiJSZWZyZXNoIiwiYXpwIjoiYWRtaW4tY2xpIiwic2Vzc2lvbl9zdGF0ZSI6IjBmOGQ1NzNhLTQ5MDQtNDExYy05YmExLTYzOTljNTc1ZTQzYSIsInNjb3BlIjoib3BlbmlkIGVtYWlsIHByb2ZpbGUiLCJzaWQiOiIwZjhkNTczYS00OTA0LTQxMWMtOWJhMS02Mzk5YzU3NWU0M2EifQ.HHFr5JVd0X-swFoxaPlE59LQ7kiO4p2NZF_-qQ4hRmU",
        token_type: "Bearer",
        id_token:
          "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI1TGtvZXQ2eG0xeUstS3JUaFR4UHIwTkxybkJnakJmVjB0QlNHMXp1Ui1VIn0.eyJleHAiOjE2ODQ4NjU4NDMsImlhdCI6MTY4NDg2MjI0MywiYXV0aF90aW1lIjowLCJqdGkiOiI2N2U5ZTc0MC04NTk0LTRjYTgtYWFmNC0zMzJhMzY4NDBhN2YiLCJpc3MiOiJodHRwczovL2tleWNsb2FrLXRlc3QucHJvdGVjdG8uYWkvYXV0aC9yZWFsbXMvbWFzdGVyIiwiYXVkIjoiYWRtaW4tY2xpIiwic3ViIjoiZGZlMmI1YzktMjJmYS00MGU2LThmZTgtMzNkYmEyZjZmM2YxIiwidHlwIjoiSUQiLCJhenAiOiJhZG1pbi1jbGkiLCJzZXNzaW9uX3N0YXRlIjoiMGY4ZDU3M2EtNDkwNC00MTFjLTliYTEtNjM5OWM1NzVlNDNhIiwiYXRfaGFzaCI6IkZDRzJ4SWZqLVVZTllERVRhOG1WcVEiLCJhY3IiOiIxIiwic2lkIjoiMGY4ZDU3M2EtNDkwNC00MTFjLTliYTEtNjM5OWM1NzVlNDNhIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImdyb3VwaWRzIjpbInByb3RlY3RvLXByb3RlY3RvLXVraWFiZW16Il0sInByZWZlcnJlZF91c2VybmFtZSI6InNhcmFuQHByb3RlY3RvLmFpIn0.U_8ps-J3Z3SoBi-hQ4Np-PSX7PVz3s1KArjLSHccogkhTXeW26yevEmy_SZoIJffSyoKF2VNb7vcJVvzYLnazBnP_4-BCavZcRVU2nLbKevaxswUeM1KtvQIhhQGznlLBm5ivT4EWyoRjGeS18lT6Z1tG-IzoEbEnKjC4jye8-wqkDSvngBwhubVmpURYcqAiZ3bETNIidUETXWlMlAQ5jx4temhc23EY_gUxgntOIlqX7_wr0NLso-4LlaHFEGUgU1iprDNMUW_6ZFJTlX0OXRTWu_X6RqombV5zQ_yRiFvmCkVO2YPmIX2dJs4ZG8yrkmRveLOuZDSdqbZneidHg",
        "not-before-policy": 0,
        session_state: "0f8d573a-4904-411c-9ba1-6399c575e43a",
        scope: "openid email profile",
        email_verified: true,
      },
      success: true,
      error: {
        message: "",
      },
    });
  });

  app.get("/reset-password", (req, res) => {
    /* Query Params: None */

    /* header
        authorization: accessToken
        credential: base64 encoded (email:newPassword)
        authProvider: 'microsoft', 'google', 'keycloak'
    */

    // Response
    res.send({
      data: {
        message: "Password resetted successfully",
      },
      success: true,
      error: {
        message: "",
      },
    });
  });

  app.get("/perform-action", (req, res) => {
    /* Query Params:
      {
        "email":"john123@gmail.com",
        "action":"forgot-password" or "verify-email" 
      }
    */

    // Response
    res.send({
      data: {
        message: "Email sent successfully",
      },
      success: true,
      error: {
        message: "Unable to send email",
      },
    });
  });

  app.get("/verify-action", (req, res) => {
    /* header
        actionToken: actionToken
        authorization-basic: base64 encoded (newPassword)
    */
    // if authorization-basic is there in the header then reset password will execute otherwise email verification logic will execute

    // Response
    res.send({
      data: {
        message: "Updated email verfication successfully",
      },
      success: true,
      error: {
        message: "Already email verified or password updated ",
      },
    });
  });

  // GET SOCIAL ADCONFIGURATION
  app.get("/social-adconfiguration", (req, res) => {
    // Query Params:null
    res.send({
      data: {
        authProvider: [
          {
            clientId: "2bebb30e-3b0f-4418-80d7-bc806c77ea3e",
            tenantId: "02e52d33-152f-4254-bf86-952abaff89fc",
            name: "microsoft",
          },
          {
            clientId:
              "777021795547-3cs92n06k9ogacve2nbhotqi35ebscvh.apps.googleusercontent.com",
            clientSecret: "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",
            name: "google",
          },
          {
            name: "keycloak",
          },
        ],
      },
      success: true,
      error: {
        message: "",
      },
    });
  });

  // GET PAGE CONTENT
  app.get("/content", (req, res) => {
    /* 
      Query Params: {
        pageName: "get-started" or "mask-unmask"
      }
    */
    let data;
    let pageName = JSON.parse(JSON.stringify(req.query.pageName));
    if (pageName === "get-started") {
      // data = [
      //   {
      //     plain: [
      //       {
      //         type: "heading",
      //         content: "Welcome to protecto",
      //       },
      //       {
      //         type: "sub-heading",
      //         content: "Data Protection for Modern AI World",
      //       },
      //       {
      //         type: "heading-content",
      //         content:
      //           "Unlock and freely use your data for AI and data analytics",
      //       },
      //       {
      //         type: "heading-content",
      //         content: "Ensuring compliance and mitigating privacy risk ",
      //       },
      //       {
      //         type: "video",
      //         content: "https://protecto.ai/youtube-video",
      //       },
      //     ],
      //   },
      //   {
      //     card: [
      //       {
      //         type: "sub-title",
      //         content: "Easy to deploy, see results in minutes",
      //       },
      //       {
      //         type: "content",
      //         content:
      //           "Protecto's masking API scans input text for personally identifiable information (PII) and replaces it with secure tokens",
      //       },
      //     ],
      //   },
      //   {
      //     card: [
      //       {
      //         type: "sub-title",
      //         content: "Easy to deploy, see results in minutes",
      //       },
      //       {
      //         type: "content",
      //         content:
      //           "Protecto's masking API scans input text for personally identifiable information (PII) and replaces it with secure tokens",
      //       },
      //     ],
      //   },
      // ];
      data = [
        {
          plain: [
            {
              type: "heading",
              content: "Welcome to Protecto",
            },
            {
              type: "sub-heading",
              content: "Data Protection for Modern AI World",
            },
            {
              type: "heading-content",
              content: `Unlock and freely use your data for AI and data analytics while safeguarding security and meeting privacy regulations. 
              Easy to deploy, see results in minutes`,
            },
            {
              type: "heading-content",
              content: `Ensuring compliance and mitigating privacy risks has become a top priority for businesses. Our platform finds personal data and sensitive information, locates potential risks, maintains metadata, masks sensitive data, and delivers compliance. 
              Easy to deploy, see results in minutes`,
            },
            {
              type: "video",
              content:
                "https://www.youtube-nocookie.com/embed/xSQS0xMnFpQ?autoplay=0&mute=0",
            },
          ],
        },
      ];
    } else if (pageName === "mask-unmask") {
      // data = [
      //   {
      //     fullSizeCard: [
      //       {
      //         type: "sub-heading",
      //         content: "Tokenization",
      //       },
      //       {
      //         type: "sub-title",
      //         content: "Mask/Unmask APIs",
      //       },
      //       {
      //         type: "heading-content",
      //         content:
      //           "Protecto's masking API scans input text for personally identifiable information (PII) and replaces it with secure tokens",
      //       },
      //     ],
      //   },
      //   {
      //     fullSizeCard: [
      //       {
      //         type: "mini-title",
      //         content: "API Details:",
      //       },
      //       // Masking
      //       {
      //         type: "mini-title",
      //         content: "Mask",
      //       },
      //       {
      //         type: "key",
      //         content: "Url",
      //       },
      //       {
      //         type: "value",
      //         content: "https://protecto.ai/tokenization/mask",
      //       },
      //       {
      //         type: "key",
      //         content: "Payload",
      //       },
      //       {
      //         type: "value",
      //         content: `mask: [
      //           {
      //             value: "408-425-3333",
      //             token: "Token 2",
      //             "format/type": "Phone",
      //           },
      //         ]`,
      //       },
      //       {
      //         type: "key",
      //         content: "Output",
      //       },
      //       {
      //         type: "value",
      //         content: `mask: {
      //           value: "0988879-67587-325465",
      //           token: "408-425-3333",
      //         }`,
      //       },
      //       // Un-masking
      //       {
      //         type: "mini-title",
      //         content: "Unmask",
      //       },
      //       {
      //         type: "key",
      //         content: "Url",
      //       },
      //       {
      //         type: "value",
      //         content: "https://protecto.ai/tokenization/unmask",
      //       },
      //       {
      //         type: "key",
      //         content: "Payload",
      //       },
      //       {
      //         type: "value",
      //         content: `unmask: [
      //           {
      //             token: "NYRLv9PSc3",
      //           },
      //         ]`,
      //       },
      //       {
      //         type: "key",
      //         content: "Output",
      //       },
      //       {
      //         type: "value",
      //         content: `mask: {
      //           token: "NYRLv9PSc3",
      //           value: "Adam",
      //         }`,
      //       },
      //     ],
      //   },
      //   {
      //     popup: [
      //       {
      //         type: "sub-title",
      //         content: "Sign up for free",
      //       },
      //       {
      //         type: "content",
      //         content: "Test, edit, run and do more just from your browser",
      //       },
      //       {
      //         type: "video",
      //         content: "https://protecto.ai/youtube-video",
      //       },
      //     ],
      //   },
      // ];
      data = [
        {
          popup: [
            {
              type: "sub-title",
              content: "Sign up for free",
            },
            {
              type: "video",
              content:
                "https://www.youtube-nocookie.com/embed/k67pcfRL2Do?autoplay=0&mute=0&hd=1&rel=0&vq=hd1080",
            },
            {
              type: "content",
              content: "Test, edit, run and do more just from your browser",
            },
          ],
        },
        {
          fullSizeCard: [
            {
              type: "sub-heading",
              content: "Tokenization APIs",
            },
            {
              type: "heading-content",
              content:
                "Protecto's Masking API identifies and substitutes Personally Identifiable Information (PII) in text with secure tokens",
            },
          ],
        },
        {
          fullSizeCard: [
            {
              type: "mini-title",
              content: "Mask API",
            },
            {
              type: "key",
              content: "Url:",
            },
            {
              type: "chip",
              content: "PUT",
            },
            {
              type: "value",
              content: "https://trial.protecto.ai/api/vault/mask",
            },
            {
              type: "mini-title",
              content: "Mask with Token",
            },
            {
              type: "key",
              content: "Payload:",
            },
            {
              type: "value",
              content: {
                mask: [
                  {
                    value: "George Williams",
                    token_name: "Numeric Token",
                  },
                ],
              },
            },
            {
              type: "mini-title",
              content: "Mask with Format and Token",
            },
            {
              type: "key",
              content: "Payload:",
            },
            {
              type: "value",
              content: {
                mask: [
                  {
                    value: "George Williams",
                    token_name: "Numeric Token",
                    format: "Person Name",
                  },
                ],
              },
            },
            {
              type: "mini-title",
              content: "Mask with Autodetect",
            },
            {
              type: "key",
              content: "Payload:",
            },
            {
              type: "value",
              content: {
                mask: [
                  {
                    value: "George Williams lives in Washington",
                  },
                ],
              },
            },
            {
              type: "mini-title",
              content: "Tokens",
            },
            {
              type: "table",
              content: {
                columns: [
                  {
                    key: "tokenName",
                    value: "Token Name",
                    type: "string",
                    width: "200px",
                  },
                  {
                    key: "noOfBytes",
                    value: "No. of bytes",
                    type: "string",
                    width: "150px",
                  },
                  {
                    key: "minimumNoOfBytes",
                    value: "Min. bytes",
                    type: "string",
                    width: "150px",
                  },
                  {
                    key: "maximumNoOfBytes",
                    value: "Max. bytes",
                    type: "string",
                    width: "150px",
                  },
                  {
                    key: "tokenCharacters",
                    value: "Token Characters",
                    type: "string",
                    width: "150px",
                  },
                  {
                    key: "caseSensitive",
                    value: "Case sensitive",
                    type: "toggle",
                    width: "150px",
                  },
                ],
                data: [
                  {
                    tokenName: "Text Token",
                    noOfBytes: "same as input",
                    minimumNoOfBytes: 10,
                    maximumNoOfBytes: 20,
                    tokenCharacters: "alpha-numeric",
                    caseSensitive: "true",
                  },
                  {
                    tokenName: "Numeric Token",
                    noOfBytes: "same as input",
                    minimumNoOfBytes: 12,
                    maximumNoOfBytes: 25,
                    tokenCharacters: "numeric",
                    caseSensitive: "false",
                  },
                  {
                    tokenName: "Special Token",
                    noOfBytes: "random",
                    minimumNoOfBytes: 15,
                    maximumNoOfBytes: 30,
                    tokenCharacters: "alpha-numeric",
                    caseSensitive: "true",
                  },
                ],
              },
            },
            {
              type: "mini-title",
              content: "Formats",
            },
            {
              type: "table",
              content: {
                columns: [
                  {
                    key: "formatName",
                    value: "Format",
                    type: "string",
                    width: "150px",
                  },
                  {
                    key: "example",
                    value: "Example",
                    type: "string",
                    width: "150px",
                  },
                  {
                    key: "mask",
                    value: "Mask",
                    type: "string",
                    width: "150px",
                  },
                ],
                data: [
                  {
                    formatName: "Person Name",
                    example: ["George Williams"],
                    mask: ["yefNTf jm3Jf"],
                  },
                  {
                    formatName: "Email Address",
                    example: ["George@example.com"],
                    mask: ["yefNTf@VxLPAG1Dvm"],
                  },
                  {
                    formatName: "Phone Number",
                    example: ["(555) 123-4567"],
                    mask: ["(0891) 4045-773"],
                  },
                  {
                    formatName: "Address",
                    example: ["1234 Elm Street,Los Angeles"],
                    mask: ["pZl7 G8G WB7L,02F8 00r"],
                  },
                  {
                    formatName: "IP Address",
                    example: ["192.168.0.1"],
                    mask: ["368.531.3681.004"],
                  },
                  {
                    formatName: "Social Identification Numbers",
                    example: ["856-45-6789"],
                    mask: ["CQW3-HJE33-89FD"],
                  },
                  {
                    formatName: "Credit Card",
                    example: ["5000236879543214"],
                    mask: ["4D67AFZLFh3OBk03cNo0"],
                  },
                ],
              },
            },
          ],
        },
        {
          codeEditor: [
            {
              type: "code-editor",
              content:
                "../../../../../assets/data/python-complier/index.html?method=mask",
            },
          ],
        },
        {
          fullSizeCard: [
            {
              type: "mini-title",
              content: "Unmask API",
            },
            {
              type: "key",
              content: "Url:",
            },
            {
              type: "chip",
              content: "PUT",
            },
            {
              type: "value",
              content: "https://trial.protecto.ai/api/vault/unmask",
            },
            {
              type: "key",
              content: "Payload:",
            },
            {
              type: "value",
              content: {
                unmask: [
                  {
                    token_value: "NYRLv9PSc3",
                  },
                ],
              },
            },
            {
              type: "key",
              content: "Output:",
            },
            {
              type: "value",
              content: {
                token_value: "NYRLv9PSc3",
                value: "Adam",
              },
            },
          ],
        },
        {
          codeEditor: [
            {
              type: "code-editor",
              content:
                "../../../../../assets/data/python-complier/index.html?method=unmask",
            },
          ],
        },
      ];
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
  // GET SUBSCRIPTION DETAILS
  app.get("/subscription", (req, res) => {
    /* header
        authorization: accessToken
        authProvider: 'microsoft', 'google', 'keycloak'
    */
    /* QUERY PARAMS:{
          email:"john@gmail.com"
      }
    */
    // Response
    res.send({
      data: [
        {
          type: "mini-title",
          content: "License",
        },
        {
          type: "key",
          content: "Expires On",
        },
        {
          type: "value",
          content: "24 July 2024",
        },
        {
          type: "content",
          content:
            "We are setting up your environment, please wait for a while, Once set up is done,your subscription detail will be updated here.",
        },
      ],
      success: true,
      error: {
        message: "",
      },
    });
    // response when license key is not added
    res.send({
      data: [
        {
          type: "mini-title",
          content: "Compliance",
        },
        {
          type: "key",
          content: "Expires On",
        },
        {
          type: "value",
          content: "-",
        },
      ],
      success: true,
      error: {
        message: "",
      },
    });
  });

  // SIDE NAVIGATION BAR
  // USAGE -TRIAL false will disable the menu
  app.get("/menus", (req, res) => {
    /* QUERY PARAMS: NONE */

    // let menus = [
    //   {
    //     link: "/trial/get-started",
    //     name: "Get started",
    //     icon: "get-started",
    //     children: [
    //       {
    //         link: "/trial/get-started/welcome",
    //         name: "Welcome",
    //         usage: { trial: true }, // DYNAMIC
    //       },
    //     ],
    //   },
    //   {
    //     link: "/trial/tokenization",
    //     name: "Tokenization",
    //     icon: "tokenization",
    //     children: [
    //       {
    //         link: "/trial/tokenization/mask-unmask",
    //         name: "Mask/Unmask",
    //         usage: { trial: true, design: { label: "Free", type: "chip" } },
    //       },
    //       {
    //         link: "/trial/tokenization/async-mask-unmask",
    //         name: "Async. Mask/Unmask",
    //         usage: {
    //           trial: false,
    //           design: { label: "Contact Us", type: "button" },
    //         },
    //       },
    //       {
    //         link: "/trial/tokenization/bulk",
    //         name: "Bulk",
    //         usage: {
    //           trial: false,
    //           design: { label: "Contact Us", type: "button" },
    //         },
    //       },
    //     ],
    //   },
    //   {
    //     link: "/trial/dpr",
    //     name: "Scan for DPR",
    //     icon: "scan",
    //     children: [
    //       {
    //         link: "/trial/dpr/data-protection-scan",
    //         name: "Data Protection Scan",
    //         redirectUrl: "https://protecto.ai/compliance", // DYNAMIC
    //         usage: {
    //           trial: false,
    //           usage: { trial: false, design: { label: "Free", type: "chip" } },
    //         },
    //       },
    //       {
    //         link: "/trial/dpr/pii-scan",
    //         name: "PII Scan",
    //         design: { label: "Contact Us", type: "button" },
    //       },
    //     ],
    //   },
    //   {
    //     link: "/trial/test-data",
    //     name: "Test Data",
    //     icon: "document",
    //     children: [
    //       {
    //         link: "/trial/test-data/generate-test-data",
    //         name: "Generate Test Data",
    //         redirectUrl: "https://protecto.ai/test-data",
    //         usage: {
    //           trial: false,
    //           design: { label: "Contact Us", type: "button" },
    //         },
    //       },
    //     ],
    //   },
    // ];

    let menus = [
      {
        link: "/trial/get-started",
        name: "Get Started",
        icon: "get-started",
        children: [
          {
            link: "/trial/get-started/welcome",
            name: "Welcome",
            usage: { trial: true }, // DYNAMIC
          },
          {
            link: "/trial/docs",
            name: "Help Document",
            usage: {
              trial: true,
            },
            redirectUrl: "https://help.protecto.ai/getting-started/",
          },
        ],
      },
      {
        link: "/trial/tokenization",
        name: "Tokenization",
        icon: "tokenization",
        children: [
          {
            link: "/trial/tokenization/mask-unmask",
            name: "Mask/Unmask",
            usage: { trial: true, design: { label: "Free", type: "chip" } },
          },
          {
            link: "/trial/tokenization/async-mask-unmask",
            name: "Asynchronous APIs",
            usage: {
              trial: false,
              design: { label: "Contact Us", type: "button" },
            },
          },
          {
            link: "/trial/tokenization/bulk",
            name: "Bulk Data APIs",
            usage: {
              trial: false,
              design: { label: "Contact Us", type: "button" },
            },
          },
        ],
      },
      {
        link: "/trial/dpr",
        name: "Data Protection",
        icon: "scan",
        children: [
          {
            link: "/trial/dpr/data-protection-scan",
            name: "Data Protection Scan",
            redirectUrl: "http://localhost:4401", // DYNAMIC
            usage: { trial: true, design: { label: "Free", type: "chip" } },
          },
          {
            link: "/trial/dpr/pii-scan",
            name: "PII Scan",
            usage: {
              trial: false,
              design: { label: "Contact Us", type: "button" },
            },
          },
        ],
      },
      {
        link: "/trial/synthetic-data",
        name: "Synthetic Data",
        icon: "document",
        children: [
          {
            link: "/trial/synthetic-data/generate-test-data",
            name: "Generate Test Data",
            redirectUrl: "https://protecto.ai/",
            usage: {
              trial: false,
              design: { label: "Contact Us", type: "button" },
            },
          },
        ],
      },
    ];

    // Response
    res.send({
      data: menus,
      success: true,
      error: {
        message: "",
      },
    });
  });

  // GET SAMPLE CODE
  app.get("/sample-code", (req, res) => {
    /* QUERY PARAMS: { method: 'mask' || 'unmask' } */
    // console.log('req.query', req.query)
    let code = "";
    let headerText = "";
    let outputText = "";
    if (req.query.method == "mask") {
      headerText = "Mask.py";
      code = "from js import XMLHttpRequest\nimport json\n\n#example input\nmask_input = {\n    \"mask\": [\n        {\n            \"value\": \"John Mathew lives in Los Angeles.\"\n            \n        },\n        {\n            \"value\": \"+1 (456)-8990-73876\", \n            \"token_name\": \"Numeric Token\", \n            \"format\": \"Phone Number\"\n        },\n        {\n            \"value\": \"John Doe\", \n            \"token_name\": \"special token\", \n            \"format\": \"person name\"\n        }\n    ]\n}\n\nrequest_object = XMLHttpRequest.new()\n\ntry:\n    mask_request_url = \"https://trial-test.thedpoforum.com/api/vault/mask\"\n    mask_request_method = \"PUT\"\n    Authorization_token = \"Bearer -\"\n    request_object.open(mask_request_method, mask_request_url,False)\n    # set headers\n    request_object.setRequestHeader(\"Content-Type\", \"application/json; charset=utf-8\")\n    request_object.setRequestHeader(\"Authorization\", Authorization_token)\n    request_object.send(json.dumps(mask_input))\n    masked_result = request_object.responseText\n    final_result = json.dumps(json.loads(masked_result),indent=4)\n    print(final_result)\n    \nexcept Exception as error:\n    print(\"An error occurred:\\n\", str(error))";
      outputText = "Mask Output";
    } else if (req.query.method == "unmask") {
      headerText = "Unmask.py";
      code = "from js import XMLHttpRequest\nimport json\n\n# Replace token_value in below unmask_input to token_value which you got from mask output.  \nunmask_input = {\n  \"unmask\": [\n    {\n      \"token_value\": \"ODXY7AiGIi fn8pbLXuTG\",\n    },\n    {\n      \"token_value\": \"ye3X9NYAue\",\n    }\n  ]\n}\n\nrequest_object = XMLHttpRequest.new()\n\ntry:\n    unmask_request_url = \"https://trial-test.thedpoforum.com/api/vault/unmask\"\n    unmask_request_method = \"PUT\"\n    Authorization_token = \"Bearer -\"\n    request_object.open(unmask_request_method, unmask_request_url, False)\n    # set the headers for the request\n    request_object.setRequestHeader(\"Content-Type\", \"application/json; charset=utf-8\")\n    request_object.setRequestHeader(\"Authorization\", Authorization_token)\n    # send Request \n    request_object.send(json.dumps(unmask_input))\n    unmasked_result = request_object.responseText\n    final_result = json.dumps(json.loads(unmasked_result),indent=4)\n    print(final_result)\n    \nexcept Exception as error:\n    print(\"An error occurred:\\n\", str(error))";
      outputText = "Unmask Output";
    }
    // Response
    res.send({
      data: {
        headerText: headerText,
        code: code, // WITH INTENDATION
        outputText: outputText,
      },
      success: true,
      error: {
        message: "",
      },
    });
  });

  // STORE SIGNED UP USER EMAIL
  app.put("/signup", (req, res) => {
    /* Payload: {} */

    // FROM UI TO AUTHENTICATION SERVICE, EMAIL AND PASSWORD WILL BE THERE ( FOR MICROSOFT AND GOOGLE, ONLY EMAIL WILL BE AVAILABLE )
    // FROM AUTHENTICATION SERVICE TO BACKEND SERVICE - ONLY EMAIL WILL BE SENT

    /* header
       authorization-basic: base64 encoded (email:password)
       authProvider: 'microsoft', 'google', 'keycloak'
    */

    let email = req.body["email"];

    // Response
    res.send({
      data: {
        email: email,
      },
      success: true,
      error: {
        message: "",
      },
    });
  });

  // GET USER DETAILS
  app.get("/user", (req, res) => {
    /* Query Params: {
       "email":"john123@gmail.com",
    } */

    /* header
        authorization: accessToken
        authProvider: 'microsoft', 'google', 'keycloak'
    */

    // Response
    res.send({
      data: {
        name: "John",
        email: "johndoe@company.com",
        phoneNumber: "+919012345678",
        companyName: "Protecto",
      },
      success: true,
      error: {
        message: "",
      },
    });
  });

  // UPDATE USER DETAILS
  app.put("/update-user", (req, res) => {
    /* header
        authorization: accessToken
        authProvider: 'microsoft', 'google', 'keycloak'
    */

    /* Payload: {
            name: "John",
            email: "johndoe@company.com",
            phoneNumber: "+919012345678",
            companyName: "Protecto",

       } */

    // Response
    res.send({
      data: {
        name: "John",
        email: "johndoe@company.com",
        phoneNumber: "+919012345678",
        companyName: "Protecto",
        message: "User information updated successfully",
      },
      success: true,
      error: {
        message: "",
      },
    });
  });

  // FOR NEXT RELEASE - V2
  app.put("/pii-identification", (req, res) => {
    /* Payload:
      {
          data:{
            text:"John is in America"
        }
      */
    // Response
    res.send({
      data: {
        identifiedTags: [
          {
            tag: "person",
            matched: ["John"],
          },
          {
            tag: "GPE",
            matched: ["America"],
          },
        ],
      },
      success: true,
      error: {
        message: "",
      },
    });
  });

  app.put("/azure-marketplace-signup", (req, res) => {
    // header:
    // purchasetoken :<token>
    // Payload: None
    // Response
    res.send({
      data: {
        email: "help@protecto.ai",
      },
      success: true,
      error: {
        message: "",
      },
    });
  });

  app.post("/create-license", (req, res) => {
    // header:accessToken
    /* Payload:
        {
            "username": username,
            "days": 14,
            "license_type":"trial",
            "group_name":groupname
        }
        */

    // Response
    console.log(req.body);
    res.send({
      data: {
        licenseKey: "sadfghjkyu65432iokthtgrfedd34567",
      },
      success: true,
      error: {
        message: "",
      },
    });
  });
};
