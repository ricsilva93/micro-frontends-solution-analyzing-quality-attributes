## Load tests

Load tests to be used in k6. Tests are based on the .har file generated using k6-browser extension. Then, converted to a .js script file to be used in k6, with some slight modifications.<br>

to run the tests, install k6 cli, and then run:<br>
`k6 run p-history-1user.js`<br>
`k6 run p-history-50user.js`<br>
`k6 run p-history-500user.js`<br>
`k6 run p-history-1000user.js`<br>