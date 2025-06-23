function calculateBMI() {
  const weight = parseFloat(document.getElementById('Weight').value);
  const height = parseFloat(document.getElementById('height').value);
  const age = parseInt(document.getElementById('age').value);
  const gender = document.querySelector('input[name="gender"]:checked');

  if (!weight || !height || !age || !gender) {
    alert("Please fill out all fields correctly.");
    return;
  }

  const categoryl = document.getElementById('category');
  const progress1 = document.getElementById('bmiProgress');
  
  const heightinmeters = height / 100;
  const bmi = (weight / (heightinmeters * heightinmeters));
  document.getElementById('result').innerText = `BMI: ${bmi}`;

  let category="";
  let colorClass = "";
  let progressPercent = Math.min((bmi/40)*100,100);
 
  if (bmi < 16) {
  category = "Severe Thinness";
  colorClass = "red";
} else if (bmi < 17) {
  category = "Moderate Thinness";
  colorClass = "orange";
} else if (bmi < 18.5) {
  category = "Mild Thinness";
  colorClass = "gold";
} else if (bmi < 25) {
  category = "Normal";
  colorClass = "green";
} else if (bmi < 30) {
  category = "Overweight";
  colorClass = "orange";
} else {
  category = "Obese";
  colorClass = "red";
}

  categoryl.innerText = `Category: ${category}`;
  categoryl.style.color = colorClass;

  progress1.classList.remove('red','orange','gold','green');
  progress1.classList.add(colorClass);
  progress1.style.width = `${progressPercent}%`;
  progress1.innerText = `${progressPercent.toFixed(0)}%`;
}