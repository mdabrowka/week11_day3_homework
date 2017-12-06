var arrayTasks = {

	 concat: function (arr1, arr2) {
		 var newArray = [];
		 for (let item of arr1) {
			 newArray.push(item);
		 }
		 for (let item of arr2) {
			 newArray.push(item);
		 }
		 return newArray;
	},

	 //insertAt: function (arr, itemToAdd, index) {

	 //},

	 square: function (arr) {
		 var newArray = [];
		 for (let item of arr) {
			 newArray.push(item*item);
		 }
		 return newArray;
	 },

	// sum: function (arr) {

	// },

	// findDuplicates: function (arr) {

	// },

	// removeAndClone: function (arr, valueToRemove) {

	// },

	// findIndexesOf: function (arr, itemToFind) {

	// },

	// sumOfAllEvenNumbersSquared: function (arr) {

	// }

}

module.exports = arrayTasks
