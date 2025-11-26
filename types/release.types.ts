export interface ArtistDetails {
  id: string;
  businessId?: string;
  limboArtistId?: string;
  displayName: string;
  wallet: string;
  gender: string;
  telephone: string | null;
  picture: string | null;
  biography: string | null;
  releaseFeed?: string | null;
  artistFeed?: string | null;
  address: string | null;
  state: string | null;
  postCode: string | null;
  country: string | null;
  appleMusic: string | null;
  facebook: string | null;
  soundCloud: string | null;
  spotify: string | null;
  twitter: string | null;
  website: string | null;
  signedContract: boolean;
  signature: string | null;
  signedDate: string | null;
  deleted: boolean;
  notified?: boolean;
  createdBy?: string;
  createdAt: string;
  updatedAt: string;
  userId: string | null;
}

export interface ReleaseArtist {
  id?: number;
  name: string | null;
  role: string;
  releaseId?: string;
  artistId: string;
  createdAt?: string;
  updatedAt?: string;
  artists_details?: ArtistDetails;
  artist?: string; // For simplified response
  picture?: string | null;
  bio?: string | null;
}

export interface User {
  id: string;
  businessId: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  phone: string;
  labelName: string;
  artistName: string;
  role: string;
  accountType: string;
  country: string;
  state: string;
  status: boolean;
  verified: boolean;
  deleted: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Label {
  id: string;
  businessId: string;
  limboLabelId: string;
  name: string;
  country: string | null;
  website: string | null;
  deleted: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Approval {
  id: string;
  releaseId: string;
  approvalStatus: string;
  information: string;
  processedBy: string;
  createdAt: string;
  updatedAt: string;
}

export interface Business {
  id: string;
  businessId: string;
  name: string;
  domain: string;
  website: string;
  logo: string;
  businessType: string;
  description: string;
  email: string;
  phoneNumber: string;
  address: string;
  verificationStatus: string;
  paymentStatus: string;
  deleted: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Release {
  id: string;
  releaseTitle: string;
  businessId?: string;
  limboReleaseId?: string;
  releaseType: "SINGLE" | "EP" | "ALBUM";
  mixVersion?: string;
  originalArtist?: string | null;
  originalSongTitle?: string | null;
  artistType?: string;
  contract?: string;
  releaseDate: string;
  releasedBefore?: string;
  originalReleaseDate?: string;
  wantPreOrder?: string;
  preOrderDate?: string;
  coverArt: string;
  catNumber?: string;
  availableSeparately?: string;
  licensedTerritories?: string;
  selectedStores?: string;
  artistNameConsent?: boolean;
  distributeMusicConsent?: boolean;
  rejectLyricsConsent?: boolean;
  format?: string | null;
  priceBand?: string;
  primaryGenre: string;
  subGenre: string;
  mood: string | null;
  volumeNumber?: string;
  volumeTotal?: string;
  pYearHolder?: string;
  pLineText?: string;
  cYearHolder?: string;
  cLineText?: string;
  generatedUpc?: string;
  upc: string;
  status: string;
  paymentStatus?: string;
  sent?: boolean;
  takeDownRequest?: boolean;
  splitFinalized?: boolean;
  takeDownStores?: string | null;
  fanLink: string | null;
  approvalId?: string;
  adminId?: string | null;
  exportActive?: boolean;
  edited?: boolean;
  editedAt?: string;
  deleted?: boolean;
  createdAt?: string;
  updatedAt?: string;
  userId?: string;
  labelId?: string;
  user?: User;
  label?: Label;
  approval?: Approval;
  artists?: ReleaseArtist[];
  business?: Business;
}

export interface TrackArtist {
  id: number;
  name: string | null;
  role: string;
  trackId: string;
  artistId: string;
  createdAt: string;
  updatedAt: string;
  artist: ArtistDetails;
}

export interface Track {
  id: string;
  wav: string;
  trackTitle: string;
  mixName: string | null;
  trackNumber: string | null;
  length: string;
  sampleStartTime: string;
  sampleEndTime: string | null;
  genre: string | null;
  trackPrice: string | null;
  isrcCode: string;
  mixVersion: string;
  explicitContent: string;
  containsVocals: string;
  hasInstrumentals: string;
  language: string;
  publishedBy: string;
  composedBy: string;
  producer: string;
  lyricist: string;
  reMixer: string;
  lyrics: string;
  publishedLyrics: boolean;
  deleted: boolean;
  createdAt: string;
  updatedAt: string;
  releaseId: string;
  artists: TrackArtist[];
}

export interface ReleasesResponse {
  success?: boolean;
  status?: string;
  message?: string;
  data: Release[];
}

export interface ReleaseDetailResponse {
  status: string;
  message: string;
  data: {
    release: Release;
    tracks: Track[];
  };
}

export type ReleaseFilterType = "all" | "newest" | "oldest";

export interface ReleaseQueryParams {
  keyword?: string;
  page?: number;
  limit?: number;
  sortBy?: "createdAt" | "releaseDate" | "releaseTitle";
  sortOrder?: "asc" | "desc";
  releaseType?: "SINGLE" | "EP" | "ALBUM";
}
