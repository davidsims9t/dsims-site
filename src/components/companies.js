import React from "react"

const Companies = () => (
    <section className="main-companies">
      <h2 className="main-companies-title">Companies I've Worked With</h2>
      <div className="main-companies-grid container">
        <div className="main-company main-company-hbo">
          <img className="main-company-img main-company-hbo-img" src={require('../images/hbo.svg')} alt="HBO" />
        </div>
        <div className="main-company main-company-unity3d">
          <img className="main-company-img main-company-unity3d-img" src={require('../images/unity3d.svg')} alt="Unity 3D" />
        </div>
        <div className="main-company main-company-pacex">
          <img className="main-company-img main-company-pacex-img" src={require('../images/pacex.svg')} alt="Pacific Expeditors" />
        </div>
        <div className="main-company main-company-xnor">
          <img className="main-company-img main-company-xnor-img" src={require('../images/xnor.svg')} alt="XNor" />
        </div>
        <div className="main-company main-company-2k">
          <img className="main-company-img main-company-2k-img" src={require('../images/2k.svg')} alt="2K Games" />
        </div>
        <div className="main-company main-company-aaa">
          <img className="main-company-img main-company-aaa-img"src={require('../images/aaa.svg')} alt="AAA" />
        </div>
      </div>
    </section>
)

export default Companies