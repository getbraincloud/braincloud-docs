---
title: "Store Integration - Meta Horizon"
date: "2026-02-02"
---

## Overview

This guide covers the integration of Meta Horizon (Oculus) In-App Purchases with brainCloud's marketplace, enabling secure server-side verification of Meta Quest IAP transactions.
The brainCloud backend performs server-to-server verification directly with Meta's servers, ensuring transaction authenticity and preventing client-side tampering. This architecture establishes the backend as the authoritative source for purchase validation and entitlement management.

## ​Verification Process

When `AppStore.VerifyPurchase()` is invoked with the metaHorizon store purhcase identifier, brainCloud executes the following operations:

1. Extracts Meta transaction data from receipt JSON (userId, SKU, transactionId)
2. Validates receipt format and required fields
3. Authenticates transaction with Meta's IAP backend servers
4. Confirms transaction has not been previously consumed
5. Implements replay attack prevention
6. Verifies product SKU mapping in brainCloud marketplace
7. Returns validated purchase metadata and grants configured rewards

## Purpose & Architecture

VerifyPurchase enforces server-authoritative purchase validation, ensuring the backend—not the client—determines transaction legitimacy and entitlement provisioning.

## Key Benefits

* Authority: Server-side control over purchase validation
* Security: Protection against client-side manipulation and replay attacks
* Lifecycle Management: Centralized handling of consumables, non-consumables, and subscriptions
* Cross-Platform: Unified brainCloud marketplace works across Meta Quest, iOS, GooglePlay, and other platforms

The backend becomes the single source of truth for user entitlements, managing consumable grants, non-consumable persistence, and subscription expiration logic
​

## Implementation

For detailed implementation steps, including portal configuration, SDK setup, and code examples, refer to the [`Store integration – Meta Horizon`](https://help.getbraincloud.com/en/articles/13687770-store-integration-meta-horizon)
​