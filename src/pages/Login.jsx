// pages/Login.jsx
import { SignedOut, SignedIn, SignInButton } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useUserContext from "../hooks/useUserContext";
import Icon from '../assets/icon.png'
import { motion } from 'framer-motion';
function Login() {
  const steps = [
    {
      id: 1,
      number: 1,
      title: "Enter Your Details",
      description: "Input your age, height, and weight, and pregnancy stage to help us understand your specific needs."
    },
    {
      id: 2,
      number: 2,
      title: "Click Generate",
      description: "Our AI analyzes your information to create a personalized Indian diet plan that meets your nutritional requirements."
    },
    {
      id: 3,
      number: 3,
      title: "Get Your Diet Plan",
      description: "Receive a comprehensive diet plan with traditional Indian recipes tailored to your pregnancy stage and preferences."
    }
  ];
  const navigate = useNavigate();
  const { user } = useUserContext()

  useEffect(() => {
    if (user) {
      navigate('/home')
    }
  }, [user]);

  return (
    <>
      <div className="bg-white overflow-x-hidden">
        <motion.div
          key={""}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >


          {/* navbar */}
          <div className="flex justify-between pt-3 ">

            <div className="px-3 flex md:justify-evenly gap-1 items-center">
              <div>
                <p className="text-xl font-semibold text-[#ff8e9e] cursor-pointer">Mealgorithm</p>
              </div>
              <div className="w-7 ">
                <img className="rounded" src={Icon} alt="Mealgorithm icon" />
              </div>
            </div>
            <div className="gap-4 md:gap-10 flex px-1 items-center mb-1">
              <a href="#how-it-works" className="cursor-pointer hover:text-[#ff8e9e]">How It Works</a>
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="bg-[#f7e1d7] p-2  rounded cursor-pointer hover:bg-[#ff8e9e]">Get Started</button>
                </SignInButton>
              </SignedOut>
            </div>
          </div>


          {/* Banner */}
          <div className="relative grid py-20 mt-0 md:mt-20 md:py-0 grid-cols-1 md:flex md:justify-between md:items-center ">
            {/* Blurred background */}
            <div className="absolute inset-0 bg-pink-200 rounded-full opacity-60 blur-3xl z-0"></div>

            {/* Text content */}
            <div className="relative z-10 px-3">
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold">
                Nourishing <span className="text-[#ff8e9e]">Two <br /> Lives</span> With One Diet
              </h1>
            </div>
            <div className="w-[90%] px-3 block md:hidden">
              <h2 className="font-light text-2xl text-gray-400">
                Nourishing Two Lives With One Diet
                Personalized Indian diet plans for pregnant women, tailored to your unique needs and preferences.</h2>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="w-[60%] px-3">
              <h2 className="font-light text-2xl text-gray-400">
                Nourishing Two Lives With One Diet
                Personalized Indian diet plans for pregnant women, tailored to your unique needs and preferences.</h2>
            </div>
          </div>
          <div className="py-0 md:py-5  md:mt-5 ml-0 md:ml-40 w-100   flex justify-evenly items-center gap-5 text-white">
            <div className="bg-[#ff8e9e]  rounded-full cursor-pointer hover:bg-[#ed8e9b] p-3 px-2  duration-150 transition-all">
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="cursor-pointer text-lg font-semibold ">Generate My Diet Plan</button>
                </SignInButton>
              </SignedOut>
            </div>
            <div className="bg-[#ff8e9e] rounded-full cursor-pointer hover:bg-[#ed8e9b] p-3 px-5  duration-150 transition-all">
              <a href="#how-it-works" className="cursor-pointer text-lg  font-semibold">Learn More</a>
            </div>
          </div>
          {/* Banner end */}

          <section id="how-it-works" className="bg-gradient-to-b from-white to-[#fdece4]">
            <div className="py-30 md:py-50">
              <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">How It Works</h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Get your personalized pregnancy diet plan in three simple steps
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {steps.map((step) => (
                    <motion.div
                      key={step.id} // assuming step.id is unique
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: step.id * 0.15,
                        ease: [0.22, 1, 0.36, 1], // easeOutBack for a smoother pop
                      }}
                    >
                      <div key={step.number} className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
                        <div className="w-12 h-12 bg-[#ff8e9e] text-white rounded-full flex items-center justify-center mb-6 text-xl font-bold">
                          {step.number}
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            <h5 className="flex justify-center items-end py-4">© 2025 Abhishek. All rights reserved.</h5>
          </section>
        </motion.div>
      </div>
    </>
  );
}

export default Login;
