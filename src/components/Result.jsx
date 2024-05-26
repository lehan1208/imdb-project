'use client'
import React from 'react'

export default function Result({result}) {
  console.log("🚀 ~ Result ~ result:", result)
  return (
    <div>{result.map(film => (
        <p key={film.id}>
            {film.original_title}
        </p>
    ))}</div>
  )
}
