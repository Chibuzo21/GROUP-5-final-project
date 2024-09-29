import { MdOutlineMailOutline } from "react-icons/md";
import Frame from "../../assets/Frame.jpg";
import { FiPhone } from "react-icons/fi";
import { FaqData } from "../FaqData";
import { VscAdd } from "react-icons/vsc";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import {
  ContainerWrapper,
  FAQitemComtainer,
  FlexDiv,
  H1,
  Input,
  InputContainer,
  Line,
  P,
  Section1,
  SquareBox,
  SquareBoxSection,
  Textarea,
  Wrapper,
} from "./styles";
import { Container } from "../../Components/container";

const FAQitem = ({ isOpen, faq, onClick }) => (
  <FAQitemComtainer>
    <div className="flex w-full items-center justify-between h-[10vh]">
      <p className="font-semibold text-lg  text-black">{faq.question}</p>
      <button onClick={onClick} className="text-xl text-black font-bold ">
        {isOpen ? <RxCross1 /> : <VscAdd />}
      </button>
    </div>
    {isOpen && <div className="  text-black leading-[32px]">{faq.answer}</div>}
    <Line className="border-t border-black w-[48vw] h-[6vh]"></Line>
  </FAQitemComtainer>
);

function Contact() {
  const [openIndex, setOpenindex] = useState(null);
  const handleToggle = (index) => {
    setOpenindex(openIndex === index ? null : index);
  };
  return (
    <main className="overflow-x-hidden">
      <Section1
      // className="h-[65vh] w-screen"
      // style={{ backgroundImage: `url(${Frame})` }}
      >
        <div
          className="text-white h-full w-full flex items-center justify-center
       md:text-[66px] font-bold text-5xl "
        >
          CONTACT US
        </div>
      </Section1>
      <FlexDiv>
        <ContainerWrapper>
          <Container width="45%" padding="20px">
            <Wrapper padding="10px" width="60%" bg>
              <H1 className="lg:text-5xl text-3xl font-semibold mb-2 ">
                Get In Touch
              </H1>
              <P className="text-md md:text-lg font-medium mb-2 text-center leading-6 ">
                Feel free to contact us and we'll get back to you as soon as we
                can. We're here to help you with any questions or support you
                need.
              </P>
            </Wrapper>
          </Container>

          <Container
            width="50%"
            // background="blue"
            md1090width="100%"
            flexDirection="column"
          >
            <Wrapper width="100%" padding="20px">
              {/* <div className="h-full w flex items-center justify-center"> */}
              <InputContainer>
                <P className="font-bold text-2xl">Name</P>
                <Input type="text" placeholder="Enter your name" />
              </InputContainer>

              <InputContainer>
                <P className="font-bold text-2xl">Email Address</P>

                <Input type="text" placeholder="Enter your email" />
              </InputContainer>

              <InputContainer>
                <P className="font-bold text-2xl">Leave a Message</P>

                <Textarea type="text" placeholder="Message" />
              </InputContainer>
              <div className="flex items-center justify-center">
                <button className="py-5 px-8 text-xl w-[60vw] xl:w-[60vw] text-white bg-green-700 rounded-md">
                  Send Message
                </button>
              </div>
            </Wrapper>
          </Container>
        </ContainerWrapper>
      </FlexDiv>
      {/* </section> */}

      <SquareBoxSection>
        <SquareBox>
          <span className="text-[#206E30] md:text-[10vh] text-[6vh] text-left h-[14vh]">
            <MdOutlineMailOutline />
          </span>
          <p className="text-md font-bold h-[6vh] ">Email:</p>
          <div className="grid gap-2 font-normal">
            <p>General inquiries: info@CareKonect.com</p>
            <p>Customer Support: support@CareKonect.com</p>
            <p>Patnerships: patnerships@CareKonect.com</p>
            {/* </div> */}
          </div>
        </SquareBox>

        <SquareBox>
          <span className="text-[#206E30] md:text-[10vh] text-[6vh] text-left h-[14vh]">
            <FiPhone />
          </span>
          <p className="text-md font-bold h-[6vh] ">Phone:</p>
          <div className="grid gap-2 font-normal">
            <p>Main Line: 1-800-123-4567</p>
            <p>Customer Support: 1-800-765-4321</p>
          </div>
        </SquareBox>
      </SquareBoxSection>

      <ContainerWrapper>
        <Container width="49%" padding="20px">
          <Wrapper width="70%" padding="20px">
            <p className="text-[#206E30] mb-2 ">Got Questions?</p>
            <p className="md:text-[48px] text-[30px] sm:text-[40px] text-[#343A40] mb-2  font-bold">
              Frequently Asked Questions
            </p>
            <p className="text-[#206E30] text-[16px] mb-4   ">
              Still have questions that aren't covered? visit our help desk
              today and get the answers you need.
            </p>
            <button className="bg-[#16A362] text-white h-[59px] w-[384px] rounded-lg">
              Contact our Help Desk
            </button>
          </Wrapper>
        </Container>

        <Container width="50%" padding="20px">
          <Wrapper width="100%">
            {FaqData.map((faq, index) => (
              <FAQitem
                key={index}
                faq={faq}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}
          </Wrapper>
        </Container>
      </ContainerWrapper>
    </main>
  );
}
export default Contact;
