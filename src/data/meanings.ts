export interface CardMeaning {
  light: string[]
  dark: string[]
  description: string
}

export const CARD_MEANINGS: Record<string, CardMeaning> = {
  // ══════════════════════════════════════
  // ARCHETYPE
  // ══════════════════════════════════════

  'archetype-junior': {
    light: ['Optimism', 'New Beginnings', 'Growth Mindset', 'Learning'],
    dark: ['Naivety', 'Ignorance', 'In Over Your Head', 'Paying Your Dues'],
    description: "The Junior exudes potential and a bright future ahead. How can Junior energy show up for you? Where are you pushing yourself? What kind of advice would you give your younger self? The Junior reminds you that we are not always defined by who we are now, but who we are becoming.",
  },

  'archetype-the-besties': {
    light: ['Loyalty', 'Trust', 'Emotional Support', 'Shared Experience'],
    dark: ['Gossip', 'Groupthink', 'Cliquishness', 'Tunnel Vision'],
    description: "The Besties often seem to be speaking their own secret language, possibly excluding others. While this card can represent deep connection and lifelong friendships, it can also represent the seeds of a toxic culture. What kind of social energy is around you? Do you join the pack or hold yourself apart?",
  },

  'archetype-the-recruiter': {
    light: ['Opportunity', 'Connection', 'New Doors', 'Market Awareness'],
    dark: ['Hollow Flattery', 'False Promises', 'Commodification', 'Spam'],
    description: "Recuriters are gatekeepers of opportunity. They are the ones who can open doors for you, or close them. What might be blockling your path? What could help you open the door? Like a recruiter acting on the wishes of a hiring manager, what unseen rules are you navigating?",
  },

  'archetype-brilliant-jerk': {
    light: ['Raw Talent', 'Technical Mastery', 'High Standards', 'Fearlessness'],
    dark: ['Toxicity', 'Ego', 'Collateral Damage', 'Unsustainability'],
    description: "The Brilliant Jerk brings an adolescent arrogance to the table. Its important to remember that this figure is acting out their own internal demons, and that their behavior is not a reflection of your worth. What are the true motivations of those around you? Are you the one bringing your insecurities to the surface? What are you hiding?",
  },

  'archetype-side-hustler': {
    light: ['Entrepreneurship', 'Ambition', 'Resourcefulness', 'Independence'],
    dark: ['Divided Attention', 'Disloyalty', 'Burnout Risk', 'Conflict of Interest'],
    description: "On the surface, the Side Hustler is a go-getter, but beneath the surface, they are a victim of their own ambition. What are you sacrificing to chase your dreams? What are you trading for the potential of a better future? The Side Hustler reminds you that burning the candle at both ends can come at a cost. At the same time, theres potential for growth and success.",
  },

  'archetype-powerhungry-fool': {
    light: ['Ambition', 'Visibility', 'Initiative', 'Confidence'],
    dark: ['Delusion', 'Overreach', 'Political Games', 'Empty Authority'],
    description: "The powerhungry fool is performing in the theater of the workplace. Their blatant self-interest can come off as disingenuous, but its important to remember that they are not acting out of malice, but out of a desire to be seen and heard. What are you doing to get noticed? Are you playing the game, or are you just getting played?",
  },

  'archetype-mentor': {
    light: ['Wisdom', 'Generosity', 'Patience', 'Investment in Others'],
    dark: ['Overextension', 'Savior Complex', 'Living Vicariously', 'Neglecting Self'],
    description: "The mentor brings a rare nuturing energy to the Startup Arcana. They root for your success and genuinely want to help you grow. Beware though, as a mentor may not always lead you down the right path. If you are bringing the mentor energy, you must make sure it doesn't come at the expense of your own growth. How do you need to be nurtureed? What around you is asking for your help?",
  },

  'archetype-the-og': {
    light: ['Institutional Knowledge', 'Resilience', 'Founder Energy', 'Credibility'],
    dark: ['Entitlement', 'Resistance to Change', 'Nostalgia Trap', 'Diluted Equity'],
    description: "The OG employee has seen it all, from the Founder's public breakdown to the 8th round of layoffs. They know where the bodies are buried, and are a less obvious source of power, often whispering in the ears of the new CEO. Where is the real power coming from in the room? What is the value of institutional knowledge? How can you leverage your knowledge to your advantage?",
  },

  'archetype-9-9-6-grinder': {
    light: ['Dedication', 'Work Ethic', 'Reliability', 'Discipline'],
    dark: ['Self-Destruction', 'Martyrdom', 'Lost Identity', 'Toxic Hustle'],
    description: "Theres always going to be someone who works more hours than you. This card asks you to example if this is the right approach for this situation, and it very well may be. Do you plow forward with full steam ahead, or is this card a warning of what might happen if you do?",
  },

  'archetype-martyr': {
    light: ['Selflessness', 'Going Above and Beyond', 'Team Player', 'Sacrifice'],
    dark: ['Resentment', 'Self-Inflicted Pain', 'Manipulation', 'Boundary Collapse'],
    description: "This person is using a victim complex as a manipulation tactic. You feel compelled to help them, but in doing so, you are enabling their behavior. How can you help them without enabling them? What is the real problem they are trying to solve? What is not being said?",
  },

  'archetype-quiet-quitter': {
    light: ['Boundaries', 'Self-Preservation', 'Work-Life Balance', 'Clarity'],
    dark: ['Disengagement', 'Apathy', 'Coasting', 'Checked Out'],
    description: "Is the Quiet Quitter the one who is going to get let go first, or the one who is playing the game correctly? Doing the minimum while staying unnoticed for good or bad is an art. How much effort does this situation really require of you? Can you get away with doing less? Is being conservative with your engery costing you an opportunity?",
  },

  'archetype-middle-manager': {
    light: ['Coordination', 'Translation', 'Shielding the Team', 'Process'],
    dark: ['Bureaucracy', 'Bottleneck', 'Identity Crisis', 'Pointlessness'],
    description: "This card represents a complex duality. Some might view a middle manager as a useless layer, but often they are the ones who help grow talent and set people up for success. This card asks you to example what value system is around you. Should you be valuing the human element of a situation or focusing on delivering results? The answer will depend on what surrounds you.",
  },

  'archetype-the-executive': {
    light: ['Vision', 'Strategic Thinking', 'Decision Making', 'Authority'],
    dark: ['Detachment', 'Jargon Addiction', 'Calendar Tyranny', 'Whiplash'],
    description: "The executive represents authority and material success, but remember it can be lonely at the top. This card can reprent power but it can also represent the cost that comes with it. How are you bearing the weight of responsibility? Are you getting the external validation you need? Are you able to let go of control and trust the people around you?",
  },

  'archetype-visionary': {
    light: ['Imagination', 'Big Picture Thinking', 'Inspiration', 'Possibility'],
    dark: ['Impracticality', 'Overpromising', 'Missing the trees for the forest'],
    description: "There has to be a visionary on every team, but a team of visionaries is a recipe for disaster. Dream big, but make sure you know when you need to back it up with a plan. Enlist the right people to help you execute. How does big picture thinking help or hinder this situation? What is needed to make your ideas a reality?",
  },

  'archetype-thought-leader': {
    light: ['Influence', 'Platform', 'Brand Building', 'Thought Provocation'],
    dark: ['Performance Over Substance', 'Ego', 'Grift'],
    description: "The thought leader has a personal brand to protect, and they will do whatever it takes to maintain it. This card can represent a powerful force for good, but it can also represent a dangerous ego trip. How are you using your platform to help or hinder this situation? What is the true value of your ideas? Are you being genuine, or are you just playing the game?",
  },

  'archetype-digital-nomad': {
    light: ['Freedom', 'Adaptability', 'Adventure', 'Autonomy'],
    dark: ['Unreliability', 'Time Zone Chaos', 'Disconnection', 'Privilege'],
    description: "The digital nomad has their cake and eats it too. Attending a meeting from a cafe in Mexico City sounds romantic but can also represent a split heart. What might you be running away from? Are you unable to decouple work and play? It could also be a sign to take advantage of the privileges you have.",
  },

  // ══════════════════════════════════════
  // MINDSET
  // ══════════════════════════════════════

  'mindset-alignment': {
    light: ['Buy-In', 'Commitment', 'Belonging', 'Shared Direction'],
    dark: ['Brainwashing', 'Blind Faith', 'Loss of Self', 'Cult Vibes'],
    description: "You've started using the company values in casual conversation unironically. You said 'we're a family here' at dinner with your actual family. The brainwashing is complete. The equity vesting schedule has you in a chokehold.",
  },

  'mindset-growth-mindset': {
    light: ['Resilience', 'Learning from Failure', 'Adaptability', 'Curiosity'],
    dark: ['Toxic Positivity', 'Reframing Failure', 'Denial', 'Performative Growth'],
    description: "The belief that any failure is just a 'learning opportunity' — especially convenient when the failure is a product that cost $4 million and had two users. You haven't grown so much as you've reframed stagnation with better vocabulary.",
  },

  'mindset-low-hanging-fruit': {
    light: ['Quick Wins', 'Momentum', 'Pragmatism', 'Efficiency'],
    dark: ['Avoidance', 'Surface-Level Work', 'Rot', 'Complacency'],
    description: "The mythical easy win that someone identifies in every planning session and no one ever actually picks. It's been hanging so low for so long it's basically composting. But sure, let's put it on the roadmap again.",
  },

  'mindset-fail-fast': {
    light: ['Experimentation', 'Speed', 'Learning Velocity', 'Risk Tolerance'],
    dark: ['Recklessness', 'Waste', 'No Accountability', 'Rationalized Failure'],
    description: "The mantra that makes burning money sound like a philosophy. You didn't waste six months — you 'iterated rapidly.' The product died, the team scattered, but at least you learned something. Right? You learned something, right?",
  },

  'mindset-ship-it': {
    light: ['Decisiveness', 'Momentum', 'Pragmatism', 'Bias to Action'],
    dark: ['Recklessness', 'Technical Debt', 'Corner Cutting', 'Friday Deploys'],
    description: "Perfectionism is the enemy. Quality is a spectrum. The user will forgive you. Just push it to prod on a Friday at 4pm and deal with the consequences Monday. The deploy button doesn't care about your anxiety.",
  },

  'mindset-drink-from-the-firehose': {
    light: ['Immersion', 'Rapid Onboarding', 'Total Exposure', 'Steep Learning'],
    dark: ['Overwhelm', 'Chaos', 'Sink or Swim', 'Information Overload'],
    description: "Day one at a new job: 47 tabs open, three Notion docs that contradict each other, a Slack channel called #random that is somehow mission-critical, and someone casually mentions 'the incident' without elaborating. You are learning. You are drowning. Same thing.",
  },

  'mindset-deep-work': {
    light: ['Focus', 'Flow State', 'Productivity', 'Mastery'],
    dark: ['Interruption Magnet', 'Unreachable', 'Tunnel Vision', 'False Sanctuary'],
    description: "The sacred state of actually doing work, interrupted every eleven minutes by a Slack notification, a 'quick sync,' and someone asking if you saw the message they sent two minutes ago. You put on headphones. They tap your shoulder.",
  },

  'mindset-boil-the-ocean': {
    light: ['Ambition', 'Comprehensive Thinking', 'Thoroughness', 'Vision'],
    dark: ['Overscoping', 'Paralysis', 'Expensive Anxiety', 'No Shipping'],
    description: "You tried to solve every problem at once and ended up solving none of them, but very impressively. The PRD was 47 pages. The Figma had 200 frames. The timeline was 'aggressive.' Ambition without scope is just expensive anxiety.",
  },

  'mindset-moving-goalposts': {
    light: ['Evolving Standards', 'Raising the Bar', 'Continuous Improvement', 'Ambition'],
    dark: ['Gaslighting', 'Broken Promises', 'Unreachable Targets', 'Futility'],
    description: "You hit every metric they asked for and they changed the metrics. The target was Q3, then Q4, then 'well, let's revisit the OKRs.' Success is a mirage that recedes exactly as fast as you run toward it.",
  },

  'mindset-circle-back': {
    light: ['Patience', 'Timing', 'Revisiting Ideas', 'Open Loops'],
    dark: ['Avoidance', 'Empty Promises', 'Stalling', 'The Void'],
    description: "The universal corporate code for 'I don't have an answer, I don't want to give one, and I'm hoping you forget you asked.' Nobody has ever circled back. The circle is a lie. It's a straight line into the void.",
  },

  'mindset-radical-candor': {
    light: ['Honesty', 'Direct Feedback', 'Caring Personally', 'Growth'],
    dark: ['Brutality', 'Licensed Cruelty', 'Power Imbalance', 'Weaponized Feedback'],
    description: "Someone read the book and now uses it as a license to be brutal in one-on-ones while calling it 'caring personally.' They'll tell you your presentation was 'not good' and expect gratitude. The feedback is a gift. The gift has no receipt.",
  },

  'mindset-chess-not-checkers': {
    light: ['Strategic Depth', 'Long-Term Thinking', 'Complexity', 'Nuance'],
    dark: ['Overcomplication', 'Pretension', 'Analysis Paralysis', 'Candy Crush'],
    description: "A phrase deployed by people who are, at best, playing Candy Crush. They want you to know this situation is complex and strategic, which usually means they've made a simple thing complicated and now need three meetings to undo it.",
  },

  'mindset-hill-to-die-on': {
    light: ['Conviction', 'Principles', 'Standing Firm', 'Integrity'],
    dark: ['Stubbornness', 'Pettiness', 'Wasted Energy', 'Ego'],
    description: "You've decided this is the issue where you make your stand — the button color, the API naming convention, the Oxford comma in the docs. You know it doesn't matter. They know it doesn't matter. But you will not yield.",
  },

  'mindset-vanity-metrics': {
    light: ['Awareness', 'Observation', 'Access to Information', 'Transparency'],
    dark: ['Powerlessness', 'Exclusion', 'Spectator Mode', 'Voicelessness'],
    description: "The metrics that look great in the board deck and mean nothing in the real world. DAU is up because of a bug. Engagement is 'strong' because you're counting bot traffic. The vanity is the point. Nobody wants the real numbers.",
  },

  'mindset-clarity': {
    light: ['Focus', 'Direction', 'Simplicity', 'Decisiveness'],
    dark: ['Overthinking', 'Paralysis', 'False Precision', 'Analysis Trap'],
    description: "The thing everyone says they want and nobody actually achieves. You've had seven meetings to 'get alignment' and you're less clear than when you started. Clarity is a luxury. Most days you're just choosing which ambiguity to live with.",
  },

  'mindset-disagree-and-commit': {
    light: ['Maturity', 'Team Alignment', 'Decisiveness', 'Moving Forward'],
    dark: ['Suppressed Dissent', 'Resentment', 'Performative Buy-In', 'Told You So'],
    description: "The polite corporate way of saying 'you lost the argument, now execute anyway with enthusiasm.' You disagree. You will commit. You will also bring it up in the post-mortem when it inevitably fails, because you are petty and correct.",
  },

  // ══════════════════════════════════════
  // ARTIFACTS
  // ══════════════════════════════════════

  'artifacts-one-pager': {
    light: ['Clarity', 'Conciseness', 'Alignment', 'Documentation'],
    dark: ['Scope Creep', 'Contradictions', 'Unread', 'Performative Writing'],
    description: "A document that is never one page. It started as a 'quick summary' and now has appendices, a glossary, and an embedded Loom video. Three VPs have added comments that contradict each other. Nobody will read it, but everyone will reference it.",
  },

  'artifacts-pitch-deck': {
    light: ['Vision', 'Storytelling', 'Ambition', 'Persuasion'],
    dark: ['Delusion', 'Vanity Metrics', 'Fantasy TAM', 'Style Over Substance'],
    description: "Twelve slides of delusion rendered in Figma with a font that costs $400/year. The TAM slide claims a $50 billion market. The team slide has headshots with identical crossed-arm poses. Slide 7 is just the word 'WHY' in 200pt font.",
  },

  'artifacts-nda': {
    light: ['Confidentiality', 'Trust', 'Access', 'Exclusivity'],
    dark: ['Secrecy', 'Overprotection', 'Power Asymmetry', 'It\'s a To-Do App'],
    description: "You're about to hear something so confidential and game-changing that — oh, it's a to-do app. With AI. The NDA is thicker than the business plan. You will sign it because free lunch is involved.",
  },

  'artifacts-wireframe': {
    light: ['Ideation', 'Rapid Prototyping', 'Shared Understanding', 'Low Stakes'],
    dark: ['Ambiguity', 'Misinterpretation', 'Premature Commitment', 'Boxes and Arrows'],
    description: "Boxes within boxes, connected by arrows that mean different things to everyone in the room. The designer says it's 'low fidelity.' The PM says it's 'almost final.' The engineer says it's 'impossible.' All three are correct.",
  },

  'artifacts-prototype': {
    light: ['Proof of Concept', 'Momentum', 'Tangibility', 'Excitement'],
    dark: ['Fragility', 'False Confidence', 'Hardcoded Everything', 'Demo Magic'],
    description: "A beautiful, fragile thing held together by hardcoded data and the tears of a frontend developer. It works perfectly in the demo. It will never work like this again. Do not click the second button. There is no second button.",
  },

  'artifacts-roadmap': {
    light: ['Direction', 'Planning', 'Prioritization', 'Transparency'],
    dark: ['Speculative Fiction', 'Obsolete on Arrival', 'False Precision', 'Board Deck Filler'],
    description: "A work of speculative fiction presented as a Gantt chart. Q1 is detailed. Q2 is optimistic. Q3 is a single bar labeled 'scale.' The roadmap will be obsolete by the time you finish presenting it, but it looks great in the board deck.",
  },

  'artifacts-the-backlog': {
    light: ['Captured Ideas', 'Organizational Memory', 'Prioritization Queue', 'Potential'],
    dark: ['Graveyard', 'Guilt', 'Infinite Scroll', 'Grooming Theater'],
    description: "A graveyard of good intentions stretching back to 2019. Tickets filed by people who no longer work here for features nobody remembers requesting. It has 847 items. You will groom 12 of them and declare the sprint 'planned.'",
  },

  'artifacts-bug-ticket': {
    light: ['Accountability', 'User Advocacy', 'Quality Signal', 'Tracking'],
    dark: ['Vague Reports', 'Blame Shifting', 'Priority Inflation', 'Blurry Screenshots'],
    description: "Steps to reproduce: 'it just broke.' Priority: P1 (it is not P1). Assigned to: whoever was unlucky enough to be online. Attached: a screenshot of a screenshot, slightly blurry, taken on a phone, of a different phone.",
  },

  'artifacts-pull-request': {
    light: ['Collaboration', 'Code Review', 'Documentation', 'Quality Gate'],
    dark: ['Endless Nitpicks', 'Bikeshedding', 'Merge Conflicts', 'Abandoned PRs'],
    description: "A 400-line diff with a description that says 'fix stuff.' Three reviewers have left comments about variable naming. The CI is red. It's been open for two weeks. Someone will close it and open a new one with the same changes.",
  },

  'artifacts-slack-message': {
    light: ['Real-Time Communication', 'Collaboration', 'Transparency', 'Speed'],
    dark: ['Distraction', 'Thread Spirals', 'Context Collapse', 'Nobody Answers'],
    description: "A 'quick question' in a public channel that spirals into a 47-message thread involving six teams, three time zones, and a philosophical debate about microservices. Someone reacts with 👀. Someone else replies 'following.' Nobody answers the question.",
  },

  'artifacts-all-hands': {
    light: ['Alignment', 'Transparency', 'Company Culture', 'Shared Narrative'],
    dark: ['Performance Theater', 'Softball Q&A', 'Slide Reading', 'Email Checking'],
    description: "An hour-long meeting where leadership reads their own slides aloud to 400 people who are checking email. There will be a 'fireside chat' that is neither warm nor illuminating. The Q&A will have one brave question and four softballs from directors.",
  },

  'artifacts-feature-release': {
    light: ['Momentum', 'Shipping', 'Celebration', 'Impact'],
    dark: ['Hotfixes', 'Staging vs Prod', 'Lying Changelogs', 'Premature Celebration'],
    description: "The blog post is written. The Product Hunt launch is scheduled. The feature works in staging. Production is another country entirely. You will celebrate today and hotfix tomorrow. The changelog is already lying by omission.",
  },

  'artifacts-1-star-review': {
    light: ['User Feedback', 'Humility', 'Signal', 'Motivation'],
    dark: ['Rent-Free Headspace', 'Unfairness', 'Negativity Bias', 'Invisible Praise'],
    description: "'Worst app ever. Doesn't even work.' Posted by someone running iOS 12 on a phone from 2016 who didn't read the onboarding. It will live rent-free in the founder's head for six months. The five-star reviews are invisible.",
  },

  'artifacts-retro': {
    light: ['Reflection', 'Continuous Improvement', 'Team Voice', 'Closure'],
    dark: ['Ritual Theater', 'Same Action Items', 'Archived Miro Boards', 'Groundhog Day'],
    description: "What went well: nothing meaningful. What could improve: everything. Action items: the same three from last sprint that nobody did. Someone will say 'communication' and everyone will nod. The Miro board will be archived and never opened again.",
  },

  'artifacts-offsite': {
    light: ['Bonding', 'Vision Setting', 'Break from Routine', 'Alignment'],
    dark: ['Forced Fun', 'Performative Vulnerability', 'Expense Reports', 'Monday Amnesia'],
    description: "Two days at a boutique hotel where the team will 'align on vision' over overpriced wine and a ropes course nobody wanted. You'll share vulnerable truths during the trust exercise and pretend it never happened on Monday. The Uber receipt is $340.",
  },

  'artifacts-ai-slop': {
    light: ['Scale', 'Efficiency', 'SEO', 'Output Volume'],
    dark: ['Soullessness', 'Quality Collapse', 'Content Pollution', 'No One Home'],
    description: "Content that was clearly generated by a machine, approved by a human who didn't read it, and published to a blog that nobody visits. The SEO is perfect. The soul is absent. It ranks #1 for a query nobody should be searching.",
  },

  // ══════════════════════════════════════
  // VIBES
  // ══════════════════════════════════════

  'vibes-day-one': {
    light: ['Fresh Start', 'Possibility', 'Clean Slate', 'Hope'],
    dark: ['Naivety', 'Overwhelm', 'False Promises', 'Future You Problems'],
    description: "New laptop smell, fresh Slack install, zero unread messages. Your calendar is empty. Your hope is full. You genuinely believe the onboarding doc when it says 'we move fast and break things.' You don't yet know that the thing they'll break is you.",
  },

  'vibes-blue-sky': {
    light: ['Possibility', 'Ideation', 'No Constraints', 'Creative Freedom'],
    dark: ['Unmoored', 'Scope Creep', 'Endless Brainstorming', 'Nothing Ships'],
    description: "The meeting where anything is possible and nothing is decided. Whiteboards fill with ideas that will never see production. It's energizing and useless in equal measure. Someone will say 'no bad ideas' and you will have several.",
  },

  'vibes-the-collab': {
    light: ['Synergy', 'Cross-Pollination', 'Shared Ownership', 'Momentum'],
    dark: ['Too Many Cooks', 'Meeting Creep', 'Diffused Accountability', 'Slack Thread Hell'],
    description: "A 'quick sync' that becomes a recurring series. Six people in a room, three time zones on Zoom, and a doc that everyone can edit and nobody owns. The collab is real. The output is a spreadsheet with 47 tabs.",
  },

  'vibes-flow-state': {
    light: ['Productivity', 'Presence', 'Mastery', 'Timelessness'],
    dark: ['Interruption Trauma', 'Context Switch Cost', 'Rare and Fragile', 'Slack Pings'],
    description: "That elusive two hours where the code wrote itself and you forgot to eat. You emerged from the cave a different person. It happens four times a year. The next meeting is in seven minutes. The flow is already a memory.",
  },

  'vibes-imposter-syndrome': {
    light: ['Humility', 'Self-Awareness', 'Drive to Prove', 'Empathy'],
    dark: ['Self-Doubt', 'Paralysis', 'Undervaluing Yourself', 'Anxiety'],
    description: "You are absolutely certain that everyone around you is smarter, more qualified, and will eventually discover you've been Googling basic syntax for years. Plot twist: they're all Googling it too. The entire industry is imposters all the way down.",
  },

  'vibes-sunday-scaries': {
    light: ['Anticipation', 'Preparation', 'Self-Awareness', 'Signal to Change'],
    dark: ['Dread', 'Anxiety', 'Work Consuming Life', 'Existential Unease'],
    description: "It's 6pm on Sunday and your chest is tight. Tomorrow's standup requires you to explain what you did last week, which was mostly attend meetings about what you'd do this week. The dread is productivity's shadow. It always arrives on time.",
  },

  'vibes-out-of-office': {
    light: ['Rest', 'Boundaries', 'Recharging', 'Perspective'],
    dark: ['Fake Disconnection', 'Guilt', 'Slack Checking', 'Phantom Notifications'],
    description: "The autoresponder is on. The laptop is 'technically' in the suitcase. You will check Slack exactly once, which will become four times, which will become a 45-minute thread about a deploy that shouldn't have happened. Vacation is a state of mind you cannot access.",
  },

  'vibes-craft': {
    light: ['Mastery', 'Pride', 'Attention to Detail', 'Excellence'],
    dark: ['Perfectionism', 'Over-Engineering', 'Sunk Cost', 'Nobody Notices'],
    description: "You spent three days on the animation. The padding is pixel-perfect. The code is elegant. Nobody will notice. The PM will ask for a different color. The craft is for you. The craft is always for you.",
  },

  'vibes-the-pivot': {
    light: ['Adaptation', 'Survival', 'New Direction', 'Reinvention'],
    dark: ['Abandonment', 'Identity Crisis', 'Team Casualties', 'Rebranding Trauma'],
    description: "The product isn't working, the metrics are grim, and someone just said 'what if we pivoted to B2B' like they invented the concept. The rebrand will take longer than building the new product. Half the team will not survive the pivot. The press release will call it 'evolution.'",
  },

  'vibes-the-reorg': {
    light: ['Fresh Structure', 'New Opportunities', 'Clearing Deadwood', 'Reset'],
    dark: ['Chaos', 'Musical Chairs', 'Broken Teams', 'Spirograph Org Charts'],
    description: "Your skip-level is now your manager. Your manager is now 'exploring new opportunities.' The org chart looks like it was designed by a toddler with a Spirograph. Your team name changed but your work didn't. This is the third reorg this year. It will not be the last.",
  },

  'vibes-burnout': {
    light: ['Signal to Rest', 'Self-Awareness', 'Permission to Stop', 'Recalibration'],
    dark: ['Emptiness', 'Numbness', 'Loss of Identity', 'Invisible Suffering'],
    description: "You used to love this. You think. The laptop opens and the hours vanish and you've done things but felt nothing. Your PTO balance is high and your serotonin is low. The work is fine. You are not fine. These are treated as unrelated.",
  },

  'vibes-golden-handcuffs': {
    light: ['Stability', 'Financial Security', 'Patience', 'Compounding Value'],
    dark: ['Trapped', 'Comfortable Misery', 'Fear of Leaving', 'One More Year'],
    description: "The salary is too good to leave. The equity cliff is always just one more year away. You are comfortable and miserable in equal measure. The handcuffs are golden and they fit perfectly and you could leave anytime. You will not leave anytime.",
  },

  'vibes-layoffs': {
    light: ['Clarity', 'New Beginnings', 'Severance', 'Freedom'],
    dark: ['Shock', 'Betrayal', 'Survivor Guilt', 'Quick Chat with HR'],
    description: "The calendar invite says 'Quick Chat' and it's from someone in HR you've never met. It's fifteen minutes long. Your badge will stop working by lunch. The all-hands that follows will use the phrase 'difficult decision' exactly seven times.",
  },

  'vibes-the-liquidity-event': {
    light: ['Culmination', 'Liquidity', 'Validation', 'Celebration'],
    dark: ['Disappointment', 'Dilution Math', 'Used Honda Money', 'Lock-Up Period'],
    description: "The bell rings. The stock price does a thing. LinkedIn posts with champagne emojis multiply like bacteria. The early employees do math on napkins. The rest of you check your vested shares and realize you can almost afford a used Honda. Congratulations.",
  },

  'vibes-the-counteroffer': {
    light: ['Leverage', 'Recognition', 'Negotiation', 'Knowing Your Worth'],
    dark: ['Temporary Fix', 'Same Problems', 'Resentment Compounding', 'Delayed Departure'],
    description: "You finally got the courage to quit and now they're offering you 30% more to stay. The money is tempting. The problems are the same. You'll take the counter, feel briefly valued, and start job searching again in four months with more resentment and a slightly higher base.",
  },

  'vibes-exit-interview': {
    light: ['Closure', 'Honest Feedback', 'Moving On', 'Last Word'],
    dark: ['Too Late to Matter', 'Polite Violence', 'Burning Bridges', 'Fast-Typing HR'],
    description: "They want honest feedback now that you're leaving, which is rich because they didn't want it when you were staying. You could burn it all down or you could smile and say 'growth opportunities.' You choose violence, politely. The HR person types very fast.",
  },
}
