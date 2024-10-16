function mergeObjects(student, course) {
    const studentwithcourse = { ...student, ...course };
    return studentwithcourse;
}

const student = { Name: "Rajesh", Age: 24 };
const course = { course: "Web Development", duration: "6 Months" };
console.log(mergeObjects(student, course));
