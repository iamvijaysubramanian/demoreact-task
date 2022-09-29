import "./App.css";
import Card from "./card";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  var cardDetails = [
    {
      planName: "FREE",
      price: 0,
      features: [
        {
          name: "Single User",
        },
        {
          name: "5GB Storage",
        },
        {
          name: "Unlimited Public Projects",
        },
        {
          name: "Community Access",
        },
        {
          name: "Unlimited Private Projects",
        },
        {
          name: "Dedicated Phone Support",
        },
        {
          name: "Free Subdomain",
        },
        {
          name: "Monthly Status Reports",
        },
      ],
    },
    {
      planName: "PLUS",
      price: 9,
      features: [
        {
          name: "5 Users",
        },
        {
          name: "50GB Storage",
        },
        {
          name: "Unlimited Public Projects",
        },
        {
          name: "Community Access",
        },
        {
          name: "Unlimited Private Projects",
        },
        {
          name: "Dedicated Phone Support",
        },
        {
          name: "Free Subdomain",
        },
        {
          name: "Monthly Status Reports",
        },
      ],
    },
    {
      planName: "PRO",
      price: 49,
      features: [
        {
          name: "Unlimited Users",
        },
        {
          name: "150GB Storage",
        },
        {
          name: "Unlimited Public Projects",
        },
        {
          name: "Community Accessr",
        },
        {
          name: "Unlimited Private Projects",
        },
        {
          name: "Dedicated Phone Support",
        },
        {
          name: "Unlimited Free Subdomains",
        },
        {
          name: "Monthly Status Reports",
        },
      ],
    },
  ];
  return (
    <div class="container">
      <section class="pricing py-5">
        <div class="container">
          <div class="row">
            {cardDetails.map((card)=>{
              return <Card card={card}></Card>;
            })}
            </div>
        </div>
      </section>
    </div>
  );
}

export default App;
