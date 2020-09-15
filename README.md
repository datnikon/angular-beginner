# How to run
1) Download this source
2) Type "npm install" to to install necessary packages (use CMD or terminal)
3) Type "npm start" (use CMD or terminal)

# Some concept

## Angular Module
- Modules are containers for a cohesive block of code dedicated to an application domain, a workflow, or a closely related set of capabilities. They can contain components, service providers, and other code files whose scope is defined by the containing NgModule.
- There are two types of module:
* Root module (App Module): It’s required, it must imports Browser Module
* Features module: It imports Common Module and other Modules
- Each module has a routing
- Use module -> lazy load -> optimize page speed
## Angular Service/Dependency Injection
- Service is a broad category encompassing any value, function, or feature that an app needs. A service is typically a class with a narrow, well-defined purpose. It should do something specific and do it well.
- Dependency injection (DI): DI is wired into the Angular framework and used everywhere to provide new components with the services or other things they need. Components consume services; that is, you can inject a service into a component, giving the component access to that service class.
## Angular Directive
- An Attribute directive changes the appearance or behavior of a DOM element
- There are three kinds of directives in Angular:
* Components—directives with a template.
+ Structural directives—change the DOM layout by adding and removing DOM elements.
<br>Ex: ngFor, ngIf, ngRepeat,...
- Attribute directives—change the appearance or behavior of an element, component, or another directive.
## Angular Component
- Two-way binding: gives your app a way to share data between a component class and its template.
<br> Note: Use [], NgModel to binding
- Component life-cycle hooks: A component instance has a lifecycle that starts when Angular instantiates the component class and renders the component view along with its child views. The lifecycle continues with change detection, as Angular checks to see when data-bound properties change, and updates both the view and the component instance as needed. The lifecycle ends when Angular destroys the component instance and removes its rendered template from the DOM. 
<br>Ex: ngOnInit, ngOnChanges, ngOnDestroy...
- Interpolation and template expressions: Interpolation allows you to incorporate calculated strings into the text between HTML element tags and within attribute assignments. Template expressions are what you use to calculate those strings.
<br>Ex: {{a}}, {{number +1}}
- Event binding: allows you to listen for certain events such as keystrokes, mouse movements, clicks, and touches.
<br>Ex: (click), (keyup), …
- Input and Output: allow Angular to share data between the parent context and child directives or components. 
## Observable vs Promise
| Observable  | Promise |
| ------------- | ------------- |
| Emit multiple values over a period of time.  | 	Emit a single value at a time.  |
| Are lazy  | Are not lazy |
| Cancellable   | 	Not cancellable   |
| Provide the map for forEach, filter, reduce, retry, and retryWhen operators.  | Don’t provide any operations.  |
## Angular FormGroup, FormControl, Validator, Async validator
- FormGroup: Tracks the value and validity state of a group of FormControl instances.
- FormControl: Tracks the value and validation status of an individual form control.
- AsyncValidator: An interface implemented by classes that perform asynchronous validation.
## Restful API
- A RESTful API is an application program interface (API) that uses HTTP requests to GET, PUT, POST and DELETE data.
- An API for a website is code that allows two software programs to communicate with each other. The API spells out the proper way for a developer to write a program requesting services from an operating system or other application.
- A RESTful API -- also referred to as a RESTful web service or REST API -- is based on representational state transfer (REST), an architectural style and approach to communications often used in web services development.
- Our project use HttpClient to make Restful API requests to backend server.
