import React from 'react'
import styled from 'styled-components'

const TransferModal = () => {
    return (
        <Wrapper>
            <FlexContainer>
                <ButtonSelector>
                    <p>Send</p>
                </ButtonSelector>
                <ButtonSelector>
                    <p>Receive</p>
                </ButtonSelector>
            </FlexContainer>
        </Wrapper>
    )
}
export default TransferModal

const Wrapper = styled.div`
  height: 35rem;
  width: 27rem;
  color: white;
  border: 1px solid #282b2f;
  display: flex;
  flex-direction: column;
`
const FlexContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 5rem;
`
const ButtonSelector = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
  font-size: 1.2rem;
  font-weight: 600;
  &:hover {
    cursor: pointer;
    background-color: #222325;
  }
`