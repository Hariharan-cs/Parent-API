module.exports = (app) => {

  // Api to get side-nav menus from db
  // Note : if reports header or subheader customized, it's should be reflected in side-nav menus
  app.get("/side-navigation", (req, res) => {
    // Query Params:
    // panelName:"Admin Panel/Compliance Panel"
    // Response
    if (req.query.panelName == 'Compliance Panel') {
      data = {
        mainMenu: [
          {
            link: '/admin/dashboard',
            key: "title",
            type: "header",
            value: 'Dashboard',
            icon: 'dashboard-icon',
            children: []
          },
          {
            link: '/admin/breach',
            key: "title",
            type: "header",
            value: 'Breach Assessment',
            icon: 'breach-assessment-icon',
            children: [
              {
                link: '/admin/breach/breach-risk',
                key: "subTitle",
                type: "header",
                value: 'Breach Risk'
              },
              {
                link: '/admin/breach/excessive-access',
                key: "subTitle",
                type: "header",
                value: 'Excessive Access'
              },
              {
                link: '/admin/breach/data-by-usage',
                key: "subTitle",
                type: "header",
                value: 'Data By Usage'
              }
            ]
          },
          {
            link: '/admin/privacy',
            key: "title",
            type: "header",
            value: 'Privacy Assessment',
            icon: 'privacy-assessment-icon',
            children: [
              {
                key: "subTitle",
                type: "header",
                link: '/admin/privacy/data',
                value: 'Privacy Risk - Data'
              },
              {
                key: "subTitle",
                type: "header",
                link: '/admin/privacy/data-use',
                value: 'Privacy Risk - Data Use'
              }]
          },
          {
            link: '/admin/actions',
            key: "title",
            type: "header",
            value: 'Actions',
            icon: 'action-icon',
            children: [
              {
                link: '/admin/actions/data-catalog',
                key: "subTitle",
                type: "header",
                value: 'Data Catalog'
              }
            ]
          },
          {
            link: '/admin/compliance',
            key: "title",
            type: "header",
            value: 'Compliance',
            icon: 'compliance-icon',
            children: [
              {
                link: '/admin/compliance/ropa',
                key: "subTitle",
                type: "header",
                value: 'ROPA'
              }, {
                link: '/admin/compliance/dpia',
                key: "subTitle",
                type: "header",
                value: 'DPIA'
              }
            ]
          },],
        subMenu: [
          {
            link: '/admin/customize',
            key: "title",
            type: "header",
            value: 'Customize',
            icon: 'customize-icon',
            children: [
              {
                link: '/admin/customize/purpose',
                key: "subTitle",
                type: "header",
                value: 'Purpose'
              },
              {
                link: '/admin/customize/tags-classification',
                key: "subTitle",
                type: "header",
                value: 'Tags & Classification'
              },
              {
                link: '/admin/customize/add-datasource',
                key: "subTitle",
                type: "header",
                value: 'Datasource'
              }
            ]
          },
          {
            link: '/admin/settings',
            key: "title",
            type: "header",
            value: 'Settings',
            icon: 'settings-icon',
            children: [
              {
                link: '/admin/settings/others',
                key: "subTitle",
                type: "header",
                value: 'Others'
              },
              {
                link: '/admin/settings/authentication',
                key: "subTitle",
                type: "header",
                value: 'Authentication'
              }
            ]
          }
        ]
      }
    }
    else if (req.query.panelName == 'Admin Panel') {
      data = {
        mainMenu: [{
          link: 'super-admin/current-batch',
          key: "title",
          type: "header",
          value: 'Current Batch',
          icon: 'dashboard-icon',
          children: []
        },
        {
          link: '/super-admin/activity-history',
          key: "title",
          type: "header",
          value: 'Activity History',
          icon: 'privacy-assessment-icon',
          children: []
        },
        {
          link: '/super-admin/customize-labels',
          key: "title",
          type: "header",
          value: 'Customize Labels',
          icon: 'privacy-assessment-icon',
          children: []
        },
        ],

        subMenu: [{
          link: '/super-admin/settings',
          key: "title",
          type: "header",
          value: 'Settings',
          icon: 'settings-icon',
          children: []
        }]
      }
    }

    res.send({
      data: data,
      success: true,
      error: {
        message: "",
      },
    })
  })

  // Api to get list of reports(page) name
  app.get("/super-admin/customize/page-name", (req, res) => {
    // Query Params:None
    // Response
    res.send({
      data: {
        pageName: [
          { key: "breach-risk", value: "Breach Risk" },
          { key: "excess-access", value: "Excessive Access" },
          { key: "data-by-usage", value: "Data By Usage" },
          { key: "privacy-data", value: "Privacy Risk-Data" },
          { key: "privacy-datause", value: "Privacy Risk-Data Use" },
          { key: "compliance-ropa", value: "ROPA" },
          { key: "compliance-dpia", value: "DPIA" },
        ]
      },
      success: true,
      error: {
        message: "",
      },
    })
  })

  // Api to get default and custom headers,subheaders and column names of reports
  app.get("/super-admin/customize/page-labels", (req, res) => {
    // Query Params
    // pageName: 'Breach Risk'

    res.send({
      data: {
        pageName: "Breach Risk",
        defaultLabel: [
          {
            key: "title",
            type: "header",
            value: "BREACH ASSESSMENT",
          },
          {
            key: "subTitle",
            type: "header",
            value: "Breach Risk",
          },
          {
            key: "dataasset",
            type: "table",
            value: "Data Asset",
          },
          {
            key: "personalData",
            type: "table",
            value: "Personal Data",
          },
          {
            key: "tags",
            type: "table",
            value: "Tags",
          },
          {
            key: "totalRows",
            type: "table",
            value: "Rows/Size",
          },
          {
            key: "breachRisk",
            type: "table",
            value: "Breach Risk",
          },
          {
            key: "financialImpactInDollars",
            type: "table",
            value: "Financial Impact",
          },
          {
            key: "usersWithAccess",
            type: "table",
            value: "Users",
          },
          {
            key: "accessPrivilege",
            type: "table",
            value: "Access Privilege",
          },
          {
            key: "breachRecommendedAction",
            type: "table",
            value: "Recommendation",
          },
          {
            key: "columnLevelDetails",
            type: "table",
            value: "Details",
          },
        ],
        customLabel: [
          {
            key: "title",
            type: "header",
            value: "BREACH ASSESSMENT",
          },
          {
            key: "subTitle",
            type: "header",
            value: "Breach Risk",
          },
          {
            key: "dataasset",
            type: "table",
            value: "Data Asset",
          },
          {
            key: "personalData",
            type: "table",
            value: "Personal Data",
          },
          {
            key: "tags",
            type: "table",
            value: "Tags",
          },
          {
            key: "totalRows",
            type: "table",
            value: "Rows/Size",
          },
          {
            key: "breachRisk",
            type: "table",
            value: "Breach Risk",
          },
          {
            key: "financialImpactInDollars",
            type: "table",
            value: "Financial Impact",
          },
          {
            key: "usersWithAccess",
            type: "table",
            value: "Users",
          },
          {
            key: "accessPrivilege",
            type: "table",
            value: "Access Privilege",
          },
          {
            key: "breachRecommendedAction",
            type: "table",
            value: "Recommendation",
          },
          {
            key: "columnLevelDetails",
            type: "table",
            value: "Details",
          },
        ],
      },
      success: true,
      error: {
        message: "",
      },
    });
  });

  // Api to update headers,subheaders and column names of reports
  app.put("/super-admin/customize/label-customization", (req, res) => {
    // Payload : {
    //   pageName: "Breach Risk",
    //     customLabel: [
    //       {
    //         key: "title",
    //         type: "header",
    //         defaultValue: "BREACH ASSESSMENT",
    //         customValue: "BREACH ASSESSMENT",
    //       },
    //       {
    //         key: "subTitle",
    //         type: "header",
    //         defaultValue: "Breach Risk",
    //         customValue: "Breach Risk",
    //       },
    //       {
    //         key: "dataasset",
    //         type: "table",
    //         defaultValue: "Data Asset",
    //         customValue: "Data Asset",
    //       },
    //       {
    //         key: "personalData",
    //         type: "table",
    //         defaultValue: "Personal Data",
    //         customValue: "Personal Data",
    //       },
    //       {
    //         key: "tags",
    //         type: "table",
    //         defaultValue: "Tags",
    //         customValue: "Tags",
    //       },
    //       {
    //         key: "totalRows",
    //         type: "table",
    //         defaultValue: "Rows/Size",
    //         defaultValue: "Rows/Size",
    //       },
    //       {
    //         key: "breachRisk",
    //         type: "table",
    //         defaultValue: "Breach Risk",
    //         customValue: "Breach Risk",
    //       },
    //       {
    //         key: "financialImpactInDollars",
    //         type: "table",
    //         defaultValue: "Financial Impact",
    //         customValue: "Financial Impact",
    //       },
    //       {
    //         key: "usersWithAccess",
    //         type: "table",
    //         defaultValue: "Users",
    //         customValue: "Users",
    //       },
    //       {
    //         key: "accessPrivilege",
    //         type: "table",
    //         defaultValue: "Access Privilege",
    //         customValue: "Access Privilege",
    //       },
    //       {
    //         key: "breachRecommendedAction",
    //         type: "table",
    //         defaultValue: "Recommendation",
    //         customValue: "Recommendation",
    //       },
    //       {
    //         key: "columnLevelDetails",
    //         type: "table",
    //         defaultValue: "Details",
    //         customValue: "Details",
    //       },
    //     ],
    // }

    res.send({
      data: {
        pageName: "Breach Risk",
        customLabel: [
          {
            key: "title",
            type: "header",
            defaultValue: "BREACH ASSESSMENT",
            customValue: "BREACH ASSESSMENT",
          },
          {
            key: "subTitle",
            type: "header",
            defaultValue: "Breach Risk",
            customValue: "Breach Risk",
          },
          {
            key: "dataasset",
            type: "table",
            defaultValue: "Data Asset",
            customValue: "Data Asset",
          },
          {
            key: "personalData",
            type: "table",
            defaultValue: "Personal Data",
            customValue: "Personal Data",
          },
          {
            key: "tags",
            type: "table",
            defaultValue: "Tags",
            customValue: "Tags",
          },
          {
            key: "totalRows",
            type: "table",
            defaultValue: "Rows/Size",
            customValue: "Rows/Size",
          },
          {
            key: "breachRisk",
            type: "table",
            defaultValue: "Breach Risk",
            customValue: "Breach Risk",
          },
          {
            key: "financialImpactInDollars",
            type: "table",
            defaultValue: "Financial Impact",
            customValue: "Financial Impact",
          },
          {
            key: "usersWithAccess",
            type: "table",
            defaultValue: "Users",
            customValue: "Users",
          },
          {
            key: "accessPrivilege",
            type: "table",
            defaultValue: "Access Privilege",
            customValue: "Access Privilege",
          },
          {
            key: "breachRecommendedAction",
            type: "table",
            defaultValue: "Recommendation",
            customValue: "Recommendation",
          },
          {
            key: "columnLevelDetails",
            type: "table",
            defaultValue: "Details",
            customValue: "Details",
          },
        ],
      },
      success: true,
      error: {
        message: "",
      },
    });
  });

};
