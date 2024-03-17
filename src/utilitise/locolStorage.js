 const getCartFromLT= ()=>{
  const localStoresData = localStorage.getItem('cart');
  if(localStoresData){
    const StoresDataConveart = JSON.parse(localStoresData);
    return StoresDataConveart;
  }
  return [];
}

const setDataOnArray = (id)=>{
  const array = getCartFromLT()
  array.push(id);
  console.log(array)
  seveDataOnLS(array)
}
const seveDataOnLS = (cart) =>{
  const data =JSON.stringify(cart);
  localStorage.setItem('cart',data)
}

export {setDataOnArray,getCartFromLT} 


// const setDataOnLocalStor = (cart)=>{
//   const convertDataToString = JSON.stringify(cart);
//   localStorage.setItem('cart',convertDataToString)
  
// }
// const addedData = (id)=>{
//   const getData = getCartFromLT();
//   console.log(getData)
//   getData.push(id);
//   setDataOnLocalStor(getData)
// }
// export {addedData};