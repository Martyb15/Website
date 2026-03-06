const FLAGSHIP_PROJECTS = [
    {
        id: 'blockchain',
        title: 'Mini-Blockchain System',
        description:
            'A full end-to-end blockchain in Python with cryptographic transactions, dual consensus (PoW/PoS), P2P networking, a FastAPI REST API, and a React wallet/explorer UI.',
        techStack: ['Python', 'FastAPI', 'React', 'WebSockets', 'Docker', 'pytest'],
        bullets: [
            'Five transaction types (PAY, OPEN/CLAIM_REMIT, STAKE, UNSTAKE) with multi-layer validation pipeline',
            'Deterministic PoS validator selection, double-sign slashing, and full chain replay validation',
            'pytest suite covering remittance escrow lifecycle, staking, PoS mining, and slashing',
        ],
        links: {
            repo: 'https://github.com/Martyb15',   // TODO: exact repo URL
            demo: '',                                // TODO: demo video link
            tests: '',                               // TODO: screenshot of pytest output
        },
    },
    {
        id: 'malware-analysis',
        title: 'Malware Analysis Platform',
        description:
            'A containerized Flask API for file triage and VirusTotal threat-intel enrichment, with secure file handling, structured audit logging, and a browser-based demo UI.',
        techStack: ['Python', 'Flask', 'Docker', 'VirusTotal API', 'Gunicorn'],
        bullets: [
            'Hardened upload pipeline: filename sanitization, extension allowlist, size limits, zero-byte rejection',
            'VirusTotal integration with differentiated error handling (200/404/429/timeout) and verdict derivation',
            'Structured logging with per-upload latency metrics (hash_ms, total_ms) for operational KPIs',
        ],
        links: {
            repo: 'https://github.com/Martyb15',   // TODO: exact repo URL
            demo: '',                                // TODO: demo video or EICAR test screenshot
            tests: '',                               // TODO: test output screenshot
        },
    },
    {
        id: 'hackazon',
        title: 'Hackazon Security Assessment',
        description:
            'A two-semester capstone covering the full security lifecycle — risk assessment, STRIDE threat modeling, vulnerability identification, and hands-on remediation of a PHP e-commerce app.',
        techStack: ['Burp Suite', 'RIPS', 'sqlmap', 'OWASP', 'PHP', 'MySQL'],
        bullets: [
            'Identified 53 vulnerabilities via RIPS static analysis; remediated XSS with htmlspecialchars() and validated to zero findings',
            'Found and fixed 3 SQLi in the mobile API via manual fuzzing, sqlmap, and ORM parameterization',
            'Produced 10 formal deliverables: risk assessment, STRIDE model, ASVS test plan, remediation reports',
        ],
        links: {
            repo: '',                                // TODO: repo if public, or remove
            report: '',                              // TODO: link to write-up, PDF, or screenshots
        },
    },
    {
        id: 'portfolio',
        title: 'This Portfolio Site',
        description:
            'A full-stack React/Redux app backed by a Node/Express/PostgreSQL API with Prisma ORM, JWT authentication, and persistent data.',
        techStack: ['React', 'Redux Toolkit', 'Express', 'PostgreSQL', 'Prisma', 'JWT'],
        bullets: [
            'Express REST API with Prisma ORM, parameterized queries, and role-based JWT auth (bcrypt-hashed passwords)',
            'Redux Toolkit slices with async thunks for projects, skills, certifications, and comments (full CRUD)',
            'Migrated from json-server to PostgreSQL on Heroku — data now persists across dyno restarts',
        ],
        links: {
            repo: 'https://github.com/Martyb15/Website',
            live: 'https://martinbarrios.com',
        },
    },
];

export default FLAGSHIP_PROJECTS;
