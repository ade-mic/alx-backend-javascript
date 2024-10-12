import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const classArray = [];
  for (const room of [19, 20, 34]) {
    const classRoom = new ClassRoom(room);
    classArray.push(classRoom);
  }
  return classArray;
}
