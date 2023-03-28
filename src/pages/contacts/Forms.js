import styled from "styled-components";
import pizza from "../../assets/svg/pizza.svg"
import rodizio from './pizzaria-3.jpg'

export const Label = styled.label`
    font-family: 'Gabriela';
    font-size: calc(2rem + 0.7vw);
    color: #000000;
    position: relative;
    &::after{
        content: ' ';
        position: absolute;
        bottom: -38px;
        left: 2px;
        display: block;
        width: 28px;
        height: 32px;
        background-image: url(${pizza});
        background-size: cover;
    }
    @media screen and (max-width: 450px){
        font-size: calc(1.5rem + 0.7vw);
    }
    
`
export const Input = styled.input`
    background: #FFF8EA;
    border-width: 0px 0px 3px 2px;
    border-style: solid;
    border-color: #92232B;
    border-radius: 3px;
    height: 2.75rem;
    margin-bottom: 14px;
    padding-left: 30px;
    color: #64040B;
    font-weight: 500;
    font-family: 'IM FELL English';
    ::-webkit-input-placeholder{
        color: #BC8F8A;
        font-weight: 400;
    }
`
export const TextArea = styled.textarea`
    background: #FFF8EA;
    border-width: 0px 0px 3px 2px;
    border-style: solid;
    border-color: #92232B;
    border-radius: 3px;
    height: 10rem;
    padding-left: 30px;
    padding-top: 10px;
    color: #64040B;
    font-weight: 500;
    font-family: 'IM FELL English';
`
export const ContainerLabel = styled.div`
    display: flex;
    flex-direction: column;
`
export const Submit = styled.button`
    margin-top: 10px;
    border: none;
    border-radius: 5px;
    background-color: #64040B;
    color: #F9EEC9;
    font-family: 'Gabriela';
    font-size: calc(1.2rem + 1vw);
    padding: 5px 30px;
    &:disabled{
        background-color: #FFF8EA;
        color: #BC8F8A;
        position: relative;
        &::after{
            position: absolute;
            content: "";
            animation: loading 0.9s infinite;
            @keyframes loading {
                0%{
                    content: ".";
                } 
                50%{
                    content: "..";
                }
                100%{
                    content: "...";
                }
            }
        }
    }
`
export const ContainerImage = styled.div`
    width: 38%;
    height: 360px;
    background-image: url(${rodizio});
    background-size: cover;
    background-position: center;
    border-radius: 4px;
    align-self: center;
    @media screen and (max-width: 650px){
        display: none;
    }
`
export const Form = styled.form`
    width: 58%;
    @media screen and (max-width: 650px){
        width: 100%;
    }
`
export const Message = styled.span`
    margin: 10px 0px;
    color: green;
    font-weight: 600;
    &.error{
        color: red;
    }
`