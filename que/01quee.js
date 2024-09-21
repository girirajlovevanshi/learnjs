

const inter = setInterval(() => {
    console.log("hello");
    
}, 1000);

const out = setTimeout(()=>{
    clearInterval(inter)
},5000)