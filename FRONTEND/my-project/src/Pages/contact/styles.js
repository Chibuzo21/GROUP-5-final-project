import styled from "styled-components";
import Frame from "../../assets/Frame.jpg";

export const FlexDiv = styled.div`
  width: 100%;
  height: auto;
`;

export const ContainerWrapper = styled.div`
  width: 100%;
  height: auto;
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1090px) {
    flex-direction: column;
  }
  @media (max-width: 600px) {
  }
`;

export const Section1 = styled.section`
  background-image: url(${(props) => (props.image ? props.image : Frame)});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 400px;
  background-color: red;
`;

export const Wrapper = styled.div`
  width: ${({ width }) => (width ? width : "100%")};
  /* height: auto; */

  background-color: ${({ background }) =>
    background ? background : "transparent"};
  display: flex;

  @media (max-width: 1090px) {
    width: 100%;
    align-items: center;
    justify-content: center;
  }
  flex-direction: column;
  padding: ${({ padding }) => (padding ? padding : "0")};
  /* align-items: center; */
  /* justify-content: space-between; */
`;

export const InputContainer = styled.div`
  width: 100%;
  margin-top: 20px;
`;
export const P = styled.p`
  color: #000;
`;

export const H1 = styled.h1`
  color: #000;
`;

export const Input = styled.input`
  width: ${({ width }) => (width ? width : "100%")};
  height: 70px;
  border: "1px solid ";

  background-color: ${({ background }) =>
    background ? background : "#d7dadc"};
  padding: 5px;
  border-radius: 10px;
`;

export const Textarea = styled.textarea`
  width: ${({ width }) => (width ? width : "100%")};
  height: 200px;
  background-color: ${({ background }) =>
    background ? background : "#d7dadc"};
  padding: 5px;
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
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const SquareBox = styled.div`
  width: 30%;
  padding: 20px;
  background-color: white;
  height: 330px;
  border-radius: 10px;
  margin-top: 30px;

  @media (max-width: 1130px) {
    width: 40%;
  }

  @media (max-width: 840px) {
    width: 45%;
  }
  @media (max-width: 750px) {
    width: 77%;
    padding: 10px;
    height: 50%;
  }
`;

export const FAQitemComtainer = styled.div`
  width: 100%;
  padding: 20px;
`;

export const Line = styled.div`
  width: 100%;
`;
