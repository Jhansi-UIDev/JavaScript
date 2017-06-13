function max()
{
	var arr=[12,23,34,89,47,99,34];
	var i;
	var maxValue= arr[0];
	for(i=0; i<arr.length; i++)
	{
		if(arr[i]>maxValue)
		{
			maxValue=arr[i];
		}
	}		
document.getElementById("demo").innerHTML=maxValue;
}