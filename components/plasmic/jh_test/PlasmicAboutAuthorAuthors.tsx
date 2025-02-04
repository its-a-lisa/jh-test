// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wboNivZUXwuALwWQq1HqWe
// Component: KutTkAx6IxM_

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import LayoutPageLayout from "../../LayoutPageLayout"; // plasmic-import: Zd-Ayv7Gl3LR/component

import {
  ThemeValue,
  useTheme
} from "../17_sds_foundation_global/PlasmicGlobalVariant__Theme"; // plasmic-import: yBTVTgAz2Co9/globalVariant
import { useScreenVariants as useScreenVariantsohEUf6Jd0EV8 } from "../17_sds_foundation_global/PlasmicGlobalVariant__Screen"; // plasmic-import: OhEUf6Jd0eV8/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_17_sds_foundation_global_css from "../17_sds_foundation_global/plasmic.module.css"; // plasmic-import: 3BHMWCYAenCmWb8ThbnzeF/projectcss
import plasmic_17_sds_foundation_system_css from "../17_sds_foundation_system/plasmic.module.css"; // plasmic-import: dNqcW7FYVqnkjtbdVGjyS8/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: wboNivZUXwuALwWQq1HqWe/projectcss
import sty from "./PlasmicAboutAuthorAuthors.module.css"; // plasmic-import: KutTkAx6IxM_/css

createPlasmicElementProxy;

export type PlasmicAboutAuthorAuthors__VariantMembers = {};
export type PlasmicAboutAuthorAuthors__VariantsArgs = {};
type VariantPropType = keyof PlasmicAboutAuthorAuthors__VariantsArgs;
export const PlasmicAboutAuthorAuthors__VariantProps =
  new Array<VariantPropType>();

export type PlasmicAboutAuthorAuthors__ArgsType = {
  authorName?: string;
};
type ArgPropType = keyof PlasmicAboutAuthorAuthors__ArgsType;
export const PlasmicAboutAuthorAuthors__ArgProps = new Array<ArgPropType>(
  "authorName"
);

export type PlasmicAboutAuthorAuthors__OverridesType = {
  root?: Flex__<"div">;
  layoutPageLayout?: Flex__<typeof LayoutPageLayout>;
};

export interface DefaultAboutAuthorAuthorsProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicAboutAuthorAuthors__RenderFunc(props: {
  variants: PlasmicAboutAuthorAuthors__VariantsArgs;
  args: PlasmicAboutAuthorAuthors__ArgsType;
  overrides: PlasmicAboutAuthorAuthors__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const globalVariants = ensureGlobalVariants({
    theme: useTheme(),
    screen: useScreenVariantsohEUf6Jd0EV8()
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <Stack__
          as={"div"}
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          hasGap={true}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_17_sds_foundation_global_css.plasmic_tokens,
            plasmic_17_sds_foundation_system_css.plasmic_tokens,
            sty.root,
            {
              [plasmic_17_sds_foundation_global_css.global_theme_darkGrayscale]:
                hasVariant(globalVariants, "theme", "darkGrayscale"),
              [plasmic_17_sds_foundation_global_css.global_theme_dark]:
                hasVariant(globalVariants, "theme", "dark"),
              [plasmic_17_sds_foundation_global_css.global_theme_grayscale]:
                hasVariant(globalVariants, "theme", "grayscale")
            }
          )}
        >
          <LayoutPageLayout
            data-plasmic-name={"layoutPageLayout"}
            data-plasmic-override={overrides.layoutPageLayout}
            className={classNames("__wab_instance", sty.layoutPageLayout)}
          />
        </Stack__>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "layoutPageLayout"],
  layoutPageLayout: ["layoutPageLayout"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  layoutPageLayout: typeof LayoutPageLayout;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAboutAuthorAuthors__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAboutAuthorAuthors__VariantsArgs;
    args?: PlasmicAboutAuthorAuthors__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAboutAuthorAuthors__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicAboutAuthorAuthors__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicAboutAuthorAuthors__ArgProps,
          internalVariantPropNames: PlasmicAboutAuthorAuthors__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicAboutAuthorAuthors__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAboutAuthorAuthors";
  } else {
    func.displayName = `PlasmicAboutAuthorAuthors.${nodeName}`;
  }
  return func;
}

export const PlasmicAboutAuthorAuthors = Object.assign(
  // Top-level PlasmicAboutAuthorAuthors renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    layoutPageLayout: makeNodeComponent("layoutPageLayout"),

    // Metadata about props expected for PlasmicAboutAuthorAuthors
    internalVariantProps: PlasmicAboutAuthorAuthors__VariantProps,
    internalArgProps: PlasmicAboutAuthorAuthors__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicAboutAuthorAuthors;
/* prettier-ignore-end */
