export interface UpdatePost {
  id: string;
  title: string;
  date: string;
  category: "Urgent" | "Resource" | "Announcement" | "Wellbeing";
  body: string;
  imageUrl?: string;
  videoUrl?: string;
}

export interface ToolkitItem {
  id: string;
  title: string;
  content: string;
}

export const EMERGENCY_HOTLINE = "+96525356444";
export const KCC_PHONE = "+96525356444";

export const KCC_INFO = {
  headOffice: {
    name: "Head Office",
    address: "Al Hamra Business Tower 19th Floor, Sharq, Kuwait",
    tel: "+965 2535 6444",
    fax: "+965 2535 6999",
  },
  jabriyaOffice: {
    name: "Jabriya Office",
    address: "Clover Center, 14th Floor, Block 1A, Street 1, Jabriya, Kuwait City 13007",
    tel: "+965 2535 6444",
  },
  supportNote:
    "World-class flexible support via WhatsApp, Email and Phone. Any issue resolved within 24 hours.",
};

export const POWER_BUDDY_FORM_URL =
  "https://forms.office.com/Pages/ResponsePage.aspx?id=REPLACE_WITH_ACTUAL_FORM_ID";
export const BEWELL_SUBSCRIBE_FORM_URL =
  "https://forms.office.com/Pages/ResponsePage.aspx?id=REPLACE_WITH_ACTUAL_FORM_ID";

export const updates: UpdatePost[] = [
  {
    id: "1",
    title: "Wellbeing Check-In Resources Now Available",
    date: "2026-03-02",
    category: "Resource",
    body: "We have compiled a comprehensive set of wellbeing check-in resources for all employees. These include guided breathing exercises, grounding techniques, and conversation starters for checking in with colleagues.",
  },
  {
    id: "2",
    title: "Power Buddy System Launched",
    date: "2026-03-01",
    category: "Announcement",
    body: "The Power Buddy System is now live. Connect with a colleague for instant grounding and support. Simply fill out the form and you will be matched with a buddy within minutes.",
  },
  {
    id: "3",
    title: "Emergency Support Contacts Updated",
    date: "2026-02-28",
    category: "Urgent",
    body: "We have updated our emergency support contact list. Please save these numbers and share them with your teams. Remember, professional support through KCC is strictly confidential.",
  },
  {
    id: "4",
    title: "Daily 'Be Well' Emails Starting This Week",
    date: "2026-02-27",
    category: "Wellbeing",
    body: "Subscribe to receive daily wellbeing tips, grounding exercises, and supportive messages directly in your inbox. Each email is designed to take less than 2 minutes to read and apply.",
  },
];

export const managerToolkit: ToolkitItem[] = [
  {
    id: "m1",
    title: "Empathy First: Checking In Without Causing Alarm",
    content:
      "Start conversations with genuine care. Use open-ended questions like 'How are you managing today?' rather than 'Are you okay?' Normalize the conversation by sharing your own feelings briefly. Listen actively and avoid rushing to solutions. Remember: your presence matters more than your words.",
  },
  {
    id: "m2",
    title: "The Power Buddy System: Promoting Connection",
    content:
      "Encourage your team members to sign up for the Power Buddy system. Share the benefits: instant connection with a colleague, no judgment, just a quick grounding conversation. Lead by example \u2014 sign up yourself and share your positive experience with the team.",
  },
  {
    id: "m3",
    title: "Healthy News Diet: Staying Informed vs. Doomscrolling",
    content:
      "Set clear boundaries around news consumption for your team. Recommend checking news at set times (e.g., morning and evening). Encourage turning off push notifications for news apps during work hours. Share reliable, factual news sources and discourage sharing unverified information.",
  },
  {
    id: "m4",
    title: "Protecting Your Family & Pets: Practical Crisis Prep",
    content:
      "Help your team think practically: prepare go-bags with essentials, keep important documents accessible, have a family communication plan. For pet owners, prepare pet emergency kits and identify pet-friendly shelters. Practical preparation reduces anxiety and builds confidence.",
  },
  {
    id: "m5",
    title: "Focus & Conditioning: Maintaining Routine",
    content:
      "Routine is an anchor during uncertainty. Help your team maintain normal work rhythms where possible. Encourage regular breaks, physical movement, and hydration. Small acts of normalcy \u2014 a team coffee, a brief standup \u2014 provide stability. Flexibility is key, but structure provides comfort.",
  },
  {
    id: "m6",
    title: "Professional Escalation: Directing to KCC",
    content:
      "Know the signs that someone needs professional help: persistent sleep disruption, inability to focus, withdrawal from social interaction, expressions of hopelessness. Gently suggest KCC support as a strength, not a weakness. All conversations with KCC are strictly confidential. Have the KCC number readily available.",
  },
];

export const individualToolkit: ToolkitItem[] = [
  {
    id: "i1",
    title: "Crisis Conditioning",
    content:
      "Practical checklist for crisis readiness:\n\u2022 Keep emergency numbers saved and accessible\n\u2022 Prepare a go-bag with 3 days of essentials\n\u2022 Know your building's emergency exits and meeting points\n\u2022 Keep your phone charged \u2014 carry a power bank\n\u2022 Identify your personal support network (3-5 people you can call)\n\u2022 Practice the 5-4-3-2-1 grounding technique daily\n\u2022 Maintain a 72-hour supply of any medications",
  },
  {
    id: "i2",
    title: "News Consumption Rules",
    content:
      "How to stay informed without spiraling:\n\u2022 Set 2 specific times per day for news updates (morning & evening)\n\u2022 Use only 2-3 trusted, factual news sources\n\u2022 Turn off push notifications for news apps\n\u2022 Avoid social media as a primary news source\n\u2022 If you feel your heart rate rising, stop immediately\n\u2022 After consuming news, do a 2-minute breathing exercise\n\u2022 Share facts, not fear \u2014 verify before forwarding",
  },
  {
    id: "i3",
    title: "Pet Care Guide",
    content:
      "Taking care of pets during sudden movements:\n\u2022 Prepare a pet emergency kit (food, water, medications, leash, carrier)\n\u2022 Keep pets in a secure, quiet room during disturbances\n\u2022 Familiar items (blankets, toys) reduce pet anxiety\n\u2022 Maintain feeding schedules as much as possible\n\u2022 Watch for signs of stress: excessive panting, hiding, aggression\n\u2022 Identify pet-friendly emergency shelters in advance\n\u2022 Consider calming aids recommended by your veterinarian",
  },
];
