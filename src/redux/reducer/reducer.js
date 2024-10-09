let initialState = {
    contactList: [],
    search: ""
}

function reducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case "ADD_CONTACT": {
            const { name, phoneNumber } = payload;
            // 중복 체크
            const existingContact = state.contactList.find(item => 
                item.name === name || item.phoneNumber === phoneNumber
            );

            if (existingContact) {
                alert("동일한 연락처가 존재합니다."); // 중복 시 alert 표시
                return state; // 중복이 있을 경우 기존 상태 유지
            }

            return {
                ...state, 
                contactList: [
                    ...state.contactList, 
                    { name, phoneNumber }
                ]
            };
        }
        case "SEARCH_NAME":
            return { ...state, search: payload.search };
        default: 
            return { ...state };
    }
}

export default reducer;
