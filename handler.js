const OrchyBase = require("orchy-base-code7");

("use strict");

module.exports.statusReport = async (event) => {
  const body = JSON.parse(event.Records[0].body);
  const message = JSON.parse(body.Message);

  const orchybase = new OrchyBase.default();
};
