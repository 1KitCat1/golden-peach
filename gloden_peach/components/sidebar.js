import { useState } from 'react'
import styled from 'styled-components'
import PeachLogo from '../crypto_assets/peach1.png'
import Image from 'next/image'
import Link from 'next/link';

import { navItems } from '../static/navItems'

const Sidebar = (walletAddress) => {
  const [activeIcon, setActiveIcon] = useState(navItems[0].title)

  return (
    <Wrapper>
      <LogoContainer>
        <Logo>
          <Image src={PeachLogo} alt='Golden Peach Logo' />
        </Logo>
      </LogoContainer>
      <NavItemsContainer>
        {navItems.map(item => (
          <Link href={{
            pathname: item.link,
            query: walletAddress,
            }}>
            <NavItem key={item.title} onClick={() => setActiveIcon(item.title)}>
              <NavIcon style={{ color: item.title === activeIcon && '#f6da00' }}>
                {item.icon}
              </NavIcon>
              <NavTitle>{item.title}</NavTitle>
            </NavItem>
          </Link>
        ))}
      </NavItemsContainer>
    </Wrapper>
  )
}

export default Sidebar

const Wrapper = styled.div`
  height: calc(100vh);
  border-right: 1px solid #282b2f;
  width: calc(22rem - 16px - 16px);
  /* TRouBLe */
  padding: 0 1rem;
`
const LogoContainer = styled.div`
  /* TRouBLe */
  margin: 1.5rem 0;
`

const Logo = styled.div`
  width: 44%;
  object-fit: contain;
  margin-left: 1.5rem;
`

const NavItemsContainer = styled.div`
  margin-top: 3rem;

  &:hover {
    cursor: pointer;
  }
`

const NavItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  font-weight: 500;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
  height: 4rem;

  &:hover {
    background-color: #141519;
  }
`

const NavIcon = styled.div`
  background-color: #141519;
  padding: 0.7rem;
  border-radius: 50%;
  margin: 0 1rem;
  display: grid;
  place-items: center;
`

const NavTitle = styled.div``