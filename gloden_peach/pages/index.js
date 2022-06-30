import styled from 'styled-components'
import { useWeb3 } from '@3rdweb/hooks'
import Dashboard from './dashboard';
import Image from 'next/image'
import PeachLogo from '../crypto_assets/peach1.png'
import { useMetamask } from '@thirdweb-dev/react';

export default function Home() {
  const { address, connectWallet} = useWeb3();
  

  return (
    <WrapperDiv>
    {address ? (
      <Dashboard address={address} />
    ) : (
      <WalletConnect>
        <Logo>
          <Image src={PeachLogo} alt='Golden Peach Logo' />
        </Logo>
        <Button onClick={() => connectWallet('injected')}>
          Connect Wallet
        </Button>
        <Details>(Connect your Metamask wallet to authorize)</Details>
      </WalletConnect>
    )}
  </WrapperDiv>
  )
}

const WrapperDiv = styled.div`
  display: flex;
  height: 100vh;
  max-width: 100vw;
  background-color: #1a1b1d;
  color: white;
  display: grid;
  place-items: center;
  background-image: url('/bg.jpg');
  background-size:100% 100%;
`

const WalletConnect = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  align-items: center;
`

const Button = styled.div`
  /* flex: 0; */
  border: 1px solid #282b2f;
  padding: 0.8rem;
  margin-top: 50px;
  font-size: 1.3rem;
  font-weight: 500;
  border-radius: 0.4rem;
  background-color: #f6da00;
  color: #000;
  &:hover {
    cursor: pointer;
  }
`

const Details = styled.div`
  font-size: 1.8rem;
  text-align: center;
  margin-top: 1rem;
  font-weight: 600;
  color: #d3c8c5;
`

const Logo = styled.div`
  width: 300px;
  // margin: 50px 0;
`