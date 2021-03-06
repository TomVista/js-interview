const base={
    name:'tom',
    sayName(){
        this.name="tom"
        this.test='123'
        console.log(this.name)
    }
}

Function.prototype.customerCall=function(context,...argArray){
    const fun = Symbol()
    context[fun]=this
    const res =    context[fun](...argArray)
    delete context[fun]

    return res
}

base.sayName.customerCall({name:'jck'},[])

Function.prototype.customerBind= function(context,arg){
    const fun = this
    var res= function(){
        
        fun.customerCall(this instanceof res?this:context,arg)
    }
    return res
}

const test= base.sayName.customerBind({name:'jck'},[])

const value = new test()

function P(){
    this.name=123
} 
console.log(base.sayName.prototype) 
console.log(P.prototype)
console.log(P.bind({name:456}).prototype)