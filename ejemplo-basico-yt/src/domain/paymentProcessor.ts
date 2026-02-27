// Constants
import { PaymentState, PaymentEvent } from "../machine/paymentMachine";
// Transitions
import { transition } from "../machine/paymentMachine";
// Types
import type { PaymentStateType } from "../machine/paymentMachine";

export class PaymentProcessor {
  private state: PaymentStateType = PaymentState.IDLE;

  private apiCall() {
    return new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Payment failed")), 1000),
    );
  }

  async processPayment(amount: number) {
    this.state = transition(this.state, PaymentEvent.PAY);

    console.log(
      `Processing payment of $${amount}... Current state: ${this.state}`,
    );

    try {
      // Simulate payment processing
      await this.apiCall();

      // Simulate successful payment
      this.state = transition(this.state, PaymentEvent.RESOLVE);
      console.log(
        `Payment of $${amount} successful! Current state: ${this.state}`,
      );
    } catch (error) {
      // Simulate payment failure
      this.state = transition(this.state, PaymentEvent.REJECT);
      console.log(`Payment of $${amount} failed. Current state: ${this.state}`);
    }
  }

  getIsLoading() {
    return this.state === PaymentState.LOADING;
  }

  getIsSuccess() {
    return this.state === PaymentState.SUCCESS;
  }

  getIsError() {
    return this.state === PaymentState.ERROR;
  }
}
