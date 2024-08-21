import styled from "styled-components";
import Frame from "../../assets/Frame.jpg";

export const FlexDiv = styled.div`
  width: 100%;
  height: auto;
`;

export const ContainerWrapper = styled.div`
  width: 100%;
  height: auto;
  padding-top:60px;
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1090px) {
    flex-direction: column;
  }
  @media (max-width: 600px) {
  }
`;


export const Section1 = styled.section`
  background-image: url(${(props) => (props.image ? props.image : Frame)});
  background-repeat:no-repeat;
  background-size:cover;
  width:100%;
  height:400px;
  background-color: red;
`;

export const Wrapper = styled.div`
  width: ${({ width }) => (width ? width : "100%")};
  /* height: auto; */
  /* align-items: center; */
  background-color: ${({ background }) =>
    background ? background : "transparent"};
  display: flex;
  flex-direction: column;
  padding-top: ${({ paddingTop }) => (paddingTop ? paddingTop : "0px")};
  padding: ${({ padding }) => (padding ? padding : "0px")};

  padding-bottom: ${({ paddingBottom }) =>
    paddingBottom ? paddingBottom : "0px"};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "")};
  justify-items: center;
  border-radius: ${({ bordeRadius }) => (bordeRadius ? bordeRadius : "0")};
`;

export const InputContainer = styled.div`
  width: 100%;
  margin-top: 0px;
  align-items: center;
  justify-content: center;
`;
export const P = styled.p`
  color: #000;
  word-spacing: 5px;
  margin-bottom: 30px;
`;

export const H1 = styled.h2`
  color: #000;
  font-size: 54px;


  width: ${({ width }) => (width ? width : "100%")};
  
`;

export const Input = styled.input`
  width: ${({ width }) => (width ? width : "100%")};
  height: 70px;
  color: #979a99;
  border: "1px solid ";

  background-color: ${({ background }) => (background ? background : "#fff")};
  padding: 8px;
  border-radius: 10px;
`;

export const Textarea = styled.textarea`
  width: ${({ width }) => (width ? width : "100%")};
  height: 200px;
  background-color: ${({ background }) =>
    background ? background : "#fff"};
  padding: 8px;
  /* padding: 5px; */
  border-radius: 10px;
`;

export const SquareBoxSection = styled.div`
  background: linear-gradient(#5dd9a0 0%, #42a96e 34.48%, #206e30 100%);

  width: 100%;
  padding-top: 100px;
  padding-bottom: 70px;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;

  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;

  @media (max-width: 1130px) {
    /* flex-direction:column */
  }
  @media (max-width: 840px) {
    flex-direction: column;
  }
`;

export const SquareBox = styled.div`
  width: 30%;
  padding: 20px;
  background-color: white;
  height: 300px;
  border-radius: 10px;
  margin-top: 30px;

  @media (max-width: 1130px) {
    width: 40%;
  }

  @media (max-width: 840px) {
    width: 45%;
  }
  @media (max-width: 750px) {
    width: 100%;
  }
`;

export const FAQitemComtainer = styled.div`
  width: 100%;
  padding: 20px;
`;

export const Line = styled.div`
  width: 100%;
`;
