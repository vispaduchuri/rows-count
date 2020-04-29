import React ,{useEffect,useState}from 'react';


const Child = ({i})=>{

const [helper, setHelper]=useState(i)

useEffect(()=>{
if(i%2 === 0){
  setHelper([i,i])
}else if(i == 5){
  setHelper(0)
}
else{
  setHelper([i*4,i*5])
}
},[])


if(Array.isArray(helper)){
return (
  <>
  {helper.map((i,index)=>(
    <>
    <p>-----</p>
    <h4>{i}</h4>
    <p>-----</p>
    </>
  ))}

  </>
)
}
else{
  return <></>
}


}

export default Child