import type { BlogPost, ServiceTime, Belief, Value, Event, Sermon, HistoryEra, HistoryEvent } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    slug: "good-behavior-is-the-beauty-of-a-person",
    title: "Good Behavior Is the Real Beauty of a Person",
    excerpt:
      "In today's world, many people focus on looks, fashion, money, and popularity — but the real beauty of a person is not found there. These 25 scripture-grounded lessons will help you build a beautiful character that God and people admire.",
    category: "Character & Holiness",
    tags: ["Character", "Behavior", "Holiness", "Youth", "Scripture"],
    author: "Dr. Joshua Owoeye",
    date: "2024-01-15",
    readTime: 8,
    featured: true,
    lessonCount: 25,
    content: `
## Introduction

In today's world, many people focus on looks, fashion, money, dressing, shoe, hair styles and popularity — but the real **beauty** of a person is not in those things, the face, clothes, or social media ways.

Good behavior is the real beauty. A handsome or beautiful person with a bad attitude becomes ugly, but even a simple-looking person becomes attractive when they are kind, respectful, and well-behaved.

These 25 lessons will help you build a beautiful character that everyone will admire — parents, friends, teachers, pastors, and most importantly, God.

## The 25 Lessons

**Lesson 1: Character Is Greater Than Appearance**
*Example:* God rejected Saul despite his good looks, but chose David for his good heart (1 Samuel 16:7).
*Application:* Don't just focus on looking good — focus on being good.

**Lesson 2: Kindness Makes You Attractive**
*Example:* Ruth was loved not because of makeup, but because of kindness (Ruth 2:11–12).
*Application:* Be kind to everyone — even strangers.

**Lesson 3: Respect Makes People Like You**
*Example:* Joseph was promoted because he respected others (Genesis 39:4).
*Application:* Say "Yes sir / Yes ma / Please / Thank you" — respect opens doors.

**Lesson 4: Humility Is Better Than Showing Off**
*Example:* Jesus washed His disciples' feet (John 13:14–15).
*Application:* Help others even if you're talented or gifted.

**Lesson 5: Gentleness Is Better Than Shouting or Fighting**
*Example:* Jesus had a gentle spirit (Matthew 11:29).
*Application:* Control your temper — walk away from fights.

**Lesson 6: Honesty Builds Trust**
*Example:* Samuel declared he never cheated anyone (1 Samuel 12:3–4).
*Application:* Don't lie — be real, even if it costs you.

**Lesson 7: Forgiveness Makes Your Heart Beautiful**
*Example:* Joseph forgave his brothers (Genesis 50:20–21).
*Application:* Don't hold grudges — forgive and move on.

**Lesson 8: Self-Control Makes You Strong**
*Example:* David controlled his anger and spared Saul (1 Samuel 24:7).
*Application:* Think before reacting — silence is sometimes more powerful than shouting.

**Lesson 9: Gratitude Makes People Love You**
*Example:* Only one leper returned to thank Jesus (Luke 17:15–16).
*Application:* Say "Thank you" often — don't be ungrateful.

**Lesson 10: Patience Makes You Mature**
*Example:* Job endured suffering without complaining (Job 1:22).
*Application:* Be patient when things delay — don't panic.

## Conclusion

Good looks fade. Money loses value. Status changes. But good behavior remains the greatest form of beauty. Be remembered not for how you looked — but for how you lived.
    `,
  },
  {
    slug: "100-good-behaviors-called-the-will-of-god",
    title: "100 Good Behaviors Called the Will of God",
    excerpt:
      "A comprehensive biblical guide covering 10 categories of godly living — from heart and mind toward God to relationships, stewardship, and living in God's Kingdom. Each behavior is grounded in specific scripture.",
    category: "God's Will",
    tags: ["God's Will", "Holiness", "Discipleship", "Scripture"],
    author: "Dr. Joshua Owoeye",
    date: "2024-01-08",
    readTime: 12,
    featured: false,
    lessonCount: 100,
  },
  {
    slug: "25-damages-pastors-have-done-to-the-church",
    title: "25 Damages Pastors Have Done to the Body of Christ in This Generation",
    excerpt:
      "A bold, scripture-backed examination of leadership failures in this generation — from replacing Scripture with opinions, to preaching a soft gospel, to abusing spiritual authority. A call back to faithfulness.",
    category: "Church Accountability",
    tags: ["Leadership", "Church", "Accountability", "Holiness"],
    author: "Dr. Joshua Owoeye",
    date: "2024-01-01",
    readTime: 9,
    featured: false,
    lessonCount: 25,
  },
  {
    slug: "100-evil-behaviors-called-sin",
    title: "100 Different Evil Behaviors Called Sin — A Biblical Survey",
    excerpt:
      "These 100 behaviors, described as sin in the Bible, cover actions, attitudes, and omissions. Sin is not only external acts but also hidden motives and neglect of duty. Yet God's grace offers forgiveness to all who repent.",
    category: "Sin & Repentance",
    tags: ["Sin", "Repentance", "Grace", "Scripture", "Holiness"],
    author: "Dr. Joshua Owoeye",
    date: "2023-12-18",
    readTime: 10,
    featured: false,
    lessonCount: 100,
  },
  {
    slug: "our-mission-glorifying-god-through-sound-doctrine",
    title: "Our Mission: Glorifying God Through Sound Doctrine and Christlike Character",
    excerpt:
      "Our mission is to glorify God by faithfully teaching the full counsel of His Word, making disciples of Jesus Christ, equipping believers for godly living, and developing righteous leaders.",
    category: "Mission & Discipleship",
    tags: ["Mission", "Discipleship", "Leadership", "Church"],
    author: "Dr. Joshua Owoeye",
    date: "2023-12-05",
    readTime: 5,
    featured: false,
  },
];

export const categories = [
  "All",
  "Character & Holiness",
  "God's Will",
  "Sin & Repentance",
  "Leadership",
  "Church Accountability",
  "Mission & Discipleship",
  "Prayer",
  "Marriage & Family",
];

export const serviceTimes: ServiceTime[] = [
  {
    day: "Every Sunday",
    name: "Sunday Worship Service",
    time: "10:00 AM & 01:30 PM",
    description:
      "Our main gathering — Spirit-led praise, heartfelt worship, and expository preaching from the Word of God.",
  },
  {
    day: "Every Wednesday",
    name: "Midweek Bible Study",
    time: "6:00 PM",
    description:
      "Deeper study of Scripture in a warm, interactive setting. Come with your Bible and your questions.",
    zoomLink: "https://zoom.us/j/3476389063",
    zoomPassword: "8157",
    highlighted: true,
  },
  {
    day: "Daily (Monday - Friday)",
    name: "Prayer Line",
    time: "7:00 PM – 8:00 PM",
    description:
      "A time of corporate prayer and intercession. Join us from anywhere as we seek God's face together. ",
    phone: "+1 (312) 667-4791",
    //zoomLink: "https://zoom.us/j/",
    zoomPassword: "362397",
  },
  {
    day: "Sundays during 08:00 AM",
    name: "Children & Youth Church",
    time: "Before with Main Service",
    description:
      "A dedicated, Bible-centred space for the next generation — age-appropriate and Spirit-led.",
  },
    {
    day: "Every Last Friday (Monthly)",
    name: "Men's Night Vigil Prayer Service",
    time: "12:00 AM – 1:00 AM",
    description:
      "A night set apart for intercession, spiritual warfare, and waiting on God. All are welcome.",
  },
  // {
  //   day: "Last Saturday Monthly",
  //   name: "Women's Fellowship",
  //   time: "10:00 AM",
  //   description:
  //     "A time of encouragement, prayer, and the Word specifically for the women of the church.",
  // },
  {
    day: "Quarterly",
    name: "Evangelism & Outreach",
    time: "Announced Sundays",
    description:
      "Taking the gospel beyond these walls — into our neighbourhood and the wider community.",
  },
];

export const beliefs: Belief[] = [
  {
    glyph: "S",
    title: "The Holy Scriptures",
    description:
      "The Bible is the inspired, infallible Word of God and the supreme authority for all faith and conduct.",
  },
  {
    glyph: "✞",
    title: "Salvation in Christ",
    description:
      "Salvation is by grace through faith in Jesus Christ alone — His death, burial, and resurrection.",
  },
  {
    glyph: "F",
    title: "The Holy Spirit",
    description:
      "We believe in the baptism of the Holy Spirit with evidence, and the gifts of the Spirit active today.",
  },
  {
    glyph: "H",
    title: "Divine Healing",
    description:
      "God still heals today. Healing of body, mind, and spirit is part of the finished work of Christ.",
  },
];

export const coreValues: Value[] = [
  {
    icon: "W",
    title: "The Word of God",
    description:
      "We teach the full counsel of Scripture — without compromise. The Bible is our final authority for every area of faith and life.",
  },
  {
    icon: "P",
    title: "Prayer & the Holy Spirit",
    description:
      "We believe in a living, active God who still speaks, still heals, and still moves among His people through prayer and the power of His Spirit.",
  },
  {
    icon: "C",
    title: "Community & Belonging",
    description:
      "Whatever your background or story, you belong here. We are a family — caring for one another, growing together, and serving our community.",
  },
  {
    icon: "H",
    title: "Holiness & Character",
    description:
      "True transformation begins on the inside. We are committed to godly character and living in a way that reflects Christ to the world.",
  },
];

export const events: Event[] = [
  {
    id: "1",
    title: "Annual Thanksgiving Service",
    date: "2024-11-30",
    time: "9:00 AM",
    location: "Main Auditorium",
    description: "A special service of praise and thanksgiving to God for His faithfulness throughout the year.",
    category: "Special Service",
  },
  {
    id: "2",
    title: "Youth Leadership Summit",
    date: "2024-12-07",
    time: "10:00 AM – 4:00 PM",
    location: "Fellowship Hall",
    description: "A day of training, mentorship, and biblical grounding for the next generation of church leaders.",
    category: "Youth",
  },
  {
    id: "3",
    title: "Christmas Carol & Worship Night",
    date: "2024-12-20",
    time: "6:00 PM",
    location: "Main Auditorium",
    description: "Join us for a beautiful evening of carols, worship, and the proclamation of the birth of Christ.",
    category: "Special Service",
  },
  {
    id: "4",
    title: "Cross-Over Night Service",
    date: "2024-12-31",
    time: "10:00 PM",
    location: "Main Auditorium",
    description: "Step into the New Year in the presence of God — with prayer, praise, and the Word.",
    category: "Special Service",
  },
];

export const sermons: Sermon[] = [
  {
    id: "1",
    title: "The Beauty of a Holy Life",
    pastor: "Dr. Joshua Owoeye",
    date: "2024-01-14",
    scripture: "1 Peter 1:16",
    duration: "52 min",
    category: "Holiness",
    description: "An expository look at what it means to be holy as God is holy — practically and spiritually.",
  },
  {
    id: "2",
    title: "When God Chooses Character Over Appearance",
    pastor: "Dr. Joshua Owoeye",
    date: "2024-01-07",
    scripture: "1 Samuel 16:7",
    duration: "48 min",
    category: "Character",
    description: "God's criteria for choosing David over Saul teaches us that He looks at the heart, not the external.",
  },
  {
    id: "3",
    title: "The Whole Counsel of God",
    pastor: "Dr. Joshua Owoeye",
    date: "2023-12-31",
    scripture: "Acts 20:27",
    duration: "55 min",
    category: "Word of God",
    description: "Why the church must preach the full truth of Scripture — the comfortable and the uncomfortable.",
  },
  {
    id: "4",
    title: "Prayer That Moves Heaven",
    pastor: "Dr. Joshua Owoeye",
    date: "2023-12-24",
    scripture: "James 5:16",
    duration: "44 min",
    category: "Prayer",
    description: "Understanding the power and conditions of effective, fervent prayer as taught in Scripture.",
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, category: string, limit = 3): BlogPost[] {
  return blogPosts
    .filter((p) => p.slug !== slug && p.category === category)
    .slice(0, limit);
}

export function getFeaturedPost(): BlogPost {
  return blogPosts.find((p) => p.featured) ?? blogPosts[0];
}

/* ─── CAC history timeline ─────────────────────────
   Source: CAC Pastoral Training Manual 2025/26, "The Spread of the Early
   Church" (pp. 24-33). Facts and names follow the manual; confirm with
   church leadership before publishing. */
export const historyEras: HistoryEra[] = [
  {
    id: "roots",
    title: "Roots",
    span: "1918 - 1927",
    intro: "A small prayer group in Ijebu-Ode spreads, like the New Testament church, from one town to the next.",
  },
  {
    id: "revival",
    title: "The Call and the Revival",
    span: "1928 - 1930",
    intro: "Joseph Ayo Babalola is called, and the great revival of 1930 breaks out at Oke-Ooye, Ilesha.",
  },
  {
    id: "spread",
    title: "Spread Across Nigeria",
    span: "1931 - 1977",
    intro: "The revival fire moves from Ilesha and Efon Alaaye to the east, the north and the south of the country.",
  },
  {
    id: "institutions",
    title: "Building Institutions",
    span: "1950 - 1993",
    intro: "Training colleges, schools, a midwifery centre and a renewed Sunday School give the church lasting structure.",
  },
  {
    id: "nations",
    title: "Beyond Nigeria",
    span: "1940s - 2001",
    intro: "CAC assemblies are planted across West Africa, Europe, North America and South Africa.",
  },
];

export const historyEvents: HistoryEvent[] = [
  /* Roots */
  {
    id: "precious-stone-society-1918",
    year: 1918,
    dateLabel: "1918",
    era: "roots",
    title: "The Precious Stone Society is formed",
    place: "Ijebu-Ode",
    summary: "Five men begin a prayer band that will one day become a great church.",
    body: [
      "Like the New Testament church, the Prayer Band that started in Ijebu-Ode in 1918 gradually spread from one area to another. According to Ademakinwa (1971), it began with five people: Mr J.B. Sadare (later known as Esinsinade), Mr E.O. Onabanjo, Mr D.C. Oduga, Mr E.O.W. Olukoya and Pastor Gansallo.",
      "After the group deliberated on a name, Mr Esinsinade said the Lord had shown him that it should be called the \"Precious Stone Society\". It kept that name until it became part of Faith Tabernacle Church.",
    ],
  },
  {
    id: "ilesha-branch-1921",
    year: 1921,
    dateLabel: "1921",
    era: "roots",
    title: "The prayer group reaches Ilesha",
    place: "Iloro, Ilesha",
    summary: "A headmaster and a teacher begin praying together in Iloro.",
    body: [
      "In 1921 the C.M.S. sent A.T.O. Otubusin, a member of the Precious Stone Society at Ijebu-Ode, to Ilesha as headmaster of St John's School, Iloro. Around the same time Mr (later Pastor) J.A. Babatope was transferred to Iloro, and others joined them to pray in Babatope's house.",
      "When Otubusin was transferred to Ile-Ife in 1924, Pastor Babatope became the leader.",
    ],
  },
  {
    id: "lagos-and-oyo-branches",
    year: 1923,
    dateLabel: "Early 1920s",
    era: "roots",
    title: "Lagos and Oyo branches",
    place: "Lagos and Oyo",
    summary: "The society grows in Lagos, where it is called the \"Purity Band\", and in Oyo.",
    body: [
      "The Lagos branch was under the supervision of Pastor D.O. Odubanjo. Bishop F.M. Jones, presiding Bishop of Nigeria and Benin, visited the group and called it the \"Purity Band\".",
      "In 1923 the Faith Tabernacle Church moved out of Ebute-Meta because of dreams that Lagos would be submerged. Pastor A. Clark wrote on 30 April 1923 that it was not proper to move the whole church because of dreams, and the church returned to Lagos.",
      "At St Andrew's College, Oyo, members who went there to teach started the next branch, led by Pastor J.O. Sanya, a lecturer at the college, in his house.",
    ],
  },
  {
    id: "faith-tabernacle-north-1924",
    year: 1924,
    dateLabel: "1924 - 1925",
    era: "roots",
    title: "Faith Tabernacle spreads to the north",
    place: "Minna, Jos, Zaria, Makurdi, Kano",
    summary: "Believers in Minna build their own church, and the work spreads across northern Nigeria.",
    body: [
      "In Minna, Mr S.A. Mensah, Pastor Sam Sankey, Mr Macaulay and others began meeting in a house. They grew so fast that by 1924 they had built their own church and started an afternoon school for children and an evening school for adults.",
      "Pastor Sankey carried the message to Jos. Two men from Minna took it to Zaria, and tracts distributed by Mensah helped the work there. In 1925 Mensah was transferred back to Lagos and installed Pastor Macaulay as leader.",
      "James Ola Akinsanya brought the gospel to Makurdi, and Pastor J.A. Okuniga gathered a church in Kano. These Faith Tabernacle churches were the forerunners of Christ Apostolic Church.",
    ],
  },
  /* The Call and the Revival */
  {
    id: "babalola-called-1928",
    year: 1928,
    dateLabel: "9 - 11 October 1928",
    era: "revival",
    title: "Joseph Ayo Babalola is called",
    place: "River Ariran, near Ilesha",
    summary: "A road roller driver hears a voice telling him to leave his work and preach the gospel.",
    body: [
      "Joseph Ayo Babalola, born at Odo-Owa, was working as a roller driver for the Public Works Department on the Ilesha to Ikeji road. In September 1928 his roller stopped near River Ariran and could not be repaired.",
      "At noon on 9 October 1928 a voice called, \"Joseph! Joseph!! Joseph!!!\", telling him to leave his work. The call came again over the following days, and on 11 October he answered and was commissioned to preach the gospel of full and free salvation.",
      "Among the signs recorded are three palm fronds (one fresh, one half dry, one dry) picturing how people would receive the message, a hand bell for prayer, and the instruction to fast and pray.",
    ],
  },
  {
    id: "babalola-baptised-1930",
    year: 1930,
    dateLabel: "1930",
    era: "revival",
    title: "Babalola meets the Faith Tabernacle leaders",
    place: "Lagos",
    summary: "His call is received with joy, and he is baptised by immersion in the Lagos Lagoon.",
    body: [
      "Daniel Ajibola, a Faith Tabernacle member in Ibadan, introduced Joseph Babalola to D.O. Odubanjo and the other leaders at Odubanjo's house in Lagos. They accepted his call and message with joy.",
      "He was then baptised by immersion in the Lagos Lagoon by Esinsinade, a senior pastor among the Faith Tabernacle leaders.",
    ],
  },
  {
    id: "oke-ooye-revival-1930",
    year: 1930,
    dateLabel: "July 1930",
    era: "revival",
    title: "The Great Revival at Oke-Ooye",
    place: "Oke-Ooye, Ilesha",
    summary: "During a leaders' meeting, a dead boy is raised and a revival breaks out that draws thousands.",
    body: [
      "In July 1930 representatives of Faith Tabernacle met at Ilesha to settle doctrinal questions. While the second item, divine healing, was being discussed, the body of a ten-year-old boy, Obi Ogundipe, was carried towards the church. Babalola prayed for him and the boy rose.",
      "People began to bring their sick, and healings followed. The manual dates the outbreak of the revival to 19 July 1930. Visitors came from across Nigeria, West Africa and beyond; one account puts attendance at each crusade at about 40,000.",
      "Thousands were converted, many surrendered charms for burning, and the revival led to the establishment of hundreds of Christ Apostolic Church assemblies. It is remembered as an answer to Faith Tabernacle's prayers for revival in Nigeria.",
    ],
  },
  {
    id: "orekoya-ibadan-1930",
    year: 1930,
    dateLabel: "1930",
    era: "revival",
    title: "Prophet Daniel Orekoya at Ibadan",
    place: "Ibadan",
    summary: "On his way home from Ilesha, a tailor from Ijebu becomes a channel of healing in Ibadan.",
    body: [
      "Daniel Orekoya, a tailor and member of the Faith Tabernacle group in Lagos, came to witness the revival at Ilesha and asked Babalola to pray for him.",
      "Returning through Ibadan, he prayed for those who came to him and many were healed. The manual records that a woman named Alice Abeo was raised through his prayer and later safely delivered a baby girl. Multitudes were drawn by the news.",
    ],
  },
  {
    id: "efon-alaaye-1930",
    year: 1930,
    dateLabel: "29 September 1930",
    era: "revival",
    title: "Efon Alaaye becomes the third revival centre",
    place: "Efon Alaaye, Ekiti",
    summary: "Invited by the Alaaye of Efon, the prophet arrives at 5 a.m. and the revival spreads through Ekiti.",
    body: [
      "Oba Bamilosin Aladejara Agunsoye I, the Alaaye of Efon Alaaye, invited the \"wonder-working prophet\" to hold a crusade like that at Oke-Ooye. Babalola arrived at 5 a.m. on 29 September 1930.",
      "From Efon Alaaye the revival spread to Ado-Ekiti, Aramoko, Ikogosi, Ijero, Ikole and many other towns. Baba J.A. Medaiyese was the anchor of the movement in Ekiti and Akoko.",
    ],
  },
  {
    id: "ikare-akoko-1930",
    year: 1930,
    dateLabel: "8 November 1930",
    era: "revival",
    title: "Revival fire reaches Ikare-Akoko",
    place: "Ikare-Akoko",
    summary: "From Oke Adura, Efon Alaaye, the revival spreads to Ikare and on through Akoko and Ondo.",
    body: [
      "On 8 November 1930 the revival spread from Oke Adura, Efon Alaaye to Ikare. From there it reached Oka, Owo, Akure, Okitipupa, Ondo and other towns.",
    ],
  },
  /* Spread across Nigeria */
  {
    id: "oro-ago-1931",
    year: 1931,
    dateLabel: "1931 - 1942",
    era: "spread",
    title: "The revival reaches old Ilorin Province",
    place: "Oro-Ago, Kabba, Lokoja",
    summary: "From Oro-Ago and Irabon the movement spreads through Kwara, Kogi and beyond.",
    body: [
      "In 1931 the movement spread to Oro-Ago and Irabon through the enthusiasm of James Afolayan, and then to Isanlu, Kabba, Bunu and Ijumu through Samuel Salako. It reached Igosun on 1 October 1937, and by June 1942 Isanlu-Isin, Lokoja and Makurdi.",
    ],
  },
  {
    id: "northern-nigeria",
    year: 1931,
    dateLabel: "After 1930",
    era: "spread",
    title: "The movement takes root in the north",
    place: "Kano",
    summary: "Kano becomes district headquarters, and the revival moves on to Kaduna, Sokoto, Yola and Abuja.",
    body: [
      "According to Alokan (2010), Faith Tabernacle was already established in some northern towns but had been shaken by the fall of Pastor A. Clark. The revival movement met that need, and Pastor J.A. Adelaja identified with it.",
      "Revival leaders including Joseph Babalola and Joshua Medaiyese held crusades in the north. Kano became the district headquarters with Adelaja as superintendent, and the movement spread to Maiduguri, Kaduna, Minna, Sokoto, Yola and Abuja.",
    ],
  },
  {
    id: "calabar-port-harcourt-1933",
    year: 1933,
    dateLabel: "1933",
    era: "spread",
    title: "Crusades in Calabar and Port Harcourt",
    place: "Calabar and Port Harcourt",
    summary: "A man healed in prison invites Babalola to Calabar, and the revival spreads through the south-east.",
    body: [
      "Cyprian E.O. Ufom, whom Babalola had healed in prison, persuaded him to bring the revival to Creek Town in Calabar. The crusade of 1933, based at Duke Town, bore much fruit, and the fire spread to Uyo, Ikot Ekpene, Opobo, Eket and Oron.",
      "Returning in September 1933, Babalola stayed about five days in Port Harcourt to start an arm of the movement. The work there was later strengthened by a crusade in 1966 led by Pastor A.A. Egabor and his wife.",
    ],
  },
  {
    id: "section-d-1973",
    year: 1973,
    dateLabel: "1973",
    era: "spread",
    title: "Section D is formed",
    place: "Benin City",
    summary: "Ten districts in the Mid-West are carved out of Section B, with Benin as headquarters.",
    body: [
      "People who attended the Efon Alaaye revival in the 1930s carried it home to the Mid-West, and Babalola later visited to strengthen them. In 1973 Section D was carved out of Section B with ten districts: Benin, Warri, Sapele, Afemai, Isoko, Ishan, Asaba, Urhobo, Kwale and Okpella.",
    ],
  },
  {
    id: "section-h-1977",
    year: 1977,
    dateLabel: "1977",
    era: "spread",
    title: "Section H is formed",
    place: "Odo-Owa",
    summary: "Growing assemblies in old Ilorin Province become a section with Odo-Owa as headquarters.",
    body: [
      "As the church expanded, the assemblies in old Ilorin Province were brought together in 1977 to form Section H, with Odo-Owa as headquarters and Pastor John Dada Obafemi as chairman. It covered parts of Kwara, Kogi, Benue and Niger States.",
    ],
  },
  /* Building institutions */
  {
    id: "cac-schools-1950",
    year: 1950,
    dateLabel: "1950 - 1972",
    era: "institutions",
    title: "CAC schools across Nigeria",
    place: "Western Nigeria",
    summary: "The church opens primary, secondary modern and grammar schools in many towns.",
    body: [
      "Christ Apostolic Church spearheaded education in the 1950s. From 1950 it opened Secondary Modern Schools in places such as Efon-Alaaye, Ibadan, Abeokuta, Ondo, Oshogbo, Ado-Ekiti, Ilesha and Akure, and its primary schools grew from 72 to 120.",
      "Grammar schools followed at Ibadan (1960), Efon-Alaaye (1960), Ipetu (1960), Ilesha (1962), Akure (1964) and Odo-Owa (1970). When the government took over schools, CAC institutions numbered 120 primary, 18 secondary modern and 5 grammar schools.",
    ],
  },
  {
    id: "bible-training-college-1952",
    year: 1952,
    dateLabel: "27 May 1952",
    era: "institutions",
    title: "Bible Training College founded",
    place: "Ede",
    summary: "Twenty-two years after the revival, a college for training church workers opens.",
    body: [
      "The Bible Training College was founded at Ede on 27 May 1952, with Pastor D.O. Odubanjo as its first principal. Eight months later Pastor R.A. Adedipe succeeded him.",
      "The college moved to Erio-Ekiti in 1954, to Efon-Alaaye in 1957 under Mrs O.O.A. Pearce, and to Akure in 1968.",
    ],
  },
  {
    id: "teachers-college-1955",
    year: 1955,
    dateLabel: "January 1955",
    era: "institutions",
    title: "Teachers Training College opens",
    place: "Efon-Alaaye",
    summary: "The church begins training Grade III teachers, upgraded to Grade Two in 1959.",
    body: [
      "A CAC Teachers Training College was established at Efon-Alaaye in January 1955 to train Grade III teachers, with J.O. Adegun as first principal. The government upgraded it to a Grade Two college in 1959.",
    ],
  },
  {
    id: "ile-agbebi-1959",
    year: 1959,
    dateLabel: "17 July 1959",
    era: "institutions",
    title: "Ile-Agbebi midwifery centre",
    place: "Ede",
    summary: "A midwifery centre serves expectant mothers from every district of the church.",
    body: [
      "For its first twenty years, pregnant women in the church were cared for at mission houses by Iya Aladura (prayer women) under local pastors.",
      "On 17 July 1959 the church established Ile-Agbebi, a midwifery centre at Ede, with Mrs D.A. Oladiran as matron. Women from far and near went there to deliver their babies.",
      "In the same year Evangelist D.O. Babajide founded an Evangelical Training School at Ilesha for training ordained evangelists.",
    ],
  },
  {
    id: "pastoral-training-institute-1963",
    year: 1963,
    dateLabel: "1963",
    era: "institutions",
    title: "Pastoral Training Institute",
    place: "Ibadan",
    summary: "A dedicated institute for training pastors is founded, later moving to Agege, Lagos.",
    body: [
      "Would-be pastors were at first trained for three months per set at Yemetu, the CAC secretariat in Ibadan. In 1963 this led to the founding of the CAC Pastoral Training Institute in Ibadan, with Pastor A.A. Hanson as first principal.",
      "In 1970 the institute moved to Odubanjo Memorial Hall, Agege, Lagos, under Pastor A.O. Ade Olutimehin.",
    ],
  },
  {
    id: "sunday-school-rally-1978",
    year: 1978,
    dateLabel: "1978",
    era: "institutions",
    title: "First national Sunday School rally",
    place: "CAC Okesa, Ilesha",
    summary: "A renewed Sunday School programme holds its first national rally.",
    body: [
      "In the 1970s Pastor E.H.L. Olusheye and Pastor S.O. Akinsulure launched a new approach to Sunday School, appointing teachers and supervisors at district level. After 1977 lesson pamphlets were printed in Yoruba, English, Igbo, Hausa and Efik.",
      "The first national rally was held at CAC Okesa, Ilesha in 1978, and state rallies followed in rotation.",
    ],
  },
  {
    id: "theological-seminary-1979",
    year: 1979,
    dateLabel: "6 September 1979",
    era: "institutions",
    title: "CAC Theological Seminary established",
    place: "Ile-Ife",
    summary: "The church's Bible training colleges are brought together into one seminary.",
    body: [
      "The church authorities decided to fuse all the Bible training colleges. The CAC Theological Seminary was established at Ile-Ife on 6 September 1979, with Pastor Busuyi Faloye as first principal and Pastor J.A. Adedeji as first chairman.",
      "In 1986 Pastor J.O. Akintola became principal and Pastor J.D. Obafemi the second chairman.",
    ],
  },
  {
    id: "youth-association-1992",
    year: 1992,
    dateLabel: "27 September 1992",
    era: "institutions",
    title: "Men's and Youth Associations",
    place: "Nationwide",
    summary: "New associations for men and young people are formed from earlier groups.",
    body: [
      "Christ Apostolic Men's Association (C.A.C.M.A.) replaced the Light of the World Society, and a Youth Association replaced the Students Association and other groups, merged on 27 September 1992.",
    ],
  },
  {
    id: "childrens-workers-rally-1993",
    year: 1993,
    dateLabel: "1993",
    era: "institutions",
    title: "Children Workers' Rallies begin",
    place: "Nationwide",
    summary: "Pastor Samson O. Akinsulure establishes rallies for those who teach children.",
    body: [
      "In 1993 Pastor Samson O. Akinsulure established Children Workers' Rallies with the Sunday School staff, including Elder D.F. Duduyemi, Elder I.O. Oluyemi (now Pastor), Elder Obajulaye of Lokoja, Deaconess Lola Adejolu and Mrs M.O. Adeleye.",
    ],
  },
  /* Beyond Nigeria */
  {
    id: "benin-republic-1940s",
    year: 1940,
    dateLabel: "1940s",
    era: "nations",
    title: "CAC reaches Benin Republic",
    place: "Benin Republic",
    summary: "Assemblies in Benin join those in Egba and Egbado land as one district.",
    body: [
      "According to Pastor Solomon Shiwoku, its pioneer superintendent, CAC reached Benin Republic in the 1940s. Its assemblies formed the Egba/Egbado/Benin Republic District, and Pastor J.A. Alokan later took over as area chairman.",
    ],
  },
  {
    id: "ghana-1950",
    year: 1950,
    dateLabel: "1950",
    era: "nations",
    title: "Fellowship with Ghana",
    place: "Ghana",
    summary: "David Odubanjo visits a sister movement that began independently in Ghana.",
    body: [
      "The revival movement in Ghana was not an offshoot of the 1930 revival in Nigeria; a similar movement had begun there under Apostle Peter Newman Ape-Anim. Joseph Babalola visited Ghana to hold revivals, and David Odubanjo paid a brotherly visit in 1950.",
      "CAC assemblies are also found in Sierra Leone, Côte d'Ivoire, Liberia and The Gambia, administered directly by the mother church in Nigeria.",
    ],
  },
  {
    id: "usa-1976",
    year: 1976,
    dateLabel: "1976",
    era: "nations",
    title: "First assembly in the United States",
    place: "New York, USA",
    summary: "Elder Abraham Adegoke Oyedeji begins a CAC assembly in New York.",
    body: [
      "In 1976 Elder (later Pastor) Abraham Adegoke Oyedeji began a CAC assembly in the USA, based at Lenox Hill Station, New York. Many Nigerians and Black Americans were converted, and the church has kept growing.",
    ],
  },
  {
    id: "london-1979",
    year: 1979,
    dateLabel: "November 1979",
    era: "nations",
    title: "First official assembly in London",
    place: "London, UK",
    summary: "Worship in a member's home becomes the first official CAC assembly in Great Britain.",
    body: [
      "A CAC branch (Bethel) had been planted in 1974 under Ayo Omideyi. On the first Sunday of November 1979, worship at the residence of Adeleye Ajao became the first official CAC assembly in London.",
      "Since then assemblies have been established by evangelists from Nigeria, among them Prophet T.O. Obadare, S.O. Akande (Baba Abiye) and S.K. Abiara.",
    ],
  },
  {
    id: "athens-1985",
    year: 1985,
    dateLabel: "1985",
    era: "nations",
    title: "CAC in Greece",
    place: "Athens, Greece",
    summary: "Prophet S.K. Abiara's missionary work introduces CAC to Athens.",
    body: [
      "In 1985 CAC was introduced to Athens through the missionary activities of Prophet S.K. Abiara, and it has continued to grow there.",
    ],
  },
  {
    id: "south-africa-2001",
    year: 2001,
    dateLabel: "2001",
    era: "nations",
    title: "A vision for South Africa",
    place: "Johannesburg, South Africa",
    summary: "Pastor S.O. Dada's vision of a CAC assembly in South Africa becomes reality.",
    body: [
      "In 2001 Pastor C.S. Fasuyi sponsored Pastor S.O. Dada's trip to South Africa. Five assemblies have since been established, with another being planted in Kempton Park, Johannesburg.",
    ],
  },
];
