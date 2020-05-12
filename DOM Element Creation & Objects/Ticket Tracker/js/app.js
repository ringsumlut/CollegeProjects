var ticket = {
  state: "State",
  issue: "Issue",
};

document.getElementById("State").innerHTML = "State: " + ticket.state;
document.getElementById("Issue").innerHTML = ticket.issue;
function Open() {
  state = "Open";
  document.getElementById("State").innerHTML = "State: " + state;
}

function Close() {
  state = "Close";
  document.getElementById("State").innerHTML = "State: " + state;
}

function inProgress() {
  state = "In Progress";
  document.getElementById("State").innerHTML = "State: " + state;
}
