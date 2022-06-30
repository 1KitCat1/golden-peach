import styled from "styled-components"
import Modal from 'react-modal'
import TransferModal from './modal/transfer'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'

Modal.setAppElement('#__next')

const Header = ({walletAddress, connectWallet, thirdWebTokens}) => {
  const router = useRouter()

  const customStyles = {
    content: {
      top: '50%',
      bottom: 'auto',
      left: '50%',
      right: 'auto',      
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#1a1a1a',
      padding: 0,
      border: 'none',
    },
    overlay: {
      backgroundColor: 'rgba(26, 26, 26, 0.7)',
    },
  }

    return (
        <Wrapper>
            <Head>
              <title>Golden Peach</title>
            </Head>
            <Title>Assets</Title>
            <FlexContainer>
                <WalletLink title={walletAddress}>
                  <WalletLinkTitle>Wallet Connected</WalletLinkTitle>
                  <WalletAddress>{walletAddress.slice(0, 7)}...{walletAddress.slice(35)}</WalletAddress>
                </WalletLink>
                <Link href={{query: {transfer: 1, page: router.query.page}}}>
                  <Button style={{backgroundColor: '#f6da00', color: '#000'}}>Send | Receive</Button>
                </Link>
                <Link href={{query: {transfer: 1, page: router.query.page}}}>
                  <Button>Buy | Sell</Button>
                </Link>
            </FlexContainer>
            <Modal
            isOpen={!!router.query.transfer}
            onRequestClose={() => router.push('/')}
            style={customStyles}
            >
              <TransferModal 
              thirdWebTokens={thirdWebTokens}
              walletAddress={walletAddress}
              />
            </Modal>
        </Wrapper>
        )
}
export default Header

const Wrapper = styled.div`
  width: calc(100%);
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #282b2f;
  background-color: #0a0b0d;
  display: flex;
  align-items: center;
`

const Button = styled.div`
  border: 1px solid #f6da00;
  padding: 0.5rem;
  font-size: 1.3rem;
  font-weight: 500;
  border-radius: 0.4rem;
  margin-right: 1rem;
  color: #f6da00;
  &:hover {
    cursor: pointer;
  }
`

const FlexContainer = styled.div`
    display: flex;
`
const Title = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
  color: white;
  flex: 1;
`

const WalletLink = styled.div`
  font-size: 0.8rem;
  border: 1px solid #282b2f;
  border-radius: 50rem;
  font-size: 1.2rem;
  margin-right: 1rem;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

const WalletLinkTitle = styled.div`
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
  color: #27ad75;
  font-weight: 600;
`
const WalletAddress = styled.div`
  font-size: 0.8rem;
`