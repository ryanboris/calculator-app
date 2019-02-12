/** @jsx jsx */
// eslint-disable-next-line
import React, { useReducer } from 'react'
import css from '@emotion/css'
import { jsx } from '@emotion/core'
import Reducer from './reducer'

const displayStyle = css`
  width: 400px;
  height: 120px;
  color: RGBA(255, 45, 99, 1);
  background: RGBA(37, 42, 52, 1);
  font-size: 5rem;
  font-weight: 100;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  border-bottom: 10px solid darkturquoise;
  border-radius: 10px;

  span {
    display: inline-block;
    margin-right: 30px;
    margin-bottom: 10px;
  }
`
export default function Display({ display }) {
  const [state] = useReducer(Reducer, display)
  return (
    <div css={displayStyle}>
      <span>{state.display}</span>
    </div>
  )
}
