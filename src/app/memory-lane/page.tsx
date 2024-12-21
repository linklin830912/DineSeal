"use client"
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'; 
import React from 'react';
import MemoryLaneContent from './memory-lane-content';
import { MemoryLaneStateProvider } from '@/context/memory-lane-state-context';
import { TouchScreenProvider } from '@/context/touch-screen-context';
import { ThemeSettingsProvider } from '@/context/theme-settings-context';
import { client } from '@/apollo/client';
export default function MemoryLanePage() { 
    
    return (
       <ApolloProvider client={client}> 
            < MemoryLaneContent />
        </ApolloProvider>         
    );
}