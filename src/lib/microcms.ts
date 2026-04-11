import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

export type Blog = {
  id: string;
  title: string;
  body: string;
  thumbnail?: {
    url: string;
    width: number;
    height: number;
  };
  createdAt: string;
  updatedAt: string;
};