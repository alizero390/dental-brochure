/**
 * Treatments confirmed by public listings for Acorn Dental Centre.
 * Copy is general patient education — have the dentist review it before launch
 * (AHPRA advertising guidelines: no guarantees, no testimonials, no
 * "painless"/"best" claims, risks mentioned where relevant).
 *
 * Not included because they are unconfirmed: implants, crowns/bridges,
 * children's dental (CDBS). Add an entry here once the practice confirms.
 */

export type Service = {
  slug: string;
  name: string;
  icon: IconName;
  summary: string;
  intro: string;
  whoFor: string[];
  steps: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
};

export type IconName = "shield" | "tooth" | "root" | "wisdom" | "denture" | "braces" | "sparkle";

export const services: Service[] = [
  {
    slug: "check-ups-and-cleans",
    name: "Check-ups & Cleans",
    icon: "shield",
    summary: "Regular examinations and professional cleans to catch problems early and keep gums healthy.",
    intro:
      "Prevention is the most comfortable and affordable kind of dentistry. A regular check-up lets us spot decay, gum disease and wear early — often before you notice anything — while a professional clean removes the hardened plaque (calculus) that brushing can't.",
    whoFor: [
      "Everyone — most people benefit from a check-up every 6 to 12 months",
      "Anyone with bleeding gums, bad breath or sensitivity",
      "People who haven't seen a dentist in a while (no judgement, we promise)",
    ],
    steps: [
      { title: "Chat & history", body: "We ask about your health, any concerns and what you'd like from your visit." },
      { title: "Examination", body: "A thorough check of teeth, gums, bite and soft tissues, with X-rays only when clinically needed." },
      { title: "Scale & polish", body: "Plaque and calculus are gently removed and teeth polished." },
      { title: "Your plan", body: "We explain what we found, your options and costs before any further treatment." },
    ],
    faqs: [
      { q: "How often should I have a check-up?", a: "Most people do well with a visit every 6–12 months. We'll recommend an interval based on your own risk of decay and gum disease." },
      { q: "Can I claim on my health fund?", a: "Check-ups and cleans are usually covered under extras/ancillary cover. We have HICAPS, so bring your health fund card and you can claim on the spot — you only pay the gap." },
    ],
  },
  {
    slug: "fillings",
    name: "Fillings",
    icon: "tooth",
    summary: "Tooth-coloured fillings that repair decay and chips while blending naturally with your smile.",
    intro:
      "When decay or a small fracture damages a tooth, a filling restores its shape and strength and stops the problem getting worse. We use tooth-coloured composite resin that is bonded to the tooth and matched to its natural shade.",
    whoFor: [
      "Cavities found at a check-up",
      "Chipped, cracked or worn teeth",
      "Replacing old, leaking or discoloured fillings",
    ],
    steps: [
      { title: "Numbing", body: "Local anaesthetic is used so you stay comfortable." },
      { title: "Clean out", body: "Decayed or weakened tooth structure is carefully removed." },
      { title: "Bond & build", body: "Composite is layered, shaped and set with a curing light." },
      { title: "Polish & bite check", body: "We fine-tune your bite so the tooth feels natural." },
    ],
    faqs: [
      { q: "Will it hurt?", a: "We use local anaesthetic, so most people feel pressure rather than pain. Let us know if you're anxious — we'll go at your pace." },
      { q: "How long does a filling last?", a: "It depends on size, location and your habits. Good home care and regular check-ups help fillings last many years." },
    ],
  },
  {
    slug: "root-canal-treatment",
    name: "Root Canal Treatment",
    icon: "root",
    summary: "Save an infected or badly inflamed tooth and relieve toothache — without extraction.",
    intro:
      "Inside every tooth is soft pulp tissue containing nerves and blood vessels. Deep decay, cracks or trauma can let bacteria in, causing infection and pain. Root canal treatment removes the damaged pulp, disinfects the canals and seals them, letting you keep your natural tooth.",
    whoFor: [
      "Lingering sensitivity to hot or cold",
      "Throbbing toothache, or pain on biting",
      "Swelling or a pimple-like spot on the gum",
      "A darkened tooth after an injury",
    ],
    steps: [
      { title: "Diagnosis", body: "Examination and X-rays confirm whether the tooth can be saved." },
      { title: "Cleaning", body: "Under local anaesthetic, infected pulp is removed and the canals shaped and disinfected." },
      { title: "Sealing", body: "Canals are filled and sealed to prevent reinfection. This may take more than one visit." },
      { title: "Protection", body: "A filling or crown protects the treated tooth long-term." },
    ],
    faqs: [
      { q: "Is root canal treatment painful?", a: "Treatment is done under local anaesthetic and is often similar to having a filling. It's usually the infection beforehand that hurts — treatment aims to relieve it." },
      { q: "Wouldn't it be easier to pull the tooth out?", a: "Sometimes extraction is the right option, and we'll discuss it honestly. Keeping your natural tooth generally helps your bite and avoids the cost of replacing it." },
    ],
  },
  {
    slug: "wisdom-teeth",
    name: "Wisdom Teeth & Extractions",
    icon: "wisdom",
    summary: "Assessment and careful removal of troublesome wisdom teeth and teeth that can't be saved.",
    intro:
      "Wisdom teeth often don't have enough room to come through properly. When they're impacted, partially erupted or hard to clean they can cause pain, infection, and damage to neighbouring teeth. We assess each case with X-rays and explain whether removal is recommended.",
    whoFor: [
      "Pain, swelling or recurring infection around a back tooth",
      "Food trapping and decay near wisdom teeth",
      "Teeth that are broken down beyond repair",
    ],
    steps: [
      { title: "Assessment", body: "Examination and X-rays to see the tooth's position and roots." },
      { title: "Options & consent", body: "We explain the procedure, risks, recovery and costs. Complex cases may be referred to a specialist." },
      { title: "Removal", body: "Performed under local anaesthetic with care to protect surrounding tissue." },
      { title: "Aftercare", body: "Clear written instructions and a follow-up if needed." },
    ],
    faqs: [
      { q: "Do all wisdom teeth need to come out?", a: "No. Healthy, well-positioned wisdom teeth that you can keep clean can often stay. We only recommend removal when there's a clinical reason." },
      { q: "How long is recovery?", a: "Most people feel much better within a few days. Swelling and tenderness are normal at first; we'll give you aftercare advice to keep you comfortable." },
    ],
  },
  {
    slug: "dentures",
    name: "Dentures",
    icon: "denture",
    summary: "Comfortable full and partial dentures, plus relines and repairs, to restore your smile and bite.",
    intro:
      "Missing teeth affect how you eat, speak and feel about your smile. Dentures are a removable, cost-effective way to replace one, several or all teeth. We take careful impressions and measurements so your denture looks natural and fits comfortably.",
    whoFor: [
      "People missing several or all teeth",
      "Existing denture wearers with loose, broken or worn dentures",
      "Anyone wanting an affordable alternative to fixed options",
    ],
    steps: [
      { title: "Consultation", body: "We check your mouth and discuss full vs partial denture options." },
      { title: "Impressions", body: "Accurate moulds and bite records are taken." },
      { title: "Try-in", body: "You preview the look and fit before the denture is finished." },
      { title: "Fit & review", body: "We fit your denture and adjust any sore spots at follow-up." },
    ],
    faqs: [
      { q: "How long does it take to get used to dentures?", a: "Usually a few weeks. Speaking and eating feel more natural with practice, and we'll adjust the fit if anything rubs." },
      { q: "Can you fix my old denture?", a: "Often, yes. Cracks, broken teeth and loose fit can frequently be repaired or relined. Call us to discuss." },
    ],
  },
  {
    slug: "orthodontics",
    name: "Orthodontics",
    icon: "braces",
    summary: "Straighten crowded or gappy teeth and improve your bite for a healthier, more confident smile.",
    intro:
      "Crooked or crowded teeth can be harder to clean and may cause uneven wear or jaw strain. Orthodontic treatment gradually moves teeth into better positions. We'll assess your teeth and bite and talk you through suitable options, timeframes and costs.",
    whoFor: [
      "Crowded, crooked or spaced teeth",
      "Overbites, underbites and crossbites",
      "Teens and adults wanting a straighter smile",
    ],
    steps: [
      { title: "Assessment", body: "Examination, photos and X-rays to understand your teeth and bite." },
      { title: "Treatment plan", body: "We explain the options, estimated timeframe and fees. Complex cases may be referred to a specialist orthodontist." },
      { title: "Active treatment", body: "Regular reviews as your teeth move." },
      { title: "Retention", body: "Retainers help keep your new smile in place." },
    ],
    faqs: [
      { q: "Am I too old for orthodontics?", a: "Teeth can be moved at any age as long as your teeth and gums are healthy. Many of our orthodontic patients are adults." },
      { q: "How long does treatment take?", a: "It varies with the complexity of the case — from several months to a couple of years. We'll give you an estimate at your assessment." },
      { q: "Can I pay for orthodontics in instalments?", a: "Yes. Payment plans for orthodontic treatment are available through DentiCare, so you can spread the cost. Ask our team for details." },
    ],
  },
  {
    slug: "teeth-whitening",
    name: "Teeth Whitening",
    icon: "sparkle",
    summary: "Professional, dentist-supervised whitening to safely lift stains and brighten your smile.",
    intro:
      "Coffee, tea, wine, smoking and age can all dull teeth over time. Professional whitening uses dentist-strength gels with custom-fitted trays, so results are more predictable and gentler on your gums than many over-the-counter products.",
    whoFor: [
      "Natural teeth with surface or age-related staining",
      "People preparing for a wedding or special event",
      "Anyone wanting a brighter smile after a check-up and clean",
    ],
    steps: [
      { title: "Check-up first", body: "We make sure teeth and gums are healthy and record your starting shade." },
      { title: "Custom trays", body: "Impressions are taken to make trays that fit your teeth precisely." },
      { title: "Whitening", body: "You whiten with professional gel as directed, usually over a couple of weeks." },
      { title: "Review", body: "We check results and advise on keeping them." },
    ],
    faqs: [
      { q: "Will whitening work on fillings or crowns?", a: "No — whitening only lightens natural tooth enamel. We'll discuss how this affects any existing restorations before you start." },
      { q: "Does whitening cause sensitivity?", a: "Some people notice temporary sensitivity. We'll tailor the strength and schedule to keep you comfortable." },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
