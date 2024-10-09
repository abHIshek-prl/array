getSalary =[ { name: "John", salary: 23000 }, { name: "Steve", salary: 40000 }, { name: "Martin", salary: 15000 } ]
var a=getSalary.length
let b=0
let c=0
for(i=0 ; i<a ; i++){
    b=getSalary[i]
    console.log(b.salary)
    c=c+b.salary
    var x=[]
    var y=0
    x[y]=c
}
console.log(x)

