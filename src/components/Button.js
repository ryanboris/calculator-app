/** @jsx jsx */
// eslint-disable-next-line
import React from 'react'
import { jsx } from '@emotion/core'
import css from '@emotion/css/macro'

const digitButton = css`
  width: 100px;
  height: 90px;
  color: RGBA(37, 42, 52, 1);
  background: RGBA(234, 234, 234, 1);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 3rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-content: center;
  padding-top: 20px;
  border-radius: 20px;
`

const operationButton = css`
  width: 100px;
  height: 90px;
  color: RGBA(255, 45, 99, 1);
  background: RGBA(37, 42, 52, 1);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 3rem;
  font-weight: 100;
  display: flex;
  justify-content: center;
  align-content: center;
  padding-top: 20px;
  border-radius: 20px;
`

const clearOrZeroButton = css`
  width: 350px;
  height: 90px;
  color: RGBA(37, 42, 52, 1);
  background: RGBA(234, 234, 234, 1);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 3rem;
  font-weight: 100;
  display: flex;
  justify-content: center;
  align-content: center;
  padding-top: 15px;
  border-radius: 20px;
`
export default function Button({ digit, operation, clearOrZero }) {
  return (
    <>
      {digit && <div css={digitButton}>{digit}</div>}{' '}
      {operation && <div css={operationButton}>{operation}</div>}{' '}
      {clearOrZero && <div css={clearOrZeroButton}>{clearOrZero}</div>}
    </>
  )
}
