import React, { useState, useEffect } from 'react'
import { FormControl, Input, Button } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import axios from 'axios'
import '../SearchComponent/styles.css'
import UserCard from '../CardComponent/UserCard'
import NoDataComponent from '../NoDataComponent/NoDataComponent'

const Search = () => {

  const [value, setValue] = useState('')
  const [data, setData] = useState([])
  const [error, setError] = useState(false)
  const [showError, setShowError] = useState(false)

  const apiURL = 'http://localhost:3010/users/'

  const handleChange = (e) => {
    let valueToLowerCase = e.target.value.toLowerCase()
    setValue(valueToLowerCase)

  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  }

  useEffect(() => {
    if (error === true) {
      setShowError(true)
      setData([])
    }
  }, [error])



  const handleSubmit = () => {
    axios.get(apiURL + value).then((res => {
      setData(res.data.json)
      if (res.data.json.message) {
        setData([])
        setError(true)
      }
    })).catch((e) => {
      console.log(e)
    })
    setValue('')
    setShowError(false)
    setError(false)
  }

  return (
    <>
      <div className='container'>
        <FormControl className="form-control" >
          <Input id="my-input" aria-describedby="username" placeholder='Search a Github User' fullWidth value={value} onChange={handleChange} onKeyPress={handleKeyPress} />
          <Button onClick={handleSubmit} endIcon={<SendIcon />}>Search </Button>
          {showError == true ? <NoDataComponent /> : ''}
          {data.length === 0 ? '' : <UserCard
            img={data.avatar_url}
            name={data.name}
            userName={data.login}
            link={data.html_url}
            repo={data.public_repos}
            followers={data.followers}
            following={data.following}
            bio={data.bio}
          />}
        </FormControl>
      </div>
    </>
  )
}

export default Search;