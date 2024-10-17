function calcPer() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;

 let per = num1 / num2 * 100 
 document.getElementById("result").innerHTML = per.toFixed(2)
}
