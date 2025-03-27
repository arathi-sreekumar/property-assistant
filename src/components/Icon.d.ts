import React, { type SVGProps } from 'react';
import type { IconType } from '../types/icon-types';
export type IconProps = SVGProps<SVGSVGElement> & {
    icon: IconType;
};
export declare const Icon: React.FC<IconProps>;
