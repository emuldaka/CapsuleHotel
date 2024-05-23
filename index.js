const title = document.getElementById("hello");
const container = document.getElementsByClassName("container")[0];
let buttonBG = document.querySelector(".buttonBG");
let buttonCO = document.querySelector(".buttonCO");
let guests = [];

// makeHotel(prompt("What is the capacity"));
makeHotel(50);

function makeHotel(capacity) {
  for (let i = 0; i < capacity; i++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("room");
    newDiv.id = i;
    newDiv.style.backgroundColor = "blue";
    container.appendChild(newDiv);
    guests.push(newDiv);
    guests[i] = null;
    newDiv.innerText = `room:  ${i + 1} \n ${guests[i]}`;
  }
  console.log("initialized", guests);
}

buttonBG.addEventListener("click", (e) => {
  let name = prompt("Guest Name?");
  let roomNum = prompt("Room Number?");
  while (guests[roomNum - 1] !== null) {
    roomNum = prompt("Room is Occupied, please select another");
  }
  guests[roomNum - 1] = name;
  let roomID = document.getElementById(`${roomNum - 1}`);
  console.log(roomID);
  roomID.innerText = `room: ${roomNum} \n  ${name}`;
  console.log("adding", guests);
});

buttonCO.addEventListener("click", (e) => {
  let remove = prompt("Which room is to be cleared sir?");
  if (guests[remove - 1] === null) {
    alert("room is vacant already");
  } else {
    guests[remove - 1] = null;
    let roomID = document.getElementById(`${remove - 1}`);
    roomID.innerText = `room: ${remove} \n  null`;
    console.log("removing", guests);
    alert("bye bye");
  }
});
