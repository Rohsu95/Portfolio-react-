import { styled } from "styled-components";

interface WrapperProps {
  id: string;
  children: React.ReactNode;
}

const SectionWrapper = ({ id, children }: WrapperProps) => {
  return <SectionContaioner id={id}>{children}</SectionContaioner>;
};
const SectionContaioner = styled.div`
  scroll-snap-align: start;
  overflow: hidden;
`;
export default SectionWrapper;
