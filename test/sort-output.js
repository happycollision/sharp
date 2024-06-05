const fs = require('fs');
const path = require('path');

const report = require('./output-all.json');
delete report.tests;
delete report.pending;
delete report.passes;
delete report.stats.duration;
delete report.stats.speed;
delete report.stats.start;
delete report.stats.end;
report.failures = report.failures
  .map((failure) => {
    delete failure.duration;
    delete failure.speed;
    return failure;
  })
  .sort((a, b) => a.fullTitle.localeCompare(b.fullTitle));

fs.writeFileSync(
  path.join(__dirname, 'output-all.json'),
  JSON.stringify(report, null, 2)
);
