import styles from "./Info.module.scss";

const Info = () => {
  return (
    <div className={styles.Info}>
      <div className={styles.container}>
        <div className={styles.Info__content}>
          <h3>Shipping</h3>
          <p>
            Shipping (derived from the word relationship) is the desire by
            followers of a fandom for two or more people, either real-life
            people or fictional characters (in film, literature, television
            series, etc.) to be in a romantic and/or sexual relationship. It is
            considered a general term for fans' involvement with the ongoing
            character development of two people's character arcs in a work of
            fiction. Shipping often takes the form of unofficial creative works,
            including fanfiction stories and fan art, most often published on
            the internet.
          </p>
          <h5>Etymology </h5>
          <p>
            The actual usage of the term "ship" saw its origin around 1995 by
            internet fans of the TV show The X-Files, who believed the two main
            characters, Fox Mulder and Dana Scully, should be engaged in a
            romantic relationship They called themselves "relationshippers," at
            first; then R'shipper, 'shipper, and finally just shipper. The
            oldest uses of the noun ship and the noun shipper, as recorded by
            the Oxford English Dictionary, date back to 1996 postings on the
            Usenet group alt.tv.x-files; shipping is first attested slightly
            later, in 1997 and the verb to ship in 1998
          </p>
          <h5>Notation and terminology</h5>
          <p>
            "Ship" and its derivatives in this context have since come to be in
            wide and versatile use. "Shipping" refers to the phenomenon; a
            "ship" is the concept of a fictional couple; to "ship" a couple
            means to have an affinity for it in one way or another; a "shipper"
            or a "fangirl/boy" is somebody significantly involved with such an
            affinity; a "shipping war" is when two ships contradict each other,
            causing fans of each ship to argue. A ship that a particular fan
            prefers over all others is called an OTP, which stands for one true
            pairing When discussing shipping, a ship that has been confirmed by
            its series is called a canon ship or sailed ship, whereas a sunk
            ship is a ship that has been proven unable to exist in canon, or in
            other words, will never be real nor confirmed
          </p>
          <a
            href="https://en.wikipedia.org/wiki/Shipping_(fandom)"
            target="blanc"
          >
            (sourse-link)
          </a>
        </div>
        <div className={styles.Info__content}>
          <h3>E-commerce payment system</h3>
          <p>
            An e-commerce payment system (or an electronic payment system)
            facilitates the acceptance of electronic payment for offline
            transfer, also known as a subcomponent of electronic data
            interchange (EDI), e-commerce payment systems have become
            increasingly popular due to the widespread use of the internet-based
            shopping and banking. Credit cards remain the most common forms of
            payment for e-commerce transactions. As of 2008, in North America
            almost 90% of online retail transactions were made with this payment
            type.[1] It is difficult for an online retailer to operate without
            supporting credit and debit cards due to their widespread use.[1]
            Online merchants must comply with stringent rules stipulated by the
            credit and debit card issuers (e.g. Visa and Mastercard) in
            accordance with bank and financial regulation in the countries where
            the debit/credit service conducts business.[2][better source needed]
            E-commerce payment system often use B2B mode. The security of
            customer information, business information, and payment information
            base is a concern during the payment process of transactions under
            the conventional B2B e-commerce model.[3] For the vast majority of
            payment systems accessible on the public Internet, baseline
            authentication (of the financial institution on the receiving end),
            data integrity, and confidentiality of the electronic information
            exchanged over the public network involves obtaining a certificate
            from an authorized certificate authority (CA) who provides
            public-key infrastructure (PKI). Even with transport layer security
            (TLS) in place to safeguard the portion of the transaction conducted
            over public networks—especially with payment systems—the
            customer-facing website itself must be coded with great care, so as
            not to leak credentials and expose customers to subsequent identity
            theft. Despite widespread use in North America, there are still many
            countries such as China and India that have some problems to
            overcome in regard to credit card security. Increased security
            measures include use of the card verification number (CVN) which
            detects fraud by comparing the verification number printed on the
            signature strip on the back of the card with the information on file
            with the cardholder's issuing bank.[4] There are companies that
            specialize in financial transaction over the Internet, such as
            Stripe for credit cards processing, Smartpay for direct online bank
            payments and PayPal for alternative payment methods at checkout.
            Many of the mediaries permit consumers to establish an account
            quickly, and to transfer funds between their on-line accounts and
            traditional bank accounts, typically via automated clearing house
            (ACH) transactions. The speed and simplicity with which
            cyber-mediary accounts can be established and used have contributed
            to their widespread use, despite the risk of theft, abuse, and the
            typically arduous process of seeking recourse when things go wrong.
            The inherent information asymmetry of large financial institutions
            maintaining information safeguards provides the end-user with little
            insight into the system when the system mishandles funds, leaving
            disgruntled users frequently accusing the mediaries of sloppy or
            wrongful behavior; trust between the public and the banking
            corporations is not improved when large financial institutions are
            revealed to have taken flagrant advantage of their asymmetric power,
            such as the 2016 Wells Fargo account fraud scandal.
          </p>
          <a
            href="https://en.wikipedia.org/wiki/E-commerce_payment_system"
            target="blanc"
          >
            (sourse-link)
          </a>
        </div>
      </div>
    </div>
  );
};

export default Info;
