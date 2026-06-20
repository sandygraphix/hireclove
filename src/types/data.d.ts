export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  benefits?: string[];
}

export interface Industry {
  name: string;
  details: string;
  subSectors: string[];
  imagePath?: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  metrics: {
    label: string;
    value: string;
  }[];
}