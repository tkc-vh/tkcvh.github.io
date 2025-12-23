# T35C1 — Digital Signatures & Verification Materials

This directory contains cryptographic signature materials related to the
official release of the literary work **T35C1** by **TRAN KHAC CUONG (TKC-VH)**.

The original EPUB and PDF files are **not stored here** and are **not publicly distributed**.
They are commercially released via official platforms.

---

## Purpose of this directory

This folder provides technical evidence allowing independent parties to:

- Verify the authenticity of the official release files
- Confirm authorship and integrity
- Detect any modification to the original content

All signatures are **detached signatures (.asc)** generated using OpenPGP/GPG.

---

## Contents

This directory may include:

- Detached GPG signatures for official EPUB and PDF releases  
  (`*.epub.asc`, `*.pdf.asc`)
- SHA-256 hash manifest of the official files  
  (`T35C1_hash_ban_quyen.txt`)
- Detached signature of the hash manifest  
  (`T35C1_hash_ban_quyen.txt.asc`)
- Detached signature of the certificate image  
  (`T35C1-SHA256-CERTIFICATE.jpg.asc`)
- Author’s public OpenPGP key  
  (`TKC-VH-public-key.asc`)
- Signing metadata  
  (`signing-info.txt`)

---

## Verification principle

Each official release file has a unique SHA-256 fingerprint.
Any modification — even a single character, punctuation mark, or whitespace —
will result in a different hash and invalidate the corresponding signature.

Detached signatures allow verification **without accessing the original files**.

---

## Public verification

Using the public key provided in this directory, any third party may verify:

- That the hashes were published by the author
- That the data existed at the time of signing
- That no alteration has occurred since signing

This directory serves as a public technical reference only.

---

© 2025 TRAN KHAC CUONG (TKC-VH)  
All rights reserved.

