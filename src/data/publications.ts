// One entry per publication. Add new ones at the top of the list; the page groups them by year.
// `url` is optional and is added only where a link is known.
export interface Publication {
  year: number;
  title: string;
  authors: string[];
  venue?: string;
  url?: string;
  slug?: string; // anchor id, so other pages can link to this entry
  award?: string;
  code?: { label: string; url: string }; // source code or data that goes with the paper
}

export const publications: Publication[] = [
  {
    year: 2026,
    title: 'Real-Time, Context-Specific Educational Metadata Enrichment of Learning Resources on the Web',
    authors: ['Ratan Sebastian', 'A. Hoppe'],
    venue: 'Proceedings of the 26th ACM/IEEE Joint Conference on Digital Libraries (JCDL), article 89, pp. 1-5',
    url: 'https://doi.org/10.1145/3805696.3846468',
    slug: 'jcdl-2026-metadata',
  },
  {
    year: 2026,
    title: 'Using Hierarchical Controlled Vocabularies to Understand CLIP Retrieval Failures in Historical Photo Collections',
    authors: ['Ratan Sebastian', 'A. Hoppe', 'C. Rippe', 'R. Ewerth'],
    venue: 'arXiv preprint arXiv:2607.19836',
    url: 'https://arxiv.org/abs/2607.19836',
    slug: 'clip-failures-historical-photos',  },
  {
    year: 2026,
    title: 'Examining Gender and Racial Bias in Vision-language Models within Colonial Contexts',
    authors: ['S. Awale', 'O. Gavali', 'Ratan Sebastian', 'C. Rippe', 'A. Hoppe', 'T. Risse', 'R. Ewerth'],
    venue: 'WebSci Companion \'26: Companion Publication of the 2026 18th ACM Web Science Conference, pp. 70-74',
    url: 'https://doi.org/10.1145/3795513.3807441',
    award: 'Best Poster Award, ACM Web Science Conference 2026',
    slug: 'bias-vlm-colonial-contexts',  },
  {
    year: 2025,
    title: 'Validating LLM-Generated Relevance Labels for Educational Resource Search',
    authors: ['Ratan Sebastian', 'A. Hoppe'],
    venue: 'arXiv preprint arXiv:2504.12732',
    url: 'https://arxiv.org/abs/2504.12732',
    slug: 'llm-relevance-labels',
  },
  {
    year: 2025,
    title: 'Supporting Teachers Through AI-Augmented Web Search for Educational Resource Discovery',
    slug: 'aied-2025-augmented-search',
    url: 'https://link.springer.com/chapter/10.1007/978-3-031-98414-3_17',
    award: 'Best paper nominee, AIED 2025 main track',
    code: { label: 'LessonLens source code', url: 'https://github.com/rxvl-d/LessonLens-pub' },
    authors: ['Ratan Sebastian', 'A. Hoppe'],
    venue: 'International Conference on Artificial Intelligence in Education (AIED), pp. 236-250',
  },
  {
    year: 2025,
    title: 'Diamond Funding Navigator: comprehensive overview of financing consortia for Diamond Open Access publications',
    authors: ['A. Eppelin', 'Ratan Sebastian', 'M. Tullney'],
    venue: 'CRAFT-OA Conference, Göttingen (poster), Zenodo',
    url: 'https://oa.tib.eu/renate/handle/123456789/27850',
    slug: 'diamond-funding-navigator',
  },
  {
    year: 2024,
    title: 'Learning analytics and the Universal Design for Learning (UDL): A clustering approach',
    authors: ['M. Roski', 'Ratan Sebastian', 'R. Ewerth', 'A. Hoppe', 'A. Nehring'],
    venue: 'Computers & Education 214, 105028',
  },
  {
    year: 2024,
    title: 'An updated analysis of learning resource metadata usage on the web',
    slug: 'tpdl-2024-metadata-usage',
    authors: ['Ratan Sebastian', 'A. Hoppe'],
    venue: '28th International Conference on Theory and Practice of Digital Libraries (TPDL 2024), Ljubljana, Proceedings Part II, pp. 85-94',
    url: 'https://doi.org/10.1007/978-3-031-72440-4_8',
  },
  {
    year: 2024,
    title: 'Adaptive Search Support for Teachers in Lesson Planning',
    authors: ['Ratan Sebastian'],
    venue: 'UMAP Adjunct \'24: Adjunct Proceedings of the 32nd ACM Conference on User Modeling, Adaptation and Personalization, pp. 20-24',
    url: 'https://doi.org/10.1145/3631700.3664921',
  },
  {
    year: 2024,
    title: 'Refugee Policy in 1970s Archives',
    authors: ['S. Cosemans', 'P. Grant', 'Ratan Sebastian', 'M. Allassonnière-Tang'],
    venue: 'Poster presented at Digital Humanities Benelux, Leuven, 6 June 2024',
    url: '/posters/Cosemans_etal_poster_DHBenelux2024.pdf',
  },
  {
    year: 2023,
    title: 'Dropout prediction in a web environment based on Universal Design for Learning',
    authors: ['M. Roski', 'Ratan Sebastian', 'R. Ewerth', 'A. Hoppe', 'A. Nehring'],
    venue: 'International Conference on Artificial Intelligence in Education (AIED), pp. 515-527',
    url: 'https://doi.org/10.1007/978-3-031-36272-9_42',
  },
  {
    year: 2022,
    title: 'Grade Level Filtering for Learning Object Search using Entity Linking',
    authors: ['Ratan Sebastian', 'R. Ewerth', 'A. Hoppe'],
    venue: '3rd International Workshop on Investigating Learning During Web Search (IWILDS), SIGIR 2022, CEUR-WS 3411',
    url: 'https://ceur-ws.org/Vol-3411/IWILDS-paper3.pdf',
  },
  {
    year: 2021,
    title: 'Topic modelling on archive documents from the 1970s: global policies on refugees',
    authors: ['P. Grant', 'Ratan Sebastian', 'M. Allassonnière-Tang', 'S. Cosemans'],
    venue: 'Digital Scholarship in the Humanities 36(4), pp. 886-904',
    url: 'https://doi.org/10.1093/llc/fqab018',
    slug: 'dsh-2021-refugee-archives',
  },
];
