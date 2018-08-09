// JavaScript Document



function myFunction(){	
	var prop = document.getElementById('myselect').value;
	if(prop != "Select Property"){
		document.getElementById('change1').innerHTML = "Enter the " + prop + " value of E1 (Copper)";
		document.getElementById('change2').innerHTML = "Enter the " + prop + " value of E2 (Ceramic)";
		
	}
}

function calculate(){
	var w = document.getElementById('wvalue').value;
	
	var e1 = document.getElementById('element1').value;
	var e2 = document.getElementById('element2').value;
	
	var prop = document.getElementById('myselect').value;
	var layer = document.getElementById('layer').value;
	document.getElementById('result').innerHTML = prop + " of " + layer + " is:"
	
	if(layer == "Layer 1"){
		var y = -0.5;
		var psi = Math.pow((y+0.5),w);
		
		var res = (psi * e1) + ((1 - psi) * e2);
		
		document.getElementById('out').value = res;
	}
	else if(layer == "Layer 2"){
		var y = -0.4;
		var psi = Math.pow((y+0.5),w);
		
		var res = (psi * e1) + ((1 - psi) * e2);
		
		document.getElementById('out').value = res;
	}
	else if(layer == "Layer 3"){
		var y = -0.3;
		var psi = Math.pow((y+0.5),w);
		
		var res = (psi * e1) + ((1 - psi) * e2);
		
		document.getElementById('out').value = res;
	}
	else if(layer == "Layer 4"){
		var y = -0.2;
		var psi = Math.pow((y+0.5),w);
		
		var res = (psi * e1) + ((1 - psi) * e2);
		
		document.getElementById('out').value = res;
	}
	else if(layer == "Layer 5"){
		var y = -0.1;
		var psi = Math.pow((y+0.5),w);
		
		var res = (psi * e1) + ((1 - psi) * e2);
		
		document.getElementById('out').value = res;
	}
	else if(layer == "Layer 6"){
		var y = 0;
		var psi = Math.pow((y+0.5),w);
		
		var res = (psi * e1) + ((1 - psi) * e2);
		
		document.getElementById('out').value = res;
	}
	else if(layer == "Layer 7"){
		var y = 0.1;
		var psi = Math.pow((y+0.5),w);
		
		var res = (psi * e1) + ((1 - psi) * e2);
		
		document.getElementById('out').value = res;
	}
	else if(layer == "Layer 8"){
		var y = 0.2;
		var psi = Math.pow((y+0.5),w);
		
		var res = (psi * e1) + ((1 - psi) * e2);
		
		document.getElementById('out').value = res;
	}
	else if(layer == "Layer 9"){
		var y = 0.3;
		var psi = Math.pow((y+0.5),w);
		
		var res = (psi * e1) + ((1 - psi) * e2);
		
		document.getElementById('out').value = res;
	}
	else if(layer == "Layer 10"){
		var y = 0.4;
		var psi = Math.pow((y+0.5),w);
		
		var res = (psi * e1) + ((1 - psi) * e2);
		
		document.getElementById('out').value = res;
	}
	else if(layer == "Layer 11"){
		var y = 0.5;
		var psi = Math.pow((y+0.5),w);
		
		var res = (psi * e1) + ((1 - psi) * e2);
		
		document.getElementById('out').value = res;
	}
	else{
		alert("Select a layer in order to proceed");
	}
}













