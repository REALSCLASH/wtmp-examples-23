let courses = [];
let random = [];
let defaultLang = "title_en";

const changeLanguageBtn = document.querySelector("#changeLanguage");
const sortBtn = document.querySelector("#sortCourses");
const randomBtn = document.querySelector("#randomBtn");

const init = async () => {
  const response = await fetch("/assets/Menu.json");
  const data = await response.json();
  courses = Object.values(data.courses);
};

const container = document.getElementById("courses");

const toggleLanguage = () => {
  defaultLang = defaultLang === "title_en" ? "title_fi" : "title_en";
  refresh();
};

const sort = () => {
  courses = courses.sort((a, b) =>
    a[defaultLang].localeCompare(b[defaultLang])
  );
  refresh();
};

const refresh = () => {
  // Empty all children
  container.innerHTML = "";
  if(random.length > 0) {
    random.forEach((course) => {
      const courseDiv = document.createElement("div");
      const title = document.createElement("p");
      title.innerText = course[defaultLang];
      courseDiv.appendChild(title);
      container.appendChild(courseDiv);
    });
  } else {
    courses.forEach((course) => {
      const courseDiv = document.createElement("div");
      const title = document.createElement("p");
      title.innerText = course[defaultLang];
      courseDiv.appendChild(title);
      container.appendChild(courseDiv);
    });
  }
};

changeLanguageBtn.addEventListener("click", () => {
  toggleLanguage();
});

sortBtn.addEventListener("click", () => {
  sort();
});

randomBtn.addEventListener("click", () => {
  random = [courses[Math.floor(Math.random() * courses.length)]];
  refresh();
});

init().then((a) => {
  refresh();
});

init();
