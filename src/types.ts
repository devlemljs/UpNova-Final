
export interface PricingTier {
  name: string;
  price: number;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export interface ComparisonRow {
  feature: string;
  starter: boolean | string;
  pro: boolean | string;
  enterprise: boolean | string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  contribution: string;
}

export interface CostData {
  name: string;
  value: number;
  color: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}
