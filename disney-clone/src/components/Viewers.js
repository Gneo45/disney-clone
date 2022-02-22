import React from 'react'
import styled from 'styled-components'

function Viewers() {
  return (
    <Container>
      <Wrap>
        <img src="/images/viewers-disney.png" />
        <img alt="" className="disney" src="https://prod-ripcut-delivery.disney-plus.net/v1/rawFiles/disney/RAW_C061B00E543326DA345FBF996B4D3D76422B58A49FDEE9AD9A2664618619A8F9" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-pixar.png" />
        <img alt="" className="disney"src="https://prod-ripcut-delivery.disney-plus.net/v1/rawFiles/disney/RAW_92FA84DF0F5D951171B41E5947716ADA382A15AE5DA37869E9D592D043F49316" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-marvel.png" />
        <img alt="" className="disney"src="https://prod-ripcut-delivery.disney-plus.net/v1/rawFiles/disney/RAW_B8F3C4DDB037CD1840A53BDFA0AA0504E9FDDE7781D62D28230D5C74F2B06624" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-starwars.png" />
        <img alt="" className="disney"src="https://prod-ripcut-delivery.disney-plus.net/v1/rawFiles/disney/RAW_59F432D7A600A8F1CE36AE4D0B96570AC7C8277A0E8855BC06FABBAE090E6577" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-national.png" />
        <img alt="" className="disney"src="https://prod-ripcut-delivery.disney-plus.net/v1/rawFiles/disney/RAW_16793CC7E2AF7B8687B0DD00673503CBC14CB2C801952D62B4551B6866073650" />
      </Wrap>

    </Container>
  )
}

export default Viewers

const Container = styled.div`
margin-top: 30px;
display: grid;
padding: 30px 0 26px;
grid-gap: 25px;
grid-template-columns: repeat(5, minmax(0, 1fr));
`

const Wrap = styled.div`
position: relative;
cursor: pointer;
border: 3px solid rgba(249, 249, 249, 0.1);
border-radius: 10px;
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
rgb(0 0 0 / 73%) 0px 16px 10px -10px;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  
 
}

.disney{
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 500ms ease-in-out;
  visibility: hidden;
}




&:hover {
  box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
rgb(0 0 0 / 72%) 0px 30px 22px -10px;
  transform: scale(1.05);
  border-color: rgba(249, 249, 249, 0.8);
  .disney{
    position: absolute;
  
  top: 0;
  z-index: -1;
  opacity: 1;
  visibility: visible;
  }
}
`