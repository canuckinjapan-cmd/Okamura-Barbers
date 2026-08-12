/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  name: string;
  nameEn: string;
  price: number;
  duration: number;
  description: string;
  image: string;
  isPopular?: boolean;
}

export interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  badge?: string;
  image?: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  years: string;
  reviewText: string;
  avatar: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface BookingForm {
  name: string;
  phone: string;
  email: string;
  serviceId: string;
  date: string;
  time: string;
  useCoupon: boolean;
  notes?: string;
}
