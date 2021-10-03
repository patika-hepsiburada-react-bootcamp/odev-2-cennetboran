/*
  For displaying man figure by how much errors made
*/

import React from 'react'
import { parts } from '../helpers/hangman'

const Figure = ({ wrongLetters }) => {
  const errors = wrongLetters.length

  return (
    <svg height="250" width="200" className="figure-container">
      {/* <!-- Rod --> */}
      {
        errors === 0 &&
        parts.map((x,i) => {
          if(i < 3){
            return x
          }
        })
      }

      {/*<!-- Rope --> */}
      {errors === 1 &&
        parts.map((x,i) => {
          if(i < 5){
            return x
          }
        })
      }
      {/* <!-- Head --> */}
      {errors === 2 &&
        parts.map((x,i) => {
          if(i < 7){
            return x
          }
        })
      }
      {/* <!-- Body --> */}
      {errors === 3 &&
        parts.map((x,i) => {
          if(i < 8){
            return x
          }
        })
      }
      {/* <!-- Arms --> */}
      {errors === 4 &&
        parts.map((x,i) => {
          if(i < 10){
            return x
          }
        })
      }
      {/* <!-- Legs --> */ }
      {errors > 4 &&
        parts.map((x) => {
            return x
        })
        
      }
    </svg>
  )
}

export default Figure
