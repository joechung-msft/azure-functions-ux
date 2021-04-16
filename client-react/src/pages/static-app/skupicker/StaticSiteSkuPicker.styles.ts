import { style } from 'typestyle';
import { ThemeExtended } from '../../../theme/SemanticColorsExtended';

const gridItemPadding = '12px';

export const gridContextPaneContainerStyle = style({
  display: 'inline-grid',
  gridTemplateColumns: 'auto auto auto',
  padding: '10px 30px',
  paddingBottom: '75px',
});

export const gridContainerStyle = style({
  display: 'inline-grid',
  gridTemplateColumns: 'auto auto auto',
  padding: '10px 30px',
});

export const radioButtonStyle = style({
  padding: 0,
});

export const planFeatureItemStyle = (theme: ThemeExtended): string =>
  style({
    border: `1px solid ${theme.semanticColors.bodyDivider}`,
    padding: `${gridItemPadding} 20px`,
    textAlign: 'center',
    fontWeight: 'bold',
  });

export const unselectedGridItemStyle = (theme: ThemeExtended): string =>
  style({
    border: `1px solid ${theme.semanticColors.bodyDivider}`,
    padding: gridItemPadding,
    textAlign: 'center',
  });

export const selectedGridItemStyle = (theme: ThemeExtended): string =>
  style({
    borderTop: `1px solid ${theme.semanticColors.bodyDivider}`,
    borderBottom: `1px solid ${theme.semanticColors.bodyDivider}`,
    borderLeft: `1px solid ${theme.semanticColors.buttonPressed}`,
    borderRight: `1px solid ${theme.semanticColors.buttonPressed}`,
    padding: gridItemPadding,
    textAlign: 'center',
  });

export const gridBottomSelectedItemStyle = (theme: ThemeExtended): string =>
  style({
    borderTop: `1px solid ${theme.semanticColors.bodyDivider}`,
    borderBottom: `1px solid ${theme.semanticColors.buttonPressed}`,
    borderLeft: `1px solid ${theme.semanticColors.buttonPressed}`,
    borderRight: `1px solid ${theme.semanticColors.buttonPressed}`,
    padding: gridItemPadding,
    textAlign: 'center',
  });

export const skuTitleStyle = style({
  paddingTop: '0px',
  textAlign: 'center',
  fontWeight: 'bold',
});

export const skuDescriptionStyle = style({
  paddingBottom: '30px',
  textAlign: 'center',
});

export const skuTitleUnselectedStyle = (theme: ThemeExtended): string =>
  style({
    border: `1px solid ${theme.semanticColors.bodyDivider}`,
    textAlign: 'center',
    padding: gridItemPadding,
  });

export const skuTitleSelectedStyle = (theme: ThemeExtended): string =>
  style({
    borderTop: `1px solid ${theme.semanticColors.buttonPressed}`,
    borderBottom: `1px solid ${theme.semanticColors.bodyDivider}`,
    borderLeft: `1px solid ${theme.semanticColors.buttonPressed}`,
    borderRight: `1px solid ${theme.semanticColors.buttonPressed}`,
    padding: gridItemPadding,
    textAlign: 'center',
  });

export const planFeaturesTitleStyle = (theme: ThemeExtended): string =>
  style({
    border: `1px solid ${theme.semanticColors.bodyDivider}`,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingTop: '73px',
  });

export const iconStyle = (theme: ThemeExtended): string =>
  style({
    width: '20px',
    height: '20px',
    verticalAlign: 'middle',
    marginRight: '6px',
    fontWeight: 'bold',
    fontSize: '18px',
    color: theme.palette.green,
  });

export const descriptionStyle = style({
  width: '100%',
  padding: '10px 30px',
});

export const titleWithPaddingStyle = style({
  padding: '0px 30px',
  paddingTop: '0px',
  margin: '10px 0px',
  fontSize: 24,
});

export const smallerTitleWithPaddingStyle = style({
  padding: '0px 30px',
  margin: '10px 0px',
  fontSize: 20,
  fontWeight: 'normal',
});

export const buttonFooterStyle = (theme: ThemeExtended): string =>
  style({
    backgroundColor: `${theme.semanticColors.background}`,
    borderTop: `1px solid ${theme.semanticColors.bodyDivider}`,
    padding: '16px',
    boxSizing: 'border-box',
    position: 'fixed',
    bottom: 0,
    zIndex: 1,
    width: '100%',
    height: '65px',
  });