function luckCheck(ticket){
  //your code here
  if (ticket === null || ticket === undefined) return undefined;
  if (!/^\d+$/.test(ticket)) throw new Error("Invalid ticket");
  
  const mid = Math.floor(ticket.length / 2)
  
  const left = ticket.slice(0, mid)
  const right = ticket.slice(ticket.length - mid)
  
   const sum = s => s.split('').reduce((a, b) => a + Number(b), 0);

  return sum(left) === sum(right);
}