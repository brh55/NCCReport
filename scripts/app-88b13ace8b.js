!function(){"use strict";angular.module("nclreport",["ngAnimate","ngCookies","ngTouch","ngSanitize","restangular","ngRoute","firebase","chartjs-directive"])}(),function(){"use strict";function t(){function t(){return e}var e=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{title:"Sass (Ruby)",url:"http://sass-lang.com/",description:"Original Syntactically Awesome StyleSheets implemented in Ruby",logo:"ruby-sass.png"}];this.getTec=t}angular.module("nclreport").service("webDevTec",t)}(),function(){"use strict";function t(){function t(t){var e=this;e.relativeDate=t(e.creationDate).fromNow()}var e={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:t,controllerAs:"vm",bindToController:!0};return t.$inject=["moment"],e}angular.module("nclreport").directive("acmeNavbar",t)}(),function(){"use strict";function t(t,e){function a(a){function r(t){return t.data}function o(e){t.error("XHR Failed for getContributors.\n"+angular.toJson(e.data,!0))}return a||(a=30),e.get(n+"/contributors?per_page="+a).then(r)["catch"](o)}var n="https://api.github.com/repos/Swiip/generator-gulp-angular",r={apiHost:n,getContributors:a};return r}angular.module("nclreport").factory("githubContributor",t),t.$inject=["$log","$http"]}(),function(){"use strict";function t(t){function e(e,a,n,r){var o,i=t(a[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});a.addClass("acme-malarkey"),angular.forEach(e.extraValues,function(t){i.type(t).pause()["delete"]()}),o=e.$watch("vm.contributors",function(){angular.forEach(r.contributors,function(t){i.type(t.login).pause()["delete"]()})}),e.$on("$destroy",function(){o()})}function a(t,e){function a(){return n().then(function(){t.info("Activated Contributors View")})}function n(){return e.getContributors(10).then(function(t){return r.contributors=t,r.contributors})}var r=this;r.contributors=[],a()}var n={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:e,controller:a,controllerAs:"vm"};return a.$inject=["$log","githubContributor"],n}angular.module("nclreport").directive("acmeMalarkey",t),t.$inject=["malarkey"]}(),function(){"use strict";function t(t,a,n){var r=this;r.model={reportTitle:"Report 6",tables:[],states:[],chart:{data:{}},tableTitle:[],charts:[]},r.action={updateTitle:function(t){r.model.reportTitle=t},updateState:function(t){if(e(r.model.states,t)){var a=r.model.states.indexOf(t);r.model.states.splice(a,1)}else r.model.states.push(t)},checkState:function(t){r.model.states.indexOf(t);return e(r.model.states,t)?!1:!0},printFunction:function(){window.print()},updateData:function(){var t=r.models.tables.table.data.length;console.log(t)},chartShow:function(t){return e(r.model.charts,t)?!1:!0},addState:function(t){if(e(r.model.charts,t)){var a=r.model.charts.indexOf(t);r.model.charts.splice(a,1)}else r.model.charts.push(t)}};var o=new Firebase("https://ncl-app.firebaseio.com");r.model.tables=a(o);var i={labels:["Number Commenced","Number Terminated","Number Pending"],datasets:[{fillColor:"rgba(220,220,220,0.5)",strokeColor:"rgba(220,220,220,1)",pointColor:"rgba(220,220,220,1)",pointStrokeColor:"#fff",data:[12061,13868,2904]}]};r.model.chart.data=i}function e(t,e){var a=t.indexOf(e);return a>-1?!0:!1}angular.module("nclreport").controller("MainController",t),t.$inject=["$timeout","$firebaseObject","$scope"]}(),function(){"use strict";function t(t){t.debug("runBlock end")}angular.module("nclreport").run(t),t.$inject=["$log"]}(),function(){"use strict";function t(t){t.when("/",{templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}).otherwise({redirectTo:"/"})}angular.module("nclreport").config(t),t.$inject=["$routeProvider"]}(),function(){"use strict";angular.module("nclreport").constant("malarkey",malarkey).constant("toastr",toastr).constant("moment",moment)}(),function(){"use strict";function t(t,e){t.debugEnabled(!0),e.options.timeOut=3e3,e.options.positionClass="toast-top-right",e.options.preventDuplicates=!0,e.options.progressBar=!0}angular.module("nclreport").config(t),t.$inject=["$logProvider","toastr"]}(),angular.module("nclreport").run(["$templateCache",function(t){t.put("app/main/main.html",'<div class="container-fluid"><div class="row"><div class="col-sm-3 col-md-2 sidebar"><div class="navWrapper"><h1 class="logo">National Circuit Court Report Generator</h1><label>Report Title: <input type="text" name="input" ng-model="main.model.reportTitle" required="" ng-trim="false"></label><div class="printButton"><button class="btn btn-info" ng-click="main.action.printFunction()"><i class="fa fa-print"></i> Print</button></div><div class="filter-box"><h5 class="filter-text">Filters</h5><ul><li class="" ng-repeat="(key, value) in main.model.tables.table.data"><button class="btn btn-warning" ng-click="main.action.updateState(key)"><i class="fa fa-plus"></i> {{key}}</button></li></ul></div><div class="chart-generator"><h5 class="filter-text">Charts</h5><button ng-click="main.action.addState(pie)" class="btn btn-danger">Pie Chart</button> <button ng-click="main.action.addState(bar)" class="btn btn-danger">Bar Chart</button></div></div></div><main class="mainContent col-md-9 col-sm-10"><h2 class="sub-header">{{main.model.reportTitle}}</h2><div class="table-responsive"><table class="table table-striped" ng-repeat="tables in main.model.tables"><thead><tr><th>Nature of Proceeding</th><th>Number Commenced</th><th>Percent of Total Commenced</th><th>Number Terminated</th><th>Percent of Total Terminated</th><th>Number Pending</th><th>Percent of Total Pending</th></tr></thead><tbody ng-repeat="(key, values) in tables.data"><tr ng-if="main.action.checkState(key)"><td>{{key}}</td><td ng-repeat-start="value in values">{{value.number}}</td><td ng-repeat-end="value in values">{{value.percent_of_total}}</td></tr></tbody></table></div><h2 class="sub-header">Charts</h2><div ng-if="main.action.chartShow(pieChart)"><h4>Total Numbers Chart</h4><chart value="main.model.chart"></chart></div></main></div></div>'),t.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" href="https://github.com/Swiip/generator-gulp-angular"><span class="glyphicon glyphicon-home"></span> Gulp Angular</a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6"><ul class="nav navbar-nav"><li class="active"><a ng-href="#">Home</a></li><li><a ng-href="#">About</a></li><li><a ng-href="#">Contact</a></li></ul><ul class="nav navbar-nav navbar-right acme-navbar-text"><li>Application was created {{ vm.relativeDate }}.</li></ul></div></div></nav>')}]);