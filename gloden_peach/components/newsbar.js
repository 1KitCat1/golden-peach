import styled from 'styled-components'

const News = () => {
  return (
    <Wrapper>
      <NewsBlock>
        <Title>Bitcoin drops 14%</Title>
        <Description>Bitcoin hitting its lowest level since December 2020</Description>
        <Placeholder />
        <Additional style={{ color: '#3773f5' }}><a target={'_blank'} href='https://www.cnbc.com/2022/06/13/bitcoin-btc-falls-as-market-focuses-on-celsius-issue-fed-rate-hike.html'>Read full article</a></Additional>
      </NewsBlock>

      <NewsBlock>
        <Title>NEAR Protocol</Title>
        <Description>Despite showing network growth, why is its token ‘NEAR’ the bottom</Description>
        <Placeholder />
        <Additional style={{ color: '#3773f5' }}><a target={'_blank'} href='https://ambcrypto.com/near-protocol-despite-showing-network-growth-why-is-its-token-near-the-bottom/'>Read full article</a></Additional>
      </NewsBlock>

      <NewsBlock>
        <Title>Mastercard and NFT</Title>
        <Description>Mastercard to Enable Direct NFT Payment Options</Description>
        <Placeholder />
        <Additional style={{ color: '#3773f5' }}><a target={'_blank'} href='https://cryptonews.com/news/mastercard-will-enable-direct-nft-payment-options-for-marketplace-operators.htm'>Read full article</a></Additional>
      </NewsBlock>
    </Wrapper>
  )
}

export default News

const Wrapper = styled.div`
  margin-top: 2rem;
  padding-right: 1rem;
`

const NewsBlock = styled.div`
  width: 21rem;
  height: 11rem;
  border: 1px solid #282b2f;
  margin-bottom: 1rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
`

const Title = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
  margin-bottom: 0.1rem;
`

const Description = styled.div`
  font-size: 1.1rem;
`

const Placeholder = styled.div`
  flex: 1;
`

const Additional = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > span {
    color: #8a919e !important;
    font-size: 1rem;
  }
`