(function() {

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDxU7xlmW1yd2BNkTJGYeVPBtjPw98twdA",
    authDomain: "msinightrace.firebaseapp.com",
    databaseURL: "https://msinightrace.firebaseio.com",
    projectId: "msinightrace",
    storageBucket: "msinightrace.appspot.com",
    messagingSenderId: "680062030998"
  };
  firebase.initializeApp(config);
	
	angular
		.module('msinightrace' ['firebase'])
		.controller('MyCtrl', function($firebaseObject) {
			const rootRef = firebase.database().ref().child('angular');
			const ref = rootRef.child('object');
			this.object = $firebaseObject(ref);
		});
}());