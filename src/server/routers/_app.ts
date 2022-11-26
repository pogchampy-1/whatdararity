import { z } from 'zod';
import { api } from '../../utils/constants';
import { procedure, router } from '../trpc';

export const appRouter = router({
  getCards: procedure.query(async () => {
    const cards = await api.getCards();
    
    return cards;
  })
});

export type AppRouter = typeof appRouter;