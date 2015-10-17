module Learning.AngularJs.Basics.Interfaces {
    // Note that we extending Angular's Scope, to allow use of all the $scope variables and functions :)
    export interface HomeCtrlScope extends ng.IScope {
        addName(): void;
        vm: Models.HomeModel;
    }
}