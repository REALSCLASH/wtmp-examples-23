import { Courses, initCourses } from './modules/courses';
import { toggleLanguage, sortCourses, refreshCourses } from './modules/language-module';
import { pickRandom } from './modules/random-module';

const changeLanguageBtn = document.querySelector("#changeLanguage");
const sortBtn = document.querySelector("#sortCourses");
const randomBtn = document.querySelector("#randomBtn");
const container = document.getElementById("courses");

initCourses().then((a) => {
  refreshCourses(Courses);
});
changeLanguageBtn.addEventListener("click", () => {
  toggleLanguage(Courses);
});
sortBtn.addEventListener("click", () => {
  sortCourses(Courses);
});
randomBtn.addEventListener("click", () => {
  pickRandom();
});
