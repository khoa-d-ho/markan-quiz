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
      text: 'You discovered a respected leader illegally helping the homeless. Exposing them causes a scandal; hiding it burdens you. Your choice?',
      options: [
        { archetype: 'scribe',    text: 'Report it. Rules exist for a reason; rogue charity is dangerous.' },
        { archetype: 'demoniac',  text: 'Shout it everywhere! The broken system needs this disruption.' },
        { archetype: 'faithful',  text: 'Help immediately, completely ignoring the legal risks to yourself.' },
        { archetype: 'disciple',  text: 'Keep it quiet to stay in the inner circle, but plan an exit.' },
        { archetype: 'centurion', text: 'Watch silently. True integrity proves itself in the dark.' },
      ],
    },
    {
      number: 2,
      titleLabel: 'The Uncredentialed Voice',
      text: 'A speaker with a rough background and zero formal credentials starts explaining complex truths better than any educated expert. How do you view them?',
      options: [
        { archetype: 'scribe',    text: 'Reject them. Without proper degrees, they cannot be trusted.' },
        { archetype: 'faithful',  text: 'Listen eagerly to their truth, ignoring their lack of status.' },
        { archetype: 'disciple',  text: 'Nod along, but secretly worry about what others will think.' },
        { archetype: 'demoniac',  text: 'Cheer loudly because they make the established experts look foolish.' },
        { archetype: 'centurion', text: 'Recognize the raw, undeniable authority that titles can never buy.' },
      ],
    },
    {
      number: 3,
      titleLabel: 'The Tradition Trap',
      text: 'Someone urgently needs your help, but helping them right now would break a sacred tradition or strict rule of your community. What do you do?',
      options: [
        { archetype: 'disciple',  text: 'Quietly ask a leader, afraid of making the wrong choice.' },
        { archetype: 'scribe',    text: 'Insist they wait. Breaking community traditions invites chaos.' },
        { archetype: 'centurion', text: "Note the rule's hypocrisy and help because it is practical." },
        { archetype: 'faithful',  text: 'Immediately cross the boundary and help, completely disregarding the rules.' },
        { archetype: 'demoniac',  text: 'Loudly mock the tradition and help, daring anyone to stop you.' },
      ],
    },
    {
      number: 4,
      titleLabel: 'The Unclean / The Outcast',
      text: 'At a pristine, elite gala, a disheveled, erratic person starts shouting uncomfortable truths. The guests are horrified. How do you react?',
      options: [
        { archetype: 'disciple',  text: 'Slip out the back door to avoid the embarrassment and drama.' },
        { archetype: 'scribe',    text: 'Demand security remove them for contaminating the event.' },
        { archetype: 'faithful',  text: 'Approach directly and offer them a drink, ignoring the social taboo.' },
        { archetype: 'demoniac',  text: 'Feel a surge of kinship and sit right next to them.' },
        { archetype: 'centurion', text: 'Watch objectively; the "polite" guests are terrified of the truth.' },
      ],
    },
    // ── Question 5 is the TIE-BREAKER — keep it last ──────────────────────────
    {
      number: 5,
      titleLabel: 'The Ultimate Unveiling',
      text: 'Your visionary mentor is publicly humiliated, stripped of all power, and completely vulnerable. What is your final response?',
      options: [
        { archetype: 'demoniac',  text: "Mourn loudly from the margins, feeling the world's cruelty." },
        { archetype: 'disciple',  text: 'Delete all association and quickly disappear into the crowd.' },
        { archetype: 'centurion', text: 'Look at their broken state and realize: This is true greatness.' },
        { archetype: 'faithful',  text: 'Refuse to leave, standing vigil in their darkest moment.' },
        { archetype: 'scribe',    text: 'Nod in agreement. The system perfectly exposed a dangerous fraud.' },
      ],
    },
  ];