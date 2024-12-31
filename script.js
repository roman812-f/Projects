function MySlice(arr, start=0, end=arr.length - 1)
{
  let slicedArr = new Array();

  if(start >= 0 && end >= 0)
  {
   for(let i = start; i < end; i++)
    {
        slicedArr.push(arr[i]);
    }
  }
  else
  {
    if(start < 0)
    {
      start = -start;
    }
    if(end < 0)
    {
      end = -end;
    }
    for(i = start; i > end; i--)
    {
      slicedArr.push(arr[i]);
    }
  }

  return slicedArr;
}
function MyIndexOf(arr, item, from=0)
{
  let index = -1;
  for(let i = from; i < arr.length; i++)
  {
    if(arr[i] === item)
    {
      index = i;
      break;
    }
  }
  return index;
}
function MyInclude(arr, item, from=0)
{
  let isFind = false;
  for(let i = from; i < arr.length; i++)
  {
    if(arr[i] === item)
    {
      isFind = true;
      break;
    }
  }
  return isFind;
}
let arr = [1, 2, 3, 4, 5];
console.log(MySlice(arr, -3, -1));
console.log(MyIndexOf(arr, 2, 1));
console.log(MyInclude(arr, 2, 1));