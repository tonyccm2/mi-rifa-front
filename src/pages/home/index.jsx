import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../../components/Header'
import { Raffles } from './Raffles'
import { Raffle } from './Raffle'

export const Home = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Raffles />} />
        <Route path="raffle">
          <Route path=":id_raffle" element={<Raffle />} />
        </Route>
      </Routes>
    </>
  )
}
