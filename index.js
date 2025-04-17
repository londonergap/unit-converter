/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const massEl = document.getElementById("mass-el")
const volumeEl = document.getElementById("volume-el")

convertBtn.addEventListener("click", function() {
    let input = inputEl.value
    lengthEl.textContent = `${input} meters = ${Math.round(input*3.281*1000)/1000} feet | ${input} feet = ${Math.round(input/3.281*1000)/1000} meters`
    massEl.textContent = `${input} kilos = ${Math.round(input*2.204*1000)/1000} pounds | ${input} pound = ${Math.round(input/2.204*1000)/1000} kilos`
    volumeEl.textContent = `${input} liters = ${Math.round(input*0.264*1000)/1000} gallons | ${input} gallons = ${Math.round(input/0.264*1000)/1000} liters`
})