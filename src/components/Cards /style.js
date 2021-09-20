import styled from "styled-components"



export const Card = styled.div`
   display:flex;
   align-items:center;
   justify-content:center;
   padding: 10px;
   width: 95%;
   max-width: 450px;
   height: 120px;
   background: #40407a;
   border-radius: 8px;
   margin: 10px;
   box-shadow: 0px 1.5px 5px #d1ccc0;

   :hover {
      opacity: 0.9;
      cursor: pointer;
   }


   img {
       width: 105px;
       height: 110px;
   }
   div {
       display: flex;
       flex-direction: column;
       text-align: justify;
       margin: 15px;
   }
   span strong {
       text-align: center;
       border-radius: 1rem;
       display:block;
       color: #f7f1e3;
       padding: 5px;
       background: #ff793f;
       width: 90%;
       max-width: 550px;
       box-shadow: 0px 1.5px 3px #f7f1e3;
       margin: 10px
   }

   span {
        color:#aaa69d;
   }


`