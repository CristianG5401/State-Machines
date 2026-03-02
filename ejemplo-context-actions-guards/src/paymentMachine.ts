export const paymentMachine = {
  initial: 'idle',
  states: {
    idle: {
      on: {
        PAY: {
          target: 'loading',
          guard: (context) => context.amount > 0
        }
      }
    },
    loading: {
      on: {
        RESOLVE: { 
          target: 'success' 
        },
        REJECT: {
          target: 'error',
          action: (context, payload) => ({ ...context, errorMessage: payloa    d.error })
        }
      }
    },
    success: { on: {} },
    error: {
      on: {
        RETRY: { 
          target: 'idle',
          action: (context) => ({ ...context, errorMessage: null })
        }
      }
    }
  }
};
