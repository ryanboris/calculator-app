/** @jsx jsx */
// eslint-disable-next-line
import React, { useReducer } from 'react'
import Button from './Button'
import css from '@emotion/css'
import { jsx } from '@emotion/core'
import styled from '@emotion/styled/macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPlus,
  faMinus,
  faTimes,
  faDivide,
  faEquals
} from '@fortawesome/free-solid-svg-icons'
import Display from './Display'
import Reducer from './reducer'

const Div = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  div:first-of-type {
    order: 3;
  }
  div:nth-of-type(2) {
    order: 2;
  }

  div:nth-of-type(3) {
    order: 1;
  }

  div:nth-of-type(4) {
    order: 0;
  }
`
const DivTwo = styled.div`
  display: flex;
  flex-flow: row nowrap;
`
export default function DigitPadContainer({ display }) {
  // eslint-disable-next-line
  const initialState = { display: 0 }
  const [state, dispatch] = useReducer(Reducer, {
    display: initialState.display
  })
  return (
    <>
      <Display display={state.display} />
      <DivTwo>
        <Button clearOrZero="clear" />
        <Button operation={<FontAwesomeIcon icon={faDivide} />} />
      </DivTwo>
      <Div>
        <Button operation={<FontAwesomeIcon icon={faTimes} />} />
        <Button digit="9" />
        <Button digit="8" />
        <Button digit="7" />
      </Div>
      <Div>
        <Button operation={<FontAwesomeIcon icon={faMinus} />} />
        <Button digit="6" />
        <Button digit="5" />
        <Button digit="4" />
      </Div>
      <Div>
        <Button
          operation={<FontAwesomeIcon icon={faPlus} />}
          onClick={() => dispatch({ type: 'add', payload: state })}
        />
        <Button
          digit="3"
          onClick={e =>
            dispatch({
              type: 'updateDisplay',
              payload: '3'
            })
          }
        />
        <Button digit="2" />
        <Button digit="1" />
      </Div>
      <DivTwo
        css={css`
          display: flex;
          flex-flow: row-reverse nowrap;
          justify-content: flex-end;
        `}
      >
        <Button operation={<FontAwesomeIcon icon={faEquals} />} />
        <Button clearOrZero="0" />
      </DivTwo>
    </>
  )
}
