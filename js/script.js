const toggle = document.getElementById("toggle");
const navigation = document.getElementById("navigation");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  navigation.classList.toggle("active");
});
