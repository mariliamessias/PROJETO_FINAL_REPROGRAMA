import React, { Component } from 'react';
import Hug from '../Box/hug.gif'
import Blocos from '../Box/blocos.png'
import YouTube from 'react-youtube';
import ReactPlayer from 'react-player';
import Ansiedade from '../Box/ansiedade1.jpg';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import './Box.css';
import './Box.scss';

class Box extends Component{
  constructor(props) {
    super(props)
  }

  render(){

    return (
    <div className={this.props.className}>
      {(this.props.className==='transparent')? 
        <div className="conteudo">

         <section className="secao__1">
           <h1>Se você está aqui é porque conhece alguém que solta frases aleatórias como se obtivesse todo o conhecimento do mundo, "querendo ajudar":</h1>
           <p></p>
           <p>Se você convesar com ele(a) tudo se resolve, é coisa simples da idade, minha tia já passou por isso com o irmão dela.</p>
           <p>Mente vazia é oficina pro capeta, "bota" ele(a) pra trabalhar!</p>
           <p>É coisa da idade, todo mundo passa por isso, fica tranquilo (a) que já já passa!</p>
           <p>Ele(a) só quer ficar bonito(a) pros namoradinhos(as), acho ótimo isso, queria ter essa determinação!</p>
          </section>                    

       </div>

       : null
      }
      {(this.props.className==='red')? 
        <div className="conteudo">
         <section className="secao1_2">
         <Flippy
               
               flipOnHover={true} // default false
               flipOnClick={false} // default false
               flipDirection="horizontal" // horizontal or vertical
               ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
               // if you pass isFlipped prop component will be controlled component.
               // and other props, which will go to div
               style={{ width: '100%', height: '100%' }}   
             >
             <FrontSide className="FrontSide_2" >
             <img className ="ansiedade" src={Ansiedade} />

             </FrontSide>
             <BackSide className="BackSide_2">
              <h1>...</h1>
               <p>Você já parou e refletiu sobre o que sente, o que pensa e o que faz todos os dias?</p>
             </BackSide>
           </Flippy>
        
          </section>                    
        
         <section className="secao2_2">

          <h1>Essa pessoa precisa ler mais para entender que não é "frescura" e também não é "falta do que fazer".</h1>
           <p></p>
           <p>A depressão afeta 4,4% da população mundial e 5,8% dos brasileiros, segundo dados da OMS. Brasil é o país com maior prevalência de ansiedade no mundo: 9,3%.</p>
           <p>Ainda segundo a OMS, o número de pessoas com transtornos de ansiedade era de 264 milhões em 2015, com um aumento de 14,9% em relação a 2005. A prevalência na população é de 3,6%. É importante observar que muitas pessoas têm tanto depressão quanto transtornos de ansiedade.</p>
           <p>Quase um em cada três adolescentes brasileiros sofre de transtornos mentais comuns (TMC), caracterizados por tristeza frequente, dificuldade para se concentrar ou para dormir, falta de disposição para tarefas do dia a dia, entre outros sintomas. Se não tratado, um problema desse tipo pode evoluir para distúrbios mais sérios.</p>
           <h6>Fontes: https://g1.globo.com e https://oglobo.globo.com </h6>
           </section>

       </div>

       : null
      }
      {(this.props.className==='blue')? 
        <div className="conteudo">
         <section className="secao1_3">
          <h2>O que um amigo/conhecido/parente/você mesmo(a) está passando é falta de trabalho/estudo?</h2>
          <p></p>
          <p>Só reclamar ou ficar chateado(a) com as coisas não resolve. Se você sente que precisa de ajuda mas não sabe com quem contar ou acredita que alguém precise de ajuda, achamos um bom primeiro passo assistir esse vídeo para entender melhor alguns aspectos mais técnicos.</p>
          <h6>Fontes: https://youtu.be/EIVpJt2Po0c e https://www.holiste.com.br/</h6>
          </section>                    
        
         <section className="secao2_3">
              <ReactPlayer url='https://www.youtube.com/watch?v=EIVpJt2Po0c' width='100%' height="100%" />
          </section>

       </div>

       : null
      }

      {(this.props.className==='rosa')? 
        <div className="conteudo">

         <section className="secao1_4">
           <h1>Todas as emissoras de Televisão falam sobre esse assunto, na internet você não passa um dia sem que algum "meme" seja exibido na sua <i>TimeLine</i>, mas existe alguma ajuda efetiva?</h1>
           <p></p>
           <p>É pensando nisso que surgimos, pensando em tornar efetiva alguma ajuda a quem precisa. Seja benvindo(a) ao <b>VAMOS CONVERSAR?</b>, uma plataforma que irá unir pessoas que estejam precisando de um primeiro auxílio, junto a uma pessoa que irá lhe fornecer um aconselhamento.</p>
            <p>Pessoas morrem todos os dias, sofrendo com sua dor, outras morrem sem saber que dor é essa e não conseguem unir forças para vencê-la. Outras convivem com ela até seu último dia, achando que é normal.</p>
          </section>                    
        
         <section className="secao2_4">
         <img className ="carta" src={Hug} />
         <h6>Fonte:https://giphy.com/gifs/hug-studio-ghibli-hayao-miyazaki-14aBJO7py75MD6</h6>
        </section>
       </div>

       : null
      }

       {(this.props.className==='blue1')? 
        <div className="conteudo">

         <section className="secao1_5">
           <h2>Nós acreditamos no conceito de colaboração e por isso, a nossa plataforma funcionará com base em pessoas tecnicamente habilitadas disponíveis para fornecer um primeiro contato e auxílio de forma gratuita a quem precisar, no passo de um click.</h2>
          </section>                    
    
       </div>

       : null
      }
      {(this.props.className==='blue2')?
      <div className="conteudo1"> 
        <div className="conteudo_">

         <section className="secao1_6">

          <Flippy
               
               flipOnHover={true} // default false
               flipOnClick={false} // default false
               flipDirection="horizontal" // horizontal or vertical
               ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
               // if you pass isFlipped prop component will be controlled component.
               // and other props, which will go to div
               style={{ width: '100%', height: '100%' }}   
             >
             <FrontSide className="FrontSide_3" >
             <h1>É profissional da área da Psicologia ou Psiquatria?</h1>
             </FrontSide>
             <BackSide className="BackSide_3">
             <p>Você se cadastrará na nossa plataforma, e a partir daí poderá dar conselhos de forma anônima respondendo as mensagens que chegarão em sua caixa de entrada.</p>
            <p>Pedimos bom senso, e cautela nos aconselhamentos, lembre-se que pode se tratar do primeiro contato das pessoas com um profissional da área. Que não substitui uma consulta psicológica e psiquiátrica.</p>
            <p>Caso tenha dúvidas de como proceder, recomendamos ler as políticas da nossa plataforma, clicando aqui.</p>
              </BackSide>
           </Flippy>

         </section>                    
        
         <section className="secao2_6">
        
         <Flippy
               
               flipOnHover={true} // default false
               flipOnClick={false} // default false
               flipDirection="horizontal" // horizontal or vertical
               ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
               // if you pass isFlipped prop component will be controlled component.
               // and other props, which will go to div
               style={{ width: '100%', height: '100%' }}   
             >
             <FrontSide className="FrontSide_4" >
             <h1>Chegou até aqui e entende que precisa conversar com alguém?</h1>
             </FrontSide>
             <BackSide className="BackSide_4">
              <p>Não prometemos resolver seus problemas, mas assim como informamos anteriormente, pretendemos ajudar de maneira mais efetiva.</p>
              <p>Por isso preparamos para você uma plataforma que te proporcionará ter um diálogo saudável, no caráter de aconselhamentos junto a um especialista. Toda comunicação será feita via chat de mensagens, a forma mais segura e prática para te proporcionar liberdade para falar o que sente.</p>
               <h5>Lembre-se, essa plataforma não substitui uma consulta presencial a um especialista!</h5>
               </BackSide>
           </Flippy>
        
        
        </section>
       </div>
      
         <button className="bConversar" type="button">Vamos Conversar?</button>
      </div>
       : null
      }       
      </div>
    )
  }
}

export default Box
