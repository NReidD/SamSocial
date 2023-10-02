window.onload = function() {
  window.setInterval(scrollPartners, 10000);
}

function scrollPartners() {
  var partners = document.getElementsByClassName("partner");
  for (var partner of partners) {
    var partnerIndex = parseInt(partner.classList[1].split("-")[1]); // get number after "partner-"
    partnerIndex++;
    if (partnerIndex > 6) partnerIndex = 1;
    partner.classList.replace(partner.classList[1], `partner-${partnerIndex}`);
  }
}