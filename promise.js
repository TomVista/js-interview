function MyPromise(fun) {
    const that =this
    this.status = 'pending' // 'done' 'error'

    this.resovleAry = []
    this.rejectAry = []

    this.value = null
    this.error=null

    fun(resovle, reject)

    function resovle(res) {
        that.value=res
        that.status ='done'
        that.resovleAry.forEach(item=>{
            item(res)
        })
    }

    function reject(error) {
        that.error =error
        that.status='error'
        that.rejectAry.forEach(item=>{
            item(error)
        })
    }

    this.then=function(onDone,onError){

        return new MyPromise((resovle,reject)=>{
            that.resovleAry.push(()=>{
                resovle(onDone(that.value)) 
            })

            that.rejectAry.push(()=>{
                reject(onError(that.error))
            })
        })
    }
}

new MyPromise((res,rej)=>{
    setTimeout(()=>{
        console.log('done')
        res('done')
    },2000)
}).then((res)=>{
    console.log(res,'then res')
},(error)=>{
    console.log(error,'then rej')
})