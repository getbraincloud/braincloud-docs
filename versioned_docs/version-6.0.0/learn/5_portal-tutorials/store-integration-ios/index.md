---
title: "Store Integration - iOS"
date: "2026-02-02"
---

## Overview
This guide covers the integration of the iTunes iOS Store with brainCloud's marketplace, enabling secure server-side verification of iOS in-app purchases.
The brainCloud backend performs server-to-server verification directly with Apple's App Store, ensuring transaction authenticity and preventing client-side tampering. This architecture establishes the backend as the authoritative source for purchase validation and entitlement management.

## Verification Process

When `AppStore.VerifyPurchase()` is invoked, brainCloud executes the following operations:

1. Extracts StoreKit 2 JWS (JSON Web Signature)
2. Validates Apple's cryptographic signature
3. Authenticates transaction integrity
4. Confirms environment context (Sandbox vs. Production)
5. Implements replay attack prevention
6. Communicates with Apple App Store Server API
7. Returns validated purchase metadata

## Purpose & Architecture

`VerifyPurchase` enforces server-authoritative purchase validation, ensuring the backend—not the client—determines transaction legitimacy and entitlement provisioning.

## Key Benefits

* Authority: Server-side control over purchase validation
* Security: Protection against client-side manipulation and replay attacks
* Lifecycle Management: Centralized handling of consumables, non-consumables, and subscription state

The backend becomes the single source of truth for user entitlements, managing consumable grants, non-consumable persistence, and subscription expiration logic.

## Implementation

For detailed integration steps, refer to the documentation:
[`Store Integration - iOS`](https://help.getbraincloud.com/en/articles/13586894-store-integration-ios)

