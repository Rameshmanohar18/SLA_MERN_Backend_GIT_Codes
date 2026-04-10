import http from 'http'


// console.log(http);

const app = http.createServer()


app.listen(3000,()=>{
    console.log('Server Running Successfully http://loclahost:3000');
    
})