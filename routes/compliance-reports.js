module.exports = (app) => {
app.put("/compliance/ropa", (req, res) => {
    /* Payload:
        {
            data:{
                pageSize: 10,
                pageNumber: 5,
                filter:[],
                searchTerm:"sadsadsadas",
                sortBy:"asc" | dsc,
                sortColumn:"column_name",
            }
        }
    */
    let param = req.body.data;
    let data = {
      values: [
        {
          datauser: "",
          dataasset: ["Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4","Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4",],
          subjectType: [],
          location: [],
          tags: [],
          category: [],
          sourcePurpose: [],
          retention: "-",
          dataOwner: [],
        },
        {
          datauser: "Username",
         dataasset: ["Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2"],
          subjectType: ["employee", "customer"],
          location: ["Anguilla","United States/california"],
          tags: ["person", "gpe"],
          category: ["PI", "PII", "SENSITIVE"],
          sourcePurpose: ["implicit consent"],
          retention:"7 Years",
          dataOwner: ["dataowner@onedpo.com", "saran@onedpo.com"],
        },
        {
          datauser: "Username",
          dataasset: ["Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3,Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3,Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3,Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3,Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3,Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3,Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3,Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3,Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3,Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3,Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3,Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3,Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3,Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3,Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3,Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3,Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3,Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3,Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3,Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3",],
          subjectType: ["employee", "customer"],
          location: ["Anguilla","United States/california"],
          tags: ["person", "gpe"],
          category: ["PI", "PII", "SENSITIVE"],
          sourcePurpose: ["implicit consent"],
          retention: "7 Years",
          dataOwner: ["dataowner@onedpo.com", "saran@onedpo.com"],
        },
        {
          datauser: "Username",
         dataasset: ["Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2"],
          subjectType: ["employee", "customer"],
          location: ["Anguilla","United States/california"],
          tags: ["person", "gpe"],
          category: ["PI", "PII", "SENSITIVE"],
          sourcePurpose: ["implicit consent"],
          retention:"7 Years",
          dataOwner: ["dataowner@onedpo.com", "saran@onedpo.com"],
        },
        {
          datauser: "Username",
          dataasset: ["Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3"],
          subjectType: ["employee", "customer"],
          location: ["Anguilla","United States/california"],
          tags: ["person", "gpe"],
          category: ["PI", "PII", "SENSITIVE"],
          sourcePurpose: ["implicit consent"],
          retention: "7 Years",
          dataOwner: ["dataowner@onedpo.com", "saran@onedpo.com"],
        },
        {
          datauser: "Username",
         dataasset: ["Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2"],
          subjectType: ["employee", "customer"],
          location: ["Anguilla","United States/california"],
          tags: ["person", "gpe"],
          category: ["PI", "PII", "SENSITIVE"],
          sourcePurpose: ["implicit consent"],
          retention:"7 Years",
          dataOwner: ["dataowner@onedpo.com", "saran@onedpo.com"],
        },
        {
          datauser: "Username",
          dataasset: ["Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3","Cluster.Database.Schema.Table4"],
          subjectType: ["employee", "customer"],
          location: ["Anguilla","United States/california"],
          tags: ["person", "gpe"],
          category: ["PI", "PII", "SENSITIVE"],
          sourcePurpose: ["implicit consent"],
          retention: "7 Years",
          dataOwner: ["dataowner@onedpo.com", "saran@onedpo.com"],
        },
        {
          datauser: "Username",
         dataasset: ["Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2"],
          subjectType: ["employee", "customer"],
          location: ["Anguilla","United States/california"],
          tags: ["person", "gpe"],
          category: ["PI", "PII", "SENSITIVE"],
          sourcePurpose: ["implicit consent"],
          retention:"7 Years",
          dataOwner: ["dataowner@onedpo.com", "saran@onedpo.com"],
        },
        {
          datauser: "Username",
          dataasset: ["Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3"],
          subjectType: ["employee", "customer"],
          location: ["Anguilla","United States/california"],
          tags: ["person", "gpe"],
          category: ["PI", "PII", "SENSITIVE"],
          sourcePurpose: ["implicit consent"],
          retention: "7 Years",
          dataOwner: ["dataowner@onedpo.com", "saran@onedpo.com"],
        },
        {
          datauser: "Username",
         dataasset: ["Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2"],
          subjectType: ["employee", "customer"],
          location: ["Anguilla","United States/california"],
          tags: ["person", "gpe"],
          category: ["PI", "PII", "SENSITIVE"],
          sourcePurpose: ["implicit consent"],
          retention:"7 Years",
          dataOwner: ["dataowner@onedpo.com", "saran@onedpo.com"],
        },
        {
          datauser: "Username",
          dataasset: ["Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2","Cluster.Database.Schema.Table3"],
          subjectType: ["employee", "customer"],
          location: ["Anguilla","United States/california"],
          tags: ["person", "gpe"],
          category: ["PI", "PII", "SENSITIVE"],
          sourcePurpose: ["implicit consent"],
          retention: "7 Years",
          dataOwner: ["dataowner@onedpo.com", "saran@onedpo.com"],
        },
        {
          datauser: "Username",
         dataasset: ["Cluster.Database.Schema.Table1","Cluster.Database.Schema.Table2"],
          subjectType: ["employee", "customer"],
          location: ["Anguilla","United States/california"],
          tags: ["person", "gpe"],
          category: ["PI", "PII", "SENSITIVE"],
          sourcePurpose: ["implicit consent"],
          retention:"7 Years",
          dataOwner: ["dataowner@onedpo.com", "saran@onedpo.com"],
        },

      ],
    };
    data.totalRecords = data.values.length;
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
app.put("/compliance/dpia", (req, res) => {
    /* Payload:
        {
            data:{
                pageSize: 10,
                pageNumber: 5,
                filter:[],
                searchTerm:"sadsadsadas",
                sortBy:"asc" | dsc,
                sortColumn:"column_name"
            }
        }
    */
    let param = req.body.data;
    let data = {
      values: [
        {
          dataasset: "Cluster.Database.Schema",
          usersWithAccess: 6,
          retention: "0-7 Years", 
          tags: ["person", "gpe","loc", "org"],
          totalRows: 1000,
          category: ["PI", "PII", "SENSITIVE"],
          activityCount: 10,
          location: ["Anguilla","United States/california","united Kingdom","Russia"],
          subjectType: ["employee", "customer","employee1"],
          hasMinorData: "Yes",
        },
        {
          dataasset: "Cluster.Database.Schema",
          usersWithAccess: 6,
          retention: "0-7 Years", 
          tags: ["person", "gpe","loc", "org"],
          totalRows: 1000,
          category: ["PI", "PII", "SENSITIVE"],
          activityCount: 10,
          location: ["Anguilla","United States/california","united Kingdom","Russia"],
          subjectType: ["employee", "customer","employee1"],
          hasMinorData: "Yes",
        },
        {
          dataasset: "Cluster.Database.Schema",
          usersWithAccess: 6,
          retention: "0-7 Years", 
          tags: ["person", "gpe","loc", "org"],
          totalRows: 1000,
          category: ["PI", "PII", "SENSITIVE"],
          activityCount: 10,
          location: ["Anguilla","United States/california","united Kingdom","Russia"],
          subjectType: ["employee", "customer","employee1"],
          hasMinorData: "Yes",
        },
        {
          dataasset: "Cluster.Database.Schema",
          usersWithAccess: 6,
          retention: "0-7 Years", 
          tags: ["person", "gpe","loc", "org"],
          totalRows: 1000,
          category: ["PI", "PII", "SENSITIVE"],
          activityCount: 10,
          location: ["Anguilla","United States/california","united Kingdom","Russia"],
          subjectType: ["employee", "customer","employee1"],
          hasMinorData: "Yes",
        },
        {
          dataasset: "Cluster.Database.Schema",
          usersWithAccess: 6,
          retention: "0-7 Years", 
          tags: ["person", "gpe","loc", "org"],
          totalRows: 1000,
          category: ["PI", "PII", "SENSITIVE"],
          activityCount: 10,
          location: ["Anguilla","United States/california","united Kingdom","Russia"],
          subjectType: ["employee", "customer","employee1"],
          hasMinorData: "Yes",
        },
        {
          dataasset: "Cluster.Database.Schema",
          usersWithAccess: 6,
          retention: "0-7 Years", 
          tags: ["person", "gpe","loc", "org"],
          totalRows: 1000,
          category: ["PI", "PII", "SENSITIVE"],
          activityCount: 10,
          location: ["Anguilla","United States/california","united Kingdom","Russia"],
          subjectType: ["employee", "customer","employee1"],
          hasMinorData: "Yes",
        },
        {
          dataasset: "Cluster.Database.Schema",
          usersWithAccess: 6,
          retention: "0-7 Years", 
          tags: ["person", "gpe","loc", "org"],
          totalRows: 1000,
          category: ["PI", "PII", "SENSITIVE"],
          activityCount: 10,
          location: ["Anguilla","United States/california","united Kingdom","Russia"],
          subjectType: ["employee", "customer","employee1"],
          hasMinorData: "Yes",
        },
        {
          dataasset: "Cluster.Database.Schema",
          usersWithAccess: 6,
          retention: "0-7 Years", 
          tags: ["person", "gpe","loc", "org"],
          totalRows: 1000,
          category: ["PI", "PII", "SENSITIVE"],
          activityCount: 10,
          location: ["Anguilla","United States/california","united Kingdom","Russia"],
          subjectType: ["employee", "customer","employee1"],
          hasMinorData: "Yes",
        },
        {
          dataasset: "Cluster.Database.Schema",
          usersWithAccess: 6,
          retention: "0-7 Years", 
          tags: ["person", "gpe","loc", "org"],
          totalRows: 1000,
          category: ["PI", "PII", "SENSITIVE"],
          activityCount: 10,
          location: ["Anguilla","United States/california","united Kingdom","Russia"],
          subjectType: ["employee", "customer","employee1"],
          hasMinorData: "Yes",
        },
        {
          dataasset: "Cluster.Database.Schema",
          usersWithAccess: 6,
          retention: "0-7 Years", 
          tags: ["person", "gpe","loc", "org"],
          totalRows: 1000,
          category: ["PI", "PII", "SENSITIVE"],
          activityCount: 10,
          location: ["Anguilla","United States/california","united Kingdom","Russia"],
          subjectType: ["employee", "customer","employee1"],
          hasMinorData: "Yes",
        },
        {
          dataasset: "Cluster.Database.Schema",
          usersWithAccess: 6,
          retention: "0-7 Years", 
          tags: ["person", "gpe","loc", "org"],
          totalRows: 1000,
          category: ["PI", "PII", "SENSITIVE"],
          activityCount: 10,
          location: ["Anguilla","United States/california","united Kingdom","Russia"],
          subjectType: ["employee", "customer","employee1"],
          hasMinorData: "Yes",
        },
        {
          dataasset: "Cluster.Database.Schema",
          usersWithAccess: 6,
          retention: "0-7 Years", 
          tags: ["person", "gpe","loc", "org"],
          totalRows: 1000,
          category: ["PI", "PII", "SENSITIVE"],
          activityCount: 10,
          location: ["Anguilla","United States/california","united Kingdom","Russia"],
          subjectType: ["employee", "customer","employee1"],
          hasMinorData: "Yes",
        },
        {
          dataasset: "Cluster.Database.Schema",
          usersWithAccess: 6,
          retention: "0-7 Years", 
          tags: ["person", "gpe","loc", "org"],
          totalRows: 1000,
          category: ["PI", "PII", "SENSITIVE"],
          activityCount: 10,
          location: ["Anguilla","United States/california","united Kingdom","Russia"],
          subjectType: ["employee", "customer","employee1"],
          hasMinorData: "Yes",
        },
        {
          dataasset: "Cluster.Database.Schema",
          usersWithAccess: 6,
          retention: "0-7 Years", 
          tags: ["person", "gpe","loc", "org"],
          totalRows: 1000,
          category: ["PI", "PII", "SENSITIVE"],
          activityCount: 10,
          location: ["Anguilla","United States/california","united Kingdom","Russia"],
          subjectType: ["employee", "customer","employee1"],
          hasMinorData: "Yes",
        },
        {
          dataasset: "Cluster.Database.Schema",
          usersWithAccess: 6,
          retention: "0-7 Years", 
          tags: ["person", "gpe","loc", "org"],
          totalRows: 1000,
          category: ["PI", "PII", "SENSITIVE"],
          activityCount: 10,
          location: ["Anguilla","United States/california","united Kingdom","Russia"],
          subjectType: ["employee", "customer"],
          hasMinorData: "Yes",
        },
        
      ],
    };
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
}