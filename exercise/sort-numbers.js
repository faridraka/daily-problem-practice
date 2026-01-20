function solution(nums){
  if(nums == null | nums == undefined | nums == []) return []
  
  return nums.sort((a,b) => a - b)
}