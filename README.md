# Crowdfunding Server

## Overview

This is the backend server for my CrowdFunding Application.

Website Link: [CrowdCube](https://ph-a10-crowdfunding-client.vercel.app/)

---

## Routes

### Campaign Routes

**Base path:** `/api/v1/campaigns`

| HTTP Method | Endpoint       | Description                        |
| ----------- | -------------- | ---------------------------------- |
| GET         | `/user/:email` | Fetch all campaigns by user email. |
| GET         | `/all`         | Retrieve all campaigns.            |
| GET         | `/active`      | Retrieve all active campaigns.     |
| POST        | `/`            | Add a new campaign.                |
| GET         | `/:id`         | Fetch a specific campaign by ID.   |
| PUT         | `/:id`         | Update a campaign by ID.           |
| DELETE      | `/:id`         | Delete a campaign by ID.           |

---

### Donation Routes

**Base path:** `/api/v1/donations`

| HTTP Method | Endpoint       | Description                                  |
| ----------- | -------------- | -------------------------------------------- |
| POST        | `/`            | Add a new donation.                          |
| GET         | `/user/:email` | Fetch all donations made by a specific user. |

---
