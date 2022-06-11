import styled from "styled-components"


const Header = () => {
    return (
        <Wrapper>
            <Title>Assets</Title>
            <FlexContainer>
                <ButtonBlue>Buy | Sell</ButtonBlue>
                <Button>Send | Receive</Button>
            </FlexContainer>
        </Wrapper>
        
    )
}
export default Header

const Wrapper = styled.div`
  width: calc(100%);
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #282b2f;
  background-color: #1a1b1d;
  display: flex;
  align-items: center;
`

const Button = styled.div`
  border: 3px solid #282b2f;
  background-color: #262526;
  padding: 0.5rem;
  font-size: 1.1rem;
  font-weight: 500;
  border-radius: 0.4rem;
  margin-right: 1rem;
  color: white;
  &:hover {
    cursor: pointer;
  }
`

const ButtonBlue = styled.div`
  border: 1px solid #282b2f;
  padding: 0.5rem;
  font-size: 1.1rem;
  font-weight: 500;
  border-radius: 0.4rem;
  margin-right: 1rem;
  background-color: #3773f5;
  color: black;
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