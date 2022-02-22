import React from "react";
import styled from "styled-components";
import { selectMovies } from "../features/movie/movieSlice"
import { useSelector } from "react-redux"

function Movies() {

const movies = useSelector(selectMovies);



  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
        <Wrap>
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/01902DF81C36F82CA368A6A7E7DA8684D1A60D863DFA530A369D599F29AF85E7/scale?width=1200&aspectRatio=1.78&format=jpeg" />
        </Wrap>
        <Wrap>
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/937F5A5C1A1392CD827CA218B465E78DD3C0A931372848A62755E1FAACDA7E32/scale?width=1200&aspectRatio=1.78&format=jpeg" />
        </Wrap>
        <Wrap>
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7A18CC75A614A7E31385A26F75353DA4800E328CCCF21D5A7BB9014D1D1A7E7F/scale?width=1200&aspectRatio=1.78&format=jpeg" />
        </Wrap>
        <Wrap>
          <img src="http://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2DAC6AADDB0878559D0B87D4F87227B398AC967A23CE8AB3B8FAFD82B8032572/scale?width=1200&aspectRatio=1.78&format=jpeg#width=1200&height=675" />
        </Wrap>
        <Wrap>
          <img src="http://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2DAC6AADDB0878559D0B87D4F87227B398AC967A23CE8AB3B8FAFD82B8032572/scale?width=1200&aspectRatio=1.78&format=jpeg#width=1200&height=675" />
        </Wrap>
        <Wrap>
          <img src="http://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2DAC6AADDB0878559D0B87D4F87227B398AC967A23CE8AB3B8FAFD82B8032572/scale?width=1200&aspectRatio=1.78&format=jpeg#width=1200&height=675" />
        </Wrap>
        <Wrap>
          <img src="http://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2DAC6AADDB0878559D0B87D4F87227B398AC967A23CE8AB3B8FAFD82B8032572/scale?width=1200&aspectRatio=1.78&format=jpeg#width=1200&height=675" />
        </Wrap>
        <Wrap>
          <img src="http://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2DAC6AADDB0878559D0B87D4F87227B398AC967A23CE8AB3B8FAFD82B8032572/scale?width=1200&aspectRatio=1.78&format=jpeg#width=1200&height=675" />
        </Wrap>
      </Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div``;

const Content = styled.div`
display: grid;
grid-gap: 25px;
grid-template-columns: repeat(4, minmax(0, 1fr));
`;


const Wrap = styled.div`
border-radius: 10px;
cursor: pointer;
overflow: hidden;
border: 3px solid rgba(249, 249, 249, 0.1);
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
rgb(0 0 0 / 73%) 0px 16px 10px -10px;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

&:hover{
    transform: scale(1.05);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
    rgb(0 0 0 / 72%) 0px 30px 22px -10px;
rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    border-color: rgba(249, 249, 249, 0.8);
}
`;
