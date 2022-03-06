const heightElem = document.getElementById('input-height');
const ageElem = document.getElementById('input-age');
const weightElem = document.getElementById('input-weight');
const checkFemale = document.getElementById('check-female');
const activities = document.getElementById('select-activities');
const basicKcal = document.getElementById('grundumsatz-kcal');
const basicKJ = document.getElementById('grundumsatz-kJ');
const totalKcal = document.getElementById('gesamtumsatz-kcal');
const totalKJ = document.getElementById('gesamtumsatz-kJ');

calcCalories = () => {
  if(checkFemale.checked) {
    let calcBasicKcal = Math.ceil(664.7 + (9.6 * weightElem.value) + (1.8 * heightElem.value) - (4.7 * ageElem.value));
    let calcTotalKcal = Math.ceil(calcBasicKcal * activities.value);

    basicKcal.innerHTML = String(calcBasicKcal);
    totalKcal.innerHTML = String(calcTotalKcal);

    basicKJ.innerHTML = String(Math.ceil(calcBasicKcal * 4.1868));
    totalKJ.innerHTML = String(Math.ceil(calcTotalKcal * 4.1868));
  } else {
    let calcBasicKcal = Math.ceil(664.7 + (13.7 * weightElem.value) + (5 * heightElem.value) - (6.8 * ageElem.value));
    let calcTotalKcal = Math.ceil(calcBasicKcal * activities.value);

    basicKcal.innerHTML = String(calcBasicKcal);
    totalKcal.innerHTML = String(calcTotalKcal);

    basicKJ.innerHTML = String(Math.ceil(calcBasicKcal * 4.1868));
    totalKJ.innerHTML = String(Math.ceil(calcTotalKcal * 4.1868));
  }
}