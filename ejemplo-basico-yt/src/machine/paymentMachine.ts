export const PaymentState = {
  IDLE: "IDLE",
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
} as const;
export type PaymentStateType = (typeof PaymentState)[keyof typeof PaymentState];

export const PaymentEvent = {
  PAY: "PAY",
  RESOLVE: "RESOLVE",
  REJECT: "REJECT",
} as const;
export type PaymentEventType = (typeof PaymentEvent)[keyof typeof PaymentEvent];

export type PaymentMachineType = Partial<{
  [SKey in PaymentStateType]: Partial<{
    [EKey in PaymentEventType]: PaymentStateType;
  }>;
}>;
export const paymentMachine: PaymentMachineType = {
  [PaymentState.IDLE]: {
    [PaymentEvent.PAY]: PaymentState.LOADING,
  },
  [PaymentState.LOADING]: {
    [PaymentEvent.RESOLVE]: PaymentState.SUCCESS,
    [PaymentEvent.REJECT]: PaymentState.ERROR,
  },
};

export const transition = (
  currentState: PaymentStateType,
  event: PaymentEventType,
): PaymentStateType => {
  const nextState = paymentMachine[currentState]?.[event];

  if (!nextState) {
    return currentState;
  }

  return nextState;
};
