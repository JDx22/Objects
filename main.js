const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
  }
  
const name = prompt('Please enter the name for your reservation').toLowerCase();
const editedName = name.charAt(0).toUpperCase() +name.slice(1);
console.log(editedName);
if (reservations[editedName]==undefined)
{
  alert("You have no reservation");
  reservations[editedName] = { claimed: true };
  console.log(reservations);
}
else if (reservations[editedName].claimed)
  alert("Hmm, someone already claimed this reservation");
else 
  alert("Welcome "+editedName);