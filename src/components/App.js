/** @jsx jsx */
// eslint-disable-next-line
import React from 'react'
import css from '@emotion/css'
import { jsx } from '@emotion/core'
import DigitPadContainer from './DigitPadContainer'

export default function App() {
  return (
    <DigitPadContainer
      css={css`
        display: flex;
        width: 500px;
      `}
    />
  )
}
