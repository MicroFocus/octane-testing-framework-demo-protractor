var JasmineReporters = require(process.env.USERPROFILE + '\\node_modules\\jasmine-reporters')

var Jasmine2HtmlReporter = require(process.env.USERPROFILE + '\\node_modules\\protractor-jasmine2-html-reporter');


exports.config = {
  //if you called "npm install -g webdriver-manager" and don't supply seleniumAddress  property, protractor will start local selenium by himself
  //https://stackoverflow.com/questions/45685308/do-we-really-need-to-run-webdriver-manager-start-before-running-protractor/45685328#45685328
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['todo-spec.js', 'another-todo-spec.js','another-todo-spec2.js'],
   
  onPrepare:function(){
			jasmine.getEnv().addReporter(new JasmineReporters.JUnitXmlReporter({
        savePath: './reports/junit',
	      consolidateAll: false
	    }));
      jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
        savePath:"./reports/html"
      }));
	}
};
