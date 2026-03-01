function solve(st, a, b){
 //..
  const reverse = st.slice(a,b + 1).split("").reverse().join("")
  
  return st.slice(0, a) + reverse + st.slice(b + 1)
}
  