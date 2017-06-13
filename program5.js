function sort()
{
	var arr=[12,23,34,89,47,99,34];
	var sorted=[];
	var i,j;
	var maxValue= arr[0];

	for(j=0; j<arr.length; j++)
	{
		var maxValue= arr[0];
			for(i=0; i<arr.length; i++)
			{
				if(arr[i]>maxValue)
				{
					maxValue=arr[i];
				}
			}	
		sorted.push(maxValue);
		arr.splice(arr.indexOf(maxValue),1);
		j--;
	}		
document.getElementById("demo").innerHTML=sorted;
}