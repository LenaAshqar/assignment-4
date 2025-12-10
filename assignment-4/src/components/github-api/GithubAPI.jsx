import { useEffect, useState } from 'react';
import './GithubAPI.css'; // optional: create if you want module separation

const GITHUB_USERNAME = 'LenaAshqar'; // change if you want to display a different account
const REPO_COUNT = 8; // number of most-recent repos to show

export default function GithubAPI({ theme }) {
    const [repos, setRepos] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        async function fetchRepos() {
            setLoading(true);
            setError(null);
            try {

                const token = import.meta.env.GITHUB_TOKEN;
                const headers = token
                    ? { Authorization: `token ${token}` }
                    : {};

                const url = `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=${REPO_COUNT}&type=owner`;
                const res = await fetch(url, { headers });

                if (!res.ok) {
                    throw new Error(`GitHub API error: ${res.status} ${res.statusText}`);
                }

                const data = await res.json();

                const mapped = data.map((r) => ({
                    id: r.id,
                    name: r.name,
                    html_url: r.html_url,
                    description: r.description,
                    language: r.language,
                    stargazers_count: r.stargazers_count,
                    updated_at: r.updated_at,
                }));

                setRepos(mapped);
            } catch (err) {
                if (err.name !== 'AbortError') {
                    console.error(err);
                    setError(err.message || 'Failed to fetch repositories');
                }
            } finally {
                setLoading(false);
            }
        }

        fetchRepos();

        return () => controller.abort();
    }, []);

    return (
        <section id="projects" className="section">
            <div className="section-inner">
                <header className="section-header">
                    <div className="section-eyebrow">Repositories</div>
                    <h2 className="section-title">Latest GitHub repositories</h2>
                    <p className="section-description">
                        A live list of recently updated repositories from GitHub. Click a card to open the repo on GitHub.
                    </p>
                </header>

                <div className="surface-card">
                    {loading && <div className="projects-loading">Loading repositories…</div>}

                    {error && (
                        <div className="projects-error">
                            <strong>Could not load repositories:</strong> {error}
                        </div>
                    )}

                    {!loading && !error && (!repos || repos.length === 0) && (
                        <div className="projects-empty">
                            No repositories found for <code>{GITHUB_USERNAME}</code>.
                        </div>
                    )}

                    {!loading && !error && repos && repos.length > 0 && (
                        <div className="projects-grid">
                            {repos.map((repo) => (
                                <a
                                    key={repo.id}
                                    className="project-card"
                                    href={repo.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Open ${repo.name} on GitHub`}
                                >
                                    <div className="project-card-head">
                                        <h3 className="project-title">{repo.name}</h3>
                                        <div className="project-meta">
                                            <span className="project-lang">{repo.language || '—'}</span>
                                            <span className="project-stars">★ {repo.stargazers_count}</span>
                                        </div>
                                    </div>

                                    <p className="project-desc">
                                        {repo.description || 'No description provided.'}
                                    </p>

                                    <div className="project-footer">
                                        <time dateTime={repo.updated_at}>
                                            Updated {new Date(repo.updated_at).toLocaleDateString()}
                                        </time>
                                        <span className={`project-open ${theme === 'light' ? 'light' : ''}`}>
                      View on GitHub ↗
                    </span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
