import { Directive, HostListener, Renderer2, inject, input } from '@angular/core';

type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right';

@Directive({
  selector: '[appTooltip]',
  standalone: true,
})
export class TooltipDirective {
  // readonly #el = inject(ElementRef);
  readonly #renderer = inject(Renderer2);

  appTooltip = input.required<string>();
  placement = input<TooltipPlacement>('top');
  delay = input<number>(500);
  #tooltipElement: HTMLDivElement | null = null;

  @HostListener('mouseenter')
  onMouseEnter(): void {
    if (!this.#tooltipElement) this.#addTooltip();
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    if (this.#tooltipElement) this.#destroyTooltip();
  }

  #addTooltip(): void {
    this.#createTooltipElement();
    this.#setTooltipPosition();

    this.#renderer.addClass(this.#tooltipElement, 'tooltip--show');
    this.#renderer.appendChild(document.body, this.#tooltipElement);
  }

  #destroyTooltip(): void {
    console.log('destroy tooltip');

    this.#renderer.removeClass(this.#tooltipElement, 'tooltip--show');

    setTimeout(() => {
      this.#renderer.removeChild(document.body, this.#tooltipElement);
      this.#tooltipElement = null;
    }, this.delay());
  }

  #createTooltipElement(): void {
    console.log('create tooltip');

    this.#tooltipElement = this.#renderer.createElement('div');
    this.#renderer.appendChild(this.#tooltipElement, this.#renderer.createText(this.appTooltip()));

    this.#renderer.addClass(this.#tooltipElement, 'tooltip');
    this.#renderer.addClass(this.#tooltipElement, `tooltip--${this.placement()}`);

    this.#renderer.setStyle(this.#tooltipElement, 'transition', `${this.delay}ms`);
  }

  #setTooltipPosition(): void {
    this.#renderer.setStyle(this.#tooltipElement, 'top', `${10}px`);
    this.#renderer.setStyle(this.#tooltipElement, 'left', `${10}px`);
  }
}
