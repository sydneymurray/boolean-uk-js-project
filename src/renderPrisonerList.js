// RENDER PRISONER LIST
function renderPrisonerList() {
    removeHeroImage()
    const displayContent = document.querySelector(".display-content");
    displayContent.setAttribute("class", "display-content");
  
    displayContent.innerHTML = "";
  
    for (let i = 0; i < state.prisoners.length; i++) {
      let prisoner = state.prisoners[i];
      let index = [i];
  
      renderPrisoner(prisoner, index);
    }
    state.gangMember = null;
    state.parole = null;
    state.goodBehaviour = null;
    state.crimeType = null;
  }
  