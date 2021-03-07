let testArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// 在数组尾部添加元素或数组参数中的所有元素，并返回新的数组
testArray.concat(0) //[0,1,2,3,4,5,6,7,8,9,0]
testArray.concat([0, 1])
testArray.concat({ 0: 1 }, 1)

// 将index 为 arg2 ~ arg3 -1 的元素复制到index为 arg1 之后(包含arg1) ,返回数组本身
testArray.copyWithin(0, 1, 2) // [1,1,2,3,4,5,6,7,8,9]

// 返回Array Iterator 对象，
const arrIter = testArray.entries(testArray)
arrIter.next() // {value:{0:0},done:false}

// 数组中的每一项是否都满足函数，第二个参数为第一个参数的this指向，箭头函数不适用这个this
testArray.every(function (value, index, arr) {
    return value >= this.value
}, { value: 0 })

// 用某个值填充数组，不包含结束索引
testArray.fill(1, 1, 10) // [1,1,1,1,1,1,1,1,1,1,1,1]

// 返回一个新数组，数组内包含所有符合函数条件的元素，
// 删除和新增的元素不会被遍历
// 第二个参数是函数的this指向
testArray.filter((value, index, arr) => {
    value > index
})

// 返回第一个满足条件的元素,否则返回undefined
testArray.find((value, index, arr) => {
    value > index
}) // undefined

// 返回第一个满足函数的元素的索引，不存在返回-1
testArray.findIndex((value, index, arr) => {
    value > index
})

// 深度递归遍历数组，返回新数组，包含遍历到的所有子元素，参数为递归层数
// node >11.0.0
// [[0,1]].flat() //[0,1]

//  返回一个新数组，将数组每一项处理后在返回，如果是返回值是空数组[]，将移除此项，非空数组，将每一项添加到新数组里
// node >11.0.0
// [[0,1]].flatMap((value,index,arr)=>{
//     return value
// })

// 遍历数组元素，进行操作，无返回/返回undefined,不影响原数组
testArray.forEach((value, index, arr) => {

})

// 从可迭代对象中返回新的数组
Array.from()

// 判断数组是否包含某个元素，第二个参数表示从第几个元素开始检索
testArray.includes(0)   // true
testArray.includes(0, 1) // false

// 返回第一个值为x的元素索引，不存在返回-1
testArray.indexOf(0)
testArray.indexOf(11)

// 判断是否为数组
Array.isArray()

// 用提供的字符串链接所有元素并返回
testArray.join('-') // 0-1-2-3-4-5-6-7-8-9

// 返回数组索引迭代器，包含没有值的索引
testArray.keys()

// 返回数组中最后一个和提供值严格相等元素的索引，从后往前找，第二个参数提供开始索引（包含该索引）
testArray.lastIndexOf('0', 9) // -1

// 对数组的每一项进行函数操作，返回一个新数组
testArray.map(function (value, index, arr) {
    return value + this.a
}, { a: 1 })

// 创建一个由 of 的参数组成的数组
Array.of(1,2,3,4) // [1,2,3,4]

// 删除数组的最后一个元素，并返回这个元素
testArray.pop() // 9

// 在数组末尾添加元素,返回数组新长度
testArray.push(10,11) // 12

// 升序对数组依次执行函数
// acc初始值为数组第一个元素（此时将跳过index=0的元素，从index=1开始执行函数）或reduce第二个参数
testArray.reduce((acc,value,index,arr)=>{
    return acc+value
},0)

// 和reduce 相对，降序执行，无其他差距
testArray.reduceRight((acc,value,index,arr)=>{
    return acc+value
},0)

// 颠倒数组元素位置，改变原数组，返回元素颠倒后的原数组
testArray.reverse()

// 删除数组第一个元素，返回数组的新长度
testArray.shift()

// 在数组中取出索引为start~end-1的元素，作为新的数组返回，
// 不改变原数组
testArray.slice(0,2)

// 测试是否有元素符合函数条件
// 第二个参数指定函数this指向
// 空数组返回false
testArray.some((value,index,arr)=>{
    return value>0
})

// 按函数返回值和0的大小关系进行排序
// 未提供函数按元素的utf-16编码排序
testArray.sort()
testArray.sort((e1,e2)=>{
    return e1>e2
})

// 从数组 索引start开始删除count 个元素，然后将新的元素依次插入到start和start之后的位置
// 返回删除元素组成的数组
// 改变了原数组
testArray.splice(7,1,1,2)

// 将新元素添加到数组头部
// 第一个参数在数组中的索引为0
// 第二个参数在数组中的索引为1
// ...依次类推
// 改变原数组
// 返回数组新长度
testArray.unshift()