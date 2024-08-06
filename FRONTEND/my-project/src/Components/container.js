import { styled } from "styled-components";

export const Container = styled.div`
  background-color: ${({ background }) =>
    background ? background : "transparent"};
  height: ${({ height }) => (height ? height : "auto")};
  width: ${({ width }) => (width ? width : "100%")};

  display: ${({ display }) => (display ? display : "flex")};
  color: ${({ textColor }) => (textColor ? textColor : "#fff")};
  flex-direction: ${({ flexDirection }) =>
    flexDirection ? flexDirection : "row"};
  overflow: hidden;
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "center"};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : "0px")};
  // margin-bottom: ${({ marginBottom }) =>
    marginBottom ? marginBottom : "80px"};
  padding-top: ${({ paddingTop }) => (paddingTop ? paddingTop : "0px")};

  @media (max-width: 1090px) {
    height: ${({ height }) => (height ? height : "auto")};
    width: ${({ md1090width }) => (md1090width ? md1090width : "100%")};

    display: ${({ display }) => (display ? display : "flex")};
    color: ${({ textColor }) => (textColor ? textColor : "#fff")};
    flex-direction: ${({ flexDirection }) =>
      flexDirection ? flexDirection : "row"};
    justify-content: ${({ justifyContent }) =>
      justifyContent ? justifyContent : "center"};
    align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
  }
  @media (max-width: 600px) {
    height: ${({ height }) => (height ? height : "auto")};
    width: ${({ md1090width }) => (md1090width ? md1090width : "100%")};

    display: ${({ display }) => (display ? display : "flex")};
    color: ${({ textColor }) => (textColor ? textColor : "#fff")};
    flex-direction: ${({ flexDirection }) =>
      flexDirection ? flexDirection : "row"};
    justify-content: ${({ justifyContent }) =>
      justifyContent ? justifyContent : "center"};
    align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
  }
`;
