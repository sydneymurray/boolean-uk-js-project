function renderAdmissionForm() {
    removeHeroImage()
    const displayContent = document.querySelector(".display-content");
    displayContent.setAttribute(
      "class",
      "display-content display-content-admin-form"
    );
    displayContent.innerHTML = "";
  
    const formArticle = document.createElement("article");
    formArticle.setAttribute("class", "form-article");
    displayContent.append(formArticle);
  
    //Form
    const form = document.createElement("form");
    form.setAttribute("class", "edit-form");
    formArticle.append(form);
  
    //Edit prisoner h1
    const h1El = document.createElement("h1");
    h1El.setAttribute("class", "form-title");
    h1El.innerText = "Admit Prisoner";
    form.append(h1El);
  
    //First name label + input inside div
    const firstNameDiv = document.createElement("div");
    firstNameDiv.setAttribute("class", "first-name-div");
    form.append(firstNameDiv);
  
    const firstNameLabel = document.createElement("label");
    firstNameLabel.setAttribute("for", "first-name-input");
    firstNameLabel.innerText = "First Name:";
    firstNameDiv.append(firstNameLabel);
  
    const firstNameInputEl = document.createElement("input");
    firstNameInputEl.setAttribute("class", "first-name-input");
    firstNameInputEl.setAttribute("id", "first-name-input");
    firstNameInputEl.setAttribute("type", "text");
    firstNameInputEl.setAttribute("value", "");
    firstNameDiv.append(firstNameInputEl);
  
    //last name label + input inside div
    const lastNameDiv = document.createElement("div");
    lastNameDiv.setAttribute("class", "last-name-div");
    form.append(lastNameDiv);
  
    const lastNameLabel = document.createElement("label");
    lastNameLabel.setAttribute("for", "last-name-input");
    lastNameLabel.innerText = "Last Name:";
    lastNameDiv.append(lastNameLabel);
  
    const lastNameInputEl = document.createElement("input");
    lastNameInputEl.setAttribute("class", "last-name-input");
    lastNameInputEl.setAttribute("id", "last-name-input");
    lastNameInputEl.setAttribute("type", "text");
    lastNameInputEl.setAttribute("value", "");
    lastNameDiv.append(lastNameInputEl);
  
    //crime label + input inside div
    const crimeTypeDiv = document.createElement("div");
    crimeTypeDiv.setAttribute("class", "crime-type-div");
    form.append(crimeTypeDiv);
  
    const crimeType = document.createElement("label");
    crimeType.setAttribute("for", "street-input");
    crimeType.innerText = "Crime Type:";
    crimeTypeDiv.append(crimeType);
  
    const crimeTypeInput = document.createElement("input");
    crimeTypeInput.setAttribute("class", "street-input");
    crimeTypeInput.setAttribute("id", "street-input");
    crimeTypeInput.setAttribute("type", "text");
    crimeTypeInput.setAttribute("value", "");
    crimeTypeDiv.append(crimeTypeInput);
  
    //checkboxes
    const divEl = document.createElement("div");
    divEl.setAttribute("class", "checkbox-section");
    form.append(divEl);
  
    //Good Behaviour
    const checkBoxInputEl = document.createElement("input");
    checkBoxInputEl.setAttribute("class", "good-behaviour-checkbox");
    checkBoxInputEl.setAttribute("id", "good-behaviour-checkbox");
    checkBoxInputEl.setAttribute("type", "checkbox");
    checkBoxInputEl.checked = false;
    divEl.append(checkBoxInputEl);
  
    const checkBoxLabel = document.createElement("label");
    checkBoxLabel.setAttribute("for", "checkbox-label");
    checkBoxLabel.innerText = "Good Behaviour";
    divEl.append(checkBoxLabel);
  
    //Parole
    const paroleCheckBoxEl = document.createElement("input");
    paroleCheckBoxEl.setAttribute("class", "parole-checkbox");
    paroleCheckBoxEl.setAttribute("id", "parole-checkbox");
    paroleCheckBoxEl.setAttribute("type", "checkbox");
    paroleCheckBoxEl.checked = false;
    divEl.append(paroleCheckBoxEl);
  
    const paroleCheckBoxLabel = document.createElement("label");
    paroleCheckBoxLabel.setAttribute("for", "checkbox-label");
    paroleCheckBoxLabel.innerText = "Parole";
    divEl.append(paroleCheckBoxLabel);
  
    //Gang Member
    const gangMemberCheckBox = document.createElement("input");
    gangMemberCheckBox.setAttribute("class", "gang-member-checkbox");
    gangMemberCheckBox.setAttribute("id", "gang-member-checkbox");
    gangMemberCheckBox.setAttribute("type", "checkbox");
    gangMemberCheckBox.checked = false;
    divEl.append(gangMemberCheckBox);
  
    const gangMemberLabel = document.createElement("label");
    gangMemberLabel.setAttribute("for", "checkbox-label");
    gangMemberLabel.innerText = "Gang Member";
    divEl.append(gangMemberLabel);
  
    //Nick name label + input inside div
    const nickNameDiv = document.createElement("div");
    nickNameDiv.setAttribute("class", "nick-name-div");
    form.append(nickNameDiv);
  
    const nickName = document.createElement("label");
    nickName.setAttribute("for", "nick-name-input");
    nickName.innerText = "Nick name:";
    nickNameDiv.append(nickName);
  
    const nickNameInput = document.createElement("input");
    nickNameInput.setAttribute("class", "nick-name-input");
    nickNameInput.setAttribute("id", "nick-name-input");
    nickNameInput.setAttribute("type", "text");
    nickNameInput.setAttribute("value", "");
    nickNameDiv.append(nickNameInput);
  
    //crime details input and label
    const crimeDetails = document.createElement("label");
    crimeDetails.setAttribute("for", "crime-details-label");
    crimeDetails.setAttribute("class", "crime-details-label");
    crimeDetails.innerText = "Crime details:";
    form.append(crimeDetails);
  
    const crimeDetailsInput = document.createElement("textarea");
    crimeDetailsInput.setAttribute("class", "crime-details-input");
    crimeDetailsInput.setAttribute("id", "crime-details-input");
    crimeDetailsInput.setAttribute("type", "text");
    form.append(crimeDetailsInput);
  
    //picture
    const pictureLabel = document.createElement("label");
    pictureLabel.setAttribute("for", "picture-input");
    pictureLabel.setAttribute("class", "picture-label");
    pictureLabel.innerText = "Picture:";
    form.append(pictureLabel);
  
    const pictureInput = document.createElement("input");
    pictureInput.setAttribute("class", "picture-input");
    pictureInput.setAttribute("id", "picture-input");
    pictureInput.setAttribute("type", "text");
    pictureInput.setAttribute("value", "");
    form.append(pictureInput);
  
    //block A B C D
    const blockDiv = document.createElement("div");
    blockDiv.setAttribute("class", "block-cell-div");
    form.append(blockDiv);
  
    const blockLabel = document.createElement("label");
    blockLabel.setAttribute("for", "block-cell-label");
    blockLabel.innerText = "Block:";
    blockDiv.append(blockLabel);
  
    const blockInput = document.createElement("input");
    blockInput.setAttribute("class", "block-cell-input");
    blockInput.setAttribute("id", "block-cell-input");
    blockInput.setAttribute("type", "text");
    blockInput.setAttribute("value", "");
    blockDiv.append(blockInput);
  
    //block Cell input + label inside div
    const blockCellDiv = document.createElement("div");
    blockCellDiv.setAttribute("class", "block-cell-div");
    form.append(blockCellDiv);
  
    const blockCellLabel = document.createElement("label");
    blockCellLabel.setAttribute("for", "block-cell-label");
    blockCellLabel.innerText = "Cell:";
    blockCellDiv.append(blockCellLabel);
  
    const blockcellInput = document.createElement("input");
    blockcellInput.setAttribute("class", "block-cell-input");
    blockcellInput.setAttribute("id", "block-cell-input");
    blockcellInput.setAttribute("type", "text");
    blockcellInput.setAttribute("value", "");
    blockCellDiv.append(blockcellInput);
  
    //admission button
    const btnWrapper = document.createElement("div");
    btnWrapper.setAttribute("class", "btn-wrapper");
    formArticle.append(btnWrapper);
  
    const admissionBtn = document.createElement("button");
    admissionBtn.setAttribute("class", "admission-btn");
    admissionBtn.innerText = "A D M I S S I O N";
    btnWrapper.append(admissionBtn);
  
    admissionBtn.addEventListener("click", function (event) {
      event.preventDefault();

      // CHECK CELL AVAILABILITY
      let block = blockInput.value.toUpperCase()
      let occupiedByInmate = state.prisoners.find(inmate => inmate.block === block &&
         inmate.cell === blockcellInput.value)
      if (occupiedByInmate){
        alert(`Prisoner has not been updated!\nBlock: ${block} - Cell: ${blockcellInput.value}` + 
          ` is occupied by prisoner #${occupiedByInmate.id}: ${occupiedByInmate.firstName}` +
          ` ${occupiedByInmate.lastName}`)
        return
      }
      displayContent.innerHTML = "";
  
      fetch(prisonersURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: firstNameInputEl.value,
          lastName: lastNameInputEl.value,
          crimeType: crimeTypeInput.value,
          goodBehaviour: checkBoxInputEl.checked,
          parole: paroleCheckBoxEl.checked,
          gangMember: gangMemberCheckBox.checked,
          nickName: nickNameInput.value,
          crimeDetails: crimeDetailsInput.value,
          picture: pictureInput.value,
          block: blockInput.value.toUpperCase(),
          cell: blockcellInput.value,
        }),
      })
      .then(function (response) {
        return response.json();
      })
      .then(function (prisoner) {
        state.prisoners.push(prisoner);
        alert(`Prisoner #${prisoner.id}: ${prisoner.firstName} ${prisoner.lastName} has been Admitted`)    
        renderPrisonerList();
      });
    });
  }
  