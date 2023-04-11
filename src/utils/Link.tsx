import React, { forwardRef } from "react";
import NextLink, { LinkProps } from "next/link";

export const LinkBehaviour = forwardRef<HTMLAnchorElement, LinkProps>(
  function LinkBehaviour(props, ref) {
    return <NextLink ref={ref} {...props} />;
  }
);
