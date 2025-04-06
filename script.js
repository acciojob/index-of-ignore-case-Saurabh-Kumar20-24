function indexOfIgnoreCase(s1, s2) {
  // write your code here
	let str1=s1.toLowerCase();
	let str2=s2.toLowerCase();
	for(let i=0; i<=str1.length-str2.length; i++){
		if(str1.slice(i,str1.length)===str2){
			return i;
		}
	}
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
