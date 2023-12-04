import {
  arrow_default,
  computeStyles_default,
  eventListeners_default,
  flip_default,
  hide_default,
  offset_default,
  popperGenerator,
  popperOffsets_default,
  preventOverflow_default
} from "./chunk-DAODKU56.js";
import {
  Button_default as Button_default2
} from "./chunk-4R37VVKX.js";
import {
  Container_default
} from "./chunk-H65WVVD7.js";
import {
  Anchor_default,
  CardHeaderContext_default,
  NavContext_default,
  NavItem_default,
  NavLink_default,
  Nav_default,
  Nav_default2,
  TabContext_default,
  useCallbackRef,
  useEventListener,
  useForceUpdate,
  useNavItem
} from "./chunk-556TWQOM.js";
import {
  Button_default
} from "./chunk-XQ2UDGZM.js";
import {
  AbstractModalHeader_default,
  Collapse_default,
  Fade_default,
  ModalContext_default,
  Modal_default,
  NavbarBrand_default,
  Navbar_default,
  NoopTransition_default,
  OffcanvasBody_default,
  OffcanvasHeader_default,
  OffcanvasTitle_default,
  Offcanvas_default,
  TransitionWrapper_default,
  addEventListener_default,
  canUseDOM_default,
  contains,
  createChainedFunction_default,
  divWithClassName_default,
  getSharedManager,
  isEscKey,
  listen_default,
  ownerDocument,
  removeEventListener_default,
  renderTransition,
  safeFindDOMNode,
  transitionEnd,
  transitionEndListener,
  triggerBrowserReflow,
  useWaitForDOMRef,
  useWillUnmount,
  useWindow
} from "./chunk-H7OM3TP6.js";
import {
  CloseButton_default
} from "./chunk-L2FL6AMG.js";
import {
  ENTERING,
  EXITING,
  hasClass
} from "./chunk-D2LSWNRQ.js";
import {
  require_prop_types
} from "./chunk-OPUDUMLA.js";
import {
  require_react_dom
} from "./chunk-HNHD5ZHX.js";
import {
  NavbarContext_default,
  SelectableContext_default,
  createWithBsPrefix,
  dataAttr,
  makeEventKey,
  qsa,
  require_browser,
  useCommittedRef_default,
  useEventCallback,
  useIsomorphicEffect_default,
  useMergedRefs_default,
  useMounted,
  usePrevious,
  useUncontrolled,
  useUncontrolledProp
} from "./chunk-SDO5UZEH.js";
import "./chunk-XUOTHCJW.js";
import {
  DEFAULT_BREAKPOINTS,
  DEFAULT_MIN_BREAKPOINT,
  ThemeProvider_default,
  useBootstrapBreakpoints,
  useBootstrapMinBreakpoint,
  useBootstrapPrefix,
  useIsRTL
} from "./chunk-EFGWDRWG.js";
import {
  require_classnames
} from "./chunk-BEROUCYK.js";
import {
  require_jsx_runtime
} from "./chunk-FEUG2YVT.js";
import {
  require_react
} from "./chunk-UOIPVTYB.js";
import {
  __commonJS,
  __toESM
} from "./chunk-AUZ3RYOM.js";

// node_modules/warning/warning.js
var require_warning = __commonJS({
  "node_modules/warning/warning.js"(exports, module) {
    "use strict";
    var __DEV__ = true;
    var warning8 = function() {
    };
    if (__DEV__) {
      printWarning = function printWarning2(format, args) {
        var len = arguments.length;
        args = new Array(len > 1 ? len - 1 : 0);
        for (var key = 1; key < len; key++) {
          args[key - 1] = arguments[key];
        }
        var argIndex = 0;
        var message = "Warning: " + format.replace(/%s/g, function() {
          return args[argIndex++];
        });
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
      warning8 = function(condition, format, args) {
        var len = arguments.length;
        args = new Array(len > 2 ? len - 2 : 0);
        for (var key = 2; key < len; key++) {
          args[key - 2] = arguments[key];
        }
        if (format === void 0) {
          throw new Error(
            "`warning(condition, format, ...args)` requires a warning message argument"
          );
        }
        if (!condition) {
          printWarning.apply(null, [format].concat(args));
        }
      };
    }
    var printWarning;
    module.exports = warning8;
  }
});

// node_modules/react-bootstrap/esm/Accordion.js
var import_classnames6 = __toESM(require_classnames());
var React8 = __toESM(require_react());
var import_react5 = __toESM(require_react());

// node_modules/react-bootstrap/esm/AccordionBody.js
var import_classnames2 = __toESM(require_classnames());
var React4 = __toESM(require_react());
var import_react2 = __toESM(require_react());

// node_modules/react-bootstrap/esm/AccordionCollapse.js
var import_classnames = __toESM(require_classnames());
var React2 = __toESM(require_react());
var import_react = __toESM(require_react());

// node_modules/react-bootstrap/esm/AccordionContext.js
var React = __toESM(require_react());
function isAccordionItemSelected(activeEventKey, eventKey) {
  return Array.isArray(activeEventKey) ? activeEventKey.includes(eventKey) : activeEventKey === eventKey;
}
var context = React.createContext({});
context.displayName = "AccordionContext";
var AccordionContext_default = context;

// node_modules/react-bootstrap/esm/AccordionCollapse.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var AccordionCollapse = React2.forwardRef(({
  as: Component2 = "div",
  bsPrefix,
  className,
  children,
  eventKey,
  ...props
}, ref) => {
  const {
    activeEventKey
  } = (0, import_react.useContext)(AccordionContext_default);
  bsPrefix = useBootstrapPrefix(bsPrefix, "accordion-collapse");
  return (0, import_jsx_runtime.jsx)(Collapse_default, {
    ref,
    in: isAccordionItemSelected(activeEventKey, eventKey),
    ...props,
    className: (0, import_classnames.default)(className, bsPrefix),
    children: (0, import_jsx_runtime.jsx)(Component2, {
      children: React2.Children.only(children)
    })
  });
});
AccordionCollapse.displayName = "AccordionCollapse";
var AccordionCollapse_default = AccordionCollapse;

// node_modules/react-bootstrap/esm/AccordionItemContext.js
var React3 = __toESM(require_react());
var context2 = React3.createContext({
  eventKey: ""
});
context2.displayName = "AccordionItemContext";
var AccordionItemContext_default = context2;

// node_modules/react-bootstrap/esm/AccordionBody.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var AccordionBody = React4.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component2 = "div",
  bsPrefix,
  className,
  onEnter,
  onEntering,
  onEntered,
  onExit,
  onExiting,
  onExited,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "accordion-body");
  const {
    eventKey
  } = (0, import_react2.useContext)(AccordionItemContext_default);
  return (0, import_jsx_runtime2.jsx)(AccordionCollapse_default, {
    eventKey,
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited,
    children: (0, import_jsx_runtime2.jsx)(Component2, {
      ref,
      ...props,
      className: (0, import_classnames2.default)(className, bsPrefix)
    })
  });
});
AccordionBody.displayName = "AccordionBody";
var AccordionBody_default = AccordionBody;

// node_modules/react-bootstrap/esm/AccordionButton.js
var React5 = __toESM(require_react());
var import_react3 = __toESM(require_react());
var import_classnames3 = __toESM(require_classnames());
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
function useAccordionButton(eventKey, onClick) {
  const {
    activeEventKey,
    onSelect,
    alwaysOpen
  } = (0, import_react3.useContext)(AccordionContext_default);
  return (e) => {
    let eventKeyPassed = eventKey === activeEventKey ? null : eventKey;
    if (alwaysOpen) {
      if (Array.isArray(activeEventKey)) {
        if (activeEventKey.includes(eventKey)) {
          eventKeyPassed = activeEventKey.filter((k) => k !== eventKey);
        } else {
          eventKeyPassed = [...activeEventKey, eventKey];
        }
      } else {
        eventKeyPassed = [eventKey];
      }
    }
    onSelect == null ? void 0 : onSelect(eventKeyPassed, e);
    onClick == null ? void 0 : onClick(e);
  };
}
var AccordionButton = React5.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component2 = "button",
  bsPrefix,
  className,
  onClick,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "accordion-button");
  const {
    eventKey
  } = (0, import_react3.useContext)(AccordionItemContext_default);
  const accordionOnClick = useAccordionButton(eventKey, onClick);
  const {
    activeEventKey
  } = (0, import_react3.useContext)(AccordionContext_default);
  if (Component2 === "button") {
    props.type = "button";
  }
  return (0, import_jsx_runtime3.jsx)(Component2, {
    ref,
    onClick: accordionOnClick,
    ...props,
    "aria-expanded": Array.isArray(activeEventKey) ? activeEventKey.includes(eventKey) : eventKey === activeEventKey,
    className: (0, import_classnames3.default)(className, bsPrefix, !isAccordionItemSelected(activeEventKey, eventKey) && "collapsed")
  });
});
AccordionButton.displayName = "AccordionButton";
var AccordionButton_default = AccordionButton;

// node_modules/react-bootstrap/esm/AccordionHeader.js
var import_classnames4 = __toESM(require_classnames());
var React6 = __toESM(require_react());
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
var AccordionHeader = React6.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component2 = "h2",
  bsPrefix,
  className,
  children,
  onClick,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "accordion-header");
  return (0, import_jsx_runtime4.jsx)(Component2, {
    ref,
    ...props,
    className: (0, import_classnames4.default)(className, bsPrefix),
    children: (0, import_jsx_runtime4.jsx)(AccordionButton_default, {
      onClick,
      children
    })
  });
});
AccordionHeader.displayName = "AccordionHeader";
var AccordionHeader_default = AccordionHeader;

// node_modules/react-bootstrap/esm/AccordionItem.js
var import_classnames5 = __toESM(require_classnames());
var React7 = __toESM(require_react());
var import_react4 = __toESM(require_react());
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
var AccordionItem = React7.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component2 = "div",
  bsPrefix,
  className,
  eventKey,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "accordion-item");
  const contextValue = (0, import_react4.useMemo)(() => ({
    eventKey
  }), [eventKey]);
  return (0, import_jsx_runtime5.jsx)(AccordionItemContext_default.Provider, {
    value: contextValue,
    children: (0, import_jsx_runtime5.jsx)(Component2, {
      ref,
      ...props,
      className: (0, import_classnames5.default)(className, bsPrefix)
    })
  });
});
AccordionItem.displayName = "AccordionItem";
var AccordionItem_default = AccordionItem;

// node_modules/react-bootstrap/esm/Accordion.js
var import_jsx_runtime6 = __toESM(require_jsx_runtime());
var Accordion = React8.forwardRef((props, ref) => {
  const {
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component2 = "div",
    activeKey,
    bsPrefix,
    className,
    onSelect,
    flush,
    alwaysOpen,
    ...controlledProps
  } = useUncontrolled(props, {
    activeKey: "onSelect"
  });
  const prefix = useBootstrapPrefix(bsPrefix, "accordion");
  const contextValue = (0, import_react5.useMemo)(() => ({
    activeEventKey: activeKey,
    onSelect,
    alwaysOpen
  }), [activeKey, onSelect, alwaysOpen]);
  return (0, import_jsx_runtime6.jsx)(AccordionContext_default.Provider, {
    value: contextValue,
    children: (0, import_jsx_runtime6.jsx)(Component2, {
      ref,
      ...controlledProps,
      className: (0, import_classnames6.default)(className, prefix, flush && `${prefix}-flush`)
    })
  });
});
Accordion.displayName = "Accordion";
var Accordion_default = Object.assign(Accordion, {
  Button: AccordionButton_default,
  Collapse: AccordionCollapse_default,
  Item: AccordionItem_default,
  Header: AccordionHeader_default,
  Body: AccordionBody_default
});

// node_modules/react-bootstrap/esm/Alert.js
var import_classnames7 = __toESM(require_classnames());
var React9 = __toESM(require_react());
var import_jsx_runtime7 = __toESM(require_jsx_runtime());
var import_jsx_runtime8 = __toESM(require_jsx_runtime());
var DivStyledAsH4 = divWithClassName_default("h4");
DivStyledAsH4.displayName = "DivStyledAsH4";
var AlertHeading = createWithBsPrefix("alert-heading", {
  Component: DivStyledAsH4
});
var AlertLink = createWithBsPrefix("alert-link", {
  Component: Anchor_default
});
var Alert = React9.forwardRef((uncontrolledProps, ref) => {
  const {
    bsPrefix,
    show = true,
    closeLabel = "Close alert",
    closeVariant,
    className,
    children,
    variant = "primary",
    onClose,
    dismissible,
    transition = Fade_default,
    ...props
  } = useUncontrolled(uncontrolledProps, {
    show: "onClose"
  });
  const prefix = useBootstrapPrefix(bsPrefix, "alert");
  const handleClose = useEventCallback((e) => {
    if (onClose) {
      onClose(false, e);
    }
  });
  const Transition = transition === true ? Fade_default : transition;
  const alert = (0, import_jsx_runtime8.jsxs)("div", {
    role: "alert",
    ...!Transition ? props : void 0,
    ref,
    className: (0, import_classnames7.default)(className, prefix, variant && `${prefix}-${variant}`, dismissible && `${prefix}-dismissible`),
    children: [dismissible && (0, import_jsx_runtime7.jsx)(CloseButton_default, {
      onClick: handleClose,
      "aria-label": closeLabel,
      variant: closeVariant
    }), children]
  });
  if (!Transition)
    return show ? alert : null;
  return (0, import_jsx_runtime7.jsx)(Transition, {
    unmountOnExit: true,
    ...props,
    ref: void 0,
    in: show,
    children: alert
  });
});
Alert.displayName = "Alert";
var Alert_default = Object.assign(Alert, {
  Link: AlertLink,
  Heading: AlertHeading
});

// node_modules/react-bootstrap/esm/Anchor.js
var Anchor_default2 = Anchor_default;

// node_modules/react-bootstrap/esm/Badge.js
var import_classnames8 = __toESM(require_classnames());
var React10 = __toESM(require_react());
var import_jsx_runtime9 = __toESM(require_jsx_runtime());
var Badge = React10.forwardRef(({
  bsPrefix,
  bg = "primary",
  pill = false,
  text,
  className,
  as: Component2 = "span",
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, "badge");
  return (0, import_jsx_runtime9.jsx)(Component2, {
    ref,
    ...props,
    className: (0, import_classnames8.default)(className, prefix, pill && `rounded-pill`, text && `text-${text}`, bg && `bg-${bg}`)
  });
});
Badge.displayName = "Badge";
var Badge_default = Badge;

// node_modules/react-bootstrap/esm/Breadcrumb.js
var import_classnames10 = __toESM(require_classnames());
var React12 = __toESM(require_react());

// node_modules/react-bootstrap/esm/BreadcrumbItem.js
var import_classnames9 = __toESM(require_classnames());
var React11 = __toESM(require_react());
var import_jsx_runtime10 = __toESM(require_jsx_runtime());
var BreadcrumbItem = React11.forwardRef(({
  bsPrefix,
  active = false,
  children,
  className,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component2 = "li",
  linkAs: LinkComponent = Anchor_default,
  linkProps = {},
  href,
  title,
  target,
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, "breadcrumb-item");
  return (0, import_jsx_runtime10.jsx)(Component2, {
    ref,
    ...props,
    className: (0, import_classnames9.default)(prefix, className, {
      active
    }),
    "aria-current": active ? "page" : void 0,
    children: active ? children : (0, import_jsx_runtime10.jsx)(LinkComponent, {
      ...linkProps,
      href,
      title,
      target,
      children
    })
  });
});
BreadcrumbItem.displayName = "BreadcrumbItem";
var BreadcrumbItem_default = BreadcrumbItem;

// node_modules/react-bootstrap/esm/Breadcrumb.js
var import_jsx_runtime11 = __toESM(require_jsx_runtime());
var Breadcrumb = React12.forwardRef(({
  bsPrefix,
  className,
  listProps = {},
  children,
  label = "breadcrumb",
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component2 = "nav",
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, "breadcrumb");
  return (0, import_jsx_runtime11.jsx)(Component2, {
    "aria-label": label,
    className,
    ref,
    ...props,
    children: (0, import_jsx_runtime11.jsx)("ol", {
      ...listProps,
      className: (0, import_classnames10.default)(prefix, listProps == null ? void 0 : listProps.className),
      children
    })
  });
});
Breadcrumb.displayName = "Breadcrumb";
var Breadcrumb_default = Object.assign(Breadcrumb, {
  Item: BreadcrumbItem_default
});

// node_modules/react-bootstrap/esm/ButtonGroup.js
var import_classnames11 = __toESM(require_classnames());
var React13 = __toESM(require_react());
var import_jsx_runtime12 = __toESM(require_jsx_runtime());
var ButtonGroup = React13.forwardRef(({
  bsPrefix,
  size: size2,
  vertical = false,
  className,
  role = "group",
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component2 = "div",
  ...rest
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, "btn-group");
  let baseClass = prefix;
  if (vertical)
    baseClass = `${prefix}-vertical`;
  return (0, import_jsx_runtime12.jsx)(Component2, {
    ...rest,
    ref,
    role,
    className: (0, import_classnames11.default)(className, baseClass, size2 && `${prefix}-${size2}`)
  });
});
ButtonGroup.displayName = "ButtonGroup";
var ButtonGroup_default = ButtonGroup;

// node_modules/react-bootstrap/esm/ButtonToolbar.js
var import_classnames12 = __toESM(require_classnames());
var React14 = __toESM(require_react());
var import_jsx_runtime13 = __toESM(require_jsx_runtime());
var ButtonToolbar = React14.forwardRef(({
  bsPrefix,
  className,
  role = "toolbar",
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, "btn-toolbar");
  return (0, import_jsx_runtime13.jsx)("div", {
    ...props,
    ref,
    className: (0, import_classnames12.default)(className, prefix),
    role
  });
});
ButtonToolbar.displayName = "ButtonToolbar";
var ButtonToolbar_default = ButtonToolbar;

// node_modules/react-bootstrap/esm/Card.js
var import_classnames15 = __toESM(require_classnames());
var React17 = __toESM(require_react());

// node_modules/react-bootstrap/esm/CardImg.js
var import_classnames13 = __toESM(require_classnames());
var React15 = __toESM(require_react());
var import_jsx_runtime14 = __toESM(require_jsx_runtime());
var CardImg = React15.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  ({
    bsPrefix,
    className,
    variant,
    as: Component2 = "img",
    ...props
  }, ref) => {
    const prefix = useBootstrapPrefix(bsPrefix, "card-img");
    return (0, import_jsx_runtime14.jsx)(Component2, {
      ref,
      className: (0, import_classnames13.default)(variant ? `${prefix}-${variant}` : prefix, className),
      ...props
    });
  }
);
CardImg.displayName = "CardImg";
var CardImg_default = CardImg;

// node_modules/react-bootstrap/esm/CardHeader.js
var import_classnames14 = __toESM(require_classnames());
var React16 = __toESM(require_react());
var import_react6 = __toESM(require_react());
var import_jsx_runtime15 = __toESM(require_jsx_runtime());
var CardHeader = React16.forwardRef(({
  bsPrefix,
  className,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component2 = "div",
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, "card-header");
  const contextValue = (0, import_react6.useMemo)(() => ({
    cardHeaderBsPrefix: prefix
  }), [prefix]);
  return (0, import_jsx_runtime15.jsx)(CardHeaderContext_default.Provider, {
    value: contextValue,
    children: (0, import_jsx_runtime15.jsx)(Component2, {
      ref,
      ...props,
      className: (0, import_classnames14.default)(className, prefix)
    })
  });
});
CardHeader.displayName = "CardHeader";
var CardHeader_default = CardHeader;

// node_modules/react-bootstrap/esm/Card.js
var import_jsx_runtime16 = __toESM(require_jsx_runtime());
var DivStyledAsH5 = divWithClassName_default("h5");
var DivStyledAsH6 = divWithClassName_default("h6");
var CardBody = createWithBsPrefix("card-body");
var CardTitle = createWithBsPrefix("card-title", {
  Component: DivStyledAsH5
});
var CardSubtitle = createWithBsPrefix("card-subtitle", {
  Component: DivStyledAsH6
});
var CardLink = createWithBsPrefix("card-link", {
  Component: "a"
});
var CardText = createWithBsPrefix("card-text", {
  Component: "p"
});
var CardFooter = createWithBsPrefix("card-footer");
var CardImgOverlay = createWithBsPrefix("card-img-overlay");
var Card = React17.forwardRef(({
  bsPrefix,
  className,
  bg,
  text,
  border,
  body = false,
  children,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component2 = "div",
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, "card");
  return (0, import_jsx_runtime16.jsx)(Component2, {
    ref,
    ...props,
    className: (0, import_classnames15.default)(className, prefix, bg && `bg-${bg}`, text && `text-${text}`, border && `border-${border}`),
    children: body ? (0, import_jsx_runtime16.jsx)(CardBody, {
      children
    }) : children
  });
});
Card.displayName = "Card";
var Card_default = Object.assign(Card, {
  Img: CardImg_default,
  Title: CardTitle,
  Subtitle: CardSubtitle,
  Body: CardBody,
  Link: CardLink,
  Text: CardText,
  Header: CardHeader_default,
  Footer: CardFooter,
  ImgOverlay: CardImgOverlay
});

// node_modules/react-bootstrap/esm/CardGroup.js
var CardGroup_default = createWithBsPrefix("card-group");

// node_modules/@restart/hooks/esm/useUpdateEffect.js
var import_react7 = __toESM(require_react());
function useUpdateEffect(fn, deps) {
  const isFirst = (0, import_react7.useRef)(true);
  (0, import_react7.useEffect)(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    return fn();
  }, deps);
}
var useUpdateEffect_default = useUpdateEffect;

// node_modules/@restart/hooks/esm/useTimeout.js
var import_react8 = __toESM(require_react());
var MAX_DELAY_MS = 2 ** 31 - 1;
function setChainedTimeout(handleRef, fn, timeoutAtMs) {
  const delayMs = timeoutAtMs - Date.now();
  handleRef.current = delayMs <= MAX_DELAY_MS ? setTimeout(fn, delayMs) : setTimeout(() => setChainedTimeout(handleRef, fn, timeoutAtMs), MAX_DELAY_MS);
}
function useTimeout() {
  const isMounted = useMounted();
  const handleRef = (0, import_react8.useRef)();
  useWillUnmount(() => clearTimeout(handleRef.current));
  return (0, import_react8.useMemo)(() => {
    const clear = () => clearTimeout(handleRef.current);
    function set(fn, delayMs = 0) {
      if (!isMounted())
        return;
      clear();
      if (delayMs <= MAX_DELAY_MS) {
        handleRef.current = setTimeout(fn, delayMs);
      } else {
        setChainedTimeout(handleRef, fn, Date.now() + delayMs);
      }
    }
    return {
      set,
      clear
    };
  }, []);
}

// node_modules/react-bootstrap/esm/Carousel.js
var import_classnames17 = __toESM(require_classnames());
var React20 = __toESM(require_react());
var import_react9 = __toESM(require_react());

// node_modules/react-bootstrap/esm/CarouselCaption.js
var CarouselCaption_default = createWithBsPrefix("carousel-caption");

// node_modules/react-bootstrap/esm/CarouselItem.js
var import_classnames16 = __toESM(require_classnames());
var React18 = __toESM(require_react());
var import_jsx_runtime17 = __toESM(require_jsx_runtime());
var CarouselItem = React18.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component2 = "div",
  bsPrefix,
  className,
  ...props
}, ref) => {
  const finalClassName = (0, import_classnames16.default)(className, useBootstrapPrefix(bsPrefix, "carousel-item"));
  return (0, import_jsx_runtime17.jsx)(Component2, {
    ref,
    ...props,
    className: finalClassName
  });
});
CarouselItem.displayName = "CarouselItem";
var CarouselItem_default = CarouselItem;

// node_modules/react-bootstrap/esm/ElementChildren.js
var React19 = __toESM(require_react());
function map(children, func) {
  let index = 0;
  return React19.Children.map(children, (child) => React19.isValidElement(child) ? func(child, index++) : child);
}
function forEach(children, func) {
  let index = 0;
  React19.Children.forEach(children, (child) => {
    if (React19.isValidElement(child))
      func(child, index++);
  });
}
function hasChildOfType(children, type) {
  return React19.Children.toArray(children).some((child) => React19.isValidElement(child) && child.type === type);
}

// node_modules/react-bootstrap/esm/Carousel.js
var import_jsx_runtime18 = __toESM(require_jsx_runtime());
var import_jsx_runtime19 = __toESM(require_jsx_runtime());
var import_jsx_runtime20 = __toESM(require_jsx_runtime());
var SWIPE_THRESHOLD = 40;
function isVisible(element) {
  if (!element || !element.style || !element.parentNode || !element.parentNode.style) {
    return false;
  }
  const elementStyle = getComputedStyle(element);
  return elementStyle.display !== "none" && elementStyle.visibility !== "hidden" && getComputedStyle(element.parentNode).display !== "none";
}
var Carousel = React20.forwardRef(({
  defaultActiveIndex = 0,
  ...uncontrolledProps
}, ref) => {
  const {
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component2 = "div",
    bsPrefix,
    slide = true,
    fade = false,
    controls = true,
    indicators = true,
    indicatorLabels = [],
    activeIndex,
    onSelect,
    onSlide,
    onSlid,
    interval = 5e3,
    keyboard = true,
    onKeyDown,
    pause = "hover",
    onMouseOver,
    onMouseOut,
    wrap = true,
    touch = true,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    prevIcon = (0, import_jsx_runtime18.jsx)("span", {
      "aria-hidden": "true",
      className: "carousel-control-prev-icon"
    }),
    prevLabel = "Previous",
    nextIcon = (0, import_jsx_runtime18.jsx)("span", {
      "aria-hidden": "true",
      className: "carousel-control-next-icon"
    }),
    nextLabel = "Next",
    variant,
    className,
    children,
    ...props
  } = useUncontrolled({
    defaultActiveIndex,
    ...uncontrolledProps
  }, {
    activeIndex: "onSelect"
  });
  const prefix = useBootstrapPrefix(bsPrefix, "carousel");
  const isRTL = useIsRTL();
  const nextDirectionRef = (0, import_react9.useRef)(null);
  const [direction, setDirection] = (0, import_react9.useState)("next");
  const [paused, setPaused] = (0, import_react9.useState)(false);
  const [isSliding, setIsSliding] = (0, import_react9.useState)(false);
  const [renderedActiveIndex, setRenderedActiveIndex] = (0, import_react9.useState)(activeIndex || 0);
  (0, import_react9.useEffect)(() => {
    if (!isSliding && activeIndex !== renderedActiveIndex) {
      if (nextDirectionRef.current) {
        setDirection(nextDirectionRef.current);
      } else {
        setDirection((activeIndex || 0) > renderedActiveIndex ? "next" : "prev");
      }
      if (slide) {
        setIsSliding(true);
      }
      setRenderedActiveIndex(activeIndex || 0);
    }
  }, [activeIndex, isSliding, renderedActiveIndex, slide]);
  (0, import_react9.useEffect)(() => {
    if (nextDirectionRef.current) {
      nextDirectionRef.current = null;
    }
  });
  let numChildren = 0;
  let activeChildInterval;
  forEach(children, (child, index) => {
    ++numChildren;
    if (index === activeIndex) {
      activeChildInterval = child.props.interval;
    }
  });
  const activeChildIntervalRef = useCommittedRef_default(activeChildInterval);
  const prev = (0, import_react9.useCallback)((event) => {
    if (isSliding) {
      return;
    }
    let nextActiveIndex = renderedActiveIndex - 1;
    if (nextActiveIndex < 0) {
      if (!wrap) {
        return;
      }
      nextActiveIndex = numChildren - 1;
    }
    nextDirectionRef.current = "prev";
    onSelect == null ? void 0 : onSelect(nextActiveIndex, event);
  }, [isSliding, renderedActiveIndex, onSelect, wrap, numChildren]);
  const next = useEventCallback((event) => {
    if (isSliding) {
      return;
    }
    let nextActiveIndex = renderedActiveIndex + 1;
    if (nextActiveIndex >= numChildren) {
      if (!wrap) {
        return;
      }
      nextActiveIndex = 0;
    }
    nextDirectionRef.current = "next";
    onSelect == null ? void 0 : onSelect(nextActiveIndex, event);
  });
  const elementRef = (0, import_react9.useRef)();
  (0, import_react9.useImperativeHandle)(ref, () => ({
    element: elementRef.current,
    prev,
    next
  }));
  const nextWhenVisible = useEventCallback(() => {
    if (!document.hidden && isVisible(elementRef.current)) {
      if (isRTL) {
        prev();
      } else {
        next();
      }
    }
  });
  const slideDirection = direction === "next" ? "start" : "end";
  useUpdateEffect_default(() => {
    if (slide) {
      return;
    }
    onSlide == null ? void 0 : onSlide(renderedActiveIndex, slideDirection);
    onSlid == null ? void 0 : onSlid(renderedActiveIndex, slideDirection);
  }, [renderedActiveIndex]);
  const orderClassName = `${prefix}-item-${direction}`;
  const directionalClassName = `${prefix}-item-${slideDirection}`;
  const handleEnter = (0, import_react9.useCallback)((node) => {
    triggerBrowserReflow(node);
    onSlide == null ? void 0 : onSlide(renderedActiveIndex, slideDirection);
  }, [onSlide, renderedActiveIndex, slideDirection]);
  const handleEntered = (0, import_react9.useCallback)(() => {
    setIsSliding(false);
    onSlid == null ? void 0 : onSlid(renderedActiveIndex, slideDirection);
  }, [onSlid, renderedActiveIndex, slideDirection]);
  const handleKeyDown = (0, import_react9.useCallback)((event) => {
    if (keyboard && !/input|textarea/i.test(event.target.tagName)) {
      switch (event.key) {
        case "ArrowLeft":
          event.preventDefault();
          if (isRTL) {
            next(event);
          } else {
            prev(event);
          }
          return;
        case "ArrowRight":
          event.preventDefault();
          if (isRTL) {
            prev(event);
          } else {
            next(event);
          }
          return;
        default:
      }
    }
    onKeyDown == null ? void 0 : onKeyDown(event);
  }, [keyboard, onKeyDown, prev, next, isRTL]);
  const handleMouseOver = (0, import_react9.useCallback)((event) => {
    if (pause === "hover") {
      setPaused(true);
    }
    onMouseOver == null ? void 0 : onMouseOver(event);
  }, [pause, onMouseOver]);
  const handleMouseOut = (0, import_react9.useCallback)((event) => {
    setPaused(false);
    onMouseOut == null ? void 0 : onMouseOut(event);
  }, [onMouseOut]);
  const touchStartXRef = (0, import_react9.useRef)(0);
  const touchDeltaXRef = (0, import_react9.useRef)(0);
  const touchUnpauseTimeout = useTimeout();
  const handleTouchStart = (0, import_react9.useCallback)((event) => {
    touchStartXRef.current = event.touches[0].clientX;
    touchDeltaXRef.current = 0;
    if (pause === "hover") {
      setPaused(true);
    }
    onTouchStart == null ? void 0 : onTouchStart(event);
  }, [pause, onTouchStart]);
  const handleTouchMove = (0, import_react9.useCallback)((event) => {
    if (event.touches && event.touches.length > 1) {
      touchDeltaXRef.current = 0;
    } else {
      touchDeltaXRef.current = event.touches[0].clientX - touchStartXRef.current;
    }
    onTouchMove == null ? void 0 : onTouchMove(event);
  }, [onTouchMove]);
  const handleTouchEnd = (0, import_react9.useCallback)((event) => {
    if (touch) {
      const touchDeltaX = touchDeltaXRef.current;
      if (Math.abs(touchDeltaX) > SWIPE_THRESHOLD) {
        if (touchDeltaX > 0) {
          prev(event);
        } else {
          next(event);
        }
      }
    }
    if (pause === "hover") {
      touchUnpauseTimeout.set(() => {
        setPaused(false);
      }, interval || void 0);
    }
    onTouchEnd == null ? void 0 : onTouchEnd(event);
  }, [touch, pause, prev, next, touchUnpauseTimeout, interval, onTouchEnd]);
  const shouldPlay = interval != null && !paused && !isSliding;
  const intervalHandleRef = (0, import_react9.useRef)();
  (0, import_react9.useEffect)(() => {
    var _ref, _activeChildIntervalR;
    if (!shouldPlay) {
      return void 0;
    }
    const nextFunc = isRTL ? prev : next;
    intervalHandleRef.current = window.setInterval(document.visibilityState ? nextWhenVisible : nextFunc, (_ref = (_activeChildIntervalR = activeChildIntervalRef.current) != null ? _activeChildIntervalR : interval) != null ? _ref : void 0);
    return () => {
      if (intervalHandleRef.current !== null) {
        clearInterval(intervalHandleRef.current);
      }
    };
  }, [shouldPlay, prev, next, activeChildIntervalRef, interval, nextWhenVisible, isRTL]);
  const indicatorOnClicks = (0, import_react9.useMemo)(() => indicators && Array.from({
    length: numChildren
  }, (_, index) => (event) => {
    onSelect == null ? void 0 : onSelect(index, event);
  }), [indicators, numChildren, onSelect]);
  return (0, import_jsx_runtime19.jsxs)(Component2, {
    ref: elementRef,
    ...props,
    onKeyDown: handleKeyDown,
    onMouseOver: handleMouseOver,
    onMouseOut: handleMouseOut,
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd,
    className: (0, import_classnames17.default)(className, prefix, slide && "slide", fade && `${prefix}-fade`, variant && `${prefix}-${variant}`),
    children: [indicators && (0, import_jsx_runtime18.jsx)("div", {
      className: `${prefix}-indicators`,
      children: map(children, (_, index) => (0, import_jsx_runtime18.jsx)("button", {
        type: "button",
        "data-bs-target": "",
        "aria-label": indicatorLabels != null && indicatorLabels.length ? indicatorLabels[index] : `Slide ${index + 1}`,
        className: index === renderedActiveIndex ? "active" : void 0,
        onClick: indicatorOnClicks ? indicatorOnClicks[index] : void 0,
        "aria-current": index === renderedActiveIndex
      }, index))
    }), (0, import_jsx_runtime18.jsx)("div", {
      className: `${prefix}-inner`,
      children: map(children, (child, index) => {
        const isActive = index === renderedActiveIndex;
        return slide ? (0, import_jsx_runtime18.jsx)(TransitionWrapper_default, {
          in: isActive,
          onEnter: isActive ? handleEnter : void 0,
          onEntered: isActive ? handleEntered : void 0,
          addEndListener: transitionEndListener,
          children: (status, innerProps) => React20.cloneElement(child, {
            ...innerProps,
            className: (0, import_classnames17.default)(child.props.className, isActive && status !== "entered" && orderClassName, (status === "entered" || status === "exiting") && "active", (status === "entering" || status === "exiting") && directionalClassName)
          })
        }) : React20.cloneElement(child, {
          className: (0, import_classnames17.default)(child.props.className, isActive && "active")
        });
      })
    }), controls && (0, import_jsx_runtime19.jsxs)(import_jsx_runtime20.Fragment, {
      children: [(wrap || activeIndex !== 0) && (0, import_jsx_runtime19.jsxs)(Anchor_default, {
        className: `${prefix}-control-prev`,
        onClick: prev,
        children: [prevIcon, prevLabel && (0, import_jsx_runtime18.jsx)("span", {
          className: "visually-hidden",
          children: prevLabel
        })]
      }), (wrap || activeIndex !== numChildren - 1) && (0, import_jsx_runtime19.jsxs)(Anchor_default, {
        className: `${prefix}-control-next`,
        onClick: next,
        children: [nextIcon, nextLabel && (0, import_jsx_runtime18.jsx)("span", {
          className: "visually-hidden",
          children: nextLabel
        })]
      })]
    })]
  });
});
Carousel.displayName = "Carousel";
var Carousel_default = Object.assign(Carousel, {
  Caption: CarouselCaption_default,
  Item: CarouselItem_default
});

// node_modules/react-bootstrap/esm/Col.js
var import_classnames18 = __toESM(require_classnames());
var React21 = __toESM(require_react());
var import_jsx_runtime21 = __toESM(require_jsx_runtime());
function useCol({
  as,
  bsPrefix,
  className,
  ...props
}) {
  bsPrefix = useBootstrapPrefix(bsPrefix, "col");
  const breakpoints = useBootstrapBreakpoints();
  const minBreakpoint = useBootstrapMinBreakpoint();
  const spans = [];
  const classes = [];
  breakpoints.forEach((brkPoint) => {
    const propValue = props[brkPoint];
    delete props[brkPoint];
    let span;
    let offset;
    let order;
    if (typeof propValue === "object" && propValue != null) {
      ({
        span,
        offset,
        order
      } = propValue);
    } else {
      span = propValue;
    }
    const infix = brkPoint !== minBreakpoint ? `-${brkPoint}` : "";
    if (span)
      spans.push(span === true ? `${bsPrefix}${infix}` : `${bsPrefix}${infix}-${span}`);
    if (order != null)
      classes.push(`order${infix}-${order}`);
    if (offset != null)
      classes.push(`offset${infix}-${offset}`);
  });
  return [{
    ...props,
    className: (0, import_classnames18.default)(className, ...spans, ...classes)
  }, {
    as,
    bsPrefix,
    spans
  }];
}
var Col = React21.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  (props, ref) => {
    const [{
      className,
      ...colProps
    }, {
      as: Component2 = "div",
      bsPrefix,
      spans
    }] = useCol(props);
    return (0, import_jsx_runtime21.jsx)(Component2, {
      ...colProps,
      ref,
      className: (0, import_classnames18.default)(className, !spans.length && bsPrefix)
    });
  }
);
Col.displayName = "Col";
var Col_default = Col;

// node_modules/react-bootstrap/esm/Dropdown.js
var import_classnames22 = __toESM(require_classnames());
var React32 = __toESM(require_react());
var import_react22 = __toESM(require_react());

// node_modules/@restart/ui/esm/Dropdown.js
var import_react18 = __toESM(require_react());
var React26 = __toESM(require_react());

// node_modules/@restart/ui/node_modules/uncontrollable/lib/esm/index.js
var import_react10 = __toESM(require_react());
function useUncontrolledProp2(propValue, defaultValue, handler) {
  const wasPropRef = (0, import_react10.useRef)(propValue !== void 0);
  const [stateValue, setState] = (0, import_react10.useState)(defaultValue);
  const isProp = propValue !== void 0;
  const wasProp = wasPropRef.current;
  wasPropRef.current = isProp;
  if (!isProp && wasProp && stateValue !== defaultValue) {
    setState(defaultValue);
  }
  return [isProp ? propValue : stateValue, (0, import_react10.useCallback)((...args) => {
    const [value, ...rest] = args;
    let returnValue = handler == null ? void 0 : handler(value, ...rest);
    setState(value);
    return returnValue;
  }, [handler])];
}

// node_modules/@restart/ui/esm/DropdownContext.js
var React22 = __toESM(require_react());
var DropdownContext = React22.createContext(null);
var DropdownContext_default = DropdownContext;

// node_modules/@restart/ui/esm/DropdownMenu.js
var import_react14 = __toESM(require_react());
var React23 = __toESM(require_react());

// node_modules/@restart/ui/esm/usePopper.js
var import_react12 = __toESM(require_react());

// node_modules/dequal/dist/index.mjs
var has = Object.prototype.hasOwnProperty;
function find(iter, tar, key) {
  for (key of iter.keys()) {
    if (dequal(key, tar))
      return key;
  }
}
function dequal(foo, bar) {
  var ctor, len, tmp;
  if (foo === bar)
    return true;
  if (foo && bar && (ctor = foo.constructor) === bar.constructor) {
    if (ctor === Date)
      return foo.getTime() === bar.getTime();
    if (ctor === RegExp)
      return foo.toString() === bar.toString();
    if (ctor === Array) {
      if ((len = foo.length) === bar.length) {
        while (len-- && dequal(foo[len], bar[len]))
          ;
      }
      return len === -1;
    }
    if (ctor === Set) {
      if (foo.size !== bar.size) {
        return false;
      }
      for (len of foo) {
        tmp = len;
        if (tmp && typeof tmp === "object") {
          tmp = find(bar, tmp);
          if (!tmp)
            return false;
        }
        if (!bar.has(tmp))
          return false;
      }
      return true;
    }
    if (ctor === Map) {
      if (foo.size !== bar.size) {
        return false;
      }
      for (len of foo) {
        tmp = len[0];
        if (tmp && typeof tmp === "object") {
          tmp = find(bar, tmp);
          if (!tmp)
            return false;
        }
        if (!dequal(len[1], bar.get(tmp))) {
          return false;
        }
      }
      return true;
    }
    if (ctor === ArrayBuffer) {
      foo = new Uint8Array(foo);
      bar = new Uint8Array(bar);
    } else if (ctor === DataView) {
      if ((len = foo.byteLength) === bar.byteLength) {
        while (len-- && foo.getInt8(len) === bar.getInt8(len))
          ;
      }
      return len === -1;
    }
    if (ArrayBuffer.isView(foo)) {
      if ((len = foo.byteLength) === bar.byteLength) {
        while (len-- && foo[len] === bar[len])
          ;
      }
      return len === -1;
    }
    if (!ctor || typeof foo === "object") {
      len = 0;
      for (ctor in foo) {
        if (has.call(foo, ctor) && ++len && !has.call(bar, ctor))
          return false;
        if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor]))
          return false;
      }
      return Object.keys(bar).length === len;
    }
  }
  return foo !== foo && bar !== bar;
}

// node_modules/@restart/hooks/esm/useSafeState.js
var import_react11 = __toESM(require_react());
function useSafeState(state) {
  const isMounted = useMounted();
  return [state[0], (0, import_react11.useCallback)((nextState) => {
    if (!isMounted())
      return;
    return state[1](nextState);
  }, [isMounted, state[1]])];
}
var useSafeState_default = useSafeState;

// node_modules/@restart/ui/esm/popper.js
var createPopper2 = popperGenerator({
  defaultModifiers: [hide_default, popperOffsets_default, computeStyles_default, eventListeners_default, offset_default, flip_default, preventOverflow_default, arrow_default]
});

// node_modules/@restart/ui/esm/usePopper.js
var _excluded = ["enabled", "placement", "strategy", "modifiers"];
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var disabledApplyStylesModifier = {
  name: "applyStyles",
  enabled: false,
  phase: "afterWrite",
  fn: () => void 0
};
var ariaDescribedByModifier = {
  name: "ariaDescribedBy",
  enabled: true,
  phase: "afterWrite",
  effect: ({
    state
  }) => () => {
    const {
      reference,
      popper
    } = state.elements;
    if ("removeAttribute" in reference) {
      const ids = (reference.getAttribute("aria-describedby") || "").split(",").filter((id) => id.trim() !== popper.id);
      if (!ids.length)
        reference.removeAttribute("aria-describedby");
      else
        reference.setAttribute("aria-describedby", ids.join(","));
    }
  },
  fn: ({
    state
  }) => {
    var _popper$getAttribute;
    const {
      popper,
      reference
    } = state.elements;
    const role = (_popper$getAttribute = popper.getAttribute("role")) == null ? void 0 : _popper$getAttribute.toLowerCase();
    if (popper.id && role === "tooltip" && "setAttribute" in reference) {
      const ids = reference.getAttribute("aria-describedby");
      if (ids && ids.split(",").indexOf(popper.id) !== -1) {
        return;
      }
      reference.setAttribute("aria-describedby", ids ? `${ids},${popper.id}` : popper.id);
    }
  }
};
var EMPTY_MODIFIERS = [];
function usePopper(referenceElement, popperElement, _ref = {}) {
  let {
    enabled = true,
    placement = "bottom",
    strategy = "absolute",
    modifiers = EMPTY_MODIFIERS
  } = _ref, config = _objectWithoutPropertiesLoose(_ref, _excluded);
  const prevModifiers = (0, import_react12.useRef)(modifiers);
  const popperInstanceRef = (0, import_react12.useRef)();
  const update = (0, import_react12.useCallback)(() => {
    var _popperInstanceRef$cu;
    (_popperInstanceRef$cu = popperInstanceRef.current) == null ? void 0 : _popperInstanceRef$cu.update();
  }, []);
  const forceUpdate = (0, import_react12.useCallback)(() => {
    var _popperInstanceRef$cu2;
    (_popperInstanceRef$cu2 = popperInstanceRef.current) == null ? void 0 : _popperInstanceRef$cu2.forceUpdate();
  }, []);
  const [popperState, setState] = useSafeState_default((0, import_react12.useState)({
    placement,
    update,
    forceUpdate,
    attributes: {},
    styles: {
      popper: {},
      arrow: {}
    }
  }));
  const updateModifier = (0, import_react12.useMemo)(() => ({
    name: "updateStateModifier",
    enabled: true,
    phase: "write",
    requires: ["computeStyles"],
    fn: ({
      state
    }) => {
      const styles = {};
      const attributes = {};
      Object.keys(state.elements).forEach((element) => {
        styles[element] = state.styles[element];
        attributes[element] = state.attributes[element];
      });
      setState({
        state,
        styles,
        attributes,
        update,
        forceUpdate,
        placement: state.placement
      });
    }
  }), [update, forceUpdate, setState]);
  const nextModifiers = (0, import_react12.useMemo)(() => {
    if (!dequal(prevModifiers.current, modifiers)) {
      prevModifiers.current = modifiers;
    }
    return prevModifiers.current;
  }, [modifiers]);
  (0, import_react12.useEffect)(() => {
    if (!popperInstanceRef.current || !enabled)
      return;
    popperInstanceRef.current.setOptions({
      placement,
      strategy,
      modifiers: [...nextModifiers, updateModifier, disabledApplyStylesModifier]
    });
  }, [strategy, placement, updateModifier, enabled, nextModifiers]);
  (0, import_react12.useEffect)(() => {
    if (!enabled || referenceElement == null || popperElement == null) {
      return void 0;
    }
    popperInstanceRef.current = createPopper2(referenceElement, popperElement, Object.assign({}, config, {
      placement,
      strategy,
      modifiers: [...nextModifiers, ariaDescribedByModifier, updateModifier]
    }));
    return () => {
      if (popperInstanceRef.current != null) {
        popperInstanceRef.current.destroy();
        popperInstanceRef.current = void 0;
        setState((s) => Object.assign({}, s, {
          attributes: {},
          styles: {
            popper: {}
          }
        }));
      }
    };
  }, [enabled, referenceElement, popperElement]);
  return popperState;
}
var usePopper_default = usePopper;

// node_modules/@restart/ui/esm/useClickOutside.js
var import_react13 = __toESM(require_react());
var import_warning = __toESM(require_warning());
var noop = () => {
};
function isLeftClickEvent(event) {
  return event.button === 0;
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
var getRefTarget = (ref) => ref && ("current" in ref ? ref.current : ref);
var InitialTriggerEvents = {
  click: "mousedown",
  mouseup: "mousedown",
  pointerup: "pointerdown"
};
function useClickOutside(ref, onClickOutside = noop, {
  disabled,
  clickTrigger = "click"
} = {}) {
  const preventMouseClickOutsideRef = (0, import_react13.useRef)(false);
  const waitingForTrigger = (0, import_react13.useRef)(false);
  const handleMouseCapture = (0, import_react13.useCallback)((e) => {
    const currentTarget = getRefTarget(ref);
    (0, import_warning.default)(!!currentTarget, "ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node");
    preventMouseClickOutsideRef.current = !currentTarget || isModifiedEvent(e) || !isLeftClickEvent(e) || !!contains(currentTarget, e.target) || waitingForTrigger.current;
    waitingForTrigger.current = false;
  }, [ref]);
  const handleInitialMouse = useEventCallback((e) => {
    const currentTarget = getRefTarget(ref);
    if (currentTarget && contains(currentTarget, e.target)) {
      waitingForTrigger.current = true;
    }
  });
  const handleMouse = useEventCallback((e) => {
    if (!preventMouseClickOutsideRef.current) {
      onClickOutside(e);
    }
  });
  (0, import_react13.useEffect)(() => {
    var _ownerWindow$event, _ownerWindow$parent;
    if (disabled || ref == null)
      return void 0;
    const doc = ownerDocument(getRefTarget(ref));
    const ownerWindow = doc.defaultView || window;
    let currentEvent = (_ownerWindow$event = ownerWindow.event) != null ? _ownerWindow$event : (_ownerWindow$parent = ownerWindow.parent) == null ? void 0 : _ownerWindow$parent.event;
    let removeInitialTriggerListener = null;
    if (InitialTriggerEvents[clickTrigger]) {
      removeInitialTriggerListener = listen_default(doc, InitialTriggerEvents[clickTrigger], handleInitialMouse, true);
    }
    const removeMouseCaptureListener = listen_default(doc, clickTrigger, handleMouseCapture, true);
    const removeMouseListener = listen_default(doc, clickTrigger, (e) => {
      if (e === currentEvent) {
        currentEvent = void 0;
        return;
      }
      handleMouse(e);
    });
    let mobileSafariHackListeners = [];
    if ("ontouchstart" in doc.documentElement) {
      mobileSafariHackListeners = [].slice.call(doc.body.children).map((el) => listen_default(el, "mousemove", noop));
    }
    return () => {
      removeInitialTriggerListener == null ? void 0 : removeInitialTriggerListener();
      removeMouseCaptureListener();
      removeMouseListener();
      mobileSafariHackListeners.forEach((remove) => remove());
    };
  }, [ref, disabled, clickTrigger, handleMouseCapture, handleInitialMouse, handleMouse]);
}
var useClickOutside_default = useClickOutside;

// node_modules/@restart/ui/esm/mergeOptionsWithPopperConfig.js
function toModifierMap(modifiers) {
  const result = {};
  if (!Array.isArray(modifiers)) {
    return modifiers || result;
  }
  modifiers == null ? void 0 : modifiers.forEach((m) => {
    result[m.name] = m;
  });
  return result;
}
function toModifierArray(map2 = {}) {
  if (Array.isArray(map2))
    return map2;
  return Object.keys(map2).map((k) => {
    map2[k].name = k;
    return map2[k];
  });
}
function mergeOptionsWithPopperConfig({
  enabled,
  enableEvents,
  placement,
  flip,
  offset,
  fixed,
  containerPadding,
  arrowElement,
  popperConfig = {}
}) {
  var _modifiers$eventListe, _modifiers$preventOve, _modifiers$preventOve2, _modifiers$offset, _modifiers$arrow;
  const modifiers = toModifierMap(popperConfig.modifiers);
  return Object.assign({}, popperConfig, {
    placement,
    enabled,
    strategy: fixed ? "fixed" : popperConfig.strategy,
    modifiers: toModifierArray(Object.assign({}, modifiers, {
      eventListeners: {
        enabled: enableEvents,
        options: (_modifiers$eventListe = modifiers.eventListeners) == null ? void 0 : _modifiers$eventListe.options
      },
      preventOverflow: Object.assign({}, modifiers.preventOverflow, {
        options: containerPadding ? Object.assign({
          padding: containerPadding
        }, (_modifiers$preventOve = modifiers.preventOverflow) == null ? void 0 : _modifiers$preventOve.options) : (_modifiers$preventOve2 = modifiers.preventOverflow) == null ? void 0 : _modifiers$preventOve2.options
      }),
      offset: {
        options: Object.assign({
          offset
        }, (_modifiers$offset = modifiers.offset) == null ? void 0 : _modifiers$offset.options)
      },
      arrow: Object.assign({}, modifiers.arrow, {
        enabled: !!arrowElement,
        options: Object.assign({}, (_modifiers$arrow = modifiers.arrow) == null ? void 0 : _modifiers$arrow.options, {
          element: arrowElement
        })
      }),
      flip: Object.assign({
        enabled: !!flip
      }, modifiers.flip)
    }))
  });
}

// node_modules/@restart/ui/esm/DropdownMenu.js
var import_jsx_runtime22 = __toESM(require_jsx_runtime());
var import_jsx_runtime23 = __toESM(require_jsx_runtime());
var _excluded2 = ["children"];
function _objectWithoutPropertiesLoose2(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var noop2 = () => {
};
function useDropdownMenu(options = {}) {
  const context4 = (0, import_react14.useContext)(DropdownContext_default);
  const [arrowElement, attachArrowRef] = useCallbackRef();
  const hasShownRef = (0, import_react14.useRef)(false);
  const {
    flip,
    offset,
    rootCloseEvent,
    fixed = false,
    placement: placementOverride,
    popperConfig = {},
    enableEventListeners = true,
    usePopper: shouldUsePopper = !!context4
  } = options;
  const show = (context4 == null ? void 0 : context4.show) == null ? !!options.show : context4.show;
  if (show && !hasShownRef.current) {
    hasShownRef.current = true;
  }
  const handleClose = (e) => {
    context4 == null ? void 0 : context4.toggle(false, e);
  };
  const {
    placement,
    setMenu,
    menuElement,
    toggleElement
  } = context4 || {};
  const popper = usePopper_default(toggleElement, menuElement, mergeOptionsWithPopperConfig({
    placement: placementOverride || placement || "bottom-start",
    enabled: shouldUsePopper,
    enableEvents: enableEventListeners == null ? show : enableEventListeners,
    offset,
    flip,
    fixed,
    arrowElement,
    popperConfig
  }));
  const menuProps = Object.assign({
    ref: setMenu || noop2,
    "aria-labelledby": toggleElement == null ? void 0 : toggleElement.id
  }, popper.attributes.popper, {
    style: popper.styles.popper
  });
  const metadata = {
    show,
    placement,
    hasShown: hasShownRef.current,
    toggle: context4 == null ? void 0 : context4.toggle,
    popper: shouldUsePopper ? popper : null,
    arrowProps: shouldUsePopper ? Object.assign({
      ref: attachArrowRef
    }, popper.attributes.arrow, {
      style: popper.styles.arrow
    }) : {}
  };
  useClickOutside_default(menuElement, handleClose, {
    clickTrigger: rootCloseEvent,
    disabled: !show
  });
  return [menuProps, metadata];
}
var defaultProps = {
  usePopper: true
};
function DropdownMenu(_ref) {
  let {
    children
  } = _ref, options = _objectWithoutPropertiesLoose2(_ref, _excluded2);
  const [props, meta] = useDropdownMenu(options);
  return (0, import_jsx_runtime23.jsx)(import_jsx_runtime22.Fragment, {
    children: children(props, meta)
  });
}
DropdownMenu.displayName = "DropdownMenu";
DropdownMenu.defaultProps = defaultProps;
var DropdownMenu_default = DropdownMenu;

// node_modules/@restart/ui/esm/DropdownToggle.js
var import_react16 = __toESM(require_react());
var React24 = __toESM(require_react());

// node_modules/@react-aria/ssr/dist/import.mjs
var import_react15 = __toESM(require_react(), 1);
var $b5e257d569688ac6$var$defaultContext = {
  prefix: String(Math.round(Math.random() * 1e10)),
  current: 0,
  isSSR: false
};
var $b5e257d569688ac6$var$SSRContext = (0, import_react15.default).createContext($b5e257d569688ac6$var$defaultContext);
function $b5e257d569688ac6$var$LegacySSRProvider(props) {
  let cur = (0, import_react15.useContext)($b5e257d569688ac6$var$SSRContext);
  let counter = $b5e257d569688ac6$var$useCounter(cur === $b5e257d569688ac6$var$defaultContext);
  let [isSSR, setIsSSR] = (0, import_react15.useState)(true);
  let value = (0, import_react15.useMemo)(() => ({
    // If this is the first SSRProvider, start with an empty string prefix, otherwise
    // append and increment the counter.
    prefix: cur === $b5e257d569688ac6$var$defaultContext ? "" : `${cur.prefix}-${counter}`,
    current: 0,
    isSSR
  }), [
    cur,
    counter,
    isSSR
  ]);
  if (typeof document !== "undefined")
    (0, import_react15.useLayoutEffect)(() => {
      setIsSSR(false);
    }, []);
  return (0, import_react15.default).createElement($b5e257d569688ac6$var$SSRContext.Provider, {
    value
  }, props.children);
}
var $b5e257d569688ac6$var$warnedAboutSSRProvider = false;
function $b5e257d569688ac6$export$9f8ac96af4b1b2ae(props) {
  if (typeof (0, import_react15.default)["useId"] === "function") {
    if (!$b5e257d569688ac6$var$warnedAboutSSRProvider) {
      console.warn("In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.");
      $b5e257d569688ac6$var$warnedAboutSSRProvider = true;
    }
    return (0, import_react15.default).createElement((0, import_react15.default).Fragment, null, props.children);
  }
  return (0, import_react15.default).createElement($b5e257d569688ac6$var$LegacySSRProvider, props);
}
var $b5e257d569688ac6$var$canUseDOM = Boolean(typeof window !== "undefined" && window.document && window.document.createElement);
var $b5e257d569688ac6$var$componentIds = /* @__PURE__ */ new WeakMap();
function $b5e257d569688ac6$var$useCounter(isDisabled = false) {
  let ctx = (0, import_react15.useContext)($b5e257d569688ac6$var$SSRContext);
  let ref = (0, import_react15.useRef)(null);
  if (ref.current === null && !isDisabled) {
    var _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner;
    let currentOwner = (_React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = (0, import_react15.default).__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED === void 0 ? void 0 : (_React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner = _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner) === null || _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner === void 0 ? void 0 : _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner.current;
    if (currentOwner) {
      let prevComponentValue = $b5e257d569688ac6$var$componentIds.get(currentOwner);
      if (prevComponentValue == null)
        $b5e257d569688ac6$var$componentIds.set(currentOwner, {
          id: ctx.current,
          state: currentOwner.memoizedState
        });
      else if (currentOwner.memoizedState !== prevComponentValue.state) {
        ctx.current = prevComponentValue.id;
        $b5e257d569688ac6$var$componentIds.delete(currentOwner);
      }
    }
    ref.current = ++ctx.current;
  }
  return ref.current;
}
function $b5e257d569688ac6$var$useLegacySSRSafeId(defaultId) {
  let ctx = (0, import_react15.useContext)($b5e257d569688ac6$var$SSRContext);
  if (ctx === $b5e257d569688ac6$var$defaultContext && !$b5e257d569688ac6$var$canUseDOM)
    console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
  let counter = $b5e257d569688ac6$var$useCounter(!!defaultId);
  let prefix = ctx === $b5e257d569688ac6$var$defaultContext && false ? "react-aria" : `react-aria${ctx.prefix}`;
  return defaultId || `${prefix}-${counter}`;
}
function $b5e257d569688ac6$var$useModernSSRSafeId(defaultId) {
  let id = (0, import_react15.default).useId();
  let [didSSR] = (0, import_react15.useState)($b5e257d569688ac6$export$535bd6ca7f90a273());
  let prefix = didSSR || false ? "react-aria" : `react-aria${$b5e257d569688ac6$var$defaultContext.prefix}`;
  return defaultId || `${prefix}-${id}`;
}
var $b5e257d569688ac6$export$619500959fc48b26 = typeof (0, import_react15.default)["useId"] === "function" ? $b5e257d569688ac6$var$useModernSSRSafeId : $b5e257d569688ac6$var$useLegacySSRSafeId;
function $b5e257d569688ac6$var$getSnapshot() {
  return false;
}
function $b5e257d569688ac6$var$getServerSnapshot() {
  return true;
}
function $b5e257d569688ac6$var$subscribe(onStoreChange) {
  return () => {
  };
}
function $b5e257d569688ac6$export$535bd6ca7f90a273() {
  if (typeof (0, import_react15.default)["useSyncExternalStore"] === "function")
    return (0, import_react15.default)["useSyncExternalStore"]($b5e257d569688ac6$var$subscribe, $b5e257d569688ac6$var$getSnapshot, $b5e257d569688ac6$var$getServerSnapshot);
  let cur = (0, import_react15.useContext)($b5e257d569688ac6$var$SSRContext);
  return cur.isSSR;
}

// node_modules/@restart/ui/esm/DropdownToggle.js
var import_jsx_runtime24 = __toESM(require_jsx_runtime());
var import_jsx_runtime25 = __toESM(require_jsx_runtime());
var isRoleMenu = (el) => {
  var _el$getAttribute;
  return ((_el$getAttribute = el.getAttribute("role")) == null ? void 0 : _el$getAttribute.toLowerCase()) === "menu";
};
var noop3 = () => {
};
function useDropdownToggle() {
  const id = $b5e257d569688ac6$export$619500959fc48b26();
  const {
    show = false,
    toggle = noop3,
    setToggle,
    menuElement
  } = (0, import_react16.useContext)(DropdownContext_default) || {};
  const handleClick = (0, import_react16.useCallback)((e) => {
    toggle(!show, e);
  }, [show, toggle]);
  const props = {
    id,
    ref: setToggle || noop3,
    onClick: handleClick,
    "aria-expanded": !!show
  };
  if (menuElement && isRoleMenu(menuElement)) {
    props["aria-haspopup"] = true;
  }
  return [props, {
    show,
    toggle
  }];
}
function DropdownToggle({
  children
}) {
  const [props, meta] = useDropdownToggle();
  return (0, import_jsx_runtime25.jsx)(import_jsx_runtime24.Fragment, {
    children: children(props, meta)
  });
}
DropdownToggle.displayName = "DropdownToggle";
var DropdownToggle_default = DropdownToggle;

// node_modules/@restart/ui/esm/DropdownItem.js
var React25 = __toESM(require_react());
var import_react17 = __toESM(require_react());
var import_jsx_runtime26 = __toESM(require_jsx_runtime());
var _excluded3 = ["eventKey", "disabled", "onClick", "active", "as"];
function _objectWithoutPropertiesLoose3(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function useDropdownItem({
  key,
  href,
  active,
  disabled,
  onClick
}) {
  const onSelectCtx = (0, import_react17.useContext)(SelectableContext_default);
  const navContext = (0, import_react17.useContext)(NavContext_default);
  const {
    activeKey
  } = navContext || {};
  const eventKey = makeEventKey(key, href);
  const isActive = active == null && key != null ? makeEventKey(activeKey) === eventKey : active;
  const handleClick = useEventCallback((event) => {
    if (disabled)
      return;
    onClick == null ? void 0 : onClick(event);
    if (onSelectCtx && !event.isPropagationStopped()) {
      onSelectCtx(eventKey, event);
    }
  });
  return [{
    onClick: handleClick,
    "aria-disabled": disabled || void 0,
    "aria-selected": isActive,
    [dataAttr("dropdown-item")]: ""
  }, {
    isActive
  }];
}
var DropdownItem = React25.forwardRef((_ref, ref) => {
  let {
    eventKey,
    disabled,
    onClick,
    active,
    as: Component2 = Button_default
  } = _ref, props = _objectWithoutPropertiesLoose3(_ref, _excluded3);
  const [dropdownItemProps] = useDropdownItem({
    key: eventKey,
    href: props.href,
    disabled,
    onClick,
    active
  });
  return (0, import_jsx_runtime26.jsx)(Component2, Object.assign({}, props, {
    ref
  }, dropdownItemProps));
});
DropdownItem.displayName = "DropdownItem";
var DropdownItem_default = DropdownItem;

// node_modules/@restart/ui/esm/Dropdown.js
var import_jsx_runtime27 = __toESM(require_jsx_runtime());
function useRefWithUpdate() {
  const forceUpdate = useForceUpdate();
  const ref = (0, import_react18.useRef)(null);
  const attachRef = (0, import_react18.useCallback)((element) => {
    ref.current = element;
    forceUpdate();
  }, [forceUpdate]);
  return [ref, attachRef];
}
function Dropdown({
  defaultShow,
  show: rawShow,
  onSelect,
  onToggle: rawOnToggle,
  itemSelector = `* [${dataAttr("dropdown-item")}]`,
  focusFirstItemOnShow,
  placement = "bottom-start",
  children
}) {
  const window2 = useWindow();
  const [show, onToggle] = useUncontrolledProp2(rawShow, defaultShow, rawOnToggle);
  const [menuRef, setMenu] = useRefWithUpdate();
  const menuElement = menuRef.current;
  const [toggleRef, setToggle] = useRefWithUpdate();
  const toggleElement = toggleRef.current;
  const lastShow = usePrevious(show);
  const lastSourceEvent = (0, import_react18.useRef)(null);
  const focusInDropdown = (0, import_react18.useRef)(false);
  const onSelectCtx = (0, import_react18.useContext)(SelectableContext_default);
  const toggle = (0, import_react18.useCallback)((nextShow, event, source = event == null ? void 0 : event.type) => {
    onToggle(nextShow, {
      originalEvent: event,
      source
    });
  }, [onToggle]);
  const handleSelect = useEventCallback((key, event) => {
    onSelect == null ? void 0 : onSelect(key, event);
    toggle(false, event, "select");
    if (!event.isPropagationStopped()) {
      onSelectCtx == null ? void 0 : onSelectCtx(key, event);
    }
  });
  const context4 = (0, import_react18.useMemo)(() => ({
    toggle,
    placement,
    show,
    menuElement,
    toggleElement,
    setMenu,
    setToggle
  }), [toggle, placement, show, menuElement, toggleElement, setMenu, setToggle]);
  if (menuElement && lastShow && !show) {
    focusInDropdown.current = menuElement.contains(menuElement.ownerDocument.activeElement);
  }
  const focusToggle = useEventCallback(() => {
    if (toggleElement && toggleElement.focus) {
      toggleElement.focus();
    }
  });
  const maybeFocusFirst = useEventCallback(() => {
    const type = lastSourceEvent.current;
    let focusType = focusFirstItemOnShow;
    if (focusType == null) {
      focusType = menuRef.current && isRoleMenu(menuRef.current) ? "keyboard" : false;
    }
    if (focusType === false || focusType === "keyboard" && !/^key.+$/.test(type)) {
      return;
    }
    const first = qsa(menuRef.current, itemSelector)[0];
    if (first && first.focus)
      first.focus();
  });
  (0, import_react18.useEffect)(() => {
    if (show)
      maybeFocusFirst();
    else if (focusInDropdown.current) {
      focusInDropdown.current = false;
      focusToggle();
    }
  }, [show, focusInDropdown, focusToggle, maybeFocusFirst]);
  (0, import_react18.useEffect)(() => {
    lastSourceEvent.current = null;
  });
  const getNextFocusedChild = (current, offset) => {
    if (!menuRef.current)
      return null;
    const items = qsa(menuRef.current, itemSelector);
    let index = items.indexOf(current) + offset;
    index = Math.max(0, Math.min(index, items.length));
    return items[index];
  };
  useEventListener((0, import_react18.useCallback)(() => window2.document, [window2]), "keydown", (event) => {
    var _menuRef$current, _toggleRef$current;
    const {
      key
    } = event;
    const target = event.target;
    const fromMenu = (_menuRef$current = menuRef.current) == null ? void 0 : _menuRef$current.contains(target);
    const fromToggle = (_toggleRef$current = toggleRef.current) == null ? void 0 : _toggleRef$current.contains(target);
    const isInput = /input|textarea/i.test(target.tagName);
    if (isInput && (key === " " || key !== "Escape" && fromMenu || key === "Escape" && target.type === "search")) {
      return;
    }
    if (!fromMenu && !fromToggle) {
      return;
    }
    if (key === "Tab" && (!menuRef.current || !show)) {
      return;
    }
    lastSourceEvent.current = event.type;
    const meta = {
      originalEvent: event,
      source: event.type
    };
    switch (key) {
      case "ArrowUp": {
        const next = getNextFocusedChild(target, -1);
        if (next && next.focus)
          next.focus();
        event.preventDefault();
        return;
      }
      case "ArrowDown":
        event.preventDefault();
        if (!show) {
          onToggle(true, meta);
        } else {
          const next = getNextFocusedChild(target, 1);
          if (next && next.focus)
            next.focus();
        }
        return;
      case "Tab":
        addEventListener_default(target.ownerDocument, "keyup", (e) => {
          var _menuRef$current2;
          if (e.key === "Tab" && !e.target || !((_menuRef$current2 = menuRef.current) != null && _menuRef$current2.contains(e.target))) {
            onToggle(false, meta);
          }
        }, {
          once: true
        });
        break;
      case "Escape":
        if (key === "Escape") {
          event.preventDefault();
          event.stopPropagation();
        }
        onToggle(false, meta);
        break;
      default:
    }
  });
  return (0, import_jsx_runtime27.jsx)(SelectableContext_default.Provider, {
    value: handleSelect,
    children: (0, import_jsx_runtime27.jsx)(DropdownContext_default.Provider, {
      value: context4,
      children
    })
  });
}
Dropdown.displayName = "Dropdown";
Dropdown.Menu = DropdownMenu_default;
Dropdown.Toggle = DropdownToggle_default;
Dropdown.Item = DropdownItem_default;
var Dropdown_default = Dropdown;

// node_modules/react-bootstrap/esm/DropdownContext.js
var React27 = __toESM(require_react());
var DropdownContext2 = React27.createContext({});
DropdownContext2.displayName = "DropdownContext";
var DropdownContext_default2 = DropdownContext2;

// node_modules/react-bootstrap/esm/DropdownItem.js
var import_classnames19 = __toESM(require_classnames());
var React28 = __toESM(require_react());
var import_jsx_runtime28 = __toESM(require_jsx_runtime());
var DropdownItem2 = React28.forwardRef(({
  bsPrefix,
  className,
  eventKey,
  disabled = false,
  onClick,
  active,
  as: Component2 = Anchor_default,
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, "dropdown-item");
  const [dropdownItemProps, meta] = useDropdownItem({
    key: eventKey,
    href: props.href,
    disabled,
    onClick,
    active
  });
  return (0, import_jsx_runtime28.jsx)(Component2, {
    ...props,
    ...dropdownItemProps,
    ref,
    className: (0, import_classnames19.default)(className, prefix, meta.isActive && "active", disabled && "disabled")
  });
});
DropdownItem2.displayName = "DropdownItem";
var DropdownItem_default2 = DropdownItem2;

// node_modules/react-bootstrap/esm/DropdownMenu.js
var import_classnames20 = __toESM(require_classnames());
var React30 = __toESM(require_react());
var import_react20 = __toESM(require_react());
var import_warning2 = __toESM(require_warning());

// node_modules/react-bootstrap/esm/InputGroupContext.js
var React29 = __toESM(require_react());
var context3 = React29.createContext(null);
context3.displayName = "InputGroupContext";
var InputGroupContext_default = context3;

// node_modules/react-bootstrap/esm/useWrappedRefWithWarning.js
var import_invariant = __toESM(require_browser());
var import_react19 = __toESM(require_react());
function useWrappedRefWithWarning(ref, componentName) {
  if (false)
    return ref;
  const warningRef = (0, import_react19.useCallback)((refValue) => {
    !(refValue == null || !refValue.isReactComponent) ? true ? (0, import_invariant.default)(false, `${componentName} injected a ref to a provided \`as\` component that resolved to a component instance instead of a DOM element. Use \`React.forwardRef\` to provide the injected ref to the class component as a prop in order to pass it directly to a DOM element`) : (0, import_invariant.default)(false) : void 0;
  }, [componentName]);
  return useMergedRefs_default(warningRef, ref);
}

// node_modules/react-bootstrap/esm/types.js
var import_prop_types = __toESM(require_prop_types());
var alignDirection = import_prop_types.default.oneOf(["start", "end"]);
var alignPropType = import_prop_types.default.oneOfType([alignDirection, import_prop_types.default.shape({
  sm: alignDirection
}), import_prop_types.default.shape({
  md: alignDirection
}), import_prop_types.default.shape({
  lg: alignDirection
}), import_prop_types.default.shape({
  xl: alignDirection
}), import_prop_types.default.shape({
  xxl: alignDirection
}), import_prop_types.default.object]);

// node_modules/react-bootstrap/esm/DropdownMenu.js
var import_jsx_runtime29 = __toESM(require_jsx_runtime());
function getDropdownMenuPlacement(alignEnd, dropDirection, isRTL) {
  const topStart = isRTL ? "top-end" : "top-start";
  const topEnd = isRTL ? "top-start" : "top-end";
  const bottomStart = isRTL ? "bottom-end" : "bottom-start";
  const bottomEnd = isRTL ? "bottom-start" : "bottom-end";
  const leftStart = isRTL ? "right-start" : "left-start";
  const leftEnd = isRTL ? "right-end" : "left-end";
  const rightStart = isRTL ? "left-start" : "right-start";
  const rightEnd = isRTL ? "left-end" : "right-end";
  let placement = alignEnd ? bottomEnd : bottomStart;
  if (dropDirection === "up")
    placement = alignEnd ? topEnd : topStart;
  else if (dropDirection === "end")
    placement = alignEnd ? rightEnd : rightStart;
  else if (dropDirection === "start")
    placement = alignEnd ? leftEnd : leftStart;
  else if (dropDirection === "down-centered")
    placement = "bottom";
  else if (dropDirection === "up-centered")
    placement = "top";
  return placement;
}
var DropdownMenu2 = React30.forwardRef(({
  bsPrefix,
  className,
  align,
  rootCloseEvent,
  flip = true,
  show: showProps,
  renderOnMount,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component2 = "div",
  popperConfig,
  variant,
  ...props
}, ref) => {
  let alignEnd = false;
  const isNavbar = (0, import_react20.useContext)(NavbarContext_default);
  const prefix = useBootstrapPrefix(bsPrefix, "dropdown-menu");
  const {
    align: contextAlign,
    drop,
    isRTL
  } = (0, import_react20.useContext)(DropdownContext_default2);
  align = align || contextAlign;
  const isInputGroup = (0, import_react20.useContext)(InputGroupContext_default);
  const alignClasses = [];
  if (align) {
    if (typeof align === "object") {
      const keys = Object.keys(align);
      true ? (0, import_warning2.default)(keys.length === 1, "There should only be 1 breakpoint when passing an object to `align`") : void 0;
      if (keys.length) {
        const brkPoint = keys[0];
        const direction = align[brkPoint];
        alignEnd = direction === "start";
        alignClasses.push(`${prefix}-${brkPoint}-${direction}`);
      }
    } else if (align === "end") {
      alignEnd = true;
    }
  }
  const placement = getDropdownMenuPlacement(alignEnd, drop, isRTL);
  const [menuProps, {
    hasShown,
    popper,
    show,
    toggle
  }] = useDropdownMenu({
    flip,
    rootCloseEvent,
    show: showProps,
    usePopper: !isNavbar && alignClasses.length === 0,
    offset: [0, 2],
    popperConfig,
    placement
  });
  menuProps.ref = useMergedRefs_default(useWrappedRefWithWarning(ref, "DropdownMenu"), menuProps.ref);
  useIsomorphicEffect_default(() => {
    if (show)
      popper == null ? void 0 : popper.update();
  }, [show]);
  if (!hasShown && !renderOnMount && !isInputGroup)
    return null;
  if (typeof Component2 !== "string") {
    menuProps.show = show;
    menuProps.close = () => toggle == null ? void 0 : toggle(false);
    menuProps.align = align;
  }
  let style = props.style;
  if (popper != null && popper.placement) {
    style = {
      ...props.style,
      ...menuProps.style
    };
    props["x-placement"] = popper.placement;
  }
  return (0, import_jsx_runtime29.jsx)(Component2, {
    ...props,
    ...menuProps,
    style,
    ...(alignClasses.length || isNavbar) && {
      "data-bs-popper": "static"
    },
    className: (0, import_classnames20.default)(className, prefix, show && "show", alignEnd && `${prefix}-end`, variant && `${prefix}-${variant}`, ...alignClasses)
  });
});
DropdownMenu2.displayName = "DropdownMenu";
var DropdownMenu_default2 = DropdownMenu2;

// node_modules/react-bootstrap/esm/DropdownToggle.js
var import_classnames21 = __toESM(require_classnames());
var React31 = __toESM(require_react());
var import_react21 = __toESM(require_react());
var import_jsx_runtime30 = __toESM(require_jsx_runtime());
var DropdownToggle2 = React31.forwardRef(({
  bsPrefix,
  split,
  className,
  childBsPrefix,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component2 = Button_default2,
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, "dropdown-toggle");
  const dropdownContext = (0, import_react21.useContext)(DropdownContext_default);
  if (childBsPrefix !== void 0) {
    props.bsPrefix = childBsPrefix;
  }
  const [toggleProps] = useDropdownToggle();
  toggleProps.ref = useMergedRefs_default(toggleProps.ref, useWrappedRefWithWarning(ref, "DropdownToggle"));
  return (0, import_jsx_runtime30.jsx)(Component2, {
    className: (0, import_classnames21.default)(className, prefix, split && `${prefix}-split`, (dropdownContext == null ? void 0 : dropdownContext.show) && "show"),
    ...toggleProps,
    ...props
  });
});
DropdownToggle2.displayName = "DropdownToggle";
var DropdownToggle_default2 = DropdownToggle2;

// node_modules/react-bootstrap/esm/Dropdown.js
var import_jsx_runtime31 = __toESM(require_jsx_runtime());
var DropdownHeader = createWithBsPrefix("dropdown-header", {
  defaultProps: {
    role: "heading"
  }
});
var DropdownDivider = createWithBsPrefix("dropdown-divider", {
  Component: "hr",
  defaultProps: {
    role: "separator"
  }
});
var DropdownItemText = createWithBsPrefix("dropdown-item-text", {
  Component: "span"
});
var Dropdown2 = React32.forwardRef((pProps, ref) => {
  const {
    bsPrefix,
    drop = "down",
    show,
    className,
    align = "start",
    onSelect,
    onToggle,
    focusFirstItemOnShow,
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component2 = "div",
    navbar: _4,
    autoClose = true,
    ...props
  } = useUncontrolled(pProps, {
    show: "onToggle"
  });
  const isInputGroup = (0, import_react22.useContext)(InputGroupContext_default);
  const prefix = useBootstrapPrefix(bsPrefix, "dropdown");
  const isRTL = useIsRTL();
  const isClosingPermitted = (source) => {
    if (autoClose === false)
      return source === "click";
    if (autoClose === "inside")
      return source !== "rootClose";
    if (autoClose === "outside")
      return source !== "select";
    return true;
  };
  const handleToggle = useEventCallback((nextShow, meta) => {
    if (meta.originalEvent.currentTarget === document && (meta.source !== "keydown" || meta.originalEvent.key === "Escape"))
      meta.source = "rootClose";
    if (isClosingPermitted(meta.source))
      onToggle == null ? void 0 : onToggle(nextShow, meta);
  });
  const alignEnd = align === "end";
  const placement = getDropdownMenuPlacement(alignEnd, drop, isRTL);
  const contextValue = (0, import_react22.useMemo)(() => ({
    align,
    drop,
    isRTL
  }), [align, drop, isRTL]);
  const directionClasses = {
    down: prefix,
    "down-centered": `${prefix}-center`,
    up: "dropup",
    "up-centered": "dropup-center dropup",
    end: "dropend",
    start: "dropstart"
  };
  return (0, import_jsx_runtime31.jsx)(DropdownContext_default2.Provider, {
    value: contextValue,
    children: (0, import_jsx_runtime31.jsx)(Dropdown_default, {
      placement,
      show,
      onSelect,
      onToggle: handleToggle,
      focusFirstItemOnShow,
      itemSelector: `.${prefix}-item:not(.disabled):not(:disabled)`,
      children: isInputGroup ? props.children : (0, import_jsx_runtime31.jsx)(Component2, {
        ...props,
        ref,
        className: (0, import_classnames22.default)(className, show && "show", directionClasses[drop])
      })
    })
  });
});
Dropdown2.displayName = "Dropdown";
var Dropdown_default2 = Object.assign(Dropdown2, {
  Toggle: DropdownToggle_default2,
  Menu: DropdownMenu_default2,
  Item: DropdownItem_default2,
  ItemText: DropdownItemText,
  Divider: DropdownDivider,
  Header: DropdownHeader
});

// node_modules/react-bootstrap/esm/DropdownButton.js
var React33 = __toESM(require_react());
var import_prop_types2 = __toESM(require_prop_types());
var import_jsx_runtime32 = __toESM(require_jsx_runtime());
var import_jsx_runtime33 = __toESM(require_jsx_runtime());
var propTypes = {
  /**
   * An html id attribute for the Toggle button, necessary for assistive technologies, such as screen readers.
   * @type {string}
   */
  id: import_prop_types2.default.string,
  /** An `href` passed to the Toggle component */
  href: import_prop_types2.default.string,
  /** An `onClick` handler passed to the Toggle component */
  onClick: import_prop_types2.default.func,
  /** The content of the non-toggle Button.  */
  title: import_prop_types2.default.node.isRequired,
  /** Disables both Buttons  */
  disabled: import_prop_types2.default.bool,
  /**
   * Aligns the dropdown menu.
   *
   * _see [DropdownMenu](#dropdown-menu-props) for more details_
   *
   * @type {"start"|"end"|{ sm: "start"|"end" }|{ md: "start"|"end" }|{ lg: "start"|"end" }|{ xl: "start"|"end"}|{ xxl: "start"|"end"} }
   */
  align: alignPropType,
  /** An ARIA accessible role applied to the Menu component. When set to 'menu', The dropdown */
  menuRole: import_prop_types2.default.string,
  /** Whether to render the dropdown menu in the DOM before the first time it is shown */
  renderMenuOnMount: import_prop_types2.default.bool,
  /**
   *  Which event when fired outside the component will cause it to be closed.
   *
   * _see [DropdownMenu](#dropdown-menu-props) for more details_
   */
  rootCloseEvent: import_prop_types2.default.string,
  /**
   * Menu color variant.
   *
   * Omitting this will use the default light color.
   */
  menuVariant: import_prop_types2.default.oneOf(["dark"]),
  /**
   * Allow Dropdown to flip in case of an overlapping on the reference element. For more information refer to
   * Popper.js's flip [docs](https://popper.js.org/docs/v2/modifiers/flip/).
   *
   */
  flip: import_prop_types2.default.bool,
  /** @ignore */
  bsPrefix: import_prop_types2.default.string,
  /** @ignore */
  variant: import_prop_types2.default.string,
  /** @ignore */
  size: import_prop_types2.default.string
};
var DropdownButton = React33.forwardRef(({
  title,
  children,
  bsPrefix,
  rootCloseEvent,
  variant,
  size: size2,
  menuRole,
  renderMenuOnMount,
  disabled,
  href,
  id,
  menuVariant,
  flip,
  ...props
}, ref) => (0, import_jsx_runtime33.jsxs)(Dropdown_default2, {
  ref,
  ...props,
  children: [(0, import_jsx_runtime32.jsx)(DropdownToggle_default2, {
    id,
    href,
    size: size2,
    variant,
    disabled,
    childBsPrefix: bsPrefix,
    children: title
  }), (0, import_jsx_runtime32.jsx)(DropdownMenu_default2, {
    role: menuRole,
    renderOnMount: renderMenuOnMount,
    rootCloseEvent,
    variant: menuVariant,
    flip,
    children
  })]
}));
DropdownButton.displayName = "DropdownButton";
DropdownButton.propTypes = propTypes;
var DropdownButton_default = DropdownButton;

// node_modules/react-bootstrap/esm/Form.js
var import_classnames33 = __toESM(require_classnames());
var import_prop_types4 = __toESM(require_prop_types());
var React47 = __toESM(require_react());

// node_modules/react-bootstrap/esm/FormCheck.js
var import_classnames26 = __toESM(require_classnames());
var React38 = __toESM(require_react());
var import_react25 = __toESM(require_react());

// node_modules/react-bootstrap/esm/Feedback.js
var import_classnames23 = __toESM(require_classnames());
var React34 = __toESM(require_react());
var import_prop_types3 = __toESM(require_prop_types());
var import_jsx_runtime34 = __toESM(require_jsx_runtime());
var propTypes2 = {
  /**
   * Specify whether the feedback is for valid or invalid fields
   *
   * @type {('valid'|'invalid')}
   */
  type: import_prop_types3.default.string,
  /** Display feedback as a tooltip. */
  tooltip: import_prop_types3.default.bool,
  as: import_prop_types3.default.elementType
};
var Feedback = React34.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  ({
    as: Component2 = "div",
    className,
    type = "valid",
    tooltip = false,
    ...props
  }, ref) => (0, import_jsx_runtime34.jsx)(Component2, {
    ...props,
    ref,
    className: (0, import_classnames23.default)(className, `${type}-${tooltip ? "tooltip" : "feedback"}`)
  })
);
Feedback.displayName = "Feedback";
Feedback.propTypes = propTypes2;
var Feedback_default = Feedback;

// node_modules/react-bootstrap/esm/FormCheckInput.js
var import_classnames24 = __toESM(require_classnames());
var React36 = __toESM(require_react());
var import_react23 = __toESM(require_react());

// node_modules/react-bootstrap/esm/FormContext.js
var React35 = __toESM(require_react());
var FormContext = React35.createContext({});
var FormContext_default = FormContext;

// node_modules/react-bootstrap/esm/FormCheckInput.js
var import_jsx_runtime35 = __toESM(require_jsx_runtime());
var FormCheckInput = React36.forwardRef(({
  id,
  bsPrefix,
  className,
  type = "checkbox",
  isValid = false,
  isInvalid = false,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component2 = "input",
  ...props
}, ref) => {
  const {
    controlId
  } = (0, import_react23.useContext)(FormContext_default);
  bsPrefix = useBootstrapPrefix(bsPrefix, "form-check-input");
  return (0, import_jsx_runtime35.jsx)(Component2, {
    ...props,
    ref,
    type,
    id: id || controlId,
    className: (0, import_classnames24.default)(className, bsPrefix, isValid && "is-valid", isInvalid && "is-invalid")
  });
});
FormCheckInput.displayName = "FormCheckInput";
var FormCheckInput_default = FormCheckInput;

// node_modules/react-bootstrap/esm/FormCheckLabel.js
var import_classnames25 = __toESM(require_classnames());
var React37 = __toESM(require_react());
var import_react24 = __toESM(require_react());
var import_jsx_runtime36 = __toESM(require_jsx_runtime());
var FormCheckLabel = React37.forwardRef(({
  bsPrefix,
  className,
  htmlFor,
  ...props
}, ref) => {
  const {
    controlId
  } = (0, import_react24.useContext)(FormContext_default);
  bsPrefix = useBootstrapPrefix(bsPrefix, "form-check-label");
  return (0, import_jsx_runtime36.jsx)("label", {
    ...props,
    ref,
    htmlFor: htmlFor || controlId,
    className: (0, import_classnames25.default)(className, bsPrefix)
  });
});
FormCheckLabel.displayName = "FormCheckLabel";
var FormCheckLabel_default = FormCheckLabel;

// node_modules/react-bootstrap/esm/FormCheck.js
var import_jsx_runtime37 = __toESM(require_jsx_runtime());
var import_jsx_runtime38 = __toESM(require_jsx_runtime());
var import_jsx_runtime39 = __toESM(require_jsx_runtime());
var FormCheck = React38.forwardRef(({
  id,
  bsPrefix,
  bsSwitchPrefix,
  inline = false,
  reverse = false,
  disabled = false,
  isValid = false,
  isInvalid = false,
  feedbackTooltip = false,
  feedback,
  feedbackType,
  className,
  style,
  title = "",
  type = "checkbox",
  label,
  children,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as = "input",
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "form-check");
  bsSwitchPrefix = useBootstrapPrefix(bsSwitchPrefix, "form-switch");
  const {
    controlId
  } = (0, import_react25.useContext)(FormContext_default);
  const innerFormContext = (0, import_react25.useMemo)(() => ({
    controlId: id || controlId
  }), [controlId, id]);
  const hasLabel = !children && label != null && label !== false || hasChildOfType(children, FormCheckLabel_default);
  const input = (0, import_jsx_runtime37.jsx)(FormCheckInput_default, {
    ...props,
    type: type === "switch" ? "checkbox" : type,
    ref,
    isValid,
    isInvalid,
    disabled,
    as
  });
  return (0, import_jsx_runtime37.jsx)(FormContext_default.Provider, {
    value: innerFormContext,
    children: (0, import_jsx_runtime37.jsx)("div", {
      style,
      className: (0, import_classnames26.default)(className, hasLabel && bsPrefix, inline && `${bsPrefix}-inline`, reverse && `${bsPrefix}-reverse`, type === "switch" && bsSwitchPrefix),
      children: children || (0, import_jsx_runtime39.jsxs)(import_jsx_runtime38.Fragment, {
        children: [input, hasLabel && (0, import_jsx_runtime37.jsx)(FormCheckLabel_default, {
          title,
          children: label
        }), feedback && (0, import_jsx_runtime37.jsx)(Feedback_default, {
          type: feedbackType,
          tooltip: feedbackTooltip,
          children: feedback
        })]
      })
    })
  });
});
FormCheck.displayName = "FormCheck";
var FormCheck_default = Object.assign(FormCheck, {
  Input: FormCheckInput_default,
  Label: FormCheckLabel_default
});

// node_modules/react-bootstrap/esm/FormControl.js
var import_classnames27 = __toESM(require_classnames());
var React39 = __toESM(require_react());
var import_react26 = __toESM(require_react());
var import_warning3 = __toESM(require_warning());
var import_jsx_runtime40 = __toESM(require_jsx_runtime());
var FormControl = React39.forwardRef(({
  bsPrefix,
  type,
  size: size2,
  htmlSize,
  id,
  className,
  isValid = false,
  isInvalid = false,
  plaintext,
  readOnly,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component2 = "input",
  ...props
}, ref) => {
  const {
    controlId
  } = (0, import_react26.useContext)(FormContext_default);
  bsPrefix = useBootstrapPrefix(bsPrefix, "form-control");
  let classes;
  if (plaintext) {
    classes = {
      [`${bsPrefix}-plaintext`]: true
    };
  } else {
    classes = {
      [bsPrefix]: true,
      [`${bsPrefix}-${size2}`]: size2
    };
  }
  true ? (0, import_warning3.default)(controlId == null || !id, "`controlId` is ignored on `<FormControl>` when `id` is specified.") : void 0;
  return (0, import_jsx_runtime40.jsx)(Component2, {
    ...props,
    type,
    size: htmlSize,
    ref,
    readOnly,
    id: id || controlId,
    className: (0, import_classnames27.default)(className, classes, isValid && `is-valid`, isInvalid && `is-invalid`, type === "color" && `${bsPrefix}-color`)
  });
});
FormControl.displayName = "FormControl";
var FormControl_default = Object.assign(FormControl, {
  Feedback: Feedback_default
});

// node_modules/react-bootstrap/esm/FormFloating.js
var FormFloating_default = createWithBsPrefix("form-floating");

// node_modules/react-bootstrap/esm/FormGroup.js
var React40 = __toESM(require_react());
var import_react27 = __toESM(require_react());
var import_jsx_runtime41 = __toESM(require_jsx_runtime());
var FormGroup = React40.forwardRef(({
  controlId,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component2 = "div",
  ...props
}, ref) => {
  const context4 = (0, import_react27.useMemo)(() => ({
    controlId
  }), [controlId]);
  return (0, import_jsx_runtime41.jsx)(FormContext_default.Provider, {
    value: context4,
    children: (0, import_jsx_runtime41.jsx)(Component2, {
      ...props,
      ref
    })
  });
});
FormGroup.displayName = "FormGroup";
var FormGroup_default = FormGroup;

// node_modules/react-bootstrap/esm/FormLabel.js
var import_classnames28 = __toESM(require_classnames());
var React41 = __toESM(require_react());
var import_react28 = __toESM(require_react());
var import_warning4 = __toESM(require_warning());
var import_jsx_runtime42 = __toESM(require_jsx_runtime());
var FormLabel = React41.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component2 = "label",
  bsPrefix,
  column = false,
  visuallyHidden = false,
  className,
  htmlFor,
  ...props
}, ref) => {
  const {
    controlId
  } = (0, import_react28.useContext)(FormContext_default);
  bsPrefix = useBootstrapPrefix(bsPrefix, "form-label");
  let columnClass = "col-form-label";
  if (typeof column === "string")
    columnClass = `${columnClass} ${columnClass}-${column}`;
  const classes = (0, import_classnames28.default)(className, bsPrefix, visuallyHidden && "visually-hidden", column && columnClass);
  true ? (0, import_warning4.default)(controlId == null || !htmlFor, "`controlId` is ignored on `<FormLabel>` when `htmlFor` is specified.") : void 0;
  htmlFor = htmlFor || controlId;
  if (column)
    return (0, import_jsx_runtime42.jsx)(Col_default, {
      ref,
      as: "label",
      className: classes,
      htmlFor,
      ...props
    });
  return (
    // eslint-disable-next-line jsx-a11y/label-has-for, jsx-a11y/label-has-associated-control
    (0, import_jsx_runtime42.jsx)(Component2, {
      ref,
      className: classes,
      htmlFor,
      ...props
    })
  );
});
FormLabel.displayName = "FormLabel";
var FormLabel_default = FormLabel;

// node_modules/react-bootstrap/esm/FormRange.js
var import_classnames29 = __toESM(require_classnames());
var React42 = __toESM(require_react());
var import_react29 = __toESM(require_react());
var import_jsx_runtime43 = __toESM(require_jsx_runtime());
var FormRange = React42.forwardRef(({
  bsPrefix,
  className,
  id,
  ...props
}, ref) => {
  const {
    controlId
  } = (0, import_react29.useContext)(FormContext_default);
  bsPrefix = useBootstrapPrefix(bsPrefix, "form-range");
  return (0, import_jsx_runtime43.jsx)("input", {
    ...props,
    type: "range",
    ref,
    className: (0, import_classnames29.default)(className, bsPrefix),
    id: id || controlId
  });
});
FormRange.displayName = "FormRange";
var FormRange_default = FormRange;

// node_modules/react-bootstrap/esm/FormSelect.js
var import_classnames30 = __toESM(require_classnames());
var React43 = __toESM(require_react());
var import_react30 = __toESM(require_react());
var import_jsx_runtime44 = __toESM(require_jsx_runtime());
var FormSelect = React43.forwardRef(({
  bsPrefix,
  size: size2,
  htmlSize,
  className,
  isValid = false,
  isInvalid = false,
  id,
  ...props
}, ref) => {
  const {
    controlId
  } = (0, import_react30.useContext)(FormContext_default);
  bsPrefix = useBootstrapPrefix(bsPrefix, "form-select");
  return (0, import_jsx_runtime44.jsx)("select", {
    ...props,
    size: htmlSize,
    ref,
    className: (0, import_classnames30.default)(className, bsPrefix, size2 && `${bsPrefix}-${size2}`, isValid && `is-valid`, isInvalid && `is-invalid`),
    id: id || controlId
  });
});
FormSelect.displayName = "FormSelect";
var FormSelect_default = FormSelect;

// node_modules/react-bootstrap/esm/FormText.js
var import_classnames31 = __toESM(require_classnames());
var React44 = __toESM(require_react());
var import_jsx_runtime45 = __toESM(require_jsx_runtime());
var FormText = React44.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  ({
    bsPrefix,
    className,
    as: Component2 = "small",
    muted,
    ...props
  }, ref) => {
    bsPrefix = useBootstrapPrefix(bsPrefix, "form-text");
    return (0, import_jsx_runtime45.jsx)(Component2, {
      ...props,
      ref,
      className: (0, import_classnames31.default)(className, bsPrefix, muted && "text-muted")
    });
  }
);
FormText.displayName = "FormText";
var FormText_default = FormText;

// node_modules/react-bootstrap/esm/Switch.js
var React45 = __toESM(require_react());
var import_jsx_runtime46 = __toESM(require_jsx_runtime());
var Switch = React45.forwardRef((props, ref) => (0, import_jsx_runtime46.jsx)(FormCheck_default, {
  ...props,
  ref,
  type: "switch"
}));
Switch.displayName = "Switch";
var Switch_default = Object.assign(Switch, {
  Input: FormCheck_default.Input,
  Label: FormCheck_default.Label
});

// node_modules/react-bootstrap/esm/FloatingLabel.js
var import_classnames32 = __toESM(require_classnames());
var React46 = __toESM(require_react());
var import_jsx_runtime47 = __toESM(require_jsx_runtime());
var import_jsx_runtime48 = __toESM(require_jsx_runtime());
var FloatingLabel = React46.forwardRef(({
  bsPrefix,
  className,
  children,
  controlId,
  label,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "form-floating");
  return (0, import_jsx_runtime48.jsxs)(FormGroup_default, {
    ref,
    className: (0, import_classnames32.default)(className, bsPrefix),
    controlId,
    ...props,
    children: [children, (0, import_jsx_runtime47.jsx)("label", {
      htmlFor: controlId,
      children: label
    })]
  });
});
FloatingLabel.displayName = "FloatingLabel";
var FloatingLabel_default = FloatingLabel;

// node_modules/react-bootstrap/esm/Form.js
var import_jsx_runtime49 = __toESM(require_jsx_runtime());
var propTypes3 = {
  /**
   * The Form `ref` will be forwarded to the underlying element,
   * which means, unless it's rendered `as` a composite component,
   * it will be a DOM node, when resolved.
   *
   * @type {ReactRef}
   * @alias ref
   */
  _ref: import_prop_types4.default.any,
  /**
   * Mark a form as having been validated. Setting it to `true` will
   * toggle any validation styles on the forms elements.
   */
  validated: import_prop_types4.default.bool,
  as: import_prop_types4.default.elementType
};
var Form = React47.forwardRef(({
  className,
  validated,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component2 = "form",
  ...props
}, ref) => (0, import_jsx_runtime49.jsx)(Component2, {
  ...props,
  ref,
  className: (0, import_classnames33.default)(className, validated && "was-validated")
}));
Form.displayName = "Form";
Form.propTypes = propTypes3;
var Form_default = Object.assign(Form, {
  Group: FormGroup_default,
  Control: FormControl_default,
  Floating: FormFloating_default,
  Check: FormCheck_default,
  Switch: Switch_default,
  Label: FormLabel_default,
  Text: FormText_default,
  Range: FormRange_default,
  Select: FormSelect_default,
  FloatingLabel: FloatingLabel_default
});

// node_modules/react-bootstrap/esm/Image.js
var import_classnames34 = __toESM(require_classnames());
var React48 = __toESM(require_react());
var import_prop_types5 = __toESM(require_prop_types());
var import_jsx_runtime50 = __toESM(require_jsx_runtime());
var propTypes4 = {
  /**
   * @default 'img'
   */
  bsPrefix: import_prop_types5.default.string,
  /**
   * Sets image as fluid image.
   */
  fluid: import_prop_types5.default.bool,
  /**
   * Sets image shape as rounded.
   */
  rounded: import_prop_types5.default.bool,
  /**
   * Sets image shape as circle.
   */
  roundedCircle: import_prop_types5.default.bool,
  /**
   * Sets image shape as thumbnail.
   */
  thumbnail: import_prop_types5.default.bool
};
var Image = React48.forwardRef(({
  bsPrefix,
  className,
  fluid = false,
  rounded = false,
  roundedCircle = false,
  thumbnail = false,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "img");
  return (0, import_jsx_runtime50.jsx)("img", {
    // eslint-disable-line jsx-a11y/alt-text
    ref,
    ...props,
    className: (0, import_classnames34.default)(className, fluid && `${bsPrefix}-fluid`, rounded && `rounded`, roundedCircle && `rounded-circle`, thumbnail && `${bsPrefix}-thumbnail`)
  });
});
Image.displayName = "Image";
var Image_default = Image;

// node_modules/react-bootstrap/esm/FigureImage.js
var import_classnames35 = __toESM(require_classnames());
var React49 = __toESM(require_react());
var import_jsx_runtime51 = __toESM(require_jsx_runtime());
var FigureImage = React49.forwardRef(({
  className,
  fluid = true,
  ...props
}, ref) => (0, import_jsx_runtime51.jsx)(Image_default, {
  ref,
  ...props,
  fluid,
  className: (0, import_classnames35.default)(className, "figure-img")
}));
FigureImage.displayName = "FigureImage";
FigureImage.propTypes = propTypes4;
var FigureImage_default = FigureImage;

// node_modules/react-bootstrap/esm/FigureCaption.js
var FigureCaption = createWithBsPrefix("figure-caption", {
  Component: "figcaption"
});
var FigureCaption_default = FigureCaption;

// node_modules/react-bootstrap/esm/Figure.js
var Figure = createWithBsPrefix("figure", {
  Component: "figure"
});
var Figure_default = Object.assign(Figure, {
  Image: FigureImage_default,
  Caption: FigureCaption_default
});

// node_modules/react-bootstrap/esm/InputGroup.js
var import_classnames36 = __toESM(require_classnames());
var React50 = __toESM(require_react());
var import_react31 = __toESM(require_react());
var import_jsx_runtime52 = __toESM(require_jsx_runtime());
var InputGroupText = createWithBsPrefix("input-group-text", {
  Component: "span"
});
var InputGroupCheckbox = (props) => (0, import_jsx_runtime52.jsx)(InputGroupText, {
  children: (0, import_jsx_runtime52.jsx)(FormCheckInput_default, {
    type: "checkbox",
    ...props
  })
});
var InputGroupRadio = (props) => (0, import_jsx_runtime52.jsx)(InputGroupText, {
  children: (0, import_jsx_runtime52.jsx)(FormCheckInput_default, {
    type: "radio",
    ...props
  })
});
var InputGroup = React50.forwardRef(({
  bsPrefix,
  size: size2,
  hasValidation,
  className,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component2 = "div",
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "input-group");
  const contextValue = (0, import_react31.useMemo)(() => ({}), []);
  return (0, import_jsx_runtime52.jsx)(InputGroupContext_default.Provider, {
    value: contextValue,
    children: (0, import_jsx_runtime52.jsx)(Component2, {
      ref,
      ...props,
      className: (0, import_classnames36.default)(className, bsPrefix, size2 && `${bsPrefix}-${size2}`, hasValidation && "has-validation")
    })
  });
});
InputGroup.displayName = "InputGroup";
var InputGroup_default = Object.assign(InputGroup, {
  Text: InputGroupText,
  Radio: InputGroupRadio,
  Checkbox: InputGroupCheckbox
});

// node_modules/react-bootstrap/esm/ListGroup.js
var import_classnames38 = __toESM(require_classnames());
var React52 = __toESM(require_react());
var import_warning6 = __toESM(require_warning());

// node_modules/react-bootstrap/esm/ListGroupItem.js
var import_classnames37 = __toESM(require_classnames());
var React51 = __toESM(require_react());
var import_warning5 = __toESM(require_warning());
var import_jsx_runtime53 = __toESM(require_jsx_runtime());
var ListGroupItem = React51.forwardRef(({
  bsPrefix,
  active,
  disabled,
  eventKey,
  className,
  variant,
  action,
  as,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "list-group-item");
  const [navItemProps, meta] = useNavItem({
    key: makeEventKey(eventKey, props.href),
    active,
    ...props
  });
  const handleClick = useEventCallback((event) => {
    if (disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    navItemProps.onClick(event);
  });
  if (disabled && props.tabIndex === void 0) {
    props.tabIndex = -1;
    props["aria-disabled"] = true;
  }
  const Component2 = as || (action ? props.href ? "a" : "button" : "div");
  true ? (0, import_warning5.default)(as || !(!action && props.href), "`action=false` and `href` should not be used together.") : void 0;
  return (0, import_jsx_runtime53.jsx)(Component2, {
    ref,
    ...props,
    ...navItemProps,
    onClick: handleClick,
    className: (0, import_classnames37.default)(className, bsPrefix, meta.isActive && "active", disabled && "disabled", variant && `${bsPrefix}-${variant}`, action && `${bsPrefix}-action`)
  });
});
ListGroupItem.displayName = "ListGroupItem";
var ListGroupItem_default = ListGroupItem;

// node_modules/react-bootstrap/esm/ListGroup.js
var import_jsx_runtime54 = __toESM(require_jsx_runtime());
var ListGroup = React52.forwardRef((props, ref) => {
  const {
    className,
    bsPrefix: initialBsPrefix,
    variant,
    horizontal,
    numbered,
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as = "div",
    ...controlledProps
  } = useUncontrolled(props, {
    activeKey: "onSelect"
  });
  const bsPrefix = useBootstrapPrefix(initialBsPrefix, "list-group");
  let horizontalVariant;
  if (horizontal) {
    horizontalVariant = horizontal === true ? "horizontal" : `horizontal-${horizontal}`;
  }
  true ? (0, import_warning6.default)(!(horizontal && variant === "flush"), '`variant="flush"` and `horizontal` should not be used together.') : void 0;
  return (0, import_jsx_runtime54.jsx)(Nav_default, {
    ref,
    ...controlledProps,
    as,
    className: (0, import_classnames38.default)(className, bsPrefix, variant && `${bsPrefix}-${variant}`, horizontalVariant && `${bsPrefix}-${horizontalVariant}`, numbered && `${bsPrefix}-numbered`)
  });
});
ListGroup.displayName = "ListGroup";
var ListGroup_default = Object.assign(ListGroup, {
  Item: ListGroupItem_default
});

// node_modules/react-bootstrap/esm/Modal.js
var import_classnames41 = __toESM(require_classnames());

// node_modules/dom-helpers/esm/scrollbarSize.js
var size;
function scrollbarSize(recalc) {
  if (!size && size !== 0 || recalc) {
    if (canUseDOM_default) {
      var scrollDiv = document.createElement("div");
      scrollDiv.style.position = "absolute";
      scrollDiv.style.top = "-9999px";
      scrollDiv.style.width = "50px";
      scrollDiv.style.height = "50px";
      scrollDiv.style.overflow = "scroll";
      document.body.appendChild(scrollDiv);
      size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
    }
  }
  return size;
}

// node_modules/react-bootstrap/esm/Modal.js
var React55 = __toESM(require_react());
var import_react32 = __toESM(require_react());

// node_modules/react-bootstrap/esm/ModalBody.js
var ModalBody_default = createWithBsPrefix("modal-body");

// node_modules/react-bootstrap/esm/ModalDialog.js
var import_classnames39 = __toESM(require_classnames());
var React53 = __toESM(require_react());
var import_jsx_runtime55 = __toESM(require_jsx_runtime());
var ModalDialog = React53.forwardRef(({
  bsPrefix,
  className,
  contentClassName,
  centered,
  size: size2,
  fullscreen,
  children,
  scrollable,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "modal");
  const dialogClass = `${bsPrefix}-dialog`;
  const fullScreenClass = typeof fullscreen === "string" ? `${bsPrefix}-fullscreen-${fullscreen}` : `${bsPrefix}-fullscreen`;
  return (0, import_jsx_runtime55.jsx)("div", {
    ...props,
    ref,
    className: (0, import_classnames39.default)(dialogClass, className, size2 && `${bsPrefix}-${size2}`, centered && `${dialogClass}-centered`, scrollable && `${dialogClass}-scrollable`, fullscreen && fullScreenClass),
    children: (0, import_jsx_runtime55.jsx)("div", {
      className: (0, import_classnames39.default)(`${bsPrefix}-content`, contentClassName),
      children
    })
  });
});
ModalDialog.displayName = "ModalDialog";
var ModalDialog_default = ModalDialog;

// node_modules/react-bootstrap/esm/ModalFooter.js
var ModalFooter_default = createWithBsPrefix("modal-footer");

// node_modules/react-bootstrap/esm/ModalHeader.js
var import_classnames40 = __toESM(require_classnames());
var React54 = __toESM(require_react());
var import_jsx_runtime56 = __toESM(require_jsx_runtime());
var ModalHeader = React54.forwardRef(({
  bsPrefix,
  className,
  closeLabel = "Close",
  closeButton = false,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "modal-header");
  return (0, import_jsx_runtime56.jsx)(AbstractModalHeader_default, {
    ref,
    ...props,
    className: (0, import_classnames40.default)(className, bsPrefix),
    closeLabel,
    closeButton
  });
});
ModalHeader.displayName = "ModalHeader";
var ModalHeader_default = ModalHeader;

// node_modules/react-bootstrap/esm/ModalTitle.js
var DivStyledAsH42 = divWithClassName_default("h4");
var ModalTitle_default = createWithBsPrefix("modal-title", {
  Component: DivStyledAsH42
});

// node_modules/react-bootstrap/esm/Modal.js
var import_jsx_runtime57 = __toESM(require_jsx_runtime());
function DialogTransition(props) {
  return (0, import_jsx_runtime57.jsx)(Fade_default, {
    ...props,
    timeout: null
  });
}
function BackdropTransition(props) {
  return (0, import_jsx_runtime57.jsx)(Fade_default, {
    ...props,
    timeout: null
  });
}
var Modal = React55.forwardRef(({
  bsPrefix,
  className,
  style,
  dialogClassName,
  contentClassName,
  children,
  dialogAs: Dialog = ModalDialog_default,
  "aria-labelledby": ariaLabelledby,
  "aria-describedby": ariaDescribedby,
  "aria-label": ariaLabel,
  /* BaseModal props */
  show = false,
  animation = true,
  backdrop = true,
  keyboard = true,
  onEscapeKeyDown,
  onShow,
  onHide,
  container,
  autoFocus = true,
  enforceFocus = true,
  restoreFocus = true,
  restoreFocusOptions,
  onEntered,
  onExit,
  onExiting,
  onEnter,
  onEntering,
  onExited,
  backdropClassName,
  manager: propsManager,
  ...props
}, ref) => {
  const [modalStyle, setStyle] = (0, import_react32.useState)({});
  const [animateStaticModal, setAnimateStaticModal] = (0, import_react32.useState)(false);
  const waitingForMouseUpRef = (0, import_react32.useRef)(false);
  const ignoreBackdropClickRef = (0, import_react32.useRef)(false);
  const removeStaticModalAnimationRef = (0, import_react32.useRef)(null);
  const [modal, setModalRef] = useCallbackRef();
  const mergedRef = useMergedRefs_default(ref, setModalRef);
  const handleHide = useEventCallback(onHide);
  const isRTL = useIsRTL();
  bsPrefix = useBootstrapPrefix(bsPrefix, "modal");
  const modalContext = (0, import_react32.useMemo)(() => ({
    onHide: handleHide
  }), [handleHide]);
  function getModalManager() {
    if (propsManager)
      return propsManager;
    return getSharedManager({
      isRTL
    });
  }
  function updateDialogStyle(node) {
    if (!canUseDOM_default)
      return;
    const containerIsOverflowing = getModalManager().getScrollbarWidth() > 0;
    const modalIsOverflowing = node.scrollHeight > ownerDocument(node).documentElement.clientHeight;
    setStyle({
      paddingRight: containerIsOverflowing && !modalIsOverflowing ? scrollbarSize() : void 0,
      paddingLeft: !containerIsOverflowing && modalIsOverflowing ? scrollbarSize() : void 0
    });
  }
  const handleWindowResize = useEventCallback(() => {
    if (modal) {
      updateDialogStyle(modal.dialog);
    }
  });
  useWillUnmount(() => {
    removeEventListener_default(window, "resize", handleWindowResize);
    removeStaticModalAnimationRef.current == null ? void 0 : removeStaticModalAnimationRef.current();
  });
  const handleDialogMouseDown = () => {
    waitingForMouseUpRef.current = true;
  };
  const handleMouseUp = (e) => {
    if (waitingForMouseUpRef.current && modal && e.target === modal.dialog) {
      ignoreBackdropClickRef.current = true;
    }
    waitingForMouseUpRef.current = false;
  };
  const handleStaticModalAnimation = () => {
    setAnimateStaticModal(true);
    removeStaticModalAnimationRef.current = transitionEnd(modal.dialog, () => {
      setAnimateStaticModal(false);
    });
  };
  const handleStaticBackdropClick = (e) => {
    if (e.target !== e.currentTarget) {
      return;
    }
    handleStaticModalAnimation();
  };
  const handleClick = (e) => {
    if (backdrop === "static") {
      handleStaticBackdropClick(e);
      return;
    }
    if (ignoreBackdropClickRef.current || e.target !== e.currentTarget) {
      ignoreBackdropClickRef.current = false;
      return;
    }
    onHide == null ? void 0 : onHide();
  };
  const handleEscapeKeyDown = (e) => {
    if (keyboard) {
      onEscapeKeyDown == null ? void 0 : onEscapeKeyDown(e);
    } else {
      e.preventDefault();
      if (backdrop === "static") {
        handleStaticModalAnimation();
      }
    }
  };
  const handleEnter = (node, isAppearing) => {
    if (node) {
      updateDialogStyle(node);
    }
    onEnter == null ? void 0 : onEnter(node, isAppearing);
  };
  const handleExit = (node) => {
    removeStaticModalAnimationRef.current == null ? void 0 : removeStaticModalAnimationRef.current();
    onExit == null ? void 0 : onExit(node);
  };
  const handleEntering = (node, isAppearing) => {
    onEntering == null ? void 0 : onEntering(node, isAppearing);
    addEventListener_default(window, "resize", handleWindowResize);
  };
  const handleExited = (node) => {
    if (node)
      node.style.display = "";
    onExited == null ? void 0 : onExited(node);
    removeEventListener_default(window, "resize", handleWindowResize);
  };
  const renderBackdrop = (0, import_react32.useCallback)((backdropProps) => (0, import_jsx_runtime57.jsx)("div", {
    ...backdropProps,
    className: (0, import_classnames41.default)(`${bsPrefix}-backdrop`, backdropClassName, !animation && "show")
  }), [animation, backdropClassName, bsPrefix]);
  const baseModalStyle = {
    ...style,
    ...modalStyle
  };
  baseModalStyle.display = "block";
  const renderDialog = (dialogProps) => (0, import_jsx_runtime57.jsx)("div", {
    role: "dialog",
    ...dialogProps,
    style: baseModalStyle,
    className: (0, import_classnames41.default)(className, bsPrefix, animateStaticModal && `${bsPrefix}-static`, !animation && "show"),
    onClick: backdrop ? handleClick : void 0,
    onMouseUp: handleMouseUp,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledby,
    "aria-describedby": ariaDescribedby,
    children: (0, import_jsx_runtime57.jsx)(Dialog, {
      ...props,
      onMouseDown: handleDialogMouseDown,
      className: dialogClassName,
      contentClassName,
      children
    })
  });
  return (0, import_jsx_runtime57.jsx)(ModalContext_default.Provider, {
    value: modalContext,
    children: (0, import_jsx_runtime57.jsx)(Modal_default, {
      show,
      ref: mergedRef,
      backdrop,
      container,
      keyboard: true,
      autoFocus,
      enforceFocus,
      restoreFocus,
      restoreFocusOptions,
      onEscapeKeyDown: handleEscapeKeyDown,
      onShow,
      onHide,
      onEnter: handleEnter,
      onEntering: handleEntering,
      onEntered,
      onExit: handleExit,
      onExiting,
      onExited: handleExited,
      manager: getModalManager(),
      transition: animation ? DialogTransition : void 0,
      backdropTransition: animation ? BackdropTransition : void 0,
      renderBackdrop,
      renderDialog
    })
  });
});
Modal.displayName = "Modal";
var Modal_default2 = Object.assign(Modal, {
  Body: ModalBody_default,
  Header: ModalHeader_default,
  Title: ModalTitle_default,
  Footer: ModalFooter_default,
  Dialog: ModalDialog_default,
  TRANSITION_DURATION: 300,
  BACKDROP_TRANSITION_DURATION: 150
});

// node_modules/react-bootstrap/esm/NavDropdown.js
var import_classnames42 = __toESM(require_classnames());
var React56 = __toESM(require_react());
var import_jsx_runtime58 = __toESM(require_jsx_runtime());
var import_jsx_runtime59 = __toESM(require_jsx_runtime());
var NavDropdown = React56.forwardRef(({
  id,
  title,
  children,
  bsPrefix,
  className,
  rootCloseEvent,
  menuRole,
  disabled,
  active,
  renderMenuOnMount,
  menuVariant,
  ...props
}, ref) => {
  const navItemPrefix = useBootstrapPrefix(void 0, "nav-item");
  return (0, import_jsx_runtime59.jsxs)(Dropdown_default2, {
    ref,
    ...props,
    className: (0, import_classnames42.default)(className, navItemPrefix),
    children: [(0, import_jsx_runtime58.jsx)(Dropdown_default2.Toggle, {
      id,
      eventKey: null,
      active,
      disabled,
      childBsPrefix: bsPrefix,
      as: NavLink_default,
      children: title
    }), (0, import_jsx_runtime58.jsx)(Dropdown_default2.Menu, {
      role: menuRole,
      renderOnMount: renderMenuOnMount,
      rootCloseEvent,
      variant: menuVariant,
      children
    })]
  });
});
NavDropdown.displayName = "NavDropdown";
var NavDropdown_default = Object.assign(NavDropdown, {
  Item: Dropdown_default2.Item,
  ItemText: Dropdown_default2.ItemText,
  Divider: Dropdown_default2.Divider,
  Header: Dropdown_default2.Header
});

// node_modules/react-bootstrap/esm/Overlay.js
var React61 = __toESM(require_react());
var import_react36 = __toESM(require_react());
var import_classnames45 = __toESM(require_classnames());

// node_modules/@restart/ui/esm/Overlay.js
var React57 = __toESM(require_react());
var import_react_dom = __toESM(require_react_dom());
var import_react34 = __toESM(require_react());

// node_modules/@restart/ui/esm/useRootClose.js
var import_react33 = __toESM(require_react());
var noop4 = () => {
};
function useRootClose(ref, onRootClose, {
  disabled,
  clickTrigger
} = {}) {
  const onClose = onRootClose || noop4;
  useClickOutside_default(ref, onClose, {
    disabled,
    clickTrigger
  });
  const handleKeyUp = useEventCallback((e) => {
    if (isEscKey(e)) {
      onClose(e);
    }
  });
  (0, import_react33.useEffect)(() => {
    if (disabled || ref == null)
      return void 0;
    const doc = ownerDocument(getRefTarget(ref));
    let currentEvent = (doc.defaultView || window).event;
    const removeKeyupListener = listen_default(doc, "keyup", (e) => {
      if (e === currentEvent) {
        currentEvent = void 0;
        return;
      }
      handleKeyUp(e);
    });
    return () => {
      removeKeyupListener();
    };
  }, [ref, disabled, handleKeyUp]);
}
var useRootClose_default = useRootClose;

// node_modules/@restart/ui/esm/Overlay.js
var Overlay = React57.forwardRef((props, outerRef) => {
  const {
    flip,
    offset,
    placement,
    containerPadding,
    popperConfig = {},
    transition: Transition,
    runTransition
  } = props;
  const [rootElement, attachRef] = useCallbackRef();
  const [arrowElement, attachArrowRef] = useCallbackRef();
  const mergedRef = useMergedRefs_default(attachRef, outerRef);
  const container = useWaitForDOMRef(props.container);
  const target = useWaitForDOMRef(props.target);
  const [exited, setExited] = (0, import_react34.useState)(!props.show);
  const popper = usePopper_default(target, rootElement, mergeOptionsWithPopperConfig({
    placement,
    enableEvents: !!props.show,
    containerPadding: containerPadding || 5,
    flip,
    offset,
    arrowElement,
    popperConfig
  }));
  if (props.show && exited) {
    setExited(false);
  }
  const handleHidden = (...args) => {
    setExited(true);
    if (props.onExited) {
      props.onExited(...args);
    }
  };
  const mountOverlay = props.show || !exited;
  useRootClose_default(rootElement, props.onHide, {
    disabled: !props.rootClose || props.rootCloseDisabled,
    clickTrigger: props.rootCloseEvent
  });
  if (!mountOverlay) {
    return null;
  }
  const {
    onExit,
    onExiting,
    onEnter,
    onEntering,
    onEntered
  } = props;
  let child = props.children(Object.assign({}, popper.attributes.popper, {
    style: popper.styles.popper,
    ref: mergedRef
  }), {
    popper,
    placement,
    show: !!props.show,
    arrowProps: Object.assign({}, popper.attributes.arrow, {
      style: popper.styles.arrow,
      ref: attachArrowRef
    })
  });
  child = renderTransition(Transition, runTransition, {
    in: !!props.show,
    appear: true,
    mountOnEnter: true,
    unmountOnExit: true,
    children: child,
    onExit,
    onExiting,
    onExited: handleHidden,
    onEnter,
    onEntering,
    onEntered
  });
  return container ? import_react_dom.default.createPortal(child, container) : null;
});
Overlay.displayName = "Overlay";
var Overlay_default = Overlay;

// node_modules/react-bootstrap/esm/useOverlayOffset.js
var import_react35 = __toESM(require_react());

// node_modules/react-bootstrap/esm/Popover.js
var import_classnames43 = __toESM(require_classnames());
var React59 = __toESM(require_react());

// node_modules/react-bootstrap/esm/PopoverHeader.js
var PopoverHeader_default = createWithBsPrefix("popover-header");

// node_modules/react-bootstrap/esm/PopoverBody.js
var PopoverBody_default = createWithBsPrefix("popover-body");

// node_modules/react-bootstrap/esm/helpers.js
var React58 = __toESM(require_react());
function getOverlayDirection(placement, isRTL) {
  let bsDirection = placement;
  if (placement === "left") {
    bsDirection = isRTL ? "end" : "start";
  } else if (placement === "right") {
    bsDirection = isRTL ? "start" : "end";
  }
  return bsDirection;
}

// node_modules/react-bootstrap/esm/getInitialPopperStyles.js
function getInitialPopperStyles(position = "absolute") {
  return {
    position,
    top: "0",
    left: "0",
    opacity: "0",
    pointerEvents: "none"
  };
}

// node_modules/react-bootstrap/esm/Popover.js
var import_jsx_runtime60 = __toESM(require_jsx_runtime());
var import_jsx_runtime61 = __toESM(require_jsx_runtime());
var Popover = React59.forwardRef(({
  bsPrefix,
  placement = "right",
  className,
  style,
  children,
  body,
  arrowProps,
  hasDoneInitialMeasure,
  popper,
  show,
  ...props
}, ref) => {
  const decoratedBsPrefix = useBootstrapPrefix(bsPrefix, "popover");
  const isRTL = useIsRTL();
  const [primaryPlacement] = (placement == null ? void 0 : placement.split("-")) || [];
  const bsDirection = getOverlayDirection(primaryPlacement, isRTL);
  let computedStyle = style;
  if (show && !hasDoneInitialMeasure) {
    computedStyle = {
      ...style,
      ...getInitialPopperStyles(popper == null ? void 0 : popper.strategy)
    };
  }
  return (0, import_jsx_runtime61.jsxs)("div", {
    ref,
    role: "tooltip",
    style: computedStyle,
    "x-placement": primaryPlacement,
    className: (0, import_classnames43.default)(className, decoratedBsPrefix, primaryPlacement && `bs-popover-${bsDirection}`),
    ...props,
    children: [(0, import_jsx_runtime60.jsx)("div", {
      className: "popover-arrow",
      ...arrowProps
    }), body ? (0, import_jsx_runtime60.jsx)(PopoverBody_default, {
      children
    }) : children]
  });
});
var Popover_default = Object.assign(Popover, {
  Header: PopoverHeader_default,
  Body: PopoverBody_default,
  // Default popover offset.
  // https://github.com/twbs/bootstrap/blob/5c32767e0e0dbac2d934bcdee03719a65d3f1187/js/src/popover.js#L28
  POPPER_OFFSET: [0, 8]
});

// node_modules/react-bootstrap/esm/Tooltip.js
var import_classnames44 = __toESM(require_classnames());
var React60 = __toESM(require_react());
var import_jsx_runtime62 = __toESM(require_jsx_runtime());
var import_jsx_runtime63 = __toESM(require_jsx_runtime());
var Tooltip = React60.forwardRef(({
  bsPrefix,
  placement = "right",
  className,
  style,
  children,
  arrowProps,
  hasDoneInitialMeasure,
  popper,
  show,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "tooltip");
  const isRTL = useIsRTL();
  const [primaryPlacement] = (placement == null ? void 0 : placement.split("-")) || [];
  const bsDirection = getOverlayDirection(primaryPlacement, isRTL);
  let computedStyle = style;
  if (show && !hasDoneInitialMeasure) {
    computedStyle = {
      ...style,
      ...getInitialPopperStyles(popper == null ? void 0 : popper.strategy)
    };
  }
  return (0, import_jsx_runtime63.jsxs)("div", {
    ref,
    style: computedStyle,
    role: "tooltip",
    "x-placement": primaryPlacement,
    className: (0, import_classnames44.default)(className, bsPrefix, `bs-tooltip-${bsDirection}`),
    ...props,
    children: [(0, import_jsx_runtime62.jsx)("div", {
      className: "tooltip-arrow",
      ...arrowProps
    }), (0, import_jsx_runtime62.jsx)("div", {
      className: `${bsPrefix}-inner`,
      children
    })]
  });
});
Tooltip.displayName = "Tooltip";
var Tooltip_default = Object.assign(Tooltip, {
  // Default tooltip offset.
  // https://github.com/twbs/bootstrap/blob/beca2a6c7f6bc88b6449339fc76edcda832c59e5/js/src/tooltip.js#L65
  TOOLTIP_OFFSET: [0, 6]
});

// node_modules/react-bootstrap/esm/useOverlayOffset.js
function useOverlayOffset(customOffset) {
  const overlayRef = (0, import_react35.useRef)(null);
  const popoverClass = useBootstrapPrefix(void 0, "popover");
  const tooltipClass = useBootstrapPrefix(void 0, "tooltip");
  const offset = (0, import_react35.useMemo)(() => ({
    name: "offset",
    options: {
      offset: () => {
        if (customOffset) {
          return customOffset;
        }
        if (overlayRef.current) {
          if (hasClass(overlayRef.current, popoverClass)) {
            return Popover_default.POPPER_OFFSET;
          }
          if (hasClass(overlayRef.current, tooltipClass)) {
            return Tooltip_default.TOOLTIP_OFFSET;
          }
        }
        return [0, 0];
      }
    }
  }), [customOffset, popoverClass, tooltipClass]);
  return [overlayRef, [offset]];
}

// node_modules/react-bootstrap/esm/Overlay.js
var import_jsx_runtime64 = __toESM(require_jsx_runtime());
function wrapRefs(props, arrowProps) {
  const {
    ref
  } = props;
  const {
    ref: aRef
  } = arrowProps;
  props.ref = ref.__wrapped || (ref.__wrapped = (r) => ref(safeFindDOMNode(r)));
  arrowProps.ref = aRef.__wrapped || (aRef.__wrapped = (r) => aRef(safeFindDOMNode(r)));
}
var Overlay2 = React61.forwardRef(({
  children: overlay,
  transition = Fade_default,
  popperConfig = {},
  rootClose = false,
  placement = "top",
  show: outerShow = false,
  ...outerProps
}, outerRef) => {
  const popperRef = (0, import_react36.useRef)({});
  const [firstRenderedState, setFirstRenderedState] = (0, import_react36.useState)(null);
  const [ref, modifiers] = useOverlayOffset(outerProps.offset);
  const mergedRef = useMergedRefs_default(outerRef, ref);
  const actualTransition = transition === true ? Fade_default : transition || void 0;
  const handleFirstUpdate = useEventCallback((state) => {
    setFirstRenderedState(state);
    popperConfig == null ? void 0 : popperConfig.onFirstUpdate == null ? void 0 : popperConfig.onFirstUpdate(state);
  });
  useIsomorphicEffect_default(() => {
    if (firstRenderedState) {
      popperRef.current.scheduleUpdate == null ? void 0 : popperRef.current.scheduleUpdate();
    }
  }, [firstRenderedState]);
  (0, import_react36.useEffect)(() => {
    if (!outerShow) {
      setFirstRenderedState(null);
    }
  }, [outerShow]);
  return (0, import_jsx_runtime64.jsx)(Overlay_default, {
    ...outerProps,
    ref: mergedRef,
    popperConfig: {
      ...popperConfig,
      modifiers: modifiers.concat(popperConfig.modifiers || []),
      onFirstUpdate: handleFirstUpdate
    },
    transition: actualTransition,
    rootClose,
    placement,
    show: outerShow,
    children: (overlayProps, {
      arrowProps,
      popper: popperObj,
      show
    }) => {
      var _popperObj$state, _popperObj$state$modi;
      wrapRefs(overlayProps, arrowProps);
      const updatedPlacement = popperObj == null ? void 0 : popperObj.placement;
      const popper = Object.assign(popperRef.current, {
        state: popperObj == null ? void 0 : popperObj.state,
        scheduleUpdate: popperObj == null ? void 0 : popperObj.update,
        placement: updatedPlacement,
        outOfBoundaries: (popperObj == null ? void 0 : (_popperObj$state = popperObj.state) == null ? void 0 : (_popperObj$state$modi = _popperObj$state.modifiersData.hide) == null ? void 0 : _popperObj$state$modi.isReferenceHidden) || false,
        strategy: popperConfig.strategy
      });
      const hasDoneInitialMeasure = !!firstRenderedState;
      if (typeof overlay === "function")
        return overlay({
          ...overlayProps,
          placement: updatedPlacement,
          show,
          ...!transition && show && {
            className: "show"
          },
          popper,
          arrowProps,
          hasDoneInitialMeasure
        });
      return React61.cloneElement(overlay, {
        ...overlayProps,
        placement: updatedPlacement,
        arrowProps,
        popper,
        hasDoneInitialMeasure,
        className: (0, import_classnames45.default)(overlay.props.className, !transition && show && "show"),
        style: {
          ...overlay.props.style,
          ...overlayProps.style
        }
      });
    }
  });
});
Overlay2.displayName = "Overlay";
var Overlay_default2 = Overlay2;

// node_modules/react-bootstrap/esm/OverlayTrigger.js
var React62 = __toESM(require_react());
var import_react37 = __toESM(require_react());
var import_warning7 = __toESM(require_warning());
var import_jsx_runtime65 = __toESM(require_jsx_runtime());
var import_jsx_runtime66 = __toESM(require_jsx_runtime());
var import_jsx_runtime67 = __toESM(require_jsx_runtime());
function normalizeDelay(delay) {
  return delay && typeof delay === "object" ? delay : {
    show: delay,
    hide: delay
  };
}
function handleMouseOverOut(handler, args, relatedNative) {
  const [e] = args;
  const target = e.currentTarget;
  const related = e.relatedTarget || e.nativeEvent[relatedNative];
  if ((!related || related !== target) && !contains(target, related)) {
    handler(...args);
  }
}
function OverlayTrigger({
  trigger = ["hover", "focus"],
  overlay,
  children,
  popperConfig = {},
  show: propsShow,
  defaultShow = false,
  onToggle,
  delay: propsDelay,
  placement,
  flip = placement && placement.indexOf("auto") !== -1,
  ...props
}) {
  const triggerNodeRef = (0, import_react37.useRef)(null);
  const mergedRef = useMergedRefs_default(triggerNodeRef, children.ref);
  const timeout = useTimeout();
  const hoverStateRef = (0, import_react37.useRef)("");
  const [show, setShow] = useUncontrolledProp(propsShow, defaultShow, onToggle);
  const delay = normalizeDelay(propsDelay);
  const {
    onFocus,
    onBlur,
    onClick
  } = typeof children !== "function" ? React62.Children.only(children).props : {};
  const attachRef = (r) => {
    mergedRef(safeFindDOMNode(r));
  };
  const handleShow = (0, import_react37.useCallback)(() => {
    timeout.clear();
    hoverStateRef.current = "show";
    if (!delay.show) {
      setShow(true);
      return;
    }
    timeout.set(() => {
      if (hoverStateRef.current === "show")
        setShow(true);
    }, delay.show);
  }, [delay.show, setShow, timeout]);
  const handleHide = (0, import_react37.useCallback)(() => {
    timeout.clear();
    hoverStateRef.current = "hide";
    if (!delay.hide) {
      setShow(false);
      return;
    }
    timeout.set(() => {
      if (hoverStateRef.current === "hide")
        setShow(false);
    }, delay.hide);
  }, [delay.hide, setShow, timeout]);
  const handleFocus = (0, import_react37.useCallback)((...args) => {
    handleShow();
    onFocus == null ? void 0 : onFocus(...args);
  }, [handleShow, onFocus]);
  const handleBlur = (0, import_react37.useCallback)((...args) => {
    handleHide();
    onBlur == null ? void 0 : onBlur(...args);
  }, [handleHide, onBlur]);
  const handleClick = (0, import_react37.useCallback)((...args) => {
    setShow(!show);
    onClick == null ? void 0 : onClick(...args);
  }, [onClick, setShow, show]);
  const handleMouseOver = (0, import_react37.useCallback)((...args) => {
    handleMouseOverOut(handleShow, args, "fromElement");
  }, [handleShow]);
  const handleMouseOut = (0, import_react37.useCallback)((...args) => {
    handleMouseOverOut(handleHide, args, "toElement");
  }, [handleHide]);
  const triggers = trigger == null ? [] : [].concat(trigger);
  const triggerProps = {
    ref: attachRef
  };
  if (triggers.indexOf("click") !== -1) {
    triggerProps.onClick = handleClick;
  }
  if (triggers.indexOf("focus") !== -1) {
    triggerProps.onFocus = handleFocus;
    triggerProps.onBlur = handleBlur;
  }
  if (triggers.indexOf("hover") !== -1) {
    true ? (0, import_warning7.default)(triggers.length > 1, '[react-bootstrap] Specifying only the `"hover"` trigger limits the visibility of the overlay to just mouse users. Consider also including the `"focus"` trigger so that touch and keyboard only users can see the overlay as well.') : void 0;
    triggerProps.onMouseOver = handleMouseOver;
    triggerProps.onMouseOut = handleMouseOut;
  }
  return (0, import_jsx_runtime67.jsxs)(import_jsx_runtime66.Fragment, {
    children: [typeof children === "function" ? children(triggerProps) : (0, import_react37.cloneElement)(children, triggerProps), (0, import_jsx_runtime65.jsx)(Overlay_default2, {
      ...props,
      show,
      onHide: handleHide,
      flip,
      placement,
      popperConfig,
      target: triggerNodeRef.current,
      children: overlay
    })]
  });
}
var OverlayTrigger_default = OverlayTrigger;

// node_modules/react-bootstrap/esm/PageItem.js
var import_classnames46 = __toESM(require_classnames());
var React63 = __toESM(require_react());
var import_jsx_runtime68 = __toESM(require_jsx_runtime());
var import_jsx_runtime69 = __toESM(require_jsx_runtime());
var PageItem = React63.forwardRef(({
  active = false,
  disabled = false,
  className,
  style,
  activeLabel = "(current)",
  children,
  linkStyle,
  linkClassName,
  ...props
}, ref) => {
  const Component2 = active || disabled ? "span" : Anchor_default;
  return (0, import_jsx_runtime68.jsx)("li", {
    ref,
    style,
    className: (0, import_classnames46.default)(className, "page-item", {
      active,
      disabled
    }),
    children: (0, import_jsx_runtime69.jsxs)(Component2, {
      className: (0, import_classnames46.default)("page-link", linkClassName),
      style: linkStyle,
      ...props,
      children: [children, active && activeLabel && (0, import_jsx_runtime68.jsx)("span", {
        className: "visually-hidden",
        children: activeLabel
      })]
    })
  });
});
PageItem.displayName = "PageItem";
var PageItem_default = PageItem;
function createButton(name, defaultValue, label = name) {
  const Button = React63.forwardRef(({
    children,
    ...props
  }, ref) => (0, import_jsx_runtime69.jsxs)(PageItem, {
    ...props,
    ref,
    children: [(0, import_jsx_runtime68.jsx)("span", {
      "aria-hidden": "true",
      children: children || defaultValue
    }), (0, import_jsx_runtime68.jsx)("span", {
      className: "visually-hidden",
      children: label
    })]
  }));
  Button.displayName = name;
  return Button;
}
var First = createButton("First", "«");
var Prev = createButton("Prev", "‹", "Previous");
var Ellipsis = createButton("Ellipsis", "…", "More");
var Next = createButton("Next", "›");
var Last = createButton("Last", "»");

// node_modules/react-bootstrap/esm/Pagination.js
var import_classnames47 = __toESM(require_classnames());
var React64 = __toESM(require_react());
var import_jsx_runtime70 = __toESM(require_jsx_runtime());
var Pagination = React64.forwardRef(({
  bsPrefix,
  className,
  size: size2,
  ...props
}, ref) => {
  const decoratedBsPrefix = useBootstrapPrefix(bsPrefix, "pagination");
  return (0, import_jsx_runtime70.jsx)("ul", {
    ref,
    ...props,
    className: (0, import_classnames47.default)(className, decoratedBsPrefix, size2 && `${decoratedBsPrefix}-${size2}`)
  });
});
Pagination.displayName = "Pagination";
var Pagination_default = Object.assign(Pagination, {
  First,
  Prev,
  Ellipsis,
  Item: PageItem_default,
  Next,
  Last
});

// node_modules/react-bootstrap/esm/Placeholder.js
var React66 = __toESM(require_react());

// node_modules/react-bootstrap/esm/usePlaceholder.js
var import_classnames48 = __toESM(require_classnames());
function usePlaceholder({
  animation,
  bg,
  bsPrefix,
  size: size2,
  ...props
}) {
  bsPrefix = useBootstrapPrefix(bsPrefix, "placeholder");
  const [{
    className,
    ...colProps
  }] = useCol(props);
  return {
    ...colProps,
    className: (0, import_classnames48.default)(className, animation ? `${bsPrefix}-${animation}` : bsPrefix, size2 && `${bsPrefix}-${size2}`, bg && `bg-${bg}`)
  };
}

// node_modules/react-bootstrap/esm/PlaceholderButton.js
var React65 = __toESM(require_react());
var import_jsx_runtime71 = __toESM(require_jsx_runtime());
var PlaceholderButton = React65.forwardRef((props, ref) => {
  const placeholderProps = usePlaceholder(props);
  return (0, import_jsx_runtime71.jsx)(Button_default2, {
    ...placeholderProps,
    ref,
    disabled: true,
    tabIndex: -1
  });
});
PlaceholderButton.displayName = "PlaceholderButton";
var PlaceholderButton_default = PlaceholderButton;

// node_modules/react-bootstrap/esm/Placeholder.js
var import_jsx_runtime72 = __toESM(require_jsx_runtime());
var Placeholder = React66.forwardRef(({
  as: Component2 = "span",
  ...props
}, ref) => {
  const placeholderProps = usePlaceholder(props);
  return (0, import_jsx_runtime72.jsx)(Component2, {
    ...placeholderProps,
    ref
  });
});
Placeholder.displayName = "Placeholder";
var Placeholder_default = Object.assign(Placeholder, {
  Button: PlaceholderButton_default
});

// node_modules/react-bootstrap/esm/ProgressBar.js
var import_classnames49 = __toESM(require_classnames());
var React67 = __toESM(require_react());
var import_react38 = __toESM(require_react());
var import_jsx_runtime73 = __toESM(require_jsx_runtime());
var ROUND_PRECISION = 1e3;
function getPercentage(now, min, max) {
  const percentage = (now - min) / (max - min) * 100;
  return Math.round(percentage * ROUND_PRECISION) / ROUND_PRECISION;
}
function renderProgressBar({
  min,
  now,
  max,
  label,
  visuallyHidden,
  striped,
  animated,
  className,
  style,
  variant,
  bsPrefix,
  ...props
}, ref) {
  return (0, import_jsx_runtime73.jsx)("div", {
    ref,
    ...props,
    role: "progressbar",
    className: (0, import_classnames49.default)(className, `${bsPrefix}-bar`, {
      [`bg-${variant}`]: variant,
      [`${bsPrefix}-bar-animated`]: animated,
      [`${bsPrefix}-bar-striped`]: animated || striped
    }),
    style: {
      width: `${getPercentage(now, min, max)}%`,
      ...style
    },
    "aria-valuenow": now,
    "aria-valuemin": min,
    "aria-valuemax": max,
    children: visuallyHidden ? (0, import_jsx_runtime73.jsx)("span", {
      className: "visually-hidden",
      children: label
    }) : label
  });
}
var ProgressBar = React67.forwardRef(({
  isChild = false,
  ...rest
}, ref) => {
  const props = {
    min: 0,
    max: 100,
    animated: false,
    visuallyHidden: false,
    striped: false,
    ...rest
  };
  props.bsPrefix = useBootstrapPrefix(props.bsPrefix, "progress");
  if (isChild) {
    return renderProgressBar(props, ref);
  }
  const {
    min,
    now,
    max,
    label,
    visuallyHidden,
    striped,
    animated,
    bsPrefix,
    variant,
    className,
    children,
    ...wrapperProps
  } = props;
  return (0, import_jsx_runtime73.jsx)("div", {
    ref,
    ...wrapperProps,
    className: (0, import_classnames49.default)(className, bsPrefix),
    children: children ? map(children, (child) => (0, import_react38.cloneElement)(child, {
      isChild: true
    })) : renderProgressBar({
      min,
      now,
      max,
      label,
      visuallyHidden,
      striped,
      animated,
      bsPrefix,
      variant
    }, ref)
  });
});
ProgressBar.displayName = "ProgressBar";
var ProgressBar_default = ProgressBar;

// node_modules/react-bootstrap/esm/Ratio.js
var import_classnames50 = __toESM(require_classnames());
var React68 = __toESM(require_react());
var import_jsx_runtime74 = __toESM(require_jsx_runtime());
function toPercent(num) {
  if (num <= 0)
    return "100%";
  if (num < 1)
    return `${num * 100}%`;
  return `${num}%`;
}
var Ratio = React68.forwardRef(({
  bsPrefix,
  className,
  children,
  aspectRatio = "1x1",
  style,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "ratio");
  const isCustomRatio = typeof aspectRatio === "number";
  return (0, import_jsx_runtime74.jsx)("div", {
    ref,
    ...props,
    style: {
      ...style,
      ...isCustomRatio && {
        "--bs-aspect-ratio": toPercent(aspectRatio)
      }
    },
    className: (0, import_classnames50.default)(bsPrefix, className, !isCustomRatio && `${bsPrefix}-${aspectRatio}`),
    children: React68.Children.only(children)
  });
});
var Ratio_default = Ratio;

// node_modules/react-bootstrap/esm/Row.js
var import_classnames51 = __toESM(require_classnames());
var React69 = __toESM(require_react());
var import_jsx_runtime75 = __toESM(require_jsx_runtime());
var Row = React69.forwardRef(({
  bsPrefix,
  className,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component2 = "div",
  ...props
}, ref) => {
  const decoratedBsPrefix = useBootstrapPrefix(bsPrefix, "row");
  const breakpoints = useBootstrapBreakpoints();
  const minBreakpoint = useBootstrapMinBreakpoint();
  const sizePrefix = `${decoratedBsPrefix}-cols`;
  const classes = [];
  breakpoints.forEach((brkPoint) => {
    const propValue = props[brkPoint];
    delete props[brkPoint];
    let cols;
    if (propValue != null && typeof propValue === "object") {
      ({
        cols
      } = propValue);
    } else {
      cols = propValue;
    }
    const infix = brkPoint !== minBreakpoint ? `-${brkPoint}` : "";
    if (cols != null)
      classes.push(`${sizePrefix}${infix}-${cols}`);
  });
  return (0, import_jsx_runtime75.jsx)(Component2, {
    ref,
    ...props,
    className: (0, import_classnames51.default)(className, decoratedBsPrefix, ...classes)
  });
});
Row.displayName = "Row";
var Row_default = Row;

// node_modules/react-bootstrap/esm/Spinner.js
var import_classnames52 = __toESM(require_classnames());
var React70 = __toESM(require_react());
var import_jsx_runtime76 = __toESM(require_jsx_runtime());
var Spinner = React70.forwardRef(({
  bsPrefix,
  variant,
  animation = "border",
  size: size2,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component2 = "div",
  className,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "spinner");
  const bsSpinnerPrefix = `${bsPrefix}-${animation}`;
  return (0, import_jsx_runtime76.jsx)(Component2, {
    ref,
    ...props,
    className: (0, import_classnames52.default)(className, bsSpinnerPrefix, size2 && `${bsSpinnerPrefix}-${size2}`, variant && `text-${variant}`)
  });
});
Spinner.displayName = "Spinner";
var Spinner_default = Spinner;

// node_modules/react-bootstrap/esm/SplitButton.js
var React71 = __toESM(require_react());
var import_prop_types6 = __toESM(require_prop_types());
var import_jsx_runtime77 = __toESM(require_jsx_runtime());
var import_jsx_runtime78 = __toESM(require_jsx_runtime());
var propTypes5 = {
  /**
   * An html id attribute for the Toggle button, necessary for assistive technologies, such as screen readers.
   * @type {string}
   * @required
   */
  id: import_prop_types6.default.string,
  /**
   * Accessible label for the toggle; the value of `title` if not specified.
   */
  toggleLabel: import_prop_types6.default.string,
  /** An `href` passed to the non-toggle Button */
  href: import_prop_types6.default.string,
  /** An anchor `target` passed to the non-toggle Button */
  target: import_prop_types6.default.string,
  /** An `onClick` handler passed to the non-toggle Button */
  onClick: import_prop_types6.default.func,
  /** The content of the non-toggle Button.  */
  title: import_prop_types6.default.node.isRequired,
  /** A `type` passed to the non-toggle Button */
  type: import_prop_types6.default.string,
  /** Disables both Buttons  */
  disabled: import_prop_types6.default.bool,
  /**
   * Aligns the dropdown menu.
   *
   * _see [DropdownMenu](#dropdown-menu-props) for more details_
   *
   * @type {"start"|"end"|{ sm: "start"|"end" }|{ md: "start"|"end" }|{ lg: "start"|"end" }|{ xl: "start"|"end"}|{ xxl: "start"|"end"} }
   */
  align: alignPropType,
  /** An ARIA accessible role applied to the Menu component. When set to 'menu', The dropdown */
  menuRole: import_prop_types6.default.string,
  /** Whether to render the dropdown menu in the DOM before the first time it is shown */
  renderMenuOnMount: import_prop_types6.default.bool,
  /**
   *  Which event when fired outside the component will cause it to be closed.
   *
   * _see [DropdownMenu](#dropdown-menu-props) for more details_
   */
  rootCloseEvent: import_prop_types6.default.string,
  /**
   * Allow Dropdown to flip in case of an overlapping on the reference element. For more information refer to
   * Popper.js's flip [docs](https://popper.js.org/docs/v2/modifiers/flip/).
   *
   */
  flip: import_prop_types6.default.bool,
  /** @ignore */
  bsPrefix: import_prop_types6.default.string,
  /** @ignore */
  variant: import_prop_types6.default.string,
  /** @ignore */
  size: import_prop_types6.default.string
};
var SplitButton = React71.forwardRef(({
  id,
  bsPrefix,
  size: size2,
  variant,
  title,
  type = "button",
  toggleLabel = "Toggle dropdown",
  children,
  onClick,
  href,
  target,
  menuRole,
  renderMenuOnMount,
  rootCloseEvent,
  flip,
  ...props
}, ref) => (0, import_jsx_runtime78.jsxs)(Dropdown_default2, {
  ref,
  ...props,
  as: ButtonGroup_default,
  children: [(0, import_jsx_runtime77.jsx)(Button_default2, {
    size: size2,
    variant,
    disabled: props.disabled,
    bsPrefix,
    href,
    target,
    onClick,
    type,
    children: title
  }), (0, import_jsx_runtime77.jsx)(Dropdown_default2.Toggle, {
    split: true,
    id,
    size: size2,
    variant,
    disabled: props.disabled,
    childBsPrefix: bsPrefix,
    children: (0, import_jsx_runtime77.jsx)("span", {
      className: "visually-hidden",
      children: toggleLabel
    })
  }), (0, import_jsx_runtime77.jsx)(Dropdown_default2.Menu, {
    role: menuRole,
    renderOnMount: renderMenuOnMount,
    rootCloseEvent,
    flip,
    children
  })]
}));
SplitButton.propTypes = propTypes5;
SplitButton.displayName = "SplitButton";
var SplitButton_default = SplitButton;

// node_modules/react-bootstrap/esm/SSRProvider.js
var SSRProvider_default = $b5e257d569688ac6$export$9f8ac96af4b1b2ae;

// node_modules/react-bootstrap/esm/Stack.js
var import_classnames53 = __toESM(require_classnames());
var React72 = __toESM(require_react());

// node_modules/react-bootstrap/esm/createUtilityClasses.js
var import_prop_types7 = __toESM(require_prop_types());
function createUtilityClassName(utilityValues, breakpoints = DEFAULT_BREAKPOINTS, minBreakpoint = DEFAULT_MIN_BREAKPOINT) {
  const classes = [];
  Object.entries(utilityValues).forEach(([utilName, utilValue]) => {
    if (utilValue != null) {
      if (typeof utilValue === "object") {
        breakpoints.forEach((brkPoint) => {
          const bpValue = utilValue[brkPoint];
          if (bpValue != null) {
            const infix = brkPoint !== minBreakpoint ? `-${brkPoint}` : "";
            classes.push(`${utilName}${infix}-${bpValue}`);
          }
        });
      } else {
        classes.push(`${utilName}-${utilValue}`);
      }
    }
  });
  return classes;
}

// node_modules/react-bootstrap/esm/Stack.js
var import_jsx_runtime79 = __toESM(require_jsx_runtime());
var Stack = React72.forwardRef(({
  as: Component2 = "div",
  bsPrefix,
  className,
  direction,
  gap,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, direction === "horizontal" ? "hstack" : "vstack");
  const breakpoints = useBootstrapBreakpoints();
  const minBreakpoint = useBootstrapMinBreakpoint();
  return (0, import_jsx_runtime79.jsx)(Component2, {
    ...props,
    ref,
    className: (0, import_classnames53.default)(className, bsPrefix, ...createUtilityClassName({
      gap
    }, breakpoints, minBreakpoint))
  });
});
Stack.displayName = "Stack";
var Stack_default = Stack;

// node_modules/react-bootstrap/esm/Tab.js
var import_prop_types8 = __toESM(require_prop_types());
var React77 = __toESM(require_react());

// node_modules/react-bootstrap/esm/TabContainer.js
var React75 = __toESM(require_react());

// node_modules/@restart/ui/esm/Tabs.js
var React74 = __toESM(require_react());
var import_react40 = __toESM(require_react());

// node_modules/@restart/ui/esm/TabPanel.js
var React73 = __toESM(require_react());
var import_react39 = __toESM(require_react());
var import_jsx_runtime80 = __toESM(require_jsx_runtime());
var _excluded4 = ["active", "eventKey", "mountOnEnter", "transition", "unmountOnExit", "role", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited"];
var _excluded22 = ["activeKey", "getControlledId", "getControllerId"];
var _excluded32 = ["as"];
function _objectWithoutPropertiesLoose4(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function useTabPanel(_ref) {
  let {
    active,
    eventKey,
    mountOnEnter,
    transition,
    unmountOnExit,
    role = "tabpanel",
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited
  } = _ref, props = _objectWithoutPropertiesLoose4(_ref, _excluded4);
  const context4 = (0, import_react39.useContext)(TabContext_default);
  if (!context4)
    return [Object.assign({}, props, {
      role
    }), {
      eventKey,
      isActive: active,
      mountOnEnter,
      transition,
      unmountOnExit,
      onEnter,
      onEntering,
      onEntered,
      onExit,
      onExiting,
      onExited
    }];
  const {
    activeKey,
    getControlledId,
    getControllerId
  } = context4, rest = _objectWithoutPropertiesLoose4(context4, _excluded22);
  const key = makeEventKey(eventKey);
  return [Object.assign({}, props, {
    role,
    id: getControlledId(eventKey),
    "aria-labelledby": getControllerId(eventKey)
  }), {
    eventKey,
    isActive: active == null && key != null ? makeEventKey(activeKey) === key : active,
    transition: transition || rest.transition,
    mountOnEnter: mountOnEnter != null ? mountOnEnter : rest.mountOnEnter,
    unmountOnExit: unmountOnExit != null ? unmountOnExit : rest.unmountOnExit,
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited
  }];
}
var TabPanel = React73.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  (_ref2, ref) => {
    let {
      as: Component2 = "div"
    } = _ref2, props = _objectWithoutPropertiesLoose4(_ref2, _excluded32);
    const [tabPanelProps, {
      isActive,
      onEnter,
      onEntering,
      onEntered,
      onExit,
      onExiting,
      onExited,
      mountOnEnter,
      unmountOnExit,
      transition: Transition = NoopTransition_default
    }] = useTabPanel(props);
    return (0, import_jsx_runtime80.jsx)(TabContext_default.Provider, {
      value: null,
      children: (0, import_jsx_runtime80.jsx)(SelectableContext_default.Provider, {
        value: null,
        children: (0, import_jsx_runtime80.jsx)(Transition, {
          in: isActive,
          onEnter,
          onEntering,
          onEntered,
          onExit,
          onExiting,
          onExited,
          mountOnEnter,
          unmountOnExit,
          children: (0, import_jsx_runtime80.jsx)(Component2, Object.assign({}, tabPanelProps, {
            ref,
            hidden: !isActive,
            "aria-hidden": !isActive
          }))
        })
      })
    });
  }
);
TabPanel.displayName = "TabPanel";
var TabPanel_default = TabPanel;

// node_modules/@restart/ui/esm/Tabs.js
var import_jsx_runtime81 = __toESM(require_jsx_runtime());
var Tabs = (props) => {
  const {
    id: userId,
    generateChildId: generateCustomChildId,
    onSelect: propsOnSelect,
    activeKey: propsActiveKey,
    defaultActiveKey,
    transition,
    mountOnEnter,
    unmountOnExit,
    children
  } = props;
  const [activeKey, onSelect] = useUncontrolledProp2(propsActiveKey, defaultActiveKey, propsOnSelect);
  const id = $b5e257d569688ac6$export$619500959fc48b26(userId);
  const generateChildId = (0, import_react40.useMemo)(() => generateCustomChildId || ((key, type) => id ? `${id}-${type}-${key}` : null), [id, generateCustomChildId]);
  const tabContext = (0, import_react40.useMemo)(() => ({
    onSelect,
    activeKey,
    transition,
    mountOnEnter: mountOnEnter || false,
    unmountOnExit: unmountOnExit || false,
    getControlledId: (key) => generateChildId(key, "tabpane"),
    getControllerId: (key) => generateChildId(key, "tab")
  }), [onSelect, activeKey, transition, mountOnEnter, unmountOnExit, generateChildId]);
  return (0, import_jsx_runtime81.jsx)(TabContext_default.Provider, {
    value: tabContext,
    children: (0, import_jsx_runtime81.jsx)(SelectableContext_default.Provider, {
      value: onSelect || null,
      children
    })
  });
};
Tabs.Panel = TabPanel_default;
var Tabs_default = Tabs;

// node_modules/react-bootstrap/esm/getTabTransitionComponent.js
function getTabTransitionComponent(transition) {
  if (typeof transition === "boolean") {
    return transition ? Fade_default : NoopTransition_default;
  }
  return transition;
}

// node_modules/react-bootstrap/esm/TabContainer.js
var import_jsx_runtime82 = __toESM(require_jsx_runtime());
var TabContainer = ({
  transition,
  ...props
}) => (0, import_jsx_runtime82.jsx)(Tabs_default, {
  ...props,
  transition: getTabTransitionComponent(transition)
});
TabContainer.displayName = "TabContainer";
var TabContainer_default = TabContainer;

// node_modules/react-bootstrap/esm/TabContent.js
var TabContent_default = createWithBsPrefix("tab-content");

// node_modules/react-bootstrap/esm/TabPane.js
var import_classnames54 = __toESM(require_classnames());
var React76 = __toESM(require_react());
var import_jsx_runtime83 = __toESM(require_jsx_runtime());
var TabPane = React76.forwardRef(({
  bsPrefix,
  transition,
  ...props
}, ref) => {
  const [{
    className,
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component2 = "div",
    ...rest
  }, {
    isActive,
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited,
    mountOnEnter,
    unmountOnExit,
    transition: Transition = Fade_default
  }] = useTabPanel({
    ...props,
    transition: getTabTransitionComponent(transition)
  });
  const prefix = useBootstrapPrefix(bsPrefix, "tab-pane");
  return (0, import_jsx_runtime83.jsx)(TabContext_default.Provider, {
    value: null,
    children: (0, import_jsx_runtime83.jsx)(SelectableContext_default.Provider, {
      value: null,
      children: (0, import_jsx_runtime83.jsx)(Transition, {
        in: isActive,
        onEnter,
        onEntering,
        onEntered,
        onExit,
        onExiting,
        onExited,
        mountOnEnter,
        unmountOnExit,
        children: (0, import_jsx_runtime83.jsx)(Component2, {
          ...rest,
          ref,
          className: (0, import_classnames54.default)(className, prefix, isActive && "active")
        })
      })
    })
  });
});
TabPane.displayName = "TabPane";
var TabPane_default = TabPane;

// node_modules/react-bootstrap/esm/Tab.js
var import_jsx_runtime84 = __toESM(require_jsx_runtime());
var import_jsx_runtime85 = __toESM(require_jsx_runtime());
var propTypes6 = {
  eventKey: import_prop_types8.default.oneOfType([import_prop_types8.default.string, import_prop_types8.default.number]),
  /**
   * Content for the tab title.
   */
  title: import_prop_types8.default.node.isRequired,
  /**
   * The disabled state of the tab.
   */
  disabled: import_prop_types8.default.bool,
  /**
   * Class to pass to the underlying nav link.
   */
  tabClassName: import_prop_types8.default.string,
  /**
   * Object containing attributes to pass to underlying nav link.
   */
  tabAttrs: import_prop_types8.default.object
};
var Tab = () => {
  throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly");
  return (0, import_jsx_runtime85.jsx)(import_jsx_runtime84.Fragment, {});
};
Tab.propTypes = propTypes6;
var Tab_default = Object.assign(Tab, {
  Container: TabContainer_default,
  Content: TabContent_default,
  Pane: TabPane_default
});

// node_modules/react-bootstrap/esm/Table.js
var import_classnames55 = __toESM(require_classnames());
var React78 = __toESM(require_react());
var import_jsx_runtime86 = __toESM(require_jsx_runtime());
var Table = React78.forwardRef(({
  bsPrefix,
  className,
  striped,
  bordered,
  borderless,
  hover,
  size: size2,
  variant,
  responsive,
  ...props
}, ref) => {
  const decoratedBsPrefix = useBootstrapPrefix(bsPrefix, "table");
  const classes = (0, import_classnames55.default)(className, decoratedBsPrefix, variant && `${decoratedBsPrefix}-${variant}`, size2 && `${decoratedBsPrefix}-${size2}`, striped && `${decoratedBsPrefix}-${typeof striped === "string" ? `striped-${striped}` : "striped"}`, bordered && `${decoratedBsPrefix}-bordered`, borderless && `${decoratedBsPrefix}-borderless`, hover && `${decoratedBsPrefix}-hover`);
  const table = (0, import_jsx_runtime86.jsx)("table", {
    ...props,
    className: classes,
    ref
  });
  if (responsive) {
    let responsiveClass = `${decoratedBsPrefix}-responsive`;
    if (typeof responsive === "string") {
      responsiveClass = `${responsiveClass}-${responsive}`;
    }
    return (0, import_jsx_runtime86.jsx)("div", {
      className: responsiveClass,
      children: table
    });
  }
  return table;
});
var Table_default = Table;

// node_modules/react-bootstrap/esm/Tabs.js
var React79 = __toESM(require_react());
var import_jsx_runtime87 = __toESM(require_jsx_runtime());
var import_jsx_runtime88 = __toESM(require_jsx_runtime());
function getDefaultActiveKey(children) {
  let defaultActiveKey;
  forEach(children, (child) => {
    if (defaultActiveKey == null) {
      defaultActiveKey = child.props.eventKey;
    }
  });
  return defaultActiveKey;
}
function renderTab(child) {
  const {
    title,
    eventKey,
    disabled,
    tabClassName,
    tabAttrs,
    id
  } = child.props;
  if (title == null) {
    return null;
  }
  return (0, import_jsx_runtime87.jsx)(NavItem_default, {
    as: "li",
    role: "presentation",
    children: (0, import_jsx_runtime87.jsx)(NavLink_default, {
      as: "button",
      type: "button",
      eventKey,
      disabled,
      id,
      className: tabClassName,
      ...tabAttrs,
      children: title
    })
  });
}
var Tabs2 = (props) => {
  const {
    id,
    onSelect,
    transition,
    mountOnEnter = false,
    unmountOnExit = false,
    variant = "tabs",
    children,
    activeKey = getDefaultActiveKey(children),
    ...controlledProps
  } = useUncontrolled(props, {
    activeKey: "onSelect"
  });
  return (0, import_jsx_runtime88.jsxs)(Tabs_default, {
    id,
    activeKey,
    onSelect,
    transition: getTabTransitionComponent(transition),
    mountOnEnter,
    unmountOnExit,
    children: [(0, import_jsx_runtime87.jsx)(Nav_default2, {
      ...controlledProps,
      role: "tablist",
      as: "ul",
      variant,
      children: map(children, renderTab)
    }), (0, import_jsx_runtime87.jsx)(TabContent_default, {
      children: map(children, (child) => {
        const childProps = {
          ...child.props
        };
        delete childProps.title;
        delete childProps.disabled;
        delete childProps.tabClassName;
        delete childProps.tabAttrs;
        return (0, import_jsx_runtime87.jsx)(TabPane_default, {
          ...childProps
        });
      })
    })]
  });
};
Tabs2.displayName = "Tabs";
var Tabs_default2 = Tabs2;

// node_modules/react-bootstrap/esm/Toast.js
var React83 = __toESM(require_react());
var import_react42 = __toESM(require_react());
var import_classnames57 = __toESM(require_classnames());

// node_modules/react-bootstrap/esm/ToastFade.js
var React80 = __toESM(require_react());
var import_jsx_runtime89 = __toESM(require_jsx_runtime());
var fadeStyles = {
  [ENTERING]: "showing",
  [EXITING]: "showing show"
};
var ToastFade = React80.forwardRef((props, ref) => (0, import_jsx_runtime89.jsx)(Fade_default, {
  ...props,
  ref,
  transitionClasses: fadeStyles
}));
ToastFade.displayName = "ToastFade";
var ToastFade_default = ToastFade;

// node_modules/react-bootstrap/esm/ToastHeader.js
var import_classnames56 = __toESM(require_classnames());
var React82 = __toESM(require_react());
var import_react41 = __toESM(require_react());

// node_modules/react-bootstrap/esm/ToastContext.js
var React81 = __toESM(require_react());
var ToastContext = React81.createContext({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClose() {
  }
});
var ToastContext_default = ToastContext;

// node_modules/react-bootstrap/esm/ToastHeader.js
var import_jsx_runtime90 = __toESM(require_jsx_runtime());
var import_jsx_runtime91 = __toESM(require_jsx_runtime());
var ToastHeader = React82.forwardRef(({
  bsPrefix,
  closeLabel = "Close",
  closeVariant,
  closeButton = true,
  className,
  children,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "toast-header");
  const context4 = (0, import_react41.useContext)(ToastContext_default);
  const handleClick = useEventCallback((e) => {
    context4 == null ? void 0 : context4.onClose == null ? void 0 : context4.onClose(e);
  });
  return (0, import_jsx_runtime91.jsxs)("div", {
    ref,
    ...props,
    className: (0, import_classnames56.default)(bsPrefix, className),
    children: [children, closeButton && (0, import_jsx_runtime90.jsx)(CloseButton_default, {
      "aria-label": closeLabel,
      variant: closeVariant,
      onClick: handleClick,
      "data-dismiss": "toast"
    })]
  });
});
ToastHeader.displayName = "ToastHeader";
var ToastHeader_default = ToastHeader;

// node_modules/react-bootstrap/esm/ToastBody.js
var ToastBody_default = createWithBsPrefix("toast-body");

// node_modules/react-bootstrap/esm/Toast.js
var import_jsx_runtime92 = __toESM(require_jsx_runtime());
var Toast = React83.forwardRef(({
  bsPrefix,
  className,
  transition: Transition = ToastFade_default,
  show = true,
  animation = true,
  delay = 5e3,
  autohide = false,
  onClose,
  bg,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "toast");
  const delayRef = (0, import_react42.useRef)(delay);
  const onCloseRef = (0, import_react42.useRef)(onClose);
  (0, import_react42.useEffect)(() => {
    delayRef.current = delay;
    onCloseRef.current = onClose;
  }, [delay, onClose]);
  const autohideTimeout = useTimeout();
  const autohideToast = !!(autohide && show);
  const autohideFunc = (0, import_react42.useCallback)(() => {
    if (autohideToast) {
      onCloseRef.current == null ? void 0 : onCloseRef.current();
    }
  }, [autohideToast]);
  (0, import_react42.useEffect)(() => {
    autohideTimeout.set(autohideFunc, delayRef.current);
  }, [autohideTimeout, autohideFunc]);
  const toastContext = (0, import_react42.useMemo)(() => ({
    onClose
  }), [onClose]);
  const hasAnimation = !!(Transition && animation);
  const toast = (0, import_jsx_runtime92.jsx)("div", {
    ...props,
    ref,
    className: (0, import_classnames57.default)(bsPrefix, className, bg && `bg-${bg}`, !hasAnimation && (show ? "show" : "hide")),
    role: "alert",
    "aria-live": "assertive",
    "aria-atomic": "true"
  });
  return (0, import_jsx_runtime92.jsx)(ToastContext_default.Provider, {
    value: toastContext,
    children: hasAnimation && Transition ? (0, import_jsx_runtime92.jsx)(Transition, {
      in: show,
      unmountOnExit: true,
      children: toast
    }) : toast
  });
});
Toast.displayName = "Toast";
var Toast_default = Object.assign(Toast, {
  Body: ToastBody_default,
  Header: ToastHeader_default
});

// node_modules/react-bootstrap/esm/ToastContainer.js
var import_classnames58 = __toESM(require_classnames());
var React84 = __toESM(require_react());
var import_jsx_runtime93 = __toESM(require_jsx_runtime());
var positionClasses = {
  "top-start": "top-0 start-0",
  "top-center": "top-0 start-50 translate-middle-x",
  "top-end": "top-0 end-0",
  "middle-start": "top-50 start-0 translate-middle-y",
  "middle-center": "top-50 start-50 translate-middle",
  "middle-end": "top-50 end-0 translate-middle-y",
  "bottom-start": "bottom-0 start-0",
  "bottom-center": "bottom-0 start-50 translate-middle-x",
  "bottom-end": "bottom-0 end-0"
};
var ToastContainer = React84.forwardRef(({
  bsPrefix,
  position,
  containerPosition,
  className,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component2 = "div",
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "toast-container");
  return (0, import_jsx_runtime93.jsx)(Component2, {
    ref,
    ...props,
    className: (0, import_classnames58.default)(bsPrefix, position && positionClasses[position], containerPosition && `position-${containerPosition}`, className)
  });
});
ToastContainer.displayName = "ToastContainer";
var ToastContainer_default = ToastContainer;

// node_modules/react-bootstrap/esm/ToggleButton.js
var import_classnames59 = __toESM(require_classnames());
var React85 = __toESM(require_react());
var import_jsx_runtime94 = __toESM(require_jsx_runtime());
var import_jsx_runtime95 = __toESM(require_jsx_runtime());
var import_jsx_runtime96 = __toESM(require_jsx_runtime());
var noop5 = () => void 0;
var ToggleButton = React85.forwardRef(({
  bsPrefix,
  name,
  className,
  checked,
  type,
  onChange,
  value,
  disabled,
  id,
  inputRef,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "btn-check");
  return (0, import_jsx_runtime96.jsxs)(import_jsx_runtime95.Fragment, {
    children: [(0, import_jsx_runtime94.jsx)("input", {
      className: bsPrefix,
      name,
      type,
      value,
      ref: inputRef,
      autoComplete: "off",
      checked: !!checked,
      disabled: !!disabled,
      onChange: onChange || noop5,
      id
    }), (0, import_jsx_runtime94.jsx)(Button_default2, {
      ...props,
      ref,
      className: (0, import_classnames59.default)(className, disabled && "disabled"),
      type: void 0,
      role: void 0,
      as: "label",
      htmlFor: id
    })]
  });
});
ToggleButton.displayName = "ToggleButton";
var ToggleButton_default = ToggleButton;

// node_modules/react-bootstrap/esm/ToggleButtonGroup.js
var React86 = __toESM(require_react());
var import_invariant2 = __toESM(require_browser());
var import_jsx_runtime97 = __toESM(require_jsx_runtime());
var ToggleButtonGroup = React86.forwardRef((props, ref) => {
  const {
    children,
    type = "radio",
    name,
    value,
    onChange,
    vertical = false,
    ...controlledProps
  } = useUncontrolled(props, {
    value: "onChange"
  });
  const getValues = () => value == null ? [] : [].concat(value);
  const handleToggle = (inputVal, event) => {
    if (!onChange) {
      return;
    }
    const values = getValues();
    const isActive = values.indexOf(inputVal) !== -1;
    if (type === "radio") {
      if (!isActive)
        onChange(inputVal, event);
      return;
    }
    if (isActive) {
      onChange(values.filter((n) => n !== inputVal), event);
    } else {
      onChange([...values, inputVal], event);
    }
  };
  !(type !== "radio" || !!name) ? true ? (0, import_invariant2.default)(false, 'A `name` is required to group the toggle buttons when the `type` is set to "radio"') : (0, import_invariant2.default)(false) : void 0;
  return (0, import_jsx_runtime97.jsx)(ButtonGroup_default, {
    ...controlledProps,
    ref,
    vertical,
    children: map(children, (child) => {
      const values = getValues();
      const {
        value: childVal,
        onChange: childOnChange
      } = child.props;
      const handler = (e) => handleToggle(childVal, e);
      return React86.cloneElement(child, {
        type,
        name: child.name || name,
        checked: values.indexOf(childVal) !== -1,
        onChange: createChainedFunction_default(childOnChange, handler)
      });
    })
  });
});
var ToggleButtonGroup_default = Object.assign(ToggleButtonGroup, {
  Button: ToggleButton_default
});
export {
  Accordion_default as Accordion,
  AccordionButton_default as AccordionButton,
  AccordionCollapse_default as AccordionCollapse,
  AccordionContext_default as AccordionContext,
  Alert_default as Alert,
  Anchor_default2 as Anchor,
  Badge_default as Badge,
  Breadcrumb_default as Breadcrumb,
  BreadcrumbItem_default as BreadcrumbItem,
  Button_default2 as Button,
  ButtonGroup_default as ButtonGroup,
  ButtonToolbar_default as ButtonToolbar,
  Card_default as Card,
  CardGroup_default as CardGroup,
  CardImg_default as CardImg,
  Carousel_default as Carousel,
  CarouselItem_default as CarouselItem,
  CloseButton_default as CloseButton,
  Col_default as Col,
  Collapse_default as Collapse,
  Container_default as Container,
  Dropdown_default2 as Dropdown,
  DropdownButton_default as DropdownButton,
  Fade_default as Fade,
  Figure_default as Figure,
  FloatingLabel_default as FloatingLabel,
  Form_default as Form,
  FormCheck_default as FormCheck,
  FormControl_default as FormControl,
  FormFloating_default as FormFloating,
  FormGroup_default as FormGroup,
  FormLabel_default as FormLabel,
  FormSelect_default as FormSelect,
  FormText_default as FormText,
  Image_default as Image,
  InputGroup_default as InputGroup,
  ListGroup_default as ListGroup,
  ListGroupItem_default as ListGroupItem,
  Modal_default2 as Modal,
  ModalBody_default as ModalBody,
  ModalDialog_default as ModalDialog,
  ModalFooter_default as ModalFooter,
  ModalHeader_default as ModalHeader,
  ModalTitle_default as ModalTitle,
  Nav_default2 as Nav,
  NavDropdown_default as NavDropdown,
  NavItem_default as NavItem,
  NavLink_default as NavLink,
  Navbar_default as Navbar,
  NavbarBrand_default as NavbarBrand,
  Offcanvas_default as Offcanvas,
  OffcanvasBody_default as OffcanvasBody,
  OffcanvasHeader_default as OffcanvasHeader,
  OffcanvasTitle_default as OffcanvasTitle,
  Overlay_default2 as Overlay,
  OverlayTrigger_default as OverlayTrigger,
  PageItem_default as PageItem,
  Pagination_default as Pagination,
  Placeholder_default as Placeholder,
  PlaceholderButton_default as PlaceholderButton,
  Popover_default as Popover,
  PopoverBody_default as PopoverBody,
  PopoverHeader_default as PopoverHeader,
  ProgressBar_default as ProgressBar,
  Ratio_default as Ratio,
  Row_default as Row,
  SSRProvider_default as SSRProvider,
  Spinner_default as Spinner,
  SplitButton_default as SplitButton,
  Stack_default as Stack,
  Tab_default as Tab,
  TabContainer_default as TabContainer,
  TabContent_default as TabContent,
  TabPane_default as TabPane,
  Table_default as Table,
  Tabs_default2 as Tabs,
  ThemeProvider_default as ThemeProvider,
  Toast_default as Toast,
  ToastBody_default as ToastBody,
  ToastContainer_default as ToastContainer,
  ToastHeader_default as ToastHeader,
  ToggleButton_default as ToggleButton,
  ToggleButtonGroup_default as ToggleButtonGroup,
  Tooltip_default as Tooltip,
  useAccordionButton
};
//# sourceMappingURL=react-bootstrap.js.map
