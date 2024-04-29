import styled from 'styled-components';
import { link } from '@govuk-react-bjss/lib';

const Link = styled('a')(...link.common(), link.styleText);

export default Link;
