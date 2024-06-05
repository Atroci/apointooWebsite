import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `InfoSection`.
 */
export type InfoSectionProps = SliceComponentProps<Content.InfoSectionSlice>;

/**
 * Component for "InfoSection" Slices.
 */
const InfoSection = ({ slice }: InfoSectionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for info_section (variation: {slice.variation})
      Slices
    </section>
  );
};

export default InfoSection;
