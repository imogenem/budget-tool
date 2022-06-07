function handleClick(event){
  event.preventDefault();

  // creates a new variable which stores the value in
  let debt = document.getElementById('debt').value;
  let months = document.getElementById('monthly').value;

  let val = debt/months;
  document.getElementById('result').innerHTML=val;
  console.log(val);
}