const coursesEn = ["Hamburger, cream sauce and poiled potates",
                "Goan style fish curry and whole grain rice",
                "Vegan Chili sin carne and whole grain rice",
                "Broccoli puree soup, side salad with two napas",
                "Lunch baguette with BBQ-turkey filling",
                "Cheese / Chicken / Vege / Halloum burger and french fries"];
const coursesFi = ["Jauhelihapihvi, ruskeaa kermakastiketta ja keitettyä perunaa",
                "Goalaista kalacurrya ja täysjyväriisiä",
                "vegaani Chili sin carne ja täysjyväriisi",
                "Parsakeittoa,lisäkesalaatti kahdella napaksella",
                "Lunch baguette with BBQ-turkey filling",
                "Juusto / Kana / Kasvis / Halloumi burgeri ja ranskalaiset"];

const coursesDiv = document.getElementById("courses");

//Näyttää aluksi vain Fi listan
coursesFi.forEach(course => {
  const p = document.createElement("p");
  p.innerText = course;
  coursesDiv.appendChild(p);
});

// Vaihtaa kieltä painaessa edestakas
let language = "fi";
const changeLanguageBtn = document.getElementById("changeLanguage");
changeLanguageBtn.addEventListener("click", function() {
  coursesDiv.innerHTML = "";
  if (language === "fi") {
    coursesEn.forEach(course => {
      const p = document.createElement("p");
      p.innerText = course;
      coursesDiv.appendChild(p);
    });
    language = "en";
  } else {
    coursesFi.forEach(course => {
      const p = document.createElement("p");
      p.innerText = course;
      coursesDiv.appendChild(p);
    });
    language = "fi";
  }
});

const sortBtn = document.getElementById("sortCourses");
sortBtn.addEventListener("click", function() {
    coursesDiv.innerHTML = "";
    if(language === "fi"){
        let sortedArray = sortMenu(coursesFi,'asc');
        sortedArray.forEach(course => {
        const p = document.createElement("p");
        p.innerText = course;
        coursesDiv.appendChild(p);
        });
    }
    else{
        let sortedArray = sortMenu(coursesEn,'asc');
        sortedArray.forEach(course => {
        const p = document.createElement("p");
        p.innerText = course;
        coursesDiv.appendChild(p);
        });
    }
});

function sortMenu(menu, order){
    if(order === 'asc'){
        return menu.sort();
    }
    else{
        return menu.sort().reverse();
    }
}

randomBtn.addEventListener("click", function() {
  let currentMenu = [];
  if (language === "fi") {
  currentMenu = coursesFi;
  } else {
  currentMenu = coursesEn;
  }
  const randomIndex = Math.floor(Math.random() * currentMenu.length);
  coursesDiv.innerHTML = "";
  const p = document.createElement("p");
  p.innerText = currentMenu[randomIndex];
  coursesDiv.appendChild(p);
  });

