export interface GithubRepo {
  name: string;
  description: string;
  stargazers_count: number;
  html_url: string;
  languages_url: string;
  private: boolean;
}

export interface GithubUser {
  login: string;
  name: string;
  avatar_url: string;
  bio: string | null;
  followers: number;
  following: number;
  public_repos: number;
}

export type LanguageMap = Record<string, number>;
export type AllLanguages = Record<string, LanguageMap>;
