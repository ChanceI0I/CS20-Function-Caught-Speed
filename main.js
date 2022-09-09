// Functionize Caught Speeding Start Code

// Determine Tickets Button Click Event
document.getElementById('btn').addEventListener('click', Result);

function Result() {
  let d1Speed = +document.getElementById('d1-speed').value;
  let d1Limit = +document.getElementById('d1-limit').value;
  let d2Speed = +document.getElementById('d2-speed').value;
  let d2Limit = +document.getElementById('d2-limit').value;
  let d3Speed = +document.getElementById('d3-speed').value;
  let d3Limit = +document.getElementById('d3-limit').value;

  for (let i=1; i<=3; i++) {
    let Speed = `d${i}Speed`, limit = `d${i}Limit`, Ticket = `d${i}-ticket`;
    document.getElementById(Ticket).innerHTML = IfLimit (eval(Speed), eval(limit));
  }
  
}

function IfLimit (speed, limit) {
  if (speed > limit + 40) {
    return "Really Big Ticket" 
  } if (speed > limit + 20) {
    return "Big Ticket"
  } if (speed > limit) {
    return "Small Ticket"
  } else {
    return "No Ticket"
  }
}
