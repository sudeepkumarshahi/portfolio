export interface Social {
  label: string;
  handle: string;
  href: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  category: string;
  tags: string[];
  metric: string;
  metricLabel: string;
  summary: string;
  variant: 'bars' | 'line' | 'scatter';
  code: string;
  demo: string;
  caseStudy: { heading: string; body: string }[];
}

export interface Experience {
  status: string;
  role: string;
  org: string;
  period: string;
  detail: string;
}

export const profile = {
  name: 'Sudeep Kumar Shahi',
  initials: 'SKS',
  role: 'Data Science Student',
  eyebrow: '01 / Introduction',
  headline: "Hi, I'm",
  intro: 'I turn messy data into clear, useful decisions.',
  description:
    'Data Science student at Tribhuvan University, exploring machine learning, AI, and practical data projects.',
  email: 'sushantbabu100@gmail.com',
  phone: '9813901745',
  university: 'https://sms.tu.edu.np/',
  github: 'https://github.com/sudeepkumarshahi',
  linkedin: 'https://www.linkedin.com/in/sudeep-kumar-shahi-630351344/',
  resume: '/resume.pdf',
  photo: '/photo.webp',
};

export const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Skills', href: '/skills' },
  { label: 'Projects', href: '/projects' },
  { label: 'Experience', href: '/experience' },
];

export const pageLinks = [
  { label: 'About', href: '/about', description: 'Background and current focus.' },
  { label: 'Skills', href: '/skills', description: 'Languages, libraries, and tools.' },
  { label: 'Projects', href: '/projects', description: 'Selected work and write-ups.' },
  { label: 'Experience', href: '/experience', description: 'Education and opportunities.' },
];

export const socials: Social[] = [
  { label: 'GitHub', handle: '@sudeepkumarshahi', href: profile.github },
  { label: 'LinkedIn', handle: 'sudeep-kumar-shahi', href: profile.linkedin },
  { label: 'Email', handle: profile.email, href: `mailto:${profile.email}` },
  { label: 'Phone', handle: `+977 ${profile.phone}`, href: `tel:+977${profile.phone}` },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Programming Languages',
    items: ['Python', 'C', 'R'],
  },
  {
    title: 'Data Science & ML',
    items: ['Pandas', 'NumPy', 'Scikit-learn'],
  },
  {
    title: 'AI & Deep Learning',
    items: ['PyTorch', 'LangChain', 'RAG'],
  },
  {
    title: 'Web & Backend',
    items: ['FastAPI', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Databases',
    items: ['SQL', 'PostgreSQL'],
  },
  {
    title: 'Cloud & Tools',
    items: ['AWS', 'Docker', 'Power BI', 'Git', 'GitHub'],
  },
];

export const projects: Project[] = [
  {
    slug: 'customer-churn-predictor',
    title: 'Customer Churn Predictor',
    subtitle: 'Finding the customers most likely to leave before they do.',
    year: '2026',
    category: 'Classification',
    tags: ['Python', 'scikit-learn', 'pandas', 'SHAP'],
    metric: '+8 pts',
    metricLabel: 'ROC-AUC over baseline',
    summary:
      'A churn model for a fictional telecom dataset, with careful leakage checks, threshold tuning, and SHAP explanations that a non-technical team could read.',
    variant: 'bars',
    code: profile.github,
    demo: profile.github,
    caseStudy: [
      {
        heading: 'The question',
        body: 'Which subscribers are likely to churn next month, and which levers actually matter? The goal was not just accuracy but a model a retention team could trust and act on.',
      },
      {
        heading: 'The data',
        body: 'A public telecom dataset of ~7,000 customer records with contract, billing, usage, and support-history fields. I checked for missing values, duplicates, and target leakage before splitting.',
      },
      {
        heading: 'The approach',
        body: 'I built a logistic-regression baseline, then compared random forest and gradient boosting with stratified cross-validation. Categorical features were one-hot encoded inside a pipeline so preprocessing stayed inside each fold.',
      },
      {
        heading: 'The result',
        body: 'Gradient boosting reached 0.89 ROC-AUC versus 0.81 for the baseline. Tuning the decision threshold by expected cost improved precision at the top decile, and SHAP values surfaced contract length and support tickets as the strongest signals.',
      },
      {
        heading: 'What I learned',
        body: 'A slightly simpler model with calibrated probabilities and clear explanations was more useful than a marginally better black box. Next step: validate the pattern on real data with a time-based split.',
      },
    ],
  },
  {
    slug: 'ride-demand-forecasting',
    title: 'Ride Demand Forecasting',
    subtitle: 'Predicting hourly trip counts for a city transport network.',
    year: '2025',
    category: 'Time series',
    tags: ['Python', 'LightGBM', 'Prophet', 'Plotly'],
    metric: '12.4%',
    metricLabel: 'MAPE on the test weeks',
    summary:
      'An hourly demand forecast built from taxi trip records, comparing a classical seasonal baseline with a lag-feature gradient boosting model.',
    variant: 'line',
    code: profile.github,
    demo: profile.github,
    caseStudy: [
      {
        heading: 'The question',
        body: 'How many rides will each hour need next week? Accurate short-term forecasts help with driver allocation and reduce wait times.',
      },
      {
        heading: 'The data',
        body: 'NYC yellow taxi trip records aggregated into hourly counts. I handled daylight-saving gaps, extreme weather outliers, and used only information available before each prediction time.',
      },
      {
        heading: 'The approach',
        body: 'Prophet served as a seasonal baseline. The final model used lagged counts, rolling averages, hour-of-week encoding, and holiday flags with LightGBM, evaluated on a held-out rolling window.',
      },
      {
        heading: 'The result',
        body: 'LightGBM reduced MAPE from 18.1% to 12.4%, with the largest gains during weekday rush hours. A Plotly dashboard let users switch between boroughs and inspect errors by hour.',
      },
      {
        heading: 'What I learned',
        body: 'Feature engineering around time mattered more than model choice. Historical lag features were strong but also fragile around holidays, which is where the baseline stayed competitive.',
      },
    ],
  },
  {
    slug: 'news-topic-explorer',
    title: 'News Topic Explorer',
    subtitle: 'Clustering thousands of headlines into readable themes.',
    year: '2025',
    category: 'NLP',
    tags: ['Python', 'sentence-transformers', 'UMAP', 'Plotly'],
    metric: '8',
    metricLabel: 'Interpretable topic clusters',
    summary:
      'An interactive topic map of news headlines using sentence embeddings, UMAP, and clustering, with a small app for exploring how themes shift over time.',
    variant: 'scatter',
    code: profile.github,
    demo: profile.github,
    caseStudy: [
      {
        heading: 'The question',
        body: 'Can a few thousand headlines be organized into themes without manually labelling them, and can those themes be explored visually?',
      },
      {
        heading: 'The data',
        body: 'A public headline archive covering several months. I removed duplicates, stripped HTML artifacts, and kept only headlines with enough text to embed meaningfully.',
      },
      {
        heading: 'The approach',
        body: 'Headlines were embedded with a compact sentence-transformer, reduced to two dimensions with UMAP, then clustered with HDBSCAN. I labelled clusters by inspecting top terms and representative headlines.',
      },
      {
        heading: 'The result',
        body: 'Eight stable themes emerged, from markets to climate policy. An interactive scatter plot let users hover for headlines and filter by month, making shifts in coverage easy to spot.',
      },
      {
        heading: 'What I learned',
        body: 'Embedding quality mattered far more than clustering parameters. I also learned to treat topic labels as a reading aid, not ground truth, and to show uncertainty in the visualization.',
      },
    ],
  },
];

export const experience: Experience[] = [
  {
    status: 'Education',
    role: 'BSc Data Science',
    org: 'School of Mathematical Sciences (SMS), Tribhuvan University, Balkhu',
    period: '2023 — Present',
    detail: 'Currently studying statistics, machine learning, and data analysis while building practical projects alongside coursework.',
  },
  {
    status: 'Available now',
    role: 'Open to connect',
    org: 'Data Science & Machine Learning',
    period: 'Looking for opportunities',
    detail: 'Looking for an opportunity where I can work with real data, learn from a team, and contribute to meaningful projects.',
  },
  {
    status: 'Ongoing',
    role: 'Continuous learning',
    org: 'AI, Deep Learning & Backend',
    period: 'Self-directed',
    detail: 'Exploring PyTorch, LangChain, FastAPI, SQL, web scraping, and system design through self-directed projects.',
  },
];
