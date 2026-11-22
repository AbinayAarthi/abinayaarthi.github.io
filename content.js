/* ==========================================================
   THIS IS THE ONLY FILE YOU NEED TO EDIT FOR MOST UPDATES.
   Change the text between the quote marks "like this".
   Do not delete the commas, quotes or brackets.
   ========================================================== */

const SITE = {
  name: "ABINAYA AARTHI",
  role: "Video Editor | Former Deputy Chief Editor",

  showreel: "showreel.mp4",   // a YouTube link, or a video file uploaded next to this file. "" hides the Showreel section.
  showreelPoster: "showreel-poster.jpg",   // cover image shown before the video plays (video files only)
  showreelNote: "60-second showreel: Cut. Check. Deliver.",

  resume: "resume.pdf",   // the resume.pdf file uploaded next to this file

  email: "sabinayaaarthi@gmail.com",
  phone: "+91 63695 92317",
  location: "Chennai, Tamil Nadu, India",
  linkedin: "",   // full link, or "" to hide
  instagram: ""   // full link, or "" to hide
};

/* EXPERIENCE: copy a block to add another job. */
const EXPERIENCE = [
  {
    dates: "May 2025 to Nov 2026",
    title: "Deputy Chief Editor",
    org: "Studio Coup / Coup Media Productions LLP",
    points: [
      "Promoted from Video Editor to Deputy Chief Editor in August 2026.",
      "Coordinated the editing team's day-to-day post-production delivery.",
      "Reviewed team edits for pacing, hooks, captions, transitions, sound sync and visual consistency, giving clear QC feedback.",
      "Handled client feedback and revision cycles to maintain quality and keep delivery on timeline.",
      "Edited 40+ videos per month, including Instagram Reels, short-form social content and talking-head videos for digital-media clients.",
      "Created edits using motion graphics, stylised effects and platform-specific formats."
    ]
  },
  {
    dates: "May 2024 to July 2024",
    title: "Video Editor / Proofreader Intern",
    org: "Emerald Publishing House",
    points: [
      "Proofread publishing content and edited promotional video content, building familiarity with publishing workflows."
    ]
  },
  {
    dates: "Feb 2023 to Mar 2023",
    title: "Script Writer Intern",
    org: "Bestselling Books (YouTube)",
    points: [
      "Wrote concise, audience-focused scripts for YouTube Shorts and short-form video."
    ]
  },
  {
    dates: "June 2022 to Aug 2022",
    title: "Quality Checker",
    org: "Quizzy (Part-time, Remote)",
    points: [
      "Proofread educational content for clarity, grammar and accuracy before publication."
    ]
  }
];

/* PROJECTS: copy a block from { to }, with its comma, to add one.
   While this list is empty, the Projects section stays hidden.
   style: separate tags with commas, e.g. "Short-form, Motion graphics"
   start: second where the video begins playing (the motion graphics moment). Use 0 or leave out to play from the start.
   thumbnail: image file name uploaded to GitHub, e.g. "thumb1.jpg" ("" = none)
   link: your video link, or a video file uploaded next to this file, e.g. "reel-bridal.mp4" ("" = "Link coming soon")

   Example:
   { title: "Reel title", style: "Short-form, Premiere Pro", contribution: "What you personally did on this project.", link: "", thumbnail: "" }
*/
const PROJECTS = [
  {
    title: "Bridal Prep Checklist",
    style: "Short-form, Talking-head, Captions",
    contribution: "Vertical Reel edited with styled captions, cutaway visuals and graphic callouts around a talking-head interview.",
    link: "reel-bridal.mp4",
    start: 21,
    thumbnail: "thumb-bridal.jpg"
  },
  {
    title: "Sugar vs Smoking: Which Damages You More?",
    style: "Short-form, Talking-head, Motion graphics",
    contribution: "Talking-head Reel with bold text callouts, B-roll and graphics that compare sugar and smoking.",
    link: "reel-sugar.mp4",
    start: 11,
    thumbnail: "thumb-sugar.jpg"
  },
  {
    title: "How Many Days Is a Normal Monthly Cycle?",
    style: "Short-form, Talking-head, Motion graphics",
    contribution: "Talking-head Reel with animated title graphics, captions and illustrative visuals that explain period length.",
    link: "reel-cycle.mp4",
    start: 13.5,
    thumbnail: "thumb-cycle.jpg"
  },
  {
    title: "Instagram and YouTube Hide It, X Revealed It",
    style: "Short-form, Talking-head, Captions",
    contribution: "Fast-paced talking-head Reel with Tamil-English captions, screen graphics and B-roll on the open-source algorithm.",
    link: "reel-algo.mp4",
    start: 5.5,
    thumbnail: "thumb-algo.jpg"
  },
  {
    title: "Use AI Responsibly",
    style: "Short-form, Talking-head, Captions",
    contribution: "Talking-head Reel with bold on-screen text and cutaway visuals on the risks of fake AI content.",
    link: "reel-ai.mp4",
    start: 7.5,
    thumbnail: "thumb-ai.jpg"
  },
  {
    title: "AI Jobs Need Skills, Not Just Tools",
    style: "Short-form, Motion graphics, Talking-head",
    contribution: "Talking-head Reel built around animated title cards, floating app-icon graphics, an animated hourglass and neural-network visuals.",
    link: "reel-aijobs.mp4",
    start: 8,
    thumbnail: "thumb-aijobs.jpg"
  },
  {
    title: "Green vs Ripe Banana: What's Healthier?",
    style: "Short-form, Motion graphics, Talking-head",
    contribution: "Talking-head Reel with an animated doctor-rating badge, unripe and ripe banana title graphics and news-clip visuals.",
    link: "reel-banana.mp4",
    start: 32.5,
    thumbnail: "thumb-banana.jpg"
  }
];
