module.exports = (app) => {
  // keycloak api
  app.get("/login", (req, res) => {
    /* Query Params:
        {
            "userName":"john"
            "password":"johndoe@123",
        }
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
        password_updated: true,
      },
      success: true,
      error: { message: "" },
    });
  });

  app.get("/reset-password", (req, res) => {
    // header:accessToken
    /* Query Params:
        {
            "userName":"john123",
            "password":"johndoe@123",
        }
        */
    // Response
    res.send({
      data: {
        message: "User profile password updated successfully",
      },
      success: true,
      error: {
        message: "",
      },
    });
  });

  app.get("/token", (req, res) => {
    //authorization:refreshToken
    /* Query Params:
        {
        }
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
          password_updated: true,
        },
        success: true,
        error: { message: "" },
      });
  });

  app.get("/verify-action", (req, res) => {
    // Bearer:actionToken
    /* 
        for verify email:
            None
        for reset password:
            header-authorization-basic:base64 encoded password
        */
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

  app.get("/perform-action", (req, res) => {
    /* Query Params:
        {
            "userName":"john123",
            "action":"reset-password" or "verify-email"
        }
        */
    // Response
    res.send({
      // data:
      // {
      //     "message": "Email sent successfully"
      // }
      // ,
      // success: true,
      // error: {
      //     message: "",
      // },
      data: {
        retryAfter: "30",
      },
      success: false,
      error: {
        message: "Exceeded email limit try again after 1 minute",
      },
    });
  });

  // postgres api
  app.put("/update-user", (req, res) => {
    // header:accessToken
    /* Payload:
        {
            "userName":"john",
            "email":"john@protecto.ai",
            "firstName":"John",
            "lastName":"Doe",
            "phoneNumber":"+919012345678",
            "companyName":"Protecto"
        }
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
        password_updated: true,
      },
      success: true,
      error: { message: "" },
    });
  });

  app.get("/subscription", (req, res) => {
    // header:accessToken
    /* Payload:
        {
            userName:"john"
        }
        */
    // Response
    res.send({
      data: {
        startDate: "28-12-2022",
        endDate: "14-02-2023",
        licenseKey: "5144 xxxx xxxx 44444",
        noOfSubscriptionDays: 14,
        type: "full version", // trial (or) full version
      },
      success: true,
      error: {
        message: "",
      },
    });

    // response when license key is not added
    res.send({
      data: {
        startDate: "-",
        endDate: "-",
        licenseKey: "-",
        noOfSubscriptionDays: 0,
      },
      success: true,
      error: {
        message:
          "We are setting up your environment, please wait for a while,Once set up is done,your subscription detail will be updated here.",
      },
    });
  });
  // signup api
  app.put("/create-user", (req, res) => {
    /* Payload:
        {
                    "userId":"john123",(only available for snowflake signup)
                    "firstName":"John",
                    "lastName":"Doe",
                    "email":"johndoe@company.com",
                    "phoneNumber":"+91 9012345678",
                    "companyName":"Protecto"
        }
        */
    // Response
    res.send({
      data: {
        email: req.body["email"],
        userName: req.body["email"],
      },
      success: true,
      error: {
        message: "",
      },
    });
  });

  app.get("/product-details", (req, res) => {
    // header:accessToken
    /* Query Params:
        {
            "userName":"john"
        }
        */

    // Response if product url is available
    res.send({
      data: {
        url: "https://walmart.protecto.ai",
        supportEmail: "help@protecto.ai",
        message: "",
      },
      success: true,
      error: {
        message: "",
      },
    });

    // Response if product url is not available
    res.send({
      data: {
        url: "-",
        supportEmail: "help@protecto.ai",
        message:
          "Protecto Instance setup in progress. Once it is ready,you can launch protecto.",
      },
      success: true,
      error: {
        message: "",
      },
    });
  });

  app.get("/user", (req, res) => {
    // header:accessToken
    /* Query Params:
        {
            "userName":"john" or "userId":"john123"
        }
        */
    // Response
    res.send({
      data: {
        userName: "john123",
        firstName: "John",
        lastName: "Doe",
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

  // not needed for now
  app.get("/forgot-username", (req, res) => {
    // header:accessToken
    /* Query Params:
        {
            "email":"john@protecto.ai",
        }
        */
    // Response
    res.send({
      data: {
        userName: "john123",
      },
      success: true,
      error: {
        message: "",
      },
    });
  });
  // app.get("/reset-password", (req, res) => {
  //     /*
  //         header-authorization-basic:base64 encoded password
  //         userName:string
  //     */
  //     // Response
  //     res.send({
  //         data:
  //         {
  //             "message": "Updated password successfully"
  //         }
  //         ,
  //         success: true,
  //         error: {
  //             message: "Already email verified or password updated ",
  //         },
  //     });
  // })

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
