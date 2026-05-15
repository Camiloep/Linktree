'use client';

import { useEffect, useState } from 'react';
import { GithubRepo, GithubUser, LanguageMap, AllLanguages } from '@/types/github';

const CACHE_KEY = 'githubData';
const CACHE_TTL_MS = 24 * 60 * 60 * 1000;

interface CacheShape {
  repos: GithubRepo[];
  languages: AllLanguages;
  user: GithubUser | null;
  timestamp: number;
}

interface UseGithubDataResult {
  repos: GithubRepo[];
  languages: AllLanguages;
  aggregated: LanguageMap;
  user: GithubUser | null;
  loading: boolean;
  error: string | null;
}

function aggregate(languages: AllLanguages): LanguageMap {
  const total: LanguageMap = {};
  for (const repoLangs of Object.values(languages)) {
    if (!repoLangs) continue;
    for (const [lang, bytes] of Object.entries(repoLangs)) {
      total[lang] = (total[lang] ?? 0) + bytes;
    }
  }
  return total;
}

export function useGithubData(): UseGithubDataResult {
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [languages, setLanguages] = useState<AllLanguages>({});
  const [user, setUser] = useState<GithubUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const cachedRaw = localStorage.getItem(CACHE_KEY);
        if (cachedRaw) {
          try {
            const cached: CacheShape = JSON.parse(cachedRaw);
            if (cached.languages && Date.now() - cached.timestamp < CACHE_TTL_MS) {
              setRepos(cached.repos);
              setLanguages(cached.languages);
              setUser(cached.user ?? null);
              setLoading(false);
              return;
            }
          } catch {
            // cache corrupto
          }
          localStorage.removeItem(CACHE_KEY);
        }

        const res = await fetch('/api/github/data');
        if (!res.ok) {
          const body = await res.json().catch(() => ({}));
          throw new Error(body.error ?? `Error ${res.status}`);
        }

        const { repos: fetchedRepos, languages: fetchedLanguages, user: fetchedUser } = await res.json();

        const cache: CacheShape = {
          repos: fetchedRepos,
          languages: fetchedLanguages,
          user: fetchedUser ?? null,
          timestamp: Date.now(),
        };
        localStorage.setItem(CACHE_KEY, JSON.stringify(cache));

        setRepos(fetchedRepos);
        setLanguages(fetchedLanguages);
        setUser(fetchedUser ?? null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error al obtener datos de GitHub');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  return { repos, languages, aggregated: aggregate(languages), user, loading, error };
}
