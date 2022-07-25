import React from 'react'
import MainHeader from './MainHeader'

export default function Layout(props:{
  children: React.ReactNode
}) {
  return (
    <>
      <MainHeader />
      <main>
        {props.children}
      </main>
    </>
  )
}
