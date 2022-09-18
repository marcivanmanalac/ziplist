listA = ['a','b', 'c'];
listB = [1, 2, 3];
function zipList(list1, list2){
  let newlist = [];
  for( let i = 0; i < list2.length || i < list1.length; i++){
    newlist.push(list1[i]);
    newlist.push(list2[i]);
  }
  return newlist;
}
console.log(zipList(listA, listB));

function zipListTheSimpleWay(list1,list2){
  return _.flatten(_.zip(list1, list2));
}
console.log(zipListTheSimpleWay(listA, listB));