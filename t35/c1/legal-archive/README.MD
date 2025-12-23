# T35C1 — Legal Archive

This directory contains **cryptographically sealed legal archives**
related to the literary work **T35C1** by **TRAN KHAC CUONG (TKC-VH)**.

Each archive represents a complete, self-contained legal evidence package.

---

## Purpose of the Legal Archive

The Legal Archive is designed to:

- Preserve signing evidence in a tamper-evident form
- Provide an independent public timestamp
- Support legal, technical, or authorship verification if required

The archive does **not** contain the original EPUB or PDF files.

---

## Archive structure

Each legal archive typically consists of:

- A ZIP package containing:
  - README.txt (legal notice)
  - signing-info.txt (signing metadata)
  - Hash manifests
  - Detached digital signatures
  - Public OpenPGP key
- A SHA-256 hash of the ZIP file  
  (`*.zip.sha256`)
- A detached GPG signature of the ZIP file  
  (`*.zip.asc`)
- A detached GPG signature of the ZIP hash  
  (`*.zip.sha256.asc`)

Together, these files form a complete chain of trust.

---

## Integrity and immutability

Once an archive is created and signed:

- Any modification to its contents will change the ZIP hash
- Any change to the ZIP hash will invalidate its signature
- Any inconsistency can be independently detected

This design ensures long-term integrity and non-repudiation.

---

## Legal note

This directory serves as **technical and legal evidence only**.
It does not grant any license to copy, redistribute, or modify
the original work.

The original content is distributed exclusively through
authorized commercial platforms.

---

© 2025 TRAN KHAC CUONG (TKC-VH)  
All rights reserved.

