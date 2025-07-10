export interface Feature {
  icon: React.ReactNode;
  title: string;
  desc: string;
  gradient: string;
}

export interface FeaturesGridProps {
  features: Feature[];
}
