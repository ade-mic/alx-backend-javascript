export default function getStudentIdsSum(getListStudentIds) {
  return getListStudentIds.reduce((sum, student) => sum + student.id, 0);
}
