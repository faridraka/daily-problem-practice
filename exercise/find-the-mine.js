function mineLocation(field){
    const row = field.findIndex(area => area.includes(1))
  if (row === -1) return [-1, -1]

  const col = field[row].indexOf(1)
  return [row, col]
}