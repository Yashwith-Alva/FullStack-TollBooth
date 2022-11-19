import SourceImage from "../assets/images/sourceimage.png";
import visionImage from "../assets/images/vision.png";
import NavigationBar from "../components/NavBar";

function SourcePage() {
  const page = {
    marginLeft: "20px",
    marginRight: "20px",
    marginTop: "20px",
    marginBottom: "20px",
  };

  const header = {
    textAlign: "left",
    marginLeft: "50px",
    marginRight: "50px",
  };
  const text = {
    textAlign: "left",
    marginLeft: "50px",
    color: "gray",
    fontSize: "17px",
    marginRight: "50px",
  };
  return (
    <div>
      <NavigationBar />
      <div style={page}>
        <h4 style={header}>An introduction to NPCI and its various products</h4>
        <p style={text}>
          National Payments Corporation of India (NPCI), an umbrella
          organisation for operating retail payments and settlement systems in
          India, is an initiative of Reserve Bank of India (RBI) and Indian
          Banks’ Association (IBA) under the provisions of the Payment and
          Settlement Systems Act, 2007, for creating a robust Payment and
          Settlement Infrastructure in India. Considering the utility nature of
          the objects of NPCI, it has been incorporated as a “Not for Profit”
          Company under the provisions of Section 25 of Companies Act 1956 (now
          Section 8 of Companies Act 2013), with an intention to provide
          infrastructure to the entire Banking system in India for physical as
          well as electronic payment and settlement systems. The Company is
          focused on bringing innovations in the retail payment systems through
          the use of technology for achieving greater efficiency in operations
          and widening the reach of payment systems. The ten core promoter banks
          are State Bank of India, Punjab National Bank, Canara Bank, Bank of
          Baroda, Union Bank of India, Bank of India, ICICI Bank Limited, HDFC
          Bank Limited, Citibank N. A. and HSBC. In 2016 the shareholding was
          broad-based to 56 member banks to include more banks representing all
          sectors. In 2020, new entities regulated by RBI were inducted,
          consisting of Payment Service Operators, payment banks, Small Finance
          Banks, etc. The shares were allotted pursuant to issuance of equity
          shares on private placement basis in compliance to the applicable
          provisions of the Companies Act, 2013.
        </p>
        <br />
        <h4 style={header}>Our Journey</h4>
        <p style={text}>
          NPCI, during its journey, has made a significant impact on the retail
          payment systems in the country. Dedicated to the nation by our former
          President, Shri Pranab Mukherjee, endorsed by the Hon’ble Prime
          Minister, Shri Narendra Modi and later made the card of choice for the
          ambitious Pradhan Mantri Jan Dhan Yojana, RuPay is now a known name.
        </p>
        <br />
        <h4 style={header}>RuPay</h4>
        <p style={text}>
          RuPay is an Indigenously developed Payment System – designed to meet
          the expectation and needs of the Indian consumer, banks and merchant
          eco-system. RuPay supports the issuance of debit, credit and prepaid
          cards by banks in India and thereby supporting the growth of retail
          electronic payments in India. RuPay is well poised to explore
          innovative payment opportunities such as Contactless – offline and
          online to drive adoption of low value payments. All RuPay Cards will
          now have the functionality of NCMC which can enable low value
          contactless payments (like transit, toll, parking, retail) using
          Offline technology. The alliances with international network partners
          (Discover Financial Services, Japan Credit Bureau and China Union Pay)
          provides valuable access to global acceptance footprint and offer
          world class payment solutions to RuPay cardholders
        </p>
        <br />
        <h4 style={header}>IMPS</h4>
        <p style={text}>
          With Immediate Payment Service (IMPS), India has become the leading
          country in the world in real time payments in retail sector.
        </p>
        <br />
        <h4 style={header}>UPI</h4>
        <p style={text}>
          Unified Payments Interface (UPI) has been termed as the revolutionary
          product in thepayment system.
        </p>
        <br />
        <h4 style={header}>NETC</h4>
        <p style={text}>
          National Payments Corporation of India (NPCI) has developed the
          National Electronic Toll Collection (NETC) program to meet the
          electronic tolling requirements of the Indian market. It provides an
          electronic payment facility to customer to make the payments at
          national, state and city toll plazas by identifying the vehicle
          uniquely through a FASTag. FASTag are Radio-Frequency Identification
          (RFID) stickers which are affixed on the vehicle windshield and enable
          the driver to make toll payments electronically while the vehicle is
          in motion without stopping at the Toll plazas by saving Fuel and Time.
          With these products the aim is to transform India into a ‘less-cash’
          society by touching every Indian with one or other payment services.
          With each passing year we are moving towards our vision to be the best
          payments network globally.
        </p>
        <br />
        <h4 style={header}>Background</h4>
        <p style={text}>
          DPSS at its meeting held on September 24, 2009 had given an
          in-principle approval to issue authorization to NPCI for operating
          various retail payment systems in the country and granted Certificate
          of Authorization for operation of National Financial Switch (NFS) ATM
          Network with effect from October 15, 2009. NPCI had deputed its
          officials to IDRBT Hyderabad and had taken over NFS operations on
          December 14, 2009. Membership regulations and rules had been framed
          for enrolling all banks in the country as members. This was done so
          that when the nation-wide payment systems are launched, all would get
          included on a standardized platform. A Technical Advisory Committee
          was constituted with two eminent professors of IIT, Mumbai. Prof. N.L.
          Sarda is the Chairman and Prof. G. Sivakumar is the Co-Chairman of the
          Technical Advisory Committee. Members in these committees are from
          banks at the level of Deputy General Manager and Asst. General
          Manager.
        </p>
        <br />
        <img
          src={visionImage}
          alt="Vision Image"
          style={{ width: "100%" }}
        ></img>
        <br />
        <br />
        <h4 style={header}>Value</h4>
        <p style={text}>
          The values define the success of most of the companies. At NPCI, our
          values have shaped our culture, our work ethics, and our decisions;
          helping us push our limits and strive for a better today thus laying
          the foundation for a successful tomorrow. As you dive deep into our
          core values you will explore what defines us and our work environment:
        </p>
        <br />
        <img
          src={SourceImage}
          alt="sourceimage"
          style={{ height: "400px" }}
        ></img>
        <h4 style={header}>Passion For Excellence</h4>
        <p style={text}>
          In our passionate quest for excellence, we do all that is needed to
          deliver value to our stakeholders: total commitment to their success
          would mean being accountable to the promises made or implicit, and
          being proactive and innovative. We believe in always remaining agile
          and setting standards that others adopt or learn from through
          creativity and constant innovations.
        </p>
        <h4 style={header}>Integrity</h4>
        <p style={text}>
          Integrity, for us, means and includes fairness, mutually trusting
          relationships, belief in inclusiveness and being non-discriminatory,
          and honest in all our transactions: internally within NPCI and with
          the external world. Acting with integrity is key to building and
          maintaining trust. And, trust and credibility become brand values that
          will help us fulfil our vision “to be the best payments network
          globally”.
        </p>
      </div>
    </div>
  );
}
export default SourcePage;
