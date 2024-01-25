const utiles = () => {

    const data = JSON.parse(localStorage.getItem('StudentData'));


    if(data){
        return data;
    }
    else{
        return [];
    }

}

export default utiles;