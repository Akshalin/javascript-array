//Array creation and initialization
let fruits=["apple","orange","mango","pineapple","papaya"];
document.write('fruits=',fruits,"<br>");

//Adding elements in array
//push method
let arr=["pencil","pen","easer"];
arr.push("box");
console.log(arr);
//unshift method
arr.unshift("sharpner");
document.write(arr,"<br>");

//Removing elements in an array
//pop method
let array=[5,7,9,23,89,90,23,12];
array.pop();
console.log(array);
//shift method
array.shift();
console.log(array);

//Array searching
//indexOf()
let file=["10th marksheet","12th marksheet","community certificate","Income certificate"];
console.log(file.indexOf("community certificate"));
//find()
console.log(find(file["comunity certificate"]));

//Sorting and Reversing an array
//sort method
let number=[50,42,55,47];
let newnumber=number.sort();
console.log(newnumber);
//reverse method
newnumber.reverse();
document.write(newnumber,"<br>");

//Array joining
//join method
let vegetables=["carrot","tomato","ladys finger"];
document.write(vegetables.join("cabbage"));

//Inserting items at a specific index
let list=["apple","orange","pineapple"];
list[1]="melon";
console.log(list);

//Array manipulation with slice
let arrays=[1,2,3,4,5];
console.log(arrays.slice(0,3));

//Merging the arrays
let arr1=[9,3,4,5];
let arr2=[8,19,6,10];
console.log(arr1.concat(arr2));
