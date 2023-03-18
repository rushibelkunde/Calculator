
var search = document.getElementById("input");

var btn = document.getElementsByClassName("btn")

var equation = ""

count = 0

btn[0].addEventListener("click",()=>{
    search.value = ""
    equation= ""
})

btn[1].addEventListener("click",()=>{

    if(count%2==0){
    search.value += ("(");
    
    }
    else{
        search.value += (")");
    }

    count+=1;
    
})

btn[2].addEventListener("click",()=>{
    search.value += ("%")
    equation += ("/100")
})

btn[3].addEventListener("click",()=>{
    search.value += ("/")
    equation += ("/")
})

btn[4].addEventListener("click",()=>{
    search.value += ("7")
    equation += ("7")
})

btn[5].addEventListener("click",()=>{
    search.value += ("8")
    equation += ("8")
})

btn[6].addEventListener("click",()=>{
    search.value += ("9")
    equation += ("9")
})

btn[7].addEventListener("click",()=>{
    search.value += ("*")
    equation += ("*")
})

btn[8].addEventListener("click",()=>{
    search.value += ("4")
    equation += ("4")
})

btn[9].addEventListener("click",()=>{
    search.value += ("5")
    equation += ("5")
})

btn[10].addEventListener("click",()=>{
    search.value += ("6")
    equation += ("6")
})

btn[11].addEventListener("click",()=>{
    search.value += ("-")
    equation += ("-")
})

btn[12].addEventListener("click",()=>{
    search.value += ("1")
    equation += ("1")
})

btn[13].addEventListener("click",()=>{
    search.value += ("2")
    equation += ("2")
})

btn[14].addEventListener("click",()=>{
    search.value += ("3")
    equation += ("3")
})

btn[15].addEventListener("click",()=>{
    search.value += ("+")
    equation += ("+")
})

btn[16].addEventListener("click",()=>{
    search.value += ("0")
    equation += ("0")
})

btn[17].addEventListener("click",()=>{
    search.value += (".")
    equation += (".")
})

btn[18].addEventListener("click",()=>{
    search.value = search.value.slice(0,search.value.length-1);
    equation = equation.slice(0,equation.length-1);
})

btn[19].addEventListener("click",()=>{
    search.value = eval(equation);
    equation = eval(equation);

})

// var str = "";
// str(str.length-1) = ""