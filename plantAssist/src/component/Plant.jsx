import React from 'react';
import { Link } from 'react-router-dom';

function Plant(props) {
  return (
    <>
      <li className='plant__item'>
        <Link className='plant__item__link' to={props.path}>
          <figure className='plant__item__pic-wrap' data-category={props.label}>
            <img
              className='plant__item__img'
              alt='Plant Image'
              src={props.src}
            />
          </figure>
          <div className='plant__item__info'>
            <h5 className='plant__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default Plant;