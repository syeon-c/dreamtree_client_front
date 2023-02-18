//list 받아서 bit로 치환
/*
* 월:0
* 화:1
* 수:2
* 목:3
* 금:4
* 토:5
* 일:6
* */
export function dayToBitParser(day){
  let bit = 0
  day.map(item => {
    bit += 2**item
  })
  return bit
}

//bit 받아서 list로 치환
export function bitToDayParser(bit){
  return bit.toString(2).split('')
}
