/* Demo Builders — Shared project data (12 projects) */
window.DEMO_PROJECTS = [
  {
    id:"horizon-residency", name:"Horizon Residency", type:"Luxury Apartment",
    status:"completed", location:"Baner, Pune", area:"6.2 Lakh sq.ft.",
    year:"2023", value:"₹185 Cr", price:"₹1.85 Cr onwards",
    short:"A 28-storey luxury residential tower with 312 premium apartments and city-line views.",
    hero:"https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1800&auto=format&fit=crop",
    progress:100
  },
  {
    id:"meridian-business-park", name:"Meridian Business Park", type:"Commercial Tower",
    status:"ongoing", location:"Hinjawadi, Pune", area:"12.4 Lakh sq.ft.",
    year:"2026", value:"₹420 Cr", price:"On Request",
    short:"Grade-A commercial IT park spanning 4 towers with LEED-certified sustainable design.",
    hero:"https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1800&auto=format&fit=crop",
    progress:72
  },
  {
    id:"greenview-villas", name:"Greenview Villas", type:"Residential Villa",
    status:"completed", location:"Wagholi, Pune", area:"3.8 Lakh sq.ft.",
    year:"2022", value:"₹74 Cr", price:"₹2.4 Cr onwards",
    short:"64-villa gated community designed around landscaped courtyards and rainwater harvesting.",
    hero:"https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=1800&auto=format&fit=crop",
    progress:100
  },
  {
    id:"summit-towers", name:"Summit Towers", type:"Corporate Office",
    status:"completed", location:"Magarpatta, Pune", area:"9.5 Lakh sq.ft.",
    year:"2024", value:"₹310 Cr", price:"On Request",
    short:"Twin 32-storey Grade-A office towers with smart building automation and EV infrastructure.",
    hero:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1800&auto=format&fit=crop",
    progress:100
  },
  {
    id:"civic-square", name:"Civic Square", type:"Mixed Use Development",
    status:"ongoing", location:"Kothrud, Pune", area:"4.1 Lakh sq.ft.",
    year:"2026", value:"₹58 Cr", price:"On Request",
    short:"Adaptive reuse of a heritage market into a mixed-use retail and cultural plaza.",
    hero:"https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1800&auto=format&fit=crop",
    progress:58
  },
  {
    id:"riverside-township", name:"Riverside Township", type:"Township",
    status:"ongoing", location:"Talegaon, Pune", area:"48 Acres",
    year:"2027", value:"₹640 Cr", price:"₹85 L onwards",
    short:"An integrated township with residential clusters, a school, retail plaza and community park.",
    hero:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1800&auto=format&fit=crop",
    progress:34
  },
  {
    id:"olive-crest", name:"Olive Crest", type:"Luxury Bungalow",
    status:"completed", location:"Lonavala", area:"1.2 Lakh sq.ft.",
    year:"2023", value:"₹92 Cr", price:"₹6.8 Cr onwards",
    short:"18 private hillside bungalows with infinity pools and panoramic valley views.",
    hero:"https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1800&auto=format&fit=crop",
    progress:100
  },
  {
    id:"aurum-shopping", name:"Aurum Shopping Complex", type:"Shopping Complex",
    status:"completed", location:"Viman Nagar, Pune", area:"5.6 Lakh sq.ft.",
    year:"2022", value:"₹210 Cr", price:"On Request",
    short:"A five-level premium retail and F&B destination anchored by international flagship brands.",
    hero:"https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?q=80&w=1800&auto=format&fit=crop",
    progress:100
  },
  {
    id:"stellar-farmhouse", name:"Stellar Farm House Estate", type:"Farm House",
    status:"upcoming", location:"Panvel", area:"22 Acres",
    year:"2027", value:"₹120 Cr", price:"₹3.4 Cr onwards",
    short:"Gated farmhouse enclave with organic orchards, wellness pavilion and equestrian centre.",
    hero:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1800&auto=format&fit=crop",
    progress:8
  },
  {
    id:"aashray-heights", name:"Aashray Heights", type:"Affordable Housing",
    status:"ongoing", location:"Virar East", area:"7.8 Lakh sq.ft.",
    year:"2026", value:"₹180 Cr", price:"₹42 L onwards",
    short:"RERA-registered affordable housing with 640 well-planned 1 & 2 BHK residences.",
    hero:"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1800&auto=format&fit=crop",
    progress:64
  },
  {
    id:"orion-corporate", name:"Orion Corporate Hub", type:"Business Park",
    status:"upcoming", location:"Kharadi, Pune", area:"14.2 Lakh sq.ft.",
    year:"2028", value:"₹540 Cr", price:"On Request",
    short:"A six-tower business park with smart-office cores, food street and 4,000-car basement.",
    hero:"https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1800&auto=format&fit=crop",
    progress:12
  },
  {
    id:"regalia-premium", name:"Regalia Premium Residency", type:"Premium Residency",
    status:"ongoing", location:"Koregaon Park, Pune", area:"4.4 Lakh sq.ft.",
    year:"2026", value:"₹260 Cr", price:"₹3.2 Cr onwards",
    short:"Boutique 3 & 4 BHK residences designed by a Milan-based studio with private sky-lounges.",
    hero:"https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1800&auto=format&fit=crop",
    progress:48
  }
];

/* Reusable amenity / spec sets */
window.DEMO_AMENITIES = [
  "Swimming Pool","Clubhouse","24x7 Security","Landscaped Gardens","Kids Play Area","Gymnasium",
  "Jogging Track","Multipurpose Hall","EV Charging","Power Backup","Rainwater Harvesting","Amphitheatre"
];

window.DEMO_HIGHLIGHTS = [
  "RERA Registered","Vaastu Compliant","Earthquake Resistant Structure","Premium Italian Marble",
  "Smart Home Automation","Modular Kitchen","VRV Air Conditioning","Concierge Services"
];

window.DEMO_SPECS = {
  "Structure":"RCC framed, earthquake resistant","Walls":"AAC blockwork with premium finish",
  "Flooring":"Italian marble in living, vitrified in bedrooms","Kitchen":"Modular with granite counter",
  "Bathroom":"Designer sanitary ware, imported CP fittings","Doors":"Engineered wood, laminated finish",
  "Windows":"UPVC double-glazed, sound insulated","Electricals":"Concealed copper wiring, MCB protection",
  "Painting":"Interior emulsion, exterior weather-shield","Elevators":"High-speed automatic (2 per core)"
};

window.DEMO_NEARBY = {
  schools:[
    {name:"Delhi Public School", dist:"1.2 km"},
    {name:"Symbiosis International", dist:"2.4 km"},
    {name:"Vibgyor High", dist:"3.1 km"},
    {name:"The Cathedral School", dist:"4.6 km"}
  ],
  hospitals:[
    {name:"Ruby Hall Clinic", dist:"2.8 km"},
    {name:"Jehangir Hospital", dist:"3.4 km"},
    {name:"Sahyadri Hospital", dist:"4.2 km"},
    {name:"Aditya Birla Memorial", dist:"5.5 km"}
  ],
  highways:[
    {name:"Mumbai-Pune Expressway", dist:"3.6 km"},
    {name:"Old Mumbai Highway (NH-48)", dist:"2.1 km"},
    {name:"Pune-Nashik Highway", dist:"6.8 km"},
    {name:"Ring Road Access", dist:"1.4 km"}
  ]
};

window.DEMO_GALLERY_IMGS = [
  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?q=80&w=1200&auto=format&fit=crop"
];
