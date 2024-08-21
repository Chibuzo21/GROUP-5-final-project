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
      <button onClick={onClick} className="text-2xl font-bold ">
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
        text-[56px] leading-[67.77px] font-bold "
        >
          CONTACT US
        </div>
      </Section1>
      <FlexDiv>
        <ContainerWrapper>
          <Container width="50%" padding="20px">
            <Wrapper padding="40px" width="80%" bg>
              <H1>Get In Touch</H1>
              <P>
                Feel free to contact us and we'll get back
                <br /> to you as soon as we can.
              </P>
              <P>
                We're here to help you with any questions <br /> or support you
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
            <Wrapper
              width="80%"
              padding="20px"
              justifyContent="center"
              alignItems="center"
              bordeRadius="20px"
              background="#979a99"
              paddingBottom="90px"
            >
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
              <div className="flex items-center justify-end">
                <button className="w-[15vw] h-[8vh] text-white bg-green-700 rounded-md">
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
          <span className="text-[#206E30] text-[10vh] text-left h-[14vh]">
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
          <span className="text-[#206E30] text-[10vh] text-left h-[14vh]">
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
        <Container width="50%">
          <Wrapper width="80%" padding="0px">
            <p className="text-[#206E30] ">Got Questions?</p>
            <H1 width="80%">
              Frequently Asked <br /> Questions
            </H1>
            <p className="text-[#206E30] text-[16px]   ">
              Still have questions that aren't covered? visit our help desk
              today and get the answers you need.
            </p>
            <button className="bg-[#16A362] text-white h-[59px] w-[304px] rounded-lg">
              Contact our Help Desk
            </button>
          </Wrapper>
        </Container>

        <Container width="50%" padding="20px">
          <Wrapper width="80%">
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
