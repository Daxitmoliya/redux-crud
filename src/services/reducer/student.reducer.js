const initialState = {
    students: [],
    student: null,
    data: null,
    loading: false,
    error: null,
}

export const stdreducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATESTD':
            localStorage.setItem('stuuuu', JSON.stringify([...state.students, action.payload]));
            return {
                ...state,
                students: [...state.students, action.payload],
            };

        case 'SINGLEDATA':
            return {
                ...state,
                student: action.payload,
            };

        case 'UPDATESTD':
            const updatedStudents = state.students.map((std) =>
                std.id === action.payload.id ? { ...std, ...action.payload.updatedData } : std
            );
            localStorage.setItem('stuuuu', JSON.stringify(updatedStudents));
            return {
                ...state,
                students: updatedStudents,
            };

        case 'DELETESTD':
            const filteredStudents = state.students.filter((std) => std.id !== action.payload);
            localStorage.setItem('stuuuu', JSON.stringify(filteredStudents));
            return {
                ...state,
                students: filteredStudents,
            };

        case 'ADDREQUEST':
            return{
                ...state,
                loading: true,
                error: null,
            }
        
        case 'ADDSUCCESS':
            return{
                ...state,
                loading: false,
                data: action.payload,
            }

            case 'ADDERROR':
                return {
                  ...state,
                  loading: false,
                  error: action.payload,
               };

        default:
            return state;
    }
};