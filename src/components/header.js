import React from 'react'
// import { Input, Space } from 'antd';
// const { Search } = Input;

export const Header = () => {
  // const onSearch = (value, _e, info) => console.log(info?.source, value);


  return (
    <div className='header-container'>
      <a href='/'>Anasayfa</a>
      
      <div className='header-search'>
        <a href='/ekip'>Ekip Üyeleri</a>
        {/* <Space direction="vertical">
          <Search
            placeholder="Ara"
            onSearch={onSearch}
            style={{
              width: 200,
            }}
          />
        </Space> */}
      </div>
    </div>
  )
}
