export interface priceCardInfo {
  heading: string;
  description: string;
  amount: string;
  diskSpace: string;
  bandwidth: string;
  includes: string[];
  link?: string;
}

export interface featuresCardInfo {
  title: string;
  description: string;
  link?: string;
}

export interface reviewCardInfo {
  name: string;
  location: string;
  comment: string;
  image: string;
}

export interface supportCardInfo {
  iconLink: string;
  title: string;
}
