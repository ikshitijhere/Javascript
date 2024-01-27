function Send(Limit){
    OTP = ''
    for(let i = 0;i<Limit;i++){
     OTP += Math.floor(Math.random()*10)
    }
    return OTP;
 }
 
 console.log(Send(3))