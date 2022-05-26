import styled from 'styled-components';

export const ApiBrowserHeader = styled.div`
  font-size: ${(props : ApiBrowserHeaderProps) => props.small ? '20px' : '32px' };
  line-height: ${(props : ApiBrowserHeaderProps) => props.small ? '20px' : '32px' };
`
interface ApiBrowserHeaderProps {
  small?: boolean;
}
