import styled from 'styled-components';
import { MEDIA_QUERIES } from '@govuk-react-bjss/constants';
import { spacing, typography } from '@govuk-react-bjss/lib';

const TabsTitle = styled('h2')(typography.font({ size: 19 }), {
  marginBottom: spacing.simple(1),
  [MEDIA_QUERIES.TABLET]: {
    display: 'none',
  },
});

TabsTitle.defaultProps = {
  children: 'Contents',
};

export default TabsTitle;
