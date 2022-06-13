import React from 'react'
import Portfolio from './portfolio'
import styled from 'styled-components'
import News from './newsbar'

const Main = () => {
    return (
        <Wrapper>
          <Portfolio/>
          <News/>
        </Wrapper>
    )
}

export default Main

const Wrapper = styled.div`
  display: flex;
  max-height: calc(100vh - 64px);
  overflow: hidden;
  overflow-y: scroll;
  :: -webkit-scrollbar {
    display: none;
  }
  & div {
    border-radius: 0.4rem;
  }
`