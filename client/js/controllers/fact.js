angular.module('FactCtrl', [])
    .controller('FactController', function ($scope, FactService) {

        $scope.getMathFact = () => {

            FactService.get({
                type: 'math',
                number: $scope.number,
            }, (response) => {

                $scope.fact = response
            })
        }

        $scope.getTriviaFact = () => {

            FactService.get({
                type: 'trivia',
                number: $scope.number,
            }, (response) => {

                $scope.fact = response
            })
        }

        $scope.getDateFact = () => {

            FactService.get({
                type: 'date',
                number: $scope.number,
            }, (response) => {

                $scope.fact = response
            })
        }

        $scope.getRandomFact = () => {

            const randomType = Math.floor(Math.random() * 3)
            let randomValue = ''

            if (randomType === 0) {

                randomValue = Math.floor(Math.random() * 100) + 1

                FactService.get({
                    type: 'math',
                    number: randomValue,
                }, (response) => {

                    $scope.fact = response
                })
            }
            else if (randomType === 1) {

                randomValue = Math.floor(Math.random() * 100) + 1

                FactService.get({
                    type: 'trivia',
                    number: randomValue,
                }, (response) => {

                    $scope.fact = response
                })
            }
            else if (randomType === 2) {

                const month = Math.floor(Math.random() * 12) + 1
                const day = Math.floor(Math.random() * 29) + 1
                randomValue = month + "/" + day

                FactService.get({
                    type: 'date',
                    number: randomValue,
                }, (response) => {

                    $scope.fact = response
                })
            }
        }
    })
