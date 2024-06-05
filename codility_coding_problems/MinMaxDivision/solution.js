function solution(K, M, A) {
    let minLargeSum = 0;
    var largeSum = 0;

    if (maxNumber(A) <= M) {
        let trials = 0;

        while (trials <= 10) {
            var end = 1 + Math.floor(Math.random() * A.length);
            var start = 0;
            while (K > 0) {
                if (sum(A, start, end) > largeSum) {
                    largeSum = sum(A, start, end);
                }
                if (start == 0) {
                    minLargeSum = largeSum;
                }
                start = end;
                if (K == 1) {
                    end = end + (A.length - end);
                }
                else {
                    end = end + 2 + Math.abs(A.length - Math.floor(Math.random() * A.length));
                }
                K--;
            }
            if(largeSum <= minLargeSum) {
                minLargeSum = largeSum;
            }
            else{
                return minLargeSum;
            }
            trials++
        }
    }
    else {
        return 0;
    }

    return minLargeSum;
}

// return false if the large sum < the largest element of the list
function sum(A, start, end) {

    let current_sum = 0;
    for (let i = start; i < end; i++) {
        if (A[i] == undefined) {
            break;
        }
        else if (A[i] != undefined) {
            current_sum += A[i];
        }
    }
    return current_sum;
}

// return the largest array element
maxNumber = (list) => {
    let max = list[0];
    list.forEach(number => {
        if (number > max) {
            max = number;
        }
    });
    return max;
}

console.log(solution(3, 6, [2, 1, 5, 1, 2, 2, 2]));