'use client'
import React from 'react'

export default function Result({result}) {
  return (
    <div>{result.map(film => (
        <p key={film.id}>
            {film.original_title}
        </p>
    ))}</div>
  )
}
