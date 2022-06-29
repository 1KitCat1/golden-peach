import React, { useState } from 'react'
import styled from 'styled-components'
import Send from './send'


const TransferModal = () => {
    const [action, setAction] = useState('send')

    const selectedButtonStyle = {
        color: "#f6da00"
    }
    const defaultButtonStyle = {
        border: '1px solid #282b2f'
    }
    const selectedModal = () => {
        if(action == "send"){
            return <Send/>
        }
    }
    return (
        <Wrapper>
            <FlexContainer>
                <ButtonSelector 
                    style={ action === 'send' ? selectedButtonStyle : defaultButtonStyle}
                    onClick={() => setAction('send')}
                >
                    <p>Send</p>
                </ButtonSelector>

                <ButtonSelector 
                    style={ action === 'receive' ? selectedButtonStyle : defaultButtonStyle}
                    onClick={() => setAction('receive')}
                >
                    <p>Receive</p>
                </ButtonSelector>
            </FlexContainer>
            <ModalWindow>
                {selectedModal()}
            </ModalWindow>
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
  font-size: 1.4rem;
  font-weight: 600;
  &:hover {
    cursor: pointer;
    background-color: #222325;
  }
`
const ModalWindow = styled.div`
  flex: 1;
  padding: 1rem;
`