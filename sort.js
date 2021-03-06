

const testArray = [2, 4, 7, 1, 3, 564, 6, 122, 5, 657, 67, 8, 12, 12]

// 选择排序
function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let current = arr[i]

        for (let q = i + 1; q < arr.length; q++) {
            let next = arr[q]
            if (current > next) {
                arr[i] = next
                arr[q] = current
                current = next
            }
        }
    }
    return arr
}

// console.log(selectionSort(testArray))

// 冒泡排序

function bubbleSort(arr) {
    let lastIndex = arr.length - 1
    while (lastIndex) {

        for (let index = 0; index < lastIndex; index++) {
            const element = arr[index]
            const next = arr[index + 1]

            if (element > next) {
                arr[index] = next
                arr[index + 1] = element
            }

        }
        lastIndex = lastIndex - 1

    }

    return arr
}

// console.log(bubbleSort(testArray))

// 插入排序
function insertSort(arr) {

    for (let i = 1; i < arr.length; i++) {
        let element = arr[i];

        let j = i

        for (; j > 0; j--) {
            if (element < arr[j - 1]) {
                arr[j] = arr[j - 1]
            } else {
                break
            }
        }
        arr[j] = element
    }

    return arr
}

// console.log(insertSort(testArray))

// 希尔排序

function shellSort(arr) {
    let interval = Math.ceil(arr.length / 2)

    // 分组间隔逐渐缩小到1
    for (; interval >= 1; interval = Math.floor(interval / 2)) {

        // 每一组都进行插入排序
        for (let i = 0; i < interval; i++) {

            // 插入排序
            for (let j = i + interval; j < arr.length; j = j + interval) {
                let current = arr[j]
                let k = j
                for (; k > i; k = k - interval) {
                    if (current < arr[k - interval]) {
                        arr[k] = arr[k - interval]
                    } else {
                        break
                    }
                }
                arr[k] = current
            }
        }
    }

    return arr
}

console.log(shellSort(testArray))