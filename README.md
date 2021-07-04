# A Micro Frontends Solution: Analyzing Quality Attributes - source code 

Source code used on master thesis. A micro frontends solution, analyzed based on Performance Efficiency, Testability, Maintainability and Scalability.
This solution is based on React, webpack v5+module federation, communication between MFEs using Custom Events, etc.

### Available components
- <b>store-app-shell-mfe-mf:</b> App shell micro frontend <br>
- <b>store-cart-mfe-mf:</b> Cart micro frontend<br>
- <b>store-cart-service:</b> Cart microservice <br>
- <b>store-catalog-mfe-mf:</b> Catalog micro frontend<br>
- <b>store-catalog-service:</b> Catalog microservice<br>
- <b>store-navbar-mfe-mf:</b> Navbar micro frontend<br>
- <b>store-purchase-mfe-mf:</b> Purchases micro frontend<br>
- <b>store-purchases-service:</b> Purchases micro service<br>

### How to run?
using node, in each folder:<br>
`npm i && npm run start` -> run devmode <br>
`npm i && npm run start:prod` -> run production mode<br>

using docker, in each folder:<br>

`docker build -f Dockerfile .`<br>

`docker run -p <port>:<port> <image>`<br>

using docker-compose to run everything at once:<br>
`docker-compose up --build`<br>

### Run tests
To run unit tests: `npm run test` in each solution.

Integration and e2e tests examples using <b>cypress</b> - available in <br>/integration-tests folder

### kubernetes

Available in /kubernetes folder

### Load tests

Available in /load-tests folder

### Performance Tests

Reports available in /performance-tests folder, as HTML extension.

## Cyclomatic Complexity and Maintainability Range

Obtained using Sonarqube.

To run sonarqube and add every project available:

first, run sonarqube. This can be done locally or using the docker-image. 

to run docker image (example):
`docker run -d --name sonarqube -p 9000:9000 sonarqube:8.9.1-community`

this will run SQ community v8.9.1 on `http://localhost:9000`

configuration should be easy to do. Anyway, a tutorial to aid in the configuration can be found online easily.

after running and configuring sonarqube, install sonar-scanner-cli and then run:
(example using .bat)<br>
`sonar-scanner.bat -D"sonar.projectKey=appshell" -D"sonar.sources=./src" -D"sonar.host.url=<sq-host-url>" -D"sonar.login=<token>" -D"sonar.exclusions=**/*.test.tsx"`<br>

`sonar-scanner.bat -D"sonar.projectKey=catalog" -D"sonar.sources=./src" -D"sonar.host.url=<sq-host-url>" -D"sonar.login=<token>" -D"sonar.exclusions=**/*.test.tsx"`<br>

`sonar-scanner.bat -D"sonar.projectKey=cart" -D"sonar.sources=./src" -D"sonar.host.url=<sq-host-url>" -D"sonar.login=<token>" -D"sonar.exclusions=**/*.test.tsx"`<br>

`sonar-scanner.bat -D"sonar.projectKey=navbar" -D"sonar.sources=./src" -D"sonar.host.url=<sq-host-url>" -D"sonar.login=<token>" -D"sonar.exclusions=**/*.test.tsx"`<br>

`sonar-scanner.bat -D"sonar.projectKey=purchases" -D"sonar.sources=./src" -D"sonar.host.url=<sq-host-url>" -D"sonar.login=<token>" -D"sonar.exclusions=**/*.test.tsx"`<br>


## note

As a whole, this source code only represents single a micro frontends solution, used for <b>academic purposes exclusively</b>. Code was developed and modified accordingly, and it is not representative of any other solution, approach, or implementation. Analysis' results are obtained solely based on this entire solution's code, consequently based on the author's experience in web development, in a limited period of time. It's important to note that analysis' results might be different depending on the solution, approach, or code implementation. This solution, as is, can be seen exclusively as an example of a single micro frontends solution, but never a complete representation of anything else.<br>