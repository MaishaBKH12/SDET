const newman = require('newman');
 
newman.run({
    //collection: require('./SDET.json'), 
    collection:'https://api.postman.com/collections/26774872-df2496f6-250e-4dc6-86f9-9e7763c25553?access_key=PMAT-01H0YV7JVN1TS1GB3WTDPGMJ7X',
    environment: require('./DMoney.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './report/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});