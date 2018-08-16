	// Code Challenge 1:

	function reverseArray(arr) {
			let end = arr.length - 1;
			let start = 0;
			let temp;

			while(start < end) {
				temp = arr[start];
				arr[start] = arr[end];
				arr[end] = temp;
				start++;
				end--;
			}
			console.log(arr);
		}

	// Code Challenge 2:

		function greetAliens(aliens) {
			for(i = 0; i < aliens.length; i++) {
				console.log('Oh powerful ' + aliens[i] + ', we offer our unconditional surrender!');
			}
		}

	// Code Challenge 3:

		function convertToBaby(animals) {
			for(i = 0; i < animals.length; i++) {
				animals[i] = 'baby ' + animals[i];
			}
			return animals;
		}

	// Code Challenge 4:

		const numbers = [5, 3, 9, 30];

	 	const smallestPowerOfTwo = arr => {
	    	let results = [];
	       // The 'outer' for loop - loops through each element in the array
	       for (let i = 0; i < arr.length; i++) {
	             number = arr[i];

	             // The 'inner' while loop - searches for smallest power of 2 greater than the given number
	            n = 1;
	            while (n < number) {
	                   n = n * 2;
	            }
	            results.push(n);
	      	}
	      	return results
	 	}

	 	console.log(smallestPowerOfTwo(numbers)) 

	 // Code Challenge 5:

	 	// Part I
		const declineEverything = (arr) => {
			arr.forEach(politelyDecline);
		}	

		const politelyDecline = (veg) => {
			console.log('No ' + veg + ' please.  I will have pizza with extra cheese.');
		}

		// Part II
		const acceptEverything = (arr) => {
			for (i = 0; i < arr.length; i++) {
				console.log('Ok, I guess I will eat some ' + arr[i] + '.');
			}
		}

	// Code Challenge 6:

		const toSquare = num => num * num;

		const squareNums = arr => arr.map(toSquare);

	// Code Challenge 7:

	
		const capitalizeGreeting = greeting => greeting.toUpperCase() + '!'

		const shoutGreetings = arr => arr.map(capitalizeGreeting)

