import React from 'react'
import styled from 'styled-components'

const ForYou = ({walletAddress}) => {

    return (
        <Wrapper>
          <p>We are convinced that after ten years, the financial system of the Internet, that is, Internet commerce, will become the largest financial system in the world. And the cryptocurrency will form the basis of its functioning. </p>
          <p>Our team is working tirelessly, relentlessly accelerating the adoption of cryptocurrencies and opening doors to the future of finance. We are tireless and passionate about what we do, and we believe that a small team of world-class dreamers can create products that empower customers and take businesses to new heights.</p>
          <p>Ⓒ 2022 Golden Peach. All Rights Reserved</p>
        </Wrapper>
    )
}

export default ForYou

const Wrapper = styled.div`
    display: flex;
    padding: 50px;
    color: gainsboro;
    flex-direction: column;
    max-height: calc(100vh - 64px);
    overflow: hidden;
    & div {
        border-radius: 0.4rem;
    }
`