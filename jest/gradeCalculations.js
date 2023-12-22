/* eslint-disable max-len */
/* eslint-disable no-console */
const averageExams = (valuesExam) => {
  const numberValidation = valuesExam.every((exam) => typeof exam === 'number');
  if (!numberValidation) throw Error('please input number');

  const sumValuesExam = valuesExam.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return sumValuesExam / valuesExam.length;
};

const isStudentPassExam = (valuesExam, name) => {
  const minValues = 75;
  const average = averageExams(valuesExam);

  if (average > minValues) {
    console.log(`${name} pass the exams`);
    return true;
  }
  console.log(`${name} fail the exam`);
  return false;
};

module.exports = { averageExams, isStudentPassExam };
