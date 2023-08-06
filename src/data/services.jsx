import { MdAdminPanelSettings, MdOutlineCleanHands } from "react-icons/md";
import { RiNurseFill, Ri24HoursFill } from "react-icons/ri";
import { TiGroup } from "react-icons/ti";
import { GiHospitalCross } from "react-icons/gi";
import { TbNurse } from "react-icons/tb";
import { AiFillMedicineBox } from "react-icons/ai";
import { FaHandHoldingMedical } from "react-icons/fa";

export const images = [
  "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW4lMjBlbXBvd2VybWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1633466152331-257b19550cbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHdvbWVuJTIwZW1wb3dlcm1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://plus.unsplash.com/premium_photo-1664302492742-ceb42af3060a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWVuJTIwZW1wb3dlcm1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1569937703691-0f9b8cf21a25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHdvbWVuJTIwZW1wb3dlcm1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  //
  "https://images.unsplash.com/photo-1470277760377-4cf074a2f7bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW4lMjBlbXBvd2VybWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1585842378054-ee2e52f94ba2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHdvbWVuJTIwZW1wb3dlcm1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1637419450536-378d5457abb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWVuJTIwZW1wb3dlcm1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",

  //
  "https://images.unsplash.com/photo-1576765607924-3f7b8410a787?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWVuJTIwZW1wb3dlcm1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",

  "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWVuJTIwZW1wb3dlcm1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
];

export const listOfServicesv2 = [
  {
    icon: TbNurse,
    name: "Nursing Care",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW4lMjBlbXBvd2VybWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",

    desc: () => (
      <>
        <div>
          Our nursing care includes providing care and support for adaptation,
          knowledge about diagnosis, its consequences and preventive strategies
          which includes:
        </div>
        <div>
          <li>Complex bowel management</li>
          <li>Tracheostomy care</li>
          <li>Simple to complex wound care</li>
          <li>Medication management and support</li>
          <li>Enteral feeding and management</li>
          <li>Urinary catheter management</li>
        </div>
      </>
    ),
  },
  {
    icon: Ri24HoursFill,
    name: "Support Independent Living",
    image:
      "https://images.unsplash.com/photo-1633466152331-257b19550cbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHdvbWVuJTIwZW1wb3dlcm1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",

    desc: () => (
      <>
        We help you live in home by providing support you need. It includes help
        or supervision on daily tasks like personal care or cooking meals. We
        also provide you 24/7 support including overnight supervision.
      </>
    ),
  },
  {
    icon: GiHospitalCross,
    name: "Post Hospital care",
    image:
      "https://plus.unsplash.com/premium_photo-1664302492742-ceb42af3060a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWVuJTIwZW1wb3dlcm1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",

    desc: () => (
      <>
        Following a hospitalisation, transition care aids in your recovery. It
        offers short-term, specialised care and support to assist you in
        regaining your functional freedom and confidence faster and prevent the
        need for longer-term care and support services.
      </>
    ),
  },
  {
    icon: TiGroup,
    name: "Social and community participation",
    image:
      "https://images.unsplash.com/photo-1569937703691-0f9b8cf21a25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHdvbWVuJTIwZW1wb3dlcm1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",

    desc: () => (
      <>
        We can connect you with community centres and social groups so you can
        engage in social activities. It gives you a chance to express yourself
        and make friends and connections outside of your house.
      </>
    ),
  },
  {
    icon: MdOutlineCleanHands,
    name: "Personal care plus day and life style options",
    image:
      "https://images.unsplash.com/photo-1470277760377-4cf074a2f7bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW4lMjBlbXBvd2VybWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",

    desc: () => (
      <>
        The complexity of handling home care is reduced by our skilled team. We
        provide you with assistance with personal care, companionship, domestic
        duties, transportation, gardening, maintaining an active lifestyle,
        cleaning and household duties, cooking and food preparation, and a
        variety of other things.
      </>
    ),
  },
  {
    icon: RiNurseFill,
    name: "Community nursing and care",
    image:
      "https://images.unsplash.com/photo-1585842378054-ee2e52f94ba2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHdvbWVuJTIwZW1wb3dlcm1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",

    desc: () => (
      <>
        As a community nursing care provider, Necare provides you with a
        variety of services including community health nursing care after a
        hospital stay, which can include help with: Wound care, Taking
        medication, Catheter Care, Hygiene, General nursing care like showering
        and dressing and many other services.
      </>
    ),
  },
  {
    icon: AiFillMedicineBox,
    name: "Medication management",
    image:
      "https://images.unsplash.com/photo-1637419450536-378d5457abb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWVuJTIwZW1wb3dlcm1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",

    desc: () => (
      <>
        We ensure compliance by working with you to provide medication quality
        management, which includes a balance of gentle prompting and medication
        packaging in the form of a Webster pack or sachet. If you have any
        concerns about your medications, we can always help by setting up a
        medication review at your neighbourhood pharmacy to guarantee the best
        results.
      </>
    ),
  },
  {
    icon: FaHandHoldingMedical,
    name: "Palliative care",
    image:
      "https://images.unsplash.com/photo-1576765607924-3f7b8410a787?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWVuJTIwZW1wb3dlcm1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    desc: () => (
      <>
        We are dedicated to offering personalised end-of- life treatment. When
        the time comes, our nurses and care staff can collaborate with your
        general practitioner and palliative care professionals to give you the
        support and care you require in the security of your own home.
      </>
    ),
  },
  {
    icon: MdAdminPanelSettings,
    name: "Administration",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWVuJTIwZW1wb3dlcm1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    desc: () => (
      <>
        Our support staff can help you with a variety of administrative tasks,
        such as planning and scheduling appointments, drafting and signing
        essential paperwork, paying bills, organising social events, and guiding
        you in the use of technology in your home.
      </>
    ),
  },
];
export const listOfServices = [
  {
    icon: TbNurse,
    name: "Nursing Care",
    desc: `Our nursing care includes providing care and support for adaptation, knowledge about diagnosis, its consequences and preventive strategies which includes Tracheostomy care etc.
`,
  },
  {
    icon: Ri24HoursFill,
    name: "Support Independent Living",
    desc: "We help you live in home by providing support you need. It includes help or supervision on daily tasks like personal care or cooking meals. We also provide you 24/7 support including overnight supervision.",
  },
  {
    icon: GiHospitalCross,
    name: "Post Hospital care",
    desc: "Following a hospitalisation, transition care aids in your recovery. It offers short-term, specialised care and support to assist you in regaining your functional freedom and confidence faster and prevent the need for longer-term care.",
  },
  {
    icon: TiGroup,
    name: "Social and community participation",
    desc: "We can connect you with community centres and social groups so you can engage in social activities. It gives you a chance to express yourself and make friends and connections outside of your house.",
  },
  {
    icon: MdOutlineCleanHands,
    name: "Personal care plus day and life style options",
    desc: "The complexity of handling home care is reduced by our skilled team. We provide you with assistance with personal care, companionship, domestic duties, transportation, gardening etc.",
  },
  {
    icon: RiNurseFill,
    name: "Community nursing and care",
    desc: "As a community nursing care provider, Necare provides you with a variety of services including community health nursing care after a hospital stay, which can include help with: wound care, taking medication etc.",
  },
  {
    icon: AiFillMedicineBox,
    name: "Medication management",
    desc: "We ensure compliance by working with you to provide medication quality management, which includes a balance of gentle prompting and medication packaging in the form of a Webster pack or sachet. If you have any concerns about your medications, we can always help by setting up a medication review at your neighbourhood pharmacy to guarantee the best results.",
  },
  {
    icon: FaHandHoldingMedical,
    name: "Palliative care",
    desc: "We are dedicated to offering personalised end-of-life treatment. When the time comes, our nurses and care staff can collaborate with your general practitioner and palliative care professionals to give you the support and care you require in the security of your own home.",
  },
  {
    icon: MdAdminPanelSettings,
    name: "Administration",
    desc: "Our support staff can help you with a variety of administrative tasks, such as planning and scheduling appointments, drafting and signing essential paperwork, paying bills, organising social events, and guiding you in the use of technology in your home.",
  },
];
