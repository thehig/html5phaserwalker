class TestingTypescript {

	constructor(public name:string){
		this.name = name;
	}
}

var myTest = new TestingTypescript('David');
console.log(myTest.name);