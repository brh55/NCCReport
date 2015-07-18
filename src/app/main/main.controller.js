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
        tableTitle: [],
        charts: []
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
        },
        chartShow: function (type) {
            if (checkState(vm.model.charts, type)) {
                return false;
            } else {
                return true;
            }
        },
        addState: function (type) {
            if (checkState(vm.model.charts, type)) {
                var indexToRemove = vm.model.charts.indexOf(type);
                vm.model.charts.splice(indexToRemove, 1);
            } else {
                vm.model.charts.push(type);
            }
        }
    };

    // Firebase Data Model
    var ref = new Firebase("https://ncl-app.firebaseio.com");

    // Set returned data to tables
    vm.model.tables = $firebaseObject(ref);

    // Charts
    var data = {
      labels : ["Number Commenced","Number Terminated","Number Pending"],
      datasets : [
        {
          fillColor : "rgba(220,220,220,0.5)",
          strokeColor : "rgba(220,220,220,1)",
          pointColor : "rgba(220,220,220,1)",
          pointStrokeColor : "#fff",
          data : [12061, 13868, 2904]
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
