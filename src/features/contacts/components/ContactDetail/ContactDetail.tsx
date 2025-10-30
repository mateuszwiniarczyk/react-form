import { Wrapper, IconWrapper, Text } from './ContactDetail.styles';

type ContactDetailProps = {
  icon: React.ReactNode;
  text: string;
  variant?: 'blue' | 'green';
};

export const ContactDetail = ({
  icon,
  text,
  variant = 'blue',
}: ContactDetailProps) => (
  <Wrapper>
    <IconWrapper $variant={variant}>{icon}</IconWrapper>
    <Text title={text}>{text}</Text>
  </Wrapper>
);
