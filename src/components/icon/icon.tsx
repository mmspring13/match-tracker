import {FC, lazy, LazyExoticComponent, SVGProps} from "react";

const ToggleArrow = lazy(() => import('./assets/toggle-arrow.svg'));
const Refresh = lazy(() => import('./assets/refresh.svg'));
const AlertTriangle = lazy(() => import('./assets/alert-triangle.svg'));

export type IconProps = {
  icon: 'toggle-arrow' | 'refresh' | 'alert-triangle';
} & SVGProps<SVGSVGElement>;

const icons: Record<IconProps['icon'], LazyExoticComponent<FC<SVGProps<SVGSVGElement>>>> = {
  'toggle-arrow': ToggleArrow,
  'refresh': Refresh,
  'alert-triangle': AlertTriangle,
};

export const Icon = ({
  icon,
  ...svgProps
}: IconProps) => {
  const Component = icons[icon]
  if (!Component) {
    return null
  }
  return <Component {...svgProps} />;
};
