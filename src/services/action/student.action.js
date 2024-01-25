export const createStudent = (data) => {
    return {
        type: 'CREATESTD',
        payload: data
    }
}
export const singledata = (data) => {
    return {
        type: 'SINGLEDATA',
        payload: data,
    }
}

export const updateStudent = (id, updatedData) => {
    return {
        type: 'UPDATESTD',
        payload: { id, updatedData },
    };
};

export const deleteStudent = (id) => {
    return {
        type: 'DELETESTD',
        payload: id,
    };
};

export const Addrequest = () =>{
    return {
        type: 'ADDREQUEST'
    }
}

export const Addsucsesss = (data) =>{
    return {
        type : 'ADDSUCSESS',
        payload : data,
    }
}

export const addError = (error) => {
    return {
      type: 'ADDERROR',
      payload: error,
    };
  }
export const adddata = (maindata) =>{
    return(dispatch) =>{
        dispatch(Addrequest());

        setTimeout(() => {
        dispatch(Addsucsesss(maindata));
        }, 4000);
      }
}