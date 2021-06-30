var a=[10, 20, 30, 40, 50, 60, 10, 60]
for(var i=0; i<a.length; i++)
{
    for(var j=i+1; j<a.length; j++)
    {
        if(a[i] == a[j])
        console.log(a[i])
    }
}