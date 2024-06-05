
const DectoBinary = (data) => {
  binaryNumber = "";
  q = data;
  r = 0
  do {
    r = Math.floor(q % 2);
    q = q / 2;
    binaryNumber = binaryNumber + r
    if(q == 0){
        return  Math.floor(binaryNumber.split("").reverse().join(""));
    }
  } while (q > 0 );
};
console.log(DectoBinary(1041))
function solution(N) {
    // Implement your solution here
    binaryOfN = N.toString(2)
    maxGapLength = 0
    currGapLength = 0
    for (let i = 1; i < binaryOfN.length; i++) {
        for(let j = i; j < i + 1; j++){
            if(binaryOfN[j]=='0'){
                currGapLength = currGapLength + 1
            }
            if(binaryOfN[j]=='1'){
                //end of a gap
                if(currGapLength > maxGapLength){
                    maxGapLength = currGapLength
                }
                currGapLength = 0
            }
        }
    }
    return maxGapLength
}
console.log("output: " + solution(1041));
