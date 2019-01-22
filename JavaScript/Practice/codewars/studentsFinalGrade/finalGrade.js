console.clear();

const finalGrade = (examGrade, completedProjects) => {

    if (examGrade > 90 || completedProjects > 10) return 100;
    if (examGrade > 75 && completedProjects >= 5) return 90;
    if (examGrade > 50 && completedProjects >= 2) return 75;

    return 0;

}

console.log(finalGrade(100, 12));
console.log(finalGrade(99, 0));
console.log(finalGrade(10, 15));

console.log(finalGrade(85, 5));

console.log(finalGrade(55, 3));

console.log(finalGrade(49, 3));

console.log(finalGrade(20, 3));