function fibo()
{
 var n=Number(prompt("dame un numero "))
  Vfibo= new Array(10);
  Vfibo[0]=0;
  Vfibo[1]=1;
  for(c=2; c<n; c++)
  {
    Vfibo[c]=Vfibo[c-1]+Vfibo[c-2];
  }
  for(c=0; c<n; c++)
  {
    console.log(Vfibo[c]);
    document.write(Vfibo[c]);
  }
}

