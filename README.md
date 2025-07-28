# Hashira
# 🔐 Shamir's Secret Sharing – Secret Recovery in JavaScript

This project solves a simplified version of [Shamir's Secret Sharing](https://en.wikipedia.org/wiki/Shamir%27s_Secret_Sharing) to recover the **secret (constant term `c`)** of a polynomial using **Lagrange Interpolation**.

The (x, y) points are given in a special JSON format, where `y` values are encoded in **different number bases**.

---

## 📘 Problem Summary

Given:
- An unknown polynomial of degree `m`
- At least `k = m + 1` encoded points
- You need to:
  1. Decode the points
  2. Use Lagrange interpolation to compute `f(0)` (which is the secret)

---

## 💻 Tech Stack

- JavaScript (Node.js)
