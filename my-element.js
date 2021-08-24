var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let MyElement = class MyElement extends LitElement {
    constructor() {
        super(...arguments);
        // Define reactive properties--updating a reactive property causes
        // the component to update.
        this.greeting = 'Hello';
        this.planet = 'World';
    }
    // The render() method is called any time reactive properties change.
    // Return HTML in a string template literal tagged with the `html`
    // tag function to describe the component's internal DOM.
    // Expressions can set attribute values, proeprty values, event handlers,
    // and child nodes/text.
    render() {
        return html `
      <span @click=${this.togglePlanet}
        >${this.greeting}
        <span class="planet">${this.planet}</span>
      </span>
    `;
    }
    // Event handlers can update the state of @properties on the element
    // instance, causing it to re-render
    togglePlanet() {
        this.planet = this.planet === 'World' ? 'Mars' : 'World';
        console.log(this.planet);
        console.dir(this);
    }
};
// Styles are scoped to this element: they won't conflict with styles
// on the main page or in other components. Styling API can be exposed
// via CSS custom properties.
MyElement.styles = css `
    :host {
      display: inline-block;
      padding: 10px;
      background: lightgray;
    }
    .planet {
      color: var(--planet-color, blue);
    }
  `;
__decorate([
    property({
        hasChanged: (val, oldVal) => {
            console.log(val, oldVal);
            return true;
        },
    })
], MyElement.prototype, "greeting", void 0);
__decorate([
    property()
], MyElement.prototype, "planet", void 0);
MyElement = __decorate([
    customElement('my-element')
], MyElement);
export { MyElement };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktZWxlbWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm15LWVsZW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sS0FBSyxDQUFDO0FBQzVDLE9BQU8sRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFHNUQsSUFBYSxTQUFTLEdBQXRCLE1BQWEsU0FBVSxTQUFRLFVBQVU7SUFBekM7O1FBZUUsa0VBQWtFO1FBQ2xFLDJCQUEyQjtRQU8zQixhQUFRLEdBQUcsT0FBTyxDQUFDO1FBQ1AsV0FBTSxHQUFHLE9BQU8sQ0FBQztJQXdCL0IsQ0FBQztJQXRCQyxxRUFBcUU7SUFDckUsa0VBQWtFO0lBQ2xFLHlEQUF5RDtJQUN6RCx5RUFBeUU7SUFDekUsd0JBQXdCO0lBQ3hCLE1BQU07UUFDSixPQUFPLElBQUksQ0FBQTtxQkFDTSxJQUFJLENBQUMsWUFBWTtXQUMzQixJQUFJLENBQUMsUUFBUTsrQkFDTyxJQUFJLENBQUMsTUFBTTs7S0FFckMsQ0FBQztJQUNKLENBQUM7SUFFRCxvRUFBb0U7SUFDcEUsb0NBQW9DO0lBQ3BDLFlBQVk7UUFDVixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUV6RCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BCLENBQUM7Q0FDRixDQUFBO0FBL0NDLHFFQUFxRTtBQUNyRSxzRUFBc0U7QUFDdEUsNkJBQTZCO0FBQ3RCLGdCQUFNLEdBQUcsR0FBRyxDQUFBOzs7Ozs7Ozs7R0FTbEIsQ0FBQztBQVVGO0lBTkMsUUFBUSxDQUFDO1FBQ1IsVUFBVSxFQUFFLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3pCLE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQztLQUNGLENBQUM7MkNBQ2lCO0FBQ1A7SUFBWCxRQUFRLEVBQUU7eUNBQWtCO0FBeEJsQixTQUFTO0lBRHJCLGFBQWEsQ0FBQyxZQUFZLENBQUM7R0FDZixTQUFTLENBZ0RyQjtTQWhEWSxTQUFTIn0=