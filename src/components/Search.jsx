//JSON Placeholderを用いたデータ形成＋検索
import React, {useState, useEffect, useRef} from 'react'

export const Search = () => {
  const [users,setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState([])
  const ref = useRef();

  const handleSearch = () => {
    //フィルタリング(小文字化)＋入力した文字を含むのだけ参照
    setSearchQuery(
      users.filter((user)=> user.name.toLowerCase().includes(ref.current.value))
    )
  }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {setUsers(data),setSearchQuery(data)});
  }, []);

  return (
    <div>
      <div className="search-main">
        <h4>検索アプリ</h4>
        <input type="text" ref={ref} onChange={(event)=> handleSearch(event)} />
        <div className="search-content">
          {searchQuery.map((user)=>(
            <div className="search-box" key={user.id}>
            <h3>{user.name}</h3>
            <hr />
            <p>{user.email}</p>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}
