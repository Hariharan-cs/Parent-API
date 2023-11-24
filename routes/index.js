module.exports = (app) => {
  require("./actions-catalog")(app);
  require("./actions-metadata")(app);
  require("./actions-trackpurpose")(app);
  require("./breach-assessment")(app);
  require("./customize-datasource")(app);
  require("./customize-purpose")(app);
  require("./customize-tags")(app);
  require("./dashboard")(app);
  require("./privacy-assessment-data")(app);
  require("./privacy-assessment-datause")(app);
  require("./settings-authentication")(app);
  require("./settings-others")(app);
  require("./auth")(app);
  require("./pii-identification")(app);
  require("./compliance-reports")(app);
  require("./admin-panel")(app)
  require("./reports")(app)
  // require("./user-signup-flow")(app);
  require("./customize-labels")(app);
  require("./tokenization")(app)
  require("./tokenization-demo")(app);
  require("./trial")(app);
};
