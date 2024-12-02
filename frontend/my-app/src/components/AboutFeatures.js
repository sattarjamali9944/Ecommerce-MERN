import React from 'react'
import {Link} from 'react-router-dom'

export const AboutFeatures = () => {

        
    const features = [
    {
      icon: 'fa-bullhorn',
      title: 'Call Us Anytime',
      description: 'Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur.',
      link: '#URL',
    },
    {
      icon: 'fa-truck',
      title: 'Free Shipping',
      description: 'Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur.',
      link: '#URL',
    },
    {
      icon: 'fa-recycle',
      title: 'Free Returns',
      description: 'Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur.',
      link: '#URL',
    },
    {
      icon: 'fa-money',
      title: 'Secured Payments',
      description: 'Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur.',
      link: '#URL',
    },
  ];

return(
    <>
        <section className="features-4">
        <div className="features4-block py-5">
            <div className="container py-lg-5">
            <h6>We are the best</h6>
            <h3 className="hny-title text-center">
                What We <span>Offering</span>
            </h3>

            <div className="features4-grids text-center row mt-5">
                {features.map((feature, index) => (
                <div key={index} className="col-lg-3 col-md-6 features4-grid">
                    <div className="features4-grid-inn">
                    <span className={`fa ${feature.icon} icon-fea4`} aria-hidden="true"></span>
                    <h5>
                        <Link to={feature.link}>{feature.title}</Link>
                    </h5>
                    <p>{feature.description}</p>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </div>
        </section>
    </>
   
  )
}
