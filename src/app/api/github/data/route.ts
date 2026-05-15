import { NextResponse } from 'next/server';
import { GithubRepo, GithubUser, LanguageMap, AllLanguages } from '@/types/github';

export const dynamic = 'force-dynamic';

export async function GET() {
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    return NextResponse.json(
      { error: 'GITHUB_TOKEN no configurado en variables de entorno' },
      { status: 500 }
    );
  }

  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: 'application/vnd.github.v3+json',
  };

  try {
    // Fetch repos y perfil de usuario en paralelo
    const [reposRes, userRes] = await Promise.all([
      fetch('https://api.github.com/user/repos?per_page=100&type=all&sort=updated', { headers }),
      fetch('https://api.github.com/user', { headers }),
    ]);

    if (!reposRes.ok) {
      return NextResponse.json(
        { error: `GitHub API: ${reposRes.status} ${reposRes.statusText}` },
        { status: reposRes.status }
      );
    }

    const repos: GithubRepo[] = await reposRes.json();
    const user: GithubUser | null = userRes.ok ? await userRes.json() : null;

    // Fetch de lenguajes autenticado y en paralelo
    const langResults = await Promise.all(
      repos.map(repo =>
        fetch(repo.languages_url, { headers })
          .then(r => r.ok ? r.json() as Promise<LanguageMap> : {})
          .catch(() => ({} as LanguageMap))
      )
    );

    const languages: AllLanguages = {};
    repos.forEach((repo, i) => {
      languages[repo.name] = langResults[i];
    });

    return NextResponse.json({ repos, languages, user });
  } catch (err) {
    console.error('Error fetching GitHub data:', err);
    return NextResponse.json(
      { error: 'Error al obtener datos de GitHub' },
      { status: 500 }
    );
  }
}
