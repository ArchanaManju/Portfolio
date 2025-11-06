import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';

function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const headers = { 'Accept': 'application/vnd.github.v3+json' };
        if (process.env.GITHUB_TOKEN) {
          headers['Authorization'] = `token ${process.env.GITHUB_TOKEN}`;
        }

        const res = await fetch('https://api.github.com/users/ArchanaManju/repos', { headers });
        if (!res.ok) throw new Error(`GitHub API error: ${res.status} ${res.statusText}`);
        const data = await res.json();
        setRepos(Array.isArray(data) ? data : []);
        setError(null);
      } catch (err) {
        console.error(err);
        setError('Could not load projects.');
        setRepos([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section  
    id='projects' 
    style={{
      maxWidth: 1200,
      margin: '2rem auto',
      padding: '2rem 1rem',
      background: 'white',
      borderRadius: 12,
      boxShadow: '0 4px 16px rgba(0,0,0,0.08)'
    }}>
      <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 20, color: '#111' , display:'flex', justifyContent:'center'}}>Projects</h2>

      {loading && <p style={{ textAlign: 'center', color: '#666' }}>Loading projects...</p>}

      {error && <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>}

      {!loading && !error && (
        repos.length > 0 ? (
          <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
            {repos.map(repo => (
             <ProjectCard key={repo.id} repo={repo} />
            ))}
          </ul>
        ) : (
          <p style={{ textAlign: 'center', color: '#666' }}>No repositories found.</p>
        )
      )}
    </section>
  );
}

export default Projects;
