import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '02cdpxwn',
  dataset: 'production',
  apiVersion: '2021-03-25', 
  token:
    'skoiGHibIx82inCA4IgggQXPropqANWz9ZDND37m68EnR5m209Jb1OwvrHbMjyMaXFKIzCHLkkeZLvA5K9S4ZyKNoB3w1CUsMZzEL1Xh0MGJB6nwJCe7e2cY3yLc3Bt0GtW03JIGS1IHnjan9lp78suHv046yUDNfpf4cSJp9hkGmyyFMS4B', // or leave blank for unauthenticated usage
  useCdn: false, 
})