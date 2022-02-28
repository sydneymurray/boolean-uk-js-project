// RENDER PRISONER
function renderPrisoner(prisoner, index) {
    if (
      state.crimeType !== null &&
      state.crimeType !== prisoner.crimeType.toUpperCase()
    )
      return;
    if (state.gangMember !== null && prisoner.gangMember === false) return;
  
    if (state.parole !== null && prisoner.parole === false) return;
  
    if (state.goodBehaviour !== null && prisoner.goodBehaviour === false) return;
  
    const displayContent = document.querySelector(".display-content");
    const prisonerArticle = document.createElement("article");
    prisonerArticle.setAttribute("class", "prisoner-article");
    displayContent.append(prisonerArticle);
  
    const prisonerTitle = document.createElement("h2");
    prisonerTitle.setAttribute("class", "prisoner-title");
    prisonerTitle.innerText = prisoner.firstName + " " + prisoner.lastName;
    prisonerArticle.append(prisonerTitle);
  
    const prisonerImg = document.createElement("img");
    prisonerImg.setAttribute("class", "prisoner-img");
    prisonerImg.setAttribute("src", prisoner.picture);
    prisonerImg.setAttribute("alt", prisoner.firstName + " " + prisoner.lastName);
    prisonerArticle.append(prisonerImg);
  
    const nickname = document.createElement("h3");
    nickname.setAttribute("class", "crime-type");
    nickname.innerText = `Nickname: ${prisoner.nickName}`;
    prisonerArticle.append(nickname);
  
    const crimeTitle = document.createElement("h3");
    crimeTitle.setAttribute("class", "crime-title");
    crimeTitle.innerText = `Crime: ${prisoner.crimeType}`;
    prisonerArticle.append(crimeTitle);
  
    const crimeDetails = document.createElement("p");
    crimeDetails.setAttribute("class", "crime-details");
    crimeDetails.innerText = prisoner.crimeDetails;
    prisonerArticle.append(crimeDetails);
  
    const blockCell = document.createElement("span");
    blockCell.setAttribute("class", "block-sell");
    // if (index === underfined) console.log("index underfined");
    blockCell.innerText = `Block: ${prisoner.block} Cell: ${prisoner.cell}`;
    prisonerArticle.append(blockCell);
  
    const btnWrapper = document.createElement("div");
    btnWrapper.setAttribute("class", "btn-wrapper");
    prisonerArticle.append(btnWrapper);
  
    const editBtn = document.createElement("button");
    editBtn.setAttribute("class", "edit-btn");
    editBtn.innerText = "E D I T";
    btnWrapper.append(editBtn);
  
    editBtn.addEventListener("click", function () {
      state.prisoner = prisoner;
      editPrisonerForm(prisoner);
    });
  }
  