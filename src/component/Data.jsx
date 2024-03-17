import { FaLock } from "react-icons/fa";
import { BsShieldFillCheck } from "react-icons/bs";
import { RiFileReduceFill } from "react-icons/ri";
import { BsFillPinAngleFill } from "react-icons/bs";
import { RiUserSearchFill } from "react-icons/ri";
import faceAttribution from "../assets/faceAttribution.png";
import { GiHistogram } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import dottaStaff from "../assets/dottaStaff.jpeg"
import security from "../assets/security.jpeg"

export const DottaService = [
  {
    icon: <RiUserSearchFill />,
    title: "Faster customer onboarding ",
    description:
      "Ensure customers receive a quick and secure onboarding experience by verifying their identities online. ",
  },
  {
    icon: <BsShieldFillCheck />,
    title: "Create trust and integrity ",
    description:
      " build trust between your business and your customers with digital identity verification during know-your-customer (KYC) registration. ",
  },
  {
    icon: <RiFileReduceFill />,
    title: " Reduce operational cost",
    description:
      "Cut costs by stopping the use of manual in-house verification & validation methods.",
  },
  {
    icon: <BsFillPinAngleFill />,
    title: "Achieve Compliance the smart way ",
    description:
      "Protect yourself from regulatory fines with an automated system that validates customer identities and collects information accurately, reducing errors and saving time.",
  },
  {
    icon: <FaLock />,
    title: "Prevent account takeover ",
    description:
      " Ensure that customers using your products are authentic by fact-checking their identities based on real-time facial verification. ",
  },
  {
    icon: <FaLock />,
    title: " Deter & prevent fraudsters ",
    description:
      "prevent security breaches by stopping identity fraudsters from gaining access to your products using a system that detects identity spoofs early. ",
  },
];

export const useCasesData = [
  {
    title: "Fraud Detection",
    description:
      "Add a layer of security to your products by adding Dotta, as a countermeasure against identity fraud.",
    action: "Learn More",
    picture: faceAttribution,
  },
  {
    title: "Authentication",
    description:
      "Dotta can be used as an authentication method for customers to gain simple and secure access to your online services.",
    action: "Learn More",
    picture: faceAttribution,
  },
  {
    title: "Digital Onboarding",
    description:
      "Reduce physical queues at your doorstep, & introduce a convenient customer registration experience to your competitive advantage, by digitizing your customer onboarding process.",
    action: "Learn More",
    picture: faceAttribution,
  },
];

export const dottaMarchantPortal = [
  {
    icon: <GiHistogram/>,
    title: "Activity Monitoring ",
    description: "Track and generate reports for all your customer's activities, including endpoints accessed, tokens spent, user locations, and activity status. ",
  },
    {
    icon: <FaLocationDot/>,
    title: " IP Address Management",
    description: "Enjoy a high level of control by administering account access based on which IP addresses you want to have access to your account, and by blocking others that are undesired. ",
  },
  {
    icon:<IoDocumentText/> ,
    title: "Seamless Invoicing ",
    description: "Get your invoice delivered automatically via mail, based on the amount of Dotta tokens purchased at any given time period. ",
  },
  {
    icon: <BsArrowUpRightCircleFill/>,
    title: "Report Generation ",
    description: "Track verification activities during audits by generating detailed reports based on verification activities, and custom time period settings. ",
  },
]
export const dottaBlog = [
  {
    picture:dottaStaff ,
    date: " 2024-02-05",
    title: "Dotta Launches: Ready to Secure Your Digital World with Real-Time Identity Verification.",
    description: "Tired of fraud & slow verification? Dotta uses real-time biometrics to instantly verify users, boosting security & saving you time. Perfect for Fintech, e-commerce, & more! Get a free demo today! ",
    action: "Continue Reading"
  },
  {
    picture: security,
    date: "2023-10-12 ",
    title: "Authentication: The Bedrock of Information Security in the Digital Age.",
    description: "In this blog post, we will take a high-level look at authentication, the different types of authentication, and the benefits of biometric authentication methods like facial recognition. ",
    action: "Continue Reading "
  },
]