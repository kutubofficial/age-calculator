const btn = document.getElementById("btn");
const birthday = document.getElementById("birthday");
const value = document.getElementById("value");

function calculateBirthday() {
  const birthdayValue = birthday.value;
  if (birthdayValue === "") {
    alert("Please enter a valid date😤");
  } else {
    const { years, months, days } = getAge(birthdayValue);
    value.innerHTML = `You are ${years} ${
      years > 1 ? "Years" : "Year"
    }, ${months} ${months > 1 ? "Months" : "Month"} and ${days} ${
      days > 1 ? "Days" : "Day"
    } Old`;
    createCelebration();
  }
}

function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);
  // console.log(typeof birthdayDate)
  console.log(currentDate);
  let years = currentDate.getFullYear() - birthdayDate.getFullYear();
  let months = currentDate.getMonth() - birthdayDate.getMonth();
  let days = currentDate.getDate() - birthdayDate.getDate();
  if (days < 0) {
    const prevMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    ).getDate();
    days += prevMonth;
    months--;
  }
  if (months < 0) {
    months += 12;
    years--;
  }
  return { years, months, days };
}

function createCelebration() {
  const celebration = document.createElement("div");
  celebration.className = "celebration";
  // celebration.textContent = '🎉 Congratulations! 🎉';
  celebration.style.background =
    "linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1)";

  document.body.appendChild(celebration);

  for (let i = 0; i < 20; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = "50%";
    particle.style.top = "50%";
    particle.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;

    const angle = Math.random() * 360 * (Math.PI / 180);
    const distance = 100 + Math.random() * 200;
    particle.style.setProperty("--tx", `${Math.cos(angle) * distance}px`);
    particle.style.setProperty("--ty", `${Math.sin(angle) * distance}px`);

    document.body.appendChild(particle);
    setTimeout(() => particle.remove(), 1000);
  }

  setTimeout(() => celebration.remove(), 2000);
}

btn.addEventListener("click", calculateBirthday);
