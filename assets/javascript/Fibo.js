function fibo()
{
  Vfibo= new Array(10);
  Vfibo[0]=0;
  Vfibo[1]=1;
  for(c=2; c<10; c++)
  {
    Vfibo[c]=Vfibo[c-1]+Vfibo[c-2];
  }
  for(c=0; c<10; c++)
  {
    console.log(Vfibo[c]);
  }
}

