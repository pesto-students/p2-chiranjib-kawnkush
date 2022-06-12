const customPromiseState = {
    PENDING: 'PENDING',
    RESOLVED: 'RESOLVED',
    REJECTED: 'REJECTED'
}

class customPromise {
    constructor(callback){
        this.customPromiseState = customPromiseState.PENDING
        this.resolve = this.resolve.bind(this);
        this.reject = this.reject.bind(this);
        this.catchFn = null;
        this.thenFn = null;
        callback(this.resolve, this.reject)
    }

    resolve(resolvedData){
        if(this.customPromiseState === customPromiseState.PENDING){
            this.thenFn && this.thenFn(resolvedData)
        }
        this.customPromiseState = customPromiseState.RESOLVED
    }

    reject(rejectedData){
        if (this.customPromiseState === customPromiseState.PENDING) {
            this.catchFn && this.catchFn(rejectedData)
        }
        this.customPromiseState = customPromiseState.REJECTED
       
    }

    thenF(thenFn) {
        this.thenFn = thenFn;
        return this
    }

    catchF(catchFn){
        this.catchFn = catchFn;
        return this
    }
}

const getNumber = () =>{
    return new customPromise((res,rej) => {
        const randomNum = parseInt(Math.random() * 100 , 10);
       
        setTimeout(() => {
            if (randomNum % 5 === 0) {
                rej(`Rejected with number :  ${randomNum}`)
            } else 
                res(`Resolved with number :  ${randomNum}`)
        }, randomNum * 10)
    })
}

getNumber()
    .thenF(val => console.log(val))
    .catchF(err => console.log(err));