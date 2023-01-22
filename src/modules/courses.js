export let Courses = [];

export const initCourses = async () => {
  const response = await fetch("/assets/Menu.json");
  const data = await response.json();
  Courses = Object.values(data.courses);
};
