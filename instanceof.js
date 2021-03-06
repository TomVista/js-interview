Object.prototype.instanceof = function (ob) {
    if (this.__proto__) {
        if (this.__proto__ === ob.prototype) {
            return true
        } else if (this.__proto__.__proto__) {
            return Object.prototype.instanceof.call(this.__proto__, ob)
        } else {
            return false
        }

    } else {
        throw new Error('do not has __proto__')
    }
}



console.log(Array.instanceof(Object)) 