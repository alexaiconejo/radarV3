import {
  useBootstrapPrefix
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
  __toESM
} from "./chunk-AUZ3RYOM.js";

// node_modules/react-bootstrap/esm/Container.js
var import_classnames = __toESM(require_classnames());
var React = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());
var Container = React.forwardRef(({
  bsPrefix,
  fluid = false,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = "div",
  className,
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, "container");
  const suffix = typeof fluid === "string" ? `-${fluid}` : "-fluid";
  return (0, import_jsx_runtime.jsx)(Component, {
    ref,
    ...props,
    className: (0, import_classnames.default)(className, fluid ? `${prefix}${suffix}` : prefix)
  });
});
Container.displayName = "Container";
var Container_default = Container;

export {
  Container_default
};
//# sourceMappingURL=chunk-H65WVVD7.js.map
