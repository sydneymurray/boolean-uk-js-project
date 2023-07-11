//let baseURL = "http://localhost:3000/"
//let baseURL = "https://freedom-prison.herokuapp.com/"
let baseURL = "https://sydneymurray.github.io/boolean-uk-js-project/"
let prisonersURL = baseURL + "prisoners/"
let blockURL = baseURL + "block/"

let state = [];
state.crimeType = null;
state.gangMember = null;
state.parole = null;
state.goodBehaviour = null;


function mainH1() {
  const mainH1 = document.querySelector(".main-h1");
  mainH1.addEventListener("click", function () {
    displayHeroImg();
  });  
}

function displayHeroImg(){
  const displayContent = document.querySelector(".display-content");
  displayContent.innerHTML = "";
  const heroImage = document.querySelector(".hero-img");
  heroImage.setAttribute("class", "hero-img");
}

function renderPrisoners() {
  const prisonerLi = document.querySelector(".prisoners-li");

  prisonerLi.addEventListener("click", function () {
    renderPrisonerList();
  });
}

function removeHeroImage(){
  const mainH2 = document.querySelector(".main-h2");
  if (mainH2) mainH2.remove()
  const heroImage = document.querySelector(".hero-img");
  heroImage.setAttribute("class", "hero-img no-display");
}

function renderAdmission() {
  const admissionBtn = document.querySelector(".admissions-li");
  admissionBtn.addEventListener("click", function () {
    renderAdmissionForm();
  });
}

function renderGangMembers() {
  const gangMember = document.querySelector(".gang-members-li");
  gangMember.addEventListener("click", function () {
    state.gangMember = true;
    renderPrisonerList();
  });
}

function renderEligibleForParole() {
  const parole = document.querySelector(".paroles-li");
  parole.addEventListener("click", function () {
    state.parole = true;
    renderPrisonerList();
  });
}

function renderGoodBehaviourList() {
  let contentSection = document.querySelector(".display-content");
  contentSection.innerHTML = "";

  const goodBehaviour = document.querySelector(".good-behaviour-li");

  goodBehaviour.addEventListener("click", function () {
    state.goodBehaviour = true;
    renderPrisonerList();
  });
}

function updateSig(){
  const displayContent = document.querySelector(".sig-time");
  displayContent.innerHTML = (new Date).toString().slice(15,24);
}

//CREATE EVENT LISTENERS FOR MAIN MENU BUTTONS
function createEventListeners() {
  mainH1();
  renderPrisoners();
  renderAdmission();
  renderGangMembers();
  renderEligibleForParole();
  renderGoodBehaviourList();
}

/////////////////////////////////////////////////////////////////////
// MAIN PROGRAM STARTS HERE
const cancelUpDateSig = setInterval(updateSig, 1000);
retrieveData();
createEventListeners();
