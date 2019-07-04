function init() {
  
  if (typeof web3 != 'undefined')
  {
  	web3 = new Web3(web3.currentProvider);
  	console.log("existing web3: provider " + typeof web3);
  	console.log(web3.currentProvider);
  }
  else{
  	web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/"));
  	console.log("new provider " + web3);
  }
  
  console.log(web3.isConnected());
  console.log(web3.eth.accounts[0]);
  
  var ProfContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"fname","type":"string"},{"name":"lname","type":"string"},{"name":"id","type":"uint256"}],"name":"setProfessor","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getProfessor","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"firstname","type":"string"},{"indexed":false,"name":"lastname","type":"string"},{"indexed":false,"name":"collegeid","type":"uint256"}],"name":"ProfessorEv","type":"event"}]);
  
  contractInstance = ProfContract.at('0x79813b97613730932989905869566f2b2d28b1fe');
  console.log (contractInstance);
  
  var fname = "John";
  var lname = "Doe";
  var id = 731;
}

function getProfessor() {
  contractInstance.getProfessor((error, result) => {
    if (!error) {
      console.log('result: ', result);
      document.getElementById("id").innerHTML = 'ID: ' + result[2];
      document.getElementById("fname").innerHTML = 'First name: ' + result[0];
      document.getElementById("lname").innerHTML = 'Last name: ' + result[1];
    } else {
      console.log("ERROR!");
    }
  });
}

function setProfessor() {

	contractInstance.setProfessor(fname, lname, id, { from: web3.eth.accounts[0]}, function() {
		contractInstance.getProfessor((error, result) => {
			if (!error)
				console.log("Data: " + result);
			else
				console.log("ERROR!");
		});


});
}
