function domainName(url){
  //your code here
  const match = url.match(/^(?:https?:\/\/)?(?:www\.)?([^\/.]+)/)
  return match[1]
}