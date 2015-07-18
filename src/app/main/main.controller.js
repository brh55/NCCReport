(function() {
  'use strict';

  angular
    .module('nclreport')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, $firebaseObject) {
    var vm = this;

    vm.model = {
        reportTitle: 'Report 6',
        tables: [],
        states: []
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
        }
    };

    // Firebase Data Model
    var ref = new Firebase("https://ncl-app.firebaseio.com");

    // Set returned data to tables
    vm.model.tables = $firebaseObject(ref);

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
