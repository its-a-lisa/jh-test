// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wboNivZUXwuALwWQq1HqWe
// Component: cbrAOq2--gpq

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

import { BaseButton } from "@plasmicpkgs/react-aria/skinny/registerButton";

import {
  ThemeValue,
  useTheme
} from "../17_sds_foundation_global/PlasmicGlobalVariant__Theme"; // plasmic-import: yBTVTgAz2Co9/globalVariant
import { useScreenVariants as useScreenVariantsohEUf6Jd0EV8 } from "../17_sds_foundation_global/PlasmicGlobalVariant__Screen"; // plasmic-import: OhEUf6Jd0eV8/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_17_sds_foundation_global_css from "../17_sds_foundation_global/plasmic.module.css"; // plasmic-import: 3BHMWCYAenCmWb8ThbnzeF/projectcss
import plasmic_17_sds_foundation_system_css from "../17_sds_foundation_system/plasmic.module.css"; // plasmic-import: dNqcW7FYVqnkjtbdVGjyS8/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: wboNivZUXwuALwWQq1HqWe/projectcss
import sty from "./PlasmicBaseComponentsPopoverButton.module.css"; // plasmic-import: cbrAOq2--gpq/css

import CircleIcon from "./icons/PlasmicIcon__Circle"; // plasmic-import: 24mFtLAbdat_/icon
import ChevronDownIcon from "./icons/PlasmicIcon__ChevronDown"; // plasmic-import: ao7Scrvo-vPs/icon

createPlasmicElementProxy;

export type PlasmicBaseComponentsPopoverButton__VariantMembers = {
  compact: "compact";
  iconStart: "iconStart";
  iconEnd: "iconEnd";
};
export type PlasmicBaseComponentsPopoverButton__VariantsArgs = {
  compact?: SingleBooleanChoiceArg<"compact">;
  iconStart?: SingleBooleanChoiceArg<"iconStart">;
  iconEnd?: SingleBooleanChoiceArg<"iconEnd">;
};
type VariantPropType = keyof PlasmicBaseComponentsPopoverButton__VariantsArgs;
export const PlasmicBaseComponentsPopoverButton__VariantProps =
  new Array<VariantPropType>("compact", "iconStart", "iconEnd");

export type PlasmicBaseComponentsPopoverButton__ArgsType = {
  disabled?: boolean;
  submitsForm?: boolean;
  resetsForm?: boolean;
  ariaLabel?: string;
  onClick?: (event: any) => void;
  start?: React.ReactNode;
  label?: React.ReactNode;
  end?: React.ReactNode;
};
type ArgPropType = keyof PlasmicBaseComponentsPopoverButton__ArgsType;
export const PlasmicBaseComponentsPopoverButton__ArgProps =
  new Array<ArgPropType>(
    "disabled",
    "submitsForm",
    "resetsForm",
    "ariaLabel",
    "onClick",
    "start",
    "label",
    "end"
  );

export type PlasmicBaseComponentsPopoverButton__OverridesType = {
  root?: Flex__<typeof BaseButton>;
  border?: Flex__<"div">;
  interactionEffect?: Flex__<"div">;
  contentContainer?: Flex__<"div">;
};

export interface DefaultBaseComponentsPopoverButtonProps {
  disabled?: boolean;
  submitsForm?: boolean;
  resetsForm?: boolean;
  ariaLabel?: string;
  onClick?: (event: any) => void;
  start?: React.ReactNode;
  label?: React.ReactNode;
  end?: React.ReactNode;
  compact?: SingleBooleanChoiceArg<"compact">;
  iconStart?: SingleBooleanChoiceArg<"iconStart">;
  iconEnd?: SingleBooleanChoiceArg<"iconEnd">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicBaseComponentsPopoverButton__RenderFunc(props: {
  variants: PlasmicBaseComponentsPopoverButton__VariantsArgs;
  args: PlasmicBaseComponentsPopoverButton__ArgsType;
  overrides: PlasmicBaseComponentsPopoverButton__OverridesType;
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

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "iconStart",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.iconStart
      },
      {
        path: "iconEnd",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.iconEnd
      },
      {
        path: "compact",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.compact
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  const globalVariants = ensureGlobalVariants({
    theme: useTheme(),
    screen: useScreenVariantsohEUf6Jd0EV8()
  });

  const [$ccVariants, setDollarCcVariants] = React.useState<
    Record<string, boolean>
  >({
    hovered: false,
    pressed: false,
    focused: false,
    focusVisible: false,
    disabled: false
  });
  const updateVariant = React.useCallback(
    (changes: Record<string, boolean>) => {
      setDollarCcVariants(prev => {
        if (!Object.keys(changes).some(k => prev[k] !== changes[k])) {
          return prev;
        }
        return { ...prev, ...changes };
      });
    },
    []
  );

  return (
    <BaseButton
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      aria-label={args.ariaLabel}
      className={classNames(
        "__wab_instance",
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
          [plasmic_17_sds_foundation_global_css.global_theme_dark]: hasVariant(
            globalVariants,
            "theme",
            "dark"
          ),
          [plasmic_17_sds_foundation_global_css.global_theme_grayscale]:
            hasVariant(globalVariants, "theme", "grayscale"),
          [sty.rootcompact]: hasVariant($state, "compact", "compact"),
          [sty.rooticonEnd]: hasVariant($state, "iconEnd", "iconEnd"),
          [sty.rooticonStart]: hasVariant($state, "iconStart", "iconStart")
        }
      )}
      isDisabled={args.disabled}
      onPress={args.onClick}
      plasmicUpdateVariant={updateVariant}
      resetsForm={args.resetsForm}
      submitsForm={args.submitsForm}
    >
      <div
        data-plasmic-name={"border"}
        data-plasmic-override={overrides.border}
        className={classNames(projectcss.all, sty.border)}
      />

      <div
        data-plasmic-name={"interactionEffect"}
        data-plasmic-override={overrides.interactionEffect}
        className={classNames(projectcss.all, sty.interactionEffect)}
      />

      <Stack__
        as={"div"}
        data-plasmic-name={"contentContainer"}
        data-plasmic-override={overrides.contentContainer}
        hasGap={true}
        className={classNames(projectcss.all, sty.contentContainer, {
          [sty.contentContainercompact]: hasVariant(
            $state,
            "compact",
            "compact"
          )
        })}
      >
        <div
          className={classNames(projectcss.all, sty.freeBox__ps1OP, {
            [sty.freeBoxiconStart__ps1OPvKi1Z]: hasVariant(
              $state,
              "iconStart",
              "iconStart"
            )
          })}
        >
          {renderPlasmicSlot({
            defaultContents: (
              <CircleIcon
                className={classNames(projectcss.all, sty.svg___90Z6X)}
                role={"img"}
              />
            ),

            value: args.start,
            className: classNames(sty.slotTargetStart, {
              [sty.slotTargetStarticonStart]: hasVariant(
                $state,
                "iconStart",
                "iconStart"
              )
            })
          })}
        </div>
        {renderPlasmicSlot({
          defaultContents: (
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__rPBf9
              )}
            >
              {"Text"}
            </div>
          ),
          value: args.label,
          className: classNames(sty.slotTargetLabel, {
            [sty.slotTargetLabeliconEnd]: hasVariant(
              $state,
              "iconEnd",
              "iconEnd"
            ),
            [sty.slotTargetLabeliconStart]: hasVariant(
              $state,
              "iconStart",
              "iconStart"
            )
          })
        })}
        <div
          className={classNames(projectcss.all, sty.freeBox___0YnIj, {
            [sty.freeBoxiconEnd___0YnIj9P9Dz]: hasVariant(
              $state,
              "iconEnd",
              "iconEnd"
            )
          })}
        >
          {renderPlasmicSlot({
            defaultContents: (
              <ChevronDownIcon
                className={classNames(projectcss.all, sty.svg__waJGu)}
                role={"img"}
              />
            ),

            value: args.end,
            className: classNames(sty.slotTargetEnd, {
              [sty.slotTargetEndiconEnd]: hasVariant(
                $state,
                "iconEnd",
                "iconEnd"
              ),
              [sty.slotTargetEndiconStart]: hasVariant(
                $state,
                "iconStart",
                "iconStart"
              )
            })
          })}
        </div>
      </Stack__>
    </BaseButton>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "border", "interactionEffect", "contentContainer"],
  border: ["border"],
  interactionEffect: ["interactionEffect"],
  contentContainer: ["contentContainer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: typeof BaseButton;
  border: "div";
  interactionEffect: "div";
  contentContainer: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBaseComponentsPopoverButton__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBaseComponentsPopoverButton__VariantsArgs;
    args?: PlasmicBaseComponentsPopoverButton__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit< // Specify variants directly as props
    PlasmicBaseComponentsPopoverButton__VariantsArgs,
    ReservedPropsType
  > &
    /* Specify args directly as props*/ Omit<
      PlasmicBaseComponentsPopoverButton__ArgsType,
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
          internalArgPropNames: PlasmicBaseComponentsPopoverButton__ArgProps,
          internalVariantPropNames:
            PlasmicBaseComponentsPopoverButton__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicBaseComponentsPopoverButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBaseComponentsPopoverButton";
  } else {
    func.displayName = `PlasmicBaseComponentsPopoverButton.${nodeName}`;
  }
  return func;
}

export const PlasmicBaseComponentsPopoverButton = Object.assign(
  // Top-level PlasmicBaseComponentsPopoverButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    border: makeNodeComponent("border"),
    interactionEffect: makeNodeComponent("interactionEffect"),
    contentContainer: makeNodeComponent("contentContainer"),

    // Metadata about props expected for PlasmicBaseComponentsPopoverButton
    internalVariantProps: PlasmicBaseComponentsPopoverButton__VariantProps,
    internalArgProps: PlasmicBaseComponentsPopoverButton__ArgProps
  }
);

export default PlasmicBaseComponentsPopoverButton;
/* prettier-ignore-end */
