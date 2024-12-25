
"use client"
import { ApolloProvider } from '@apollo/client'; 
import React from 'react';
import { client } from '@/apollo/client';
import MemoryLaneEditor from './memory-lane-editor';

export default function MemoryLaneEditorPage() {    
    
    return (
        <ApolloProvider client={client}> 
           <MemoryLaneEditor/>
        </ApolloProvider>              
    );
}