var server = "@server";
var reply = "Replaying to ";
var result = server.fontcolor("#0AB3FA");

var newFeed = [
  {
    name: "<br/>" + "Karen",
    address: "@karen1985" + "<br/>" + "<br/>" + reply + result,
    tweet: "Can I speak to the manager?",
    hashtag: " #mad #0star #disappointed",
    time: "2:32 PM · Nov 1, 2030",
  },
  {
    name: "<br/>" + "<br/>" + "<br/>" + "Jim Kong Nu",
    address: "@mrJim" + "<br/>" + "<br/>",
    tweet: "Send Nukes",
    hashtag: " #supremeLeader #hahaha #WAR",
    time: "1:48 PM · Nov 1, 2030",
  },
  {
    name: "<br/>" + "<br/>" + "<br/>" + "Naruto",
    address: "@hokage" + "<br/>" + "<br/>",
    tweet: "Talk No Jutsu",
    hashtag: " #rasengan #sasuke! #hokage",
    time: "12:42 PM · Nov 1, 2030",
  },
];

for (var i = 0; i < newFeed.length; i++) {
  var feed = newFeed[i];

  var newDiv1 = document.createElement("div");
  var newDiv2 = document.createElement("div");
  var newDiv3 = document.createElement("div");
  var newDiv4 = document.createElement("div");
  var newDiv5 = document.createElement("div");

  newDiv1.innerHTML = feed.name;
  newDiv1.classList.add("feed");
  newDiv1.style.fontSize = "20px";
  newDiv1.style.fontFamily = "Helvetica";
  newDiv1.style.marginLeft = "50px";

  newDiv2.innerHTML = feed.address;
  newDiv2.classList.add("feed");
  newDiv2.style.fontSize = "12px";
  newDiv2.style.color = "#85837F";
  newDiv2.style.fontFamily = "Helvetica";
  newDiv2.style.marginLeft = "50px";

  newDiv3.innerHTML = feed.tweet;
  newDiv3.classList.add("feed");
  newDiv3.style.fontSize = "17px";
  newDiv3.style.fontFamily = "Helvetica";
  newDiv3.style.marginLeft = "50px";

  newDiv4.innerHTML = feed.hashtag;
  newDiv4.classList.add("feed");
  newDiv4.style.fontSize = "14px";
  newDiv4.style.color = "#0AB3FA";
  newDiv4.style.fontFamily = "Helvetica";
  newDiv4.style.marginLeft = "50px";

  newDiv5.innerHTML = feed.time;
  newDiv5.classList.add("feed");
  newDiv5.style.fontSize = "13px";
  newDiv5.style.color = "#85837F";
  newDiv5.style.fontFamily = "Helvetica";
  newDiv5.style.marginLeft = "50px";

  document.body.appendChild(newDiv1);
  document.body.appendChild(newDiv2);
  document.body.appendChild(newDiv3);
  document.body.appendChild(newDiv4);
  document.body.appendChild(newDiv5);
}
