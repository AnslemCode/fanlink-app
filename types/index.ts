export interface StreamingService {
  name: string;
  subtitle: string;
  icon: string;
  url?: string;
}

export interface SocialLink {
  name: string;
  href: string;
  svg: React.ReactNode;
}

export interface SongHeaderProps {
  title: string;
  artist: string;
  coverImage: string;
  audioSnippetUrl: string;
}

export interface StreamingServicesProps {
  services: StreamingService[];
}

export interface FooterProps {
  artistName: string;
  socialLinks: SocialLink[];
}
