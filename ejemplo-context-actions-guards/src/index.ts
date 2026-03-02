// src/index.js
import { transition } from './interpreter.js';
import { paymentMachine } from './paymentMachine.js';

let currentState = paymentMachine.initial;
let currentContext = { amount: 100, errorMessage: null };

function dispatch(eventName, payload) {
  const result = transition(paymentMachine, currentState, currentContext, eventName, payload);
  currentState = result.value;
  currentContext = result.context;
  
  console.log(`Estado: [${currentState}] | Contexto:`, currentContext);
}

console.log("--- Iniciando Máquina ---");
console.log(`Estado inicial: [${currentState}] | Contexto:`, currentContext);

// Simulamos los eventos
dispatch('PAY');
dispatch('REJECT', { error: 'Tarjeta declinada' });
dispatch('RETRY');
