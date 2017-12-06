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

	 insertAt: function (arr, itemToAdd, index) {
	 	arr.splice(index, 0, itemToAdd);
		return arr;
	 },

	 square: function (arr) {
		 var newArray = [];
		 for (let item of arr) {
			 newArray.push(item*item);
		 }
		 return newArray;
	 },

	 sum: function (arr) {
		 let total = 0;
		 for (let item of arr) {
			 total += item;
		 }
		 return total;
	 },

	  // findDuplicates: function (arr) {
		//   var newArray = [];
		//   for (let item of arr) {
		//  	 if (item)
		//   }
		//   return newArray;
	  // },

	 removeAndClone: function (arr, valueToRemove) {
		 var newArray = [];
		 for (let item of arr) {
			 if (item != valueToRemove) {
				 newArray.push(item);
			 }
		 }
		 return newArray;
	 },

	 findIndexesOf: function (arr, itemToFind) {
		 var newArray = [];
		 var index = 0;
		 for (let item of arr) {
			 if (item === itemToFind) {
				 newArray.push(index);
			 }
			 index++;
		 }
		 return newArray;
	 },

	 sumOfAllEvenNumbersSquared: function (arr) {
		 let total = 0;
		 for (let item of arr) {
			 if (item % 2 === 0) {
				 total += item * item;
			 }
		 }
		 return total;
	 }

}

module.exports = arrayTasks
