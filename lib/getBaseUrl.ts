import { cache } from 'react'

export const getBaseUrl = cache(() =>
  process.env.DOMAIN
    ? `https://inciativa.netlify.app`
    : `http://localhost:${process.env.PORT ?? 8888}`
)