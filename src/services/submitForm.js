import { API_BASE_URL } from '@/constants';
import React from 'react';

export default async function submitForm(submitData) {
  try {
    const res = await fetch(API_BASE_URL, {
      redirect: 'follow',
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(submitData),
    });
    const result = await res.json();
    console.log('Form submitted successfully:', result);
  } catch (error) {
    console.error('Error submitting form:', error);
  }
}
