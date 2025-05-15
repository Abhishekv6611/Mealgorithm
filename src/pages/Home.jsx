import  { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import GenerateBox from '../components/GenerateBox';
import InputSection from '../components/InputSection';
import GradientButton from '../components/GradientButton';
import openai from "../openapi";
import useUserContext from '../hooks/useUserContext';
import { useNavigate } from 'react-router-dom';

function Home() {
  const { user } = useUserContext()
  const navigate =useNavigate()
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false)
  const [inputs, setInputs] = useState({
    height: "",
    weight: "",
    age: ""
  })


  const handleGenerate = async () => {
    console.log(inputs)
    setLoading(true)
    try {
      const response = await openai.chat.completions.create({
        model: "openai/gpt-4o",
        messages: [
          {
            role: "user",
            content:`Create an Indian pregnancy diet plan for a ${inputs.age}-year-old woman (${inputs.height} cm, ${inputs.weight} kg) and organize it into three tables (Breakfast, Lunch, Dinner) with just food item names listed under each.and also mention the total approximate calories for each meal at the bottom of the table`
          }

        ],
        temperature: 0.7,
        max_tokens: 1000,
      });

      setOutput(response.choices[0].message.content);
     setInputs({ height: "", weight: "", age: "" });

    } catch (error) {
      console.error(" Error generating response:", error);
      setOutput("Something went wrong.");
    } finally {
      setLoading(false)
     setInputs({ height: "", weight: "", age: "" });
    }
  };

    useEffect(() => {
      if (!user) {
        navigate('/')
      }
    }, [user]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <div className="flex flex-col items-center justify-center px-4  py-15 md:py-7  sm:px-6 md:px-12 lg:px-24 ">
        <GenerateBox loading={loading} output={output} />
        <div onClick={handleGenerate}>
          <GradientButton loading={loading} />
        </div>

        <InputSection inputs={inputs}  setInputs={setInputs} />
      </div>
    </div>
  );
}

export default Home;
