import React from 'react'
import './dock.scss'

const Dock = ({windowsState, setWindowsState}) => {
  return (
    <footer className='dock'>
        <div 
        onClick={ () => { setWindowsState (state => ({ ...state, note: true})) }}
        className='icon note'><img src="../public/note.svg" alt="" /></div>

        <div 
        onClick={ () => {window.open("https://calendar.google.com", "_blank")}}
        className='icon calender'><img src="../public/calender.svg" alt="" /></div>

        <div 
        onClick={ () => { setWindowsState (state => ({ ...state, github: true})) }}
        className='icon github'><img src="../public/github.svg" alt="" /></div>

        <div 
        onClick={ () => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=08paulsomnath@gmail.com", "_blank")}
        className='icon mail'><img src="../public/mail.svg" alt="" /></div>


        <div 
        onClick={ () => { setWindowsState (state => ({ ...state, spotify: true})) }}
        className='icon spotify'><img src="../public/spotify.svg" alt="" /></div>


        <div 
        onClick={ () => { window.open("https://www.linkedin.com/in/somnath-paul-0a453322a/", "_blank") }}
        className='icon link'><img src="../public/link.svg" alt="" /></div>


        <div 
        onClick={ () => { setWindowsState (state => ({ ...state, cli: true})) }}
        className='icon cli'><img src="../public/cli.svg" alt="" /></div>

        <div 
        onClick={ () => { setWindowsState (state => ({ ...state, resume: true})) }}
        className='icon pdf'><img src="../public/pdf.svg" alt="" /></div>
    </footer>
  )
}

export default Dock
