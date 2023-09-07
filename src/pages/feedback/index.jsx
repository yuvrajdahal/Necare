import { motion } from "framer-motion";
import Footer from "../../layouts/Footer";
import BreadCrumb, {
  BreadCrumbItem,
  getBreads,
} from "../../components/BreadCrumb";
import Nav from "../../layouts/Nav";
import { element, navigationLinks } from "../../navigation/routes";
import SelectInput from "../../components/Input/FormikSelectInput";
import { Form, Formik } from "formik";
import FormikDatePicker from "../../components/Input/FormikDatePicker";
import FormikTextarea from "../../components/Input/FormikTextArea";
import FormikInput from "../../components/Input/FormikInput";

function FeedBack() {
  const breads = getBreads();
  const currentRoute = element[0].children.find((link) => {
    const routes = [...window.location.pathname.split("/")];
    const pathForCurrentPage = routes[routes.length - 1];

    const getFullRoute =
      link.name ===
      pathForCurrentPage.charAt(0).toUpperCase() + pathForCurrentPage.slice(1);
    return getFullRoute;
  });

  return (
    <>
      <Nav />
      <div className="z-10 relative w-full h-[400px] flex flex-col justify-center items-center">
        <div className="absoulte h-full w-full z-10">
          <img
            src="/assets/group.jpg"
            className="h-full w-full object-cover brightness-[60%]"
          />
        </div>
        <div className="absolute bg w-full h-full top-0 backdrop-blur-[1px] py-4 z-50 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-full w-full flex flex-col justify-center items-center gap-2"
          >
            <div className="text-4xl font-bold text-white uppercase text-center">
              Feedback or Complaints
            </div>
            <BreadCrumb>
              {breads.map((bread, _index) => {
                return (
                  <BreadCrumbItem
                    to={bread?.path ?? currentRoute.path}
                    key={bread?.path ?? 1}
                    className="text-white text-lg"
                  >
                    {bread?.name ?? currentRoute?.name}
                  </BreadCrumbItem>
                );
              })}
            </BreadCrumb>
          </motion.div>
        </div>
      </div>
      <div className="my-4 w-full container mx-auto font-poppins py-8 flex flex-col  items-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="text-3xl text-blue-10 font-bold uppercase"
        >
          Talk To Us
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="mt-4 text-justify md:text-center text-gray-700 px-4"
        >
          At Necare, we're committed to providing high-quality care services
          that meet your needs. Your feedback, including complaints, is valuable
          to us as we continuously improve our services. Thank you for choosing
          Necare, we look forward to serving you.
        </motion.div>
        <div className="w-full h-full flex flex-col jsutify-center items-center mt-4">
          <Formik
            initialValues={initialSchema}
            onSubmit={(val) => {
              console.log(val);
            }}
          >
            {(_) => {
              return (
                <div className="px-8 py-8 w-full md:w-[90%] bg-white ">
                  <Form className="h-full w-full ">
                    <div className="rounded grid md:grid-cols-3  pb-4 gap-2 md:gap-6 ">
                      <FormikInput
                        name="fullName"
                        labelName="Full Name"
                        placeholder="John Doe"
                      />
                      <FormikInput
                        name="email"
                        labelName="Email"
                        type="email"
                        placeholder="example@gmail.com"
                      />
                      <FormikInput
                        name="contact"
                        labelName="Contact No."
                        placeholder="(00) 0000-0000"
                      />

                      <SelectInput
                        name="feedbackType"
                        labelName="Feedback Type"
                        options={[
                          { label: "Complaints", value: "complaints" },
                          { label: "Compliment", value: "compliment" },
                          { label: "General", value: "generalFeedback" },
                        ]}
                      />
                      <FormikDatePicker name="date" labelName="Choose a Date" />

                      <SelectInput
                        name="clientType"
                        labelName="I am a"
                        options={[
                          { label: "Family Member", value: "member" },
                          { label: "Participant", value: "participant" },
                          { label: "Participant Representative", value: "rep" },
                          { label: "Staff Member", value: "staff" },
                          {
                            label: "Staff as participant",
                            value: "staffparticipate",
                          },
                          { label: "Other", value: "other" },
                        ]}
                      />
                    </div>
                    <div className="flex flex-col gap-4 mt-4">
                      <FormikTextarea
                        labelName={"Express your experience with Necare"}
                        name="message"
                        className={""}
                      />
                      <FormikTextarea
                        labelName={
                          "Please share your ideas and suggestions with us"
                        }
                        name="idea"
                        className={""}
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-10 text-white mt-4 px-2 py-2 md:w-[150px]"
                    >
                      Submit
                    </button>
                  </Form>
                </div>
              );
            }}
          </Formik>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default FeedBack;
const initialSchema = {
  fullName: "",
  email: "",
  contact: "",
  feedbackType: "",
  date: "",
  clientType: "",
  idea: "",
  message: "",
};
