export const getEven=(data)=>{
    console.log(data)
    let even=[]
   for (const key in data) {
    if(data[key].id%2==0){
        even.push(data[key])
    }
   }
   return even
}