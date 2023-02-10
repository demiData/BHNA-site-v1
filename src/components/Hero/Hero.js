import React from "react"
import { Link } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { useHeroQuery } from "../../hooks/useHeroQuery"


import { Content, Wrapper, HeaderWrapper, StyledImg } from "./Hero.styles" 

const Hero = () => {

    const {
        wpPage: { ACF_HomePage: data},
     } = useHeroQuery();
    
    //  console.log(data)

   
     const imageData = getImage(data.heroImage.localFile);
    //  console.log(imageData)
     const heroLink =   data.heroLink;

    return (
        <Wrapper>
            <StyledImg image={imageData} alt="Hero Image" />
            <HeaderWrapper>
                <Content>
                <div className="hero-line1">
                
                <span className="hero__details date">Bungalow Heaven Neighborhood Association presents</span>
                <h1 className="hero__title">Encore 2021 Virtual Home Tour</h1>
                
                </div>

                <div className="hero-line2">
                {/* <span className="hero__details">See ya next year!</span> */}
                {/* <h6>If you</h6> */}
                </div>

                <Link to={heroLink} className="tour-cta_btn">
                    Learn More
                </Link>
                </Content>
            </HeaderWrapper> 
        </Wrapper>
    )
}

export default Hero