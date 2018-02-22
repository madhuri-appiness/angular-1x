var app = angular.module("app", []);
app.controller('github', function($scope, $http) {

    $http.get("https://api.github.com/repos/angular/angular/branches")
        .then(function(response) {
            $scope.repoList = response.data;
            // console.log($scope.repoList);
        })
    $scope.branchActive = 'master';
    $http.get("https://api.github.com/repos/angular/angular/commits?sha=master")
        .then(function(response) {
            $scope.commitBranch = response.data;

        })
    $scope.commitList = function(commit) {
        $scope.branchActive = commit;
        $http.get("https://api.github.com/repos/angular/angular/commits?sha=" + commit)
            .then(function(response) {
                $scope.commitBranch = response.data;
                console.log($scope.commitBranch);
            })
    }

});