import projDiriyah from "@/assets/project-diriyah.jpg";
import projCrusher from "@/assets/project-crusher.jpg";
import projRoads from "@/assets/project-roads.jpg";
import projDemolition from "@/assets/project-demolition.jpg";
import projUtilities from "@/assets/project-utilities.jpg";
import projTrucks from "@/assets/project-trucks.jpg";

export type Cat =
  | "الكل"
  | "بنية تحتية"
  | "حفر وردم"
  | "كسارات"
  | "ترحيل"
  | "إنشاءات";

export type Project = {
  slug: string;
  name: string;
  client?: string;
  city?: string;
  sector?: "حكومي" | "خاص";
  role?: "رئيسي" | "باطن";
  year?: string;
  scope: string;
  description: string;
  scopeItems: string[];
  value: string;
  cat: Cat;
  img: string;
  gallery: string[];
};

const G = {
  diriyah: projDiriyah,
  crusher: projCrusher,
  roads: projRoads,
  demolition: projDemolition,
  utilities: projUtilities,
  trucks: projTrucks,
};

export const PROJECTS: Project[] = [
  {
    slug: "diriyah-gate-148",
    name: "بوابة الدرعية — عقد 148",
    client: "هيئة تطوير بوابة الدرعية",
    city: "الرياض",
    sector: "حكومي",
    role: "رئيسي",
    year: "2021 – 2022",
    scope:
      "أعمال البنية التحتية، حفر، ردم، إنتاج مواد ردم بالكسارات، تأجير معدات",
    description:
      "أحد أكبر عقود الشركة ضمن مشروع بوابة الدرعية التراثي، شمل تنفيذ أعمال حفر وردم بكميات كبيرة، إنتاج مواد الردم باستخدام الكسارات المتحركة في الموقع، إضافة إلى تأجير أسطول كامل من المعدات الثقيلة للمقاول الرئيسي. اكتمل المشروع بنسبة 100% ضمن الجدول الزمني المعتمد.",
    scopeItems: [
      "أعمال حفر وتسوية لأكثر من 690,000 م³",
      "إنتاج مواد الردم بكسارات متحركة داخل الموقع",
      "تأجير معدات ثقيلة (حفارات وقلابات)",
      "نقل وترحيل ناتج الحفر",
    ],
    value: "59,974,555 ر.س",
    cat: "بنية تحتية",
    img: G.diriyah,
    gallery: [G.diriyah, G.utilities, G.trucks],
  },
  {
    slug: "diriyah-gate-102",
    name: "بوابة الدرعية — عقد 102",
    client: "هيئة تطوير بوابة الدرعية",
    city: "الرياض",
    sector: "حكومي",
    role: "رئيسي",
    year: "2021 – 2022",
    scope: "ترحيل مواد ناتجة عن الكسارة",
    description:
      "عقد متخصص في ترحيل المواد الناتجة عن الكسارات داخل نطاق مشروع بوابة الدرعية، باستخدام أسطول من القلابات الهاردوكس وفرق دعم لوجستي على مدار الساعة.",
    scopeItems: [
      "ترحيل ناتج الكسارات إلى مناطق التخزين",
      "تشغيل أسطول قلابات هاردوكس",
      "تنسيق لوجستي مع المقاول الرئيسي",
    ],
    value: "15,243,700 ر.س",
    cat: "ترحيل",
    img: G.diriyah,
    gallery: [G.diriyah, G.trucks, G.crusher],
  },
  {
    slug: "king-salman-park",
    name: "حديقة الملك سلمان",
    client: "مشاريع الرياض الكبرى",
    city: "الرياض",
    sector: "حكومي",
    role: "باطن",
    year: "2021",
    scope: "ترحيل المخلفات الناتجة عن الحفر",
    description:
      "ساهمت شركة الأسطول الآلي في أحد أكبر مشاريع التشجير العالمية من خلال تنفيذ أعمال ترحيل ناتج الحفر بكميات ضخمة وفق جدول زمني صارم، مع الالتزام بأعلى معايير السلامة والبيئة.",
    scopeItems: [
      "ترحيل المخلفات الناتجة عن الحفر",
      "تشغيل أسطول قلابات على مدار الساعة",
      "إدارة الحركة داخل الموقع",
    ],
    value: "16,000,000 ر.س",
    cat: "ترحيل",
    img: G.utilities,
    gallery: [G.utilities, G.trucks, G.roads],
  },
  {
    slug: "qairawan-3315",
    name: "مخطط القيروان 3315/1",
    client: "مطوّر خاص",
    city: "الرياض",
    sector: "خاص",
    role: "رئيسي",
    year: "2017 – 2018",
    scope: "بنية تحتية، حفر، تسوية، ردم، طرق، شبكات كهرباء وإنارة، صرف صحي، أرصفة وبردورات",
    description:
      "تنفيذ كامل لأعمال البنية التحتية لمخطط سكني كبير في حي القيروان، شمل أعمال الحفر والتسوية، طبقات الأسفلت والبيسكورس، وشبكات الخدمات (كهرباء، إنارة، صرف صحي) إضافة إلى الأرصفة والبردورات.",
    scopeItems: [
      "حفر، تسوية وردم",
      "تنفيذ شبكات كهرباء وإنارة",
      "شبكات صرف صحي ومياه",
      "أعمال طرق وأسفلت",
      "أرصفة وبردورات",
    ],
    value: "62,304,913 ر.س",
    cat: "بنية تحتية",
    img: G.roads,
    gallery: [G.roads, G.utilities, G.demolition],
  },
  {
    slug: "city-view-jeddah",
    name: "مخطط سيتي فيو — جدة",
    client: "مطوّر خاص",
    city: "جدة",
    sector: "خاص",
    role: "رئيسي",
    year: "2016 – 2019",
    scope:
      "بنية تحتية، حفر، ردم، تسوية، طرق، شبكات كهرباء، شبكات مياه، أرصفة وعبارات",
    description:
      "أحد أكبر مخططات التطوير العمراني في جدة، نفّذت الشركة فيه أعمال البنية التحتية الكاملة بعقد قيمته 204 مليون ريال، شامل الطرق وشبكات الخدمات والعبارات، باكتمال 100%.",
    scopeItems: [
      "حفر وردم وتسوية",
      "أعمال طرق وأسفلت",
      "شبكات كهرباء ومياه",
      "أرصفة وعبارات",
    ],
    value: "204,000,000 ر.س",
    cat: "بنية تحتية",
    img: G.roads,
    gallery: [G.roads, G.utilities, G.diriyah],
  },
  {
    slug: "princess-nourah",
    name: "جامعة الأميرة نورة",
    client: "وزارة التعليم",
    city: "الرياض",
    sector: "حكومي",
    role: "باطن",
    scope: "بنية تحتية، حفر، ردم، إنتاج مواد ردم بالكسارات",
    description:
      "ساهمت الشركة في أعمال البنية التحتية ضمن مشروع جامعة الأميرة نورة، عبر تنفيذ الحفر والردم وإنتاج مواد الردم باستخدام كسارات الموقع.",
    scopeItems: [
      "حفر وردم",
      "إنتاج مواد الردم بالكسارات",
      "تسوية وتجهيز للمباني",
    ],
    value: "34,000,000 ر.س",
    cat: "بنية تحتية",
    img: G.utilities,
    gallery: [G.utilities, G.crusher, G.demolition],
  },
  {
    slug: "durrat-al-shifa",
    name: "مخطط درة الشفا",
    city: "الرياض",
    sector: "خاص",
    scope: "بنية تحتية، حفر، ردم، إنتاج مواد ردم بالكسارات",
    description:
      "تنفيذ أعمال البنية التحتية لمخطط سكني بمنطقة الشفا، شملت الحفر والردم وإنتاج المواد محلياً عبر الكسارات.",
    scopeItems: ["حفر وردم", "إنتاج مواد بالكسارات", "تسوية"],
    value: "25,000,000 ر.س",
    cat: "بنية تحتية",
    img: G.crusher,
    gallery: [G.crusher, G.roads, G.utilities],
  },
  {
    slug: "dammam-correctional",
    name: "إصلاحية الدمام",
    client: "وزارة الداخلية",
    city: "الدمام",
    sector: "حكومي",
    scope: "بنية تحتية، حفر، ردم، إنتاج مواد ردم بالكسارات",
    description:
      "أعمال بنية تحتية شاملة لمشروع إصلاحية الدمام تشمل الحفر والردم وإنتاج المواد.",
    scopeItems: ["حفر وردم", "إنتاج مواد بالكسارات"],
    value: "11,000,000 ر.س",
    cat: "حفر وردم",
    img: G.demolition,
    gallery: [G.demolition, G.utilities, G.crusher],
  },
  {
    slug: "riyadh-metro",
    name: "مترو الرياض",
    client: "الهيئة الملكية لمدينة الرياض",
    city: "الرياض",
    sector: "حكومي",
    role: "باطن",
    year: "2015 – 2019",
    scope: "بنية تحتية، حفر، ردم، توريد مواد إنشاءات وردم",
    description:
      "شاركت الشركة في أحد أكبر مشاريع النقل العام في المنطقة، بتوريد مواد إنشاءات وتنفيذ أعمال حفر وردم لمناطق متعددة على طول مسارات المترو.",
    scopeItems: [
      "حفر وردم لمسارات المترو",
      "توريد مواد إنشائية",
      "تأهيل ممرات العمل",
    ],
    value: "105,213,046 ر.س",
    cat: "بنية تحتية",
    img: G.utilities,
    gallery: [G.utilities, G.roads, G.trucks],
  },
  {
    slug: "dallah-hospital",
    name: "مستشفى دلة",
    city: "الرياض",
    sector: "خاص",
    scope: "بنية تحتية، حفر، ردم، إنتاج مواد ردم بالكسارات",
    description:
      "أعمال البنية التحتية لمستشفى دلة في الرياض، شملت الحفر والردم وتجهيز الأرض للمنشآت الصحية.",
    scopeItems: ["حفر وردم", "إنتاج مواد", "تسوية"],
    value: "15,000,000 ر.س",
    cat: "بنية تحتية",
    img: G.demolition,
    gallery: [G.demolition, G.utilities, G.roads],
  },
  {
    slug: "security-forces-hospital",
    name: "مستشفى قوى الأمن العام",
    client: "وزارة الداخلية",
    city: "الرياض",
    sector: "حكومي",
    scope: "بنية تحتية، حفر، ردم، إنتاج مواد ردم بالكسارات",
    description:
      "تنفيذ أعمال البنية التحتية لمستشفى قوى الأمن العام بالرياض، أحد المشاريع الحكومية الكبرى التي رسّخت سمعة الشركة لدى القطاع الصحي والأمني.",
    scopeItems: ["حفر وردم", "إنتاج مواد بالكسارات", "أعمال تسوية"],
    value: "52,000,000 ر.س",
    cat: "بنية تحتية",
    img: G.utilities,
    gallery: [G.utilities, G.crusher, G.roads],
  },
  {
    slug: "riyadh-railway",
    name: "سكة حديد الرياض",
    client: "الخطوط الحديدية السعودية (سار)",
    sector: "حكومي",
    scope: "بنية تحتية، حفر، ردم، إنتاج مواد ردم بالكسارات",
    description:
      "أعمال محدودة النطاق لكنها استراتيجية ضمن مشاريع سكة الحديد، شملت تجهيز مواد الردم محلياً.",
    scopeItems: ["حفر وردم", "إنتاج مواد"],
    value: "3,882,000 ر.س",
    cat: "بنية تحتية",
    img: G.roads,
    gallery: [G.roads, G.trucks, G.utilities],
  },
  {
    slug: "riwaq-qurtuba-mall",
    name: "مول رواق قرطبة",
    client: "شركة رؤيا العقارية",
    city: "الرياض",
    sector: "خاص",
    role: "رئيسي",
    year: "2017",
    scope: "بنية تحتية، حفر، ردم، إنشاءات",
    description:
      "تنفيذ أعمال البنية التحتية والإنشاءات لمشروع مول رواق قرطبة التجاري، أحد المشاريع المرجعية للشركة في قطاع التجزئة.",
    scopeItems: ["حفر وردم", "أعمال إنشاءات", "تجهيز المواقع"],
    value: "30,000,000 ر.س",
    cat: "إنشاءات",
    img: G.utilities,
    gallery: [G.utilities, G.roads, G.demolition],
  },
  {
    slug: "hamra-district",
    name: "مخطط حي الحمراء",
    city: "الرياض",
    sector: "خاص",
    scope: "بنية تحتية، حفر، ردم، إنتاج مواد ردم بالكسارات",
    description:
      "مخطط سكني واسع نفّذت الشركة فيه كامل أعمال البنية التحتية ومحاجر مواد الردم.",
    scopeItems: ["حفر وردم", "إنتاج مواد بالكسارات", "تسوية"],
    value: "150,000,000 ر.س",
    cat: "بنية تحتية",
    img: G.roads,
    gallery: [G.roads, G.crusher, G.utilities],
  },
  {
    slug: "yasmin-district",
    name: "مخطط حي الياسمين",
    city: "الرياض",
    sector: "خاص",
    scope: "بنية تحتية، حفر، ردم، إنتاج مواد ردم بالكسارات",
    description: "أعمال بنية تحتية ومواد ردم لمخطط حي الياسمين السكني.",
    scopeItems: ["حفر وردم", "إنتاج مواد"],
    value: "51,000,000 ر.س",
    cat: "بنية تحتية",
    img: G.diriyah,
    gallery: [G.diriyah, G.roads, G.crusher],
  },
  {
    slug: "sahafa-district",
    name: "مخطط حي الصحافة",
    city: "الرياض",
    sector: "خاص",
    scope: "بنية تحتية، حفر، ردم، إنتاج مواد ردم بالكسارات",
    description: "أعمال بنية تحتية لمخطط حي الصحافة السكني.",
    scopeItems: ["حفر وردم", "إنتاج مواد"],
    value: "73,000,000 ر.س",
    cat: "بنية تحتية",
    img: G.roads,
    gallery: [G.roads, G.utilities, G.crusher],
  },
  {
    slug: "half-moon-beach",
    name: "مخطط شاطئ نصف القمر",
    city: "الدمام",
    sector: "خاص",
    scope: "بنية تحتية، حفر، ردم، إنتاج مواد ردم بالكسارات",
    description:
      "تطوير بنية تحتية متكاملة لمخطط ساحلي على شاطئ نصف القمر بالمنطقة الشرقية.",
    scopeItems: ["حفر وردم", "إنتاج مواد"],
    value: "90,000,000 ر.س",
    cat: "بنية تحتية",
    img: G.crusher,
    gallery: [G.crusher, G.roads, G.utilities],
  },
  {
    slug: "wuroud-district",
    name: "مخطط حي الورود",
    city: "الرياض",
    sector: "خاص",
    scope: "بنية تحتية، حفر، ردم، إنتاج مواد ردم بالكسارات",
    description: "تنفيذ بنية تحتية لمخطط حي الورود السكني.",
    scopeItems: ["حفر وردم", "إنتاج مواد"],
    value: "52,000,000 ر.س",
    cat: "بنية تحتية",
    img: G.diriyah,
    gallery: [G.diriyah, G.roads, G.utilities],
  },
  {
    slug: "kharj-plan",
    name: "مخطط الخرج",
    city: "الخرج",
    sector: "خاص",
    scope: "بنية تحتية، حفر، ردم، إنتاج مواد ردم بالكسارات",
    description:
      "مشروع واسع النطاق في محافظة الخرج بقيمة قاربت 200 مليون ريال، شمل أعمال البنية التحتية وإنتاج المواد.",
    scopeItems: ["حفر وردم", "إنتاج مواد بالكسارات", "تسوية"],
    value: "199,000,000 ر.س",
    cat: "بنية تحتية",
    img: G.crusher,
    gallery: [G.crusher, G.roads, G.utilities],
  },
  {
    slug: "qadisiyah-exhibitions",
    name: "مجمع معارض القادسية",
    city: "الرياض",
    sector: "حكومي",
    scope: "بنية تحتية، حفر، ردم، تسوية، إنتاج مواد ردم، إنشاءات",
    description:
      "أعمال متكاملة لمجمع معارض القادسية تشمل البنية التحتية والإنشاءات.",
    scopeItems: ["حفر وردم", "تسوية", "إنشاءات", "إنتاج مواد"],
    value: "40,000,000 ر.س",
    cat: "إنشاءات",
    img: G.utilities,
    gallery: [G.utilities, G.roads, G.demolition],
  },
  {
    slug: "al-hilal-stadium",
    name: "تأهيل ملعب نادي الهلال",
    client: "نادي الهلال",
    city: "الرياض",
    sector: "خاص",
    scope: "بنية تحتية، حفر، ردم، تسوية، إنشاءات",
    description:
      "أعمال تأهيل البنية التحتية والإنشاءات لملعب نادي الهلال السعودي، ضمن خطة تطوير المرافق الرياضية.",
    scopeItems: ["حفر وردم", "تسوية", "إنشاءات"],
    value: "30,000,000 ر.س",
    cat: "إنشاءات",
    img: G.demolition,
    gallery: [G.demolition, G.utilities, G.roads],
  },
  {
    slug: "wuroud-city-taif",
    name: "مدينة الورود — الطائف",
    client: "شركة الجزيرة العربية",
    city: "الطائف",
    sector: "خاص",
    scope: "بنية تحتية، حفر، تسوية، ترحيل المخلفات",
    description:
      "أعمال تطوير لمدينة الورود في الطائف، تشمل الحفر والتسوية وترحيل المخلفات بكميات كبيرة.",
    scopeItems: ["حفر وتسوية", "ترحيل المخلفات"],
    value: "31,250,000 ر.س",
    cat: "ترحيل",
    img: G.trucks,
    gallery: [G.trucks, G.utilities, G.roads],
  },
  {
    slug: "musa-bridge-jeddah",
    name: "مخطط الموسى فيو — جدة",
    client: "أبناء عبدالعزيز الموسى",
    city: "جدة",
    sector: "خاص",
    role: "رئيسي",
    year: "2023",
    scope: "بنية تحتية، حفر، ردم، طرق، عبارات",
    description:
      "مشروع تطوير بنية تحتية لمخطط الموسى فيو في جدة، أحد أكبر العقود الجارية للشركة.",
    scopeItems: ["حفر وردم", "أعمال طرق", "عبارات"],
    value: "504,000,000 ر.س",
    cat: "بنية تحتية",
    img: G.roads,
    gallery: [G.roads, G.utilities, G.diriyah],
  },
  {
    slug: "national-guard-housing",
    name: "إسكان الحرس الوطني",
    client: "وزارة الحرس الوطني",
    sector: "حكومي",
    role: "باطن",
    scope: "بنية تحتية، حفر، ترحيل المخلفات",
    description:
      "أعمال حفر وترحيل مخلفات ضمن مشاريع إسكان الحرس الوطني.",
    scopeItems: ["حفر", "ترحيل المخلفات"],
    value: "3,000,000 ر.س",
    cat: "ترحيل",
    img: G.trucks,
    gallery: [G.trucks, G.utilities, G.roads],
  },
];

export const CATS: Cat[] = [
  "الكل",
  "بنية تحتية",
  "حفر وردم",
  "كسارات",
  "ترحيل",
  "إنشاءات",
];
