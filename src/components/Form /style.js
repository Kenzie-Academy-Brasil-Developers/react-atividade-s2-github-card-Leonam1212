import styled from "styled-components"

export const ContainerForm = styled.form`
 width: 70%;
 display: flex;
 flex-direction: column;
 text-align: center;
 
 


 div {
    
    position: relative;
    margin-bottom: 2rem;
 }

 div h1 {
     color: #2C3A47;
     margin-bottom:40px;
 }

 div input {
    width: 100%;
    height: 45px;
    font-size: 13px;
    border-radius: 1rem ;
    outline: none;
    background: #dff9fb;
    border: 1px solid #ccc;
    padding-left: 1px;
    box-shadow: 1px 3px 3px #30336b;
 }
 div span {
    position: absolute;
    top: 122px;
    left: 8px;
    pointer-events: none;
    transition: 0.5s;
    opacity: 0.5;
    font-size:12px;
 }

 div input:focus ~ span,
 div input:valid ~ span {
     transform: translateY(-40px);
     font-size:14px;
     opacity: 1;
     color: #30336b;
     font-weight: bold;
 }


 button {
     padding: 15px;
     width: 150px;
     border-radius: 8px;
     border: none;
     cursor: pointer;
     box-shadow: 1px 3px 3px #30336b;


 }
 button:hover {
     opacity: 0.7
 }


`