angular.module('mainApp')
.service('appService',function($http){
    var service = this;
    service.getpost = getpost;
  function getpost(){
      return $http.get('https://holidayapi.com/v1/holidays?key=51457bd8-0d50-4121-aab3-2a8ae19cf65a&country=US&year=2016');
      
                    }
        
});


