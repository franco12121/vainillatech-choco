# Proyecto IIAP 2026 - VainillaTech Chocó
## Módulo: Interfaz de Usuario y Conectividad del Gemelo Digital (Angular 21)
**Alumno Responsable:** Franco

Para la etapa inicial del proyecto, he diseñado la arquitectura del Frontend enfocada en el *Panel de Control de Producción (Gemelo Digital)*, garantizando que el operador visualice las cámaras climáticas sin latencia.

### 1. Arquitectura de Componentes de la UI (Monitorización)
He estructurado el módulo de producción en componentes desacoplados y reactivos utilizando Angular 21:
* `CámaraDashboardComponent`: El contenedor principal que renderiza el panel general.
* `GaugeClimaticoComponent`: Un componente reutilizable para los gráficos de aguja (Gauges) de temperatura y humedad absoluta.
* `IndicadorLedComponent`: Indicador visual reactivo (Verde = Estable, Amarillo = Transición de estado, Rojo = Alerta crítica por moho/humedad >90%).
* `ConsolaActuadoresComponent`: Panel interactivo que expone el control manual del `ReleCalentamiento` (inputs/outputs directos).

### 2. Estrategia de Conectividad en Tiempo Real (WebSockets y RxJS)
Para recibir las métricas de los sensores simulados en Python por Mauro en cuestión de milisegundos, implementé la capa de comunicación asíncrona:
* **Manejo de Streams:** Creación de un servicio especializado en Angular (`SocketProductionService`) que encapsula la conexión a `Socket.io`.
* **Consumo Reactivo:** Los datos entrantes se manejan mediante observables de `RxJS` (`Subject` / `BehaviorSubject`). El componente se suscribe directamente en el HTML usando el pipe `async` para evitar fugas de memoria (*memory leaks*).

### 3. Animaciones y Estilos Fluidos (CSS Transitions)
Para simular de manera fiel el Gemelo Digital en la planta del Chocó:
* Implementación de transiciones de color en CSS (`transition: background-color 0.5s ease`) para el indicador LED cuando Mauro cambie los estados lógicos de la máquina de estados (*Escaldado -> Sudado -> Secado*).
* Efecto visual de pulsación lumínica (animación `@keyframes`) en los termómetros digitales para representar de forma intuitiva el encendido del relé de calentamiento cuando la temperatura interna busque el rango crítico de 63°C - 65°C.