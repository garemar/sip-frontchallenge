import React, { useState } from 'react'
import { FormControl, Input, Button } from '@mui/material'
import axios from 'axios'
import '../SearchComponent/styles.css'
import UserCard from '../CardComponent/UserCard'
import { BsGithub } from 'react-icons/bs'


const Search = () => {

  const [user, setUser] = useState('')
  const [data, setData] = useState([])
  const [error, setError] = useState([])

  const apiURL = 'https://api.github.com/users/'

  const inputHandler = (e) => {
    let userToLowerCase = e.target.value.toLowerCase()
    setUser(userToLowerCase)

  }


  const handleSubmit = (e) => {
    let error = 0
    e.preventDefault()
    axios.get(apiURL + user).then((res => {
      setData(res.data)
      console.log('RES DATA: ', res.data)
      setUser('')
    })).catch((error) => {
      setError(e)
    })
  }

  return (
    <>
      <div className='container'>
        <FormControl className="form-control" >
          <BsGithub />
          <Input id="my-input" aria-describedby="username" placeholder='Search a Github User' fullWidth onChange={inputHandler} />
          <Button onClick={handleSubmit} >Search</Button>
          {data.length === 0 ? '' : <UserCard
            img={data.avatar_url}
            name={data.name}
            userName={data.login}
            link={data.html_url}
            repos={data.public_repos}
            followers={data.followers}
            following={data.following}
            email={data.email}
            company={data.company}
          />}
        </FormControl>
      </div>
      <div className='main'></div>
    </>
  )

}

/*{
   data.length === 0 ? '' :<> <Card variant="outlined"> {data.login}</Card> 
   <img src={data.avatar_url} alt="Imagen usuario github"></img>
    <span>{data.name}</span></>
   }*/
export default Search;