// console.log("no error");
switcher = 0;
function testit() {
  document.getElementById("test").innerHTML +=
    "<p> CHanged liKe a pRO </p> <p> new line? </p>";
}

caVal = [];

function cardFocus(num) {
  cards = document.getElementsByClassName("card");
  if (switcher) {
    var i;
    for (i = 0; i < cards.length; i++) {
      cards[i].style.display = "inline-block";
    }
    cards[num].style.height = "32vh";
    cards[num].style.width = "32%";
    switcher ^= 1;
  } else {
    var i;
    for (i = 0; i < cards.length; i++) {
      cards[i].style.display = "none";
    }
    cards[num].style.display = "inline-block";
    cards[num].style.height = "70vh";
    cards[num].style.width = "60%";
    switcher ^= 1;
  }
}
