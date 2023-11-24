module.exports = (app) => {
    app.get('/reports/email', (req, res) => {
        /*
        Query Params:
           {
               data:{
                 userName:"hari",
                 email:"hari@protecto.ai",
                 pageName:"data-by-usage"
                 type:"userAction"
               }
         */
        // Response
        res.send({
            data: {
                isDownloadButtonDisabled: false
            },
            success: true,
            error: {
                message: "",
            },
        });
    })

    app.get('/reports/filters', (req, res) => {
        /* Query Params:
           {
                filter:all or tag,
           }
         */
        // Response
        let data = {}
        let allData = {
            accessPrivilegeFilters: [{
                    "key": "Good",
                    "color": "green"
                },
                {
                    "key": "Broad",
                    "color": "orange"
                },
                {
                    "key": "Excess",
                    "color": "red"
                },
                {
                    "key": "NA",
                    "color": "grey"
                }
            ],
            // accessPrivilegeFiltersForStale: [
            //     {
            //         "key": "Good",
            //         "color": "green"
            //     },
            //     {
            //         "key": "Broad",
            //         "color": "orange"
            //     },
            //     {
            //         "key": "Excess",
            //         "color": "red"
            //     }
            // ],
            breachRiskFilters: [{
                    "key": "Severe",
                    "color": "red"
                },
                {
                    "key": "High",
                    "color": "orange"
                },
                {
                    "key": "Medium",
                    "color": "yellow"
                },
                {
                    "key": "Low",
                    "color": "green"
                }
            ],
            privacyRiskFilters: [{
                    "key": "Violation",
                    "color": "violet"
                },
                {
                    "key": "Very High",
                    "color": "red"
                },
                {
                    "key": "High",
                    "color": "orange"
                },
                {
                    "key": "Medium",
                    "color": "yellow"
                },
                {
                    "key": "Low",
                    "color": "green"
                }
            ],
            recommendedActionFilters: [{
                    "key": "reduce data",
                },
                {
                    "key": "anonymize",
                },
                {
                    "key": "Minimize data"
                }
            ],
            personalData: [{
                    "key": "PI",
                    "color": "orange"
                },
                {
                    "key": "PII",
                    "color": "red"
                },
                {
                    "key": "SENSITIVE",
                    "color": "red"
                },
                {
                    "key": "NO_PI",
                    "color": ""
                }
            ],
            tagFilters: [{
                    "key": "vin"
                },
                {
                    "key": "age"
                },
                {
                    "key": "gender"
                },
                {
                    "key": "address"
                },
                {
                    "key": "us_phone_number"
                },
                {
                    "key": "dob"
                },
                {
                    "key": "ip_address"
                },
                {
                    "key": "email_address"
                },
                {
                    "key": "person"
                },
                {
                    "key": "us_ssn"
                },
                {
                    "key": "credit_card"
                },
                {
                    "key": "norp"
                },
                {
                    "key": "DATE"
                },
                {
                    "key": "LOC"
                },
                {
                    "key": "GPE"
                },
                {
                    "key": "FAC"
                },
                {
                    "key": "ORG"
                },
                {
                    "key": "TIME"
                },
                {
                    "key": "QUANTITY"
                },
                {
                    "key": "ORDINAL"
                },
                {
                    "key": "PRODUCT"
                },
                {
                    "key": "MONEY"
                },
                {
                    "key": "EVENT"
                },
                {
                    "key": "LANGUAGE"
                },
                {
                    "key": "UK_PHONE_NUMBER"
                },
                {
                    "key": "LAW"
                }
            ],
            dataByUsageFilters: [{
                    "key": "Active",
                    "color": "green"
                },
                {
                    "key": "Infrequent",
                    "color": "orange"
                },
                {
                    "key": "Stale",
                    "color": "red"
                },
                {
                    "key": "NA",
                    "color": "grey"
                }
            ]
        }
        let tagData = {
            tagFilters: [{
                    "key": "vin"
                },
                {
                    "key": "age"
                },
                {
                    "key": "gender"
                },
                {
                    "key": "address"
                },
                {
                    "key": "us_phone_number"
                },
                {
                    "key": "dob"
                },
                {
                    "key": "ip_address"
                },
                {
                    "key": "email_address"
                },
                {
                    "key": "person"
                },
                {
                    "key": "us_ssn"
                },
                {
                    "key": "credit_card"
                },
                {
                    "key": "norp"
                },
                {
                    "key": "DATE"
                },
                {
                    "key": "LOC"
                },
                {
                    "key": "GPE"
                },
                {
                    "key": "FAC"
                },
                {
                    "key": "ORG"
                },
                {
                    "key": "TIME"
                },
                {
                    "key": "QUANTITY"
                },
                {
                    "key": "ORDINAL"
                },
                {
                    "key": "PRODUCT"
                },
                {
                    "key": "MONEY"
                },
                {
                    "key": "EVENT"
                },
                {
                    "key": "LANGUAGE"
                },
                {
                    "key": "UK_PHONE_NUMBER"
                },
                {
                    "key": "LAW"
                }
            ],
        }
        let request = JSON.parse(req.query.data)
        if (request.filter == "all") {
            data = allData
        } else if (request.filter == "tag") {
            data = tagData
        }
        res.send({
            data: data,
            success: true,
            error: {
                message: "",
            },
        });
    })

    app.get('/reports/columns', (req, res) => {
        /* Query Params:
           {
                 pageName:"breach-risk/excess-access/data-by-usage/privacy-data/privacy-datause/compliance-ropa/compliance-dpia"
            }
         */
        // Response
        let breachRisk = [{
                key: "title",
                type: "header",
                value: "BREACH ASSESSMENT"
            },
            {
                key: "subTitle",
                type: "header",
                value: "Breach Risk"
            },
            {
                key: "dataasset",
                type: "table",
                value: "Data Asset"
            },
            {
                key: "personalData",
                type: "table",
                value: "Personal Data",
            },
            {
                key: "tags",
                type: "table",
                value: "Tags"
            },
            {
                key: "totalRows",
                type: "table",
                value: "Rows/Size"
            },
            {
                key: "breachRisk",
                type: "table",
                value: "Breach Risk"
            },
            {
                key: "financialImpactInDollars",
                type: "table",
                value: "Financial Impact"
            },
            {
                key: "usersWithAccess",
                type: "table",
                value: "Users"
            },
            {
                key: "accessPrivilege",
                type: "table",
                value: "Access Privilege"
            },
            {
                key: "breachRecommendedAction",
                type: "table",
                value: "Recommendation"
            },
            {
                key: "columnLevelDetails",
                type: "table",
                value: "Details"
            },
        ]

        let excessiveAccess = [

            {
                key: "title",
                type: "header",
                value: "BREACH ASSESSMENT"
            },
            {
                key: "subTitle",
                type: "header",
                value: "Excessive Access"
            },
            {
                key: "dataasset",
                type: "table",
                value: "Data Asset"
            },
            {
                key: "personalData",
                type: "table",
                value: "Personal Data",
            },
            {
                key: "usersWithAccess",
                type: "table",
                value: "Users With Access"
            },
            {
                key: "activeUsers",
                type: "table",
                value: "Active Users"
            },
            {
                key: "activeUsersPercentage",
                type: "table",
                value: "% Active Users"
            },
            {
                key: "columnLevelDetails",
                type: "table",
                value: "Detareports/recordsils"
            },

        ]
        let dataByUsage = [

            {
                key: "title",
                type: "header",
                value: "BREACH ASSESSMENT"
            },
            {
                key: "subTitle",
                type: "header",
                value: "Data By Usage"
            },
            {
                key: "dataasset",
                type: "table",
                value: "Data Asset"
            },
            {
                key: "usage",
                type: "table",
                value: "Usage"
            },
            {
                key: "personalData",
                type: "table",
                value: "Personal Data"
            },
            {
                key: "totalRows",
                type: "table",
                value: "Rows/Size"
            },
            {
                key: "breachRisk",
                type: "table",
                value: "Breach Risk"
            },
            {
                key: "lastUsedBefore",
                type: "table",
                value: "Last Used Before"
            },
            {
                key: "lastUsedBy",
                type: "table",
                value: "Last Used By"
            },
            {
                key: "activities",
                type: "table",
                value: "Activities (90 Days)"
            },
            {
                key: "activeUsers",
                type: "table",
                value: "Active Users (90 Days)"
            },
            {
                key: "dataOwner",
                type: "table",
                value: "Data Owner"
            },
            {
                key: "columnLevelDetails",
                type: "table",
                value: "Details"
            },
        ]
        let privacyRiskData = [

            {
                key: "title",
                type: "header",
                value: "PRIVACY ASSESSMENT"
            },
            {
                key: "subTitle",
                type: "header",
                value: "Privacy Risk (Data)"
            },
            {
                key: "dataasset",
                type: "table",
                value: "dataasset"
            },
            {
                key: "personalData",
                type: "table",
                value: "Personal Data",
            },
            {
                key: "tags",
                type: "table",
                value: "Tags"
            },
            {
                key: "privacyRisk",
                type: "table",
                value: "Privacy Risk"
            },
            {
                key: "activeUsers",
                type: "table",
                value: "Active Users"
            },
            {
                key: "accessPrivilege",
                type: "table",
                value: "Access Privilege"
            },
            {
                key: "dataOwner",
                type: "table",
                value: "Data Owner"
            },
            {
                key: "privacyRecommendedAction",
                type: "table",
                value: "Recommendation"
            },
            {
                key: "columnLevelDetails",
                type: "table",
                value: "Details"
            },

        ]
        let privacyRiskDataUse = [

            {
                key: "title",
                type: "header",
                value: "PRIVACY ASSESSMENT"
            },
            {
                key: "subTitle",
                type: "header",
                value: "Privacy Risk (Data Use)"
            },
            {
                key: "date",
                type: "table",
                value: "Date"
            },
            {
                key: "user",
                type: "table",
                value: "User",
            },
            {
                key: "accessedAs",
                type: "table",
                value: "Accessed As"
            },
            {
                key: "dataasset",
                type: "table",
                value: "dataasset"
            },
            {
                key: "privacyRecommendedAction",
                type: "table",
                value: "Recommendation"
            },
            {
                key: "columnLevelDetails",
                type: "table",
                value: "Details"
            },
        ]

        let ropaData = [{
                key: "title",
                type: "header",
                value: "COMPLIANCE"
            },
            {
                key: "subTitle",
                type: "header",
                value: "ROPA"
            },
            {
                key: "datauser",
                type: "table",
                value: "Data User"
            },
            {
                key: "dataasset",
                type: "table",
                value: "Data Assets"
            },
            {
                key: "subjectType",
                type: "table",
                value: "Data Subject Type"
            },
            {
                key: "location",
                type: "table",
                value: "Location of Data Subject"
            },
            {
                key: "tags",
                type: "table",
                value: "Personal Data Types"
            },
            {
                key: "category",
                type: "table",
                value: "Data Categories"
            },
            {
                key: "sourcePurpose",
                type: "table",
                value: "Legal Basis"
            },
            {
                key: "retention",
                type: "table",
                value: "Data Retention Period"
            },
            {
                key: "dataOwner",
                type: "table",
                value: "Data Owner"
            }
        ]

        let dpiaData = [{
                key: "title",
                type: "header",
                value: "COMPLIANCE"
            },
            {
                key: "subTitle",
                type: "header",
                value: "DPIA"
            },
            {
                key: "data",
                type: "table",
                value: "Data",
                children: [{
                    key: "dataasset",
                    type: "table",
                    value: "Data Asset"
                }]
            },
            {
                key: "natureofprocessing",
                type: "table",
                value: "Nature Of Processing",
                children: [{
                    key: "usersWithAccess",
                    type: "table",
                    value: "Users With Access"
                }, {
                    key: "retention",
                    type: "table",
                    value: "Retention"
                }, ]
            },
            {
                key: "scopeofprocessing",
                type: "table",
                value: "Scope Of Processing",
                children: [{
                    key: "tags",
                    type: "table",
                    value: "Personal Data Types"
                }, {
                    key: "totalRows",
                    type: "table",
                    value: "Size of Data"
                }, {
                    key: "category",
                    type: "table",
                    value: "Classification"
                }, {
                    key: "activityCount",
                    type: "table",
                    value: "Number of Activities"
                }, ]
            },
            {
                key: "contextofprocessing",
                type: "table",
                value: "Context Of Processing",
                children: [{
                    key: "location",
                    type: "table",
                    value: "Data Subject Location"
                }, {
                    key: "subjectType",
                    type: "table",
                    value: "Data Subject Type"
                }, {
                    key: "hasMinorData",
                    type: "table",
                    value: "Contains Minor Data"
                }]
            }
        ]
        let data = []
        let request = JSON.parse(req.query.data)

        if (request.pageName == "breach-risk") {
            data = breachRisk
        } else if (request.pageName == "excess-access") {
            data = excessiveAccess
        } else if (request.pageName == "data-by-usage") {
            data = dataByUsage
        } else if (request.pageName == "privacy-data") {
            data = privacyRiskData
        } else if (request.pageName == "privacy-datause") {
            data = privacyRiskDataUse
        } else if (request.pageName == "compliance-ropa") {
            data = ropaData
        } else if (request.pageName == "compliance-dpia") {
            data = dpiaData
        }
        res.send({
            data: data,
            success: true,
            error: {
                message: "",
            },
        });
    })

    app.put('/reports/records', (req, res) => {
        /* Payload:
           {
                data:{
                    filter:{
                    tags: ["vin", "dob"],
                    breachRisk: ["high", "Very High"],
                    privacyRisk: ["high", "Very High"],
                    accessPrivilege: ["good", "broad"],
                    dataByUsage:["Stale","Active","Infrequent","NA"]
                    }
                    searchTerm:"sadsadsadas",
                    pageName:'breach-risk' | 'excess-access' | 'data-by-usage' | 'privacy-data' | 'compliance-ropa' | 'compliance-dpia' | 'privacy-datause'
                }   
            }
         */
        // Response
        res.send({
            data: {
                totalRecords: 21
            },
            success: true,
            error: {
                message: "",
            },
        });
    })

    //dynamic table update column 
    app.put("/reports/columns", (req, res) => {
        // let pageName = JSON.parse(JSON.stringify(req.body.data.pageName));
        let data = JSON.parse(JSON.stringify(req.body.data.columns));
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