function firstNonRepeatedChar(str) {
 // Write your code here
	
	const charCount = {}

	//first pass : count each character
	for(let char of str){
		charCount[char] = (charCount[char] || 0) + 1;
	}

	//second pass: find character with count 1
	for(let char of str){
		if(charCount[char]=== 1){
			return char;
		}
			
	}
	return null;
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
