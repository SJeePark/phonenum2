import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ContactItem from './ContactItem'
import SearchBox from './SearchBox'

const ContactList = () => {
  const {contactList, search} = useSelector(state => state)
  const [filteredList, setFilteredList] = useState([]);
  const [searchPerformed, setSearchPerformed] = useState(false); 
  //웹 처음 시작할 때는 ITEM이 없기 때문에 SEARCH가 존재하지 않는다는 값이 뜨면 안됨
  //search 동작을 boolean으로 줘서 찾기 버튼을 실행했을 때부터 출력

  useEffect(() => {
    if (search !== "") {
      const list = contactList.filter((item) => 
        item.name.includes(search) || item.phoneNumber.includes(search)); //filter: filter 안에 조건을 입력하여 조건에 맞는 값만 출력하도록 하는 함수
      //만약 contactList 값에 search가 있다면, 해당하는 값을 도출하여 list에 입력
      setFilteredList(list);    //list에 입력한 값을 filteredList에 대입
      setSearchPerformed(true)  
    } else {
      setFilteredList(contactList);
      setSearchPerformed(false);
    }
  }, [search, contactList]);

  return (
    <div>
      <SearchBox setFilteredList={setFilteredList}></SearchBox>
      {searchPerformed && filteredList.length === 0 ? ( // 연락처가 없을 때 메시지 표시
        <div className='noUser'>존재하지 않는 연락처입니다. </div>
      ) : (
        filteredList.map((item) => (
          <ContactItem key={item.name} item={item} />
        ))
      )}
    </div>
  )
}

export default ContactList
  