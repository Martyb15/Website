/* ─────────────────────────────────────────────
   Static architecture-walkthrough data.
   Keyed by project.id (integer) from the API.
   Only projects with diagrams need an entry —
   projects without one just skip the diagram.
   ───────────────────────────────────────────── */

const ARCHITECTURE_DIAGRAMS = {
    /* ── Vigenere Cipher (id: 0) ── */
    0: {
        tagline: 'Polyalphabetic encryption in C++',
        steps: [
            { id: 'input',     num: '01', label: 'User Input',           detail: 'User provides plaintext (or ciphertext) and a keyword via the command-line interface.' },
            { id: 'mode',      num: '02', label: 'Mode Selection',       detail: 'CLI parses the flag to determine encrypt or decrypt mode. Each mode applies the substitution in opposite directions.' },
            { id: 'keystream', num: '03', label: 'Keystream Generation',  detail: 'The keyword is repeated to match the length of the input text, producing a keystream. Non-alphabetic characters are skipped.' },
            { id: 'shift',     num: '04', label: 'Character Shifting',   detail: 'Each letter is shifted by the corresponding keystream value — forward for encrypt, backward for decrypt. Case is preserved, non-alpha characters pass through unchanged.' },
            { id: 'output',    num: '05', label: 'Output Result',        detail: 'The transformed text is printed to stdout — ciphertext when encrypting, recovered plaintext when decrypting.' },
        ],
    },

    /* ── Malware Analysis Sandbox (id: 1) ── */
    1: {
        tagline: 'File triage & threat-intel enrichment in a hardened Flask API',
        steps: [
            { id: 'upload',   num: '01', label: 'File Upload',          detail: 'User submits a suspicious file via the browser UI or API endpoint.' },
            { id: 'validate', num: '02', label: 'Validation Gate',      detail: 'Filename sanitized → extension allowlist check → size limit enforced → zero-byte rejection.' },
            { id: 'hash',     num: '03', label: 'SHA-256 Hash',         detail: 'File contents hashed with SHA-256 for deduplication and VirusTotal lookup key. Latency tracked as hash_ms.' },
            { id: 'vt',       num: '04', label: 'VirusTotal API',       detail: 'Hash sent to VirusTotal. Handles 200 (found), 404 (unknown), 429 (rate-limited), and timeout — each with distinct error paths.' },
            { id: 'verdict',  num: '05', label: 'Verdict Engine',       detail: 'Aggregates detection ratio from VT response. Derives verdict: CLEAN, SUSPICIOUS, or MALICIOUS based on threshold logic.' },
            { id: 'response', num: '06', label: 'Response + Audit Log', detail: 'Structured JSON returned to client with verdict, detection stats, and timing. Simultaneously writes structured audit log with total_ms.' },
        ],
    },

    /* ── Windows Server Backup Automation (id: 2) ── */
    2: {
        tagline: 'Automated two-tier backup with PowerShell and Task Scheduler',
        steps: [
            { id: 'scheduler', num: '01', label: 'Task Scheduler Trigger', detail: 'Windows Task Scheduler fires on a 7-day cadence — full backups on Sunday and Wednesday, incremental syncs on all other days.' },
            { id: 'detect',    num: '02', label: 'Backup Type Detection',  detail: 'The script checks the day of the week and selects the correct strategy: full mirror (Copy-Item) or incremental sync (Robocopy).' },
            { id: 'full',      num: '03', label: 'Full Mirror',            detail: 'On full-backup days, Copy-Item performs a complete mirror of the source directory to the destination, ensuring a clean baseline.' },
            { id: 'incr',      num: '04', label: 'Incremental Sync',       detail: 'On other days, robocopy /MIR syncs only changed files and purges deleted source files from the destination — fast and bandwidth-efficient.' },
            { id: 'logging',   num: '05', label: 'Audit Logging',          detail: 'Stdout and stderr are redirected to rotating log files with timestamps, providing a full audit trail for every backup run.' },
            { id: 'rpo',       num: '06', label: 'RPO Guarantee',          detail: 'The combined cadence delivers ≤24-hour Recovery Point Objective on weekdays with zero manual intervention.' },
        ],
    },

    /* ── Hackazon Security Assessment (id: 3) ── */
    3: {
        tagline: 'Full security lifecycle assessment of a PHP e-commerce application',
        steps: [
            { id: 'risk',      num: '01', label: 'Risk Assessment',         detail: 'Identified assets, threat actors, and business impact. Produced a formal risk assessment document scoring likelihood and severity.' },
            { id: 'threat',    num: '02', label: 'STRIDE Threat Modeling',   detail: 'Applied the STRIDE framework (Spoofing, Tampering, Repudiation, Info Disclosure, DoS, Elevation) to map threats across the application.' },
            { id: 'static',    num: '03', label: 'Static Analysis (RIPS)',   detail: 'Ran RIPS static analyzer against the PHP codebase. Identified 53 vulnerabilities including XSS, SQLi, and insecure direct object references.' },
            { id: 'dynamic',   num: '04', label: 'Dynamic Testing',         detail: 'Used Burp Suite for active scanning and sqlmap for automated SQLi detection. Found 3 SQL injection flaws in the mobile API via manual fuzzing.' },
            { id: 'remediate', num: '05', label: 'Remediation',             detail: 'Fixed XSS with htmlspecialchars() output encoding. Resolved SQLi via ORM parameterization. Re-scanned with RIPS and validated to zero findings.' },
            { id: 'deliver',   num: '06', label: 'Deliverables',            detail: 'Produced 10 formal deliverables: risk assessment, STRIDE model, ASVS test plan, vulnerability reports, remediation evidence, and executive summary.' },
        ],
    },

    /* ── Python Blockchain Ledger (id: 4) ── */
    4: {
        tagline: 'End-to-end blockchain with dual consensus, P2P networking & React explorer',
        steps: [
            { id: 'wallet',    num: '01', label: 'Wallet / React UI',       detail: 'User creates a transaction in the React wallet UI — selects type (PAY, STAKE, REMIT, etc.) and enters parameters.' },
            { id: 'sign',      num: '02', label: 'ECDSA Signing',           detail: "Transaction is signed client-side with the user's ECDSA private key. Signature attached to the transaction payload." },
            { id: 'mempool',   num: '03', label: 'Mempool',                 detail: 'Signed transaction enters the mempool. Multi-layer validation: signature verification, balance check, nonce ordering, type-specific rules.' },
            { id: 'consensus', num: '04', label: 'Consensus (PoW / PoS)',   detail: 'PoW: miners race to find a valid nonce. PoS: deterministic validator selected by weighted stake. Double-sign triggers slashing.' },
            { id: 'block',     num: '05', label: 'Block Assembly',          detail: 'Valid transactions bundled into a block. Merkle root computed from transaction hashes. Block header includes prev_hash, timestamp, nonce, merkle_root.' },
            { id: 'chain',     num: '06', label: 'Chain + Validation',      detail: 'Block appended to the chain after full replay validation — hash linkage, Merkle integrity, and state consistency checks.' },
            { id: 'p2p',       num: '07', label: 'P2P Broadcast',           detail: 'New block broadcast to all peers via WebSocket P2P network. Peers independently validate and append.' },
        ],
    },

    /* ── Healthcare Operations Database (id: 6) ── */
    6: {
        tagline: '26-table relational database modeling a full healthcare operation',
        steps: [
            { id: 'requirements', num: '01', label: 'Requirements Gathering',  detail: 'Analyzed a full healthcare operation: patient intake, physician referrals, contracts, staffing schedules, supply inventory, and visit-level billing.' },
            { id: 'schema',       num: '02', label: 'Schema Design',           detail: 'Designed 26 normalized tables with proper primary keys, foreign key constraints, and indexes. Modeled relationships across patients, providers, facilities, and billing.' },
            { id: 'ddl',          num: '03', label: 'DDL Implementation',       detail: 'Created all tables, constraints, and indexes in SQL Server using T-SQL DDL statements. Enforced referential integrity across the entire schema.' },
            { id: 'seed',         num: '04', label: 'Data Population',          detail: 'Populated tables with realistic test data covering multiple facilities, providers, patient histories, and billing records.' },
            { id: 'queries',      num: '05', label: 'Advanced Queries',         detail: '36 queries using multi-table joins, CTEs, window functions, and aggregation at visit-level, provider-level, and facility-level grains.' },
            { id: 'validation',   num: '06', label: 'Benchmark Validation',     detail: 'All 36 query outputs validated against benchmark results to ensure correctness. Edge cases tested across different data grains.' },
        ],
    },
};

export default ARCHITECTURE_DIAGRAMS;