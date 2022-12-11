import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HeaderAdmin from '../../components/HeaderAdmin'
import { Prizes } from './Prizes'
import { Raffles } from './Raffles'

export const Admin = () => {
  return (
    <>
      <HeaderAdmin />
      <Routes>
        <Route path='raffles' element={<Raffles />} />
        <Route path='prizes' element={<Prizes />} />
      </Routes>
    </>
  )
}
