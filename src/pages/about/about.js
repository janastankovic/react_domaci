import React from 'react'
import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import useToggle from './useTogle.jsx';
// import oNamaImage from './assets/onama.jpeg';
import './about.css';

function ONama() {


  const [toggleTab, setToggleTab] = useToggle(1);

    return (
      <Fragment>
        <section>
          <div className='oNama'>

            {/* <div className='oNamaLeftColumn'
              style={{ backgroundImage: `url(${oNamaImage})` }}>      
            </div> */}

            <div className='oNamaRightColumn'>
              
              {/* kartice sa nazivima tabova */}
              <div className='tabs'>
                <div className={toggleTab === 1 ? 'singleTab activeTab' : 'singleTab'} onClick={() => setToggleTab(1)}>
                  <h3>O nama</h3>
                </div>

                <div className={toggleTab === 2 ? 'singleTab activeTab' : 'singleTab'} onClick={() => setToggleTab(2)}>
                  <h3>Ponuda</h3>
                </div>

                <div className={toggleTab === 3 ? 'singleTab activeTab' : 'singleTab'} onClick={() => setToggleTab(3)}>
                  <h3>Gde nas možete naći</h3>
                </div>     
              </div>

              {/* body svakog taba */}
              <div className='tabContent'>

                {/* sadrzaj O nama */}
                <div className={toggleTab === 1 ? 'content activeContent' : 'content'}>
                  <h3>Naši ciljevi</h3>
                  <p>
                  Vreme je informatike i nano-bio tehnologije. U vrlo bliskoj 
                  budućnosti planira se revolucija u oftalmoloskoj i optičkoj industriji. 
                  Sve što ste do sada zamišljali i gledali u SF filmovima uskoro će postati 
                  naša realnost. Gledanje televizije ili filmova ugrađenih u majusni deo vaših 
                  kontaktnih sočiva Vam sada verovatno zvuči čudno, ali poverujte nam potrudićemo 
                  se da Vam to učinimo dostupnim i kod nas, za nadamo se manje od 10 godina. 
                  Naš cilj je da Vam prvi donesemo budućnost iz sveta optike. 
                  Mnogo ideja i stvari je trenutno u fazi eksperimentalnog istraživanja i razvoja,
                   ali zato smo mi tu da sve pratimo i Vas redovno informišemo. 
                   Nadamo se da ćemo Vas zainteresovati za novine koje stižu, 
                   a o kojima se možete informistati kod nas na sajtu, 
                   a nadamo se da Vam ih i uživo predstavimo kako budu postajale dostupne 
                   srpskom tržištu. Mogućnosti su neslućene kada buducnost nano-biotehnologije 
                   počne, ona će se razvijati mesečnom brzinom. Do tada, mi ćemo učiti i spremati 
                   se za nju, obučavaćemo se i putovati po svetu da probamo da Vam je što pre pružimo 
                   na dlanu, na obostrano zadovoljstvo.
                  </p>
                  <p>
                  <b>Lens shop</b> je već 25 godina zaštitnik Vašeg vida, i dok zajedno sa vama idemo u korak
                   sa tehnologijom, uz zelju za očuvanje tradicionalnih vrednosti, predstavljamo Vam proizvode
                    vrhunskog kvaliteta koje smo izabrali baš za Vas
                  </p>
                </div>

                
                <div className={toggleTab === 2 ? 'content activeContent' : 'content'}>
                  <h3>Optika</h3>
                  <p>
                  Lens shop u svojoj ponudi ima kompletan asortiman kontaktnih sočiva i 
                  rastvora za održavanje svetskih proizvođača – Bausch&Lomb, Optix, Ciba Vision
                   i drugih. U zavisnosti od dioptrije, opšteg zdravstvenog stanja Vaših očiju,
                    i Vaših životnih navika, i uz savete naših lekara, možete izabrati najadekvatniju
                     vrstu sočiva za sebe.
                  </p>

                  
                  <p>
                  Kontaktna sočiva predstavljaju “nevidljivi” način za rešavanje problema sa vidom,
                   pa je upravo estetski izgled najčešći razlog za odabir ovih pomagala. Za to 
                   međutim mogu postojati i medicinski razlozi, kao što je visoka kratkovidost,
                    visoka dioptrija samo na jednom oku itd.

                    Kontaktna sočiva imaju niz prednosti u odnosu na naočare: njima se postiže 
                    bolja oštrina vida (i do 30% u odnosu na korekciju naočarima), 
                    maksimalna korekcija na oba oka i u slučajevima razlike u dioptriji, 
                    izbegava se ograničavanje vidnog polja okvirom naočara, magljenje stakala, 
                    i niz naizgled banalnih neprijatnosti kod nošenja naočara, kao žuljanje na 
                    nosu ili iza uha, potreba čestog skidanja i stavljanja naočara… Iz ovih 
                    razloga se sočiva preporučuju kod bavljenja sportom ili drugim telesnim 
                    aktivnostima. Sa druge strane, sočiva iziskuju veći stepen brige o higijeni, 
                    pa se pored pažljivog odabira vrste sočiva mora voditi računa i o izboru 
                    sredstava i opreme za održavanje.
                  </p>
                </div>

                {/* sadrzaj  */}
                <div className={toggleTab === 3 ? 'content activeContent' : 'content'}>
                  <h3>Gde nas možete pronaći?</h3>
                  <p>
                  Adresa:
                    Svetogorska 50, II sprat
                    Telefon:
                    011/ 323 60 29
                    Telefon:
                    069/ 323 60 29
                  </p>
                  <p>
                    Imate pitanje za nas? Pozovite nas na 060-11-112-21 
                    <Link to='/contact' style={{ textDecoration: 'none' }}>
                      <button>Ili nam pišite!</button>
                    </Link>
                  </p>
                </div>

              </div>

            </div>
          
            </div>
          </section>
        </Fragment>
  )
}

export default ONama