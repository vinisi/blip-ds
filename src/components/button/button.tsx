import { Component, Prop, Element, Event, EventEmitter, h, Host } from '@stencil/core';
import { LoadingSpinnerVariant } from '../loading-spinner/loading-spinner';
import { colorsVariants } from '../loading-spinner/loading-spinner';

export type ButtonSize = 'tall' | 'standard' | 'short';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'delete'
  | 'secondary--white'
  | 'ghost'
  | 'dashed'
  | 'facebook';

export type ButtonType = 'button' | 'submit' | 'reset';

export type IconType = 'icon' | 'logo' | 'emoji';

export type IconTheme = 'outline' | 'solid';

@Component({
  tag: 'bds-button',
  styleUrl: 'button.scss',
  shadow: true,
})
export class Button {
  @Element() el!: HTMLElement;

  /**
   * 	If true, the base button will be disabled.
   */
  @Prop() block?: boolean = false;

  /**
   * 	If true, the base button will be disabled.
   */
  @Prop() disabled?: boolean = false;

  /**
   * Size. Entered as one of the size. Can be one of:
   * 'tall', 'standard', 'short';
   */
  @Prop() size?: ButtonSize = 'standard';

  /**
   * Variant. Entered as one of the variant. Can be one of:
   * 'primary', 'secondary', 'ghost', 'dashed';
   */
  @Prop() variant?: ButtonVariant = 'primary';

  /**
   * used for add icon in input left. Uses the bds-icon component.
   */
  @Prop({ reflect: true }) icon?: string = null;

  /**
   * The arrow button
   */
  @Prop() arrow?: boolean = false;

  /**
   * The type of the button. Can be one of:
   * 'button', 'submit', 'reset';
   */
  @Prop() type: ButtonType = 'button';

  /**
   * The theme of the icon. Can be one of:
   * 'outline', 'solid';
   */
  @Prop({ reflect: true }) iconTheme: IconTheme = 'outline';

  /**
   * The type of the icon. Can be one of:
   * 'icon', 'logo', 'emoji';
   */
  @Prop({ reflect: true }) typeIcon: IconType = 'icon';

  /**
   * 	If true, shows the loading spinner
   */
  @Prop() bdsLoading?: boolean = false;

  /**
   * 	If not empty, Sets the color of the spinner, can be 'primary','secondary' or 'ghost'
   */
  @Prop() bdsLoadingVariant?: LoadingSpinnerVariant = 'primary';

  /**
   * 	If not empty, Sets the color of the spinner, can be 'primary','secondary' or 'ghost'
   */
  @Prop() bdsLoadingColor?: colorsVariants = 'main';

  /**
   * Data test is the prop to specifically test the component action object.
   */
  @Prop() dataTest?: string = null;

  /**
   * Event buttom onClick.
   */
  @Event() bdsClick: EventEmitter;

  getSizeClass(): string {
    return this.arrow || !!this.icon ? `button--size-${this.size}--icon` : `button--size-${this.size}`;
  }

  renderIcon(): HTMLElement {
    return (
      this.icon && (
        <div class={{ button__icon: true, hide: this.bdsLoading && true }}>
          <bds-icon
            class={{ icon_buttom: true }}
            name={this.icon}
            theme={this.iconTheme}
            type={this.typeIcon}
            color="inherit"
          ></bds-icon>
        </div>
      )
    );
  }

  renderText(): HTMLElement {
    return (
      <div
        class={{
          button__content: true,
          [`button__content__${this.variant}`]: true,
          [`button__content__${this.variant}--disabled`]: this.disabled,
          hide: this.bdsLoading && true,
        }}
      >
        <bds-typo class={{ typo_buttom: true }} variant="fs-14" lineHeight="simple" bold="bold">
          <slot></slot>
        </bds-typo>
      </div>
    );
  }

  renderArrow(): HTMLElement {
    return (
      this.arrow && (
        <div class={{ button__arrow: true, hide: this.bdsLoading && true }}>
          <bds-icon class={{ arrow_buttom: true }} name="arrow-right" color="inherit"></bds-icon>
        </div>
      )
    );
  }

  renderLoadingSpinner(): HTMLBdsLoadingSpinnerElement {
    const loadingColor = this.variant == 'primary' || this.variant == 'delete' ? 'light' : 'main';
    if (this.size === 'short') {
      return <bds-loading-spinner size="extra-small" color={loadingColor}></bds-loading-spinner>;
    } else {
      return <bds-loading-spinner size="small" color={loadingColor}></bds-loading-spinner>;
    }
  }

  private handleClick = (ev) => {
    if (!this.disabled) {
      this.bdsClick.emit(ev);

      if (ev.key === 'Enter') {
        this.bdsClick.emit(ev);
      }

      const form = this.el.closest('form');
      if (form) {
        ev.preventDefault();
        const fakeButton = document.createElement('button');
        fakeButton.type = this.type;
        fakeButton.style.display = 'none';
        form.appendChild(fakeButton);
        fakeButton.click();
        fakeButton.remove();
      }
    }
  };

  render(): HTMLElement {
    const sizeClass = this.getSizeClass();

    return (
      <Host class={{ host: true, block: this.block }}>
        <div tabindex="0" onKeyDown={(ev) => this.handleClick(ev)} class="focus"></div>
        <button
          onClick={(ev) => this.handleClick(ev)}
          disabled={this.disabled}
          aria-disabled={this.disabled ? 'true' : 'false'}
          aria-live="assertive"
          type={this.type}
          class={{
            button: true,
            'button--block': this.block,
            [`button__${this.variant}`]: true,
            [`button__${this.variant}--disabled`]: this.disabled,
            [sizeClass]: true,
            'button--size-icon--left': !!this.icon,
            'button--size-icon--right': this.arrow,
          }}
          part="button"
          data-test={this.dataTest}
        >
          {[this.bdsLoading && this.renderLoadingSpinner(), this.renderIcon(), this.renderText(), this.renderArrow()]}
        </button>
      </Host>
    );
  }
}
