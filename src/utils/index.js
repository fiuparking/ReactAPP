/**
 * Removes percent.
 * 
 * @example
 * ```
 * removePercentage('10%');
 * // => '10'
 * ```
 * 
 * @param str the string to remove percentage
 * @returns string without the percentage.
 */
export const removePercent = str => str.slice(0, -1);


/**
 * Formats the object from the API to the one 
 * that will be used on the garage card.
 * 
 * @param {object} res response from the API
 */
export const formatObject = (res = {}) => {
  return {
    garageName: res.GarageName || 'PG',
    /** Students */
    studentPercent: res.StudentFull || '0%',
    availableForStudents: +(res.StudentMax) - +(res.StudentSpaces) || 0,
    studentsParking: +(res.StudentMax) || 0,
    /** Employees */
    employeesPercent: res.OtherFull || '0%',
    availableForEmployees: +(res.OtherMax) - +(res.OtherSpaces) || 0,
    employeesParking: +(res.OtherMax) || 0,
  }
};