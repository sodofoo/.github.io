	function getRandomInt(max) {//random number in a range
		return Math.floor(Math.random() * max);
	}
	function randomStudent(conInStudents){//returns and removes a random student from students
		var rNum = getRandomInt(conInStudents.length);
		var student = conInStudents.splice(rNum,1);
		return student;
	}
	function createArray(rows) {//creates an array of arrays (2d array) to be filled
		var arr = [];
		for (var i=0;i<rows;i++) {
			arr[i] = [];
		}
		return arr;
	}
	function fillArray(){//fills arrays with random students
		var groups = document.getElementById("numberOfGroups").value;//collects info from page
		var contentInput = document.getElementById("studentNames").value.split('\n'); //in form of an array
		var sList=createArray(groups);
		var j = 0;
		var k = 0;
		do {//loops through array of arrays filling them with a random student
			for (i=0;i<groups;i++){
				if (contentInput.length != 0){//checks there are still students to add
				sList[i][j] = " " + randomStudent(contentInput);	
				k++;
					if (k>=groups){
						j++;
						k=0;
					}
				}	
			}
		}while (contentInput.length !=0); //checks there are still students to add
		return sList;
	}
	function groupMaker() {
		var parent = document.getElementById("list");		//checks for and removes any previous groups
		var child = document.getElementById("slist");
		if (child != null){
			parent.removeChild(child)};
		//makes a new list element and calls listmaker to fill the list
		parent.appendChild(listMaker(fillArray()));
	}
	function listMaker(array){
		var students = array;
		//creates new list element
		var studentList = document.createElement("ol");
		studentList.setAttribute('id','slist');
		//itereates over array and creates list items
		for (i=0;i<students.length;i++){
			var item = document.createElement('li');
			var t = document.createTextNode(students[i]);
			item.appendChild(t);
			studentList.appendChild(item);
		} return studentList;	
	}
