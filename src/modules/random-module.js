

let Random = [];

export const pickRandom = () => {
  Random = [courses[Math.floor(Math.random() * courses.length)]];
  refreshCourses(Random);
};
