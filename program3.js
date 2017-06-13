function swap()
{
 	var a=20; 
 	var b=26;
 	var temp;
    
    temp=a;
 	a=b;
 	b=temp;
 //console.log("A = "+ a + " B = "+ b);
 document.getElementById("demo").innerHTML = ("A = "+ a + " B = "+ b);
   
}
