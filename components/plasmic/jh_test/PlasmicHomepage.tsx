// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wboNivZUXwuALwWQq1HqWe
// Component: Uf2krMk-vHwZ

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

import LayoutNavigationBar from "../../LayoutNavigationBar"; // plasmic-import: 9XazTiT1hZuq/component
import SectionsHero from "../../SectionsHero"; // plasmic-import: ozwBdrLzTKiW/component
import SectionsExlporationsContainer from "../../SectionsExlporationsContainer"; // plasmic-import: qbwUNgcK1xVZ/component
import SectionsLineup from "../../SectionsLineup"; // plasmic-import: 4l0V7ewAu7P-/component
import SectionsHighlightedCourses from "../../SectionsHighlightedCourses"; // plasmic-import: IX3qa1iiNnIn/component
import SectionsOfferings from "../../SectionsOfferings"; // plasmic-import: vV0rS8SjXr0F/component
import SectionsSellingPoints from "../../SectionsSellingPoints"; // plasmic-import: q-IzunE5qvnB/component
import LayoutFooter from "../../LayoutFooter"; // plasmic-import: p_5BOqwmCgXz/component

import {
  ThemeValue,
  useTheme
} from "../17_sds_foundation_global/PlasmicGlobalVariant__Theme"; // plasmic-import: yBTVTgAz2Co9/globalVariant
import { useScreenVariants as useScreenVariantsohEUf6Jd0EV8 } from "../17_sds_foundation_global/PlasmicGlobalVariant__Screen"; // plasmic-import: OhEUf6Jd0eV8/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_17_sds_foundation_global_css from "../17_sds_foundation_global/plasmic.module.css"; // plasmic-import: 3BHMWCYAenCmWb8ThbnzeF/projectcss
import plasmic_17_sds_foundation_system_css from "../17_sds_foundation_system/plasmic.module.css"; // plasmic-import: dNqcW7FYVqnkjtbdVGjyS8/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: wboNivZUXwuALwWQq1HqWe/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: Uf2krMk-vHwZ/css

import Icon25Icon from "./icons/PlasmicIcon__Icon25"; // plasmic-import: vjYO-Sm9E83Z/icon

createPlasmicElementProxy;

export type PlasmicHomepage__VariantMembers = {};
export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: Flex__<"div">;
  layoutNavigationBar?: Flex__<typeof LayoutNavigationBar>;
  freeBox?: Flex__<"div">;
  svg?: Flex__<"svg">;
  sectionsHero?: Flex__<typeof SectionsHero>;
  sectionsExlporationsContainer?: Flex__<typeof SectionsExlporationsContainer>;
  sectionsLineup?: Flex__<typeof SectionsLineup>;
  sectionsHighlightedCourses?: Flex__<typeof SectionsHighlightedCourses>;
  sectionsOfferings?: Flex__<typeof SectionsOfferings>;
  sectionsSellingPoints?: Flex__<typeof SectionsSellingPoints>;
  layoutFooter?: Flex__<typeof LayoutFooter>;
};

export interface DefaultHomepageProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;
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
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
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
                hasVariant(globalVariants, "theme", "grayscale"),
              [sty.rootglobal_theme_dark]: hasVariant(
                globalVariants,
                "theme",
                "dark"
              )
            }
          )}
        >
          <LayoutNavigationBar
            data-plasmic-name={"layoutNavigationBar"}
            data-plasmic-override={overrides.layoutNavigationBar}
            className={classNames("__wab_instance", sty.layoutNavigationBar, {
              [sty.layoutNavigationBarglobal_theme_dark]: hasVariant(
                globalVariants,
                "theme",
                "dark"
              )
            })}
          />

          <div
            data-plasmic-name={"freeBox"}
            data-plasmic-override={overrides.freeBox}
            className={classNames(projectcss.all, sty.freeBox)}
          >
            <Icon25Icon
              data-plasmic-name={"svg"}
              data-plasmic-override={overrides.svg}
              className={classNames(projectcss.all, sty.svg)}
              role={"img"}
            />
          </div>
          <SectionsHero
            data-plasmic-name={"sectionsHero"}
            data-plasmic-override={overrides.sectionsHero}
            className={classNames("__wab_instance", sty.sectionsHero, {
              [sty.sectionsHeroglobal_theme_dark]: hasVariant(
                globalVariants,
                "theme",
                "dark"
              )
            })}
          />

          <SectionsExlporationsContainer
            data-plasmic-name={"sectionsExlporationsContainer"}
            data-plasmic-override={overrides.sectionsExlporationsContainer}
            className={classNames(
              "__wab_instance",
              sty.sectionsExlporationsContainer,
              {
                [sty.sectionsExlporationsContainerglobal_theme_dark]:
                  hasVariant(globalVariants, "theme", "dark")
              }
            )}
          />

          <SectionsLineup
            data-plasmic-name={"sectionsLineup"}
            data-plasmic-override={overrides.sectionsLineup}
            className={classNames("__wab_instance", sty.sectionsLineup, {
              [sty.sectionsLineupglobal_theme_dark]: hasVariant(
                globalVariants,
                "theme",
                "dark"
              )
            })}
          />

          <SectionsHighlightedCourses
            data-plasmic-name={"sectionsHighlightedCourses"}
            data-plasmic-override={overrides.sectionsHighlightedCourses}
            className={classNames(
              "__wab_instance",
              sty.sectionsHighlightedCourses,
              {
                [sty.sectionsHighlightedCoursesglobal_theme_dark]: hasVariant(
                  globalVariants,
                  "theme",
                  "dark"
                )
              }
            )}
          />

          <SectionsOfferings
            data-plasmic-name={"sectionsOfferings"}
            data-plasmic-override={overrides.sectionsOfferings}
            className={classNames("__wab_instance", sty.sectionsOfferings, {
              [sty.sectionsOfferingsglobal_theme_dark]: hasVariant(
                globalVariants,
                "theme",
                "dark"
              )
            })}
          />

          <SectionsSellingPoints
            data-plasmic-name={"sectionsSellingPoints"}
            data-plasmic-override={overrides.sectionsSellingPoints}
            className={classNames("__wab_instance", sty.sectionsSellingPoints, {
              [sty.sectionsSellingPointsglobal_theme_dark]: hasVariant(
                globalVariants,
                "theme",
                "dark"
              )
            })}
          />

          <LayoutFooter
            data-plasmic-name={"layoutFooter"}
            data-plasmic-override={overrides.layoutFooter}
            className={classNames("__wab_instance", sty.layoutFooter, {
              [sty.layoutFooterglobal_theme_dark]: hasVariant(
                globalVariants,
                "theme",
                "dark"
              )
            })}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "layoutNavigationBar",
    "freeBox",
    "svg",
    "sectionsHero",
    "sectionsExlporationsContainer",
    "sectionsLineup",
    "sectionsHighlightedCourses",
    "sectionsOfferings",
    "sectionsSellingPoints",
    "layoutFooter"
  ],
  layoutNavigationBar: ["layoutNavigationBar"],
  freeBox: ["freeBox", "svg"],
  svg: ["svg"],
  sectionsHero: ["sectionsHero"],
  sectionsExlporationsContainer: ["sectionsExlporationsContainer"],
  sectionsLineup: ["sectionsLineup"],
  sectionsHighlightedCourses: ["sectionsHighlightedCourses"],
  sectionsOfferings: ["sectionsOfferings"],
  sectionsSellingPoints: ["sectionsSellingPoints"],
  layoutFooter: ["layoutFooter"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  layoutNavigationBar: typeof LayoutNavigationBar;
  freeBox: "div";
  svg: "svg";
  sectionsHero: typeof SectionsHero;
  sectionsExlporationsContainer: typeof SectionsExlporationsContainer;
  sectionsLineup: typeof SectionsLineup;
  sectionsHighlightedCourses: typeof SectionsHighlightedCourses;
  sectionsOfferings: typeof SectionsOfferings;
  sectionsSellingPoints: typeof SectionsSellingPoints;
  layoutFooter: typeof LayoutFooter;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomepage__ArgsType,
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
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    layoutNavigationBar: makeNodeComponent("layoutNavigationBar"),
    freeBox: makeNodeComponent("freeBox"),
    svg: makeNodeComponent("svg"),
    sectionsHero: makeNodeComponent("sectionsHero"),
    sectionsExlporationsContainer: makeNodeComponent(
      "sectionsExlporationsContainer"
    ),
    sectionsLineup: makeNodeComponent("sectionsLineup"),
    sectionsHighlightedCourses: makeNodeComponent("sectionsHighlightedCourses"),
    sectionsOfferings: makeNodeComponent("sectionsOfferings"),
    sectionsSellingPoints: makeNodeComponent("sectionsSellingPoints"),
    layoutFooter: makeNodeComponent("layoutFooter"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
