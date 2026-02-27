import { PaymentProcessor } from "./domain/paymentProcessor";

async function bootstrap() {
  const processor = new PaymentProcessor();

  console.log("--- Iniciando simulación de pago ---");

  await processor.processPayment(100);

  console.log("\n--- Resultado de la simulación ---");
  console.log(`¿Está cargando? ${processor.getIsLoading()}`);
  console.log(`¿Fue exitoso? ${processor.getIsSuccess()}`);
  console.log(`¿Hubo un error? ${processor.getIsError()}`);

  if (processor.getIsLoading() && processor.getIsError()) {
    console.log("\n--- Detalles del error ---");
    console.log("El pago ha fallado. Por favor, inténtalo de nuevo.");
  }
}

bootstrap();
