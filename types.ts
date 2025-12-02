import React from 'react';

export enum MessageRole {
  USER = 'user',
  MODEL = 'model'
}

export interface ChatMessage {
  role: MessageRole;
  text: string;
  isError?: boolean;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface AppointmentData {
  name: string;
  email: string;
  phone: string;
  date: string;
  reason: string;
}