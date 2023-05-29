function toggleLabelContent(checkboxId, labelId) {
  var checkbox = document.getElementById(checkboxId);
  var label = document.getElementById(labelId);
  var body = document.getElementById("blurred"); // Define the body variable here
  
  if (checkbox.checked) {
    body.classList.add("blur");
    label.textContent = "Close";
  } else {
    body.classList.remove("blur");
    label.textContent = "Register";
  }
}

