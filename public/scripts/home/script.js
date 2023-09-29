// So something is... weird... here....

window.onload = function() {
  // scrollPartners();
  // window.setInterval(scrollPartners, 5000);
  document.onclick = scrollPartners;
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