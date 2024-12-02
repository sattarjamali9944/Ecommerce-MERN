import React, { useState } from 'react';


const SubscriptionSection = () => {
  // State to manage the email input
  const [email, setEmail] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the subscription logic here
    console.log(`Subscribed with email: ${email}`);
  };

  return (
    <section className="w3l-subscription-6">
      <div className="subscription-infhny">
        <div className="container-fluid">
          <div className="subscription-grids row">
            <div className="subscription-right form-right-inf col-lg-6 p-md-5 p-4">
              <div className="p-lg-5 py-md-0 py-3">
                <h3 className="hny-title">
                  Join us for FREE to get instant <span>email updates!</span>
                </h3>
                <p>Subscribe and get notified first on the latest updates and offers!</p>
                <form onSubmit={handleSubmit} className="signin-form mt-lg-5 mt-4">
                  <div className="forms-gds">
                    <div className="form-input">
                      <input
                        type="email"
                        name="email"
                        placeholder="Your email here"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="form-input">
                      <button type="submit" className="btn">
                        Join
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="subscription-left forms-25-info col-lg-6">
              {/* Content for the left side can be added here if needed */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionSection;
