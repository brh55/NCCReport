(function() {
  'use strict';

  angular
    .module('nclreport')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, $firebaseObject, $scope) {
    var vm = this;

    vm.model = {
        reportTitle: 'Report 6',
        tables: [],
        states: [],
        chart: {
            data: {}
        },
        tableTitle: []
    };

    vm.action = {
        updateTitle: function (title) {
            vm.model.reportTitle = title;
        },
        updateState: function (filter) {
            if (checkState(vm.model.states, filter)) {
                var indexToRemove = vm.model.states.indexOf(filter);
                vm.model.states.splice(indexToRemove, 1);
            } else {
                vm.model.states.push(filter);
            }
        },
        checkState: function (value) {
            var check = vm.model.states.indexOf(value);

            if (checkState(vm.model.states, value)) {
                return false;
            } else {
                return true;
            }
        },
        printFunction: function () {
            window.print();
        },
        updateData: function () {
            var length = vm.models.tables.table.data.length;
            console.log(length);
        }
    };

    // Firebase Data Model
    var ref = new Firebase("https://ncl-app.firebaseio.com");

    // Set returned data to tables
    vm.model.tables = $firebaseObject(ref);

    // Charts
    var data = {
      labels : ["January","February","March","April","May","June","July"],
      datasets : [
        {
          fillColor : "rgba(220,220,220,0.5)",
          strokeColor : "rgba(220,220,220,1)",
          pointColor : "rgba(220,220,220,1)",
          pointStrokeColor : "#fff",
          data : [65,59,90,81,56,55,40]
        },
        {
          fillColor : "rgba(151,187,205,0.5)",
          strokeColor : "rgba(151,187,205,1)",
          pointColor : "rgba(151,187,205,1)",
          pointStrokeColor : "#fff",
          data : [28,48,40,19,96,27,100]
        }
      ]
    };

    vm.model.chart.data = data;
  }

  function checkState (array, value) {
    var check = array.indexOf(value)
    if (check > -1) {
        return true;
    } else {
        return false;
    }
  }
})();
