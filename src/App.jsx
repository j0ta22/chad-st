import { useEffect, useState } from "react"
import gigachad from "./img/gigachad.png"
import gigachad2 from "./img/gigachad2.png"
import chadst from "./img/chadst.png"
import stonks from "./img/stonks.png"

function App() {

    return <div className="conteiner">
      <h1 className="my-font">CHAD STREET TOKEN</h1>
      <div className="row">
        <div className="col-lg-4">
          <img src={gigachad} className="img-fluid"/>
        </div> 
        <div className="col-lg-4">
          <h2 className="text-center">Do no look any further, here is the definitive memecoin.</h2> 
          <p className="text-center">Be a chad, buy CHAD STREET TOKEN.</p>
          <br />
          <br />
          <br />
          
          <img src={chadst} className="img-fluid"/>
          <img src={stonks} className="img-fluid"/>
          <br />
          <br />
          <br />
          <h2 className="text-center">TOKENOMICS</h2>
          <br />
          <p className="text-center">Suply 1,000,000</p>
          <p className="text-center">Max TX: 2%</p>
          <p className="text-center">Max Wallet: 3%</p>
          <p className="text-center">CA-Posted at Launch</p>
        </div>
        <div className="col-lg-4">
          <img src={gigachad2} className="img-fluid"/>
        </div>
      </div>

      <div className="my-container-2">
        <a class="my-btn" href="#" role="button">TELEGRAM</a>
        <a class="my-btn" href="#" role="button">DISCORD</a>
        <a class="my-btn" href="#" role="button">TWITTER</a>
      </div>
      



    </div>
}

export default App 
