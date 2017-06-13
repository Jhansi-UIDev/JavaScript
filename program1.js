function greatest(){
	var a = parseInt(document.getElementById('t1').value);
	var b = parseInt(document.getElementById('t2').value);
	var c = parseInt(document.getElementById('t3').value);
	var d = parseInt(document.getElementById('t4').value);
	document.getElementById("demo").innerHTML=greatest4Num(a,b,c,d);
}

function greatest4Num(a,b,c,d){
	if(a>b && a>c && a>d) { return a;}
	else if (b>a && b>c && b>d) { return b;}
	else if (c>a && c>b && c>d) { return c;}
	else{return d;}
}
