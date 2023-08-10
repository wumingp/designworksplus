new Promise(()=>{
        setTimeout(()=>{
            console.log(2)
        },0)
        console.log(1)
}
).then().then(console.log(3))
