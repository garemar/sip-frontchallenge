import React from 'react';
import { Card } from '@mui/material';
import { BiLinkAlt } from 'react-icons/bi'
import { MdWork } from 'react-icons/md'

const UserCard = (props) => {
  return (
    <Card className="card">
      <section className='user-info'>
        <article>
          <img src={props.img} className='avatar' alt='User Avatar' />
          <h2>{props.name}</h2>
          <p>
            <a href={props.link}>
              @{props.userName}
            </a>
          </p>
        </article>
        <article>
          <div>
            <p>Repos</p>
            <span>{props.repos}</span>
          </div>
          <div>
            <p>Followers</p>
            <span>{props.followers}</span>
          </div>
          <div>
            <p>Following</p>
            <span>{props.following}</span>
          </div>
        </article>
        <article>
          <div>
            <BiLinkAlt />
            <p>{props.email ? props.email : 'Not Available'}</p>
          </div>
          <div>
            <MdWork />
            <p>{props.company ? props.company : 'Not Available'}</p>
          </div>
        </article>
        <div class="repos"></div>
      </section>
    </Card>
  )
}
export default UserCard;

/*{
   data.length === 0 ? '' :<> <Card variant="outlined"> {data.login}</Card>
   <img src={data.avatar_url} alt="Imagen usuario github"></img>
    <span>{data.name}</span></>
   }*/
