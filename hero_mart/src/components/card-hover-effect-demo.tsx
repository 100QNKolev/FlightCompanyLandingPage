import { HoverEffect } from "@/components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-7xl mx-auto px-8">
      <HoverEffect
        items={[
          {
            id: 1,
            title: "Winter Escape to Paris",
            description: "Experience the magic of Paris this winter. Direct flights with premium service and complimentary champagne.",
            from: "New York (JFK)",
            to: "Paris (CDG)",
            price: "$449",
            duration: "7h 25m",
            image: "/paris.jpg"
          },
          {
            id: 2,
            title: "Tokyo Adventure",
            description: "Discover the vibrant culture of Tokyo with our special spring fares. Includes extra baggage allowance.",
            from: "Los Angeles (LAX)",
            to: "Tokyo (NRT)",
            price: "$799",
            duration: "11h 40m",
            image: "/tokyo.jpg"
          },
          {
            id: 3,
            title: "Dubai Luxury Package",
            description: "Fly in style to Dubai with our business class special. Includes airport lounge access and chauffeur service.",
            from: "London (LHR)",
            to: "Dubai (DXB)",
            price: "$1,299",
            duration: "6h 45m",
            image: "/dubai.jpg"
          },
          {
            id: 4,
            title: "Caribbean Gateway",
            description: "Escape to the Bahamas with our all-inclusive flight package. Includes priority boarding and seat selection.",
            from: "Miami (MIA)",
            to: "Nassau (NAS)",
            price: "$299",
            duration: "1h 05m",
            image: "/bahamas.jpg"
          },
          {
            id: 5,
            title: "Sydney Summer Special",
            description: "Experience Australian summer with our direct flights to Sydney. Includes in-flight entertainment package.",
            from: "San Francisco (SFO)",
            to: "Sydney (SYD)",
            price: "$899",
            duration: "15h 30m",
            image: "/sydney.jpg"
          },
          {
            id: 6,
            title: "Rome City Break",
            description: "Discover the eternal city with our weekend special flights. Includes Italian cuisine menu onboard.",
            from: "Chicago (ORD)",
            to: "Rome (FCO)",
            price: "$549",
            duration: "9h 15m",
            image: "/rome.jpg"
          },
        ]}
      />
    </div>
  );
}
