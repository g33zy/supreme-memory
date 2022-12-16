// const placeForResults = document.getElementById("results")

// new URLSearchParams(window.location.search).forEach((value, name) => {
  
//   placeForResults.append(`${name} : ${value}`)
//   placeForResults.append(document.createElement("br"))
// })


let burgerButton = document.querySelector(".hamburger")
//assign var burgerButton value of button element w/ class hamburger
let dropDown = document.querySelector("nav")
//assign var nav 
const navDrop = () => {
    //print value of button in var to screen
    console.log(burgerButton)
    burgerButton.classList.toggle('x-style');
    //print value of nav in var to screen
    console.log(dropDown)
    dropDown.classList.toggle('nav-style')
}

const placeForResults = document.getElementById("results")

new URLSearchParams(window.location.search).forEach((value, name) => {
  
  placeForResults.append(`${name} : ${value}`)
  placeForResults.append(document.createElement("br"))
})




const endpoint = 'http://www.boredapi.com/api/activity/';
const button = document.querySelector('.button');
const form = document.querySelector('#form');
const activityWrapper = document.querySelector('.activity');
const typeWrapper = document.querySelector('.type');

const getActivity = async (event) => {
  event.preventDefault();
  const isFree = event.target.children.namedItem('free').checked;

  let Api = isFree ? `${endpoint}?price=0` : endpoint;
  const response = await fetch(Api);
  const json = await response.json();
  const {activity, type} =json;
  activityWrapper.innerHTML = activity;
}

form.addEventListener("submit", getActivity)

