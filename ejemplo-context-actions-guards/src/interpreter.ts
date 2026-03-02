export function transition(
  machine,
  currentState,
  currentContext,
  eventName,
  eventPayload = {},
) {
  const stateNode = machine.states[currentState];
  const transitionConfig = stateNode.on[eventName];

  if (!transitionConfig) {
    console.warn(
      `[Aviso]: Transición no permitida - ${eventName} desde ${currentState}`,
    );
    return { value: currentState, context: currentContext };
  }

  // Evaluar Guardia 💂
  if (transitionConfig.guard) {
    if (!transitionConfig.guard(currentContext)) {
      console.warn(`[Bloqueo]: El guardia impidió la transición ${eventName}`);
      return { value: currentState, context: currentContext };
    }
  }

  // Ejecutar Acción 🎬
  let nextContext = currentContext;
  if (transitionConfig.action) {
    nextContext = transitionConfig.action(currentContext, eventPayload);
  }

  return {
    value: transitionConfig.target,
    context: nextContext,
  };
}
