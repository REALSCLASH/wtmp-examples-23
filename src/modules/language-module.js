import{Courses} from "./courses";

const container = document.getElementById("courses");
let DefaultLang = "title_en";

export const toggleLanguage = (courses) => {
  DefaultLang = DefaultLang === "title_en" ? "title_fi" : "title_en";
  refreshCourses(courses);
};

export const sortCourses = (courses) => {
  courses.sort((a, b) => a[DefaultLang].localeCompare(b[DefaultLang]));
  refreshCourses(courses);
};

export const refreshCourses = (courses) => {
  // Empty all children
  container.innerHTML = "";
    courses.forEach((course) => {
      const courseDiv = document.createElement("div");
      const title = document.createElement("p");
      title.innerText = course[DefaultLang];
      courseDiv.appendChild(title);
      container.appendChild(courseDiv);
    });
};
