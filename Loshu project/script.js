// Function to calculate Life Path Number
function calculateLifePathNumber(dob) {
  const dobDigits = dob.replace(/-/g, "").split("").map(Number);
  let lifePath = dobDigits.reduce((acc, digit) => acc + digit, 0);

  // Reduce to a single digit
  while (lifePath > 9) {
    lifePath = String(lifePath)
      .split("")
      .map(Number)
      .reduce((acc, digit) => acc + digit, 0);
  }
  return lifePath;
}

// Function to calculate Name Number based on Pythagorean numerology
function calculateNameNumber(name) {
  const nameLowerCase = name.toLowerCase();
  const letterToNumber = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 1,
    k: 2,
    l: 3,
    m: 4,
    n: 5,
    o: 6,
    p: 7,
    q: 8,
    r: 9,
    s: 1,
    t: 2,
    u: 3,
    v: 4,
    w: 5,
    x: 6,
    y: 7,
    z: 8,
  };

  // Calculate sum of letter values
  let nameSum = 0;
  for (const char of nameLowerCase) {
    if (letterToNumber[char]) {
      nameSum += letterToNumber[char];
    }
  }

  // Reduce to a single digit
  while (nameSum > 9) {
    nameSum = String(nameSum)
      .split("")
      .map(Number)
      .reduce((acc, digit) => acc + digit, 0);
  }
  return nameSum;
}

// Function to generate the Lo Shu chart with numerology values
function generateLoShuChart() {
  const name = document.getElementById("name").value;
  const nickname = document.getElementById("nickname").value;
  const dob = document.getElementById("dob").value;

  // Basic validation
  if (!name || !nickname || !dob) {
    alert("Please fill in all fields.");
    return;
  }

  // Calculate numerology numbers
  const lifePathNumber = calculateLifePathNumber(dob);
  const nameNumber = calculateNameNumber(name);
  const nicknameNumber = calculateNameNumber(nickname);

  // Populate Lo Shu chart with example layout
  const loShuNumbers = [
    lifePathNumber,
    nameNumber,
    nicknameNumber,
    nameNumber,
    lifePathNumber,
    nicknameNumber,
    nicknameNumber,
    lifePathNumber,
    nameNumber,
  ];

  // Display the Lo Shu chart
  const loShuChart = document.getElementById("loShuChart");
  loShuChart.innerHTML = ""; // Clear previous chart

  loShuNumbers.forEach((num) => {
    const cell = document.createElement("div");
    cell.textContent = num;
    loShuChart.appendChild(cell);
  });
}
