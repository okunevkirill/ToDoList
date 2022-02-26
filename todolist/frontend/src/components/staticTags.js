/**
 * Модуль работы со статичными тегами HTML верстки
 */

import React from 'react'
import './apiTodolist.css'


const TopHeading = () => {
  return(
      <div className="navbar-static-top">
          Здесь будет меню
      </div>
  )
}


const Footer = () => {
    return (
        <div className="footer">
            ok_kir &copy; 2022
        </div>
    )
}

export {TopHeading, Footer};