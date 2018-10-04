var app = angular.module('myApp', []);
app.controller('currencyCtrl', function($scope, $http) {   
     $scope.names = [
         '1: Kuwaiti Dinar ',
         '2: Bahraini Dinar',
         '3: Omani Rial',
         '4: Jordanian Dinar',
         '5: Great Britain Pound',
         '6: Gibraltar Pound',
         '7: Caymanian Dollar',
         '8: European Euro',
         '9: Swiss Franc',
         '10: US Dollar',
         '11: Canadian Dollar',
         '12: Australian Dollar',
         '13: Bruneian Dollar',
         '14: Singapore Dollar',
         '15: Libyan Dinar',
         '16: New Zealand Dollar',
         '17: Bulgarian Lev',
         '18: Bosnian Convertible Marka',
         '19: Arubian Florin',
        '20: Fijian Dollar'
];
    
    
$scope.convertCurrency = function (){
    
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;
    
	  $scope.urlsearch = "http://data.fixer.io/api/latest?access_key=70d6bcb0aaebc4dcc7d48fbf825b4a78&symbols=" + from +"," + to;	
	  $http.get($scope.urlsearch).then(function (response) {
        
          
	  var oneUnit = response.data.rates[to] / response.data.rates[from];
        var value = (oneUnit * $scope.fromCurrency);
        $scope.toCurrency = value.toFixed(2);
      });      
}
});
