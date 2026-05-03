import type { BlogPost, ServiceTime, Belief, Value, Event, Sermon } from "@/types";

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
    time: "10:00 AM & 10:30 AM",
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
    day: "Sundays during 10:30 AM",
    name: "Children & Youth Church",
    time: "Parallel with Main Service",
    description:
      "A dedicated, Bible-centred space for the next generation — age-appropriate and Spirit-led.",
  },
    {
    day: "Every Last Friday",
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
