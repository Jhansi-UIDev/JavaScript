function isPrime(){
	var i= parseInt(document.getElementById("t1").value);
	document.getElementById("demo").innerHTML=isPrimeNumber(i);
}
 
function isPrimeNumber(i){
	var j;
	var count=0;
	var n;
	  for(j=0;j<=i;j++)
	  {
		    if((i%j)==0)
		    {
		    	count++;
		  	}
	  }  
	  {
	  
	  if(count>2)
	  {
	    	return false;
	  }
	  
	  else
	    	return true;
	  }
      
}