# protractorDemo

https://www.protractortest.org/#/
- install node, validate installation by : node -v
- set npm proxy if required   : (1) npm config set https-proxy http://web-proxy.il.softwaregrp.net:8080  , (2) npm config set http-proxy http://web-proxy.il.softwaregrp.net:8080                                            
- install Protractor globally               : npm install -g protractor
- verify installation                       : protractor --version

```
 Note: You might face issue while checking version as:‘protractor’ is not recognized as an internal or external command...
 Its is basically a PATH issue on Windows machines.Make sure if you have below configured in your system variables.
 PATH:    C:\Program Files\nodejs;C:\Users\<<user>>\AppData\Roaming\npm; C:\Users\<<user>>\AppData\Roaming\npm\node_modules; 
 NODE_PATH:      C:\Users\<<user>>\AppData\Roaming\npm\node_modules
```
  
- get Selenium Server                       : webdriver-manager update --proxy=http://web-proxy.il.softwaregrp.net:8080 --ignore_ssl

- install jasmine-reporters                 : npm install --g jasmine-reporters
- install protractor-jasmine2-html-reporter : npm install -g protractor-jasmine2-html-reporter 
- start server (optional, selenium will start it): webdriver-manager start
- run tests                                 : protractor conf.js --grep="spec2 dudu dudu|spec2 bubu bubu" 
