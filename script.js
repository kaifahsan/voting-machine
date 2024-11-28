let table =document.getElementById("table");
let vote =document.getElementById("vote")
let index1 =0;
function programStart(){
    let arr=[];
    let input =document.getElementById("input").value;
    arr.push(input);
    if(input.length <= 0){
      alert("please enter your text");
      return;
    }
    index1++;
  arr.forEach((value , index) => {
    table.innerHTML +=` 
    <td>${index1}</td>
       <td>${value}</td>
       <td onclick="increment(this)" value="0" >0</td> `;
    });
    document.getElementById("input").value='';
}
function increment(td) {
  let currentValue = parseInt(td.getAttribute("value"));
  currentValue++; 
  td.setAttribute("value", currentValue);
  td.innerHTML = currentValue; 
}





// increment();










    
