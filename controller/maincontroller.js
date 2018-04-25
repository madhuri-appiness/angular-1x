var app = angular.module("app", ['angularUtils.directives.dirPagination']);
app.controller('github', function($scope, $http) {
    $scope.arr = [];
    $scope.filmTitles = []
    $http.get("http://swapi.co/api/people")
        .then(function(response) {
            $scope.responseList = response.data.results;
            console.log($scope.responseList);
            angular.forEach($scope.responseList, function(item) {
                $scope.name = item.name;
                $scope.arr.push(item);
                angular.forEach(item.films, function(film) {
                    $http.get(film).then(function(response) {
                        $scope.filmName = response.data.title;
                        $scope.filmTitles.push($scope.filmName)

                    })

                })
            });
            console.log("film", $scope.filmTitles);



        })


})