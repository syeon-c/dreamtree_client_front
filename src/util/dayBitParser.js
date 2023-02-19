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
  const dayList = ['월', '화', '수', '목', '금', '토', '일']
  const res = []

  let count = 0

  while(bit > 0){
    if(bit % 2 == 1){
      res.push(dayList[count])
    }

    bit = parseInt(bit / 2)
    count += 1
  }

  return res
}
