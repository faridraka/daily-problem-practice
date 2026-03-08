function roomMates(rooms, floor) {
  const roomsPerFloor = 6;

  const start = (floor - 1) * roomsPerFloor;
  const end = start + roomsPerFloor;

  return rooms
    .slice(start, end)
    .filter(name => name !== "");
}