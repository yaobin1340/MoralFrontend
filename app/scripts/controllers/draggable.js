/**
 *
 * draggableCtrl
 *
 */

angular
    .module('app')
    .controller('draggableCtrl', draggableCtrl)

function draggableCtrl($scope) {

    $scope.sortableOptions = {
        connectWith: ".connectPanels",
        handler: ".panel-body"
    };

}