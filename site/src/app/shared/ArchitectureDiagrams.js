/* ─────────────────────────────────────────────
   Static architecture-walkthrough data.
   Keyed by project.id (integer) from the API.
   Only projects with diagrams need an entry —
   projects without one just skip the diagram.
   ───────────────────────────────────────────── */

const ARCHITECTURE_DIAGRAMS = {
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
};

export default ARCHITECTURE_DIAGRAMS;