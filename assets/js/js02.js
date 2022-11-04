//val = alert("welcome to part 2 !~!")


/*val = confirm("do you want to exit ?")

if(val){console.log("Sorry to see you go !!")}
else{console.log("Glad you are still here !!")}
*/
//val_2= prompt("Enter your age","type here ")
//console.log(val_2)
/*
if (parseInt(val_2)<=18){
console.log("you must be above 18 to view page!")
}

else{
	console.log("you can continue to view page!")
	}
	*/
//console.log(val)


//a=10+12 ;b=45/5

//val1=345
//Val1/6


//document.open();
//document.write("<h1>Learnin JS ,at HiiT plc</h1>");
//document.close();

/*
const x=window.open("","SomePopUp",specs="width=350,height=500")
vv="External data"
l1="<div style='color:blue;'>Welcome</div>"
l2="<h2>"+vv+"</h2><button>Click here</button></h2>"
x.document.write(l1+l2);
*/

let data="some data"
value1=250
value2=345
info=[1,2,3,4,5,6,"One"]
//console.log(data)
{
//let data="Another data in another block"
//console.log(data)
}
//console.log(value1%4)
//console.log(value2/14,value2%14)

/*
console.log(value1)
value1++
console.log(value1)
value1++
console.log(value1)
value1++
console.log(value1)

val3=10
vx=20
while(10<vx){
	console.log(vx)
	  vx--
}
*/
function doLogic(a,b){
	if(a>b){console.log(a, " is greater than",b)}
	if(a<b){console.log(a, " is lesser than",b)}
	if(a==b){console.log(a, " is equal to",b)}
	if(a>=b){console.log(a, " greater or equal to ",b)}
}
/*
doLogic(19,34)
doLogic(69,34)
doLogic(34,34)
*/
a="undergraduate"
b=19

function doLogic2(a,b){
	if(a=="graduate" && b>=18)
	{console.log("you are elligible")}

if(a!="graduate" && b>=18)
	{console.log("wait till you graduate")}

if(a=="graduate" && b<18)
	{console.log("Only 18 and above are elligible")}
	

}
b2=12
//doLogic2(a,b)
//b+=1
//b=b+1
//console.log(b)
//b<b2 ?console.log("b is less"):console.log("b is NOT less")  

/*
let x=200
let y=x+200
const z2=234
z2=z2+34
*/
s1="the quick brown fox"
s2="jumped over the lazy white dogs"

/*
console.log(s1)
console.log(s1[0])
console.log(s1[1])
console.log(s1[2])
console.log(s1[3])



console.log(s1.charAt(4))
console.log(s1.charAt(8))
*/
function s(x){
console.log(x)	
}
s1.concat(s2)
s3 = s1+s2
/*
f = s3.search("fox")
s(f)
g=s3.indexOf("cows")
s(g)
*/
/*
let dp=/FOX/i
let dp2=RegExp("FOX")

k = dp.test(s3)
console.log(k)
*/
/*
var v = new Object()
v.name="Milk"
v.price=550
v.qty=5
let cart= new Object()

cart[v.name]=v
//console.log(v.price*v.qty)

var v = new Object()
v.name="Milo"
v.price=1350
v.qty=3

cart[v.name]=v
console.log(cart)
console.log(cart['Milk'])
*/


arr =[12,13,15,12,13,26,67,89]

function checkAge(age) {
  return age > 18;
}

console.log(arr.find(checkAge))

function add(){
	x=10
	y=15
	z=x+y
	return z
}

let fxn = (x,y)=> x+y
fxn(34,67)




