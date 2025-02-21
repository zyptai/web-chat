/**
 * Copyright (c) 2024 ZyptAI, tim.barrow@zyptai.com
 * This software is proprietary to ZyptAI
 * 
 * File: /src/config.js
 * Configuration settings for the ZyptAI Web Chat Application
 */

const config = {
    // Azure Configuration
    azure: {
        webAppName: 'zyptai-web-chat',
        resourceGroup: 'zyptai-ai-bot-rg',
        location: 'canadacentral',
        sku: 'B1'
    },

    // API Configuration
    api: {
        baseUrl: process.env.REACT_APP_API_BASE_URL || '/api',
        version: 'v1',
        timeout: 30000
    },

    // Authentication Configuration
    auth: {
        provider: 'azure-ad',
        clientId: process.env.REACT_APP_CLIENT_ID,
        tenantId: process.env.REACT_APP_TENANT_ID,
        redirectUri: process.env.REACT_APP_REDIRECT_URI
    }
};

export default config;