import React from 'react';
import { Card } from '@mui/material';

const UserCard = (props) => {
  return (
    <div className="card">
      <Card>
        <article className="card-info">
          <div>
            <img src={props.img} className='avatar' alt='User Avatar' />
          </div>
          <div className="card-name">
            <h2>{props.name}</h2>
            <p>
              <a className="user-name" href={props.link}>
                @{props.userName}
              </a>
            </p>
            <p>{props.bio}</p>
          </div>
        </article>
        <div className="user-info">
          <div className="card-text"><p> Repos </p> <span className="text-info">{props.repo} </span></div>
          <div className="card-text"><p> Followers </p><span className="text-info">{props.followers}</span></div>
          <div className="card-text"><p> Following </p><span className="text-info">{props.following}</span></div>
        </div>
      </Card>
    </div>
  )
}
export default UserCard;
