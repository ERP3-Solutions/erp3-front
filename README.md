# Erp3 Front

This project has been created with academic porpuse, in this case we'll apply an mix of architectures, starting with Hexagonal architecture (ports and adapters)

## Project layers

For this project, we have some layers witch will help us to comunicate, from UI to core and finally extern applications (API or storage)

  - **base**: A common repository or utilities, interfaces and the rest of things that you could define to supply main modules (including core module).
  - **environment**: Here we just define the main strings connection and environment variables to our application and infrastructure.
  - **core**: I'll dedicate a special section to explain all about this module, but keep in mind that here you'll define the use cases of all application, this module cannot depends of extern libraries or code, just provide to the rest of layers.
  - **infrastructure**: In paralel with the core module, here we define the technologies and adapters witch core will reference to extract extern information, such as web APIs, sockets, and specific tools to make this posible.
  - **data**: This is an intermediary between core and infrastructure, here we define (with dependency injection), the adapters to use in the core and the ports which UI layer will use to call the use cases.

## Architecture

### Ports and adapters

This is a very important concept that we have to understand to contribute in this project, ports and adapters... I'll give you a simple explanation: a port is a contract, an interface or an abstract class which define "what" will this function do; we dont worry about "how" it achieves (maybe we consume from an API with the HTTP protocol to obtain a list of products, bla bla bla)

- **port**: Such I explained, a port is a contract... In this case, we'l define to comunicate the core with extern information and define It's APIs or use-cases to consume from another layer (UI), therefore, there're two ways to define a port:

  * _**out-port**_: Imagine that we're in the core module and we wannna get a list of products, what we have to do is create an out port which will provide us of the information that we'll need... An out port is a contract which defines the data that we need from the outside, for example: repositories, consumers, clients, etc. Everything that we should call (or send data) with a specific purpose.

  * _**in-port**_: This is the same that out ports, but in this case we should put our shoes in the extern services, for example, the core will expose an use-case definition, and the UI layer will use (importing from data module) to execute it's funtionality.

- **adapter**: An adapter is the implementation of a port, and could be more than once, but pointing just to an unique contract... As well, we have two types of adapters, out and in, each one adapting their own port.

