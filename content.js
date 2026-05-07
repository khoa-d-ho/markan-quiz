// =============================================================================
//  CONTENT.JS — All editable text for The Markan Trial quiz
//  Edit freely in this file. Do NOT change the archetype keys (centurion,
//  demoniac, scribe, disciple, faithful) or the `number` fields on questions,
//  as those drive the scoring logic in index.html.
// =============================================================================


// ─── Landing Page ────────────────────────────────z─────────────────────────────

const LANDING = {
  // Small label above the title
  eyebrow: 'The Gospel of Mark · Character Assessment',

  // Main title — wrap a word in <em>...</em> to italicise it in crimson
  title: 'The <em>Trial</em> of Witness',

  // Italic subtitle below the title
  subtitle: 'Five Questions. One Archetype. No Easy Answers.',

  // Body paragraph — supports <strong> for bold and <br /> for line breaks
  body: `In the Gospel of Mark, every character who encounters Jesus is forced
into an impossible choice: <strong>flee, fight, conform, or witness.</strong>
Their responses reveal who they truly are beneath the social mask.
<br /><br />
This trial places you in five modern moral crucibles drawn directly
from the Markan narrative. Answer honestly. The questions are designed
to resist easy virtue-signalling.`,

  // Tiny footnote below the Begin button
  footnote: 'Five archetypes · Tally scoring · Theological tie-breaker',

  // Text on the Begin button
  beginButton: 'Begin Trial',
};


// ─── Result Profiles ──────────────────────────────────────────────────────────
// name   — displayed as the large heading on the result screen
// title  — italic subtitle beneath the name
// desc   — paragraph description; supports <strong> for emphasis

const ARCHETYPES = {
  centurion: {
    name: 'The Centurion',
    title: 'The Unexpected Witness',
    desc: `You see through the illusion of institutional power. You recognize true authority not in crowns, titles, or pristine buildings, but in raw vulnerability, truth, and sacrifice. <strong>When everyone else is blinded by appearances, you see reality for what it is.</strong> Like the Roman soldier at the cross who declared "Truly this was the Son of God" (not despite the horror, but because of it) you are the least expected person in the room, and yet the most honest one.`,
  },

  demoniac: {
    name: 'The Gerasene Demoniac',
    title: 'The Wilderness Prophet',
    desc: `You have survived the dark wilderness and <strong>refuse to be bound by society's chains.</strong> You are unfiltered, wild, and unafraid to speak your truth. You prefer the messy, chaotic reality over the polite lies of the establishment. The system tried to shackle you and failed. Like the Gerasene man who lived among the tombs, your suffering has become your credential, and your honesty makes the comfortable deeply uneasy.`,
  },

  scribe: {
    name: 'The Scribe',
    title: 'The Institutional Guardian',
    desc: `You seek safety in rules, titles, and established power. You believe that <strong>order is the highest good,</strong> and you are highly suspicious of disruptive truths or unauthorized power that threatens the status quo. The Law was given for a reason. The protocols exist for a reason. And yet, Mark's great irony is that the Scribes were the most educated people in the room, and the last to see what was happening right in front of them.`,
  },

  disciple: {
    name: 'The Fleeing Disciple',
    title: 'The Terrified Insider',
    desc: `You have good intentions and crave <strong>proximity to power and success.</strong> You were there for the miracles, the healings, the inner-circle teachings. However, when the truth requires genuine sacrifice, danger, or social isolation, your first instinct is self-preservation and escape. Like the young man in Mark 14 who fled naked into the night, leaving everything behind (the linen cloth, the pretense, the loyalty) you run. But the door is never fully closed on you.`,
  },

  faithful: {
    name: 'The Faithful Woman',
    title: 'The Bold Believer',
    desc: `You possess <strong>relentless, barrier-breaking faith.</strong> You are completely unbothered by social taboos or institutional rules when it comes to finding truth and healing. You will push through any crowd, touch the untouchable, and stand vigil in the darkest moments when everyone else has fled. Like the women at the tomb (Mary Magdalene, Mary, Salome) you show up first and stay longest. The boldness is not recklessness. It is love made concrete.`,
  },
};


// ─── Quiz Questions ───────────────────────────────────────────────────────────
// Each question has:
//   number     — display number (do not change)
//   titleLabel — italic label shown above the question text
//   text       — the question body
//   options    — array of 5 answer choices
//     archetype — scoring key (do NOT change: centurion / demoniac / scribe / disciple / faithful)
//     text      — the answer wording shown to the user (edit freely)
//
// NOTE: Question 5 is the tie-breaker. Keep it last in the array.

const QUESTIONS = [
  {
    number: 1,
    titleLabel: 'The Disruptive Secret',
    text: 'You discover a respected leader is secretly breaking the law to funnel resources to the unhoused. Revealing it will cause a massive scandal; hiding it feels like a burden. What is your instinct?',
    options: [
      { archetype: 'scribe',    text: 'Document the facts and report it. Rules exist for a reason, and rogue charity is dangerous.' },
      { archetype: 'demoniac',  text: 'Shout it everywhere. The system is broken and needs this kind of disruption!' },
      { archetype: 'faithful',  text: 'Step in and help them immediately, completely ignoring the legal risks to yourself.' },
      { archetype: 'disciple',  text: 'Keep it quiet. You want to stay in their inner circle, but keep an exit strategy just in case.' },
      { archetype: 'centurion', text: "Watch silently. True integrity doesn't need good PR; it proves itself in the dark." },
    ],
  },

  {
    number: 2,
    titleLabel: 'The Uncredentialed Voice',
    text: 'A speaker with a rough background and zero formal credentials starts explaining complex truths better than any educated expert. How do you view them?',
    options: [
      { archetype: 'scribe',    text: 'Reject them immediately. Without the proper degrees and vetting, they cannot be trusted.' },
      { archetype: 'faithful',  text: 'Listen eagerly to the truth of their words, entirely ignoring their lack of status.' },
      { archetype: 'disciple',  text: 'Nod along publicly, but secretly worry about what others will think if you associate with them.' },
      { archetype: 'demoniac',  text: 'Become their loudest fan simply because they make the established experts look foolish.' },
      { archetype: 'centurion', text: 'Recognize the raw, undeniable authority in their voice that titles can never buy.' },
    ],
  },

  {
    number: 3,
    titleLabel: 'The Tradition Trap',
    text: 'Someone urgently needs your help, but helping them right now would break a sacred tradition or strict rule of your community. What do you do?',
    options: [
      { archetype: 'disciple',  text: 'Quietly ask a leader what to do, afraid of making the wrong choice and looking bad.' },
      { archetype: 'scribe',    text: 'Insist they wait. Traditions hold the community together, and breaking them invites chaos.' },
      { archetype: 'centurion', text: 'Note the hypocrisy of the rule and help the person simply because it is the practical thing to do.' },
      { archetype: 'faithful',  text: 'Immediately cross the boundary and help the person, completely disregarding the "rules."' },
      { archetype: 'demoniac',  text: 'Loudly mock the tradition and help them, daring anyone in charge to stop you.' },
    ],
  },

  {
    number: 4,
    titleLabel: 'The Unclean / The Outcast',
    text: 'At a pristine, elite gala, a disheveled, erratic person starts shouting uncomfortable truths. The guests are horrified. How do you react?',
    options: [
      { archetype: 'disciple',  text: 'Slip out the back door. You hate the embarrassment and want to avoid the drama.' },
      { archetype: 'scribe',    text: 'Demand security remove them. They lack credentials and are contaminating the event.' },
      { archetype: 'faithful',  text: 'Approach directly and offer them a drink, completely ignoring the social taboo.' },
      { archetype: 'demoniac',  text: 'Feel a surge of kinship and go sit right next to them in the chaos.' },
      { archetype: 'centurion', text: 'Watch objectively, realizing the "polite" guests are actually terrified of the truth.' },
    ],
  },

  // ── Question 5 is the TIE-BREAKER — keep it last ──────────────────────────
  {
    number: 5,
    titleLabel: 'The Ultimate Unveiling',
    text: 'Your visionary mentor is publicly humiliated, stripped of all power, and completely vulnerable. What is your final response?',
    options: [
      { archetype: 'demoniac',  text: 'Mourn loudly from the margins, feeling the madness and cruelty of the world.' },
      { archetype: 'disciple',  text: 'Delete all association with them and disappear into the crowd.' },
      { archetype: 'centurion', text: 'Look at their broken state and realize: This is what true greatness actually looks like.' },
      { archetype: 'faithful',  text: 'Refuse to leave their side, standing vigil as a witness in their darkest moment.' },
      { archetype: 'scribe',    text: 'Nod in agreement. The system worked perfectly by exposing a dangerous fraud.' },
    ],
  },
];
