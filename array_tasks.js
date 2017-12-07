var arrayTasks = {

	 concat: function (arr1, arr2) {
		 //return arr1.concat(arr2);
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
     // return arr.map(function(number) {
		 //return number * number
	 //})
		 var newArray = [];
		 for (let item of arr) {
			 newArray.push(item*item);
		 }
		 return newArray;
	 },

	 sum: function (arr) {
     // return arr.reduce(function(total, number) {
		// return number + total
	 //})
		 let total = 0;
		 for (let item of arr) {
			 total += item;
		 }
		 return total;
	 },

 	  findDuplicates: function (arr) {
		// 	//return arr.filter(function (item, i) {
		// 	var restOfArrayIncludesItem = arr.slice(i +1).includes(item)
		// 	var isFirstInstanceOfItem = arr.indexOf(item) === i
		// 	return restOfArrayIncludesItem && isFirstInstanceOfItem
    //
		// })
    //

			let newArray = [];
			arr.forEach(function(number, index) {
				if(arr.indexOf(number, index + 1) > -1) {
					if(newArray.indexOf(number) === -1) {
						newArray.push(number);
					}
				}
			});
			return newArray;
		},


	 removeAndClone: function (arr, valueToRemove) {
// return arr.filter(function (item) {
// return item !== valueToRemove
// })

		 var newArray = [];
		 for (let item of arr) {
			 if (item != valueToRemove) {
				 newArray.push(item);
			 }
		 }
		 return newArray;
	 },

	 findIndexesOf: function (arr, itemToFind) {
     // var results = []
		 // arr.forEach(function)item, index) {
		//  if (item === itemToFind) {
		// 	 results.push(index)
		//  }
	 // }
 
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
