# Erp3 Front

This project has been created for academic purposes. In this case, we will apply a mix of architectures, starting with **Hexagonal Architecture (Ports and Adapters)**.

## Project Layers

For this project, we have several layers that help us communicate from the UI to the core and finally to external applications (APIs or storage).

* **base**: A common repository of utilities, interfaces, and other shared elements that support the main modules (including the core module).
* **environment**: Here we define the main connection strings and environment variables for our application and infrastructure.
* **core**: I will dedicate a special section to explain this module, but keep in mind that here you will define all the use cases of the application. This module cannot depend on external libraries or code; it only provides functionality to the other layers.
* **infrastructure**: In parallel with the core module, here we define the technologies and adapters that the core will reference to retrieve external information, such as web APIs, sockets, and specific tools required to make this possible.
* **data**: This is an intermediary layer between core and infrastructure. Here we define (using dependency injection) the adapters used by the core and the ports that the UI layer will use to call the use cases.

## Architecture

### Ports and Adapters

This is a very important concept that we need to understand in order to contribute to this project: **Ports and Adapters**.

I will give you a simple explanation: a **port** is a contract — an interface or an abstract class — that defines **what** a function should do. We do not worry about **how** it is implemented (for example, consuming an API through the HTTP protocol to obtain a list of products).

* **port**: As explained before, a port is a contract. In this case, we define ports to allow the core to communicate with external information sources and to expose APIs or use cases that other layers (like the UI) can consume. Therefore, there are two ways to define a port:

  * **out-port**: Imagine we are inside the core module and we want to get a list of products. What we need to do is create an **out port** that will provide the information we need. An out port is a contract that defines the data required from the outside, for example: repositories, consumers, clients, etc. Everything that we call (or send data to) with a specific purpose.

  * **in-port**: This works in the opposite direction. In this case, we put ourselves in the position of external services. For example, the core will expose a use-case definition, and the UI layer will use it (importing it from the data module) to execute its functionality.

* **adapter**: An adapter is the implementation of a port. There can be more than one adapter for the same port, but all of them implement the same contract. Similarly, we have two types of adapters: **out adapters** and **in adapters**, each implementing their corresponding port.
