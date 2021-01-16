const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
  }
  
const name = prompt('Please enter the name for your reservation');
if (reservations[name]==undefined)
  alert("You have no reservation");
else if (reservations[name].claimed)
  alert("Hmm, someone already claimed this reservation");
else 
  alert("Welcome "+name);