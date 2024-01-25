const getdata =()=>{
    const data = JSON.parse(localStorage.getItem('StudentData'));

    console.log("get",data);

    if(data){
        return data;
    }
    else{
        return []
    }
}
export default getdata;