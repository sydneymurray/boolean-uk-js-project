// RENDER PRISONER EDIT FORM
function editPrisonerForm(prisoner) {
    const displayContent = document.querySelector(".display-content");
    displayContent.setAttribute(
      "class",
      "display-content display-content-admin-form"
    );
    displayContent.innerHTML = "";
  
    const formArticle = document.createElement("article");
    formArticle.setAttribute("class", "form-article edit-form-article");
    displayContent.append(formArticle);
  
    //Form
    const form = document.createElement("form");
    form.setAttribute("class", "edit-form");
    formArticle.append(form);
  
    //Edit prisoner h1
    const h1El = document.createElement("h1");
    h1El.setAttribute("class", "form-title edit-form-title-h1");
    h1El.innerText = "Edit Prisoner: #" + prisoner.id;
    formArticle.append(h1El);
  
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
    firstNameInputEl.setAttribute("value", prisoner.firstName);
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
    lastNameInputEl.setAttribute("value", prisoner.lastName);
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
    crimeTypeInput.setAttribute("value", prisoner.crimeType);
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
    checkBoxInputEl.checked = prisoner.goodBehaviour;
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
    paroleCheckBoxEl.checked = prisoner.parole;
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
    gangMemberCheckBox.checked = prisoner.gangMember;
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
    nickNameInput.setAttribute("value", prisoner.nickName);
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
    crimeDetailsInput.innerText = prisoner.crimeDetails;
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
    pictureInput.setAttribute("value", prisoner.picture);
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
    let blockIndex = state.block.findIndex(function (index) {
      return prisoner.id === index.prisonerId;
    });
    blockInput.setAttribute("value", state.block[blockIndex].blockId);
    blockDiv.append(blockInput);
  
    //block Cell input + label inside div
    const blockCellDiv = document.createElement("div");
    blockCellDiv.setAttribute("class", "block-cell-div");
    form.append(blockCellDiv);
  
    const blockCellLabel = document.createElement("label");
    blockCellLabel.setAttribute("for", "block-cell-label");
    blockCellLabel.innerText = "Block Cell:";
    blockCellDiv.append(blockCellLabel);
  
    const blockcellInput = document.createElement("input");
    blockcellInput.setAttribute("class", "block-cell-input");
    blockcellInput.setAttribute("id", "block-cell-input");
    blockcellInput.setAttribute("type", "text");
    blockcellInput.setAttribute("value", prisoner.blockCell);
    blockCellDiv.append(blockcellInput);
  
    // CREATE A DIV TO DISPLAY PICTURE
    const pictureDiv = document.createElement("div");
    pictureDiv.setAttribute("class", "edit-form-picture-div");
    formArticle.append(pictureDiv);
  
  
    // DISPLAY PICTURE
    let editFormPicture = document.createElement("img")
    editFormPicture.setAttribute("class","edit-form-pic")
    editFormPicture.setAttribute("src",prisoner.picture)
    editFormPicture.setAttribute("alt",prisoner.id)
    pictureDiv.append(editFormPicture)
  
    //div with submit and delete button
    const buttonDiv = document.createElement("div");
    buttonDiv.setAttribute("class", "button-div");
    formArticle.append(buttonDiv);
  
    //submit button
    const submitBtn = document.createElement("button");
    submitBtn.setAttribute("class", "submit-btn");
    submitBtn.innerText = "S A V E";
    buttonDiv.append(submitBtn);
  
    submitBtn.addEventListener("click", function (event) {
      event.preventDefault();
      updatePrisoner();
      displayContent.innerHTML = "";
    });
  
    //Update Array and JSON
    function updatePrisoner() {
      const prisonerToUpdate = state.prisoners.findIndex(function (inmate) {
        return inmate.id === prisoner.id;
      });
      state.prisoners[prisonerToUpdate].firstName = firstNameInputEl.value;
      state.prisoners[prisonerToUpdate].lastName = lastNameInputEl.value;
      state.prisoners[prisonerToUpdate].crimeType = crimeTypeInput.value;
      state.prisoners[prisonerToUpdate].goodBehaviour = checkBoxInputEl.checked;
      state.prisoners[prisonerToUpdate].parole = paroleCheckBoxEl.checked;
      state.prisoners[prisonerToUpdate].gangMember = gangMemberCheckBox.checked;
      state.prisoners[prisonerToUpdate].nickName = nickNameInput.value;
      state.prisoners[prisonerToUpdate].crimeDetails = crimeDetailsInput.value;
      state.prisoners[prisonerToUpdate].picture = pictureInput.value;
      state.prisoners[prisonerToUpdate].blockCell = blockcellInput.value;
  
      fetch(prisonersURL+prisoner.id, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: state.prisoners[prisonerToUpdate].firstName,
          lastName: state.prisoners[prisonerToUpdate].lastName,
          crimeType: state.prisoners[prisonerToUpdate].crimeType,
          goodBehaviour: state.prisoners[prisonerToUpdate].goodBehaviour,
          parole: state.prisoners[prisonerToUpdate].parole,
          gangMember: state.prisoners[prisonerToUpdate].gangMember,
          nickName: state.prisoners[prisonerToUpdate].nickName,
          crimeDetails: state.prisoners[prisonerToUpdate].crimeDetails,
          picture: state.prisoners[prisonerToUpdate].picture,
          blockCell: state.prisoners[prisonerToUpdate].blockCell,
        }),
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          fetch(blockURL+prisoner.id, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              blockId: blockInput.value,
            }),
          })
            .then(function (response) {
              return response.json();
            })
            .then(function (data) {
              let indexOfblock = state.block.findIndex(function (index) {
                return prisoner.Id === index.prisonerId;
              });
              state.block.splice(indexOfblock, 1);
              state.block.push(data);
              renderPrisonerList();
            });
        });
    }
  
    //delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "delete-btn");
    deleteBtn.innerText = "D I S C H A R G E";
    buttonDiv.append(deleteBtn);
  
    deleteBtn.addEventListener("click", function () {
      state.prisoners = state.prisoners.filter(function (inmate) {
        return inmate.id !== prisoner.id;
      });
  
      fetch(prisonersURL+prisoner.id, {
        method: "DELETE",
      });
      alert(`Prisoner #${prisoner.id}: ${prisoner.firstName} ${prisoner.lastName} has been discharged`)
      renderPrisonerList()
    });
  }
  