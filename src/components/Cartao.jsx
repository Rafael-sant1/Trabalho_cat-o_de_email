import React from "react";
import './Cartao.css';
import Logo1 from "../assets/Pizzaria gut.png"
import Logo2 from "../assets/insta.png"
import Logo3 from "../assets/linked.png"
import Logo4 from "../assets/wat.png"

function Cartao(){
    return(
        <>
            <header></header>
            <img src={Logo1} alt="" className="pizza" />
             
            <p>Pizzas quentinhas e saborosas de domingo a domingo!</p>
            <a href="https://www.instagram.com/pizzahutbrasil/" target="_blank">
                <img src={Logo2} alt="" className="Botao" />
            </a>
            <a href="https://www.linkedin.com/company/pizza-hut/" target="_blank">
                <img src={Logo3} alt="" className="Botao"/>
            </a>
            <a href="https://wa.me/5599651258489?text=Qual%20pizza%20vc%20deseja%3F" target="_blank">
                <img src={Logo4} alt="" className="Botao" />
            </a>
        </>
    )

};
export default Cartao;  