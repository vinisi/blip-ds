/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  IconSize,
  IconTheme,
} from './components/icon/icon';
import {
  TabActivateEvent,
} from './components/my-tab/my-tab';

export namespace Components {
  interface BdsCardColor {
    /**
    * Specifies HEX color, use Figma docs in Blip DS.
    */
    'hex'?: string;
    /**
    * Specifies name color, use Figma docs in Blip DS.
    */
    'name': string;
    /**
    * Specifies variabel sass color, _variables.scss.
    */
    'variable': string;
  }
  interface BdsIcon {
    /**
    * Specifies the label to use for accessibility. Defaults to the icon name.
    */
    'ariaLabel'?: string;
    /**
    * Specifies the color to use.Specifies a color to use. The default is svg.
    */
    'color'?: string;
    /**
    * Specifies which icon to use from the built-in set of icons.
    */
    'name': string;
    /**
    * Icon size. Entered as one of the icon size design tokens. Can be one of:  "xxx-small", "xx-small", "x-small", "small", "medium", "large", "x-large", "xx-large", "xxx-large".
    */
    'size'?: IconSize;
    /**
    * Specifies the theme to use outline or solid icons. Defaults to outline.
    */
    'theme': IconTheme;
  }
  interface MyTab {
    'active': boolean;
    'name': string;
    'tab': string;
  }
  interface MyTabHeader {
    'activeTab': string;
  }
  interface SbpButton {
    'action': Function;
  }
}

declare global {


  interface HTMLBdsCardColorElement extends Components.BdsCardColor, HTMLStencilElement {}
  var HTMLBdsCardColorElement: {
    prototype: HTMLBdsCardColorElement;
    new (): HTMLBdsCardColorElement;
  };

  interface HTMLBdsIconElement extends Components.BdsIcon, HTMLStencilElement {}
  var HTMLBdsIconElement: {
    prototype: HTMLBdsIconElement;
    new (): HTMLBdsIconElement;
  };

  interface HTMLMyTabElement extends Components.MyTab, HTMLStencilElement {}
  var HTMLMyTabElement: {
    prototype: HTMLMyTabElement;
    new (): HTMLMyTabElement;
  };

  interface HTMLMyTabHeaderElement extends Components.MyTabHeader, HTMLStencilElement {}
  var HTMLMyTabHeaderElement: {
    prototype: HTMLMyTabHeaderElement;
    new (): HTMLMyTabHeaderElement;
  };

  interface HTMLSbpButtonElement extends Components.SbpButton, HTMLStencilElement {}
  var HTMLSbpButtonElement: {
    prototype: HTMLSbpButtonElement;
    new (): HTMLSbpButtonElement;
  };
  interface HTMLElementTagNameMap {
    'bds-card-color': HTMLBdsCardColorElement;
    'bds-icon': HTMLBdsIconElement;
    'my-tab': HTMLMyTabElement;
    'my-tab-header': HTMLMyTabHeaderElement;
    'sbp-button': HTMLSbpButtonElement;
  }
}

declare namespace LocalJSX {
  interface BdsCardColor {
    /**
    * Specifies HEX color, use Figma docs in Blip DS.
    */
    'hex'?: string;
    /**
    * Specifies name color, use Figma docs in Blip DS.
    */
    'name': string;
    /**
    * Specifies variabel sass color, _variables.scss.
    */
    'variable': string;
  }
  interface BdsIcon {
    /**
    * Specifies the label to use for accessibility. Defaults to the icon name.
    */
    'ariaLabel'?: string;
    /**
    * Specifies the color to use.Specifies a color to use. The default is svg.
    */
    'color'?: string;
    /**
    * Specifies which icon to use from the built-in set of icons.
    */
    'name': string;
    /**
    * Icon size. Entered as one of the icon size design tokens. Can be one of:  "xxx-small", "xx-small", "x-small", "small", "medium", "large", "x-large", "xx-large", "xxx-large".
    */
    'size'?: IconSize;
    /**
    * Specifies the theme to use outline or solid icons. Defaults to outline.
    */
    'theme'?: IconTheme;
  }
  interface MyTab {
    'active'?: boolean;
    'name'?: string;
    'onTabActivate'?: (event: CustomEvent<TabActivateEvent>) => void;
    'tab'?: string;
  }
  interface MyTabHeader {
    'activeTab'?: string;
  }
  interface SbpButton {
    'action'?: Function;
  }

  interface IntrinsicElements {
    'bds-card-color': BdsCardColor;
    'bds-icon': BdsIcon;
    'my-tab': MyTab;
    'my-tab-header': MyTabHeader;
    'sbp-button': SbpButton;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'bds-card-color': LocalJSX.BdsCardColor & JSXBase.HTMLAttributes<HTMLBdsCardColorElement>;
      'bds-icon': LocalJSX.BdsIcon & JSXBase.HTMLAttributes<HTMLBdsIconElement>;
      'my-tab': LocalJSX.MyTab & JSXBase.HTMLAttributes<HTMLMyTabElement>;
      'my-tab-header': LocalJSX.MyTabHeader & JSXBase.HTMLAttributes<HTMLMyTabHeaderElement>;
      'sbp-button': LocalJSX.SbpButton & JSXBase.HTMLAttributes<HTMLSbpButtonElement>;
    }
  }
}


