import styled from 'styled-components';
import { MEDIA_QUERIES } from '@govuk-react-bjss/constants';
import { H2 } from '@govuk-react-bjss/heading';
import { spacing } from '@govuk-react-bjss/lib';
import { BORDER_COLOUR } from 'govuk-colours';

const SectionHeading = styled(H2)(
  {
    borderBottom: `1px solid ${BORDER_COLOUR}`,
    paddingBottom: spacing.simple(2),
    marginTop: 0,
    [MEDIA_QUERIES.DESKTOP]: {
      paddingBottom: spacing.simple(4),
    },
  },
  spacing.withWhiteSpace({ marginBottom: 7 })
);

export default SectionHeading;
