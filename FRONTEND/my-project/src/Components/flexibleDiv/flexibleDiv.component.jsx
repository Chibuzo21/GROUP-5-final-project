import styled from "styled-components";

export const FlexibleDiv = styled.div`
  height: ${({ height }) => (height ? height : "auto")};
  width: ${({ width }) => (width ? width : "100%")};
  background: ${({ background }) => (background ? background : "green")};
  display: ${({ display }) => (display ? display : "flex")};
  color: ${({ textColor }) => (textColor ? textColor : "#fff")};
  flex-direction: ${({ flexDirection }) =>
    flexDirection ? flexDirection : "row"};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "space-between"};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
  padding-bottom: ${({ paddingBottom }) =>
    paddingBottom ? paddingBottom : "0"};

   padding-top: ${({ paddingTop }) => (paddingTop ? paddingTop : "0")}
    //  ${({ boxedLayout }) => (boxedLayout ? "3%" : "0")};
  flex-wrap: ${({ flexWrap }) => (flexWrap ? flexWrap : "wrap")};
  flex: ${({ flex }) => (flex ? flex : "")};
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : "0")};
  margin-Bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : "0")};
  

  gap: ${({ gap }) => (gap ? gap : "")};
  img {
    width: ${(props) => props.ImageWidth && props.ImageWidth};
  }

  @media (max-width: 1020px) {
    padding: ${({ paddingVertical }) =>
      paddingVertical ? paddingVertical : "0rem"}
      ${({ boxedLayout }) => (boxedLayout ? "0%" : "0")};
    width: ${({ breakpointwidth }) => (breakpointwidth ? breakpointwidth : "")};
  }

  @media (max-width: 600px) {
    width: ${({ resWidth }) => (resWidth ? resWidth : "100%")};

  margin-top: ${({ resMarginTop }) => (resMarginTop ? resMarginTop : "0")};
    // background: red;
    flex-direction: ${({ resFlexDirection }) =>
      resFlexDirection ? resFlexDirection : "column"};
    justify-content: ${({ resjustifyContent }) =>
      resjustifyContent ? resjustifyContent : "space-between"};
    align-items: ${({ resalignItems }) =>
      resalignItems ? resalignItems : "center"};
    ${(props) =>
      !props.disablePadd &&
      `padding: ${({ paddingVertical }) =>
        paddingVertical ? paddingVertical : "1.6rem"} ${({ boxedLayout }) =>
        boxedLayout === true ? "5%" : boxedLayout === "remove" ? "" : "0"}`};
    flex-wrap: ${({ flexWrap }) => (flexWrap ? flexWrap : "wrap")};
  }

  @media (max-width: 320px) {
    flex-direction: ${({ resFlexDirection }) =>
      resFlexDirection ? resFlexDirection : "column"};

  };

  //  @media (max-width: 600px) {
// background:red;
// flex-wrap:wrap;
//       width: ${({ resWidth600 }) => (resWidth600 ? resWidth600 : "100%")};
//  gap: ${({ gap }) => (gap ? gap : "0")};

  // }
`;
