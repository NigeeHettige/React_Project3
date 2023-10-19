import styled from "styled-components";

const StartGame = ({toggle}) => {
  return (
    <Container>
       <div>
        <img src="./images/dices.png"></img>
       </div>
       <div className="content">
            <h1>Dice Game</h1>
            <Button onClick={toggle}>
                Play Now
            </Button>
       </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
    max-width: 1180px;
    display: flex;
    margin: 0 auto;
    height: 100vh;
    align-items: center;

    .content{
        h1{
            font-size: 96px;
            white-space: nowrap;
        }
    }

`;


const Button = styled.button`
    
    padding: 10px 10px;
    min-width: 228px;
    height: 44px;
    background-color: black;
    border-radius: 5px;
    color: white;
    font-size: 16px;
    border: 1px solid transparent;
    cursor: pointer;

    &:hover{
        background-color: white;
        border: 1px solid black;
        color: black;
        transition: .3s background ease-in;
    }

`;