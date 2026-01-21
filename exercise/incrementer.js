function incrementer(nums) { 
  // code goes here
  return nums.map((item, index) => {
    const newNumber = item + index + 1
    
    if(newNumber < 10) return newNumber
    else return Number(String(newNumber)[1])
  })
}