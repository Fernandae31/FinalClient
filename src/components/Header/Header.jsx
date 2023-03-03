import React from 'react';


export default function Header() {
  return (
    <div>
      <header>
        <div className='Menu'>
          <box-icon name='menu' ></box-icon>
        </div>
        <a href='#'> 
          <div className="logo">
          
             <div className='logo'>
                <img src="images/logo.png" alt="logo" width="200"/>

             </div> 
        

          </div>


        </a>
        <ul>
          <li>

          <a href='#'>Inicio</a>
          </li>
          <li>
            <a href='#'> Productos</a>
          </li>
        </ul>

        <div className='cart'>
          <box-icon name='cart'></box-icon>
          <span className='item__total'>0</span>
        </div>
      </header>
    </div>
  )
}
