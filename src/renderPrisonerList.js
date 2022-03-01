
function renderPrisonerList() {
    removeHeroImage()
    const displayContent = document.querySelector(".display-content");
    displayContent.setAttribute("class", "display-content");
    displayContent.innerHTML = "";
  
    for (const prisoner of state.prisoners) {
      renderPrisoner(prisoner);
    }
    state.gangMember = null;
    state.parole = null;
    state.goodBehaviour = null;
    state.crimeType = null;
  }


  