import React, { useState } from 'react'
import styled from 'styled-components'
import Send from './send'
import { coins } from '../../static/coins'
import CoinSelector from './coinSelector'
import { TailSpin } from  'react-loader-spinner'

const TransferModal = ({
    thirdWebTokens, 
    walletAddress
}) => {
    const [action, setAction] = useState('send')
    const [selectedToken, setSelectedToken] = useState(coins[0])

    const selectedButtonStyle = {
        color: "#f6da00"
    }
    const defaultButtonStyle = {
        border: '1px solid #282b2f'
    }
    const selectedModal = () => {
        if(action == "send"){
            return <Send
            selectedToken={selectedToken}
            setAction={setAction}
            thirdWebTokens={thirdWebTokens}
            walletAddress={walletAddress}
            />
        }
        else if (action == "sending") {
            return (<div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '1.5rem',
                flexDirection: 'column',
            }}>
                        <h4 style={{margin: '25px'}}>Transferring...</h4>
                        <TailSpin color="#f6da00" height={40} width={40} />
                        
                    </div>
            )
        }
        else if (action == "sent") {
            return (
                <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '2rem',
                    fontWeight: '600',
                    color: '#27ad75',
                    }}
                >
                    Transfer complete
                </div>
                
            )
        }
        else if (action == "receive") {
            return (
                <div
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: '2rem',
                  fontWeight: '600',
                  color: '#27ad75',
                }}
              >
                Transfer complete
              </div>
            )
        }
        else if (action == "select") {
            return <CoinSelector
            setAction={setAction}
            selectedToken={selectedToken}
            setSelectedToken={setSelectedToken}
            walletAddress={walletAddress}
            coins={coins}
            />
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