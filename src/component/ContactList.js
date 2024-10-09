import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ContactItem from './ContactItem'
import SearchBox from './SearchBox'

const ContactList = () => {
  const {contactList, search} = useSelector(state => state)
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    if (search !== "") {
      const list = contactList.filter((item) => 
        item.name.includes(search) || item.phoneNumber.includes(search)); //filter: filter 안에 조건을 입력하여 조건에 맞는 값만 출력하도록 하는 함수
      //만약 contactList 값에 search가 있다면, 해당하는 값을 도출하여 list에 입력
      setFilteredList(list);  //list에 입력한 값을 filteredList에 대입
    } else {
      setFilteredList(contactList)
    }
  }, [search, contactList]);

  return (
    <div>
      <SearchBox setFilteredList={setFilteredList}></SearchBox>
      {filteredList.length === 0 ? ( // 연락처가 없을 때 메시지 표시
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
  