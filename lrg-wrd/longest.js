var words = ['apple','banana','cherry','blueberry'];
var a= words[0].length
var b= words[1].length
var c= words[2].length
var d= words[3].length
if(a>b && a>c && a>d){
    console.log(words[0] + " is long")
}
else if (b>a && b>c && b>d) {
    console.log(words[1] + " is long")
} 
else if (c>a && c>b && c>d){
    console.log(words[2] + " is long")
}
else{
    console.log(words[3] + " is long")
}