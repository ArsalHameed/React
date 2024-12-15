import React from 'react'
import Hero from './hero/hero'
import Services from './features/services'
import s4 from "../../assets/images/services/service (4).png"
import s1 from "../../assets/images/services/service (1).png"
import s2 from "../../assets/images/services/service (2).png"
import s3 from "../../assets/images/services/service (3).png"
import styles from "./index.module.css"
const Index = () => {
  return (
    <div>
       <Hero/>
       <div className={styles.Card}>
          <Services heading="User Manuals & Guides" imgSrc={s3} imgAlt="Manuals"  gradient="linear-gradient(to top, #E0EBFF, #ffffff)"
            hoverBg="#E0EBFF"/>
          <Services heading="API Documentation" imgSrc={s4} imgAlt="API"   gradient="linear-gradient(to top, #ECFFF8, #ffffff)"
            hoverBg="#ECFFF8"/>
          <Services heading="Whitepapers & Case Studies" imgSrc={s1} imgAlt="WaCS" gradient="linear-gradient(to top, #FFF0F0, #ffffff)"
            hoverBg="#FFF0F0"/>
          <Services heading="Training Materials " imgSrc={s2} imgAlt="TM" gradient="linear-gradient(to top, #FDFBEA, #ffffff)"
            hoverBg="#FDFBEA"/>

            
       </div>
       
    </div>
  )
}

export default Index
