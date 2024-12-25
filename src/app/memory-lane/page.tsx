"use client"
import { ApolloProvider } from '@apollo/client'; 
import React from 'react';
import MemoryLaneContent from './memory-lane-content';
import { client } from '@/apollo/client';
export default function MemoryLanePage() { 
    
    return (
       <ApolloProvider client={client}> 
            < MemoryLaneContent />
        </ApolloProvider>         
    );
}