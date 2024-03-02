import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Card from "./components/Card";

const parks = [
  {
    name: "Kissena Park",
    address: "Kissena Blvd and, Booth Memorial Ave, Fresh Meadows, NY 11365",
    website: "https://www.nycgovparks.org/parks/kissena-park/",
    phone: "(718) 359-1297",
    rating: "4.6",
    image:
      "https://lh3.googleusercontent.com/p/AF1QipM-8WGE0xNBWhHiWbxYJN9VKrld3nOyMQkFDRWa=s1360-w1360-h1020",
  },
  {
    name: "Flushing Meadows Corona Park",
    address: "Grand Central Parkway and, Van Wyck Expy, Queens, 11354",
    website: "http://www.nycgovparks.org/parks/fmcp",
    phone: "(718) 760-6565",
    rating: "4.6",
    image:
      "https://lh3.googleusercontent.com/p/AF1QipM3iaAEdn-5Y8EVjqkzkrxYZsWiS3efo-AfMsHM=s1360-w1360-h1020",
  },
  {
    name: "Fresh Meadows Park",
    address: "190 Horace Harding Expy, Queens, NY 11365",
    website: "https://www.nycgovparks.org/parks/fresh-meadows-park",
    phone: "(212) 639-9675",
    rating: "4.5",
    image:
      "https://lh3.googleusercontent.com/p/AF1QipMuhHwKj2PWY7zzxw2p1sbrkWanpWGMdi45diLZ=s1360-w1360-h1020",
  },
  {
    name: "Little Bay Park",
    address: "Cross Island Pkwy, Queens, NY 11357",
    website: "https://www.nycgovparks.org/parks/little-bay-park",
    phone: "(212)639-9675",
    rating: "4.6",
    image:
      "https://lh3.googleusercontent.com/p/AF1QipP0HQP4HKHq02zVYsfgQeSgswR5uFi7UNW-REiF=s1360-w1360-h1020",
  },
  {
    name: "Baisley Pond Park",
    address: "Baisley Blvd, Jamaica, NY 11434",
    website: "https://www.nycgovparks.org/parks/baisley-pond-park",
    phone: "(212) 639-9675",
    rating: "4.3",
    image:
      "https://lh3.googleusercontent.com/p/AF1QipMWfMiARSlX1HbaLETD8ZjGTk8NOcXvGS-wBAM=s1360-w1360-h1020",
  },
  {
    name: "Francis Lewis Park",
    address: "3rd Ave, Queens, NY 11357",
    website: "https://www.nycgovparks.org/parks/francis-lewis-park/",
    phone: "(212) 639-9675",
    rating: "4.6",
    image:
      "https://lh3.googleusercontent.com/p/AF1QipOBm3jpmL7S0qvI10E2MOsEQC4ceUt1wvQukeRE=s1360-w1360-h1020",
  },
  {
    name: "Crocheron Park",
    address: "K214-41 34th Ave, Bayside, NY 11361",
    website: "https://www.nycgovparks.org/parks/crocheron-park/",
    phone: "(212) 639-9675",
    rating: "4.6",
    image:
      "https://lh3.googleusercontent.com/p/AF1QipMqigPGo4_gEKlj5cCKoeLOS9r1JabC5Ly-gXz_=s1360-w1360-h1020",
  },
  {
    name: "Alley Pond Park",
    address: "Union Tpke, Oakland Gardens, NY 11364",
    website: "http://www.nycgovparks.org/parks/alley-pond-park",
    phone: "(212) 639-9675",
    rating: "4.6",
    image:
      "https://lh3.googleusercontent.com/p/AF1QipM1T2dsYN-5AhWV-7tK8AfWmSe5SKfXo2x32bYW=s1360-w1360-h1020",
  },
  {
    name: "John Golden Park",
    address: "Cross Island Pkwy, Bayside, NY 11360",
    website: "https://www.nycgovparks.org/parks/john-golden-park/",
    phone: "(212) 639-9675",
    rating: "4.6",
    image:
      "https://lh3.googleusercontent.com/p/AF1QipPVhSEqnORIBIwSO_ZKwZlEC_uUVMTJCDd_7xIj=s1360-w1360-h1020",
  },
  {
    name: "Bowne Park",
    address: "29th Ave. & 157th St, Flushing, NY 11354",
    website: "https://www.nycgovparks.org/parks/bowne-park",
    phone: "(212) 639-9675",
    rating: "4.5",
    image:
      "https://lh3.googleusercontent.com/p/AF1QipPnnwP1RdSbLM8av8OsTqYIsVOYJvivzoksLJTj=s1360-w1360-h1020",
  },
];

function App() {
  return (
    <div className="container">
      <h1>The Parks of Queens, NY</h1>
      {parks.map((park, index) => (
        <Card
          className="card"
          key={index}
          name={park.name}
          address={park.address}
          website={park.website}
          phone={park.phone}
          rating={park.rating}
          image={park.image}
        />
      ))}
    </div>
  );
}

export default App;
