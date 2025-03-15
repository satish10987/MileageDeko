function calculateAndRedirect() {
  // Get the input values
  const roadType = document.getElementById('roadType').value;
  const drivingStyle = document.getElementById('drivingStyle').value;
  const season = document.getElementById('season').value;
  const baseMileage = parseFloat(document.getElementById('base_mileage').value);
  
  // Initialize a mileage factor based on inputs
  let mileageFactor = 1.0;

  // Adjust mileage based on road type
  if (roadType === "paved") {
      mileageFactor *= 1; // Highway is more fuel-efficient
  } 
  else if (roadType === "rough") {
      mileageFactor *= 0.8; // City driving decreases mileage
  }
  else if(roadType === 'hilly'){
      mileageFactor *= 0.3;
  }
  else if(roadType === 'urban'){
    mileageFactor *= 0.5;
  }else if(roadType === 'highway'){
    mileageFactor *= 1.3;
  }else if(roadType === 'snow'){
    mileageFactor *= 0.5;
  }else if(roadType === 'sandy'){
    mileageFactor *= 0.3;
  }

  // Adjust mileage based on driving style
  if (drivingStyle === "aggressive") {
      mileageFactor *= 0.7; // Aggressive driving reduces mileage
  } else if (drivingStyle === "smooth") {
      mileageFactor *= 1.0; // Normal driving (no change)
  } else if (drivingStyle === "city") {
      mileageFactor *= 1.3; // Eco driving improves mileage
  } else if(drivingStyle === 'Highway') {
    mileageFactor *= 1.5;
  } else if (drivingStyle === 'Eco') {
    mileageFactor *= 1.0;
  } else if(drivingStyle === 'Defensive') {
    mileageFactor *= 1.3;
  }

  // Adjust mileage based on season
  if (season === "Winter") {
      mileageFactor *= 0.9; // Winter season reduces mileage due to engine and road conditions
  } else if (season === "Summer") {
      mileageFactor *= 1.0; // Summer doesn't affect mileage much
  } else if (season === "Spring" || season === "autumn") {
      mileageFactor *= 1.1; // Spring/Fall is more fuel-efficient
  }

  // Calculate the final mileage
  const finalMileage = baseMileage * mileageFactor;

  // Store the result in localStorage to pass it to another page
  localStorage.setItem("finalMileage", finalMileage.toFixed(2));

  // Redirect to the result page
  window.location.href = "result.html";
}
