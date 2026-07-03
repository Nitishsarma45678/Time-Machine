// ============================================================
// TIME CAPSULE — HISTORICAL DATA
// Covers years 1990–2015 with rich India + World context
// ============================================================

const YEAR_DATA = {

  1990: {
    world: {
      population: "5.3 Billion",
      birthsPerDay: "~365,000",
      snapshot: [
        { icon: "🌍", label: "World Population", value: "5.3B", sub: "people on Earth" },
        { icon: "💵", label: "Avg Global Income", value: "$4,200", sub: "per year" },
        { icon: "📺", label: "TV Channels in India", value: "2", sub: "Doordarshan only" },
        { icon: "🚗", label: "Cars Worldwide", value: "~500M", sub: "registered vehicles" },
        { icon: "🌡️", label: "Global Temp Above", value: "+0.4°C", sub: "vs 20th century avg" },
        { icon: "💻", label: "Internet Users", value: "~2.6M", sub: "worldwide" }
      ],
      headlines: [
        { tag: "WORLD POLITICS", text: "Germany Reunifies After 45 Years", desc: "East and West Germany officially reunited on October 3rd, ending decades of Cold War division." },
        { tag: "CONFLICT", text: "Gulf War Brewing", desc: "Iraq invades Kuwait in August, triggering a massive international response led by the United States." },
        { tag: "RUSSIA", text: "Soviet Union on the Verge of Collapse", desc: "Mikhail Gorbachev's reforms accelerate the breakup of the USSR. Baltic states declare independence." },
        { tag: "SCIENCE", text: "Hubble Space Telescope Launched", desc: "NASA launches Hubble, though a lens flaw is discovered — corrected in a dramatic spacewalk 3 years later." },
        { tag: "SPORTS", text: "FIFA World Cup in Italy", desc: "West Germany lifts the trophy in Rome, defeating Argentina 1–0 in the final." }
      ],
      movies: [
        { emoji: "🦸", title: "Home Alone", sub: "Comedy classic" },
        { emoji: "👻", title: "Ghost", sub: "Romance thriller" },
        { emoji: "🕺", title: "Pretty Woman", sub: "Romantic comedy" },
        { emoji: "🎪", title: "Total Recall", sub: "Sci-Fi action" },
        { emoji: "🐠", title: "The Little Mermaid", sub: "Disney animation" }
      ],
      music: [
        { emoji: "🎵", title: "Nothing Compares 2 U", sub: "Sinéad O'Connor" },
        { emoji: "🎸", title: "Vogue", sub: "Madonna" },
        { emoji: "🎤", title: "Ice Ice Baby", sub: "Vanilla Ice" },
        { emoji: "🎶", title: "U Can't Touch This", sub: "MC Hammer" },
        { emoji: "🎸", title: "Epic", sub: "Faith No More" }
      ],
      tv: [
        { emoji: "📺", title: "The Simpsons", sub: "Just started on Fox" },
        { emoji: "🚨", title: "Twin Peaks", sub: "Mystery drama" },
        { emoji: "🏠", title: "Full House", sub: "Family sitcom" },
        { emoji: "🎭", title: "Cheers", sub: "Classic comedy" },
        { emoji: "👪", title: "Fresh Prince", sub: "Will Smith's debut" }
      ],
      prices: [
        { icon: "⛽", name: "Petrol (India)", then: "₹7/L", now: "₹100/L", arrow: "📈" },
        { icon: "🎬", name: "Movie Ticket", then: "₹10", now: "₹250", arrow: "📈" },
        { icon: "📞", name: "Phone Call (per min)", then: "₹3", now: "₹0.5", arrow: "📉" },
        { icon: "🍞", name: "Bread Loaf", then: "₹4", now: "₹45", arrow: "📈" },
        { icon: "✈️", name: "Delhi-Mumbai Flight", then: "₹2,500", now: "₹4,500", arrow: "📈" }
      ],
      techExisted: [
        { icon: "📟", name: "Pager / Beeper", year: "Since 1950s" },
        { icon: "💾", name: "Floppy Disks", year: "Used everywhere" },
        { icon: "📼", name: "VHS Cassettes", year: "Video tapes king" },
        { icon: "☎️", name: "Landline Telephones", year: "Essential comms" },
        { icon: "🖥️", name: "Desktop Computers", year: "DOS era" },
        { icon: "📻", name: "FM Radio", year: "Most popular media" }
      ],
      techNotYet: [
        { icon: "🌐", name: "World Wide Web", year: "Invented in 1991" },
        { icon: "📱", name: "Mobile Phones (mass)", year: "Early 1990s" },
        { icon: "💿", name: "CDs in India", year: "Mid 1990s" },
        { icon: "🎮", name: "PlayStation", year: "1994" },
        { icon: "📧", name: "Email for public", year: "Mid 1990s" },
        { icon: "🔍", name: "Google", year: "1998" }
      ],
      lost: [
        { icon: "📼", name: "Video Rental Shops", desc: "Blockbuster & local video stores — your weekend ritual" },
        { icon: "📟", name: "Pagers", desc: "The original notification system for cool people" },
        { icon: "📖", name: "Paper Phone Directories", desc: "Thick yellow books delivered to every home" },
        { icon: "🎞️", name: "Film Camera Rolls", desc: "24 shots, no preview — pure suspense!" },
        { icon: "🚂", name: "Steam Trains in India", desc: "Still running on some routes in 1990" },
        { icon: "💾", name: "Floppy Disks", desc: "Carrying data one 1.44MB disk at a time" }
      ],
      famous: [
        { avatar: "🎤", name: "Eminem", known: "Rapper" },
        { avatar: "⚽", name: "Lionel Messi", known: "Football superstar, born 1987" },
        { avatar: "🎸", name: "Kurt Cobain era", known: "Nirvana peak" },
        { avatar: "🏏", name: "Sachin Tendulkar", known: "Just starting his career" },
        { avatar: "🎬", name: "Shah Rukh Khan", known: "Rising Bollywood star" }
      ]
    },
    india: [
      { icon: "🗳️", title: "Political Scene", body: "V.P. Singh's government falls. Chandra Shekhar becomes PM with Congress support. The Mandal Commission controversy rocks India." },
      { icon: "📺", title: "Entertainment", body: "Doordarshan rules — Mahabharat, Ramayana are cultural events. Ramayan finale has the highest viewership in Indian TV history." },
      { icon: "💰", title: "Economy", body: "India's economy is still licence-raj controlled. Liberalisation is 1 year away. Inflation at 9%." },
      { icon: "🏏", title: "Cricket", body: "Sachin Tendulkar, 17, plays his first Test series. India vs England, NZ tours are blockbusters." },
      { icon: "🛣️", title: "Daily Life", body: "Scooters dominate roads — Bajaj Chetak everywhere. Air conditioning is a luxury. Kolkata still has hand-pulled rickshaws." },
      { icon: "🎵", title: "Music", body: "Kishore Kumar's classics still dominate. Qurbani, Maine Pyar Kiya cassettes are best sellers. Asha Bhosle is queen." }
    ]
  },

  1995: {
    world: {
      population: "5.7 Billion",
      birthsPerDay: "~370,000",
      snapshot: [
        { icon: "🌍", label: "World Population", value: "5.7B", sub: "people on Earth" },
        { icon: "🌐", label: "Internet Users", value: "~16M", sub: "worldwide" },
        { icon: "📱", label: "Mobile Phones", value: "~90M", sub: "subscribers globally" },
        { icon: "💻", label: "Windows 95", value: "Just Out!", sub: "changed computing" },
        { icon: "🎬", label: "Bollywood Films", value: "~900", sub: "produced per year" },
        { icon: "💰", label: "Sensex Level", value: "~3,900", sub: "BSE India" }
      ],
      headlines: [
        { tag: "INDIA", text: "India Celebrates 50 Years Since Independence", desc: "Massive golden jubilee celebrations planned across the nation. PM Narasimha Rao leads the country." },
        { tag: "TECHNOLOGY", text: "Windows 95 Released — Computing Revolution", desc: "Microsoft's Windows 95 sells 7 million copies in 5 weeks. The Start button changes everything." },
        { tag: "WORLD", text: "Oklahoma City Bombing Shocks America", desc: "The deadliest domestic terror attack in US history kills 168 people." },
        { tag: "SCIENCE", text: "Internet Goes Public — WWW Takes Off", desc: "The World Wide Web becomes accessible to public. Netscape Navigator is the go-to browser." },
        { tag: "SPORTS", text: "Brian Lara Breaks World Record", desc: "Brian Lara scores 501* in county cricket, an unbroken record. The cricket world is in awe." }
      ],
      movies: [
        { emoji: "🦁", title: "Dilwale Dulhania Le Jayenge", sub: "Bollywood icon" },
        { emoji: "🪆", title: "Toy Story", sub: "First Pixar CGI film" },
        { emoji: "🚀", title: "Apollo 13", sub: "Dramatic thriller" },
        { emoji: "💀", title: "Se7en", sub: "Dark thriller" },
        { emoji: "💃", title: "Hum Aapke Hain Koun", sub: "Blockbuster love story" }
      ],
      music: [
        { emoji: "🎵", title: "Gangsta's Paradise", sub: "Coolio" },
        { emoji: "🎸", title: "Wonderwall", sub: "Oasis" },
        { emoji: "🎤", title: "Kal Ho Naa Ho (era)", sub: "Udit Narayan era" },
        { emoji: "🎶", title: "Waterfalls", sub: "TLC" },
        { emoji: "🎸", title: "Creep era", sub: "Radiohead" }
      ],
      tv: [
        { emoji: "☕", title: "Friends", sub: "Season 1 just launched!" },
        { emoji: "🦖", title: "Jurassic Park era", sub: "Dino fever everywhere" },
        { emoji: "📺", title: "Shaktimaan planning", sub: "India's superhero coming" },
        { emoji: "🎭", title: "ER", sub: "Hospital drama hit" },
        { emoji: "👽", title: "The X-Files", sub: "Sci-Fi conspiracy" }
      ],
      prices: [
        { icon: "⛽", name: "Petrol (India)", then: "₹13/L", now: "₹100/L", arrow: "📈" },
        { icon: "🍕", name: "Pizza (Domino's)", then: "₹45", now: "₹300", arrow: "📈" },
        { icon: "📞", name: "STD Call per min", then: "₹6", now: "₹0.5", arrow: "📉" },
        { icon: "🏠", name: "Mumbai Flat (2BHK)", then: "₹5L", now: "₹1.5Cr+", arrow: "📈" },
        { icon: "📺", name: "Colour TV", then: "₹10,000", now: "₹15,000", arrow: "📈" }
      ],
      techExisted: [
        { icon: "💻", name: "Windows 95 PCs", year: "Just launched!" },
        { icon: "📱", name: "Mobile Phones (brick)", year: "Nokia 2110 era" },
        { icon: "💿", name: "CDs & CD Players", year: "Replacing cassettes" },
        { icon: "🖨️", name: "Inkjet Printers", year: "Home printing begins" },
        { icon: "🌐", name: "WWW & Email", year: "Public access starts" },
        { icon: "🎮", name: "PlayStation 1", year: "Just released" }
      ],
      techNotYet: [
        { icon: "🔍", name: "Google Search", year: "Invented in 1998" },
        { icon: "📖", name: "Wikipedia", year: "2001" },
        { icon: "💬", name: "WhatsApp / SMS culture", year: "Late 1990s for SMS" },
        { icon: "🎵", name: "MP3 Players", year: "Late 1990s" },
        { icon: "📸", name: "Digital Cameras (affordable)", year: "Late 1990s" },
        { icon: "📡", name: "Broadband Internet", year: "Late 1990s–2000" }
      ],
      lost: [
        { icon: "📼", name: "Blockbuster Video", desc: "10,000 stores worldwide — Friday night ritual" },
        { icon: "☎️", name: "STD/ISD Booths", desc: "Yellow phone booths on every street for long-distance calls" },
        { icon: "💾", name: "Floppy Disks", desc: "The iconic save icon was a real thing" },
        { icon: "📰", name: "Classified Ads", desc: "Looking for a job or house? Newspaper ads were the only way" },
        { icon: "🎪", name: "Circus Tours", desc: "The Great Bombay Circus had real audiences" },
        { icon: "📻", name: "Radio Ceylon / Vividh Bharati", desc: "Before FM, this was how Indians heard music" }
      ],
      famous: [
        { avatar: "👶", name: "Zayn Malik", known: "Singer, born 1993" },
        { avatar: "🎤", name: "A.R. Rahman", known: "Roja era fame" },
        { avatar: "🏏", name: "Sachin Tendulkar", known: "ODI legend building" },
        { avatar: "🎬", name: "Aishwarya Rai", known: "Miss World 1994" },
        { avatar: "🌟", name: "Priyanka Chopra", known: "Teen years" }
      ]
    },
    india: [
      { icon: "💹", title: "Liberalisation Era", body: "India's economy booms after 1991 reforms. Foreign companies enter. Pepsi, Coca-Cola, McDonald's arrive. Middle class explodes." },
      { icon: "📡", title: "Cable TV Revolution", body: "Zee TV, Star Plus, Sony launch. Cable wallah connects your home. Indian families discover 24-hour entertainment." },
      { icon: "🏏", title: "Cricket Fever", body: "India nearly wins the 1996 World Cup. Sachin's 45 in Kolkata. Sri Lanka wins — India devastated. Crowd sets fire to stadium." },
      { icon: "🎵", title: "Music Explosion", body: "DDLJ songs everywhere. Lucky Ali, Asha Bhosle, Udit Narayan dominate. Cassette pirates on every footpath." },
      { icon: "📱", title: "Phone Revolution Begins", body: "Landline phones still rare. First mobile networks launch. A mobile phone costs ₹45,000 — only the super-rich have them." },
      { icon: "🛍️", title: "Shopping Culture", body: "No malls yet. Sarojini Nagar, Crawford Market, Linking Road are the hot spots. Handloom House is elite shopping." }
    ]
  },

  2000: {
    world: {
      population: "6.1 Billion",
      birthsPerDay: "~365,000",
      snapshot: [
        { icon: "🌍", label: "World Population", value: "6.1B", sub: "people on Earth" },
        { icon: "🌐", label: "Internet Users", value: "~361M", sub: "worldwide" },
        { icon: "📱", label: "Mobile Users", value: "~738M", sub: "globally" },
        { icon: "💻", label: "Dot-com Boom", value: "Peak!", sub: "then crash in April" },
        { icon: "🎭", label: "Y2K Bug", value: "Survived", sub: "world didn't end!" },
        { icon: "💰", label: "Sensex", value: "~5,000", sub: "BSE India" }
      ],
      headlines: [
        { tag: "MILLENNIUM", text: "World Celebrates Y2K — And Survives!", desc: "The feared Y2K bug causes minimal chaos. The millennium is greeted with fireworks, parties, and relief worldwide." },
        { tag: "TECH", text: "Dot-com Bubble Bursts", desc: "NASDAQ crashes 78%. Hundreds of Internet companies vanish. Amazon, Google survive." },
        { tag: "INDIA", text: "Kargil War Victory One Year On", desc: "India reflects on the Kargil victory. A new patriotism sweeps the nation. 'Lakshya' and 'LOC Kargil' films in production." },
        { tag: "SPORTS", text: "Sydney Olympics — India's Karnam Malleswari Wins Bronze", desc: "India's first woman Olympic medallist. Weightlifter Karnam Malleswari makes history in Sydney." },
        { tag: "WORLD", text: "Putin Rises to Power in Russia", desc: "Vladimir Putin becomes Acting President on New Year's Day 2000. A defining moment of the new century." }
      ],
      movies: [
        { emoji: "🤖", title: "Mission: Impossible 2", sub: "Tom Cruise blockbuster" },
        { emoji: "🥊", title: "Gladiator", sub: "Epic Oscar winner" },
        { emoji: "🌀", title: "Kaho Naa Pyaar Hai", sub: "Hrithik Roshan debut" },
        { emoji: "🕵️", title: "Erin Brockovich", sub: "Julia Roberts" },
        { emoji: "🏆", title: "Josh", sub: "Shah Rukh Khan" }
      ],
      music: [
        { emoji: "🎵", title: "Pyaar Tune Kya Kiya", sub: "Udit Narayan hit" },
        { emoji: "🎸", title: "It's My Life", sub: "Bon Jovi" },
        { emoji: "🎤", title: "Breathe", sub: "Faith Hill" },
        { emoji: "🎶", title: "Shape of My Heart", sub: "Backstreet Boys" },
        { emoji: "🎵", title: "Lucky", sub: "Britney Spears" }
      ],
      tv: [
        { emoji: "🎭", title: "Kaun Banega Crorepati", sub: "First season — India glued to TV" },
        { emoji: "🏠", title: "Kyunki Saas Bhi...", sub: "Ekta Kapoor's mega-serial" },
        { emoji: "👨‍🍳", title: "Survivor", sub: "Reality TV is born" },
        { emoji: "📺", title: "Shaktimaan", sub: "India's superhero — cult show" },
        { emoji: "🎪", title: "Big Brother", sub: "UK reality TV explodes" }
      ],
      prices: [
        { icon: "⛽", name: "Petrol (India)", then: "₹25/L", now: "₹100/L", arrow: "📈" },
        { icon: "☕", name: "Coffee (café)", then: "₹15", now: "₹200", arrow: "📈" },
        { icon: "📱", name: "Nokia 3310", then: "₹8,000", now: "₹5,000 (relaunch)", arrow: "📉" },
        { icon: "🎬", name: "Cinema ticket", then: "₹40", now: "₹300", arrow: "📈" },
        { icon: "🍔", name: "McDonald's Burger", then: "₹29", now: "₹120", arrow: "📈" }
      ],
      techExisted: [
        { icon: "📱", name: "Nokia 3310 Phone", year: "Legend launched!" },
        { icon: "💿", name: "CD-ROMs", year: "Primary storage media" },
        { icon: "🌐", name: "Yahoo!, AltaVista", year: "Top search engines" },
        { icon: "💬", name: "Yahoo Chat / ICQ", year: "Online chatting" },
        { icon: "🎮", name: "PlayStation 2", year: "Just launched" },
        { icon: "🖥️", name: "Windows 98/ME", year: "Dominant OS" }
      ],
      techNotYet: [
        { icon: "📷", name: "Instagram", year: "2010" },
        { icon: "📘", name: "Facebook", year: "2004" },
        { icon: "🎵", name: "Spotify", year: "2008" },
        { icon: "📺", name: "YouTube", year: "2005" },
        { icon: "📱", name: "Smartphones (iPhone)", year: "2007" },
        { icon: "🗣️", name: "Bluetooth earphones", year: "Early 2000s" }
      ],
      lost: [
        { icon: "☎️", name: "STD Booths (peak era)", desc: "Every corner had a yellow STD/ISD booth — Rs 3/min calls" },
        { icon: "💿", name: "CD-ROM Encyclopedias", desc: "Encarta — the Wikipedia of its day, on a shiny disc" },
        { icon: "📟", name: "Pagers", desc: "Your doctor, your boss — everyone had a pager" },
        { icon: "🖥️", name: "Internet Cafés", desc: "Paying Rs 20/hr to check email felt futuristic" },
        { icon: "📺", name: "DD Metro", desc: "Doordarshan's hip metro channel before private TV took over" },
        { icon: "🃏", name: "Tazo Cards", desc: "Kids collected them from Cheetos — playground currency" }
      ],
      famous: [
        { avatar: "🎤", name: "Arijit Singh", known: "Teen years" },
        { avatar: "⚽", name: "Neymar Jr.", known: "Just a kid in Brazil" },
        { avatar: "🏏", name: "Virat Kohli", known: "Delhi under-15 cricket" },
        { avatar: "🎬", name: "Deepika Padukone", known: "Bangalore school days" },
        { avatar: "⭐", name: "Selena Gomez", known: "Singer/actress — born 1992" }
      ]
    },
    india: [
      { icon: "📡", title: "TV Boom", body: "Kaun Banega Crorepati with Amitabh Bachchan becomes the most-watched show ever. India sits in front of TV every night at 9 PM." },
      { icon: "💻", title: "IT Revolution", body: "Infosys, Wipro, TCS are global names. Bangalore becomes India's Silicon Valley. Software engineers are the new heroes." },
      { icon: "🏏", title: "Cricket", body: "Sachin Tendulkar is a god. Match-fixing scandal rocks cricket. Hansie Cronje confesses. India is heartbroken." },
      { icon: "🛣️", title: "Golden Quadrilateral", body: "Atal Bihari Vajpayee announces India's biggest-ever highway project. 5,846 km connecting Delhi-Mumbai-Chennai-Kolkata." },
      { icon: "📱", title: "Mobile Slowly Arriving", body: "Mobile phones still cost ₹8,000–₹15,000. Incoming calls cost Rs 16/min. Texting costs Rs 5/SMS." },
      { icon: "🎵", title: "Music", body: "Alisha Chinai, Lucky Ali, Sonu Nigam rule the airwaves. Coke Studio hasn't happened yet. Cassettes and CDs coexist." }
    ]
  },

  2002: {
    world: {
      population: "6.2 Billion",
      birthsPerDay: "~370,000",
      snapshot: [
        { icon: "🌍", label: "World Population", value: "6.2B", sub: "people on Earth" },
        { icon: "🌐", label: "Internet Users", value: "~569M", sub: "worldwide" },
        { icon: "📱", label: "Mobile Users", value: "~1.15B", sub: "globally" },
        { icon: "🎬", label: "Bollywood", value: "~1,000", sub: "films per year" },
        { icon: "💰", label: "Sensex", value: "~3,300", sub: "BSE India" },
        { icon: "🌡️", label: "Avg Global Temp", value: "+0.56°C", sub: "vs 20th century avg" }
      ],
      headlines: [
        { tag: "INDIA", text: "Godhra Train Incident & Gujarat Riots", desc: "One of India's darkest chapters unfolds. Communal tensions spark riots in Gujarat. The nation watches in horror and grief." },
        { tag: "WORLD", text: "Bali Bombings Shock Southeast Asia", desc: "Terrorist bombings kill 202 people in a tourist resort in Bali, Indonesia. The world's innocence shatters again." },
        { tag: "SPORT", text: "Brazil Wins FIFA World Cup in Japan/South Korea", desc: "Ronaldo redeems himself after 1998. Brazil win their 5th World Cup, defeating Germany 2-0 in the final." },
        { tag: "SCIENCE", text: "International Space Station Grows", desc: "ISS receives new modules and crew. Humans are now permanently living in space." },
        { tag: "INDIA", text: "India Successfully Test-Fires Agni III Missile", desc: "India asserts its strategic independence with a successful medium-range ballistic missile test." }
      ],
      movies: [
        { emoji: "💍", title: "Lord of the Rings: Two Towers", sub: "Epic fantasy" },
        { emoji: "🕷️", title: "Spider-Man", sub: "Tobey Maguire debut" },
        { emoji: "🎭", title: "Devdas", sub: "SRK, Madhuri, Ash — iconic" },
        { emoji: "💣", title: "Raaz", sub: "Bollywood horror hit" },
        { emoji: "⭐", title: "Saathiya", sub: "Vivek Oberoi classic" }
      ],
      music: [
        { emoji: "🎵", title: "Shakira — Whenever Wherever", sub: "Global smash hit" },
        { emoji: "🎸", title: "Eminem — Without Me", sub: "Rap god era" },
        { emoji: "🎤", title: "Shreya Ghoshal debuts", sub: "Devdas soundtrack" },
        { emoji: "🎶", title: "Nelly — Hot in Herre", sub: "Summer anthem" },
        { emoji: "🎵", title: "Nickelback — How You Remind Me", sub: "Rock anthem" }
      ],
      tv: [
        { emoji: "🏝️", title: "American Idol", sub: "Season 1 — Kelly Clarkson wins" },
        { emoji: "💃", title: "Fame Gurukul (era)", sub: "Reality TV reaching India" },
        { emoji: "😂", title: "Friends — Season 8", sub: "Still peak TV" },
        { emoji: "🏠", title: "Kahiin To Hoga", sub: "India's TV serial craze" },
        { emoji: "🎭", title: "24 — Season 1", sub: "Jack Bauer is a hero" }
      ],
      prices: [
        { icon: "⛽", name: "Petrol (India)", then: "₹28/L", now: "₹100/L", arrow: "📈" },
        { icon: "🍿", name: "Movie Ticket (PVR)", then: "₹75", now: "₹350", arrow: "📈" },
        { icon: "📱", name: "Nokia 3310", then: "₹6,000", now: "₹4,000 (relaunch)", arrow: "📉" },
        { icon: "☕", name: "Café Coffee Day latte", then: "₹40", now: "₹200", arrow: "📈" },
        { icon: "🏠", name: "Delhi 2BHK Rent", then: "₹4,000/mo", now: "₹30,000/mo", arrow: "📈" }
      ],
      techExisted: [
        { icon: "📱", name: "Nokia 3310 / 3210", year: "Most popular phone" },
        { icon: "💻", name: "Windows XP", year: "Just launched Oct 2001" },
        { icon: "💿", name: "MP3 Players (iPod)", year: "iPod launched Oct 2001" },
        { icon: "📧", name: "Yahoo Mail / Hotmail", year: "Primary email services" },
        { icon: "💬", name: "Yahoo Messenger", year: "Everyone's on it" },
        { icon: "🎮", name: "PlayStation 2 / GameBoy", year: "Gaming era" }
      ],
      techNotYet: [
        { icon: "📘", name: "Facebook", year: "Launched 2004" },
        { icon: "📺", name: "YouTube", year: "Launched 2005" },
        { icon: "📱", name: "iPhone / Smartphones", year: "2007 onwards" },
        { icon: "📷", name: "Instagram", year: "2010" },
        { icon: "🎵", name: "Spotify", year: "2008" },
        { icon: "🚕", name: "Uber / Ola", year: "2009–2010" }
      ],
      lost: [
        { icon: "📞", name: "PCO / STD Booths", desc: "The yellow & blue phone booths — calling home for Rs 2/min" },
        { icon: "📼", name: "VHS Video Cassettes", desc: "Rewinding tapes, renting movies from local 'video libraries'" },
        { icon: "💬", name: "Yahoo Messenger Sound", desc: "That iconic 'ding' when a message arrived — pure nostalgia" },
        { icon: "📰", name: "Femina Miss India era glam", desc: "When winning Miss India was the biggest moment in a girl's life" },
        { icon: "🎮", name: "LAN Gaming Cafés", desc: "Counter-Strike, NFS on rented PCs for Rs 15/hr" },
        { icon: "🎪", name: "Bajaj Chetak Scooter", desc: "India's original family vehicle — finally discontinued in 2005" }
      ],
      famous: [
        { avatar: "🎤", name: "Shreya Ghoshal", known: "Debuts in Devdas (2002)" },
        { avatar: "🏋️", name: "Saina Nehwal era", known: "Badminton rising" },
        { avatar: "🎬", name: "Ranbir Kapoor", known: "In film school" },
        { avatar: "⚽", name: "Kylian Mbappé", known: "Born Dec 1998, toddler" },
        { avatar: "🏏", name: "Shubman Gill", known: "Born Sept 1999" }
      ]
    },
    india: [
      { icon: "💻", title: "IT Superpower", body: "India's IT sector is booming. Infosys, Wipro, TCS are global giants. Bangalore, Hyderabad are world-class tech hubs. The software engineer becomes India's new hero." },
      { icon: "📱", title: "Mobile Revolution", body: "Airtel, Vodafone (then Hutch), BSNL fight for subscribers. Incoming calls are now free. A mobile phone costs Rs 5,000–8,000. SMS culture begins: 'whr r u? gtg'" },
      { icon: "🏏", title: "Cricket", body: "India wins the NatWest series final. Yuvraj and Kaif chase 326 — one of cricket's greatest victories. The nation erupts." },
      { icon: "🎬", title: "Bollywood Gold", body: "Devdas is a cinematic masterpiece. Saathiya, Raaz, Aankhen are blockbusters. SRK is the biggest star in the world. Hrithik is the Greek God of Bollywood." },
      { icon: "🛍️", title: "Consumer Boom", body: "India's first malls are opening. DLF City Centre in Delhi. Shoppers Stop is premium. CCD is the hip meeting spot for young India." },
      { icon: "🎵", title: "Music Scene", body: "Shankar-Ehsaan-Loy and A.R. Rahman are reinventing film music. Euphoria, Lucky Ali rule the pop scene. T-Series cassettes sell by the million." }
    ]
  },

  2005: {
    world: {
      population: "6.5 Billion",
      birthsPerDay: "~380,000",
      snapshot: [
        { icon: "🌍", label: "World Population", value: "6.5B", sub: "people on Earth" },
        { icon: "🌐", label: "Internet Users", value: "~1B", sub: "worldwide" },
        { icon: "📺", label: "YouTube Launched", value: "2005", sub: "changed everything" },
        { icon: "📘", label: "Facebook Users", value: "~5.5M", sub: "mostly college students" },
        { icon: "🎮", label: "Xbox 360 Launches", value: "Nov 2005", sub: "gaming revolution" },
        { icon: "📱", label: "Mobile Users", value: "~2.2B", sub: "globally" }
      ],
      headlines: [
        { tag: "INDIA", text: "7/7 Mumbai Train Blasts Kill 209", desc: "Coordinated terrorist bombings rip through Mumbai's local trains during rush hour. Mumbai's spirit is shaken but unbroken." },
        { tag: "WORLD", text: "Hurricane Katrina Devastates New Orleans", desc: "The costliest natural disaster in US history. 1,800 dead. America's most vulnerable are left behind." },
        { tag: "TECH", text: "YouTube Launches — Video Sharing Changes the World", desc: "A simple website where anyone can upload videos launches in February 2005. The world will never be the same." },
        { tag: "INDIA", text: "India's Economy Grows 9% — Fastest in History", desc: "India's GDP growth hits 9%. The middle class explodes. 'India Shining' becomes a reality." },
        { tag: "SCIENCE", text: "Deep Impact Mission Hits a Comet", desc: "NASA's Deep Impact spacecraft collides with a comet to study its composition — science fiction becomes fact." }
      ],
      movies: [
        { emoji: "🧙", title: "Harry Potter: Goblet of Fire", sub: "Wizarding world peak" },
        { emoji: "🎭", title: "No Entry", sub: "Bollywood comedy king" },
        { emoji: "🤖", title: "Star Wars: Episode III", sub: "Saga concludes" },
        { emoji: "🕺", title: "Salaam Namaste", sub: "New-age romance" },
        { emoji: "🦁", title: "The Chronicles of Narnia", sub: "Fantasy epic" }
      ],
      music: [
        { emoji: "🎵", title: "Crazy in Love", sub: "Beyoncé era" },
        { emoji: "🎸", title: "Boulevard of Broken Dreams", sub: "Green Day" },
        { emoji: "🎤", title: "Kuch Khas Hai", sub: "Fashion OST era" },
        { emoji: "🎶", title: "Hollaback Girl", sub: "Gwen Stefani" },
        { emoji: "🎵", title: "Since U Been Gone", sub: "Kelly Clarkson" }
      ],
      tv: [
        { emoji: "🏝️", title: "Lost — Season 2", sub: "Must-watch mystery drama" },
        { emoji: "💊", title: "Grey's Anatomy", sub: "Medical drama begins" },
        { emoji: "🏆", title: "Indian Idol", sub: "First season in India" },
        { emoji: "🎤", title: "Sa Re Ga Ma Pa", sub: "Singing reality TV huge" },
        { emoji: "👨‍💼", title: "The Office (US)", sub: "Comedy classic begins" }
      ],
      prices: [
        { icon: "⛽", name: "Petrol (India)", then: "₹40/L", now: "₹100/L", arrow: "📈" },
        { icon: "📱", name: "Motorola RAZR", then: "₹22,000", now: "N/A (dead)", arrow: "💀" },
        { icon: "☕", name: "Starbucks coffee (Mumbai)", then: "₹120", now: "₹500", arrow: "📈" },
        { icon: "🎬", name: "Multiplex ticket", then: "₹100", now: "₹400", arrow: "📈" },
        { icon: "🍟", name: "McAloo Tikki Burger", then: "₹20", now: "₹80", arrow: "📈" }
      ],
      techExisted: [
        { icon: "📺", name: "YouTube", year: "Just launched Feb 2005" },
        { icon: "📘", name: "Facebook", year: "Launched 2004" },
        { icon: "🎵", name: "iTunes & iPod", year: "Music revolution" },
        { icon: "💬", name: "Skype", year: "Video calling goes mainstream" },
        { icon: "📱", name: "Motorola RAZR", year: "Slimmest phone ever" },
        { icon: "🔍", name: "Google Maps", year: "Just launched!" }
      ],
      techNotYet: [
        { icon: "📱", name: "iPhone", year: "2007" },
        { icon: "📷", name: "Instagram", year: "2010" },
        { icon: "🎵", name: "Spotify", year: "2008" },
        { icon: "🚕", name: "Uber", year: "2009" },
        { icon: "📺", name: "Netflix Streaming", year: "2007" },
        { icon: "💬", name: "WhatsApp", year: "2009" }
      ],
      lost: [
        { icon: "📱", name: "Motorola RAZR", desc: "The thinnest, coolest phone — a status symbol like no other" },
        { icon: "💿", name: "CD Music Shops", desc: "T-Series, HMV stores selling CDs. Browsing albums was an experience" },
        { icon: "📺", name: "DD National Primetime", desc: "Before private news channels, DD was the only source of news" },
        { icon: "🎮", name: "Nokia Snake Game", desc: "Hours of addictive gameplay on a monochrome screen" },
        { icon: "🖥️", name: "Dial-up Modem Internet", desc: "That screeching sound — waiting 5 mins to load a webpage" },
        { icon: "📰", name: "Newspapers as only morning info", desc: "Before social media, the morning paper was how you knew the world" }
      ],
      famous: [
        { avatar: "🎤", name: "Billie Eilish", known: "Born Mar 2001, just a kid" },
        { avatar: "🏏", name: "Rishabh Pant", known: "Born Oct 1997" },
        { avatar: "⚽", name: "Marcus Rashford", known: "Born Oct 1997" },
        { avatar: "🎬", name: "Janhvi Kapoor", known: "Born Mar 1997" },
        { avatar: "🌟", name: "Alia Bhatt", known: "Just 12 in 2005" }
      ]
    },
    india: [
      { icon: "💹", title: "Economic Boom", body: "India's GDP grows at 9%. Sensex crosses 8,000. Middle class India explodes — cars, TVs, mobile phones become accessible to millions." },
      { icon: "📱", title: "Mobile Revolution Completes", body: "Hutch's pug ad becomes iconic. India adds 6 million subscribers per month. SMS culture is at peak. 'Hello Tune' feature launches." },
      { icon: "🛍️", title: "Mall Culture Arrives", body: "DLF Malls, Phoenix Market City — India's shopping revolution. Teenagers have a new hangout. India discovers 'food courts'." },
      { icon: "🎬", title: "Bollywood Global", body: "Salaam Namaste, No Entry are huge hits. Bollywood discovers multiplex audiences. SRK's Don is being planned." },
      { icon: "📡", title: "News Channel War", body: "NDTV, Aaj Tak, India TV, Star News all compete fiercely. Breaking news becomes entertainment. Arnab Goswami debuts." },
      { icon: "🚗", title: "Cars for Middle Class", body: "Maruti 800 still dominates. Hyundai Santro is a hit. Tata Indica changes what a budget car can be. Roads begin to fill up." }
    ]
  },

  2008: {
    world: {
      population: "6.7 Billion",
      birthsPerDay: "~385,000",
      snapshot: [
        { icon: "🌍", label: "World Population", value: "6.7B", sub: "people on Earth" },
        { icon: "📱", label: "iPhone Era Begins", value: "iPhone 3G", sub: "just launched" },
        { icon: "💹", label: "Global Recession", value: "2008", sub: "worst since 1929" },
        { icon: "📘", label: "Facebook Users", value: "~100M", sub: "growing fast" },
        { icon: "🏅", label: "Olympics", value: "Beijing", sub: "most spectacular ever" },
        { icon: "🌐", label: "Internet Users", value: "~1.5B", sub: "worldwide" }
      ],
      headlines: [
        { tag: "INDIA", text: "26/11 Mumbai Terror Attack", desc: "Pakistani terrorists attack Mumbai for 60 hours. 166 killed. Taj Hotel, CST Station under siege. India's darkest hour." },
        { tag: "WORLD", text: "Global Financial Crisis — Banks Collapse", desc: "Lehman Brothers falls. The worst recession since 1929. Jobs, savings, homes lost worldwide." },
        { tag: "HISTORY", text: "Barack Obama Elected — First Black US President", desc: "America makes history. 'Yes We Can.' The world watches in tears of joy." },
        { tag: "SPORTS", text: "Beijing Olympics — Michael Phelps Wins 8 Golds", desc: "Michael Phelps becomes the greatest Olympian ever. Usain Bolt destroys world records." },
        { tag: "INDIA", text: "India Lands Chandrayaan-1 on the Moon", desc: "India's first lunar mission launches. India joins the elite space club. Jai Hind!" }
      ],
      movies: [
        { emoji: "🦇", title: "The Dark Knight", sub: "Greatest superhero film ever" },
        { emoji: "💃", title: "Rab Ne Bana Di Jodi", sub: "SRK-Anushka magic" },
        { emoji: "🤖", title: "WALL-E", sub: "Pixar masterpiece" },
        { emoji: "🏃", title: "Race", sub: "Bollywood thriller" },
        { emoji: "🌏", title: "Slumdog Millionaire", sub: "Oscar for India-set film" }
      ],
      music: [
        { emoji: "🎵", title: "Jai Ho (planning era)", sub: "AR Rahman preparing" },
        { emoji: "🎸", title: "Lollipop — Lil Wayne", sub: "Hip-hop peak" },
        { emoji: "🎤", title: "Single Ladies", sub: "Beyoncé's biggest hit" },
        { emoji: "🎶", title: "Pehli Nazar Mein", sub: "Race OST smash" },
        { emoji: "🎵", title: "Disturbia", sub: "Rihanna hit" }
      ],
      tv: [
        { emoji: "⚗️", title: "Breaking Bad", sub: "Series begins — TV is changed" },
        { emoji: "🎭", title: "Mad Men", sub: "Critically acclaimed drama" },
        { emoji: "💃", title: "Jhalak Dikhhla Jaa", sub: "India's dance show king" },
        { emoji: "🏠", title: "Big Bang Theory", sub: "Science comedy smash" },
        { emoji: "🌹", title: "Bigg Boss (Shilpa era)", sub: "India's reality TV gold" }
      ],
      prices: [
        { icon: "⛽", name: "Petrol (India)", then: "₹50/L", now: "₹100/L", arrow: "📈" },
        { icon: "📱", name: "Nokia N95", then: "₹25,000", now: "N/A (dead)", arrow: "💀" },
        { icon: "🎬", name: "Movie Multiplex", then: "₹150", now: "₹400", arrow: "📈" },
        { icon: "🍕", name: "Domino's pizza", then: "₹120", now: "₹350", arrow: "📈" },
        { icon: "✈️", name: "Air India Economy", then: "₹3,500", now: "₹6,000", arrow: "📈" }
      ],
      techExisted: [
        { icon: "📱", name: "iPhone 3G", year: "Just launched July 2008" },
        { icon: "🤖", name: "Android Phones", year: "First Android Sep 2008" },
        { icon: "📺", name: "YouTube", year: "3 years old, massive" },
        { icon: "📘", name: "Facebook", year: "100M users" },
        { icon: "🎵", name: "Spotify", year: "Launched Oct 2008" },
        { icon: "💬", name: "WhatsApp", year: "Launched Jan 2009 (soon!)" }
      ],
      techNotYet: [
        { icon: "📷", name: "Instagram", year: "2010" },
        { icon: "🐦", name: "Twitter mainstream", year: "Growing in 2008" },
        { icon: "🚕", name: "Uber in India", year: "2013" },
        { icon: "📱", name: "Jio 4G", year: "2016" },
        { icon: "💳", name: "UPI / Paytm", year: "2010–2016" },
        { icon: "📺", name: "Netflix in India", year: "2016" }
      ],
      lost: [
        { icon: "📱", name: "Nokia N-series phones", desc: "N95, N73 — the smartphones before smartphones" },
        { icon: "💿", name: "Physical CD Stores", desc: "Music World, Planet M — browsing CDs on a Saturday afternoon" },
        { icon: "🖥️", name: "Internet Explorer 6", desc: "The web browser everyone hated but everyone used" },
        { icon: "📺", name: "Video on Demand by DVD", desc: "Netflix was only DVDs by mail — streaming was science fiction" },
        { icon: "🎮", name: "Zenga / Flash Games", desc: "Farmville, Flash mini-games before apps existed" },
        { icon: "📞", name: "Calling Cards", desc: "Prepaid international calling cards — calling abroad was expensive" }
      ],
      famous: [
        { avatar: "🎤", name: "Alia Bhatt", known: "Just 15, school days" },
        { avatar: "🏏", name: "Prithvi Shaw", known: "Born Nov 1999, cricket prodigy" },
        { avatar: "⚽", name: "Gavi", known: "Born Feb 2004, Spain" },
        { avatar: "🎬", name: "Suhana Khan", known: "Just a child, SRK's daughter" },
        { avatar: "🎵", name: "Dua Lipa", known: "Born Aug 1995, teenage years" }
      ]
    },
    india: [
      { icon: "🚀", title: "Chandrayaan on Moon", body: "India's Chandrayaan-1 mission reaches the Moon. ISRO discovers evidence of water on the Moon's surface. India is in the space elite." },
      { icon: "🎬", title: "Bollywood Reinvents", body: "The Dark Knight inspires Indian filmmakers. Slumdog Millionaire wins 8 Oscars. India is proud and conflicted. Dil Chata Hai generation is in college." },
      { icon: "💔", title: "26/11 Changes India", body: "Mumbai attacks change India's security, politics, and psychology forever. Tata Tea's 'Jaago Re' campaign awakens civic responsibility." },
      { icon: "🏏", title: "T20 Cricket Born", body: "IPL launches in 2008 — Rajasthan Royals win. Cricket becomes Bollywood. Cheerleaders, DJs, 4-hour matches. India is obsessed." },
      { icon: "📱", title: "Smartphone Era Begins", body: "iPhone and Android arrive. Blackberry is elite. Most Indians still use feature phones — but change is coming fast." },
      { icon: "🛣️", title: "Infrastructure Boom", body: "Delhi Metro expands. New flyovers, expressways. India's cities are transforming. Gurugram and Noida become IT hubs." }
    ]
  },

  2010: {
    world: {
      population: "6.9 Billion",
      birthsPerDay: "~385,000",
      snapshot: [
        { icon: "🌍", label: "World Population", value: "6.9B", sub: "people on Earth" },
        { icon: "📱", label: "iPhone 4", value: "Launched", sub: "changed design forever" },
        { icon: "📷", label: "Instagram Launched", value: "Oct 2010", sub: "photo era begins" },
        { icon: "📘", label: "Facebook Users", value: "~500M", sub: "worldwide" },
        { icon: "🏆", label: "FIFA World Cup", value: "South Africa", sub: "First African World Cup" },
        { icon: "💰", label: "India GDP Growth", value: "9.3%", sub: "economic powerhouse" }
      ],
      headlines: [
        { tag: "WORLD", text: "Haiti Earthquake Kills 230,000", desc: "One of the deadliest earthquakes in history devastates Haiti. Global outpouring of aid." },
        { tag: "SPORT", text: "Spain Wins FIFA World Cup for First Time", desc: "Spain's tiki-taka revolution peaks. Andrés Iniesta scores the World Cup winner in South Africa." },
        { tag: "TECH", text: "Instagram Launches — Social Media Is Now Visual", desc: "A small app launches in October 2010 with a simple filter. The world's self-presentation changes forever." },
        { tag: "INDIA", text: "CWG Corruption Scandal Rocks India", desc: "Commonwealth Games Delhi 2010 is marred by massive corruption. India still puts on a show that impresses the world." },
        { tag: "INDIA", text: "India Celebrates 60th Republic Day in Style", desc: "India marks its growing stature as a global power with grand celebrations." }
      ],
      movies: [
        { emoji: "🌀", title: "Inception", sub: "Nolan's mind-bending masterpiece" },
        { emoji: "🦋", title: "Dabangg", sub: "Salman Khan returns to glory" },
        { emoji: "🤺", title: "Raajneeti", sub: "Political Bollywood epic" },
        { emoji: "👤", title: "The Social Network", sub: "Facebook story — Oscar winner" },
        { emoji: "🚂", title: "Enthiran (Robot)", sub: "Rajinikanth sci-fi blockbuster" }
      ],
      music: [
        { emoji: "🎵", title: "Tere Mast Mast Do Nain", sub: "Dabangg hit" },
        { emoji: "🎸", title: "Telephone", sub: "Lady Gaga & Beyoncé" },
        { emoji: "🎤", title: "Love the Way You Lie", sub: "Eminem & Rihanna" },
        { emoji: "🎶", title: "Airplanes", sub: "B.o.B & Hayley Williams" },
        { emoji: "🎵", title: "California Gurls", sub: "Katy Perry" }
      ],
      tv: [
        { emoji: "⚗️", title: "Breaking Bad Season 3", sub: "Walter White is terrifying" },
        { emoji: "🐉", title: "Game of Thrones planning", sub: "HBO gears up for 2011 launch" },
        { emoji: "💃", title: "Dance India Dance", sub: "Street dance revolution" },
        { emoji: "😂", title: "Modern Family", sub: "Comedy hit" },
        { emoji: "🌹", title: "Bigg Boss 4", sub: "India's reality obsession" }
      ],
      prices: [
        { icon: "⛽", name: "Petrol (India)", then: "₹55/L", now: "₹100/L", arrow: "📈" },
        { icon: "📱", name: "iPhone 4", then: "₹35,000", now: "₹80,000 (iPhone 16)", arrow: "📈" },
        { icon: "☕", name: "Café latte", then: "₹80", now: "₹250", arrow: "📈" },
        { icon: "🏠", name: "Mumbai flat (2BHK)", then: "₹50L", now: "₹2.5Cr+", arrow: "📈" },
        { icon: "🎬", name: "Multiplex ticket", then: "₹150", now: "₹450", arrow: "📈" }
      ],
      techExisted: [
        { icon: "📱", name: "iPhone 4", year: "Just launched June 2010" },
        { icon: "📷", name: "Instagram", year: "Launched Oct 2010" },
        { icon: "📘", name: "Facebook", year: "500M users" },
        { icon: "🎵", name: "Spotify", year: "Streaming music is growing" },
        { icon: "💬", name: "WhatsApp", year: "Just launched Jan 2009" },
        { icon: "📺", name: "YouTube HD", year: "HD video goes mainstream" }
      ],
      techNotYet: [
        { icon: "🚕", name: "Uber in India", year: "2013" },
        { icon: "📱", name: "Jio 4G", year: "2016" },
        { icon: "💳", name: "UPI Payments", year: "2016" },
        { icon: "📺", name: "Netflix in India", year: "2016" },
        { icon: "🛵", name: "Zomato Delivery", year: "2015 onwards" },
        { icon: "📸", name: "Snapchat", year: "2011" }
      ],
      lost: [
        { icon: "📱", name: "Nokia Feature Phones", desc: "The era of simple phones with lasting battery life" },
        { icon: "📺", name: "Reality TV innocence", desc: "Before Instagram, reality TV was how you became famous" },
        { icon: "🎮", name: "Orkut", desc: "India's first social network — 'scraps' and testimonials" },
        { icon: "📧", name: "Orkut Communities", desc: "Your online tribes before Facebook groups existed" },
        { icon: "🖥️", name: "Cybercafé culture", desc: "Before smartphones, this was how teenagers accessed the internet" },
        { icon: "📼", name: "Video rental (dying)", desc: "The last video stores closing — Netflix hasn't arrived yet" }
      ],
      famous: [
        { avatar: "🎤", name: "Adele", known: "Rolling in the Deep era" },
        { avatar: "🏏", name: "Yashasvi Jaiswal", known: "Born Dec 2001" },
        { avatar: "⚽", name: "Pedri", known: "Born Nov 2002, Spain" },
        { avatar: "🎬", name: "Karan Johar's era", known: "KANK aftermath" },
        { avatar: "🌟", name: "Ranveer Singh", known: "Band Baaja Baaraat debut" }
      ]
    },
    india: [
      { icon: "🏆", title: "Commonwealth Games", body: "Delhi hosts the 2010 Commonwealth Games. Despite corruption scandals, India's performance is strong. The opening ceremony wows the world." },
      { icon: "📱", title: "Smartphone Begins", body: "India's smartphone market is nascent. Nokia dominates. Samsung Galaxy S launches. The iPhone era is beginning for India's rich." },
      { icon: "🎬", title: "Bollywood Blockbusters", body: "Dabangg with Salman Khan is the biggest hit of the year. Robot (Enthiran) wows South India. 3 Idiots is still fresh in memory." },
      { icon: "🏏", title: "India's Cricket Peak", body: "India reaches No.1 in Test cricket. MS Dhoni is captain cool. IPL Season 3 is mega-business. Cricket is bigger than ever." },
      { icon: "🌆", title: "City Transformation", body: "Delhi Metro transforms the capital. Mumbai's Bandra-Worli Sea Link opens. India's cities are modernising at record speed." },
      { icon: "🎓", title: "IIT JEE Mania", body: "Getting into IIT is the ultimate dream for every Indian middle-class family. Coaching factories in Kota boom." }
    ]
  },

  2012: {
    world: {
      population: "7.0 Billion",
      birthsPerDay: "~385,000",
      snapshot: [
        { icon: "🌍", label: "World Population", value: "7.0B", sub: "people on Earth" },
        { icon: "📱", label: "Smartphones", value: "~1B", sub: "users worldwide" },
        { icon: "📷", label: "Instagram Users", value: "~27M", sub: "growing fast" },
        { icon: "🏅", label: "London Olympics", value: "2012", sub: "spectacular games" },
        { icon: "🎵", name: "Gangnam Style", value: "1B views", sub: "first YouTube billion" },
        { icon: "💰", label: "India GDP Growth", value: "5.5%", sub: "slowing slightly" }
      ],
      headlines: [
        { tag: "INDIA", text: "Delhi Nirbhaya Case — India Demands Justice", desc: "The brutal gang rape of a young woman on a Delhi bus sparks nationwide protests. India's women's rights movement is born." },
        { tag: "WORLD", text: "Sandy Hook Elementary Shooting Shocks America", desc: "20 children and 6 adults killed in an elementary school. America grieves. Gun debate reignites." },
        { tag: "CULTURE", text: "Gangnam Style Becomes YouTube's First Billion View Video", desc: "PSY's absurd K-pop hit takes the world by storm. K-pop goes global. YouTube proves its power." },
        { tag: "SPORT", text: "Usain Bolt Repeats Olympic Gold in London", desc: "Bolt is the fastest human alive — gold in 100m and 200m again. London Olympics is a triumph." },
        { tag: "TECH", text: "Facebook IPO — $100B Valuation", desc: "Facebook goes public in the biggest tech IPO ever. Mark Zuckerberg becomes one of the world's richest people." }
      ],
      movies: [
        { emoji: "🕷️", title: "The Amazing Spider-Man", sub: "Andrew Garfield swings" },
        { emoji: "🦇", title: "Dark Knight Rises", sub: "Nolan's Batman finale" },
        { emoji: "🎭", title: "Barfi!", sub: "Ranbir Kapoor masterpiece" },
        { emoji: "🌀", title: "Ek Tha Tiger", sub: "Salman-Katrina blockbuster" },
        { emoji: "🏔️", title: "Student of the Year", sub: "Alia, Varun, Siddharth debut" }
      ],
      music: [
        { emoji: "🎵", title: "Gangnam Style", sub: "PSY — 1 billion YouTube views" },
        { emoji: "🎤", title: "Raabta", sub: "Agent Vinod hit" },
        { emoji: "🎸", title: "We Are Young", sub: "fun. anthem of 2012" },
        { emoji: "🎶", title: "Skyfall", sub: "Adele's Bond theme" },
        { emoji: "🎵", title: "Call Me Maybe", sub: "Carly Rae Jepsen" }
      ],
      tv: [
        { emoji: "🐉", title: "Game of Thrones — S2", sub: "TV's biggest show" },
        { emoji: "⚗️", title: "Breaking Bad — S5", sub: "TV's greatest season" },
        { emoji: "🌹", title: "Bigg Boss 6", sub: "Reality TV India" },
        { emoji: "🎤", title: "The Voice India planning", sub: "Singing shows dominate" },
        { emoji: "🏠", title: "Satyamev Jayate", sub: "Aamir Khan's show changes India" }
      ],
      prices: [
        { icon: "⛽", name: "Petrol (India)", then: "₹68/L", now: "₹100/L", arrow: "📈" },
        { icon: "📱", name: "Samsung Galaxy S3", then: "₹30,000", now: "N/A (old)", arrow: "📉" },
        { icon: "☕", name: "Starbucks cappuccino", then: "₹200", now: "₹500", arrow: "📈" },
        { icon: "🎬", name: "Multiplex ticket", then: "₹200", now: "₹450", arrow: "📈" },
        { icon: "🍕", name: "Pizza Hut personal pizza", then: "₹140", now: "₹350", arrow: "📈" }
      ],
      techExisted: [
        { icon: "📱", name: "iPhone 5", year: "Just launched Sept 2012" },
        { icon: "📷", name: "Instagram", year: "27M users" },
        { icon: "🎵", name: "Spotify", year: "Growing in India" },
        { icon: "💬", name: "WhatsApp", year: "250M users" },
        { icon: "🔍", name: "Google Maps (mobile)", year: "Navigation for everyone" },
        { icon: "📺", name: "YouTube", year: "4B views per day" }
      ],
      techNotYet: [
        { icon: "📱", name: "Jio 4G", year: "2016" },
        { icon: "💳", name: "UPI / Google Pay", year: "2016–2017" },
        { icon: "🛵", name: "Swiggy", year: "2014" },
        { icon: "📺", name: "Netflix in India", year: "2016" },
        { icon: "🤖", name: "AI assistants (Siri was just born)", year: "2011" },
        { icon: "🚗", name: "Ola / Uber in India", year: "2010–2013" }
      ],
      lost: [
        { icon: "📱", name: "BlackBerry Phones", desc: "BBM messenger was exclusive — only cool kids had Blackberry" },
        { icon: "🖥️", name: "Internet Explorer dominance", desc: "The browser everyone used and complained about" },
        { icon: "📰", name: "Print newspaper classifieds", desc: "Before Naukri.com took over completely" },
        { icon: "🎮", name: "Flash web games", desc: "Before apps, you played games on Newgrounds, Miniclip" },
        { icon: "🎵", name: "Music CDs era ending", desc: "iTunes and YouTube are killing physical music" },
        { icon: "📷", name: "Digital point-and-shoot cameras", desc: "Before smartphones killed them completely" }
      ],
      famous: [
        { avatar: "🎤", name: "Alia Bhatt", known: "SOTY debut — new star born" },
        { avatar: "🏏", name: "Jasprit Bumrah", known: "Starting IPL career" },
        { avatar: "⚽", name: "Jadon Sancho", known: "Born Mar 2000" },
        { avatar: "🎬", name: "Varun Dhawan", known: "SOTY debut" },
        { avatar: "🌟", name: "Disha Patani", known: "College days in Indore" }
      ]
    },
    india: [
      { icon: "📱", title: "Smartphone India", body: "Affordable Android phones transform India. Samsung, Micromax dominate. WhatsApp becomes the fastest-growing app. BBM is fading." },
      { icon: "🎬", title: "Bollywood New Wave", body: "Barfi! is India's Oscar entry. SOTY launches Alia Bhatt, Varun Dhawan. Ranbir Kapoor is Bollywood's new prince." },
      { icon: "🚂", title: "India's Rail Budget Drama", body: "Mamata Banerjee's last rail budget before TMC. Railway fare hikes are political dynamite in India." },
      { icon: "💪", title: "India Against Corruption", body: "Anna Hazare's movement still fresh. Arvind Kejriwal launches AAP. India's civil society is awakened." },
      { icon: "📡", title: "Social Media India", body: "Facebook has 60M Indian users. Twitter is growing. Political discourse moves online. Digital India is being born." },
      { icon: "🏏", title: "IPL Cricket", body: "IPL Season 5 — KKR wins first title. Shahrukh Khan's team finally lifts the trophy. India goes wild." }
    ]
  },

  2015: {
    world: {
      population: "7.4 Billion",
      birthsPerDay: "~380,000",
      snapshot: [
        { icon: "🌍", label: "World Population", value: "7.4B", sub: "people on Earth" },
        { icon: "📱", label: "Smartphone Users", value: "~2.6B", sub: "worldwide" },
        { icon: "📷", label: "Instagram Users", value: "~300M", sub: "growing massively" },
        { icon: "🚕", label: "Uber", value: "Global", sub: "rides in 60+ countries" },
        { icon: "📺", label: "Netflix India", value: "2016", sub: "coming very soon" },
        { icon: "💰", label: "India GDP", value: "7.4%", sub: "world's fastest growing" }
      ],
      headlines: [
        { tag: "INDIA", text: "Modi Government's Digital India Initiative Launches", desc: "PM Narendra Modi's vision for a digitally empowered India launches. Start-up India follows. India's tech destiny changes." },
        { tag: "WORLD", text: "Paris Climate Agreement — 195 Countries Sign", desc: "The world agrees to limit global warming. A historic moment for the planet." },
        { tag: "WORLD", text: "Paris Terror Attacks Kill 130", desc: "ISIS attacks multiple locations in Paris. The world stands in shock and solidarity." },
        { tag: "INDIA", text: "India's Mars Mission (Mangalyaan) is a Global Success", desc: "India's Mars Orbiter Mission is a triumph. India is the first Asian nation to reach Mars." },
        { tag: "SPORT", text: "India Hosts Cricket World Cup — MS Dhoni's Last Hurrah", desc: "India hosts ICC World Cup 2016 (planning). India cricket is in its golden era." }
      ],
      movies: [
        { emoji: "⭐", title: "Star Wars: The Force Awakens", sub: "The saga returns!" },
        { emoji: "🦁", title: "Bajrangi Bhaijaan", sub: "Salman Khan's masterpiece" },
        { emoji: "🚀", title: "The Martian", sub: "Ridley Scott sci-fi" },
        { emoji: "💀", title: "Bahubali: The Beginning", sub: "India's biggest film ever" },
        { emoji: "🎭", title: "Dil Dhadakne Do", sub: "Zoya Akhtar's gem" }
      ],
      music: [
        { emoji: "🎵", title: "Uptown Funk", sub: "Bruno Mars & Mark Ronson" },
        { emoji: "🎤", title: "Hello", sub: "Adele's comeback" },
        { emoji: "🎸", title: "Tujhe Kitna Chahne Lage", sub: "Kabir Singh era (planning)" },
        { emoji: "🎶", title: "Lean On", sub: "Major Lazer" },
        { emoji: "🎵", title: "See You Again", sub: "Wiz Khalifa tribute" }
      ],
      tv: [
        { emoji: "🐉", title: "Game of Thrones — S5", sub: "Jon Snow falls" },
        { emoji: "💺", title: "House of Cards — S3", sub: "Netflix original peak" },
        { emoji: "🎤", title: "The Voice India", sub: "Singing show era" },
        { emoji: "😂", title: "Kapil Sharma Show", sub: "India's comedy king" },
        { emoji: "🏆", title: "Bigg Boss 9", sub: "Double trouble edition" }
      ],
      prices: [
        { icon: "⛽", name: "Petrol (India)", then: "₹60/L", now: "₹100/L", arrow: "📈" },
        { icon: "📱", name: "iPhone 6", then: "₹53,000", now: "₹80,000 (16)", arrow: "📈" },
        { icon: "🚕", name: "Uber/Ola auto", then: "₹5/km surge", now: "₹15/km", arrow: "📈" },
        { icon: "☕", name: "Starbucks Frappuccino", then: "₹350", now: "₹600", arrow: "📈" },
        { icon: "🏠", name: "Mumbai 2BHK rent", then: "₹25,000/mo", now: "₹60,000+/mo", arrow: "📈" }
      ],
      techExisted: [
        { icon: "📱", name: "iPhone 6 / Android", year: "Smartphones everywhere" },
        { icon: "🚕", name: "Ola / Uber in India", year: "Disrupting taxis" },
        { icon: "🛵", name: "Zomato / Swiggy", year: "Food delivery begins" },
        { icon: "💬", name: "WhatsApp", year: "600M users" },
        { icon: "📷", name: "Instagram", year: "300M users" },
        { icon: "🎵", name: "Gaana / Saavn", year: "Indian music streaming" }
      ],
      techNotYet: [
        { icon: "📱", name: "Jio 4G", year: "Launched Sept 2016" },
        { icon: "💳", name: "UPI / BHIM", year: "2016–2017" },
        { icon: "📺", name: "Netflix India", year: "Jan 2016" },
        { icon: "🤖", name: "AI chatbots (ChatGPT era)", year: "2022 onwards" },
        { icon: "🎵", name: "Reels / TikTok", year: "2016–2018" },
        { icon: "🛒", name: "Quick Commerce (Zepto)", year: "2021" }
      ],
      lost: [
        { icon: "📱", name: "Feature phones (almost gone)", desc: "Nokia's basic phones are fading. Every Indian wants a smartphone now" },
        { icon: "🎵", name: "Compact Discs", desc: "Streaming has killed the CD. Music World stores are empty or closed" },
        { icon: "📺", name: "Cable TV dominance", desc: "Netflix and YouTube are the future. Cable is starting to lose" },
        { icon: "🗺️", name: "Physical Maps & Guidebooks", desc: "Google Maps has made paper maps completely obsolete" },
        { icon: "📷", name: "Standalone digital cameras", desc: "Smartphone cameras are now better than most digital cameras" },
        { icon: "🎮", name: "Internet Cafés", desc: "Now officially dead thanks to personal smartphones and WiFi" }
      ],
      famous: [
        { avatar: "🎤", name: "Alia Bhatt", known: "Udta Punjab — going serious" },
        { avatar: "🏏", name: "Shubman Gill", known: "India U-19 cricket star" },
        { avatar: "🎬", name: "Ranbir Kapoor", known: "Bombay Velvet era" },
        { avatar: "⚽", name: "Kylian Mbappé", known: "Just 16, Monaco academy" },
        { avatar: "🌟", name: "Dua Lipa", known: "Recording first album" }
      ]
    },
    india: [
      { icon: "🚀", title: "Start-up India", body: "Modi launches Start-up India, Stand-up India. Flipkart, Snapdeal, Paytm are unicorns. India's tech ecosystem is exploding." },
      { icon: "🎬", title: "Baahubali Phenomenon", body: "SS Rajamouli's Baahubali changes Indian cinema forever. 'Why did Kattappa kill Baahubali?' becomes India's biggest question." },
      { icon: "📱", title: "Jio Coming Soon", body: "Mukesh Ambani announces Jio. The entire country waits. Mobile data costs ₹200 for 1GB — about to be disrupted forever." },
      { icon: "🏏", title: "MS Dhoni Era Peak", body: "MS Dhoni's CSK, MS Dhoni's India — the captain cool era is at its peak. Virat Kohli is waiting in the wings." },
      { icon: "💸", title: "E-commerce Boom", body: "Flipkart Big Billion Day sales. Amazon India grows. Paytm wallets are everywhere. India's digital commerce takes off." },
      { icon: "🌆", title: "Smart Cities Plan", body: "India announces 100 smart cities project. Delhi, Mumbai, Pune, Bengaluru are transforming at unprecedented speed." }
    ]
  }
};

// Get the closest available year
function getClosestYear(year) {
  const available = Object.keys(YEAR_DATA).map(Number).sort((a,b) => a-b);
  let closest = available[0];
  for (const y of available) {
    if (Math.abs(y - year) < Math.abs(closest - year)) closest = y;
  }
  return closest;
}

// Month names
const MONTH_NAMES = [
  '', 'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

// Ordinal suffix
function ordinal(n) {
  const s = ['th','st','nd','rd'], v = n % 100;
  return n + (s[(v-20)%10] || s[v] || s[0]);
}
